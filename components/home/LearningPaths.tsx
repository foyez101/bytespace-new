import type { ComponentType, SVGProps } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  BusinessIcon,
  CameraIcon,
  DesignIcon,
  DevelopmentIcon,
  LaptopIcon,
  MarketingIcon,
} from "@/components/ui/icons";

const paths: { label: string; Icon: ComponentType<SVGProps<SVGSVGElement>> }[] = [
  { label: "Design", Icon: DesignIcon },
  { label: "Development", Icon: DevelopmentIcon },
  { label: "IT & Software", Icon: LaptopIcon },
  { label: "Business", Icon: BusinessIcon },
  { label: "Marketing", Icon: MarketingIcon },
  { label: "Photography", Icon: CameraIcon },
];

export function LearningPaths() {
  return (
    <section id="learning-paths" className="scroll-mt-6 pb-20 lg:pb-[120px]">
      <Container>
        <SectionHeading
          title="Explore Diverse Learning Paths at Bytespace"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-[70px] lg:grid-cols-6 lg:gap-[41px]">
          {paths.map(({ label, Icon }) => (
            <li key={label}>
              <a
                href="#courses"
                className="group flex aspect-square flex-col items-center justify-center rounded-[20px] border border-[#d0d0d0] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-[0_18px_40px_-22px_rgb(0_59_226/0.45)]"
              >
                <span className="grid size-[60px] place-items-center rounded-full bg-lime text-ink transition-transform duration-300 group-hover:scale-110">
                  <Icon className="size-7" />
                </span>
                <span className="mt-4 text-lg text-ink-soft lg:text-xl">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
