import { Card, CardContent } from "@/components/ui/card";
import { Shield, Wallet, TrendingUp } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Platform?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6">
            <CardContent className="space-y-4 pt-4">
              <Shield className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Secure Trading</h3>
              <p className="text-muted-foreground">
                Built with industry-leading security measures to protect your assets and transactions.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardContent className="space-y-4 pt-4">
              <Wallet className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">300 + wallets Support</h3>
              <p className="text-muted-foreground">
                Trade across more than 300+ wallets seamlessly with our unified interface.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardContent className="space-y-4 pt-4">
              <TrendingUp className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Market Analytics</h3>
              <p className="text-muted-foreground">
                Make informed decisions with real-time market data and trending memes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}