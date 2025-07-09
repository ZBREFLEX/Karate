import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Shield, Target, Award, Users, Clock, MapPin, Phone, Mail, Star, Sword, Trophy } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function KaratePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <header className="relative z-50 border-b border-gray-800/50 backdrop-blur-md bg-black/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/25">
                  <Sword className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  OKINAWA SHORIN-RYU KARATE
                </h1>
                <p className="text-xs text-gray-400">Traditional Karate Academy</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-sm font-medium hover:text-cyan-400 transition-colors duration-300">
                About
              </Link>
              <Link href="#masters" className="text-sm font-medium hover:text-cyan-400 transition-colors duration-300">
                Masters
              </Link>
              <Link href="#programs" className="text-sm font-medium hover:text-cyan-400 transition-colors duration-300">
                Programs
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-cyan-400 transition-colors duration-300">
                Contact
              </Link>
            </nav>

            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg shadow-cyan-500/25 border-0">
              Join Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/30">
              ⚡ Est. 1985 - 38 Years of Excellence
            </Badge>

            <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                MASTER
              </span>
              <br />
              <span className="text-white">THE ART</span>
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300 md:text-xl leading-relaxed">
              Discover the ancient art of karate through modern training methods. Our dojo combines traditional
              techniques with cutting-edge training to forge warriors of discipline, strength, and honor.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8 py-4 shadow-lg shadow-cyan-500/25 border-0"
              >
                Begin Your Journey
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 bg-transparent"
              >
                Watch Training
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border border-cyan-500/30 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 border border-purple-500/30 rounded-lg rotate-45 animate-pulse"></div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              About Dragon Fist Dojo
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              For nearly four decades, Dragon Fist Dojo has been the premier destination for traditional karate
              training. Our academy blends time-honored techniques with modern training methodologies to create complete
              martial artists.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 group">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-600/20 group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-all duration-300">
                  <Shield className="h-6 w-6 text-cyan-400" />
                </div>
                <CardTitle className="text-cyan-400">Traditional Values</CardTitle>
                <CardDescription className="text-gray-300">
                  Rooted in ancient traditions of respect, discipline, and honor that have guided martial artists for
                  centuries.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 group">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-600/20 group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-all duration-300">
                  <Target className="h-6 w-6 text-cyan-400" />
                </div>
                <CardTitle className="text-cyan-400">Modern Training</CardTitle>
                <CardDescription className="text-gray-300">
                  State-of-the-art facilities and innovative training methods to maximize your potential and accelerate
                  growth.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 group">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-600/20 group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-all duration-300">
                  <Trophy className="h-6 w-6 text-cyan-400" />
                </div>
                <CardTitle className="text-cyan-400">Proven Excellence</CardTitle>
                <CardDescription className="text-gray-300">
                  Over 500 black belts trained, 50+ tournament champions, and countless lives transformed through
                  martial arts.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Masters Section */}
      <section
        id="masters"
        className="relative z-10 py-20 md:py-32 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Our Masters
            </h2>
            <p className="text-lg text-gray-300">
              Meet the legendary masters who will guide your journey from novice to expert
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
            {/* Master 1 */}
            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 group overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Master Hiroshi Tanaka"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <Badge className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white border-0">
                  10th Dan
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-400">MasterHanshi Giyu Gibo</CardTitle>
                <CardDescription className="text-gray-300 text-base leading-relaxed">
                  Grandmaster Tanaka is a 10th Dan black belt with over 45 years of experience. Trained directly under
                  legendary masters in Okinawa, he specializes in traditional Shotokan karate and has dedicated his life
                  to preserving ancient techniques while adapting them for modern practitioners. His philosophy
                  emphasizes the unity of mind, body, and spirit.
                </CardDescription>
                <div className="flex items-center gap-2 mt-4">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-400">Founder & Chief Instructor</span>
                </div>
              </CardHeader>
            </Card>

            {/* Master 2 */}
            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 group overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Master Elena Rodriguez"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <Badge className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                  9th Dan
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-400">Master DR . S . Rethhinam</CardTitle>
                <CardDescription className="text-gray-300 text-base leading-relaxed">
                  Master Rodriguez is an 8th Dan black belt and former World Champion in kata competition. She brings 30
                  years of competitive experience and specializes in precision techniques and mental conditioning. Known
                  for her innovative training methods, she has coached numerous national champions and focuses on
                  developing both physical prowess and mental resilience in her students.
                </CardDescription>
                <div className="flex items-center gap-2 mt-4">
                  <Award className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm text-gray-400">Competition Director</span>
                </div>
              </CardHeader>
            </Card>

            {/* Master 3 */}
            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 group overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Master David Chen"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <Badge className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-teal-500 text-white border-0">
                  5th Dan
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-400">Master Renshi N .A . Naseer</CardTitle>
                <CardDescription className="text-gray-300 text-base leading-relaxed">
                  Master Chen is a 7th Dan black belt who seamlessly blends traditional karate with modern sports
                  science. With a background in kinesiology and 25 years of teaching experience, he specializes in
                  biomechanics and injury prevention. His analytical approach to martial arts helps students understand
                  the 'why' behind every technique, making him particularly effective with adult learners.
                </CardDescription>
                <div className="flex items-center gap-2 mt-4">
                  <Users className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm text-gray-400">Sensei</span>
                </div>
              </CardHeader>
            </Card>

            {/* Master 4 */}
            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 group overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Master Yuki Nakamura"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <Badge className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-0">
                  4th Dan
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-400">Master Sukumaran P . K</CardTitle>
                <CardDescription className="text-gray-300 text-base leading-relaxed">
                  Master Nakamura is a 6th Dan black belt who specializes in youth development and character building.
                  With 20 years of experience working with children and teenagers, she has developed unique programs
                  that build confidence, discipline, and leadership skills. Her patient and nurturing approach has
                  helped thousands of young students develop not just martial arts skills, but life skills.
                </CardDescription>
                <div className="flex items-center gap-2 mt-4">
                  <Zap className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm text-gray-400">Youth Program Director</span>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="relative z-10 py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Training Programs
            </h2>
            <p className="text-lg text-gray-300">Comprehensive programs designed for every skill level and age group</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-cyan-400 text-xl">Youth Program</CardTitle>
                <CardDescription className="text-gray-300">
                  Ages 6-17 • Character development through martial arts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-cyan-400" /> Mon/THUR/Fri 4:00-5:00 PM
                  </li>
                  <li className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-cyan-400" /> Small class sizes (max 12)
                  </li>
                  <li className="flex items-center">
                    <Award className="h-4 w-4 mr-2 text-cyan-400" /> Belt progression system
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/30 backdrop-blur-sm hover:border-purple-400 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-purple-400 text-xl">Adult Program</CardTitle>
                <CardDescription className="text-gray-300">
                  Ages 18+ • Fitness, self-defense, and discipline
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-purple-400" /> Tue/Thu 7:00-8:30 PM
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-purple-400" /> Self-defense focus
                  </li>
                  <li className="flex items-center">
                    <Target className="h-4 w-4 mr-2 text-purple-400" /> Stress relief & fitness
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border-orange-500/30 backdrop-blur-sm hover:border-orange-400 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-orange-400 text-xl">Competition Team</CardTitle>
                <CardDescription className="text-gray-300">Elite training • Tournament preparation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-orange-400" /> Sat 10:00 AM-12:00 PM
                  </li>
                  <li className="flex items-center">
                    <Trophy className="h-4 w-4 mr-2 text-orange-400" /> Tournament training
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 mr-2 text-orange-400" /> Advanced techniques
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative z-10 py-20 md:py-32 bg-gradient-to-b from-transparent via-gray-900/30 to-black"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Begin Your Journey
              </h2>
              <p className="text-lg text-gray-300">
                Ready to start your martial arts journey? Contact us today for a free trial class.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-cyan-400">Visit Our Dojo</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-cyan-400" />
                    <span className="text-gray-300">1234 Warrior Street, Martial City, MC 12345</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-cyan-400" />
                    <span className="text-gray-300">(555) 123-KICK</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-cyan-400" />
                    <span className="text-gray-300">info@dragonfistdojo.com</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-cyan-400">Training Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Monday - Friday</span>
                    <span className="text-cyan-400">4:00 PM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Saturday</span>
                    <span className="text-cyan-400">9:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-cyan-400">Closed</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-12 py-4 shadow-lg shadow-cyan-500/25 border-0"
              >
                Schedule Free Trial
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800/50 bg-black/80 backdrop-blur-sm py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600">
                <Sword className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                 OKINAWA SHORIN-RYU KARATE
              </span>
            </div>
            <p className="text-gray-400 mb-6">Forging warriors of discipline, strength, and honor since 1985</p>
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()}  OKINAWA SHORIN-RYU KARATE. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
