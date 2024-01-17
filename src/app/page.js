import Container from "@/components/Container/Container";
import Image from "next/image";
import heroImage from "@/assets/img/hero-axelerate.jpeg";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <Container
        background="bg-primary-600 pt-[64px] h-[80vh] min-h-[800px] flex items-center"
        size="lg"
        className="relative">
        <div className="relative flex">
          <div className="w-80 h-80 border-4 border-white font-heading absolute right-0 top-0 opacity-5">
            <div className="absolute bottom-4 right-5">
              <span className="text-white text-7xl relative bottom-3">+</span>
              <span className="text-white text-8xl">A</span>
            </div>
          </div>

          <span className="font-heading text-gray-100 font-bold text-6xl sm:text-7xl md:text-9xl absolute z-10 bottom-8 sm:bottom-12 opacity-10">
            welcome to
          </span>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl font-bold  z-20 relative text-white">
            aXelerate advisory
          </h1>
        </div>

        <div className="flex justify-end mt-12 flex-col text-right">
          <h2 className="font-heading text-2xl sm:text-4xl max-w-4xl text-right font-medium text-gray-300">
            &mdash; we are debt advisory specialists in{" "}
            <span className="text-white font-bold">commercial</span>,{" "}
            <span className="text-white font-bold">mortgage</span> and{" "}
            <span className="text-white font-bold">asset finance</span> broking
          </h2>
          <h3 className="font-heading text-xl sm:text-2xl text-right mt-4 max-w-4xl font-medium text-gray-400">
            our purpose is to help clients get the right deal for them and their
            business.
          </h3>
        </div>
      </Container>

      <Container size="xl2" background="bg-gray-100" className="relative">
        <div className="-mt-[250px] sm:-mt-[200px] md:-mt-[250px]">
          <Image
            src={heroImage}
            alt="aXelerate advisory"
            className="rounded-xl h-[450px] object-cover object-bottom"
          />
        </div>
      </Container>
      <div id="about" className="-mt-24 absolute" />
      {/* About */}
      <Container background="bg-gray-100" className="pt-0">
        <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold relative">
          About us
          <span className="text-slate-500 opacity-10 absolute left-0 top-12 text-5xl sm:text-7xl md:text-8xl">
            &mdash; more than just your average broker
          </span>
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 mb:gap-24 mt-8">
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-thin">
              <strong>aXelerate advisory</strong> was born from a collective
              realisation derived from our extensive experience in the banking
              industry.
            </p>
            <p className="text-2xl font-thin">
              After years of dedicated service, we encountered the challenge of
              not always being able to accommodate valuable clients due to
              limitations in the bank's capacity or its inability to offer the
              most competitive interest rates, even when our commitment to
              client care remained steadfast.
            </p>

            {/* <p className="text-3xl font-medium my-5">
              This is why we started aXelerate advisory &mdash; a Finance
              Broking firm that will use our decades of experience in the
              finance industry to make sure our clients are getting a fair deal.
            </p> */}
            <p className="text-2xl font-thin">
              This is the inspiration behind the establishment of aXelerate
              Advisory, a Finance Broking firm harnessing decades of collective
              experience in the finance industry.
            </p>
            <p className="text-2xl font-thin">
              Our mission &mdash; is to ensure our clients receive equitable
              deals. At aXelerate Advisory we prioritise placing the client at
              the forefront of all our endeavours, dedicated to ensuring they
              achieve their personal and business goals.
            </p>
          </div>

          <div className="flex flex-col gap-4 relative pb-24">
            <p className="text-3xl font-medium mb-5">
              Your Finance needs all under one roof
            </p>
            <p className="text-2xl font-thin">
              Due to our affiliation with over 30 lenders in our network,
              aXelerate Advisory is well-positioned to secure the most
              advantageous deal when our clients are prepared to engage in
              discussions.
            </p>

            <p className="text-2xl font-thin">
              As brokers rather than a bank, we collaborate closely with our
              clients, helping them determine the most suitable financier for
              their specific business or personal requirements.
            </p>
            <p className="text-2xl font-thin">
              Whether it's securing a home loan for your primary residence or
              finding a working capital solution for your business, we
              prioritise comprehending your needs and concerns, always working
              in the best interest of you &mdash;{" "}
              <strong>our valued client.</strong> 
            </p>
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
            <h5 className="font-heading text-2xl font-medium">
              <span className="font-bold underline">Home Loans</span> &ndash;
              whether it's your first home, a refinancing endeavour, or the
              dream of building your forever home, we're here to provide the
              support you need.
            </h5>
          </div>

          <div className="flex flex-col shadow-md border border-primary-600 rounded-md px-5 pt-5 pb-8 bg-primary-600 md:col-span-2 text-white">
            <h5 className="font-heading text-2xl font-medium">
              <span className="font-bold underline">Investment Home Loans</span>{" "}
              &ndash; whether you're building a property portfolio, refinancing
              a current investment property, or diversifying your investments,
              you can rely on our expertise.
            </h5>
          </div>

          <div className="flex flex-col shadow-md border border-purple rounded-md px-5 pt-5 pb-8 bg-purple text-white md:row-span-2 md:col-span-2 relative">
            <h5 className="font-heading text-2xl font-medium">
              <span className="font-bold underline">Debt Advisory Review</span>{" "}
              &ndash; explore aXelerate's Debt Advisory Review service, where we
              thoroughly assess your current business or personal finance
              products. Our recommendations are tailored to your goals and
              needs, ensuring you have the most effective solutions in place.
            </h5>
            <div className="absolute bottom-4 right-4 w-1/3 h-2 bg-white rounded-br-md rounded-tr-md"></div>
          </div>

          <div className="flex flex-col shadow-md border border-secondary rounded-md px-5 pt-5 pb-14 bg-secondary md:col-span-4 text-white">
            <h5 className="font-heading text-2xl font-medium">
              <span className="font-bold underline">Business Finance</span>{" "}
              &ndash; fuel the growth of your business with our comprehensive
              finance solutions, covering Working Capital needs, Merger and
              Acquisition Finance, or assisting the financing of your succession
              plan.
            </h5>
          </div>

          <div className="flex flex-col shadow-md border border-primary-600 rounded-md px-5 pt-5 pb-14 bg-primary-600 md:col-span-3  text-white">
            <h5 className="font-heading text-2xl font-medium">
              <span className="font-bold underline">
                Car and Equipment Finance
              </span>{" "}
              &ndash; let us assist you in securing the right funding for that
              new car or essential equipment crucial to your business
              operations.
            </h5>
          </div>

          <div className="flex flex-col shadow-md border border-slate-600 rounded-md px-5 pt-5 pb-14 bg-slate-600 md:col-span-3  text-white">
            <h5 className="font-heading text-2xl font-medium">
              <span className="font-bold underline">
                Commercial Property Finance
              </span>{" "}
              &ndash; secure the financing needed for your commercial property
              ventures, whether it's an investment or acquiring space for your
              business—be it a warehouse, office, or shopfront.
            </h5>
          </div>
        </div>
      </Container>

      <Container background="bg-gray-100">
        <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold relative">
          Tune in
          <span className="text-slate-500 opacity-10 absolute left-0 top-12 text-5xl sm:text-7xl md:text-8xl">
            &mdash; listen to our podcast
          </span>
        </h2>
        <p className="mt-8 mb-16 text-2xl font-thin">
          Our Managing Director, Con Voultsios, recently participated in the
          SlipStream podcast, hosted by Co-Founder Scott Charlton. They spent an
          hour discussing his expertise in Banking and Broking and specifically
          focussed on helping Professional Services firms with funding for
          various reasons, from succession to acquisitions and wealth creation.
          We hope you find it insightful and helpful!”
        </p>

        <div className="mt-8">
          <iframe
            src="https://player.blubrry.com/id/127714819?target=simple?cache=1705038902#darkOrLight-Light&shownotes-ffffff&download-ffffff&subscribe-ffffff&share-ffffff&shownotesBackground-101820&downloadBackground-55c4ec&subscribeBackground-101820&shareBackground-55c4ec"
            title="Blubrry Podcast Player"
            scrolling="no"
            width="100%"
            height="150px"
            frameborder="0"></iframe>
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
        <div className="grid gap-2 mt-4 relative z-10">
          <p className="text-2xl font-thin">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@aXelerateadvisory.com"
              className="text-primary-600">
              info@aXelerateadvisory.com
            </a>
          </p>
          <p className="text-2xl font-thin">
            <strong>Phone:</strong>{" "}
            <a href="tel:+610452619699" className="text-primary-600">
              +61 452 619 699
            </a>
          </p>
        </div>

        <div className="z-10 relative mt-8">
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
