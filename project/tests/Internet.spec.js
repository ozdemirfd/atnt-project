var PhonePage= require("../pages/phone.page.js")
var CellPhone=require("../pages/cellPhone.page.js")
var Base=require("../utilities/base.js")
var Internet=require("../pages/Internet.page.js")
describe(" should navigate internet page",()=>{
    browser.waitForAngularEnabled(false)
    beforeAll(function(){
        browser.get(Base.mainUrl)
        browser.sleep(2000)
        Internet.internetIcon.click()
    })
   
 it("should select column",()=>{
    browser.sleep(3000)
    expect(Internet.rowColumn(2,3).getText()).toEqual("In-home Wi-Fi service included")
     Internet.rowColumn(2,3).getText().then(function(data){
     console.log(data)
 })
 })

        it("should count checking",()=>{
         Internet.image.each(function(count){
         expect(count.isDisplayed()).toBe(true)
     })
    })

        it("should count cost",()=>{
        Internet.cost.each(function(data){
            expect(data.isDisplayed()).toBe(true)
        })
            expect(Internet.cost.count()).toEqual(4)


})
it("should select topic",()=>{
    browser.executeScript('arguments[0].scrollIntoView();'
    ,element(by.css(".accordion-section>.parsys>div"))).then(function(){
        browser.sleep(3000);
    })

    Internet.internetFaq("Where is AT&T Internet").click()
    browser.sleep(2000)
    Internet.internetFaq(" Why am I only offered a few AT&T").click()
    browser.sleep(2000)
})
it ("should show all tables",()=>{
    for(let a=2;a<7;a++){
        for(let s=1;s<5;s++){
            Internet.rowColumn(a,s).getText().then(function(data){
                console.log(a +". row = " +s+".cloumn data="+ data)
            })
        }
    }
})
it("should display selected picture",()=>{
    
})

})