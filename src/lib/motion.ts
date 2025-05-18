
// Простая библиотека для анимаций, имитирующая React Magic Motion
// Это необходимо поскольку настоящая библиотека не установлена

export const motion = {
  div: (props: any) => {
    const { initial, animate, exit, transition, whileHover, layout, ...rest } = props;
    return <div {...rest}>{props.children}</div>;
  }
};
