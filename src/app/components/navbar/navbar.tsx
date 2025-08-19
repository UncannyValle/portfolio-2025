"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/app/components/ui/navigation-menu";
import { ThemeSwitcher } from "@/app/components/theme-switcher";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/app/components/ui/drawer";
import { HamburgerMenu } from "@/app/components/navbar/hamburgerMenu";
import { NAV_LINKS } from "@/app/lib/constants/links";

export const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false); // This is for the drawer state

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsOpen(false);

    const currentScrollPos = latest.valueOf();
    const checkScroll =
      prevScrollPos > currentScrollPos || currentScrollPos < 100;

    setVisible(checkScroll);

    setPrevScrollPos(currentScrollPos);
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -25 },
  };

  return (
    <motion.header
      variants={variants}
      animate={visible ? "visible" : "hidden"}
      className="fixed  top-0 z-10 w-screen bg-slate-50 py-2  dark:bg-slate-950"
    >
      <nav className="container mx-auto px-8">
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="flex w-full items-center justify-between"
        >
          <Link
            href="/#"
            className="px-4 py-6 text-xl transition hover:scale-110 hover:text-purple-400 lg:text-3xl"
          >
            {`<Julian Valle.dev />`}
          </Link>

          {/* Mobile Drawer */}
          <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
            <DrawerTrigger asChild>
              <HamburgerMenu isOpen={drawerOpen} />
            </DrawerTrigger>
            <DrawerContent>
              <div className="flex flex-col items-center justify-center p-8 space-y-6">
                <Link
                  href="/"
                  className="text-lg p-4 m-0 hover:text-purple-400 transition"
                  onClick={() => setDrawerOpen(false)}
                >
                  Home
                </Link>
                {NAV_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg p-4 m-0 hover:text-purple-400 transition"
                    onClick={() => setDrawerOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <ThemeSwitcher />
              </div>
            </DrawerContent>
          </Drawer>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {NAV_LINKS.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink href={item.href}>
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <ThemeSwitcher />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </motion.div>
      </nav>
    </motion.header>
  );
};
