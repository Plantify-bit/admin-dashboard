import {getAuth} from "../LocalStorage/Auth";
import axios from "axios";
import baseUrl from "./Data";

async function getSupports() {
    try{
        const {token} = getAuth()
        const response = await axios.get(`${baseUrl}/getAllSupport`,{
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

async function updateSupport(status, id) {
    const data = JSON.stringify(
        {
            status: status.toLowerCase().trim(),
        }
    )
    try{
        const {token} = getAuth()
        const response = await axios.patch(`${baseUrl}/updateSupport/${id}`,data,{
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



export {getSupports, updateSupport}
