 import { Ui } from "./ui.module.js";
 
 export class Mealdetail{
    constructor(){
this.ui=new Ui()
this.getMealDetail()
    }
   async getMealDetail(id){
let dataApi= await fetch(`www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  dataApi =await dataApi.json()
let response =dataApi.meals
console.log(response);
}



}