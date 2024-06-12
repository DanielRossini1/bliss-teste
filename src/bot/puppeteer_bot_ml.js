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
    await this.page.waitForSelector(
      "button[formaction='https://www.mercadolivre.com.br/gz/checkout/buy']"
    );
    const buyButton = await this.page.$(
      "button[formaction='https://www.mercadolivre.com.br/gz/checkout/buy']"
    );
    await buyButton.click();
  }

  async execute(productName) {
    await this.openBrowser();
    await this.searchProduct(productName);
    await this.clickFirstProduct();
    await this.clickBuyButton();

    await this.closeBrowser();
  }
}

export default PuppeteerBotML;
