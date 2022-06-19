const FindMany=function(Condition,Arr){
    let result = Arr.filter(function(item,idx){
        return Condition
    })
    return result;
}

export {FindMany}