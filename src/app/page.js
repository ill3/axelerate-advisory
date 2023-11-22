import Container from "@/components/Container/Container";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Container background="bg-hero bg-slate-700 bg-blend-overlay bg-cover bg-center min-h-[60vh] flex items-center">
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
      </Container>
      <Container background="bg-gray-50">Yes</Container>
    </main>
  );
}
