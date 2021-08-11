/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./products_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ProductServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ProductServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Empty,
 *   !proto.ProductList>}
 */
const methodDescriptor_ProductService_GetAll = new grpc.web.MethodDescriptor(
  '/ProductService/GetAll',
  grpc.web.MethodType.UNARY,
  proto.Empty,
  proto.ProductList,
  /**
   * @param {!proto.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ProductList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Empty,
 *   !proto.ProductList>}
 */
const methodInfo_ProductService_GetAll = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ProductList,
  /**
   * @param {!proto.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ProductList.deserializeBinary
);


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ProductList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ProductList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ProductServiceClient.prototype.getAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ProductService/GetAll',
      request,
      metadata || {},
      methodDescriptor_ProductService_GetAll,
      callback);
};


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ProductList>}
 *     Promise that resolves to the response
 */
proto.ProductServicePromiseClient.prototype.getAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ProductService/GetAll',
      request,
      metadata || {},
      methodDescriptor_ProductService_GetAll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Empty,
 *   !proto.Product>}
 */
const methodDescriptor_ProductService_GetAllWithStream = new grpc.web.MethodDescriptor(
  '/ProductService/GetAllWithStream',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.Empty,
  proto.Product,
  /**
   * @param {!proto.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Product.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Empty,
 *   !proto.Product>}
 */
const methodInfo_ProductService_GetAllWithStream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Product,
  /**
   * @param {!proto.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Product.deserializeBinary
);


/**
 * @param {!proto.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.Product>}
 *     The XHR Node Readable Stream
 */
proto.ProductServiceClient.prototype.getAllWithStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/ProductService/GetAllWithStream',
      request,
      metadata || {},
      methodDescriptor_ProductService_GetAllWithStream);
};


/**
 * @param {!proto.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.Product>}
 *     The XHR Node Readable Stream
 */
proto.ProductServicePromiseClient.prototype.getAllWithStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/ProductService/GetAllWithStream',
      request,
      metadata || {},
      methodDescriptor_ProductService_GetAllWithStream);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ProductRequestId,
 *   !proto.Product>}
 */
const methodDescriptor_ProductService_Get = new grpc.web.MethodDescriptor(
  '/ProductService/Get',
  grpc.web.MethodType.UNARY,
  proto.ProductRequestId,
  proto.Product,
  /**
   * @param {!proto.ProductRequestId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Product.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ProductRequestId,
 *   !proto.Product>}
 */
const methodInfo_ProductService_Get = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Product,
  /**
   * @param {!proto.ProductRequestId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Product.deserializeBinary
);


/**
 * @param {!proto.ProductRequestId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Product)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Product>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ProductServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ProductService/Get',
      request,
      metadata || {},
      methodDescriptor_ProductService_Get,
      callback);
};


/**
 * @param {!proto.ProductRequestId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Product>}
 *     Promise that resolves to the response
 */
proto.ProductServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ProductService/Get',
      request,
      metadata || {},
      methodDescriptor_ProductService_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Product,
 *   !proto.Product>}
 */
const methodDescriptor_ProductService_Insert = new grpc.web.MethodDescriptor(
  '/ProductService/Insert',
  grpc.web.MethodType.UNARY,
  proto.Product,
  proto.Product,
  /**
   * @param {!proto.Product} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Product.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Product,
 *   !proto.Product>}
 */
const methodInfo_ProductService_Insert = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Product,
  /**
   * @param {!proto.Product} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Product.deserializeBinary
);


/**
 * @param {!proto.Product} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Product)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Product>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ProductServiceClient.prototype.insert =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ProductService/Insert',
      request,
      metadata || {},
      methodDescriptor_ProductService_Insert,
      callback);
};


/**
 * @param {!proto.Product} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Product>}
 *     Promise that resolves to the response
 */
proto.ProductServicePromiseClient.prototype.insert =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ProductService/Insert',
      request,
      metadata || {},
      methodDescriptor_ProductService_Insert);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Product,
 *   !proto.Product>}
 */
const methodDescriptor_ProductService_Update = new grpc.web.MethodDescriptor(
  '/ProductService/Update',
  grpc.web.MethodType.UNARY,
  proto.Product,
  proto.Product,
  /**
   * @param {!proto.Product} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Product.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Product,
 *   !proto.Product>}
 */
const methodInfo_ProductService_Update = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Product,
  /**
   * @param {!proto.Product} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Product.deserializeBinary
);


/**
 * @param {!proto.Product} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Product)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Product>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ProductServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ProductService/Update',
      request,
      metadata || {},
      methodDescriptor_ProductService_Update,
      callback);
};


/**
 * @param {!proto.Product} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Product>}
 *     Promise that resolves to the response
 */
proto.ProductServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ProductService/Update',
      request,
      metadata || {},
      methodDescriptor_ProductService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ProductRequestId,
 *   !proto.Empty>}
 */
const methodDescriptor_ProductService_Remove = new grpc.web.MethodDescriptor(
  '/ProductService/Remove',
  grpc.web.MethodType.UNARY,
  proto.ProductRequestId,
  proto.Empty,
  /**
   * @param {!proto.ProductRequestId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ProductRequestId,
 *   !proto.Empty>}
 */
const methodInfo_ProductService_Remove = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Empty,
  /**
   * @param {!proto.ProductRequestId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Empty.deserializeBinary
);


/**
 * @param {!proto.ProductRequestId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ProductServiceClient.prototype.remove =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ProductService/Remove',
      request,
      metadata || {},
      methodDescriptor_ProductService_Remove,
      callback);
};


/**
 * @param {!proto.ProductRequestId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Empty>}
 *     Promise that resolves to the response
 */
proto.ProductServicePromiseClient.prototype.remove =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ProductService/Remove',
      request,
      metadata || {},
      methodDescriptor_ProductService_Remove);
};


module.exports = proto;

