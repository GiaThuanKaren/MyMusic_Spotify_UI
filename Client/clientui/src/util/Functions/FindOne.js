 export const FindOne=function(Condition,ArrFind){
    let result =ArrFind.find(function(item,idx){
        return Condition
    })
    return result
 }

 export { FindOne}