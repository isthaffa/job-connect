import React from 'react';
import MainLayout from '../components/layout/main-layout';
import CtaSection from '../components/sections/cta-section';
import FeatureSection from '../components/sections/feature-section';
import FeaturedJobs from '../components/sections/featured-jobs';
import HeroSection from '../components/sections/hero-section';
import PopularCourses from '../components/sections/popular-courses';

function Index() {
  return (
    <>
    <MainLayout>
      <HeroSection />
      <FeaturedJobs />
      <PopularCourses />
      <FeatureSection />
      <CtaSection />
      </MainLayout>
    </>
  );
}

export default Index;
