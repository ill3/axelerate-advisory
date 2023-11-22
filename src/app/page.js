import Container from "@/components/Container/Container";
import Image from "next/image";
import heroImage from "../../public/img/hero-bg.jpeg";

export default function Home() {
  return (
    <main>
      {/* <Container background="bg-hero bg-slate-700 bg-blend-overlay bg-cover bg-center min-h-[60vh] flex items-center">
        <div className="grid grid-cols-2 gap-24 items-center ">
          <div>
            <h1 className="font-heading text-6xl font-bold text-white">
              aXelerate Advisory
            </h1>
            <h2 className="text-gray-100 text-xl mt-2 font-heading">
              Asset, Mortgage & Commercial Specialists
            </h2>
            <p className="mt-8 text-gray-200 font-light">
              Navigating the path to success. We're your trusted partners in
              securing tailored solutions to unlock unlimited finanical
              possibilities.
            </p>
          </div>
          <div>Form</div>
        </div>
      </Container> */}
      <Container
        background="min-h-[50vh] flex items-center mb-[150px]"
        size="lg"
        className="relative">
        <div className="relative flex">
          <span className="font-heading text-gray-200 font-bold text-9xl absolute z-10 bottom-12 opacity-50">
            welcome
          </span>
          <h1 className="font-heading text-8xl font-bold mt-12 z-20 relative">
            aXelerate Advisory
          </h1>
        </div>

        <div className="flex justify-end mt-12">
          <h2 className="font-heading text-3xl  text-right max-w-sm font-medium text-primary">
            &mdash; we are asset, mortgage and commercial specialists
          </h2>
        </div>
      </Container>

      <Container background="bg-gray-100" className="relative">
        <div className="-mt-[250px]">
          <Image
            src={heroImage}
            className="rounded-xl h-[550px] object-cover object-bottom"
          />
        </div>
        <div className="mt-16 grid grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading text-5xl font-bold">About us</h2>
            <div className="grid gap-4 mt-8">
              <p>
                Bacon ipsum dolor amet t-bone biltong pork chop chuck buffalo
                sausage tail. Filet mignon porchetta ribeye shoulder strip steak
                chicken sausage tail salami bresaola ground round. Pig sirloin
                andouille beef ribs, chicken hamburger boudin jowl jerky ball
                tip spare ribs alcatra tri-tip t-bone. Boudin pork chop venison
                shank chicken leberkas picanha, turkey biltong chuck shankle
                bresaola.
              </p>
              <p>
                Pork meatball beef ribs, ham hock porchetta chislic meatloaf
                salami alcatra brisket frankfurter. Venison pancetta biltong
                tail alcatra shoulder pork loin drumstick rump pork belly
                meatball kielbasa prosciutto capicola short ribs. Ground round
                jowl shankle, burgdoggen frankfurter meatball venison filet
                mignon capicola short ribs pig pork cupim sausage andouille.
                Alcatra short ribs chuck pork chop pork belly. Leberkas chislic
                venison, alcatra turducken porchetta boudin flank pork belly
                swine tongue cupim doner.
              </p>
            </div>
          </div>
          <div>
            <div className="grid gap-4">
              <p>
                Bacon ipsum dolor amet t-bone biltong pork chop chuck buffalo
                sausage tail. Filet mignon porchetta ribeye shoulder strip steak
                chicken sausage tail salami bresaola ground round. Pig sirloin
                andouille beef ribs, chicken hamburger boudin jowl jerky ball
                tip spare ribs alcatra tri-tip t-bone. Boudin pork chop venison
                shank chicken leberkas picanha, turkey biltong chuck shankle
                bresaola.
              </p>
              <p>
                Pork meatball beef ribs, ham hock porchetta chislic meatloaf
                salami alcatra brisket frankfurter. Venison pancetta biltong
                tail alcatra shoulder pork loin drumstick rump pork belly
                meatball kielbasa prosciutto capicola short ribs. Ground round
                jowl shankle, burgdoggen frankfurter meatball venison filet
                mignon capicola short ribs pig pork cupim sausage andouille.
                Alcatra short ribs chuck pork chop pork belly. Leberkas chislic
                venison, alcatra turducken porchetta boudin flank pork belly
                swine tongue cupim doner.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container>What</Container>
    </main>
  );
}
