import React from 'react';
import HighlightedArticle from 'Components/molecules/article/highlighted-article';
import Icon from 'Components/atoms/foundation/icon';
import { IconName } from 'Helpers/icon-helper';
import { Url, UrlObject } from 'url';

export interface IProps {
  iconName?: IconName;
  articleTitle?: string;
  articleSubtitle?: string;
  articleContent?: string;
  articleButtonLabel?: string;
  articleButtonClick?: Url | UrlObject;
}

const CardArticle = (props: IProps) => {
  return (
    <div className='w-auto self-center flex flex-row h-60 phone:flex-col phone:w-full phone:h-auto tablet:h-auto rounded-card bg-white shadow-normal overflow-hidden flex-none'>
      <div className='w-60 phone:w-full phone:py-6 tablet:px-6 tablet:h-auto h-full bg-blue flex items-center justify-center'>
        <Icon
          name={props.iconName}
          size='5xl'
          color='white'
        />
      </div>
      <HighlightedArticle
        buttonType='outlined'
        title={props.articleTitle}
        subtitle={props.articleSubtitle}
        article={props.articleContent}
        buttonLabel={props.articleButtonLabel}
        buttonClick={props?.articleButtonClick}
      />
    </div>
  );
};

CardArticle.defaultProps = {
  articleButtonClick: '/'
};

export default CardArticle;
