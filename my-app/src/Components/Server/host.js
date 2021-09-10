import axios from "axios";
export let host = "https://morning-peak-42064.herokuapp.com/uz";
export let hosten = "https://morning-peak-42064.herokuapp.com/en";
export let hostru = "https://morning-peak-42064.herokuapp.com/ru";
export let host1='https://morning-peak-42064.herokuapp.com';

export let HttpRequest=(config)=>{
    return axios({
        url:host,
        url:host1,
        ...config,
    })
}
