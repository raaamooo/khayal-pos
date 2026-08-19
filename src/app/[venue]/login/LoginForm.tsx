"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import styles from "./login.module.css";

export function LoginForm({
  venueId,
  venueSlug,
}: {
  venueId: string;
  venueSlug: string;
}) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await signIn("credentials", {
        email,
        password,
        venueId,
        redirect: false,
      });

      if (res?.error) {
        setError("Invalid email or password");
        setIsLoading(false);
      } else {
        router.push(`/${venueSlug}`);
        router.refresh(); // Force a refresh to load the session everywhere
      }
    } catch {
      setError("An unexpected error occurred");
      setIsLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {error && <div className={styles.error}>{error}</div>}
      
      <Input
        id="email"
        name="email"
        type="email"
        label="Email Address"
        required
        placeholder="staff@example.com"
      />

      <Input
        id="password"
        name="password"
        type="password"
        label="Password"
        required
        placeholder="••••••••"
      />

      <Button type="submit" isLoading={isLoading} fullWidth className={styles.submitButton}>
        Sign in
      </Button>
    </form>
  );
}
