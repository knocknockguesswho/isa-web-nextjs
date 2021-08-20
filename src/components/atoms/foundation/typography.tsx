import React from 'react';

interface IProps {
  bold?: boolean;
  italic?: boolean;
  center?: boolean;
  children: string | React.ReactNode;
  className?: string;
  isTitle?: boolean;
}

const Typography = (props: IProps) => {
  const style = [
    props?.bold ? 'font-medium' : '',
    props?.italic ? 'italic' : '',
    props?.center ? 'text-center' : '',
    props?.className,
    'flex-none leading-snug',
  ].join(' ');
  return (
    props.isTitle
      ? <h1 className={style}>{props.children}</h1>
      : <p className={style}>{props.children}</p>
  );
};

Typography.defaultProps = {
  color: 'black',
  bold: false,
  italic: false,
  isTitle: false
};

export default Typography;
