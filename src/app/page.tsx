"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import AboutMetric from '@/components/sections/about/AboutMetric';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import SocialProofThree from '@/components/sections/socialProof/SocialProofThree';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactInline from '@/components/sections/contact/ContactInline';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, Github, Linkedin, Mail, Twitter, Users, Zap, Globe } from 'lucide-react';

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="small"
      sizing="large"
      background="gradientBars"
      cardStyle="glass-elevated"
      primaryButtonStyle="flat"
      secondaryButtonStyle="radial-glow"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="TechVision"
          navItems={[
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "FAQ", id: "faq" }
          ]}
          button={{
            text: "Get Started",
            href: "#contact"
          }}
          className="bg-white/80 backdrop-blur-md border border-gray-200"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardRotatedCarousel
          title="Transform Your Business with Cutting-Edge IT Solutions"
          description="Empower your organization with our comprehensive technology services including cloud infrastructure, cybersecurity, custom software development, and AI-powered solutions designed for enterprise success."
          tag="Innovation Driven"
          tagIcon={Zap}
          buttons={[
            { text: "Explore Services", href: "#services" },
            { text: "Schedule Consultation", href: "#contact" }
          ]}
          carouselItems={[
            {
              id: "1",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764871773095-4kqwahf8.jpg",
              imageAlt: "Software development team"
            },
            {
              id: "2",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764871774304-65b75no9.jpg",
              imageAlt: "Cloud computing infrastructure"
            },
            {
              id: "3",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764871775780-1px8iqi1.jpg",
              imageAlt: "Cybersecurity protection"
            },
            {
              id: "4",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764871776841-12azm7ln.jpg",
              imageAlt: "AI and machine learning"
            },
            {
              id: "5",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764871778299-pjo1gb1q.jpg",
              imageAlt: "Web development"
            },
            {
              id: "6",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764871779605-d577vlb8.jpg",
              imageAlt: "IT solutions"
            }
          ]}
          autoPlay={true}
          autoPlayInterval={4000}
          ariaLabel="IT solutions showcase carousel"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwentyOne
          title="Our Core Services"
          description="Discover our comprehensive range of IT services tailored to drive digital transformation and achieve your business objectives."
          tag="Technical Excellence"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764871781012-o665ltki.jpg"
          imageAlt="Enterprise software dashboard"
          accordionItems={[
            {
              id: "1",
              title: "Cloud Infrastructure & Migration",
              content: "Seamless transition to cloud platforms with minimal downtime. We provide architecture design, migration planning, and ongoing management for AWS, Azure, and Google Cloud environments."
            },
            {
              id: "2",
              title: "Cybersecurity & Data Protection",
              content: "Multi-layer security solutions including threat detection, compliance management, and incident response. Protect your critical assets with enterprise-grade security infrastructure."
            },
            {
              id: "3",
              title: "Custom Software Development",
              content: "Bespoke applications built with modern tech stacks. From concept to deployment, we create scalable solutions that integrate seamlessly with your existing systems."
            },
            {
              id: "4",
              title: "AI & Machine Learning Solutions",
              content: "Harness AI capabilities for business intelligence, predictive analytics, and automation. Our experts implement cutting-edge machine learning models tailored to your industry."
            },
            {
              id: "5",
              title: "DevOps & Infrastructure Automation",
              content: "Streamline your development pipeline with CI/CD implementation, infrastructure-as-code, and containerization for faster, more reliable deployments."
            }
          ]}
          useInvertedBackground="noInvert"
          mediaPosition="left"
          buttons={[{ text: "Learn More", href: "#" }]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="At TechVision we deliver innovative IT solutions that drive measurable business value and accelerate digital transformation for enterprises worldwide."
          metrics={[
            { icon: Users, label: "Enterprise Clients", value: "500+" },
            { icon: Zap, label: "Projects Completed", value: "1,200+" },
            { icon: Globe, label: "Global Presence", value: "25+ Countries" },
            { icon: Award, label: "Industry Awards", value: "45+ Recognition" }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Our Technology Stack"
          description="Best-in-class platforms and tools we specialize in to deliver exceptional results for your business."
          tag="Technical Expertise"
          products={[
            {
              id: "1",
              brand: "Cloud Platforms",
              name: "AWS & Azure Infrastructure",
              price: "Enterprise Scaling",
              rating: 5,
              reviewCount: "480+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764871774304-65b75no9.jpg",
              imageAlt: "AWS Azure cloud"
            },
            {
              id: "2",
              brand: "Programming",
              name: "Full-Stack Development",
              price: "Custom Solutions",
              rating: 5,
              reviewCount: "520+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764871773095-4kqwahf8.jpg",
              imageAlt: "Development coding"
            },
            {
              id: "3",
              brand: "Security",
              name: "Enterprise Cybersecurity",
              price: "Compliance Ready",
              rating: 5,
              reviewCount: "390+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764871775780-1px8iqi1.jpg",
              imageAlt: "Cybersecurity"
            },
            {
              id: "4",
              brand: "AI & Analytics",
              name: "Machine Learning Platform",
              price: "Intelligence Driven",
              rating: 5,
              reviewCount: "310+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764871776841-12azm7ln.jpg",
              imageAlt: "AI analytics"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="What Our Clients Say"
          description="Hear from enterprise leaders about their transformative experiences working with TechVision."
          tag="Client Success"
          testimonials={[
            {
              id: "1",
              name: "Sarah Chen",
              role: "CTO",
              company: "Global Finance Corp",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764871782648-9z419fsr.jpg",
              imageAlt: "Sarah Chen CTO"
            },
            {
              id: "2",
              name: "Michael Rodriguez",
              role: "VP Technology",
              company: "Retail Innovations Inc",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764871784454-bof4w02w.jpg",
              imageAlt: "Michael Rodriguez VP"
            },
            {
              id: "3",
              name: "Jennifer Park",
              role: "Chief Digital Officer",
              company: "Healthcare Solutions",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764871785857-ypuyj70a.jpg",
              imageAlt: "Jennifer Park CDO"
            },
            {
              id: "4",
              name: "David Thompson",
              role: "Engineering Director",
              company: "Manufacturing Pro",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764871787410-uorhrikv.jpg",
              imageAlt: "David Thompson Director"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofThree
          title="Trusted by Industry Leaders"
          description="Join thousands of enterprises that depend on TechVision for their digital transformation journey."
          tag="Enterprise Partners"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764871788446-csimfyut.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764871790603-8oeqlt1v.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764871791929-2vy5mvfk.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764871793261-392yzovr.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764871794542-tfajyomi.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764871795617-i521g34j.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764871796681-oc7uzo1r.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764871797880-t7z72ypl.jpg"
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          speed={40}
          topMarqueeDirection="left"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our IT services and solutions."
          tag="Help & Support"
          faqs={[
            {
              id: "1",
              title: "What industries do you serve?",
              content: "We work across diverse sectors including finance, healthcare, retail, manufacturing, and government. Our solutions are tailored to industry-specific requirements and compliance standards."
            },
            {
              id: "2",
              title: "How long does a typical project implementation take?",
              content: "Project timelines vary based on scope and complexity. A typical cloud migration takes 3-6 months, while custom software development ranges from 2-12 months depending on features and scale."
            },
            {
              id: "3",
              title: "Do you provide ongoing support and maintenance?",
              content: "Yes, we offer comprehensive support packages including 24/7 monitoring, proactive maintenance, security updates, and performance optimization to ensure your systems run smoothly."
            },
            {
              id: "4",
              title: "Are you compliant with industry standards?",
              content: "We maintain compliance with ISO 27001, SOC 2, HIPAA, GDPR, and PCI-DSS standards. Our security practices and processes are regularly audited by third-party experts."
            },
            {
              id: "5",
              title: "What is your security approach?",
              content: "We implement defense-in-depth strategies including encryption, multi-factor authentication, regular penetration testing, and security awareness training for your teams."
            },
            {
              id: "6",
              title: "Can you work with our existing systems?",
              content: "Absolutely. We specialize in seamless integrations with legacy systems and modern platforms. Our API-first approach ensures compatibility with your current technology stack."
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactInline
          text="Ready to transform your business with innovative IT solutions?"
          inputPlaceholder="Enter your business email"
          buttonText="Request Demo"
          useInvertedBackground="noInvert"
          animationType="entrance-slide"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="TechVision"
          columns={[
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Our Team", href: "#" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Cloud Solutions", href: "#services" },
                { label: "Cybersecurity", href: "#services" },
                { label: "Software Development", href: "#services" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Blog & Insights", href: "#" },
                { label: "Case Studies", href: "#" },
                { label: "Documentation", href: "#" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Contact", href: "#contact" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" },
            { icon: Github, href: "https://github.com", ariaLabel: "GitHub" },
            { icon: Mail, href: "mailto:info@techvision.com", ariaLabel: "Email" }
          ]}
          copyrightText="© TechVision, Inc. 2025. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}