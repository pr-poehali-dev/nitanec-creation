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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://cdn.poehali.dev/files/45f4f69b-6ba0-41e7-813f-29316dd1a8cb.jpg"
          alt="Практика Нитанец на закате у моря"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      </div>
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 text-white text-sm font-medium bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Icon name="Sparkles" size={16} />
              <span>Алхимия свободного движения</span>
            </div>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight animate-fade-in drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
            Нитанец
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed animate-fade-in drop-shadow-md" style={{ animationDelay: '0.4s' }}>
            Вернись домой — к себе. Вспомни язык души через танец жизни.
          </p>
          
          <div className="text-base md:text-lg text-white/90 max-w-2xl mx-auto animate-fade-in drop-shadow-md space-y-2" style={{ animationDelay: '0.6s' }}>
            <p className="font-medium">Синтез йоги, танца и боевых искусств для преображения тела и духа.</p>
            <p className="text-white/80">✨ Улучшение формы тела • Нормализация веса • Оздоровление организма</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button onClick={scrollToContact} size="lg" className="bg-white text-sage hover:bg-white/90 px-8 py-6 text-lg font-semibold shadow-xl">
              Начать путешествие
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => document.getElementById('what-is')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-white/40 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg"
            >
              Узнать больше
            </Button>
          </div>

          <div className="pt-16 animate-fade-in" style={{ animationDelay: '1s' }}>
            <p className="text-sm text-white/90 italic mb-4 drop-shadow-md">
              «Нитанец — это не про то, чтобы научиться танцевать.<br />
              Это про то, чтобы ВСПОМНИТЬ, как быть счастливым»
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white/60" />
      </div>
    </section>
  );
};

export default Hero;