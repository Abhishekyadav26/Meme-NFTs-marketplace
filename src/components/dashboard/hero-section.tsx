"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket } from "lucide-react";
import { AnimatedLaunchButton } from "./animated-launch-button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-6xl mx-auto text-center">
        <Badge className="mb-4" variant="secondary">
          🚀 Now Supporting Mantle Chain
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Collect Legendary Meme NFTs
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Discover, buy, and trade the internet most iconic memes as NFTs on MANTLE blockchains. Join the revolution of digital culture ownership.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="./dashboard"><AnimatedLaunchButton /></Link>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}