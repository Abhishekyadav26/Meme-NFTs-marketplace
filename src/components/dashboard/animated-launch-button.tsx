"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

export function AnimatedLaunchButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      size="lg"
      className={cn(
        "relative overflow-hidden transition-all duration-300 transform hover:scale-105",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/0 before:via-primary/25 before:to-primary/0",
        "before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        isHovered ? "animate-pulse" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        // Add your launch app logic here
      }}
    >
      <Rocket className={cn(
        "mr-2 h-4 w-4 transition-transform duration-300",
        isHovered ? "animate-bounce" : ""
      )} />
      <span className={cn(
        "relative z-10 transition-all duration-300",
        isHovered ? "tracking-wider" : ""
      )}>
        Launch App
      </span>
    </Button>
  );
}