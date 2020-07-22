console.log("Higher Order Functions");


let arr = [1,2,3,4,5,6];



arr.forEach((el)=>{
    console.log(el**3)
})

let cube = arr.map((el)=>el**3);

 cube = arr.map(function(el){
    return el**3;
})

console.log(cube);



let odd = arr.filter(el=>el%3==0);

let oddcube = arr.filter(el=>el%3==0).map(el=>el**3);

console.log(odd);
console.log(oddcube);

let users = [{"user": "👩🏻‍💻"},{"user": "👨🏾‍💻"},{"user": "💃"},{"user": "👨🏻‍🎓"},{"user": "🧑🏻‍🏫"},{"user": "🦸‍♂️"},{"user": "🧟‍♂️"}];

let resultDetails = users.map(user=>{
    let mark = Math.random()*100;
    user.mark = mark;
    return user;
})

console.log(resultDetails);

let pass = resultDetails.filter(user=>{
    if(user.mark>35){
        return user;
    }
})

console.log(pass);

let names = ['berlin', 'denver','rio'];
let red = names.reduce((acc, val)=>{
    let obj = {
        name:val,
        len:val.length,
    }
    acc.push(obj);
    return acc;
},[]);

console.log(red);

let sum = arr.reduce((acc,val)=>{
    acc+=val;
    return acc;
},0)

console.log(sum);