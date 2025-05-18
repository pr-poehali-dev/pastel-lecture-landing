
import { motion } from "react-magic-motion";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="pt-20 pb-20 px-4 md:px-8 bg-gradient-to-br from-[#E5D8F4] via-[#D4F5E9] to-[#D4E5F5]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-montserrat text-[#363A59]">
                Открой мир знаний с онлайн лекциями
              </h1>
              <p className="text-lg md:text-xl mb-8 text-[#5B5E71]">
                Учитесь у лучших преподавателей, расширяйте кругозор и развивайте новые навыки 
                в удобном для вас формате и темпе
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#8A63D2] to-[#6E8AD2] hover:opacity-90 text-white px-8 rounded-full"
                >
                  Начать обучение
                  <Icon name="ArrowRight" className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-[#8A63D2] text-[#8A63D2] hover:bg-[#8A63D2]/10 px-8 rounded-full"
                >
                  Узнать больше
                </Button>
              </div>
              
              <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6">
                <div className="flex items-center">
                  <Icon name="CheckCircle" className="text-[#8A63D2] w-5 h-5 mr-2" />
                  <span className="text-[#5B5E71]">Более 200 курсов</span>
                </div>
                <div className="flex items-center">
                  <Icon name="CheckCircle" className="text-[#8A63D2] w-5 h-5 mr-2" />
                  <span className="text-[#5B5E71]">Сертификаты</span>
                </div>
                <div className="flex items-center">
                  <Icon name="CheckCircle" className="text-[#8A63D2] w-5 h-5 mr-2" />
                  <span className="text-[#5B5E71]">Доступ 24/7</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Онлайн обучение" 
                  className="w-full h-auto rounded-2xl"
                />
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#363A59]/80 to-transparent p-6">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
                      <Icon name="Play" className="w-5 h-5 text-[#8A63D2]" />
                    </div>
                    <div className="text-white">
                      <p className="font-medium">Посмотрите видео о платформе</p>
                      <p className="text-sm text-white/80">2:45 мин</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative bubbles */}
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#FFEDDC]/50 blur-xl"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-[#D4F5E9]/50 blur-xl"></div>
              </div>
              
              {/* Stats card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 z-20">
                <div className="flex items-center">
                  <div className="bg-[#F8F5FC] rounded-lg p-2 mr-3">
                    <Icon name="Users" className="w-6 h-6 text-[#8A63D2]" />
                  </div>
                  <div>
                    <p className="text-[#363A59] font-bold text-xl">50,000+</p>
                    <p className="text-[#5B5E71] text-sm">Счастливых студентов</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
