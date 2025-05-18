import { useState } from "react";
import { motion } from "react-magic-motion";
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Данные о лекциях
const lectures = [
  {
    id: 1,
    title: "Основы квантовой физики",
    category: "Физика",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    duration: 45,
    level: "Средний",
    instructor: "Алексей Смирнов",
    description:
      "Погрузитесь в удивительный мир квантовой физики, изучая фундаментальные принципы и концепции, которые лежат в основе современной науки.",
  },
  {
    id: 2,
    title: "Дифференциальные уравнения",
    category: "Математика",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    duration: 60,
    level: "Продвинутый",
    instructor: "Мария Иванова",
    description:
      "Курс посвящен изучению дифференциальных уравнений, их классификации, методам решения и практическому применению в различных областях науки.",
  },
  {
    id: 3,
    title: "Органическая химия",
    category: "Химия",
    image:
      "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    duration: 55,
    level: "Начальный",
    instructor: "Дмитрий Петров",
    description:
      "Введение в органическую химию: изучение структуры, свойств и реакций органических соединений, которые составляют основу живой материи.",
  },
  {
    id: 4,
    title: "Клеточная биология",
    category: "Биология",
    image:
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    duration: 50,
    level: "Средний",
    instructor: "Елена Сидорова",
    description:
      "Детальное изучение клетки — структурной и функциональной единицы всех живых организмов, ее органелл и процессов жизнедеятельности.",
  },
  {
    id: 5,
    title: "Алгоритмы и структуры данных",
    category: "Информатика",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    duration: 65,
    level: "Продвинутый",
    instructor: "Игорь Соколов",
    description:
      "Курс по эффективным алгоритмам и структурам данных, необходимым для разработки оптимизированного программного обеспечения.",
  },
  {
    id: 6,
    title: "Мировая экономика",
    category: "Экономика",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    duration: 40,
    level: "Начальный",
    instructor: "Анна Козлова",
    description:
      "Обзор принципов функционирования мировой экономики, международных экономических отношений и глобальных экономических проблем.",
  },
];

const LectureGrid = () => {
  const [expandedLecture, setExpandedLecture] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setExpandedLecture(expandedLecture === id ? null : id);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {lectures.map((lecture) => (
        <motion.div
          key={lecture.id}
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          whileHover={{ y: -5 }}
          className={`${
            expandedLecture === lecture.id ? "md:col-span-2 lg:col-span-3" : ""
          }`}
        >
          <Card
            className={`overflow-hidden cursor-pointer transition-all duration-300 h-full ${
              expandedLecture === lecture.id
                ? "shadow-xl"
                : "shadow-md hover:shadow-lg"
            }`}
            onClick={() => handleCardClick(lecture.id)}
          >
            <CardContent className="p-0 h-full">
              <div
                className={`${
                  expandedLecture === lecture.id
                    ? "flex flex-col lg:flex-row"
                    : "flex flex-col"
                }`}
              >
                <div
                  className={`${
                    expandedLecture === lecture.id ? "lg:w-1/3" : "w-full"
                  }`}
                >
                  <div className="relative h-48">
                    <img
                      src={lecture.image}
                      alt={lecture.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/80 backdrop-blur-sm text-[#363A59]">
                        {lecture.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 flex items-center bg-black/60 text-white px-2 py-1 rounded-full text-sm">
                      <Icon name="Clock" className="w-4 h-4 mr-1" />
                      {lecture.duration} мин
                    </div>
                  </div>
                </div>

                <div
                  className={`p-5 flex flex-col ${
                    expandedLecture === lecture.id ? "lg:w-2/3" : "w-full"
                  }`}
                >
                  <h3 className="text-lg font-bold text-[#363A59] font-montserrat mb-2">
                    {lecture.title}
                  </h3>

                  <div className="flex items-center mb-3">
                    <Badge
                      variant="outline"
                      className="mr-2 text-xs font-normal"
                    >
                      {lecture.level}
                    </Badge>
                    <span className="text-sm text-[#5B5E71]">
                      {lecture.instructor}
                    </span>
                  </div>

                  {expandedLecture === lecture.id ? (
                    <>
                      <p className="text-[#5B5E71] mb-4">
                        {lecture.description}
                      </p>
                      <div className="mt-auto flex flex-wrap gap-3">
                        <Badge className="bg-[#F8F5FC] text-[#8A63D2] hover:bg-[#E5D8F4]">
                          <Icon name="Video" className="w-4 h-4 mr-1" />6
                          видеозаписей
                        </Badge>
                        <Badge className="bg-[#F8F5FC] text-[#8A63D2] hover:bg-[#E5D8F4]">
                          <Icon name="FileText" className="w-4 h-4 mr-1" />
                          12 материалов
                        </Badge>
                        <Badge className="bg-[#F8F5FC] text-[#8A63D2] hover:bg-[#E5D8F4]">
                          <Icon name="Award" className="w-4 h-4 mr-1" />
                          Сертификат
                        </Badge>
                      </div>
                    </>
                  ) : (
                    <p className="text-[#5B5E71] line-clamp-2 mb-2">
                      {lecture.description}
                    </p>
                  )}

                  <div
                    className={`flex justify-end mt-auto ${
                      expandedLecture === lecture.id ? "pt-4" : ""
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center text-[#8A63D2] font-medium"
                    >
                      {expandedLecture === lecture.id ? (
                        <>
                          Свернуть{" "}
                          <Icon name="ChevronUp" className="ml-1 w-5 h-5" />
                        </>
                      ) : (
                        <>
                          Подробнее{" "}
                          <Icon name="ChevronRight" className="ml-1 w-5 h-5" />
                        </>
                      )}
                    </motion.div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default LectureGrid;
