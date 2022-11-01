document.addEventListener("DOMContentLoaded", ()=>{
    sendRequest('https://pkhelpdesk-b0813-default-rtdb.europe-west1.firebasedatabase.app/tasks.json').then(data=>{console.log(data)})
});
 async function sendRequest(url){
     return fetch(url).then(response => {
        return response.json();
     })
}