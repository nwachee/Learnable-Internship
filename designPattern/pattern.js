//Creating Observer Pattern 
class observer{
  constructor(name, phone){
   this.name = name,
   this.phone = phone
  }

  addObserver(name, phone) {
   this.name = name,
   this.phone = phone
  }

  removeObserver(name, phone){
   this.name = name,
   this.phone = phone
  }

  update(name, phone){
   this.name = name,
   this.phone = phone
  }
}


//Creating a Telephone Package
 class Telephone {
      constructor(name, number) {
        this.name = name,
        this.number = number
        this.observer = new Set()
      }

    //method to add telephone numbers
      addPhoneNumber (name, number){
       this.name = name,
       this.number = number
       console.log("Added Contact")
    }

    //method to remove telephone numbers
    removePhoneNumber (name, number){
      this.name = name,
       this.number = number
      console.log("Removed Contact")
    }

    //method to dial telephone numbers
    dialPhoneNumber(name, phone){

      if(this.name){
        observer.addObserver(name, phone)
        observer.update(name, phone)

        console.log(observer.update(phone))
        console.log(`Now Dialing ${observer.update(phone)}`)
      } else {
        console.log("Number not found")
      }
        
    }


    //notify observers
    notify(context){
      for(let observer of this.observer) {
        observer.update(context)
      }
    }

}


    