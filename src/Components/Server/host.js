import axios from "axios";
export let host = "https://admin.credence.uz/uz";
export let hosten = "https://admin.credence.uz/en";
export let hostru = "https://admin.credence.uz/ru";
export let host1='https://admin.credence.uz';

export let HttpRequest=(config)=>{
    return axios({
        url:host,
        url:host1,
        ...config,
    })
}
