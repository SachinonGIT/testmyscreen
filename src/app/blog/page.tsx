'use client';

import Link from 'next/link';
import { Monitor, Palette, Sun, Eye, Clock } from 'lucide-react';

const posts = [
  {
    slug: 'how-to-spot-and-fix-dead-pixels',
    title: 'How to Spot and Fix Dead Pixels on Your Screen',
    date: 'February 23, 2025',
    excerpt: "Dead pixels—those tiny, lifeless dots on your screen—can be a real nuisance. Whether you're gaming, editing photos, or binge-watching, they disrupt your experience.",
    icon: <Monitor className="w-6 h-6" />,
    category: 'Screen Issues',
    readTime: '3 min read',
  },
  {
    slug: 'why-color-accuracy-matters',
    title: 'Why Color Accuracy Matters for Designers and Gamers',
    date: 'February 24, 2025',
    excerpt: "Ever wonder why your game's reds look muddy or your design's blues don't pop? Color accuracy is the answer. Here's why it's a game-changer.",
    icon: <Palette className="w-6 h-6" />,
    category: 'Color Quality',
    readTime: '4 min read',
  },
  {
    slug: 'backlight-bleed-explained',
    title: 'Backlight Bleed: What It Is and How to Test for It',
    date: 'February 25, 2025',
    excerpt: "Noticed a hazy glow in dark movie scenes? That's backlight bleed—a common LCD flaw. Learn what it is and why it's worth checking.",
    icon: <Sun className="w-6 h-6" />,
    category: 'Display Quality',
    readTime: '3 min read',
  },
  {
    slug: 'viewing-angles-explained',
    title: 'Viewing Angles Explained: Why Your Screen Type Matters',
    date: 'February 26, 2025',
    excerpt: "Ever tilted your head and seen colors fade? That's a viewing angle issue. Learn why it matters and how to test it.",
    icon: <Eye className="w-6 h-6" />,
    category: 'Screen Technology',
    readTime: '3 min read',
  },
  {
    slug: 'response-time-key-to-smooth-gaming',
    title: 'Response Time: The Key to Smooth Gaming and Video',
    date: 'February 27, 2025',
    excerpt: "Blurry motion in games or videos? That's slow response time at work. Learn how to measure it and optimize your screen.",
    icon: <Clock className="w-6 h-6" />,
    category: 'Gaming',
    readTime: '3 min read',
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.08),transparent_50%)]" />

        <main className="relative max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:py-24">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Screen Testing Blog
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Expert insights, tips, and guides for getting the most out of your display.
              Learn about screen testing, troubleshooting, and optimization.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="space-y-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <article className="card p-6 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                      {post.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.category}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-400 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex items-center text-blue-400 font-medium">
                        <span>Read more</span>
                        <svg
                          className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
} 