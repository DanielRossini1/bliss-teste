import puppeteer from "puppeteer";

(async () => {
  // const browserPath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://www.mercadolivre.com.br/");

  await page.setViewport({ width: 1920, height: 1080 });

  await page.type(".nav-search-input", "pen drive 16gb sandisk");

  const searchResultSelector = "#cb1-opt1-1";
  await page.waitForSelector(searchResultSelector);
  await page.click(searchResultSelector);

  const filterDropdowButton = ".andes-dropdown__trigger";
  const ascFilterButton = '[data-key="price_asc"]';

  await page.waitForSelector(filterDropdowButton);
  await page.click(filterDropdowButton);

  const maxRetries = 5;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log("Esperando...");
      await page.waitForSelector(ascFilterButton, { timeout: 1000 });
      console.log("Elemento encontrado!");
      break;
    } catch (error) {
      console.log(`Tentativa ${attempt} falhou. Tentando novamente...`);
      await page.click(filterDropdowButton);
      console.log("filter button clicked!");
    }
    if (attempt === maxRetries) {
      console.log(
        "Número máximo de tentativas atingido. Elemento não encontrado."
      );
    }
  }

  await page.click(ascFilterButton);

  await page.waitForSelector(".ui-search-layout");
  const arrayItems = await page.$$(".ui-search-layout .ui-search-layout__item");

  for (const item of arrayItems) {
    // Obtém o texto do item
    const itemProps = await page.evaluate((element) => {
      const elementObjectProps = {
        text: element.querySelector(".ui-search-item__title").innerHTML,
        rating: element.querySelector(".ui-search-reviews__rating-number")
          ? element.querySelector(".ui-search-reviews__rating-number").innerHTML
          : null,
      };

      return elementObjectProps;
    }, item);

    const regexValidator =
      /^(?=.*\bpen drive\b)(?=.*\b16gb\b)(?=.*\bsandisk\b).*$/;

    if (
      regexValidator.test(itemProps.text.toLowerCase()) &&
      parseFloat(itemProps.rating) > 4.7
    ) {
      console.log("Item desejado encontrado! Clicando no item...");

      await item.click();

      break;
    }
  }

  // console.log(arrayItems);

  // Locate the full title with a unique string
  //   const textSelector = await page.waitForSelector(
  //     'text/Customize and automate'
  //   );
  //   const fullTitle = await textSelector?.evaluate(el => el.textContent);

  //   // Print the full title
  //   console.log('The title of this blog post is "%s".', fullTitle);

  // await browser.close();
})();
