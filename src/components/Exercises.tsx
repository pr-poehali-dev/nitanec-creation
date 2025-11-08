import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const exercises = [
  {
    number: 1,
    title: 'Волна',
    key: 'Ключ Присутствия',
    description: 'Идеальное вхождение в практику. Буквально «включает» тело, заставляя осознать его как единую систему. Тренирует фокус внимания в режиме реального времени.',
    effect: 'Заземление, снятие блоков, запуск энергии'
  },
  {
    number: 2,
    title: 'Группировка и Распределение',
    key: 'Ключ Дыхания',
    description: 'Создает самую прямую связь между дыханием и движением. Демонстрирует, как дыхание управляет состоянием — от расширения до расслабления.',
    effect: 'Гармония дыхания и тела, центрирование'
  },
  {
    number: 3,
    title: 'Таз',
    key: 'Ключ Центра',
    description: 'Таз — первичный энергетический центр. Активирует внутренний источник силы, дает ощущение укорененности и мощной опоры.',
    effect: 'Освобождение энергии, внутренняя сила'
  },
  {
    number: 4,
    title: 'Пространство',
    key: 'Ключ Амплитуды',
    description: 'Работа с позвоночником — «стержнем жизни». Учит тело выходить за привычные ограничения, быть большим, пластичным и смелым.',
    effect: 'Расширение диапазона, гибкость, свобода'
  },
  {
    number: 5,
    title: 'Резинка',
    key: 'Ключ Ритма',
    description: 'Развивает чувство ритма через создание и отпускание напряжения. Расширяет амплитуду, заставляя тело выходить на новые дистанции.',
    effect: 'Чувство ритма, динамика, координация'
  },
  {
    number: 6,
    title: 'Голова и Глаза',
    key: 'Ключ Импровизации',
    description: 'Чистейшая форма импровизации. Движение рождается не из формы, а из внутреннего импульса — любопытства и интереса.',
    effect: 'Ломка шаблонов, спонтанность, свобода'
  },
  {
    number: 7,
    title: 'Кисти',
    key: 'Ключ Синтеза',
    description: 'Метафорическая кульминация практики. Объединяет всё: осознанность, дыхание, центр, амплитуду, ритм и импровизацию. Вы — творец своей реальности.',
    effect: 'Целостность, творчество, состояние потока'
  }
];

const Exercises = () => {
  return (
    <section id="exercises" className="py-24 bg-gradient-to-b from-violet-50/30 to-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 fade-on-scroll">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            7 Упражнений для Преображения
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Каждое упражнение — это мощный инструмент трансформации, максимально раскрывающий суть своего ключа. От простого к сложному, от пробуждения тела до слияния с потоком творчества.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6 fade-on-scroll">
          {exercises.map((exercise, index) => (
            <Card 
              key={index}
              className="p-6 md:p-8 bg-white/80 backdrop-blur-sm border-violet-200/50 hover:shadow-xl transition-all duration-300 hover:border-violet-400 group"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                    {exercise.number}
                  </div>
                </div>
                
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="font-serif font-bold text-2xl text-primary mb-1">
                      {exercise.title}
                    </h3>
                    <p className="text-sm font-medium text-violet-600">{exercise.key}</p>
                  </div>
                  
                  <p className="text-foreground/70 leading-relaxed">
                    {exercise.description}
                  </p>
                  
                  <div className="flex items-start gap-2 pt-2">
                    <Icon name="Sparkles" size={18} className="text-violet-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-medium text-violet-600/90">
                      {exercise.effect}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-16 text-center fade-on-scroll">
          <Card className="p-8 bg-gradient-to-br from-violet-100/50 to-purple-100/50 border-violet-200/50">
            <Icon name="Info" size={24} className="text-violet-600 mx-auto mb-4" />
            <h3 className="font-serif text-xl font-bold text-primary mb-3">
              Почему именно эти упражнения?
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              Эта семерка создает полный цикл трансформации — от пробуждения тела до слияния с потоком творчества. Выполняемые последовательно в рамках 7-дневной инициации, они обеспечивают максимальную эффективность при минимуме усилий.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Exercises;
