
const initialState={
    uzLang:true,
    enLang:false
}
export const langRedusers=(state=initialState, action)=>{
    switch(action.type){
        case 'uz':
            return{uzLang:true,
                enLang:false
            }
            break;
        case 'ru':
                return{uzLang:false,
                    enLang:false
                }
                break;
        case 'en':
            return{uzLang:false,
                enLang:true,
            }
            break;
        default:
            return{uzLang:true,
            enLang:false}
            break;
    }
}