var do_height = document.getElementById("height");
var do_weight = document.getElementById("weight");

function btnClick(){
    var weight = do_weight.value;
    var height = do_height.value/100;
    BMI = weight/(height*height)
    console.log(BMI)
    var stringText
    var nghico
    if(weight<=0 || height<=0){
        document.getElementById("result").textContent = "none";
    }
    else{
        if(BMI<18.5){
            stringText = "Hơi gầy"
            nghico = "Thấp"
        }else{
            if(BMI<24.9){
                stringText = "Bình thường"
                nghico = "Trung bình"
            }
            else{
                if(BMI<29.9){
                    stringText = "Hơi béo"
                    nghico = "Cao"
                }else{
                    if(BMI<34.9){
                        stringText = "Béo phì cấp độ 1"
                        nghico = "Cao"
                    }
                    else{
                        if(BMI<39.9){
                            stringText = "Béo phì cấp độ 2"
                        nghico = "Rất Cao"
    
                        }else{
                            stringText = "Béo phì cấp độ 3"  
                            nghico = "Nguy hiểm"
                        }
                    }
                }
            }
        }
        document.getElementById("result").textContent = stringText + ": "+BMI +" - "+"Nguy Cơ phát bệnh "+ nghico
    }

}