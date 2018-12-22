var Internet=function(){
this.internetIcon=element(by.css("div[name='/internet_navmain']>a"))
//this.table=element(by.css("table[class='striped']"))
this.rowColumn=function(row,column){
    var a=element(by.css("tbody>tr:nth-child("+row+")>td:nth-child("+column+")"))
    return a
    
}
this.image=element.all(by.css("td>p>img"))
this.cost=element.all(by.cssContainingText("p","Costs extra"))
this.internetFaq=function(text){
    var i=element.all(by.css(".accordion-section>.parsys>div>ul>li>a"));
    return i.all(by.cssContainingText("i",text))
}

}

module.exports= new Internet()
