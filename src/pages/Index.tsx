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
    <div className="min-h-screen bg-gradient-to-b from-white via-sand/10 to-white relative overflow-hidden">
      <Navigation />
      <Hero />
      <WhatIsNitanets />
      <Author />
      <Practicum />
      <Philosophy />
      <Contact />
      
      <div className="fixed top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-violet-300/10 to-purple-400/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-1/3 -right-20 w-80 h-80 bg-gradient-to-tl from-violet-400/10 to-purple-300/10 rounded-full blur-3xl pointer-events-none -z-10" />
    </div>
  );
};

export default Index;