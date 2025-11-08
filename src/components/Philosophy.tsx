import { Card } from '@/components/ui/card';

const values = [
  { title: 'Свобода', description: 'Быть собой во всей полноте и уникальности', icon: '🕊️' },
  { title: 'Любовь', description: 'Фундаментальная сила, которая всё объединяет', icon: '💚' },
  { title: 'Гармония', description: 'Баланс и целостность на всех уровнях', icon: '☯️' },
  { title: 'Красота', description: 'Созидание красоты в каждом моменте', icon: '🌸' },
  { title: 'Созидание', description: 'Активное творение нового и прекрасного', icon: '✨' },
  { title: 'Самопознание', description: 'Путь наружу начинается изнутри', icon: '🔍' },
  { title: 'Творчество', description: 'Природный дар каждого человека', icon: '🎨' },
  { title: 'Духовность', description: 'Стремление за пределы повседневности', icon: '🌟' },
  { title: 'Исцеление', description: 'Восстановление целостности на всех уровнях', icon: '🌿' }
];

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 fade-on-scroll">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Философия и сообщество Нитания
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Нитания — это не место на карте, а состояние сознания, где танец становится языком души
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-16 fade-on-scroll">
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="p-6 bg-white/50 backdrop-blur-sm border-sage/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="text-4xl mb-3">{value.icon}</div>
                <h3 className="font-semibold text-lg text-primary mb-2">{value.title}</h3>
                <p className="text-sm text-foreground/70">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-12 fade-on-scroll">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-sage/10 to-ocean/10 border-sage/20">
            <h3 className="font-serif text-2xl font-bold text-primary mb-6 text-center">
              Манифест Нитанцев
            </h3>
            <blockquote className="text-lg text-foreground/80 leading-relaxed italic text-center">
              «Мы — те, кто помнит. Помнит, что тело — это храм, а движение — молитва. 
              Что красота — не роскошь, а необходимость. Что каждый из нас — художник, а жизнь — холст. 
              Мы строим сообщество без границ, где паспорт — открытое сердце, а участие — готовность любить»
            </blockquote>
          </Card>

          <div className="text-center space-y-6">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary">
              Наше видение
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Нитания — сообщество третьего тысячелетия. Мы видим мир, где танец становится 
              универсальным языком души, где красота преобразит мир, и это преображение 
              начинается с движения каждого из нас.
            </p>
            <div className="pt-4">
              <p className="text-2xl font-serif font-bold text-sage">
                Красота преобразит мир! 🌿
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
