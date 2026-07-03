export const TELEGRAM_CONFIG = {
  BOT_TOKEN: import.meta.env.VITE_TELEGRAM_BOT_TOKEN ||'',
  CHAT_ID: import.meta.env.VITE_TELEGRAM_CHAT_ID ||'',
  API_URL:'https://api.telegram.org/bot'
};
