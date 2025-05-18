
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-[#363A59] text-white">
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-montserrat">EduLectures</h3>
            <p className="text-white/70 mb-4">
              Современная платформа для онлайн-обучения с лучшими лекциями от экспертов в различных областях науки.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-white bg-white/10 hover:bg-white/20 rounded-full">
                <Icon name="Facebook" className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white bg-white/10 hover:bg-white/20 rounded-full">
                <Icon name="Instagram" className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white bg-white/10 hover:bg-white/20 rounded-full">
                <Icon name="Twitter" className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white bg-white/10 hover:bg-white/20 rounded-full">
                <Icon name="Youtube" className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 font-montserrat">Быстрые ссылки</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Главная</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Каталог лекций</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Преподаватели</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Блог</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">О нас</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 font-montserrat">Помощь</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Поддержка</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Условия использования</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Политика конфиденциальности</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Возврат средств</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 font-montserrat">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Icon name="MapPin" className="w-5 h-5 mr-3 text-[#8A63D2]" />
                <span className="text-white/70">Москва, ул. Академика Королева, 12</span>
              </li>
              <li className="flex items-center">
                <Icon name="Mail" className="w-5 h-5 mr-3 text-[#8A63D2]" />
                <span className="text-white/70">info@edulectures.ru</span>
              </li>
              <li className="flex items-center">
                <Icon name="Phone" className="w-5 h-5 mr-3 text-[#8A63D2]" />
                <span className="text-white/70">+7 (495) 123-45-67</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} EduLectures. Все права защищены.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              Условия
            </a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              Конфиденциальность
            </a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
