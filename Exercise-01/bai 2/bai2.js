console.log("Hello World!")

//hàm kiểm số nguyên tố
function checkNumber(number){
    if(number<=1) return false;
    for(var i=2;i<=Math.sqrt(number);i++){
        if(number%i===0) return false;
    }
    return true;
}
//mảng là gì
// tập hợp các phần tử cùng kiểu dữ liệu
//[1,2,3,4]


var array = [3,2,1,4,5,17,7,13,9,9,11,101,110];
console.log(array);
for(var i of array){
    if(checkNumber(i)){
        console.log(i);
    }
}