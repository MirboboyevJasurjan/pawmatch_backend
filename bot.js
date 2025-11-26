const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const token = process.env.TELEGRAM_BOT_TOKEN;

// change this later to your deployed URL
const WEB_APP_URL = "https://peppy-alfajores-beaf9e.netlify.app/";

if (!token) {
  console.error("❌ TELEGRAM_BOT_TOKEN is missing in .env");
  process.exit(1);
}

// create bot with polling
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "Welcome to PawMatch 🐾\nOpen the app below:", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Open PawMatch 🐾",
            web_app: { url: WEB_APP_URL }, // IMPORTANT: web_app + HTTPS URL
          },
        ],
      ],
    },
  });
});

console.log("🤖 PawMatch Telegram bot is running...");
