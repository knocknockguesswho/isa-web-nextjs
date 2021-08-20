import React from 'react';
import Link from 'next/link';
import { UrlObject } from 'url';
import { useRouter } from 'next/router';

export type Tab = { name: string | UrlObject, href: string }
interface IProps {
  tabs?: Tab[];
  isPhoneNavActive?: boolean;
  navClickCallback?: (status: boolean) => void;
}

const NavigationTab = (props: IProps) => {
  const router = useRouter();
  return (
    <div className='flex flex-row bg-white z-20 phone:flex-col phone:shadow-normal phone:absolute phone:w-screen'>
      {props?.tabs?.map((tab: Tab, idx: number) => {
        return (
          <Link
            key={idx}
            href={tab.href}
            scroll
          >
            <a
              onClick={() => props.navClickCallback && props.navClickCallback(props.isPhoneNavActive as boolean)}
              className={`p-4 phone:p-10 text-center text-darkBlue ${tab.href === router.pathname ? 'border-b-2 border-darkBlue phone:border-b-0 phone:bg-blue phone:text-white' : ''}`}
            >
              {tab.name}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

NavigationTab.defaultProps = {
  isPhoneNavActive: false
};

export default NavigationTab;
