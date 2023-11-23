import Container from "@/components/Container/Container";
import Image from "next/image";
import heroImage from "@/assets/img/hero-bg.jpeg";
// import portraitImage from "@/assets/img/portrait.jpeg";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <Container
        background="min-h-[50vh] flex items-center mb-64"
        size="lg"
        className="relative">
        <div className="relative flex">
          <span className="font-heading text-gray-200 font-bold text-6xl sm:text-7xl md:text-9xl absolute z-10 bottom-12 opacity-50">
            welcome to
          </span>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl font-bold mt-24 z-20 relative">
            aXelerate advisory
          </h1>
        </div>

        <div className="flex justify-end mt-12">
          <h2 className="font-heading text-4xl text-right font-medium text-primary-600">
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

      {/* About */}
      <Container id="about" background="bg-gray-100" className="pt-0">
        <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold relative">
          About us
          <span className="text-slate-500 opacity-10 absolute left-0 top-12 text-5xl sm:text-7xl md:text-8xl">
            &mdash; more than just your average broker
          </span>
        </h2>
        <div className="grid lg:grid-cols-2 gap-24 mt-8">
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

          <div className="flex flex-col gap-4 relative">
            <div className="absolute bottom-0 h-3 w-full bg-primary-600"></div>
            {/* <div className="grid grid-cols-[65px_1fr] items-center p-4 border-2 rounded-md">
              <div>Icon</div>
              <p className="text-2xl font-medium">Honesty</p>
            </div> */}
          </div>
        </div>
      </Container>

      {/* Services */}
      <Container id="services" background="bg-gray-100">
        <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold relative text-right">
          What we're good at
          <span className="text-slate-500 opacity-10 absolute left-0 top-12 text-5xl sm:text-7xl md:text-8xl text-right">
            &mdash; specialists in asset, mortgage and commercial
          </span>
        </h2>
        <div className="grid md:grid-cols-6 gap-4 z-10 relative mt-12">
          <div className="flex flex-col shadow-md border border-slate-200 rounded-md px-5 pt-5 pb-12 bg-slate-400 md:col-span-2 text-white">
            <h5 className="font-heading text-3xl font-medium">
              Pancetta sausage ham hock turducken rump corned beef biltong kevin
            </h5>
          </div>

          <div className="flex flex-col shadow-md border border-primary-600 rounded-md px-5 pt-5 pb-8 bg-primary-600 md:col-span-2 text-white">
            <h5 className="font-heading text-3xl font-medium">
              Bresaola cow andouille pork belly, doner shank
            </h5>
          </div>

          <div className="flex flex-col shadow-md border border-purple rounded-md px-5 pt-5 pb-8 bg-purple text-white md:row-span-2 md:col-span-2 relative">
            <h5 className="font-heading text-3xl font-medium">
              Leberkas chislic venison, alcatra turducken porchetta boudin flank
              pork belly swine tongue cupim doner.
            </h5>
            <div className="absolute bottom-4 right-4 w-1/3 h-2 bg-white rounded-br-md rounded-tr-md"></div>
          </div>

          <div className="flex flex-col shadow-md border border-secondary rounded-md px-5 pt-5 pb-14 bg-secondary md:col-span-4 text-white">
            <h5 className="font-heading text-3xl font-medium">
              Leberkas chislic venison, alcatra turducken porchetta boudin flank
              pork belly swine tongue cupim doner.
            </h5>
          </div>
        </div>
      </Container>

      {/* Contact */}
      <Container id="contact" background="bg-gray-100">
        <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold relative">
          Get in touch
          <span className="text-slate-500 opacity-10 absolute left-0 top-12 text-5xl sm:text-7xl md:text-8xl">
            &mdash; we're just an email or phone call away
          </span>
        </h2>
        <div className="z-10 relative mt-12">
          <iframe
            data-tally-src="https://tally.so/embed/319EqM?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="276"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Contact
"></iframe>
        </div>
      </Container>
    </main>
  );
}
