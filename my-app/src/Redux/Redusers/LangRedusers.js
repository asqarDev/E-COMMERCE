import { GetValue, SteLocalStorage } from "../../Components/Server/localstorage";

const initialState={
    uzLang:localStorage.getItem('project1')==='uz',
    enLang:localStorage.getItem('project1')==='en'
}
export const langRedusers=(state=initialState, action)=>{
    switch(action.type){
        case 'uz':
            SteLocalStorage('project1','uz')
            return{uzLang:true,
                enLang:false
            }
            break;
        case 'ru':
            SteLocalStorage('project1','ru')
                return{uzLang:false,
                    enLang:false
                }
                break;
        case 'en':
            SteLocalStorage('project1','en')
            return{uzLang:false,
                enLang:true,
            }
            break;
        default:
            // console.log(localStorgeGetT)
            // GetValue('project1','uz')?SteLocalStorage('project1','uz'):GetValue('project1','en')?SteLocalStorage('project1','en'):SteLocalStorage('project1','ru')
            return{uzLang:GetValue('project1','uz'),
            enLang:GetValue('project1','en')}
            break;
    }
    debugger;
}