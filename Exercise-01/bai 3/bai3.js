console.log("Hello World!")
// tổng các ước bằng chính nó 6 = 1+2+3


var input = document.getElementById("input");
var output = document.getElementById("output");


function checkNumber(number1,number2){
    if(number1==0||number2==0) return false;
    if(number1==number2) return true;
    return false;
}

function tongUoc(number){
    var tong = 0;
    for(var i =1;i<number;i++){
        if(number%i==0) tong+=i;//tong = tong + i
    }
    return tong;
}

function KiemTra(){
    var number  = input.value;
    if(checkNumber(number,tongUoc(number))){
        console.log("Là hoàn hảo")
        output.innerHTML = "Là hoàn hảo";
    }
    else{
        console.log("Không phải số hoàn hảo")
        output.innerHTML = "Không phải số hoàn hảo";
    }
    
}