import { Ui } from "./ui.module.js";
import { Search } from "./search.module.js";
import { Home } from "./home.module.js";
import { Area } from "./area.module.js";
import { Ingrediant } from "./ingrediants.module.js";
import { CategoriesDetails } from "./categoriesDetails.module.js";
import{Contact} from "./contact.module.js";
export class Categories{
    constructor(){
      this.ui=new Ui()
      this.search=new Search()
      this.home=new Home()
      this.area=new Area()
      this.ingrediant= new Ingrediant()
      this.contact=new Contact()

    
      this.categoryElement=document.getElementById("categories")
this.openCategory()

}
openCategory(){
    this.categoryElement.addEventListener("click",()=>{
        document.getElementById("categoriesPage").classList.remove("d-none")
        document.getElementById("areaPage").classList.add("d-none")
document.getElementById("areaPlace").classList.add("d-none")
document.getElementById("ingPage").classList.add("d-none")
document.getElementById("IngrediantPage").classList.add("d-none")
document.getElementById("contact").classList.add("d-none")
document.getElementById("homePage").classList.add("d-none")
this.fetchCategory()
    })
}


async fetchCategory(){
let apiData= await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
apiData=await apiData.json()
console.log(apiData);
let finalResponse = apiData.categories
console.log(finalResponse);
this.ui.displayCategory(finalResponse)

this.displayCategDetails() 
this.ui.AnimateLayer()
}

displayCategDetails(){
    document.querySelectorAll(".meal-item").forEach((item)=>{
      item.addEventListener("click",()=>{
      let catId=item.dataset.items
      console.log(catId)
      console.log("fofo");
   this.displayCategMeals(catId)
      
      })
          })
  }
            
  displayCategMeals(idCat){
  
    let categoriesDetails=new CategoriesDetails(idCat)

console.log("mrmr");
document.getElementById("ctegoryData").classList.remove("d-none")
document.getElementById("categoriesPage").classList.add("d-none")
document.getElementById("searchPage").classList.add("d-none")
document.getElementById("areaPage").classList.add("d-none")
document.getElementById("areaPlace").classList.add("d-none")
document.getElementById("IngrediantPage").classList.add("d-none")
document.getElementById("contact").classList.add("d-none")
document.getElementById("homePage").classList.add("d-none")

  }


}


