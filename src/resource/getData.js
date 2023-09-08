import axios from "axios";

export async function getData(path) {
    try {
        const response = await axios.get(path);
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}