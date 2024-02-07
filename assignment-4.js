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