import type { Metadata } from "next";

import { SITE } from "@/src/config.js";

import Hero from "@/src/components/widgets/Hero";
import SocialProof from "@/src/components/widgets/SocialProof";
import Features from "@/src/components/widgets/Features";
import Content from "@/src/components/widgets/Content";
import Steps from "@/src/components/widgets/Steps";
import Testimonials from "@/src/components/widgets/Testimonials";
import FAQs2 from "@/src/components/widgets/FAQs2";
import Pricing from "@/src/components/widgets/Pricing";
import Team from "@/src/components/widgets/Team";
import CallToAction2 from "@/src/components/widgets/CallToAction2";
import Contact from "@/src/components/widgets/Contact";
import {
  callToAction2Home,
  contactHome,
  contentHomeOne,
  contentHomeTwo,
  faqs2Home,
  featuresHome,
  heroHome,
  pricingHome,
  socialProofHome,
  stepsHome,
  teamHome,
  testimonialsHome,
} from "@/src/shared/data/pages/home.data";

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Home() {
  return (
    <>
      <Hero {...heroHome} />
      <SocialProof {...socialProofHome} />
      <Features {...featuresHome} />
      <Content {...contentHomeOne} />
      <Content {...contentHomeTwo} />
      <Steps {...stepsHome} />
      <Testimonials {...testimonialsHome} />
      <FAQs2 {...faqs2Home} />
      <Pricing {...pricingHome} />
      <Team {...teamHome} />
      <Contact {...contactHome} />
      <CallToAction2 {...callToAction2Home} />
    </>
  );
}
