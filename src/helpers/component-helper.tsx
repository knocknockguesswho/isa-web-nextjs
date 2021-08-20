import { Url, UrlObject } from 'url';

export type TextSize = 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | 'pageTitle';
export type ColorPalette = 'white' | 'blue' | 'darkBlue' | 'grey' | 'black' | 'overlay' | 'article' | 'neutral' | 'transparent';
export function convertTextSize(size: TextSize | undefined): string {
  return 'text-' + size;
}
export function convertColor(color: ColorPalette, type: 'text' | 'bg' | 'border' = 'text'): string {
  let colorConverted = 'text-white';
  switch (type) {
    case 'text':
      colorConverted = 'text-' + color;
      break;
    case 'bg':
      colorConverted = 'bg-' + color;
      break;
    case 'border':
      colorConverted = 'border-' + color;
      break;
  }
  return colorConverted;
}

export function convertRouteToString(routeName: Url | UrlObject | string) {
  return routeName.toString().replace('/', '').replace('-', ' ');
}

export function convertMsToMin(ms: number) {
  return Math.ceil(ms / 10000);
}
