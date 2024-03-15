import { User } from "../models/User";

export const register= async (user: User) => {

    const response = await fetch('http://localhost:3000/api/authentification/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    if(response.ok){
        return await response.json();
    } else {
        return await response.json();
    }
}