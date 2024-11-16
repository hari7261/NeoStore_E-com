import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const products = [
  { name: "AI-Powered Laptop", description: "Next-gen AI chip, ultra-fast", itemCount: 15, trending: true, background: "from-blue-500/10 to-purple-500/10", accentColor: "text-blue-500" },
  { name: "Quantum Smartphone", description: "Quantum camera, 8K display", itemCount: 30, trending: true, background: "from-red-500/10 to-orange-500/10", accentColor: "text-red-500" },
  { name: "Smartwatch 2.0", description: "Health AI integration", itemCount: 50, background: "from-green-500/10 to-emerald-500/10", accentColor: "text-green-500" },
  { name: "Noise Cancelling Headphones", description: "Immersive sound, bio-feedback", itemCount: 120, background: "from-purple-500/10 to-pink-500/10", accentColor: "text-purple-500" },
  { name: "Gaming Console X", description: "Haptic feedback, 8K VR", itemCount: 200, trending: true, background: "from-yellow-500/10 to-amber-500/10", accentColor: "text-yellow-500" },
  { name: "4K Ultra HD Camera", description: "AI-powered, ultra-clear", itemCount: 73, background: "from-cyan-500/10 to-blue-500/10", accentColor: "text-cyan-500" },
  { name: "Smart Home Hub", description: "Neural AI assistant", itemCount: 134, background: "from-indigo-500/10 to-violet-500/10", accentColor: "text-indigo-500" },
  { name: "Quantum Gaming Laptop", description: "Quantum chips, ultra-fast speed", itemCount: 45, background: "from-rose-500/10 to-pink-500/10", accentColor: "text-rose-500" },
  { name: "8K Smart TV", description: "Next-gen visuals, AI processing", itemCount: 67, background: "from-blue-500/10 to-cyan-500/10", accentColor: "text-blue-500" },
  { name: "Gaming Keyboard", description: "Mechanical keys, custom RGB", itemCount: 80, background: "from-indigo-500/10 to-violet-500/10", accentColor: "text-indigo-500" },
  { name: "AI-Powered Drone", description: "Autonomous flying, 4K camera", itemCount: 25, background: "from-teal-500/10 to-green-500/10", accentColor: "text-teal-500" },
  { name: "Smart Refrigerator", description: "AI-assisted food management", itemCount: 60, background: "from-green-500/10 to-emerald-500/10", accentColor: "text-green-500" },
  { name: "Robot Vacuum", description: "Autonomous cleaning, voice control", itemCount: 200, background: "from-yellow-500/10 to-amber-500/10", accentColor: "text-yellow-500" },
  { name: "AI-Powered Gaming Chair", description: "Ergonomic, haptic feedback", itemCount: 40, background: "from-blue-500/10 to-cyan-500/10", accentColor: "text-cyan-500" },
  { name: "Smart Mirror", description: "Touchscreen, smart health tracking", itemCount: 15, background: "from-indigo-500/10 to-purple-500/10", accentColor: "text-indigo-500" },
  { name: "Electric Skateboard", description: "Smart speed control, long range", itemCount: 50, background: "from-rose-500/10 to-pink-500/10", accentColor: "text-rose-500" },
  { name: "Wireless Charger", description: "Fast charging, ergonomic design", itemCount: 100, background: "from-purple-500/10 to-pink-500/10", accentColor: "text-purple-500" },
  { name: "Smart Glasses", description: "AR integration, sleek design", itemCount: 35, background: "from-teal-500/10 to-green-500/10", accentColor: "text-teal-500" },
  { name: "Smart Thermostat", description: "AI temperature control, energy-saving", itemCount: 120, background: "from-cyan-500/10 to-blue-500/10", accentColor: "text-cyan-500" },
  { name: "Digital Camera with AI", description: "AI auto-focus, 4K video recording", itemCount: 60, background: "from-indigo-500/10 to-violet-500/10", accentColor: "text-indigo-500" }
];

export default function ElectronicsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Hero Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Explore Revolutionary Electronics
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Dive into the future of tech with our cutting-edge electronics collection.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card
                key={product.name}
                className="group relative overflow-hidden backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${product.background} opacity-50`} />
                <CardContent className="relative p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className={`h-8 w-8 ${product.accentColor} transition-transform group-hover:scale-110`}>
                      {/* You can replace this with an actual icon or image */}
                      <span className="text-2xl">🖥️</span>
                    </div>
                    {product.trending && (
                      <Badge variant="secondary" className="bg-primary/10">
                        Trending
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {product.itemCount} products
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group hover:bg-primary/10"
                      asChild
                    >
                      <Link href={`/shop?product=${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        Explore
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
