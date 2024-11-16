import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// Importing the necessary icons for audio products
import { Headphones, Speaker, Volume, Music, Bluetooth, Mic, Headset, MicOff, Volume2, Camera, Mic2Icon, AudioWaveform, VolumeXIcon, Music2Icon, CloudLightningIcon } from "lucide-react";

// Audio product list
const audioProducts = [
    { name: "SoundScape Pro", description: "AI-powered noise cancellation, deep bass", itemCount: 150, trending: true, icon: <Headphones />, background: "from-purple-500/10 to-pink-500/10", accentColor: "text-purple-500" },
    { name: "Echo Beats", description: "Smart voice assistant, surround sound", itemCount: 90, icon: <Speaker />, background: "from-blue-500/10 to-indigo-500/10", accentColor: "text-blue-500" },
    { name: "Pulse X", description: "Wireless connectivity, deep sound profile", itemCount: 120, icon: <Volume />, background: "from-teal-500/10 to-cyan-500/10", accentColor: "text-teal-500" },
    { name: "SonicPro", description: "Premium audio, built-in equalizer", itemCount: 110, icon: <Music />, background: "from-yellow-500/10 to-amber-500/10", accentColor: "text-yellow-500" },
    { name: "VibeStream", description: "Spatial audio, surround sound", itemCount: 80, icon: <Mic2Icon />, background: "from-green-500/10 to-emerald-500/10", accentColor: "text-green-500" },
    { name: "NoiseBeats", description: "Active noise cancellation, long battery life", itemCount: 95, icon: <Bluetooth />, background: "from-purple-500/10 to-indigo-500/10", accentColor: "text-purple-500" },
    { name: "UltraSound", description: "360-degree surround sound, ultra bass", itemCount: 140, icon: <AudioWaveform />, background: "from-red-500/10 to-orange-500/10", accentColor: "text-red-500" },
    { name: "EchoFlex", description: "Smart volume control, bass optimization", itemCount: 75, icon: <Mic />, background: "from-indigo-500/10 to-violet-500/10", accentColor: "text-indigo-500" },
    { name: "HyperSound", description: "Dolby Atmos audio, deep immersion", itemCount: 160, icon: <Headset />, background: "from-teal-500/10 to-cyan-500/10", accentColor: "text-teal-500" },
    { name: "VibeMaster", description: "Premium headset, noise isolation", itemCount: 130, icon: <VolumeXIcon />, background: "from-blue-500/10 to-indigo-500/10", accentColor: "text-blue-500" },
    { name: "BassWave", description: "Bass-boosted sound, high-definition clarity", itemCount: 100, icon: <MicOff />, background: "from-green-500/10 to-emerald-500/10", accentColor: "text-green-500" },
    { name: "AudioFlex", description: "Adaptive sound, real-time audio feedback", itemCount: 85, icon: <Volume2 />, background: "from-cyan-500/10 to-teal-500/10", accentColor: "text-cyan-500" },
    { name: "AirSonic", description: "Wireless, high-fidelity sound experience", itemCount: 150, icon: <Volume2 />, background: "from-yellow-500/10 to-orange-500/10", accentColor: "text-yellow-500" },
    { name: "HyperBass", description: "Long-range wireless, ultra bass", itemCount: 120, icon: <Music2Icon />, background: "from-red-500/10 to-orange-500/10", accentColor: "text-red-500" },
    { name: "ClaritySound", description: "Crystal-clear audio, noise filtering", itemCount: 80, icon: <Camera />, background: "from-teal-500/10 to-cyan-500/10", accentColor: "text-teal-500" },
    { name: "NeuroBeats", description: "Brainwave-optimized sound experience", itemCount: 95, icon: <Music2Icon />, background: "from-indigo-500/10 to-violet-500/10", accentColor: "text-indigo-500" },
    { name: "FusionSound", description: "AI-enhanced sound with auto-tuning", itemCount: 130, icon: <Speaker />, background: "from-green-500/10 to-emerald-500/10", accentColor: "text-green-500" },
    { name: "EchoMax", description: "360-degree surround, immersive sound", itemCount: 100, icon: <Volume />, background: "from-blue-500/10 to-indigo-500/10", accentColor: "text-blue-500" },
    { name: "PureTone", description: "Lossless audio, Bluetooth 5.0", itemCount: 75, icon: <Music />, background: "from-yellow-500/10 to-amber-500/10", accentColor: "text-yellow-500" },
    { name: "SoundLink", description: "High-fidelity stereo sound, adaptive EQ", itemCount: 140, icon: <Mic />, background: "from-cyan-500/10 to-teal-500/10", accentColor: "text-cyan-500" },
    { name: "TuneMax", description: "High-powered audio, dynamic range", itemCount: 160, icon: <Bluetooth />, background: "from-teal-500/10 to-cyan-500/10", accentColor: "text-teal-500" },
    { name: "SoundX", description: "Wireless audio, rich low-end frequencies", itemCount: 85, icon: <Mic2Icon />, background: "from-red-500/10 to-orange-500/10", accentColor: "text-red-500" },
    { name: "BassStream", description: "Enhanced bass, multi-device pairing", itemCount: 110, icon: <Headset />, background: "from-blue-500/10 to-indigo-500/10", accentColor: "text-blue-500" },
    { name: "EchoWave", description: "Adaptive noise-cancellation, crystal-clear audio", itemCount: 120, icon: <Mic />, background: "from-purple-500/10 to-pink-500/10", accentColor: "text-purple-500" },
    { name: "UltraSonic", description: "Wireless surround sound with deep bass", itemCount: 135, icon: <VolumeXIcon />, background: "from-green-500/10 to-emerald-500/10", accentColor: "text-green-500" },
    { name: "SoundSphere", description: "360-degree immersive audio, ultra-clear sound", itemCount: 145, icon: <Volume2 />, background: "from-teal-500/10 to-cyan-500/10", accentColor: "text-teal-500" },
    { name: "AudioBlast", description: "AI-enhanced bass, smart audio controls", itemCount: 100, icon: <Music2Icon />, background: "from-yellow-500/10 to-amber-500/10", accentColor: "text-yellow-500" },
    { name: "SonicBoom", description: "High-powered sound, immersive experience", itemCount: 125, icon: <Headphones />, background: "from-purple-500/10 to-pink-500/10", accentColor: "text-purple-500" },
    { name: "EchoForce", description: "High-fidelity surround sound, built-in amplifier", itemCount: 115, icon: <Speaker />, background: "from-red-500/10 to-orange-500/10", accentColor: "text-red-500" },
    { name: "BassFusion", description: "Customizable bass profiles, Bluetooth audio", itemCount: 110, icon: <Music />, background: "from-blue-500/10 to-indigo-500/10", accentColor: "text-blue-500" },
];

export default function AudioPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
            {/* Hero Section */}
            <div className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl text-center">
                    <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                        Explore Futuristic Audio Devices
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                        Discover a collection of cutting-edge audio products designed for superior sound experiences.
                    </p>
                </div>
            </div>

            {/* Audio Products Grid */}
            <div className="px-4 sm:px-6 lg:px-8 pb-16">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {audioProducts.map((product) => (
                            <Card
                                key={product.name}
                                className="group relative overflow-hidden backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${product.background} opacity-50`} />
                                <CardContent className="relative p-6">
                                    <div className="mb-4 flex items-center justify-between">
                                        <div className={`h-8 w-8 ${product.accentColor} transition-transform group-hover:scale-110`}>
                                            {product.icon}
                                        </div>
                                        {product.trending && (
                                            <Badge variant="secondary" className="bg-primary/10">
                                                Trending
                                            </Badge>
                                        )}
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                                    <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-muted-foreground">{product.itemCount} products</span>
                                        <Button variant="ghost" size="sm" className="group hover:bg-primary/10" asChild>
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
