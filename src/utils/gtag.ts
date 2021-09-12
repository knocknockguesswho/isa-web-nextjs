import { config } from 'Config/config';

interface IGTagEvent {
  action: string;
  category: string;
  label: string;
  value: number;
}

export const GA_TRACKING_ID = config.GA_TRACKING_ID;
export const pageView = (url: URL) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};
export const event = (params: IGTagEvent) => {
  window.gtag('event', params.action, {
    event_category: params.category,
    event_label: params.label,
    value: params.value,
  });
};
