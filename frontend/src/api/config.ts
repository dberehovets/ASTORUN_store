interface IAppConfig {
  baseURL: string;
}

const AppConfig: IAppConfig = {
  baseURL: process.env.REACT_APP_BASE_URL || '/api',
};

export default AppConfig;
