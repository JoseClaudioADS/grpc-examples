import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';

import productsGrpcClient from './products-grpc-client';
import { Empty, ProductRequestId } from './grpc/products_pb';

function ProductList({ products }) {
  return <ul>
    {products.map((product) => {
      return <li key={product.id + Math.random()}>
        {product.name} - {product.description} {product.value.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })
        }
      </li>
    })}
  </ul>
}

function App() {
 
  const [products, setProducts] = useState([]);
  const [productsStream, setProductsStream] = useState([]);

  useEffect(() => {
    productsGrpcClient.getAll(new Empty(), null, (err, data) => {
      // we can get with this method...
      //data.getProductsList()[0].getName()

      //or... parse to JS Object and get attrs
      setProducts(data.toObject().productsList);
    });

    //We can create a ProductRequestId like this (positional according with .proto) ->
    // const productRequestId = new ProductRequestId(["a68b823c-7ca6-44bc-b721-fb4d5312cafc"]);

    //or...
    const productRequestId = new ProductRequestId();
    productRequestId.setId("a68b823c-7ca6-44bc-b721-fb4d5312cafc");

    productsGrpcClient.get(productRequestId, null, (err, data) => {
      console.log(err, data.toObject());
    });

    const productRequestIdNotFoundSimulator = new ProductRequestId();
    productRequestIdNotFoundSimulator.setId("a68b8232-7ca6-44bc-b721-fb4d5312cafc");

    productsGrpcClient.get(productRequestIdNotFoundSimulator, null, (err, data) => {
      console.log(err, data);
    });

    const call = productsGrpcClient.getAllWithStream(new Empty());

    call.on('data', function(product) {
      setProductsStream(oldProducts => [...oldProducts, product.toObject()]);
    });
    call.on('end', () => {
      console.log('end products stream')
    });

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Products without stream.
        </p>
        <ProductList products={products}></ProductList>
        <p>
          Products with stream.
        </p>
        <ProductList products={productsStream}></ProductList>
      </header>
    </div>
  );
}

export default App;
