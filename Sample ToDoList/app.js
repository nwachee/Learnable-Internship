console.log("-------- TO-DO LIST APP -------")

console.log(" 1 -- ADD ITEM")
console.log(" 2 -- UPDATE ITEM")
console.log(" 3 -- DELETE ITEM")


    // Get input from the user
    let pickItem = prompt("Pick a number : ");


    if (pickItem == "1") {
        console.log("Add Function")

        //Create an empty array
        let storeItem = []

        //Get input from the user
    let getItem = prompt("Enter an item : ");

        //Add new items
        storeItem.push(getItem)

        for (let i = 0; i < storeItem.length; i++) {
            console.log(storeItem[i]);  
        }
    }     else if (pickItem == "2") {
        console.log("Update Function")

        //display the current list
        storeItem.forEach(itemList)

         sum = 0

        function itemList(item){
            sum += item 
        }

        //Get the update
        getItem = prompt("Enter new item : ");

        storeItem.splice(getItem)

         //display the current list
         storeItem.forEach(itemList)

         sum = 0

        function itemList(item){
            sum += item 
        }

        
    } else if (pickItem == "3") {
        console.log("Delete Function")

        getItem = prompt("Enter item to delete : ");

        storeItem.splice(getItem)

         //display the current list
         storeItem.forEach(itemList)

         sum = 0

        function itemList(item){
            sum += item 
        }
        

    }  else {
        console.log("Invalid Number Entered")
    }

    // //Use a switch to sort the CRUD functions
    //     switch(pickItem) {

    //             case 1:
    //             // code block
                
    //             break;

    //             case 2:
    //             // code block
               

    //             break;

    //             case 3: 
    //             //code block
              
    //             break;


    //     default: console.log("Invalid Number Entered")
    //     }





