import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Laptop,
  Smartphone,
  Watch,
  Headphones,
  Gamepad,
  Camera,
  Tv,
  Cpu,
  Trophy,
  Zap,
  Timer,
} from "lucide-react";
import Link from "next/link";

const categories = [
  {
    name: "Electronics",
    icon: Laptop,
    description: "Next-gen computers & innovative gadgets",
    itemCount: 158,
    trending: true,
    features: ["AI-Powered", "8K Display", "Neural Processing"],
    background: "from-blue-500/10 to-purple-500/10",
    accentColor: "text-blue-500",
  },
  {
    name: "Smartphones",
    icon: Smartphone,
    description: "Revolutionary mobile computing devices",
    itemCount: 89,
    trending: true,
    features: ["Quantum Cameras", "Holographic Display", "Bio-Authentication"],
    background: "from-red-500/10 to-orange-500/10",
    accentColor: "text-red-500",
  },
  {
    name: "Wearables",
    icon: Watch,
    description: "Bio-integrated smart devices",
    itemCount: 64,
    features: ["Health AI", "Neural Link", "Nano Sensors"],
    background: "from-green-500/10 to-emerald-500/10",
    accentColor: "text-green-500",
  },
  {
    name: "Audio",
    icon: Headphones,
    description: "Immersive sound technology",
    itemCount: 112,
    features: ["Neural Audio", "Spatial Sound", "Bio Feedback"],
    background: "from-purple-500/10 to-pink-500/10",
    accentColor: "text-purple-500",
  },
  {
    name: "Gaming",
    icon: Gamepad,
    description: "Next-level gaming experiences",
    itemCount: 95,
    trending: true,
    features: ["Neural Interface", "8K VR", "Haptic Feedback"],
    background: "from-yellow-500/10 to-amber-500/10",
    accentColor: "text-yellow-500",
  },
  {
    name: "Cameras",
    icon: Camera,
    description: "Advanced imaging systems",
    itemCount: 73,
    features: ["Quantum Sensor", "AI Processing", "8K HDR"],
    background: "from-cyan-500/10 to-blue-500/10",
    accentColor: "text-cyan-500",
  },
  {
    name: "Smart Home",
    icon: Tv,
    description: "Intelligent living solutions",
    itemCount: 134,
    features: ["Neural Hub", "Bio Security", "AI Assistant"],
    background: "from-indigo-500/10 to-violet-500/10",
    accentColor: "text-indigo-500",
  },
  {
    name: "Components",
    icon: Cpu,
    description: "Cutting-edge hardware",
    itemCount: 167,
    features: ["Quantum Chips", "Neural Cores", "Bio Integration"],
    background: "from-rose-500/10 to-pink-500/10",
    accentColor: "text-rose-500",
  },
];

const stats = [
  { icon: Trophy, label: "Premium Brands", value: "50+" },
  { icon: Zap, label: "New Arrivals Weekly", value: "100+" },
  { icon: Timer, label: "Same Day Delivery", value: "24/7" },
];

export default function Categories() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Hero Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Discover Future Tech
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our curated collection of revolutionary technology products that
            define the future of digital lifestyle
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center justify-center space-x-4">
                <stat.icon className="h-6 w-6 text-primary" />
                <div className="text-left">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card
                key={category.name}
                className="group relative overflow-hidden backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.background} opacity-50`} />
                <CardContent className="relative p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <category.icon className={`h-8 w-8 ${category.accentColor} transition-transform group-hover:scale-110`} />
                    {category.trending && (
                      <Badge variant="secondary" className="bg-primary/10">
                        Trending
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {category.features.map((feature) => (
                        <Badge
                          key={feature}
                          variant="outline"
                          className="bg-background/50 text-xs"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {category.itemCount} products
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group hover:bg-primary/10"
                      asChild
                    >
                      <Link href={`/shop?category=${category.name.toLowerCase()}`}>
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