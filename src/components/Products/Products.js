import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Products/Product/Product';

const Products = () => {
  const [products] = useState(productsData);


  return (
    <section>

      {products.map(prod =>
        <Product
          key={prod.id}
          id={prod.id}
          name={prod.name}
          title={prod.title}
          colors={prod.colors}
          sizes={prod.sizes}
          basePrice={prod.basePrice} />
      )}
    </section>
  );
};

export default Products;