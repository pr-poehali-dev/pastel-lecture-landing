import { useState, useRef, useEffect } from "react";
import { motion } from "../components/react-magic-motion";
import Icon from "@/components/ui/icon";

// Определяем науки
const sciences = [
  { id: 1, name: "Математика", icon: "Calculator" },
  { id: 2, name: "Физика", icon: "Atom" },
  { id: 3, name: "Химия", icon: "Flask" },
  { id: 4, name: "Биология", icon: "Leaf" },
  { id: 5, name: "История", icon: "Landmark" },
  { id: 6, name: "Литература", icon: "BookOpen" },
  { id: 7, name: "Информатика", icon: "Code" },
  { id: 8, name: "Экономика", icon: "BarChart2" },
  { id: 9, name: "Психология", icon: "Brain" },
  { id: 10, name: "Астрономия", icon: "Star" },
  { id: 11, name: "География", icon: "Globe" },
  { id: 12, name: "Языкознание", icon: "Languages" },
];

const ScienceMarquee = () => {
  const [selectedScience, setSelectedScience] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Дублируем науки для непрерывной анимации
  const duplicatedSciences = [...sciences, ...sciences];

  // Обработчик клика на плашку
  const handleScienceClick = (id: number) => {
    setSelectedScience(id === selectedScience ? null : id);
    setIsPaused(id !== selectedScience);
  };

  // Эффект для возобновления движения при клике за пределами маркера
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        marqueeRef.current &&
        !marqueeRef.current.contains(event.target as Node)
      ) {
        setIsPaused(false);
        setSelectedScience(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative overflow-hidden rounded-xl" ref={marqueeRef}>
      <motion.div
        className="flex py-6"
        animate={{
          x: isPaused ? 0 : "-50%",
        }}
        transition={{
          x: {
            duration: 30,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          },
        }}
        style={{
          width: "fit-content",
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {duplicatedSciences.map((science, index) => (
          <div
            key={`${science.id}-${index}`}
            className={`flex items-center px-6 py-3 mx-2 rounded-full cursor-pointer transition-all duration-300 ${
              selectedScience === science.id
                ? "bg-[#8A63D2] text-white scale-110 shadow-lg"
                : "bg-white hover:bg-[#F8F5FC] text-[#5B5E71] hover:text-[#8A63D2] shadow-sm"
            }`}
            onClick={() => handleScienceClick(science.id)}
          >
            <Icon
              name={science.icon}
              className={`mr-2 w-5 h-5 ${
                selectedScience === science.id ? "text-white" : "text-[#8A63D2]"
              }`}
            />
            <span className="font-medium">{science.name}</span>
          </div>
        ))}
      </motion.div>

      {selectedScience && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8 p-6 bg-white rounded-xl shadow-md"
        >
          {sciences.find((s) => s.id === selectedScience) && (
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-[#F8F5FC] rounded-2xl flex items-center justify-center">
                <Icon
                  name={
                    sciences.find((s) => s.id === selectedScience)?.icon ||
                    "Book"
                  }
                  className="w-8 h-8 md:w-10 md:h-10 text-[#8A63D2]"
                />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#363A59] font-montserrat mb-2">
                  {sciences.find((s) => s.id === selectedScience)?.name}
                </h3>
                <p className="text-[#5B5E71] mb-4">
                  Расширяйте свои знания в области{" "}
                  {sciences
                    .find((s) => s.id === selectedScience)
                    ?.name.toLowerCase()}
                  с нашими профессиональными курсами. От базовых понятий до
                  продвинутых концепций.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#F8F5FC] text-[#8A63D2] rounded-full text-sm">
                    12 курсов
                  </span>
                  <span className="px-3 py-1 bg-[#F8F5FC] text-[#8A63D2] rounded-full text-sm">
                    36 лекций
                  </span>
                  <span className="px-3 py-1 bg-[#F8F5FC] text-[#8A63D2] rounded-full text-sm">
                    8 экспертов
                  </span>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default ScienceMarquee;
