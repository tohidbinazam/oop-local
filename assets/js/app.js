import Alert from '../../src/Alert.js';
import Storage from '../../src/Storage.js';

// get elements
const add_student = document.getElementById('add_student');
const form_alert = document.querySelector('.form_alert');
const student_list = document.getElementById('student_list');

add_student.addEventListener('submit', function (e) {
  e.preventDefault();

  let form_data = new FormData(e.target);
  let data = Object.fromEntries(form_data.entries());

  const { name, email, number, photo } = data;

  if (name == '' || email == '' || number == '') {
    form_alert.innerHTML = Alert.alert('danger', 'All fields are required');
  } else {
    form_alert.innerHTML = Alert.alert('success', 'Successfully add data');
    Storage.set('student', data);
    add_student.reset();
    get_student();
  }
});

get_student();
function get_student() {
  const data = Storage.get('student');
  student_list.innerHTML = '';

  data.map((data, index) => {
    const { name, email, number, photo } = data;
    student_list.innerHTML += `
                  <tr>
                    <td>${index + 1}</td>
                    <td>${name}</td>
                    <td>${email}</td>
                    <td>${number}</td>
                    <td><img style="width: 40px; height: 40px; object-fit: cover" src="${photo ? photo : '../assets/img/avatar.png'}" alt="" /></td>
                    <td>
                      <button class="btn btn-info btn-sm"><i class="fa-solid fa-eye"></i> View</button>
                      <button class="btn btn-warning btn-sm"><i class="fa-solid fa-pen-to-square"></i> Edit</button>
                      <button class="btn btn-danger btn-sm"><i class="fa-solid fa-trash-can"></i> Delete</button>
                    </td>
                  </tr>
    `;
  });
}
