import axios from "axios";
export let host = "http://admin.credence.uz/uz";
export let hosten = "http://admin.credence.uz/en";
export let hostru = "http://admin.credence.uz/ru";
export let host1='http://admin.credence.uz';

export let HttpRequest=(config)=>{
    return axios({
        url:host,
        url:host1,
        ...config,
    })
}
