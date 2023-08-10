console.log("hello world");

let radius = [22,13,44,25,35,27]
let info = {1:"rohit",2:"raj",3:"ratan"}
function area(radius){
    return(Math.PI*radius*radius)
}

let result = radius.map(area);
let filterResult = radius.filter((num)=>{
    return num<30;
});

let reduceResult = radius.reduce((acc,curr)=>{
  if(curr<acc){
    acc=curr
  }else if(curr=acc){
    acc=curr
  }
  return acc;
},radius[0])
console.log(filterResult);
console.log(reduceResult)
// console.log(typeof(radius));
// console.log(typeof(result));
// console.log(result)