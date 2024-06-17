import baseUrl from "./Data";
import axios from "axios";

async function loginAdmin(email, password) {
    try{
        let data = JSON.stringify({
            "email":email,
            "password":password
        });
        const response = await axios.post(`${baseUrl}/adminLogin`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    }catch (e) {
        throw e
    }
}

export  {loginAdmin}
