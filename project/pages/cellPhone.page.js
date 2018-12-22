var CellPhone=function(){
    this.cellButton=element(by.css(".listPage-left-nav-top.gradient"))
    this.dropDownElemnt=element.all(by.css("#priceDropDown>option"));
    this.dropDown= function(choice){
       var a= element.all(by.css("#uniform-priceDropDown>select"));
       // return a.first().all(by.cssContainingText("option",choice));
        return a.first().all(by.cssContainingText("option",choice));
       
}
this.array=['Featured','Price: Low to High','Price: High to Low','Price: Online Only','New Arrivals','Reviews: Highest to Lowest','Reviews: Most Reviewed ']
this.showAll=element(by.linkText("SHOW ALL DEVICES"));
this.allCell=element.all(by.css(".list-title>h3>a"));
this.rewiev=element.all(by.css(".list-of-review"))
this.listPrice=$$('div.list-price>div:nth-child(2)');
this.radioButton=element.all(by.css(".radio"))
this.checkButton=element.all(by.css(".checker"))
this.viewButton=element.all(by.css(".list-view>a"))
this.phoneTitle=element.all(by.css(".list-title>h3>a"))
this.color=element.all(by.css(".list-item.xref>div:nth-child(10)>div:nth-child(2)"))
this.footer=function(number){
 var i= element.all(by.css(".ftr-legal-links.clear-fix>.hide-sm"))
 return i.get(number).click();
}
this.onlinePrice=element(by.css(".gn_prefooter>a:nth-child(7)"))
}
module.exports= new CellPhone()