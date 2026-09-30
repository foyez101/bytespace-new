import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Shape } from "@/components/ui/Shape";
import { Stage } from "@/components/ui/Stage";

export function CreatorCta() {
  return (
    <section className="relative isolate overflow-hidden bg-blueprint">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <Stage width={1440} height={488} fitMobile={900}>
          <Shape name="lime-spiral-c" x={0} y={0} />
          <Shape name="white-spiral-sm" x={215} y={35} />
          <Shape name="white-cone" x={0} y={241} />
          <Shape name="lime-torus-half" x={69} y={358} />
          <Shape name="lime-pyramid" x={1105} y={21} />
          <Shape name="white-cylinder" x={1270} y={40} />
          <Shape name="lime-spiral-b" x={1179} y={327} />
        </Stage>
      </div>

      <Container className="py-20 text-center lg:pt-[88px] lg:pb-[84px]">
        <h2 className="mx-auto max-w-[600px] font-display text-[30px] leading-[1.2] font-semibold tracking-[-0.01em] text-white sm:text-[36px] lg:text-[44px]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="mx-auto mt-8 max-w-[980px] text-base leading-[1.7] font-light text-white lg:mt-[50px] lg:text-lg">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and
          become a part of a community comprising over 10,000 local and international creators. Utilize our Course
          Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <ButtonLink href="/register" className="mt-9 lg:mt-[56px]">
          Join as Creator
        </ButtonLink>
      </Container>
    </section>
  );
}
