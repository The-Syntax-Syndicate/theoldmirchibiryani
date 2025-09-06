"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// components
import Button from "./Button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const navItemClass = "group cursor-pointer relative";
  const navLinkClass = "relative";
  const navTextBase =
    "bg-left-bottom bg-gradient-to-r from-secondary to-secondary bg-[length:0%_2px] bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px] group-active:bg-[length:100%_2px]";

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "About us", href: "/about" },
    { label: "Booking", href: "/booking" },
  ];

  return (
    <nav className="">
      <div className="max-w-screen-xl mx-auto my-4 px-4 flex items-center justify-between">
        <div>
          <Image
            src="/assets/logo-min.png"
            alt="This logo of the restaurant"
            width={100}
            height={94}
          />
        </div>
        <ul className="hidden md:flex gap-8 items-center mx-auto text-text font-medium text-base">
          {navItems.map(({ label, href }) => {
            const isActive = href === pathname;
            const navTextClass = `${navTextBase} ${
              isActive
                ? "bg-[length:100%_2px]"
                : "bg-[length:0%_2px] group-hover:bg-[length:100%_2px] group-active:bg-[length:100%_2px]"
            }`;
            return (
              <li key={href} className={navItemClass}>
                <Link href={href} className={navLinkClass}>
                  <span className={navTextClass}>{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="hidden md:block">
          <Button>Contact</Button>
        </div>
        {!isMenuOpen && (
          <button
            className="mr-4 md:hidden"
            aria-label="Toggle Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Image
              src="/assets/group1.png"
              alt="This clickable hamburger"
              width={50}
              height={28}
            />
          </button>
        )}

        {isMenuOpen && (
          <button
            className="mr-4 md:hidden"
            aria-label="Close Menu"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/assets/image1.png"
              alt="This clickable close icon"
              width={50}
              height={28}
            />
          </button>
        )}
      </div>
      {isMenuOpen && (
        <div className="md:hodden">
          <ul className="flex flex-col gap-8 items-center mx-auto text-text font-medium text-base mb-4">
            {navItems.map(({ label, href }) => {
              const isActive = href === pathname;
              const navTextClass = `${navTextBase} ${
                isActive
                  ? "bg-[length:100%_2px]"
                  : "bg-[length:0%_2px] group-hover:bg-[length:100%_2px] group-active:bg-[length:100%_2px]"
              }`;
              return (
                <li key={href} className={navItemClass}>
                  <Link href={href} className={navLinkClass}>
                    <span className={navTextClass}>{label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex justify-center my-8">
            <Button className="">Contact</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
