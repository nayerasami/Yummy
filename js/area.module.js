import { Ui } from "./ui.module.js"
import { Details } from "./detailes.module.js"
export class Area{
    constructor(){
        this.ui=new Ui()
     
  
this.displayAreaPage()
// this.fetchApiArea()



    }

  displayAreaPage(){
document.getElementById("Area").addEventListener("click",()=>{
    document.getElementById("areaPage").classList.remove("d-none")
    document.getElementById("categoriesPage").classList.add("d-none")
    document.getElementById("searchPage").classList.add("d-none")
    document.getElementById("contact").classList.add("d-none")
    document.getElementById("homePage").classList.add("d-none")
   
    this.getCountries()
})

  }

    async getCountries(){
        let dataCountry=await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
    dataCountry=await dataCountry.json()
    console.log(dataCountry);
    let responseArr=dataCountry.meals
    console.log(responseArr);
    console.log("hi");
    this.ui.diplayCountries(responseArr)
    this.displayAreaDetails()
    }
    displayAreaDetails(){
      document.querySelectorAll(".country").forEach((item)=>{
        item.addEventListener("click",()=>{
        let areaId=item.dataset.area
        console.log(areaId)
        console.log("nanaaa");
     this.displayAreaMeals(areaId)
        
        })
            })
    }
              
    displayAreaMeals(idArea){
    
      let details=new Details(idArea)

  console.log("mrmr");
  document.getElementById("areaPage").classList.add("d-none")
  document.getElementById("areaPlace").classList.remove("d-none")
    }
      
}