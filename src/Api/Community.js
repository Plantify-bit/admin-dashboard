import {getAuth} from "../LocalStorage/Auth";
import axios from "axios";
import baseUrl from "./Data";

async function createPost({title,description,image}) {
    let fileData = new FormData();
    fileData.append('description', description);
    fileData.append('title', title);
    fileData.append('images', image);
    try{
        const {token} = getAuth()
        const response = await axios.post(`${baseUrl}/createPost`, fileData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'token': token,
            }
        });
        return response.data;
    }catch (e) {
        throw e
    }
}

async function getPosts() {
    try{
        const response = await axios.get(`${baseUrl}/getPost`);
        return response.data;
    }catch (e) {
        throw e
    }
}
async function deletePost(id) {
    try{
        const {token} = getAuth()
        const response = await axios.delete(`${baseUrl}/deletePost/${id}`, {
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

export {createPost, getPosts, deletePost}
