
var PhonePage= require("../pages/phone.page.js")
var CellPhone=require("../pages/cellPhone.page.js")
var Base=require("../utilities/base.js")
describe("shoult automate phone ",()=>{
    beforeAll(function(){
        browser.waitForAngularEnabled(false)
        browser.get(Base.mainUrl)
        PhonePage.phoneButton.click()
        browser.sleep(4000)
    })
        it("1.should get title",()=>{
        browser.getTitle().then(function(text){
            expect(text).toContain("Cell Phones - Shop AT&T's Selection of Cell Phones & Smartphones")
        })
      //  expect(browser.getTitle()).toEqual("Cell Phones - Shop AT&T's Selection of Cell Phones & Smartphones")
    })
        it("2.nav bar background color",()=>{
    expect(PhonePage.mainPictureColor.getCssValue('color')).toEqual('rgba(51, 51, 51, 1)')  
      PhonePage.mainPictureColor.getCssValue('color').then(function(text){
          console.log(text)
      })
      
    })

        it("3.should displayed logo",()=>{
       expect(PhonePage.logo.isDisplayed()).toBe(true)

    })
        it("4.should displayed shop and support",()=>{
        expect(PhonePage.ShopSupport.isDisplayed()).toEqual(true)
    })
        it("5.should displayed inputbox",()=>{
        expect(PhonePage.inputBox.isDisplayed()).toEqual(true)

    })
        it("6.should searc apple",()=>{
        PhonePage.inputBox.sendKeys("apple").sendKeys(protractor.Key.ENTER)
        browser.navigate().back()
    })
        it("7.should get text from options and click",()=>{
        PhonePage.navigationBox.getText().then(function(text){
            console.log(text)
            for(let a=0;a<text.length;a++){
                expect(text[a]).toEqual(PhonePage.array[a])
                PhonePage.navigationBox.get(a).click();
                browser.navigate().back()
                if(a==0){
                    PhonePage.phoneButton.click()
                }
                
            }
        })
        // PhonePage.navigationBox.each((item,index) =>{
        //     item.getText().then(function(text){
        //         expect(text).toEqual(PhonePage.array[index])  
        //     })
        // })

    })
        fit('7.1 should change box color',()=>{
        PhonePage.navigationBox.getCssValue('background').then(function(text){
           for(let a=0;a<text.length;a++){
           browser.actions().mouseMove(PhonePage.navigationBox.get(a)).perform();
           browser.sleep(1000)
           PhonePage.navigationBox.get(a).getCssValue('background').then(function(color){
            expect(color).toEqual(PhonePage.boxColor[a])       
    })
    }
    })
    })

        it("8.should displayed basket",()=>{
        expect(PhonePage.basket.isDisplayed()).toEqual(true)
    })
         it("9.should displayed signin",()=>{
        expect(PhonePage.sign.isDisplayed()).toEqual(true)
    })
    
        it("10.should displayed business",()=>{
        expect(PhonePage.business.isDisplayed()).toEqual(true)
    })
        it("11.should displayed navigate to bar",()=>{
       //expect(PhonePage.navigationBar.isDisplayed()).toEqual([true,true,true,true,true]) 
        let arr=["Home","Shop","Wireless","Devices","Cellphones & Smartphones"]
        PhonePage.navigationBar.each((element,index)=>{
            element.getText().then(text=>{
                expect(arr[index]).toBe(text)
            })

        })
        it("12.should displayed my wireless card",()=>{
            expect( PhonePage.wireless.isEnabled()).toBe(true)

        })
        it("13.should click cell phones",()=>{
            CellPhone.cellButton.click()
        })
       

    })
})