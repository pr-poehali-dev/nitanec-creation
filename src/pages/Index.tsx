import { useEffect } from 'react';
import Hero from '@/components/Hero';
import WhatIsNitanets from '@/components/WhatIsNitanets';
import Author from '@/components/Author';
import Practicum from '@/components/Practicum';
import Philosophy from '@/components/Philosophy';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <WhatIsNitanets />
      <Author />
      <Practicum />
      <Philosophy />
      <Contact />
    </div>
  );
};

export default Index;