

import { Ui } from "./ui.module.js"
import { Area } from "./area.module.js"

export class Details{
    constructor(areaId){
        this.area=new Area()
        this.ui=new Ui()
       
this.fetchApiArea(areaId)
    }
    async fetchApiArea(area){
        this.ui.diplayLoading()
        let dataApi =await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
         dataApi= await dataApi.json()
         let finalResponse=dataApi.meals
         console.log(finalResponse);
        
        this.ui.diplayAreaPlace(finalResponse)
        this.ui.AnimateLayer() 
          }

}