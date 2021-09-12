export interface IConfig {
  GA_TRACKING_ID: string;
}

const config: IConfig = {
  GA_TRACKING_ID: (process.env.GA_TRACKING_ID as string) || '',
};

export { config };
