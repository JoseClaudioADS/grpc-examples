const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const _ = require('lodash');
const { v4: uuidv4 } = require("uuid");

const PROTO_PATH = "../products.proto";

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
	keepCase: true,
	longs: String,
	enums: String,
	arrays: true
});

const productsProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

const products = [
	{
		id: "a68b823c-7ca6-44bc-b721-fb4d5312cafc",
		name: "VHS Karate Kid 1",
		value: 500,
		description: "The best karate movie in the world."
	},
	{
		id: "34415c7c-f82d-4e44-88ca-ae2a1aaa92b7",
		name: "Avengers - Ultimate",
		value: 1500,
		description: "The best heroes movie in the world."
	}
];

server.addService(productsProto.ProductService.service, {
	getAll: (_, callback) => {
		callback(null, { products });
	},

	getAllWithStream: (call) => {
		_.each(products, function (product) {
			call.write(product)
		});

		let i = 0;

		const idInterval = setInterval(() => {
			const newProduct = {};
		
			newProduct.id = uuidv4();
			newProduct.name = `Stream product ${i}`;
			newProduct.description = `Stream product description ${i}`;
			newProduct.value= Math.floor(Math.random(3) * 1000);
			products.push(newProduct);

			call.write(newProduct);

			i++;

			if (i >= 10) {
				clearInterval(idInterval)
				call.end();
			}
		}, 1000);

	},

	get: (call, callback) => {
		console.log(call.request);
		let product = products.find(product => product.id == call.request.id);

		if (product) {
			callback(null, product);
		} else {
			callback({
				code: grpc.status.NOT_FOUND,
				details: "Not found"
			});
		}
	},

	insert: (call, callback) => {
		let product = call.request;
		
		product.id = uuidv4();
		products.push(product);
		callback(null, product);
	},

	update: (call, callback) => {
		let existingProduct = products.find(product => product.id == call.request.id);

		if (existingProduct) {
			existingProduct.name = call.request.name;
			existingProduct.description = call.request.description;
			existingProduct.value = call.request.value;
			callback(null, existingProduct);
		} else {
			callback({
				code: grpc.status.NOT_FOUND,
				details: "Not found"
			});
		}
	},

	remove: (call, callback) => {
		let existingProductIndex = products.findIndex(
			product => product.id == call.request.id
		);

		if (existingProductIndex != -1) {
			products.splice(existingProductIndex, 1);
			callback(null, {});
		} else {
			callback({
				code: grpc.status.NOT_FOUND,
				details: "Not found"
			});
		}
	}
});

server.bindAsync("127.0.0.1:30043", grpc.ServerCredentials.createInsecure(), () => {
    server.start();
    console.log("Server running at http://127.0.0.1:30043");
});
