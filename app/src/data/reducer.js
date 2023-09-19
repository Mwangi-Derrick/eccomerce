export const initialState = {
    basket: [],
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case "ADD_TO_BASKET":
     {
    return { ...state, basket: [...state.basket, action.item] };
  }
        
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(item => item.id === action.id)
            let updatedBasket = [...state.basket];
            if (index >= 0) {console.log(state.quantity)
                updatedBasket.splice(index, 1) 
                return {
                    ...state,
                    basket: updatedBasket,
                }
            }
            else {
                return {
                    ...state,
                    basket: updatedBasket,
                } 
            }
            
         default:
            return state;
    }
};

export default reducer;

