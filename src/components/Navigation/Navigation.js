"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/img/axelerate-logo.svg";

import logoFilledWhite from "@/assets/img/axelerate-logo-filled-white.svg";
import logoFilled from "@/assets/img/axelerate-logo-filled.svg";
import Image from "next/image";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const TRANSPARENT = "transparent";
const WHITE = "white";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [background, setBackground] = useState(TRANSPARENT);

  const handleNavBackground = () => {
    if (!window) return;
    if (window?.scrollY > 50) {
      setBackground(WHITE);
    } else {
      setBackground(TRANSPARENT);
    }
  };

  const useTextColor = useMemo(() => {
    return background === TRANSPARENT ? "text-white" : "text-black";
  }, [background]);

  useEffect(() => {
    handleNavBackground();
    window.addEventListener("scroll", handleNavBackground);
    return () => {
      window.removeEventListener("scroll", handleNavBackground);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-30 ${`bg-${background}`} transition-all shadow-sm`}>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between py-2 px-6 lg:px-12"
        aria-label="Global">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">aXelerate advisory</span>
          <Image
            src={background === TRANSPARENT ? logoFilledWhite : logoFilled}
            className="w-[50px] h-auto"
          />
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${
              background === TRANSPARENT ? "text-white" : "text-gray-700"
            }`}
            onClick={() => setOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 items-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 ${useTextColor}`}>
              {item.name}
            </Link>
          ))}
          <Link
            href="#tally-open=wbWLG0&tally-layout=modal&tally-emoji-text=👋&tally-emoji-animation=wave"
            className="rounded bg-indigo-50 px-2 py-1 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100">
            Try our Financial Flow
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={open} onClose={setOpen}>
        <div className="fixed inset-0 z-40" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">aXelerate advisory</span>
              <Image src={logo} className="h-8 w-auto" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="py-6">
                <a
                  href="#tally-open=wbWLG0&tally-layout=modal&tally-emoji-text=👋&tally-emoji-animation=wave"
                  className="rounded bg-indigo-50 px-2 py-1 text-base font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100">
                  Try our Financial Flow
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
