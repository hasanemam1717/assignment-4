function deleteInvalids(array){
    if(!Array.isArray(array)){
        return '“Invalid Array” (you can give your own error message)'
    }
    else{
        let  kajAse =[];
        let  kajNai =[];
        for(const element of array){
            if(typeof element !== 'number' || isNaN(element) ){
                 kajNai.push(element);
            }
            else{
                 kajAse.push(element)
            }
        }
        return  kajAse;
    }
    
}

const array = deleteInvalids({num: [ 1 , 2 , 3 ]});
console.log(array)