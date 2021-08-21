import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { ArticleContent, ArticleContentImg } from 'Components/templates/content/blog-article';
const Typography = dynamic(() => import('Components/atoms/foundation/typography'), { ssr: false });

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
            {content.p && <Typography className='text-black text-xl'>{content.p}</Typography>}
            {content.img && (
              <div className='flex flex-col items-center justify-center space-y-4 w-auto'>
                {content.img.map((item: ArticleContentImg, imgIdx: number) => {
                  return (
                    <Image
                      key={imgIdx}
                      src={item.src}
                      width={item.width}
                      height={item.height}
                      alt={props.title + ' ' + imgIdx}
                      loading='lazy'
                    />
                  );
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
