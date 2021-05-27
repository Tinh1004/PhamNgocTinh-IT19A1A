var inputMoney = document.getElementById("money");
var tg = document.getElementById("months");
var lx = document.getElementById("lai");
var goc = inputMoney.value/tg.value;

var tonglai = 0.0;
var tGoc = 0;
var tong = 0.0;
var lai = 0.0;

//

function myFunction() {
  alert(inputMoney.value)
var a = 1;
  // alert(lx.value/100)
var tien = inputMoney.value;
goc = tien/tg.value;
  // alert(inputMoney.value +" "+tg.value)
  var table = document.getElementById("myTable");
  // alert(tien *(lx.value/(tg.value*100)))
  for(var i =0;i<=tg.value;i++){
      //lãi
    lai = (tien + goc) *(lx.value/(tg.value*100))
    var row = table.insertRow(a);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    if(i===0){
      cell1.innerHTML = document.getElementById("date").value;
      cell2.innerHTML = i;
      cell3.innerHTML = tien;
      cell4.innerHTML = "";
      cell5.innerHTML = "";
      cell6.innerHTML = "";
    }
    else{
      if(tien<1) tien=0;
      tong = goc + lai;
      tonglai+=lai;

      cell1.innerHTML = document.getElementById("date").value;
      cell2.innerHTML = i;
      cell3.innerHTML = tien;
      cell4.innerHTML = goc;
      cell5.innerHTML = lai;
      cell6.innerHTML = tong;
    }
    a++;
    tien-=goc;
    }
    //gốc
    var tGoc = inputMoney.value;
    //lãi + gốc
    var laiGoc = tonglai +tGoc*1.0;
    // alert(tonglai+" +"+tGoc+" ="+laiGoc);

      //round cuối
    cell1.innerHTML = "Tổng";
    cell2.innerHTML = "";
    cell3.innerHTML = "";
    cell4.innerHTML = tGoc;
    cell5.innerHTML = tonglai;
    cell6.innerHTML = laiGoc;
}