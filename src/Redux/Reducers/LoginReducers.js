

let initialState = {
    user:[],
    err:null,

};


const LoginReducers = (state=initialState,action) =>{
    switch (action.type) {
        case 'addrecord':
            return {
                ...state,
                user:[...state,user],
                err:null
            }
            case 'adderror':
            return {
                ...state,
                err:action.payload
            }
            
            case "viewuser":
                return {
                  ...state,
                  user: action.payload, 
                  err: null,
                };
          
              case "viewerr":
                return {
                  ...state,
                  err: action.payload,
                };
              
                case 'delete':
                  return{
                    ...state,
                    user:state.user.filter((val)=> val.id != action.payload)
                  }
                case 'deleteerr':
                  return{
                    ...state,
                    err:null
                  }

                case 'edit':
                  let up=state.user.map((val)=>{
                    if(val.id === action.payload.id){
                      val.email = action.payload.email,
                      val.password = action.payload.password,
                      val.status = action.payload.status
                    }
                    return val;
                  })
                  return{
                    ...state,
                    user:up,
                  }

                  case 'editerr':
                  return{
                    ...state,
                    err:null
                  }


                  case 'filterrecord':
                    return {
                        ...state,
                        user: action.payload,
                    };
        
                case 'filtererr':
                    return {
                        ...state,
                        error: action.payload,
                    };
    
        default:
            return state;
    }

}

export default LoginReducers;