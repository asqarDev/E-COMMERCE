import axios from "axios";
export let host = "https://morning-peak-42064.herokuapp.com";
export let HttpRequest=(config)=>{
    return axios({
        ...config,
        url:host
    })
}
