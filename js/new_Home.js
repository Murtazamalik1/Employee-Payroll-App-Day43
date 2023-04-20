let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList=getEmployeePayrollDataFromStorage();
    document.querySelector('.emp-count').textContent =  empPayrollList.length;
    createInnerHtml();
});

const getEmployeePayrollDataFromStorage = () =>{
    return localStorage.getItem('EmployeePayrollList') ?
    JSON.parse(localStorage.getItem('EmployeePayrollList')):[];
}
//Template literal ES6 feature
const  createInnerHtml = () =>{
   // if(empPayrollList==0) return;
    const headerHtml = "<tr><th>Profile</th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th>" +
    "<th>Start Date</th><th>Actions</th></tr>"
    let innerHtml = `${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();
    for(const empPayrollData of empPayrollList){
        innerHtml=`${innerHtml}
<tr>
 <td><img class="profile" width="4%" alt="" src="${empPayrollData._profilePic}">
 </td>
     <td>${empPayrollData._name}</td>
     <td>${empPayrollData._gender}</td>
     <td>${getDeptHtml(empPayrollData._department)}</td>
     <td>${empPayrollData._salary}</td>
     <td>${empPayrollData._startDate}</td>
     <td>
         <img id="${empPayrollData._id}" onclick="remove(this)" alt="delete"
         src="../assets/icons/trash-solid.svg">
         <img id="${empPayrollData._id}" alt="edit" onclick="update(this)" 
         src="../assets/icons/pen-nib-solid.svg">
     </td>    
 </td>
</tr>
`;
}
document.querySelector('#table-display').innerHTML = innerHtml;
}
const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [{
            _name: 'Murtaza Malik',
            _gender: 'Male',
            _department: [
                'Engineering',
                'Finance'
            ],
            _salary: '300000',
            _startDate: '1 Nov 2022',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: "../assets/Teacher/teacger-1.jpg"
        },
        {
            _name: 'Surabhi Bhagat',
            _gender: 'Female',
            _department: [

                'Sales'
            ],
            _salary: '400000',
            _startDate: '29 Oct 2019',
            _note: '',
            _id: new Date().getTime() + 1,
            _profilePic: "../assets/Teacher/teacher-2.jpg"
        }
    ];
    return empPayrollListLocal;
}
const getDeptHtml = (deptList) =>{
    let deptHtml = '';
    for(const dept of deptList){
        deptHtml=`${deptHtml}<div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}
