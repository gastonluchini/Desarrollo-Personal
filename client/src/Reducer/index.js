
const initialState = {
   objetive: [],
   objetiveCopy: [],
}

function rootReducer(state = initialState, action) {
   switch (action.type) {
      
      case 'TEST_TEST':

         return {
            ...state, 
            objetive: action.payload,
            objetiveCopy: action.payload,
         }
  
      default:
      return state
   }
  }
  export default rootReducer;