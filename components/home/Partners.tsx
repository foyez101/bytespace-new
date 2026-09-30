import Image from "next/image";
import { Container } from "@/components/ui/Container";

const partners = [1, 2, 3, 4, 5];

export function Partners() {
  return (
    <section aria-label="Trusted by" className="bg-surface py-12 lg:py-20">
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:justify-between lg:px-8">
          {partners.map((n) => (
            <li key={n}>
              <Image
                src={`/images/brands/partner-${n}.png`}
                alt="Logoipsum"
                width={170}
                height={41}
                className="h-8 w-auto opacity-90 lg:h-[41px]"
                style={{ width: "auto" }}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
