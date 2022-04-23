export {};

interface AppConfig{
    api_host: string | null,
    version: string
}

declare global {
  interface Window {
    app_config: AppConfig
  }
}
