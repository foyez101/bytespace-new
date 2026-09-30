import type { Metadata } from "next";
import Link from "next/link";
import { AuthForm } from "@/components/auth/AuthForm";
import { AuthLayout } from "@/components/auth/AuthLayout";

export const metadata: Metadata = { title: "Create an Account" };

export default function RegisterPage() {
  return (
    <AuthLayout
      tagline="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
      eyebrow="Create an Account"
      title={
        <>
          Welcome to <br />
          ByteSpace
        </>
      }
      footer={
        <>
          Already have an account?{" "}
          <Link href="/login" className="text-brand hover:underline">
            Login
          </Link>
        </>
      }
    >
      <AuthForm mode="register" />
    </AuthLayout>
  );
}
