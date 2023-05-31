
var i = 1;
let sum = (x,y) =>{
    if(typeof x != 'number' && typeof y != 'number'){
        throw new Error(`esse é o ${i} : ` + 'x ou y não é numero')
    }
    
    console.log(`esse é o ${i}: x + y `);
    i++
}



try{
    sum(2,3)
    sum("1","2")
}catch(error){
    console.log("OPÁ")
    console.log(error)
}