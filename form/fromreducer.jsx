export const formreducervalue ={
    name:"",
    age:"",
    accept:false
}
/* export const FormReducer=(state,action)=>{
    switch(action.type){
        case 'INPUT_Name':
            const {name , value} = action.name.current
            return {
                ...state ,  [name]  : [value]
            }
        break;
         case 'INPUT_Age':
            const {name , value} = action.name.current
            return {
                ...state ,  [name]  : [value]
            }
        break;
         case 'CHECK':
            const {name , value} = action.name.current
            return {
                ...state ,  [name]  : [value]
            }
        break;
    }
}
 */

/* export const FormReducer = (state, action) => {
    const { name, value } = action;

    switch(action.type) {
        case 'INPUT_Name':
        case 'INPUT_Age':
        case 'CHECK':
            return {
                ...state,
                [name]: value
            };
        default:
            return state;
    }
};
 */

export const FormReducer=(state,action)=>{
    console.log(action.payload.current.id,action.payload.current.value)
    switch(action.type){
        case 'INPUT_Name':
            return {
                ...state ,  [action.payload.current.id]  : [action.payload.current.value]
            }
        break;
         case 'INPUT_Age':
            return {
                ...state ,  [action.payload.current.id]  : [action.payload.current.value]
            }
        break;
         case 'CHECK':
            return {
                ...state ,  [action.payload.current.id]  : [action.payload.current.checked]
            }
        break;
    }
}