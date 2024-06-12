import BotFactory from "../bot/bot_factory.js";

class MarketplaceOrchestrator {
  async run(marketplace, productName) {
    const bot = BotFactory.getBot(marketplace);
    await bot.execute(productName);
  }
}

export default MarketplaceOrchestrator;
