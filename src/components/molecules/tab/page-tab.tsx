import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { PageSection } from 'Helpers/page-helper';
import { useRouter } from 'next/router';
import { ParsedUrlQuery, stringify, ParsedUrlQueryInput } from 'querystring';
import { UrlObject } from 'url';
const Typography = dynamic(() => import('Components/atoms/foundation/typography'));

interface IProps {
  tabs: PageSection[];
}

const PageTab = (props: IProps) => {
  const router = useRouter();
  const routerQuery: ParsedUrlQuery = router.query;
  return (
    <div className='w-full border-t border-b border-l border-blue flex flex-row box-content'>
      {props.tabs.map((tab: PageSection, idx: number) => {
        const tabRoute: UrlObject = tab.route as UrlObject;
        return (
          <div className='flex flex-1 justify-center items-center border-r border-blue box-content' key={idx}>
            <Link href={tab.route}>
              <a
                className={`w-full ${
                  stringify(tabRoute.query as ParsedUrlQueryInput) === stringify(routerQuery)
                    ? 'text-white bg-blue'
                    : 'text-blue '
                }`}
              >
                <Typography className='text-xl tablet:text-lg phone:text-xs w-full text-center py-4'>
                  {tab.name}
                </Typography>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default PageTab;
