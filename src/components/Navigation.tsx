import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => scrollToSection('hero')} className="text-2xl font-serif font-bold text-primary hover:text-primary/80 transition-colors">
          Нитанец
        </button>
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('what-is')} className="text-sm text-foreground/80 hover:text-primary transition-colors">О практике</button>
          <button onClick={() => scrollToSection('author')} className="text-sm text-foreground/80 hover:text-primary transition-colors">Автор</button>
          <button onClick={() => scrollToSection('practicum')} className="text-sm text-foreground/80 hover:text-primary transition-colors">Практикум</button>
          <button onClick={() => scrollToSection('philosophy')} className="text-sm text-foreground/80 hover:text-primary transition-colors">Философия</button>
          <Button onClick={() => scrollToSection('contact')} className="bg-primary hover:bg-primary/90">
            Присоединиться
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
