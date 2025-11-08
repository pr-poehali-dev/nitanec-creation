import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за ваш интерес!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-sage/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 fade-on-scroll">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Присоединяйтесь к путешествию
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Готовы начать свой путь к гармонии и целостности?
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 fade-on-scroll">
          <Card className="p-8 bg-white/50 backdrop-blur-sm border-sage/20">
            <h3 className="font-serif text-2xl font-bold text-primary mb-6">
              Напишите нам
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input 
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="border-sage/30 focus:border-sage"
                />
              </div>
              <div>
                <Input 
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="border-sage/30 focus:border-sage"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Ваше сообщение"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  required
                  className="border-sage/30 focus:border-sage"
                />
              </div>
              <Button type="submit" className="w-full bg-sage hover:bg-sage/90">
                Отправить сообщение
                <Icon name="Send" size={18} className="ml-2" />
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-8 bg-white/50 backdrop-blur-sm border-sage/20">
              <h3 className="font-serif text-xl font-bold text-primary mb-4">
                Telegram-канал
              </h3>
              <p className="text-foreground/70 mb-4">
                Чтобы не пропустить анонс набора и получить полезные материалы
              </p>
              <Button 
                variant="outline" 
                className="w-full border-sage/30 text-sage hover:bg-sage/5"
                onClick={() => window.open('https://t.me/nitanec', '_blank')}
              >
                <Icon name="Send" size={18} className="mr-2" />
                Подписаться на канал
              </Button>
            </Card>

            <Card className="p-8 bg-white/50 backdrop-blur-sm border-sage/20">
              <h3 className="font-serif text-xl font-bold text-primary mb-4">
                Личное сообщение
              </h3>
              <p className="text-foreground/70 mb-4">
                Напишите слово «Нитанец» в личные сообщения
              </p>
              <Button 
                variant="outline" 
                className="w-full border-ocean/30 text-ocean hover:bg-ocean/5"
                onClick={() => window.open('https://t.me/crypatma', '_blank')}
              >
                <Icon name="MessageCircle" size={18} className="mr-2" />
                Написать автору
              </Button>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-sage/10 to-ocean/10 border-sage/20 text-center">
              <p className="text-sm text-foreground/70 italic">
                «Это начало путешествия домой — к себе настоящему»
              </p>
            </Card>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16 text-center fade-on-scroll">
          <p className="text-foreground/60">
            Присоединяйтесь к нашему сообществу в Telegram: 
            <a href="https://t.me/+QgiLIa1gFRY4Y2Iy" target="_blank" rel="noopener noreferrer" className="text-sage hover:underline ml-2">
              poehali.dev community
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
