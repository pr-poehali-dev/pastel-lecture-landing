
import { motion } from "react-magic-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const plans = [
  {
    name: "Базовый",
    price: 990,
    description: "Идеально для начинающих",
    features: [
      "Доступ к 10 базовым курсам",
      "Тестовые задания",
      "Доступ к форуму",
      "Email поддержка",
    ],
    limitations: [
      "Без сертификата",
      "Без персонального наставника",
      "Ограниченный доступ к материалам",
    ],
    icon: "BookOpen",
    color: "#D4F5E9",
    mostPopular: false,
  },
  {
    name: "Стандарт",
    price: 1990,
    description: "Лучший выбор для самообразования",
    features: [
      "Доступ ко всем 50+ курсам",
      "Проверка домашних заданий",
      "Сертификат об окончании",
      "Приоритетная поддержка",
      "Доступ к вебинарам",
    ],
    limitations: [
      "Без персонального наставника",
    ],
    icon: "GraduationCap",
    color: "#E5D8F4",
    mostPopular: true,
  },
  {
    name: "Премиум",
    price: 3990,
    description: "Для серьезного обучения",
    features: [
      "Все функции Стандартного плана",
      "Персональный наставник",
      "Ежемесячные индивидуальные консультации",
      "Приоритетный доступ к новым курсам",
      "Возможность скачивания материалов",
      "Пожизненный доступ к курсам",
    ],
    limitations: [],
    icon: "Award",
    color: "#D4E5F5",
    mostPopular: false,
  },
];

const PricingPlans = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {plans.map((plan, index) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ y: -10 }}
          className="flex"
        >
          <Card className={`flex flex-col w-full shadow-lg ${
            plan.mostPopular 
              ? "border-[#8A63D2] relative" 
              : "border-transparent"
          }`}>
            {plan.mostPopular && (
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <span className="bg-[#8A63D2] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Самый популярный
                </span>
              </div>
            )}
            
            <CardHeader className={`p-6 pb-4 ${plan.mostPopular ? "pt-8" : ""}`}>
              <div className="w-12 h-12 rounded-full mb-4" style={{ backgroundColor: plan.color }}>
                <div className="w-full h-full flex items-center justify-center">
                  <Icon name={plan.icon} className="w-6 h-6 text-[#363A59]" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold font-montserrat text-[#363A59]">
                {plan.name}
              </CardTitle>
              <CardDescription className="text-[#5B5E71]">
                {plan.description}
              </CardDescription>
              <div className="mt-4">
                <span className="text-3xl font-bold text-[#363A59]">{plan.price} ₽</span>
                <span className="text-[#5B5E71]">/месяц</span>
              </div>
            </CardHeader>
            
            <CardContent className="p-6 py-4 flex-1">
              <p className="font-medium text-[#363A59] mb-3">Включено:</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Icon name="Check" className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-[#5B5E71]">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {plan.limitations.length > 0 && (
                <>
                  <p className="font-medium text-[#363A59] mb-3">Ограничения:</p>
                  <ul className="space-y-2">
                    {plan.limitations.map((limitation, i) => (
                      <li key={i} className="flex items-start">
                        <Icon name="X" className="w-5 h-5 text-red-500 mr-2 mt-0.5" />
                        <span className="text-[#5B5E71]">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </CardContent>
            
            <CardFooter className="p-6 pt-0 mt-auto">
              <Button 
                className={`w-full ${
                  plan.mostPopular 
                    ? "bg-gradient-to-r from-[#8A63D2] to-[#6E8AD2] text-white" 
                    : "bg-white border-2 border-[#8A63D2] text-[#8A63D2] hover:bg-[#F8F5FC]"
                }`}
                size="lg"
              >
                {plan.mostPopular ? "Выбрать план" : "Начать"}
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default PricingPlans;
