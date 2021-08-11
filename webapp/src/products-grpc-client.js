import {ProductServiceClient} from './grpc/products_grpc_web_pb';
 
const client = new ProductServiceClient('http://localhost:8080');
 

export default client;