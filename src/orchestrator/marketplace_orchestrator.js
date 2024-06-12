import BotFactory from "../bot/bot_factory.js";

class MarketplaceOrchestrator {
  async run(marketplace, productName, actions) {
    const bot = BotFactory.getBot(marketplace);
    await bot.execute(productName, actions);
  }
}

export default MarketplaceOrchestrator;
