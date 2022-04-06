import axios from "axios";

const api = axios.create({
    baseURL: "https://api.github.com/users/GuiAlcantaraa/repos"
})

export default api;
