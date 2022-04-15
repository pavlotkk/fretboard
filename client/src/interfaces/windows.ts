export {};

interface AppConfig{
    api_host: string | null
}

declare global {
  interface Window {
    app_config: AppConfig
  }
}
