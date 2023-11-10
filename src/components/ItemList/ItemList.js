import { products } from "../../asyncMock"
import Item from "../Item/Item"

const ItemList = () => {
    return(
        <div className="ListGroup">
            {products.map(prod => <Item key={prod.id} {...prod} />) }
        </div>
    )
}

export default ItemList