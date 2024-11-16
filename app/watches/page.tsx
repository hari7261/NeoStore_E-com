import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


// Watch product list
const watches = [
  { name: "NeuroLink Watch", description: "AI neural sync, health insights", itemCount: 75, trending: true, icon: "💡", background: "from-blue-500/10 to-indigo-500/10", accentColor: "text-blue-500" },
  { name: "HoloTime", description: "Holographic display, virtual touch", itemCount: 60, icon: "🕶️", background: "from-purple-500/10 to-pink-500/10", accentColor: "text-purple-500" },
  { name: "BioPulse", description: "Bio-monitoring, health AI", itemCount: 100, icon: "🩺", background: "from-green-500/10 to-emerald-500/10", accentColor: "text-green-500" },
  { name: "EonTracker", description: "Quantum timekeeping, GPS", itemCount: 120, icon: "⌚", background: "from-yellow-500/10 to-amber-500/10", accentColor: "text-yellow-500" },
  { name: "QuantumFit", description: "AI health tracker, sleep analysis", itemCount: 90, icon: "🤖", background: "from-cyan-500/10 to-teal-500/10", accentColor: "text-cyan-500" },
  { name: "SyncMaster", description: "Neural interface, syncs with brain waves", itemCount: 80, icon: "🔗", background: "from-indigo-500/10 to-violet-500/10", accentColor: "text-indigo-500" },
  { name: "MetaWatch", description: "VR interface, immersive experience", itemCount: 70, icon: "🎮", background: "from-red-500/10 to-orange-500/10", accentColor: "text-red-500" },
  { name: "Visionary", description: "Smart screen, AR-enabled", itemCount: 50, icon: "🔮", background: "from-teal-500/10 to-blue-500/10", accentColor: "text-teal-500" },
  { name: "SmartPulse", description: "Health monitoring, ECG", itemCount: 65, icon: "💓", background: "from-rose-500/10 to-pink-500/10", accentColor: "text-rose-500" },
  { name: "AlphaOne", description: "AI-powered fitness insights", itemCount: 130, icon: "🏋️", background: "from-green-500/10 to-emerald-500/10", accentColor: "text-green-500" },
  { name: "NeuraTime", description: "Neural connection, bio-sync", itemCount: 80, icon: "🧠", background: "from-cyan-500/10 to-teal-500/10", accentColor: "text-cyan-500" },
  { name: "EvoSync", description: "Mind-controlled interface", itemCount: 60, icon: "🧘", background: "from-yellow-500/10 to-amber-500/10", accentColor: "text-yellow-500" },
  { name: "PowerPulse", description: "Energy optimization, 7-day battery", itemCount: 55, icon: "🔋", background: "from-indigo-500/10 to-violet-500/10", accentColor: "text-indigo-500" },
  { name: "FutureWave", description: "Quantum chip, VR-ready", itemCount: 85, icon: "🌊", background: "from-blue-500/10 to-indigo-500/10", accentColor: "text-blue-500" },
  { name: "NanoTrack", description: "Nano-sensors for precise fitness tracking", itemCount: 120, icon: "⚙️", background: "from-green-500/10 to-teal-500/10", accentColor: "text-green-500" },
  { name: "HyperClock", description: "Real-time data syncing, AI assistant", itemCount: 70, icon: "🕰️", background: "from-pink-500/10 to-purple-500/10", accentColor: "text-pink-500" },
  { name: "EchoWatch", description: "Voice assistant integrated, sleep monitor", itemCount: 65, icon: "📞", background: "from-rose-500/10 to-pink-500/10", accentColor: "text-rose-500" },
  { name: "PulseElite", description: "Elite fitness metrics, heart rate optimization", itemCount: 95, icon: "💪", background: "from-blue-500/10 to-cyan-500/10", accentColor: "text-blue-500" },
  { name: "SkyTrack", description: "Altitude, pressure and heart rate monitoring", itemCount: 85, icon: "🌤️", background: "from-teal-500/10 to-blue-500/10", accentColor: "text-teal-500" },
  { name: "XenonPulse", description: "Bio-feedback, stress relief", itemCount: 75, icon: "⚡", background: "from-purple-500/10 to-pink-500/10", accentColor: "text-purple-500" },
  { name: "Cortex", description: "AI-driven biometric data sync", itemCount: 65, icon: "🧠", background: "from-yellow-500/10 to-orange-500/10", accentColor: "text-yellow-500" },
  { name: "ChronoPro", description: "Time-travel mode for historical data", itemCount: 100, icon: "⏳", background: "from-cyan-500/10 to-teal-500/10", accentColor: "text-cyan-500" },
  { name: "NeuroSync", description: "Sync with thoughts for fast controls", itemCount: 90, icon: "🔗", background: "from-indigo-500/10 to-violet-500/10", accentColor: "text-indigo-500" },
  { name: "Zenith", description: "Meditation tracker, stress-free alerts", itemCount: 110, icon: "🧘‍♂️", background: "from-red-500/10 to-orange-500/10", accentColor: "text-red-500" },
  { name: "PulseFlex", description: "Advanced heart rate monitor, sleep cycle", itemCount: 80, icon: "💓", background: "from-teal-500/10 to-blue-500/10", accentColor: "text-teal-500" },
  { name: "UltraChrono", description: "Quantum time technology, AI calendar", itemCount: 90, icon: "⏱️", background: "from-purple-500/10 to-pink-500/10", accentColor: "text-purple-500" },
  { name: "XenoFit", description: "Fitness tracker with real-time coaching", itemCount: 70, icon: "💪", background: "from-green-500/10 to-emerald-500/10", accentColor: "text-green-500" },
  { name: "Helios", description: "Energy-efficient, solar-powered watch", itemCount: 60, icon: "🌞", background: "from-yellow-500/10 to-amber-500/10", accentColor: "text-yellow-500" },
  { name: "ChronoOne", description: "Advanced syncing with all devices", itemCount: 50, icon: "🕹️", background: "from-blue-500/10 to-indigo-500/10", accentColor: "text-blue-500" },
  { name: "VibeSense", description: "Emotional health tracker, stress reduction", itemCount: 40, icon: "🔮", background: "from-cyan-500/10 to-teal-500/10", accentColor: "text-cyan-500" },
  { name: "GlidePro", description: "Precision time tracking, fitness hub", itemCount: 55, icon: "🏃", background: "from-rose-500/10 to-pink-500/10", accentColor: "text-rose-500" },
  { name: "Axion", description: "Augmented reality notifications", itemCount: 75, icon: "🔭", background: "from-purple-500/10 to-indigo-500/10", accentColor: "text-purple-500" },
];

export default function WatchesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Hero Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Explore Future Watches
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover a collection of futuristic watches that blend cutting-edge technology and unique design.
          </p>
        </div>
      </div>

      {/* Watches Grid */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {watches.map((watch) => (
              <Card
                key={watch.name}
                className="group relative overflow-hidden backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${watch.background} opacity-50`} />
                <CardContent className="relative p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className={`h-8 w-8 ${watch.accentColor} transition-transform group-hover:scale-110`}>
                      {/* Using different futuristic icons for each product */}
                      <span className="text-2xl">{watch.icon}</span>
                    </div>
                    {watch.trending && (
                      <Badge variant="secondary" className="bg-primary/10">
                        Trending
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{watch.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {watch.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {watch.itemCount} products
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group hover:bg-primary/10"
                      asChild
                    >
                      <Link href={`/shop?product=${watch.name.toLowerCase().replace(/\s+/g, '-')}`}>
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
