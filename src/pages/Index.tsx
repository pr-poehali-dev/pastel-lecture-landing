
import { useState, useEffect, useRef } from "react";
import { motion } from "react-magic-motion";
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import HeroSection from "@/components/HeroSection";
import ScienceMarquee from "@/components/ScienceMarquee";
import LectureGrid from "@/components/LectureGrid";
import PricingPlans from "@/components/PricingPlans";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fcfcfd] to-[#f5f7fa]">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Science Marquee */}
      <section className="py-16 px-4 md:px-8 overflow-hidden">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 font-montserrat text-[#363A59]">
            Полезные лекции
          </h2>
          <p className="text-center mb-10 text-[#5B5E71] max-w-2xl mx-auto">
            Выберите интересующую вас науку и начните обучение прямо сейчас с нашими 
            высококвалифицированными преподавателями
          </p>
          <ScienceMarquee />
        </div>
      </section>
      
      {/* Lecture Grid */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-[#f8f9fc] to-[#f0f5fb]">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 font-montserrat text-[#363A59]">
            Популярные лекции
          </h2>
          <p className="text-center mb-10 text-[#5B5E71] max-w-2xl mx-auto">
            Наши лучшие курсы, которые выбирают тысячи студентов со всего мира
          </p>
          <LectureGrid />
        </div>
      </section>
      
      {/* Pricing Plans */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 font-montserrat text-[#363A59]">
            Выберите свой план
          </h2>
          <p className="text-center mb-10 text-[#5B5E71] max-w-2xl mx-auto">
            У нас есть различные варианты планов обучения для удовлетворения ваших потребностей
          </p>
          <PricingPlans />
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-[#f8f9fc] to-[#f0f5fb]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 font-montserrat text-[#363A59]">
            Часто задаваемые вопросы
          </h2>
          <p className="text-center mb-10 text-[#5B5E71] max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о нашей платформе
          </p>
          
          <Accordion type="single" collapsible className="rounded-xl bg-white shadow-sm">
            <AccordionItem value="item-1" className="border-b border-[#E5D8F4]/30">
              <AccordionTrigger className="px-6 py-4 hover:bg-[#F8F5FC] rounded-t-xl">
                Как начать обучение на платформе?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-[#5B5E71]">
                Чтобы начать обучение, выберите интересующий вас курс, зарегистрируйтесь 
                на платформе и оплатите выбранный тариф. После этого вы получите 
                немедленный доступ ко всем материалам курса и сможете начать обучение.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-b border-[#E5D8F4]/30">
              <AccordionTrigger className="px-6 py-4 hover:bg-[#F8F5FC]">
                Могу ли я получить сертификат после прохождения курса?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-[#5B5E71]">
                Да, после успешного завершения курса вы получите сертификат, 
                подтверждающий ваши знания и навыки. Наши сертификаты признаются 
                многими работодателями и образовательными учреждениями.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-b border-[#E5D8F4]/30">
              <AccordionTrigger className="px-6 py-4 hover:bg-[#F8F5FC]">
                Как долго я буду иметь доступ к курсу?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-[#5B5E71]">
                В зависимости от выбранного плана, вы получаете доступ к курсам на 
                определенный период времени. Базовый план дает доступ на 3 месяца, 
                Стандартный — на 6 месяцев, а Премиум — на целый год с возможностью продления.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-b border-[#E5D8F4]/30">
              <AccordionTrigger className="px-6 py-4 hover:bg-[#F8F5FC]">
                Можно ли обучаться с мобильного устройства?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-[#5B5E71]">
                Конечно! Наша платформа полностью адаптирована для мобильных устройств. 
                Вы можете обучаться с телефона или планшета в любое удобное время и в любом месте.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="px-6 py-4 hover:bg-[#F8F5FC] rounded-b-xl">
                Есть ли у вас система скидок для групп?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-[#5B5E71]">
                Да, мы предлагаем специальные условия для корпоративного обучения и групп от 5 человек. 
                Для получения более подробной информации свяжитесь с нашим отделом продаж.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-[#E5D8F4] to-[#D4E5F5]">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat text-[#363A59]">
              Начните обучение уже сегодня!
            </h2>
            <p className="text-[#5B5E71] mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к тысячам студентов, которые уже расширили свои 
              знания и возможности с нашей платформой
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#8A63D2] to-[#6E8AD2] hover:opacity-90 text-white px-8 rounded-full"
              >
                Зарегистрироваться
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-[#8A63D2] text-[#8A63D2] hover:bg-[#8A63D2]/10 px-8 rounded-full"
              >
                Узнать больше
              </Button>
            </div>
            
            <div className="mt-10 flex justify-center items-center space-x-2">
              <Badge variant="outline" className="bg-white/50 px-3 py-1 text-[#5B5E71]">
                <Icon name="Star" className="w-4 h-4 mr-1 text-yellow-500" />
                4.9/5 рейтинг
              </Badge>
              <Badge variant="outline" className="bg-white/50 px-3 py-1 text-[#5B5E71]">
                <Icon name="Users" className="w-4 h-4 mr-1 text-blue-500" />
                50 000+ студентов
              </Badge>
              <Badge variant="outline" className="bg-white/50 px-3 py-1 text-[#5B5E71]">
                <Icon name="GraduationCap" className="w-4 h-4 mr-1 text-purple-500" />
                100+ курсов
              </Badge>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
