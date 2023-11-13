class Student {
    constructor(id, name, grade, email, birthday) {
        this.id = id;
        this.name = name;
        this.grade = grade;
        this.email = email;
        this.birthday = birthday;
    }

    getId(){
        return this.id;
    }
    setId(id){
        this.id = id;
    }

    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }

    getGrade(){
        return this.grade;
    }
    setGrade(grade){
        this.grade = grade;
    }

    getEmail() {
        return this.email;
    }
    setEmail(email){
        this.email = email;
    }

    getBirthday(){
        return this.birthday;
    }
    setBirthday(birthday){
        this.birthday = birthday;
    }
}


let students = [];
let nguyenVanA = new Student(1,"Nguyễn Văn A","C1022G1","nguyenvana@gmail.com","1/1/2002" );
let nguyenVanB = new Student(2,"Nguyễn Văn B","C1022G1","nguyenvanb@gmail.com","2/8/2002" );
let nguyenVanC = new Student(3,"Nguyễn Văn C","C1022G1","nguyenvanc@gmail.com","19/1/2002" );

students.push(nguyenVanA);
students.push(nguyenVanB);
students.push(nguyenVanC);

function displayStudents() {
    let studentData = `<table border="1" class="table">
        <thead>
          <tr>
            <th>Mã học viên</th>
            <th>Tên</th>
            <th>Lớp</th>
            <th>Email</th>
            <th>Ngày sinh</th>
          </tr>
        </thead>
        <tbody>`;
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        studentData += `<tr>
            <td>${student.getId()}</td>
            <td>${student.getName()}</td>
            <td>${student.getGrade()}</td>
            <td>${student.getEmail()}</td>
            <td>${student.getBirthday()}</td>
            
            <td>
              <button onclick="handleShowEditStudent(${student.getId()})">Edit</button>
            </td>
            <td>
              <button onclick="deleteStudent(${student.getId()})">Delete</button>
            </td>
          </tr>`;
    }
    studentData += `</tbody>
    </table>`;
    document.getElementById("root").innerHTML = studentData;
}
displayStudents();

function deleteStudent(studentId) {
    let index = -1;
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        if (student.getId() === studentId) {
            index = i;
            break;
        }
    }
    if (index === -1) {
        alert("Không tìm thấy");
    } else {
        const confirmDelete = confirm(
            ` Bạn muốn xóa sinh viên ${students[index].getName()} không ?`
        );
        if (confirmDelete) {
            students.splice(index, 1);
            displayStudents()
        }
    }
}

function handleAddNewStudent(){
    let id = +document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let grade = document.getElementById("grade").value;
    let email = document.getElementById("email").value;
    let birthday = document.getElementById("birthday").value;

    let student = new Student(id, name, grade, email, birthday);
    console.log(student);
    students.push(student);
    displayStudents();
    document.getElementById("id").value= "";
    document.getElementById("name").value= "";
    document.getElementById("grade").value= "";
    document.getElementById("email").value= "";
    document.getElementById("birthday").value= "";
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
        document.getElementById("grade").value = students[index].getGrade();
        document.getElementById("email").value = students[index].getEmail();
        document.getElementById("birthday").value = students[index].getBirthday();
    }
}

function updateStudent(){
    let id = +document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let grade = document.getElementById("grade").value;
    let email = document.getElementById("email").value;
    let birthday = document.getElementById("birthday").value;
    const index = students.findIndex((std) => std.getId() === +id);
    if(index === -1){
        alert("Không tìm thấy");
    } else {
        students[index].setName(name);
        students[index].setGrade(grade);
        students[index].setEmail(email);
        students[index].setBirthday(birthday);
        displayStudents();
        document.getElementById("id").value= "";
        document.getElementById("name").value= "";
        document.getElementById("grade").value= "";
        document.getElementById("email").value= "";
        document.getElementById("birthday").value= "";
    }
}




