import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const keys = [
  {
    number: 1,
    emoji: '🔑',
    title: 'Ключ Присутствия',
    subtitle: 'Пробуждение от сна наяву',
    description: 'Заземление в «Здесь и Сейчас» через тактильный диалог с реальностью'
  },
  {
    number: 2,
    emoji: '🔑',
    title: 'Ключ Дыхания',
    subtitle: 'Мост между материей и духом',
    description: 'Дыхание как осознанный танец, живой мост к целостности'
  },
  {
    number: 3,
    emoji: '🔑',
    title: 'Ключ Центра',
    subtitle: 'Обретение внутренней опоры',
    description: 'Возвращение к источнику силы, который всегда был внутри'
  },
  {
    number: 4,
    emoji: '🔑',
    title: 'Ключ Ритма',
    subtitle: 'Музыка души',
    description: 'Прислушивание к уникальному пульсу вашей жизни'
  },
  {
    number: 5,
    emoji: '🔑',
    title: 'Ключ Амплитуды',
    subtitle: 'Расширение диапазона бытия',
    description: 'Смелость быть разным, играть с противоположностями'
  },
  {
    number: 6,
    emoji: '🔑',
    title: 'Ключ Импровизации',
    subtitle: 'Танец обнажённой души',
    description: 'Сжигание всех сценариев, прямой проводник чувств'
  },
  {
    number: 7,
    emoji: '🔑',
    title: 'Ключ Синтеза',
    subtitle: 'Становление потоком',
    description: 'Момент, когда вы становитесь самим Потоком Жизни'
  }
];

const benefits = [
  'Ежедневные практики под руководством автора',
  'Теоретические материалы о философии Нитанца',
  'Закрытое сообщество единомышленников',
  'Персональные рекомендации и поддержка',
  'Шанс стать со-творцом традиции'
];

const Practicum = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <section id="practicum" className="py-24 bg-gradient-to-b from-sand/30 to-white relative violet-ribbon-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 fade-on-scroll">
          <div className="inline-block mb-4 px-4 py-2 bg-sage/10 rounded-full">
            <span className="text-sage font-medium text-sm">Практикум-инициация</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Алхимия свободного движения
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed mb-6">
            7 дней. 7 ключей. 7 упражнений.<br />
            Инициация в состояние Жизни.
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm text-foreground/60">
            <div className="flex items-center gap-2">
              <Icon name="Monitor" size={16} className="text-violet-600" />
              <span>Онлайн формат</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Users" size={16} className="text-violet-600" />
              <span>Офлайн встречи</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Calendar" size={16} className="text-violet-600" />
              <span>Ежемесячно</span>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 fade-on-scroll">
            {keys.map((key, index) => (
              <Card 
                key={index}
                className="p-6 bg-white/50 backdrop-blur-sm border-sage/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-3xl group-hover:scale-110 transition-transform">{key.emoji}</span>
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-sage mb-1">День {key.number}</div>
                    <h3 className="font-serif font-bold text-lg text-primary leading-tight">
                      {key.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm font-medium text-foreground/60 mb-2">{key.subtitle}</p>
                <p className="text-sm text-foreground/70 leading-relaxed">{key.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto fade-on-scroll">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-sage/5 to-ocean/5 border-sage/20">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
              Что вас ждёт на практикуме
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-sage flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80">{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {benefits.slice(3).map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-sage flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-sage/20 pt-8 space-y-6">
              <div className="text-center space-y-3">
                <p className="text-lg font-semibold text-primary mb-2">Условия участия</p>
                <p className="text-foreground/70">Участие — благодарность по сердцу от состояния по итогу практикума</p>
                <p className="text-sm font-medium text-violet-600">Для участников Клуба «Проявление» — включено</p>
                <p className="text-sm text-foreground/60">Количество мест ограничено</p>
              </div>
              
              <div className="flex justify-center">
                <Button onClick={scrollToContact} size="lg" className="bg-sage hover:bg-sage/90 text-white px-8">
                  Забронировать место
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto mt-12 text-center fade-on-scroll">
          <p className="text-foreground/60 italic">
            «Это не просто курс. Это 7-дневное путешествие-инициация, где практика становится состоянием бытия»
          </p>
        </div>
      </div>
    </section>
    
    <section id="keys" className="py-24 bg-gradient-to-b from-white to-violet-50/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 fade-on-scroll">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            7 Ключей Трансформации
          </h2>
          <p className="text-lg text-foreground/70">
            Каждый ключ — это ступень целостного процесса, где физическое движение<br />
            становится проводником глубинных изменений
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 fade-on-scroll">
          {keys.map((key, index) => (
            <Card 
              key={index}
              className="p-8 bg-white/70 backdrop-blur-sm border-violet-200/50 hover:shadow-xl transition-all duration-300 hover:border-violet-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">{key.emoji}</span>
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-violet-600 mb-1">День {key.number}</div>
                  <h3 className="font-serif font-bold text-xl text-primary mb-1">
                    {key.title}
                  </h3>
                  <p className="text-sm font-medium text-violet-600/80">{key.subtitle}</p>
                </div>
              </div>
              <p className="text-foreground/70 leading-relaxed">{key.description}</p>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-12 text-center fade-on-scroll">
          <Card className="p-8 bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200/50">
            <p className="text-foreground/70 italic leading-relaxed">
              «Проходя через эти 7 ключей, вы не осваиваете технику. Вы проходите инициацию в новое состояние сознания. Вы обретаете внутренний компас, незыблемый покой, спонтанную гармонию и смелость быть собой»
            </p>
          </Card>
        </div>
      </div>
    </section>
    </>
  )
};

export default Practicum;