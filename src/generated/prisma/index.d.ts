
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Venue
 * 
 */
export type Venue = $Result.DefaultSelection<Prisma.$VenuePayload>
/**
 * Model StaffAccount
 * 
 */
export type StaffAccount = $Result.DefaultSelection<Prisma.$StaffAccountPayload>
/**
 * Model Table
 * 
 */
export type Table = $Result.DefaultSelection<Prisma.$TablePayload>
/**
 * Model TableSession
 * 
 */
export type TableSession = $Result.DefaultSelection<Prisma.$TableSessionPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model MenuItem
 * 
 */
export type MenuItem = $Result.DefaultSelection<Prisma.$MenuItemPayload>
/**
 * Model Ingredient
 * 
 */
export type Ingredient = $Result.DefaultSelection<Prisma.$IngredientPayload>
/**
 * Model RecipeItem
 * 
 */
export type RecipeItem = $Result.DefaultSelection<Prisma.$RecipeItemPayload>
/**
 * Model AddOn
 * 
 */
export type AddOn = $Result.DefaultSelection<Prisma.$AddOnPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  MANAGER: 'MANAGER',
  CASHIER: 'CASHIER',
  WAITER: 'WAITER',
  BARISTA: 'BARISTA',
  INVENTORY: 'INVENTORY'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Venues
 * const venues = await prisma.venue.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Venues
   * const venues = await prisma.venue.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.venue`: Exposes CRUD operations for the **Venue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Venues
    * const venues = await prisma.venue.findMany()
    * ```
    */
  get venue(): Prisma.VenueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staffAccount`: Exposes CRUD operations for the **StaffAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StaffAccounts
    * const staffAccounts = await prisma.staffAccount.findMany()
    * ```
    */
  get staffAccount(): Prisma.StaffAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.table`: Exposes CRUD operations for the **Table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tables
    * const tables = await prisma.table.findMany()
    * ```
    */
  get table(): Prisma.TableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tableSession`: Exposes CRUD operations for the **TableSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TableSessions
    * const tableSessions = await prisma.tableSession.findMany()
    * ```
    */
  get tableSession(): Prisma.TableSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menuItem`: Exposes CRUD operations for the **MenuItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MenuItems
    * const menuItems = await prisma.menuItem.findMany()
    * ```
    */
  get menuItem(): Prisma.MenuItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingredient`: Exposes CRUD operations for the **Ingredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingredients
    * const ingredients = await prisma.ingredient.findMany()
    * ```
    */
  get ingredient(): Prisma.IngredientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipeItem`: Exposes CRUD operations for the **RecipeItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecipeItems
    * const recipeItems = await prisma.recipeItem.findMany()
    * ```
    */
  get recipeItem(): Prisma.RecipeItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.addOn`: Exposes CRUD operations for the **AddOn** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AddOns
    * const addOns = await prisma.addOn.findMany()
    * ```
    */
  get addOn(): Prisma.AddOnDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Venue: 'Venue',
    StaffAccount: 'StaffAccount',
    Table: 'Table',
    TableSession: 'TableSession',
    Category: 'Category',
    MenuItem: 'MenuItem',
    Ingredient: 'Ingredient',
    RecipeItem: 'RecipeItem',
    AddOn: 'AddOn',
    Order: 'Order',
    OrderItem: 'OrderItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "venue" | "staffAccount" | "table" | "tableSession" | "category" | "menuItem" | "ingredient" | "recipeItem" | "addOn" | "order" | "orderItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Venue: {
        payload: Prisma.$VenuePayload<ExtArgs>
        fields: Prisma.VenueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VenueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VenueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          findFirst: {
            args: Prisma.VenueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VenueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          findMany: {
            args: Prisma.VenueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>[]
          }
          create: {
            args: Prisma.VenueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          createMany: {
            args: Prisma.VenueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VenueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>[]
          }
          delete: {
            args: Prisma.VenueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          update: {
            args: Prisma.VenueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          deleteMany: {
            args: Prisma.VenueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VenueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VenueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>[]
          }
          upsert: {
            args: Prisma.VenueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          aggregate: {
            args: Prisma.VenueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenue>
          }
          groupBy: {
            args: Prisma.VenueGroupByArgs<ExtArgs>
            result: $Utils.Optional<VenueGroupByOutputType>[]
          }
          count: {
            args: Prisma.VenueCountArgs<ExtArgs>
            result: $Utils.Optional<VenueCountAggregateOutputType> | number
          }
        }
      }
      StaffAccount: {
        payload: Prisma.$StaffAccountPayload<ExtArgs>
        fields: Prisma.StaffAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAccountPayload>
          }
          findFirst: {
            args: Prisma.StaffAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAccountPayload>
          }
          findMany: {
            args: Prisma.StaffAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAccountPayload>[]
          }
          create: {
            args: Prisma.StaffAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAccountPayload>
          }
          createMany: {
            args: Prisma.StaffAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaffAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAccountPayload>[]
          }
          delete: {
            args: Prisma.StaffAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAccountPayload>
          }
          update: {
            args: Prisma.StaffAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAccountPayload>
          }
          deleteMany: {
            args: Prisma.StaffAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StaffAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAccountPayload>[]
          }
          upsert: {
            args: Prisma.StaffAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAccountPayload>
          }
          aggregate: {
            args: Prisma.StaffAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaffAccount>
          }
          groupBy: {
            args: Prisma.StaffAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffAccountCountArgs<ExtArgs>
            result: $Utils.Optional<StaffAccountCountAggregateOutputType> | number
          }
        }
      }
      Table: {
        payload: Prisma.$TablePayload<ExtArgs>
        fields: Prisma.TableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          findFirst: {
            args: Prisma.TableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          findMany: {
            args: Prisma.TableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>[]
          }
          create: {
            args: Prisma.TableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          createMany: {
            args: Prisma.TableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>[]
          }
          delete: {
            args: Prisma.TableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          update: {
            args: Prisma.TableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          deleteMany: {
            args: Prisma.TableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>[]
          }
          upsert: {
            args: Prisma.TableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          aggregate: {
            args: Prisma.TableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTable>
          }
          groupBy: {
            args: Prisma.TableGroupByArgs<ExtArgs>
            result: $Utils.Optional<TableGroupByOutputType>[]
          }
          count: {
            args: Prisma.TableCountArgs<ExtArgs>
            result: $Utils.Optional<TableCountAggregateOutputType> | number
          }
        }
      }
      TableSession: {
        payload: Prisma.$TableSessionPayload<ExtArgs>
        fields: Prisma.TableSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TableSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TableSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableSessionPayload>
          }
          findFirst: {
            args: Prisma.TableSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TableSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableSessionPayload>
          }
          findMany: {
            args: Prisma.TableSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableSessionPayload>[]
          }
          create: {
            args: Prisma.TableSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableSessionPayload>
          }
          createMany: {
            args: Prisma.TableSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TableSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableSessionPayload>[]
          }
          delete: {
            args: Prisma.TableSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableSessionPayload>
          }
          update: {
            args: Prisma.TableSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableSessionPayload>
          }
          deleteMany: {
            args: Prisma.TableSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TableSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TableSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableSessionPayload>[]
          }
          upsert: {
            args: Prisma.TableSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableSessionPayload>
          }
          aggregate: {
            args: Prisma.TableSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTableSession>
          }
          groupBy: {
            args: Prisma.TableSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TableSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TableSessionCountArgs<ExtArgs>
            result: $Utils.Optional<TableSessionCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      MenuItem: {
        payload: Prisma.$MenuItemPayload<ExtArgs>
        fields: Prisma.MenuItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          findFirst: {
            args: Prisma.MenuItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          findMany: {
            args: Prisma.MenuItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>[]
          }
          create: {
            args: Prisma.MenuItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          createMany: {
            args: Prisma.MenuItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenuItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>[]
          }
          delete: {
            args: Prisma.MenuItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          update: {
            args: Prisma.MenuItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          deleteMany: {
            args: Prisma.MenuItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MenuItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>[]
          }
          upsert: {
            args: Prisma.MenuItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          aggregate: {
            args: Prisma.MenuItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenuItem>
          }
          groupBy: {
            args: Prisma.MenuItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuItemCountArgs<ExtArgs>
            result: $Utils.Optional<MenuItemCountAggregateOutputType> | number
          }
        }
      }
      Ingredient: {
        payload: Prisma.$IngredientPayload<ExtArgs>
        fields: Prisma.IngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngredientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngredientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          findFirst: {
            args: Prisma.IngredientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngredientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          findMany: {
            args: Prisma.IngredientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          create: {
            args: Prisma.IngredientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          createMany: {
            args: Prisma.IngredientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngredientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          delete: {
            args: Prisma.IngredientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          update: {
            args: Prisma.IngredientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          deleteMany: {
            args: Prisma.IngredientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngredientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IngredientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          upsert: {
            args: Prisma.IngredientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          aggregate: {
            args: Prisma.IngredientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngredient>
          }
          groupBy: {
            args: Prisma.IngredientGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngredientCountArgs<ExtArgs>
            result: $Utils.Optional<IngredientCountAggregateOutputType> | number
          }
        }
      }
      RecipeItem: {
        payload: Prisma.$RecipeItemPayload<ExtArgs>
        fields: Prisma.RecipeItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeItemPayload>
          }
          findFirst: {
            args: Prisma.RecipeItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeItemPayload>
          }
          findMany: {
            args: Prisma.RecipeItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeItemPayload>[]
          }
          create: {
            args: Prisma.RecipeItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeItemPayload>
          }
          createMany: {
            args: Prisma.RecipeItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipeItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeItemPayload>[]
          }
          delete: {
            args: Prisma.RecipeItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeItemPayload>
          }
          update: {
            args: Prisma.RecipeItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeItemPayload>
          }
          deleteMany: {
            args: Prisma.RecipeItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecipeItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeItemPayload>[]
          }
          upsert: {
            args: Prisma.RecipeItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeItemPayload>
          }
          aggregate: {
            args: Prisma.RecipeItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipeItem>
          }
          groupBy: {
            args: Prisma.RecipeItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeItemCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeItemCountAggregateOutputType> | number
          }
        }
      }
      AddOn: {
        payload: Prisma.$AddOnPayload<ExtArgs>
        fields: Prisma.AddOnFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddOnFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddOnPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddOnFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddOnPayload>
          }
          findFirst: {
            args: Prisma.AddOnFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddOnPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddOnFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddOnPayload>
          }
          findMany: {
            args: Prisma.AddOnFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddOnPayload>[]
          }
          create: {
            args: Prisma.AddOnCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddOnPayload>
          }
          createMany: {
            args: Prisma.AddOnCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddOnCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddOnPayload>[]
          }
          delete: {
            args: Prisma.AddOnDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddOnPayload>
          }
          update: {
            args: Prisma.AddOnUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddOnPayload>
          }
          deleteMany: {
            args: Prisma.AddOnDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddOnUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddOnUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddOnPayload>[]
          }
          upsert: {
            args: Prisma.AddOnUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddOnPayload>
          }
          aggregate: {
            args: Prisma.AddOnAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddOn>
          }
          groupBy: {
            args: Prisma.AddOnGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddOnGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddOnCountArgs<ExtArgs>
            result: $Utils.Optional<AddOnCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    venue?: VenueOmit
    staffAccount?: StaffAccountOmit
    table?: TableOmit
    tableSession?: TableSessionOmit
    category?: CategoryOmit
    menuItem?: MenuItemOmit
    ingredient?: IngredientOmit
    recipeItem?: RecipeItemOmit
    addOn?: AddOnOmit
    order?: OrderOmit
    orderItem?: OrderItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type VenueCountOutputType
   */

  export type VenueCountOutputType = {
    staffAccounts: number
    tables: number
    tableSessions: number
    categories: number
    menuItems: number
    ingredients: number
    recipeItems: number
    addOns: number
    orders: number
    orderItems: number
  }

  export type VenueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staffAccounts?: boolean | VenueCountOutputTypeCountStaffAccountsArgs
    tables?: boolean | VenueCountOutputTypeCountTablesArgs
    tableSessions?: boolean | VenueCountOutputTypeCountTableSessionsArgs
    categories?: boolean | VenueCountOutputTypeCountCategoriesArgs
    menuItems?: boolean | VenueCountOutputTypeCountMenuItemsArgs
    ingredients?: boolean | VenueCountOutputTypeCountIngredientsArgs
    recipeItems?: boolean | VenueCountOutputTypeCountRecipeItemsArgs
    addOns?: boolean | VenueCountOutputTypeCountAddOnsArgs
    orders?: boolean | VenueCountOutputTypeCountOrdersArgs
    orderItems?: boolean | VenueCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueCountOutputType
     */
    select?: VenueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeCountStaffAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffAccountWhereInput
  }

  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeCountTablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableWhereInput
  }

  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeCountTableSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableSessionWhereInput
  }

  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeCountMenuItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemWhereInput
  }

  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeCountIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientWhereInput
  }

  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeCountRecipeItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeItemWhereInput
  }

  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeCountAddOnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddOnWhereInput
  }

  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type TableCountOutputType
   */

  export type TableCountOutputType = {
    sessions: number
  }

  export type TableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | TableCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableCountOutputType
     */
    select?: TableCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableSessionWhereInput
  }


  /**
   * Count Type TableSessionCountOutputType
   */

  export type TableSessionCountOutputType = {
    orders: number
  }

  export type TableSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | TableSessionCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * TableSessionCountOutputType without action
   */
  export type TableSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableSessionCountOutputType
     */
    select?: TableSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TableSessionCountOutputType without action
   */
  export type TableSessionCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    items: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | CategoryCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemWhereInput
  }


  /**
   * Count Type MenuItemCountOutputType
   */

  export type MenuItemCountOutputType = {
    orderItems: number
    recipeItems: number
  }

  export type MenuItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | MenuItemCountOutputTypeCountOrderItemsArgs
    recipeItems?: boolean | MenuItemCountOutputTypeCountRecipeItemsArgs
  }

  // Custom InputTypes
  /**
   * MenuItemCountOutputType without action
   */
  export type MenuItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemCountOutputType
     */
    select?: MenuItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenuItemCountOutputType without action
   */
  export type MenuItemCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }

  /**
   * MenuItemCountOutputType without action
   */
  export type MenuItemCountOutputTypeCountRecipeItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeItemWhereInput
  }


  /**
   * Count Type IngredientCountOutputType
   */

  export type IngredientCountOutputType = {
    recipeItems: number
  }

  export type IngredientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipeItems?: boolean | IngredientCountOutputTypeCountRecipeItemsArgs
  }

  // Custom InputTypes
  /**
   * IngredientCountOutputType without action
   */
  export type IngredientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientCountOutputType
     */
    select?: IngredientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IngredientCountOutputType without action
   */
  export type IngredientCountOutputTypeCountRecipeItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeItemWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    items: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | OrderCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Venue
   */

  export type AggregateVenue = {
    _count: VenueCountAggregateOutputType | null
    _min: VenueMinAggregateOutputType | null
    _max: VenueMaxAggregateOutputType | null
  }

  export type VenueMinAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    defaultLanguage: string | null
    planTier: string | null
    active: boolean | null
    createdAt: Date | null
  }

  export type VenueMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    defaultLanguage: string | null
    planTier: string | null
    active: boolean | null
    createdAt: Date | null
  }

  export type VenueCountAggregateOutputType = {
    id: number
    slug: number
    name: number
    theme: number
    defaultLanguage: number
    planTier: number
    active: number
    createdAt: number
    _all: number
  }


  export type VenueMinAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    defaultLanguage?: true
    planTier?: true
    active?: true
    createdAt?: true
  }

  export type VenueMaxAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    defaultLanguage?: true
    planTier?: true
    active?: true
    createdAt?: true
  }

  export type VenueCountAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    theme?: true
    defaultLanguage?: true
    planTier?: true
    active?: true
    createdAt?: true
    _all?: true
  }

  export type VenueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venue to aggregate.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Venues
    **/
    _count?: true | VenueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VenueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VenueMaxAggregateInputType
  }

  export type GetVenueAggregateType<T extends VenueAggregateArgs> = {
        [P in keyof T & keyof AggregateVenue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenue[P]>
      : GetScalarType<T[P], AggregateVenue[P]>
  }




  export type VenueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenueWhereInput
    orderBy?: VenueOrderByWithAggregationInput | VenueOrderByWithAggregationInput[]
    by: VenueScalarFieldEnum[] | VenueScalarFieldEnum
    having?: VenueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VenueCountAggregateInputType | true
    _min?: VenueMinAggregateInputType
    _max?: VenueMaxAggregateInputType
  }

  export type VenueGroupByOutputType = {
    id: string
    slug: string
    name: string
    theme: JsonValue
    defaultLanguage: string
    planTier: string
    active: boolean
    createdAt: Date
    _count: VenueCountAggregateOutputType | null
    _min: VenueMinAggregateOutputType | null
    _max: VenueMaxAggregateOutputType | null
  }

  type GetVenueGroupByPayload<T extends VenueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VenueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VenueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VenueGroupByOutputType[P]>
            : GetScalarType<T[P], VenueGroupByOutputType[P]>
        }
      >
    >


  export type VenueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    theme?: boolean
    defaultLanguage?: boolean
    planTier?: boolean
    active?: boolean
    createdAt?: boolean
    staffAccounts?: boolean | Venue$staffAccountsArgs<ExtArgs>
    tables?: boolean | Venue$tablesArgs<ExtArgs>
    tableSessions?: boolean | Venue$tableSessionsArgs<ExtArgs>
    categories?: boolean | Venue$categoriesArgs<ExtArgs>
    menuItems?: boolean | Venue$menuItemsArgs<ExtArgs>
    ingredients?: boolean | Venue$ingredientsArgs<ExtArgs>
    recipeItems?: boolean | Venue$recipeItemsArgs<ExtArgs>
    addOns?: boolean | Venue$addOnsArgs<ExtArgs>
    orders?: boolean | Venue$ordersArgs<ExtArgs>
    orderItems?: boolean | Venue$orderItemsArgs<ExtArgs>
    _count?: boolean | VenueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venue"]>

  export type VenueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    theme?: boolean
    defaultLanguage?: boolean
    planTier?: boolean
    active?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["venue"]>

  export type VenueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    theme?: boolean
    defaultLanguage?: boolean
    planTier?: boolean
    active?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["venue"]>

  export type VenueSelectScalar = {
    id?: boolean
    slug?: boolean
    name?: boolean
    theme?: boolean
    defaultLanguage?: boolean
    planTier?: boolean
    active?: boolean
    createdAt?: boolean
  }

  export type VenueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "name" | "theme" | "defaultLanguage" | "planTier" | "active" | "createdAt", ExtArgs["result"]["venue"]>
  export type VenueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staffAccounts?: boolean | Venue$staffAccountsArgs<ExtArgs>
    tables?: boolean | Venue$tablesArgs<ExtArgs>
    tableSessions?: boolean | Venue$tableSessionsArgs<ExtArgs>
    categories?: boolean | Venue$categoriesArgs<ExtArgs>
    menuItems?: boolean | Venue$menuItemsArgs<ExtArgs>
    ingredients?: boolean | Venue$ingredientsArgs<ExtArgs>
    recipeItems?: boolean | Venue$recipeItemsArgs<ExtArgs>
    addOns?: boolean | Venue$addOnsArgs<ExtArgs>
    orders?: boolean | Venue$ordersArgs<ExtArgs>
    orderItems?: boolean | Venue$orderItemsArgs<ExtArgs>
    _count?: boolean | VenueCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VenueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VenueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VenuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Venue"
    objects: {
      staffAccounts: Prisma.$StaffAccountPayload<ExtArgs>[]
      tables: Prisma.$TablePayload<ExtArgs>[]
      tableSessions: Prisma.$TableSessionPayload<ExtArgs>[]
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      menuItems: Prisma.$MenuItemPayload<ExtArgs>[]
      ingredients: Prisma.$IngredientPayload<ExtArgs>[]
      recipeItems: Prisma.$RecipeItemPayload<ExtArgs>[]
      addOns: Prisma.$AddOnPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      name: string
      theme: Prisma.JsonValue
      defaultLanguage: string
      planTier: string
      active: boolean
      createdAt: Date
    }, ExtArgs["result"]["venue"]>
    composites: {}
  }

  type VenueGetPayload<S extends boolean | null | undefined | VenueDefaultArgs> = $Result.GetResult<Prisma.$VenuePayload, S>

  type VenueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VenueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VenueCountAggregateInputType | true
    }

  export interface VenueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Venue'], meta: { name: 'Venue' } }
    /**
     * Find zero or one Venue that matches the filter.
     * @param {VenueFindUniqueArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VenueFindUniqueArgs>(args: SelectSubset<T, VenueFindUniqueArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Venue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VenueFindUniqueOrThrowArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VenueFindUniqueOrThrowArgs>(args: SelectSubset<T, VenueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueFindFirstArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VenueFindFirstArgs>(args?: SelectSubset<T, VenueFindFirstArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueFindFirstOrThrowArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VenueFindFirstOrThrowArgs>(args?: SelectSubset<T, VenueFindFirstOrThrowArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Venues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Venues
     * const venues = await prisma.venue.findMany()
     * 
     * // Get first 10 Venues
     * const venues = await prisma.venue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const venueWithIdOnly = await prisma.venue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VenueFindManyArgs>(args?: SelectSubset<T, VenueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Venue.
     * @param {VenueCreateArgs} args - Arguments to create a Venue.
     * @example
     * // Create one Venue
     * const Venue = await prisma.venue.create({
     *   data: {
     *     // ... data to create a Venue
     *   }
     * })
     * 
     */
    create<T extends VenueCreateArgs>(args: SelectSubset<T, VenueCreateArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Venues.
     * @param {VenueCreateManyArgs} args - Arguments to create many Venues.
     * @example
     * // Create many Venues
     * const venue = await prisma.venue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VenueCreateManyArgs>(args?: SelectSubset<T, VenueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Venues and returns the data saved in the database.
     * @param {VenueCreateManyAndReturnArgs} args - Arguments to create many Venues.
     * @example
     * // Create many Venues
     * const venue = await prisma.venue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Venues and only return the `id`
     * const venueWithIdOnly = await prisma.venue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VenueCreateManyAndReturnArgs>(args?: SelectSubset<T, VenueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Venue.
     * @param {VenueDeleteArgs} args - Arguments to delete one Venue.
     * @example
     * // Delete one Venue
     * const Venue = await prisma.venue.delete({
     *   where: {
     *     // ... filter to delete one Venue
     *   }
     * })
     * 
     */
    delete<T extends VenueDeleteArgs>(args: SelectSubset<T, VenueDeleteArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Venue.
     * @param {VenueUpdateArgs} args - Arguments to update one Venue.
     * @example
     * // Update one Venue
     * const venue = await prisma.venue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VenueUpdateArgs>(args: SelectSubset<T, VenueUpdateArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Venues.
     * @param {VenueDeleteManyArgs} args - Arguments to filter Venues to delete.
     * @example
     * // Delete a few Venues
     * const { count } = await prisma.venue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VenueDeleteManyArgs>(args?: SelectSubset<T, VenueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Venues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Venues
     * const venue = await prisma.venue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VenueUpdateManyArgs>(args: SelectSubset<T, VenueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Venues and returns the data updated in the database.
     * @param {VenueUpdateManyAndReturnArgs} args - Arguments to update many Venues.
     * @example
     * // Update many Venues
     * const venue = await prisma.venue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Venues and only return the `id`
     * const venueWithIdOnly = await prisma.venue.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VenueUpdateManyAndReturnArgs>(args: SelectSubset<T, VenueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Venue.
     * @param {VenueUpsertArgs} args - Arguments to update or create a Venue.
     * @example
     * // Update or create a Venue
     * const venue = await prisma.venue.upsert({
     *   create: {
     *     // ... data to create a Venue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Venue we want to update
     *   }
     * })
     */
    upsert<T extends VenueUpsertArgs>(args: SelectSubset<T, VenueUpsertArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Venues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueCountArgs} args - Arguments to filter Venues to count.
     * @example
     * // Count the number of Venues
     * const count = await prisma.venue.count({
     *   where: {
     *     // ... the filter for the Venues we want to count
     *   }
     * })
    **/
    count<T extends VenueCountArgs>(
      args?: Subset<T, VenueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VenueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Venue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VenueAggregateArgs>(args: Subset<T, VenueAggregateArgs>): Prisma.PrismaPromise<GetVenueAggregateType<T>>

    /**
     * Group by Venue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VenueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VenueGroupByArgs['orderBy'] }
        : { orderBy?: VenueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VenueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVenueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Venue model
   */
  readonly fields: VenueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Venue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VenueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    staffAccounts<T extends Venue$staffAccountsArgs<ExtArgs> = {}>(args?: Subset<T, Venue$staffAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tables<T extends Venue$tablesArgs<ExtArgs> = {}>(args?: Subset<T, Venue$tablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tableSessions<T extends Venue$tableSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Venue$tableSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TableSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends Venue$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Venue$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    menuItems<T extends Venue$menuItemsArgs<ExtArgs> = {}>(args?: Subset<T, Venue$menuItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ingredients<T extends Venue$ingredientsArgs<ExtArgs> = {}>(args?: Subset<T, Venue$ingredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recipeItems<T extends Venue$recipeItemsArgs<ExtArgs> = {}>(args?: Subset<T, Venue$recipeItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    addOns<T extends Venue$addOnsArgs<ExtArgs> = {}>(args?: Subset<T, Venue$addOnsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddOnPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends Venue$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Venue$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orderItems<T extends Venue$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Venue$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Venue model
   */
  interface VenueFieldRefs {
    readonly id: FieldRef<"Venue", 'String'>
    readonly slug: FieldRef<"Venue", 'String'>
    readonly name: FieldRef<"Venue", 'String'>
    readonly theme: FieldRef<"Venue", 'Json'>
    readonly defaultLanguage: FieldRef<"Venue", 'String'>
    readonly planTier: FieldRef<"Venue", 'String'>
    readonly active: FieldRef<"Venue", 'Boolean'>
    readonly createdAt: FieldRef<"Venue", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Venue findUnique
   */
  export type VenueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue findUniqueOrThrow
   */
  export type VenueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue findFirst
   */
  export type VenueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Venues.
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Venues.
     */
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * Venue findFirstOrThrow
   */
  export type VenueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Venues.
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Venues.
     */
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * Venue findMany
   */
  export type VenueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venues to fetch.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Venues.
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Venues.
     */
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * Venue create
   */
  export type VenueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * The data needed to create a Venue.
     */
    data: XOR<VenueCreateInput, VenueUncheckedCreateInput>
  }

  /**
   * Venue createMany
   */
  export type VenueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Venues.
     */
    data: VenueCreateManyInput | VenueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Venue createManyAndReturn
   */
  export type VenueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * The data used to create many Venues.
     */
    data: VenueCreateManyInput | VenueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Venue update
   */
  export type VenueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * The data needed to update a Venue.
     */
    data: XOR<VenueUpdateInput, VenueUncheckedUpdateInput>
    /**
     * Choose, which Venue to update.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue updateMany
   */
  export type VenueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Venues.
     */
    data: XOR<VenueUpdateManyMutationInput, VenueUncheckedUpdateManyInput>
    /**
     * Filter which Venues to update
     */
    where?: VenueWhereInput
    /**
     * Limit how many Venues to update.
     */
    limit?: number
  }

  /**
   * Venue updateManyAndReturn
   */
  export type VenueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * The data used to update Venues.
     */
    data: XOR<VenueUpdateManyMutationInput, VenueUncheckedUpdateManyInput>
    /**
     * Filter which Venues to update
     */
    where?: VenueWhereInput
    /**
     * Limit how many Venues to update.
     */
    limit?: number
  }

  /**
   * Venue upsert
   */
  export type VenueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * The filter to search for the Venue to update in case it exists.
     */
    where: VenueWhereUniqueInput
    /**
     * In case the Venue found by the `where` argument doesn't exist, create a new Venue with this data.
     */
    create: XOR<VenueCreateInput, VenueUncheckedCreateInput>
    /**
     * In case the Venue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VenueUpdateInput, VenueUncheckedUpdateInput>
  }

  /**
   * Venue delete
   */
  export type VenueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter which Venue to delete.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue deleteMany
   */
  export type VenueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venues to delete
     */
    where?: VenueWhereInput
    /**
     * Limit how many Venues to delete.
     */
    limit?: number
  }

  /**
   * Venue.staffAccounts
   */
  export type Venue$staffAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAccount
     */
    select?: StaffAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAccount
     */
    omit?: StaffAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAccountInclude<ExtArgs> | null
    where?: StaffAccountWhereInput
    orderBy?: StaffAccountOrderByWithRelationInput | StaffAccountOrderByWithRelationInput[]
    cursor?: StaffAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffAccountScalarFieldEnum | StaffAccountScalarFieldEnum[]
  }

  /**
   * Venue.tables
   */
  export type Venue$tablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    where?: TableWhereInput
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    cursor?: TableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * Venue.tableSessions
   */
  export type Venue$tableSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableSession
     */
    select?: TableSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableSession
     */
    omit?: TableSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableSessionInclude<ExtArgs> | null
    where?: TableSessionWhereInput
    orderBy?: TableSessionOrderByWithRelationInput | TableSessionOrderByWithRelationInput[]
    cursor?: TableSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TableSessionScalarFieldEnum | TableSessionScalarFieldEnum[]
  }

  /**
   * Venue.categories
   */
  export type Venue$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Venue.menuItems
   */
  export type Venue$menuItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    where?: MenuItemWhereInput
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    cursor?: MenuItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * Venue.ingredients
   */
  export type Venue$ingredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    where?: IngredientWhereInput
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    cursor?: IngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Venue.recipeItems
   */
  export type Venue$recipeItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeItem
     */
    select?: RecipeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeItem
     */
    omit?: RecipeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeItemInclude<ExtArgs> | null
    where?: RecipeItemWhereInput
    orderBy?: RecipeItemOrderByWithRelationInput | RecipeItemOrderByWithRelationInput[]
    cursor?: RecipeItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeItemScalarFieldEnum | RecipeItemScalarFieldEnum[]
  }

  /**
   * Venue.addOns
   */
  export type Venue$addOnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddOn
     */
    select?: AddOnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddOn
     */
    omit?: AddOnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddOnInclude<ExtArgs> | null
    where?: AddOnWhereInput
    orderBy?: AddOnOrderByWithRelationInput | AddOnOrderByWithRelationInput[]
    cursor?: AddOnWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddOnScalarFieldEnum | AddOnScalarFieldEnum[]
  }

  /**
   * Venue.orders
   */
  export type Venue$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Venue.orderItems
   */
  export type Venue$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Venue without action
   */
  export type VenueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
  }


  /**
   * Model StaffAccount
   */

  export type AggregateStaffAccount = {
    _count: StaffAccountCountAggregateOutputType | null
    _min: StaffAccountMinAggregateOutputType | null
    _max: StaffAccountMaxAggregateOutputType | null
  }

  export type StaffAccountMinAggregateOutputType = {
    id: string | null
    venueId: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    role: $Enums.Role | null
    active: boolean | null
    createdAt: Date | null
  }

  export type StaffAccountMaxAggregateOutputType = {
    id: string | null
    venueId: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    role: $Enums.Role | null
    active: boolean | null
    createdAt: Date | null
  }

  export type StaffAccountCountAggregateOutputType = {
    id: number
    venueId: number
    email: number
    passwordHash: number
    name: number
    role: number
    active: number
    createdAt: number
    _all: number
  }


  export type StaffAccountMinAggregateInputType = {
    id?: true
    venueId?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    active?: true
    createdAt?: true
  }

  export type StaffAccountMaxAggregateInputType = {
    id?: true
    venueId?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    active?: true
    createdAt?: true
  }

  export type StaffAccountCountAggregateInputType = {
    id?: true
    venueId?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    active?: true
    createdAt?: true
    _all?: true
  }

  export type StaffAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffAccount to aggregate.
     */
    where?: StaffAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffAccounts to fetch.
     */
    orderBy?: StaffAccountOrderByWithRelationInput | StaffAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StaffAccounts
    **/
    _count?: true | StaffAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffAccountMaxAggregateInputType
  }

  export type GetStaffAccountAggregateType<T extends StaffAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateStaffAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaffAccount[P]>
      : GetScalarType<T[P], AggregateStaffAccount[P]>
  }




  export type StaffAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffAccountWhereInput
    orderBy?: StaffAccountOrderByWithAggregationInput | StaffAccountOrderByWithAggregationInput[]
    by: StaffAccountScalarFieldEnum[] | StaffAccountScalarFieldEnum
    having?: StaffAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffAccountCountAggregateInputType | true
    _min?: StaffAccountMinAggregateInputType
    _max?: StaffAccountMaxAggregateInputType
  }

  export type StaffAccountGroupByOutputType = {
    id: string
    venueId: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    active: boolean
    createdAt: Date
    _count: StaffAccountCountAggregateOutputType | null
    _min: StaffAccountMinAggregateOutputType | null
    _max: StaffAccountMaxAggregateOutputType | null
  }

  type GetStaffAccountGroupByPayload<T extends StaffAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffAccountGroupByOutputType[P]>
            : GetScalarType<T[P], StaffAccountGroupByOutputType[P]>
        }
      >
    >


  export type StaffAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    active?: boolean
    createdAt?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffAccount"]>

  export type StaffAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    active?: boolean
    createdAt?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffAccount"]>

  export type StaffAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    active?: boolean
    createdAt?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffAccount"]>

  export type StaffAccountSelectScalar = {
    id?: boolean
    venueId?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    active?: boolean
    createdAt?: boolean
  }

  export type StaffAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "venueId" | "email" | "passwordHash" | "name" | "role" | "active" | "createdAt", ExtArgs["result"]["staffAccount"]>
  export type StaffAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }
  export type StaffAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }
  export type StaffAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }

  export type $StaffAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StaffAccount"
    objects: {
      venue: Prisma.$VenuePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      venueId: string
      email: string
      passwordHash: string
      name: string
      role: $Enums.Role
      active: boolean
      createdAt: Date
    }, ExtArgs["result"]["staffAccount"]>
    composites: {}
  }

  type StaffAccountGetPayload<S extends boolean | null | undefined | StaffAccountDefaultArgs> = $Result.GetResult<Prisma.$StaffAccountPayload, S>

  type StaffAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaffAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffAccountCountAggregateInputType | true
    }

  export interface StaffAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StaffAccount'], meta: { name: 'StaffAccount' } }
    /**
     * Find zero or one StaffAccount that matches the filter.
     * @param {StaffAccountFindUniqueArgs} args - Arguments to find a StaffAccount
     * @example
     * // Get one StaffAccount
     * const staffAccount = await prisma.staffAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffAccountFindUniqueArgs>(args: SelectSubset<T, StaffAccountFindUniqueArgs<ExtArgs>>): Prisma__StaffAccountClient<$Result.GetResult<Prisma.$StaffAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StaffAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffAccountFindUniqueOrThrowArgs} args - Arguments to find a StaffAccount
     * @example
     * // Get one StaffAccount
     * const staffAccount = await prisma.staffAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffAccountClient<$Result.GetResult<Prisma.$StaffAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaffAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAccountFindFirstArgs} args - Arguments to find a StaffAccount
     * @example
     * // Get one StaffAccount
     * const staffAccount = await prisma.staffAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffAccountFindFirstArgs>(args?: SelectSubset<T, StaffAccountFindFirstArgs<ExtArgs>>): Prisma__StaffAccountClient<$Result.GetResult<Prisma.$StaffAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaffAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAccountFindFirstOrThrowArgs} args - Arguments to find a StaffAccount
     * @example
     * // Get one StaffAccount
     * const staffAccount = await prisma.staffAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffAccountClient<$Result.GetResult<Prisma.$StaffAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StaffAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StaffAccounts
     * const staffAccounts = await prisma.staffAccount.findMany()
     * 
     * // Get first 10 StaffAccounts
     * const staffAccounts = await prisma.staffAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffAccountWithIdOnly = await prisma.staffAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffAccountFindManyArgs>(args?: SelectSubset<T, StaffAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StaffAccount.
     * @param {StaffAccountCreateArgs} args - Arguments to create a StaffAccount.
     * @example
     * // Create one StaffAccount
     * const StaffAccount = await prisma.staffAccount.create({
     *   data: {
     *     // ... data to create a StaffAccount
     *   }
     * })
     * 
     */
    create<T extends StaffAccountCreateArgs>(args: SelectSubset<T, StaffAccountCreateArgs<ExtArgs>>): Prisma__StaffAccountClient<$Result.GetResult<Prisma.$StaffAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StaffAccounts.
     * @param {StaffAccountCreateManyArgs} args - Arguments to create many StaffAccounts.
     * @example
     * // Create many StaffAccounts
     * const staffAccount = await prisma.staffAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffAccountCreateManyArgs>(args?: SelectSubset<T, StaffAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StaffAccounts and returns the data saved in the database.
     * @param {StaffAccountCreateManyAndReturnArgs} args - Arguments to create many StaffAccounts.
     * @example
     * // Create many StaffAccounts
     * const staffAccount = await prisma.staffAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StaffAccounts and only return the `id`
     * const staffAccountWithIdOnly = await prisma.staffAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaffAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, StaffAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StaffAccount.
     * @param {StaffAccountDeleteArgs} args - Arguments to delete one StaffAccount.
     * @example
     * // Delete one StaffAccount
     * const StaffAccount = await prisma.staffAccount.delete({
     *   where: {
     *     // ... filter to delete one StaffAccount
     *   }
     * })
     * 
     */
    delete<T extends StaffAccountDeleteArgs>(args: SelectSubset<T, StaffAccountDeleteArgs<ExtArgs>>): Prisma__StaffAccountClient<$Result.GetResult<Prisma.$StaffAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StaffAccount.
     * @param {StaffAccountUpdateArgs} args - Arguments to update one StaffAccount.
     * @example
     * // Update one StaffAccount
     * const staffAccount = await prisma.staffAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffAccountUpdateArgs>(args: SelectSubset<T, StaffAccountUpdateArgs<ExtArgs>>): Prisma__StaffAccountClient<$Result.GetResult<Prisma.$StaffAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StaffAccounts.
     * @param {StaffAccountDeleteManyArgs} args - Arguments to filter StaffAccounts to delete.
     * @example
     * // Delete a few StaffAccounts
     * const { count } = await prisma.staffAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffAccountDeleteManyArgs>(args?: SelectSubset<T, StaffAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StaffAccounts
     * const staffAccount = await prisma.staffAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffAccountUpdateManyArgs>(args: SelectSubset<T, StaffAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffAccounts and returns the data updated in the database.
     * @param {StaffAccountUpdateManyAndReturnArgs} args - Arguments to update many StaffAccounts.
     * @example
     * // Update many StaffAccounts
     * const staffAccount = await prisma.staffAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StaffAccounts and only return the `id`
     * const staffAccountWithIdOnly = await prisma.staffAccount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StaffAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, StaffAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StaffAccount.
     * @param {StaffAccountUpsertArgs} args - Arguments to update or create a StaffAccount.
     * @example
     * // Update or create a StaffAccount
     * const staffAccount = await prisma.staffAccount.upsert({
     *   create: {
     *     // ... data to create a StaffAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StaffAccount we want to update
     *   }
     * })
     */
    upsert<T extends StaffAccountUpsertArgs>(args: SelectSubset<T, StaffAccountUpsertArgs<ExtArgs>>): Prisma__StaffAccountClient<$Result.GetResult<Prisma.$StaffAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StaffAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAccountCountArgs} args - Arguments to filter StaffAccounts to count.
     * @example
     * // Count the number of StaffAccounts
     * const count = await prisma.staffAccount.count({
     *   where: {
     *     // ... the filter for the StaffAccounts we want to count
     *   }
     * })
    **/
    count<T extends StaffAccountCountArgs>(
      args?: Subset<T, StaffAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StaffAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StaffAccountAggregateArgs>(args: Subset<T, StaffAccountAggregateArgs>): Prisma.PrismaPromise<GetStaffAccountAggregateType<T>>

    /**
     * Group by StaffAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StaffAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffAccountGroupByArgs['orderBy'] }
        : { orderBy?: StaffAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StaffAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StaffAccount model
   */
  readonly fields: StaffAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StaffAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    venue<T extends VenueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VenueDefaultArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StaffAccount model
   */
  interface StaffAccountFieldRefs {
    readonly id: FieldRef<"StaffAccount", 'String'>
    readonly venueId: FieldRef<"StaffAccount", 'String'>
    readonly email: FieldRef<"StaffAccount", 'String'>
    readonly passwordHash: FieldRef<"StaffAccount", 'String'>
    readonly name: FieldRef<"StaffAccount", 'String'>
    readonly role: FieldRef<"StaffAccount", 'Role'>
    readonly active: FieldRef<"StaffAccount", 'Boolean'>
    readonly createdAt: FieldRef<"StaffAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StaffAccount findUnique
   */
  export type StaffAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAccount
     */
    select?: StaffAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAccount
     */
    omit?: StaffAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAccountInclude<ExtArgs> | null
    /**
     * Filter, which StaffAccount to fetch.
     */
    where: StaffAccountWhereUniqueInput
  }

  /**
   * StaffAccount findUniqueOrThrow
   */
  export type StaffAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAccount
     */
    select?: StaffAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAccount
     */
    omit?: StaffAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAccountInclude<ExtArgs> | null
    /**
     * Filter, which StaffAccount to fetch.
     */
    where: StaffAccountWhereUniqueInput
  }

  /**
   * StaffAccount findFirst
   */
  export type StaffAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAccount
     */
    select?: StaffAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAccount
     */
    omit?: StaffAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAccountInclude<ExtArgs> | null
    /**
     * Filter, which StaffAccount to fetch.
     */
    where?: StaffAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffAccounts to fetch.
     */
    orderBy?: StaffAccountOrderByWithRelationInput | StaffAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffAccounts.
     */
    cursor?: StaffAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffAccounts.
     */
    distinct?: StaffAccountScalarFieldEnum | StaffAccountScalarFieldEnum[]
  }

  /**
   * StaffAccount findFirstOrThrow
   */
  export type StaffAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAccount
     */
    select?: StaffAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAccount
     */
    omit?: StaffAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAccountInclude<ExtArgs> | null
    /**
     * Filter, which StaffAccount to fetch.
     */
    where?: StaffAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffAccounts to fetch.
     */
    orderBy?: StaffAccountOrderByWithRelationInput | StaffAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffAccounts.
     */
    cursor?: StaffAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffAccounts.
     */
    distinct?: StaffAccountScalarFieldEnum | StaffAccountScalarFieldEnum[]
  }

  /**
   * StaffAccount findMany
   */
  export type StaffAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAccount
     */
    select?: StaffAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAccount
     */
    omit?: StaffAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAccountInclude<ExtArgs> | null
    /**
     * Filter, which StaffAccounts to fetch.
     */
    where?: StaffAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffAccounts to fetch.
     */
    orderBy?: StaffAccountOrderByWithRelationInput | StaffAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StaffAccounts.
     */
    cursor?: StaffAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffAccounts.
     */
    distinct?: StaffAccountScalarFieldEnum | StaffAccountScalarFieldEnum[]
  }

  /**
   * StaffAccount create
   */
  export type StaffAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAccount
     */
    select?: StaffAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAccount
     */
    omit?: StaffAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a StaffAccount.
     */
    data: XOR<StaffAccountCreateInput, StaffAccountUncheckedCreateInput>
  }

  /**
   * StaffAccount createMany
   */
  export type StaffAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StaffAccounts.
     */
    data: StaffAccountCreateManyInput | StaffAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StaffAccount createManyAndReturn
   */
  export type StaffAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAccount
     */
    select?: StaffAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAccount
     */
    omit?: StaffAccountOmit<ExtArgs> | null
    /**
     * The data used to create many StaffAccounts.
     */
    data: StaffAccountCreateManyInput | StaffAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StaffAccount update
   */
  export type StaffAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAccount
     */
    select?: StaffAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAccount
     */
    omit?: StaffAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a StaffAccount.
     */
    data: XOR<StaffAccountUpdateInput, StaffAccountUncheckedUpdateInput>
    /**
     * Choose, which StaffAccount to update.
     */
    where: StaffAccountWhereUniqueInput
  }

  /**
   * StaffAccount updateMany
   */
  export type StaffAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StaffAccounts.
     */
    data: XOR<StaffAccountUpdateManyMutationInput, StaffAccountUncheckedUpdateManyInput>
    /**
     * Filter which StaffAccounts to update
     */
    where?: StaffAccountWhereInput
    /**
     * Limit how many StaffAccounts to update.
     */
    limit?: number
  }

  /**
   * StaffAccount updateManyAndReturn
   */
  export type StaffAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAccount
     */
    select?: StaffAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAccount
     */
    omit?: StaffAccountOmit<ExtArgs> | null
    /**
     * The data used to update StaffAccounts.
     */
    data: XOR<StaffAccountUpdateManyMutationInput, StaffAccountUncheckedUpdateManyInput>
    /**
     * Filter which StaffAccounts to update
     */
    where?: StaffAccountWhereInput
    /**
     * Limit how many StaffAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StaffAccount upsert
   */
  export type StaffAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAccount
     */
    select?: StaffAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAccount
     */
    omit?: StaffAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the StaffAccount to update in case it exists.
     */
    where: StaffAccountWhereUniqueInput
    /**
     * In case the StaffAccount found by the `where` argument doesn't exist, create a new StaffAccount with this data.
     */
    create: XOR<StaffAccountCreateInput, StaffAccountUncheckedCreateInput>
    /**
     * In case the StaffAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffAccountUpdateInput, StaffAccountUncheckedUpdateInput>
  }

  /**
   * StaffAccount delete
   */
  export type StaffAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAccount
     */
    select?: StaffAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAccount
     */
    omit?: StaffAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAccountInclude<ExtArgs> | null
    /**
     * Filter which StaffAccount to delete.
     */
    where: StaffAccountWhereUniqueInput
  }

  /**
   * StaffAccount deleteMany
   */
  export type StaffAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffAccounts to delete
     */
    where?: StaffAccountWhereInput
    /**
     * Limit how many StaffAccounts to delete.
     */
    limit?: number
  }

  /**
   * StaffAccount without action
   */
  export type StaffAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAccount
     */
    select?: StaffAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAccount
     */
    omit?: StaffAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAccountInclude<ExtArgs> | null
  }


  /**
   * Model Table
   */

  export type AggregateTable = {
    _count: TableCountAggregateOutputType | null
    _min: TableMinAggregateOutputType | null
    _max: TableMaxAggregateOutputType | null
  }

  export type TableMinAggregateOutputType = {
    id: string | null
    venueId: string | null
    label: string | null
    qrToken: string | null
    activeSessionId: string | null
    waiterCalled: boolean | null
    waiterCalledAt: Date | null
    createdAt: Date | null
  }

  export type TableMaxAggregateOutputType = {
    id: string | null
    venueId: string | null
    label: string | null
    qrToken: string | null
    activeSessionId: string | null
    waiterCalled: boolean | null
    waiterCalledAt: Date | null
    createdAt: Date | null
  }

  export type TableCountAggregateOutputType = {
    id: number
    venueId: number
    label: number
    qrToken: number
    activeSessionId: number
    waiterCalled: number
    waiterCalledAt: number
    createdAt: number
    _all: number
  }


  export type TableMinAggregateInputType = {
    id?: true
    venueId?: true
    label?: true
    qrToken?: true
    activeSessionId?: true
    waiterCalled?: true
    waiterCalledAt?: true
    createdAt?: true
  }

  export type TableMaxAggregateInputType = {
    id?: true
    venueId?: true
    label?: true
    qrToken?: true
    activeSessionId?: true
    waiterCalled?: true
    waiterCalledAt?: true
    createdAt?: true
  }

  export type TableCountAggregateInputType = {
    id?: true
    venueId?: true
    label?: true
    qrToken?: true
    activeSessionId?: true
    waiterCalled?: true
    waiterCalledAt?: true
    createdAt?: true
    _all?: true
  }

  export type TableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Table to aggregate.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tables
    **/
    _count?: true | TableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TableMaxAggregateInputType
  }

  export type GetTableAggregateType<T extends TableAggregateArgs> = {
        [P in keyof T & keyof AggregateTable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTable[P]>
      : GetScalarType<T[P], AggregateTable[P]>
  }




  export type TableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableWhereInput
    orderBy?: TableOrderByWithAggregationInput | TableOrderByWithAggregationInput[]
    by: TableScalarFieldEnum[] | TableScalarFieldEnum
    having?: TableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TableCountAggregateInputType | true
    _min?: TableMinAggregateInputType
    _max?: TableMaxAggregateInputType
  }

  export type TableGroupByOutputType = {
    id: string
    venueId: string
    label: string
    qrToken: string
    activeSessionId: string | null
    waiterCalled: boolean
    waiterCalledAt: Date | null
    createdAt: Date
    _count: TableCountAggregateOutputType | null
    _min: TableMinAggregateOutputType | null
    _max: TableMaxAggregateOutputType | null
  }

  type GetTableGroupByPayload<T extends TableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TableGroupByOutputType[P]>
            : GetScalarType<T[P], TableGroupByOutputType[P]>
        }
      >
    >


  export type TableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    label?: boolean
    qrToken?: boolean
    activeSessionId?: boolean
    waiterCalled?: boolean
    waiterCalledAt?: boolean
    createdAt?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    sessions?: boolean | Table$sessionsArgs<ExtArgs>
    _count?: boolean | TableCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["table"]>

  export type TableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    label?: boolean
    qrToken?: boolean
    activeSessionId?: boolean
    waiterCalled?: boolean
    waiterCalledAt?: boolean
    createdAt?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["table"]>

  export type TableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    label?: boolean
    qrToken?: boolean
    activeSessionId?: boolean
    waiterCalled?: boolean
    waiterCalledAt?: boolean
    createdAt?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["table"]>

  export type TableSelectScalar = {
    id?: boolean
    venueId?: boolean
    label?: boolean
    qrToken?: boolean
    activeSessionId?: boolean
    waiterCalled?: boolean
    waiterCalledAt?: boolean
    createdAt?: boolean
  }

  export type TableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "venueId" | "label" | "qrToken" | "activeSessionId" | "waiterCalled" | "waiterCalledAt" | "createdAt", ExtArgs["result"]["table"]>
  export type TableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    sessions?: boolean | Table$sessionsArgs<ExtArgs>
    _count?: boolean | TableCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }
  export type TableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }

  export type $TablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Table"
    objects: {
      venue: Prisma.$VenuePayload<ExtArgs>
      sessions: Prisma.$TableSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      venueId: string
      label: string
      qrToken: string
      activeSessionId: string | null
      waiterCalled: boolean
      waiterCalledAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["table"]>
    composites: {}
  }

  type TableGetPayload<S extends boolean | null | undefined | TableDefaultArgs> = $Result.GetResult<Prisma.$TablePayload, S>

  type TableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TableCountAggregateInputType | true
    }

  export interface TableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Table'], meta: { name: 'Table' } }
    /**
     * Find zero or one Table that matches the filter.
     * @param {TableFindUniqueArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TableFindUniqueArgs>(args: SelectSubset<T, TableFindUniqueArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TableFindUniqueOrThrowArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TableFindUniqueOrThrowArgs>(args: SelectSubset<T, TableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindFirstArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TableFindFirstArgs>(args?: SelectSubset<T, TableFindFirstArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindFirstOrThrowArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TableFindFirstOrThrowArgs>(args?: SelectSubset<T, TableFindFirstOrThrowArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tables
     * const tables = await prisma.table.findMany()
     * 
     * // Get first 10 Tables
     * const tables = await prisma.table.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tableWithIdOnly = await prisma.table.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TableFindManyArgs>(args?: SelectSubset<T, TableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Table.
     * @param {TableCreateArgs} args - Arguments to create a Table.
     * @example
     * // Create one Table
     * const Table = await prisma.table.create({
     *   data: {
     *     // ... data to create a Table
     *   }
     * })
     * 
     */
    create<T extends TableCreateArgs>(args: SelectSubset<T, TableCreateArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tables.
     * @param {TableCreateManyArgs} args - Arguments to create many Tables.
     * @example
     * // Create many Tables
     * const table = await prisma.table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TableCreateManyArgs>(args?: SelectSubset<T, TableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tables and returns the data saved in the database.
     * @param {TableCreateManyAndReturnArgs} args - Arguments to create many Tables.
     * @example
     * // Create many Tables
     * const table = await prisma.table.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tables and only return the `id`
     * const tableWithIdOnly = await prisma.table.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TableCreateManyAndReturnArgs>(args?: SelectSubset<T, TableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Table.
     * @param {TableDeleteArgs} args - Arguments to delete one Table.
     * @example
     * // Delete one Table
     * const Table = await prisma.table.delete({
     *   where: {
     *     // ... filter to delete one Table
     *   }
     * })
     * 
     */
    delete<T extends TableDeleteArgs>(args: SelectSubset<T, TableDeleteArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Table.
     * @param {TableUpdateArgs} args - Arguments to update one Table.
     * @example
     * // Update one Table
     * const table = await prisma.table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TableUpdateArgs>(args: SelectSubset<T, TableUpdateArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tables.
     * @param {TableDeleteManyArgs} args - Arguments to filter Tables to delete.
     * @example
     * // Delete a few Tables
     * const { count } = await prisma.table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TableDeleteManyArgs>(args?: SelectSubset<T, TableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tables
     * const table = await prisma.table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TableUpdateManyArgs>(args: SelectSubset<T, TableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tables and returns the data updated in the database.
     * @param {TableUpdateManyAndReturnArgs} args - Arguments to update many Tables.
     * @example
     * // Update many Tables
     * const table = await prisma.table.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tables and only return the `id`
     * const tableWithIdOnly = await prisma.table.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TableUpdateManyAndReturnArgs>(args: SelectSubset<T, TableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Table.
     * @param {TableUpsertArgs} args - Arguments to update or create a Table.
     * @example
     * // Update or create a Table
     * const table = await prisma.table.upsert({
     *   create: {
     *     // ... data to create a Table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Table we want to update
     *   }
     * })
     */
    upsert<T extends TableUpsertArgs>(args: SelectSubset<T, TableUpsertArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableCountArgs} args - Arguments to filter Tables to count.
     * @example
     * // Count the number of Tables
     * const count = await prisma.table.count({
     *   where: {
     *     // ... the filter for the Tables we want to count
     *   }
     * })
    **/
    count<T extends TableCountArgs>(
      args?: Subset<T, TableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TableAggregateArgs>(args: Subset<T, TableAggregateArgs>): Prisma.PrismaPromise<GetTableAggregateType<T>>

    /**
     * Group by Table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TableGroupByArgs['orderBy'] }
        : { orderBy?: TableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Table model
   */
  readonly fields: TableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    venue<T extends VenueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VenueDefaultArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sessions<T extends Table$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Table$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TableSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Table model
   */
  interface TableFieldRefs {
    readonly id: FieldRef<"Table", 'String'>
    readonly venueId: FieldRef<"Table", 'String'>
    readonly label: FieldRef<"Table", 'String'>
    readonly qrToken: FieldRef<"Table", 'String'>
    readonly activeSessionId: FieldRef<"Table", 'String'>
    readonly waiterCalled: FieldRef<"Table", 'Boolean'>
    readonly waiterCalledAt: FieldRef<"Table", 'DateTime'>
    readonly createdAt: FieldRef<"Table", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Table findUnique
   */
  export type TableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table findUniqueOrThrow
   */
  export type TableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table findFirst
   */
  export type TableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tables.
     */
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * Table findFirstOrThrow
   */
  export type TableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tables.
     */
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * Table findMany
   */
  export type TableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Tables to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tables.
     */
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * Table create
   */
  export type TableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The data needed to create a Table.
     */
    data: XOR<TableCreateInput, TableUncheckedCreateInput>
  }

  /**
   * Table createMany
   */
  export type TableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tables.
     */
    data: TableCreateManyInput | TableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Table createManyAndReturn
   */
  export type TableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * The data used to create many Tables.
     */
    data: TableCreateManyInput | TableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Table update
   */
  export type TableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The data needed to update a Table.
     */
    data: XOR<TableUpdateInput, TableUncheckedUpdateInput>
    /**
     * Choose, which Table to update.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table updateMany
   */
  export type TableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tables.
     */
    data: XOR<TableUpdateManyMutationInput, TableUncheckedUpdateManyInput>
    /**
     * Filter which Tables to update
     */
    where?: TableWhereInput
    /**
     * Limit how many Tables to update.
     */
    limit?: number
  }

  /**
   * Table updateManyAndReturn
   */
  export type TableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * The data used to update Tables.
     */
    data: XOR<TableUpdateManyMutationInput, TableUncheckedUpdateManyInput>
    /**
     * Filter which Tables to update
     */
    where?: TableWhereInput
    /**
     * Limit how many Tables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Table upsert
   */
  export type TableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The filter to search for the Table to update in case it exists.
     */
    where: TableWhereUniqueInput
    /**
     * In case the Table found by the `where` argument doesn't exist, create a new Table with this data.
     */
    create: XOR<TableCreateInput, TableUncheckedCreateInput>
    /**
     * In case the Table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TableUpdateInput, TableUncheckedUpdateInput>
  }

  /**
   * Table delete
   */
  export type TableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter which Table to delete.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table deleteMany
   */
  export type TableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tables to delete
     */
    where?: TableWhereInput
    /**
     * Limit how many Tables to delete.
     */
    limit?: number
  }

  /**
   * Table.sessions
   */
  export type Table$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableSession
     */
    select?: TableSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableSession
     */
    omit?: TableSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableSessionInclude<ExtArgs> | null
    where?: TableSessionWhereInput
    orderBy?: TableSessionOrderByWithRelationInput | TableSessionOrderByWithRelationInput[]
    cursor?: TableSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TableSessionScalarFieldEnum | TableSessionScalarFieldEnum[]
  }

  /**
   * Table without action
   */
  export type TableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
  }


  /**
   * Model TableSession
   */

  export type AggregateTableSession = {
    _count: TableSessionCountAggregateOutputType | null
    _min: TableSessionMinAggregateOutputType | null
    _max: TableSessionMaxAggregateOutputType | null
  }

  export type TableSessionMinAggregateOutputType = {
    id: string | null
    venueId: string | null
    tableId: string | null
    startedAt: Date | null
    endedAt: Date | null
  }

  export type TableSessionMaxAggregateOutputType = {
    id: string | null
    venueId: string | null
    tableId: string | null
    startedAt: Date | null
    endedAt: Date | null
  }

  export type TableSessionCountAggregateOutputType = {
    id: number
    venueId: number
    tableId: number
    startedAt: number
    endedAt: number
    _all: number
  }


  export type TableSessionMinAggregateInputType = {
    id?: true
    venueId?: true
    tableId?: true
    startedAt?: true
    endedAt?: true
  }

  export type TableSessionMaxAggregateInputType = {
    id?: true
    venueId?: true
    tableId?: true
    startedAt?: true
    endedAt?: true
  }

  export type TableSessionCountAggregateInputType = {
    id?: true
    venueId?: true
    tableId?: true
    startedAt?: true
    endedAt?: true
    _all?: true
  }

  export type TableSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TableSession to aggregate.
     */
    where?: TableSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TableSessions to fetch.
     */
    orderBy?: TableSessionOrderByWithRelationInput | TableSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TableSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TableSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TableSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TableSessions
    **/
    _count?: true | TableSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TableSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TableSessionMaxAggregateInputType
  }

  export type GetTableSessionAggregateType<T extends TableSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateTableSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTableSession[P]>
      : GetScalarType<T[P], AggregateTableSession[P]>
  }




  export type TableSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableSessionWhereInput
    orderBy?: TableSessionOrderByWithAggregationInput | TableSessionOrderByWithAggregationInput[]
    by: TableSessionScalarFieldEnum[] | TableSessionScalarFieldEnum
    having?: TableSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TableSessionCountAggregateInputType | true
    _min?: TableSessionMinAggregateInputType
    _max?: TableSessionMaxAggregateInputType
  }

  export type TableSessionGroupByOutputType = {
    id: string
    venueId: string
    tableId: string
    startedAt: Date
    endedAt: Date | null
    _count: TableSessionCountAggregateOutputType | null
    _min: TableSessionMinAggregateOutputType | null
    _max: TableSessionMaxAggregateOutputType | null
  }

  type GetTableSessionGroupByPayload<T extends TableSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TableSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TableSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TableSessionGroupByOutputType[P]>
            : GetScalarType<T[P], TableSessionGroupByOutputType[P]>
        }
      >
    >


  export type TableSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    tableId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    table?: boolean | TableDefaultArgs<ExtArgs>
    orders?: boolean | TableSession$ordersArgs<ExtArgs>
    _count?: boolean | TableSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tableSession"]>

  export type TableSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    tableId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    table?: boolean | TableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tableSession"]>

  export type TableSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    tableId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    table?: boolean | TableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tableSession"]>

  export type TableSessionSelectScalar = {
    id?: boolean
    venueId?: boolean
    tableId?: boolean
    startedAt?: boolean
    endedAt?: boolean
  }

  export type TableSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "venueId" | "tableId" | "startedAt" | "endedAt", ExtArgs["result"]["tableSession"]>
  export type TableSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    table?: boolean | TableDefaultArgs<ExtArgs>
    orders?: boolean | TableSession$ordersArgs<ExtArgs>
    _count?: boolean | TableSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TableSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    table?: boolean | TableDefaultArgs<ExtArgs>
  }
  export type TableSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    table?: boolean | TableDefaultArgs<ExtArgs>
  }

  export type $TableSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TableSession"
    objects: {
      venue: Prisma.$VenuePayload<ExtArgs>
      table: Prisma.$TablePayload<ExtArgs>
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      venueId: string
      tableId: string
      startedAt: Date
      endedAt: Date | null
    }, ExtArgs["result"]["tableSession"]>
    composites: {}
  }

  type TableSessionGetPayload<S extends boolean | null | undefined | TableSessionDefaultArgs> = $Result.GetResult<Prisma.$TableSessionPayload, S>

  type TableSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TableSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TableSessionCountAggregateInputType | true
    }

  export interface TableSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TableSession'], meta: { name: 'TableSession' } }
    /**
     * Find zero or one TableSession that matches the filter.
     * @param {TableSessionFindUniqueArgs} args - Arguments to find a TableSession
     * @example
     * // Get one TableSession
     * const tableSession = await prisma.tableSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TableSessionFindUniqueArgs>(args: SelectSubset<T, TableSessionFindUniqueArgs<ExtArgs>>): Prisma__TableSessionClient<$Result.GetResult<Prisma.$TableSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TableSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TableSessionFindUniqueOrThrowArgs} args - Arguments to find a TableSession
     * @example
     * // Get one TableSession
     * const tableSession = await prisma.tableSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TableSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, TableSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TableSessionClient<$Result.GetResult<Prisma.$TableSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TableSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableSessionFindFirstArgs} args - Arguments to find a TableSession
     * @example
     * // Get one TableSession
     * const tableSession = await prisma.tableSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TableSessionFindFirstArgs>(args?: SelectSubset<T, TableSessionFindFirstArgs<ExtArgs>>): Prisma__TableSessionClient<$Result.GetResult<Prisma.$TableSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TableSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableSessionFindFirstOrThrowArgs} args - Arguments to find a TableSession
     * @example
     * // Get one TableSession
     * const tableSession = await prisma.tableSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TableSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, TableSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TableSessionClient<$Result.GetResult<Prisma.$TableSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TableSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TableSessions
     * const tableSessions = await prisma.tableSession.findMany()
     * 
     * // Get first 10 TableSessions
     * const tableSessions = await prisma.tableSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tableSessionWithIdOnly = await prisma.tableSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TableSessionFindManyArgs>(args?: SelectSubset<T, TableSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TableSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TableSession.
     * @param {TableSessionCreateArgs} args - Arguments to create a TableSession.
     * @example
     * // Create one TableSession
     * const TableSession = await prisma.tableSession.create({
     *   data: {
     *     // ... data to create a TableSession
     *   }
     * })
     * 
     */
    create<T extends TableSessionCreateArgs>(args: SelectSubset<T, TableSessionCreateArgs<ExtArgs>>): Prisma__TableSessionClient<$Result.GetResult<Prisma.$TableSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TableSessions.
     * @param {TableSessionCreateManyArgs} args - Arguments to create many TableSessions.
     * @example
     * // Create many TableSessions
     * const tableSession = await prisma.tableSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TableSessionCreateManyArgs>(args?: SelectSubset<T, TableSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TableSessions and returns the data saved in the database.
     * @param {TableSessionCreateManyAndReturnArgs} args - Arguments to create many TableSessions.
     * @example
     * // Create many TableSessions
     * const tableSession = await prisma.tableSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TableSessions and only return the `id`
     * const tableSessionWithIdOnly = await prisma.tableSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TableSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, TableSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TableSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TableSession.
     * @param {TableSessionDeleteArgs} args - Arguments to delete one TableSession.
     * @example
     * // Delete one TableSession
     * const TableSession = await prisma.tableSession.delete({
     *   where: {
     *     // ... filter to delete one TableSession
     *   }
     * })
     * 
     */
    delete<T extends TableSessionDeleteArgs>(args: SelectSubset<T, TableSessionDeleteArgs<ExtArgs>>): Prisma__TableSessionClient<$Result.GetResult<Prisma.$TableSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TableSession.
     * @param {TableSessionUpdateArgs} args - Arguments to update one TableSession.
     * @example
     * // Update one TableSession
     * const tableSession = await prisma.tableSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TableSessionUpdateArgs>(args: SelectSubset<T, TableSessionUpdateArgs<ExtArgs>>): Prisma__TableSessionClient<$Result.GetResult<Prisma.$TableSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TableSessions.
     * @param {TableSessionDeleteManyArgs} args - Arguments to filter TableSessions to delete.
     * @example
     * // Delete a few TableSessions
     * const { count } = await prisma.tableSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TableSessionDeleteManyArgs>(args?: SelectSubset<T, TableSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TableSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TableSessions
     * const tableSession = await prisma.tableSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TableSessionUpdateManyArgs>(args: SelectSubset<T, TableSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TableSessions and returns the data updated in the database.
     * @param {TableSessionUpdateManyAndReturnArgs} args - Arguments to update many TableSessions.
     * @example
     * // Update many TableSessions
     * const tableSession = await prisma.tableSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TableSessions and only return the `id`
     * const tableSessionWithIdOnly = await prisma.tableSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TableSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, TableSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TableSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TableSession.
     * @param {TableSessionUpsertArgs} args - Arguments to update or create a TableSession.
     * @example
     * // Update or create a TableSession
     * const tableSession = await prisma.tableSession.upsert({
     *   create: {
     *     // ... data to create a TableSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TableSession we want to update
     *   }
     * })
     */
    upsert<T extends TableSessionUpsertArgs>(args: SelectSubset<T, TableSessionUpsertArgs<ExtArgs>>): Prisma__TableSessionClient<$Result.GetResult<Prisma.$TableSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TableSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableSessionCountArgs} args - Arguments to filter TableSessions to count.
     * @example
     * // Count the number of TableSessions
     * const count = await prisma.tableSession.count({
     *   where: {
     *     // ... the filter for the TableSessions we want to count
     *   }
     * })
    **/
    count<T extends TableSessionCountArgs>(
      args?: Subset<T, TableSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TableSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TableSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TableSessionAggregateArgs>(args: Subset<T, TableSessionAggregateArgs>): Prisma.PrismaPromise<GetTableSessionAggregateType<T>>

    /**
     * Group by TableSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TableSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TableSessionGroupByArgs['orderBy'] }
        : { orderBy?: TableSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TableSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTableSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TableSession model
   */
  readonly fields: TableSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TableSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TableSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    venue<T extends VenueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VenueDefaultArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    table<T extends TableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TableDefaultArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orders<T extends TableSession$ordersArgs<ExtArgs> = {}>(args?: Subset<T, TableSession$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TableSession model
   */
  interface TableSessionFieldRefs {
    readonly id: FieldRef<"TableSession", 'String'>
    readonly venueId: FieldRef<"TableSession", 'String'>
    readonly tableId: FieldRef<"TableSession", 'String'>
    readonly startedAt: FieldRef<"TableSession", 'DateTime'>
    readonly endedAt: FieldRef<"TableSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TableSession findUnique
   */
  export type TableSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableSession
     */
    select?: TableSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableSession
     */
    omit?: TableSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableSessionInclude<ExtArgs> | null
    /**
     * Filter, which TableSession to fetch.
     */
    where: TableSessionWhereUniqueInput
  }

  /**
   * TableSession findUniqueOrThrow
   */
  export type TableSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableSession
     */
    select?: TableSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableSession
     */
    omit?: TableSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableSessionInclude<ExtArgs> | null
    /**
     * Filter, which TableSession to fetch.
     */
    where: TableSessionWhereUniqueInput
  }

  /**
   * TableSession findFirst
   */
  export type TableSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableSession
     */
    select?: TableSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableSession
     */
    omit?: TableSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableSessionInclude<ExtArgs> | null
    /**
     * Filter, which TableSession to fetch.
     */
    where?: TableSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TableSessions to fetch.
     */
    orderBy?: TableSessionOrderByWithRelationInput | TableSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TableSessions.
     */
    cursor?: TableSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TableSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TableSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TableSessions.
     */
    distinct?: TableSessionScalarFieldEnum | TableSessionScalarFieldEnum[]
  }

  /**
   * TableSession findFirstOrThrow
   */
  export type TableSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableSession
     */
    select?: TableSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableSession
     */
    omit?: TableSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableSessionInclude<ExtArgs> | null
    /**
     * Filter, which TableSession to fetch.
     */
    where?: TableSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TableSessions to fetch.
     */
    orderBy?: TableSessionOrderByWithRelationInput | TableSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TableSessions.
     */
    cursor?: TableSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TableSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TableSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TableSessions.
     */
    distinct?: TableSessionScalarFieldEnum | TableSessionScalarFieldEnum[]
  }

  /**
   * TableSession findMany
   */
  export type TableSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableSession
     */
    select?: TableSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableSession
     */
    omit?: TableSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableSessionInclude<ExtArgs> | null
    /**
     * Filter, which TableSessions to fetch.
     */
    where?: TableSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TableSessions to fetch.
     */
    orderBy?: TableSessionOrderByWithRelationInput | TableSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TableSessions.
     */
    cursor?: TableSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TableSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TableSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TableSessions.
     */
    distinct?: TableSessionScalarFieldEnum | TableSessionScalarFieldEnum[]
  }

  /**
   * TableSession create
   */
  export type TableSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableSession
     */
    select?: TableSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableSession
     */
    omit?: TableSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a TableSession.
     */
    data: XOR<TableSessionCreateInput, TableSessionUncheckedCreateInput>
  }

  /**
   * TableSession createMany
   */
  export type TableSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TableSessions.
     */
    data: TableSessionCreateManyInput | TableSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TableSession createManyAndReturn
   */
  export type TableSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableSession
     */
    select?: TableSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TableSession
     */
    omit?: TableSessionOmit<ExtArgs> | null
    /**
     * The data used to create many TableSessions.
     */
    data: TableSessionCreateManyInput | TableSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TableSession update
   */
  export type TableSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableSession
     */
    select?: TableSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableSession
     */
    omit?: TableSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a TableSession.
     */
    data: XOR<TableSessionUpdateInput, TableSessionUncheckedUpdateInput>
    /**
     * Choose, which TableSession to update.
     */
    where: TableSessionWhereUniqueInput
  }

  /**
   * TableSession updateMany
   */
  export type TableSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TableSessions.
     */
    data: XOR<TableSessionUpdateManyMutationInput, TableSessionUncheckedUpdateManyInput>
    /**
     * Filter which TableSessions to update
     */
    where?: TableSessionWhereInput
    /**
     * Limit how many TableSessions to update.
     */
    limit?: number
  }

  /**
   * TableSession updateManyAndReturn
   */
  export type TableSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableSession
     */
    select?: TableSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TableSession
     */
    omit?: TableSessionOmit<ExtArgs> | null
    /**
     * The data used to update TableSessions.
     */
    data: XOR<TableSessionUpdateManyMutationInput, TableSessionUncheckedUpdateManyInput>
    /**
     * Filter which TableSessions to update
     */
    where?: TableSessionWhereInput
    /**
     * Limit how many TableSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TableSession upsert
   */
  export type TableSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableSession
     */
    select?: TableSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableSession
     */
    omit?: TableSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the TableSession to update in case it exists.
     */
    where: TableSessionWhereUniqueInput
    /**
     * In case the TableSession found by the `where` argument doesn't exist, create a new TableSession with this data.
     */
    create: XOR<TableSessionCreateInput, TableSessionUncheckedCreateInput>
    /**
     * In case the TableSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TableSessionUpdateInput, TableSessionUncheckedUpdateInput>
  }

  /**
   * TableSession delete
   */
  export type TableSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableSession
     */
    select?: TableSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableSession
     */
    omit?: TableSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableSessionInclude<ExtArgs> | null
    /**
     * Filter which TableSession to delete.
     */
    where: TableSessionWhereUniqueInput
  }

  /**
   * TableSession deleteMany
   */
  export type TableSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TableSessions to delete
     */
    where?: TableSessionWhereInput
    /**
     * Limit how many TableSessions to delete.
     */
    limit?: number
  }

  /**
   * TableSession.orders
   */
  export type TableSession$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * TableSession without action
   */
  export type TableSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableSession
     */
    select?: TableSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableSession
     */
    omit?: TableSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableSessionInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    orderIndex: number | null
  }

  export type CategorySumAggregateOutputType = {
    orderIndex: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    venueId: string | null
    name: string | null
    orderIndex: number | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    venueId: string | null
    name: string | null
    orderIndex: number | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    venueId: number
    name: number
    orderIndex: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    orderIndex?: true
  }

  export type CategorySumAggregateInputType = {
    orderIndex?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    venueId?: true
    name?: true
    orderIndex?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    venueId?: true
    name?: true
    orderIndex?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    venueId?: true
    name?: true
    orderIndex?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    venueId: string
    name: string
    orderIndex: number
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    name?: boolean
    orderIndex?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    items?: boolean | Category$itemsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    name?: boolean
    orderIndex?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    name?: boolean
    orderIndex?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    venueId?: boolean
    name?: boolean
    orderIndex?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "venueId" | "name" | "orderIndex", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    items?: boolean | Category$itemsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      venue: Prisma.$VenuePayload<ExtArgs>
      items: Prisma.$MenuItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      venueId: string
      name: string
      orderIndex: number
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    venue<T extends VenueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VenueDefaultArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Category$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Category$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly venueId: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly orderIndex: FieldRef<"Category", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.items
   */
  export type Category$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    where?: MenuItemWhereInput
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    cursor?: MenuItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model MenuItem
   */

  export type AggregateMenuItem = {
    _count: MenuItemCountAggregateOutputType | null
    _avg: MenuItemAvgAggregateOutputType | null
    _sum: MenuItemSumAggregateOutputType | null
    _min: MenuItemMinAggregateOutputType | null
    _max: MenuItemMaxAggregateOutputType | null
  }

  export type MenuItemAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type MenuItemSumAggregateOutputType = {
    price: Decimal | null
  }

  export type MenuItemMinAggregateOutputType = {
    id: string | null
    venueId: string | null
    categoryId: string | null
    name: string | null
    description: string | null
    price: Decimal | null
    imageUrl: string | null
    outOfStock: boolean | null
  }

  export type MenuItemMaxAggregateOutputType = {
    id: string | null
    venueId: string | null
    categoryId: string | null
    name: string | null
    description: string | null
    price: Decimal | null
    imageUrl: string | null
    outOfStock: boolean | null
  }

  export type MenuItemCountAggregateOutputType = {
    id: number
    venueId: number
    categoryId: number
    name: number
    description: number
    price: number
    imageUrl: number
    outOfStock: number
    quizTags: number
    _all: number
  }


  export type MenuItemAvgAggregateInputType = {
    price?: true
  }

  export type MenuItemSumAggregateInputType = {
    price?: true
  }

  export type MenuItemMinAggregateInputType = {
    id?: true
    venueId?: true
    categoryId?: true
    name?: true
    description?: true
    price?: true
    imageUrl?: true
    outOfStock?: true
  }

  export type MenuItemMaxAggregateInputType = {
    id?: true
    venueId?: true
    categoryId?: true
    name?: true
    description?: true
    price?: true
    imageUrl?: true
    outOfStock?: true
  }

  export type MenuItemCountAggregateInputType = {
    id?: true
    venueId?: true
    categoryId?: true
    name?: true
    description?: true
    price?: true
    imageUrl?: true
    outOfStock?: true
    quizTags?: true
    _all?: true
  }

  export type MenuItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItem to aggregate.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MenuItems
    **/
    _count?: true | MenuItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuItemMaxAggregateInputType
  }

  export type GetMenuItemAggregateType<T extends MenuItemAggregateArgs> = {
        [P in keyof T & keyof AggregateMenuItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenuItem[P]>
      : GetScalarType<T[P], AggregateMenuItem[P]>
  }




  export type MenuItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemWhereInput
    orderBy?: MenuItemOrderByWithAggregationInput | MenuItemOrderByWithAggregationInput[]
    by: MenuItemScalarFieldEnum[] | MenuItemScalarFieldEnum
    having?: MenuItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuItemCountAggregateInputType | true
    _avg?: MenuItemAvgAggregateInputType
    _sum?: MenuItemSumAggregateInputType
    _min?: MenuItemMinAggregateInputType
    _max?: MenuItemMaxAggregateInputType
  }

  export type MenuItemGroupByOutputType = {
    id: string
    venueId: string
    categoryId: string
    name: string
    description: string | null
    price: Decimal
    imageUrl: string | null
    outOfStock: boolean
    quizTags: JsonValue | null
    _count: MenuItemCountAggregateOutputType | null
    _avg: MenuItemAvgAggregateOutputType | null
    _sum: MenuItemSumAggregateOutputType | null
    _min: MenuItemMinAggregateOutputType | null
    _max: MenuItemMaxAggregateOutputType | null
  }

  type GetMenuItemGroupByPayload<T extends MenuItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuItemGroupByOutputType[P]>
            : GetScalarType<T[P], MenuItemGroupByOutputType[P]>
        }
      >
    >


  export type MenuItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    categoryId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    imageUrl?: boolean
    outOfStock?: boolean
    quizTags?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    orderItems?: boolean | MenuItem$orderItemsArgs<ExtArgs>
    recipeItems?: boolean | MenuItem$recipeItemsArgs<ExtArgs>
    _count?: boolean | MenuItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItem"]>

  export type MenuItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    categoryId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    imageUrl?: boolean
    outOfStock?: boolean
    quizTags?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItem"]>

  export type MenuItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    categoryId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    imageUrl?: boolean
    outOfStock?: boolean
    quizTags?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItem"]>

  export type MenuItemSelectScalar = {
    id?: boolean
    venueId?: boolean
    categoryId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    imageUrl?: boolean
    outOfStock?: boolean
    quizTags?: boolean
  }

  export type MenuItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "venueId" | "categoryId" | "name" | "description" | "price" | "imageUrl" | "outOfStock" | "quizTags", ExtArgs["result"]["menuItem"]>
  export type MenuItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    orderItems?: boolean | MenuItem$orderItemsArgs<ExtArgs>
    recipeItems?: boolean | MenuItem$recipeItemsArgs<ExtArgs>
    _count?: boolean | MenuItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MenuItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type MenuItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $MenuItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MenuItem"
    objects: {
      venue: Prisma.$VenuePayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
      recipeItems: Prisma.$RecipeItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      venueId: string
      categoryId: string
      name: string
      description: string | null
      price: Prisma.Decimal
      imageUrl: string | null
      outOfStock: boolean
      quizTags: Prisma.JsonValue | null
    }, ExtArgs["result"]["menuItem"]>
    composites: {}
  }

  type MenuItemGetPayload<S extends boolean | null | undefined | MenuItemDefaultArgs> = $Result.GetResult<Prisma.$MenuItemPayload, S>

  type MenuItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MenuItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuItemCountAggregateInputType | true
    }

  export interface MenuItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MenuItem'], meta: { name: 'MenuItem' } }
    /**
     * Find zero or one MenuItem that matches the filter.
     * @param {MenuItemFindUniqueArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuItemFindUniqueArgs>(args: SelectSubset<T, MenuItemFindUniqueArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MenuItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MenuItemFindUniqueOrThrowArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuItemFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindFirstArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuItemFindFirstArgs>(args?: SelectSubset<T, MenuItemFindFirstArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindFirstOrThrowArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuItemFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MenuItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MenuItems
     * const menuItems = await prisma.menuItem.findMany()
     * 
     * // Get first 10 MenuItems
     * const menuItems = await prisma.menuItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuItemWithIdOnly = await prisma.menuItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MenuItemFindManyArgs>(args?: SelectSubset<T, MenuItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MenuItem.
     * @param {MenuItemCreateArgs} args - Arguments to create a MenuItem.
     * @example
     * // Create one MenuItem
     * const MenuItem = await prisma.menuItem.create({
     *   data: {
     *     // ... data to create a MenuItem
     *   }
     * })
     * 
     */
    create<T extends MenuItemCreateArgs>(args: SelectSubset<T, MenuItemCreateArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MenuItems.
     * @param {MenuItemCreateManyArgs} args - Arguments to create many MenuItems.
     * @example
     * // Create many MenuItems
     * const menuItem = await prisma.menuItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuItemCreateManyArgs>(args?: SelectSubset<T, MenuItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MenuItems and returns the data saved in the database.
     * @param {MenuItemCreateManyAndReturnArgs} args - Arguments to create many MenuItems.
     * @example
     * // Create many MenuItems
     * const menuItem = await prisma.menuItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MenuItems and only return the `id`
     * const menuItemWithIdOnly = await prisma.menuItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenuItemCreateManyAndReturnArgs>(args?: SelectSubset<T, MenuItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MenuItem.
     * @param {MenuItemDeleteArgs} args - Arguments to delete one MenuItem.
     * @example
     * // Delete one MenuItem
     * const MenuItem = await prisma.menuItem.delete({
     *   where: {
     *     // ... filter to delete one MenuItem
     *   }
     * })
     * 
     */
    delete<T extends MenuItemDeleteArgs>(args: SelectSubset<T, MenuItemDeleteArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MenuItem.
     * @param {MenuItemUpdateArgs} args - Arguments to update one MenuItem.
     * @example
     * // Update one MenuItem
     * const menuItem = await prisma.menuItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuItemUpdateArgs>(args: SelectSubset<T, MenuItemUpdateArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MenuItems.
     * @param {MenuItemDeleteManyArgs} args - Arguments to filter MenuItems to delete.
     * @example
     * // Delete a few MenuItems
     * const { count } = await prisma.menuItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuItemDeleteManyArgs>(args?: SelectSubset<T, MenuItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MenuItems
     * const menuItem = await prisma.menuItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuItemUpdateManyArgs>(args: SelectSubset<T, MenuItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuItems and returns the data updated in the database.
     * @param {MenuItemUpdateManyAndReturnArgs} args - Arguments to update many MenuItems.
     * @example
     * // Update many MenuItems
     * const menuItem = await prisma.menuItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MenuItems and only return the `id`
     * const menuItemWithIdOnly = await prisma.menuItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MenuItemUpdateManyAndReturnArgs>(args: SelectSubset<T, MenuItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MenuItem.
     * @param {MenuItemUpsertArgs} args - Arguments to update or create a MenuItem.
     * @example
     * // Update or create a MenuItem
     * const menuItem = await prisma.menuItem.upsert({
     *   create: {
     *     // ... data to create a MenuItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MenuItem we want to update
     *   }
     * })
     */
    upsert<T extends MenuItemUpsertArgs>(args: SelectSubset<T, MenuItemUpsertArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemCountArgs} args - Arguments to filter MenuItems to count.
     * @example
     * // Count the number of MenuItems
     * const count = await prisma.menuItem.count({
     *   where: {
     *     // ... the filter for the MenuItems we want to count
     *   }
     * })
    **/
    count<T extends MenuItemCountArgs>(
      args?: Subset<T, MenuItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MenuItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MenuItemAggregateArgs>(args: Subset<T, MenuItemAggregateArgs>): Prisma.PrismaPromise<GetMenuItemAggregateType<T>>

    /**
     * Group by MenuItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MenuItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuItemGroupByArgs['orderBy'] }
        : { orderBy?: MenuItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MenuItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MenuItem model
   */
  readonly fields: MenuItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MenuItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    venue<T extends VenueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VenueDefaultArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orderItems<T extends MenuItem$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, MenuItem$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recipeItems<T extends MenuItem$recipeItemsArgs<ExtArgs> = {}>(args?: Subset<T, MenuItem$recipeItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MenuItem model
   */
  interface MenuItemFieldRefs {
    readonly id: FieldRef<"MenuItem", 'String'>
    readonly venueId: FieldRef<"MenuItem", 'String'>
    readonly categoryId: FieldRef<"MenuItem", 'String'>
    readonly name: FieldRef<"MenuItem", 'String'>
    readonly description: FieldRef<"MenuItem", 'String'>
    readonly price: FieldRef<"MenuItem", 'Decimal'>
    readonly imageUrl: FieldRef<"MenuItem", 'String'>
    readonly outOfStock: FieldRef<"MenuItem", 'Boolean'>
    readonly quizTags: FieldRef<"MenuItem", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * MenuItem findUnique
   */
  export type MenuItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem findUniqueOrThrow
   */
  export type MenuItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem findFirst
   */
  export type MenuItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItems.
     */
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem findFirstOrThrow
   */
  export type MenuItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItems.
     */
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem findMany
   */
  export type MenuItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItems to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItems.
     */
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem create
   */
  export type MenuItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * The data needed to create a MenuItem.
     */
    data: XOR<MenuItemCreateInput, MenuItemUncheckedCreateInput>
  }

  /**
   * MenuItem createMany
   */
  export type MenuItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MenuItems.
     */
    data: MenuItemCreateManyInput | MenuItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MenuItem createManyAndReturn
   */
  export type MenuItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * The data used to create many MenuItems.
     */
    data: MenuItemCreateManyInput | MenuItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuItem update
   */
  export type MenuItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * The data needed to update a MenuItem.
     */
    data: XOR<MenuItemUpdateInput, MenuItemUncheckedUpdateInput>
    /**
     * Choose, which MenuItem to update.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem updateMany
   */
  export type MenuItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MenuItems.
     */
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyInput>
    /**
     * Filter which MenuItems to update
     */
    where?: MenuItemWhereInput
    /**
     * Limit how many MenuItems to update.
     */
    limit?: number
  }

  /**
   * MenuItem updateManyAndReturn
   */
  export type MenuItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * The data used to update MenuItems.
     */
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyInput>
    /**
     * Filter which MenuItems to update
     */
    where?: MenuItemWhereInput
    /**
     * Limit how many MenuItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuItem upsert
   */
  export type MenuItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * The filter to search for the MenuItem to update in case it exists.
     */
    where: MenuItemWhereUniqueInput
    /**
     * In case the MenuItem found by the `where` argument doesn't exist, create a new MenuItem with this data.
     */
    create: XOR<MenuItemCreateInput, MenuItemUncheckedCreateInput>
    /**
     * In case the MenuItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuItemUpdateInput, MenuItemUncheckedUpdateInput>
  }

  /**
   * MenuItem delete
   */
  export type MenuItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter which MenuItem to delete.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem deleteMany
   */
  export type MenuItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItems to delete
     */
    where?: MenuItemWhereInput
    /**
     * Limit how many MenuItems to delete.
     */
    limit?: number
  }

  /**
   * MenuItem.orderItems
   */
  export type MenuItem$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * MenuItem.recipeItems
   */
  export type MenuItem$recipeItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeItem
     */
    select?: RecipeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeItem
     */
    omit?: RecipeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeItemInclude<ExtArgs> | null
    where?: RecipeItemWhereInput
    orderBy?: RecipeItemOrderByWithRelationInput | RecipeItemOrderByWithRelationInput[]
    cursor?: RecipeItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeItemScalarFieldEnum | RecipeItemScalarFieldEnum[]
  }

  /**
   * MenuItem without action
   */
  export type MenuItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
  }


  /**
   * Model Ingredient
   */

  export type AggregateIngredient = {
    _count: IngredientCountAggregateOutputType | null
    _avg: IngredientAvgAggregateOutputType | null
    _sum: IngredientSumAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  export type IngredientAvgAggregateOutputType = {
    stock: Decimal | null
    lowThreshold: Decimal | null
  }

  export type IngredientSumAggregateOutputType = {
    stock: Decimal | null
    lowThreshold: Decimal | null
  }

  export type IngredientMinAggregateOutputType = {
    id: string | null
    venueId: string | null
    name: string | null
    unit: string | null
    stock: Decimal | null
    lowThreshold: Decimal | null
  }

  export type IngredientMaxAggregateOutputType = {
    id: string | null
    venueId: string | null
    name: string | null
    unit: string | null
    stock: Decimal | null
    lowThreshold: Decimal | null
  }

  export type IngredientCountAggregateOutputType = {
    id: number
    venueId: number
    name: number
    unit: number
    stock: number
    lowThreshold: number
    _all: number
  }


  export type IngredientAvgAggregateInputType = {
    stock?: true
    lowThreshold?: true
  }

  export type IngredientSumAggregateInputType = {
    stock?: true
    lowThreshold?: true
  }

  export type IngredientMinAggregateInputType = {
    id?: true
    venueId?: true
    name?: true
    unit?: true
    stock?: true
    lowThreshold?: true
  }

  export type IngredientMaxAggregateInputType = {
    id?: true
    venueId?: true
    name?: true
    unit?: true
    stock?: true
    lowThreshold?: true
  }

  export type IngredientCountAggregateInputType = {
    id?: true
    venueId?: true
    name?: true
    unit?: true
    stock?: true
    lowThreshold?: true
    _all?: true
  }

  export type IngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredient to aggregate.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ingredients
    **/
    _count?: true | IngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngredientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngredientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredientMaxAggregateInputType
  }

  export type GetIngredientAggregateType<T extends IngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredient[P]>
      : GetScalarType<T[P], AggregateIngredient[P]>
  }




  export type IngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientWhereInput
    orderBy?: IngredientOrderByWithAggregationInput | IngredientOrderByWithAggregationInput[]
    by: IngredientScalarFieldEnum[] | IngredientScalarFieldEnum
    having?: IngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredientCountAggregateInputType | true
    _avg?: IngredientAvgAggregateInputType
    _sum?: IngredientSumAggregateInputType
    _min?: IngredientMinAggregateInputType
    _max?: IngredientMaxAggregateInputType
  }

  export type IngredientGroupByOutputType = {
    id: string
    venueId: string
    name: string
    unit: string
    stock: Decimal
    lowThreshold: Decimal
    _count: IngredientCountAggregateOutputType | null
    _avg: IngredientAvgAggregateOutputType | null
    _sum: IngredientSumAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  type GetIngredientGroupByPayload<T extends IngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientGroupByOutputType[P]>
        }
      >
    >


  export type IngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    name?: boolean
    unit?: boolean
    stock?: boolean
    lowThreshold?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    recipeItems?: boolean | Ingredient$recipeItemsArgs<ExtArgs>
    _count?: boolean | IngredientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    name?: boolean
    unit?: boolean
    stock?: boolean
    lowThreshold?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    name?: boolean
    unit?: boolean
    stock?: boolean
    lowThreshold?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectScalar = {
    id?: boolean
    venueId?: boolean
    name?: boolean
    unit?: boolean
    stock?: boolean
    lowThreshold?: boolean
  }

  export type IngredientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "venueId" | "name" | "unit" | "stock" | "lowThreshold", ExtArgs["result"]["ingredient"]>
  export type IngredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    recipeItems?: boolean | Ingredient$recipeItemsArgs<ExtArgs>
    _count?: boolean | IngredientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IngredientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }
  export type IngredientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }

  export type $IngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ingredient"
    objects: {
      venue: Prisma.$VenuePayload<ExtArgs>
      recipeItems: Prisma.$RecipeItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      venueId: string
      name: string
      unit: string
      stock: Prisma.Decimal
      lowThreshold: Prisma.Decimal
    }, ExtArgs["result"]["ingredient"]>
    composites: {}
  }

  type IngredientGetPayload<S extends boolean | null | undefined | IngredientDefaultArgs> = $Result.GetResult<Prisma.$IngredientPayload, S>

  type IngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IngredientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngredientCountAggregateInputType | true
    }

  export interface IngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ingredient'], meta: { name: 'Ingredient' } }
    /**
     * Find zero or one Ingredient that matches the filter.
     * @param {IngredientFindUniqueArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngredientFindUniqueArgs>(args: SelectSubset<T, IngredientFindUniqueArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingredient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IngredientFindUniqueOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngredientFindUniqueOrThrowArgs>(args: SelectSubset<T, IngredientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngredientFindFirstArgs>(args?: SelectSubset<T, IngredientFindFirstArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngredientFindFirstOrThrowArgs>(args?: SelectSubset<T, IngredientFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredients
     * const ingredients = await prisma.ingredient.findMany()
     * 
     * // Get first 10 Ingredients
     * const ingredients = await prisma.ingredient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngredientFindManyArgs>(args?: SelectSubset<T, IngredientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingredient.
     * @param {IngredientCreateArgs} args - Arguments to create a Ingredient.
     * @example
     * // Create one Ingredient
     * const Ingredient = await prisma.ingredient.create({
     *   data: {
     *     // ... data to create a Ingredient
     *   }
     * })
     * 
     */
    create<T extends IngredientCreateArgs>(args: SelectSubset<T, IngredientCreateArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingredients.
     * @param {IngredientCreateManyArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredient = await prisma.ingredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngredientCreateManyArgs>(args?: SelectSubset<T, IngredientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingredients and returns the data saved in the database.
     * @param {IngredientCreateManyAndReturnArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredient = await prisma.ingredient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingredients and only return the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngredientCreateManyAndReturnArgs>(args?: SelectSubset<T, IngredientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ingredient.
     * @param {IngredientDeleteArgs} args - Arguments to delete one Ingredient.
     * @example
     * // Delete one Ingredient
     * const Ingredient = await prisma.ingredient.delete({
     *   where: {
     *     // ... filter to delete one Ingredient
     *   }
     * })
     * 
     */
    delete<T extends IngredientDeleteArgs>(args: SelectSubset<T, IngredientDeleteArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingredient.
     * @param {IngredientUpdateArgs} args - Arguments to update one Ingredient.
     * @example
     * // Update one Ingredient
     * const ingredient = await prisma.ingredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngredientUpdateArgs>(args: SelectSubset<T, IngredientUpdateArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingredients.
     * @param {IngredientDeleteManyArgs} args - Arguments to filter Ingredients to delete.
     * @example
     * // Delete a few Ingredients
     * const { count } = await prisma.ingredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngredientDeleteManyArgs>(args?: SelectSubset<T, IngredientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngredientUpdateManyArgs>(args: SelectSubset<T, IngredientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients and returns the data updated in the database.
     * @param {IngredientUpdateManyAndReturnArgs} args - Arguments to update many Ingredients.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ingredients and only return the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IngredientUpdateManyAndReturnArgs>(args: SelectSubset<T, IngredientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ingredient.
     * @param {IngredientUpsertArgs} args - Arguments to update or create a Ingredient.
     * @example
     * // Update or create a Ingredient
     * const ingredient = await prisma.ingredient.upsert({
     *   create: {
     *     // ... data to create a Ingredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingredient we want to update
     *   }
     * })
     */
    upsert<T extends IngredientUpsertArgs>(args: SelectSubset<T, IngredientUpsertArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientCountArgs} args - Arguments to filter Ingredients to count.
     * @example
     * // Count the number of Ingredients
     * const count = await prisma.ingredient.count({
     *   where: {
     *     // ... the filter for the Ingredients we want to count
     *   }
     * })
    **/
    count<T extends IngredientCountArgs>(
      args?: Subset<T, IngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IngredientAggregateArgs>(args: Subset<T, IngredientAggregateArgs>): Prisma.PrismaPromise<GetIngredientAggregateType<T>>

    /**
     * Group by Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngredientGroupByArgs['orderBy'] }
        : { orderBy?: IngredientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ingredient model
   */
  readonly fields: IngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ingredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    venue<T extends VenueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VenueDefaultArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recipeItems<T extends Ingredient$recipeItemsArgs<ExtArgs> = {}>(args?: Subset<T, Ingredient$recipeItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ingredient model
   */
  interface IngredientFieldRefs {
    readonly id: FieldRef<"Ingredient", 'String'>
    readonly venueId: FieldRef<"Ingredient", 'String'>
    readonly name: FieldRef<"Ingredient", 'String'>
    readonly unit: FieldRef<"Ingredient", 'String'>
    readonly stock: FieldRef<"Ingredient", 'Decimal'>
    readonly lowThreshold: FieldRef<"Ingredient", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Ingredient findUnique
   */
  export type IngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient findUniqueOrThrow
   */
  export type IngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient findFirst
   */
  export type IngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient findFirstOrThrow
   */
  export type IngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient findMany
   */
  export type IngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient create
   */
  export type IngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The data needed to create a Ingredient.
     */
    data: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
  }

  /**
   * Ingredient createMany
   */
  export type IngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientCreateManyInput | IngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingredient createManyAndReturn
   */
  export type IngredientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientCreateManyInput | IngredientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ingredient update
   */
  export type IngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The data needed to update a Ingredient.
     */
    data: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
    /**
     * Choose, which Ingredient to update.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient updateMany
   */
  export type IngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to update.
     */
    limit?: number
  }

  /**
   * Ingredient updateManyAndReturn
   */
  export type IngredientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ingredient upsert
   */
  export type IngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The filter to search for the Ingredient to update in case it exists.
     */
    where: IngredientWhereUniqueInput
    /**
     * In case the Ingredient found by the `where` argument doesn't exist, create a new Ingredient with this data.
     */
    create: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
    /**
     * In case the Ingredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
  }

  /**
   * Ingredient delete
   */
  export type IngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter which Ingredient to delete.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient deleteMany
   */
  export type IngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredients to delete
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to delete.
     */
    limit?: number
  }

  /**
   * Ingredient.recipeItems
   */
  export type Ingredient$recipeItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeItem
     */
    select?: RecipeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeItem
     */
    omit?: RecipeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeItemInclude<ExtArgs> | null
    where?: RecipeItemWhereInput
    orderBy?: RecipeItemOrderByWithRelationInput | RecipeItemOrderByWithRelationInput[]
    cursor?: RecipeItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeItemScalarFieldEnum | RecipeItemScalarFieldEnum[]
  }

  /**
   * Ingredient without action
   */
  export type IngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
  }


  /**
   * Model RecipeItem
   */

  export type AggregateRecipeItem = {
    _count: RecipeItemCountAggregateOutputType | null
    _avg: RecipeItemAvgAggregateOutputType | null
    _sum: RecipeItemSumAggregateOutputType | null
    _min: RecipeItemMinAggregateOutputType | null
    _max: RecipeItemMaxAggregateOutputType | null
  }

  export type RecipeItemAvgAggregateOutputType = {
    quantityUsed: Decimal | null
  }

  export type RecipeItemSumAggregateOutputType = {
    quantityUsed: Decimal | null
  }

  export type RecipeItemMinAggregateOutputType = {
    id: string | null
    venueId: string | null
    menuItemId: string | null
    ingredientId: string | null
    quantityUsed: Decimal | null
  }

  export type RecipeItemMaxAggregateOutputType = {
    id: string | null
    venueId: string | null
    menuItemId: string | null
    ingredientId: string | null
    quantityUsed: Decimal | null
  }

  export type RecipeItemCountAggregateOutputType = {
    id: number
    venueId: number
    menuItemId: number
    ingredientId: number
    quantityUsed: number
    _all: number
  }


  export type RecipeItemAvgAggregateInputType = {
    quantityUsed?: true
  }

  export type RecipeItemSumAggregateInputType = {
    quantityUsed?: true
  }

  export type RecipeItemMinAggregateInputType = {
    id?: true
    venueId?: true
    menuItemId?: true
    ingredientId?: true
    quantityUsed?: true
  }

  export type RecipeItemMaxAggregateInputType = {
    id?: true
    venueId?: true
    menuItemId?: true
    ingredientId?: true
    quantityUsed?: true
  }

  export type RecipeItemCountAggregateInputType = {
    id?: true
    venueId?: true
    menuItemId?: true
    ingredientId?: true
    quantityUsed?: true
    _all?: true
  }

  export type RecipeItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeItem to aggregate.
     */
    where?: RecipeItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeItems to fetch.
     */
    orderBy?: RecipeItemOrderByWithRelationInput | RecipeItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecipeItems
    **/
    _count?: true | RecipeItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeItemMaxAggregateInputType
  }

  export type GetRecipeItemAggregateType<T extends RecipeItemAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipeItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipeItem[P]>
      : GetScalarType<T[P], AggregateRecipeItem[P]>
  }




  export type RecipeItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeItemWhereInput
    orderBy?: RecipeItemOrderByWithAggregationInput | RecipeItemOrderByWithAggregationInput[]
    by: RecipeItemScalarFieldEnum[] | RecipeItemScalarFieldEnum
    having?: RecipeItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeItemCountAggregateInputType | true
    _avg?: RecipeItemAvgAggregateInputType
    _sum?: RecipeItemSumAggregateInputType
    _min?: RecipeItemMinAggregateInputType
    _max?: RecipeItemMaxAggregateInputType
  }

  export type RecipeItemGroupByOutputType = {
    id: string
    venueId: string
    menuItemId: string
    ingredientId: string
    quantityUsed: Decimal
    _count: RecipeItemCountAggregateOutputType | null
    _avg: RecipeItemAvgAggregateOutputType | null
    _sum: RecipeItemSumAggregateOutputType | null
    _min: RecipeItemMinAggregateOutputType | null
    _max: RecipeItemMaxAggregateOutputType | null
  }

  type GetRecipeItemGroupByPayload<T extends RecipeItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeItemGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeItemGroupByOutputType[P]>
        }
      >
    >


  export type RecipeItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    menuItemId?: boolean
    ingredientId?: boolean
    quantityUsed?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeItem"]>

  export type RecipeItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    menuItemId?: boolean
    ingredientId?: boolean
    quantityUsed?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeItem"]>

  export type RecipeItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    menuItemId?: boolean
    ingredientId?: boolean
    quantityUsed?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeItem"]>

  export type RecipeItemSelectScalar = {
    id?: boolean
    venueId?: boolean
    menuItemId?: boolean
    ingredientId?: boolean
    quantityUsed?: boolean
  }

  export type RecipeItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "venueId" | "menuItemId" | "ingredientId" | "quantityUsed", ExtArgs["result"]["recipeItem"]>
  export type RecipeItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }
  export type RecipeItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }
  export type RecipeItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }

  export type $RecipeItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecipeItem"
    objects: {
      venue: Prisma.$VenuePayload<ExtArgs>
      menuItem: Prisma.$MenuItemPayload<ExtArgs>
      ingredient: Prisma.$IngredientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      venueId: string
      menuItemId: string
      ingredientId: string
      quantityUsed: Prisma.Decimal
    }, ExtArgs["result"]["recipeItem"]>
    composites: {}
  }

  type RecipeItemGetPayload<S extends boolean | null | undefined | RecipeItemDefaultArgs> = $Result.GetResult<Prisma.$RecipeItemPayload, S>

  type RecipeItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecipeItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipeItemCountAggregateInputType | true
    }

  export interface RecipeItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecipeItem'], meta: { name: 'RecipeItem' } }
    /**
     * Find zero or one RecipeItem that matches the filter.
     * @param {RecipeItemFindUniqueArgs} args - Arguments to find a RecipeItem
     * @example
     * // Get one RecipeItem
     * const recipeItem = await prisma.recipeItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeItemFindUniqueArgs>(args: SelectSubset<T, RecipeItemFindUniqueArgs<ExtArgs>>): Prisma__RecipeItemClient<$Result.GetResult<Prisma.$RecipeItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecipeItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipeItemFindUniqueOrThrowArgs} args - Arguments to find a RecipeItem
     * @example
     * // Get one RecipeItem
     * const recipeItem = await prisma.recipeItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeItemFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipeItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipeItemClient<$Result.GetResult<Prisma.$RecipeItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecipeItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeItemFindFirstArgs} args - Arguments to find a RecipeItem
     * @example
     * // Get one RecipeItem
     * const recipeItem = await prisma.recipeItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeItemFindFirstArgs>(args?: SelectSubset<T, RecipeItemFindFirstArgs<ExtArgs>>): Prisma__RecipeItemClient<$Result.GetResult<Prisma.$RecipeItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecipeItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeItemFindFirstOrThrowArgs} args - Arguments to find a RecipeItem
     * @example
     * // Get one RecipeItem
     * const recipeItem = await prisma.recipeItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeItemFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipeItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipeItemClient<$Result.GetResult<Prisma.$RecipeItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecipeItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecipeItems
     * const recipeItems = await prisma.recipeItem.findMany()
     * 
     * // Get first 10 RecipeItems
     * const recipeItems = await prisma.recipeItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeItemWithIdOnly = await prisma.recipeItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipeItemFindManyArgs>(args?: SelectSubset<T, RecipeItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecipeItem.
     * @param {RecipeItemCreateArgs} args - Arguments to create a RecipeItem.
     * @example
     * // Create one RecipeItem
     * const RecipeItem = await prisma.recipeItem.create({
     *   data: {
     *     // ... data to create a RecipeItem
     *   }
     * })
     * 
     */
    create<T extends RecipeItemCreateArgs>(args: SelectSubset<T, RecipeItemCreateArgs<ExtArgs>>): Prisma__RecipeItemClient<$Result.GetResult<Prisma.$RecipeItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecipeItems.
     * @param {RecipeItemCreateManyArgs} args - Arguments to create many RecipeItems.
     * @example
     * // Create many RecipeItems
     * const recipeItem = await prisma.recipeItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipeItemCreateManyArgs>(args?: SelectSubset<T, RecipeItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecipeItems and returns the data saved in the database.
     * @param {RecipeItemCreateManyAndReturnArgs} args - Arguments to create many RecipeItems.
     * @example
     * // Create many RecipeItems
     * const recipeItem = await prisma.recipeItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecipeItems and only return the `id`
     * const recipeItemWithIdOnly = await prisma.recipeItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipeItemCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipeItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecipeItem.
     * @param {RecipeItemDeleteArgs} args - Arguments to delete one RecipeItem.
     * @example
     * // Delete one RecipeItem
     * const RecipeItem = await prisma.recipeItem.delete({
     *   where: {
     *     // ... filter to delete one RecipeItem
     *   }
     * })
     * 
     */
    delete<T extends RecipeItemDeleteArgs>(args: SelectSubset<T, RecipeItemDeleteArgs<ExtArgs>>): Prisma__RecipeItemClient<$Result.GetResult<Prisma.$RecipeItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecipeItem.
     * @param {RecipeItemUpdateArgs} args - Arguments to update one RecipeItem.
     * @example
     * // Update one RecipeItem
     * const recipeItem = await prisma.recipeItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipeItemUpdateArgs>(args: SelectSubset<T, RecipeItemUpdateArgs<ExtArgs>>): Prisma__RecipeItemClient<$Result.GetResult<Prisma.$RecipeItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecipeItems.
     * @param {RecipeItemDeleteManyArgs} args - Arguments to filter RecipeItems to delete.
     * @example
     * // Delete a few RecipeItems
     * const { count } = await prisma.recipeItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipeItemDeleteManyArgs>(args?: SelectSubset<T, RecipeItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecipeItems
     * const recipeItem = await prisma.recipeItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipeItemUpdateManyArgs>(args: SelectSubset<T, RecipeItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeItems and returns the data updated in the database.
     * @param {RecipeItemUpdateManyAndReturnArgs} args - Arguments to update many RecipeItems.
     * @example
     * // Update many RecipeItems
     * const recipeItem = await prisma.recipeItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecipeItems and only return the `id`
     * const recipeItemWithIdOnly = await prisma.recipeItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecipeItemUpdateManyAndReturnArgs>(args: SelectSubset<T, RecipeItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecipeItem.
     * @param {RecipeItemUpsertArgs} args - Arguments to update or create a RecipeItem.
     * @example
     * // Update or create a RecipeItem
     * const recipeItem = await prisma.recipeItem.upsert({
     *   create: {
     *     // ... data to create a RecipeItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecipeItem we want to update
     *   }
     * })
     */
    upsert<T extends RecipeItemUpsertArgs>(args: SelectSubset<T, RecipeItemUpsertArgs<ExtArgs>>): Prisma__RecipeItemClient<$Result.GetResult<Prisma.$RecipeItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecipeItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeItemCountArgs} args - Arguments to filter RecipeItems to count.
     * @example
     * // Count the number of RecipeItems
     * const count = await prisma.recipeItem.count({
     *   where: {
     *     // ... the filter for the RecipeItems we want to count
     *   }
     * })
    **/
    count<T extends RecipeItemCountArgs>(
      args?: Subset<T, RecipeItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecipeItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipeItemAggregateArgs>(args: Subset<T, RecipeItemAggregateArgs>): Prisma.PrismaPromise<GetRecipeItemAggregateType<T>>

    /**
     * Group by RecipeItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecipeItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeItemGroupByArgs['orderBy'] }
        : { orderBy?: RecipeItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecipeItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecipeItem model
   */
  readonly fields: RecipeItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecipeItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    venue<T extends VenueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VenueDefaultArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    menuItem<T extends MenuItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuItemDefaultArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ingredient<T extends IngredientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IngredientDefaultArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RecipeItem model
   */
  interface RecipeItemFieldRefs {
    readonly id: FieldRef<"RecipeItem", 'String'>
    readonly venueId: FieldRef<"RecipeItem", 'String'>
    readonly menuItemId: FieldRef<"RecipeItem", 'String'>
    readonly ingredientId: FieldRef<"RecipeItem", 'String'>
    readonly quantityUsed: FieldRef<"RecipeItem", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * RecipeItem findUnique
   */
  export type RecipeItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeItem
     */
    select?: RecipeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeItem
     */
    omit?: RecipeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeItemInclude<ExtArgs> | null
    /**
     * Filter, which RecipeItem to fetch.
     */
    where: RecipeItemWhereUniqueInput
  }

  /**
   * RecipeItem findUniqueOrThrow
   */
  export type RecipeItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeItem
     */
    select?: RecipeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeItem
     */
    omit?: RecipeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeItemInclude<ExtArgs> | null
    /**
     * Filter, which RecipeItem to fetch.
     */
    where: RecipeItemWhereUniqueInput
  }

  /**
   * RecipeItem findFirst
   */
  export type RecipeItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeItem
     */
    select?: RecipeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeItem
     */
    omit?: RecipeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeItemInclude<ExtArgs> | null
    /**
     * Filter, which RecipeItem to fetch.
     */
    where?: RecipeItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeItems to fetch.
     */
    orderBy?: RecipeItemOrderByWithRelationInput | RecipeItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeItems.
     */
    cursor?: RecipeItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeItems.
     */
    distinct?: RecipeItemScalarFieldEnum | RecipeItemScalarFieldEnum[]
  }

  /**
   * RecipeItem findFirstOrThrow
   */
  export type RecipeItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeItem
     */
    select?: RecipeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeItem
     */
    omit?: RecipeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeItemInclude<ExtArgs> | null
    /**
     * Filter, which RecipeItem to fetch.
     */
    where?: RecipeItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeItems to fetch.
     */
    orderBy?: RecipeItemOrderByWithRelationInput | RecipeItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeItems.
     */
    cursor?: RecipeItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeItems.
     */
    distinct?: RecipeItemScalarFieldEnum | RecipeItemScalarFieldEnum[]
  }

  /**
   * RecipeItem findMany
   */
  export type RecipeItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeItem
     */
    select?: RecipeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeItem
     */
    omit?: RecipeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeItemInclude<ExtArgs> | null
    /**
     * Filter, which RecipeItems to fetch.
     */
    where?: RecipeItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeItems to fetch.
     */
    orderBy?: RecipeItemOrderByWithRelationInput | RecipeItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecipeItems.
     */
    cursor?: RecipeItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeItems.
     */
    distinct?: RecipeItemScalarFieldEnum | RecipeItemScalarFieldEnum[]
  }

  /**
   * RecipeItem create
   */
  export type RecipeItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeItem
     */
    select?: RecipeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeItem
     */
    omit?: RecipeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeItemInclude<ExtArgs> | null
    /**
     * The data needed to create a RecipeItem.
     */
    data: XOR<RecipeItemCreateInput, RecipeItemUncheckedCreateInput>
  }

  /**
   * RecipeItem createMany
   */
  export type RecipeItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecipeItems.
     */
    data: RecipeItemCreateManyInput | RecipeItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecipeItem createManyAndReturn
   */
  export type RecipeItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeItem
     */
    select?: RecipeItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeItem
     */
    omit?: RecipeItemOmit<ExtArgs> | null
    /**
     * The data used to create many RecipeItems.
     */
    data: RecipeItemCreateManyInput | RecipeItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecipeItem update
   */
  export type RecipeItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeItem
     */
    select?: RecipeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeItem
     */
    omit?: RecipeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeItemInclude<ExtArgs> | null
    /**
     * The data needed to update a RecipeItem.
     */
    data: XOR<RecipeItemUpdateInput, RecipeItemUncheckedUpdateInput>
    /**
     * Choose, which RecipeItem to update.
     */
    where: RecipeItemWhereUniqueInput
  }

  /**
   * RecipeItem updateMany
   */
  export type RecipeItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecipeItems.
     */
    data: XOR<RecipeItemUpdateManyMutationInput, RecipeItemUncheckedUpdateManyInput>
    /**
     * Filter which RecipeItems to update
     */
    where?: RecipeItemWhereInput
    /**
     * Limit how many RecipeItems to update.
     */
    limit?: number
  }

  /**
   * RecipeItem updateManyAndReturn
   */
  export type RecipeItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeItem
     */
    select?: RecipeItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeItem
     */
    omit?: RecipeItemOmit<ExtArgs> | null
    /**
     * The data used to update RecipeItems.
     */
    data: XOR<RecipeItemUpdateManyMutationInput, RecipeItemUncheckedUpdateManyInput>
    /**
     * Filter which RecipeItems to update
     */
    where?: RecipeItemWhereInput
    /**
     * Limit how many RecipeItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecipeItem upsert
   */
  export type RecipeItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeItem
     */
    select?: RecipeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeItem
     */
    omit?: RecipeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeItemInclude<ExtArgs> | null
    /**
     * The filter to search for the RecipeItem to update in case it exists.
     */
    where: RecipeItemWhereUniqueInput
    /**
     * In case the RecipeItem found by the `where` argument doesn't exist, create a new RecipeItem with this data.
     */
    create: XOR<RecipeItemCreateInput, RecipeItemUncheckedCreateInput>
    /**
     * In case the RecipeItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeItemUpdateInput, RecipeItemUncheckedUpdateInput>
  }

  /**
   * RecipeItem delete
   */
  export type RecipeItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeItem
     */
    select?: RecipeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeItem
     */
    omit?: RecipeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeItemInclude<ExtArgs> | null
    /**
     * Filter which RecipeItem to delete.
     */
    where: RecipeItemWhereUniqueInput
  }

  /**
   * RecipeItem deleteMany
   */
  export type RecipeItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeItems to delete
     */
    where?: RecipeItemWhereInput
    /**
     * Limit how many RecipeItems to delete.
     */
    limit?: number
  }

  /**
   * RecipeItem without action
   */
  export type RecipeItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeItem
     */
    select?: RecipeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeItem
     */
    omit?: RecipeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeItemInclude<ExtArgs> | null
  }


  /**
   * Model AddOn
   */

  export type AggregateAddOn = {
    _count: AddOnCountAggregateOutputType | null
    _avg: AddOnAvgAggregateOutputType | null
    _sum: AddOnSumAggregateOutputType | null
    _min: AddOnMinAggregateOutputType | null
    _max: AddOnMaxAggregateOutputType | null
  }

  export type AddOnAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type AddOnSumAggregateOutputType = {
    price: Decimal | null
  }

  export type AddOnMinAggregateOutputType = {
    id: string | null
    venueId: string | null
    name: string | null
    price: Decimal | null
  }

  export type AddOnMaxAggregateOutputType = {
    id: string | null
    venueId: string | null
    name: string | null
    price: Decimal | null
  }

  export type AddOnCountAggregateOutputType = {
    id: number
    venueId: number
    name: number
    price: number
    applicableItemIds: number
    _all: number
  }


  export type AddOnAvgAggregateInputType = {
    price?: true
  }

  export type AddOnSumAggregateInputType = {
    price?: true
  }

  export type AddOnMinAggregateInputType = {
    id?: true
    venueId?: true
    name?: true
    price?: true
  }

  export type AddOnMaxAggregateInputType = {
    id?: true
    venueId?: true
    name?: true
    price?: true
  }

  export type AddOnCountAggregateInputType = {
    id?: true
    venueId?: true
    name?: true
    price?: true
    applicableItemIds?: true
    _all?: true
  }

  export type AddOnAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AddOn to aggregate.
     */
    where?: AddOnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddOns to fetch.
     */
    orderBy?: AddOnOrderByWithRelationInput | AddOnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddOnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddOns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddOns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AddOns
    **/
    _count?: true | AddOnCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddOnAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddOnSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddOnMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddOnMaxAggregateInputType
  }

  export type GetAddOnAggregateType<T extends AddOnAggregateArgs> = {
        [P in keyof T & keyof AggregateAddOn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddOn[P]>
      : GetScalarType<T[P], AggregateAddOn[P]>
  }




  export type AddOnGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddOnWhereInput
    orderBy?: AddOnOrderByWithAggregationInput | AddOnOrderByWithAggregationInput[]
    by: AddOnScalarFieldEnum[] | AddOnScalarFieldEnum
    having?: AddOnScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddOnCountAggregateInputType | true
    _avg?: AddOnAvgAggregateInputType
    _sum?: AddOnSumAggregateInputType
    _min?: AddOnMinAggregateInputType
    _max?: AddOnMaxAggregateInputType
  }

  export type AddOnGroupByOutputType = {
    id: string
    venueId: string
    name: string
    price: Decimal
    applicableItemIds: string[]
    _count: AddOnCountAggregateOutputType | null
    _avg: AddOnAvgAggregateOutputType | null
    _sum: AddOnSumAggregateOutputType | null
    _min: AddOnMinAggregateOutputType | null
    _max: AddOnMaxAggregateOutputType | null
  }

  type GetAddOnGroupByPayload<T extends AddOnGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddOnGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddOnGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddOnGroupByOutputType[P]>
            : GetScalarType<T[P], AddOnGroupByOutputType[P]>
        }
      >
    >


  export type AddOnSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    name?: boolean
    price?: boolean
    applicableItemIds?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addOn"]>

  export type AddOnSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    name?: boolean
    price?: boolean
    applicableItemIds?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addOn"]>

  export type AddOnSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    name?: boolean
    price?: boolean
    applicableItemIds?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addOn"]>

  export type AddOnSelectScalar = {
    id?: boolean
    venueId?: boolean
    name?: boolean
    price?: boolean
    applicableItemIds?: boolean
  }

  export type AddOnOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "venueId" | "name" | "price" | "applicableItemIds", ExtArgs["result"]["addOn"]>
  export type AddOnInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }
  export type AddOnIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }
  export type AddOnIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }

  export type $AddOnPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AddOn"
    objects: {
      venue: Prisma.$VenuePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      venueId: string
      name: string
      price: Prisma.Decimal
      applicableItemIds: string[]
    }, ExtArgs["result"]["addOn"]>
    composites: {}
  }

  type AddOnGetPayload<S extends boolean | null | undefined | AddOnDefaultArgs> = $Result.GetResult<Prisma.$AddOnPayload, S>

  type AddOnCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddOnFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddOnCountAggregateInputType | true
    }

  export interface AddOnDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AddOn'], meta: { name: 'AddOn' } }
    /**
     * Find zero or one AddOn that matches the filter.
     * @param {AddOnFindUniqueArgs} args - Arguments to find a AddOn
     * @example
     * // Get one AddOn
     * const addOn = await prisma.addOn.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddOnFindUniqueArgs>(args: SelectSubset<T, AddOnFindUniqueArgs<ExtArgs>>): Prisma__AddOnClient<$Result.GetResult<Prisma.$AddOnPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AddOn that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddOnFindUniqueOrThrowArgs} args - Arguments to find a AddOn
     * @example
     * // Get one AddOn
     * const addOn = await prisma.addOn.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddOnFindUniqueOrThrowArgs>(args: SelectSubset<T, AddOnFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddOnClient<$Result.GetResult<Prisma.$AddOnPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AddOn that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddOnFindFirstArgs} args - Arguments to find a AddOn
     * @example
     * // Get one AddOn
     * const addOn = await prisma.addOn.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddOnFindFirstArgs>(args?: SelectSubset<T, AddOnFindFirstArgs<ExtArgs>>): Prisma__AddOnClient<$Result.GetResult<Prisma.$AddOnPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AddOn that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddOnFindFirstOrThrowArgs} args - Arguments to find a AddOn
     * @example
     * // Get one AddOn
     * const addOn = await prisma.addOn.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddOnFindFirstOrThrowArgs>(args?: SelectSubset<T, AddOnFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddOnClient<$Result.GetResult<Prisma.$AddOnPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AddOns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddOnFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AddOns
     * const addOns = await prisma.addOn.findMany()
     * 
     * // Get first 10 AddOns
     * const addOns = await prisma.addOn.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addOnWithIdOnly = await prisma.addOn.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddOnFindManyArgs>(args?: SelectSubset<T, AddOnFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddOnPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AddOn.
     * @param {AddOnCreateArgs} args - Arguments to create a AddOn.
     * @example
     * // Create one AddOn
     * const AddOn = await prisma.addOn.create({
     *   data: {
     *     // ... data to create a AddOn
     *   }
     * })
     * 
     */
    create<T extends AddOnCreateArgs>(args: SelectSubset<T, AddOnCreateArgs<ExtArgs>>): Prisma__AddOnClient<$Result.GetResult<Prisma.$AddOnPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AddOns.
     * @param {AddOnCreateManyArgs} args - Arguments to create many AddOns.
     * @example
     * // Create many AddOns
     * const addOn = await prisma.addOn.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddOnCreateManyArgs>(args?: SelectSubset<T, AddOnCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AddOns and returns the data saved in the database.
     * @param {AddOnCreateManyAndReturnArgs} args - Arguments to create many AddOns.
     * @example
     * // Create many AddOns
     * const addOn = await prisma.addOn.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AddOns and only return the `id`
     * const addOnWithIdOnly = await prisma.addOn.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddOnCreateManyAndReturnArgs>(args?: SelectSubset<T, AddOnCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddOnPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AddOn.
     * @param {AddOnDeleteArgs} args - Arguments to delete one AddOn.
     * @example
     * // Delete one AddOn
     * const AddOn = await prisma.addOn.delete({
     *   where: {
     *     // ... filter to delete one AddOn
     *   }
     * })
     * 
     */
    delete<T extends AddOnDeleteArgs>(args: SelectSubset<T, AddOnDeleteArgs<ExtArgs>>): Prisma__AddOnClient<$Result.GetResult<Prisma.$AddOnPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AddOn.
     * @param {AddOnUpdateArgs} args - Arguments to update one AddOn.
     * @example
     * // Update one AddOn
     * const addOn = await prisma.addOn.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddOnUpdateArgs>(args: SelectSubset<T, AddOnUpdateArgs<ExtArgs>>): Prisma__AddOnClient<$Result.GetResult<Prisma.$AddOnPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AddOns.
     * @param {AddOnDeleteManyArgs} args - Arguments to filter AddOns to delete.
     * @example
     * // Delete a few AddOns
     * const { count } = await prisma.addOn.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddOnDeleteManyArgs>(args?: SelectSubset<T, AddOnDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AddOns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddOnUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AddOns
     * const addOn = await prisma.addOn.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddOnUpdateManyArgs>(args: SelectSubset<T, AddOnUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AddOns and returns the data updated in the database.
     * @param {AddOnUpdateManyAndReturnArgs} args - Arguments to update many AddOns.
     * @example
     * // Update many AddOns
     * const addOn = await prisma.addOn.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AddOns and only return the `id`
     * const addOnWithIdOnly = await prisma.addOn.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AddOnUpdateManyAndReturnArgs>(args: SelectSubset<T, AddOnUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddOnPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AddOn.
     * @param {AddOnUpsertArgs} args - Arguments to update or create a AddOn.
     * @example
     * // Update or create a AddOn
     * const addOn = await prisma.addOn.upsert({
     *   create: {
     *     // ... data to create a AddOn
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AddOn we want to update
     *   }
     * })
     */
    upsert<T extends AddOnUpsertArgs>(args: SelectSubset<T, AddOnUpsertArgs<ExtArgs>>): Prisma__AddOnClient<$Result.GetResult<Prisma.$AddOnPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AddOns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddOnCountArgs} args - Arguments to filter AddOns to count.
     * @example
     * // Count the number of AddOns
     * const count = await prisma.addOn.count({
     *   where: {
     *     // ... the filter for the AddOns we want to count
     *   }
     * })
    **/
    count<T extends AddOnCountArgs>(
      args?: Subset<T, AddOnCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddOnCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AddOn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddOnAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddOnAggregateArgs>(args: Subset<T, AddOnAggregateArgs>): Prisma.PrismaPromise<GetAddOnAggregateType<T>>

    /**
     * Group by AddOn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddOnGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddOnGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddOnGroupByArgs['orderBy'] }
        : { orderBy?: AddOnGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddOnGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddOnGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AddOn model
   */
  readonly fields: AddOnFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AddOn.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddOnClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    venue<T extends VenueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VenueDefaultArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AddOn model
   */
  interface AddOnFieldRefs {
    readonly id: FieldRef<"AddOn", 'String'>
    readonly venueId: FieldRef<"AddOn", 'String'>
    readonly name: FieldRef<"AddOn", 'String'>
    readonly price: FieldRef<"AddOn", 'Decimal'>
    readonly applicableItemIds: FieldRef<"AddOn", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * AddOn findUnique
   */
  export type AddOnFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddOn
     */
    select?: AddOnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddOn
     */
    omit?: AddOnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddOnInclude<ExtArgs> | null
    /**
     * Filter, which AddOn to fetch.
     */
    where: AddOnWhereUniqueInput
  }

  /**
   * AddOn findUniqueOrThrow
   */
  export type AddOnFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddOn
     */
    select?: AddOnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddOn
     */
    omit?: AddOnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddOnInclude<ExtArgs> | null
    /**
     * Filter, which AddOn to fetch.
     */
    where: AddOnWhereUniqueInput
  }

  /**
   * AddOn findFirst
   */
  export type AddOnFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddOn
     */
    select?: AddOnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddOn
     */
    omit?: AddOnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddOnInclude<ExtArgs> | null
    /**
     * Filter, which AddOn to fetch.
     */
    where?: AddOnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddOns to fetch.
     */
    orderBy?: AddOnOrderByWithRelationInput | AddOnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AddOns.
     */
    cursor?: AddOnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddOns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddOns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AddOns.
     */
    distinct?: AddOnScalarFieldEnum | AddOnScalarFieldEnum[]
  }

  /**
   * AddOn findFirstOrThrow
   */
  export type AddOnFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddOn
     */
    select?: AddOnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddOn
     */
    omit?: AddOnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddOnInclude<ExtArgs> | null
    /**
     * Filter, which AddOn to fetch.
     */
    where?: AddOnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddOns to fetch.
     */
    orderBy?: AddOnOrderByWithRelationInput | AddOnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AddOns.
     */
    cursor?: AddOnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddOns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddOns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AddOns.
     */
    distinct?: AddOnScalarFieldEnum | AddOnScalarFieldEnum[]
  }

  /**
   * AddOn findMany
   */
  export type AddOnFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddOn
     */
    select?: AddOnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddOn
     */
    omit?: AddOnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddOnInclude<ExtArgs> | null
    /**
     * Filter, which AddOns to fetch.
     */
    where?: AddOnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddOns to fetch.
     */
    orderBy?: AddOnOrderByWithRelationInput | AddOnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AddOns.
     */
    cursor?: AddOnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddOns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddOns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AddOns.
     */
    distinct?: AddOnScalarFieldEnum | AddOnScalarFieldEnum[]
  }

  /**
   * AddOn create
   */
  export type AddOnCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddOn
     */
    select?: AddOnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddOn
     */
    omit?: AddOnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddOnInclude<ExtArgs> | null
    /**
     * The data needed to create a AddOn.
     */
    data: XOR<AddOnCreateInput, AddOnUncheckedCreateInput>
  }

  /**
   * AddOn createMany
   */
  export type AddOnCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AddOns.
     */
    data: AddOnCreateManyInput | AddOnCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AddOn createManyAndReturn
   */
  export type AddOnCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddOn
     */
    select?: AddOnSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AddOn
     */
    omit?: AddOnOmit<ExtArgs> | null
    /**
     * The data used to create many AddOns.
     */
    data: AddOnCreateManyInput | AddOnCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddOnIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AddOn update
   */
  export type AddOnUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddOn
     */
    select?: AddOnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddOn
     */
    omit?: AddOnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddOnInclude<ExtArgs> | null
    /**
     * The data needed to update a AddOn.
     */
    data: XOR<AddOnUpdateInput, AddOnUncheckedUpdateInput>
    /**
     * Choose, which AddOn to update.
     */
    where: AddOnWhereUniqueInput
  }

  /**
   * AddOn updateMany
   */
  export type AddOnUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AddOns.
     */
    data: XOR<AddOnUpdateManyMutationInput, AddOnUncheckedUpdateManyInput>
    /**
     * Filter which AddOns to update
     */
    where?: AddOnWhereInput
    /**
     * Limit how many AddOns to update.
     */
    limit?: number
  }

  /**
   * AddOn updateManyAndReturn
   */
  export type AddOnUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddOn
     */
    select?: AddOnSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AddOn
     */
    omit?: AddOnOmit<ExtArgs> | null
    /**
     * The data used to update AddOns.
     */
    data: XOR<AddOnUpdateManyMutationInput, AddOnUncheckedUpdateManyInput>
    /**
     * Filter which AddOns to update
     */
    where?: AddOnWhereInput
    /**
     * Limit how many AddOns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddOnIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AddOn upsert
   */
  export type AddOnUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddOn
     */
    select?: AddOnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddOn
     */
    omit?: AddOnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddOnInclude<ExtArgs> | null
    /**
     * The filter to search for the AddOn to update in case it exists.
     */
    where: AddOnWhereUniqueInput
    /**
     * In case the AddOn found by the `where` argument doesn't exist, create a new AddOn with this data.
     */
    create: XOR<AddOnCreateInput, AddOnUncheckedCreateInput>
    /**
     * In case the AddOn was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddOnUpdateInput, AddOnUncheckedUpdateInput>
  }

  /**
   * AddOn delete
   */
  export type AddOnDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddOn
     */
    select?: AddOnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddOn
     */
    omit?: AddOnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddOnInclude<ExtArgs> | null
    /**
     * Filter which AddOn to delete.
     */
    where: AddOnWhereUniqueInput
  }

  /**
   * AddOn deleteMany
   */
  export type AddOnDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AddOns to delete
     */
    where?: AddOnWhereInput
    /**
     * Limit how many AddOns to delete.
     */
    limit?: number
  }

  /**
   * AddOn without action
   */
  export type AddOnDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddOn
     */
    select?: AddOnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddOn
     */
    omit?: AddOnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddOnInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    tipAmount: number | null
    totalAmount: Decimal | null
  }

  export type OrderSumAggregateOutputType = {
    tipAmount: number | null
    totalAmount: Decimal | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    venueId: string | null
    tableSessionId: string | null
    customerName: string | null
    notes: string | null
    paymentMethod: string | null
    tipAmount: number | null
    totalAmount: Decimal | null
    status: string | null
    createdAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    venueId: string | null
    tableSessionId: string | null
    customerName: string | null
    notes: string | null
    paymentMethod: string | null
    tipAmount: number | null
    totalAmount: Decimal | null
    status: string | null
    createdAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    venueId: number
    tableSessionId: number
    customerName: number
    notes: number
    paymentMethod: number
    tipAmount: number
    totalAmount: number
    status: number
    createdAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    tipAmount?: true
    totalAmount?: true
  }

  export type OrderSumAggregateInputType = {
    tipAmount?: true
    totalAmount?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    venueId?: true
    tableSessionId?: true
    customerName?: true
    notes?: true
    paymentMethod?: true
    tipAmount?: true
    totalAmount?: true
    status?: true
    createdAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    venueId?: true
    tableSessionId?: true
    customerName?: true
    notes?: true
    paymentMethod?: true
    tipAmount?: true
    totalAmount?: true
    status?: true
    createdAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    venueId?: true
    tableSessionId?: true
    customerName?: true
    notes?: true
    paymentMethod?: true
    tipAmount?: true
    totalAmount?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    venueId: string
    tableSessionId: string
    customerName: string | null
    notes: string | null
    paymentMethod: string
    tipAmount: number
    totalAmount: Decimal
    status: string
    createdAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    tableSessionId?: boolean
    customerName?: boolean
    notes?: boolean
    paymentMethod?: boolean
    tipAmount?: boolean
    totalAmount?: boolean
    status?: boolean
    createdAt?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    tableSession?: boolean | TableSessionDefaultArgs<ExtArgs>
    items?: boolean | Order$itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    tableSessionId?: boolean
    customerName?: boolean
    notes?: boolean
    paymentMethod?: boolean
    tipAmount?: boolean
    totalAmount?: boolean
    status?: boolean
    createdAt?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    tableSession?: boolean | TableSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    tableSessionId?: boolean
    customerName?: boolean
    notes?: boolean
    paymentMethod?: boolean
    tipAmount?: boolean
    totalAmount?: boolean
    status?: boolean
    createdAt?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    tableSession?: boolean | TableSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    venueId?: boolean
    tableSessionId?: boolean
    customerName?: boolean
    notes?: boolean
    paymentMethod?: boolean
    tipAmount?: boolean
    totalAmount?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "venueId" | "tableSessionId" | "customerName" | "notes" | "paymentMethod" | "tipAmount" | "totalAmount" | "status" | "createdAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    tableSession?: boolean | TableSessionDefaultArgs<ExtArgs>
    items?: boolean | Order$itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    tableSession?: boolean | TableSessionDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    tableSession?: boolean | TableSessionDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      venue: Prisma.$VenuePayload<ExtArgs>
      tableSession: Prisma.$TableSessionPayload<ExtArgs>
      items: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      venueId: string
      tableSessionId: string
      customerName: string | null
      notes: string | null
      paymentMethod: string
      tipAmount: number
      totalAmount: Prisma.Decimal
      status: string
      createdAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    venue<T extends VenueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VenueDefaultArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tableSession<T extends TableSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TableSessionDefaultArgs<ExtArgs>>): Prisma__TableSessionClient<$Result.GetResult<Prisma.$TableSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Order$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly venueId: FieldRef<"Order", 'String'>
    readonly tableSessionId: FieldRef<"Order", 'String'>
    readonly customerName: FieldRef<"Order", 'String'>
    readonly notes: FieldRef<"Order", 'String'>
    readonly paymentMethod: FieldRef<"Order", 'String'>
    readonly tipAmount: FieldRef<"Order", 'Int'>
    readonly totalAmount: FieldRef<"Order", 'Decimal'>
    readonly status: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.items
   */
  export type Order$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    quantity: number | null
  }

  export type OrderItemSumAggregateOutputType = {
    quantity: number | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: string | null
    venueId: string | null
    orderId: string | null
    menuItemId: string | null
    quantity: number | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: string | null
    venueId: string | null
    orderId: string | null
    menuItemId: string | null
    quantity: number | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    venueId: number
    orderId: number
    menuItemId: number
    quantity: number
    addOns: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    quantity?: true
  }

  export type OrderItemSumAggregateInputType = {
    quantity?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    venueId?: true
    orderId?: true
    menuItemId?: true
    quantity?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    venueId?: true
    orderId?: true
    menuItemId?: true
    quantity?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    venueId?: true
    orderId?: true
    menuItemId?: true
    quantity?: true
    addOns?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: string
    venueId: string
    orderId: string
    menuItemId: string
    quantity: number
    addOns: JsonValue | null
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    orderId?: boolean
    menuItemId?: boolean
    quantity?: boolean
    addOns?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    orderId?: boolean
    menuItemId?: boolean
    quantity?: boolean
    addOns?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    orderId?: boolean
    menuItemId?: boolean
    quantity?: boolean
    addOns?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    id?: boolean
    venueId?: boolean
    orderId?: boolean
    menuItemId?: boolean
    quantity?: boolean
    addOns?: boolean
  }

  export type OrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "venueId" | "orderId" | "menuItemId" | "quantity" | "addOns", ExtArgs["result"]["orderItem"]>
  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      venue: Prisma.$VenuePayload<ExtArgs>
      order: Prisma.$OrderPayload<ExtArgs>
      menuItem: Prisma.$MenuItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      venueId: string
      orderId: string
      menuItemId: string
      quantity: number
      addOns: Prisma.JsonValue | null
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems and returns the data updated in the database.
     * @param {OrderItemUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    venue<T extends VenueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VenueDefaultArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    menuItem<T extends MenuItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuItemDefaultArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderItem model
   */
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'String'>
    readonly venueId: FieldRef<"OrderItem", 'String'>
    readonly orderId: FieldRef<"OrderItem", 'String'>
    readonly menuItemId: FieldRef<"OrderItem", 'String'>
    readonly quantity: FieldRef<"OrderItem", 'Int'>
    readonly addOns: FieldRef<"OrderItem", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItem createManyAndReturn
   */
  export type OrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
  }

  /**
   * OrderItem updateManyAndReturn
   */
  export type OrderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const VenueScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    name: 'name',
    theme: 'theme',
    defaultLanguage: 'defaultLanguage',
    planTier: 'planTier',
    active: 'active',
    createdAt: 'createdAt'
  };

  export type VenueScalarFieldEnum = (typeof VenueScalarFieldEnum)[keyof typeof VenueScalarFieldEnum]


  export const StaffAccountScalarFieldEnum: {
    id: 'id',
    venueId: 'venueId',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    role: 'role',
    active: 'active',
    createdAt: 'createdAt'
  };

  export type StaffAccountScalarFieldEnum = (typeof StaffAccountScalarFieldEnum)[keyof typeof StaffAccountScalarFieldEnum]


  export const TableScalarFieldEnum: {
    id: 'id',
    venueId: 'venueId',
    label: 'label',
    qrToken: 'qrToken',
    activeSessionId: 'activeSessionId',
    waiterCalled: 'waiterCalled',
    waiterCalledAt: 'waiterCalledAt',
    createdAt: 'createdAt'
  };

  export type TableScalarFieldEnum = (typeof TableScalarFieldEnum)[keyof typeof TableScalarFieldEnum]


  export const TableSessionScalarFieldEnum: {
    id: 'id',
    venueId: 'venueId',
    tableId: 'tableId',
    startedAt: 'startedAt',
    endedAt: 'endedAt'
  };

  export type TableSessionScalarFieldEnum = (typeof TableSessionScalarFieldEnum)[keyof typeof TableSessionScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    venueId: 'venueId',
    name: 'name',
    orderIndex: 'orderIndex'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const MenuItemScalarFieldEnum: {
    id: 'id',
    venueId: 'venueId',
    categoryId: 'categoryId',
    name: 'name',
    description: 'description',
    price: 'price',
    imageUrl: 'imageUrl',
    outOfStock: 'outOfStock',
    quizTags: 'quizTags'
  };

  export type MenuItemScalarFieldEnum = (typeof MenuItemScalarFieldEnum)[keyof typeof MenuItemScalarFieldEnum]


  export const IngredientScalarFieldEnum: {
    id: 'id',
    venueId: 'venueId',
    name: 'name',
    unit: 'unit',
    stock: 'stock',
    lowThreshold: 'lowThreshold'
  };

  export type IngredientScalarFieldEnum = (typeof IngredientScalarFieldEnum)[keyof typeof IngredientScalarFieldEnum]


  export const RecipeItemScalarFieldEnum: {
    id: 'id',
    venueId: 'venueId',
    menuItemId: 'menuItemId',
    ingredientId: 'ingredientId',
    quantityUsed: 'quantityUsed'
  };

  export type RecipeItemScalarFieldEnum = (typeof RecipeItemScalarFieldEnum)[keyof typeof RecipeItemScalarFieldEnum]


  export const AddOnScalarFieldEnum: {
    id: 'id',
    venueId: 'venueId',
    name: 'name',
    price: 'price',
    applicableItemIds: 'applicableItemIds'
  };

  export type AddOnScalarFieldEnum = (typeof AddOnScalarFieldEnum)[keyof typeof AddOnScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    venueId: 'venueId',
    tableSessionId: 'tableSessionId',
    customerName: 'customerName',
    notes: 'notes',
    paymentMethod: 'paymentMethod',
    tipAmount: 'tipAmount',
    totalAmount: 'totalAmount',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    venueId: 'venueId',
    orderId: 'orderId',
    menuItemId: 'menuItemId',
    quantity: 'quantity',
    addOns: 'addOns'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type VenueWhereInput = {
    AND?: VenueWhereInput | VenueWhereInput[]
    OR?: VenueWhereInput[]
    NOT?: VenueWhereInput | VenueWhereInput[]
    id?: StringFilter<"Venue"> | string
    slug?: StringFilter<"Venue"> | string
    name?: StringFilter<"Venue"> | string
    theme?: JsonFilter<"Venue">
    defaultLanguage?: StringFilter<"Venue"> | string
    planTier?: StringFilter<"Venue"> | string
    active?: BoolFilter<"Venue"> | boolean
    createdAt?: DateTimeFilter<"Venue"> | Date | string
    staffAccounts?: StaffAccountListRelationFilter
    tables?: TableListRelationFilter
    tableSessions?: TableSessionListRelationFilter
    categories?: CategoryListRelationFilter
    menuItems?: MenuItemListRelationFilter
    ingredients?: IngredientListRelationFilter
    recipeItems?: RecipeItemListRelationFilter
    addOns?: AddOnListRelationFilter
    orders?: OrderListRelationFilter
    orderItems?: OrderItemListRelationFilter
  }

  export type VenueOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    theme?: SortOrder
    defaultLanguage?: SortOrder
    planTier?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    staffAccounts?: StaffAccountOrderByRelationAggregateInput
    tables?: TableOrderByRelationAggregateInput
    tableSessions?: TableSessionOrderByRelationAggregateInput
    categories?: CategoryOrderByRelationAggregateInput
    menuItems?: MenuItemOrderByRelationAggregateInput
    ingredients?: IngredientOrderByRelationAggregateInput
    recipeItems?: RecipeItemOrderByRelationAggregateInput
    addOns?: AddOnOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    orderItems?: OrderItemOrderByRelationAggregateInput
  }

  export type VenueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: VenueWhereInput | VenueWhereInput[]
    OR?: VenueWhereInput[]
    NOT?: VenueWhereInput | VenueWhereInput[]
    name?: StringFilter<"Venue"> | string
    theme?: JsonFilter<"Venue">
    defaultLanguage?: StringFilter<"Venue"> | string
    planTier?: StringFilter<"Venue"> | string
    active?: BoolFilter<"Venue"> | boolean
    createdAt?: DateTimeFilter<"Venue"> | Date | string
    staffAccounts?: StaffAccountListRelationFilter
    tables?: TableListRelationFilter
    tableSessions?: TableSessionListRelationFilter
    categories?: CategoryListRelationFilter
    menuItems?: MenuItemListRelationFilter
    ingredients?: IngredientListRelationFilter
    recipeItems?: RecipeItemListRelationFilter
    addOns?: AddOnListRelationFilter
    orders?: OrderListRelationFilter
    orderItems?: OrderItemListRelationFilter
  }, "id" | "slug">

  export type VenueOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    theme?: SortOrder
    defaultLanguage?: SortOrder
    planTier?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    _count?: VenueCountOrderByAggregateInput
    _max?: VenueMaxOrderByAggregateInput
    _min?: VenueMinOrderByAggregateInput
  }

  export type VenueScalarWhereWithAggregatesInput = {
    AND?: VenueScalarWhereWithAggregatesInput | VenueScalarWhereWithAggregatesInput[]
    OR?: VenueScalarWhereWithAggregatesInput[]
    NOT?: VenueScalarWhereWithAggregatesInput | VenueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Venue"> | string
    slug?: StringWithAggregatesFilter<"Venue"> | string
    name?: StringWithAggregatesFilter<"Venue"> | string
    theme?: JsonWithAggregatesFilter<"Venue">
    defaultLanguage?: StringWithAggregatesFilter<"Venue"> | string
    planTier?: StringWithAggregatesFilter<"Venue"> | string
    active?: BoolWithAggregatesFilter<"Venue"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Venue"> | Date | string
  }

  export type StaffAccountWhereInput = {
    AND?: StaffAccountWhereInput | StaffAccountWhereInput[]
    OR?: StaffAccountWhereInput[]
    NOT?: StaffAccountWhereInput | StaffAccountWhereInput[]
    id?: StringFilter<"StaffAccount"> | string
    venueId?: StringFilter<"StaffAccount"> | string
    email?: StringFilter<"StaffAccount"> | string
    passwordHash?: StringFilter<"StaffAccount"> | string
    name?: StringFilter<"StaffAccount"> | string
    role?: EnumRoleFilter<"StaffAccount"> | $Enums.Role
    active?: BoolFilter<"StaffAccount"> | boolean
    createdAt?: DateTimeFilter<"StaffAccount"> | Date | string
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
  }

  export type StaffAccountOrderByWithRelationInput = {
    id?: SortOrder
    venueId?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    venue?: VenueOrderByWithRelationInput
  }

  export type StaffAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    venueId_email?: StaffAccountVenueIdEmailCompoundUniqueInput
    AND?: StaffAccountWhereInput | StaffAccountWhereInput[]
    OR?: StaffAccountWhereInput[]
    NOT?: StaffAccountWhereInput | StaffAccountWhereInput[]
    venueId?: StringFilter<"StaffAccount"> | string
    email?: StringFilter<"StaffAccount"> | string
    passwordHash?: StringFilter<"StaffAccount"> | string
    name?: StringFilter<"StaffAccount"> | string
    role?: EnumRoleFilter<"StaffAccount"> | $Enums.Role
    active?: BoolFilter<"StaffAccount"> | boolean
    createdAt?: DateTimeFilter<"StaffAccount"> | Date | string
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
  }, "id" | "venueId_email">

  export type StaffAccountOrderByWithAggregationInput = {
    id?: SortOrder
    venueId?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    _count?: StaffAccountCountOrderByAggregateInput
    _max?: StaffAccountMaxOrderByAggregateInput
    _min?: StaffAccountMinOrderByAggregateInput
  }

  export type StaffAccountScalarWhereWithAggregatesInput = {
    AND?: StaffAccountScalarWhereWithAggregatesInput | StaffAccountScalarWhereWithAggregatesInput[]
    OR?: StaffAccountScalarWhereWithAggregatesInput[]
    NOT?: StaffAccountScalarWhereWithAggregatesInput | StaffAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StaffAccount"> | string
    venueId?: StringWithAggregatesFilter<"StaffAccount"> | string
    email?: StringWithAggregatesFilter<"StaffAccount"> | string
    passwordHash?: StringWithAggregatesFilter<"StaffAccount"> | string
    name?: StringWithAggregatesFilter<"StaffAccount"> | string
    role?: EnumRoleWithAggregatesFilter<"StaffAccount"> | $Enums.Role
    active?: BoolWithAggregatesFilter<"StaffAccount"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"StaffAccount"> | Date | string
  }

  export type TableWhereInput = {
    AND?: TableWhereInput | TableWhereInput[]
    OR?: TableWhereInput[]
    NOT?: TableWhereInput | TableWhereInput[]
    id?: StringFilter<"Table"> | string
    venueId?: StringFilter<"Table"> | string
    label?: StringFilter<"Table"> | string
    qrToken?: StringFilter<"Table"> | string
    activeSessionId?: StringNullableFilter<"Table"> | string | null
    waiterCalled?: BoolFilter<"Table"> | boolean
    waiterCalledAt?: DateTimeNullableFilter<"Table"> | Date | string | null
    createdAt?: DateTimeFilter<"Table"> | Date | string
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    sessions?: TableSessionListRelationFilter
  }

  export type TableOrderByWithRelationInput = {
    id?: SortOrder
    venueId?: SortOrder
    label?: SortOrder
    qrToken?: SortOrder
    activeSessionId?: SortOrderInput | SortOrder
    waiterCalled?: SortOrder
    waiterCalledAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    venue?: VenueOrderByWithRelationInput
    sessions?: TableSessionOrderByRelationAggregateInput
  }

  export type TableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    qrToken?: string
    AND?: TableWhereInput | TableWhereInput[]
    OR?: TableWhereInput[]
    NOT?: TableWhereInput | TableWhereInput[]
    venueId?: StringFilter<"Table"> | string
    label?: StringFilter<"Table"> | string
    activeSessionId?: StringNullableFilter<"Table"> | string | null
    waiterCalled?: BoolFilter<"Table"> | boolean
    waiterCalledAt?: DateTimeNullableFilter<"Table"> | Date | string | null
    createdAt?: DateTimeFilter<"Table"> | Date | string
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    sessions?: TableSessionListRelationFilter
  }, "id" | "qrToken">

  export type TableOrderByWithAggregationInput = {
    id?: SortOrder
    venueId?: SortOrder
    label?: SortOrder
    qrToken?: SortOrder
    activeSessionId?: SortOrderInput | SortOrder
    waiterCalled?: SortOrder
    waiterCalledAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TableCountOrderByAggregateInput
    _max?: TableMaxOrderByAggregateInput
    _min?: TableMinOrderByAggregateInput
  }

  export type TableScalarWhereWithAggregatesInput = {
    AND?: TableScalarWhereWithAggregatesInput | TableScalarWhereWithAggregatesInput[]
    OR?: TableScalarWhereWithAggregatesInput[]
    NOT?: TableScalarWhereWithAggregatesInput | TableScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Table"> | string
    venueId?: StringWithAggregatesFilter<"Table"> | string
    label?: StringWithAggregatesFilter<"Table"> | string
    qrToken?: StringWithAggregatesFilter<"Table"> | string
    activeSessionId?: StringNullableWithAggregatesFilter<"Table"> | string | null
    waiterCalled?: BoolWithAggregatesFilter<"Table"> | boolean
    waiterCalledAt?: DateTimeNullableWithAggregatesFilter<"Table"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Table"> | Date | string
  }

  export type TableSessionWhereInput = {
    AND?: TableSessionWhereInput | TableSessionWhereInput[]
    OR?: TableSessionWhereInput[]
    NOT?: TableSessionWhereInput | TableSessionWhereInput[]
    id?: StringFilter<"TableSession"> | string
    venueId?: StringFilter<"TableSession"> | string
    tableId?: StringFilter<"TableSession"> | string
    startedAt?: DateTimeFilter<"TableSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"TableSession"> | Date | string | null
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    table?: XOR<TableScalarRelationFilter, TableWhereInput>
    orders?: OrderListRelationFilter
  }

  export type TableSessionOrderByWithRelationInput = {
    id?: SortOrder
    venueId?: SortOrder
    tableId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    venue?: VenueOrderByWithRelationInput
    table?: TableOrderByWithRelationInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type TableSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TableSessionWhereInput | TableSessionWhereInput[]
    OR?: TableSessionWhereInput[]
    NOT?: TableSessionWhereInput | TableSessionWhereInput[]
    venueId?: StringFilter<"TableSession"> | string
    tableId?: StringFilter<"TableSession"> | string
    startedAt?: DateTimeFilter<"TableSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"TableSession"> | Date | string | null
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    table?: XOR<TableScalarRelationFilter, TableWhereInput>
    orders?: OrderListRelationFilter
  }, "id">

  export type TableSessionOrderByWithAggregationInput = {
    id?: SortOrder
    venueId?: SortOrder
    tableId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    _count?: TableSessionCountOrderByAggregateInput
    _max?: TableSessionMaxOrderByAggregateInput
    _min?: TableSessionMinOrderByAggregateInput
  }

  export type TableSessionScalarWhereWithAggregatesInput = {
    AND?: TableSessionScalarWhereWithAggregatesInput | TableSessionScalarWhereWithAggregatesInput[]
    OR?: TableSessionScalarWhereWithAggregatesInput[]
    NOT?: TableSessionScalarWhereWithAggregatesInput | TableSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TableSession"> | string
    venueId?: StringWithAggregatesFilter<"TableSession"> | string
    tableId?: StringWithAggregatesFilter<"TableSession"> | string
    startedAt?: DateTimeWithAggregatesFilter<"TableSession"> | Date | string
    endedAt?: DateTimeNullableWithAggregatesFilter<"TableSession"> | Date | string | null
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    venueId?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    orderIndex?: IntFilter<"Category"> | number
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    items?: MenuItemListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    venueId?: SortOrder
    name?: SortOrder
    orderIndex?: SortOrder
    venue?: VenueOrderByWithRelationInput
    items?: MenuItemOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    venueId?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    orderIndex?: IntFilter<"Category"> | number
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    items?: MenuItemListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    venueId?: SortOrder
    name?: SortOrder
    orderIndex?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    venueId?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    orderIndex?: IntWithAggregatesFilter<"Category"> | number
  }

  export type MenuItemWhereInput = {
    AND?: MenuItemWhereInput | MenuItemWhereInput[]
    OR?: MenuItemWhereInput[]
    NOT?: MenuItemWhereInput | MenuItemWhereInput[]
    id?: StringFilter<"MenuItem"> | string
    venueId?: StringFilter<"MenuItem"> | string
    categoryId?: StringFilter<"MenuItem"> | string
    name?: StringFilter<"MenuItem"> | string
    description?: StringNullableFilter<"MenuItem"> | string | null
    price?: DecimalFilter<"MenuItem"> | Decimal | DecimalJsLike | number | string
    imageUrl?: StringNullableFilter<"MenuItem"> | string | null
    outOfStock?: BoolFilter<"MenuItem"> | boolean
    quizTags?: JsonNullableFilter<"MenuItem">
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    orderItems?: OrderItemListRelationFilter
    recipeItems?: RecipeItemListRelationFilter
  }

  export type MenuItemOrderByWithRelationInput = {
    id?: SortOrder
    venueId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    outOfStock?: SortOrder
    quizTags?: SortOrderInput | SortOrder
    venue?: VenueOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    orderItems?: OrderItemOrderByRelationAggregateInput
    recipeItems?: RecipeItemOrderByRelationAggregateInput
  }

  export type MenuItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MenuItemWhereInput | MenuItemWhereInput[]
    OR?: MenuItemWhereInput[]
    NOT?: MenuItemWhereInput | MenuItemWhereInput[]
    venueId?: StringFilter<"MenuItem"> | string
    categoryId?: StringFilter<"MenuItem"> | string
    name?: StringFilter<"MenuItem"> | string
    description?: StringNullableFilter<"MenuItem"> | string | null
    price?: DecimalFilter<"MenuItem"> | Decimal | DecimalJsLike | number | string
    imageUrl?: StringNullableFilter<"MenuItem"> | string | null
    outOfStock?: BoolFilter<"MenuItem"> | boolean
    quizTags?: JsonNullableFilter<"MenuItem">
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    orderItems?: OrderItemListRelationFilter
    recipeItems?: RecipeItemListRelationFilter
  }, "id">

  export type MenuItemOrderByWithAggregationInput = {
    id?: SortOrder
    venueId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    outOfStock?: SortOrder
    quizTags?: SortOrderInput | SortOrder
    _count?: MenuItemCountOrderByAggregateInput
    _avg?: MenuItemAvgOrderByAggregateInput
    _max?: MenuItemMaxOrderByAggregateInput
    _min?: MenuItemMinOrderByAggregateInput
    _sum?: MenuItemSumOrderByAggregateInput
  }

  export type MenuItemScalarWhereWithAggregatesInput = {
    AND?: MenuItemScalarWhereWithAggregatesInput | MenuItemScalarWhereWithAggregatesInput[]
    OR?: MenuItemScalarWhereWithAggregatesInput[]
    NOT?: MenuItemScalarWhereWithAggregatesInput | MenuItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MenuItem"> | string
    venueId?: StringWithAggregatesFilter<"MenuItem"> | string
    categoryId?: StringWithAggregatesFilter<"MenuItem"> | string
    name?: StringWithAggregatesFilter<"MenuItem"> | string
    description?: StringNullableWithAggregatesFilter<"MenuItem"> | string | null
    price?: DecimalWithAggregatesFilter<"MenuItem"> | Decimal | DecimalJsLike | number | string
    imageUrl?: StringNullableWithAggregatesFilter<"MenuItem"> | string | null
    outOfStock?: BoolWithAggregatesFilter<"MenuItem"> | boolean
    quizTags?: JsonNullableWithAggregatesFilter<"MenuItem">
  }

  export type IngredientWhereInput = {
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    id?: StringFilter<"Ingredient"> | string
    venueId?: StringFilter<"Ingredient"> | string
    name?: StringFilter<"Ingredient"> | string
    unit?: StringFilter<"Ingredient"> | string
    stock?: DecimalFilter<"Ingredient"> | Decimal | DecimalJsLike | number | string
    lowThreshold?: DecimalFilter<"Ingredient"> | Decimal | DecimalJsLike | number | string
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    recipeItems?: RecipeItemListRelationFilter
  }

  export type IngredientOrderByWithRelationInput = {
    id?: SortOrder
    venueId?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    stock?: SortOrder
    lowThreshold?: SortOrder
    venue?: VenueOrderByWithRelationInput
    recipeItems?: RecipeItemOrderByRelationAggregateInput
  }

  export type IngredientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    venueId?: StringFilter<"Ingredient"> | string
    name?: StringFilter<"Ingredient"> | string
    unit?: StringFilter<"Ingredient"> | string
    stock?: DecimalFilter<"Ingredient"> | Decimal | DecimalJsLike | number | string
    lowThreshold?: DecimalFilter<"Ingredient"> | Decimal | DecimalJsLike | number | string
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    recipeItems?: RecipeItemListRelationFilter
  }, "id">

  export type IngredientOrderByWithAggregationInput = {
    id?: SortOrder
    venueId?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    stock?: SortOrder
    lowThreshold?: SortOrder
    _count?: IngredientCountOrderByAggregateInput
    _avg?: IngredientAvgOrderByAggregateInput
    _max?: IngredientMaxOrderByAggregateInput
    _min?: IngredientMinOrderByAggregateInput
    _sum?: IngredientSumOrderByAggregateInput
  }

  export type IngredientScalarWhereWithAggregatesInput = {
    AND?: IngredientScalarWhereWithAggregatesInput | IngredientScalarWhereWithAggregatesInput[]
    OR?: IngredientScalarWhereWithAggregatesInput[]
    NOT?: IngredientScalarWhereWithAggregatesInput | IngredientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ingredient"> | string
    venueId?: StringWithAggregatesFilter<"Ingredient"> | string
    name?: StringWithAggregatesFilter<"Ingredient"> | string
    unit?: StringWithAggregatesFilter<"Ingredient"> | string
    stock?: DecimalWithAggregatesFilter<"Ingredient"> | Decimal | DecimalJsLike | number | string
    lowThreshold?: DecimalWithAggregatesFilter<"Ingredient"> | Decimal | DecimalJsLike | number | string
  }

  export type RecipeItemWhereInput = {
    AND?: RecipeItemWhereInput | RecipeItemWhereInput[]
    OR?: RecipeItemWhereInput[]
    NOT?: RecipeItemWhereInput | RecipeItemWhereInput[]
    id?: StringFilter<"RecipeItem"> | string
    venueId?: StringFilter<"RecipeItem"> | string
    menuItemId?: StringFilter<"RecipeItem"> | string
    ingredientId?: StringFilter<"RecipeItem"> | string
    quantityUsed?: DecimalFilter<"RecipeItem"> | Decimal | DecimalJsLike | number | string
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    menuItem?: XOR<MenuItemScalarRelationFilter, MenuItemWhereInput>
    ingredient?: XOR<IngredientScalarRelationFilter, IngredientWhereInput>
  }

  export type RecipeItemOrderByWithRelationInput = {
    id?: SortOrder
    venueId?: SortOrder
    menuItemId?: SortOrder
    ingredientId?: SortOrder
    quantityUsed?: SortOrder
    venue?: VenueOrderByWithRelationInput
    menuItem?: MenuItemOrderByWithRelationInput
    ingredient?: IngredientOrderByWithRelationInput
  }

  export type RecipeItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecipeItemWhereInput | RecipeItemWhereInput[]
    OR?: RecipeItemWhereInput[]
    NOT?: RecipeItemWhereInput | RecipeItemWhereInput[]
    venueId?: StringFilter<"RecipeItem"> | string
    menuItemId?: StringFilter<"RecipeItem"> | string
    ingredientId?: StringFilter<"RecipeItem"> | string
    quantityUsed?: DecimalFilter<"RecipeItem"> | Decimal | DecimalJsLike | number | string
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    menuItem?: XOR<MenuItemScalarRelationFilter, MenuItemWhereInput>
    ingredient?: XOR<IngredientScalarRelationFilter, IngredientWhereInput>
  }, "id">

  export type RecipeItemOrderByWithAggregationInput = {
    id?: SortOrder
    venueId?: SortOrder
    menuItemId?: SortOrder
    ingredientId?: SortOrder
    quantityUsed?: SortOrder
    _count?: RecipeItemCountOrderByAggregateInput
    _avg?: RecipeItemAvgOrderByAggregateInput
    _max?: RecipeItemMaxOrderByAggregateInput
    _min?: RecipeItemMinOrderByAggregateInput
    _sum?: RecipeItemSumOrderByAggregateInput
  }

  export type RecipeItemScalarWhereWithAggregatesInput = {
    AND?: RecipeItemScalarWhereWithAggregatesInput | RecipeItemScalarWhereWithAggregatesInput[]
    OR?: RecipeItemScalarWhereWithAggregatesInput[]
    NOT?: RecipeItemScalarWhereWithAggregatesInput | RecipeItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RecipeItem"> | string
    venueId?: StringWithAggregatesFilter<"RecipeItem"> | string
    menuItemId?: StringWithAggregatesFilter<"RecipeItem"> | string
    ingredientId?: StringWithAggregatesFilter<"RecipeItem"> | string
    quantityUsed?: DecimalWithAggregatesFilter<"RecipeItem"> | Decimal | DecimalJsLike | number | string
  }

  export type AddOnWhereInput = {
    AND?: AddOnWhereInput | AddOnWhereInput[]
    OR?: AddOnWhereInput[]
    NOT?: AddOnWhereInput | AddOnWhereInput[]
    id?: StringFilter<"AddOn"> | string
    venueId?: StringFilter<"AddOn"> | string
    name?: StringFilter<"AddOn"> | string
    price?: DecimalFilter<"AddOn"> | Decimal | DecimalJsLike | number | string
    applicableItemIds?: StringNullableListFilter<"AddOn">
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
  }

  export type AddOnOrderByWithRelationInput = {
    id?: SortOrder
    venueId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    applicableItemIds?: SortOrder
    venue?: VenueOrderByWithRelationInput
  }

  export type AddOnWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AddOnWhereInput | AddOnWhereInput[]
    OR?: AddOnWhereInput[]
    NOT?: AddOnWhereInput | AddOnWhereInput[]
    venueId?: StringFilter<"AddOn"> | string
    name?: StringFilter<"AddOn"> | string
    price?: DecimalFilter<"AddOn"> | Decimal | DecimalJsLike | number | string
    applicableItemIds?: StringNullableListFilter<"AddOn">
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
  }, "id">

  export type AddOnOrderByWithAggregationInput = {
    id?: SortOrder
    venueId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    applicableItemIds?: SortOrder
    _count?: AddOnCountOrderByAggregateInput
    _avg?: AddOnAvgOrderByAggregateInput
    _max?: AddOnMaxOrderByAggregateInput
    _min?: AddOnMinOrderByAggregateInput
    _sum?: AddOnSumOrderByAggregateInput
  }

  export type AddOnScalarWhereWithAggregatesInput = {
    AND?: AddOnScalarWhereWithAggregatesInput | AddOnScalarWhereWithAggregatesInput[]
    OR?: AddOnScalarWhereWithAggregatesInput[]
    NOT?: AddOnScalarWhereWithAggregatesInput | AddOnScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AddOn"> | string
    venueId?: StringWithAggregatesFilter<"AddOn"> | string
    name?: StringWithAggregatesFilter<"AddOn"> | string
    price?: DecimalWithAggregatesFilter<"AddOn"> | Decimal | DecimalJsLike | number | string
    applicableItemIds?: StringNullableListFilter<"AddOn">
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    venueId?: StringFilter<"Order"> | string
    tableSessionId?: StringFilter<"Order"> | string
    customerName?: StringNullableFilter<"Order"> | string | null
    notes?: StringNullableFilter<"Order"> | string | null
    paymentMethod?: StringFilter<"Order"> | string
    tipAmount?: IntFilter<"Order"> | number
    totalAmount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    tableSession?: XOR<TableSessionScalarRelationFilter, TableSessionWhereInput>
    items?: OrderItemListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    venueId?: SortOrder
    tableSessionId?: SortOrder
    customerName?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    paymentMethod?: SortOrder
    tipAmount?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    venue?: VenueOrderByWithRelationInput
    tableSession?: TableSessionOrderByWithRelationInput
    items?: OrderItemOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    venueId?: StringFilter<"Order"> | string
    tableSessionId?: StringFilter<"Order"> | string
    customerName?: StringNullableFilter<"Order"> | string | null
    notes?: StringNullableFilter<"Order"> | string | null
    paymentMethod?: StringFilter<"Order"> | string
    tipAmount?: IntFilter<"Order"> | number
    totalAmount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    tableSession?: XOR<TableSessionScalarRelationFilter, TableSessionWhereInput>
    items?: OrderItemListRelationFilter
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    venueId?: SortOrder
    tableSessionId?: SortOrder
    customerName?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    paymentMethod?: SortOrder
    tipAmount?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    venueId?: StringWithAggregatesFilter<"Order"> | string
    tableSessionId?: StringWithAggregatesFilter<"Order"> | string
    customerName?: StringNullableWithAggregatesFilter<"Order"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Order"> | string | null
    paymentMethod?: StringWithAggregatesFilter<"Order"> | string
    tipAmount?: IntWithAggregatesFilter<"Order"> | number
    totalAmount?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    status?: StringWithAggregatesFilter<"Order"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    venueId?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    menuItemId?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    addOns?: JsonNullableFilter<"OrderItem">
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    menuItem?: XOR<MenuItemScalarRelationFilter, MenuItemWhereInput>
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    venueId?: SortOrder
    orderId?: SortOrder
    menuItemId?: SortOrder
    quantity?: SortOrder
    addOns?: SortOrderInput | SortOrder
    venue?: VenueOrderByWithRelationInput
    order?: OrderOrderByWithRelationInput
    menuItem?: MenuItemOrderByWithRelationInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    venueId?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    menuItemId?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    addOns?: JsonNullableFilter<"OrderItem">
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    menuItem?: XOR<MenuItemScalarRelationFilter, MenuItemWhereInput>
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    venueId?: SortOrder
    orderId?: SortOrder
    menuItemId?: SortOrder
    quantity?: SortOrder
    addOns?: SortOrderInput | SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderItem"> | string
    venueId?: StringWithAggregatesFilter<"OrderItem"> | string
    orderId?: StringWithAggregatesFilter<"OrderItem"> | string
    menuItemId?: StringWithAggregatesFilter<"OrderItem"> | string
    quantity?: IntWithAggregatesFilter<"OrderItem"> | number
    addOns?: JsonNullableWithAggregatesFilter<"OrderItem">
  }

  export type VenueCreateInput = {
    id?: string
    slug: string
    name: string
    theme: JsonNullValueInput | InputJsonValue
    defaultLanguage?: string
    planTier?: string
    active?: boolean
    createdAt?: Date | string
    staffAccounts?: StaffAccountCreateNestedManyWithoutVenueInput
    tables?: TableCreateNestedManyWithoutVenueInput
    tableSessions?: TableSessionCreateNestedManyWithoutVenueInput
    categories?: CategoryCreateNestedManyWithoutVenueInput
    menuItems?: MenuItemCreateNestedManyWithoutVenueInput
    ingredients?: IngredientCreateNestedManyWithoutVenueInput
    recipeItems?: RecipeItemCreateNestedManyWithoutVenueInput
    addOns?: AddOnCreateNestedManyWithoutVenueInput
    orders?: OrderCreateNestedManyWithoutVenueInput
    orderItems?: OrderItemCreateNestedManyWithoutVenueInput
  }

  export type VenueUncheckedCreateInput = {
    id?: string
    slug: string
    name: string
    theme: JsonNullValueInput | InputJsonValue
    defaultLanguage?: string
    planTier?: string
    active?: boolean
    createdAt?: Date | string
    staffAccounts?: StaffAccountUncheckedCreateNestedManyWithoutVenueInput
    tables?: TableUncheckedCreateNestedManyWithoutVenueInput
    tableSessions?: TableSessionUncheckedCreateNestedManyWithoutVenueInput
    categories?: CategoryUncheckedCreateNestedManyWithoutVenueInput
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutVenueInput
    ingredients?: IngredientUncheckedCreateNestedManyWithoutVenueInput
    recipeItems?: RecipeItemUncheckedCreateNestedManyWithoutVenueInput
    addOns?: AddOnUncheckedCreateNestedManyWithoutVenueInput
    orders?: OrderUncheckedCreateNestedManyWithoutVenueInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    theme?: JsonNullValueInput | InputJsonValue
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffAccounts?: StaffAccountUpdateManyWithoutVenueNestedInput
    tables?: TableUpdateManyWithoutVenueNestedInput
    tableSessions?: TableSessionUpdateManyWithoutVenueNestedInput
    categories?: CategoryUpdateManyWithoutVenueNestedInput
    menuItems?: MenuItemUpdateManyWithoutVenueNestedInput
    ingredients?: IngredientUpdateManyWithoutVenueNestedInput
    recipeItems?: RecipeItemUpdateManyWithoutVenueNestedInput
    addOns?: AddOnUpdateManyWithoutVenueNestedInput
    orders?: OrderUpdateManyWithoutVenueNestedInput
    orderItems?: OrderItemUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    theme?: JsonNullValueInput | InputJsonValue
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffAccounts?: StaffAccountUncheckedUpdateManyWithoutVenueNestedInput
    tables?: TableUncheckedUpdateManyWithoutVenueNestedInput
    tableSessions?: TableSessionUncheckedUpdateManyWithoutVenueNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutVenueNestedInput
    menuItems?: MenuItemUncheckedUpdateManyWithoutVenueNestedInput
    ingredients?: IngredientUncheckedUpdateManyWithoutVenueNestedInput
    recipeItems?: RecipeItemUncheckedUpdateManyWithoutVenueNestedInput
    addOns?: AddOnUncheckedUpdateManyWithoutVenueNestedInput
    orders?: OrderUncheckedUpdateManyWithoutVenueNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type VenueCreateManyInput = {
    id?: string
    slug: string
    name: string
    theme: JsonNullValueInput | InputJsonValue
    defaultLanguage?: string
    planTier?: string
    active?: boolean
    createdAt?: Date | string
  }

  export type VenueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    theme?: JsonNullValueInput | InputJsonValue
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    theme?: JsonNullValueInput | InputJsonValue
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffAccountCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    active?: boolean
    createdAt?: Date | string
    venue: VenueCreateNestedOneWithoutStaffAccountsInput
  }

  export type StaffAccountUncheckedCreateInput = {
    id?: string
    venueId: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    active?: boolean
    createdAt?: Date | string
  }

  export type StaffAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: VenueUpdateOneRequiredWithoutStaffAccountsNestedInput
  }

  export type StaffAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffAccountCreateManyInput = {
    id?: string
    venueId: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    active?: boolean
    createdAt?: Date | string
  }

  export type StaffAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TableCreateInput = {
    id?: string
    label: string
    qrToken: string
    activeSessionId?: string | null
    waiterCalled?: boolean
    waiterCalledAt?: Date | string | null
    createdAt?: Date | string
    venue: VenueCreateNestedOneWithoutTablesInput
    sessions?: TableSessionCreateNestedManyWithoutTableInput
  }

  export type TableUncheckedCreateInput = {
    id?: string
    venueId: string
    label: string
    qrToken: string
    activeSessionId?: string | null
    waiterCalled?: boolean
    waiterCalledAt?: Date | string | null
    createdAt?: Date | string
    sessions?: TableSessionUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    qrToken?: StringFieldUpdateOperationsInput | string
    activeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    waiterCalled?: BoolFieldUpdateOperationsInput | boolean
    waiterCalledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: VenueUpdateOneRequiredWithoutTablesNestedInput
    sessions?: TableSessionUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    qrToken?: StringFieldUpdateOperationsInput | string
    activeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    waiterCalled?: BoolFieldUpdateOperationsInput | boolean
    waiterCalledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: TableSessionUncheckedUpdateManyWithoutTableNestedInput
  }

  export type TableCreateManyInput = {
    id?: string
    venueId: string
    label: string
    qrToken: string
    activeSessionId?: string | null
    waiterCalled?: boolean
    waiterCalledAt?: Date | string | null
    createdAt?: Date | string
  }

  export type TableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    qrToken?: StringFieldUpdateOperationsInput | string
    activeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    waiterCalled?: BoolFieldUpdateOperationsInput | boolean
    waiterCalledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    qrToken?: StringFieldUpdateOperationsInput | string
    activeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    waiterCalled?: BoolFieldUpdateOperationsInput | boolean
    waiterCalledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TableSessionCreateInput = {
    id?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    venue: VenueCreateNestedOneWithoutTableSessionsInput
    table: TableCreateNestedOneWithoutSessionsInput
    orders?: OrderCreateNestedManyWithoutTableSessionInput
  }

  export type TableSessionUncheckedCreateInput = {
    id?: string
    venueId: string
    tableId: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    orders?: OrderUncheckedCreateNestedManyWithoutTableSessionInput
  }

  export type TableSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    venue?: VenueUpdateOneRequiredWithoutTableSessionsNestedInput
    table?: TableUpdateOneRequiredWithoutSessionsNestedInput
    orders?: OrderUpdateManyWithoutTableSessionNestedInput
  }

  export type TableSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: OrderUncheckedUpdateManyWithoutTableSessionNestedInput
  }

  export type TableSessionCreateManyInput = {
    id?: string
    venueId: string
    tableId: string
    startedAt?: Date | string
    endedAt?: Date | string | null
  }

  export type TableSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TableSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    orderIndex?: number
    venue: VenueCreateNestedOneWithoutCategoriesInput
    items?: MenuItemCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    venueId: string
    name: string
    orderIndex?: number
    items?: MenuItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    venue?: VenueUpdateOneRequiredWithoutCategoriesNestedInput
    items?: MenuItemUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    items?: MenuItemUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    venueId: string
    name: string
    orderIndex?: number
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
  }

  export type MenuItemCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    outOfStock?: boolean
    quizTags?: NullableJsonNullValueInput | InputJsonValue
    venue: VenueCreateNestedOneWithoutMenuItemsInput
    category: CategoryCreateNestedOneWithoutItemsInput
    orderItems?: OrderItemCreateNestedManyWithoutMenuItemInput
    recipeItems?: RecipeItemCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemUncheckedCreateInput = {
    id?: string
    venueId: string
    categoryId: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    outOfStock?: boolean
    quizTags?: NullableJsonNullValueInput | InputJsonValue
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutMenuItemInput
    recipeItems?: RecipeItemUncheckedCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    outOfStock?: BoolFieldUpdateOperationsInput | boolean
    quizTags?: NullableJsonNullValueInput | InputJsonValue
    venue?: VenueUpdateOneRequiredWithoutMenuItemsNestedInput
    category?: CategoryUpdateOneRequiredWithoutItemsNestedInput
    orderItems?: OrderItemUpdateManyWithoutMenuItemNestedInput
    recipeItems?: RecipeItemUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    outOfStock?: BoolFieldUpdateOperationsInput | boolean
    quizTags?: NullableJsonNullValueInput | InputJsonValue
    orderItems?: OrderItemUncheckedUpdateManyWithoutMenuItemNestedInput
    recipeItems?: RecipeItemUncheckedUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemCreateManyInput = {
    id?: string
    venueId: string
    categoryId: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    outOfStock?: boolean
    quizTags?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MenuItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    outOfStock?: BoolFieldUpdateOperationsInput | boolean
    quizTags?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MenuItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    outOfStock?: BoolFieldUpdateOperationsInput | boolean
    quizTags?: NullableJsonNullValueInput | InputJsonValue
  }

  export type IngredientCreateInput = {
    id?: string
    name: string
    unit: string
    stock?: Decimal | DecimalJsLike | number | string
    lowThreshold?: Decimal | DecimalJsLike | number | string
    venue: VenueCreateNestedOneWithoutIngredientsInput
    recipeItems?: RecipeItemCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUncheckedCreateInput = {
    id?: string
    venueId: string
    name: string
    unit: string
    stock?: Decimal | DecimalJsLike | number | string
    lowThreshold?: Decimal | DecimalJsLike | number | string
    recipeItems?: RecipeItemUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    stock?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lowThreshold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    venue?: VenueUpdateOneRequiredWithoutIngredientsNestedInput
    recipeItems?: RecipeItemUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    stock?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lowThreshold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    recipeItems?: RecipeItemUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientCreateManyInput = {
    id?: string
    venueId: string
    name: string
    unit: string
    stock?: Decimal | DecimalJsLike | number | string
    lowThreshold?: Decimal | DecimalJsLike | number | string
  }

  export type IngredientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    stock?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lowThreshold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type IngredientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    stock?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lowThreshold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type RecipeItemCreateInput = {
    id?: string
    quantityUsed: Decimal | DecimalJsLike | number | string
    venue: VenueCreateNestedOneWithoutRecipeItemsInput
    menuItem: MenuItemCreateNestedOneWithoutRecipeItemsInput
    ingredient: IngredientCreateNestedOneWithoutRecipeItemsInput
  }

  export type RecipeItemUncheckedCreateInput = {
    id?: string
    venueId: string
    menuItemId: string
    ingredientId: string
    quantityUsed: Decimal | DecimalJsLike | number | string
  }

  export type RecipeItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    venue?: VenueUpdateOneRequiredWithoutRecipeItemsNestedInput
    menuItem?: MenuItemUpdateOneRequiredWithoutRecipeItemsNestedInput
    ingredient?: IngredientUpdateOneRequiredWithoutRecipeItemsNestedInput
  }

  export type RecipeItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    quantityUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type RecipeItemCreateManyInput = {
    id?: string
    venueId: string
    menuItemId: string
    ingredientId: string
    quantityUsed: Decimal | DecimalJsLike | number | string
  }

  export type RecipeItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type RecipeItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    quantityUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type AddOnCreateInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    applicableItemIds?: AddOnCreateapplicableItemIdsInput | string[]
    venue: VenueCreateNestedOneWithoutAddOnsInput
  }

  export type AddOnUncheckedCreateInput = {
    id?: string
    venueId: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    applicableItemIds?: AddOnCreateapplicableItemIdsInput | string[]
  }

  export type AddOnUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    applicableItemIds?: AddOnUpdateapplicableItemIdsInput | string[]
    venue?: VenueUpdateOneRequiredWithoutAddOnsNestedInput
  }

  export type AddOnUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    applicableItemIds?: AddOnUpdateapplicableItemIdsInput | string[]
  }

  export type AddOnCreateManyInput = {
    id?: string
    venueId: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    applicableItemIds?: AddOnCreateapplicableItemIdsInput | string[]
  }

  export type AddOnUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    applicableItemIds?: AddOnUpdateapplicableItemIdsInput | string[]
  }

  export type AddOnUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    applicableItemIds?: AddOnUpdateapplicableItemIdsInput | string[]
  }

  export type OrderCreateInput = {
    id?: string
    customerName?: string | null
    notes?: string | null
    paymentMethod: string
    tipAmount?: number
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: string
    createdAt?: Date | string
    venue: VenueCreateNestedOneWithoutOrdersInput
    tableSession: TableSessionCreateNestedOneWithoutOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    venueId: string
    tableSessionId: string
    customerName?: string | null
    notes?: string | null
    paymentMethod: string
    tipAmount?: number
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: string
    createdAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    tipAmount?: IntFieldUpdateOperationsInput | number
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: VenueUpdateOneRequiredWithoutOrdersNestedInput
    tableSession?: TableSessionUpdateOneRequiredWithoutOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    tableSessionId?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    tipAmount?: IntFieldUpdateOperationsInput | number
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    venueId: string
    tableSessionId: string
    customerName?: string | null
    notes?: string | null
    paymentMethod: string
    tipAmount?: number
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: string
    createdAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    tipAmount?: IntFieldUpdateOperationsInput | number
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    tableSessionId?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    tipAmount?: IntFieldUpdateOperationsInput | number
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateInput = {
    id?: string
    quantity: number
    addOns?: NullableJsonNullValueInput | InputJsonValue
    venue: VenueCreateNestedOneWithoutOrderItemsInput
    order: OrderCreateNestedOneWithoutItemsInput
    menuItem: MenuItemCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: string
    venueId: string
    orderId: string
    menuItemId: string
    quantity: number
    addOns?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    addOns?: NullableJsonNullValueInput | InputJsonValue
    venue?: VenueUpdateOneRequiredWithoutOrderItemsNestedInput
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
    menuItem?: MenuItemUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    addOns?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderItemCreateManyInput = {
    id?: string
    venueId: string
    orderId: string
    menuItemId: string
    quantity: number
    addOns?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    addOns?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    addOns?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StaffAccountListRelationFilter = {
    every?: StaffAccountWhereInput
    some?: StaffAccountWhereInput
    none?: StaffAccountWhereInput
  }

  export type TableListRelationFilter = {
    every?: TableWhereInput
    some?: TableWhereInput
    none?: TableWhereInput
  }

  export type TableSessionListRelationFilter = {
    every?: TableSessionWhereInput
    some?: TableSessionWhereInput
    none?: TableSessionWhereInput
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type MenuItemListRelationFilter = {
    every?: MenuItemWhereInput
    some?: MenuItemWhereInput
    none?: MenuItemWhereInput
  }

  export type IngredientListRelationFilter = {
    every?: IngredientWhereInput
    some?: IngredientWhereInput
    none?: IngredientWhereInput
  }

  export type RecipeItemListRelationFilter = {
    every?: RecipeItemWhereInput
    some?: RecipeItemWhereInput
    none?: RecipeItemWhereInput
  }

  export type AddOnListRelationFilter = {
    every?: AddOnWhereInput
    some?: AddOnWhereInput
    none?: AddOnWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type StaffAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TableSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IngredientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipeItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AddOnOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VenueCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    theme?: SortOrder
    defaultLanguage?: SortOrder
    planTier?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type VenueMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    defaultLanguage?: SortOrder
    planTier?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type VenueMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    defaultLanguage?: SortOrder
    planTier?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type VenueScalarRelationFilter = {
    is?: VenueWhereInput
    isNot?: VenueWhereInput
  }

  export type StaffAccountVenueIdEmailCompoundUniqueInput = {
    venueId: string
    email: string
  }

  export type StaffAccountCountOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type StaffAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type StaffAccountMinOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TableCountOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    label?: SortOrder
    qrToken?: SortOrder
    activeSessionId?: SortOrder
    waiterCalled?: SortOrder
    waiterCalledAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TableMaxOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    label?: SortOrder
    qrToken?: SortOrder
    activeSessionId?: SortOrder
    waiterCalled?: SortOrder
    waiterCalledAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TableMinOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    label?: SortOrder
    qrToken?: SortOrder
    activeSessionId?: SortOrder
    waiterCalled?: SortOrder
    waiterCalledAt?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TableScalarRelationFilter = {
    is?: TableWhereInput
    isNot?: TableWhereInput
  }

  export type TableSessionCountOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    tableId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }

  export type TableSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    tableId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }

  export type TableSessionMinOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    tableId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    name?: SortOrder
    orderIndex?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    orderIndex?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    name?: SortOrder
    orderIndex?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    name?: SortOrder
    orderIndex?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    orderIndex?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type MenuItemCountOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    outOfStock?: SortOrder
    quizTags?: SortOrder
  }

  export type MenuItemAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type MenuItemMaxOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    outOfStock?: SortOrder
  }

  export type MenuItemMinOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    outOfStock?: SortOrder
  }

  export type MenuItemSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IngredientCountOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    stock?: SortOrder
    lowThreshold?: SortOrder
  }

  export type IngredientAvgOrderByAggregateInput = {
    stock?: SortOrder
    lowThreshold?: SortOrder
  }

  export type IngredientMaxOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    stock?: SortOrder
    lowThreshold?: SortOrder
  }

  export type IngredientMinOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    stock?: SortOrder
    lowThreshold?: SortOrder
  }

  export type IngredientSumOrderByAggregateInput = {
    stock?: SortOrder
    lowThreshold?: SortOrder
  }

  export type MenuItemScalarRelationFilter = {
    is?: MenuItemWhereInput
    isNot?: MenuItemWhereInput
  }

  export type IngredientScalarRelationFilter = {
    is?: IngredientWhereInput
    isNot?: IngredientWhereInput
  }

  export type RecipeItemCountOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    menuItemId?: SortOrder
    ingredientId?: SortOrder
    quantityUsed?: SortOrder
  }

  export type RecipeItemAvgOrderByAggregateInput = {
    quantityUsed?: SortOrder
  }

  export type RecipeItemMaxOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    menuItemId?: SortOrder
    ingredientId?: SortOrder
    quantityUsed?: SortOrder
  }

  export type RecipeItemMinOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    menuItemId?: SortOrder
    ingredientId?: SortOrder
    quantityUsed?: SortOrder
  }

  export type RecipeItemSumOrderByAggregateInput = {
    quantityUsed?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type AddOnCountOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    applicableItemIds?: SortOrder
  }

  export type AddOnAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type AddOnMaxOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    name?: SortOrder
    price?: SortOrder
  }

  export type AddOnMinOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    name?: SortOrder
    price?: SortOrder
  }

  export type AddOnSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type TableSessionScalarRelationFilter = {
    is?: TableSessionWhereInput
    isNot?: TableSessionWhereInput
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    tableSessionId?: SortOrder
    customerName?: SortOrder
    notes?: SortOrder
    paymentMethod?: SortOrder
    tipAmount?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    tipAmount?: SortOrder
    totalAmount?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    tableSessionId?: SortOrder
    customerName?: SortOrder
    notes?: SortOrder
    paymentMethod?: SortOrder
    tipAmount?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    tableSessionId?: SortOrder
    customerName?: SortOrder
    notes?: SortOrder
    paymentMethod?: SortOrder
    tipAmount?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    tipAmount?: SortOrder
    totalAmount?: SortOrder
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    orderId?: SortOrder
    menuItemId?: SortOrder
    quantity?: SortOrder
    addOns?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    orderId?: SortOrder
    menuItemId?: SortOrder
    quantity?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    orderId?: SortOrder
    menuItemId?: SortOrder
    quantity?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type StaffAccountCreateNestedManyWithoutVenueInput = {
    create?: XOR<StaffAccountCreateWithoutVenueInput, StaffAccountUncheckedCreateWithoutVenueInput> | StaffAccountCreateWithoutVenueInput[] | StaffAccountUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: StaffAccountCreateOrConnectWithoutVenueInput | StaffAccountCreateOrConnectWithoutVenueInput[]
    createMany?: StaffAccountCreateManyVenueInputEnvelope
    connect?: StaffAccountWhereUniqueInput | StaffAccountWhereUniqueInput[]
  }

  export type TableCreateNestedManyWithoutVenueInput = {
    create?: XOR<TableCreateWithoutVenueInput, TableUncheckedCreateWithoutVenueInput> | TableCreateWithoutVenueInput[] | TableUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: TableCreateOrConnectWithoutVenueInput | TableCreateOrConnectWithoutVenueInput[]
    createMany?: TableCreateManyVenueInputEnvelope
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
  }

  export type TableSessionCreateNestedManyWithoutVenueInput = {
    create?: XOR<TableSessionCreateWithoutVenueInput, TableSessionUncheckedCreateWithoutVenueInput> | TableSessionCreateWithoutVenueInput[] | TableSessionUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: TableSessionCreateOrConnectWithoutVenueInput | TableSessionCreateOrConnectWithoutVenueInput[]
    createMany?: TableSessionCreateManyVenueInputEnvelope
    connect?: TableSessionWhereUniqueInput | TableSessionWhereUniqueInput[]
  }

  export type CategoryCreateNestedManyWithoutVenueInput = {
    create?: XOR<CategoryCreateWithoutVenueInput, CategoryUncheckedCreateWithoutVenueInput> | CategoryCreateWithoutVenueInput[] | CategoryUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutVenueInput | CategoryCreateOrConnectWithoutVenueInput[]
    createMany?: CategoryCreateManyVenueInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type MenuItemCreateNestedManyWithoutVenueInput = {
    create?: XOR<MenuItemCreateWithoutVenueInput, MenuItemUncheckedCreateWithoutVenueInput> | MenuItemCreateWithoutVenueInput[] | MenuItemUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutVenueInput | MenuItemCreateOrConnectWithoutVenueInput[]
    createMany?: MenuItemCreateManyVenueInputEnvelope
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
  }

  export type IngredientCreateNestedManyWithoutVenueInput = {
    create?: XOR<IngredientCreateWithoutVenueInput, IngredientUncheckedCreateWithoutVenueInput> | IngredientCreateWithoutVenueInput[] | IngredientUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutVenueInput | IngredientCreateOrConnectWithoutVenueInput[]
    createMany?: IngredientCreateManyVenueInputEnvelope
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
  }

  export type RecipeItemCreateNestedManyWithoutVenueInput = {
    create?: XOR<RecipeItemCreateWithoutVenueInput, RecipeItemUncheckedCreateWithoutVenueInput> | RecipeItemCreateWithoutVenueInput[] | RecipeItemUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: RecipeItemCreateOrConnectWithoutVenueInput | RecipeItemCreateOrConnectWithoutVenueInput[]
    createMany?: RecipeItemCreateManyVenueInputEnvelope
    connect?: RecipeItemWhereUniqueInput | RecipeItemWhereUniqueInput[]
  }

  export type AddOnCreateNestedManyWithoutVenueInput = {
    create?: XOR<AddOnCreateWithoutVenueInput, AddOnUncheckedCreateWithoutVenueInput> | AddOnCreateWithoutVenueInput[] | AddOnUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: AddOnCreateOrConnectWithoutVenueInput | AddOnCreateOrConnectWithoutVenueInput[]
    createMany?: AddOnCreateManyVenueInputEnvelope
    connect?: AddOnWhereUniqueInput | AddOnWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutVenueInput = {
    create?: XOR<OrderCreateWithoutVenueInput, OrderUncheckedCreateWithoutVenueInput> | OrderCreateWithoutVenueInput[] | OrderUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutVenueInput | OrderCreateOrConnectWithoutVenueInput[]
    createMany?: OrderCreateManyVenueInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderItemCreateNestedManyWithoutVenueInput = {
    create?: XOR<OrderItemCreateWithoutVenueInput, OrderItemUncheckedCreateWithoutVenueInput> | OrderItemCreateWithoutVenueInput[] | OrderItemUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutVenueInput | OrderItemCreateOrConnectWithoutVenueInput[]
    createMany?: OrderItemCreateManyVenueInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type StaffAccountUncheckedCreateNestedManyWithoutVenueInput = {
    create?: XOR<StaffAccountCreateWithoutVenueInput, StaffAccountUncheckedCreateWithoutVenueInput> | StaffAccountCreateWithoutVenueInput[] | StaffAccountUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: StaffAccountCreateOrConnectWithoutVenueInput | StaffAccountCreateOrConnectWithoutVenueInput[]
    createMany?: StaffAccountCreateManyVenueInputEnvelope
    connect?: StaffAccountWhereUniqueInput | StaffAccountWhereUniqueInput[]
  }

  export type TableUncheckedCreateNestedManyWithoutVenueInput = {
    create?: XOR<TableCreateWithoutVenueInput, TableUncheckedCreateWithoutVenueInput> | TableCreateWithoutVenueInput[] | TableUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: TableCreateOrConnectWithoutVenueInput | TableCreateOrConnectWithoutVenueInput[]
    createMany?: TableCreateManyVenueInputEnvelope
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
  }

  export type TableSessionUncheckedCreateNestedManyWithoutVenueInput = {
    create?: XOR<TableSessionCreateWithoutVenueInput, TableSessionUncheckedCreateWithoutVenueInput> | TableSessionCreateWithoutVenueInput[] | TableSessionUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: TableSessionCreateOrConnectWithoutVenueInput | TableSessionCreateOrConnectWithoutVenueInput[]
    createMany?: TableSessionCreateManyVenueInputEnvelope
    connect?: TableSessionWhereUniqueInput | TableSessionWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutVenueInput = {
    create?: XOR<CategoryCreateWithoutVenueInput, CategoryUncheckedCreateWithoutVenueInput> | CategoryCreateWithoutVenueInput[] | CategoryUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutVenueInput | CategoryCreateOrConnectWithoutVenueInput[]
    createMany?: CategoryCreateManyVenueInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type MenuItemUncheckedCreateNestedManyWithoutVenueInput = {
    create?: XOR<MenuItemCreateWithoutVenueInput, MenuItemUncheckedCreateWithoutVenueInput> | MenuItemCreateWithoutVenueInput[] | MenuItemUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutVenueInput | MenuItemCreateOrConnectWithoutVenueInput[]
    createMany?: MenuItemCreateManyVenueInputEnvelope
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
  }

  export type IngredientUncheckedCreateNestedManyWithoutVenueInput = {
    create?: XOR<IngredientCreateWithoutVenueInput, IngredientUncheckedCreateWithoutVenueInput> | IngredientCreateWithoutVenueInput[] | IngredientUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutVenueInput | IngredientCreateOrConnectWithoutVenueInput[]
    createMany?: IngredientCreateManyVenueInputEnvelope
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
  }

  export type RecipeItemUncheckedCreateNestedManyWithoutVenueInput = {
    create?: XOR<RecipeItemCreateWithoutVenueInput, RecipeItemUncheckedCreateWithoutVenueInput> | RecipeItemCreateWithoutVenueInput[] | RecipeItemUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: RecipeItemCreateOrConnectWithoutVenueInput | RecipeItemCreateOrConnectWithoutVenueInput[]
    createMany?: RecipeItemCreateManyVenueInputEnvelope
    connect?: RecipeItemWhereUniqueInput | RecipeItemWhereUniqueInput[]
  }

  export type AddOnUncheckedCreateNestedManyWithoutVenueInput = {
    create?: XOR<AddOnCreateWithoutVenueInput, AddOnUncheckedCreateWithoutVenueInput> | AddOnCreateWithoutVenueInput[] | AddOnUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: AddOnCreateOrConnectWithoutVenueInput | AddOnCreateOrConnectWithoutVenueInput[]
    createMany?: AddOnCreateManyVenueInputEnvelope
    connect?: AddOnWhereUniqueInput | AddOnWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutVenueInput = {
    create?: XOR<OrderCreateWithoutVenueInput, OrderUncheckedCreateWithoutVenueInput> | OrderCreateWithoutVenueInput[] | OrderUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutVenueInput | OrderCreateOrConnectWithoutVenueInput[]
    createMany?: OrderCreateManyVenueInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutVenueInput = {
    create?: XOR<OrderItemCreateWithoutVenueInput, OrderItemUncheckedCreateWithoutVenueInput> | OrderItemCreateWithoutVenueInput[] | OrderItemUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutVenueInput | OrderItemCreateOrConnectWithoutVenueInput[]
    createMany?: OrderItemCreateManyVenueInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StaffAccountUpdateManyWithoutVenueNestedInput = {
    create?: XOR<StaffAccountCreateWithoutVenueInput, StaffAccountUncheckedCreateWithoutVenueInput> | StaffAccountCreateWithoutVenueInput[] | StaffAccountUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: StaffAccountCreateOrConnectWithoutVenueInput | StaffAccountCreateOrConnectWithoutVenueInput[]
    upsert?: StaffAccountUpsertWithWhereUniqueWithoutVenueInput | StaffAccountUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: StaffAccountCreateManyVenueInputEnvelope
    set?: StaffAccountWhereUniqueInput | StaffAccountWhereUniqueInput[]
    disconnect?: StaffAccountWhereUniqueInput | StaffAccountWhereUniqueInput[]
    delete?: StaffAccountWhereUniqueInput | StaffAccountWhereUniqueInput[]
    connect?: StaffAccountWhereUniqueInput | StaffAccountWhereUniqueInput[]
    update?: StaffAccountUpdateWithWhereUniqueWithoutVenueInput | StaffAccountUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: StaffAccountUpdateManyWithWhereWithoutVenueInput | StaffAccountUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: StaffAccountScalarWhereInput | StaffAccountScalarWhereInput[]
  }

  export type TableUpdateManyWithoutVenueNestedInput = {
    create?: XOR<TableCreateWithoutVenueInput, TableUncheckedCreateWithoutVenueInput> | TableCreateWithoutVenueInput[] | TableUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: TableCreateOrConnectWithoutVenueInput | TableCreateOrConnectWithoutVenueInput[]
    upsert?: TableUpsertWithWhereUniqueWithoutVenueInput | TableUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: TableCreateManyVenueInputEnvelope
    set?: TableWhereUniqueInput | TableWhereUniqueInput[]
    disconnect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    delete?: TableWhereUniqueInput | TableWhereUniqueInput[]
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    update?: TableUpdateWithWhereUniqueWithoutVenueInput | TableUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: TableUpdateManyWithWhereWithoutVenueInput | TableUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: TableScalarWhereInput | TableScalarWhereInput[]
  }

  export type TableSessionUpdateManyWithoutVenueNestedInput = {
    create?: XOR<TableSessionCreateWithoutVenueInput, TableSessionUncheckedCreateWithoutVenueInput> | TableSessionCreateWithoutVenueInput[] | TableSessionUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: TableSessionCreateOrConnectWithoutVenueInput | TableSessionCreateOrConnectWithoutVenueInput[]
    upsert?: TableSessionUpsertWithWhereUniqueWithoutVenueInput | TableSessionUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: TableSessionCreateManyVenueInputEnvelope
    set?: TableSessionWhereUniqueInput | TableSessionWhereUniqueInput[]
    disconnect?: TableSessionWhereUniqueInput | TableSessionWhereUniqueInput[]
    delete?: TableSessionWhereUniqueInput | TableSessionWhereUniqueInput[]
    connect?: TableSessionWhereUniqueInput | TableSessionWhereUniqueInput[]
    update?: TableSessionUpdateWithWhereUniqueWithoutVenueInput | TableSessionUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: TableSessionUpdateManyWithWhereWithoutVenueInput | TableSessionUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: TableSessionScalarWhereInput | TableSessionScalarWhereInput[]
  }

  export type CategoryUpdateManyWithoutVenueNestedInput = {
    create?: XOR<CategoryCreateWithoutVenueInput, CategoryUncheckedCreateWithoutVenueInput> | CategoryCreateWithoutVenueInput[] | CategoryUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutVenueInput | CategoryCreateOrConnectWithoutVenueInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutVenueInput | CategoryUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: CategoryCreateManyVenueInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutVenueInput | CategoryUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutVenueInput | CategoryUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type MenuItemUpdateManyWithoutVenueNestedInput = {
    create?: XOR<MenuItemCreateWithoutVenueInput, MenuItemUncheckedCreateWithoutVenueInput> | MenuItemCreateWithoutVenueInput[] | MenuItemUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutVenueInput | MenuItemCreateOrConnectWithoutVenueInput[]
    upsert?: MenuItemUpsertWithWhereUniqueWithoutVenueInput | MenuItemUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: MenuItemCreateManyVenueInputEnvelope
    set?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    disconnect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    delete?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    update?: MenuItemUpdateWithWhereUniqueWithoutVenueInput | MenuItemUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: MenuItemUpdateManyWithWhereWithoutVenueInput | MenuItemUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
  }

  export type IngredientUpdateManyWithoutVenueNestedInput = {
    create?: XOR<IngredientCreateWithoutVenueInput, IngredientUncheckedCreateWithoutVenueInput> | IngredientCreateWithoutVenueInput[] | IngredientUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutVenueInput | IngredientCreateOrConnectWithoutVenueInput[]
    upsert?: IngredientUpsertWithWhereUniqueWithoutVenueInput | IngredientUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: IngredientCreateManyVenueInputEnvelope
    set?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    disconnect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    delete?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    update?: IngredientUpdateWithWhereUniqueWithoutVenueInput | IngredientUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: IngredientUpdateManyWithWhereWithoutVenueInput | IngredientUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: IngredientScalarWhereInput | IngredientScalarWhereInput[]
  }

  export type RecipeItemUpdateManyWithoutVenueNestedInput = {
    create?: XOR<RecipeItemCreateWithoutVenueInput, RecipeItemUncheckedCreateWithoutVenueInput> | RecipeItemCreateWithoutVenueInput[] | RecipeItemUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: RecipeItemCreateOrConnectWithoutVenueInput | RecipeItemCreateOrConnectWithoutVenueInput[]
    upsert?: RecipeItemUpsertWithWhereUniqueWithoutVenueInput | RecipeItemUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: RecipeItemCreateManyVenueInputEnvelope
    set?: RecipeItemWhereUniqueInput | RecipeItemWhereUniqueInput[]
    disconnect?: RecipeItemWhereUniqueInput | RecipeItemWhereUniqueInput[]
    delete?: RecipeItemWhereUniqueInput | RecipeItemWhereUniqueInput[]
    connect?: RecipeItemWhereUniqueInput | RecipeItemWhereUniqueInput[]
    update?: RecipeItemUpdateWithWhereUniqueWithoutVenueInput | RecipeItemUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: RecipeItemUpdateManyWithWhereWithoutVenueInput | RecipeItemUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: RecipeItemScalarWhereInput | RecipeItemScalarWhereInput[]
  }

  export type AddOnUpdateManyWithoutVenueNestedInput = {
    create?: XOR<AddOnCreateWithoutVenueInput, AddOnUncheckedCreateWithoutVenueInput> | AddOnCreateWithoutVenueInput[] | AddOnUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: AddOnCreateOrConnectWithoutVenueInput | AddOnCreateOrConnectWithoutVenueInput[]
    upsert?: AddOnUpsertWithWhereUniqueWithoutVenueInput | AddOnUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: AddOnCreateManyVenueInputEnvelope
    set?: AddOnWhereUniqueInput | AddOnWhereUniqueInput[]
    disconnect?: AddOnWhereUniqueInput | AddOnWhereUniqueInput[]
    delete?: AddOnWhereUniqueInput | AddOnWhereUniqueInput[]
    connect?: AddOnWhereUniqueInput | AddOnWhereUniqueInput[]
    update?: AddOnUpdateWithWhereUniqueWithoutVenueInput | AddOnUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: AddOnUpdateManyWithWhereWithoutVenueInput | AddOnUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: AddOnScalarWhereInput | AddOnScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutVenueNestedInput = {
    create?: XOR<OrderCreateWithoutVenueInput, OrderUncheckedCreateWithoutVenueInput> | OrderCreateWithoutVenueInput[] | OrderUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutVenueInput | OrderCreateOrConnectWithoutVenueInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutVenueInput | OrderUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: OrderCreateManyVenueInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutVenueInput | OrderUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutVenueInput | OrderUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderItemUpdateManyWithoutVenueNestedInput = {
    create?: XOR<OrderItemCreateWithoutVenueInput, OrderItemUncheckedCreateWithoutVenueInput> | OrderItemCreateWithoutVenueInput[] | OrderItemUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutVenueInput | OrderItemCreateOrConnectWithoutVenueInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutVenueInput | OrderItemUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: OrderItemCreateManyVenueInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutVenueInput | OrderItemUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutVenueInput | OrderItemUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type StaffAccountUncheckedUpdateManyWithoutVenueNestedInput = {
    create?: XOR<StaffAccountCreateWithoutVenueInput, StaffAccountUncheckedCreateWithoutVenueInput> | StaffAccountCreateWithoutVenueInput[] | StaffAccountUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: StaffAccountCreateOrConnectWithoutVenueInput | StaffAccountCreateOrConnectWithoutVenueInput[]
    upsert?: StaffAccountUpsertWithWhereUniqueWithoutVenueInput | StaffAccountUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: StaffAccountCreateManyVenueInputEnvelope
    set?: StaffAccountWhereUniqueInput | StaffAccountWhereUniqueInput[]
    disconnect?: StaffAccountWhereUniqueInput | StaffAccountWhereUniqueInput[]
    delete?: StaffAccountWhereUniqueInput | StaffAccountWhereUniqueInput[]
    connect?: StaffAccountWhereUniqueInput | StaffAccountWhereUniqueInput[]
    update?: StaffAccountUpdateWithWhereUniqueWithoutVenueInput | StaffAccountUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: StaffAccountUpdateManyWithWhereWithoutVenueInput | StaffAccountUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: StaffAccountScalarWhereInput | StaffAccountScalarWhereInput[]
  }

  export type TableUncheckedUpdateManyWithoutVenueNestedInput = {
    create?: XOR<TableCreateWithoutVenueInput, TableUncheckedCreateWithoutVenueInput> | TableCreateWithoutVenueInput[] | TableUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: TableCreateOrConnectWithoutVenueInput | TableCreateOrConnectWithoutVenueInput[]
    upsert?: TableUpsertWithWhereUniqueWithoutVenueInput | TableUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: TableCreateManyVenueInputEnvelope
    set?: TableWhereUniqueInput | TableWhereUniqueInput[]
    disconnect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    delete?: TableWhereUniqueInput | TableWhereUniqueInput[]
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    update?: TableUpdateWithWhereUniqueWithoutVenueInput | TableUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: TableUpdateManyWithWhereWithoutVenueInput | TableUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: TableScalarWhereInput | TableScalarWhereInput[]
  }

  export type TableSessionUncheckedUpdateManyWithoutVenueNestedInput = {
    create?: XOR<TableSessionCreateWithoutVenueInput, TableSessionUncheckedCreateWithoutVenueInput> | TableSessionCreateWithoutVenueInput[] | TableSessionUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: TableSessionCreateOrConnectWithoutVenueInput | TableSessionCreateOrConnectWithoutVenueInput[]
    upsert?: TableSessionUpsertWithWhereUniqueWithoutVenueInput | TableSessionUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: TableSessionCreateManyVenueInputEnvelope
    set?: TableSessionWhereUniqueInput | TableSessionWhereUniqueInput[]
    disconnect?: TableSessionWhereUniqueInput | TableSessionWhereUniqueInput[]
    delete?: TableSessionWhereUniqueInput | TableSessionWhereUniqueInput[]
    connect?: TableSessionWhereUniqueInput | TableSessionWhereUniqueInput[]
    update?: TableSessionUpdateWithWhereUniqueWithoutVenueInput | TableSessionUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: TableSessionUpdateManyWithWhereWithoutVenueInput | TableSessionUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: TableSessionScalarWhereInput | TableSessionScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutVenueNestedInput = {
    create?: XOR<CategoryCreateWithoutVenueInput, CategoryUncheckedCreateWithoutVenueInput> | CategoryCreateWithoutVenueInput[] | CategoryUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutVenueInput | CategoryCreateOrConnectWithoutVenueInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutVenueInput | CategoryUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: CategoryCreateManyVenueInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutVenueInput | CategoryUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutVenueInput | CategoryUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type MenuItemUncheckedUpdateManyWithoutVenueNestedInput = {
    create?: XOR<MenuItemCreateWithoutVenueInput, MenuItemUncheckedCreateWithoutVenueInput> | MenuItemCreateWithoutVenueInput[] | MenuItemUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutVenueInput | MenuItemCreateOrConnectWithoutVenueInput[]
    upsert?: MenuItemUpsertWithWhereUniqueWithoutVenueInput | MenuItemUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: MenuItemCreateManyVenueInputEnvelope
    set?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    disconnect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    delete?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    update?: MenuItemUpdateWithWhereUniqueWithoutVenueInput | MenuItemUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: MenuItemUpdateManyWithWhereWithoutVenueInput | MenuItemUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
  }

  export type IngredientUncheckedUpdateManyWithoutVenueNestedInput = {
    create?: XOR<IngredientCreateWithoutVenueInput, IngredientUncheckedCreateWithoutVenueInput> | IngredientCreateWithoutVenueInput[] | IngredientUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutVenueInput | IngredientCreateOrConnectWithoutVenueInput[]
    upsert?: IngredientUpsertWithWhereUniqueWithoutVenueInput | IngredientUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: IngredientCreateManyVenueInputEnvelope
    set?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    disconnect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    delete?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    update?: IngredientUpdateWithWhereUniqueWithoutVenueInput | IngredientUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: IngredientUpdateManyWithWhereWithoutVenueInput | IngredientUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: IngredientScalarWhereInput | IngredientScalarWhereInput[]
  }

  export type RecipeItemUncheckedUpdateManyWithoutVenueNestedInput = {
    create?: XOR<RecipeItemCreateWithoutVenueInput, RecipeItemUncheckedCreateWithoutVenueInput> | RecipeItemCreateWithoutVenueInput[] | RecipeItemUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: RecipeItemCreateOrConnectWithoutVenueInput | RecipeItemCreateOrConnectWithoutVenueInput[]
    upsert?: RecipeItemUpsertWithWhereUniqueWithoutVenueInput | RecipeItemUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: RecipeItemCreateManyVenueInputEnvelope
    set?: RecipeItemWhereUniqueInput | RecipeItemWhereUniqueInput[]
    disconnect?: RecipeItemWhereUniqueInput | RecipeItemWhereUniqueInput[]
    delete?: RecipeItemWhereUniqueInput | RecipeItemWhereUniqueInput[]
    connect?: RecipeItemWhereUniqueInput | RecipeItemWhereUniqueInput[]
    update?: RecipeItemUpdateWithWhereUniqueWithoutVenueInput | RecipeItemUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: RecipeItemUpdateManyWithWhereWithoutVenueInput | RecipeItemUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: RecipeItemScalarWhereInput | RecipeItemScalarWhereInput[]
  }

  export type AddOnUncheckedUpdateManyWithoutVenueNestedInput = {
    create?: XOR<AddOnCreateWithoutVenueInput, AddOnUncheckedCreateWithoutVenueInput> | AddOnCreateWithoutVenueInput[] | AddOnUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: AddOnCreateOrConnectWithoutVenueInput | AddOnCreateOrConnectWithoutVenueInput[]
    upsert?: AddOnUpsertWithWhereUniqueWithoutVenueInput | AddOnUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: AddOnCreateManyVenueInputEnvelope
    set?: AddOnWhereUniqueInput | AddOnWhereUniqueInput[]
    disconnect?: AddOnWhereUniqueInput | AddOnWhereUniqueInput[]
    delete?: AddOnWhereUniqueInput | AddOnWhereUniqueInput[]
    connect?: AddOnWhereUniqueInput | AddOnWhereUniqueInput[]
    update?: AddOnUpdateWithWhereUniqueWithoutVenueInput | AddOnUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: AddOnUpdateManyWithWhereWithoutVenueInput | AddOnUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: AddOnScalarWhereInput | AddOnScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutVenueNestedInput = {
    create?: XOR<OrderCreateWithoutVenueInput, OrderUncheckedCreateWithoutVenueInput> | OrderCreateWithoutVenueInput[] | OrderUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutVenueInput | OrderCreateOrConnectWithoutVenueInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutVenueInput | OrderUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: OrderCreateManyVenueInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutVenueInput | OrderUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutVenueInput | OrderUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutVenueNestedInput = {
    create?: XOR<OrderItemCreateWithoutVenueInput, OrderItemUncheckedCreateWithoutVenueInput> | OrderItemCreateWithoutVenueInput[] | OrderItemUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutVenueInput | OrderItemCreateOrConnectWithoutVenueInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutVenueInput | OrderItemUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: OrderItemCreateManyVenueInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutVenueInput | OrderItemUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutVenueInput | OrderItemUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type VenueCreateNestedOneWithoutStaffAccountsInput = {
    create?: XOR<VenueCreateWithoutStaffAccountsInput, VenueUncheckedCreateWithoutStaffAccountsInput>
    connectOrCreate?: VenueCreateOrConnectWithoutStaffAccountsInput
    connect?: VenueWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type VenueUpdateOneRequiredWithoutStaffAccountsNestedInput = {
    create?: XOR<VenueCreateWithoutStaffAccountsInput, VenueUncheckedCreateWithoutStaffAccountsInput>
    connectOrCreate?: VenueCreateOrConnectWithoutStaffAccountsInput
    upsert?: VenueUpsertWithoutStaffAccountsInput
    connect?: VenueWhereUniqueInput
    update?: XOR<XOR<VenueUpdateToOneWithWhereWithoutStaffAccountsInput, VenueUpdateWithoutStaffAccountsInput>, VenueUncheckedUpdateWithoutStaffAccountsInput>
  }

  export type VenueCreateNestedOneWithoutTablesInput = {
    create?: XOR<VenueCreateWithoutTablesInput, VenueUncheckedCreateWithoutTablesInput>
    connectOrCreate?: VenueCreateOrConnectWithoutTablesInput
    connect?: VenueWhereUniqueInput
  }

  export type TableSessionCreateNestedManyWithoutTableInput = {
    create?: XOR<TableSessionCreateWithoutTableInput, TableSessionUncheckedCreateWithoutTableInput> | TableSessionCreateWithoutTableInput[] | TableSessionUncheckedCreateWithoutTableInput[]
    connectOrCreate?: TableSessionCreateOrConnectWithoutTableInput | TableSessionCreateOrConnectWithoutTableInput[]
    createMany?: TableSessionCreateManyTableInputEnvelope
    connect?: TableSessionWhereUniqueInput | TableSessionWhereUniqueInput[]
  }

  export type TableSessionUncheckedCreateNestedManyWithoutTableInput = {
    create?: XOR<TableSessionCreateWithoutTableInput, TableSessionUncheckedCreateWithoutTableInput> | TableSessionCreateWithoutTableInput[] | TableSessionUncheckedCreateWithoutTableInput[]
    connectOrCreate?: TableSessionCreateOrConnectWithoutTableInput | TableSessionCreateOrConnectWithoutTableInput[]
    createMany?: TableSessionCreateManyTableInputEnvelope
    connect?: TableSessionWhereUniqueInput | TableSessionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type VenueUpdateOneRequiredWithoutTablesNestedInput = {
    create?: XOR<VenueCreateWithoutTablesInput, VenueUncheckedCreateWithoutTablesInput>
    connectOrCreate?: VenueCreateOrConnectWithoutTablesInput
    upsert?: VenueUpsertWithoutTablesInput
    connect?: VenueWhereUniqueInput
    update?: XOR<XOR<VenueUpdateToOneWithWhereWithoutTablesInput, VenueUpdateWithoutTablesInput>, VenueUncheckedUpdateWithoutTablesInput>
  }

  export type TableSessionUpdateManyWithoutTableNestedInput = {
    create?: XOR<TableSessionCreateWithoutTableInput, TableSessionUncheckedCreateWithoutTableInput> | TableSessionCreateWithoutTableInput[] | TableSessionUncheckedCreateWithoutTableInput[]
    connectOrCreate?: TableSessionCreateOrConnectWithoutTableInput | TableSessionCreateOrConnectWithoutTableInput[]
    upsert?: TableSessionUpsertWithWhereUniqueWithoutTableInput | TableSessionUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: TableSessionCreateManyTableInputEnvelope
    set?: TableSessionWhereUniqueInput | TableSessionWhereUniqueInput[]
    disconnect?: TableSessionWhereUniqueInput | TableSessionWhereUniqueInput[]
    delete?: TableSessionWhereUniqueInput | TableSessionWhereUniqueInput[]
    connect?: TableSessionWhereUniqueInput | TableSessionWhereUniqueInput[]
    update?: TableSessionUpdateWithWhereUniqueWithoutTableInput | TableSessionUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: TableSessionUpdateManyWithWhereWithoutTableInput | TableSessionUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: TableSessionScalarWhereInput | TableSessionScalarWhereInput[]
  }

  export type TableSessionUncheckedUpdateManyWithoutTableNestedInput = {
    create?: XOR<TableSessionCreateWithoutTableInput, TableSessionUncheckedCreateWithoutTableInput> | TableSessionCreateWithoutTableInput[] | TableSessionUncheckedCreateWithoutTableInput[]
    connectOrCreate?: TableSessionCreateOrConnectWithoutTableInput | TableSessionCreateOrConnectWithoutTableInput[]
    upsert?: TableSessionUpsertWithWhereUniqueWithoutTableInput | TableSessionUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: TableSessionCreateManyTableInputEnvelope
    set?: TableSessionWhereUniqueInput | TableSessionWhereUniqueInput[]
    disconnect?: TableSessionWhereUniqueInput | TableSessionWhereUniqueInput[]
    delete?: TableSessionWhereUniqueInput | TableSessionWhereUniqueInput[]
    connect?: TableSessionWhereUniqueInput | TableSessionWhereUniqueInput[]
    update?: TableSessionUpdateWithWhereUniqueWithoutTableInput | TableSessionUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: TableSessionUpdateManyWithWhereWithoutTableInput | TableSessionUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: TableSessionScalarWhereInput | TableSessionScalarWhereInput[]
  }

  export type VenueCreateNestedOneWithoutTableSessionsInput = {
    create?: XOR<VenueCreateWithoutTableSessionsInput, VenueUncheckedCreateWithoutTableSessionsInput>
    connectOrCreate?: VenueCreateOrConnectWithoutTableSessionsInput
    connect?: VenueWhereUniqueInput
  }

  export type TableCreateNestedOneWithoutSessionsInput = {
    create?: XOR<TableCreateWithoutSessionsInput, TableUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: TableCreateOrConnectWithoutSessionsInput
    connect?: TableWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutTableSessionInput = {
    create?: XOR<OrderCreateWithoutTableSessionInput, OrderUncheckedCreateWithoutTableSessionInput> | OrderCreateWithoutTableSessionInput[] | OrderUncheckedCreateWithoutTableSessionInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTableSessionInput | OrderCreateOrConnectWithoutTableSessionInput[]
    createMany?: OrderCreateManyTableSessionInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutTableSessionInput = {
    create?: XOR<OrderCreateWithoutTableSessionInput, OrderUncheckedCreateWithoutTableSessionInput> | OrderCreateWithoutTableSessionInput[] | OrderUncheckedCreateWithoutTableSessionInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTableSessionInput | OrderCreateOrConnectWithoutTableSessionInput[]
    createMany?: OrderCreateManyTableSessionInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type VenueUpdateOneRequiredWithoutTableSessionsNestedInput = {
    create?: XOR<VenueCreateWithoutTableSessionsInput, VenueUncheckedCreateWithoutTableSessionsInput>
    connectOrCreate?: VenueCreateOrConnectWithoutTableSessionsInput
    upsert?: VenueUpsertWithoutTableSessionsInput
    connect?: VenueWhereUniqueInput
    update?: XOR<XOR<VenueUpdateToOneWithWhereWithoutTableSessionsInput, VenueUpdateWithoutTableSessionsInput>, VenueUncheckedUpdateWithoutTableSessionsInput>
  }

  export type TableUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<TableCreateWithoutSessionsInput, TableUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: TableCreateOrConnectWithoutSessionsInput
    upsert?: TableUpsertWithoutSessionsInput
    connect?: TableWhereUniqueInput
    update?: XOR<XOR<TableUpdateToOneWithWhereWithoutSessionsInput, TableUpdateWithoutSessionsInput>, TableUncheckedUpdateWithoutSessionsInput>
  }

  export type OrderUpdateManyWithoutTableSessionNestedInput = {
    create?: XOR<OrderCreateWithoutTableSessionInput, OrderUncheckedCreateWithoutTableSessionInput> | OrderCreateWithoutTableSessionInput[] | OrderUncheckedCreateWithoutTableSessionInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTableSessionInput | OrderCreateOrConnectWithoutTableSessionInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutTableSessionInput | OrderUpsertWithWhereUniqueWithoutTableSessionInput[]
    createMany?: OrderCreateManyTableSessionInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutTableSessionInput | OrderUpdateWithWhereUniqueWithoutTableSessionInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutTableSessionInput | OrderUpdateManyWithWhereWithoutTableSessionInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutTableSessionNestedInput = {
    create?: XOR<OrderCreateWithoutTableSessionInput, OrderUncheckedCreateWithoutTableSessionInput> | OrderCreateWithoutTableSessionInput[] | OrderUncheckedCreateWithoutTableSessionInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTableSessionInput | OrderCreateOrConnectWithoutTableSessionInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutTableSessionInput | OrderUpsertWithWhereUniqueWithoutTableSessionInput[]
    createMany?: OrderCreateManyTableSessionInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutTableSessionInput | OrderUpdateWithWhereUniqueWithoutTableSessionInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutTableSessionInput | OrderUpdateManyWithWhereWithoutTableSessionInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type VenueCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<VenueCreateWithoutCategoriesInput, VenueUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: VenueCreateOrConnectWithoutCategoriesInput
    connect?: VenueWhereUniqueInput
  }

  export type MenuItemCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MenuItemCreateWithoutCategoryInput, MenuItemUncheckedCreateWithoutCategoryInput> | MenuItemCreateWithoutCategoryInput[] | MenuItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutCategoryInput | MenuItemCreateOrConnectWithoutCategoryInput[]
    createMany?: MenuItemCreateManyCategoryInputEnvelope
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
  }

  export type MenuItemUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MenuItemCreateWithoutCategoryInput, MenuItemUncheckedCreateWithoutCategoryInput> | MenuItemCreateWithoutCategoryInput[] | MenuItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutCategoryInput | MenuItemCreateOrConnectWithoutCategoryInput[]
    createMany?: MenuItemCreateManyCategoryInputEnvelope
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VenueUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<VenueCreateWithoutCategoriesInput, VenueUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: VenueCreateOrConnectWithoutCategoriesInput
    upsert?: VenueUpsertWithoutCategoriesInput
    connect?: VenueWhereUniqueInput
    update?: XOR<XOR<VenueUpdateToOneWithWhereWithoutCategoriesInput, VenueUpdateWithoutCategoriesInput>, VenueUncheckedUpdateWithoutCategoriesInput>
  }

  export type MenuItemUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MenuItemCreateWithoutCategoryInput, MenuItemUncheckedCreateWithoutCategoryInput> | MenuItemCreateWithoutCategoryInput[] | MenuItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutCategoryInput | MenuItemCreateOrConnectWithoutCategoryInput[]
    upsert?: MenuItemUpsertWithWhereUniqueWithoutCategoryInput | MenuItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MenuItemCreateManyCategoryInputEnvelope
    set?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    disconnect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    delete?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    update?: MenuItemUpdateWithWhereUniqueWithoutCategoryInput | MenuItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MenuItemUpdateManyWithWhereWithoutCategoryInput | MenuItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
  }

  export type MenuItemUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MenuItemCreateWithoutCategoryInput, MenuItemUncheckedCreateWithoutCategoryInput> | MenuItemCreateWithoutCategoryInput[] | MenuItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutCategoryInput | MenuItemCreateOrConnectWithoutCategoryInput[]
    upsert?: MenuItemUpsertWithWhereUniqueWithoutCategoryInput | MenuItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MenuItemCreateManyCategoryInputEnvelope
    set?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    disconnect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    delete?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    update?: MenuItemUpdateWithWhereUniqueWithoutCategoryInput | MenuItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MenuItemUpdateManyWithWhereWithoutCategoryInput | MenuItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
  }

  export type VenueCreateNestedOneWithoutMenuItemsInput = {
    create?: XOR<VenueCreateWithoutMenuItemsInput, VenueUncheckedCreateWithoutMenuItemsInput>
    connectOrCreate?: VenueCreateOrConnectWithoutMenuItemsInput
    connect?: VenueWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutItemsInput = {
    create?: XOR<CategoryCreateWithoutItemsInput, CategoryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutItemsInput
    connect?: CategoryWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutMenuItemInput = {
    create?: XOR<OrderItemCreateWithoutMenuItemInput, OrderItemUncheckedCreateWithoutMenuItemInput> | OrderItemCreateWithoutMenuItemInput[] | OrderItemUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutMenuItemInput | OrderItemCreateOrConnectWithoutMenuItemInput[]
    createMany?: OrderItemCreateManyMenuItemInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type RecipeItemCreateNestedManyWithoutMenuItemInput = {
    create?: XOR<RecipeItemCreateWithoutMenuItemInput, RecipeItemUncheckedCreateWithoutMenuItemInput> | RecipeItemCreateWithoutMenuItemInput[] | RecipeItemUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: RecipeItemCreateOrConnectWithoutMenuItemInput | RecipeItemCreateOrConnectWithoutMenuItemInput[]
    createMany?: RecipeItemCreateManyMenuItemInputEnvelope
    connect?: RecipeItemWhereUniqueInput | RecipeItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutMenuItemInput = {
    create?: XOR<OrderItemCreateWithoutMenuItemInput, OrderItemUncheckedCreateWithoutMenuItemInput> | OrderItemCreateWithoutMenuItemInput[] | OrderItemUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutMenuItemInput | OrderItemCreateOrConnectWithoutMenuItemInput[]
    createMany?: OrderItemCreateManyMenuItemInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type RecipeItemUncheckedCreateNestedManyWithoutMenuItemInput = {
    create?: XOR<RecipeItemCreateWithoutMenuItemInput, RecipeItemUncheckedCreateWithoutMenuItemInput> | RecipeItemCreateWithoutMenuItemInput[] | RecipeItemUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: RecipeItemCreateOrConnectWithoutMenuItemInput | RecipeItemCreateOrConnectWithoutMenuItemInput[]
    createMany?: RecipeItemCreateManyMenuItemInputEnvelope
    connect?: RecipeItemWhereUniqueInput | RecipeItemWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type VenueUpdateOneRequiredWithoutMenuItemsNestedInput = {
    create?: XOR<VenueCreateWithoutMenuItemsInput, VenueUncheckedCreateWithoutMenuItemsInput>
    connectOrCreate?: VenueCreateOrConnectWithoutMenuItemsInput
    upsert?: VenueUpsertWithoutMenuItemsInput
    connect?: VenueWhereUniqueInput
    update?: XOR<XOR<VenueUpdateToOneWithWhereWithoutMenuItemsInput, VenueUpdateWithoutMenuItemsInput>, VenueUncheckedUpdateWithoutMenuItemsInput>
  }

  export type CategoryUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<CategoryCreateWithoutItemsInput, CategoryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutItemsInput
    upsert?: CategoryUpsertWithoutItemsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutItemsInput, CategoryUpdateWithoutItemsInput>, CategoryUncheckedUpdateWithoutItemsInput>
  }

  export type OrderItemUpdateManyWithoutMenuItemNestedInput = {
    create?: XOR<OrderItemCreateWithoutMenuItemInput, OrderItemUncheckedCreateWithoutMenuItemInput> | OrderItemCreateWithoutMenuItemInput[] | OrderItemUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutMenuItemInput | OrderItemCreateOrConnectWithoutMenuItemInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutMenuItemInput | OrderItemUpsertWithWhereUniqueWithoutMenuItemInput[]
    createMany?: OrderItemCreateManyMenuItemInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutMenuItemInput | OrderItemUpdateWithWhereUniqueWithoutMenuItemInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutMenuItemInput | OrderItemUpdateManyWithWhereWithoutMenuItemInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type RecipeItemUpdateManyWithoutMenuItemNestedInput = {
    create?: XOR<RecipeItemCreateWithoutMenuItemInput, RecipeItemUncheckedCreateWithoutMenuItemInput> | RecipeItemCreateWithoutMenuItemInput[] | RecipeItemUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: RecipeItemCreateOrConnectWithoutMenuItemInput | RecipeItemCreateOrConnectWithoutMenuItemInput[]
    upsert?: RecipeItemUpsertWithWhereUniqueWithoutMenuItemInput | RecipeItemUpsertWithWhereUniqueWithoutMenuItemInput[]
    createMany?: RecipeItemCreateManyMenuItemInputEnvelope
    set?: RecipeItemWhereUniqueInput | RecipeItemWhereUniqueInput[]
    disconnect?: RecipeItemWhereUniqueInput | RecipeItemWhereUniqueInput[]
    delete?: RecipeItemWhereUniqueInput | RecipeItemWhereUniqueInput[]
    connect?: RecipeItemWhereUniqueInput | RecipeItemWhereUniqueInput[]
    update?: RecipeItemUpdateWithWhereUniqueWithoutMenuItemInput | RecipeItemUpdateWithWhereUniqueWithoutMenuItemInput[]
    updateMany?: RecipeItemUpdateManyWithWhereWithoutMenuItemInput | RecipeItemUpdateManyWithWhereWithoutMenuItemInput[]
    deleteMany?: RecipeItemScalarWhereInput | RecipeItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutMenuItemNestedInput = {
    create?: XOR<OrderItemCreateWithoutMenuItemInput, OrderItemUncheckedCreateWithoutMenuItemInput> | OrderItemCreateWithoutMenuItemInput[] | OrderItemUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutMenuItemInput | OrderItemCreateOrConnectWithoutMenuItemInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutMenuItemInput | OrderItemUpsertWithWhereUniqueWithoutMenuItemInput[]
    createMany?: OrderItemCreateManyMenuItemInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutMenuItemInput | OrderItemUpdateWithWhereUniqueWithoutMenuItemInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutMenuItemInput | OrderItemUpdateManyWithWhereWithoutMenuItemInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type RecipeItemUncheckedUpdateManyWithoutMenuItemNestedInput = {
    create?: XOR<RecipeItemCreateWithoutMenuItemInput, RecipeItemUncheckedCreateWithoutMenuItemInput> | RecipeItemCreateWithoutMenuItemInput[] | RecipeItemUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: RecipeItemCreateOrConnectWithoutMenuItemInput | RecipeItemCreateOrConnectWithoutMenuItemInput[]
    upsert?: RecipeItemUpsertWithWhereUniqueWithoutMenuItemInput | RecipeItemUpsertWithWhereUniqueWithoutMenuItemInput[]
    createMany?: RecipeItemCreateManyMenuItemInputEnvelope
    set?: RecipeItemWhereUniqueInput | RecipeItemWhereUniqueInput[]
    disconnect?: RecipeItemWhereUniqueInput | RecipeItemWhereUniqueInput[]
    delete?: RecipeItemWhereUniqueInput | RecipeItemWhereUniqueInput[]
    connect?: RecipeItemWhereUniqueInput | RecipeItemWhereUniqueInput[]
    update?: RecipeItemUpdateWithWhereUniqueWithoutMenuItemInput | RecipeItemUpdateWithWhereUniqueWithoutMenuItemInput[]
    updateMany?: RecipeItemUpdateManyWithWhereWithoutMenuItemInput | RecipeItemUpdateManyWithWhereWithoutMenuItemInput[]
    deleteMany?: RecipeItemScalarWhereInput | RecipeItemScalarWhereInput[]
  }

  export type VenueCreateNestedOneWithoutIngredientsInput = {
    create?: XOR<VenueCreateWithoutIngredientsInput, VenueUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: VenueCreateOrConnectWithoutIngredientsInput
    connect?: VenueWhereUniqueInput
  }

  export type RecipeItemCreateNestedManyWithoutIngredientInput = {
    create?: XOR<RecipeItemCreateWithoutIngredientInput, RecipeItemUncheckedCreateWithoutIngredientInput> | RecipeItemCreateWithoutIngredientInput[] | RecipeItemUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: RecipeItemCreateOrConnectWithoutIngredientInput | RecipeItemCreateOrConnectWithoutIngredientInput[]
    createMany?: RecipeItemCreateManyIngredientInputEnvelope
    connect?: RecipeItemWhereUniqueInput | RecipeItemWhereUniqueInput[]
  }

  export type RecipeItemUncheckedCreateNestedManyWithoutIngredientInput = {
    create?: XOR<RecipeItemCreateWithoutIngredientInput, RecipeItemUncheckedCreateWithoutIngredientInput> | RecipeItemCreateWithoutIngredientInput[] | RecipeItemUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: RecipeItemCreateOrConnectWithoutIngredientInput | RecipeItemCreateOrConnectWithoutIngredientInput[]
    createMany?: RecipeItemCreateManyIngredientInputEnvelope
    connect?: RecipeItemWhereUniqueInput | RecipeItemWhereUniqueInput[]
  }

  export type VenueUpdateOneRequiredWithoutIngredientsNestedInput = {
    create?: XOR<VenueCreateWithoutIngredientsInput, VenueUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: VenueCreateOrConnectWithoutIngredientsInput
    upsert?: VenueUpsertWithoutIngredientsInput
    connect?: VenueWhereUniqueInput
    update?: XOR<XOR<VenueUpdateToOneWithWhereWithoutIngredientsInput, VenueUpdateWithoutIngredientsInput>, VenueUncheckedUpdateWithoutIngredientsInput>
  }

  export type RecipeItemUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<RecipeItemCreateWithoutIngredientInput, RecipeItemUncheckedCreateWithoutIngredientInput> | RecipeItemCreateWithoutIngredientInput[] | RecipeItemUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: RecipeItemCreateOrConnectWithoutIngredientInput | RecipeItemCreateOrConnectWithoutIngredientInput[]
    upsert?: RecipeItemUpsertWithWhereUniqueWithoutIngredientInput | RecipeItemUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: RecipeItemCreateManyIngredientInputEnvelope
    set?: RecipeItemWhereUniqueInput | RecipeItemWhereUniqueInput[]
    disconnect?: RecipeItemWhereUniqueInput | RecipeItemWhereUniqueInput[]
    delete?: RecipeItemWhereUniqueInput | RecipeItemWhereUniqueInput[]
    connect?: RecipeItemWhereUniqueInput | RecipeItemWhereUniqueInput[]
    update?: RecipeItemUpdateWithWhereUniqueWithoutIngredientInput | RecipeItemUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: RecipeItemUpdateManyWithWhereWithoutIngredientInput | RecipeItemUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: RecipeItemScalarWhereInput | RecipeItemScalarWhereInput[]
  }

  export type RecipeItemUncheckedUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<RecipeItemCreateWithoutIngredientInput, RecipeItemUncheckedCreateWithoutIngredientInput> | RecipeItemCreateWithoutIngredientInput[] | RecipeItemUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: RecipeItemCreateOrConnectWithoutIngredientInput | RecipeItemCreateOrConnectWithoutIngredientInput[]
    upsert?: RecipeItemUpsertWithWhereUniqueWithoutIngredientInput | RecipeItemUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: RecipeItemCreateManyIngredientInputEnvelope
    set?: RecipeItemWhereUniqueInput | RecipeItemWhereUniqueInput[]
    disconnect?: RecipeItemWhereUniqueInput | RecipeItemWhereUniqueInput[]
    delete?: RecipeItemWhereUniqueInput | RecipeItemWhereUniqueInput[]
    connect?: RecipeItemWhereUniqueInput | RecipeItemWhereUniqueInput[]
    update?: RecipeItemUpdateWithWhereUniqueWithoutIngredientInput | RecipeItemUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: RecipeItemUpdateManyWithWhereWithoutIngredientInput | RecipeItemUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: RecipeItemScalarWhereInput | RecipeItemScalarWhereInput[]
  }

  export type VenueCreateNestedOneWithoutRecipeItemsInput = {
    create?: XOR<VenueCreateWithoutRecipeItemsInput, VenueUncheckedCreateWithoutRecipeItemsInput>
    connectOrCreate?: VenueCreateOrConnectWithoutRecipeItemsInput
    connect?: VenueWhereUniqueInput
  }

  export type MenuItemCreateNestedOneWithoutRecipeItemsInput = {
    create?: XOR<MenuItemCreateWithoutRecipeItemsInput, MenuItemUncheckedCreateWithoutRecipeItemsInput>
    connectOrCreate?: MenuItemCreateOrConnectWithoutRecipeItemsInput
    connect?: MenuItemWhereUniqueInput
  }

  export type IngredientCreateNestedOneWithoutRecipeItemsInput = {
    create?: XOR<IngredientCreateWithoutRecipeItemsInput, IngredientUncheckedCreateWithoutRecipeItemsInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutRecipeItemsInput
    connect?: IngredientWhereUniqueInput
  }

  export type VenueUpdateOneRequiredWithoutRecipeItemsNestedInput = {
    create?: XOR<VenueCreateWithoutRecipeItemsInput, VenueUncheckedCreateWithoutRecipeItemsInput>
    connectOrCreate?: VenueCreateOrConnectWithoutRecipeItemsInput
    upsert?: VenueUpsertWithoutRecipeItemsInput
    connect?: VenueWhereUniqueInput
    update?: XOR<XOR<VenueUpdateToOneWithWhereWithoutRecipeItemsInput, VenueUpdateWithoutRecipeItemsInput>, VenueUncheckedUpdateWithoutRecipeItemsInput>
  }

  export type MenuItemUpdateOneRequiredWithoutRecipeItemsNestedInput = {
    create?: XOR<MenuItemCreateWithoutRecipeItemsInput, MenuItemUncheckedCreateWithoutRecipeItemsInput>
    connectOrCreate?: MenuItemCreateOrConnectWithoutRecipeItemsInput
    upsert?: MenuItemUpsertWithoutRecipeItemsInput
    connect?: MenuItemWhereUniqueInput
    update?: XOR<XOR<MenuItemUpdateToOneWithWhereWithoutRecipeItemsInput, MenuItemUpdateWithoutRecipeItemsInput>, MenuItemUncheckedUpdateWithoutRecipeItemsInput>
  }

  export type IngredientUpdateOneRequiredWithoutRecipeItemsNestedInput = {
    create?: XOR<IngredientCreateWithoutRecipeItemsInput, IngredientUncheckedCreateWithoutRecipeItemsInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutRecipeItemsInput
    upsert?: IngredientUpsertWithoutRecipeItemsInput
    connect?: IngredientWhereUniqueInput
    update?: XOR<XOR<IngredientUpdateToOneWithWhereWithoutRecipeItemsInput, IngredientUpdateWithoutRecipeItemsInput>, IngredientUncheckedUpdateWithoutRecipeItemsInput>
  }

  export type AddOnCreateapplicableItemIdsInput = {
    set: string[]
  }

  export type VenueCreateNestedOneWithoutAddOnsInput = {
    create?: XOR<VenueCreateWithoutAddOnsInput, VenueUncheckedCreateWithoutAddOnsInput>
    connectOrCreate?: VenueCreateOrConnectWithoutAddOnsInput
    connect?: VenueWhereUniqueInput
  }

  export type AddOnUpdateapplicableItemIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type VenueUpdateOneRequiredWithoutAddOnsNestedInput = {
    create?: XOR<VenueCreateWithoutAddOnsInput, VenueUncheckedCreateWithoutAddOnsInput>
    connectOrCreate?: VenueCreateOrConnectWithoutAddOnsInput
    upsert?: VenueUpsertWithoutAddOnsInput
    connect?: VenueWhereUniqueInput
    update?: XOR<XOR<VenueUpdateToOneWithWhereWithoutAddOnsInput, VenueUpdateWithoutAddOnsInput>, VenueUncheckedUpdateWithoutAddOnsInput>
  }

  export type VenueCreateNestedOneWithoutOrdersInput = {
    create?: XOR<VenueCreateWithoutOrdersInput, VenueUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: VenueCreateOrConnectWithoutOrdersInput
    connect?: VenueWhereUniqueInput
  }

  export type TableSessionCreateNestedOneWithoutOrdersInput = {
    create?: XOR<TableSessionCreateWithoutOrdersInput, TableSessionUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: TableSessionCreateOrConnectWithoutOrdersInput
    connect?: TableSessionWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type VenueUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<VenueCreateWithoutOrdersInput, VenueUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: VenueCreateOrConnectWithoutOrdersInput
    upsert?: VenueUpsertWithoutOrdersInput
    connect?: VenueWhereUniqueInput
    update?: XOR<XOR<VenueUpdateToOneWithWhereWithoutOrdersInput, VenueUpdateWithoutOrdersInput>, VenueUncheckedUpdateWithoutOrdersInput>
  }

  export type TableSessionUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<TableSessionCreateWithoutOrdersInput, TableSessionUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: TableSessionCreateOrConnectWithoutOrdersInput
    upsert?: TableSessionUpsertWithoutOrdersInput
    connect?: TableSessionWhereUniqueInput
    update?: XOR<XOR<TableSessionUpdateToOneWithWhereWithoutOrdersInput, TableSessionUpdateWithoutOrdersInput>, TableSessionUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type VenueCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<VenueCreateWithoutOrderItemsInput, VenueUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: VenueCreateOrConnectWithoutOrderItemsInput
    connect?: VenueWhereUniqueInput
  }

  export type OrderCreateNestedOneWithoutItemsInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type MenuItemCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<MenuItemCreateWithoutOrderItemsInput, MenuItemUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: MenuItemCreateOrConnectWithoutOrderItemsInput
    connect?: MenuItemWhereUniqueInput
  }

  export type VenueUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<VenueCreateWithoutOrderItemsInput, VenueUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: VenueCreateOrConnectWithoutOrderItemsInput
    upsert?: VenueUpsertWithoutOrderItemsInput
    connect?: VenueWhereUniqueInput
    update?: XOR<XOR<VenueUpdateToOneWithWhereWithoutOrderItemsInput, VenueUpdateWithoutOrderItemsInput>, VenueUncheckedUpdateWithoutOrderItemsInput>
  }

  export type OrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    upsert?: OrderUpsertWithoutItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutItemsInput, OrderUpdateWithoutItemsInput>, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type MenuItemUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<MenuItemCreateWithoutOrderItemsInput, MenuItemUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: MenuItemCreateOrConnectWithoutOrderItemsInput
    upsert?: MenuItemUpsertWithoutOrderItemsInput
    connect?: MenuItemWhereUniqueInput
    update?: XOR<XOR<MenuItemUpdateToOneWithWhereWithoutOrderItemsInput, MenuItemUpdateWithoutOrderItemsInput>, MenuItemUncheckedUpdateWithoutOrderItemsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StaffAccountCreateWithoutVenueInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    active?: boolean
    createdAt?: Date | string
  }

  export type StaffAccountUncheckedCreateWithoutVenueInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    active?: boolean
    createdAt?: Date | string
  }

  export type StaffAccountCreateOrConnectWithoutVenueInput = {
    where: StaffAccountWhereUniqueInput
    create: XOR<StaffAccountCreateWithoutVenueInput, StaffAccountUncheckedCreateWithoutVenueInput>
  }

  export type StaffAccountCreateManyVenueInputEnvelope = {
    data: StaffAccountCreateManyVenueInput | StaffAccountCreateManyVenueInput[]
    skipDuplicates?: boolean
  }

  export type TableCreateWithoutVenueInput = {
    id?: string
    label: string
    qrToken: string
    activeSessionId?: string | null
    waiterCalled?: boolean
    waiterCalledAt?: Date | string | null
    createdAt?: Date | string
    sessions?: TableSessionCreateNestedManyWithoutTableInput
  }

  export type TableUncheckedCreateWithoutVenueInput = {
    id?: string
    label: string
    qrToken: string
    activeSessionId?: string | null
    waiterCalled?: boolean
    waiterCalledAt?: Date | string | null
    createdAt?: Date | string
    sessions?: TableSessionUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableCreateOrConnectWithoutVenueInput = {
    where: TableWhereUniqueInput
    create: XOR<TableCreateWithoutVenueInput, TableUncheckedCreateWithoutVenueInput>
  }

  export type TableCreateManyVenueInputEnvelope = {
    data: TableCreateManyVenueInput | TableCreateManyVenueInput[]
    skipDuplicates?: boolean
  }

  export type TableSessionCreateWithoutVenueInput = {
    id?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    table: TableCreateNestedOneWithoutSessionsInput
    orders?: OrderCreateNestedManyWithoutTableSessionInput
  }

  export type TableSessionUncheckedCreateWithoutVenueInput = {
    id?: string
    tableId: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    orders?: OrderUncheckedCreateNestedManyWithoutTableSessionInput
  }

  export type TableSessionCreateOrConnectWithoutVenueInput = {
    where: TableSessionWhereUniqueInput
    create: XOR<TableSessionCreateWithoutVenueInput, TableSessionUncheckedCreateWithoutVenueInput>
  }

  export type TableSessionCreateManyVenueInputEnvelope = {
    data: TableSessionCreateManyVenueInput | TableSessionCreateManyVenueInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutVenueInput = {
    id?: string
    name: string
    orderIndex?: number
    items?: MenuItemCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutVenueInput = {
    id?: string
    name: string
    orderIndex?: number
    items?: MenuItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutVenueInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutVenueInput, CategoryUncheckedCreateWithoutVenueInput>
  }

  export type CategoryCreateManyVenueInputEnvelope = {
    data: CategoryCreateManyVenueInput | CategoryCreateManyVenueInput[]
    skipDuplicates?: boolean
  }

  export type MenuItemCreateWithoutVenueInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    outOfStock?: boolean
    quizTags?: NullableJsonNullValueInput | InputJsonValue
    category: CategoryCreateNestedOneWithoutItemsInput
    orderItems?: OrderItemCreateNestedManyWithoutMenuItemInput
    recipeItems?: RecipeItemCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemUncheckedCreateWithoutVenueInput = {
    id?: string
    categoryId: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    outOfStock?: boolean
    quizTags?: NullableJsonNullValueInput | InputJsonValue
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutMenuItemInput
    recipeItems?: RecipeItemUncheckedCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemCreateOrConnectWithoutVenueInput = {
    where: MenuItemWhereUniqueInput
    create: XOR<MenuItemCreateWithoutVenueInput, MenuItemUncheckedCreateWithoutVenueInput>
  }

  export type MenuItemCreateManyVenueInputEnvelope = {
    data: MenuItemCreateManyVenueInput | MenuItemCreateManyVenueInput[]
    skipDuplicates?: boolean
  }

  export type IngredientCreateWithoutVenueInput = {
    id?: string
    name: string
    unit: string
    stock?: Decimal | DecimalJsLike | number | string
    lowThreshold?: Decimal | DecimalJsLike | number | string
    recipeItems?: RecipeItemCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUncheckedCreateWithoutVenueInput = {
    id?: string
    name: string
    unit: string
    stock?: Decimal | DecimalJsLike | number | string
    lowThreshold?: Decimal | DecimalJsLike | number | string
    recipeItems?: RecipeItemUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type IngredientCreateOrConnectWithoutVenueInput = {
    where: IngredientWhereUniqueInput
    create: XOR<IngredientCreateWithoutVenueInput, IngredientUncheckedCreateWithoutVenueInput>
  }

  export type IngredientCreateManyVenueInputEnvelope = {
    data: IngredientCreateManyVenueInput | IngredientCreateManyVenueInput[]
    skipDuplicates?: boolean
  }

  export type RecipeItemCreateWithoutVenueInput = {
    id?: string
    quantityUsed: Decimal | DecimalJsLike | number | string
    menuItem: MenuItemCreateNestedOneWithoutRecipeItemsInput
    ingredient: IngredientCreateNestedOneWithoutRecipeItemsInput
  }

  export type RecipeItemUncheckedCreateWithoutVenueInput = {
    id?: string
    menuItemId: string
    ingredientId: string
    quantityUsed: Decimal | DecimalJsLike | number | string
  }

  export type RecipeItemCreateOrConnectWithoutVenueInput = {
    where: RecipeItemWhereUniqueInput
    create: XOR<RecipeItemCreateWithoutVenueInput, RecipeItemUncheckedCreateWithoutVenueInput>
  }

  export type RecipeItemCreateManyVenueInputEnvelope = {
    data: RecipeItemCreateManyVenueInput | RecipeItemCreateManyVenueInput[]
    skipDuplicates?: boolean
  }

  export type AddOnCreateWithoutVenueInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    applicableItemIds?: AddOnCreateapplicableItemIdsInput | string[]
  }

  export type AddOnUncheckedCreateWithoutVenueInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    applicableItemIds?: AddOnCreateapplicableItemIdsInput | string[]
  }

  export type AddOnCreateOrConnectWithoutVenueInput = {
    where: AddOnWhereUniqueInput
    create: XOR<AddOnCreateWithoutVenueInput, AddOnUncheckedCreateWithoutVenueInput>
  }

  export type AddOnCreateManyVenueInputEnvelope = {
    data: AddOnCreateManyVenueInput | AddOnCreateManyVenueInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutVenueInput = {
    id?: string
    customerName?: string | null
    notes?: string | null
    paymentMethod: string
    tipAmount?: number
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: string
    createdAt?: Date | string
    tableSession: TableSessionCreateNestedOneWithoutOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutVenueInput = {
    id?: string
    tableSessionId: string
    customerName?: string | null
    notes?: string | null
    paymentMethod: string
    tipAmount?: number
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: string
    createdAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutVenueInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutVenueInput, OrderUncheckedCreateWithoutVenueInput>
  }

  export type OrderCreateManyVenueInputEnvelope = {
    data: OrderCreateManyVenueInput | OrderCreateManyVenueInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemCreateWithoutVenueInput = {
    id?: string
    quantity: number
    addOns?: NullableJsonNullValueInput | InputJsonValue
    order: OrderCreateNestedOneWithoutItemsInput
    menuItem: MenuItemCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutVenueInput = {
    id?: string
    orderId: string
    menuItemId: string
    quantity: number
    addOns?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderItemCreateOrConnectWithoutVenueInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutVenueInput, OrderItemUncheckedCreateWithoutVenueInput>
  }

  export type OrderItemCreateManyVenueInputEnvelope = {
    data: OrderItemCreateManyVenueInput | OrderItemCreateManyVenueInput[]
    skipDuplicates?: boolean
  }

  export type StaffAccountUpsertWithWhereUniqueWithoutVenueInput = {
    where: StaffAccountWhereUniqueInput
    update: XOR<StaffAccountUpdateWithoutVenueInput, StaffAccountUncheckedUpdateWithoutVenueInput>
    create: XOR<StaffAccountCreateWithoutVenueInput, StaffAccountUncheckedCreateWithoutVenueInput>
  }

  export type StaffAccountUpdateWithWhereUniqueWithoutVenueInput = {
    where: StaffAccountWhereUniqueInput
    data: XOR<StaffAccountUpdateWithoutVenueInput, StaffAccountUncheckedUpdateWithoutVenueInput>
  }

  export type StaffAccountUpdateManyWithWhereWithoutVenueInput = {
    where: StaffAccountScalarWhereInput
    data: XOR<StaffAccountUpdateManyMutationInput, StaffAccountUncheckedUpdateManyWithoutVenueInput>
  }

  export type StaffAccountScalarWhereInput = {
    AND?: StaffAccountScalarWhereInput | StaffAccountScalarWhereInput[]
    OR?: StaffAccountScalarWhereInput[]
    NOT?: StaffAccountScalarWhereInput | StaffAccountScalarWhereInput[]
    id?: StringFilter<"StaffAccount"> | string
    venueId?: StringFilter<"StaffAccount"> | string
    email?: StringFilter<"StaffAccount"> | string
    passwordHash?: StringFilter<"StaffAccount"> | string
    name?: StringFilter<"StaffAccount"> | string
    role?: EnumRoleFilter<"StaffAccount"> | $Enums.Role
    active?: BoolFilter<"StaffAccount"> | boolean
    createdAt?: DateTimeFilter<"StaffAccount"> | Date | string
  }

  export type TableUpsertWithWhereUniqueWithoutVenueInput = {
    where: TableWhereUniqueInput
    update: XOR<TableUpdateWithoutVenueInput, TableUncheckedUpdateWithoutVenueInput>
    create: XOR<TableCreateWithoutVenueInput, TableUncheckedCreateWithoutVenueInput>
  }

  export type TableUpdateWithWhereUniqueWithoutVenueInput = {
    where: TableWhereUniqueInput
    data: XOR<TableUpdateWithoutVenueInput, TableUncheckedUpdateWithoutVenueInput>
  }

  export type TableUpdateManyWithWhereWithoutVenueInput = {
    where: TableScalarWhereInput
    data: XOR<TableUpdateManyMutationInput, TableUncheckedUpdateManyWithoutVenueInput>
  }

  export type TableScalarWhereInput = {
    AND?: TableScalarWhereInput | TableScalarWhereInput[]
    OR?: TableScalarWhereInput[]
    NOT?: TableScalarWhereInput | TableScalarWhereInput[]
    id?: StringFilter<"Table"> | string
    venueId?: StringFilter<"Table"> | string
    label?: StringFilter<"Table"> | string
    qrToken?: StringFilter<"Table"> | string
    activeSessionId?: StringNullableFilter<"Table"> | string | null
    waiterCalled?: BoolFilter<"Table"> | boolean
    waiterCalledAt?: DateTimeNullableFilter<"Table"> | Date | string | null
    createdAt?: DateTimeFilter<"Table"> | Date | string
  }

  export type TableSessionUpsertWithWhereUniqueWithoutVenueInput = {
    where: TableSessionWhereUniqueInput
    update: XOR<TableSessionUpdateWithoutVenueInput, TableSessionUncheckedUpdateWithoutVenueInput>
    create: XOR<TableSessionCreateWithoutVenueInput, TableSessionUncheckedCreateWithoutVenueInput>
  }

  export type TableSessionUpdateWithWhereUniqueWithoutVenueInput = {
    where: TableSessionWhereUniqueInput
    data: XOR<TableSessionUpdateWithoutVenueInput, TableSessionUncheckedUpdateWithoutVenueInput>
  }

  export type TableSessionUpdateManyWithWhereWithoutVenueInput = {
    where: TableSessionScalarWhereInput
    data: XOR<TableSessionUpdateManyMutationInput, TableSessionUncheckedUpdateManyWithoutVenueInput>
  }

  export type TableSessionScalarWhereInput = {
    AND?: TableSessionScalarWhereInput | TableSessionScalarWhereInput[]
    OR?: TableSessionScalarWhereInput[]
    NOT?: TableSessionScalarWhereInput | TableSessionScalarWhereInput[]
    id?: StringFilter<"TableSession"> | string
    venueId?: StringFilter<"TableSession"> | string
    tableId?: StringFilter<"TableSession"> | string
    startedAt?: DateTimeFilter<"TableSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"TableSession"> | Date | string | null
  }

  export type CategoryUpsertWithWhereUniqueWithoutVenueInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutVenueInput, CategoryUncheckedUpdateWithoutVenueInput>
    create: XOR<CategoryCreateWithoutVenueInput, CategoryUncheckedCreateWithoutVenueInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutVenueInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutVenueInput, CategoryUncheckedUpdateWithoutVenueInput>
  }

  export type CategoryUpdateManyWithWhereWithoutVenueInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutVenueInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: StringFilter<"Category"> | string
    venueId?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    orderIndex?: IntFilter<"Category"> | number
  }

  export type MenuItemUpsertWithWhereUniqueWithoutVenueInput = {
    where: MenuItemWhereUniqueInput
    update: XOR<MenuItemUpdateWithoutVenueInput, MenuItemUncheckedUpdateWithoutVenueInput>
    create: XOR<MenuItemCreateWithoutVenueInput, MenuItemUncheckedCreateWithoutVenueInput>
  }

  export type MenuItemUpdateWithWhereUniqueWithoutVenueInput = {
    where: MenuItemWhereUniqueInput
    data: XOR<MenuItemUpdateWithoutVenueInput, MenuItemUncheckedUpdateWithoutVenueInput>
  }

  export type MenuItemUpdateManyWithWhereWithoutVenueInput = {
    where: MenuItemScalarWhereInput
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyWithoutVenueInput>
  }

  export type MenuItemScalarWhereInput = {
    AND?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
    OR?: MenuItemScalarWhereInput[]
    NOT?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
    id?: StringFilter<"MenuItem"> | string
    venueId?: StringFilter<"MenuItem"> | string
    categoryId?: StringFilter<"MenuItem"> | string
    name?: StringFilter<"MenuItem"> | string
    description?: StringNullableFilter<"MenuItem"> | string | null
    price?: DecimalFilter<"MenuItem"> | Decimal | DecimalJsLike | number | string
    imageUrl?: StringNullableFilter<"MenuItem"> | string | null
    outOfStock?: BoolFilter<"MenuItem"> | boolean
    quizTags?: JsonNullableFilter<"MenuItem">
  }

  export type IngredientUpsertWithWhereUniqueWithoutVenueInput = {
    where: IngredientWhereUniqueInput
    update: XOR<IngredientUpdateWithoutVenueInput, IngredientUncheckedUpdateWithoutVenueInput>
    create: XOR<IngredientCreateWithoutVenueInput, IngredientUncheckedCreateWithoutVenueInput>
  }

  export type IngredientUpdateWithWhereUniqueWithoutVenueInput = {
    where: IngredientWhereUniqueInput
    data: XOR<IngredientUpdateWithoutVenueInput, IngredientUncheckedUpdateWithoutVenueInput>
  }

  export type IngredientUpdateManyWithWhereWithoutVenueInput = {
    where: IngredientScalarWhereInput
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyWithoutVenueInput>
  }

  export type IngredientScalarWhereInput = {
    AND?: IngredientScalarWhereInput | IngredientScalarWhereInput[]
    OR?: IngredientScalarWhereInput[]
    NOT?: IngredientScalarWhereInput | IngredientScalarWhereInput[]
    id?: StringFilter<"Ingredient"> | string
    venueId?: StringFilter<"Ingredient"> | string
    name?: StringFilter<"Ingredient"> | string
    unit?: StringFilter<"Ingredient"> | string
    stock?: DecimalFilter<"Ingredient"> | Decimal | DecimalJsLike | number | string
    lowThreshold?: DecimalFilter<"Ingredient"> | Decimal | DecimalJsLike | number | string
  }

  export type RecipeItemUpsertWithWhereUniqueWithoutVenueInput = {
    where: RecipeItemWhereUniqueInput
    update: XOR<RecipeItemUpdateWithoutVenueInput, RecipeItemUncheckedUpdateWithoutVenueInput>
    create: XOR<RecipeItemCreateWithoutVenueInput, RecipeItemUncheckedCreateWithoutVenueInput>
  }

  export type RecipeItemUpdateWithWhereUniqueWithoutVenueInput = {
    where: RecipeItemWhereUniqueInput
    data: XOR<RecipeItemUpdateWithoutVenueInput, RecipeItemUncheckedUpdateWithoutVenueInput>
  }

  export type RecipeItemUpdateManyWithWhereWithoutVenueInput = {
    where: RecipeItemScalarWhereInput
    data: XOR<RecipeItemUpdateManyMutationInput, RecipeItemUncheckedUpdateManyWithoutVenueInput>
  }

  export type RecipeItemScalarWhereInput = {
    AND?: RecipeItemScalarWhereInput | RecipeItemScalarWhereInput[]
    OR?: RecipeItemScalarWhereInput[]
    NOT?: RecipeItemScalarWhereInput | RecipeItemScalarWhereInput[]
    id?: StringFilter<"RecipeItem"> | string
    venueId?: StringFilter<"RecipeItem"> | string
    menuItemId?: StringFilter<"RecipeItem"> | string
    ingredientId?: StringFilter<"RecipeItem"> | string
    quantityUsed?: DecimalFilter<"RecipeItem"> | Decimal | DecimalJsLike | number | string
  }

  export type AddOnUpsertWithWhereUniqueWithoutVenueInput = {
    where: AddOnWhereUniqueInput
    update: XOR<AddOnUpdateWithoutVenueInput, AddOnUncheckedUpdateWithoutVenueInput>
    create: XOR<AddOnCreateWithoutVenueInput, AddOnUncheckedCreateWithoutVenueInput>
  }

  export type AddOnUpdateWithWhereUniqueWithoutVenueInput = {
    where: AddOnWhereUniqueInput
    data: XOR<AddOnUpdateWithoutVenueInput, AddOnUncheckedUpdateWithoutVenueInput>
  }

  export type AddOnUpdateManyWithWhereWithoutVenueInput = {
    where: AddOnScalarWhereInput
    data: XOR<AddOnUpdateManyMutationInput, AddOnUncheckedUpdateManyWithoutVenueInput>
  }

  export type AddOnScalarWhereInput = {
    AND?: AddOnScalarWhereInput | AddOnScalarWhereInput[]
    OR?: AddOnScalarWhereInput[]
    NOT?: AddOnScalarWhereInput | AddOnScalarWhereInput[]
    id?: StringFilter<"AddOn"> | string
    venueId?: StringFilter<"AddOn"> | string
    name?: StringFilter<"AddOn"> | string
    price?: DecimalFilter<"AddOn"> | Decimal | DecimalJsLike | number | string
    applicableItemIds?: StringNullableListFilter<"AddOn">
  }

  export type OrderUpsertWithWhereUniqueWithoutVenueInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutVenueInput, OrderUncheckedUpdateWithoutVenueInput>
    create: XOR<OrderCreateWithoutVenueInput, OrderUncheckedCreateWithoutVenueInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutVenueInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutVenueInput, OrderUncheckedUpdateWithoutVenueInput>
  }

  export type OrderUpdateManyWithWhereWithoutVenueInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutVenueInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    venueId?: StringFilter<"Order"> | string
    tableSessionId?: StringFilter<"Order"> | string
    customerName?: StringNullableFilter<"Order"> | string | null
    notes?: StringNullableFilter<"Order"> | string | null
    paymentMethod?: StringFilter<"Order"> | string
    tipAmount?: IntFilter<"Order"> | number
    totalAmount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type OrderItemUpsertWithWhereUniqueWithoutVenueInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutVenueInput, OrderItemUncheckedUpdateWithoutVenueInput>
    create: XOR<OrderItemCreateWithoutVenueInput, OrderItemUncheckedCreateWithoutVenueInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutVenueInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutVenueInput, OrderItemUncheckedUpdateWithoutVenueInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutVenueInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutVenueInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    venueId?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    menuItemId?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    addOns?: JsonNullableFilter<"OrderItem">
  }

  export type VenueCreateWithoutStaffAccountsInput = {
    id?: string
    slug: string
    name: string
    theme: JsonNullValueInput | InputJsonValue
    defaultLanguage?: string
    planTier?: string
    active?: boolean
    createdAt?: Date | string
    tables?: TableCreateNestedManyWithoutVenueInput
    tableSessions?: TableSessionCreateNestedManyWithoutVenueInput
    categories?: CategoryCreateNestedManyWithoutVenueInput
    menuItems?: MenuItemCreateNestedManyWithoutVenueInput
    ingredients?: IngredientCreateNestedManyWithoutVenueInput
    recipeItems?: RecipeItemCreateNestedManyWithoutVenueInput
    addOns?: AddOnCreateNestedManyWithoutVenueInput
    orders?: OrderCreateNestedManyWithoutVenueInput
    orderItems?: OrderItemCreateNestedManyWithoutVenueInput
  }

  export type VenueUncheckedCreateWithoutStaffAccountsInput = {
    id?: string
    slug: string
    name: string
    theme: JsonNullValueInput | InputJsonValue
    defaultLanguage?: string
    planTier?: string
    active?: boolean
    createdAt?: Date | string
    tables?: TableUncheckedCreateNestedManyWithoutVenueInput
    tableSessions?: TableSessionUncheckedCreateNestedManyWithoutVenueInput
    categories?: CategoryUncheckedCreateNestedManyWithoutVenueInput
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutVenueInput
    ingredients?: IngredientUncheckedCreateNestedManyWithoutVenueInput
    recipeItems?: RecipeItemUncheckedCreateNestedManyWithoutVenueInput
    addOns?: AddOnUncheckedCreateNestedManyWithoutVenueInput
    orders?: OrderUncheckedCreateNestedManyWithoutVenueInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueCreateOrConnectWithoutStaffAccountsInput = {
    where: VenueWhereUniqueInput
    create: XOR<VenueCreateWithoutStaffAccountsInput, VenueUncheckedCreateWithoutStaffAccountsInput>
  }

  export type VenueUpsertWithoutStaffAccountsInput = {
    update: XOR<VenueUpdateWithoutStaffAccountsInput, VenueUncheckedUpdateWithoutStaffAccountsInput>
    create: XOR<VenueCreateWithoutStaffAccountsInput, VenueUncheckedCreateWithoutStaffAccountsInput>
    where?: VenueWhereInput
  }

  export type VenueUpdateToOneWithWhereWithoutStaffAccountsInput = {
    where?: VenueWhereInput
    data: XOR<VenueUpdateWithoutStaffAccountsInput, VenueUncheckedUpdateWithoutStaffAccountsInput>
  }

  export type VenueUpdateWithoutStaffAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    theme?: JsonNullValueInput | InputJsonValue
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tables?: TableUpdateManyWithoutVenueNestedInput
    tableSessions?: TableSessionUpdateManyWithoutVenueNestedInput
    categories?: CategoryUpdateManyWithoutVenueNestedInput
    menuItems?: MenuItemUpdateManyWithoutVenueNestedInput
    ingredients?: IngredientUpdateManyWithoutVenueNestedInput
    recipeItems?: RecipeItemUpdateManyWithoutVenueNestedInput
    addOns?: AddOnUpdateManyWithoutVenueNestedInput
    orders?: OrderUpdateManyWithoutVenueNestedInput
    orderItems?: OrderItemUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateWithoutStaffAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    theme?: JsonNullValueInput | InputJsonValue
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tables?: TableUncheckedUpdateManyWithoutVenueNestedInput
    tableSessions?: TableSessionUncheckedUpdateManyWithoutVenueNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutVenueNestedInput
    menuItems?: MenuItemUncheckedUpdateManyWithoutVenueNestedInput
    ingredients?: IngredientUncheckedUpdateManyWithoutVenueNestedInput
    recipeItems?: RecipeItemUncheckedUpdateManyWithoutVenueNestedInput
    addOns?: AddOnUncheckedUpdateManyWithoutVenueNestedInput
    orders?: OrderUncheckedUpdateManyWithoutVenueNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type VenueCreateWithoutTablesInput = {
    id?: string
    slug: string
    name: string
    theme: JsonNullValueInput | InputJsonValue
    defaultLanguage?: string
    planTier?: string
    active?: boolean
    createdAt?: Date | string
    staffAccounts?: StaffAccountCreateNestedManyWithoutVenueInput
    tableSessions?: TableSessionCreateNestedManyWithoutVenueInput
    categories?: CategoryCreateNestedManyWithoutVenueInput
    menuItems?: MenuItemCreateNestedManyWithoutVenueInput
    ingredients?: IngredientCreateNestedManyWithoutVenueInput
    recipeItems?: RecipeItemCreateNestedManyWithoutVenueInput
    addOns?: AddOnCreateNestedManyWithoutVenueInput
    orders?: OrderCreateNestedManyWithoutVenueInput
    orderItems?: OrderItemCreateNestedManyWithoutVenueInput
  }

  export type VenueUncheckedCreateWithoutTablesInput = {
    id?: string
    slug: string
    name: string
    theme: JsonNullValueInput | InputJsonValue
    defaultLanguage?: string
    planTier?: string
    active?: boolean
    createdAt?: Date | string
    staffAccounts?: StaffAccountUncheckedCreateNestedManyWithoutVenueInput
    tableSessions?: TableSessionUncheckedCreateNestedManyWithoutVenueInput
    categories?: CategoryUncheckedCreateNestedManyWithoutVenueInput
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutVenueInput
    ingredients?: IngredientUncheckedCreateNestedManyWithoutVenueInput
    recipeItems?: RecipeItemUncheckedCreateNestedManyWithoutVenueInput
    addOns?: AddOnUncheckedCreateNestedManyWithoutVenueInput
    orders?: OrderUncheckedCreateNestedManyWithoutVenueInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueCreateOrConnectWithoutTablesInput = {
    where: VenueWhereUniqueInput
    create: XOR<VenueCreateWithoutTablesInput, VenueUncheckedCreateWithoutTablesInput>
  }

  export type TableSessionCreateWithoutTableInput = {
    id?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    venue: VenueCreateNestedOneWithoutTableSessionsInput
    orders?: OrderCreateNestedManyWithoutTableSessionInput
  }

  export type TableSessionUncheckedCreateWithoutTableInput = {
    id?: string
    venueId: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    orders?: OrderUncheckedCreateNestedManyWithoutTableSessionInput
  }

  export type TableSessionCreateOrConnectWithoutTableInput = {
    where: TableSessionWhereUniqueInput
    create: XOR<TableSessionCreateWithoutTableInput, TableSessionUncheckedCreateWithoutTableInput>
  }

  export type TableSessionCreateManyTableInputEnvelope = {
    data: TableSessionCreateManyTableInput | TableSessionCreateManyTableInput[]
    skipDuplicates?: boolean
  }

  export type VenueUpsertWithoutTablesInput = {
    update: XOR<VenueUpdateWithoutTablesInput, VenueUncheckedUpdateWithoutTablesInput>
    create: XOR<VenueCreateWithoutTablesInput, VenueUncheckedCreateWithoutTablesInput>
    where?: VenueWhereInput
  }

  export type VenueUpdateToOneWithWhereWithoutTablesInput = {
    where?: VenueWhereInput
    data: XOR<VenueUpdateWithoutTablesInput, VenueUncheckedUpdateWithoutTablesInput>
  }

  export type VenueUpdateWithoutTablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    theme?: JsonNullValueInput | InputJsonValue
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffAccounts?: StaffAccountUpdateManyWithoutVenueNestedInput
    tableSessions?: TableSessionUpdateManyWithoutVenueNestedInput
    categories?: CategoryUpdateManyWithoutVenueNestedInput
    menuItems?: MenuItemUpdateManyWithoutVenueNestedInput
    ingredients?: IngredientUpdateManyWithoutVenueNestedInput
    recipeItems?: RecipeItemUpdateManyWithoutVenueNestedInput
    addOns?: AddOnUpdateManyWithoutVenueNestedInput
    orders?: OrderUpdateManyWithoutVenueNestedInput
    orderItems?: OrderItemUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateWithoutTablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    theme?: JsonNullValueInput | InputJsonValue
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffAccounts?: StaffAccountUncheckedUpdateManyWithoutVenueNestedInput
    tableSessions?: TableSessionUncheckedUpdateManyWithoutVenueNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutVenueNestedInput
    menuItems?: MenuItemUncheckedUpdateManyWithoutVenueNestedInput
    ingredients?: IngredientUncheckedUpdateManyWithoutVenueNestedInput
    recipeItems?: RecipeItemUncheckedUpdateManyWithoutVenueNestedInput
    addOns?: AddOnUncheckedUpdateManyWithoutVenueNestedInput
    orders?: OrderUncheckedUpdateManyWithoutVenueNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type TableSessionUpsertWithWhereUniqueWithoutTableInput = {
    where: TableSessionWhereUniqueInput
    update: XOR<TableSessionUpdateWithoutTableInput, TableSessionUncheckedUpdateWithoutTableInput>
    create: XOR<TableSessionCreateWithoutTableInput, TableSessionUncheckedCreateWithoutTableInput>
  }

  export type TableSessionUpdateWithWhereUniqueWithoutTableInput = {
    where: TableSessionWhereUniqueInput
    data: XOR<TableSessionUpdateWithoutTableInput, TableSessionUncheckedUpdateWithoutTableInput>
  }

  export type TableSessionUpdateManyWithWhereWithoutTableInput = {
    where: TableSessionScalarWhereInput
    data: XOR<TableSessionUpdateManyMutationInput, TableSessionUncheckedUpdateManyWithoutTableInput>
  }

  export type VenueCreateWithoutTableSessionsInput = {
    id?: string
    slug: string
    name: string
    theme: JsonNullValueInput | InputJsonValue
    defaultLanguage?: string
    planTier?: string
    active?: boolean
    createdAt?: Date | string
    staffAccounts?: StaffAccountCreateNestedManyWithoutVenueInput
    tables?: TableCreateNestedManyWithoutVenueInput
    categories?: CategoryCreateNestedManyWithoutVenueInput
    menuItems?: MenuItemCreateNestedManyWithoutVenueInput
    ingredients?: IngredientCreateNestedManyWithoutVenueInput
    recipeItems?: RecipeItemCreateNestedManyWithoutVenueInput
    addOns?: AddOnCreateNestedManyWithoutVenueInput
    orders?: OrderCreateNestedManyWithoutVenueInput
    orderItems?: OrderItemCreateNestedManyWithoutVenueInput
  }

  export type VenueUncheckedCreateWithoutTableSessionsInput = {
    id?: string
    slug: string
    name: string
    theme: JsonNullValueInput | InputJsonValue
    defaultLanguage?: string
    planTier?: string
    active?: boolean
    createdAt?: Date | string
    staffAccounts?: StaffAccountUncheckedCreateNestedManyWithoutVenueInput
    tables?: TableUncheckedCreateNestedManyWithoutVenueInput
    categories?: CategoryUncheckedCreateNestedManyWithoutVenueInput
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutVenueInput
    ingredients?: IngredientUncheckedCreateNestedManyWithoutVenueInput
    recipeItems?: RecipeItemUncheckedCreateNestedManyWithoutVenueInput
    addOns?: AddOnUncheckedCreateNestedManyWithoutVenueInput
    orders?: OrderUncheckedCreateNestedManyWithoutVenueInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueCreateOrConnectWithoutTableSessionsInput = {
    where: VenueWhereUniqueInput
    create: XOR<VenueCreateWithoutTableSessionsInput, VenueUncheckedCreateWithoutTableSessionsInput>
  }

  export type TableCreateWithoutSessionsInput = {
    id?: string
    label: string
    qrToken: string
    activeSessionId?: string | null
    waiterCalled?: boolean
    waiterCalledAt?: Date | string | null
    createdAt?: Date | string
    venue: VenueCreateNestedOneWithoutTablesInput
  }

  export type TableUncheckedCreateWithoutSessionsInput = {
    id?: string
    venueId: string
    label: string
    qrToken: string
    activeSessionId?: string | null
    waiterCalled?: boolean
    waiterCalledAt?: Date | string | null
    createdAt?: Date | string
  }

  export type TableCreateOrConnectWithoutSessionsInput = {
    where: TableWhereUniqueInput
    create: XOR<TableCreateWithoutSessionsInput, TableUncheckedCreateWithoutSessionsInput>
  }

  export type OrderCreateWithoutTableSessionInput = {
    id?: string
    customerName?: string | null
    notes?: string | null
    paymentMethod: string
    tipAmount?: number
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: string
    createdAt?: Date | string
    venue: VenueCreateNestedOneWithoutOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutTableSessionInput = {
    id?: string
    venueId: string
    customerName?: string | null
    notes?: string | null
    paymentMethod: string
    tipAmount?: number
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: string
    createdAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutTableSessionInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutTableSessionInput, OrderUncheckedCreateWithoutTableSessionInput>
  }

  export type OrderCreateManyTableSessionInputEnvelope = {
    data: OrderCreateManyTableSessionInput | OrderCreateManyTableSessionInput[]
    skipDuplicates?: boolean
  }

  export type VenueUpsertWithoutTableSessionsInput = {
    update: XOR<VenueUpdateWithoutTableSessionsInput, VenueUncheckedUpdateWithoutTableSessionsInput>
    create: XOR<VenueCreateWithoutTableSessionsInput, VenueUncheckedCreateWithoutTableSessionsInput>
    where?: VenueWhereInput
  }

  export type VenueUpdateToOneWithWhereWithoutTableSessionsInput = {
    where?: VenueWhereInput
    data: XOR<VenueUpdateWithoutTableSessionsInput, VenueUncheckedUpdateWithoutTableSessionsInput>
  }

  export type VenueUpdateWithoutTableSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    theme?: JsonNullValueInput | InputJsonValue
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffAccounts?: StaffAccountUpdateManyWithoutVenueNestedInput
    tables?: TableUpdateManyWithoutVenueNestedInput
    categories?: CategoryUpdateManyWithoutVenueNestedInput
    menuItems?: MenuItemUpdateManyWithoutVenueNestedInput
    ingredients?: IngredientUpdateManyWithoutVenueNestedInput
    recipeItems?: RecipeItemUpdateManyWithoutVenueNestedInput
    addOns?: AddOnUpdateManyWithoutVenueNestedInput
    orders?: OrderUpdateManyWithoutVenueNestedInput
    orderItems?: OrderItemUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateWithoutTableSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    theme?: JsonNullValueInput | InputJsonValue
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffAccounts?: StaffAccountUncheckedUpdateManyWithoutVenueNestedInput
    tables?: TableUncheckedUpdateManyWithoutVenueNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutVenueNestedInput
    menuItems?: MenuItemUncheckedUpdateManyWithoutVenueNestedInput
    ingredients?: IngredientUncheckedUpdateManyWithoutVenueNestedInput
    recipeItems?: RecipeItemUncheckedUpdateManyWithoutVenueNestedInput
    addOns?: AddOnUncheckedUpdateManyWithoutVenueNestedInput
    orders?: OrderUncheckedUpdateManyWithoutVenueNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type TableUpsertWithoutSessionsInput = {
    update: XOR<TableUpdateWithoutSessionsInput, TableUncheckedUpdateWithoutSessionsInput>
    create: XOR<TableCreateWithoutSessionsInput, TableUncheckedCreateWithoutSessionsInput>
    where?: TableWhereInput
  }

  export type TableUpdateToOneWithWhereWithoutSessionsInput = {
    where?: TableWhereInput
    data: XOR<TableUpdateWithoutSessionsInput, TableUncheckedUpdateWithoutSessionsInput>
  }

  export type TableUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    qrToken?: StringFieldUpdateOperationsInput | string
    activeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    waiterCalled?: BoolFieldUpdateOperationsInput | boolean
    waiterCalledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: VenueUpdateOneRequiredWithoutTablesNestedInput
  }

  export type TableUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    qrToken?: StringFieldUpdateOperationsInput | string
    activeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    waiterCalled?: BoolFieldUpdateOperationsInput | boolean
    waiterCalledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutTableSessionInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutTableSessionInput, OrderUncheckedUpdateWithoutTableSessionInput>
    create: XOR<OrderCreateWithoutTableSessionInput, OrderUncheckedCreateWithoutTableSessionInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutTableSessionInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutTableSessionInput, OrderUncheckedUpdateWithoutTableSessionInput>
  }

  export type OrderUpdateManyWithWhereWithoutTableSessionInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutTableSessionInput>
  }

  export type VenueCreateWithoutCategoriesInput = {
    id?: string
    slug: string
    name: string
    theme: JsonNullValueInput | InputJsonValue
    defaultLanguage?: string
    planTier?: string
    active?: boolean
    createdAt?: Date | string
    staffAccounts?: StaffAccountCreateNestedManyWithoutVenueInput
    tables?: TableCreateNestedManyWithoutVenueInput
    tableSessions?: TableSessionCreateNestedManyWithoutVenueInput
    menuItems?: MenuItemCreateNestedManyWithoutVenueInput
    ingredients?: IngredientCreateNestedManyWithoutVenueInput
    recipeItems?: RecipeItemCreateNestedManyWithoutVenueInput
    addOns?: AddOnCreateNestedManyWithoutVenueInput
    orders?: OrderCreateNestedManyWithoutVenueInput
    orderItems?: OrderItemCreateNestedManyWithoutVenueInput
  }

  export type VenueUncheckedCreateWithoutCategoriesInput = {
    id?: string
    slug: string
    name: string
    theme: JsonNullValueInput | InputJsonValue
    defaultLanguage?: string
    planTier?: string
    active?: boolean
    createdAt?: Date | string
    staffAccounts?: StaffAccountUncheckedCreateNestedManyWithoutVenueInput
    tables?: TableUncheckedCreateNestedManyWithoutVenueInput
    tableSessions?: TableSessionUncheckedCreateNestedManyWithoutVenueInput
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutVenueInput
    ingredients?: IngredientUncheckedCreateNestedManyWithoutVenueInput
    recipeItems?: RecipeItemUncheckedCreateNestedManyWithoutVenueInput
    addOns?: AddOnUncheckedCreateNestedManyWithoutVenueInput
    orders?: OrderUncheckedCreateNestedManyWithoutVenueInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueCreateOrConnectWithoutCategoriesInput = {
    where: VenueWhereUniqueInput
    create: XOR<VenueCreateWithoutCategoriesInput, VenueUncheckedCreateWithoutCategoriesInput>
  }

  export type MenuItemCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    outOfStock?: boolean
    quizTags?: NullableJsonNullValueInput | InputJsonValue
    venue: VenueCreateNestedOneWithoutMenuItemsInput
    orderItems?: OrderItemCreateNestedManyWithoutMenuItemInput
    recipeItems?: RecipeItemCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemUncheckedCreateWithoutCategoryInput = {
    id?: string
    venueId: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    outOfStock?: boolean
    quizTags?: NullableJsonNullValueInput | InputJsonValue
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutMenuItemInput
    recipeItems?: RecipeItemUncheckedCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemCreateOrConnectWithoutCategoryInput = {
    where: MenuItemWhereUniqueInput
    create: XOR<MenuItemCreateWithoutCategoryInput, MenuItemUncheckedCreateWithoutCategoryInput>
  }

  export type MenuItemCreateManyCategoryInputEnvelope = {
    data: MenuItemCreateManyCategoryInput | MenuItemCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type VenueUpsertWithoutCategoriesInput = {
    update: XOR<VenueUpdateWithoutCategoriesInput, VenueUncheckedUpdateWithoutCategoriesInput>
    create: XOR<VenueCreateWithoutCategoriesInput, VenueUncheckedCreateWithoutCategoriesInput>
    where?: VenueWhereInput
  }

  export type VenueUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: VenueWhereInput
    data: XOR<VenueUpdateWithoutCategoriesInput, VenueUncheckedUpdateWithoutCategoriesInput>
  }

  export type VenueUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    theme?: JsonNullValueInput | InputJsonValue
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffAccounts?: StaffAccountUpdateManyWithoutVenueNestedInput
    tables?: TableUpdateManyWithoutVenueNestedInput
    tableSessions?: TableSessionUpdateManyWithoutVenueNestedInput
    menuItems?: MenuItemUpdateManyWithoutVenueNestedInput
    ingredients?: IngredientUpdateManyWithoutVenueNestedInput
    recipeItems?: RecipeItemUpdateManyWithoutVenueNestedInput
    addOns?: AddOnUpdateManyWithoutVenueNestedInput
    orders?: OrderUpdateManyWithoutVenueNestedInput
    orderItems?: OrderItemUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    theme?: JsonNullValueInput | InputJsonValue
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffAccounts?: StaffAccountUncheckedUpdateManyWithoutVenueNestedInput
    tables?: TableUncheckedUpdateManyWithoutVenueNestedInput
    tableSessions?: TableSessionUncheckedUpdateManyWithoutVenueNestedInput
    menuItems?: MenuItemUncheckedUpdateManyWithoutVenueNestedInput
    ingredients?: IngredientUncheckedUpdateManyWithoutVenueNestedInput
    recipeItems?: RecipeItemUncheckedUpdateManyWithoutVenueNestedInput
    addOns?: AddOnUncheckedUpdateManyWithoutVenueNestedInput
    orders?: OrderUncheckedUpdateManyWithoutVenueNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type MenuItemUpsertWithWhereUniqueWithoutCategoryInput = {
    where: MenuItemWhereUniqueInput
    update: XOR<MenuItemUpdateWithoutCategoryInput, MenuItemUncheckedUpdateWithoutCategoryInput>
    create: XOR<MenuItemCreateWithoutCategoryInput, MenuItemUncheckedCreateWithoutCategoryInput>
  }

  export type MenuItemUpdateWithWhereUniqueWithoutCategoryInput = {
    where: MenuItemWhereUniqueInput
    data: XOR<MenuItemUpdateWithoutCategoryInput, MenuItemUncheckedUpdateWithoutCategoryInput>
  }

  export type MenuItemUpdateManyWithWhereWithoutCategoryInput = {
    where: MenuItemScalarWhereInput
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyWithoutCategoryInput>
  }

  export type VenueCreateWithoutMenuItemsInput = {
    id?: string
    slug: string
    name: string
    theme: JsonNullValueInput | InputJsonValue
    defaultLanguage?: string
    planTier?: string
    active?: boolean
    createdAt?: Date | string
    staffAccounts?: StaffAccountCreateNestedManyWithoutVenueInput
    tables?: TableCreateNestedManyWithoutVenueInput
    tableSessions?: TableSessionCreateNestedManyWithoutVenueInput
    categories?: CategoryCreateNestedManyWithoutVenueInput
    ingredients?: IngredientCreateNestedManyWithoutVenueInput
    recipeItems?: RecipeItemCreateNestedManyWithoutVenueInput
    addOns?: AddOnCreateNestedManyWithoutVenueInput
    orders?: OrderCreateNestedManyWithoutVenueInput
    orderItems?: OrderItemCreateNestedManyWithoutVenueInput
  }

  export type VenueUncheckedCreateWithoutMenuItemsInput = {
    id?: string
    slug: string
    name: string
    theme: JsonNullValueInput | InputJsonValue
    defaultLanguage?: string
    planTier?: string
    active?: boolean
    createdAt?: Date | string
    staffAccounts?: StaffAccountUncheckedCreateNestedManyWithoutVenueInput
    tables?: TableUncheckedCreateNestedManyWithoutVenueInput
    tableSessions?: TableSessionUncheckedCreateNestedManyWithoutVenueInput
    categories?: CategoryUncheckedCreateNestedManyWithoutVenueInput
    ingredients?: IngredientUncheckedCreateNestedManyWithoutVenueInput
    recipeItems?: RecipeItemUncheckedCreateNestedManyWithoutVenueInput
    addOns?: AddOnUncheckedCreateNestedManyWithoutVenueInput
    orders?: OrderUncheckedCreateNestedManyWithoutVenueInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueCreateOrConnectWithoutMenuItemsInput = {
    where: VenueWhereUniqueInput
    create: XOR<VenueCreateWithoutMenuItemsInput, VenueUncheckedCreateWithoutMenuItemsInput>
  }

  export type CategoryCreateWithoutItemsInput = {
    id?: string
    name: string
    orderIndex?: number
    venue: VenueCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutItemsInput = {
    id?: string
    venueId: string
    name: string
    orderIndex?: number
  }

  export type CategoryCreateOrConnectWithoutItemsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutItemsInput, CategoryUncheckedCreateWithoutItemsInput>
  }

  export type OrderItemCreateWithoutMenuItemInput = {
    id?: string
    quantity: number
    addOns?: NullableJsonNullValueInput | InputJsonValue
    venue: VenueCreateNestedOneWithoutOrderItemsInput
    order: OrderCreateNestedOneWithoutItemsInput
  }

  export type OrderItemUncheckedCreateWithoutMenuItemInput = {
    id?: string
    venueId: string
    orderId: string
    quantity: number
    addOns?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderItemCreateOrConnectWithoutMenuItemInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutMenuItemInput, OrderItemUncheckedCreateWithoutMenuItemInput>
  }

  export type OrderItemCreateManyMenuItemInputEnvelope = {
    data: OrderItemCreateManyMenuItemInput | OrderItemCreateManyMenuItemInput[]
    skipDuplicates?: boolean
  }

  export type RecipeItemCreateWithoutMenuItemInput = {
    id?: string
    quantityUsed: Decimal | DecimalJsLike | number | string
    venue: VenueCreateNestedOneWithoutRecipeItemsInput
    ingredient: IngredientCreateNestedOneWithoutRecipeItemsInput
  }

  export type RecipeItemUncheckedCreateWithoutMenuItemInput = {
    id?: string
    venueId: string
    ingredientId: string
    quantityUsed: Decimal | DecimalJsLike | number | string
  }

  export type RecipeItemCreateOrConnectWithoutMenuItemInput = {
    where: RecipeItemWhereUniqueInput
    create: XOR<RecipeItemCreateWithoutMenuItemInput, RecipeItemUncheckedCreateWithoutMenuItemInput>
  }

  export type RecipeItemCreateManyMenuItemInputEnvelope = {
    data: RecipeItemCreateManyMenuItemInput | RecipeItemCreateManyMenuItemInput[]
    skipDuplicates?: boolean
  }

  export type VenueUpsertWithoutMenuItemsInput = {
    update: XOR<VenueUpdateWithoutMenuItemsInput, VenueUncheckedUpdateWithoutMenuItemsInput>
    create: XOR<VenueCreateWithoutMenuItemsInput, VenueUncheckedCreateWithoutMenuItemsInput>
    where?: VenueWhereInput
  }

  export type VenueUpdateToOneWithWhereWithoutMenuItemsInput = {
    where?: VenueWhereInput
    data: XOR<VenueUpdateWithoutMenuItemsInput, VenueUncheckedUpdateWithoutMenuItemsInput>
  }

  export type VenueUpdateWithoutMenuItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    theme?: JsonNullValueInput | InputJsonValue
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffAccounts?: StaffAccountUpdateManyWithoutVenueNestedInput
    tables?: TableUpdateManyWithoutVenueNestedInput
    tableSessions?: TableSessionUpdateManyWithoutVenueNestedInput
    categories?: CategoryUpdateManyWithoutVenueNestedInput
    ingredients?: IngredientUpdateManyWithoutVenueNestedInput
    recipeItems?: RecipeItemUpdateManyWithoutVenueNestedInput
    addOns?: AddOnUpdateManyWithoutVenueNestedInput
    orders?: OrderUpdateManyWithoutVenueNestedInput
    orderItems?: OrderItemUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateWithoutMenuItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    theme?: JsonNullValueInput | InputJsonValue
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffAccounts?: StaffAccountUncheckedUpdateManyWithoutVenueNestedInput
    tables?: TableUncheckedUpdateManyWithoutVenueNestedInput
    tableSessions?: TableSessionUncheckedUpdateManyWithoutVenueNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutVenueNestedInput
    ingredients?: IngredientUncheckedUpdateManyWithoutVenueNestedInput
    recipeItems?: RecipeItemUncheckedUpdateManyWithoutVenueNestedInput
    addOns?: AddOnUncheckedUpdateManyWithoutVenueNestedInput
    orders?: OrderUncheckedUpdateManyWithoutVenueNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type CategoryUpsertWithoutItemsInput = {
    update: XOR<CategoryUpdateWithoutItemsInput, CategoryUncheckedUpdateWithoutItemsInput>
    create: XOR<CategoryCreateWithoutItemsInput, CategoryUncheckedCreateWithoutItemsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutItemsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutItemsInput, CategoryUncheckedUpdateWithoutItemsInput>
  }

  export type CategoryUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    venue?: VenueUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemUpsertWithWhereUniqueWithoutMenuItemInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutMenuItemInput, OrderItemUncheckedUpdateWithoutMenuItemInput>
    create: XOR<OrderItemCreateWithoutMenuItemInput, OrderItemUncheckedCreateWithoutMenuItemInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutMenuItemInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutMenuItemInput, OrderItemUncheckedUpdateWithoutMenuItemInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutMenuItemInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutMenuItemInput>
  }

  export type RecipeItemUpsertWithWhereUniqueWithoutMenuItemInput = {
    where: RecipeItemWhereUniqueInput
    update: XOR<RecipeItemUpdateWithoutMenuItemInput, RecipeItemUncheckedUpdateWithoutMenuItemInput>
    create: XOR<RecipeItemCreateWithoutMenuItemInput, RecipeItemUncheckedCreateWithoutMenuItemInput>
  }

  export type RecipeItemUpdateWithWhereUniqueWithoutMenuItemInput = {
    where: RecipeItemWhereUniqueInput
    data: XOR<RecipeItemUpdateWithoutMenuItemInput, RecipeItemUncheckedUpdateWithoutMenuItemInput>
  }

  export type RecipeItemUpdateManyWithWhereWithoutMenuItemInput = {
    where: RecipeItemScalarWhereInput
    data: XOR<RecipeItemUpdateManyMutationInput, RecipeItemUncheckedUpdateManyWithoutMenuItemInput>
  }

  export type VenueCreateWithoutIngredientsInput = {
    id?: string
    slug: string
    name: string
    theme: JsonNullValueInput | InputJsonValue
    defaultLanguage?: string
    planTier?: string
    active?: boolean
    createdAt?: Date | string
    staffAccounts?: StaffAccountCreateNestedManyWithoutVenueInput
    tables?: TableCreateNestedManyWithoutVenueInput
    tableSessions?: TableSessionCreateNestedManyWithoutVenueInput
    categories?: CategoryCreateNestedManyWithoutVenueInput
    menuItems?: MenuItemCreateNestedManyWithoutVenueInput
    recipeItems?: RecipeItemCreateNestedManyWithoutVenueInput
    addOns?: AddOnCreateNestedManyWithoutVenueInput
    orders?: OrderCreateNestedManyWithoutVenueInput
    orderItems?: OrderItemCreateNestedManyWithoutVenueInput
  }

  export type VenueUncheckedCreateWithoutIngredientsInput = {
    id?: string
    slug: string
    name: string
    theme: JsonNullValueInput | InputJsonValue
    defaultLanguage?: string
    planTier?: string
    active?: boolean
    createdAt?: Date | string
    staffAccounts?: StaffAccountUncheckedCreateNestedManyWithoutVenueInput
    tables?: TableUncheckedCreateNestedManyWithoutVenueInput
    tableSessions?: TableSessionUncheckedCreateNestedManyWithoutVenueInput
    categories?: CategoryUncheckedCreateNestedManyWithoutVenueInput
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutVenueInput
    recipeItems?: RecipeItemUncheckedCreateNestedManyWithoutVenueInput
    addOns?: AddOnUncheckedCreateNestedManyWithoutVenueInput
    orders?: OrderUncheckedCreateNestedManyWithoutVenueInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueCreateOrConnectWithoutIngredientsInput = {
    where: VenueWhereUniqueInput
    create: XOR<VenueCreateWithoutIngredientsInput, VenueUncheckedCreateWithoutIngredientsInput>
  }

  export type RecipeItemCreateWithoutIngredientInput = {
    id?: string
    quantityUsed: Decimal | DecimalJsLike | number | string
    venue: VenueCreateNestedOneWithoutRecipeItemsInput
    menuItem: MenuItemCreateNestedOneWithoutRecipeItemsInput
  }

  export type RecipeItemUncheckedCreateWithoutIngredientInput = {
    id?: string
    venueId: string
    menuItemId: string
    quantityUsed: Decimal | DecimalJsLike | number | string
  }

  export type RecipeItemCreateOrConnectWithoutIngredientInput = {
    where: RecipeItemWhereUniqueInput
    create: XOR<RecipeItemCreateWithoutIngredientInput, RecipeItemUncheckedCreateWithoutIngredientInput>
  }

  export type RecipeItemCreateManyIngredientInputEnvelope = {
    data: RecipeItemCreateManyIngredientInput | RecipeItemCreateManyIngredientInput[]
    skipDuplicates?: boolean
  }

  export type VenueUpsertWithoutIngredientsInput = {
    update: XOR<VenueUpdateWithoutIngredientsInput, VenueUncheckedUpdateWithoutIngredientsInput>
    create: XOR<VenueCreateWithoutIngredientsInput, VenueUncheckedCreateWithoutIngredientsInput>
    where?: VenueWhereInput
  }

  export type VenueUpdateToOneWithWhereWithoutIngredientsInput = {
    where?: VenueWhereInput
    data: XOR<VenueUpdateWithoutIngredientsInput, VenueUncheckedUpdateWithoutIngredientsInput>
  }

  export type VenueUpdateWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    theme?: JsonNullValueInput | InputJsonValue
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffAccounts?: StaffAccountUpdateManyWithoutVenueNestedInput
    tables?: TableUpdateManyWithoutVenueNestedInput
    tableSessions?: TableSessionUpdateManyWithoutVenueNestedInput
    categories?: CategoryUpdateManyWithoutVenueNestedInput
    menuItems?: MenuItemUpdateManyWithoutVenueNestedInput
    recipeItems?: RecipeItemUpdateManyWithoutVenueNestedInput
    addOns?: AddOnUpdateManyWithoutVenueNestedInput
    orders?: OrderUpdateManyWithoutVenueNestedInput
    orderItems?: OrderItemUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    theme?: JsonNullValueInput | InputJsonValue
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffAccounts?: StaffAccountUncheckedUpdateManyWithoutVenueNestedInput
    tables?: TableUncheckedUpdateManyWithoutVenueNestedInput
    tableSessions?: TableSessionUncheckedUpdateManyWithoutVenueNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutVenueNestedInput
    menuItems?: MenuItemUncheckedUpdateManyWithoutVenueNestedInput
    recipeItems?: RecipeItemUncheckedUpdateManyWithoutVenueNestedInput
    addOns?: AddOnUncheckedUpdateManyWithoutVenueNestedInput
    orders?: OrderUncheckedUpdateManyWithoutVenueNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type RecipeItemUpsertWithWhereUniqueWithoutIngredientInput = {
    where: RecipeItemWhereUniqueInput
    update: XOR<RecipeItemUpdateWithoutIngredientInput, RecipeItemUncheckedUpdateWithoutIngredientInput>
    create: XOR<RecipeItemCreateWithoutIngredientInput, RecipeItemUncheckedCreateWithoutIngredientInput>
  }

  export type RecipeItemUpdateWithWhereUniqueWithoutIngredientInput = {
    where: RecipeItemWhereUniqueInput
    data: XOR<RecipeItemUpdateWithoutIngredientInput, RecipeItemUncheckedUpdateWithoutIngredientInput>
  }

  export type RecipeItemUpdateManyWithWhereWithoutIngredientInput = {
    where: RecipeItemScalarWhereInput
    data: XOR<RecipeItemUpdateManyMutationInput, RecipeItemUncheckedUpdateManyWithoutIngredientInput>
  }

  export type VenueCreateWithoutRecipeItemsInput = {
    id?: string
    slug: string
    name: string
    theme: JsonNullValueInput | InputJsonValue
    defaultLanguage?: string
    planTier?: string
    active?: boolean
    createdAt?: Date | string
    staffAccounts?: StaffAccountCreateNestedManyWithoutVenueInput
    tables?: TableCreateNestedManyWithoutVenueInput
    tableSessions?: TableSessionCreateNestedManyWithoutVenueInput
    categories?: CategoryCreateNestedManyWithoutVenueInput
    menuItems?: MenuItemCreateNestedManyWithoutVenueInput
    ingredients?: IngredientCreateNestedManyWithoutVenueInput
    addOns?: AddOnCreateNestedManyWithoutVenueInput
    orders?: OrderCreateNestedManyWithoutVenueInput
    orderItems?: OrderItemCreateNestedManyWithoutVenueInput
  }

  export type VenueUncheckedCreateWithoutRecipeItemsInput = {
    id?: string
    slug: string
    name: string
    theme: JsonNullValueInput | InputJsonValue
    defaultLanguage?: string
    planTier?: string
    active?: boolean
    createdAt?: Date | string
    staffAccounts?: StaffAccountUncheckedCreateNestedManyWithoutVenueInput
    tables?: TableUncheckedCreateNestedManyWithoutVenueInput
    tableSessions?: TableSessionUncheckedCreateNestedManyWithoutVenueInput
    categories?: CategoryUncheckedCreateNestedManyWithoutVenueInput
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutVenueInput
    ingredients?: IngredientUncheckedCreateNestedManyWithoutVenueInput
    addOns?: AddOnUncheckedCreateNestedManyWithoutVenueInput
    orders?: OrderUncheckedCreateNestedManyWithoutVenueInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueCreateOrConnectWithoutRecipeItemsInput = {
    where: VenueWhereUniqueInput
    create: XOR<VenueCreateWithoutRecipeItemsInput, VenueUncheckedCreateWithoutRecipeItemsInput>
  }

  export type MenuItemCreateWithoutRecipeItemsInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    outOfStock?: boolean
    quizTags?: NullableJsonNullValueInput | InputJsonValue
    venue: VenueCreateNestedOneWithoutMenuItemsInput
    category: CategoryCreateNestedOneWithoutItemsInput
    orderItems?: OrderItemCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemUncheckedCreateWithoutRecipeItemsInput = {
    id?: string
    venueId: string
    categoryId: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    outOfStock?: boolean
    quizTags?: NullableJsonNullValueInput | InputJsonValue
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemCreateOrConnectWithoutRecipeItemsInput = {
    where: MenuItemWhereUniqueInput
    create: XOR<MenuItemCreateWithoutRecipeItemsInput, MenuItemUncheckedCreateWithoutRecipeItemsInput>
  }

  export type IngredientCreateWithoutRecipeItemsInput = {
    id?: string
    name: string
    unit: string
    stock?: Decimal | DecimalJsLike | number | string
    lowThreshold?: Decimal | DecimalJsLike | number | string
    venue: VenueCreateNestedOneWithoutIngredientsInput
  }

  export type IngredientUncheckedCreateWithoutRecipeItemsInput = {
    id?: string
    venueId: string
    name: string
    unit: string
    stock?: Decimal | DecimalJsLike | number | string
    lowThreshold?: Decimal | DecimalJsLike | number | string
  }

  export type IngredientCreateOrConnectWithoutRecipeItemsInput = {
    where: IngredientWhereUniqueInput
    create: XOR<IngredientCreateWithoutRecipeItemsInput, IngredientUncheckedCreateWithoutRecipeItemsInput>
  }

  export type VenueUpsertWithoutRecipeItemsInput = {
    update: XOR<VenueUpdateWithoutRecipeItemsInput, VenueUncheckedUpdateWithoutRecipeItemsInput>
    create: XOR<VenueCreateWithoutRecipeItemsInput, VenueUncheckedCreateWithoutRecipeItemsInput>
    where?: VenueWhereInput
  }

  export type VenueUpdateToOneWithWhereWithoutRecipeItemsInput = {
    where?: VenueWhereInput
    data: XOR<VenueUpdateWithoutRecipeItemsInput, VenueUncheckedUpdateWithoutRecipeItemsInput>
  }

  export type VenueUpdateWithoutRecipeItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    theme?: JsonNullValueInput | InputJsonValue
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffAccounts?: StaffAccountUpdateManyWithoutVenueNestedInput
    tables?: TableUpdateManyWithoutVenueNestedInput
    tableSessions?: TableSessionUpdateManyWithoutVenueNestedInput
    categories?: CategoryUpdateManyWithoutVenueNestedInput
    menuItems?: MenuItemUpdateManyWithoutVenueNestedInput
    ingredients?: IngredientUpdateManyWithoutVenueNestedInput
    addOns?: AddOnUpdateManyWithoutVenueNestedInput
    orders?: OrderUpdateManyWithoutVenueNestedInput
    orderItems?: OrderItemUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateWithoutRecipeItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    theme?: JsonNullValueInput | InputJsonValue
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffAccounts?: StaffAccountUncheckedUpdateManyWithoutVenueNestedInput
    tables?: TableUncheckedUpdateManyWithoutVenueNestedInput
    tableSessions?: TableSessionUncheckedUpdateManyWithoutVenueNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutVenueNestedInput
    menuItems?: MenuItemUncheckedUpdateManyWithoutVenueNestedInput
    ingredients?: IngredientUncheckedUpdateManyWithoutVenueNestedInput
    addOns?: AddOnUncheckedUpdateManyWithoutVenueNestedInput
    orders?: OrderUncheckedUpdateManyWithoutVenueNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type MenuItemUpsertWithoutRecipeItemsInput = {
    update: XOR<MenuItemUpdateWithoutRecipeItemsInput, MenuItemUncheckedUpdateWithoutRecipeItemsInput>
    create: XOR<MenuItemCreateWithoutRecipeItemsInput, MenuItemUncheckedCreateWithoutRecipeItemsInput>
    where?: MenuItemWhereInput
  }

  export type MenuItemUpdateToOneWithWhereWithoutRecipeItemsInput = {
    where?: MenuItemWhereInput
    data: XOR<MenuItemUpdateWithoutRecipeItemsInput, MenuItemUncheckedUpdateWithoutRecipeItemsInput>
  }

  export type MenuItemUpdateWithoutRecipeItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    outOfStock?: BoolFieldUpdateOperationsInput | boolean
    quizTags?: NullableJsonNullValueInput | InputJsonValue
    venue?: VenueUpdateOneRequiredWithoutMenuItemsNestedInput
    category?: CategoryUpdateOneRequiredWithoutItemsNestedInput
    orderItems?: OrderItemUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemUncheckedUpdateWithoutRecipeItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    outOfStock?: BoolFieldUpdateOperationsInput | boolean
    quizTags?: NullableJsonNullValueInput | InputJsonValue
    orderItems?: OrderItemUncheckedUpdateManyWithoutMenuItemNestedInput
  }

  export type IngredientUpsertWithoutRecipeItemsInput = {
    update: XOR<IngredientUpdateWithoutRecipeItemsInput, IngredientUncheckedUpdateWithoutRecipeItemsInput>
    create: XOR<IngredientCreateWithoutRecipeItemsInput, IngredientUncheckedCreateWithoutRecipeItemsInput>
    where?: IngredientWhereInput
  }

  export type IngredientUpdateToOneWithWhereWithoutRecipeItemsInput = {
    where?: IngredientWhereInput
    data: XOR<IngredientUpdateWithoutRecipeItemsInput, IngredientUncheckedUpdateWithoutRecipeItemsInput>
  }

  export type IngredientUpdateWithoutRecipeItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    stock?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lowThreshold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    venue?: VenueUpdateOneRequiredWithoutIngredientsNestedInput
  }

  export type IngredientUncheckedUpdateWithoutRecipeItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    stock?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lowThreshold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type VenueCreateWithoutAddOnsInput = {
    id?: string
    slug: string
    name: string
    theme: JsonNullValueInput | InputJsonValue
    defaultLanguage?: string
    planTier?: string
    active?: boolean
    createdAt?: Date | string
    staffAccounts?: StaffAccountCreateNestedManyWithoutVenueInput
    tables?: TableCreateNestedManyWithoutVenueInput
    tableSessions?: TableSessionCreateNestedManyWithoutVenueInput
    categories?: CategoryCreateNestedManyWithoutVenueInput
    menuItems?: MenuItemCreateNestedManyWithoutVenueInput
    ingredients?: IngredientCreateNestedManyWithoutVenueInput
    recipeItems?: RecipeItemCreateNestedManyWithoutVenueInput
    orders?: OrderCreateNestedManyWithoutVenueInput
    orderItems?: OrderItemCreateNestedManyWithoutVenueInput
  }

  export type VenueUncheckedCreateWithoutAddOnsInput = {
    id?: string
    slug: string
    name: string
    theme: JsonNullValueInput | InputJsonValue
    defaultLanguage?: string
    planTier?: string
    active?: boolean
    createdAt?: Date | string
    staffAccounts?: StaffAccountUncheckedCreateNestedManyWithoutVenueInput
    tables?: TableUncheckedCreateNestedManyWithoutVenueInput
    tableSessions?: TableSessionUncheckedCreateNestedManyWithoutVenueInput
    categories?: CategoryUncheckedCreateNestedManyWithoutVenueInput
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutVenueInput
    ingredients?: IngredientUncheckedCreateNestedManyWithoutVenueInput
    recipeItems?: RecipeItemUncheckedCreateNestedManyWithoutVenueInput
    orders?: OrderUncheckedCreateNestedManyWithoutVenueInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueCreateOrConnectWithoutAddOnsInput = {
    where: VenueWhereUniqueInput
    create: XOR<VenueCreateWithoutAddOnsInput, VenueUncheckedCreateWithoutAddOnsInput>
  }

  export type VenueUpsertWithoutAddOnsInput = {
    update: XOR<VenueUpdateWithoutAddOnsInput, VenueUncheckedUpdateWithoutAddOnsInput>
    create: XOR<VenueCreateWithoutAddOnsInput, VenueUncheckedCreateWithoutAddOnsInput>
    where?: VenueWhereInput
  }

  export type VenueUpdateToOneWithWhereWithoutAddOnsInput = {
    where?: VenueWhereInput
    data: XOR<VenueUpdateWithoutAddOnsInput, VenueUncheckedUpdateWithoutAddOnsInput>
  }

  export type VenueUpdateWithoutAddOnsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    theme?: JsonNullValueInput | InputJsonValue
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffAccounts?: StaffAccountUpdateManyWithoutVenueNestedInput
    tables?: TableUpdateManyWithoutVenueNestedInput
    tableSessions?: TableSessionUpdateManyWithoutVenueNestedInput
    categories?: CategoryUpdateManyWithoutVenueNestedInput
    menuItems?: MenuItemUpdateManyWithoutVenueNestedInput
    ingredients?: IngredientUpdateManyWithoutVenueNestedInput
    recipeItems?: RecipeItemUpdateManyWithoutVenueNestedInput
    orders?: OrderUpdateManyWithoutVenueNestedInput
    orderItems?: OrderItemUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateWithoutAddOnsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    theme?: JsonNullValueInput | InputJsonValue
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffAccounts?: StaffAccountUncheckedUpdateManyWithoutVenueNestedInput
    tables?: TableUncheckedUpdateManyWithoutVenueNestedInput
    tableSessions?: TableSessionUncheckedUpdateManyWithoutVenueNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutVenueNestedInput
    menuItems?: MenuItemUncheckedUpdateManyWithoutVenueNestedInput
    ingredients?: IngredientUncheckedUpdateManyWithoutVenueNestedInput
    recipeItems?: RecipeItemUncheckedUpdateManyWithoutVenueNestedInput
    orders?: OrderUncheckedUpdateManyWithoutVenueNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type VenueCreateWithoutOrdersInput = {
    id?: string
    slug: string
    name: string
    theme: JsonNullValueInput | InputJsonValue
    defaultLanguage?: string
    planTier?: string
    active?: boolean
    createdAt?: Date | string
    staffAccounts?: StaffAccountCreateNestedManyWithoutVenueInput
    tables?: TableCreateNestedManyWithoutVenueInput
    tableSessions?: TableSessionCreateNestedManyWithoutVenueInput
    categories?: CategoryCreateNestedManyWithoutVenueInput
    menuItems?: MenuItemCreateNestedManyWithoutVenueInput
    ingredients?: IngredientCreateNestedManyWithoutVenueInput
    recipeItems?: RecipeItemCreateNestedManyWithoutVenueInput
    addOns?: AddOnCreateNestedManyWithoutVenueInput
    orderItems?: OrderItemCreateNestedManyWithoutVenueInput
  }

  export type VenueUncheckedCreateWithoutOrdersInput = {
    id?: string
    slug: string
    name: string
    theme: JsonNullValueInput | InputJsonValue
    defaultLanguage?: string
    planTier?: string
    active?: boolean
    createdAt?: Date | string
    staffAccounts?: StaffAccountUncheckedCreateNestedManyWithoutVenueInput
    tables?: TableUncheckedCreateNestedManyWithoutVenueInput
    tableSessions?: TableSessionUncheckedCreateNestedManyWithoutVenueInput
    categories?: CategoryUncheckedCreateNestedManyWithoutVenueInput
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutVenueInput
    ingredients?: IngredientUncheckedCreateNestedManyWithoutVenueInput
    recipeItems?: RecipeItemUncheckedCreateNestedManyWithoutVenueInput
    addOns?: AddOnUncheckedCreateNestedManyWithoutVenueInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueCreateOrConnectWithoutOrdersInput = {
    where: VenueWhereUniqueInput
    create: XOR<VenueCreateWithoutOrdersInput, VenueUncheckedCreateWithoutOrdersInput>
  }

  export type TableSessionCreateWithoutOrdersInput = {
    id?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    venue: VenueCreateNestedOneWithoutTableSessionsInput
    table: TableCreateNestedOneWithoutSessionsInput
  }

  export type TableSessionUncheckedCreateWithoutOrdersInput = {
    id?: string
    venueId: string
    tableId: string
    startedAt?: Date | string
    endedAt?: Date | string | null
  }

  export type TableSessionCreateOrConnectWithoutOrdersInput = {
    where: TableSessionWhereUniqueInput
    create: XOR<TableSessionCreateWithoutOrdersInput, TableSessionUncheckedCreateWithoutOrdersInput>
  }

  export type OrderItemCreateWithoutOrderInput = {
    id?: string
    quantity: number
    addOns?: NullableJsonNullValueInput | InputJsonValue
    venue: VenueCreateNestedOneWithoutOrderItemsInput
    menuItem: MenuItemCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: string
    venueId: string
    menuItemId: string
    quantity: number
    addOns?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type VenueUpsertWithoutOrdersInput = {
    update: XOR<VenueUpdateWithoutOrdersInput, VenueUncheckedUpdateWithoutOrdersInput>
    create: XOR<VenueCreateWithoutOrdersInput, VenueUncheckedCreateWithoutOrdersInput>
    where?: VenueWhereInput
  }

  export type VenueUpdateToOneWithWhereWithoutOrdersInput = {
    where?: VenueWhereInput
    data: XOR<VenueUpdateWithoutOrdersInput, VenueUncheckedUpdateWithoutOrdersInput>
  }

  export type VenueUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    theme?: JsonNullValueInput | InputJsonValue
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffAccounts?: StaffAccountUpdateManyWithoutVenueNestedInput
    tables?: TableUpdateManyWithoutVenueNestedInput
    tableSessions?: TableSessionUpdateManyWithoutVenueNestedInput
    categories?: CategoryUpdateManyWithoutVenueNestedInput
    menuItems?: MenuItemUpdateManyWithoutVenueNestedInput
    ingredients?: IngredientUpdateManyWithoutVenueNestedInput
    recipeItems?: RecipeItemUpdateManyWithoutVenueNestedInput
    addOns?: AddOnUpdateManyWithoutVenueNestedInput
    orderItems?: OrderItemUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    theme?: JsonNullValueInput | InputJsonValue
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffAccounts?: StaffAccountUncheckedUpdateManyWithoutVenueNestedInput
    tables?: TableUncheckedUpdateManyWithoutVenueNestedInput
    tableSessions?: TableSessionUncheckedUpdateManyWithoutVenueNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutVenueNestedInput
    menuItems?: MenuItemUncheckedUpdateManyWithoutVenueNestedInput
    ingredients?: IngredientUncheckedUpdateManyWithoutVenueNestedInput
    recipeItems?: RecipeItemUncheckedUpdateManyWithoutVenueNestedInput
    addOns?: AddOnUncheckedUpdateManyWithoutVenueNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type TableSessionUpsertWithoutOrdersInput = {
    update: XOR<TableSessionUpdateWithoutOrdersInput, TableSessionUncheckedUpdateWithoutOrdersInput>
    create: XOR<TableSessionCreateWithoutOrdersInput, TableSessionUncheckedCreateWithoutOrdersInput>
    where?: TableSessionWhereInput
  }

  export type TableSessionUpdateToOneWithWhereWithoutOrdersInput = {
    where?: TableSessionWhereInput
    data: XOR<TableSessionUpdateWithoutOrdersInput, TableSessionUncheckedUpdateWithoutOrdersInput>
  }

  export type TableSessionUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    venue?: VenueUpdateOneRequiredWithoutTableSessionsNestedInput
    table?: TableUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type TableSessionUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type VenueCreateWithoutOrderItemsInput = {
    id?: string
    slug: string
    name: string
    theme: JsonNullValueInput | InputJsonValue
    defaultLanguage?: string
    planTier?: string
    active?: boolean
    createdAt?: Date | string
    staffAccounts?: StaffAccountCreateNestedManyWithoutVenueInput
    tables?: TableCreateNestedManyWithoutVenueInput
    tableSessions?: TableSessionCreateNestedManyWithoutVenueInput
    categories?: CategoryCreateNestedManyWithoutVenueInput
    menuItems?: MenuItemCreateNestedManyWithoutVenueInput
    ingredients?: IngredientCreateNestedManyWithoutVenueInput
    recipeItems?: RecipeItemCreateNestedManyWithoutVenueInput
    addOns?: AddOnCreateNestedManyWithoutVenueInput
    orders?: OrderCreateNestedManyWithoutVenueInput
  }

  export type VenueUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    slug: string
    name: string
    theme: JsonNullValueInput | InputJsonValue
    defaultLanguage?: string
    planTier?: string
    active?: boolean
    createdAt?: Date | string
    staffAccounts?: StaffAccountUncheckedCreateNestedManyWithoutVenueInput
    tables?: TableUncheckedCreateNestedManyWithoutVenueInput
    tableSessions?: TableSessionUncheckedCreateNestedManyWithoutVenueInput
    categories?: CategoryUncheckedCreateNestedManyWithoutVenueInput
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutVenueInput
    ingredients?: IngredientUncheckedCreateNestedManyWithoutVenueInput
    recipeItems?: RecipeItemUncheckedCreateNestedManyWithoutVenueInput
    addOns?: AddOnUncheckedCreateNestedManyWithoutVenueInput
    orders?: OrderUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueCreateOrConnectWithoutOrderItemsInput = {
    where: VenueWhereUniqueInput
    create: XOR<VenueCreateWithoutOrderItemsInput, VenueUncheckedCreateWithoutOrderItemsInput>
  }

  export type OrderCreateWithoutItemsInput = {
    id?: string
    customerName?: string | null
    notes?: string | null
    paymentMethod: string
    tipAmount?: number
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: string
    createdAt?: Date | string
    venue: VenueCreateNestedOneWithoutOrdersInput
    tableSession: TableSessionCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutItemsInput = {
    id?: string
    venueId: string
    tableSessionId: string
    customerName?: string | null
    notes?: string | null
    paymentMethod: string
    tipAmount?: number
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: string
    createdAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
  }

  export type MenuItemCreateWithoutOrderItemsInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    outOfStock?: boolean
    quizTags?: NullableJsonNullValueInput | InputJsonValue
    venue: VenueCreateNestedOneWithoutMenuItemsInput
    category: CategoryCreateNestedOneWithoutItemsInput
    recipeItems?: RecipeItemCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    venueId: string
    categoryId: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    outOfStock?: boolean
    quizTags?: NullableJsonNullValueInput | InputJsonValue
    recipeItems?: RecipeItemUncheckedCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemCreateOrConnectWithoutOrderItemsInput = {
    where: MenuItemWhereUniqueInput
    create: XOR<MenuItemCreateWithoutOrderItemsInput, MenuItemUncheckedCreateWithoutOrderItemsInput>
  }

  export type VenueUpsertWithoutOrderItemsInput = {
    update: XOR<VenueUpdateWithoutOrderItemsInput, VenueUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<VenueCreateWithoutOrderItemsInput, VenueUncheckedCreateWithoutOrderItemsInput>
    where?: VenueWhereInput
  }

  export type VenueUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: VenueWhereInput
    data: XOR<VenueUpdateWithoutOrderItemsInput, VenueUncheckedUpdateWithoutOrderItemsInput>
  }

  export type VenueUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    theme?: JsonNullValueInput | InputJsonValue
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffAccounts?: StaffAccountUpdateManyWithoutVenueNestedInput
    tables?: TableUpdateManyWithoutVenueNestedInput
    tableSessions?: TableSessionUpdateManyWithoutVenueNestedInput
    categories?: CategoryUpdateManyWithoutVenueNestedInput
    menuItems?: MenuItemUpdateManyWithoutVenueNestedInput
    ingredients?: IngredientUpdateManyWithoutVenueNestedInput
    recipeItems?: RecipeItemUpdateManyWithoutVenueNestedInput
    addOns?: AddOnUpdateManyWithoutVenueNestedInput
    orders?: OrderUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    theme?: JsonNullValueInput | InputJsonValue
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffAccounts?: StaffAccountUncheckedUpdateManyWithoutVenueNestedInput
    tables?: TableUncheckedUpdateManyWithoutVenueNestedInput
    tableSessions?: TableSessionUncheckedUpdateManyWithoutVenueNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutVenueNestedInput
    menuItems?: MenuItemUncheckedUpdateManyWithoutVenueNestedInput
    ingredients?: IngredientUncheckedUpdateManyWithoutVenueNestedInput
    recipeItems?: RecipeItemUncheckedUpdateManyWithoutVenueNestedInput
    addOns?: AddOnUncheckedUpdateManyWithoutVenueNestedInput
    orders?: OrderUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type OrderUpsertWithoutItemsInput = {
    update: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type OrderUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    tipAmount?: IntFieldUpdateOperationsInput | number
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: VenueUpdateOneRequiredWithoutOrdersNestedInput
    tableSession?: TableSessionUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    tableSessionId?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    tipAmount?: IntFieldUpdateOperationsInput | number
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemUpsertWithoutOrderItemsInput = {
    update: XOR<MenuItemUpdateWithoutOrderItemsInput, MenuItemUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<MenuItemCreateWithoutOrderItemsInput, MenuItemUncheckedCreateWithoutOrderItemsInput>
    where?: MenuItemWhereInput
  }

  export type MenuItemUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: MenuItemWhereInput
    data: XOR<MenuItemUpdateWithoutOrderItemsInput, MenuItemUncheckedUpdateWithoutOrderItemsInput>
  }

  export type MenuItemUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    outOfStock?: BoolFieldUpdateOperationsInput | boolean
    quizTags?: NullableJsonNullValueInput | InputJsonValue
    venue?: VenueUpdateOneRequiredWithoutMenuItemsNestedInput
    category?: CategoryUpdateOneRequiredWithoutItemsNestedInput
    recipeItems?: RecipeItemUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    outOfStock?: BoolFieldUpdateOperationsInput | boolean
    quizTags?: NullableJsonNullValueInput | InputJsonValue
    recipeItems?: RecipeItemUncheckedUpdateManyWithoutMenuItemNestedInput
  }

  export type StaffAccountCreateManyVenueInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    active?: boolean
    createdAt?: Date | string
  }

  export type TableCreateManyVenueInput = {
    id?: string
    label: string
    qrToken: string
    activeSessionId?: string | null
    waiterCalled?: boolean
    waiterCalledAt?: Date | string | null
    createdAt?: Date | string
  }

  export type TableSessionCreateManyVenueInput = {
    id?: string
    tableId: string
    startedAt?: Date | string
    endedAt?: Date | string | null
  }

  export type CategoryCreateManyVenueInput = {
    id?: string
    name: string
    orderIndex?: number
  }

  export type MenuItemCreateManyVenueInput = {
    id?: string
    categoryId: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    outOfStock?: boolean
    quizTags?: NullableJsonNullValueInput | InputJsonValue
  }

  export type IngredientCreateManyVenueInput = {
    id?: string
    name: string
    unit: string
    stock?: Decimal | DecimalJsLike | number | string
    lowThreshold?: Decimal | DecimalJsLike | number | string
  }

  export type RecipeItemCreateManyVenueInput = {
    id?: string
    menuItemId: string
    ingredientId: string
    quantityUsed: Decimal | DecimalJsLike | number | string
  }

  export type AddOnCreateManyVenueInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    applicableItemIds?: AddOnCreateapplicableItemIdsInput | string[]
  }

  export type OrderCreateManyVenueInput = {
    id?: string
    tableSessionId: string
    customerName?: string | null
    notes?: string | null
    paymentMethod: string
    tipAmount?: number
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: string
    createdAt?: Date | string
  }

  export type OrderItemCreateManyVenueInput = {
    id?: string
    orderId: string
    menuItemId: string
    quantity: number
    addOns?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StaffAccountUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffAccountUncheckedUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffAccountUncheckedUpdateManyWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TableUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    qrToken?: StringFieldUpdateOperationsInput | string
    activeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    waiterCalled?: BoolFieldUpdateOperationsInput | boolean
    waiterCalledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: TableSessionUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    qrToken?: StringFieldUpdateOperationsInput | string
    activeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    waiterCalled?: BoolFieldUpdateOperationsInput | boolean
    waiterCalledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: TableSessionUncheckedUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateManyWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    qrToken?: StringFieldUpdateOperationsInput | string
    activeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    waiterCalled?: BoolFieldUpdateOperationsInput | boolean
    waiterCalledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TableSessionUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    table?: TableUpdateOneRequiredWithoutSessionsNestedInput
    orders?: OrderUpdateManyWithoutTableSessionNestedInput
  }

  export type TableSessionUncheckedUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: OrderUncheckedUpdateManyWithoutTableSessionNestedInput
  }

  export type TableSessionUncheckedUpdateManyWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    items?: MenuItemUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    items?: MenuItemUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
  }

  export type MenuItemUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    outOfStock?: BoolFieldUpdateOperationsInput | boolean
    quizTags?: NullableJsonNullValueInput | InputJsonValue
    category?: CategoryUpdateOneRequiredWithoutItemsNestedInput
    orderItems?: OrderItemUpdateManyWithoutMenuItemNestedInput
    recipeItems?: RecipeItemUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemUncheckedUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    outOfStock?: BoolFieldUpdateOperationsInput | boolean
    quizTags?: NullableJsonNullValueInput | InputJsonValue
    orderItems?: OrderItemUncheckedUpdateManyWithoutMenuItemNestedInput
    recipeItems?: RecipeItemUncheckedUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemUncheckedUpdateManyWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    outOfStock?: BoolFieldUpdateOperationsInput | boolean
    quizTags?: NullableJsonNullValueInput | InputJsonValue
  }

  export type IngredientUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    stock?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lowThreshold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    recipeItems?: RecipeItemUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientUncheckedUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    stock?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lowThreshold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    recipeItems?: RecipeItemUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientUncheckedUpdateManyWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    stock?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lowThreshold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type RecipeItemUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    menuItem?: MenuItemUpdateOneRequiredWithoutRecipeItemsNestedInput
    ingredient?: IngredientUpdateOneRequiredWithoutRecipeItemsNestedInput
  }

  export type RecipeItemUncheckedUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    quantityUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type RecipeItemUncheckedUpdateManyWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    quantityUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type AddOnUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    applicableItemIds?: AddOnUpdateapplicableItemIdsInput | string[]
  }

  export type AddOnUncheckedUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    applicableItemIds?: AddOnUpdateapplicableItemIdsInput | string[]
  }

  export type AddOnUncheckedUpdateManyWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    applicableItemIds?: AddOnUpdateapplicableItemIdsInput | string[]
  }

  export type OrderUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    tipAmount?: IntFieldUpdateOperationsInput | number
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tableSession?: TableSessionUpdateOneRequiredWithoutOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableSessionId?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    tipAmount?: IntFieldUpdateOperationsInput | number
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableSessionId?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    tipAmount?: IntFieldUpdateOperationsInput | number
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    addOns?: NullableJsonNullValueInput | InputJsonValue
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
    menuItem?: MenuItemUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    addOns?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderItemUncheckedUpdateManyWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    addOns?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TableSessionCreateManyTableInput = {
    id?: string
    venueId: string
    startedAt?: Date | string
    endedAt?: Date | string | null
  }

  export type TableSessionUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    venue?: VenueUpdateOneRequiredWithoutTableSessionsNestedInput
    orders?: OrderUpdateManyWithoutTableSessionNestedInput
  }

  export type TableSessionUncheckedUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: OrderUncheckedUpdateManyWithoutTableSessionNestedInput
  }

  export type TableSessionUncheckedUpdateManyWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderCreateManyTableSessionInput = {
    id?: string
    venueId: string
    customerName?: string | null
    notes?: string | null
    paymentMethod: string
    tipAmount?: number
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: string
    createdAt?: Date | string
  }

  export type OrderUpdateWithoutTableSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    tipAmount?: IntFieldUpdateOperationsInput | number
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: VenueUpdateOneRequiredWithoutOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutTableSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    tipAmount?: IntFieldUpdateOperationsInput | number
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutTableSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    tipAmount?: IntFieldUpdateOperationsInput | number
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemCreateManyCategoryInput = {
    id?: string
    venueId: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    outOfStock?: boolean
    quizTags?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MenuItemUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    outOfStock?: BoolFieldUpdateOperationsInput | boolean
    quizTags?: NullableJsonNullValueInput | InputJsonValue
    venue?: VenueUpdateOneRequiredWithoutMenuItemsNestedInput
    orderItems?: OrderItemUpdateManyWithoutMenuItemNestedInput
    recipeItems?: RecipeItemUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    outOfStock?: BoolFieldUpdateOperationsInput | boolean
    quizTags?: NullableJsonNullValueInput | InputJsonValue
    orderItems?: OrderItemUncheckedUpdateManyWithoutMenuItemNestedInput
    recipeItems?: RecipeItemUncheckedUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    outOfStock?: BoolFieldUpdateOperationsInput | boolean
    quizTags?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderItemCreateManyMenuItemInput = {
    id?: string
    venueId: string
    orderId: string
    quantity: number
    addOns?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RecipeItemCreateManyMenuItemInput = {
    id?: string
    venueId: string
    ingredientId: string
    quantityUsed: Decimal | DecimalJsLike | number | string
  }

  export type OrderItemUpdateWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    addOns?: NullableJsonNullValueInput | InputJsonValue
    venue?: VenueUpdateOneRequiredWithoutOrderItemsNestedInput
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    addOns?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderItemUncheckedUpdateManyWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    addOns?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RecipeItemUpdateWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    venue?: VenueUpdateOneRequiredWithoutRecipeItemsNestedInput
    ingredient?: IngredientUpdateOneRequiredWithoutRecipeItemsNestedInput
  }

  export type RecipeItemUncheckedUpdateWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    quantityUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type RecipeItemUncheckedUpdateManyWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    quantityUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type RecipeItemCreateManyIngredientInput = {
    id?: string
    venueId: string
    menuItemId: string
    quantityUsed: Decimal | DecimalJsLike | number | string
  }

  export type RecipeItemUpdateWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    venue?: VenueUpdateOneRequiredWithoutRecipeItemsNestedInput
    menuItem?: MenuItemUpdateOneRequiredWithoutRecipeItemsNestedInput
  }

  export type RecipeItemUncheckedUpdateWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
    quantityUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type RecipeItemUncheckedUpdateManyWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
    quantityUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type OrderItemCreateManyOrderInput = {
    id?: string
    venueId: string
    menuItemId: string
    quantity: number
    addOns?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    addOns?: NullableJsonNullValueInput | InputJsonValue
    venue?: VenueUpdateOneRequiredWithoutOrderItemsNestedInput
    menuItem?: MenuItemUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    addOns?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    addOns?: NullableJsonNullValueInput | InputJsonValue
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}