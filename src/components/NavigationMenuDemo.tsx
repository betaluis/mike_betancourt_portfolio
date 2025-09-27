"use client";

import * as React from "react";
import Link from "next/link";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// const components: { title: string; href: string; description: string }[] = [
//   { title: "Home", href: "/", description: "home page" },
//   {
//     title: "About",
//     href: "/about",
//     description: "Everything you need to know about me.",
//   },
//   {
//     title: "Repertoire",
//     href: "/repertoire",
//     description: "All of my work",
//   },
//   {
//     title: "Performances",
//     href: "/performances",
//     description: "All of my performances",
//   },
//   { title: "Contact", href: "/contact", description: "Contact me" },
// ];

// dropdown: [
//   { name: "Classical", href: "/repertoire/classical" },
//   { name: "Contemporary", href: "/repertoire/contemporary" },
//   { name: "Jazz", href: "/repertoire/jazz" },
// ],

export function NavigationMenuDemo() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuLink
          asChild
          className={`${navigationMenuTriggerStyle()} text-zinc-200 hover:text-yellow-500`}
        >
          <Link href="/docs">About</Link>
        </NavigationMenuLink>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={`${navigationMenuTriggerStyle()} text-zinc-200 hover:text-yellow-500`}
          >
            <Link href="/docs">Performances</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-zinc-200 data-[state=open]:text-yellow-500 hover:text-yellow-500">
            Repertoire
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Classical</div>
                    <div className="text-muted-foreground"></div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Contemporary</div>
                    <div className="text-muted-foreground"></div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Jazz</div>
                    <div className="text-muted-foreground"></div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={`${navigationMenuTriggerStyle()} text-zinc-200 hover:text-yellow-500`}
          >
            <Link href="/docs">Performances</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
