export let SteLocalStorage=(key,value)=>{
    localStorage.setItem(key,value)
}

export let GetValue=(key,value)=>{
    return localStorage.getItem(key)===value
}