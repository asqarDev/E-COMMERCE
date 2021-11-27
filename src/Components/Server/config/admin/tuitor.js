import { host, hosten, hostru, HttpRequest } from "../../host";

export let saveTuitor = (uz,en) => {
  let config = {
    url: uz? `${host}/me/`:en?`${hosten}/me/`:`${hostru}/me/`,
    method: "GET",
  };
  return HttpRequest(config);
}
export let saveArticles = (uz,en) => {
  let config = {
    url: uz? `${host}/articles/`:en?`${hosten}/articles/`:`${hostru}/articles/`,
    method: "GET",
  };
  return HttpRequest(config);
}

export let saveBooks = (uz,en) => {
  let config = {
    url: uz? `${host}/books/`:en?`${hosten}/books/`:`${hostru}/books/`,
    method: "GET",
  };
  return HttpRequest(config);
}
export let savePresentations= (uz,en) => {
  let config = {
    url: uz? `${host}/presentations/`:en?`${hosten}/presentations/`:`${hostru}/presentations/`,
    method: "GET",
  };
  return HttpRequest(config);
}

export let saveProjects= (uz,en) => {
  let config = {
    url: uz? `${host}/projects/`:en?`${hosten}/projects/`:`${hostru}/projects/`,
    method: "GET",
  };
  return HttpRequest(config);
}
export let saveEvents= (uz,en) => {
  let config = {
    url: uz? `${host}/events/`:en?`${hosten}/events/`:`${hostru}/events/`,
    method: "GET",
  };
  return HttpRequest(config);
}

export let saveMaps = (uz,en) => {
  let config = {
    url:uz? `${host}/me/addresses/`:en?`${hosten}/me/addresses/`:`${hostru}/me/addresses/`,
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
  
