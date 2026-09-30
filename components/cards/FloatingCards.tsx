import { AvatarGroup } from "@/components/ui/AvatarGroup";
import { StarIcon } from "@/components/ui/icons";
import { happyStudents } from "@/data/courses";
import { cn } from "@/lib/cn";

const surface = "rounded-2xl shadow-[0_20px_45px_-25px_rgb(0_0_0/0.35)]";

/** "Learning Progress 55%" widget. */
export function LearningProgressCard({ value = 55, className }: { value?: number; className?: string }) {
  return (
    <div className={cn(surface, "w-[232px] bg-white px-4 pt-4 pb-4", className)}>
      <p className="text-[13px] text-ink-soft">Learning Progress</p>
      <p className="mt-1 font-display text-[48px] leading-[1.1] font-semibold text-ink-soft">{value}%</p>
      <div
        className="mt-2 h-[7px] w-full overflow-hidden rounded-full bg-[#eeeeee]"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Learning progress"
      >
        <div className="h-full rounded-full bg-lime" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

/** "Happy Students 4.5 (240) ★" widget with avatar stack. */
export function HappyStudentsCard({
  tone = "white",
  className,
}: {
  /** white card (home) or lime card (auth screens) */
  tone?: "white" | "lime";
  className?: string;
}) {
  const lime = tone === "lime";
  return (
    <div className={cn(surface, "w-[258px] px-4 pt-[14px] pb-3", lime ? "bg-lime shadow-none" : "bg-white", className)}>
      <p className="text-base text-ink-soft">Happy Students</p>
      <p className="mt-0.5 flex items-center gap-1 text-[11px] text-ink-soft">
        <span className="font-medium">4.5</span>
        <span className="text-muted">(240)</span>
        <StarIcon className={cn("size-3.5", lime ? "text-brand" : "text-lime-deep")} />
      </p>
      <AvatarGroup
        className="mt-2"
        images={happyStudents}
        size={lime ? 42 : 30}
        extra="2K+"
        extraTone={lime ? "dark" : "lime"}
      />
    </div>
  );
}

/** Small "UI/UX Design · 200 Courses · 1000+ Students" label card. */
export function CategoryStatCard({ className }: { className?: string }) {
  return (
    <div className={cn(surface, "w-[208px] bg-white px-4 py-3", className)}>
      <p className="text-base leading-tight text-ink-soft">UI/UX Design</p>
      <p className="mt-1 flex items-center gap-2 text-[11px] whitespace-nowrap text-muted">
        200 Courses <span className="size-[3px] rounded-full bg-muted" /> 1000+ Students
      </p>
    </div>
  );
}

/** Blue revenue widgets used on the "Create & Manage" collage. */
export function RevenueCard({
  label,
  period,
  amount,
  progress,
  badge,
  className,
}: {
  label: string;
  period: string;
  amount: string;
  progress?: number;
  badge?: string;
  className?: string;
}) {
  return (
    <div className={cn("rounded-2xl bg-brand px-4 pt-4 pb-4 text-white shadow-[0_20px_45px_-20px_rgb(0_59_226/0.6)]", className)}>
      <p className="text-[15px] leading-none">{label}</p>
      <p className="mt-1 text-[9px] text-white/80">{period}</p>
      <p className="mt-3 text-[23px] leading-none font-semibold">{amount}</p>
      {progress !== undefined && (
        <div className="mt-3 h-[6px] w-full overflow-hidden rounded-full bg-white">
          <div className="h-full rounded-full bg-lime" style={{ width: `${progress}%` }} />
        </div>
      )}
      {badge && (
        <span className="mt-3 inline-block rounded-full bg-lime px-2 py-1 text-[9px] leading-none text-ink">{badge}</span>
      )}
    </div>
  );
}
