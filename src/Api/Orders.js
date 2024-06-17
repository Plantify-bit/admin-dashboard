import axios from "axios";
import baseUrl from "./Data";
import {getAuth} from "../LocalStorage/Auth";

async function getOrders() {
    try{
        const {token} = getAuth()
        const response = await axios.get(`${baseUrl}/getAllOrder`,{
            headers: {
                'Content-Type': 'application/json',
                'token': token,
            }
        });
        return response.data;
    }catch (e) {
        throw e
    }
}

async function updateOrders(status, id) {
    try{
        const {token} = getAuth()
        const data = JSON.stringify({
            "status":status.toLowerCase()
        })
        const response = await axios.patch(`${baseUrl}/updateOrder/${id}`,data,{
            headers: {
                'Content-Type': 'application/json',
                'token': token,
            }
        });
        return response.data;
    }catch (e) {
        throw e
    }
}

export {getOrders, updateOrders}
