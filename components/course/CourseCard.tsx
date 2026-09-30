import Image from "next/image";
import type { Course } from "@/data/courses";
import { AvatarGroup } from "@/components/ui/AvatarGroup";
import { LevelIcon, StarIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

type CourseCardProps = {
  course: Course;
  className?: string;
  /** Hint for next/image when the card is above the fold. */
  preload?: boolean;
  /** "auth" = lime rating star and dark learner bubble (used on the sign-in collage). */
  tone?: "default" | "auth";
};

export function CourseCard({ course, className, preload, tone = "default" }: CourseCardProps) {
  const auth = tone === "auth";
  const meta = [`${course.lessons} Lessons`, course.duration, `${course.comments} Comments`];

  return (
    <article
      className={cn(
        "group relative min-w-0 rounded-[20px] border border-[#d0d0d0] bg-white p-[15px] pb-5 transition-shadow duration-300 hover:shadow-[0_18px_40px_-20px_rgb(0_59_226/0.35)]",
        className,
      )}
    >
      <div className="relative aspect-[341/195] overflow-hidden rounded-xl bg-chip">
        <Image
          src={course.image}
          alt={course.title}
          fill
          preload={preload}
          sizes="(min-width: 1024px) 341px, (min-width: 640px) 45vw, 90vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <ul className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-1.5">
          {meta.map((item) => (
            <li
              key={item}
              className="rounded-full bg-white/45 px-2.5 py-[5px] text-[11px] sm:px-3 sm:text-[12px] leading-none whitespace-nowrap text-ink/70 backdrop-blur-md"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate font-display text-xl leading-tight font-semibold tracking-[-0.01em] text-ink">
            <a href={`/#${course.slug}`} className="after:absolute after:inset-0 focus:outline-none">
              {course.title}
            </a>
          </h3>
          <p className="mt-1 text-xs text-muted">
            by <span className="text-brand">{course.author}</span>
          </p>
        </div>
        <p className="flex shrink-0 items-center gap-1 text-lg text-muted" aria-label={`Rated ${course.rating} out of 5`}>
          {course.rating}
          <StarIcon className={cn("size-[18px]", auth ? "text-lime-deep" : "text-[#c9c9c9]")} />
        </p>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <span className="inline-flex h-8 items-center gap-1.5 rounded-full bg-chip px-3 text-xs text-ink-soft">
          <LevelIcon className="size-3.5" />
          {course.level}
        </span>
        <AvatarGroup images={course.learners} size={26} extra={course.learnerCount} extraTone={auth ? "dark" : "lime"} />
      </div>

      <p className="mt-3 flex items-baseline">
        <span className="font-display text-xl font-semibold text-brand">${course.price}</span>
        <span className="text-xs text-muted">/lifetime</span>
      </p>
    </article>
  );
}
