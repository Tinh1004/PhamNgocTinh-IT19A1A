function Student(name,mark,gender,subjects){
    this.name = name
    this.mark = mark
    this.gender = gender
    this.subjects = subjects

    function showInfo(){
        console.log(name+" - "+mark)
    }
    function getMark(){
        return this.mark;
    }
    function setMark(mark){
        this.mark = mark;
    }
}

function subjects(title,mark){
    this.title = title
    this.mark = mark
    function showInfo(){
        console.log(title+" - "+mark)
    }
}
var students =[];
var student1 = new Student("Tính",8,"Nam",[new subjects("TOÁN",9),new subjects("Lý",9)]);
students.push(student1)
var student2 = new Student("Nghĩa",0,"Nữ",[new subjects("TOÁN",1),new subjects("Lý",8)]);
students.push(student2)
var student3 = new Student("An",1,"Nam",[new subjects("TOÁN",2),new subjects("Lý",3)]);
students.push(student3)
var student4 = new Student("Hoàng",2,"Nữ",[new subjects("TOÁN",5),new subjects("Lý",1)]);
students.push(student4)
var student5 = new Student("Tùng",3,"Nữ",[new subjects("TOÁN",9),new subjects("Lý",7)]);
students.push(student5)
var student6 = new Student("Trang",5,"Nam",[new subjects("TOÁN",7),new subjects("Lý",1)]);
students.push(student6)
var student7 = new Student("Quyền",6,"Nữ",[new subjects("TOÁN",1),new subjects("Lý",7)]);
students.push(student7)
var student8 = new Student("Phát",7,"Nữ",[new subjects("TOÁN",7),new subjects("Lý",9)]);
students.push(student8)
var student9 = new Student("Long",5,"Nữ",[new subjects("TOÁN",10),new subjects("Lý",3)]);
students.push(student9)
var student10 = new Student("Ngọc",0,"Nữ",[new subjects("TOÁN",8),new subjects("Lý",2)]);
students.push(student10)

function BinhThuong(){
    console.log("-------------------------------------")
    console.log("Bình Thường")
    console.log(students)
}

// Sắp xếp danh sách sinh viên theo thứ tự điểm tích luỹ từ lớn đến bé
function LonDenBe(){
    console.log("-------------------------------------")
    console.log("Sắp xếp danh sách sinh viên theo thứ tự điểm tích luỹ từ lớn đến bé")
    var b = students;
    for(var i = 0;i<b.length;i++){
        for(var j = i;j<b.length;j++){
            if(b[i].mark<b[j].mark){
                var c = b[i];
                b[i] = b[j];
                b[j] = c;
            }
        }
    }
    console.log(b)
}
//Sắp xếp danh sách sinh viên theo thứ tự điểm tích luỹ từ bé đến lớn
function BeDenLon(){
    console.log("-------------------------------------")
    console.log("Sắp xếp danh sách sinh viên theo thứ tự điểm tích luỹ từ bé đến lớn")
    var b = students;
    for(var i = 0;i<b.length;i++){
        for(var j = i;j<b.length;j++){
            if(b[i].mark>b[j].mark){
                var c = b[i];
                b[i] = b[j];
                b[j] = c;
            }
        }
    }
    console.log(b)
}
//Lọc ra danh sách sinh viên là nữ và có điểm tích luỹ lớn hơn 5.0
function Bai4(){
    console.log("-------------------------------------")
    console.log("Lọc ra danh sách sinh viên là nữ và có điểm tích luỹ lớn hơn 5.0")
    var b = students;
    for(var i = 0;i<b.length;i++){
        if(b[i].mark>=5&&b[i].gender == "Nữ"){
            console.log(b[i]);
        }
    }
}



console.log(student1.subjects[0].mark>=9);

//Lọc ra danh sách sinh viên có điểm toán hoặc lý lớn hơn 8.0     
function Bai5(){
    console.log("-------------------------------------")
    console.log("Lọc ra danh sách sinh viên có điểm toán hoặc lý lớn hơn 8.0")
    var b = students;
    for(var i = 0;i<b.length;i++){
        if(b[i].subjects[0].mark>=8 || b[i].subjects[1].mark>=8){
            console.log(b[i]);
        }
    }

}

//Tìm sinh viên có điểm môn Toán cao nhất và thấp nhất
function Bai6(){
    console.log("-------------------------------------")
    console.log("Tìm sinh viên có điểm môn Toán cao nhất và thấp nhất")
    var b = students;
    for(var i = 0;i<b.length;i++){
        for(var j = i;j<b.length;j++){
            if(b[i].subjects[0].mark>(b[j].subjects[0].mark)){
                var c = b[i];
                b[i] = b[j];
                b[j] = c;
            }
        }
    }
    console.log(b[0])
    console.log(b[b.length-1])
}

//Xoá khỏi danh sách sinh viên có điểm tích luỹ là 0
function Bai7(){
    console.log("-------------------------------------")
    console.log("Xoá khỏi danh sách sinh viên có điểm tích luỹ là 0")
    var tru = 0;
    for(var i = 0;i<students.length;i++){
        if(students[i].mark==0){
            console.log("Xóa đối tượng:\n" + students[i])
            students.splice(i,1);
            // tru++;
        }
    }
    console.log(students)
}

//Thêm 03 sinh viên mới vào danh sách
function Bai8(){
    console.log("-------------------------------------")
    console.log("Thêm 03 sinh viên mới vào danh sách")
    let user1 = new Student("Nguyễn Văn A",8,"Nữ",[new subjects("TOÁN",10),new subjects("Lý",8)]);
    let user2 = new Student("Nguyễn Văn B",0,"Nam",[new subjects("TOÁN",3),new subjects("Lý",1)]);
    let user3 = new Student("Nguyễn Văn C",2,"Nam",[new subjects("TOÁN",5),new subjects("Lý",7)]);

    students.push(user1,user2,user3);
    console.log(students);
}