import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Sparkles className="h-12 w-12 mx-auto mb-6 text-primary" />
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Your NFT Journey?
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Join thousands of collectors and artists in the world most vibrant meme NFT marketplace on mantle.
        </p>
        <Button size="lg" className="px-8">
          Get Started Now
        </Button>
      </div>
    </section>
  );
}