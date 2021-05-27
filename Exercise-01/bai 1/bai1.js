//01 Viết chương trình có sử dụng hàm kiểm tra n (nhập từ bàn phím) có phải số nguyên tố không ?
console.log("Hello World!")

//số nguyên tố những số 2 3 5 7 11 13... => nó là những số chỉ chia hết cho 1 và chính nó
var input = document.getElementById("input")
var output = document.getElementById("output")



function checkNumber(number){
    if(number<=1) return false;
    for(var i=2;i<Math.sqrt(number);i++){ // i=2 ... number-1 => if number%i==0 => return false
        if(number%i===0) return false;
    }
    return true;
}

// console.log(checkNumber(number))


function Check(){
    var number = input.value;
    if(checkNumber(number)){
        console.log("Là số nguyên tố")
        output.innerHTML = "Là số nguyên tố";
    }
    else{
        console.log("Không phải số nguyên tố!")
        output.innerHTML = "Không phải số nguyên tố!";
    }
}