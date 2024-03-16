import { redirect} from "react-router-dom";
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
        console.log(await response.json());
        return await response.json();
    } else {
        return await response.json();
    }
}

export const loginin = async (user: User) => {
    const response = await fetch('http://localhost:3000/api/authentification/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    if(response.ok){
        const responseJson = await response.json();
        localStorage.setItem('token', responseJson.token);
        redirect("/form");

        return await response.json();
    } else {
        return await response.json();
    }
}