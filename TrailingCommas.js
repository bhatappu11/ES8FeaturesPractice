const arr = [1,2,3,,]

function func(a){
    console.log(a)
}
console.log(arr+" length: "+arr.length)
arr.forEach(func)

function sum(array1,){
    let sum = 0;
    array1.forEach(function(e){
        sum=e+sum;
    })
    console.log("sum: "+sum);
}

array1 = [1,2,3,4]
sum(array1,);