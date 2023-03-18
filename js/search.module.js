import { Ui } from "./ui.module.js"

export class Search{
    constructor(){
    
        this.ui=new Ui()
this.nameElement=document.getElementById("byName")
this.letterElement=document.getElementById("byLitter")
this.pageSearch=document.getElementById("searchPage")
this.displaySearch()
this.searchInputOne()
this.searchInputTwo()
    }

displaySearch(){
document.getElementById("SearchBtn").addEventListener("click",()=>{
this.pageSearch.classList.remove("d-none")
document.getElementById("areaPage").classList.add("d-none")
document.getElementById("areaPlace").classList.add("d-none")
document.getElementById("ingPage").classList.add("d-none")
document.getElementById("IngrediantPage").classList.add("d-none")
document.getElementById("categoriesPage").classList.add("d-none")
document.getElementById("contact").classList.add("d-none")
document.getElementById("homePage").classList.add("d-none")
   
})
}


async searchByName(a){
    this.ui.diplayLoading()
let apiData =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${a}`)
apiData=await apiData.json()
console.log(apiData);
let mealsApi =apiData.meals
console.log(mealsApi);
console.log("hi");
this.ui.diplayMealByName(mealsApi)
this.ui.AnimateLayer() 
}
searchInputOne(){
this.nameElement.addEventListener("keyup",()=>{
    console.log(this.nameElement.value);
    this.searchByName(this.nameElement.value)
})
}

async searchByLetter(letter){
    this.ui.diplayLoading()
    let apiData =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    apiData=await apiData.json()
    console.log(apiData);
    let mealsData =apiData.meals
    console.log(mealsData);
    console.log("items");
    this.ui.diplayMealByletter(mealsData)
    this.ui.AnimateLayer() 
    }
    searchInputTwo(){
        this.letterElement.addEventListener("keyup",()=>{
            console.log(this.letterElement.value);
            let charc= this.letterElement.value
            console.log(charc.length);
          let  firstLetter =charc.charAt(0)
            console.log(firstLetter);
            this.searchByLetter(firstLetter)
            // if(charc.length>1){
            //  charc= charc.charAt(0);
            // }
this.searchOnlyOneLetter()
        })
       
        }

    //   searchOnlyOneLetter(){
    //     this.letterElement.addEventListener("keyUp", (e)=>{
    //         const regex = /^[a-zA-Z]$/;
    //         let charachter =this.letterElement.value
    //         const input = charachter;
    //         if (!regex.test(input)) {
    //           charachter = input.substring(0, 1);
    //         }
    //         })
      
    //   }


}