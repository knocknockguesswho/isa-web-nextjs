import React from 'react';
import Typography from 'Components/atoms/foundation/typography';
import ButtonOutlined from '../button/button-outlined';
import Link from 'next/link';
import { Url, UrlObject } from 'url';
import ButtonText from '../button/button-text';

type ButtonType = 'outlined' | 'text-chevron'
export interface IProps {
  title?: string;
  subtitle?: string;
  article?: string;
  withShadow?: boolean;
  buttonType: ButtonType;
  buttonLabel?: string;
  buttonClick?: Url | UrlObject | string
}

const HighlightedArticle = (props: IProps) => {
  const ButtonElement: React.ReactElement | null = props.buttonLabel ? (
    props.buttonType === 'outlined'
      ? (
        <div className='w-full flex flex-row justify-end pt-10'>
          {typeof props.buttonClick === 'function'
            ? (
              <ButtonOutlined
                type='primary'
                className='text-sm text-blue'
                onClick={props.buttonClick as () => void}
              >
                {props.buttonLabel}
              </ButtonOutlined>
            ) : (
              <ButtonOutlined
                type='primary'
                className='text-sm text-blue'
              >
                <Link
                  href={props?.buttonClick as Url | UrlObject}
                  scroll
                >
                  <a>{props.buttonLabel}</a>
                </Link>
              </ButtonOutlined>
            )
          }
        </div>
      ) : (
        <div className='w-full flex flex-row justify-end pt-10'>
          {typeof props.buttonClick === 'function'
            ? (
              <ButtonText
                className='text-sm text-blue'
                onClick={props.buttonClick as () => void}
                withArrow
              >
                {props.buttonLabel}
              </ButtonText>
            ) : (
              <ButtonText
                className='text-sm text-blue'
                withArrow
              >
                <Link
                  href={props?.buttonClick as Url | UrlObject}
                  scroll
                >
                  <a>{props.buttonLabel}</a>
                </Link>
              </ButtonText>
            )
          }
        </div>
      )
  ) : null;
  return (
    <div
      className='flex flex-col py-6 px-7 bg-white justify-between'
      style={{ maxWidth: '608px' }}
    >
      <div className='flex flex-col space-y-1'>
        {props.title &&
          <Typography
            bold
            className='text-blue text-lg'
          >
            {props.title}
          </Typography>
        }
        {props.subtitle &&
          <Typography
            bold
            className='text-black text-xl'
          >
            {props.subtitle}
          </Typography>
        }
        {props.article &&
          <Typography className='text-black text-lg'>
            {props.article}
          </Typography>
        }
      </div>
      {ButtonElement}
    </div>
  );
};

HighlightedArticle.defaultProps = {
  buttonClick: '/',
};

export default HighlightedArticle;
