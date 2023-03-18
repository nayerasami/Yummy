
export class Contact{
    constructor(form){
        this.form =form
        this.nameElement=document.getElementById("fName")
        this.mailElement = document.getElementById("eMail")
        this.phoneElement=document.getElementById("phoneNum")
        this.ageElement=document.getElementById("age")
        this.passElement=document.getElementById("pass")
        this.rePassElement=document.getElementById("rePass")
        this.submitElement=document.getElementById("submitBtn")
        this.submitElement.addEventListener("click",()=>{
            this.validate.bind(this)
            console.log("nayera");
        })
      
      
  
        // this.inputs =this.form.querySelectorAll("input");
        // console.log(this.inputs);
        
this.openContactPage()

// this.submitMessege()


}

openContactPage(){
    document.getElementById("contactUs").addEventListener("click",()=>{
    document.getElementById("contact").classList.remove("d-none")
  
    document.getElementById("categoriesPage").classList.add("d-none")
    document.getElementById("areaPage").classList.add("d-none")
   document.getElementById("areaPlace").classList.add("d-none")
   document.getElementById("ingPage").classList.add("d-none")
   document.getElementById("searchPage").classList.add("d-none")
       document.getElementById("homePage").classList.add("d-none")
      
   
   document.getElementById("IngrediantPage").classList.add("d-none")

           })
       }



       validate(event) {
        event.preventDefault();
        if (this.isValidEmail() && this.isValidPassword()&& this.isValidAge() && this.isValidPhoneNum()) {
          if (this.isPasswordMatch()) {
            this.submitButton.removeAttribute("disabled");
          } else {
            alert("please enter valid data.");
          }
        } else {
          alert("Please enter a valid email and password.");
        }

        if(this.isValidEmail()){
            document.getElementById("alertMail").classList.add("d-none")
        }else{
            document.getElementById("alertMail").classList.remove("d-none")
        }
        if(this.isValidAge()){
            document.getElementById("alertAge").classList.add("d-none")
        }else{
            document.getElementById("alertAge").classList.add("d-none")
        }
        if(this.isValidPhoneNum()){
            document.getElementById("alertPhone").classList.add("d-none")
        }else{
            document.getElementById("alertPhone").classList.add("d-none")
        }
        if(this.isValidName()){
            document.getElementById("alertname").classList.add("d-none")
        }else{
            document.getElementById("alertname").classList.add("d-none")
        }
        if(this.isValidPassword()){
            document.getElementById("alertPass").classList.add("d-none")
        }else{
            document.getElementById("alertPass").classList.add("d-none")
        }
        if(this.isPasswordMatch()){
            document.getElementById("alertRePass").classList.add("d-none")
        }else{
            document.getElementById("alertRePass").classList.add("d-none")
        }
      }
    isValidName(){
        let firstName=this.nameElement.value 
    return firstName.length>=2

    }
    isValidEmail() {
        let yourEmail=this.mailElement.value
        const emailRegex = /^[a-z\._]{3,}@{2,15}\.com$/;
        return emailRegex.test(yourEmail);
      }
      
      isValidPassword() {
        let password =this.passElement.value
        let passworRegex= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        return passworRegex.test(password)
      }
      
      isPasswordMatch() {
        let password =this.passElement.value
        let rePassword =this.rePassElement.value
        return password === rePassword;
      }
      isValidPhoneNum() {
        let phoneNumber =this.phoneElement.value
        let phoneRegex= /^\+20\d{10}$/
        return phoneRegex.test(phoneNumber)
      }
      isValidAge() {
      
    let ageNum =this.ageElement.value
        let ageRegex= /^(1[9-9]|[2-9]\d)$/
        return ageRegex.test(ageNum)
      }

 

}





