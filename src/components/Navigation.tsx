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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <button 
          onClick={() => scrollToSection('hero')} 
          className={`text-2xl font-serif font-bold transition-all duration-300 ${
            isScrolled ? 'text-sage' : 'text-white drop-shadow-lg hover:text-violet-200'
          }`}
        >
          Нитанец
        </button>
        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection('about')} 
            className={`text-sm font-medium transition-all duration-300 ${
              isScrolled ? 'text-foreground/80 hover:text-violet-600' : 'text-white/90 hover:text-violet-200'
            }`}
          >
            О практике
          </button>
          <button 
            onClick={() => scrollToSection('author')} 
            className={`text-sm font-medium transition-all duration-300 ${
              isScrolled ? 'text-foreground/80 hover:text-violet-600' : 'text-white/90 hover:text-violet-200'
            }`}
          >
            Автор
          </button>
          <button 
            onClick={() => scrollToSection('practicum')} 
            className={`text-sm font-medium transition-all duration-300 ${
              isScrolled ? 'text-foreground/80 hover:text-violet-600' : 'text-white/90 hover:text-violet-200'
            }`}
          >
            Практикум
          </button>
          <button 
            onClick={() => scrollToSection('keys')} 
            className={`text-sm font-medium transition-all duration-300 ${
              isScrolled ? 'text-foreground/80 hover:text-violet-600' : 'text-white/90 hover:text-violet-200'
            }`}
          >
            7 ключей
          </button>
          <button 
            onClick={() => scrollToSection('exercises')} 
            className={`text-sm font-medium transition-all duration-300 ${
              isScrolled ? 'text-foreground/80 hover:text-violet-600' : 'text-white/90 hover:text-violet-200'
            }`}
          >
            7 упражнений
          </button>
          <button 
            onClick={() => scrollToSection('philosophy')} 
            className={`text-sm font-medium transition-all duration-300 ${
              isScrolled ? 'text-foreground/80 hover:text-violet-600' : 'text-white/90 hover:text-violet-200'
            }`}
          >
            Философия
          </button>
          <Button 
            onClick={() => scrollToSection('contact')} 
            className={`transition-all duration-300 ${
              isScrolled 
                ? 'bg-violet-600 hover:bg-violet-700 text-white' 
                : 'bg-white/20 backdrop-blur-md text-white hover:bg-violet-500 border border-white/30'
            }`}
          >
            Присоединиться
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;