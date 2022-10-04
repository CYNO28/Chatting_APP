
let link='http://localhost:8080'
export const login=(data) =>(dispatch)=>{
    fetch(`${link}/auth/login`,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(r=>r.json()).then(data=>{
        console.log(data)
    })
}