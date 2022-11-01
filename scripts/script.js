import {tasks} from './toserver.js'
let form = document.getElementById('form');
let nam = document.getElementById('formName');
let email = document.getElementById('email');
let cnstr = document.getElementById('constr_select');
let kab = document.getElementById('kab_num');
let problem = document.getElementById('problem');
let sbmtBtn = document.querySelector('.form_button');
let result = [];

    form.addEventListener('submit', formSend);
    

    async function formSend (event){
        event.preventDefault();

    }
 sbmtBtn.addEventListener('click', async function addTask(){
    const task = {
                name: nam.value,
                email: email.value,
                cnstr: cnstr.value,
                kab: kab.value,
                problem: problem.value,
                done: false,
                id: `${Math.random()}`
            };
            result.push(task);
            tasks.create(result).then(()=>{
                alert(`Спасибо вам, заявка оформлена`)
                nam.value =''
                email.value =''
                kab.value =''
                problem.value =''
            })
 });