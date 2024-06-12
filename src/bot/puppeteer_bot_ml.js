import puppeteer from "puppeteer";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

class PuppeteerBotML {
  async openBrowser() {
    this.browser = await puppeteer.launch({
      headless: false,
      args: ["--start-maximized"],
    });
    this.page = await this.browser.newPage();
    await this.page.setViewport({ width: 1920, height: 1080 });
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

  async clickLoginButton() {
    await this.page.waitForSelector(".login-link");
    await this.page.click(".login-link");
  }

  async setUserEmail() {
    await this.page.waitForSelector('input[name="user_id"]');
    await this.page.type(
      'input[name="user_id"]',
      "danielrossinirune@gmail.com"
    );
    await this.page.click('button[type="submit"]');
  }

  async execute(productName) {
    await this.openBrowser();
    await sleep(2000);

    await this.searchProduct(productName);
    await sleep(2000);

    await this.clickFirstProduct();
    await sleep(2000);

    await this.clickBuyButton();
    await sleep(2000);

    await this.clickLoginButton();
    await sleep(2000);

    await this.setUserEmail();
    await sleep(5000);

    await this.closeBrowser();
  }
}

export default PuppeteerBotML;
