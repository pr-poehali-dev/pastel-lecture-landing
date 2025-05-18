
// Файл для симуляции библиотеки react-magic-motion
import React from 'react';

// Типы анимации
type AnimateProps = {
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  exit?: Record<string, any>;
  transition?: Record<string, any>;
  whileHover?: Record<string, any>;
  whileTap?: Record<string, any>;
  layout?: boolean | string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
};

// HOC для добавления свойств анимации к элементу
export const motion = {
  div: (props: AnimateProps & React.HTMLAttributes<HTMLDivElement>) => {
    const {
      initial,
      animate,
      exit,
      transition,
      whileHover,
      whileTap,
      layout,
      className,
      children,
      style,
      ...rest
    } = props;

    // Динамические стили на основе свойств анимации
    const dynamicStyle: React.CSSProperties = {
      ...style,
      transition: transition 
        ? `all ${transition.duration || 0.3}s ${transition.ease || 'ease'}`
        : 'all 0.3s ease',
    };

    return (
      <div
        className={className}
        style={dynamicStyle}
        {...rest}
      >
        {children}
      </div>
    );
  },
  // Можно добавить другие HTML элементы по мере необходимости
  // Например:
  section: (props: AnimateProps & React.HTMLAttributes<HTMLElement>) => {
    const {
      initial,
      animate,
      exit,
      transition,
      whileHover,
      whileTap,
      layout,
      className,
      children,
      style,
      ...rest
    } = props;

    const dynamicStyle: React.CSSProperties = {
      ...style,
      transition: transition 
        ? `all ${transition.duration || 0.3}s ${transition.ease || 'ease'}`
        : 'all 0.3s ease',
    };

    return (
      <section
        className={className}
        style={dynamicStyle}
        {...rest}
      >
        {children}
      </section>
    );
  },
  // Можно добавить другие элементы если потребуется
  img: (props: AnimateProps & React.ImgHTMLAttributes<HTMLImageElement>) => {
    const {
      initial,
      animate,
      exit,
      transition,
      whileHover,
      whileTap,
      layout,
      className,
      children,
      style,
      ...rest
    } = props;

    const dynamicStyle: React.CSSProperties = {
      ...style,
      transition: transition 
        ? `all ${transition.duration || 0.3}s ${transition.ease || 'ease'}`
        : 'all 0.3s ease',
    };

    return (
      <img
        className={className}
        style={dynamicStyle}
        {...rest}
      />
    );
  }
};
