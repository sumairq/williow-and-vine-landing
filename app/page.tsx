import { HeroSection } from "@/app/components/sections/HeroSection"
import { FeaturedPropertiesSection } from "@/app/components/sections/FeaturedPropertiesSection"
import { PropertiesSection } from "@/app/components/sections/PropertiesSection"
import { BlogSection } from "@/app/components/sections/BlogSection"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedPropertiesSection />
      <PropertiesSection />
      <BlogSection />
    </>
  )
}
