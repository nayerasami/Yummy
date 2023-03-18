import { Ui } from "./ui.module.js";
import { IngrediantDetails } from "./ingrediantDetails.module.js";

export class Ingrediant{
    constructor(){
        this.ui=new Ui()
        this.displayIngrediantPage()
    }
    
  displayIngrediantPage(){
    document.getElementById("Ingredients").addEventListener("click",()=>{
        document.getElementById("IngrediantPage").classList.remove("d-none")
        document.getElementById("searchPage").classList.add("d-none")
        document.getElementById("searchPage").classList.add("d-none")
        document.getElementById("areaPlace").classList.add("d-none")
        document.getElementById("ingPage").classList.add("d-none")
        document.getElementById("contact").classList.add("d-none")
        document.getElementById("homePage").classList.add("d-none")
   
        this.getIngrediant()
    })
      }
    async getIngrediant(){
      this.ui.diplayLoading()
        let apiData = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
   apiData=await apiData.json()
   let finalResponse =apiData.meals.slice(0,20)
   console.log(finalResponse);
   this.ui.diplayIngrediants(finalResponse)
   this.displayIngreDetails()
    }
    displayIngreDetails(){
        document.querySelectorAll(".ing").forEach((item)=>{
          item.addEventListener("click",()=>{
          let nameId=item.dataset.name
          console.log(nameId)
          console.log("nakkka");
       this.displayIng(nameId)
          
          })
              })
      }
                
      displayIng(idIng){
      
    let ingeridiantDetials=new IngrediantDetails(idIng)
    console.log("iuiui");
    document.getElementById("ingPage").classList.remove("d-none")
    document.getElementById("IngrediantPage").classList.add("d-none")
    document.getElementById("areaPlace").classList.add("d-none")
    document.getElementById("areaPage").classList.add("d-none")
    document.getElementById("searchPage").classList.add("d-none")
    document.getElementById("homePage").classList.add("d-none")
   
      }
}