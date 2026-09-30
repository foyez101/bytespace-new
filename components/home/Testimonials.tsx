import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { testimonials } from "@/data/site";

export function Testimonials() {
  return (
    <section className="bg-glow-community py-20 lg:pt-[88px] lg:pb-[60px]">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-24">
          <h2 className="font-display text-[30px] leading-[1.2] font-semibold tracking-[-0.01em] text-ink sm:text-[36px] lg:mt-[120px] lg:text-[44px]">
            Discover What Our <br className="hidden sm:block" />
            Community Is Saying
          </h2>
          <p className="text-base leading-[1.8] text-ink-soft/80 lg:text-lg">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly
            from those who have experienced the transformative journey of learning and creating on our platform.
            Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished
            creators.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-[70px] lg:gap-10">
          {testimonials.map((t) => (
            <li key={t.name} className="rounded-[24px] bg-white px-6 pt-6 pb-7 shadow-[0_10px_40px_-30px_rgb(0_0_0/0.3)]">
              <figure>
                <Image src={t.avatar} alt={t.name} width={80} height={80} className="size-20 rounded-full" />
                <figcaption className="mt-8">
                  <p className="font-display text-lg font-semibold text-ink">{t.name}</p>
                  <p className="text-lg text-brand">{t.role}</p>
                </figcaption>
                <blockquote className="mt-8 text-lg leading-[1.6] text-ink-soft/85">&ldquo;{t.quote}&rdquo;</blockquote>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
