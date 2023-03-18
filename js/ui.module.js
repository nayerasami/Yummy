

export class Ui{
constructor(){
  this.diplayLoading()
this.animateNavbar()


this.rowData=document.getElementById("mealsContent")
}

diplayCountries(arr){
var temp=""
for(var i=0;i<arr.length;i++){
  temp+=`<div class="col-md-3 text-center">
  <div class="country text-center" data-area="${arr[i].strArea}">
     <div class="country-container m-3"">
     <i class="fa-solid fa-house-laptop text-light fa-2xl"></i>
     <h6 class="text-light mt-3 country-name">${arr[i].strArea}</h6></div>
  </div>
  </div>`
}
document.getElementById("areaData").innerHTML=temp
}
displayCategory(arr){
var temp=""
for(var i=0;i<arr.length;i++){
    temp+=`<div class="col-md-3">
    <div class="meal-item" data-items="${arr[i].strCategory}" >
       <img src="${arr[i].strCategoryThumb}" class="w-100 rounded-2" alt="">
<div   class="rounded-2 layer position-absolute  text-center top-0 start-0 end-0  bottom-0 ">
<h6 class="mt-3">${arr[i].strCategory}</h6>
<p class="des1 ms-2 me-2">${arr[i].strCategoryDescription.substring(0,90)}</p>
</div>
</div>
  </div>`
}
this.rowData.innerHTML=temp;
console.log("hi");
}
displayHomeMeals(a){
  var temp=''
  for(var i=0;i<a.length;i++){
     temp+=`<div class="col-md-3">
     <div class="meal mt-3" data-id="${a[i].idMeal}">
        <img src="${a[i].strMealThumb}" class="w-100 rounded-2" alt="">
 <div   class="rounded-2 layer position-absolute  text-center top-0 start-0 end-0  bottom-0 ">
 <h6 class="ms-2 position-absolute top-50">${a[i].strMeal}</h6>
 </div>
 </div>
   </div>`
  }
 
   document.getElementById("homeData").innerHTML=temp

}
displayCategoryData(k){
  var temp=''
  for(var i=0;i<k.length;i++){
     temp+=`<div class="col-md-3">
     <div class="mt-3"  data-meal="${k[i].idMeal}">
        <img src="${k[i].strMealThumb}" class="w-100 rounded-2" alt="">
 <div   class="rounded-2 layer position-absolute  text-center top-0 start-0 end-0  bottom-0 ">
 <h6 class="ms-2 position-absolute top-50">${k[i].strMeal}</h6>
 </div>
 </div>
   </div>`
  }
 
   document.getElementById("categoryContent").innerHTML=temp

}


displayHomePage(response){
temp="";
for(var i=0;i<response.length;i++){
    temp=` <div class="col-md-3 data-id="${arr[i].idCategory}" ">
    <div class="meal">
       <img src="${arr[i].strCategoryThumb}" class="w-100 rounded-2" alt="">
<div   class="rounded-2 layer position-absolute  text-center top-0 start-0 end-0  bottom-0 ">
<h6 class="mt-3">${arr[i].strCategory}</h6>
<p class="des1 ms-2 me-2">${arr[i].strCategoryDescription.substring(0,90)}</p>
</div>
</div>
  </div>`
}

}
diplayIngrediants(arr){
  var temp=""
  for(var i=0;i<arr.length;i++){
    temp+=`<div class="col-md-3 text-center">
    <div class="ing text-center" data-name="${arr[i].strIngredient}">
       <div class="ing-container m-4"">
       <i class="fa-solid fa-drumstick-bite text-light fa-2xl"></i>
       <h6 class="text-light mt-4 ing-name">${arr[i].strIngredient}</h6></div>
       <p class="text-light ing-des"> ${arr[i].strDescription.substring(0,89)}</p>
       </div>
    </div>`
  }
  document.getElementById("IngrediantData").innerHTML=temp

}

displayIngPlaceDetails(f){
  var temp=''
 for(var i=0;i<f.length;i++){
    temp+=`<div class="col-md-3">
    <div class="meal mt-3" data-name="${f[i].strMeal}">
       <img src="${f[i].strMealThumb}" class="w-100 rounded-2" alt="">
<div class="rounded-2 layer position-absolute top-0 start-0 end-0  bottom-0 ">
<h6 class=" ms-2 position-absolute top-50">${f[i].strMeal}</h6>
</div>
</div>
  </div>`
 }

  document.getElementById("IngDet").innerHTML=temp
}
diplayMealByName(a){

   var temp=''
 for(var i=0;i<a.length;i++){
    temp+=`<div class="col-md-3">
    <div class="meal mt-3" data-id="${a[i].idMeal}">
       <img src="${a[i].strMealThumb}" class="w-100 rounded-2" alt="">
<div   class="rounded-2 layer position-absolute  text-center top-0 start-0 end-0  bottom-0 ">
<h6 class="ms-2 position-absolute top-50">${a[i].strMeal}</h6>
</div>
</div>
  </div>`
 }

  document.getElementById("mealsNames").innerHTML=temp
}
diplayAreaPlace(n){

  var temp=''
for(var i=0;i<n.length;i++){
   temp+=`<div class="col-md-3">
   <div class="meal mt-3" data-id="${n[i].idMeal}">
      <img src="${n[i].strMealThumb}" class="w-100 rounded-2" alt="">
<div   class="rounded-2 layer position-absolute  top-0 start-0 end-0  bottom-0 ">
<h6 class="ms-2 position-absolute country-meal-name top-50">${n[i].strMeal}</h6>
</div>
</div>
 </div>`
}

 document.getElementById("areaInfo").innerHTML=temp
}

diplayMealByletter(t){
  var temp=''
  for(var i=0;i<t.length;i++){
     temp+=`<div class="col-md-3">
     <div class="meal mt-3" data-id="${t[i].idMeal}">
        <img src="${t[i].strMealThumb}" class="w-100 rounded-2" alt="">
 <div   class="rounded-2 layer position-absolute  text-center top-0 start-0 end-0  bottom-0 ">
 <h6 class="ms-2 position-absolute top-50">${t[i].strMeal}</h6>
 </div>
 </div>
   </div>`
  }
 
   document.getElementById("mealsNames").innerHTML=temp
}

    animateNavbar(){
        let sideNavWidth = $(".side-nav").outerWidth(true)
    console.log(sideNavWidth);
    $(".main-nav").animate({"left":`-${sideNavWidth}`},1000)
    $(".close").click(()=>{
    if($(".main-nav").css("left")=="0px"){
    $(".main-nav").animate({"left":`-${sideNavWidth}`})
    $(".exite-icon i").removeClass("fa-xmark")
    $(".exite-icon i").addClass("fa-bars")
    }else{
        $(".main-nav").animate({"left":`0px`})
        $(".exite-icon i").removeClass("fa-bars")
        $(".exite-icon i").addClass("fa-xmark")
    }
    })
    }

    
    AnimateLayer(){
        $(document).ready(function(){
            $(".meal").hover(function(){
                $(".layer").slideToggle()
            },
            function(){
                $(".layer").slideToggle(500)
                console.log("no");
            }); 
          });
    }
    
    diplayLoading(){
      $(document).ready(() => {
        $(".loading-screen").fadeOut(1000, function () {
            $("body").css("overflow", "visible")
        })
    })
    }
  
}
