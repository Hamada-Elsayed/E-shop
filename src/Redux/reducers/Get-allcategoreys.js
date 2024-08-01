import {GET_ALL_CATEGORIES,ERRORS,CREATE_CATEGORY, GET_ONE_CATEGORY,} from '../Type'
const inatial = {
    category:[],
    specificcategory:[],
    loading:true
} 
const getallcategores = (state=inatial,action)=>{
    switch(action.type){

        case GET_ALL_CATEGORIES:
            return{
                ...state,
                category:action.payload,
                loading:false
            }
        case  GET_ONE_CATEGORY: 
            return{
                ...state,
                specificcategory:action.payload,
                loading:false
            }
        case CREATE_CATEGORY:
            return{
                ...state,
                category:action.payload,
                loading:false
            }
        case ERRORS:
            return{
                ...state,
                category:action.payload,
                loading:true
            }
        
        default:
            return state

    }

}

export default getallcategores;
