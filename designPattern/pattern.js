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
    dialPhoneNumber(){
        console.log("**** Dialing ****")
    }

    addObserver

    //notify observers
    notify(context){
      for(let observer of this.observer) {
        observer.update(context)
      }
    }

}

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


    //creating an object of the Telephone Class
    let nokia = new Telephone()
    nokia.addPhoneNumber('Zangetsu', '0924849202840')
    nokia.removePhoneNumber('Zangetsu', '0924849202840')
    nokia.dialPhoneNumber()
    