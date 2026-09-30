"use client";

import { useMemo, useState } from "react";
import { CourseCard } from "@/components/course/CourseCard";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlusIcon } from "@/components/ui/icons";
import { categories, courses } from "@/data/courses";

const VISIBLE_CATEGORIES = 18;

export function CoursesSection({ query = "" }: { query?: string }) {
  const [active, setActive] = useState("Featured");
  const [search, setSearch] = useState(query);

  const visible = useMemo(() => {
    const q = search.trim().toLowerCase();
    return courses.filter(
      (c) =>
        (active === "Featured" || c.category === active) &&
        (!q || `${c.title} ${c.category} ${c.author}`.toLowerCase().includes(q)),
    );
  }, [active, search]);

  function reset() {
    setActive("Featured");
    setSearch("");
  }

  return (
    <section id="courses" className="scroll-mt-6 py-16 lg:pt-[75px] lg:pb-[74px]">
      <Container>
        <SectionHeading
          title={
            <>
              Discover Your Passion,
              <br className="hidden sm:block" /> Build Your Skills
            </>
          }
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />

        <div className="mx-auto mt-10 flex max-w-[1100px] flex-wrap items-center justify-center gap-x-4 gap-y-[21px] lg:mt-[45px]">
          {categories.slice(0, VISIBLE_CATEGORIES).map((category) => (
            <Chip key={category} active={category === active} onClick={() => setActive(category)}>
              {category}
            </Chip>
          ))}
          <a href="#learning-paths" className="inline-flex items-center gap-1 px-2 text-base text-brand hover:underline">
            <PlusIcon className="size-4" /> More
          </a>
        </div>

        {search && (
          <p className="mt-10 text-center text-muted">
            Showing results for <span className="font-medium text-ink">&ldquo;{search}&rdquo;</span>{" "}
            <button type="button" onClick={reset} className="text-brand underline-offset-2 hover:underline">
              Clear
            </button>
          </p>
        )}

        {visible.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-[76px] lg:grid-cols-3 lg:gap-10">
            {visible.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-[20px] border border-dashed border-line px-6 py-16 text-center lg:mt-[76px]">
            <p className="font-display text-xl font-semibold">No courses found</p>
            <p className="mt-2 text-muted">New {active !== "Featured" ? active : ""} courses are coming soon.</p>
            <button type="button" onClick={reset} className="mt-6 rounded-full bg-lime px-6 py-3 text-ink">
              Show all courses
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
