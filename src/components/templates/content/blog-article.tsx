import React from 'react';
import dynamic from 'next/dynamic';
import { PageSection } from 'Helpers/page-helper';
import { useRouter } from 'next/router';
import Icon from 'Components/atoms/foundation/icon';
import { convertMsToMin } from 'Helpers/component-helper';
const Typography = dynamic(() => import('Components/atoms/foundation/typography'), { ssr: false });
const BodyContainer = dynamic(() => import('Components/atoms/container/body-container'), { ssr: false });
const PageTab = dynamic(() => import('Components/molecules/tab/page-tab'));
const BlogArticleContent = dynamic(() => import('Components/molecules/article/blog-article-content'));

export type ArticleContentImg = {
  src: string;
  width: number | string;
  height: number | string;
};
export type ArticleContentCard = {
  title: string;
  content: string;
};
export type ArticleContent = {
  p?: string;
  img?: ArticleContentImg[];
  section?: string;
  card?: ArticleContentCard[];
  markedTitle?: boolean;
};
export type ArticleBody = {
  title: string;
  timeToRead: number;
  content: ArticleContent[];
};
interface IProps {
  articleHeader: string;
  tabContent?: PageSection[];
  articleBody: ArticleBody;
}

const BlogArticle = (props: IProps) => {
  const router = useRouter();
  React.useEffect(() => {
    if (props.tabContent && !router.query) router.push(props?.tabContent[0].route);
  }, [router.query]);
  return (
    <BodyContainer>
      <div className='w-full flex flex-col items-baseline'>
        {/* it's article container */}
        <div
          className='w-full flex flex-col space-y-10 px-10 pb-30 desktop:px-18 phone:px-6 phone:pb-10'
          style={{ maxWidth: 1260 }}
        >
          {/* it's article header container */}
          <Typography isTitle bold className='text-5xl phone:text-4xl text-black text-opacity-75'>
            {props?.articleHeader}
          </Typography>
          {props?.tabContent && <PageTab tabs={props?.tabContent} />}
        </div>
        <div className='w-full flex flex-row phone:flex-col items-center phone:items-baseline space-x-5 phone:space-x-0 phone:space-y-1 px-10 pb-7 desktop:px-18 phone:px-6'>
          {/* it's body title container */}
          <Typography className='text-black text-2xl phone:text-xl' bold>
            {props?.articleBody?.title}
          </Typography>
          <div className='flex flex-row space-x-1 items-center'>
            {/* it's body title time to read container */}
            <Icon color='neutral' size='s' name='clock' />
            <Typography className='text-s text-neutral' italic>
              {convertMsToMin(props?.articleBody?.timeToRead)} min read
            </Typography>
          </div>
        </div>
        <div className='w-full flex flex-col space-y-10' style={{ maxWidth: 1000 }}>
          {/* it's body content container */}
          <BlogArticleContent title={props?.articleBody?.title} item={props?.articleBody?.content} />
        </div>
      </div>
    </BodyContainer>
  );
};

export default BlogArticle;
