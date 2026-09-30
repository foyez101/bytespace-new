import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { CategoryStatCard, HappyStudentsCard, LearningProgressCard } from "@/components/cards/FloatingCards";
import { Container } from "@/components/ui/Container";
import { Shape } from "@/components/ui/Shape";
import { Placed, Stage } from "@/components/ui/Stage";
import { SearchIcon } from "@/components/ui/icons";

/** Design frame: 1440 × 1022. Text sits in normal flow; artwork is a scaled Stage pinned to the bottom. */
const VISUAL_HEIGHT = 482; // height of the person/circle band under the search bar

export function Hero({ query }: { query?: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-blueprint">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10" aria-hidden>
        <Stage width={1440} height={1022} fitMobile={820}>
          <div className="absolute top-[585px] left-[143px] size-[1154px] rounded-full bg-lime-deep" />

          <Shape name="lime-spiral-a" x={1} y={285} className="max-md:hidden" />
          <Shape name="white-spiral-sm" x={215} y={506} />
          <Shape name="white-torus" x={67} y={741} />
          <Shape name="lime-cylinder" x={1275} y={255} className="max-md:hidden" />
          <Shape name="white-pyramid" x={1131} y={485} />
          <Shape name="white-spiral-lg" x={1196} y={710} />

          <Image
            src="/images/people/student-guy.png"
            alt=""
            width={640}
            height={482}
            preload
            loading="eager"
            className="absolute top-[540px] left-[440px] h-[482px] w-[640px]"
          />

          <Placed x={404} y={639} className="max-sm:hidden">
            <CategoryStatCard />
          </Placed>
          <Placed x={842} y={651} className="max-sm:hidden">
            <LearningProgressCard />
          </Placed>
          <Placed x={328} y={837} className="max-sm:hidden">
            <HappyStudentsCard />
          </Placed>
        </Stage>
      </div>

      <Navbar />

      <Container className="relative pt-6 text-center lg:pt-[60px]">
        <h1 className="mx-auto max-w-[900px] font-display text-[34px] leading-[1.2] font-semibold tracking-[-0.015em] text-white sm:text-5xl lg:text-[72px]">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="mx-auto mt-5 max-w-[860px] text-base font-light text-white sm:text-lg lg:mt-[26px]">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        <form
          action="/#courses"
          method="get"
          role="search"
          className="mx-auto mt-8 flex max-w-[580px] items-center gap-3 sm:gap-[17px] lg:mt-[58px]"
        >
          <label className="relative flex-1">
            <span className="sr-only">Search courses</span>
            <SearchIcon className="pointer-events-none absolute top-1/2 left-6 size-5 -translate-y-1/2 text-[#6d6d6d]" />
            <input
              type="search"
              name="q"
              defaultValue={query}
              placeholder="Course, topic, creator"
              className="h-[52px] w-full rounded-full bg-white pr-5 pl-14 text-base text-ink outline-none placeholder:text-[#8a8a8a] focus-visible:ring-4 focus-visible:ring-lime/60 sm:text-lg"
            />
          </label>
          <button
            type="submit"
            className="h-[46px] shrink-0 rounded-full bg-lime px-6 text-lg text-ink transition-colors hover:bg-[#c4ec0c]"
          >
            Search
          </button>
        </form>
      </Container>

      {/* Reserves the space of the artwork band below the search bar */}
      <Stage width={1440} height={VISUAL_HEIGHT} fitMobile={820} className="mt-[26px]" />
    </section>
  );
}
