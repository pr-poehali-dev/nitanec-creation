import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-sage/20 via-background to-background">
      <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 text-sage text-sm font-medium bg-sage/10 px-4 py-2 rounded-full">
              <Icon name="Sparkles" size={16} />
              <span>Алхимия свободного движения</span>
            </div>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Нитанец
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 font-light max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Вернись домой — к себе. Вспомни язык души через танец жизни.
          </p>
          
          <p className="text-base md:text-lg text-foreground/60 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Синтез йоги, танца и боевых искусств. 20-летний опыт, воплощенный в практике для тела, души и разума.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button onClick={scrollToContact} size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
              Начать путешествие
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => document.getElementById('what-is')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-primary/30 text-primary hover:bg-primary/5 px-8 py-6 text-lg"
            >
              Узнать больше
            </Button>
          </div>

          <div className="pt-16 animate-fade-in" style={{ animationDelay: '1s' }}>
            <p className="text-sm text-foreground/50 italic mb-4">
              «Нитанец — это не про то, чтобы научиться танцевать.<br />
              Это про то, чтобы ВСПОМНИТЬ, как быть счастливым»
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-primary/40" />
      </div>
    </section>
  );
};

export default Hero;
