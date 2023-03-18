import { Ui } from "./ui.module.js";
import { Categories } from "./categories.module.js";

export class CategoriesDetails{
    constructor(catId){
        this.ui=new Ui()
        this.categories =new Categories()
        this.fetchCatDetails(catId)
        this.ui.AnimateLayer()
    }
    async fetchCatDetails(category){
        let apiData =await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    apiData=await apiData.json()
    let finalres =apiData.meals
    console.log(finalres);
    this.ui.displayCategoryData(finalres)
    
    }
}