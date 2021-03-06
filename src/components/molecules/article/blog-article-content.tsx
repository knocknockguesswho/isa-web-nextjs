import React from 'react';
import Image from 'next/image';
import Typography from 'Components/atoms/foundation/typography';
import CardArticleSection from 'Components/organism/body/card-article-section';
import { ArticleContent, ArticleContentCard, ArticleContentImg } from 'Components/templates/content/blog-article';

interface IProps {
  title?: string;
  item: ArticleContent[];
}
const BlogArticleContent = (props: IProps) => {
  return (
    <div className='space-y-10 px-10 desktop:px-18 phone:px-6'>
      {props.item.map((content: ArticleContent, contentIdx: number) => {
        return (
          <div key={contentIdx}>
            {content.subtitle && (
              <Typography bold className='text-black text-2xl mb-6'>
                {content.subtitle}
              </Typography>
            )}
            {content.p && (
              <div className='flex flex-col space-y-10'>
                {content.p.map((item: string, pIdx: number) => {
                  return (
                    <Typography key={pIdx} className='text-black text-xl'>
                      {item}
                    </Typography>
                  );
                })}
              </div>
            )}
            {content.img && (
              <div className='flex flex-col items-center justify-center w-auto'>
                {content.img.map((item: ArticleContentImg, imgIdx: number) => {
                  return (
                    <div key={imgIdx} className={imgIdx !== (content?.img?.length as number) - 1 ? 'mb-4' : ''}>
                      <Image
                        src={item.src}
                        width={item.width}
                        height={item.height}
                        alt={props.title + ' ' + imgIdx}
                        loading='lazy'
                        className='bg-white'
                      />
                    </div>
                  );
                })}
              </div>
            )}
            {content.card && (
              <div className='flex flex-col space-y-7'>
                {content.card.map((item: ArticleContentCard, cardIdx: number) => {
                  return <CardArticleSection key={cardIdx} title={item.title} content={item.content} />;
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BlogArticleContent;
