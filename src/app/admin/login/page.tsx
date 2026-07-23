"use client";

import { useActionState } from "react";
import { loginAction } from "@/app/actions/auth";
import { Lock } from "lucide-react";

export default function AdminLoginPage() {
  const [state, action, pending] = useActionState(loginAction, undefined);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="glass-card-static p-8 w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
            <Lock size={26} className="text-accent" />
          </div>
          <h1
            className="text-2xl font-bold mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Admin Login
          </h1>
          <p className="text-muted text-sm">
            Sign in to manage iInfynite
          </p>
        </div>

        <form action={action} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="username@example.com"
              className="input-glass"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="input-glass"
            />
          </div>

          {state?.error && (
            <div className="text-danger text-sm bg-danger/10 px-4 py-3 rounded-xl">
              {state.error}
            </div>
          )}

          <button
            type="submit"
            disabled={pending}
            className="btn-primary w-full py-4 disabled:opacity-50"
          >
            {pending ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
