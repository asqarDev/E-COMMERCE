import { host, HttpRequest } from "../../host";

export let saveTuitor = () => {
  let config = {
    url: `${host}/me/`,
    method: "GET",
  };
  return HttpRequest(config);
}
export let saveMaps = () => {
  let config = {
    url: `${host}/me/addresses/`,
    method: "GET",
  };
  return HttpRequest(config);
}
export let saveNumber = () => {
  let config = {
    url: `${host}/me/phones/`,
    method: "GET",
  };
  return HttpRequest(config);
}
export let getPosts = (formDataObj) => {
    let config = {
      url: `${host}/me/contact/`,
      method: "POST",
      data: formDataObj
    };
    return HttpRequest(config);
  };
  
