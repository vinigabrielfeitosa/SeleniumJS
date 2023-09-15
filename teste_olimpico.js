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
    await driver.get('https://lojaolimpico.com.br/account/login/');

    //Encontra o elemento com o nome no navegador
    const login = await driver.findElement(By.xpath("/html/body/div[11]/section[3]/div/div/div/form/div[1]/input"));

    const senha = await driver.findElement(By.xpath("/html/body/div[11]/section[3]/div/div/div/form/div[2]/input"));

    //Insere o texto
    await login.sendKeys("");
    await senha.sendKeys("");

    //Pressionar o enter
    await senha.sendKeys(Key.ENTER);

}

//Chama a função

run();