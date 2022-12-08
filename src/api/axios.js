import axios from "axios";

export const privateAxios = axios.create({
    headers: { "Content-type": "application/json" },
    withCredentials: true,
});
