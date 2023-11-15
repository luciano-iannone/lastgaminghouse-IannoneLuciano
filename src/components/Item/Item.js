import { Link } from "react-router-dom"

const Item = ({ id, name, img, price, stock }) => {
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
                <Link to= {`/item/${id}`} className="option">More Details</Link>
            </footer>
        </article>
    )
}

export default Item