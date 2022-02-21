import './ItemDetail.css'
const ItemDetail = ({ products }) => {
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {products?.name}
                </h2>
            </header>
            <picture>
                <img src={products?.img} alt={products?.name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {products?.category}
                </p>
                <p className="Info">
                    Descripción: {products?.description}
                </p>
                <p className="Info">
                    Precio: {products?.price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                
            </footer>
        </article>
    )
}

export default ItemDetail;