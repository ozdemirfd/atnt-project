var PhonePage=function(){
    this.phoneButton=element(by.css(".dmg-delay-600ms>div>a"))
    this.logo=element(by.id("z1-globe-md"));
    this.ShopSupport=element(by.id("z1-pullMenu-open"))
    this.inputBox=element(by.model("search.searchInput"))
    this.basket=element(by.id("z1-cart-open"))
    this.sign=element(by.id("z1-profile-cta"))
    this.business=element(by.css("#z1-watch-text>a"))
    this.navigationBar=element.all(by.css(".breadcrumbListPage>li"))
    this.wireless=element(by.id("minicart-link"))
    this.mainPictureColor=element(by.css(".JSAMpanel-A_0"))
    this.navigationBox=element.all(by.css(".listPage-left-nav-link.gradient>div"))
    this.array=['Cell Phones','Tablets','AT&T PREPAID℠','Bring Your Own Device','Wearables, Smart Devices','Certified Pre-Owned Phones','Wireless Home Services']
    this.boxColor=['rgba(0, 0, 0, 0) linear-gradient(rgb(247, 171, 5) 0%, rgb(247, 171, 5) 8%, rgb(239, 111, 0) 47%) repeat scroll 0% 0% / auto padding-box border-box',
        'rgba(0, 0, 0, 0) linear-gradient(rgb(247, 171, 5) 0%, rgb(247, 171, 5) 8%, rgb(239, 111, 0) 47%) repeat scroll 0% 0% / auto padding-box border-box',
        'rgba(0, 0, 0, 0) linear-gradient(rgb(247, 171, 5) 0%, rgb(247, 171, 5) 8%, rgb(239, 111, 0) 47%) repeat scroll 0% 0% / auto padding-box border-box',
        'rgba(0, 0, 0, 0) linear-gradient(rgb(247, 171, 5) 0%, rgb(247, 171, 5) 8%, rgb(239, 111, 0) 47%) repeat scroll 0% 0% / auto padding-box border-box',
        'rgba(0, 0, 0, 0) linear-gradient(rgb(247, 171, 5) 0%, rgb(247, 171, 5) 8%, rgb(239, 111, 0) 47%) repeat scroll 0% 0% / auto padding-box border-box',
       'rgba(0, 0, 0, 0) linear-gradient(rgb(247, 171, 5) 0%, rgb(247, 171, 5) 8%, rgb(239, 111, 0) 47%) repeat scroll 0% 0% / auto padding-box border-box',
        'rgba(0, 0, 0, 0) linear-gradient(rgb(247, 171, 5) 0%, rgb(247, 171, 5) 8%, rgb(239, 111, 0) 47%) repeat scroll 0% 0% / auto padding-box border-box']
}
module.exports=new PhonePage();