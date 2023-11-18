"use client";

import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { ICategory } from "@/types";
import { usePathname } from "next/navigation";

interface IMainNavProps {
  data: ICategory[];
}

const MainNav = ({ data }: IMainNavProps) => {
  const pathname = usePathname();

  const routes = data?.map((route: any) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes?.map((route: any) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-black",
            route.active ? "text-black" : "text-neutral-500"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
