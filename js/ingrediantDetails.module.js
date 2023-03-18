import { Ui } from "./ui.module.js";
import { Ingrediant } from "./ingrediants.module.js";
export class IngrediantDetails{
    constructor(nameId){
        this.ui=new Ui()
        this.ingrediant= new Ingrediant()
        this.fetchIngDetails(nameId)
    }
    async fetchIngDetails(mainIng){
        this.ui.diplayLoading()
let apiData =await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${mainIng}`)
 apiData=await apiData.json()
 let response =apiData.meals
 console.log(response);
 this.ui.displayIngPlaceDetails(response)
 this.ui.AnimateLayer()
}
}