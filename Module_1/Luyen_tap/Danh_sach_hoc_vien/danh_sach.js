class Student {
    constructor(id, name, birthday, gender, grade, picture) {
        this.id = id;
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
        this.grade = grade;
        this.picture = picture;
    }

    getId(){
        return this.id
    }
    setId(id){
        this.id = id;
    }

    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }

    getBirthday(){
        return this.birthday;
    }
    setBirthday(birthday){
        this.birthday = birthday;
    }

    getGender(){
        return this.gender;
    }
    setGender(gender){
        this.gender = gender;
    }

    getGrade(){
        return this.grade;
    }
    setGrade(grade){
        this.grade = grade;
    }

    getPicture(){
        return this.picture;
    }
    setPicture(picture){
        this.picture = picture;
    }
}

let students = [];

let hoaTD = new Student(1, "Xuân Hoa","19/1/2002","Nữ","c0823I1","https://toplist.vn/images/800px/tiem-chup-anh-the-lay-ngay-dep-nhat-o-hue-chu-de-da-duoc-nhan-cua-kieu-nguyen-317636.jpg");
let quangTD = new Student(2, "Đàm Kiều Trinh", "05/02/2002","Nữ","c0423I1","https://static2.yan.vn/YanNews/202005/202005220338210409-bee6f138-0608-4d56-bce3-27148a855654.png");

students.push(quangTD);
students.push(hoaTD);

//Hien thi
function displayStudents(){
    let studentData = `<table border="2" class = "table">
    <thead>
        <tr>
            <th>ID</th>
            <th>Họ tên</th>
            <th>Ngày sinh</th>
            <th>Giới tính</th>
            <th>Lớp</th>
            <th>Ảnh</th>
            <th>Tùy chọn</th>
        </tr>
    </thead>
    <tbody>`;
    for(let i = 0; i < students.length; i++){
        const student = students[i]
        studentData +=`<tr>
            <td>${student.getId()}</td>
            <td>${student.getName()}</td>
            <td>${student.getBirthday()}</td>
            <td>${student.getGender()}</td>
            <td>${student.getGrade()}</td>
            <td><img width="100px" height="100px" src="${student.getPicture()}"></td>
            <td>
                <button onclick="handleShowEditStudent(${student.getId()})">Edit</button>
                <button onclick="handleDeleteStudent(${student.getId()})">Delete</button>
            </td>
        </tr>`;
    }
    studentData +=`</tbody>
    </table>`;
        document.getElementById("root").innerHTML = studentData;
}
displayStudents();

//Xoa
function handleDeleteStudent(studentId){
    let index = -1;
    for(let i = 0; i < students.length; i++){
        const student = students[i];
        if (student.getId() === studentId){
            index = i;
            break;
        }
    }
    if (index === -1){
        alert("Không tìm thấy");
    } else {
        const confirmDelete = confirm(
            `Bạn muốn xóa sinh viên ${students[index].getName()} không?`
        );
        if (confirmDelete){
            students.splice(index, 1);
            displayStudents()
        }
    }
}

//Them moi
function handleAddNewStudent(){
    let id = +document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let birthday = document.getElementById("birthday").value;
    let gender = document.getElementById("gender").value;
    let grade = document.getElementById("grade").value;
    let picture = document.getElementById("pictute").value;
    let student = new Student(id, name, birthday, gender, grade, picture);
    console.log(student);
    students.push(student);
    displayStudents();
    document.getElementById("id").value= "";
    document.getElementById("name").value= "";
    document.getElementById("birthday").value= "";
    document.getElementById("gender").value= "";
    document.getElementById("grade").value= "";
    document.getElementById("pictute").value= "";
}

//Chinh sua
function handleShowEditStudent(studentId){
    let index = -1;
    for(let i = 0; i < students.length; i++){
        const student = students[i];
        console.log('student', student);
        console.log('studentId', studentId);
        if (student.getId() === studentId){
            index = i;
            break;
        }
    }
    if (index === -1){
        alert("Không tìm thấy");
    } else {
        document.getElementById("id").value = students[index].getId();
        document.getElementById("name").value = students[index].getName();
        document.getElementById("birthday").value = students[index].getBirthday();
        document.getElementById("gender").value = students[index].getGender();
        document.getElementById("grade").value = students[index].getGrade();
        document.getElementById("pictute").value = students[index].getPicture();
    }
}

function updateStudent(){
    let id = +document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let birthday = document.getElementById("birthday").value;
    let gender = document.getElementById("gender").value;
    let grade = document.getElementById("grade").value;
    let picture = document.getElementById("pictute").value;
    const index = students.findIndex((std) => std.getId() === +id);
    if(index === -1){
        alert("Không tìm thấy");
    } else {
        student[index].setName(name);
        student[index].setBirthday(birthday);
        student[index].setGender(gender);
        student[index].setGrade(grade);
        student[index].setPicture(picture);
        displayStudents();
        document.getElementById("id").value= "";
        document.getElementById("name").value= "";
        document.getElementById("birthday").value= "";
        document.getElementById("gender").value= "";
        document.getElementById("grade").value= "";
        document.getElementById("pictute").value= "";
    }
}







