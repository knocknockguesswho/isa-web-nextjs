import React from 'react';
import CardArticle, { IProps as CardArticleProps } from 'Components/organism/body/card-article';

export type CardArticleItems = Partial<CardArticleProps>
interface IProps {
  items: CardArticleItems[];
}

const CardArticleContent = (props: IProps) => {
  return (
    <div className='phone:p-6 tablet:px-6 space-y-8'>
      {props.items.map((item: CardArticleItems, idx: number) => {
        return (
          <CardArticle
            key={idx}
            {...item}
          />
        );
      })}
    </div>
  );
};

export default CardArticleContent;
