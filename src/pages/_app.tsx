/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { getStatic, PAGE_NAME, pageList } from 'Helpers/page-helper';
import 'Styles/index.css';

const ButtonRounded = dynamic(() => import('Components/molecules/button/button-rounded'));
const NavigationBar = dynamic(() => import('Components/organism/header/navigation-bar'));

function IradhiFrontend(props: any) {
  const { Component, pageProps } = props;
  const hostname: string = process.browser ? (window.location.hostname as string) : '';
  const defaultMeta = {
    ogtype: 'website',
    ogurl: hostname,
    ogimage: hostname + getStatic('isa-og-image.png'),
  };
  return (
    <div className='min-h-screen flex flex-col'>
      <Head>
        <title>{pageList[PAGE_NAME.DEFAULT].title}</title>
        <meta name='description' content={pageList[PAGE_NAME.DEFAULT].description} key={'description'} />
        <meta property='og:title' content={pageList[PAGE_NAME.DEFAULT].title} key={'ogtitle'} />
        <meta property='og:type' content={defaultMeta.ogtype} key={'ogtype'} />
        <meta property='og:url' content={defaultMeta.ogurl} key={'ogurl'} />
        <meta property='og:image' content={defaultMeta.ogimage} key={'ogimage'} />
        <link href='https://fonts.googleapis.com' />
        <link href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap'
          rel='stylesheet'
        />
        <link rel='icon' href='/isa-logo.ico' />
      </Head>
      <NavigationBar />
      <a
        className='fixed bottom-0 right-0 transform -translate-y-6 -translate-x-6 z-20'
        href='https://wa.me/6285883360420'
        target='_blank'
        rel='noreferrer'
      >
        <ButtonRounded iconName='whatsapp' buttonColor='blue' iconColor='white' iconSize='l' withShadow withBorder />
      </a>
      <Component {...pageProps} />
    </div>
  );
}

export default IradhiFrontend;
