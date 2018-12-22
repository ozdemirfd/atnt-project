var PhonePage= require("../pages/phone.page.js")
var CellPhone=require("../pages/cellPhone.page.js")
var Base=require("../utilities/base.js")

describe("should go to the CellPhone page",()=>{
    var number;
    browser.waitForAngularEnabled(false)
    browser.get(Base.mainUrl)
    PhonePage.phoneButton.click()
    browser.sleep(3000)
    var EC=protractor.ExpectedConditions
    it("should choose drop down",()=>{
        for(let a=0;a<CellPhone.array.length;a++){
        browser.wait(EC.visibilityOf(CellPhone.dropDownElemnt.get(a)),14000)
       .then(function(){
        CellPhone.dropDown(CellPhone.array[a]).click()
        browser.sleep(2000)
       })
    }
    })
  it("should scroll down",()=>{
    browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(function(){
        browser.sleep(2000)
        CellPhone.showAll.click()
        browser.sleep(2000)
    })
  })
  it("should count all product",()=>{
      var product=CellPhone.allCell.count();
      product.then(function(data){
          expect(data).toEqual(40)
      })
  })
  it("should compare number of rewievs",()=>{
      var expected=[]  
     CellPhone.rewiev.getText().then(function(number){ 
         console.log(number)
           for(let a=0;a<number.length;a++){
               var s=number[a].split(" ")
                expected.push(s[0])
           }
         var max=100;
         var count=0;
           for(let i=0;i<expected.length;i++){
               if(expected[i]>max){
                   count++
               }
           }console.log(count)    
    })

})
it("should displayed highest price",()=>{
    var max=0
    var highestPrice=[]
    CellPhone.listPrice.getText().then(function(highest){   
 for(let a=0;a<highest.length;a++){
     var array=highest[a].substring(highest[a].lastIndexOf("$")+1,highest[a].lastIndexOf("/")-1)
     var price=parseInt(array)
     highestPrice.push(price)
 }
 for(let i=0;i< highestPrice.length;i++){
   if( highestPrice[i]>max){
       max= highestPrice[i]
   }
 }
 console.log(max)
})
})

it("should enabled radio button",()=>{
    CellPhone.radioButton.each(function(element){
            expect(element.isEnabled()).toBe(true)
       
    })
})
it("should enabled check button",()=>{
    CellPhone.checkButton.each(function(element){
            expect(element.isEnabled()).toBe(true)
       
    })
})
it("should enabled View button",()=>{
    CellPhone.viewButton.each(function(element){
            expect(element.isEnabled()).toBe(true)
            
    })
    element(by.css(".deviceSize")).getText().then(function(size){
        console.log(size)
        number=parseInt(size)
        CellPhone.viewButton.count().then(function(data){
            expect(data).toEqual(number)
        })
    })
    // CellPhone.viewButton.count().then(function(data){
    //     expect(data).toEqual(number)
    // })

})

it("should verify number of samsung brand",()=>{
    var count=0
    CellPhone.phoneTitle.getText().then(function(text){
        for(var x of text){
        if(x.includes("Samsung")){
            count++;
        }
    }
    console.log(count)
    })
   
    element(by.css(".filterCounttaxoManu3")).getText().then(function(data){
  //  var result=parseInt(data.substring(1,(data.length-1)))
      var result=parseInt(data.slice(1,(data.length-1)))
      expect(result).toEqual(count)
})
})
xit("should verify footer and go to the footer",()=>{
    for(var s=0;s<7;s++){
        // if(s==3){
        //     continue;
        // }
        CellPhone.footer(s);
        browser.sleep(2000);
        browser.navigate().back();
        browser.sleep(6000);
        if(s==4){
            var a=[]
            browser.getAllWindowHandles().then(function(handles){
                a=handles
                browser.switchTo().window(a[1]).then(function(){
                browser.sleep(1000)
                })
            }) 
            browser.close().then(function(){
                browser.switchTo().window(a[0])
                browser.sleep(1000)
            })
            PhonePage.phoneButton.click()
            browser.sleep(2000)
        }
    }

 })
 it("should verify the phone that have color option",()=>{
   CellPhone.color.count().then(function(data){
       console.log(data)
   })
 })
 it("should verify gold color option",()=>{
   element.all(by.css('div[title="Gold"]')).count().then(function(data){
        console.log(data)
    })
  })
//   fit("should find iframe",()=>{
//       CellPhone.onlinePrice.click()
//     element(by.css(".parsys.section.attlegalterms.modal"))
//       element(by.css("#legalModalTitle>a")).click()
//   })

})
