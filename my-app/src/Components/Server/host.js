import axios from "axios";
export let host = "https://morning-peak-42064.herokuapp.com/uz";
export let host1='https://morning-peak-42064.herokuapp.com'
export let HttpRequest=(config)=>{
    return axios({
        url:host,
        url:host1,
        ...config,
    })
}
