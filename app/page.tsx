import { HeroSection } from "@/app/components/sections/HeroSection"
import { FeaturedPropertiesSection } from "@/app/components/sections/FeaturedPropertiesSection"
import { PropertiesSection } from "@/app/components/sections/PropertiesSection"
import { PopularRegionsSection } from "@/app/components/sections/PopularRegionsSection"
import { BlogSection } from "@/app/components/sections/BlogSection"
import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedPropertiesSection />
      <PropertiesSection />
      <PopularRegionsSection />
      <BlogSection />
      <TestimonialsSection />
    </>
  )
}
