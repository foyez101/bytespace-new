import type { Metadata } from "next";
import Link from "next/link";
import { AuthForm } from "@/components/auth/AuthForm";
import { AuthLayout } from "@/components/auth/AuthLayout";

export const metadata: Metadata = { title: "Sign In" };

export default function LoginPage() {
  return (
    <AuthLayout
      tagline="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
      eyebrow="Sign In"
      title="Welcome Back"
      footer={
        <>
          New user?{" "}
          <Link href="/register" className="text-brand hover:underline">
            Create an account
          </Link>
        </>
      }
    >
      <AuthForm mode="login" />
    </AuthLayout>
  );
}
