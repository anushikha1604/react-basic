import './products.css';
const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];

export default function ProductList() {
    const listItems = products.map(product =>
        <li
            key={product.id}

            className={`list ${product.isFruit ? 'list-fruit' : 'list-veg'}`}
        >
            {product.title}
        </li >
    );

    return (

        <ul>{listItems}</ul>
    );
}
