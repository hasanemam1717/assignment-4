

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

const array = deleteInvalids([ 1 , 2 , 3,NaN ,undefined]);
console.log(array)



