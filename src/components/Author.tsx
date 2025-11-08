import { Card } from '@/components/ui/card';

const Author = () => {
  return (
    <section id="author" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden border-sage/20 shadow-xl fade-on-scroll">
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-2 flex items-center justify-center p-8">
                <img 
                  src="https://cdn.poehali.dev/files/45f4f69b-6ba0-41e7-813f-29316dd1a8cb.jpg"
                  alt="Автор практики Нитанец"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              
              <div className="md:col-span-3 p-8 md:p-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
                  Об авторе
                </h2>
                
                <div className="space-y-6 text-foreground/80">
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-2">История пробуждения</h3>
                    <p className="leading-relaxed">
                      В 40 лет, пройдя 20-летний путь через йогу, боевые искусства и медитацию, я осознал потребность в целостном синтезе.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-2">Момент озарения</h3>
                    <p className="leading-relaxed">
                      1 октября 2024 года на берегу Черного моря родился Нитанец — не как методика, а как живая система развития.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-2">Миссия</h3>
                    <p className="leading-relaxed">
                      Моя цель — не быть гуру, а быть проводником, помогающим другим обрести свой внутренний источник гармонии.
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-sage/20">
                    <p className="text-sm italic text-foreground/60">
                      "За 20 лет я прошел через множество школ. Каждая открывала определенный аспект человеческого потенциала, но ни одна не предлагала того целостного синтеза, которого я искал. Так родился Нитанец."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Author;