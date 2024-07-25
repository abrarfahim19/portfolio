"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { menuLinks } from "@/config";
import { cn } from "@/lib/utils";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShinyText } from "../ShinyText/ShinyText";
import { Button } from "../ui/button";

export const MenuItems = () => {
  const currentPath = usePathname();
  // console.log("first", currentPath);
  return (
    <div>
      <MobileMenuItems currentPath={currentPath} />
      <div className="hidden md:block">
        <ul className="flex items-center space-x-4">
          {menuLinks.map((item, index) => (
            <MenuItem key={index}>
              <Link href={item.link}>
                <Button
                  variant={"outline"}
                  className={cn(
                    "border-transparent text-black transition-colors hover:border-blue-600 hover:text-blue-600 dark:text-white",
                    currentPath === item.link &&
                      "border-blue-600 text-blue-600",
                  )}
                >
                  {item.name}
                </Button>
              </Link>
            </MenuItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

const MenuItem = ({ children }: { children: React.ReactNode }) => {
  return <li>{children}</li>;
};

const SHEET_SIDES = ["left"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

interface MobileMenuItemsProps {
  currentPath?: string;
}

const MobileMenuItems: React.FC<MobileMenuItemsProps> = ({ currentPath }) => {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 md:hidden">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="ghost">
              <HamburgerMenuIcon className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side={side} className="bg-gray-200 dark:bg-gray-800">
            <SheetHeader>
              <SheetTitle>Abrar Fahim</SheetTitle>
              <SheetDescription>
                Just a personal site of Abrar Fahim
              </SheetDescription>
            </SheetHeader>
            <div className="my-4">
              <ul className="flex flex-col items-center justify-center space-y-4">
                {menuLinks.map((item, index) => (
                  <MenuItem key={index}>
                    <Link href={item.link}>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-24 border-transparent text-black transition-colors hover:border-blue-600 hover:text-blue-600 dark:text-white",
                          currentPath === item.link &&
                            "border-blue-600 text-blue-600",
                        )}
                      >
                        {item.name}
                      </Button>
                    </Link>
                  </MenuItem>
                ))}
              </ul>
            </div>
            <SheetFooter className="self-end ">
              <SheetClose asChild>
                <div className="flex h-full w-full items-center justify-center">
                  {/* <p>Why So Serious?</p> */}
                  <ShinyText text="✨ Download CV" />
                </div>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
};
