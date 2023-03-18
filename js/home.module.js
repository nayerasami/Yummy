
import { Ui } from "./ui.module.js"
export class Home{
    constructor(){

        this.ui=new Ui()
this.openHome()
    }
    openHome(){
        document.getElementById("homePage").classList.remove("d-none")
    
        this.getResponse()

    }
   
    async getRandomMeals() {
   this.ui.diplayLoading()
        const url = "https://www.themealdb.com/api/json/v1/1/random.php";
        const response = await fetch(url);
        const data = await response.json();
        return data.meals;
      
      }
      
      async getArrayOfRandomObjects(num) {
        const arr = [];
        for (let i = 0; i < num; i++) {
          const meal = await this.getRandomMeals();
          arr.push(meal[0]);
        }
        return arr;
      }
      
  getResponse(){
    this.getArrayOfRandomObjects(20).then((array) => {
        console.log(array);
       this.ui.displayHomeMeals(array); // outputs an array of 20 random meal objects
    this.ui.AnimateLayer()
    });
  }


}