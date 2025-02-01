"use client";

import { Dock, DockIcon } from "@/components/ui/dock";
import Link from "next/link";
import React from "react";
import { BiEnvelope } from "react-icons/bi";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

// import { Dock, DockIcon } from "@/components/magicui/dock";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function Contact() {
  return (
    <div className="relative " id="contact">
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-12">Contact</h2>
      <Dock iconMagnification={60} iconDistance={100}>
        <DockIcon className="bg-black/10 dark:bg-white/10">
          {/* <Icons.gitHub className="size-full" /> */}
          <Link className="size-full" href="https://github.com/ganeshkondaka">
            <FaGithub  className="size-full"></FaGithub>
          </Link>

        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10">
          {/* <Icons.googleDrive className="size-full" /> */}
          <Link className="size-full" href="https://x.com/ganesh_kondaka">
            <BsTwitterX className="size-full"></BsTwitterX>
          </Link>

        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10">
          {/* <Icons.notion className="size-full" /> */}
          <Link className="size-full" href="https://www.linkedin.com/in/kondaka-ganesh-b402bb252/">
            <BsLinkedin className="size-full"></BsLinkedin>
          </Link>

        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10">
          {/* <Icons.whatsapp className="size-full" /> */}
          <Link className="size-full" href="mailto:ganeshjo306@gmail.com">
            <BiEnvelope className="size-full"></BiEnvelope>
          </Link>

        </DockIcon>
      </Dock>
    </div>
  );
}


