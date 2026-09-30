import type { ReactNode } from "react";
import { HappyStudentsCard } from "@/components/cards/FloatingCards";
import { CourseCard } from "@/components/course/CourseCard";
import { Logo } from "@/components/ui/Logo";
import { Shape } from "@/components/ui/Shape";
import { Placed, Stage } from "@/components/ui/Stage";
import { courses } from "@/data/courses";

type AuthLayoutProps = {
  /** Left-column heading, e.g. "Sign in with ease". */
  tagline: string;
  /** Left-column paragraph. */
  description: string;
  /** Small blue label above the form title. */
  eyebrow: string;
  /** Large form title. */
  title: ReactNode;
  children: ReactNode;
  footer: ReactNode;
};

/** Shared split layout for the Login and Register screens. */
export function AuthLayout({ tagline, description, eyebrow, title, children, footer }: AuthLayoutProps) {
  const [digitalAsset, bigData] = [courses[1], courses[2]];

  return (
    <main className="min-h-screen bg-blueprint">
      <div className="mx-auto grid w-full max-w-[1232px] gap-10 px-4 pt-8 pb-12 sm:px-6 lg:grid-cols-[1fr_578px] lg:gap-16 lg:pt-[35px] lg:pb-[80px]">
        <div>
          <Logo markOnly />
          <h1 className="mt-10 font-display text-[22px] font-semibold text-white lg:mt-[62px]">{tagline}</h1>
          <p className="mt-4 max-w-[470px] text-base leading-[1.6] font-light text-white lg:text-lg">{description}</p>

          <Stage width={500} height={570} className="mt-[70px] hidden max-w-[500px] lg:block">
            <Placed x={2} y={95} w={372}>
              <CourseCard course={digitalAsset} tone="auth" />
            </Placed>
            <Placed x={112} y={6} w={372}>
              <CourseCard course={bigData} tone="auth" className="shadow-[0_20px_50px_-25px_rgb(0_0_0/0.45)]" />
            </Placed>
            <Shape name="lime-torus" x={51} y={46} w={105} />
            <Placed x={226} y={439}>
              <HappyStudentsCard tone="lime" />
            </Placed>
            <Shape name="white-spiral-sm" x={382} y={355} />
            <Shape name="lime-cone" x={0} y={424} w={126} />
          </Stage>
        </div>

        <section className="self-start rounded-[28px] bg-white px-6 py-10 sm:px-[63px] lg:mt-[85px] lg:min-h-[784px] lg:pt-[68px]">
          <div className="flex h-full flex-col">
            <p className="text-lg text-brand">{eyebrow}</p>
            <h2 className="mt-1 font-display text-[36px] leading-[1.15] font-semibold tracking-[-0.01em] text-ink-soft sm:text-[48px]">
              {title}
            </h2>
            <div className="mt-10 lg:mt-12">{children}</div>
            <p className="mt-12 text-center text-base text-muted lg:mt-auto lg:pt-12">{footer}</p>
          </div>
        </section>
      </div>
    </main>
  );
}
