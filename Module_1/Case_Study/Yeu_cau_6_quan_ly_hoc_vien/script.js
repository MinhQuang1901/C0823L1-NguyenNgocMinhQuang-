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
let nguyenVanA = new Student("HV-0001","Nguyễn Văn A","C1022G1","nguyenvana@gmail.com","1/1/2002" );
let nguyenVanB = new Student("HV-0002","Nguyễn Văn B","C1022G1","nguyenvanb@gmail.com","2/8/2002" );
let nguyenVanC = new Student("HV-0003","Nguyễn Văn C","C1022G1","nguyenvanc@gmail.com","19/1/2002" );

students.push(nguyenVanA);
students.push(nguyenVanB);
students.push(nguyenVanC);

function displayStudents() {
    let studentData = `<table class="table">
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
    for (let i = 0; i <students.length; i++){
        const student = students[i];
        studentData += `<tr>
            <td>${student.getId()}</td>
            <td>${student.getName()}</td>
            <td>${student.getGrade()}</td>
            <td>${student.getEmail()}</td>
            <td>${student.getBirthday()}</td>
            <td>
                <button onclick="handleShowEditStudent(${student.getId()})">Sửa thông tin học viên</button>
            </td>
            <td>
                <button onclick="deleteStudent(${student.getId()})">Xóa sinh viên</button>
           </td>
`
        }
    }

}
