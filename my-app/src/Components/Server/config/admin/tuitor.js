import { HttpRequest } from "../../host"

export let saveTuitor=(obj)=>{
    var config={
        method:'POST',
        data:obj
    }
    return  HttpRequest(config)
}