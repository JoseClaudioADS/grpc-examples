from __future__ import print_function
import logging

import grpc

import products_pb2
import products_pb2_grpc


def run():
    with grpc.insecure_channel('localhost:30043') as channel:
        # Get instance to call server
        stub = products_pb2_grpc.ProductServiceStub(channel)

        # Insert a product
        response_insert = stub.Insert(products_pb2.Product(name="Bloodborne - PS4", description="The best game of PS4", value=50))
        print(response_insert)

        # Get all products
        response_get_all = stub.GetAll(products_pb2.Empty())
    print(response_get_all.products)


if __name__ == '__main__':
    logging.basicConfig()
    run()