import Link from 'next/link';
import { Monitor, Users, Target } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.08),transparent_50%)]" />

        <main className="relative max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:py-24">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500">
              About UrgentHai
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Empowering users with professional-grade screen testing tools, making display optimization accessible to everyone.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-20">
            {/* Who We Are */}
            <section className="relative">
              <div className="flex items-start gap-6">
                <div className="hidden sm:block">
                  <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">Who We Are</h2>
                  <p className="text-gray-300 leading-relaxed">
                    UrgentHai is a passionate team of tech enthusiasts based in Thailand, committed to empowering users with tools
                    to enhance their digital lives. Founded in 2025, our mission is to provide accessible, high-quality solutions
                    for screen testing and optimization.
                  </p>
                </div>
              </div>
            </section>

            {/* What We Do */}
            <section className="relative">
              <div className="flex items-start gap-6">
                <div className="hidden sm:block">
                  <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <Monitor className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">What We Do</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Our flagship offering, the Screen Test Suite, was born from a simple idea: everyone deserves a perfect display.
                    From spotting dead pixels to fine-tuning response times, our tools cater to gamers, professionals, and everyday
                    users alike. We believe in simplicity, precision, and delivering value—free of charge.
                  </p>
                </div>
              </div>
            </section>

            {/* Why We&apos;re Here */}
            <section className="relative">
              <div className="flex items-start gap-6">
                <div className="hidden sm:block">
                  <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                    <Target className="w-6 h-6 text-green-400" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">Why We&apos;re Here</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We&apos;ve seen how small screen issues can disrupt big moments—whether it&apos;s a missed detail in a design project
                    or lag in a crucial game. UrgentHai exists to help you catch those issues early, optimize your setup, and
                    enjoy a flawless visual experience.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact CTA */}
            <section className="relative mt-16">
              <div className="text-center space-y-6">
                <p className="text-lg text-gray-300">
                  Have questions? We&apos;re here to assist!
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-blue-600 text-white font-medium
                    transition-all duration-200 hover:bg-blue-500 focus:outline-none focus:ring-2
                    focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Contact Us
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
} 