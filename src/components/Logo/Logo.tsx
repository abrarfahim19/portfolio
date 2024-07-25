"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import BlurFade from "../magicui/blur-fade";

export const Logo = () => {
  const { theme } = useTheme();
  return (
    <div className="mt-2">
      <BlurFade delay={0.75} inView>
        {theme === "light" ? (
          <Image
            src="/logo_black_svg.svg"
            alt="Logo"
            width={90}
            height={90}
            objectFit="contain"
          />
        ) : (
          <Image
            src="/logo_white_svg.svg"
            alt="Logo"
            width={90}
            height={90}
            objectFit="contain"
          />
        )}
      </BlurFade>
    </div>
  );
};
