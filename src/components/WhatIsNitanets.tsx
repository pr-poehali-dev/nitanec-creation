import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const pillars = [
  {
    icon: 'Heart',
    title: 'Терапия для тела и сознания',
    description: 'Исцеляющая практика, раскрывающая сердце'
  },
  {
    icon: 'Brain',
    title: 'Медитация в движении',
    description: 'Глубокая встреча и контакт с самим собой'
  },
  {
    icon: 'Zap',
    title: 'Энергопрактика нового поколения',
    description: 'Дарящая гармонию и силы'
  },
  {
    icon: 'Palette',
    title: 'Искусство самовыражения',
    description: 'Глубокое творческое раскрытие'
  }
];

const levels = [
  { title: 'Физический', description: 'Сила, гибкость, выносливость, здоровье', icon: 'Activity' },
  { title: 'Эмоциональный', description: 'Освобождение чувств, внутренний покой', icon: 'Heart' },
  { title: 'Ментальный', description: 'Ясность ума, творческий поток', icon: 'Lightbulb' },
  { title: 'Духовный', description: 'Единство с жизнью, гармония', icon: 'Sparkles' }
];

const WhatIsNitanets = () => {
  return (
    <section id="what-is" className="py-24 bg-gradient-to-b from-background to-sage/10">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 fade-on-scroll">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Что такое Нитанец?
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Нитанец — это симфония тела, духа, сознания и природы. Это лучший способ начать день и вернуться к себе настоящему.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 fade-on-scroll">
          {pillars.map((pillar, index) => (
            <Card 
              key={index} 
              className="p-6 bg-white/50 backdrop-blur-sm border-sage/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center mb-4">
                <Icon name={pillar.icon as any} size={24} className="text-sage" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-primary">☘️ {pillar.title}</h3>
              <p className="text-sm text-foreground/70">{pillar.description}</p>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mb-20 fade-on-scroll">
          <div className="bg-sand/30 rounded-2xl p-8 md:p-12">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
              4 уровня трансформации
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {levels.map((level, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-lg bg-white/50 hover:bg-white/80 transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center">
                    <Icon name={level.icon as any} size={20} className="text-sage" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">{level.title}</h4>
                    <p className="text-sm text-foreground/70">{level.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-12 fade-on-scroll">
          <div className="bg-sage/5 rounded-2xl p-8 md:p-12 border border-sage/20">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
              Преимущества для физического тела
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Icon name="Activity" size={24} className="text-sage flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Улучшение формы тела</h4>
                    <p className="text-sm text-foreground/70">Гармоничное развитие всех групп мышц, создание красивого рельефа</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="TrendingDown" size={24} className="text-sage flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Нормализация веса</h4>
                    <p className="text-sm text-foreground/70">Естественное похудение и достижение оптимального веса</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Icon name="Heart" size={24} className="text-sage flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Оздоровление организма</h4>
                    <p className="text-sm text-foreground/70">Детоксикация, укрепление иммунитета, прилив энергии</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Zap" size={24} className="text-sage flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Сила и выносливость</h4>
                    <p className="text-sm text-foreground/70">Развитие физической силы, гибкости и координации</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary">
              Философия в действии
            </h3>
            <div className="space-y-3 text-left md:text-center">
              <p className="text-lg text-foreground/80 italic">
                💫 Свобода движения — это свобода духа
              </p>
              <p className="text-lg text-foreground/80 italic">
                🎨 Ваше тело — самый мудрый целитель
              </p>
              <p className="text-lg text-foreground/80 italic">
                🌿 Вернитесь домой — к природе и к себе
              </p>
              <p className="text-lg text-foreground/80 italic">
                ✨ Красота преобразит мир, начиная с вашего движения
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsNitanets;