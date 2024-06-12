import PuppeteerBotML from "./puppeteer_bot_ml.js";

class BotFactory {
  static getBot(marketplace) {
    switch (marketplace) {
      case "mercadolivre":
        return new PuppeteerBotML();
      default:
        throw new Error("Marketplace not supported");
    }
  }
}

export default BotFactory;
