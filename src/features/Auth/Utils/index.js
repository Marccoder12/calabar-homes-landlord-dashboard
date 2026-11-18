export const showPassword = (  ) => {
    
}

fetch("http://localhost:5000", {
    method: "POST",
    headers:{
        "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify({
        firstname: "Mark",
        lastname: "Nguh",
        email: "mariomark407#gmail.com",
        password: "password123"
    })
})