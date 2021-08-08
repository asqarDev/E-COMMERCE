
const initialState={
    uzLage:true
}
export const langRedusers=(state=initialState, action)=>{
    switch(action.type){
        case 'uz':
            console.log('uz')
            return{uzLage:true}
            break;
        case 'ru':
                console.log('ru')
                return{uzLage:false}
                break;
        case 'en':
            console.log('en')
            return{uzLage:false}
            break;
        default:
            console.log('default')
            return{uzLage:true}
            break;
    }
}