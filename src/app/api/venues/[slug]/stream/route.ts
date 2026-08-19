import { NextRequest } from "next/server";
import { eventBus } from "@/lib/events";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  // Resolve venue
  const venue = await prisma.venue.findUnique({
    where: { slug },
  });

  if (!venue) {
    return new Response("Venue not found", { status: 404 });
  }

  const stream = new ReadableStream({
    start(controller) {
      // Send an initial ping
      controller.enqueue(new TextEncoder().encode(`data: ${JSON.stringify({ type: "ping" })}\n\n`));

      const menuEventName = `menu-update:${venue.id}`;
      const orderEventName = `order-update:${venue.id}`;
      const waiterEventName = `waiter-call:${venue.id}`;

      const handleUpdate = (data: any) => {
        const payload = `data: ${JSON.stringify(data)}\n\n`;
        controller.enqueue(new TextEncoder().encode(payload));
      };

      eventBus.on(menuEventName, handleUpdate);
      eventBus.on(orderEventName, handleUpdate);
      eventBus.on(waiterEventName, handleUpdate);

      // Keep connection alive with periodic pings
      const intervalId = setInterval(() => {
        controller.enqueue(new TextEncoder().encode(`: keepalive\n\n`));
      }, 30000);

      request.signal.addEventListener("abort", () => {
        clearInterval(intervalId);
        eventBus.off(menuEventName, handleUpdate);
        eventBus.off(orderEventName, handleUpdate);
        eventBus.off(waiterEventName, handleUpdate);
        controller.close();
      });
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}
