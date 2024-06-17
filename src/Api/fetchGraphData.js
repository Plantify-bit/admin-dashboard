import baseUrl from "./Data";
import axios from "axios";

async function fetchGraphData() {
    try{
        const response = await axios.get(`${baseUrl}/graphData`);
        return response.data;
    }catch (e) {
        throw e
    }
}

export default fetchGraphData;
