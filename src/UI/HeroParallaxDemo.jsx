"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Concreate-Club IIT Indore",
    link: "https://concreate-website.vercel.app/",
    thumbnail:
      "./concreate.png",
  },
  {
    title: "Algorithmic Trading Platform",
    link: "https://algo-trading-sigma.vercel.app/",
    thumbnail:
      "./algo.png",
  },

  {
    title: "IYGEC",
    link: "https://10iygec2025.iiti.ac.in/",
    thumbnail:
      "./iygec.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "hacker-news-service",
    link: "https://github.com/adijain123/hacker-news-service",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Workout Monitoring System",
    link: "https://workout-montioring-system.vercel.app/",
    thumbnail:
      "./workout.png",
  },
  {
    title: "E-mail scraper",
    link: "https://github.com/adijain123/Leads_email_scraper",
    thumbnail:
      "./email.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
 
];
