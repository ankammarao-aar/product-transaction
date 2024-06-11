import './index.css'

const Product = props => {
    const {productData} = props
    const {id, title, price, description, category, image, sold} = productData
    console.log(sold)

    return (
        <li className="list-item">
            <p className='id'>{id}</p>
            <p className='title'>{title}</p>
            <p className='desc'>{description}</p>
            <p className='price'>{price}</p>
            <p className='cate'>{category}</p>
            <p className='sold'>{sold}</p>
            <p className='image'><img src={image} alt='title' className='img' /></p>
        </li>
    )
}

export default Product
