import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Smartphone, Laptop, Camera, Watch, Cpu, Tv, Headphones, Gamepad } from "lucide-react";
import Link from "next/link";

const smartphones = [
  { name: "Quantum 5G", description: "Quantum display, 5G speed", itemCount: 50, trending: true, icon: Smartphone, background: "from-red-500/10 to-orange-500/10", accentColor: "text-red-500" },
  { name: "HoloView Pro", description: "Holographic display, next-gen AI", itemCount: 30, icon: Laptop, background: "from-yellow-500/10 to-amber-500/10", accentColor: "text-yellow-500" },
  { name: "BioPhone X", description: "Bio-authentication, ultra-security", itemCount: 120, icon: Watch, background: "from-blue-500/10 to-cyan-500/10", accentColor: "text-blue-500" },
  { name: "HyperPhone", description: "AI-powered with 8K video recording", itemCount: 75, icon: Smartphone, background: "from-green-500/10 to-emerald-500/10", accentColor: "text-green-500" },
  { name: "Futura S", description: "Smart lens camera, AR support", itemCount: 60, icon: Camera, background: "from-purple-500/10 to-pink-500/10", accentColor: "text-purple-500" },
  { name: "Volt 4G", description: "Ultra-fast processing, immersive display", itemCount: 50, icon: Cpu, background: "from-indigo-500/10 to-violet-500/10", accentColor: "text-indigo-500" },
  { name: "DreamPhone V", description: "Dream holographic interface", itemCount: 40, icon: Tv, background: "from-cyan-500/10 to-blue-500/10", accentColor: "text-cyan-500" },
  { name: "Zenith XR", description: "AI camera, 5G compatibility", itemCount: 85, icon: Headphones, background: "from-rose-500/10 to-pink-500/10", accentColor: "text-rose-500" },
  { name: "Omni 9", description: "AR display, quantum processor", itemCount: 150, icon: Smartphone, background: "from-teal-500/10 to-green-500/10", accentColor: "text-teal-500" },
  { name: "Vision X", description: "Quantum camera, bio-powered", itemCount: 70, icon: Camera, background: "from-indigo-500/10 to-violet-500/10", accentColor: "text-indigo-500" },
  { name: "SmartStream", description: "8K screen, neural processing", itemCount: 45, icon: Tv, background: "from-blue-500/10 to-cyan-500/10", accentColor: "text-blue-500" },
  { name: "SnapSense", description: "AI photo optimization, holographic view", itemCount: 60, icon: Camera, background: "from-red-500/10 to-orange-500/10", accentColor: "text-red-500" },
  { name: "FutureG X", description: "5G ultra-speed with AR integration", itemCount: 100, icon: Laptop, background: "from-purple-500/10 to-pink-500/10", accentColor: "text-purple-500" },
  { name: "NeuroTouch", description: "Biometric touch control, 6K display", itemCount: 80, icon: Watch, background: "from-teal-500/10 to-blue-500/10", accentColor: "text-teal-500" },
  { name: "PixelWave", description: "Quantum camera, intelligent processing", itemCount: 120, icon: Smartphone, background: "from-yellow-500/10 to-amber-500/10", accentColor: "text-yellow-500" },
  { name: "AeroPhone", description: "Nano sensors, flexible OLED", itemCount: 65, icon: Smartphone, background: "from-green-500/10 to-emerald-500/10", accentColor: "text-green-500" },
  { name: "EonMax", description: "Fast charging, quantum battery", itemCount: 50, icon: Cpu, background: "from-indigo-500/10 to-violet-500/10", accentColor: "text-indigo-500" },
  { name: "StreamLine", description: "8K video streaming, AI resolution", itemCount: 75, icon: Tv, background: "from-cyan-500/10 to-blue-500/10", accentColor: "text-cyan-500" },
  { name: "InstaVision", description: "Real-time photo enhancement", itemCount: 100, icon: Camera, background: "from-rose-500/10 to-pink-500/10", accentColor: "text-rose-500" },
  { name: "MaxUltra", description: "6K video, immersive VR experiences", itemCount: 90, icon: Gamepad, background: "from-yellow-500/10 to-amber-500/10", accentColor: "text-yellow-500" },
  { name: "Clarity", description: "Quantum optics, ultra-clear display", itemCount: 50, icon: Camera, background: "from-blue-500/10 to-cyan-500/10", accentColor: "text-blue-500" },
  { name: "CyberSense", description: "Neural network integration, AI-driven", itemCount: 110, icon: Cpu, background: "from-green-500/10 to-emerald-500/10", accentColor: "text-green-500" },
  { name: "UltraEdge", description: "8K edge-to-edge display", itemCount: 95, icon: Smartphone, background: "from-teal-500/10 to-blue-500/10", accentColor: "text-teal-500" },
  { name: "Echo Pro", description: "Holographic call interface", itemCount: 50, icon: Headphones, background: "from-rose-500/10 to-pink-500/10", accentColor: "text-rose-500" },
  { name: "RevoPhone", description: "AI-powered camera, immersive sound", itemCount: 150, icon: Smartphone, background: "from-blue-500/10 to-purple-500/10", accentColor: "text-blue-500" },
  { name: "ProVision", description: "Quantum touch, foldable screen", itemCount: 80, icon: Laptop, background: "from-indigo-500/10 to-violet-500/10", accentColor: "text-indigo-500" },
  { name: "SnapPower", description: "Fast charging, long-lasting battery", itemCount: 120, icon: Headphones, background: "from-cyan-500/10 to-blue-500/10", accentColor: "text-cyan-500" },
  { name: "Vibe X", description: "Neural AI voice control, ultra-HD screen", itemCount: 65, icon: Watch, background: "from-green-500/10 to-emerald-500/10", accentColor: "text-green-500" },
  { name: "CyberCore", description: "Robust AI with VR capability", itemCount: 95, icon: Gamepad, background: "from-teal-500/10 to-blue-500/10", accentColor: "text-teal-500" },
  { name: "Photon S", description: "AI-enhanced optical zoom, ultra-fast processor", itemCount: 130, icon: Camera, background: "from-red-500/10 to-orange-500/10", accentColor: "text-red-500" },
  { name: "Fusion 9", description: "Holographic touchscreen, foldable", itemCount: 85, icon: Smartphone, background: "from-blue-500/10 to-cyan-500/10", accentColor: "text-blue-500" },
];

export default function SmartphonesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Hero Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Explore the Future of Smartphones
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Dive into the world of innovative smartphones that redefine mobile experiences.
          </p>
        </div>
      </div>

      {/* Smartphones Grid */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {smartphones.map((smartphone) => (
              <Card
                key={smartphone.name}
                className="group relative overflow-hidden backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${smartphone.background} opacity-50`} />
                <CardContent className="relative p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className={`h-8 w-8 ${smartphone.accentColor} transition-transform group-hover:scale-110`}>
                      {/* Using different icons for each product */}
                      <smartphone.icon className="text-2xl" />
                    </div>
                    {smartphone.trending && (
                      <Badge variant="secondary" className="bg-primary/10">
                        Trending
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{smartphone.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {smartphone.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {smartphone.itemCount} products
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group hover:bg-primary/10"
                      asChild
                    >
                      <Link href={`/shop?product=${smartphone.name.toLowerCase().replace(/\s+/g, '-')}`}>
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
