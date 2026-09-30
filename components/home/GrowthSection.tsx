import Image from "next/image";
import { HappyStudentsCard, LearningProgressCard, RevenueCard } from "@/components/cards/FloatingCards";
import { Container } from "@/components/ui/Container";
import { Shape } from "@/components/ui/Shape";
import { Placed, Stage } from "@/components/ui/Stage";
import { CheckCircleIcon } from "@/components/ui/icons";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const features = ["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"];

const headingClass =
  "font-display text-[30px] leading-[1.2] font-semibold tracking-[-0.01em] text-ink-soft sm:text-[36px] lg:text-[44px]";

export function GrowthSection() {
  return (
    <section id="creators" className="bg-glow-growth scroll-mt-6 overflow-hidden py-20 lg:pt-[120px] lg:pb-[100px]">
      <Container>
        {/* Row 1: professional growth */}
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_605px] lg:gap-6">
          <div className="lg:pt-10">
            <h2 className={headingClass}>
              Your Path to Professional <br className="hidden xl:block" />
              Growth Starts Here!
            </h2>
            <p className="mt-8 max-w-[480px] text-base leading-[1.8] text-ink-soft/80 lg:mt-[50px] lg:text-lg">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career
              journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new
              career path entirely, we have the resources you need.
            </p>
            <dl className="mt-10 flex gap-14 lg:mt-[50px]">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col-reverse">
                  <dt className="mt-1 text-lg text-ink-soft">{s.label}</dt>
                  <dd className="font-display text-[34px] leading-none text-brand">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <Stage width={605} height={605} className="mx-auto max-w-[605px]">
            {/* Artwork (course card, student and 3D spiral) exported from the design as one layer */}
            <Image
              src="/images/people/growth-collage.png"
              alt="Student taking the Learn Figma from Basic course"
              width={605}
              height={605}
              className="absolute inset-0 size-full"
            />
            <Placed x={363} y={230}>
              <LearningProgressCard />
            </Placed>
          </Stage>
        </div>

        {/* Row 2: create & manage */}
        <div className="mt-16 grid items-center gap-12 lg:mt-[90px] lg:grid-cols-[600px_1fr] lg:gap-[20px]">
          <Stage width={600} height={600} className="order-2 mx-auto max-w-[600px] lg:order-1">
            <Image
              src="/images/people/creator-girl.png"
              alt="Course creator"
              width={580}
              height={590}
              className="absolute top-0 left-0 h-[590px] w-[580px]"
            />
            <Shape name="lime-spiral-b" x={335} y={130} w={150} className="rotate-[8deg]" />
            <Placed x={1} y={28} w={224}>
              <RevenueCard label="Total Revenue" period="July 1-28" amount="$120.29" progress={50} />
            </Placed>
            <Placed x={1} y={178} w={134}>
              <RevenueCard label="Year to Date" period="2023" amount="$1,200.38" badge="+12$" />
            </Placed>
            <Placed x={284} y={397}>
              <HappyStudentsCard />
            </Placed>
          </Stage>

          <div className="order-1 lg:order-2">
            <h2 className={headingClass}>
              Create &amp; Manage <br className="hidden sm:block" />
              Courses Easily.
            </h2>
            <p className="mt-8 max-w-[560px] text-base leading-[1.8] text-ink-soft/80 lg:mt-[48px] lg:text-lg">
              <strong className="font-semibold text-ink">ByteSpace</strong> supports individuals or entities in the
              creation, publication, and administration of educational courses.
            </p>
            <ul className="mt-8 flex flex-col gap-4 lg:mt-[40px]">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-lg text-ink-soft">
                  <CheckCircleIcon className="size-[22px] text-brand" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
