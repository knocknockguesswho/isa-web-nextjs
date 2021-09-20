import React from 'react';
import { IPageList, pageList, PageSection } from 'Helpers/page-helper';
import Typography from 'Components/atoms/foundation/typography';
import Link from 'next/link';

const NavLink = () => {
  const pageWithSection: IPageList = Object.fromEntries(Object.entries(pageList).filter(([, val]) => val.pageSection));
  const pageName = Object.keys(pageWithSection).filter((key: string) => pageWithSection[key]);
  const pageLinks = Object.values(pageWithSection).map((item: any) => item.pageSection);
  return (
    <div className='flex flex-row space-x-10 tablet:space-x-6 phone:space-x-0 phone:flex-col phone:space-y-6'>
      {pageName.map((name: string, idx: number) => {
        return (
          <div key={idx} className='flex flex-col space-y-5 phone:space-y-4'>
            <Typography className='text-article text-opacity-60'>{name}</Typography>
            {pageLinks[idx].map((page: PageSection, idx: number) => {
              return (
                <Link key={idx} href={page.route}>
                  <a>
                    <Typography className='text-s text-article hover:text-opacity-60'>{page.name}</Typography>
                  </a>
                </Link>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default NavLink;
