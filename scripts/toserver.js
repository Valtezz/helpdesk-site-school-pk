export class tasks{
    static create(text){
        return fetch('https://pkhelpdesk-b0813-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',{
                    method: 'POST',
                    headers:{'content-type':'application/json;charset=utf-8'},
                    body: JSON.stringify(text),
                    })
                    .then(response => response.json())
                    }
    }