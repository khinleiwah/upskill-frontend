import homeReducer from "./reducers/homeReducer";
import productReducer from "./reducers/productReducer";

const rootReducer = {
    home: homeReducer,
    product: productReducer
}
export default rootReducer;