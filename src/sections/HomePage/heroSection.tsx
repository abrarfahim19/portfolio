"use client";
import BlurFade from "@/components/magicui/blur-fade";
import ShineBorder from "@/components/magicui/shine-border";
import ShinyButton from "@/components/magicui/shiny-button";
import { Facebook, GithubIcon, Linkedin } from "lucide-react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="container my-4">
      <div className="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2 md:content-center md:items-center md:gap-8">
        <div className="col-span-1 md:order-2">
          <BlurFade delay={0.5} inView>
            <ShineBorder
              className="p-2"
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
              <Image
                src="/artwork.png"
                alt="Block Image"
                height={400}
                width={400}
                className="rounded-lg"
                objectFit="contain"
              />
            </ShineBorder>
          </BlurFade>
        </div>
        <div className="col-span-1 md:order-1 md:w-2/3">
          <div className="flex flex-col gap-4">
            <BlurFade delay={0.25} inView>
              <h1 className="text-left text-4xl font-light">
                Hello, I am <span className="font-bold">Abrar Fahim</span> from
                <span className="font-light"> Bangladesh </span> 👋
              </h1>
            </BlurFade>
            <BlurFade delay={0.5} inView>
              <p className="my-2 font-thin">
                I`m Evren Shah Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry`s
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to specimen book.
              </p>
            </BlurFade>

            <div className="flex w-full justify-between  md:w-2/3 md:gap-4">
              <BlurFade delay={0.2} inView>
                <ShinyButton onClick={() => console.log("first")}>
                  <div className="flex h-16 w-16 items-center justify-center hover:text-black">
                    <Linkedin className="" />
                  </div>
                </ShinyButton>
              </BlurFade>

              <BlurFade delay={0.4} inView>
                <ShinyButton onClick={() => console.log("first")}>
                  <div className="flex h-16 w-16 items-center justify-center hover:text-black">
                    <Facebook className="" />
                  </div>
                </ShinyButton>
              </BlurFade>

              <BlurFade delay={0.6} inView>
                <ShinyButton onClick={() => console.log("first")}>
                  <div className="flex h-16 w-16 items-center justify-center hover:text-black">
                    <GithubIcon className="" />
                  </div>
                </ShinyButton>
              </BlurFade>

              <BlurFade delay={0.8} inView>
                <ShinyButton onClick={() => console.log("first")}>
                  <div className="flex h-16 w-16 items-center justify-center hover:text-black">
                    <Linkedin className="" />
                  </div>
                </ShinyButton>
              </BlurFade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
