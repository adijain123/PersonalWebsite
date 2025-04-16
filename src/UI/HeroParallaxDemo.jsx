"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Hacker news Service",
    link: "https://github.com/adijain123/hacker-news-service",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Sustainable Construction Lab website",
    link: "https://sustainableconstructionlab.com/",
    thumbnail:
      "./sustainable.png",
  },
  
  {
    title: "Algorithmic Trading Platform",
    link: "https://algo-trading-sigma.vercel.app/",
    thumbnail:
      "./algo.png",
  },

  {
    title: "Concreate-Club IIT Indore",
    link: "https://concreate-website.vercel.app/",
    thumbnail:
      "./concreate.png",
  },

  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },
 
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "E-mail scraper",
    link: "https://github.com/adijain123/Leads_email_scraper",
    thumbnail:
      "./email.png",
  },
  

  {
    title: "Workout Monitoring System",
    link: "https://workout-montioring-system.vercel.app/",
    thumbnail:
      "./workout.png",
  },
  {
    title: "IYGEC Website",
    link: "https://10iygec2025.iiti.ac.in/",
    thumbnail:
      "./iygec.png",
  },
  
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
 
];
