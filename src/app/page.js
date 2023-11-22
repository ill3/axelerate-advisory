import Container from "@/components/Container/Container";
import Image from "next/image";
import heroImage from "../../public/img/hero-bg.jpeg";

export default function Home() {
  return (
    <main>
      <Container
        background="min-h-[50vh] flex items-center mb-64"
        size="lg"
        className="relative">
        <div className="relative flex">
          <span className="font-heading text-gray-200 font-bold text-9xl absolute z-10 bottom-12 opacity-50">
            welcome to
          </span>
          <h1 className="font-heading text-8xl font-bold mt-24 z-20 relative">
            aXelerate Advisory
          </h1>
        </div>

        <div className="flex justify-end mt-12">
          <h2 className="font-heading text-4xl text-right font-medium text-primary">
            &mdash; we are asset, mortgage and commercial specialists
          </h2>
        </div>
      </Container>

      <Container size="xl2" background="bg-gray-100" className="relative">
        <div className="-mt-[250px]">
          <Image
            src={heroImage}
            className="rounded-xl h-[550px] object-cover object-bottom"
          />
        </div>
      </Container>
      <Container background="bg-gray-100" className="pt-0">
        <h2 className="font-heading text-5xl font-bold">About us</h2>
        <div className="grid grid-cols-2 gap-12 mt-8">
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-thin">
              Bacon ipsum dolor amet t-bone biltong pork chop chuck buffalo
              sausage tail. Pork &mdash; meatball beef ribs, ham hock porchetta
              chislic meatloaf salami alcatra brisket frankfurter.
            </p>
            <p className="text-3xl font-medium my-5">
              Bacon ipsum dolor amet t-bone biltong pork chop chuck buffalo
              sausage tail.
            </p>
            <p className="text-2xl font-thin">
              Ground round jowl shankle, burgdoggen frankfurter meatball venison
              filet mignon capicola short ribs pig pork cupim sausage andouille.
              Alcatra short ribs chuck pork chop pork belly. Leberkas chislic
              venison, alcatra turducken porchetta boudin flank pork belly swine
              tongue cupim doner.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p>
              Bacon ipsum dolor amet t-bone biltong pork chop chuck buffalo
              sausage tail. Filet mignon porchetta ribeye shoulder strip steak
              chicken sausage tail salami bresaola ground round. Pig sirloin
              andouille beef ribs, chicken hamburger boudin jowl jerky ball tip
              spare ribs alcatra tri-tip t-bone. Boudin pork chop venison shank
              chicken leberkas picanha, turkey biltong chuck shankle bresaola.
            </p>
            <p>
              Pork meatball beef ribs, ham hock porchetta chislic meatloaf
              salami alcatra brisket frankfurter. Venison pancetta biltong tail
              alcatra shoulder pork loin drumstick rump pork belly meatball
              kielbasa prosciutto capicola short ribs. Ground round jowl
              shankle, burgdoggen frankfurter meatball venison filet mignon
              capicola short ribs pig pork cupim sausage andouille. Alcatra
              short ribs chuck pork chop pork belly. Leberkas chislic venison,
              alcatra turducken porchetta boudin flank pork belly swine tongue
              cupim doner.
            </p>
          </div>
        </div>
      </Container>
      <Container>
        <h2 className="font-heading text-5xl font-bold text-right">Services</h2>
      </Container>
    </main>
  );
}
