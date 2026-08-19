import { EventEmitter } from "events";

// Global singleton so it persists across hot-reloads in dev
const globalForEvents = global as unknown as { eventBus: EventEmitter };
export const eventBus = globalForEvents.eventBus || new EventEmitter();
if (process.env.NODE_ENV !== "production") globalForEvents.eventBus = eventBus;
