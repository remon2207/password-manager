import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Message = {
  __typename?: 'Message';
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  pwDeleter: Message;
  pwRegister: Message;
  pwUpdater: Message;
  serverRegister: Message;
  userDeleter: Message;
  userRegister: Message;
};


export type MutationPwDeleterArgs = {
  id: Scalars['Int'];
};


export type MutationPwRegisterArgs = {
  pw: NewPwInfoInput;
};


export type MutationPwUpdaterArgs = {
  pw: UpdatePwInfoInput;
};


export type MutationServerRegisterArgs = {
  server: NewServerInput;
};


export type MutationUserDeleterArgs = {
  id: Scalars['Int'];
};


export type MutationUserRegisterArgs = {
  user: NewUserInput;
};

export type NewPwInfoInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  secret: Scalars['String'];
  service: Scalars['String'];
  twoFactor: Scalars['Boolean'];
  userId: Scalars['Int'];
};

export type NewServerInput = {
  device: Scalars['String'];
  hostname: Scalars['String'];
  ip: Scalars['String'];
  password: Scalars['String'];
  port: Scalars['Int'];
  url: Scalars['String'];
  usage: Scalars['String'];
  userId: Scalars['Int'];
  username: Scalars['String'];
};

export type NewUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
};

export type PwInfo = {
  __typename?: 'PwInfo';
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  password: Scalars['String'];
  secret: Scalars['String'];
  service: Scalars['String'];
  twoFactor: Scalars['Boolean'];
  userId: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  getPw: PwInfo;
  getPws: Array<Maybe<PwInfo>>;
  getServer: Server;
  getServers: Array<Maybe<Server>>;
  getUser: User;
  getUserId: User;
  getUsers: Array<Maybe<User>>;
};


export type QueryGetPwArgs = {
  id: Scalars['Int'];
};


export type QueryGetPwsArgs = {
  userId: Scalars['Int'];
};


export type QueryGetServerArgs = {
  id: Scalars['Int'];
};


export type QueryGetServersArgs = {
  userId: Scalars['Int'];
};


export type QueryGetUserArgs = {
  id: Scalars['Int'];
};


export type QueryGetUserIdArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
};

export type Server = {
  __typename?: 'Server';
  device: Scalars['String'];
  hostname: Scalars['String'];
  id: Scalars['Int'];
  ip: Scalars['String'];
  password: Scalars['String'];
  port: Scalars['Int'];
  url: Scalars['String'];
  usage: Scalars['String'];
  userId: Scalars['Int'];
  username: Scalars['String'];
};

export type UpdatePwInfoInput = {
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  password: Scalars['String'];
  secret: Scalars['String'];
  service: Scalars['String'];
  twoFactor: Scalars['Boolean'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Message: ResolverTypeWrapper<Message>;
  Mutation: ResolverTypeWrapper<{}>;
  NewPwInfoInput: NewPwInfoInput;
  NewServerInput: NewServerInput;
  NewUserInput: NewUserInput;
  PwInfo: ResolverTypeWrapper<PwInfo>;
  Query: ResolverTypeWrapper<{}>;
  Server: ResolverTypeWrapper<Server>;
  String: ResolverTypeWrapper<Scalars['String']>;
  UpdatePwInfoInput: UpdatePwInfoInput;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Int: Scalars['Int'];
  Message: Message;
  Mutation: {};
  NewPwInfoInput: NewPwInfoInput;
  NewServerInput: NewServerInput;
  NewUserInput: NewUserInput;
  PwInfo: PwInfo;
  Query: {};
  Server: Server;
  String: Scalars['String'];
  UpdatePwInfoInput: UpdatePwInfoInput;
  User: User;
};

export type MessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  pwDeleter?: Resolver<ResolversTypes['Message'], ParentType, ContextType, RequireFields<MutationPwDeleterArgs, 'id'>>;
  pwRegister?: Resolver<ResolversTypes['Message'], ParentType, ContextType, RequireFields<MutationPwRegisterArgs, 'pw'>>;
  pwUpdater?: Resolver<ResolversTypes['Message'], ParentType, ContextType, RequireFields<MutationPwUpdaterArgs, 'pw'>>;
  serverRegister?: Resolver<ResolversTypes['Message'], ParentType, ContextType, RequireFields<MutationServerRegisterArgs, 'server'>>;
  userDeleter?: Resolver<ResolversTypes['Message'], ParentType, ContextType, RequireFields<MutationUserDeleterArgs, 'id'>>;
  userRegister?: Resolver<ResolversTypes['Message'], ParentType, ContextType, RequireFields<MutationUserRegisterArgs, 'user'>>;
};

export type PwInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PwInfo'] = ResolversParentTypes['PwInfo']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  secret?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  service?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  twoFactor?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getPw?: Resolver<ResolversTypes['PwInfo'], ParentType, ContextType, RequireFields<QueryGetPwArgs, 'id'>>;
  getPws?: Resolver<Array<Maybe<ResolversTypes['PwInfo']>>, ParentType, ContextType, RequireFields<QueryGetPwsArgs, 'userId'>>;
  getServer?: Resolver<ResolversTypes['Server'], ParentType, ContextType, RequireFields<QueryGetServerArgs, 'id'>>;
  getServers?: Resolver<Array<Maybe<ResolversTypes['Server']>>, ParentType, ContextType, RequireFields<QueryGetServersArgs, 'userId'>>;
  getUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryGetUserArgs, 'id'>>;
  getUserId?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryGetUserIdArgs, 'email' | 'name'>>;
  getUsers?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType>;
};

export type ServerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Server'] = ResolversParentTypes['Server']> = {
  device?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hostname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ip?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  port?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  usage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Message?: MessageResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PwInfo?: PwInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Server?: ServerResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

