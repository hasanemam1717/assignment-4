function calculateMoney(tiketNumber){
    if( tiketNumber < 0){
     return "Please enter a positive number"
    }
    else{
     const tiketPrice =120;
     const gatekeeperBill =500;
     const stafFoodPrice =50;
     const stafNumber =8;
     const stafBillPerDay =stafFoodPrice*stafNumber;
     const dailyMustCost =gatekeeperBill+stafBillPerDay;
     const perDayIncome =tiketPrice*tiketNumber;
     const remainingMoney = perDayIncome - dailyMustCost;
     return remainingMoney;
    }
 }

 function checkName(name){
    if(typeof name !== "string"){
        return "invalid";
    }
    else{
        if(
            name[name.length-1] === "A" ||
            name[name.length-1] === "a" ||
            name[name.length-1] === "E"||
            name[name.length-1] === "e"||
            name[name.length-1] === "I" || 
            name[name.length-1] === "i" || 
            name[name.length-1] === "O" ||
            name[name.length-1] === "o" ||
            name[name.length-1] === "U"||
            name[name.length-1] === "u"||
            name[name.length-1] === "Y" || 
            name[name.length-1] === "y" || 
            name[name.length-1] === "W"||
            name[name.length-1] === "w"
            ){
               return "Good Name"
           }else{
               return "Bad Name."
           }
    }
}

function deleteInvalids(array){
    if(!Array.isArray(array)){
        return '“Invalid Array” (you can give your own error message)';
    }
    else{
        let selection =[];
        let purify =[];
        for(const element of array){
            if(typeof element !== 'number' || isNaN(element) ){
                purify.push(element);
            }
            else{
                selection.push(element);
            }
        }
        return selection;
    }
}