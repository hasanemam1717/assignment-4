function password(object){
    if(typeof object !== 'object'){
        return "invalid"
    }
    else if( !object.name ||!object.birthYear||!object.siteName){
        return "invaild"
    }else if(typeof object.name !== 'string'|| typeof object.birthYear !== 'number' ){
        return "invaild"
    }else if (object.birthYear.toString().length !== 4){
        return "invaild"
    }
    else {
        return `${object.siteName.charAt(0).toUpperCase()}${object.siteName.slice(1)} #${object.name}@${object.birthYear}`;
    }
}
const object =password( { name: "kolimuddin" , birthYear: 1999 , siteName: "klkjlkjioo" });
console.log(object)
