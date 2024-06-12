import puppeteer from "puppeteer";

class PuppeteerBotML {
  async openBrowser() {
    this.browser = await puppeteer.launch({ headless: false });
    this.page = await this.browser.newPage();
    await this.page.goto("https://www.mercadolivre.com.br/");
  }

  async closeBrowser() {
    await this.browser.close();
  }

  async searchProduct(productName) {
    await this.page.type('input[name="as_word"]', productName);
    await this.page.click('button[type="submit"]');
    await this.page.waitForSelector(".ui-search-layout__item");
  }

  async clickFirstProduct() {
    const productLink = await this.page.$(
      ".ui-search-layout__item:first-child"
    );
    await productLink.click();
  }

  async clickBuyButton() {
    await this.page.waitForSelector(".andes-button__content");
    const buyButton = await this.page.$(".andes-button__content");
    await buyButton.click();
  }

  async filterByPrice(minPrice, maxPrice) {
    await this.page.type("#min-price", minPrice.toString());
    await this.page.type("#max-price", maxPrice.toString());
    await this.page.click('button[type="submit"]');
    await this.page.waitForSelector(".ui-search-result__image");
  }

  async addToCart() {
    await this.page.waitForSelector(".andes-button__content");
    const addToCartButton = await this.page.$(".andes-button__content");
    await addToCartButton.click();
  }

  async execute(productName, actions) {
    await this.openBrowser();
    await this.searchProduct(productName);

    for (const action of actions) {
      switch (action.type) {
        case "clickFirstProduct":
          await this.clickFirstProduct();
          break;
        case "clickBuyButton":
          await this.clickBuyButton();
          break;
        case "filterByPrice":
          await this.filterByPrice(action.minPrice, action.maxPrice);
          break;
        case "addToCart":
          await this.addToCart();
          break;
        default:
          console.log(`Action ${action.type} not recognized.`);
      }
    }

    await this.closeBrowser();
  }
}

export default PuppeteerBotML;
