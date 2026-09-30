import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <>
      <main className="bg-blueprint">
        <Navbar />
        <Container className="pt-16 pb-24 text-center lg:pt-[100px] lg:pb-[125px]">
          <div className="relative">
            <p
              aria-hidden
              className="bg-gradient-to-b from-lime from-15% to-lime/0 to-100% bg-clip-text font-display text-[160px] leading-none font-semibold tracking-[-0.04em] text-transparent sm:text-[260px] lg:text-[380px]"
            >
              404
            </p>
            <h1 className="relative -mt-12 font-display text-[32px] leading-[1.2] font-semibold tracking-[-0.02em] text-white sm:-mt-20 sm:text-5xl lg:-mt-[112px] lg:text-[72px]">
              The page you are looking <br className="hidden sm:block" />
              for doesn&rsquo;t exist
            </h1>
          </div>
          <p className="mt-8 text-lg font-light text-white lg:mt-[52px]">
            Try to use a correct url or go back to homepage to start again
          </p>
          <ButtonLink href="/" className="mt-8">
            Back to Home
          </ButtonLink>
        </Container>
      </main>
      <Footer />
    </>
  );
}
