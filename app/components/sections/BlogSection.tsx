import Image from "next/image"
import { H2, H3, H5, H6, Overline, BodySmall, Caption } from "@/app/components/ui/typography"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}

type BlogPost = {
  image: string
  alt: string
  category: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
}

const POSTS: BlogPost[] = [
  {
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80",
    alt: "Grand country estate at dusk",
    category: "Market Insights",
    title: "The Art of Discretion: How Off-Market Sales Are Reshaping Luxury Property",
    excerpt:
      "In London's most exclusive postcodes, a growing number of prime properties never appear on the open market. We explore why buyers and sellers alike are choosing the private route — and what it means for pricing.",
    author: "James Hartley",
    date: "14 May 2026",
    readTime: "6 min read",
  },
  {
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80",
    alt: "Elegant living room with high ceilings",
    category: "Interior Design",
    title: "The Return of the Drawing Room: How Buyers Are Reclaiming Formal Living Spaces",
    excerpt: "After years of open-plan dominance, defined rooms are back in demand.",
    author: "Sophie Aldridge",
    date: "8 May 2026",
    readTime: "4 min read",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80",
    alt: "Landscaped garden with swimming pool",
    category: "Country Estates",
    title: "Grounds for Consideration: What Makes a Country Garden Add Value",
    excerpt: "Mature planting, walled kitchen gardens, and lake frontage — the features that move the needle.",
    author: "Oliver Graves",
    date: "2 May 2026",
    readTime: "5 min read",
  },
  {
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=600&q=80",
    alt: "Architectural facade detail",
    category: "Buying Guide",
    title: "Grade I Listed: Navigating the Constraints and Rewards of Historic Homes",
    excerpt: "Owning a listed building is a privilege — and a responsibility. Here is what prospective buyers should know.",
    author: "James Hartley",
    date: "24 Apr 2026",
    readTime: "7 min read",
  },
]

function LargePostCard({ post, className }: { post: BlogPost; className?: string }) {
  return (
    <article className={cn("group flex flex-col cursor-pointer", className)}>

      {/* Image */}
      <div className="relative overflow-hidden flex-1 min-h-[280px]">
        <Image
          src={post.image}
          alt={post.alt}
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Category badge */}
        <div className="absolute top-5 left-5">
          <span className="font-sans text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 bg-[var(--color-paper)] text-[var(--color-ink)]">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white border border-t-0 border-[var(--color-border)] p-7">
        <H3 className="text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-gold)] transition-colors duration-300 leading-snug">
          {post.title}
        </H3>
        <BodySmall className="text-[var(--color-ink-muted)] mb-5 leading-relaxed line-clamp-3">
          {post.excerpt}
        </BodySmall>
        <div className="flex items-center gap-3">
          <Caption>{post.author}</Caption>
          <span className="text-[var(--color-border)] text-xs">·</span>
          <Caption>{post.date}</Caption>
          <span className="text-[var(--color-border)] text-xs">·</span>
          <Caption>{post.readTime}</Caption>
        </div>
      </div>

    </article>
  )
}

function SmallPostCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex cursor-pointer border border-[var(--color-border)] bg-white overflow-hidden hover:border-[var(--color-ink-subtle)] transition-colors duration-300">

      {/* Thumbnail */}
      <div className="relative w-36 shrink-0 overflow-hidden">
        <Image
          src={post.image}
          alt={post.alt}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          sizes="144px"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center gap-2 p-5">
        <Overline>{post.category}</Overline>
        <H6 className="text-[var(--color-ink)] leading-snug group-hover:text-[var(--color-gold)] transition-colors duration-300">
          {post.title}
        </H6>
        <div className="flex items-center gap-2 mt-1">
          <Caption>{post.date}</Caption>
          <span className="text-[var(--color-border)] text-xs">·</span>
          <Caption>{post.readTime}</Caption>
        </div>
      </div>

    </article>
  )
}

export function BlogSection() {
  return (
    <section className="bg-[var(--color-paper)] py-section">
      <div className="max-w-7xl mx-auto px-4 md:px-container">

        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <Overline className="mb-3 block">Journal</Overline>
            <H2 className="text-[var(--color-ink)]">Insights & Advice</H2>
          </div>
          <a
            href="/journal"
            className="hidden md:block font-sans text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors pb-1 border-b border-[var(--color-border)] hover:border-[var(--color-ink)]"
          >
            All articles →
          </a>
        </div>

        {/* Grid: large post (left, row-span-3) + 3 small posts (right, stacked) */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-gutter">
          <LargePostCard
            post={POSTS[0]}
            className="md:row-span-3"
          />
          {POSTS.slice(1).map((post) => (
            <SmallPostCard key={post.title} post={post} />
          ))}
        </div>

      </div>
    </section>
  )
}
