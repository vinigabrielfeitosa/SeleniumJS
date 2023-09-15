//Importar os modulos selenium
//Builder - BY - KEY

const {Builder, By, Key} = require('selenium-webdriver')

//Importa o objeto chrome do modulo selenium-webdriver/chrome
const chrome = require('selenium-webdriver/chrome');

//Importa o modulo chromedriver
const chromedriver = require('chromedriver');

//Criar um novo objeto
const service = ()=> chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

//Definir a função
async function run(){

    //Criar um novo objeto webdriver
    let driver = await new Builder().forBrowser('chrome').build();

    //Abre a pagina
    await driver.get('https://google.com.br');

    //Encontra o elemento com o nome no navegador
    const pesquisa = await driver.findElement(By.name("q"));

    //Insere o texto
    await pesquisa.sendKeys("React");

    //Pressionar o enter
    await pesquisa.sendKeys(Key.ENTER);

}

//Chama a função

run();