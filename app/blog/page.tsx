"use client"

import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, BookOpen, Leaf } from "lucide-react"

export default function BlogPage() {
  const blogs = [
    {
      id: 1,
      title: "Understanding Your Dosha: The Foundation of Ayurvedic Skin Treatment",
      excerpt:
        "Learn about Vata, Pitta, and Kapha doshas and how they determine your skin type and treatment approach in Ayurveda.",
      category: "Ayurveda Basics",
      author: "Dr. Manpreet Singh",
      date: "November 5, 2025",
      readTime: "8 min read",
      image: "/ayurvedic-dosha-elements.jpg",
      slug: "understanding-dosha",
    },
    {
      id: 2,
      title: "Psoriasis and Ayurveda: Breaking the Cycle of Inflammation",
      excerpt:
        "Discover how Ayurvedic treatments address the root cause of psoriasis by balancing Vata and Pitta doshas.",
      category: "Skin Conditions",
      author: "Dr. Manpreet Singh",
      date: "November 1, 2025",
      readTime: "10 min read",
      image: "/psoriasis-treatment.jpg",
      slug: "psoriasis-ayurveda",
    },
    {
      id: 3,
      title: "Panchakarma: The Five Cleansing Therapies for Total Body Healing",
      excerpt:
        "Explore the ancient Panchakarma detoxification process and how it rejuvenates your skin and overall health.",
      category: "Treatments",
      author: "Dr. Manpreet Singh",
      date: "October 28, 2025",
      readTime: "12 min read",
      image: "/panchakarma-therapy.jpg",
      slug: "panchakarma-detoxification",
    },
    {
      id: 4,
      title: "The Role of Diet in Skin Health: Ayurvedic Nutrition Guide",
      excerpt:
        "Learn which foods heal your skin according to your dosha and how proper nutrition addresses skin problems from within.",
      category: "Nutrition",
      author: "Dr. Manpreet Singh",
      date: "October 22, 2025",
      readTime: "9 min read",
      image: "/ayurvedic-nutrition-food.jpg",
      slug: "ayurvedic-nutrition",
    },
    {
      id: 5,
      title: "Stress and Skin: How Emotional Balance Heals Chronic Skin Diseases",
      excerpt:
        "Understand the mind-skin connection and discover Ayurvedic stress management techniques for clearer, healthier skin.",
      category: "Wellness",
      author: "Dr. Manpreet Singh",
      date: "October 18, 2025",
      readTime: "7 min read",
      image: "/stress-relief-meditation.jpg",
      slug: "stress-skin-health",
    },
    {
      id: 6,
      title: "Natural Skincare Oils: Ancient Remedies for Modern Skin Problems",
      excerpt:
        "Discover the most effective Ayurvedic oils for different skin conditions and how to use them properly for maximum benefits.",
      category: "Natural Remedies",
      author: "Dr. Manpreet Singh",
      date: "October 14, 2025",
      readTime: "8 min read",
      image: "/ayurvedic-healing-oils.jpg",
      slug: "ayurvedic-oils",
    },
  ]

  const resources = [
    {
      title: "Ayurvedic Skin Care Guide",
      description: "Complete guide to daily skincare routines based on your dosha constitution",
      type: "PDF Guide",
      icon: BookOpen,
    },
    {
      title: "Dietary Recommendations by Dosha",
      description: "Detailed nutritional guide for skin health and disease prevention",
      type: "Resource",
      icon: Leaf,
    },
    {
      title: "Herbal Remedies Reference",
      description: "Comprehensive list of herbs used in treating various skin conditions",
      type: "Reference",
      icon: BookOpen,
    },
    {
      title: "Meditation & Yoga for Skin Health",
      description: "Guided practices to balance doshas and support skin healing",
      type: "Video Series",
      icon: Leaf,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Blog & Resources</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Educational content about Ayurvedic skin treatments, wellness tips, and natural remedies for lasting skin
            health.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <Link href={`/blog/${blogs[0].slug}`}>
            <Card className="overflow-hidden border border-border bg-card hover:shadow-xl transition-shadow cursor-pointer">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative h-64 md:h-96">
                  <Image
                    src={blogs[0].image || "/placeholder.svg"}
                    alt={blogs[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary">{blogs[0].category}</Badge>
                    <span className="text-sm text-muted-foreground">Featured</span>
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">{blogs[0].title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{blogs[0].excerpt}</p>
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {blogs[0].author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {blogs[0].date}
                    </div>
                    <span>{blogs[0].readTime}</span>
                  </div>
                  <button className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.slice(1).map((blog) => (
              <Link key={blog.id} href={`/blog/${blog.slug}`}>
                <Card className="h-full border border-border bg-card hover:shadow-lg transition-shadow cursor-pointer overflow-hidden group">
                  <div className="relative h-48 bg-muted overflow-hidden">
                    <Image
                      src={blog.image || "/placeholder.svg"}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    <Badge variant="secondary" className="mb-3">
                      {blog.category}
                    </Badge>
                    <h3 className="text-lg font-bold text-foreground mb-3 leading-snug">{blog.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{blog.excerpt}</p>

                    <div className="space-y-3 pt-4 border-t border-border text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="w-3 h-3" />
                        {blog.author}
                      </div>
                      <div className="flex justify-between">
                        <span>{blog.date}</span>
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Free Resources</h2>
            <p className="text-lg text-muted-foreground">Download guides and access our learning materials</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, idx) => {
              const Icon = resource.icon
              return (
                <Card
                  key={idx}
                  className="p-8 border border-border bg-card hover:shadow-lg transition-shadow cursor-pointer group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground mb-4">{resource.description}</p>
                  <button className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                    Download Now <ArrowRight className="w-4 h-4" />
                  </button>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-8 opacity-90">
            Get weekly tips on Ayurvedic skincare and wellness delivered to your inbox.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none"
            />
            <button className="px-8 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
