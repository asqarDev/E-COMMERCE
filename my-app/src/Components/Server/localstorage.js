export const SteLocalStorage=(key,value)=>{
    localStorage.setItem(key,value)
}

export const GetValue=(key,value)=>{
    return localStorage.getItem(key)===value
}