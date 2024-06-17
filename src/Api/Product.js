import baseUrl from "./Data";
import axios from "axios";
import {getAuth} from "../LocalStorage/Auth";

async function createProduct({name, price, description, category, keywords, discount,stock, image}) {
    let fileData = new FormData();
    fileData.append('name', name);
    fileData.append('price', price);
    fileData.append('description', description);
    fileData.append('category', category);
    fileData.append('keywords', keywords);
    fileData.append('discount', discount);
    fileData.append('stock', stock);
    fileData.append('images', image);
    try{
        const {token} = getAuth()
        const response = await axios.post(`${baseUrl}/product`, fileData, {
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

async function getProducts(search = "", category = "") {
    try{
        const response = await axios.get(`${baseUrl}/product?search=${search}&category=${category}`);
        return response.data;
    }catch (e) {
        throw e
    }
}

async function deleteProducts(id) {
    try{
        const {token} = getAuth()
        const response = await axios.delete(`${baseUrl}/product/${id}`,{
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

async function updateProduct(body, id) {
    try{
        let data = JSON.stringify(body);
        const {token} = getAuth()
        const response = await axios.patch(`${baseUrl}/product/${id}`, data, {
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
export  {createProduct, getProducts, deleteProducts, updateProduct}
