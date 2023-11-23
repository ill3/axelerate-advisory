import Link from "next/link";

export default function Navigation() {
  return (
    <header className="w-full absolute px-6 sm:px-12 ">
      <nav className="h-[64px] max-w-6xl mx-auto grid items-center justify-end gap-6 grid-flow-col">
        <Link href="#about">About</Link>
        <span>/</span>
        <Link href="#services">Services</Link>
        <span>/</span>
        <Link href="#contact">Contact</Link>
      </nav>
    </header>
  );
}
