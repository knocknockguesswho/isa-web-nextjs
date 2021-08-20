import {
  AccountingService,
  Burger,
  BusinessAdvisory,
  ChevronLeft,
  ChevronRight,
  Clock,
  Close,
  Email,
  IsaLogo,
  TaxServices,
  Whatsapp,
} from '../../public/static/icons';

export type IconSize = 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
export type IconName =
  | 'close'
  | 'burger'
  | 'chevron-left'
  | 'chevron-right'
  | 'accounting-service'
  | 'tax-services'
  | 'business-advisory'
  | 'clock'
  | 'whatsapp'
  | 'email'
  | 'isa-logo'
  | 'isa-logo-text';

interface IProps {
  name?: IconName;
  size: string;
  color?: string;
}
export const IconElement = (props: IProps) => {
  switch (props.name) {
    case 'close':
      return <Close size={props?.size} color={props?.color} />;
    case 'burger':
      return <Burger size={props?.size} color={props?.color} />;
    case 'chevron-right':
      return <ChevronRight size={props?.size} color={props?.color} />;
    case 'chevron-left':
      return <ChevronLeft size={props?.size} color={props?.color} />;
    case 'accounting-service':
      return <AccountingService size={props?.size} color={props?.color} />;
    case 'tax-services':
      return <TaxServices size={props?.size} color={props?.color} />;
    case 'business-advisory':
      return <BusinessAdvisory size={props?.size} color={props?.color} />;
    case 'clock':
      return <Clock size={props?.size} color={props?.color} />;
    case 'whatsapp':
      return <Whatsapp size={props?.size} color={props?.color} />;
    case 'email':
      return <Email size={props?.size} color={props?.color} />;
    case 'isa-logo':
      return <IsaLogo size={props?.size} color={props?.color} />;
    default:
      return <Close size={props?.size} color={props?.color} />;
  }
};
