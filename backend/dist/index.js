(()=>{"use strict";var e={607:function(e,r,t){var n=this&&this.__awaiter||function(e,r,t,n){return new(t||(t=Promise))((function(i,s){function a(e){try{u(n.next(e))}catch(e){s(e)}}function o(e){try{u(n.throw(e))}catch(e){s(e)}}function u(e){var r;e.done?i(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(a,o)}u((n=n.apply(e,r||[])).next())}))},i=this&&this.__generator||function(e,r){var t,n,i,s,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(s){return function(o){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=r.call(e,a)}catch(e){s=[6,e],n=0}finally{t=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,o])}}},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),t(81);var a=s(t(685)),o=t(83),u=t(997),c=t(728),d=s(t(582)),l=s(t(860)),f=t(981),p=t(734),v=(0,l.default)(),w=a.default.createServer(v),h=process.env,g=h.ORIGIN_URL,y=h.PORT,m=g,b=new o.ApolloServer({typeDefs:p.typeDefs,resolvers:f.resolvers,plugins:[(0,c.ApolloServerPluginDrainHttpServer)({httpServer:w})]});n(void 0,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,b.start()];case 1:return e.sent(),v.use("/graphql",(0,d.default)({origin:m}),l.default.json(),(0,u.expressMiddleware)(b)),w.listen({port:y}),[2]}}))})).finally((function(){}))},981:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.resolvers=void 0;var n=t(790);r.resolvers={Query:n.query,Mutation:n.mutation}},790:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.deleteUser=r.addUser=r.getUserId=r.getUser=r.getUsers=r.deletePw=r.pwUpdate=r.addPw=r.getPw=r.getPws=r.mutation=r.query=void 0;var n=t(30);Object.defineProperty(r,"query",{enumerable:!0,get:function(){return n.query}});var i=t(530);Object.defineProperty(r,"mutation",{enumerable:!0,get:function(){return i.mutation}});var s=t(442);Object.defineProperty(r,"getPws",{enumerable:!0,get:function(){return s.getPws}}),Object.defineProperty(r,"getPw",{enumerable:!0,get:function(){return s.getPw}}),Object.defineProperty(r,"addPw",{enumerable:!0,get:function(){return s.addPw}}),Object.defineProperty(r,"pwUpdate",{enumerable:!0,get:function(){return s.pwUpdate}}),Object.defineProperty(r,"deletePw",{enumerable:!0,get:function(){return s.deletePw}});var a=t(435);Object.defineProperty(r,"getUsers",{enumerable:!0,get:function(){return a.getUsers}}),Object.defineProperty(r,"getUser",{enumerable:!0,get:function(){return a.getUser}}),Object.defineProperty(r,"getUserId",{enumerable:!0,get:function(){return a.getUserId}}),Object.defineProperty(r,"addUser",{enumerable:!0,get:function(){return a.addUser}}),Object.defineProperty(r,"deleteUser",{enumerable:!0,get:function(){return a.deleteUser}})},530:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.mutation=void 0;var n=t(442),i=t(600),s=t(435);r.mutation={userRegister:function(e,r){var t=r.user;return(0,s.addUser)(t.name,t.email)},userDeleter:function(e,r){var t=r.id;return(0,s.deleteUser)(t)},pwRegister:function(e,r){var t=r.pw;return(0,n.addPw)(t.userId,t.service,t.email,t.name,t.password,t.twoFactor,t.secret)},notHashedPwRegister:function(e,r){var t=r.pw;return(0,n.AddNotHashedPw)(t.userId,t.service,t.email,t.name,t.password,t.twoFactor,t.secret)},pwUpdater:function(e,r){var t=r.pw;return(0,n.pwUpdate)(t.id,t.service,t.email,t.name,t.password,t.twoFactor,t.secret)},pwDeleter:function(e,r){var t=r.id;return(0,n.deletePw)(t)},serverRegister:function(e,r){var t=r.server;return(0,i.addServer)(t.userId,t.usage,t.hostname,t.ip,t.username,t.password,t.device,t.port,t.url)},serverUpdater:function(e,r){var t=r.server;return(0,i.serverUpdate)(t.id,t.usage,t.hostname,t.ip,t.username,t.password,t.device,t.port,t.url)},serverDeleter:function(e,r){var t=r.id;return(0,i.serverDelete)(t)}}},442:function(e,r,t){var n=this&&this.__awaiter||function(e,r,t,n){return new(t||(t=Promise))((function(i,s){function a(e){try{u(n.next(e))}catch(e){s(e)}}function o(e){try{u(n.throw(e))}catch(e){s(e)}}function u(e){var r;e.done?i(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(a,o)}u((n=n.apply(e,r||[])).next())}))},i=this&&this.__generator||function(e,r){var t,n,i,s,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(s){return function(o){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=r.call(e,a)}catch(e){s=[6,e],n=0}finally{t=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,o])}}},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.deletePw=r.pwUpdate=r.AddNotHashedPw=r.addPw=r.getPw=r.getPws=void 0;var a=t(524),o=s(t(96)),u=t(343),c=s(t(564)),d=new a.PrismaClient;r.getPws=function(e){return n(void 0,void 0,void 0,(function(){return i(this,(function(r){switch(r.label){case 0:return[4,d.password.findMany({where:{userId:e},orderBy:[{service:"asc"},{email:"asc"},{name:"asc"},{password:"asc"}]})];case 1:return[2,r.sent()]}}))}))},r.getPw=function(e){return n(void 0,void 0,void 0,(function(){var r;return i(this,(function(t){switch(t.label){case 0:return[4,d.password.findFirst({where:{id:e}})];case 1:if(!(r=t.sent()))throw new u.GraphQLError("Password info not found");return[2,r]}}))}))},r.addPw=function(e,r,t,s,a,l,f){return n(void 0,void 0,void 0,(function(){var p,v,w,h,g,y;return i(this,(function(m){switch(m.label){case 0:if(p=c.default.isEmpty(r,{ignore_whitespace:!0}),v=c.default.isEmpty(t,{ignore_whitespace:!0}),w=c.default.isEmpty(a,{ignore_whitespace:!0}),h=c.default.isEmail(t),g=function(a){return n(void 0,void 0,void 0,(function(){var n;return i(this,(function(i){switch(i.label){case 0:return n={message:"Created Password info successfully"},[4,d.password.create({data:{userId:e,service:r,email:t,name:s,password:a,twoFactor:l,secret:f}})];case 1:return i.sent(),[2,n]}}))}))},p)throw new u.GraphQLError("Should input service name");return v&&w?[2,g(a)]:[4,o.default.hash(a,10)];case 1:if(y=m.sent(),v&&!w)return[2,g(y)];if(h&&w)return[2,g(a)];if(h&&!w)return[2,g(y)];throw new u.GraphQLError("Not email")}}))}))},r.AddNotHashedPw=function(e,r,t,s,a,o,l){return n(void 0,void 0,void 0,(function(){var f,p,v,w;return i(this,(function(h){if(f=c.default.isEmpty(r,{ignore_whitespace:!0}),p=c.default.isEmpty(t,{ignore_whitespace:!0}),v=c.default.isEmail(t),w=function(){return n(void 0,void 0,void 0,(function(){var n;return i(this,(function(i){switch(i.label){case 0:return n={message:"Created Password info successfully"},[4,d.password.create({data:{userId:e,service:r,email:t,name:s,password:a,twoFactor:o,secret:l}})];case 1:return i.sent(),[2,n]}}))}))},f)throw new u.GraphQLError("Should input service name");if(p)return[2,w()];if(v)return[2,w()];throw new u.GraphQLError("Not email")}))}))},r.pwUpdate=function(e,r,t,s,a,o,l){return n(void 0,void 0,void 0,(function(){var n,f,p,v;return i(this,(function(i){switch(i.label){case 0:if(n=c.default.isEmpty(r,{ignore_whitespace:!0}),f=c.default.isEmpty(t,{ignore_whitespace:!0}),p=c.default.isEmail(t),n)throw new u.GraphQLError("Should input service name");return f||p?(v={message:"Updated password info successfully"},[4,d.password.update({where:{id:e},data:{service:r,email:t,name:s,password:a,twoFactor:o,secret:l}})]):[3,2];case 1:return i.sent(),[2,v];case 2:throw new u.GraphQLError("Not email")}}))}))},r.deletePw=function(e){return n(void 0,void 0,void 0,(function(){var r;return i(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),r={message:"Deleted password info successfully"},[4,d.password.delete({where:{id:e}})];case 1:return t.sent(),[2,r];case 2:throw t.sent(),new u.GraphQLError("Password info not found");case 3:return[2]}}))}))}},30:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.query=void 0;var n=t(442),i=t(600),s=t(435);r.query={getUsers:function(){return(0,s.getUsers)()},getUser:function(e,r){var t=r.id;return(0,s.getUser)(t)},getUserId:function(e,r){var t=r.name,n=r.email;return(0,s.getUserId)(t,n)},getPws:function(e,r){var t=r.userId;return(0,n.getPws)(t)},getPw:function(e,r){var t=r.id;return(0,n.getPw)(t)},getServers:function(e,r){var t=r.userId;return(0,i.getServers)(t)},getServer:function(e,r){var t=r.id;return(0,i.getServer)(t)}}},600:function(e,r,t){var n=this&&this.__awaiter||function(e,r,t,n){return new(t||(t=Promise))((function(i,s){function a(e){try{u(n.next(e))}catch(e){s(e)}}function o(e){try{u(n.throw(e))}catch(e){s(e)}}function u(e){var r;e.done?i(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(a,o)}u((n=n.apply(e,r||[])).next())}))},i=this&&this.__generator||function(e,r){var t,n,i,s,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(s){return function(o){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=r.call(e,a)}catch(e){s=[6,e],n=0}finally{t=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,o])}}};Object.defineProperty(r,"__esModule",{value:!0}),r.serverDelete=r.serverUpdate=r.addServer=r.getServer=r.getServers=void 0;var s=t(524),a=t(343),o=new s.PrismaClient;r.getServers=function(e){return n(void 0,void 0,void 0,(function(){return i(this,(function(r){switch(r.label){case 0:return[4,o.server.findMany({where:{userId:e},orderBy:[{usage:"asc"},{hostname:"asc"},{username:"asc"},{password:"asc"}]})];case 1:return[2,r.sent()]}}))}))},r.getServer=function(e){return n(void 0,void 0,void 0,(function(){var r;return i(this,(function(t){switch(t.label){case 0:return[4,o.server.findFirst({where:{id:e}})];case 1:if(!(r=t.sent()))throw new a.GraphQLError("Server not found");return[2,r]}}))}))},r.addServer=function(e,r,t,s,a,u,c,d,l){return n(void 0,void 0,void 0,(function(){var n;return i(this,(function(i){switch(i.label){case 0:return n={message:"Created server successfully"},[4,o.server.create({data:{userId:e,usage:r,hostname:t,ip:s,username:a,password:u,device:c,port:d,url:l}})];case 1:return i.sent(),[2,n]}}))}))},r.serverUpdate=function(e,r,t,s,a,u,c,d){return n(void 0,void 0,void 0,(function(){var n;return i(this,(function(i){switch(i.label){case 0:return n={message:"Updated server successfully"},[4,o.server.update({where:{id:e},data:{usage:r,hostname:t,ip:s,username:a,password:u,device:c,port:d}})];case 1:return i.sent(),[2,n]}}))}))},r.serverDelete=function(e){return n(void 0,void 0,void 0,(function(){var r;return i(this,(function(t){switch(t.label){case 0:return r={message:"Deleted server successfully"},[4,o.server.delete({where:{id:e}})];case 1:return t.sent(),[2,r]}}))}))}},435:function(e,r,t){var n=this&&this.__awaiter||function(e,r,t,n){return new(t||(t=Promise))((function(i,s){function a(e){try{u(n.next(e))}catch(e){s(e)}}function o(e){try{u(n.throw(e))}catch(e){s(e)}}function u(e){var r;e.done?i(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(a,o)}u((n=n.apply(e,r||[])).next())}))},i=this&&this.__generator||function(e,r){var t,n,i,s,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(s){return function(o){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=r.call(e,a)}catch(e){s=[6,e],n=0}finally{t=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,o])}}},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.deleteUser=r.addUser=r.getUserId=r.getUser=r.getUsers=void 0;var a=t(524),o=t(343),u=s(t(564)),c=new a.PrismaClient;r.getUsers=function(){return n(void 0,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,c.user.findMany()];case 1:return[2,e.sent()]}}))}))},r.getUser=function(e){return n(void 0,void 0,void 0,(function(){var r;return i(this,(function(t){switch(t.label){case 0:return[4,c.user.findUnique({where:{id:e}})];case 1:if(!(r=t.sent()))throw new o.GraphQLError("Account not found");return[2,r]}}))}))},r.getUserId=function(e,r){return n(void 0,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,c.user.findFirstOrThrow({where:{name:e,email:r}})];case 1:return[2,t.sent()];case 2:throw t.sent(),new o.GraphQLError("Account not found");case 3:return[2]}}))}))},r.addUser=function(e,r){return n(void 0,void 0,void 0,(function(){var t,n,s,a;return i(this,(function(i){switch(i.label){case 0:if(t=u.default.isEmpty(e,{ignore_whitespace:!0}),n=u.default.isEmpty(r,{ignore_whitespace:!0}),s=u.default.isEmail(r),t)throw new o.GraphQLError("Name not found");if(n)throw new o.GraphQLError("Email not found");return s?[4,c.user.findFirst({where:{name:e,email:r}})]:[3,5];case 1:if(!i.sent())return[3,2];throw new o.GraphQLError("Account is already registed");case 2:return a={message:"Created account successfully"},[4,c.user.create({data:{name:e,email:r}})];case 3:return i.sent(),[2,a];case 4:return[3,6];case 5:throw new o.GraphQLError("Not email");case 6:return[2]}}))}))},r.deleteUser=function(e){return n(void 0,void 0,void 0,(function(){var r,t,n,s;return i(this,(function(i){switch(i.label){case 0:r={message:"Deleted account successfully"},t=c.password.deleteMany({where:{userId:e}}),n=c.server.deleteMany({where:{userId:e}}),s=c.user.delete({where:{id:e}}),i.label=1;case 1:return i.trys.push([1,3,,4]),[4,c.$transaction([t,n,s])];case 2:return i.sent(),[3,4];case 3:throw i.sent(),new o.GraphQLError("Account not found");case 4:return[2,r]}}))}))}},734:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.typeDefs=void 0,r.typeDefs="#graphql\n  type Query {\n    getUsers: [User]!\n    getUser(id: Int!): User!\n    getUserId(name: String!, email: String!): User!\n    getPws(userId: Int!): [PwInfo]!\n    getPw(id: Int!): PwInfo!\n    getServers(userId: Int!): [Server]!\n    getServer(id: Int!): Server!\n  }\n\n  type Mutation {\n    userRegister(user: NewUserInput!): Message!\n    userDeleter(id: Int!): Message!\n    pwRegister(pw: NewPwInfoInput!): Message!\n    notHashedPwRegister(pw: NewPwInfoNotHashedInput!): Message!\n    pwUpdater(pw: UpdatePwInfoInput!): Message!\n    pwDeleter(id: Int!): Message!\n    serverRegister(server: NewServerInput!): Message!\n    serverUpdater(server: UpdateServerInput!): Message!\n    serverDeleter(id: Int!): Message!\n  }\n\n  type Message {\n    message: String!\n  }\n\n  type User {\n    id: Int!\n    name: String!\n    email: String!\n  }\n\n  type PwInfo {\n    id: Int!\n    userId: Int!\n    service: String!\n    email: String!\n    name: String!\n    password: String!\n    twoFactor: Boolean!\n    secret: String!\n  }\n\n  type Server {\n    id: Int!\n    userId: Int!\n    usage: String!\n    hostname: String!\n    ip: String!\n    username: String!\n    password: String!\n    device: String!\n    port: Int!\n    url: String!\n  }\n\n  input NewUserInput {\n    name: String!\n    email: String!\n  }\n\n  input NewPwInfoInput {\n    userId: Int!\n    service: String!\n    email: String!\n    name: String!\n    password: String!\n    twoFactor: Boolean!\n    secret: String!\n  }\n\n  input NewPwInfoNotHashedInput {\n    userId: Int!\n    service: String!\n    email: String!\n    name: String!\n    password: String!\n    twoFactor: Boolean!\n    secret: String!\n  }\n\n  input NewServerInput {\n    userId: Int!\n    usage: String!\n    hostname: String!\n    ip: String!\n    username: String!\n    password: String!\n    device: String!\n    port: Int!\n    url: String!\n  }\n\n  input UpdatePwInfoInput {\n    id: Int!\n    service: String!\n    email: String!\n    name: String!\n    password: String!\n    twoFactor: Boolean!\n    secret: String!\n  }\n\n  input UpdateServerInput {\n    id: Int!\n    usage: String!\n    hostname: String!\n    ip: String!\n    username: String!\n    password: String!\n    device: String!\n    port: Int!\n    url: String!\n  }\n"},83:e=>{e.exports=require("@apollo/server")},997:e=>{e.exports=require("@apollo/server/express4")},728:e=>{e.exports=require("@apollo/server/plugin/drainHttpServer")},524:e=>{e.exports=require("@prisma/client")},96:e=>{e.exports=require("bcrypt")},582:e=>{e.exports=require("cors")},81:e=>{e.exports=require("dotenv/config")},860:e=>{e.exports=require("express")},343:e=>{e.exports=require("graphql")},564:e=>{e.exports=require("validator")},685:e=>{e.exports=require("http")}},r={};!function t(n){var i=r[n];if(void 0!==i)return i.exports;var s=r[n]={exports:{}};return e[n].call(s.exports,s,s.exports,t),s.exports}(607)})();