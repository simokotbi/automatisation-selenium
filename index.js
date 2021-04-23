const { Builder, By, Key, util, promise, until } = require("selenium-webdriver");
//var assert = require("assert");
//const { ableToSwitchToFrame } = require("selenium-webdriver/lib/until");
let fs = require('fs');

async function test() {
  try{
    let driver =  new Builder().forBrowser("chrome").build();
    driver.manage().window().maximize();
    await  driver.get("https://www.google.com");
   await driver.get('https://www.soccerdonna.de/de/fc-bayern-muenchen/historische-kader/verein_2009.html');
  //await driver.findElement(By.className('message-component'))
const element=By.xpath("//input[@class='message-component message-button no-children']");
driver.wait(until.elementLocated(element));
const whatelement=(await driver).findElement(element);
  await driver.wait(until.elementIsVisible(whatelement),5000)
 .click()
  //await driver.findElements(By.css('.message .message-component'))
 // .click()
 driver.findElements(element).then(function(elements){
  elements.forEach(function (element) {
      element.getText().then(function(text){
          console.log(text);
      });
  });
})
  .then(()=>console.log("clicked succesfuly!!!"));
}catch(err){console.log(err)}

 isbtnready=()=>{
   driver.wait(until.elementIsVisible(By.className('message-component')),2000)
   .then(el=>{
     return el.click();
   })
 }

}
test();