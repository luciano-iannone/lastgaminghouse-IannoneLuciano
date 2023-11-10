import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, name, img, price, stock}) => {
    return(
        <article className="CardItem">
            <header className="header"> 
                <h2 className="ItemHeader">{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Price: ${price}
                </p>
                <p className="Info">
                    Available Stock: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <button className="Option">More info</button>
                <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Quantity Added', quantity)} />
            </footer>
        </article>
    )
}

export default ItemDetail