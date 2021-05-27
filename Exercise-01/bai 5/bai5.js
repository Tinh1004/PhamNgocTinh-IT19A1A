console.log("Hello World!")
var input = document.getElementById("input");
var output = document.getElementById("output");
//Viết chương trình nhập số nguyên dương a và kiểm tra a có phải là số tự đối xứng không?

function sodoixung(number){
    var chua = number
    var numberDX = 0
    while(chua!=0){
        numberDX = numberDX*10 +chua%10 // 101 => 0 + 1 = 1 =>(10) 1*1 + 0 = 10 => 10*10 + 1 = 101
        chua = Math.floor(chua/10);
    } 
    return numberDX
}

function Check(){
    var number = input.value 
    if(number==sodoixung(number)){
        console.log("Là số đối xứng")
        output.innerHTML = number + " Là số đối xứng"
    }
    else{
        console.log("Không phải số đối xứng")
        output.innerHTML = number + " Không phải số đối xứng"

    }
}