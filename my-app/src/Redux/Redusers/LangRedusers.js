
const initialState={
    uzLage:true,
    enLage:false
}
export const langRedusers=(state=initialState, action)=>{
    switch(action.type){
        case 'uz':
            console.log('uz')
            return{uzLage:true,
                enLage:false
            }
            break;
        case 'ru':
                console.log('ru')
                return{uzLage:false,
                    enLage:false
                }
                break;
        case 'en':
            console.log('en')
            return{enLage:false,
                enLage:false
            }
            break;
        default:
            console.log('default')
            return{uzLage:true}
            break;
    }
}