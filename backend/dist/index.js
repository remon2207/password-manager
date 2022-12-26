/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! dotenv/config */ \"dotenv/config\");\nvar http_1 = __importDefault(__webpack_require__(/*! http */ \"http\"));\nvar server_1 = __webpack_require__(/*! @apollo/server */ \"@apollo/server\");\nvar express4_1 = __webpack_require__(/*! @apollo/server/express4 */ \"@apollo/server/express4\");\nvar drainHttpServer_1 = __webpack_require__(/*! @apollo/server/plugin/drainHttpServer */ \"@apollo/server/plugin/drainHttpServer\");\nvar cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar resolvers_1 = __webpack_require__(/*! resolvers */ \"./src/resolvers.ts\");\nvar schema_1 = __webpack_require__(/*! schema */ \"./src/schema.ts\");\nvar app = (0, express_1.default)();\nvar httpServer = http_1.default.createServer(app);\nvar _a = process.env, nodeEnv = \"development\", url = _a.ORIGIN_URL, port = _a.PORT;\nvar origin = url;\nvar server = new server_1.ApolloServer({\n    typeDefs: schema_1.typeDefs,\n    resolvers: resolvers_1.resolvers,\n    plugins: [(0, drainHttpServer_1.ApolloServerPluginDrainHttpServer)({ httpServer: httpServer })]\n});\nvar startServer = function () { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, server.start()];\n            case 1:\n                _a.sent();\n                app.use('/graphql', (0, cors_1.default)({ origin: origin }), express_1.default.json(), (0, express4_1.expressMiddleware)(server));\n                httpServer.listen({ port: port });\n                return [2 /*return*/];\n        }\n    });\n}); };\nif (nodeEnv === 'development') {\n    startServer().finally(function () {\n        // eslint-disable-next-line no-console\n        return console.log('🚀  Server ready at: http://localhost:4000/graphql');\n    });\n}\nif (nodeEnv === 'production') {\n    startServer().finally(function () { });\n}\n\n\n//# sourceURL=webpack://nodejs-template/./src/index.ts?");

/***/ }),

/***/ "./src/resolvers.ts":
/*!**************************!*\
  !*** ./src/resolvers.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.resolvers = void 0;\nvar index_1 = __webpack_require__(/*! resolvers/index */ \"./src/resolvers/index.ts\");\nexports.resolvers = {\n    Query: index_1.query,\n    Mutation: index_1.mutation\n};\n\n\n//# sourceURL=webpack://nodejs-template/./src/resolvers.ts?");

/***/ }),

/***/ "./src/resolvers/index.ts":
/*!********************************!*\
  !*** ./src/resolvers/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.deleteUser = exports.addUser = exports.getUserId = exports.getUser = exports.getUsers = exports.deletePw = exports.pwUpdate = exports.addPw = exports.getPw = exports.getPws = exports.mutation = exports.query = void 0;\nvar query_1 = __webpack_require__(/*! ./query */ \"./src/resolvers/query.ts\");\nObject.defineProperty(exports, \"query\", ({ enumerable: true, get: function () { return query_1.query; } }));\nvar mutation_1 = __webpack_require__(/*! ./mutation */ \"./src/resolvers/mutation.ts\");\nObject.defineProperty(exports, \"mutation\", ({ enumerable: true, get: function () { return mutation_1.mutation; } }));\nvar pw_1 = __webpack_require__(/*! ./pw */ \"./src/resolvers/pw.ts\");\nObject.defineProperty(exports, \"getPws\", ({ enumerable: true, get: function () { return pw_1.getPws; } }));\nObject.defineProperty(exports, \"getPw\", ({ enumerable: true, get: function () { return pw_1.getPw; } }));\nObject.defineProperty(exports, \"addPw\", ({ enumerable: true, get: function () { return pw_1.addPw; } }));\nObject.defineProperty(exports, \"pwUpdate\", ({ enumerable: true, get: function () { return pw_1.pwUpdate; } }));\nObject.defineProperty(exports, \"deletePw\", ({ enumerable: true, get: function () { return pw_1.deletePw; } }));\nvar user_1 = __webpack_require__(/*! ./user */ \"./src/resolvers/user.ts\");\nObject.defineProperty(exports, \"getUsers\", ({ enumerable: true, get: function () { return user_1.getUsers; } }));\nObject.defineProperty(exports, \"getUser\", ({ enumerable: true, get: function () { return user_1.getUser; } }));\nObject.defineProperty(exports, \"getUserId\", ({ enumerable: true, get: function () { return user_1.getUserId; } }));\nObject.defineProperty(exports, \"addUser\", ({ enumerable: true, get: function () { return user_1.addUser; } }));\nObject.defineProperty(exports, \"deleteUser\", ({ enumerable: true, get: function () { return user_1.deleteUser; } }));\n\n\n//# sourceURL=webpack://nodejs-template/./src/resolvers/index.ts?");

/***/ }),

/***/ "./src/resolvers/mutation.ts":
/*!***********************************!*\
  !*** ./src/resolvers/mutation.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.mutation = void 0;\nvar pw_1 = __webpack_require__(/*! ./pw */ \"./src/resolvers/pw.ts\");\nvar server_1 = __webpack_require__(/*! ./server */ \"./src/resolvers/server.ts\");\nvar user_1 = __webpack_require__(/*! ./user */ \"./src/resolvers/user.ts\");\nexports.mutation = {\n    userRegister: function (_, _a) {\n        var user = _a.user;\n        return (0, user_1.addUser)(user.name, user.email);\n    },\n    userDeleter: function (_, _a) {\n        var id = _a.id;\n        return (0, user_1.deleteUser)(id);\n    },\n    pwRegister: function (_, _a) {\n        var pw = _a.pw;\n        return (0, pw_1.addPw)(pw.userId, pw.service, pw.email, pw.name, pw.password, pw.twoFactor, pw.secret);\n    },\n    notHashedPwRegister: function (_, _a) {\n        var pw = _a.pw;\n        return (0, pw_1.AddNotHashedPw)(pw.userId, pw.service, pw.email, pw.name, pw.password, pw.twoFactor, pw.secret);\n    },\n    pwUpdater: function (_, _a) {\n        var pw = _a.pw;\n        return (0, pw_1.pwUpdate)(pw.id, pw.service, pw.email, pw.name, pw.password, pw.twoFactor, pw.secret);\n    },\n    pwDeleter: function (_, _a) {\n        var id = _a.id;\n        return (0, pw_1.deletePw)(id);\n    },\n    serverRegister: function (_, _a) {\n        var server = _a.server;\n        return (0, server_1.addServer)(server.userId, server.usage, server.hostname, server.ip, server.username, server.password, server.device, server.port, server.url);\n    },\n    serverUpdater: function (_, _a) {\n        var server = _a.server;\n        return (0, server_1.serverUpdate)(server.id, server.usage, server.hostname, server.ip, server.username, server.password, server.device, server.port, server.url);\n    },\n    serverDeleter: function (_, _a) {\n        var id = _a.id;\n        return (0, server_1.serverDelete)(id);\n    }\n};\n\n\n//# sourceURL=webpack://nodejs-template/./src/resolvers/mutation.ts?");

/***/ }),

/***/ "./src/resolvers/pw.ts":
/*!*****************************!*\
  !*** ./src/resolvers/pw.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.deletePw = exports.pwUpdate = exports.AddNotHashedPw = exports.addPw = exports.getPw = exports.getPws = void 0;\nvar client_1 = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\nvar bcrypt_1 = __importDefault(__webpack_require__(/*! bcrypt */ \"bcrypt\"));\nvar graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\nvar validator_1 = __importDefault(__webpack_require__(/*! validator */ \"validator\"));\nvar prisma = new client_1.PrismaClient();\nvar getPws = function (userId) { return __awaiter(void 0, void 0, void 0, function () {\n    var pws;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, prisma.password.findMany({\n                    where: {\n                        userId: userId\n                    },\n                    orderBy: [\n                        {\n                            service: 'asc'\n                        },\n                        {\n                            email: 'asc'\n                        },\n                        {\n                            name: 'asc'\n                        },\n                        {\n                            password: 'asc'\n                        }\n                    ]\n                })];\n            case 1:\n                pws = _a.sent();\n                return [2 /*return*/, pws];\n        }\n    });\n}); };\nexports.getPws = getPws;\nvar getPw = function (id) { return __awaiter(void 0, void 0, void 0, function () {\n    var pw;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, prisma.password.findFirst({\n                    where: {\n                        id: id\n                    }\n                })];\n            case 1:\n                pw = _a.sent();\n                if (!pw) {\n                    throw new graphql_1.GraphQLError('Password info not found');\n                }\n                return [2 /*return*/, pw];\n        }\n    });\n}); };\nexports.getPw = getPw;\nvar addPw = function (userId, service, email, name, password, twoFactor, secret) { return __awaiter(void 0, void 0, void 0, function () {\n    var isEmptyService, isEmptyEmail, isEmptyPw, isEmail, createPwInfo, hashPw;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                isEmptyService = validator_1.default.isEmpty(service, { ignore_whitespace: true });\n                isEmptyEmail = validator_1.default.isEmpty(email, { ignore_whitespace: true });\n                isEmptyPw = validator_1.default.isEmpty(password, { ignore_whitespace: true });\n                isEmail = validator_1.default.isEmail(email);\n                createPwInfo = function (pw) { return __awaiter(void 0, void 0, void 0, function () {\n                    var message;\n                    return __generator(this, function (_a) {\n                        switch (_a.label) {\n                            case 0:\n                                message = {\n                                    message: 'Created Password info successfully'\n                                };\n                                return [4 /*yield*/, prisma.password.create({\n                                        data: {\n                                            userId: userId,\n                                            service: service,\n                                            email: email,\n                                            name: name,\n                                            password: pw,\n                                            twoFactor: twoFactor,\n                                            secret: secret\n                                        }\n                                    })];\n                            case 1:\n                                _a.sent();\n                                return [2 /*return*/, message];\n                        }\n                    });\n                }); };\n                if (isEmptyService) {\n                    throw new graphql_1.GraphQLError('Should input service name');\n                }\n                if (isEmptyEmail && isEmptyPw) {\n                    return [2 /*return*/, createPwInfo(password)];\n                }\n                return [4 /*yield*/, bcrypt_1.default.hash(password, 10)];\n            case 1:\n                hashPw = _a.sent();\n                if (isEmptyEmail && !isEmptyPw) {\n                    return [2 /*return*/, createPwInfo(hashPw)];\n                }\n                if (isEmail && isEmptyPw) {\n                    return [2 /*return*/, createPwInfo(password)];\n                }\n                if (isEmail && !isEmptyPw) {\n                    return [2 /*return*/, createPwInfo(hashPw)];\n                }\n                throw new graphql_1.GraphQLError('Not email');\n        }\n    });\n}); };\nexports.addPw = addPw;\nvar AddNotHashedPw = function (userId, service, email, name, password, twoFactor, secret) { return __awaiter(void 0, void 0, void 0, function () {\n    var isEmptyService, isEmptyEmail, isEmail, createPwInfo;\n    return __generator(this, function (_a) {\n        isEmptyService = validator_1.default.isEmpty(service, { ignore_whitespace: true });\n        isEmptyEmail = validator_1.default.isEmpty(email, { ignore_whitespace: true });\n        isEmail = validator_1.default.isEmail(email);\n        createPwInfo = function () { return __awaiter(void 0, void 0, void 0, function () {\n            var message;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        message = {\n                            message: 'Created Password info successfully'\n                        };\n                        return [4 /*yield*/, prisma.password.create({\n                                data: {\n                                    userId: userId,\n                                    service: service,\n                                    email: email,\n                                    name: name,\n                                    password: password,\n                                    twoFactor: twoFactor,\n                                    secret: secret\n                                }\n                            })];\n                    case 1:\n                        _a.sent();\n                        return [2 /*return*/, message];\n                }\n            });\n        }); };\n        if (isEmptyService) {\n            throw new graphql_1.GraphQLError('Should input service name');\n        }\n        if (isEmptyEmail) {\n            return [2 /*return*/, createPwInfo()];\n        }\n        if (isEmail) {\n            return [2 /*return*/, createPwInfo()];\n        }\n        throw new graphql_1.GraphQLError('Not email');\n    });\n}); };\nexports.AddNotHashedPw = AddNotHashedPw;\nvar pwUpdate = function (id, service, email, name, password, twoFactor, secret) { return __awaiter(void 0, void 0, void 0, function () {\n    var isEmptyService, isEmptyEmail, isEmail, message;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                isEmptyService = validator_1.default.isEmpty(service, { ignore_whitespace: true });\n                isEmptyEmail = validator_1.default.isEmpty(email, { ignore_whitespace: true });\n                isEmail = validator_1.default.isEmail(email);\n                if (isEmptyService) {\n                    throw new graphql_1.GraphQLError('Should input service name');\n                }\n                if (!(isEmptyEmail || isEmail)) return [3 /*break*/, 2];\n                message = {\n                    message: 'Updated password info successfully'\n                };\n                return [4 /*yield*/, prisma.password.update({\n                        where: {\n                            id: id\n                        },\n                        data: {\n                            service: service,\n                            email: email,\n                            name: name,\n                            password: password,\n                            twoFactor: twoFactor,\n                            secret: secret\n                        }\n                    })];\n            case 1:\n                _a.sent();\n                return [2 /*return*/, message];\n            case 2: throw new graphql_1.GraphQLError('Not email');\n        }\n    });\n}); };\nexports.pwUpdate = pwUpdate;\nvar deletePw = function (id) { return __awaiter(void 0, void 0, void 0, function () {\n    var message, e_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                message = {\n                    message: 'Deleted password info successfully'\n                };\n                return [4 /*yield*/, prisma.password.delete({\n                        where: {\n                            id: id\n                        }\n                    })];\n            case 1:\n                _a.sent();\n                return [2 /*return*/, message];\n            case 2:\n                e_1 = _a.sent();\n                throw new graphql_1.GraphQLError('Password info not found');\n            case 3: return [2 /*return*/];\n        }\n    });\n}); };\nexports.deletePw = deletePw;\n\n\n//# sourceURL=webpack://nodejs-template/./src/resolvers/pw.ts?");

/***/ }),

/***/ "./src/resolvers/query.ts":
/*!********************************!*\
  !*** ./src/resolvers/query.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.query = void 0;\nvar pw_1 = __webpack_require__(/*! ./pw */ \"./src/resolvers/pw.ts\");\nvar server_1 = __webpack_require__(/*! ./server */ \"./src/resolvers/server.ts\");\nvar user_1 = __webpack_require__(/*! ./user */ \"./src/resolvers/user.ts\");\nexports.query = {\n    getUsers: function () { return (0, user_1.getUsers)(); },\n    getUser: function (_, _a) {\n        var id = _a.id;\n        return (0, user_1.getUser)(id);\n    },\n    getUserId: function (_, _a) {\n        var name = _a.name, email = _a.email;\n        return (0, user_1.getUserId)(name, email);\n    },\n    getPws: function (_, _a) {\n        var userId = _a.userId;\n        return (0, pw_1.getPws)(userId);\n    },\n    getPw: function (_, _a) {\n        var id = _a.id;\n        return (0, pw_1.getPw)(id);\n    },\n    getServers: function (_, _a) {\n        var userId = _a.userId;\n        return (0, server_1.getServers)(userId);\n    },\n    getServer: function (_, _a) {\n        var id = _a.id;\n        return (0, server_1.getServer)(id);\n    }\n};\n\n\n//# sourceURL=webpack://nodejs-template/./src/resolvers/query.ts?");

/***/ }),

/***/ "./src/resolvers/server.ts":
/*!*********************************!*\
  !*** ./src/resolvers/server.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.serverDelete = exports.serverUpdate = exports.addServer = exports.getServer = exports.getServers = void 0;\nvar client_1 = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\nvar graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\nvar prisma = new client_1.PrismaClient();\nvar getServers = function (userId) { return __awaiter(void 0, void 0, void 0, function () {\n    var servers;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, prisma.server.findMany({\n                    where: {\n                        userId: userId\n                    },\n                    orderBy: [\n                        {\n                            usage: 'asc'\n                        },\n                        {\n                            hostname: 'asc'\n                        },\n                        {\n                            username: 'asc'\n                        },\n                        {\n                            password: 'asc'\n                        }\n                    ]\n                })];\n            case 1:\n                servers = _a.sent();\n                return [2 /*return*/, servers];\n        }\n    });\n}); };\nexports.getServers = getServers;\nvar getServer = function (id) { return __awaiter(void 0, void 0, void 0, function () {\n    var server;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, prisma.server.findFirst({\n                    where: {\n                        id: id\n                    }\n                })];\n            case 1:\n                server = _a.sent();\n                if (!server) {\n                    throw new graphql_1.GraphQLError('Server not found');\n                }\n                return [2 /*return*/, server];\n        }\n    });\n}); };\nexports.getServer = getServer;\nvar addServer = function (userId, usage, hostname, ip, username, password, device, port, url) { return __awaiter(void 0, void 0, void 0, function () {\n    var message;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                message = {\n                    message: 'Created server successfully'\n                };\n                return [4 /*yield*/, prisma.server.create({\n                        data: {\n                            userId: userId,\n                            usage: usage,\n                            hostname: hostname,\n                            ip: ip,\n                            username: username,\n                            password: password,\n                            device: device,\n                            port: port,\n                            url: url\n                        }\n                    })];\n            case 1:\n                _a.sent();\n                return [2 /*return*/, message];\n        }\n    });\n}); };\nexports.addServer = addServer;\nvar serverUpdate = function (id, usage, hostname, ip, username, password, device, port) { return __awaiter(void 0, void 0, void 0, function () {\n    var message;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                message = {\n                    message: 'Updated server successfully'\n                };\n                return [4 /*yield*/, prisma.server.update({\n                        where: {\n                            id: id\n                        },\n                        data: {\n                            usage: usage,\n                            hostname: hostname,\n                            ip: ip,\n                            username: username,\n                            password: password,\n                            device: device,\n                            port: port\n                        }\n                    })];\n            case 1:\n                _a.sent();\n                return [2 /*return*/, message];\n        }\n    });\n}); };\nexports.serverUpdate = serverUpdate;\nvar serverDelete = function (id) { return __awaiter(void 0, void 0, void 0, function () {\n    var message;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                message = {\n                    message: 'Deleted server successfully'\n                };\n                return [4 /*yield*/, prisma.server.delete({\n                        where: {\n                            id: id\n                        }\n                    })];\n            case 1:\n                _a.sent();\n                return [2 /*return*/, message];\n        }\n    });\n}); };\nexports.serverDelete = serverDelete;\n\n\n//# sourceURL=webpack://nodejs-template/./src/resolvers/server.ts?");

/***/ }),

/***/ "./src/resolvers/user.ts":
/*!*******************************!*\
  !*** ./src/resolvers/user.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.deleteUser = exports.addUser = exports.getUserId = exports.getUser = exports.getUsers = void 0;\nvar client_1 = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\nvar graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\nvar validator_1 = __importDefault(__webpack_require__(/*! validator */ \"validator\"));\nvar prisma = new client_1.PrismaClient();\nvar getUsers = function () { return __awaiter(void 0, void 0, void 0, function () {\n    var users;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, prisma.user.findMany()];\n            case 1:\n                users = _a.sent();\n                return [2 /*return*/, users];\n        }\n    });\n}); };\nexports.getUsers = getUsers;\nvar getUser = function (id) { return __awaiter(void 0, void 0, void 0, function () {\n    var user;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, prisma.user.findUnique({\n                    where: {\n                        id: id\n                    }\n                })];\n            case 1:\n                user = _a.sent();\n                if (!user) {\n                    throw new graphql_1.GraphQLError('Account not found');\n                }\n                return [2 /*return*/, user];\n        }\n    });\n}); };\nexports.getUser = getUser;\nvar getUserId = function (name, email) { return __awaiter(void 0, void 0, void 0, function () {\n    var userId, e_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                return [4 /*yield*/, prisma.user.findFirstOrThrow({\n                        where: {\n                            name: name,\n                            email: email\n                        }\n                    })];\n            case 1:\n                userId = _a.sent();\n                return [2 /*return*/, userId];\n            case 2:\n                e_1 = _a.sent();\n                throw new graphql_1.GraphQLError('Account not found');\n            case 3: return [2 /*return*/];\n        }\n    });\n}); };\nexports.getUserId = getUserId;\nvar addUser = function (name, email) { return __awaiter(void 0, void 0, void 0, function () {\n    var isEmptyName, isEmptyEmail, isEmail, isUserExists, message;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                isEmptyName = validator_1.default.isEmpty(name, { ignore_whitespace: true });\n                isEmptyEmail = validator_1.default.isEmpty(email, { ignore_whitespace: true });\n                isEmail = validator_1.default.isEmail(email);\n                if (isEmptyName) {\n                    throw new graphql_1.GraphQLError('Name not found');\n                }\n                if (isEmptyEmail) {\n                    throw new graphql_1.GraphQLError('Email not found');\n                }\n                if (!isEmail) return [3 /*break*/, 5];\n                return [4 /*yield*/, prisma.user.findFirst({\n                        where: {\n                            name: name,\n                            email: email\n                        }\n                    })];\n            case 1:\n                isUserExists = _a.sent();\n                if (!isUserExists) return [3 /*break*/, 2];\n                throw new graphql_1.GraphQLError('Account is already registed');\n            case 2:\n                message = {\n                    message: 'Created account successfully'\n                };\n                return [4 /*yield*/, prisma.user.create({\n                        data: {\n                            name: name,\n                            email: email\n                        }\n                    })];\n            case 3:\n                _a.sent();\n                return [2 /*return*/, message];\n            case 4: return [3 /*break*/, 6];\n            case 5: throw new graphql_1.GraphQLError('Not email');\n            case 6: return [2 /*return*/];\n        }\n    });\n}); };\nexports.addUser = addUser;\nvar deleteUser = function (id) { return __awaiter(void 0, void 0, void 0, function () {\n    var message, deletePws, deleteServers, deleteUser, e_2;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                message = {\n                    message: 'Deleted account successfully'\n                };\n                deletePws = prisma.password.deleteMany({\n                    where: {\n                        userId: id\n                    }\n                });\n                deleteServers = prisma.server.deleteMany({\n                    where: {\n                        userId: id\n                    }\n                });\n                deleteUser = prisma.user.delete({\n                    where: {\n                        id: id\n                    }\n                });\n                _a.label = 1;\n            case 1:\n                _a.trys.push([1, 3, , 4]);\n                return [4 /*yield*/, prisma.$transaction([deletePws, deleteServers, deleteUser])];\n            case 2:\n                _a.sent();\n                return [3 /*break*/, 4];\n            case 3:\n                e_2 = _a.sent();\n                throw new graphql_1.GraphQLError('Account not found');\n            case 4: return [2 /*return*/, message];\n        }\n    });\n}); };\nexports.deleteUser = deleteUser;\n\n\n//# sourceURL=webpack://nodejs-template/./src/resolvers/user.ts?");

/***/ }),

/***/ "./src/schema.ts":
/*!***********************!*\
  !*** ./src/schema.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.typeDefs = void 0;\nexports.typeDefs = \"#graphql\\n  type Query {\\n    getUsers: [User]!\\n    getUser(id: Int!): User!\\n    getUserId(name: String!, email: String!): User!\\n    getPws(userId: Int!): [PwInfo]!\\n    getPw(id: Int!): PwInfo!\\n    getServers(userId: Int!): [Server]!\\n    getServer(id: Int!): Server!\\n  }\\n\\n  type Mutation {\\n    userRegister(user: NewUserInput!): Message!\\n    userDeleter(id: Int!): Message!\\n    pwRegister(pw: NewPwInfoInput!): Message!\\n    notHashedPwRegister(pw: NewPwInfoNotHashedInput!): Message!\\n    pwUpdater(pw: UpdatePwInfoInput!): Message!\\n    pwDeleter(id: Int!): Message!\\n    serverRegister(server: NewServerInput!): Message!\\n    serverUpdater(server: UpdateServerInput!): Message!\\n    serverDeleter(id: Int!): Message!\\n  }\\n\\n  type Message {\\n    message: String!\\n  }\\n\\n  type User {\\n    id: Int!\\n    name: String!\\n    email: String!\\n  }\\n\\n  type PwInfo {\\n    id: Int!\\n    userId: Int!\\n    service: String!\\n    email: String!\\n    name: String!\\n    password: String!\\n    twoFactor: Boolean!\\n    secret: String!\\n  }\\n\\n  type Server {\\n    id: Int!\\n    userId: Int!\\n    usage: String!\\n    hostname: String!\\n    ip: String!\\n    username: String!\\n    password: String!\\n    device: String!\\n    port: Int!\\n    url: String!\\n  }\\n\\n  input NewUserInput {\\n    name: String!\\n    email: String!\\n  }\\n\\n  input NewPwInfoInput {\\n    userId: Int!\\n    service: String!\\n    email: String!\\n    name: String!\\n    password: String!\\n    twoFactor: Boolean!\\n    secret: String!\\n  }\\n\\n  input NewPwInfoNotHashedInput {\\n    userId: Int!\\n    service: String!\\n    email: String!\\n    name: String!\\n    password: String!\\n    twoFactor: Boolean!\\n    secret: String!\\n  }\\n\\n  input NewServerInput {\\n    userId: Int!\\n    usage: String!\\n    hostname: String!\\n    ip: String!\\n    username: String!\\n    password: String!\\n    device: String!\\n    port: Int!\\n    url: String!\\n  }\\n\\n  input UpdatePwInfoInput {\\n    id: Int!\\n    service: String!\\n    email: String!\\n    name: String!\\n    password: String!\\n    twoFactor: Boolean!\\n    secret: String!\\n  }\\n\\n  input UpdateServerInput {\\n    id: Int!\\n    usage: String!\\n    hostname: String!\\n    ip: String!\\n    username: String!\\n    password: String!\\n    device: String!\\n    port: Int!\\n    url: String!\\n  }\\n\";\n\n\n//# sourceURL=webpack://nodejs-template/./src/schema.ts?");

/***/ }),

/***/ "@apollo/server":
/*!*********************************!*\
  !*** external "@apollo/server" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/server");

/***/ }),

/***/ "@apollo/server/express4":
/*!******************************************!*\
  !*** external "@apollo/server/express4" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@apollo/server/express4");

/***/ }),

/***/ "@apollo/server/plugin/drainHttpServer":
/*!********************************************************!*\
  !*** external "@apollo/server/plugin/drainHttpServer" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@apollo/server/plugin/drainHttpServer");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("dotenv/config");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("graphql");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("validator");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;