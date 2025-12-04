
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserRole
 * 
 */
export type UserRole = $Result.DefaultSelection<Prisma.$UserRolePayload>
/**
 * Model Host
 * 
 */
export type Host = $Result.DefaultSelection<Prisma.$HostPayload>
/**
 * Model Shift
 * 
 */
export type Shift = $Result.DefaultSelection<Prisma.$ShiftPayload>
/**
 * Model ShiftRole
 * 
 */
export type ShiftRole = $Result.DefaultSelection<Prisma.$ShiftRolePayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model Package
 * 
 */
export type Package = $Result.DefaultSelection<Prisma.$PackagePayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model FoodItem
 * 
 */
export type FoodItem = $Result.DefaultSelection<Prisma.$FoodItemPayload>
/**
 * Model BookingFoodItem
 * 
 */
export type BookingFoodItem = $Result.DefaultSelection<Prisma.$BookingFoodItemPayload>
/**
 * Model BookingHost
 * 
 */
export type BookingHost = $Result.DefaultSelection<Prisma.$BookingHostPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PackageCategory: {
  VR: 'VR',
  VR_BATTLE: 'VR_BATTLE',
  KIDS: 'KIDS',
  SCHOOL: 'SCHOOL'
};

export type PackageCategory = (typeof PackageCategory)[keyof typeof PackageCategory]


export const GroupType: {
  NORMAL: 'NORMAL',
  LARGE_GROUP: 'LARGE_GROUP'
};

export type GroupType = (typeof GroupType)[keyof typeof GroupType]

}

export type PackageCategory = $Enums.PackageCategory

export const PackageCategory: typeof $Enums.PackageCategory

export type GroupType = $Enums.GroupType

export const GroupType: typeof $Enums.GroupType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRole`: Exposes CRUD operations for the **UserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRoles
    * const userRoles = await prisma.userRole.findMany()
    * ```
    */
  get userRole(): Prisma.UserRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.host`: Exposes CRUD operations for the **Host** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hosts
    * const hosts = await prisma.host.findMany()
    * ```
    */
  get host(): Prisma.HostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shift`: Exposes CRUD operations for the **Shift** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shifts
    * const shifts = await prisma.shift.findMany()
    * ```
    */
  get shift(): Prisma.ShiftDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shiftRole`: Exposes CRUD operations for the **ShiftRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShiftRoles
    * const shiftRoles = await prisma.shiftRole.findMany()
    * ```
    */
  get shiftRole(): Prisma.ShiftRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.package`: Exposes CRUD operations for the **Package** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Packages
    * const packages = await prisma.package.findMany()
    * ```
    */
  get package(): Prisma.PackageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.foodItem`: Exposes CRUD operations for the **FoodItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FoodItems
    * const foodItems = await prisma.foodItem.findMany()
    * ```
    */
  get foodItem(): Prisma.FoodItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookingFoodItem`: Exposes CRUD operations for the **BookingFoodItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookingFoodItems
    * const bookingFoodItems = await prisma.bookingFoodItem.findMany()
    * ```
    */
  get bookingFoodItem(): Prisma.BookingFoodItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookingHost`: Exposes CRUD operations for the **BookingHost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookingHosts
    * const bookingHosts = await prisma.bookingHost.findMany()
    * ```
    */
  get bookingHost(): Prisma.BookingHostDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
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
      (Without<T, U> & U) | (Without<U, T> & T)
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
    User: 'User',
    UserRole: 'UserRole',
    Host: 'Host',
    Shift: 'Shift',
    ShiftRole: 'ShiftRole',
    Booking: 'Booking',
    Package: 'Package',
    Customer: 'Customer',
    FoodItem: 'FoodItem',
    BookingFoodItem: 'BookingFoodItem',
    BookingHost: 'BookingHost'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userRole" | "host" | "shift" | "shiftRole" | "booking" | "package" | "customer" | "foodItem" | "bookingFoodItem" | "bookingHost"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserRole: {
        payload: Prisma.$UserRolePayload<ExtArgs>
        fields: Prisma.UserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findFirst: {
            args: Prisma.UserRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findMany: {
            args: Prisma.UserRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          create: {
            args: Prisma.UserRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          createMany: {
            args: Prisma.UserRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          delete: {
            args: Prisma.UserRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          update: {
            args: Prisma.UserRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          deleteMany: {
            args: Prisma.UserRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          upsert: {
            args: Prisma.UserRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          aggregate: {
            args: Prisma.UserRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRole>
          }
          groupBy: {
            args: Prisma.UserRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRoleCountArgs<ExtArgs>
            result: $Utils.Optional<UserRoleCountAggregateOutputType> | number
          }
        }
      }
      Host: {
        payload: Prisma.$HostPayload<ExtArgs>
        fields: Prisma.HostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostPayload>
          }
          findFirst: {
            args: Prisma.HostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostPayload>
          }
          findMany: {
            args: Prisma.HostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostPayload>[]
          }
          create: {
            args: Prisma.HostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostPayload>
          }
          createMany: {
            args: Prisma.HostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostPayload>[]
          }
          delete: {
            args: Prisma.HostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostPayload>
          }
          update: {
            args: Prisma.HostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostPayload>
          }
          deleteMany: {
            args: Prisma.HostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostPayload>[]
          }
          upsert: {
            args: Prisma.HostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostPayload>
          }
          aggregate: {
            args: Prisma.HostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHost>
          }
          groupBy: {
            args: Prisma.HostGroupByArgs<ExtArgs>
            result: $Utils.Optional<HostGroupByOutputType>[]
          }
          count: {
            args: Prisma.HostCountArgs<ExtArgs>
            result: $Utils.Optional<HostCountAggregateOutputType> | number
          }
        }
      }
      Shift: {
        payload: Prisma.$ShiftPayload<ExtArgs>
        fields: Prisma.ShiftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShiftFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShiftFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          findFirst: {
            args: Prisma.ShiftFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShiftFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          findMany: {
            args: Prisma.ShiftFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>[]
          }
          create: {
            args: Prisma.ShiftCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          createMany: {
            args: Prisma.ShiftCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShiftCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>[]
          }
          delete: {
            args: Prisma.ShiftDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          update: {
            args: Prisma.ShiftUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          deleteMany: {
            args: Prisma.ShiftDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShiftUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShiftUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>[]
          }
          upsert: {
            args: Prisma.ShiftUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          aggregate: {
            args: Prisma.ShiftAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShift>
          }
          groupBy: {
            args: Prisma.ShiftGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShiftGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShiftCountArgs<ExtArgs>
            result: $Utils.Optional<ShiftCountAggregateOutputType> | number
          }
        }
      }
      ShiftRole: {
        payload: Prisma.$ShiftRolePayload<ExtArgs>
        fields: Prisma.ShiftRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShiftRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShiftRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftRolePayload>
          }
          findFirst: {
            args: Prisma.ShiftRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShiftRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftRolePayload>
          }
          findMany: {
            args: Prisma.ShiftRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftRolePayload>[]
          }
          create: {
            args: Prisma.ShiftRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftRolePayload>
          }
          createMany: {
            args: Prisma.ShiftRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShiftRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftRolePayload>[]
          }
          delete: {
            args: Prisma.ShiftRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftRolePayload>
          }
          update: {
            args: Prisma.ShiftRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftRolePayload>
          }
          deleteMany: {
            args: Prisma.ShiftRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShiftRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShiftRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftRolePayload>[]
          }
          upsert: {
            args: Prisma.ShiftRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftRolePayload>
          }
          aggregate: {
            args: Prisma.ShiftRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShiftRole>
          }
          groupBy: {
            args: Prisma.ShiftRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShiftRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShiftRoleCountArgs<ExtArgs>
            result: $Utils.Optional<ShiftRoleCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      Package: {
        payload: Prisma.$PackagePayload<ExtArgs>
        fields: Prisma.PackageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PackageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PackageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          findFirst: {
            args: Prisma.PackageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PackageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          findMany: {
            args: Prisma.PackageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>[]
          }
          create: {
            args: Prisma.PackageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          createMany: {
            args: Prisma.PackageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PackageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>[]
          }
          delete: {
            args: Prisma.PackageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          update: {
            args: Prisma.PackageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          deleteMany: {
            args: Prisma.PackageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PackageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PackageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>[]
          }
          upsert: {
            args: Prisma.PackageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          aggregate: {
            args: Prisma.PackageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePackage>
          }
          groupBy: {
            args: Prisma.PackageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PackageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PackageCountArgs<ExtArgs>
            result: $Utils.Optional<PackageCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      FoodItem: {
        payload: Prisma.$FoodItemPayload<ExtArgs>
        fields: Prisma.FoodItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          findFirst: {
            args: Prisma.FoodItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          findMany: {
            args: Prisma.FoodItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>[]
          }
          create: {
            args: Prisma.FoodItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          createMany: {
            args: Prisma.FoodItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FoodItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>[]
          }
          delete: {
            args: Prisma.FoodItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          update: {
            args: Prisma.FoodItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          deleteMany: {
            args: Prisma.FoodItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FoodItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>[]
          }
          upsert: {
            args: Prisma.FoodItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          aggregate: {
            args: Prisma.FoodItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoodItem>
          }
          groupBy: {
            args: Prisma.FoodItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodItemCountArgs<ExtArgs>
            result: $Utils.Optional<FoodItemCountAggregateOutputType> | number
          }
        }
      }
      BookingFoodItem: {
        payload: Prisma.$BookingFoodItemPayload<ExtArgs>
        fields: Prisma.BookingFoodItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFoodItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingFoodItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFoodItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingFoodItemPayload>
          }
          findFirst: {
            args: Prisma.BookingFoodItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingFoodItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFoodItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingFoodItemPayload>
          }
          findMany: {
            args: Prisma.BookingFoodItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingFoodItemPayload>[]
          }
          create: {
            args: Prisma.BookingFoodItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingFoodItemPayload>
          }
          createMany: {
            args: Prisma.BookingFoodItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingFoodItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingFoodItemPayload>[]
          }
          delete: {
            args: Prisma.BookingFoodItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingFoodItemPayload>
          }
          update: {
            args: Prisma.BookingFoodItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingFoodItemPayload>
          }
          deleteMany: {
            args: Prisma.BookingFoodItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingFoodItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingFoodItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingFoodItemPayload>[]
          }
          upsert: {
            args: Prisma.BookingFoodItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingFoodItemPayload>
          }
          aggregate: {
            args: Prisma.BookingFoodItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookingFoodItem>
          }
          groupBy: {
            args: Prisma.BookingFoodItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingFoodItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingFoodItemCountArgs<ExtArgs>
            result: $Utils.Optional<BookingFoodItemCountAggregateOutputType> | number
          }
        }
      }
      BookingHost: {
        payload: Prisma.$BookingHostPayload<ExtArgs>
        fields: Prisma.BookingHostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingHostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingHostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingHostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingHostPayload>
          }
          findFirst: {
            args: Prisma.BookingHostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingHostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingHostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingHostPayload>
          }
          findMany: {
            args: Prisma.BookingHostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingHostPayload>[]
          }
          create: {
            args: Prisma.BookingHostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingHostPayload>
          }
          createMany: {
            args: Prisma.BookingHostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingHostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingHostPayload>[]
          }
          delete: {
            args: Prisma.BookingHostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingHostPayload>
          }
          update: {
            args: Prisma.BookingHostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingHostPayload>
          }
          deleteMany: {
            args: Prisma.BookingHostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingHostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingHostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingHostPayload>[]
          }
          upsert: {
            args: Prisma.BookingHostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingHostPayload>
          }
          aggregate: {
            args: Prisma.BookingHostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookingHost>
          }
          groupBy: {
            args: Prisma.BookingHostGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingHostGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingHostCountArgs<ExtArgs>
            result: $Utils.Optional<BookingHostCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userRole?: UserRoleOmit
    host?: HostOmit
    shift?: ShiftOmit
    shiftRole?: ShiftRoleOmit
    booking?: BookingOmit
    package?: PackageOmit
    customer?: CustomerOmit
    foodItem?: FoodItemOmit
    bookingFoodItem?: BookingFoodItemOmit
    bookingHost?: BookingHostOmit
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
   * Count Type UserRoleCountOutputType
   */

  export type UserRoleCountOutputType = {
    users: number
  }

  export type UserRoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserRoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * UserRoleCountOutputType without action
   */
  export type UserRoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleCountOutputType
     */
    select?: UserRoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserRoleCountOutputType without action
   */
  export type UserRoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type HostCountOutputType
   */

  export type HostCountOutputType = {
    bookingHosts: number
    shifts: number
  }

  export type HostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookingHosts?: boolean | HostCountOutputTypeCountBookingHostsArgs
    shifts?: boolean | HostCountOutputTypeCountShiftsArgs
  }

  // Custom InputTypes
  /**
   * HostCountOutputType without action
   */
  export type HostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostCountOutputType
     */
    select?: HostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HostCountOutputType without action
   */
  export type HostCountOutputTypeCountBookingHostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingHostWhereInput
  }

  /**
   * HostCountOutputType without action
   */
  export type HostCountOutputTypeCountShiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftWhereInput
  }


  /**
   * Count Type ShiftRoleCountOutputType
   */

  export type ShiftRoleCountOutputType = {
    shifts: number
  }

  export type ShiftRoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shifts?: boolean | ShiftRoleCountOutputTypeCountShiftsArgs
  }

  // Custom InputTypes
  /**
   * ShiftRoleCountOutputType without action
   */
  export type ShiftRoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftRoleCountOutputType
     */
    select?: ShiftRoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShiftRoleCountOutputType without action
   */
  export type ShiftRoleCountOutputTypeCountShiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftWhereInput
  }


  /**
   * Count Type BookingCountOutputType
   */

  export type BookingCountOutputType = {
    foodItems: number
    bookingHosts: number
  }

  export type BookingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foodItems?: boolean | BookingCountOutputTypeCountFoodItemsArgs
    bookingHosts?: boolean | BookingCountOutputTypeCountBookingHostsArgs
  }

  // Custom InputTypes
  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingCountOutputType
     */
    select?: BookingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountFoodItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingFoodItemWhereInput
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountBookingHostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingHostWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    bookings: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | CustomerCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type FoodItemCountOutputType
   */

  export type FoodItemCountOutputType = {
    bookings: number
  }

  export type FoodItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | FoodItemCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * FoodItemCountOutputType without action
   */
  export type FoodItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItemCountOutputType
     */
    select?: FoodItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FoodItemCountOutputType without action
   */
  export type FoodItemCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingFoodItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    role_id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    role_id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    password: string | null
    role_id: number | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    password: string | null
    role_id: number | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    phone: number
    password: number
    role_id: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    role_id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    role_id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    password?: true
    role_id?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    password?: true
    role_id?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    password?: true
    role_id?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    email: string
    phone: string | null
    password: string
    role_id: number
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    role_id?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | UserRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    role_id?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | UserRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    role_id?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | UserRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    role_id?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "phone" | "password" | "role_id" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | UserRoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | UserRoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | UserRoleDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$UserRolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      email: string
      phone: string | null
      password: string
      role_id: number
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends UserRoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserRoleDefaultArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role_id: FieldRef<"User", 'Int'>
    readonly active: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserRole
   */

  export type AggregateUserRole = {
    _count: UserRoleCountAggregateOutputType | null
    _avg: UserRoleAvgAggregateOutputType | null
    _sum: UserRoleSumAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  export type UserRoleAvgAggregateOutputType = {
    id: number | null
  }

  export type UserRoleSumAggregateOutputType = {
    id: number | null
  }

  export type UserRoleMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserRoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserRoleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserRoleAvgAggregateInputType = {
    id?: true
  }

  export type UserRoleSumAggregateInputType = {
    id?: true
  }

  export type UserRoleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserRoleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserRoleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRole to aggregate.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRoles
    **/
    _count?: true | UserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRoleMaxAggregateInputType
  }

  export type GetUserRoleAggregateType<T extends UserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRole[P]>
      : GetScalarType<T[P], AggregateUserRole[P]>
  }




  export type UserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithAggregationInput | UserRoleOrderByWithAggregationInput[]
    by: UserRoleScalarFieldEnum[] | UserRoleScalarFieldEnum
    having?: UserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRoleCountAggregateInputType | true
    _avg?: UserRoleAvgAggregateInputType
    _sum?: UserRoleSumAggregateInputType
    _min?: UserRoleMinAggregateInputType
    _max?: UserRoleMaxAggregateInputType
  }

  export type UserRoleGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserRoleCountAggregateOutputType | null
    _avg: UserRoleAvgAggregateOutputType | null
    _sum: UserRoleSumAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  type GetUserRoleGroupByPayload<T extends UserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
        }
      >
    >


  export type UserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | UserRole$usersArgs<ExtArgs>
    _count?: boolean | UserRoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["userRole"]>
  export type UserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserRole$usersArgs<ExtArgs>
    _count?: boolean | UserRoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRole"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userRole"]>
    composites: {}
  }

  type UserRoleGetPayload<S extends boolean | null | undefined | UserRoleDefaultArgs> = $Result.GetResult<Prisma.$UserRolePayload, S>

  type UserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRoleCountAggregateInputType | true
    }

  export interface UserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRole'], meta: { name: 'UserRole' } }
    /**
     * Find zero or one UserRole that matches the filter.
     * @param {UserRoleFindUniqueArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRoleFindUniqueArgs>(args: SelectSubset<T, UserRoleFindUniqueArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRoleFindUniqueOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRoleFindFirstArgs>(args?: SelectSubset<T, UserRoleFindFirstArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoles
     * const userRoles = await prisma.userRole.findMany()
     * 
     * // Get first 10 UserRoles
     * const userRoles = await prisma.userRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userRoleWithIdOnly = await prisma.userRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserRoleFindManyArgs>(args?: SelectSubset<T, UserRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRole.
     * @param {UserRoleCreateArgs} args - Arguments to create a UserRole.
     * @example
     * // Create one UserRole
     * const UserRole = await prisma.userRole.create({
     *   data: {
     *     // ... data to create a UserRole
     *   }
     * })
     * 
     */
    create<T extends UserRoleCreateArgs>(args: SelectSubset<T, UserRoleCreateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRoles.
     * @param {UserRoleCreateManyArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRoleCreateManyArgs>(args?: SelectSubset<T, UserRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserRoles and returns the data saved in the database.
     * @param {UserRoleCreateManyAndReturnArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserRoles and only return the `id`
     * const userRoleWithIdOnly = await prisma.userRole.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, UserRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserRole.
     * @param {UserRoleDeleteArgs} args - Arguments to delete one UserRole.
     * @example
     * // Delete one UserRole
     * const UserRole = await prisma.userRole.delete({
     *   where: {
     *     // ... filter to delete one UserRole
     *   }
     * })
     * 
     */
    delete<T extends UserRoleDeleteArgs>(args: SelectSubset<T, UserRoleDeleteArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRole.
     * @param {UserRoleUpdateArgs} args - Arguments to update one UserRole.
     * @example
     * // Update one UserRole
     * const userRole = await prisma.userRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRoleUpdateArgs>(args: SelectSubset<T, UserRoleUpdateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRoles.
     * @param {UserRoleDeleteManyArgs} args - Arguments to filter UserRoles to delete.
     * @example
     * // Delete a few UserRoles
     * const { count } = await prisma.userRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRoleDeleteManyArgs>(args?: SelectSubset<T, UserRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRoleUpdateManyArgs>(args: SelectSubset<T, UserRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles and returns the data updated in the database.
     * @param {UserRoleUpdateManyAndReturnArgs} args - Arguments to update many UserRoles.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserRoles and only return the `id`
     * const userRoleWithIdOnly = await prisma.userRole.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, UserRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserRole.
     * @param {UserRoleUpsertArgs} args - Arguments to update or create a UserRole.
     * @example
     * // Update or create a UserRole
     * const userRole = await prisma.userRole.upsert({
     *   create: {
     *     // ... data to create a UserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRole we want to update
     *   }
     * })
     */
    upsert<T extends UserRoleUpsertArgs>(args: SelectSubset<T, UserRoleUpsertArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleCountArgs} args - Arguments to filter UserRoles to count.
     * @example
     * // Count the number of UserRoles
     * const count = await prisma.userRole.count({
     *   where: {
     *     // ... the filter for the UserRoles we want to count
     *   }
     * })
    **/
    count<T extends UserRoleCountArgs>(
      args?: Subset<T, UserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserRoleAggregateArgs>(args: Subset<T, UserRoleAggregateArgs>): Prisma.PrismaPromise<GetUserRoleAggregateType<T>>

    /**
     * Group by UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleGroupByArgs} args - Group by arguments.
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
      T extends UserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRoleGroupByArgs['orderBy'] }
        : { orderBy?: UserRoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRole model
   */
  readonly fields: UserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends UserRole$usersArgs<ExtArgs> = {}>(args?: Subset<T, UserRole$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the UserRole model
   */
  interface UserRoleFieldRefs {
    readonly id: FieldRef<"UserRole", 'Int'>
    readonly name: FieldRef<"UserRole", 'String'>
    readonly description: FieldRef<"UserRole", 'String'>
    readonly createdAt: FieldRef<"UserRole", 'DateTime'>
    readonly updatedAt: FieldRef<"UserRole", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserRole findUnique
   */
  export type UserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findUniqueOrThrow
   */
  export type UserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findFirst
   */
  export type UserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findFirstOrThrow
   */
  export type UserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findMany
   */
  export type UserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRoles to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole create
   */
  export type UserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRole.
     */
    data: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
  }

  /**
   * UserRole createMany
   */
  export type UserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRole createManyAndReturn
   */
  export type UserRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRole update
   */
  export type UserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRole.
     */
    data: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
    /**
     * Choose, which UserRole to update.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole updateMany
   */
  export type UserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
  }

  /**
   * UserRole updateManyAndReturn
   */
  export type UserRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
  }

  /**
   * UserRole upsert
   */
  export type UserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRole to update in case it exists.
     */
    where: UserRoleWhereUniqueInput
    /**
     * In case the UserRole found by the `where` argument doesn't exist, create a new UserRole with this data.
     */
    create: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
    /**
     * In case the UserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
  }

  /**
   * UserRole delete
   */
  export type UserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter which UserRole to delete.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole deleteMany
   */
  export type UserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoles to delete
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to delete.
     */
    limit?: number
  }

  /**
   * UserRole.users
   */
  export type UserRole$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * UserRole without action
   */
  export type UserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
  }


  /**
   * Model Host
   */

  export type AggregateHost = {
    _count: HostCountAggregateOutputType | null
    _avg: HostAvgAggregateOutputType | null
    _sum: HostSumAggregateOutputType | null
    _min: HostMinAggregateOutputType | null
    _max: HostMaxAggregateOutputType | null
  }

  export type HostAvgAggregateOutputType = {
    id: number | null
  }

  export type HostSumAggregateOutputType = {
    id: number | null
  }

  export type HostMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HostMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HostCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    phone: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HostAvgAggregateInputType = {
    id?: true
  }

  export type HostSumAggregateInputType = {
    id?: true
  }

  export type HostMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HostMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HostCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Host to aggregate.
     */
    where?: HostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hosts to fetch.
     */
    orderBy?: HostOrderByWithRelationInput | HostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hosts
    **/
    _count?: true | HostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HostMaxAggregateInputType
  }

  export type GetHostAggregateType<T extends HostAggregateArgs> = {
        [P in keyof T & keyof AggregateHost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHost[P]>
      : GetScalarType<T[P], AggregateHost[P]>
  }




  export type HostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HostWhereInput
    orderBy?: HostOrderByWithAggregationInput | HostOrderByWithAggregationInput[]
    by: HostScalarFieldEnum[] | HostScalarFieldEnum
    having?: HostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HostCountAggregateInputType | true
    _avg?: HostAvgAggregateInputType
    _sum?: HostSumAggregateInputType
    _min?: HostMinAggregateInputType
    _max?: HostMaxAggregateInputType
  }

  export type HostGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    email: string
    phone: string | null
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: HostCountAggregateOutputType | null
    _avg: HostAvgAggregateOutputType | null
    _sum: HostSumAggregateOutputType | null
    _min: HostMinAggregateOutputType | null
    _max: HostMaxAggregateOutputType | null
  }

  type GetHostGroupByPayload<T extends HostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HostGroupByOutputType[P]>
            : GetScalarType<T[P], HostGroupByOutputType[P]>
        }
      >
    >


  export type HostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookingHosts?: boolean | Host$bookingHostsArgs<ExtArgs>
    shifts?: boolean | Host$shiftsArgs<ExtArgs>
    _count?: boolean | HostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["host"]>

  export type HostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["host"]>

  export type HostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["host"]>

  export type HostSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "phone" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["host"]>
  export type HostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookingHosts?: boolean | Host$bookingHostsArgs<ExtArgs>
    shifts?: boolean | Host$shiftsArgs<ExtArgs>
    _count?: boolean | HostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Host"
    objects: {
      bookingHosts: Prisma.$BookingHostPayload<ExtArgs>[]
      shifts: Prisma.$ShiftPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      email: string
      phone: string | null
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["host"]>
    composites: {}
  }

  type HostGetPayload<S extends boolean | null | undefined | HostDefaultArgs> = $Result.GetResult<Prisma.$HostPayload, S>

  type HostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HostCountAggregateInputType | true
    }

  export interface HostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Host'], meta: { name: 'Host' } }
    /**
     * Find zero or one Host that matches the filter.
     * @param {HostFindUniqueArgs} args - Arguments to find a Host
     * @example
     * // Get one Host
     * const host = await prisma.host.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HostFindUniqueArgs>(args: SelectSubset<T, HostFindUniqueArgs<ExtArgs>>): Prisma__HostClient<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Host that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HostFindUniqueOrThrowArgs} args - Arguments to find a Host
     * @example
     * // Get one Host
     * const host = await prisma.host.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HostFindUniqueOrThrowArgs>(args: SelectSubset<T, HostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HostClient<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Host that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostFindFirstArgs} args - Arguments to find a Host
     * @example
     * // Get one Host
     * const host = await prisma.host.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HostFindFirstArgs>(args?: SelectSubset<T, HostFindFirstArgs<ExtArgs>>): Prisma__HostClient<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Host that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostFindFirstOrThrowArgs} args - Arguments to find a Host
     * @example
     * // Get one Host
     * const host = await prisma.host.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HostFindFirstOrThrowArgs>(args?: SelectSubset<T, HostFindFirstOrThrowArgs<ExtArgs>>): Prisma__HostClient<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hosts
     * const hosts = await prisma.host.findMany()
     * 
     * // Get first 10 Hosts
     * const hosts = await prisma.host.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hostWithIdOnly = await prisma.host.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HostFindManyArgs>(args?: SelectSubset<T, HostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Host.
     * @param {HostCreateArgs} args - Arguments to create a Host.
     * @example
     * // Create one Host
     * const Host = await prisma.host.create({
     *   data: {
     *     // ... data to create a Host
     *   }
     * })
     * 
     */
    create<T extends HostCreateArgs>(args: SelectSubset<T, HostCreateArgs<ExtArgs>>): Prisma__HostClient<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hosts.
     * @param {HostCreateManyArgs} args - Arguments to create many Hosts.
     * @example
     * // Create many Hosts
     * const host = await prisma.host.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HostCreateManyArgs>(args?: SelectSubset<T, HostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hosts and returns the data saved in the database.
     * @param {HostCreateManyAndReturnArgs} args - Arguments to create many Hosts.
     * @example
     * // Create many Hosts
     * const host = await prisma.host.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hosts and only return the `id`
     * const hostWithIdOnly = await prisma.host.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HostCreateManyAndReturnArgs>(args?: SelectSubset<T, HostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Host.
     * @param {HostDeleteArgs} args - Arguments to delete one Host.
     * @example
     * // Delete one Host
     * const Host = await prisma.host.delete({
     *   where: {
     *     // ... filter to delete one Host
     *   }
     * })
     * 
     */
    delete<T extends HostDeleteArgs>(args: SelectSubset<T, HostDeleteArgs<ExtArgs>>): Prisma__HostClient<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Host.
     * @param {HostUpdateArgs} args - Arguments to update one Host.
     * @example
     * // Update one Host
     * const host = await prisma.host.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HostUpdateArgs>(args: SelectSubset<T, HostUpdateArgs<ExtArgs>>): Prisma__HostClient<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hosts.
     * @param {HostDeleteManyArgs} args - Arguments to filter Hosts to delete.
     * @example
     * // Delete a few Hosts
     * const { count } = await prisma.host.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HostDeleteManyArgs>(args?: SelectSubset<T, HostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hosts
     * const host = await prisma.host.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HostUpdateManyArgs>(args: SelectSubset<T, HostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hosts and returns the data updated in the database.
     * @param {HostUpdateManyAndReturnArgs} args - Arguments to update many Hosts.
     * @example
     * // Update many Hosts
     * const host = await prisma.host.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hosts and only return the `id`
     * const hostWithIdOnly = await prisma.host.updateManyAndReturn({
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
    updateManyAndReturn<T extends HostUpdateManyAndReturnArgs>(args: SelectSubset<T, HostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Host.
     * @param {HostUpsertArgs} args - Arguments to update or create a Host.
     * @example
     * // Update or create a Host
     * const host = await prisma.host.upsert({
     *   create: {
     *     // ... data to create a Host
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Host we want to update
     *   }
     * })
     */
    upsert<T extends HostUpsertArgs>(args: SelectSubset<T, HostUpsertArgs<ExtArgs>>): Prisma__HostClient<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostCountArgs} args - Arguments to filter Hosts to count.
     * @example
     * // Count the number of Hosts
     * const count = await prisma.host.count({
     *   where: {
     *     // ... the filter for the Hosts we want to count
     *   }
     * })
    **/
    count<T extends HostCountArgs>(
      args?: Subset<T, HostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Host.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HostAggregateArgs>(args: Subset<T, HostAggregateArgs>): Prisma.PrismaPromise<GetHostAggregateType<T>>

    /**
     * Group by Host.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostGroupByArgs} args - Group by arguments.
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
      T extends HostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HostGroupByArgs['orderBy'] }
        : { orderBy?: HostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Host model
   */
  readonly fields: HostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Host.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookingHosts<T extends Host$bookingHostsArgs<ExtArgs> = {}>(args?: Subset<T, Host$bookingHostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingHostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shifts<T extends Host$shiftsArgs<ExtArgs> = {}>(args?: Subset<T, Host$shiftsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Host model
   */
  interface HostFieldRefs {
    readonly id: FieldRef<"Host", 'Int'>
    readonly firstName: FieldRef<"Host", 'String'>
    readonly lastName: FieldRef<"Host", 'String'>
    readonly email: FieldRef<"Host", 'String'>
    readonly phone: FieldRef<"Host", 'String'>
    readonly active: FieldRef<"Host", 'Boolean'>
    readonly createdAt: FieldRef<"Host", 'DateTime'>
    readonly updatedAt: FieldRef<"Host", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Host findUnique
   */
  export type HostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Host
     */
    omit?: HostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostInclude<ExtArgs> | null
    /**
     * Filter, which Host to fetch.
     */
    where: HostWhereUniqueInput
  }

  /**
   * Host findUniqueOrThrow
   */
  export type HostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Host
     */
    omit?: HostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostInclude<ExtArgs> | null
    /**
     * Filter, which Host to fetch.
     */
    where: HostWhereUniqueInput
  }

  /**
   * Host findFirst
   */
  export type HostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Host
     */
    omit?: HostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostInclude<ExtArgs> | null
    /**
     * Filter, which Host to fetch.
     */
    where?: HostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hosts to fetch.
     */
    orderBy?: HostOrderByWithRelationInput | HostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hosts.
     */
    cursor?: HostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hosts.
     */
    distinct?: HostScalarFieldEnum | HostScalarFieldEnum[]
  }

  /**
   * Host findFirstOrThrow
   */
  export type HostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Host
     */
    omit?: HostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostInclude<ExtArgs> | null
    /**
     * Filter, which Host to fetch.
     */
    where?: HostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hosts to fetch.
     */
    orderBy?: HostOrderByWithRelationInput | HostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hosts.
     */
    cursor?: HostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hosts.
     */
    distinct?: HostScalarFieldEnum | HostScalarFieldEnum[]
  }

  /**
   * Host findMany
   */
  export type HostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Host
     */
    omit?: HostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostInclude<ExtArgs> | null
    /**
     * Filter, which Hosts to fetch.
     */
    where?: HostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hosts to fetch.
     */
    orderBy?: HostOrderByWithRelationInput | HostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hosts.
     */
    cursor?: HostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hosts.
     */
    skip?: number
    distinct?: HostScalarFieldEnum | HostScalarFieldEnum[]
  }

  /**
   * Host create
   */
  export type HostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Host
     */
    omit?: HostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostInclude<ExtArgs> | null
    /**
     * The data needed to create a Host.
     */
    data: XOR<HostCreateInput, HostUncheckedCreateInput>
  }

  /**
   * Host createMany
   */
  export type HostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hosts.
     */
    data: HostCreateManyInput | HostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Host createManyAndReturn
   */
  export type HostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Host
     */
    omit?: HostOmit<ExtArgs> | null
    /**
     * The data used to create many Hosts.
     */
    data: HostCreateManyInput | HostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Host update
   */
  export type HostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Host
     */
    omit?: HostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostInclude<ExtArgs> | null
    /**
     * The data needed to update a Host.
     */
    data: XOR<HostUpdateInput, HostUncheckedUpdateInput>
    /**
     * Choose, which Host to update.
     */
    where: HostWhereUniqueInput
  }

  /**
   * Host updateMany
   */
  export type HostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hosts.
     */
    data: XOR<HostUpdateManyMutationInput, HostUncheckedUpdateManyInput>
    /**
     * Filter which Hosts to update
     */
    where?: HostWhereInput
    /**
     * Limit how many Hosts to update.
     */
    limit?: number
  }

  /**
   * Host updateManyAndReturn
   */
  export type HostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Host
     */
    omit?: HostOmit<ExtArgs> | null
    /**
     * The data used to update Hosts.
     */
    data: XOR<HostUpdateManyMutationInput, HostUncheckedUpdateManyInput>
    /**
     * Filter which Hosts to update
     */
    where?: HostWhereInput
    /**
     * Limit how many Hosts to update.
     */
    limit?: number
  }

  /**
   * Host upsert
   */
  export type HostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Host
     */
    omit?: HostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostInclude<ExtArgs> | null
    /**
     * The filter to search for the Host to update in case it exists.
     */
    where: HostWhereUniqueInput
    /**
     * In case the Host found by the `where` argument doesn't exist, create a new Host with this data.
     */
    create: XOR<HostCreateInput, HostUncheckedCreateInput>
    /**
     * In case the Host was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HostUpdateInput, HostUncheckedUpdateInput>
  }

  /**
   * Host delete
   */
  export type HostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Host
     */
    omit?: HostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostInclude<ExtArgs> | null
    /**
     * Filter which Host to delete.
     */
    where: HostWhereUniqueInput
  }

  /**
   * Host deleteMany
   */
  export type HostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hosts to delete
     */
    where?: HostWhereInput
    /**
     * Limit how many Hosts to delete.
     */
    limit?: number
  }

  /**
   * Host.bookingHosts
   */
  export type Host$bookingHostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingHost
     */
    select?: BookingHostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingHost
     */
    omit?: BookingHostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingHostInclude<ExtArgs> | null
    where?: BookingHostWhereInput
    orderBy?: BookingHostOrderByWithRelationInput | BookingHostOrderByWithRelationInput[]
    cursor?: BookingHostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingHostScalarFieldEnum | BookingHostScalarFieldEnum[]
  }

  /**
   * Host.shifts
   */
  export type Host$shiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    where?: ShiftWhereInput
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    cursor?: ShiftWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShiftScalarFieldEnum | ShiftScalarFieldEnum[]
  }

  /**
   * Host without action
   */
  export type HostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Host
     */
    omit?: HostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostInclude<ExtArgs> | null
  }


  /**
   * Model Shift
   */

  export type AggregateShift = {
    _count: ShiftCountAggregateOutputType | null
    _avg: ShiftAvgAggregateOutputType | null
    _sum: ShiftSumAggregateOutputType | null
    _min: ShiftMinAggregateOutputType | null
    _max: ShiftMaxAggregateOutputType | null
  }

  export type ShiftAvgAggregateOutputType = {
    id: number | null
    hostId: number | null
    roleId: number | null
  }

  export type ShiftSumAggregateOutputType = {
    id: number | null
    hostId: number | null
    roleId: number | null
  }

  export type ShiftMinAggregateOutputType = {
    id: number | null
    hostId: number | null
    startTime: Date | null
    endTime: Date | null
    roleId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShiftMaxAggregateOutputType = {
    id: number | null
    hostId: number | null
    startTime: Date | null
    endTime: Date | null
    roleId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShiftCountAggregateOutputType = {
    id: number
    hostId: number
    startTime: number
    endTime: number
    roleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShiftAvgAggregateInputType = {
    id?: true
    hostId?: true
    roleId?: true
  }

  export type ShiftSumAggregateInputType = {
    id?: true
    hostId?: true
    roleId?: true
  }

  export type ShiftMinAggregateInputType = {
    id?: true
    hostId?: true
    startTime?: true
    endTime?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShiftMaxAggregateInputType = {
    id?: true
    hostId?: true
    startTime?: true
    endTime?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShiftCountAggregateInputType = {
    id?: true
    hostId?: true
    startTime?: true
    endTime?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShiftAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shift to aggregate.
     */
    where?: ShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shifts to fetch.
     */
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shifts
    **/
    _count?: true | ShiftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShiftAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShiftSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShiftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShiftMaxAggregateInputType
  }

  export type GetShiftAggregateType<T extends ShiftAggregateArgs> = {
        [P in keyof T & keyof AggregateShift]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShift[P]>
      : GetScalarType<T[P], AggregateShift[P]>
  }




  export type ShiftGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftWhereInput
    orderBy?: ShiftOrderByWithAggregationInput | ShiftOrderByWithAggregationInput[]
    by: ShiftScalarFieldEnum[] | ShiftScalarFieldEnum
    having?: ShiftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShiftCountAggregateInputType | true
    _avg?: ShiftAvgAggregateInputType
    _sum?: ShiftSumAggregateInputType
    _min?: ShiftMinAggregateInputType
    _max?: ShiftMaxAggregateInputType
  }

  export type ShiftGroupByOutputType = {
    id: number
    hostId: number | null
    startTime: Date
    endTime: Date
    roleId: number | null
    createdAt: Date
    updatedAt: Date
    _count: ShiftCountAggregateOutputType | null
    _avg: ShiftAvgAggregateOutputType | null
    _sum: ShiftSumAggregateOutputType | null
    _min: ShiftMinAggregateOutputType | null
    _max: ShiftMaxAggregateOutputType | null
  }

  type GetShiftGroupByPayload<T extends ShiftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShiftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShiftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShiftGroupByOutputType[P]>
            : GetScalarType<T[P], ShiftGroupByOutputType[P]>
        }
      >
    >


  export type ShiftSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hostId?: boolean
    startTime?: boolean
    endTime?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    host?: boolean | Shift$hostArgs<ExtArgs>
    role?: boolean | Shift$roleArgs<ExtArgs>
  }, ExtArgs["result"]["shift"]>

  export type ShiftSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hostId?: boolean
    startTime?: boolean
    endTime?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    host?: boolean | Shift$hostArgs<ExtArgs>
    role?: boolean | Shift$roleArgs<ExtArgs>
  }, ExtArgs["result"]["shift"]>

  export type ShiftSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hostId?: boolean
    startTime?: boolean
    endTime?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    host?: boolean | Shift$hostArgs<ExtArgs>
    role?: boolean | Shift$roleArgs<ExtArgs>
  }, ExtArgs["result"]["shift"]>

  export type ShiftSelectScalar = {
    id?: boolean
    hostId?: boolean
    startTime?: boolean
    endTime?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShiftOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hostId" | "startTime" | "endTime" | "roleId" | "createdAt" | "updatedAt", ExtArgs["result"]["shift"]>
  export type ShiftInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host?: boolean | Shift$hostArgs<ExtArgs>
    role?: boolean | Shift$roleArgs<ExtArgs>
  }
  export type ShiftIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host?: boolean | Shift$hostArgs<ExtArgs>
    role?: boolean | Shift$roleArgs<ExtArgs>
  }
  export type ShiftIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host?: boolean | Shift$hostArgs<ExtArgs>
    role?: boolean | Shift$roleArgs<ExtArgs>
  }

  export type $ShiftPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shift"
    objects: {
      host: Prisma.$HostPayload<ExtArgs> | null
      role: Prisma.$ShiftRolePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      hostId: number | null
      startTime: Date
      endTime: Date
      roleId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["shift"]>
    composites: {}
  }

  type ShiftGetPayload<S extends boolean | null | undefined | ShiftDefaultArgs> = $Result.GetResult<Prisma.$ShiftPayload, S>

  type ShiftCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShiftFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShiftCountAggregateInputType | true
    }

  export interface ShiftDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shift'], meta: { name: 'Shift' } }
    /**
     * Find zero or one Shift that matches the filter.
     * @param {ShiftFindUniqueArgs} args - Arguments to find a Shift
     * @example
     * // Get one Shift
     * const shift = await prisma.shift.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShiftFindUniqueArgs>(args: SelectSubset<T, ShiftFindUniqueArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shift that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShiftFindUniqueOrThrowArgs} args - Arguments to find a Shift
     * @example
     * // Get one Shift
     * const shift = await prisma.shift.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShiftFindUniqueOrThrowArgs>(args: SelectSubset<T, ShiftFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shift that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftFindFirstArgs} args - Arguments to find a Shift
     * @example
     * // Get one Shift
     * const shift = await prisma.shift.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShiftFindFirstArgs>(args?: SelectSubset<T, ShiftFindFirstArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shift that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftFindFirstOrThrowArgs} args - Arguments to find a Shift
     * @example
     * // Get one Shift
     * const shift = await prisma.shift.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShiftFindFirstOrThrowArgs>(args?: SelectSubset<T, ShiftFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shifts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shifts
     * const shifts = await prisma.shift.findMany()
     * 
     * // Get first 10 Shifts
     * const shifts = await prisma.shift.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shiftWithIdOnly = await prisma.shift.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShiftFindManyArgs>(args?: SelectSubset<T, ShiftFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shift.
     * @param {ShiftCreateArgs} args - Arguments to create a Shift.
     * @example
     * // Create one Shift
     * const Shift = await prisma.shift.create({
     *   data: {
     *     // ... data to create a Shift
     *   }
     * })
     * 
     */
    create<T extends ShiftCreateArgs>(args: SelectSubset<T, ShiftCreateArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shifts.
     * @param {ShiftCreateManyArgs} args - Arguments to create many Shifts.
     * @example
     * // Create many Shifts
     * const shift = await prisma.shift.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShiftCreateManyArgs>(args?: SelectSubset<T, ShiftCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shifts and returns the data saved in the database.
     * @param {ShiftCreateManyAndReturnArgs} args - Arguments to create many Shifts.
     * @example
     * // Create many Shifts
     * const shift = await prisma.shift.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shifts and only return the `id`
     * const shiftWithIdOnly = await prisma.shift.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShiftCreateManyAndReturnArgs>(args?: SelectSubset<T, ShiftCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shift.
     * @param {ShiftDeleteArgs} args - Arguments to delete one Shift.
     * @example
     * // Delete one Shift
     * const Shift = await prisma.shift.delete({
     *   where: {
     *     // ... filter to delete one Shift
     *   }
     * })
     * 
     */
    delete<T extends ShiftDeleteArgs>(args: SelectSubset<T, ShiftDeleteArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shift.
     * @param {ShiftUpdateArgs} args - Arguments to update one Shift.
     * @example
     * // Update one Shift
     * const shift = await prisma.shift.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShiftUpdateArgs>(args: SelectSubset<T, ShiftUpdateArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shifts.
     * @param {ShiftDeleteManyArgs} args - Arguments to filter Shifts to delete.
     * @example
     * // Delete a few Shifts
     * const { count } = await prisma.shift.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShiftDeleteManyArgs>(args?: SelectSubset<T, ShiftDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shifts
     * const shift = await prisma.shift.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShiftUpdateManyArgs>(args: SelectSubset<T, ShiftUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shifts and returns the data updated in the database.
     * @param {ShiftUpdateManyAndReturnArgs} args - Arguments to update many Shifts.
     * @example
     * // Update many Shifts
     * const shift = await prisma.shift.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shifts and only return the `id`
     * const shiftWithIdOnly = await prisma.shift.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShiftUpdateManyAndReturnArgs>(args: SelectSubset<T, ShiftUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shift.
     * @param {ShiftUpsertArgs} args - Arguments to update or create a Shift.
     * @example
     * // Update or create a Shift
     * const shift = await prisma.shift.upsert({
     *   create: {
     *     // ... data to create a Shift
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shift we want to update
     *   }
     * })
     */
    upsert<T extends ShiftUpsertArgs>(args: SelectSubset<T, ShiftUpsertArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftCountArgs} args - Arguments to filter Shifts to count.
     * @example
     * // Count the number of Shifts
     * const count = await prisma.shift.count({
     *   where: {
     *     // ... the filter for the Shifts we want to count
     *   }
     * })
    **/
    count<T extends ShiftCountArgs>(
      args?: Subset<T, ShiftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShiftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShiftAggregateArgs>(args: Subset<T, ShiftAggregateArgs>): Prisma.PrismaPromise<GetShiftAggregateType<T>>

    /**
     * Group by Shift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftGroupByArgs} args - Group by arguments.
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
      T extends ShiftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShiftGroupByArgs['orderBy'] }
        : { orderBy?: ShiftGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShiftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShiftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shift model
   */
  readonly fields: ShiftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shift.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShiftClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    host<T extends Shift$hostArgs<ExtArgs> = {}>(args?: Subset<T, Shift$hostArgs<ExtArgs>>): Prisma__HostClient<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    role<T extends Shift$roleArgs<ExtArgs> = {}>(args?: Subset<T, Shift$roleArgs<ExtArgs>>): Prisma__ShiftRoleClient<$Result.GetResult<Prisma.$ShiftRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Shift model
   */
  interface ShiftFieldRefs {
    readonly id: FieldRef<"Shift", 'Int'>
    readonly hostId: FieldRef<"Shift", 'Int'>
    readonly startTime: FieldRef<"Shift", 'DateTime'>
    readonly endTime: FieldRef<"Shift", 'DateTime'>
    readonly roleId: FieldRef<"Shift", 'Int'>
    readonly createdAt: FieldRef<"Shift", 'DateTime'>
    readonly updatedAt: FieldRef<"Shift", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Shift findUnique
   */
  export type ShiftFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * Filter, which Shift to fetch.
     */
    where: ShiftWhereUniqueInput
  }

  /**
   * Shift findUniqueOrThrow
   */
  export type ShiftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * Filter, which Shift to fetch.
     */
    where: ShiftWhereUniqueInput
  }

  /**
   * Shift findFirst
   */
  export type ShiftFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * Filter, which Shift to fetch.
     */
    where?: ShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shifts to fetch.
     */
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shifts.
     */
    cursor?: ShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shifts.
     */
    distinct?: ShiftScalarFieldEnum | ShiftScalarFieldEnum[]
  }

  /**
   * Shift findFirstOrThrow
   */
  export type ShiftFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * Filter, which Shift to fetch.
     */
    where?: ShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shifts to fetch.
     */
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shifts.
     */
    cursor?: ShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shifts.
     */
    distinct?: ShiftScalarFieldEnum | ShiftScalarFieldEnum[]
  }

  /**
   * Shift findMany
   */
  export type ShiftFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * Filter, which Shifts to fetch.
     */
    where?: ShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shifts to fetch.
     */
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shifts.
     */
    cursor?: ShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shifts.
     */
    skip?: number
    distinct?: ShiftScalarFieldEnum | ShiftScalarFieldEnum[]
  }

  /**
   * Shift create
   */
  export type ShiftCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * The data needed to create a Shift.
     */
    data: XOR<ShiftCreateInput, ShiftUncheckedCreateInput>
  }

  /**
   * Shift createMany
   */
  export type ShiftCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shifts.
     */
    data: ShiftCreateManyInput | ShiftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shift createManyAndReturn
   */
  export type ShiftCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * The data used to create many Shifts.
     */
    data: ShiftCreateManyInput | ShiftCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shift update
   */
  export type ShiftUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * The data needed to update a Shift.
     */
    data: XOR<ShiftUpdateInput, ShiftUncheckedUpdateInput>
    /**
     * Choose, which Shift to update.
     */
    where: ShiftWhereUniqueInput
  }

  /**
   * Shift updateMany
   */
  export type ShiftUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shifts.
     */
    data: XOR<ShiftUpdateManyMutationInput, ShiftUncheckedUpdateManyInput>
    /**
     * Filter which Shifts to update
     */
    where?: ShiftWhereInput
    /**
     * Limit how many Shifts to update.
     */
    limit?: number
  }

  /**
   * Shift updateManyAndReturn
   */
  export type ShiftUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * The data used to update Shifts.
     */
    data: XOR<ShiftUpdateManyMutationInput, ShiftUncheckedUpdateManyInput>
    /**
     * Filter which Shifts to update
     */
    where?: ShiftWhereInput
    /**
     * Limit how many Shifts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shift upsert
   */
  export type ShiftUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * The filter to search for the Shift to update in case it exists.
     */
    where: ShiftWhereUniqueInput
    /**
     * In case the Shift found by the `where` argument doesn't exist, create a new Shift with this data.
     */
    create: XOR<ShiftCreateInput, ShiftUncheckedCreateInput>
    /**
     * In case the Shift was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShiftUpdateInput, ShiftUncheckedUpdateInput>
  }

  /**
   * Shift delete
   */
  export type ShiftDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * Filter which Shift to delete.
     */
    where: ShiftWhereUniqueInput
  }

  /**
   * Shift deleteMany
   */
  export type ShiftDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shifts to delete
     */
    where?: ShiftWhereInput
    /**
     * Limit how many Shifts to delete.
     */
    limit?: number
  }

  /**
   * Shift.host
   */
  export type Shift$hostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Host
     */
    omit?: HostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostInclude<ExtArgs> | null
    where?: HostWhereInput
  }

  /**
   * Shift.role
   */
  export type Shift$roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftRole
     */
    select?: ShiftRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftRole
     */
    omit?: ShiftRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftRoleInclude<ExtArgs> | null
    where?: ShiftRoleWhereInput
  }

  /**
   * Shift without action
   */
  export type ShiftDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
  }


  /**
   * Model ShiftRole
   */

  export type AggregateShiftRole = {
    _count: ShiftRoleCountAggregateOutputType | null
    _avg: ShiftRoleAvgAggregateOutputType | null
    _sum: ShiftRoleSumAggregateOutputType | null
    _min: ShiftRoleMinAggregateOutputType | null
    _max: ShiftRoleMaxAggregateOutputType | null
  }

  export type ShiftRoleAvgAggregateOutputType = {
    id: number | null
  }

  export type ShiftRoleSumAggregateOutputType = {
    id: number | null
  }

  export type ShiftRoleMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShiftRoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShiftRoleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShiftRoleAvgAggregateInputType = {
    id?: true
  }

  export type ShiftRoleSumAggregateInputType = {
    id?: true
  }

  export type ShiftRoleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShiftRoleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShiftRoleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShiftRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShiftRole to aggregate.
     */
    where?: ShiftRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftRoles to fetch.
     */
    orderBy?: ShiftRoleOrderByWithRelationInput | ShiftRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShiftRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShiftRoles
    **/
    _count?: true | ShiftRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShiftRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShiftRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShiftRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShiftRoleMaxAggregateInputType
  }

  export type GetShiftRoleAggregateType<T extends ShiftRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateShiftRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShiftRole[P]>
      : GetScalarType<T[P], AggregateShiftRole[P]>
  }




  export type ShiftRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftRoleWhereInput
    orderBy?: ShiftRoleOrderByWithAggregationInput | ShiftRoleOrderByWithAggregationInput[]
    by: ShiftRoleScalarFieldEnum[] | ShiftRoleScalarFieldEnum
    having?: ShiftRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShiftRoleCountAggregateInputType | true
    _avg?: ShiftRoleAvgAggregateInputType
    _sum?: ShiftRoleSumAggregateInputType
    _min?: ShiftRoleMinAggregateInputType
    _max?: ShiftRoleMaxAggregateInputType
  }

  export type ShiftRoleGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: ShiftRoleCountAggregateOutputType | null
    _avg: ShiftRoleAvgAggregateOutputType | null
    _sum: ShiftRoleSumAggregateOutputType | null
    _min: ShiftRoleMinAggregateOutputType | null
    _max: ShiftRoleMaxAggregateOutputType | null
  }

  type GetShiftRoleGroupByPayload<T extends ShiftRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShiftRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShiftRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShiftRoleGroupByOutputType[P]>
            : GetScalarType<T[P], ShiftRoleGroupByOutputType[P]>
        }
      >
    >


  export type ShiftRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shifts?: boolean | ShiftRole$shiftsArgs<ExtArgs>
    _count?: boolean | ShiftRoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shiftRole"]>

  export type ShiftRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["shiftRole"]>

  export type ShiftRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["shiftRole"]>

  export type ShiftRoleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShiftRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["shiftRole"]>
  export type ShiftRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shifts?: boolean | ShiftRole$shiftsArgs<ExtArgs>
    _count?: boolean | ShiftRoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShiftRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ShiftRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ShiftRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShiftRole"
    objects: {
      shifts: Prisma.$ShiftPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["shiftRole"]>
    composites: {}
  }

  type ShiftRoleGetPayload<S extends boolean | null | undefined | ShiftRoleDefaultArgs> = $Result.GetResult<Prisma.$ShiftRolePayload, S>

  type ShiftRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShiftRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShiftRoleCountAggregateInputType | true
    }

  export interface ShiftRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShiftRole'], meta: { name: 'ShiftRole' } }
    /**
     * Find zero or one ShiftRole that matches the filter.
     * @param {ShiftRoleFindUniqueArgs} args - Arguments to find a ShiftRole
     * @example
     * // Get one ShiftRole
     * const shiftRole = await prisma.shiftRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShiftRoleFindUniqueArgs>(args: SelectSubset<T, ShiftRoleFindUniqueArgs<ExtArgs>>): Prisma__ShiftRoleClient<$Result.GetResult<Prisma.$ShiftRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShiftRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShiftRoleFindUniqueOrThrowArgs} args - Arguments to find a ShiftRole
     * @example
     * // Get one ShiftRole
     * const shiftRole = await prisma.shiftRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShiftRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, ShiftRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShiftRoleClient<$Result.GetResult<Prisma.$ShiftRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShiftRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftRoleFindFirstArgs} args - Arguments to find a ShiftRole
     * @example
     * // Get one ShiftRole
     * const shiftRole = await prisma.shiftRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShiftRoleFindFirstArgs>(args?: SelectSubset<T, ShiftRoleFindFirstArgs<ExtArgs>>): Prisma__ShiftRoleClient<$Result.GetResult<Prisma.$ShiftRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShiftRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftRoleFindFirstOrThrowArgs} args - Arguments to find a ShiftRole
     * @example
     * // Get one ShiftRole
     * const shiftRole = await prisma.shiftRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShiftRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, ShiftRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShiftRoleClient<$Result.GetResult<Prisma.$ShiftRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShiftRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShiftRoles
     * const shiftRoles = await prisma.shiftRole.findMany()
     * 
     * // Get first 10 ShiftRoles
     * const shiftRoles = await prisma.shiftRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shiftRoleWithIdOnly = await prisma.shiftRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShiftRoleFindManyArgs>(args?: SelectSubset<T, ShiftRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShiftRole.
     * @param {ShiftRoleCreateArgs} args - Arguments to create a ShiftRole.
     * @example
     * // Create one ShiftRole
     * const ShiftRole = await prisma.shiftRole.create({
     *   data: {
     *     // ... data to create a ShiftRole
     *   }
     * })
     * 
     */
    create<T extends ShiftRoleCreateArgs>(args: SelectSubset<T, ShiftRoleCreateArgs<ExtArgs>>): Prisma__ShiftRoleClient<$Result.GetResult<Prisma.$ShiftRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShiftRoles.
     * @param {ShiftRoleCreateManyArgs} args - Arguments to create many ShiftRoles.
     * @example
     * // Create many ShiftRoles
     * const shiftRole = await prisma.shiftRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShiftRoleCreateManyArgs>(args?: SelectSubset<T, ShiftRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShiftRoles and returns the data saved in the database.
     * @param {ShiftRoleCreateManyAndReturnArgs} args - Arguments to create many ShiftRoles.
     * @example
     * // Create many ShiftRoles
     * const shiftRole = await prisma.shiftRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShiftRoles and only return the `id`
     * const shiftRoleWithIdOnly = await prisma.shiftRole.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShiftRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, ShiftRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShiftRole.
     * @param {ShiftRoleDeleteArgs} args - Arguments to delete one ShiftRole.
     * @example
     * // Delete one ShiftRole
     * const ShiftRole = await prisma.shiftRole.delete({
     *   where: {
     *     // ... filter to delete one ShiftRole
     *   }
     * })
     * 
     */
    delete<T extends ShiftRoleDeleteArgs>(args: SelectSubset<T, ShiftRoleDeleteArgs<ExtArgs>>): Prisma__ShiftRoleClient<$Result.GetResult<Prisma.$ShiftRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShiftRole.
     * @param {ShiftRoleUpdateArgs} args - Arguments to update one ShiftRole.
     * @example
     * // Update one ShiftRole
     * const shiftRole = await prisma.shiftRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShiftRoleUpdateArgs>(args: SelectSubset<T, ShiftRoleUpdateArgs<ExtArgs>>): Prisma__ShiftRoleClient<$Result.GetResult<Prisma.$ShiftRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShiftRoles.
     * @param {ShiftRoleDeleteManyArgs} args - Arguments to filter ShiftRoles to delete.
     * @example
     * // Delete a few ShiftRoles
     * const { count } = await prisma.shiftRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShiftRoleDeleteManyArgs>(args?: SelectSubset<T, ShiftRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShiftRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShiftRoles
     * const shiftRole = await prisma.shiftRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShiftRoleUpdateManyArgs>(args: SelectSubset<T, ShiftRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShiftRoles and returns the data updated in the database.
     * @param {ShiftRoleUpdateManyAndReturnArgs} args - Arguments to update many ShiftRoles.
     * @example
     * // Update many ShiftRoles
     * const shiftRole = await prisma.shiftRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShiftRoles and only return the `id`
     * const shiftRoleWithIdOnly = await prisma.shiftRole.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShiftRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, ShiftRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShiftRole.
     * @param {ShiftRoleUpsertArgs} args - Arguments to update or create a ShiftRole.
     * @example
     * // Update or create a ShiftRole
     * const shiftRole = await prisma.shiftRole.upsert({
     *   create: {
     *     // ... data to create a ShiftRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShiftRole we want to update
     *   }
     * })
     */
    upsert<T extends ShiftRoleUpsertArgs>(args: SelectSubset<T, ShiftRoleUpsertArgs<ExtArgs>>): Prisma__ShiftRoleClient<$Result.GetResult<Prisma.$ShiftRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShiftRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftRoleCountArgs} args - Arguments to filter ShiftRoles to count.
     * @example
     * // Count the number of ShiftRoles
     * const count = await prisma.shiftRole.count({
     *   where: {
     *     // ... the filter for the ShiftRoles we want to count
     *   }
     * })
    **/
    count<T extends ShiftRoleCountArgs>(
      args?: Subset<T, ShiftRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShiftRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShiftRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShiftRoleAggregateArgs>(args: Subset<T, ShiftRoleAggregateArgs>): Prisma.PrismaPromise<GetShiftRoleAggregateType<T>>

    /**
     * Group by ShiftRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftRoleGroupByArgs} args - Group by arguments.
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
      T extends ShiftRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShiftRoleGroupByArgs['orderBy'] }
        : { orderBy?: ShiftRoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShiftRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShiftRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShiftRole model
   */
  readonly fields: ShiftRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShiftRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShiftRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shifts<T extends ShiftRole$shiftsArgs<ExtArgs> = {}>(args?: Subset<T, ShiftRole$shiftsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ShiftRole model
   */
  interface ShiftRoleFieldRefs {
    readonly id: FieldRef<"ShiftRole", 'Int'>
    readonly name: FieldRef<"ShiftRole", 'String'>
    readonly description: FieldRef<"ShiftRole", 'String'>
    readonly createdAt: FieldRef<"ShiftRole", 'DateTime'>
    readonly updatedAt: FieldRef<"ShiftRole", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShiftRole findUnique
   */
  export type ShiftRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftRole
     */
    select?: ShiftRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftRole
     */
    omit?: ShiftRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftRoleInclude<ExtArgs> | null
    /**
     * Filter, which ShiftRole to fetch.
     */
    where: ShiftRoleWhereUniqueInput
  }

  /**
   * ShiftRole findUniqueOrThrow
   */
  export type ShiftRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftRole
     */
    select?: ShiftRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftRole
     */
    omit?: ShiftRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftRoleInclude<ExtArgs> | null
    /**
     * Filter, which ShiftRole to fetch.
     */
    where: ShiftRoleWhereUniqueInput
  }

  /**
   * ShiftRole findFirst
   */
  export type ShiftRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftRole
     */
    select?: ShiftRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftRole
     */
    omit?: ShiftRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftRoleInclude<ExtArgs> | null
    /**
     * Filter, which ShiftRole to fetch.
     */
    where?: ShiftRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftRoles to fetch.
     */
    orderBy?: ShiftRoleOrderByWithRelationInput | ShiftRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShiftRoles.
     */
    cursor?: ShiftRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShiftRoles.
     */
    distinct?: ShiftRoleScalarFieldEnum | ShiftRoleScalarFieldEnum[]
  }

  /**
   * ShiftRole findFirstOrThrow
   */
  export type ShiftRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftRole
     */
    select?: ShiftRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftRole
     */
    omit?: ShiftRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftRoleInclude<ExtArgs> | null
    /**
     * Filter, which ShiftRole to fetch.
     */
    where?: ShiftRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftRoles to fetch.
     */
    orderBy?: ShiftRoleOrderByWithRelationInput | ShiftRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShiftRoles.
     */
    cursor?: ShiftRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShiftRoles.
     */
    distinct?: ShiftRoleScalarFieldEnum | ShiftRoleScalarFieldEnum[]
  }

  /**
   * ShiftRole findMany
   */
  export type ShiftRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftRole
     */
    select?: ShiftRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftRole
     */
    omit?: ShiftRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftRoleInclude<ExtArgs> | null
    /**
     * Filter, which ShiftRoles to fetch.
     */
    where?: ShiftRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftRoles to fetch.
     */
    orderBy?: ShiftRoleOrderByWithRelationInput | ShiftRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShiftRoles.
     */
    cursor?: ShiftRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftRoles.
     */
    skip?: number
    distinct?: ShiftRoleScalarFieldEnum | ShiftRoleScalarFieldEnum[]
  }

  /**
   * ShiftRole create
   */
  export type ShiftRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftRole
     */
    select?: ShiftRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftRole
     */
    omit?: ShiftRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a ShiftRole.
     */
    data: XOR<ShiftRoleCreateInput, ShiftRoleUncheckedCreateInput>
  }

  /**
   * ShiftRole createMany
   */
  export type ShiftRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShiftRoles.
     */
    data: ShiftRoleCreateManyInput | ShiftRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShiftRole createManyAndReturn
   */
  export type ShiftRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftRole
     */
    select?: ShiftRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftRole
     */
    omit?: ShiftRoleOmit<ExtArgs> | null
    /**
     * The data used to create many ShiftRoles.
     */
    data: ShiftRoleCreateManyInput | ShiftRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShiftRole update
   */
  export type ShiftRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftRole
     */
    select?: ShiftRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftRole
     */
    omit?: ShiftRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a ShiftRole.
     */
    data: XOR<ShiftRoleUpdateInput, ShiftRoleUncheckedUpdateInput>
    /**
     * Choose, which ShiftRole to update.
     */
    where: ShiftRoleWhereUniqueInput
  }

  /**
   * ShiftRole updateMany
   */
  export type ShiftRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShiftRoles.
     */
    data: XOR<ShiftRoleUpdateManyMutationInput, ShiftRoleUncheckedUpdateManyInput>
    /**
     * Filter which ShiftRoles to update
     */
    where?: ShiftRoleWhereInput
    /**
     * Limit how many ShiftRoles to update.
     */
    limit?: number
  }

  /**
   * ShiftRole updateManyAndReturn
   */
  export type ShiftRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftRole
     */
    select?: ShiftRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftRole
     */
    omit?: ShiftRoleOmit<ExtArgs> | null
    /**
     * The data used to update ShiftRoles.
     */
    data: XOR<ShiftRoleUpdateManyMutationInput, ShiftRoleUncheckedUpdateManyInput>
    /**
     * Filter which ShiftRoles to update
     */
    where?: ShiftRoleWhereInput
    /**
     * Limit how many ShiftRoles to update.
     */
    limit?: number
  }

  /**
   * ShiftRole upsert
   */
  export type ShiftRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftRole
     */
    select?: ShiftRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftRole
     */
    omit?: ShiftRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the ShiftRole to update in case it exists.
     */
    where: ShiftRoleWhereUniqueInput
    /**
     * In case the ShiftRole found by the `where` argument doesn't exist, create a new ShiftRole with this data.
     */
    create: XOR<ShiftRoleCreateInput, ShiftRoleUncheckedCreateInput>
    /**
     * In case the ShiftRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShiftRoleUpdateInput, ShiftRoleUncheckedUpdateInput>
  }

  /**
   * ShiftRole delete
   */
  export type ShiftRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftRole
     */
    select?: ShiftRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftRole
     */
    omit?: ShiftRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftRoleInclude<ExtArgs> | null
    /**
     * Filter which ShiftRole to delete.
     */
    where: ShiftRoleWhereUniqueInput
  }

  /**
   * ShiftRole deleteMany
   */
  export type ShiftRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShiftRoles to delete
     */
    where?: ShiftRoleWhereInput
    /**
     * Limit how many ShiftRoles to delete.
     */
    limit?: number
  }

  /**
   * ShiftRole.shifts
   */
  export type ShiftRole$shiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    where?: ShiftWhereInput
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    cursor?: ShiftWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShiftScalarFieldEnum | ShiftScalarFieldEnum[]
  }

  /**
   * ShiftRole without action
   */
  export type ShiftRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftRole
     */
    select?: ShiftRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftRole
     */
    omit?: ShiftRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftRoleInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    id: number | null
    playersCount: number | null
    hostsRequired: number | null
    customerId: number | null
  }

  export type BookingSumAggregateOutputType = {
    id: number | null
    playersCount: number | null
    hostsRequired: number | null
    customerId: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: number | null
    venue: string | null
    dayOfWeek: string | null
    startTime: Date | null
    endTime: Date | null
    playersCount: number | null
    hostsRequired: number | null
    food_required: boolean | null
    is_b2b: boolean | null
    status: string | null
    eposFamily: string | null
    bookingDescription: string | null
    notes: string | null
    customerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: number | null
    venue: string | null
    dayOfWeek: string | null
    startTime: Date | null
    endTime: Date | null
    playersCount: number | null
    hostsRequired: number | null
    food_required: boolean | null
    is_b2b: boolean | null
    status: string | null
    eposFamily: string | null
    bookingDescription: string | null
    notes: string | null
    customerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    venue: number
    dayOfWeek: number
    startTime: number
    endTime: number
    playersCount: number
    hostsRequired: number
    food_required: number
    is_b2b: number
    status: number
    eposFamily: number
    bookingDescription: number
    notes: number
    customerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    id?: true
    playersCount?: true
    hostsRequired?: true
    customerId?: true
  }

  export type BookingSumAggregateInputType = {
    id?: true
    playersCount?: true
    hostsRequired?: true
    customerId?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    venue?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    playersCount?: true
    hostsRequired?: true
    food_required?: true
    is_b2b?: true
    status?: true
    eposFamily?: true
    bookingDescription?: true
    notes?: true
    customerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    venue?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    playersCount?: true
    hostsRequired?: true
    food_required?: true
    is_b2b?: true
    status?: true
    eposFamily?: true
    bookingDescription?: true
    notes?: true
    customerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    venue?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    playersCount?: true
    hostsRequired?: true
    food_required?: true
    is_b2b?: true
    status?: true
    eposFamily?: true
    bookingDescription?: true
    notes?: true
    customerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: number
    venue: string | null
    dayOfWeek: string | null
    startTime: Date
    endTime: Date
    playersCount: number
    hostsRequired: number
    food_required: boolean
    is_b2b: boolean
    status: string | null
    eposFamily: string | null
    bookingDescription: string | null
    notes: string | null
    customerId: number | null
    createdAt: Date
    updatedAt: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venue?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    playersCount?: boolean
    hostsRequired?: boolean
    food_required?: boolean
    is_b2b?: boolean
    status?: boolean
    eposFamily?: boolean
    bookingDescription?: boolean
    notes?: boolean
    customerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | Booking$customerArgs<ExtArgs>
    foodItems?: boolean | Booking$foodItemsArgs<ExtArgs>
    bookingHosts?: boolean | Booking$bookingHostsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venue?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    playersCount?: boolean
    hostsRequired?: boolean
    food_required?: boolean
    is_b2b?: boolean
    status?: boolean
    eposFamily?: boolean
    bookingDescription?: boolean
    notes?: boolean
    customerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | Booking$customerArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venue?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    playersCount?: boolean
    hostsRequired?: boolean
    food_required?: boolean
    is_b2b?: boolean
    status?: boolean
    eposFamily?: boolean
    bookingDescription?: boolean
    notes?: boolean
    customerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | Booking$customerArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    venue?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    playersCount?: boolean
    hostsRequired?: boolean
    food_required?: boolean
    is_b2b?: boolean
    status?: boolean
    eposFamily?: boolean
    bookingDescription?: boolean
    notes?: boolean
    customerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "venue" | "dayOfWeek" | "startTime" | "endTime" | "playersCount" | "hostsRequired" | "food_required" | "is_b2b" | "status" | "eposFamily" | "bookingDescription" | "notes" | "customerId" | "createdAt" | "updatedAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | Booking$customerArgs<ExtArgs>
    foodItems?: boolean | Booking$foodItemsArgs<ExtArgs>
    bookingHosts?: boolean | Booking$bookingHostsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | Booking$customerArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | Booking$customerArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs> | null
      foodItems: Prisma.$BookingFoodItemPayload<ExtArgs>[]
      bookingHosts: Prisma.$BookingHostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      venue: string | null
      dayOfWeek: string | null
      startTime: Date
      endTime: Date
      playersCount: number
      hostsRequired: number
      food_required: boolean
      is_b2b: boolean
      status: string | null
      eposFamily: string | null
      bookingDescription: string | null
      notes: string | null
      customerId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends Booking$customerArgs<ExtArgs> = {}>(args?: Subset<T, Booking$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    foodItems<T extends Booking$foodItemsArgs<ExtArgs> = {}>(args?: Subset<T, Booking$foodItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingFoodItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookingHosts<T extends Booking$bookingHostsArgs<ExtArgs> = {}>(args?: Subset<T, Booking$bookingHostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingHostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'Int'>
    readonly venue: FieldRef<"Booking", 'String'>
    readonly dayOfWeek: FieldRef<"Booking", 'String'>
    readonly startTime: FieldRef<"Booking", 'DateTime'>
    readonly endTime: FieldRef<"Booking", 'DateTime'>
    readonly playersCount: FieldRef<"Booking", 'Int'>
    readonly hostsRequired: FieldRef<"Booking", 'Int'>
    readonly food_required: FieldRef<"Booking", 'Boolean'>
    readonly is_b2b: FieldRef<"Booking", 'Boolean'>
    readonly status: FieldRef<"Booking", 'String'>
    readonly eposFamily: FieldRef<"Booking", 'String'>
    readonly bookingDescription: FieldRef<"Booking", 'String'>
    readonly notes: FieldRef<"Booking", 'String'>
    readonly customerId: FieldRef<"Booking", 'Int'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.customer
   */
  export type Booking$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
  }

  /**
   * Booking.foodItems
   */
  export type Booking$foodItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingFoodItem
     */
    select?: BookingFoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingFoodItem
     */
    omit?: BookingFoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingFoodItemInclude<ExtArgs> | null
    where?: BookingFoodItemWhereInput
    orderBy?: BookingFoodItemOrderByWithRelationInput | BookingFoodItemOrderByWithRelationInput[]
    cursor?: BookingFoodItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingFoodItemScalarFieldEnum | BookingFoodItemScalarFieldEnum[]
  }

  /**
   * Booking.bookingHosts
   */
  export type Booking$bookingHostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingHost
     */
    select?: BookingHostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingHost
     */
    omit?: BookingHostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingHostInclude<ExtArgs> | null
    where?: BookingHostWhereInput
    orderBy?: BookingHostOrderByWithRelationInput | BookingHostOrderByWithRelationInput[]
    cursor?: BookingHostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingHostScalarFieldEnum | BookingHostScalarFieldEnum[]
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model Package
   */

  export type AggregatePackage = {
    _count: PackageCountAggregateOutputType | null
    _avg: PackageAvgAggregateOutputType | null
    _sum: PackageSumAggregateOutputType | null
    _min: PackageMinAggregateOutputType | null
    _max: PackageMaxAggregateOutputType | null
  }

  export type PackageAvgAggregateOutputType = {
    id: number | null
    playTimeMin: number | null
    visitDurationMin: number | null
    pricePerPlayer: Decimal | null
  }

  export type PackageSumAggregateOutputType = {
    id: number | null
    playTimeMin: number | null
    visitDurationMin: number | null
    pricePerPlayer: Decimal | null
  }

  export type PackageMinAggregateOutputType = {
    id: number | null
    name: string | null
    category: $Enums.PackageCategory | null
    groupType: $Enums.GroupType | null
    playTimeMin: number | null
    visitDurationMin: number | null
    pricePerPlayer: Decimal | null
    gameSelection: string | null
    freeDrink: boolean | null
    freeSupervisor: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PackageMaxAggregateOutputType = {
    id: number | null
    name: string | null
    category: $Enums.PackageCategory | null
    groupType: $Enums.GroupType | null
    playTimeMin: number | null
    visitDurationMin: number | null
    pricePerPlayer: Decimal | null
    gameSelection: string | null
    freeDrink: boolean | null
    freeSupervisor: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PackageCountAggregateOutputType = {
    id: number
    name: number
    category: number
    groupType: number
    playTimeMin: number
    visitDurationMin: number
    pricePerPlayer: number
    gameSelection: number
    freeDrink: number
    freeSupervisor: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PackageAvgAggregateInputType = {
    id?: true
    playTimeMin?: true
    visitDurationMin?: true
    pricePerPlayer?: true
  }

  export type PackageSumAggregateInputType = {
    id?: true
    playTimeMin?: true
    visitDurationMin?: true
    pricePerPlayer?: true
  }

  export type PackageMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    groupType?: true
    playTimeMin?: true
    visitDurationMin?: true
    pricePerPlayer?: true
    gameSelection?: true
    freeDrink?: true
    freeSupervisor?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PackageMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    groupType?: true
    playTimeMin?: true
    visitDurationMin?: true
    pricePerPlayer?: true
    gameSelection?: true
    freeDrink?: true
    freeSupervisor?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PackageCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    groupType?: true
    playTimeMin?: true
    visitDurationMin?: true
    pricePerPlayer?: true
    gameSelection?: true
    freeDrink?: true
    freeSupervisor?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PackageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Package to aggregate.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Packages
    **/
    _count?: true | PackageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PackageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PackageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PackageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PackageMaxAggregateInputType
  }

  export type GetPackageAggregateType<T extends PackageAggregateArgs> = {
        [P in keyof T & keyof AggregatePackage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePackage[P]>
      : GetScalarType<T[P], AggregatePackage[P]>
  }




  export type PackageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageWhereInput
    orderBy?: PackageOrderByWithAggregationInput | PackageOrderByWithAggregationInput[]
    by: PackageScalarFieldEnum[] | PackageScalarFieldEnum
    having?: PackageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PackageCountAggregateInputType | true
    _avg?: PackageAvgAggregateInputType
    _sum?: PackageSumAggregateInputType
    _min?: PackageMinAggregateInputType
    _max?: PackageMaxAggregateInputType
  }

  export type PackageGroupByOutputType = {
    id: number
    name: string
    category: $Enums.PackageCategory
    groupType: $Enums.GroupType
    playTimeMin: number
    visitDurationMin: number
    pricePerPlayer: Decimal
    gameSelection: string | null
    freeDrink: boolean
    freeSupervisor: boolean
    createdAt: Date
    updatedAt: Date
    _count: PackageCountAggregateOutputType | null
    _avg: PackageAvgAggregateOutputType | null
    _sum: PackageSumAggregateOutputType | null
    _min: PackageMinAggregateOutputType | null
    _max: PackageMaxAggregateOutputType | null
  }

  type GetPackageGroupByPayload<T extends PackageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PackageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PackageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PackageGroupByOutputType[P]>
            : GetScalarType<T[P], PackageGroupByOutputType[P]>
        }
      >
    >


  export type PackageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    groupType?: boolean
    playTimeMin?: boolean
    visitDurationMin?: boolean
    pricePerPlayer?: boolean
    gameSelection?: boolean
    freeDrink?: boolean
    freeSupervisor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["package"]>

  export type PackageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    groupType?: boolean
    playTimeMin?: boolean
    visitDurationMin?: boolean
    pricePerPlayer?: boolean
    gameSelection?: boolean
    freeDrink?: boolean
    freeSupervisor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["package"]>

  export type PackageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    groupType?: boolean
    playTimeMin?: boolean
    visitDurationMin?: boolean
    pricePerPlayer?: boolean
    gameSelection?: boolean
    freeDrink?: boolean
    freeSupervisor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["package"]>

  export type PackageSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    groupType?: boolean
    playTimeMin?: boolean
    visitDurationMin?: boolean
    pricePerPlayer?: boolean
    gameSelection?: boolean
    freeDrink?: boolean
    freeSupervisor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PackageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category" | "groupType" | "playTimeMin" | "visitDurationMin" | "pricePerPlayer" | "gameSelection" | "freeDrink" | "freeSupervisor" | "createdAt" | "updatedAt", ExtArgs["result"]["package"]>

  export type $PackagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Package"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      category: $Enums.PackageCategory
      groupType: $Enums.GroupType
      playTimeMin: number
      visitDurationMin: number
      pricePerPlayer: Prisma.Decimal
      gameSelection: string | null
      freeDrink: boolean
      freeSupervisor: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["package"]>
    composites: {}
  }

  type PackageGetPayload<S extends boolean | null | undefined | PackageDefaultArgs> = $Result.GetResult<Prisma.$PackagePayload, S>

  type PackageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PackageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PackageCountAggregateInputType | true
    }

  export interface PackageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Package'], meta: { name: 'Package' } }
    /**
     * Find zero or one Package that matches the filter.
     * @param {PackageFindUniqueArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PackageFindUniqueArgs>(args: SelectSubset<T, PackageFindUniqueArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Package that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PackageFindUniqueOrThrowArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PackageFindUniqueOrThrowArgs>(args: SelectSubset<T, PackageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Package that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindFirstArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PackageFindFirstArgs>(args?: SelectSubset<T, PackageFindFirstArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Package that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindFirstOrThrowArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PackageFindFirstOrThrowArgs>(args?: SelectSubset<T, PackageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Packages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Packages
     * const packages = await prisma.package.findMany()
     * 
     * // Get first 10 Packages
     * const packages = await prisma.package.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const packageWithIdOnly = await prisma.package.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PackageFindManyArgs>(args?: SelectSubset<T, PackageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Package.
     * @param {PackageCreateArgs} args - Arguments to create a Package.
     * @example
     * // Create one Package
     * const Package = await prisma.package.create({
     *   data: {
     *     // ... data to create a Package
     *   }
     * })
     * 
     */
    create<T extends PackageCreateArgs>(args: SelectSubset<T, PackageCreateArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Packages.
     * @param {PackageCreateManyArgs} args - Arguments to create many Packages.
     * @example
     * // Create many Packages
     * const package = await prisma.package.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PackageCreateManyArgs>(args?: SelectSubset<T, PackageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Packages and returns the data saved in the database.
     * @param {PackageCreateManyAndReturnArgs} args - Arguments to create many Packages.
     * @example
     * // Create many Packages
     * const package = await prisma.package.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Packages and only return the `id`
     * const packageWithIdOnly = await prisma.package.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PackageCreateManyAndReturnArgs>(args?: SelectSubset<T, PackageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Package.
     * @param {PackageDeleteArgs} args - Arguments to delete one Package.
     * @example
     * // Delete one Package
     * const Package = await prisma.package.delete({
     *   where: {
     *     // ... filter to delete one Package
     *   }
     * })
     * 
     */
    delete<T extends PackageDeleteArgs>(args: SelectSubset<T, PackageDeleteArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Package.
     * @param {PackageUpdateArgs} args - Arguments to update one Package.
     * @example
     * // Update one Package
     * const package = await prisma.package.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PackageUpdateArgs>(args: SelectSubset<T, PackageUpdateArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Packages.
     * @param {PackageDeleteManyArgs} args - Arguments to filter Packages to delete.
     * @example
     * // Delete a few Packages
     * const { count } = await prisma.package.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PackageDeleteManyArgs>(args?: SelectSubset<T, PackageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Packages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Packages
     * const package = await prisma.package.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PackageUpdateManyArgs>(args: SelectSubset<T, PackageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Packages and returns the data updated in the database.
     * @param {PackageUpdateManyAndReturnArgs} args - Arguments to update many Packages.
     * @example
     * // Update many Packages
     * const package = await prisma.package.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Packages and only return the `id`
     * const packageWithIdOnly = await prisma.package.updateManyAndReturn({
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
    updateManyAndReturn<T extends PackageUpdateManyAndReturnArgs>(args: SelectSubset<T, PackageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Package.
     * @param {PackageUpsertArgs} args - Arguments to update or create a Package.
     * @example
     * // Update or create a Package
     * const package = await prisma.package.upsert({
     *   create: {
     *     // ... data to create a Package
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Package we want to update
     *   }
     * })
     */
    upsert<T extends PackageUpsertArgs>(args: SelectSubset<T, PackageUpsertArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Packages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageCountArgs} args - Arguments to filter Packages to count.
     * @example
     * // Count the number of Packages
     * const count = await prisma.package.count({
     *   where: {
     *     // ... the filter for the Packages we want to count
     *   }
     * })
    **/
    count<T extends PackageCountArgs>(
      args?: Subset<T, PackageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PackageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Package.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PackageAggregateArgs>(args: Subset<T, PackageAggregateArgs>): Prisma.PrismaPromise<GetPackageAggregateType<T>>

    /**
     * Group by Package.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageGroupByArgs} args - Group by arguments.
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
      T extends PackageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PackageGroupByArgs['orderBy'] }
        : { orderBy?: PackageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PackageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPackageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Package model
   */
  readonly fields: PackageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Package.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PackageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Package model
   */
  interface PackageFieldRefs {
    readonly id: FieldRef<"Package", 'Int'>
    readonly name: FieldRef<"Package", 'String'>
    readonly category: FieldRef<"Package", 'PackageCategory'>
    readonly groupType: FieldRef<"Package", 'GroupType'>
    readonly playTimeMin: FieldRef<"Package", 'Int'>
    readonly visitDurationMin: FieldRef<"Package", 'Int'>
    readonly pricePerPlayer: FieldRef<"Package", 'Decimal'>
    readonly gameSelection: FieldRef<"Package", 'String'>
    readonly freeDrink: FieldRef<"Package", 'Boolean'>
    readonly freeSupervisor: FieldRef<"Package", 'Boolean'>
    readonly createdAt: FieldRef<"Package", 'DateTime'>
    readonly updatedAt: FieldRef<"Package", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Package findUnique
   */
  export type PackageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package findUniqueOrThrow
   */
  export type PackageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package findFirst
   */
  export type PackageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packages.
     */
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package findFirstOrThrow
   */
  export type PackageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packages.
     */
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package findMany
   */
  export type PackageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Filter, which Packages to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package create
   */
  export type PackageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * The data needed to create a Package.
     */
    data: XOR<PackageCreateInput, PackageUncheckedCreateInput>
  }

  /**
   * Package createMany
   */
  export type PackageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Packages.
     */
    data: PackageCreateManyInput | PackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Package createManyAndReturn
   */
  export type PackageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * The data used to create many Packages.
     */
    data: PackageCreateManyInput | PackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Package update
   */
  export type PackageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * The data needed to update a Package.
     */
    data: XOR<PackageUpdateInput, PackageUncheckedUpdateInput>
    /**
     * Choose, which Package to update.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package updateMany
   */
  export type PackageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Packages.
     */
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyInput>
    /**
     * Filter which Packages to update
     */
    where?: PackageWhereInput
    /**
     * Limit how many Packages to update.
     */
    limit?: number
  }

  /**
   * Package updateManyAndReturn
   */
  export type PackageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * The data used to update Packages.
     */
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyInput>
    /**
     * Filter which Packages to update
     */
    where?: PackageWhereInput
    /**
     * Limit how many Packages to update.
     */
    limit?: number
  }

  /**
   * Package upsert
   */
  export type PackageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * The filter to search for the Package to update in case it exists.
     */
    where: PackageWhereUniqueInput
    /**
     * In case the Package found by the `where` argument doesn't exist, create a new Package with this data.
     */
    create: XOR<PackageCreateInput, PackageUncheckedCreateInput>
    /**
     * In case the Package was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PackageUpdateInput, PackageUncheckedUpdateInput>
  }

  /**
   * Package delete
   */
  export type PackageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Filter which Package to delete.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package deleteMany
   */
  export type PackageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Packages to delete
     */
    where?: PackageWhereInput
    /**
     * Limit how many Packages to delete.
     */
    limit?: number
  }

  /**
   * Package without action
   */
  export type PackageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    company: string | null
    vatNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    company: string | null
    vatNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    phone: number
    company: number
    vatNumber: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    company?: true
    vatNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    company?: true
    vatNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    company?: true
    vatNumber?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    email: string
    phone: string | null
    company: string | null
    vatNumber: string | null
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    company?: boolean
    vatNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookings?: boolean | Customer$bookingsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    company?: boolean
    vatNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    company?: boolean
    vatNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    company?: boolean
    vatNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "phone" | "company" | "vatNumber" | "createdAt" | "updatedAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | Customer$bookingsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      email: string
      phone: string | null
      company: string | null
      vatNumber: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends Customer$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'Int'>
    readonly firstName: FieldRef<"Customer", 'String'>
    readonly lastName: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly company: FieldRef<"Customer", 'String'>
    readonly vatNumber: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.bookings
   */
  export type Customer$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model FoodItem
   */

  export type AggregateFoodItem = {
    _count: FoodItemCountAggregateOutputType | null
    _avg: FoodItemAvgAggregateOutputType | null
    _sum: FoodItemSumAggregateOutputType | null
    _min: FoodItemMinAggregateOutputType | null
    _max: FoodItemMaxAggregateOutputType | null
  }

  export type FoodItemAvgAggregateOutputType = {
    id: number | null
  }

  export type FoodItemSumAggregateOutputType = {
    id: number | null
  }

  export type FoodItemMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodItemMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodItemCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FoodItemAvgAggregateInputType = {
    id?: true
  }

  export type FoodItemSumAggregateInputType = {
    id?: true
  }

  export type FoodItemMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodItemMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodItemCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FoodItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodItem to aggregate.
     */
    where?: FoodItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodItems to fetch.
     */
    orderBy?: FoodItemOrderByWithRelationInput | FoodItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FoodItems
    **/
    _count?: true | FoodItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodItemMaxAggregateInputType
  }

  export type GetFoodItemAggregateType<T extends FoodItemAggregateArgs> = {
        [P in keyof T & keyof AggregateFoodItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoodItem[P]>
      : GetScalarType<T[P], AggregateFoodItem[P]>
  }




  export type FoodItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodItemWhereInput
    orderBy?: FoodItemOrderByWithAggregationInput | FoodItemOrderByWithAggregationInput[]
    by: FoodItemScalarFieldEnum[] | FoodItemScalarFieldEnum
    having?: FoodItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodItemCountAggregateInputType | true
    _avg?: FoodItemAvgAggregateInputType
    _sum?: FoodItemSumAggregateInputType
    _min?: FoodItemMinAggregateInputType
    _max?: FoodItemMaxAggregateInputType
  }

  export type FoodItemGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: FoodItemCountAggregateOutputType | null
    _avg: FoodItemAvgAggregateOutputType | null
    _sum: FoodItemSumAggregateOutputType | null
    _min: FoodItemMinAggregateOutputType | null
    _max: FoodItemMaxAggregateOutputType | null
  }

  type GetFoodItemGroupByPayload<T extends FoodItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodItemGroupByOutputType[P]>
            : GetScalarType<T[P], FoodItemGroupByOutputType[P]>
        }
      >
    >


  export type FoodItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookings?: boolean | FoodItem$bookingsArgs<ExtArgs>
    _count?: boolean | FoodItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foodItem"]>

  export type FoodItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["foodItem"]>

  export type FoodItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["foodItem"]>

  export type FoodItemSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FoodItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["foodItem"]>
  export type FoodItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | FoodItem$bookingsArgs<ExtArgs>
    _count?: boolean | FoodItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FoodItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FoodItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FoodItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FoodItem"
    objects: {
      bookings: Prisma.$BookingFoodItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["foodItem"]>
    composites: {}
  }

  type FoodItemGetPayload<S extends boolean | null | undefined | FoodItemDefaultArgs> = $Result.GetResult<Prisma.$FoodItemPayload, S>

  type FoodItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoodItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodItemCountAggregateInputType | true
    }

  export interface FoodItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FoodItem'], meta: { name: 'FoodItem' } }
    /**
     * Find zero or one FoodItem that matches the filter.
     * @param {FoodItemFindUniqueArgs} args - Arguments to find a FoodItem
     * @example
     * // Get one FoodItem
     * const foodItem = await prisma.foodItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodItemFindUniqueArgs>(args: SelectSubset<T, FoodItemFindUniqueArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FoodItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoodItemFindUniqueOrThrowArgs} args - Arguments to find a FoodItem
     * @example
     * // Get one FoodItem
     * const foodItem = await prisma.foodItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodItemFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemFindFirstArgs} args - Arguments to find a FoodItem
     * @example
     * // Get one FoodItem
     * const foodItem = await prisma.foodItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodItemFindFirstArgs>(args?: SelectSubset<T, FoodItemFindFirstArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemFindFirstOrThrowArgs} args - Arguments to find a FoodItem
     * @example
     * // Get one FoodItem
     * const foodItem = await prisma.foodItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodItemFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FoodItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FoodItems
     * const foodItems = await prisma.foodItem.findMany()
     * 
     * // Get first 10 FoodItems
     * const foodItems = await prisma.foodItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodItemWithIdOnly = await prisma.foodItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodItemFindManyArgs>(args?: SelectSubset<T, FoodItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FoodItem.
     * @param {FoodItemCreateArgs} args - Arguments to create a FoodItem.
     * @example
     * // Create one FoodItem
     * const FoodItem = await prisma.foodItem.create({
     *   data: {
     *     // ... data to create a FoodItem
     *   }
     * })
     * 
     */
    create<T extends FoodItemCreateArgs>(args: SelectSubset<T, FoodItemCreateArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FoodItems.
     * @param {FoodItemCreateManyArgs} args - Arguments to create many FoodItems.
     * @example
     * // Create many FoodItems
     * const foodItem = await prisma.foodItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodItemCreateManyArgs>(args?: SelectSubset<T, FoodItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FoodItems and returns the data saved in the database.
     * @param {FoodItemCreateManyAndReturnArgs} args - Arguments to create many FoodItems.
     * @example
     * // Create many FoodItems
     * const foodItem = await prisma.foodItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FoodItems and only return the `id`
     * const foodItemWithIdOnly = await prisma.foodItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FoodItemCreateManyAndReturnArgs>(args?: SelectSubset<T, FoodItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FoodItem.
     * @param {FoodItemDeleteArgs} args - Arguments to delete one FoodItem.
     * @example
     * // Delete one FoodItem
     * const FoodItem = await prisma.foodItem.delete({
     *   where: {
     *     // ... filter to delete one FoodItem
     *   }
     * })
     * 
     */
    delete<T extends FoodItemDeleteArgs>(args: SelectSubset<T, FoodItemDeleteArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FoodItem.
     * @param {FoodItemUpdateArgs} args - Arguments to update one FoodItem.
     * @example
     * // Update one FoodItem
     * const foodItem = await prisma.foodItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodItemUpdateArgs>(args: SelectSubset<T, FoodItemUpdateArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FoodItems.
     * @param {FoodItemDeleteManyArgs} args - Arguments to filter FoodItems to delete.
     * @example
     * // Delete a few FoodItems
     * const { count } = await prisma.foodItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodItemDeleteManyArgs>(args?: SelectSubset<T, FoodItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FoodItems
     * const foodItem = await prisma.foodItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodItemUpdateManyArgs>(args: SelectSubset<T, FoodItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodItems and returns the data updated in the database.
     * @param {FoodItemUpdateManyAndReturnArgs} args - Arguments to update many FoodItems.
     * @example
     * // Update many FoodItems
     * const foodItem = await prisma.foodItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FoodItems and only return the `id`
     * const foodItemWithIdOnly = await prisma.foodItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends FoodItemUpdateManyAndReturnArgs>(args: SelectSubset<T, FoodItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FoodItem.
     * @param {FoodItemUpsertArgs} args - Arguments to update or create a FoodItem.
     * @example
     * // Update or create a FoodItem
     * const foodItem = await prisma.foodItem.upsert({
     *   create: {
     *     // ... data to create a FoodItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FoodItem we want to update
     *   }
     * })
     */
    upsert<T extends FoodItemUpsertArgs>(args: SelectSubset<T, FoodItemUpsertArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FoodItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemCountArgs} args - Arguments to filter FoodItems to count.
     * @example
     * // Count the number of FoodItems
     * const count = await prisma.foodItem.count({
     *   where: {
     *     // ... the filter for the FoodItems we want to count
     *   }
     * })
    **/
    count<T extends FoodItemCountArgs>(
      args?: Subset<T, FoodItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FoodItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FoodItemAggregateArgs>(args: Subset<T, FoodItemAggregateArgs>): Prisma.PrismaPromise<GetFoodItemAggregateType<T>>

    /**
     * Group by FoodItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemGroupByArgs} args - Group by arguments.
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
      T extends FoodItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodItemGroupByArgs['orderBy'] }
        : { orderBy?: FoodItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FoodItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FoodItem model
   */
  readonly fields: FoodItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FoodItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends FoodItem$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, FoodItem$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingFoodItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FoodItem model
   */
  interface FoodItemFieldRefs {
    readonly id: FieldRef<"FoodItem", 'Int'>
    readonly name: FieldRef<"FoodItem", 'String'>
    readonly description: FieldRef<"FoodItem", 'String'>
    readonly createdAt: FieldRef<"FoodItem", 'DateTime'>
    readonly updatedAt: FieldRef<"FoodItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FoodItem findUnique
   */
  export type FoodItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * Filter, which FoodItem to fetch.
     */
    where: FoodItemWhereUniqueInput
  }

  /**
   * FoodItem findUniqueOrThrow
   */
  export type FoodItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * Filter, which FoodItem to fetch.
     */
    where: FoodItemWhereUniqueInput
  }

  /**
   * FoodItem findFirst
   */
  export type FoodItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * Filter, which FoodItem to fetch.
     */
    where?: FoodItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodItems to fetch.
     */
    orderBy?: FoodItemOrderByWithRelationInput | FoodItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodItems.
     */
    cursor?: FoodItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodItems.
     */
    distinct?: FoodItemScalarFieldEnum | FoodItemScalarFieldEnum[]
  }

  /**
   * FoodItem findFirstOrThrow
   */
  export type FoodItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * Filter, which FoodItem to fetch.
     */
    where?: FoodItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodItems to fetch.
     */
    orderBy?: FoodItemOrderByWithRelationInput | FoodItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodItems.
     */
    cursor?: FoodItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodItems.
     */
    distinct?: FoodItemScalarFieldEnum | FoodItemScalarFieldEnum[]
  }

  /**
   * FoodItem findMany
   */
  export type FoodItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * Filter, which FoodItems to fetch.
     */
    where?: FoodItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodItems to fetch.
     */
    orderBy?: FoodItemOrderByWithRelationInput | FoodItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FoodItems.
     */
    cursor?: FoodItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodItems.
     */
    skip?: number
    distinct?: FoodItemScalarFieldEnum | FoodItemScalarFieldEnum[]
  }

  /**
   * FoodItem create
   */
  export type FoodItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * The data needed to create a FoodItem.
     */
    data: XOR<FoodItemCreateInput, FoodItemUncheckedCreateInput>
  }

  /**
   * FoodItem createMany
   */
  export type FoodItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FoodItems.
     */
    data: FoodItemCreateManyInput | FoodItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FoodItem createManyAndReturn
   */
  export type FoodItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * The data used to create many FoodItems.
     */
    data: FoodItemCreateManyInput | FoodItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FoodItem update
   */
  export type FoodItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * The data needed to update a FoodItem.
     */
    data: XOR<FoodItemUpdateInput, FoodItemUncheckedUpdateInput>
    /**
     * Choose, which FoodItem to update.
     */
    where: FoodItemWhereUniqueInput
  }

  /**
   * FoodItem updateMany
   */
  export type FoodItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FoodItems.
     */
    data: XOR<FoodItemUpdateManyMutationInput, FoodItemUncheckedUpdateManyInput>
    /**
     * Filter which FoodItems to update
     */
    where?: FoodItemWhereInput
    /**
     * Limit how many FoodItems to update.
     */
    limit?: number
  }

  /**
   * FoodItem updateManyAndReturn
   */
  export type FoodItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * The data used to update FoodItems.
     */
    data: XOR<FoodItemUpdateManyMutationInput, FoodItemUncheckedUpdateManyInput>
    /**
     * Filter which FoodItems to update
     */
    where?: FoodItemWhereInput
    /**
     * Limit how many FoodItems to update.
     */
    limit?: number
  }

  /**
   * FoodItem upsert
   */
  export type FoodItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * The filter to search for the FoodItem to update in case it exists.
     */
    where: FoodItemWhereUniqueInput
    /**
     * In case the FoodItem found by the `where` argument doesn't exist, create a new FoodItem with this data.
     */
    create: XOR<FoodItemCreateInput, FoodItemUncheckedCreateInput>
    /**
     * In case the FoodItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodItemUpdateInput, FoodItemUncheckedUpdateInput>
  }

  /**
   * FoodItem delete
   */
  export type FoodItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * Filter which FoodItem to delete.
     */
    where: FoodItemWhereUniqueInput
  }

  /**
   * FoodItem deleteMany
   */
  export type FoodItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodItems to delete
     */
    where?: FoodItemWhereInput
    /**
     * Limit how many FoodItems to delete.
     */
    limit?: number
  }

  /**
   * FoodItem.bookings
   */
  export type FoodItem$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingFoodItem
     */
    select?: BookingFoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingFoodItem
     */
    omit?: BookingFoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingFoodItemInclude<ExtArgs> | null
    where?: BookingFoodItemWhereInput
    orderBy?: BookingFoodItemOrderByWithRelationInput | BookingFoodItemOrderByWithRelationInput[]
    cursor?: BookingFoodItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingFoodItemScalarFieldEnum | BookingFoodItemScalarFieldEnum[]
  }

  /**
   * FoodItem without action
   */
  export type FoodItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
  }


  /**
   * Model BookingFoodItem
   */

  export type AggregateBookingFoodItem = {
    _count: BookingFoodItemCountAggregateOutputType | null
    _avg: BookingFoodItemAvgAggregateOutputType | null
    _sum: BookingFoodItemSumAggregateOutputType | null
    _min: BookingFoodItemMinAggregateOutputType | null
    _max: BookingFoodItemMaxAggregateOutputType | null
  }

  export type BookingFoodItemAvgAggregateOutputType = {
    id: number | null
    bookingId: number | null
    foodItemId: number | null
    quantity: number | null
  }

  export type BookingFoodItemSumAggregateOutputType = {
    id: number | null
    bookingId: number | null
    foodItemId: number | null
    quantity: number | null
  }

  export type BookingFoodItemMinAggregateOutputType = {
    id: number | null
    bookingId: number | null
    foodItemId: number | null
    quantity: number | null
  }

  export type BookingFoodItemMaxAggregateOutputType = {
    id: number | null
    bookingId: number | null
    foodItemId: number | null
    quantity: number | null
  }

  export type BookingFoodItemCountAggregateOutputType = {
    id: number
    bookingId: number
    foodItemId: number
    quantity: number
    _all: number
  }


  export type BookingFoodItemAvgAggregateInputType = {
    id?: true
    bookingId?: true
    foodItemId?: true
    quantity?: true
  }

  export type BookingFoodItemSumAggregateInputType = {
    id?: true
    bookingId?: true
    foodItemId?: true
    quantity?: true
  }

  export type BookingFoodItemMinAggregateInputType = {
    id?: true
    bookingId?: true
    foodItemId?: true
    quantity?: true
  }

  export type BookingFoodItemMaxAggregateInputType = {
    id?: true
    bookingId?: true
    foodItemId?: true
    quantity?: true
  }

  export type BookingFoodItemCountAggregateInputType = {
    id?: true
    bookingId?: true
    foodItemId?: true
    quantity?: true
    _all?: true
  }

  export type BookingFoodItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingFoodItem to aggregate.
     */
    where?: BookingFoodItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingFoodItems to fetch.
     */
    orderBy?: BookingFoodItemOrderByWithRelationInput | BookingFoodItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingFoodItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingFoodItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingFoodItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookingFoodItems
    **/
    _count?: true | BookingFoodItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingFoodItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingFoodItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingFoodItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingFoodItemMaxAggregateInputType
  }

  export type GetBookingFoodItemAggregateType<T extends BookingFoodItemAggregateArgs> = {
        [P in keyof T & keyof AggregateBookingFoodItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookingFoodItem[P]>
      : GetScalarType<T[P], AggregateBookingFoodItem[P]>
  }




  export type BookingFoodItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingFoodItemWhereInput
    orderBy?: BookingFoodItemOrderByWithAggregationInput | BookingFoodItemOrderByWithAggregationInput[]
    by: BookingFoodItemScalarFieldEnum[] | BookingFoodItemScalarFieldEnum
    having?: BookingFoodItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingFoodItemCountAggregateInputType | true
    _avg?: BookingFoodItemAvgAggregateInputType
    _sum?: BookingFoodItemSumAggregateInputType
    _min?: BookingFoodItemMinAggregateInputType
    _max?: BookingFoodItemMaxAggregateInputType
  }

  export type BookingFoodItemGroupByOutputType = {
    id: number
    bookingId: number
    foodItemId: number
    quantity: number
    _count: BookingFoodItemCountAggregateOutputType | null
    _avg: BookingFoodItemAvgAggregateOutputType | null
    _sum: BookingFoodItemSumAggregateOutputType | null
    _min: BookingFoodItemMinAggregateOutputType | null
    _max: BookingFoodItemMaxAggregateOutputType | null
  }

  type GetBookingFoodItemGroupByPayload<T extends BookingFoodItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingFoodItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingFoodItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingFoodItemGroupByOutputType[P]>
            : GetScalarType<T[P], BookingFoodItemGroupByOutputType[P]>
        }
      >
    >


  export type BookingFoodItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    foodItemId?: boolean
    quantity?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    foodItem?: boolean | FoodItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingFoodItem"]>

  export type BookingFoodItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    foodItemId?: boolean
    quantity?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    foodItem?: boolean | FoodItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingFoodItem"]>

  export type BookingFoodItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    foodItemId?: boolean
    quantity?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    foodItem?: boolean | FoodItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingFoodItem"]>

  export type BookingFoodItemSelectScalar = {
    id?: boolean
    bookingId?: boolean
    foodItemId?: boolean
    quantity?: boolean
  }

  export type BookingFoodItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingId" | "foodItemId" | "quantity", ExtArgs["result"]["bookingFoodItem"]>
  export type BookingFoodItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    foodItem?: boolean | FoodItemDefaultArgs<ExtArgs>
  }
  export type BookingFoodItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    foodItem?: boolean | FoodItemDefaultArgs<ExtArgs>
  }
  export type BookingFoodItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    foodItem?: boolean | FoodItemDefaultArgs<ExtArgs>
  }

  export type $BookingFoodItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookingFoodItem"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
      foodItem: Prisma.$FoodItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bookingId: number
      foodItemId: number
      quantity: number
    }, ExtArgs["result"]["bookingFoodItem"]>
    composites: {}
  }

  type BookingFoodItemGetPayload<S extends boolean | null | undefined | BookingFoodItemDefaultArgs> = $Result.GetResult<Prisma.$BookingFoodItemPayload, S>

  type BookingFoodItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFoodItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingFoodItemCountAggregateInputType | true
    }

  export interface BookingFoodItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookingFoodItem'], meta: { name: 'BookingFoodItem' } }
    /**
     * Find zero or one BookingFoodItem that matches the filter.
     * @param {BookingFoodItemFindUniqueArgs} args - Arguments to find a BookingFoodItem
     * @example
     * // Get one BookingFoodItem
     * const bookingFoodItem = await prisma.bookingFoodItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFoodItemFindUniqueArgs>(args: SelectSubset<T, BookingFoodItemFindUniqueArgs<ExtArgs>>): Prisma__BookingFoodItemClient<$Result.GetResult<Prisma.$BookingFoodItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookingFoodItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFoodItemFindUniqueOrThrowArgs} args - Arguments to find a BookingFoodItem
     * @example
     * // Get one BookingFoodItem
     * const bookingFoodItem = await prisma.bookingFoodItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFoodItemFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFoodItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingFoodItemClient<$Result.GetResult<Prisma.$BookingFoodItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingFoodItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFoodItemFindFirstArgs} args - Arguments to find a BookingFoodItem
     * @example
     * // Get one BookingFoodItem
     * const bookingFoodItem = await prisma.bookingFoodItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFoodItemFindFirstArgs>(args?: SelectSubset<T, BookingFoodItemFindFirstArgs<ExtArgs>>): Prisma__BookingFoodItemClient<$Result.GetResult<Prisma.$BookingFoodItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingFoodItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFoodItemFindFirstOrThrowArgs} args - Arguments to find a BookingFoodItem
     * @example
     * // Get one BookingFoodItem
     * const bookingFoodItem = await prisma.bookingFoodItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFoodItemFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFoodItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingFoodItemClient<$Result.GetResult<Prisma.$BookingFoodItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookingFoodItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFoodItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookingFoodItems
     * const bookingFoodItems = await prisma.bookingFoodItem.findMany()
     * 
     * // Get first 10 BookingFoodItems
     * const bookingFoodItems = await prisma.bookingFoodItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingFoodItemWithIdOnly = await prisma.bookingFoodItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFoodItemFindManyArgs>(args?: SelectSubset<T, BookingFoodItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingFoodItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookingFoodItem.
     * @param {BookingFoodItemCreateArgs} args - Arguments to create a BookingFoodItem.
     * @example
     * // Create one BookingFoodItem
     * const BookingFoodItem = await prisma.bookingFoodItem.create({
     *   data: {
     *     // ... data to create a BookingFoodItem
     *   }
     * })
     * 
     */
    create<T extends BookingFoodItemCreateArgs>(args: SelectSubset<T, BookingFoodItemCreateArgs<ExtArgs>>): Prisma__BookingFoodItemClient<$Result.GetResult<Prisma.$BookingFoodItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookingFoodItems.
     * @param {BookingFoodItemCreateManyArgs} args - Arguments to create many BookingFoodItems.
     * @example
     * // Create many BookingFoodItems
     * const bookingFoodItem = await prisma.bookingFoodItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingFoodItemCreateManyArgs>(args?: SelectSubset<T, BookingFoodItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookingFoodItems and returns the data saved in the database.
     * @param {BookingFoodItemCreateManyAndReturnArgs} args - Arguments to create many BookingFoodItems.
     * @example
     * // Create many BookingFoodItems
     * const bookingFoodItem = await prisma.bookingFoodItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookingFoodItems and only return the `id`
     * const bookingFoodItemWithIdOnly = await prisma.bookingFoodItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingFoodItemCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingFoodItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingFoodItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookingFoodItem.
     * @param {BookingFoodItemDeleteArgs} args - Arguments to delete one BookingFoodItem.
     * @example
     * // Delete one BookingFoodItem
     * const BookingFoodItem = await prisma.bookingFoodItem.delete({
     *   where: {
     *     // ... filter to delete one BookingFoodItem
     *   }
     * })
     * 
     */
    delete<T extends BookingFoodItemDeleteArgs>(args: SelectSubset<T, BookingFoodItemDeleteArgs<ExtArgs>>): Prisma__BookingFoodItemClient<$Result.GetResult<Prisma.$BookingFoodItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookingFoodItem.
     * @param {BookingFoodItemUpdateArgs} args - Arguments to update one BookingFoodItem.
     * @example
     * // Update one BookingFoodItem
     * const bookingFoodItem = await prisma.bookingFoodItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingFoodItemUpdateArgs>(args: SelectSubset<T, BookingFoodItemUpdateArgs<ExtArgs>>): Prisma__BookingFoodItemClient<$Result.GetResult<Prisma.$BookingFoodItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookingFoodItems.
     * @param {BookingFoodItemDeleteManyArgs} args - Arguments to filter BookingFoodItems to delete.
     * @example
     * // Delete a few BookingFoodItems
     * const { count } = await prisma.bookingFoodItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingFoodItemDeleteManyArgs>(args?: SelectSubset<T, BookingFoodItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingFoodItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFoodItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookingFoodItems
     * const bookingFoodItem = await prisma.bookingFoodItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingFoodItemUpdateManyArgs>(args: SelectSubset<T, BookingFoodItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingFoodItems and returns the data updated in the database.
     * @param {BookingFoodItemUpdateManyAndReturnArgs} args - Arguments to update many BookingFoodItems.
     * @example
     * // Update many BookingFoodItems
     * const bookingFoodItem = await prisma.bookingFoodItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookingFoodItems and only return the `id`
     * const bookingFoodItemWithIdOnly = await prisma.bookingFoodItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookingFoodItemUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingFoodItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingFoodItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookingFoodItem.
     * @param {BookingFoodItemUpsertArgs} args - Arguments to update or create a BookingFoodItem.
     * @example
     * // Update or create a BookingFoodItem
     * const bookingFoodItem = await prisma.bookingFoodItem.upsert({
     *   create: {
     *     // ... data to create a BookingFoodItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookingFoodItem we want to update
     *   }
     * })
     */
    upsert<T extends BookingFoodItemUpsertArgs>(args: SelectSubset<T, BookingFoodItemUpsertArgs<ExtArgs>>): Prisma__BookingFoodItemClient<$Result.GetResult<Prisma.$BookingFoodItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookingFoodItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFoodItemCountArgs} args - Arguments to filter BookingFoodItems to count.
     * @example
     * // Count the number of BookingFoodItems
     * const count = await prisma.bookingFoodItem.count({
     *   where: {
     *     // ... the filter for the BookingFoodItems we want to count
     *   }
     * })
    **/
    count<T extends BookingFoodItemCountArgs>(
      args?: Subset<T, BookingFoodItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingFoodItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookingFoodItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFoodItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingFoodItemAggregateArgs>(args: Subset<T, BookingFoodItemAggregateArgs>): Prisma.PrismaPromise<GetBookingFoodItemAggregateType<T>>

    /**
     * Group by BookingFoodItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFoodItemGroupByArgs} args - Group by arguments.
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
      T extends BookingFoodItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingFoodItemGroupByArgs['orderBy'] }
        : { orderBy?: BookingFoodItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingFoodItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingFoodItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookingFoodItem model
   */
  readonly fields: BookingFoodItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookingFoodItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingFoodItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    foodItem<T extends FoodItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FoodItemDefaultArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BookingFoodItem model
   */
  interface BookingFoodItemFieldRefs {
    readonly id: FieldRef<"BookingFoodItem", 'Int'>
    readonly bookingId: FieldRef<"BookingFoodItem", 'Int'>
    readonly foodItemId: FieldRef<"BookingFoodItem", 'Int'>
    readonly quantity: FieldRef<"BookingFoodItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BookingFoodItem findUnique
   */
  export type BookingFoodItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingFoodItem
     */
    select?: BookingFoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingFoodItem
     */
    omit?: BookingFoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingFoodItemInclude<ExtArgs> | null
    /**
     * Filter, which BookingFoodItem to fetch.
     */
    where: BookingFoodItemWhereUniqueInput
  }

  /**
   * BookingFoodItem findUniqueOrThrow
   */
  export type BookingFoodItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingFoodItem
     */
    select?: BookingFoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingFoodItem
     */
    omit?: BookingFoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingFoodItemInclude<ExtArgs> | null
    /**
     * Filter, which BookingFoodItem to fetch.
     */
    where: BookingFoodItemWhereUniqueInput
  }

  /**
   * BookingFoodItem findFirst
   */
  export type BookingFoodItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingFoodItem
     */
    select?: BookingFoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingFoodItem
     */
    omit?: BookingFoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingFoodItemInclude<ExtArgs> | null
    /**
     * Filter, which BookingFoodItem to fetch.
     */
    where?: BookingFoodItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingFoodItems to fetch.
     */
    orderBy?: BookingFoodItemOrderByWithRelationInput | BookingFoodItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingFoodItems.
     */
    cursor?: BookingFoodItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingFoodItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingFoodItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingFoodItems.
     */
    distinct?: BookingFoodItemScalarFieldEnum | BookingFoodItemScalarFieldEnum[]
  }

  /**
   * BookingFoodItem findFirstOrThrow
   */
  export type BookingFoodItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingFoodItem
     */
    select?: BookingFoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingFoodItem
     */
    omit?: BookingFoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingFoodItemInclude<ExtArgs> | null
    /**
     * Filter, which BookingFoodItem to fetch.
     */
    where?: BookingFoodItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingFoodItems to fetch.
     */
    orderBy?: BookingFoodItemOrderByWithRelationInput | BookingFoodItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingFoodItems.
     */
    cursor?: BookingFoodItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingFoodItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingFoodItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingFoodItems.
     */
    distinct?: BookingFoodItemScalarFieldEnum | BookingFoodItemScalarFieldEnum[]
  }

  /**
   * BookingFoodItem findMany
   */
  export type BookingFoodItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingFoodItem
     */
    select?: BookingFoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingFoodItem
     */
    omit?: BookingFoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingFoodItemInclude<ExtArgs> | null
    /**
     * Filter, which BookingFoodItems to fetch.
     */
    where?: BookingFoodItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingFoodItems to fetch.
     */
    orderBy?: BookingFoodItemOrderByWithRelationInput | BookingFoodItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookingFoodItems.
     */
    cursor?: BookingFoodItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingFoodItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingFoodItems.
     */
    skip?: number
    distinct?: BookingFoodItemScalarFieldEnum | BookingFoodItemScalarFieldEnum[]
  }

  /**
   * BookingFoodItem create
   */
  export type BookingFoodItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingFoodItem
     */
    select?: BookingFoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingFoodItem
     */
    omit?: BookingFoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingFoodItemInclude<ExtArgs> | null
    /**
     * The data needed to create a BookingFoodItem.
     */
    data: XOR<BookingFoodItemCreateInput, BookingFoodItemUncheckedCreateInput>
  }

  /**
   * BookingFoodItem createMany
   */
  export type BookingFoodItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookingFoodItems.
     */
    data: BookingFoodItemCreateManyInput | BookingFoodItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookingFoodItem createManyAndReturn
   */
  export type BookingFoodItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingFoodItem
     */
    select?: BookingFoodItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingFoodItem
     */
    omit?: BookingFoodItemOmit<ExtArgs> | null
    /**
     * The data used to create many BookingFoodItems.
     */
    data: BookingFoodItemCreateManyInput | BookingFoodItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingFoodItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingFoodItem update
   */
  export type BookingFoodItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingFoodItem
     */
    select?: BookingFoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingFoodItem
     */
    omit?: BookingFoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingFoodItemInclude<ExtArgs> | null
    /**
     * The data needed to update a BookingFoodItem.
     */
    data: XOR<BookingFoodItemUpdateInput, BookingFoodItemUncheckedUpdateInput>
    /**
     * Choose, which BookingFoodItem to update.
     */
    where: BookingFoodItemWhereUniqueInput
  }

  /**
   * BookingFoodItem updateMany
   */
  export type BookingFoodItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookingFoodItems.
     */
    data: XOR<BookingFoodItemUpdateManyMutationInput, BookingFoodItemUncheckedUpdateManyInput>
    /**
     * Filter which BookingFoodItems to update
     */
    where?: BookingFoodItemWhereInput
    /**
     * Limit how many BookingFoodItems to update.
     */
    limit?: number
  }

  /**
   * BookingFoodItem updateManyAndReturn
   */
  export type BookingFoodItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingFoodItem
     */
    select?: BookingFoodItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingFoodItem
     */
    omit?: BookingFoodItemOmit<ExtArgs> | null
    /**
     * The data used to update BookingFoodItems.
     */
    data: XOR<BookingFoodItemUpdateManyMutationInput, BookingFoodItemUncheckedUpdateManyInput>
    /**
     * Filter which BookingFoodItems to update
     */
    where?: BookingFoodItemWhereInput
    /**
     * Limit how many BookingFoodItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingFoodItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingFoodItem upsert
   */
  export type BookingFoodItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingFoodItem
     */
    select?: BookingFoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingFoodItem
     */
    omit?: BookingFoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingFoodItemInclude<ExtArgs> | null
    /**
     * The filter to search for the BookingFoodItem to update in case it exists.
     */
    where: BookingFoodItemWhereUniqueInput
    /**
     * In case the BookingFoodItem found by the `where` argument doesn't exist, create a new BookingFoodItem with this data.
     */
    create: XOR<BookingFoodItemCreateInput, BookingFoodItemUncheckedCreateInput>
    /**
     * In case the BookingFoodItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingFoodItemUpdateInput, BookingFoodItemUncheckedUpdateInput>
  }

  /**
   * BookingFoodItem delete
   */
  export type BookingFoodItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingFoodItem
     */
    select?: BookingFoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingFoodItem
     */
    omit?: BookingFoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingFoodItemInclude<ExtArgs> | null
    /**
     * Filter which BookingFoodItem to delete.
     */
    where: BookingFoodItemWhereUniqueInput
  }

  /**
   * BookingFoodItem deleteMany
   */
  export type BookingFoodItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingFoodItems to delete
     */
    where?: BookingFoodItemWhereInput
    /**
     * Limit how many BookingFoodItems to delete.
     */
    limit?: number
  }

  /**
   * BookingFoodItem without action
   */
  export type BookingFoodItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingFoodItem
     */
    select?: BookingFoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingFoodItem
     */
    omit?: BookingFoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingFoodItemInclude<ExtArgs> | null
  }


  /**
   * Model BookingHost
   */

  export type AggregateBookingHost = {
    _count: BookingHostCountAggregateOutputType | null
    _avg: BookingHostAvgAggregateOutputType | null
    _sum: BookingHostSumAggregateOutputType | null
    _min: BookingHostMinAggregateOutputType | null
    _max: BookingHostMaxAggregateOutputType | null
  }

  export type BookingHostAvgAggregateOutputType = {
    id: number | null
    bookingId: number | null
    hostId: number | null
  }

  export type BookingHostSumAggregateOutputType = {
    id: number | null
    bookingId: number | null
    hostId: number | null
  }

  export type BookingHostMinAggregateOutputType = {
    id: number | null
    bookingId: number | null
    hostId: number | null
  }

  export type BookingHostMaxAggregateOutputType = {
    id: number | null
    bookingId: number | null
    hostId: number | null
  }

  export type BookingHostCountAggregateOutputType = {
    id: number
    bookingId: number
    hostId: number
    _all: number
  }


  export type BookingHostAvgAggregateInputType = {
    id?: true
    bookingId?: true
    hostId?: true
  }

  export type BookingHostSumAggregateInputType = {
    id?: true
    bookingId?: true
    hostId?: true
  }

  export type BookingHostMinAggregateInputType = {
    id?: true
    bookingId?: true
    hostId?: true
  }

  export type BookingHostMaxAggregateInputType = {
    id?: true
    bookingId?: true
    hostId?: true
  }

  export type BookingHostCountAggregateInputType = {
    id?: true
    bookingId?: true
    hostId?: true
    _all?: true
  }

  export type BookingHostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingHost to aggregate.
     */
    where?: BookingHostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingHosts to fetch.
     */
    orderBy?: BookingHostOrderByWithRelationInput | BookingHostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingHostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingHosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingHosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookingHosts
    **/
    _count?: true | BookingHostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingHostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingHostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingHostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingHostMaxAggregateInputType
  }

  export type GetBookingHostAggregateType<T extends BookingHostAggregateArgs> = {
        [P in keyof T & keyof AggregateBookingHost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookingHost[P]>
      : GetScalarType<T[P], AggregateBookingHost[P]>
  }




  export type BookingHostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingHostWhereInput
    orderBy?: BookingHostOrderByWithAggregationInput | BookingHostOrderByWithAggregationInput[]
    by: BookingHostScalarFieldEnum[] | BookingHostScalarFieldEnum
    having?: BookingHostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingHostCountAggregateInputType | true
    _avg?: BookingHostAvgAggregateInputType
    _sum?: BookingHostSumAggregateInputType
    _min?: BookingHostMinAggregateInputType
    _max?: BookingHostMaxAggregateInputType
  }

  export type BookingHostGroupByOutputType = {
    id: number
    bookingId: number
    hostId: number
    _count: BookingHostCountAggregateOutputType | null
    _avg: BookingHostAvgAggregateOutputType | null
    _sum: BookingHostSumAggregateOutputType | null
    _min: BookingHostMinAggregateOutputType | null
    _max: BookingHostMaxAggregateOutputType | null
  }

  type GetBookingHostGroupByPayload<T extends BookingHostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingHostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingHostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingHostGroupByOutputType[P]>
            : GetScalarType<T[P], BookingHostGroupByOutputType[P]>
        }
      >
    >


  export type BookingHostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    hostId?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    host?: boolean | HostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingHost"]>

  export type BookingHostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    hostId?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    host?: boolean | HostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingHost"]>

  export type BookingHostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    hostId?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    host?: boolean | HostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingHost"]>

  export type BookingHostSelectScalar = {
    id?: boolean
    bookingId?: boolean
    hostId?: boolean
  }

  export type BookingHostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingId" | "hostId", ExtArgs["result"]["bookingHost"]>
  export type BookingHostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    host?: boolean | HostDefaultArgs<ExtArgs>
  }
  export type BookingHostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    host?: boolean | HostDefaultArgs<ExtArgs>
  }
  export type BookingHostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    host?: boolean | HostDefaultArgs<ExtArgs>
  }

  export type $BookingHostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookingHost"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
      host: Prisma.$HostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bookingId: number
      hostId: number
    }, ExtArgs["result"]["bookingHost"]>
    composites: {}
  }

  type BookingHostGetPayload<S extends boolean | null | undefined | BookingHostDefaultArgs> = $Result.GetResult<Prisma.$BookingHostPayload, S>

  type BookingHostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingHostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingHostCountAggregateInputType | true
    }

  export interface BookingHostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookingHost'], meta: { name: 'BookingHost' } }
    /**
     * Find zero or one BookingHost that matches the filter.
     * @param {BookingHostFindUniqueArgs} args - Arguments to find a BookingHost
     * @example
     * // Get one BookingHost
     * const bookingHost = await prisma.bookingHost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingHostFindUniqueArgs>(args: SelectSubset<T, BookingHostFindUniqueArgs<ExtArgs>>): Prisma__BookingHostClient<$Result.GetResult<Prisma.$BookingHostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookingHost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingHostFindUniqueOrThrowArgs} args - Arguments to find a BookingHost
     * @example
     * // Get one BookingHost
     * const bookingHost = await prisma.bookingHost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingHostFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingHostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingHostClient<$Result.GetResult<Prisma.$BookingHostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingHost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingHostFindFirstArgs} args - Arguments to find a BookingHost
     * @example
     * // Get one BookingHost
     * const bookingHost = await prisma.bookingHost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingHostFindFirstArgs>(args?: SelectSubset<T, BookingHostFindFirstArgs<ExtArgs>>): Prisma__BookingHostClient<$Result.GetResult<Prisma.$BookingHostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingHost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingHostFindFirstOrThrowArgs} args - Arguments to find a BookingHost
     * @example
     * // Get one BookingHost
     * const bookingHost = await prisma.bookingHost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingHostFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingHostFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingHostClient<$Result.GetResult<Prisma.$BookingHostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookingHosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingHostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookingHosts
     * const bookingHosts = await prisma.bookingHost.findMany()
     * 
     * // Get first 10 BookingHosts
     * const bookingHosts = await prisma.bookingHost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingHostWithIdOnly = await prisma.bookingHost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingHostFindManyArgs>(args?: SelectSubset<T, BookingHostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingHostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookingHost.
     * @param {BookingHostCreateArgs} args - Arguments to create a BookingHost.
     * @example
     * // Create one BookingHost
     * const BookingHost = await prisma.bookingHost.create({
     *   data: {
     *     // ... data to create a BookingHost
     *   }
     * })
     * 
     */
    create<T extends BookingHostCreateArgs>(args: SelectSubset<T, BookingHostCreateArgs<ExtArgs>>): Prisma__BookingHostClient<$Result.GetResult<Prisma.$BookingHostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookingHosts.
     * @param {BookingHostCreateManyArgs} args - Arguments to create many BookingHosts.
     * @example
     * // Create many BookingHosts
     * const bookingHost = await prisma.bookingHost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingHostCreateManyArgs>(args?: SelectSubset<T, BookingHostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookingHosts and returns the data saved in the database.
     * @param {BookingHostCreateManyAndReturnArgs} args - Arguments to create many BookingHosts.
     * @example
     * // Create many BookingHosts
     * const bookingHost = await prisma.bookingHost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookingHosts and only return the `id`
     * const bookingHostWithIdOnly = await prisma.bookingHost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingHostCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingHostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingHostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookingHost.
     * @param {BookingHostDeleteArgs} args - Arguments to delete one BookingHost.
     * @example
     * // Delete one BookingHost
     * const BookingHost = await prisma.bookingHost.delete({
     *   where: {
     *     // ... filter to delete one BookingHost
     *   }
     * })
     * 
     */
    delete<T extends BookingHostDeleteArgs>(args: SelectSubset<T, BookingHostDeleteArgs<ExtArgs>>): Prisma__BookingHostClient<$Result.GetResult<Prisma.$BookingHostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookingHost.
     * @param {BookingHostUpdateArgs} args - Arguments to update one BookingHost.
     * @example
     * // Update one BookingHost
     * const bookingHost = await prisma.bookingHost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingHostUpdateArgs>(args: SelectSubset<T, BookingHostUpdateArgs<ExtArgs>>): Prisma__BookingHostClient<$Result.GetResult<Prisma.$BookingHostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookingHosts.
     * @param {BookingHostDeleteManyArgs} args - Arguments to filter BookingHosts to delete.
     * @example
     * // Delete a few BookingHosts
     * const { count } = await prisma.bookingHost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingHostDeleteManyArgs>(args?: SelectSubset<T, BookingHostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingHosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingHostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookingHosts
     * const bookingHost = await prisma.bookingHost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingHostUpdateManyArgs>(args: SelectSubset<T, BookingHostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingHosts and returns the data updated in the database.
     * @param {BookingHostUpdateManyAndReturnArgs} args - Arguments to update many BookingHosts.
     * @example
     * // Update many BookingHosts
     * const bookingHost = await prisma.bookingHost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookingHosts and only return the `id`
     * const bookingHostWithIdOnly = await prisma.bookingHost.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookingHostUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingHostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingHostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookingHost.
     * @param {BookingHostUpsertArgs} args - Arguments to update or create a BookingHost.
     * @example
     * // Update or create a BookingHost
     * const bookingHost = await prisma.bookingHost.upsert({
     *   create: {
     *     // ... data to create a BookingHost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookingHost we want to update
     *   }
     * })
     */
    upsert<T extends BookingHostUpsertArgs>(args: SelectSubset<T, BookingHostUpsertArgs<ExtArgs>>): Prisma__BookingHostClient<$Result.GetResult<Prisma.$BookingHostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookingHosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingHostCountArgs} args - Arguments to filter BookingHosts to count.
     * @example
     * // Count the number of BookingHosts
     * const count = await prisma.bookingHost.count({
     *   where: {
     *     // ... the filter for the BookingHosts we want to count
     *   }
     * })
    **/
    count<T extends BookingHostCountArgs>(
      args?: Subset<T, BookingHostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingHostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookingHost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingHostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingHostAggregateArgs>(args: Subset<T, BookingHostAggregateArgs>): Prisma.PrismaPromise<GetBookingHostAggregateType<T>>

    /**
     * Group by BookingHost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingHostGroupByArgs} args - Group by arguments.
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
      T extends BookingHostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingHostGroupByArgs['orderBy'] }
        : { orderBy?: BookingHostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingHostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingHostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookingHost model
   */
  readonly fields: BookingHostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookingHost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingHostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    host<T extends HostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HostDefaultArgs<ExtArgs>>): Prisma__HostClient<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BookingHost model
   */
  interface BookingHostFieldRefs {
    readonly id: FieldRef<"BookingHost", 'Int'>
    readonly bookingId: FieldRef<"BookingHost", 'Int'>
    readonly hostId: FieldRef<"BookingHost", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BookingHost findUnique
   */
  export type BookingHostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingHost
     */
    select?: BookingHostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingHost
     */
    omit?: BookingHostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingHostInclude<ExtArgs> | null
    /**
     * Filter, which BookingHost to fetch.
     */
    where: BookingHostWhereUniqueInput
  }

  /**
   * BookingHost findUniqueOrThrow
   */
  export type BookingHostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingHost
     */
    select?: BookingHostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingHost
     */
    omit?: BookingHostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingHostInclude<ExtArgs> | null
    /**
     * Filter, which BookingHost to fetch.
     */
    where: BookingHostWhereUniqueInput
  }

  /**
   * BookingHost findFirst
   */
  export type BookingHostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingHost
     */
    select?: BookingHostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingHost
     */
    omit?: BookingHostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingHostInclude<ExtArgs> | null
    /**
     * Filter, which BookingHost to fetch.
     */
    where?: BookingHostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingHosts to fetch.
     */
    orderBy?: BookingHostOrderByWithRelationInput | BookingHostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingHosts.
     */
    cursor?: BookingHostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingHosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingHosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingHosts.
     */
    distinct?: BookingHostScalarFieldEnum | BookingHostScalarFieldEnum[]
  }

  /**
   * BookingHost findFirstOrThrow
   */
  export type BookingHostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingHost
     */
    select?: BookingHostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingHost
     */
    omit?: BookingHostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingHostInclude<ExtArgs> | null
    /**
     * Filter, which BookingHost to fetch.
     */
    where?: BookingHostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingHosts to fetch.
     */
    orderBy?: BookingHostOrderByWithRelationInput | BookingHostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingHosts.
     */
    cursor?: BookingHostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingHosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingHosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingHosts.
     */
    distinct?: BookingHostScalarFieldEnum | BookingHostScalarFieldEnum[]
  }

  /**
   * BookingHost findMany
   */
  export type BookingHostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingHost
     */
    select?: BookingHostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingHost
     */
    omit?: BookingHostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingHostInclude<ExtArgs> | null
    /**
     * Filter, which BookingHosts to fetch.
     */
    where?: BookingHostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingHosts to fetch.
     */
    orderBy?: BookingHostOrderByWithRelationInput | BookingHostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookingHosts.
     */
    cursor?: BookingHostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingHosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingHosts.
     */
    skip?: number
    distinct?: BookingHostScalarFieldEnum | BookingHostScalarFieldEnum[]
  }

  /**
   * BookingHost create
   */
  export type BookingHostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingHost
     */
    select?: BookingHostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingHost
     */
    omit?: BookingHostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingHostInclude<ExtArgs> | null
    /**
     * The data needed to create a BookingHost.
     */
    data: XOR<BookingHostCreateInput, BookingHostUncheckedCreateInput>
  }

  /**
   * BookingHost createMany
   */
  export type BookingHostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookingHosts.
     */
    data: BookingHostCreateManyInput | BookingHostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookingHost createManyAndReturn
   */
  export type BookingHostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingHost
     */
    select?: BookingHostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingHost
     */
    omit?: BookingHostOmit<ExtArgs> | null
    /**
     * The data used to create many BookingHosts.
     */
    data: BookingHostCreateManyInput | BookingHostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingHostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingHost update
   */
  export type BookingHostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingHost
     */
    select?: BookingHostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingHost
     */
    omit?: BookingHostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingHostInclude<ExtArgs> | null
    /**
     * The data needed to update a BookingHost.
     */
    data: XOR<BookingHostUpdateInput, BookingHostUncheckedUpdateInput>
    /**
     * Choose, which BookingHost to update.
     */
    where: BookingHostWhereUniqueInput
  }

  /**
   * BookingHost updateMany
   */
  export type BookingHostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookingHosts.
     */
    data: XOR<BookingHostUpdateManyMutationInput, BookingHostUncheckedUpdateManyInput>
    /**
     * Filter which BookingHosts to update
     */
    where?: BookingHostWhereInput
    /**
     * Limit how many BookingHosts to update.
     */
    limit?: number
  }

  /**
   * BookingHost updateManyAndReturn
   */
  export type BookingHostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingHost
     */
    select?: BookingHostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingHost
     */
    omit?: BookingHostOmit<ExtArgs> | null
    /**
     * The data used to update BookingHosts.
     */
    data: XOR<BookingHostUpdateManyMutationInput, BookingHostUncheckedUpdateManyInput>
    /**
     * Filter which BookingHosts to update
     */
    where?: BookingHostWhereInput
    /**
     * Limit how many BookingHosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingHostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingHost upsert
   */
  export type BookingHostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingHost
     */
    select?: BookingHostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingHost
     */
    omit?: BookingHostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingHostInclude<ExtArgs> | null
    /**
     * The filter to search for the BookingHost to update in case it exists.
     */
    where: BookingHostWhereUniqueInput
    /**
     * In case the BookingHost found by the `where` argument doesn't exist, create a new BookingHost with this data.
     */
    create: XOR<BookingHostCreateInput, BookingHostUncheckedCreateInput>
    /**
     * In case the BookingHost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingHostUpdateInput, BookingHostUncheckedUpdateInput>
  }

  /**
   * BookingHost delete
   */
  export type BookingHostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingHost
     */
    select?: BookingHostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingHost
     */
    omit?: BookingHostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingHostInclude<ExtArgs> | null
    /**
     * Filter which BookingHost to delete.
     */
    where: BookingHostWhereUniqueInput
  }

  /**
   * BookingHost deleteMany
   */
  export type BookingHostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingHosts to delete
     */
    where?: BookingHostWhereInput
    /**
     * Limit how many BookingHosts to delete.
     */
    limit?: number
  }

  /**
   * BookingHost without action
   */
  export type BookingHostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingHost
     */
    select?: BookingHostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingHost
     */
    omit?: BookingHostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingHostInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    password: 'password',
    role_id: 'role_id',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserRoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum]


  export const HostScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HostScalarFieldEnum = (typeof HostScalarFieldEnum)[keyof typeof HostScalarFieldEnum]


  export const ShiftScalarFieldEnum: {
    id: 'id',
    hostId: 'hostId',
    startTime: 'startTime',
    endTime: 'endTime',
    roleId: 'roleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShiftScalarFieldEnum = (typeof ShiftScalarFieldEnum)[keyof typeof ShiftScalarFieldEnum]


  export const ShiftRoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShiftRoleScalarFieldEnum = (typeof ShiftRoleScalarFieldEnum)[keyof typeof ShiftRoleScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    venue: 'venue',
    dayOfWeek: 'dayOfWeek',
    startTime: 'startTime',
    endTime: 'endTime',
    playersCount: 'playersCount',
    hostsRequired: 'hostsRequired',
    food_required: 'food_required',
    is_b2b: 'is_b2b',
    status: 'status',
    eposFamily: 'eposFamily',
    bookingDescription: 'bookingDescription',
    notes: 'notes',
    customerId: 'customerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const PackageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    groupType: 'groupType',
    playTimeMin: 'playTimeMin',
    visitDurationMin: 'visitDurationMin',
    pricePerPlayer: 'pricePerPlayer',
    gameSelection: 'gameSelection',
    freeDrink: 'freeDrink',
    freeSupervisor: 'freeSupervisor',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PackageScalarFieldEnum = (typeof PackageScalarFieldEnum)[keyof typeof PackageScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    company: 'company',
    vatNumber: 'vatNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const FoodItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FoodItemScalarFieldEnum = (typeof FoodItemScalarFieldEnum)[keyof typeof FoodItemScalarFieldEnum]


  export const BookingFoodItemScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    foodItemId: 'foodItemId',
    quantity: 'quantity'
  };

  export type BookingFoodItemScalarFieldEnum = (typeof BookingFoodItemScalarFieldEnum)[keyof typeof BookingFoodItemScalarFieldEnum]


  export const BookingHostScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    hostId: 'hostId'
  };

  export type BookingHostScalarFieldEnum = (typeof BookingHostScalarFieldEnum)[keyof typeof BookingHostScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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
   * Reference to a field of type 'PackageCategory'
   */
  export type EnumPackageCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PackageCategory'>
    


  /**
   * Reference to a field of type 'PackageCategory[]'
   */
  export type ListEnumPackageCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PackageCategory[]'>
    


  /**
   * Reference to a field of type 'GroupType'
   */
  export type EnumGroupTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GroupType'>
    


  /**
   * Reference to a field of type 'GroupType[]'
   */
  export type ListEnumGroupTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GroupType[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role_id?: IntFilter<"User"> | number
    active?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<UserRoleScalarRelationFilter, UserRoleWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    role_id?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: UserRoleOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role_id?: IntFilter<"User"> | number
    active?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<UserRoleScalarRelationFilter, UserRoleWhereInput>
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    role_id?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    role_id?: IntWithAggregatesFilter<"User"> | number
    active?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserRoleWhereInput = {
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    id?: IntFilter<"UserRole"> | number
    name?: StringFilter<"UserRole"> | string
    description?: StringNullableFilter<"UserRole"> | string | null
    createdAt?: DateTimeFilter<"UserRole"> | Date | string
    updatedAt?: DateTimeFilter<"UserRole"> | Date | string
    users?: UserListRelationFilter
  }

  export type UserRoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type UserRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    description?: StringNullableFilter<"UserRole"> | string | null
    createdAt?: DateTimeFilter<"UserRole"> | Date | string
    updatedAt?: DateTimeFilter<"UserRole"> | Date | string
    users?: UserListRelationFilter
  }, "id" | "name">

  export type UserRoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserRoleCountOrderByAggregateInput
    _avg?: UserRoleAvgOrderByAggregateInput
    _max?: UserRoleMaxOrderByAggregateInput
    _min?: UserRoleMinOrderByAggregateInput
    _sum?: UserRoleSumOrderByAggregateInput
  }

  export type UserRoleScalarWhereWithAggregatesInput = {
    AND?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    OR?: UserRoleScalarWhereWithAggregatesInput[]
    NOT?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserRole"> | number
    name?: StringWithAggregatesFilter<"UserRole"> | string
    description?: StringNullableWithAggregatesFilter<"UserRole"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserRole"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserRole"> | Date | string
  }

  export type HostWhereInput = {
    AND?: HostWhereInput | HostWhereInput[]
    OR?: HostWhereInput[]
    NOT?: HostWhereInput | HostWhereInput[]
    id?: IntFilter<"Host"> | number
    firstName?: StringFilter<"Host"> | string
    lastName?: StringFilter<"Host"> | string
    email?: StringFilter<"Host"> | string
    phone?: StringNullableFilter<"Host"> | string | null
    active?: BoolFilter<"Host"> | boolean
    createdAt?: DateTimeFilter<"Host"> | Date | string
    updatedAt?: DateTimeFilter<"Host"> | Date | string
    bookingHosts?: BookingHostListRelationFilter
    shifts?: ShiftListRelationFilter
  }

  export type HostOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookingHosts?: BookingHostOrderByRelationAggregateInput
    shifts?: ShiftOrderByRelationAggregateInput
  }

  export type HostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: HostWhereInput | HostWhereInput[]
    OR?: HostWhereInput[]
    NOT?: HostWhereInput | HostWhereInput[]
    firstName?: StringFilter<"Host"> | string
    lastName?: StringFilter<"Host"> | string
    phone?: StringNullableFilter<"Host"> | string | null
    active?: BoolFilter<"Host"> | boolean
    createdAt?: DateTimeFilter<"Host"> | Date | string
    updatedAt?: DateTimeFilter<"Host"> | Date | string
    bookingHosts?: BookingHostListRelationFilter
    shifts?: ShiftListRelationFilter
  }, "id" | "email">

  export type HostOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HostCountOrderByAggregateInput
    _avg?: HostAvgOrderByAggregateInput
    _max?: HostMaxOrderByAggregateInput
    _min?: HostMinOrderByAggregateInput
    _sum?: HostSumOrderByAggregateInput
  }

  export type HostScalarWhereWithAggregatesInput = {
    AND?: HostScalarWhereWithAggregatesInput | HostScalarWhereWithAggregatesInput[]
    OR?: HostScalarWhereWithAggregatesInput[]
    NOT?: HostScalarWhereWithAggregatesInput | HostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Host"> | number
    firstName?: StringWithAggregatesFilter<"Host"> | string
    lastName?: StringWithAggregatesFilter<"Host"> | string
    email?: StringWithAggregatesFilter<"Host"> | string
    phone?: StringNullableWithAggregatesFilter<"Host"> | string | null
    active?: BoolWithAggregatesFilter<"Host"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Host"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Host"> | Date | string
  }

  export type ShiftWhereInput = {
    AND?: ShiftWhereInput | ShiftWhereInput[]
    OR?: ShiftWhereInput[]
    NOT?: ShiftWhereInput | ShiftWhereInput[]
    id?: IntFilter<"Shift"> | number
    hostId?: IntNullableFilter<"Shift"> | number | null
    startTime?: DateTimeFilter<"Shift"> | Date | string
    endTime?: DateTimeFilter<"Shift"> | Date | string
    roleId?: IntNullableFilter<"Shift"> | number | null
    createdAt?: DateTimeFilter<"Shift"> | Date | string
    updatedAt?: DateTimeFilter<"Shift"> | Date | string
    host?: XOR<HostNullableScalarRelationFilter, HostWhereInput> | null
    role?: XOR<ShiftRoleNullableScalarRelationFilter, ShiftRoleWhereInput> | null
  }

  export type ShiftOrderByWithRelationInput = {
    id?: SortOrder
    hostId?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    roleId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    host?: HostOrderByWithRelationInput
    role?: ShiftRoleOrderByWithRelationInput
  }

  export type ShiftWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ShiftWhereInput | ShiftWhereInput[]
    OR?: ShiftWhereInput[]
    NOT?: ShiftWhereInput | ShiftWhereInput[]
    hostId?: IntNullableFilter<"Shift"> | number | null
    startTime?: DateTimeFilter<"Shift"> | Date | string
    endTime?: DateTimeFilter<"Shift"> | Date | string
    roleId?: IntNullableFilter<"Shift"> | number | null
    createdAt?: DateTimeFilter<"Shift"> | Date | string
    updatedAt?: DateTimeFilter<"Shift"> | Date | string
    host?: XOR<HostNullableScalarRelationFilter, HostWhereInput> | null
    role?: XOR<ShiftRoleNullableScalarRelationFilter, ShiftRoleWhereInput> | null
  }, "id">

  export type ShiftOrderByWithAggregationInput = {
    id?: SortOrder
    hostId?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    roleId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShiftCountOrderByAggregateInput
    _avg?: ShiftAvgOrderByAggregateInput
    _max?: ShiftMaxOrderByAggregateInput
    _min?: ShiftMinOrderByAggregateInput
    _sum?: ShiftSumOrderByAggregateInput
  }

  export type ShiftScalarWhereWithAggregatesInput = {
    AND?: ShiftScalarWhereWithAggregatesInput | ShiftScalarWhereWithAggregatesInput[]
    OR?: ShiftScalarWhereWithAggregatesInput[]
    NOT?: ShiftScalarWhereWithAggregatesInput | ShiftScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Shift"> | number
    hostId?: IntNullableWithAggregatesFilter<"Shift"> | number | null
    startTime?: DateTimeWithAggregatesFilter<"Shift"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Shift"> | Date | string
    roleId?: IntNullableWithAggregatesFilter<"Shift"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Shift"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Shift"> | Date | string
  }

  export type ShiftRoleWhereInput = {
    AND?: ShiftRoleWhereInput | ShiftRoleWhereInput[]
    OR?: ShiftRoleWhereInput[]
    NOT?: ShiftRoleWhereInput | ShiftRoleWhereInput[]
    id?: IntFilter<"ShiftRole"> | number
    name?: StringFilter<"ShiftRole"> | string
    description?: StringNullableFilter<"ShiftRole"> | string | null
    createdAt?: DateTimeFilter<"ShiftRole"> | Date | string
    updatedAt?: DateTimeFilter<"ShiftRole"> | Date | string
    shifts?: ShiftListRelationFilter
  }

  export type ShiftRoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shifts?: ShiftOrderByRelationAggregateInput
  }

  export type ShiftRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ShiftRoleWhereInput | ShiftRoleWhereInput[]
    OR?: ShiftRoleWhereInput[]
    NOT?: ShiftRoleWhereInput | ShiftRoleWhereInput[]
    description?: StringNullableFilter<"ShiftRole"> | string | null
    createdAt?: DateTimeFilter<"ShiftRole"> | Date | string
    updatedAt?: DateTimeFilter<"ShiftRole"> | Date | string
    shifts?: ShiftListRelationFilter
  }, "id" | "name">

  export type ShiftRoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShiftRoleCountOrderByAggregateInput
    _avg?: ShiftRoleAvgOrderByAggregateInput
    _max?: ShiftRoleMaxOrderByAggregateInput
    _min?: ShiftRoleMinOrderByAggregateInput
    _sum?: ShiftRoleSumOrderByAggregateInput
  }

  export type ShiftRoleScalarWhereWithAggregatesInput = {
    AND?: ShiftRoleScalarWhereWithAggregatesInput | ShiftRoleScalarWhereWithAggregatesInput[]
    OR?: ShiftRoleScalarWhereWithAggregatesInput[]
    NOT?: ShiftRoleScalarWhereWithAggregatesInput | ShiftRoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ShiftRole"> | number
    name?: StringWithAggregatesFilter<"ShiftRole"> | string
    description?: StringNullableWithAggregatesFilter<"ShiftRole"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ShiftRole"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ShiftRole"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: IntFilter<"Booking"> | number
    venue?: StringNullableFilter<"Booking"> | string | null
    dayOfWeek?: StringNullableFilter<"Booking"> | string | null
    startTime?: DateTimeFilter<"Booking"> | Date | string
    endTime?: DateTimeFilter<"Booking"> | Date | string
    playersCount?: IntFilter<"Booking"> | number
    hostsRequired?: IntFilter<"Booking"> | number
    food_required?: BoolFilter<"Booking"> | boolean
    is_b2b?: BoolFilter<"Booking"> | boolean
    status?: StringNullableFilter<"Booking"> | string | null
    eposFamily?: StringNullableFilter<"Booking"> | string | null
    bookingDescription?: StringNullableFilter<"Booking"> | string | null
    notes?: StringNullableFilter<"Booking"> | string | null
    customerId?: IntNullableFilter<"Booking"> | number | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
    foodItems?: BookingFoodItemListRelationFilter
    bookingHosts?: BookingHostListRelationFilter
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    venue?: SortOrderInput | SortOrder
    dayOfWeek?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    playersCount?: SortOrder
    hostsRequired?: SortOrder
    food_required?: SortOrder
    is_b2b?: SortOrder
    status?: SortOrderInput | SortOrder
    eposFamily?: SortOrderInput | SortOrder
    bookingDescription?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    customerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    foodItems?: BookingFoodItemOrderByRelationAggregateInput
    bookingHosts?: BookingHostOrderByRelationAggregateInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    venue?: StringNullableFilter<"Booking"> | string | null
    dayOfWeek?: StringNullableFilter<"Booking"> | string | null
    startTime?: DateTimeFilter<"Booking"> | Date | string
    endTime?: DateTimeFilter<"Booking"> | Date | string
    playersCount?: IntFilter<"Booking"> | number
    hostsRequired?: IntFilter<"Booking"> | number
    food_required?: BoolFilter<"Booking"> | boolean
    is_b2b?: BoolFilter<"Booking"> | boolean
    status?: StringNullableFilter<"Booking"> | string | null
    eposFamily?: StringNullableFilter<"Booking"> | string | null
    bookingDescription?: StringNullableFilter<"Booking"> | string | null
    notes?: StringNullableFilter<"Booking"> | string | null
    customerId?: IntNullableFilter<"Booking"> | number | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
    foodItems?: BookingFoodItemListRelationFilter
    bookingHosts?: BookingHostListRelationFilter
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    venue?: SortOrderInput | SortOrder
    dayOfWeek?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    playersCount?: SortOrder
    hostsRequired?: SortOrder
    food_required?: SortOrder
    is_b2b?: SortOrder
    status?: SortOrderInput | SortOrder
    eposFamily?: SortOrderInput | SortOrder
    bookingDescription?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    customerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Booking"> | number
    venue?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    dayOfWeek?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    startTime?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    playersCount?: IntWithAggregatesFilter<"Booking"> | number
    hostsRequired?: IntWithAggregatesFilter<"Booking"> | number
    food_required?: BoolWithAggregatesFilter<"Booking"> | boolean
    is_b2b?: BoolWithAggregatesFilter<"Booking"> | boolean
    status?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    eposFamily?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    bookingDescription?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    customerId?: IntNullableWithAggregatesFilter<"Booking"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type PackageWhereInput = {
    AND?: PackageWhereInput | PackageWhereInput[]
    OR?: PackageWhereInput[]
    NOT?: PackageWhereInput | PackageWhereInput[]
    id?: IntFilter<"Package"> | number
    name?: StringFilter<"Package"> | string
    category?: EnumPackageCategoryFilter<"Package"> | $Enums.PackageCategory
    groupType?: EnumGroupTypeFilter<"Package"> | $Enums.GroupType
    playTimeMin?: IntFilter<"Package"> | number
    visitDurationMin?: IntFilter<"Package"> | number
    pricePerPlayer?: DecimalFilter<"Package"> | Decimal | DecimalJsLike | number | string
    gameSelection?: StringNullableFilter<"Package"> | string | null
    freeDrink?: BoolFilter<"Package"> | boolean
    freeSupervisor?: BoolFilter<"Package"> | boolean
    createdAt?: DateTimeFilter<"Package"> | Date | string
    updatedAt?: DateTimeFilter<"Package"> | Date | string
  }

  export type PackageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    groupType?: SortOrder
    playTimeMin?: SortOrder
    visitDurationMin?: SortOrder
    pricePerPlayer?: SortOrder
    gameSelection?: SortOrderInput | SortOrder
    freeDrink?: SortOrder
    freeSupervisor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PackageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PackageWhereInput | PackageWhereInput[]
    OR?: PackageWhereInput[]
    NOT?: PackageWhereInput | PackageWhereInput[]
    name?: StringFilter<"Package"> | string
    category?: EnumPackageCategoryFilter<"Package"> | $Enums.PackageCategory
    groupType?: EnumGroupTypeFilter<"Package"> | $Enums.GroupType
    playTimeMin?: IntFilter<"Package"> | number
    visitDurationMin?: IntFilter<"Package"> | number
    pricePerPlayer?: DecimalFilter<"Package"> | Decimal | DecimalJsLike | number | string
    gameSelection?: StringNullableFilter<"Package"> | string | null
    freeDrink?: BoolFilter<"Package"> | boolean
    freeSupervisor?: BoolFilter<"Package"> | boolean
    createdAt?: DateTimeFilter<"Package"> | Date | string
    updatedAt?: DateTimeFilter<"Package"> | Date | string
  }, "id">

  export type PackageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    groupType?: SortOrder
    playTimeMin?: SortOrder
    visitDurationMin?: SortOrder
    pricePerPlayer?: SortOrder
    gameSelection?: SortOrderInput | SortOrder
    freeDrink?: SortOrder
    freeSupervisor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PackageCountOrderByAggregateInput
    _avg?: PackageAvgOrderByAggregateInput
    _max?: PackageMaxOrderByAggregateInput
    _min?: PackageMinOrderByAggregateInput
    _sum?: PackageSumOrderByAggregateInput
  }

  export type PackageScalarWhereWithAggregatesInput = {
    AND?: PackageScalarWhereWithAggregatesInput | PackageScalarWhereWithAggregatesInput[]
    OR?: PackageScalarWhereWithAggregatesInput[]
    NOT?: PackageScalarWhereWithAggregatesInput | PackageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Package"> | number
    name?: StringWithAggregatesFilter<"Package"> | string
    category?: EnumPackageCategoryWithAggregatesFilter<"Package"> | $Enums.PackageCategory
    groupType?: EnumGroupTypeWithAggregatesFilter<"Package"> | $Enums.GroupType
    playTimeMin?: IntWithAggregatesFilter<"Package"> | number
    visitDurationMin?: IntWithAggregatesFilter<"Package"> | number
    pricePerPlayer?: DecimalWithAggregatesFilter<"Package"> | Decimal | DecimalJsLike | number | string
    gameSelection?: StringNullableWithAggregatesFilter<"Package"> | string | null
    freeDrink?: BoolWithAggregatesFilter<"Package"> | boolean
    freeSupervisor?: BoolWithAggregatesFilter<"Package"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Package"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Package"> | Date | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: IntFilter<"Customer"> | number
    firstName?: StringFilter<"Customer"> | string
    lastName?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    phone?: StringNullableFilter<"Customer"> | string | null
    company?: StringNullableFilter<"Customer"> | string | null
    vatNumber?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    bookings?: BookingListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    vatNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    firstName?: StringFilter<"Customer"> | string
    lastName?: StringFilter<"Customer"> | string
    phone?: StringNullableFilter<"Customer"> | string | null
    company?: StringNullableFilter<"Customer"> | string | null
    vatNumber?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    bookings?: BookingListRelationFilter
  }, "id" | "email">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    vatNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Customer"> | number
    firstName?: StringWithAggregatesFilter<"Customer"> | string
    lastName?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringWithAggregatesFilter<"Customer"> | string
    phone?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    company?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    vatNumber?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type FoodItemWhereInput = {
    AND?: FoodItemWhereInput | FoodItemWhereInput[]
    OR?: FoodItemWhereInput[]
    NOT?: FoodItemWhereInput | FoodItemWhereInput[]
    id?: IntFilter<"FoodItem"> | number
    name?: StringFilter<"FoodItem"> | string
    description?: StringNullableFilter<"FoodItem"> | string | null
    createdAt?: DateTimeFilter<"FoodItem"> | Date | string
    updatedAt?: DateTimeFilter<"FoodItem"> | Date | string
    bookings?: BookingFoodItemListRelationFilter
  }

  export type FoodItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookings?: BookingFoodItemOrderByRelationAggregateInput
  }

  export type FoodItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FoodItemWhereInput | FoodItemWhereInput[]
    OR?: FoodItemWhereInput[]
    NOT?: FoodItemWhereInput | FoodItemWhereInput[]
    name?: StringFilter<"FoodItem"> | string
    description?: StringNullableFilter<"FoodItem"> | string | null
    createdAt?: DateTimeFilter<"FoodItem"> | Date | string
    updatedAt?: DateTimeFilter<"FoodItem"> | Date | string
    bookings?: BookingFoodItemListRelationFilter
  }, "id">

  export type FoodItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FoodItemCountOrderByAggregateInput
    _avg?: FoodItemAvgOrderByAggregateInput
    _max?: FoodItemMaxOrderByAggregateInput
    _min?: FoodItemMinOrderByAggregateInput
    _sum?: FoodItemSumOrderByAggregateInput
  }

  export type FoodItemScalarWhereWithAggregatesInput = {
    AND?: FoodItemScalarWhereWithAggregatesInput | FoodItemScalarWhereWithAggregatesInput[]
    OR?: FoodItemScalarWhereWithAggregatesInput[]
    NOT?: FoodItemScalarWhereWithAggregatesInput | FoodItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FoodItem"> | number
    name?: StringWithAggregatesFilter<"FoodItem"> | string
    description?: StringNullableWithAggregatesFilter<"FoodItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FoodItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FoodItem"> | Date | string
  }

  export type BookingFoodItemWhereInput = {
    AND?: BookingFoodItemWhereInput | BookingFoodItemWhereInput[]
    OR?: BookingFoodItemWhereInput[]
    NOT?: BookingFoodItemWhereInput | BookingFoodItemWhereInput[]
    id?: IntFilter<"BookingFoodItem"> | number
    bookingId?: IntFilter<"BookingFoodItem"> | number
    foodItemId?: IntFilter<"BookingFoodItem"> | number
    quantity?: IntFilter<"BookingFoodItem"> | number
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
    foodItem?: XOR<FoodItemScalarRelationFilter, FoodItemWhereInput>
  }

  export type BookingFoodItemOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    foodItemId?: SortOrder
    quantity?: SortOrder
    booking?: BookingOrderByWithRelationInput
    foodItem?: FoodItemOrderByWithRelationInput
  }

  export type BookingFoodItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookingFoodItemWhereInput | BookingFoodItemWhereInput[]
    OR?: BookingFoodItemWhereInput[]
    NOT?: BookingFoodItemWhereInput | BookingFoodItemWhereInput[]
    bookingId?: IntFilter<"BookingFoodItem"> | number
    foodItemId?: IntFilter<"BookingFoodItem"> | number
    quantity?: IntFilter<"BookingFoodItem"> | number
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
    foodItem?: XOR<FoodItemScalarRelationFilter, FoodItemWhereInput>
  }, "id">

  export type BookingFoodItemOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    foodItemId?: SortOrder
    quantity?: SortOrder
    _count?: BookingFoodItemCountOrderByAggregateInput
    _avg?: BookingFoodItemAvgOrderByAggregateInput
    _max?: BookingFoodItemMaxOrderByAggregateInput
    _min?: BookingFoodItemMinOrderByAggregateInput
    _sum?: BookingFoodItemSumOrderByAggregateInput
  }

  export type BookingFoodItemScalarWhereWithAggregatesInput = {
    AND?: BookingFoodItemScalarWhereWithAggregatesInput | BookingFoodItemScalarWhereWithAggregatesInput[]
    OR?: BookingFoodItemScalarWhereWithAggregatesInput[]
    NOT?: BookingFoodItemScalarWhereWithAggregatesInput | BookingFoodItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BookingFoodItem"> | number
    bookingId?: IntWithAggregatesFilter<"BookingFoodItem"> | number
    foodItemId?: IntWithAggregatesFilter<"BookingFoodItem"> | number
    quantity?: IntWithAggregatesFilter<"BookingFoodItem"> | number
  }

  export type BookingHostWhereInput = {
    AND?: BookingHostWhereInput | BookingHostWhereInput[]
    OR?: BookingHostWhereInput[]
    NOT?: BookingHostWhereInput | BookingHostWhereInput[]
    id?: IntFilter<"BookingHost"> | number
    bookingId?: IntFilter<"BookingHost"> | number
    hostId?: IntFilter<"BookingHost"> | number
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
    host?: XOR<HostScalarRelationFilter, HostWhereInput>
  }

  export type BookingHostOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    hostId?: SortOrder
    booking?: BookingOrderByWithRelationInput
    host?: HostOrderByWithRelationInput
  }

  export type BookingHostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookingHostWhereInput | BookingHostWhereInput[]
    OR?: BookingHostWhereInput[]
    NOT?: BookingHostWhereInput | BookingHostWhereInput[]
    bookingId?: IntFilter<"BookingHost"> | number
    hostId?: IntFilter<"BookingHost"> | number
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
    host?: XOR<HostScalarRelationFilter, HostWhereInput>
  }, "id">

  export type BookingHostOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    hostId?: SortOrder
    _count?: BookingHostCountOrderByAggregateInput
    _avg?: BookingHostAvgOrderByAggregateInput
    _max?: BookingHostMaxOrderByAggregateInput
    _min?: BookingHostMinOrderByAggregateInput
    _sum?: BookingHostSumOrderByAggregateInput
  }

  export type BookingHostScalarWhereWithAggregatesInput = {
    AND?: BookingHostScalarWhereWithAggregatesInput | BookingHostScalarWhereWithAggregatesInput[]
    OR?: BookingHostScalarWhereWithAggregatesInput[]
    NOT?: BookingHostScalarWhereWithAggregatesInput | BookingHostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BookingHost"> | number
    bookingId?: IntWithAggregatesFilter<"BookingHost"> | number
    hostId?: IntWithAggregatesFilter<"BookingHost"> | number
  }

  export type UserCreateInput = {
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    password: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    role: UserRoleCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    password: string
    role_id: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: UserRoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    password: string
    role_id: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type UserRoleUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type UserRoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type UserRoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type UserRoleCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HostCreateInput = {
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookingHosts?: BookingHostCreateNestedManyWithoutHostInput
    shifts?: ShiftCreateNestedManyWithoutHostInput
  }

  export type HostUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookingHosts?: BookingHostUncheckedCreateNestedManyWithoutHostInput
    shifts?: ShiftUncheckedCreateNestedManyWithoutHostInput
  }

  export type HostUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingHosts?: BookingHostUpdateManyWithoutHostNestedInput
    shifts?: ShiftUpdateManyWithoutHostNestedInput
  }

  export type HostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingHosts?: BookingHostUncheckedUpdateManyWithoutHostNestedInput
    shifts?: ShiftUncheckedUpdateManyWithoutHostNestedInput
  }

  export type HostCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HostUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftCreateInput = {
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    host?: HostCreateNestedOneWithoutShiftsInput
    role?: ShiftRoleCreateNestedOneWithoutShiftsInput
  }

  export type ShiftUncheckedCreateInput = {
    id?: number
    hostId?: number | null
    startTime: Date | string
    endTime: Date | string
    roleId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShiftUpdateInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    host?: HostUpdateOneWithoutShiftsNestedInput
    role?: ShiftRoleUpdateOneWithoutShiftsNestedInput
  }

  export type ShiftUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    hostId?: NullableIntFieldUpdateOperationsInput | number | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftCreateManyInput = {
    id?: number
    hostId?: number | null
    startTime: Date | string
    endTime: Date | string
    roleId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShiftUpdateManyMutationInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    hostId?: NullableIntFieldUpdateOperationsInput | number | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftRoleCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shifts?: ShiftCreateNestedManyWithoutRoleInput
  }

  export type ShiftRoleUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shifts?: ShiftUncheckedCreateNestedManyWithoutRoleInput
  }

  export type ShiftRoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shifts?: ShiftUpdateManyWithoutRoleNestedInput
  }

  export type ShiftRoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shifts?: ShiftUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type ShiftRoleCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShiftRoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftRoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    venue?: string | null
    dayOfWeek?: string | null
    startTime: Date | string
    endTime: Date | string
    playersCount: number
    hostsRequired: number
    food_required?: boolean
    is_b2b?: boolean
    status?: string | null
    eposFamily?: string | null
    bookingDescription?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer?: CustomerCreateNestedOneWithoutBookingsInput
    foodItems?: BookingFoodItemCreateNestedManyWithoutBookingInput
    bookingHosts?: BookingHostCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: number
    venue?: string | null
    dayOfWeek?: string | null
    startTime: Date | string
    endTime: Date | string
    playersCount: number
    hostsRequired: number
    food_required?: boolean
    is_b2b?: boolean
    status?: string | null
    eposFamily?: string | null
    bookingDescription?: string | null
    notes?: string | null
    customerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    foodItems?: BookingFoodItemUncheckedCreateNestedManyWithoutBookingInput
    bookingHosts?: BookingHostUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingUpdateInput = {
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    dayOfWeek?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    playersCount?: IntFieldUpdateOperationsInput | number
    hostsRequired?: IntFieldUpdateOperationsInput | number
    food_required?: BoolFieldUpdateOperationsInput | boolean
    is_b2b?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    eposFamily?: NullableStringFieldUpdateOperationsInput | string | null
    bookingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutBookingsNestedInput
    foodItems?: BookingFoodItemUpdateManyWithoutBookingNestedInput
    bookingHosts?: BookingHostUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    dayOfWeek?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    playersCount?: IntFieldUpdateOperationsInput | number
    hostsRequired?: IntFieldUpdateOperationsInput | number
    food_required?: BoolFieldUpdateOperationsInput | boolean
    is_b2b?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    eposFamily?: NullableStringFieldUpdateOperationsInput | string | null
    bookingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodItems?: BookingFoodItemUncheckedUpdateManyWithoutBookingNestedInput
    bookingHosts?: BookingHostUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    id?: number
    venue?: string | null
    dayOfWeek?: string | null
    startTime: Date | string
    endTime: Date | string
    playersCount: number
    hostsRequired: number
    food_required?: boolean
    is_b2b?: boolean
    status?: string | null
    eposFamily?: string | null
    bookingDescription?: string | null
    notes?: string | null
    customerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    dayOfWeek?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    playersCount?: IntFieldUpdateOperationsInput | number
    hostsRequired?: IntFieldUpdateOperationsInput | number
    food_required?: BoolFieldUpdateOperationsInput | boolean
    is_b2b?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    eposFamily?: NullableStringFieldUpdateOperationsInput | string | null
    bookingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    dayOfWeek?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    playersCount?: IntFieldUpdateOperationsInput | number
    hostsRequired?: IntFieldUpdateOperationsInput | number
    food_required?: BoolFieldUpdateOperationsInput | boolean
    is_b2b?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    eposFamily?: NullableStringFieldUpdateOperationsInput | string | null
    bookingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageCreateInput = {
    name: string
    category: $Enums.PackageCategory
    groupType: $Enums.GroupType
    playTimeMin: number
    visitDurationMin: number
    pricePerPlayer: Decimal | DecimalJsLike | number | string
    gameSelection?: string | null
    freeDrink?: boolean
    freeSupervisor?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PackageUncheckedCreateInput = {
    id?: number
    name: string
    category: $Enums.PackageCategory
    groupType: $Enums.GroupType
    playTimeMin: number
    visitDurationMin: number
    pricePerPlayer: Decimal | DecimalJsLike | number | string
    gameSelection?: string | null
    freeDrink?: boolean
    freeSupervisor?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PackageUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumPackageCategoryFieldUpdateOperationsInput | $Enums.PackageCategory
    groupType?: EnumGroupTypeFieldUpdateOperationsInput | $Enums.GroupType
    playTimeMin?: IntFieldUpdateOperationsInput | number
    visitDurationMin?: IntFieldUpdateOperationsInput | number
    pricePerPlayer?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gameSelection?: NullableStringFieldUpdateOperationsInput | string | null
    freeDrink?: BoolFieldUpdateOperationsInput | boolean
    freeSupervisor?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumPackageCategoryFieldUpdateOperationsInput | $Enums.PackageCategory
    groupType?: EnumGroupTypeFieldUpdateOperationsInput | $Enums.GroupType
    playTimeMin?: IntFieldUpdateOperationsInput | number
    visitDurationMin?: IntFieldUpdateOperationsInput | number
    pricePerPlayer?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gameSelection?: NullableStringFieldUpdateOperationsInput | string | null
    freeDrink?: BoolFieldUpdateOperationsInput | boolean
    freeSupervisor?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageCreateManyInput = {
    id?: number
    name: string
    category: $Enums.PackageCategory
    groupType: $Enums.GroupType
    playTimeMin: number
    visitDurationMin: number
    pricePerPlayer: Decimal | DecimalJsLike | number | string
    gameSelection?: string | null
    freeDrink?: boolean
    freeSupervisor?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PackageUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumPackageCategoryFieldUpdateOperationsInput | $Enums.PackageCategory
    groupType?: EnumGroupTypeFieldUpdateOperationsInput | $Enums.GroupType
    playTimeMin?: IntFieldUpdateOperationsInput | number
    visitDurationMin?: IntFieldUpdateOperationsInput | number
    pricePerPlayer?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gameSelection?: NullableStringFieldUpdateOperationsInput | string | null
    freeDrink?: BoolFieldUpdateOperationsInput | boolean
    freeSupervisor?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumPackageCategoryFieldUpdateOperationsInput | $Enums.PackageCategory
    groupType?: EnumGroupTypeFieldUpdateOperationsInput | $Enums.GroupType
    playTimeMin?: IntFieldUpdateOperationsInput | number
    visitDurationMin?: IntFieldUpdateOperationsInput | number
    pricePerPlayer?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gameSelection?: NullableStringFieldUpdateOperationsInput | string | null
    freeDrink?: BoolFieldUpdateOperationsInput | boolean
    freeSupervisor?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    company?: string | null
    vatNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    company?: string | null
    vatNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    vatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    vatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    company?: string | null
    vatNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    vatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    vatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodItemCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingFoodItemCreateNestedManyWithoutFoodItemInput
  }

  export type FoodItemUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingFoodItemUncheckedCreateNestedManyWithoutFoodItemInput
  }

  export type FoodItemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingFoodItemUpdateManyWithoutFoodItemNestedInput
  }

  export type FoodItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingFoodItemUncheckedUpdateManyWithoutFoodItemNestedInput
  }

  export type FoodItemCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodItemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingFoodItemCreateInput = {
    quantity?: number
    booking: BookingCreateNestedOneWithoutFoodItemsInput
    foodItem: FoodItemCreateNestedOneWithoutBookingsInput
  }

  export type BookingFoodItemUncheckedCreateInput = {
    id?: number
    bookingId: number
    foodItemId: number
    quantity?: number
  }

  export type BookingFoodItemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    booking?: BookingUpdateOneRequiredWithoutFoodItemsNestedInput
    foodItem?: FoodItemUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingFoodItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    foodItemId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type BookingFoodItemCreateManyInput = {
    id?: number
    bookingId: number
    foodItemId: number
    quantity?: number
  }

  export type BookingFoodItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type BookingFoodItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    foodItemId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type BookingHostCreateInput = {
    booking: BookingCreateNestedOneWithoutBookingHostsInput
    host: HostCreateNestedOneWithoutBookingHostsInput
  }

  export type BookingHostUncheckedCreateInput = {
    id?: number
    bookingId: number
    hostId: number
  }

  export type BookingHostUpdateInput = {
    booking?: BookingUpdateOneRequiredWithoutBookingHostsNestedInput
    host?: HostUpdateOneRequiredWithoutBookingHostsNestedInput
  }

  export type BookingHostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    hostId?: IntFieldUpdateOperationsInput | number
  }

  export type BookingHostCreateManyInput = {
    id?: number
    bookingId: number
    hostId: number
  }

  export type BookingHostUpdateManyMutationInput = {

  }

  export type BookingHostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    hostId?: IntFieldUpdateOperationsInput | number
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

  export type UserRoleScalarRelationFilter = {
    is?: UserRoleWhereInput
    isNot?: UserRoleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserRoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserRoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserRoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserRoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BookingHostListRelationFilter = {
    every?: BookingHostWhereInput
    some?: BookingHostWhereInput
    none?: BookingHostWhereInput
  }

  export type ShiftListRelationFilter = {
    every?: ShiftWhereInput
    some?: ShiftWhereInput
    none?: ShiftWhereInput
  }

  export type BookingHostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShiftOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HostCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HostAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HostMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HostMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HostSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type HostNullableScalarRelationFilter = {
    is?: HostWhereInput | null
    isNot?: HostWhereInput | null
  }

  export type ShiftRoleNullableScalarRelationFilter = {
    is?: ShiftRoleWhereInput | null
    isNot?: ShiftRoleWhereInput | null
  }

  export type ShiftCountOrderByAggregateInput = {
    id?: SortOrder
    hostId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShiftAvgOrderByAggregateInput = {
    id?: SortOrder
    hostId?: SortOrder
    roleId?: SortOrder
  }

  export type ShiftMaxOrderByAggregateInput = {
    id?: SortOrder
    hostId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShiftMinOrderByAggregateInput = {
    id?: SortOrder
    hostId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShiftSumOrderByAggregateInput = {
    id?: SortOrder
    hostId?: SortOrder
    roleId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ShiftRoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShiftRoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ShiftRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShiftRoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShiftRoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomerNullableScalarRelationFilter = {
    is?: CustomerWhereInput | null
    isNot?: CustomerWhereInput | null
  }

  export type BookingFoodItemListRelationFilter = {
    every?: BookingFoodItemWhereInput
    some?: BookingFoodItemWhereInput
    none?: BookingFoodItemWhereInput
  }

  export type BookingFoodItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    venue?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    playersCount?: SortOrder
    hostsRequired?: SortOrder
    food_required?: SortOrder
    is_b2b?: SortOrder
    status?: SortOrder
    eposFamily?: SortOrder
    bookingDescription?: SortOrder
    notes?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    id?: SortOrder
    playersCount?: SortOrder
    hostsRequired?: SortOrder
    customerId?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    venue?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    playersCount?: SortOrder
    hostsRequired?: SortOrder
    food_required?: SortOrder
    is_b2b?: SortOrder
    status?: SortOrder
    eposFamily?: SortOrder
    bookingDescription?: SortOrder
    notes?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    venue?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    playersCount?: SortOrder
    hostsRequired?: SortOrder
    food_required?: SortOrder
    is_b2b?: SortOrder
    status?: SortOrder
    eposFamily?: SortOrder
    bookingDescription?: SortOrder
    notes?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    id?: SortOrder
    playersCount?: SortOrder
    hostsRequired?: SortOrder
    customerId?: SortOrder
  }

  export type EnumPackageCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageCategory | EnumPackageCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.PackageCategory[] | ListEnumPackageCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.PackageCategory[] | ListEnumPackageCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumPackageCategoryFilter<$PrismaModel> | $Enums.PackageCategory
  }

  export type EnumGroupTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupType | EnumGroupTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GroupType[] | ListEnumGroupTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GroupType[] | ListEnumGroupTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupTypeFilter<$PrismaModel> | $Enums.GroupType
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

  export type PackageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    groupType?: SortOrder
    playTimeMin?: SortOrder
    visitDurationMin?: SortOrder
    pricePerPlayer?: SortOrder
    gameSelection?: SortOrder
    freeDrink?: SortOrder
    freeSupervisor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PackageAvgOrderByAggregateInput = {
    id?: SortOrder
    playTimeMin?: SortOrder
    visitDurationMin?: SortOrder
    pricePerPlayer?: SortOrder
  }

  export type PackageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    groupType?: SortOrder
    playTimeMin?: SortOrder
    visitDurationMin?: SortOrder
    pricePerPlayer?: SortOrder
    gameSelection?: SortOrder
    freeDrink?: SortOrder
    freeSupervisor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PackageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    groupType?: SortOrder
    playTimeMin?: SortOrder
    visitDurationMin?: SortOrder
    pricePerPlayer?: SortOrder
    gameSelection?: SortOrder
    freeDrink?: SortOrder
    freeSupervisor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PackageSumOrderByAggregateInput = {
    id?: SortOrder
    playTimeMin?: SortOrder
    visitDurationMin?: SortOrder
    pricePerPlayer?: SortOrder
  }

  export type EnumPackageCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageCategory | EnumPackageCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.PackageCategory[] | ListEnumPackageCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.PackageCategory[] | ListEnumPackageCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumPackageCategoryWithAggregatesFilter<$PrismaModel> | $Enums.PackageCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPackageCategoryFilter<$PrismaModel>
    _max?: NestedEnumPackageCategoryFilter<$PrismaModel>
  }

  export type EnumGroupTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupType | EnumGroupTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GroupType[] | ListEnumGroupTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GroupType[] | ListEnumGroupTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupTypeWithAggregatesFilter<$PrismaModel> | $Enums.GroupType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGroupTypeFilter<$PrismaModel>
    _max?: NestedEnumGroupTypeFilter<$PrismaModel>
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

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    company?: SortOrder
    vatNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    company?: SortOrder
    vatNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    company?: SortOrder
    vatNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FoodItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodItemAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FoodItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodItemSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BookingScalarRelationFilter = {
    is?: BookingWhereInput
    isNot?: BookingWhereInput
  }

  export type FoodItemScalarRelationFilter = {
    is?: FoodItemWhereInput
    isNot?: FoodItemWhereInput
  }

  export type BookingFoodItemCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    foodItemId?: SortOrder
    quantity?: SortOrder
  }

  export type BookingFoodItemAvgOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    foodItemId?: SortOrder
    quantity?: SortOrder
  }

  export type BookingFoodItemMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    foodItemId?: SortOrder
    quantity?: SortOrder
  }

  export type BookingFoodItemMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    foodItemId?: SortOrder
    quantity?: SortOrder
  }

  export type BookingFoodItemSumOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    foodItemId?: SortOrder
    quantity?: SortOrder
  }

  export type HostScalarRelationFilter = {
    is?: HostWhereInput
    isNot?: HostWhereInput
  }

  export type BookingHostCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    hostId?: SortOrder
  }

  export type BookingHostAvgOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    hostId?: SortOrder
  }

  export type BookingHostMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    hostId?: SortOrder
  }

  export type BookingHostMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    hostId?: SortOrder
  }

  export type BookingHostSumOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    hostId?: SortOrder
  }

  export type UserRoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<UserRoleCreateWithoutUsersInput, UserRoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UserRoleCreateOrConnectWithoutUsersInput
    connect?: UserRoleWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserRoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<UserRoleCreateWithoutUsersInput, UserRoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UserRoleCreateOrConnectWithoutUsersInput
    upsert?: UserRoleUpsertWithoutUsersInput
    connect?: UserRoleWhereUniqueInput
    update?: XOR<XOR<UserRoleUpdateToOneWithWhereWithoutUsersInput, UserRoleUpdateWithoutUsersInput>, UserRoleUncheckedUpdateWithoutUsersInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type BookingHostCreateNestedManyWithoutHostInput = {
    create?: XOR<BookingHostCreateWithoutHostInput, BookingHostUncheckedCreateWithoutHostInput> | BookingHostCreateWithoutHostInput[] | BookingHostUncheckedCreateWithoutHostInput[]
    connectOrCreate?: BookingHostCreateOrConnectWithoutHostInput | BookingHostCreateOrConnectWithoutHostInput[]
    createMany?: BookingHostCreateManyHostInputEnvelope
    connect?: BookingHostWhereUniqueInput | BookingHostWhereUniqueInput[]
  }

  export type ShiftCreateNestedManyWithoutHostInput = {
    create?: XOR<ShiftCreateWithoutHostInput, ShiftUncheckedCreateWithoutHostInput> | ShiftCreateWithoutHostInput[] | ShiftUncheckedCreateWithoutHostInput[]
    connectOrCreate?: ShiftCreateOrConnectWithoutHostInput | ShiftCreateOrConnectWithoutHostInput[]
    createMany?: ShiftCreateManyHostInputEnvelope
    connect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
  }

  export type BookingHostUncheckedCreateNestedManyWithoutHostInput = {
    create?: XOR<BookingHostCreateWithoutHostInput, BookingHostUncheckedCreateWithoutHostInput> | BookingHostCreateWithoutHostInput[] | BookingHostUncheckedCreateWithoutHostInput[]
    connectOrCreate?: BookingHostCreateOrConnectWithoutHostInput | BookingHostCreateOrConnectWithoutHostInput[]
    createMany?: BookingHostCreateManyHostInputEnvelope
    connect?: BookingHostWhereUniqueInput | BookingHostWhereUniqueInput[]
  }

  export type ShiftUncheckedCreateNestedManyWithoutHostInput = {
    create?: XOR<ShiftCreateWithoutHostInput, ShiftUncheckedCreateWithoutHostInput> | ShiftCreateWithoutHostInput[] | ShiftUncheckedCreateWithoutHostInput[]
    connectOrCreate?: ShiftCreateOrConnectWithoutHostInput | ShiftCreateOrConnectWithoutHostInput[]
    createMany?: ShiftCreateManyHostInputEnvelope
    connect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
  }

  export type BookingHostUpdateManyWithoutHostNestedInput = {
    create?: XOR<BookingHostCreateWithoutHostInput, BookingHostUncheckedCreateWithoutHostInput> | BookingHostCreateWithoutHostInput[] | BookingHostUncheckedCreateWithoutHostInput[]
    connectOrCreate?: BookingHostCreateOrConnectWithoutHostInput | BookingHostCreateOrConnectWithoutHostInput[]
    upsert?: BookingHostUpsertWithWhereUniqueWithoutHostInput | BookingHostUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: BookingHostCreateManyHostInputEnvelope
    set?: BookingHostWhereUniqueInput | BookingHostWhereUniqueInput[]
    disconnect?: BookingHostWhereUniqueInput | BookingHostWhereUniqueInput[]
    delete?: BookingHostWhereUniqueInput | BookingHostWhereUniqueInput[]
    connect?: BookingHostWhereUniqueInput | BookingHostWhereUniqueInput[]
    update?: BookingHostUpdateWithWhereUniqueWithoutHostInput | BookingHostUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: BookingHostUpdateManyWithWhereWithoutHostInput | BookingHostUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: BookingHostScalarWhereInput | BookingHostScalarWhereInput[]
  }

  export type ShiftUpdateManyWithoutHostNestedInput = {
    create?: XOR<ShiftCreateWithoutHostInput, ShiftUncheckedCreateWithoutHostInput> | ShiftCreateWithoutHostInput[] | ShiftUncheckedCreateWithoutHostInput[]
    connectOrCreate?: ShiftCreateOrConnectWithoutHostInput | ShiftCreateOrConnectWithoutHostInput[]
    upsert?: ShiftUpsertWithWhereUniqueWithoutHostInput | ShiftUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: ShiftCreateManyHostInputEnvelope
    set?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    disconnect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    delete?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    connect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    update?: ShiftUpdateWithWhereUniqueWithoutHostInput | ShiftUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: ShiftUpdateManyWithWhereWithoutHostInput | ShiftUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: ShiftScalarWhereInput | ShiftScalarWhereInput[]
  }

  export type BookingHostUncheckedUpdateManyWithoutHostNestedInput = {
    create?: XOR<BookingHostCreateWithoutHostInput, BookingHostUncheckedCreateWithoutHostInput> | BookingHostCreateWithoutHostInput[] | BookingHostUncheckedCreateWithoutHostInput[]
    connectOrCreate?: BookingHostCreateOrConnectWithoutHostInput | BookingHostCreateOrConnectWithoutHostInput[]
    upsert?: BookingHostUpsertWithWhereUniqueWithoutHostInput | BookingHostUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: BookingHostCreateManyHostInputEnvelope
    set?: BookingHostWhereUniqueInput | BookingHostWhereUniqueInput[]
    disconnect?: BookingHostWhereUniqueInput | BookingHostWhereUniqueInput[]
    delete?: BookingHostWhereUniqueInput | BookingHostWhereUniqueInput[]
    connect?: BookingHostWhereUniqueInput | BookingHostWhereUniqueInput[]
    update?: BookingHostUpdateWithWhereUniqueWithoutHostInput | BookingHostUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: BookingHostUpdateManyWithWhereWithoutHostInput | BookingHostUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: BookingHostScalarWhereInput | BookingHostScalarWhereInput[]
  }

  export type ShiftUncheckedUpdateManyWithoutHostNestedInput = {
    create?: XOR<ShiftCreateWithoutHostInput, ShiftUncheckedCreateWithoutHostInput> | ShiftCreateWithoutHostInput[] | ShiftUncheckedCreateWithoutHostInput[]
    connectOrCreate?: ShiftCreateOrConnectWithoutHostInput | ShiftCreateOrConnectWithoutHostInput[]
    upsert?: ShiftUpsertWithWhereUniqueWithoutHostInput | ShiftUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: ShiftCreateManyHostInputEnvelope
    set?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    disconnect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    delete?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    connect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    update?: ShiftUpdateWithWhereUniqueWithoutHostInput | ShiftUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: ShiftUpdateManyWithWhereWithoutHostInput | ShiftUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: ShiftScalarWhereInput | ShiftScalarWhereInput[]
  }

  export type HostCreateNestedOneWithoutShiftsInput = {
    create?: XOR<HostCreateWithoutShiftsInput, HostUncheckedCreateWithoutShiftsInput>
    connectOrCreate?: HostCreateOrConnectWithoutShiftsInput
    connect?: HostWhereUniqueInput
  }

  export type ShiftRoleCreateNestedOneWithoutShiftsInput = {
    create?: XOR<ShiftRoleCreateWithoutShiftsInput, ShiftRoleUncheckedCreateWithoutShiftsInput>
    connectOrCreate?: ShiftRoleCreateOrConnectWithoutShiftsInput
    connect?: ShiftRoleWhereUniqueInput
  }

  export type HostUpdateOneWithoutShiftsNestedInput = {
    create?: XOR<HostCreateWithoutShiftsInput, HostUncheckedCreateWithoutShiftsInput>
    connectOrCreate?: HostCreateOrConnectWithoutShiftsInput
    upsert?: HostUpsertWithoutShiftsInput
    disconnect?: HostWhereInput | boolean
    delete?: HostWhereInput | boolean
    connect?: HostWhereUniqueInput
    update?: XOR<XOR<HostUpdateToOneWithWhereWithoutShiftsInput, HostUpdateWithoutShiftsInput>, HostUncheckedUpdateWithoutShiftsInput>
  }

  export type ShiftRoleUpdateOneWithoutShiftsNestedInput = {
    create?: XOR<ShiftRoleCreateWithoutShiftsInput, ShiftRoleUncheckedCreateWithoutShiftsInput>
    connectOrCreate?: ShiftRoleCreateOrConnectWithoutShiftsInput
    upsert?: ShiftRoleUpsertWithoutShiftsInput
    disconnect?: ShiftRoleWhereInput | boolean
    delete?: ShiftRoleWhereInput | boolean
    connect?: ShiftRoleWhereUniqueInput
    update?: XOR<XOR<ShiftRoleUpdateToOneWithWhereWithoutShiftsInput, ShiftRoleUpdateWithoutShiftsInput>, ShiftRoleUncheckedUpdateWithoutShiftsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ShiftCreateNestedManyWithoutRoleInput = {
    create?: XOR<ShiftCreateWithoutRoleInput, ShiftUncheckedCreateWithoutRoleInput> | ShiftCreateWithoutRoleInput[] | ShiftUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ShiftCreateOrConnectWithoutRoleInput | ShiftCreateOrConnectWithoutRoleInput[]
    createMany?: ShiftCreateManyRoleInputEnvelope
    connect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
  }

  export type ShiftUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<ShiftCreateWithoutRoleInput, ShiftUncheckedCreateWithoutRoleInput> | ShiftCreateWithoutRoleInput[] | ShiftUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ShiftCreateOrConnectWithoutRoleInput | ShiftCreateOrConnectWithoutRoleInput[]
    createMany?: ShiftCreateManyRoleInputEnvelope
    connect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
  }

  export type ShiftUpdateManyWithoutRoleNestedInput = {
    create?: XOR<ShiftCreateWithoutRoleInput, ShiftUncheckedCreateWithoutRoleInput> | ShiftCreateWithoutRoleInput[] | ShiftUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ShiftCreateOrConnectWithoutRoleInput | ShiftCreateOrConnectWithoutRoleInput[]
    upsert?: ShiftUpsertWithWhereUniqueWithoutRoleInput | ShiftUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: ShiftCreateManyRoleInputEnvelope
    set?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    disconnect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    delete?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    connect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    update?: ShiftUpdateWithWhereUniqueWithoutRoleInput | ShiftUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: ShiftUpdateManyWithWhereWithoutRoleInput | ShiftUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: ShiftScalarWhereInput | ShiftScalarWhereInput[]
  }

  export type ShiftUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<ShiftCreateWithoutRoleInput, ShiftUncheckedCreateWithoutRoleInput> | ShiftCreateWithoutRoleInput[] | ShiftUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ShiftCreateOrConnectWithoutRoleInput | ShiftCreateOrConnectWithoutRoleInput[]
    upsert?: ShiftUpsertWithWhereUniqueWithoutRoleInput | ShiftUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: ShiftCreateManyRoleInputEnvelope
    set?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    disconnect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    delete?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    connect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    update?: ShiftUpdateWithWhereUniqueWithoutRoleInput | ShiftUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: ShiftUpdateManyWithWhereWithoutRoleInput | ShiftUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: ShiftScalarWhereInput | ShiftScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutBookingsInput = {
    create?: XOR<CustomerCreateWithoutBookingsInput, CustomerUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutBookingsInput
    connect?: CustomerWhereUniqueInput
  }

  export type BookingFoodItemCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingFoodItemCreateWithoutBookingInput, BookingFoodItemUncheckedCreateWithoutBookingInput> | BookingFoodItemCreateWithoutBookingInput[] | BookingFoodItemUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingFoodItemCreateOrConnectWithoutBookingInput | BookingFoodItemCreateOrConnectWithoutBookingInput[]
    createMany?: BookingFoodItemCreateManyBookingInputEnvelope
    connect?: BookingFoodItemWhereUniqueInput | BookingFoodItemWhereUniqueInput[]
  }

  export type BookingHostCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingHostCreateWithoutBookingInput, BookingHostUncheckedCreateWithoutBookingInput> | BookingHostCreateWithoutBookingInput[] | BookingHostUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingHostCreateOrConnectWithoutBookingInput | BookingHostCreateOrConnectWithoutBookingInput[]
    createMany?: BookingHostCreateManyBookingInputEnvelope
    connect?: BookingHostWhereUniqueInput | BookingHostWhereUniqueInput[]
  }

  export type BookingFoodItemUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingFoodItemCreateWithoutBookingInput, BookingFoodItemUncheckedCreateWithoutBookingInput> | BookingFoodItemCreateWithoutBookingInput[] | BookingFoodItemUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingFoodItemCreateOrConnectWithoutBookingInput | BookingFoodItemCreateOrConnectWithoutBookingInput[]
    createMany?: BookingFoodItemCreateManyBookingInputEnvelope
    connect?: BookingFoodItemWhereUniqueInput | BookingFoodItemWhereUniqueInput[]
  }

  export type BookingHostUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingHostCreateWithoutBookingInput, BookingHostUncheckedCreateWithoutBookingInput> | BookingHostCreateWithoutBookingInput[] | BookingHostUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingHostCreateOrConnectWithoutBookingInput | BookingHostCreateOrConnectWithoutBookingInput[]
    createMany?: BookingHostCreateManyBookingInputEnvelope
    connect?: BookingHostWhereUniqueInput | BookingHostWhereUniqueInput[]
  }

  export type CustomerUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<CustomerCreateWithoutBookingsInput, CustomerUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutBookingsInput
    upsert?: CustomerUpsertWithoutBookingsInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutBookingsInput, CustomerUpdateWithoutBookingsInput>, CustomerUncheckedUpdateWithoutBookingsInput>
  }

  export type BookingFoodItemUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingFoodItemCreateWithoutBookingInput, BookingFoodItemUncheckedCreateWithoutBookingInput> | BookingFoodItemCreateWithoutBookingInput[] | BookingFoodItemUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingFoodItemCreateOrConnectWithoutBookingInput | BookingFoodItemCreateOrConnectWithoutBookingInput[]
    upsert?: BookingFoodItemUpsertWithWhereUniqueWithoutBookingInput | BookingFoodItemUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingFoodItemCreateManyBookingInputEnvelope
    set?: BookingFoodItemWhereUniqueInput | BookingFoodItemWhereUniqueInput[]
    disconnect?: BookingFoodItemWhereUniqueInput | BookingFoodItemWhereUniqueInput[]
    delete?: BookingFoodItemWhereUniqueInput | BookingFoodItemWhereUniqueInput[]
    connect?: BookingFoodItemWhereUniqueInput | BookingFoodItemWhereUniqueInput[]
    update?: BookingFoodItemUpdateWithWhereUniqueWithoutBookingInput | BookingFoodItemUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingFoodItemUpdateManyWithWhereWithoutBookingInput | BookingFoodItemUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingFoodItemScalarWhereInput | BookingFoodItemScalarWhereInput[]
  }

  export type BookingHostUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingHostCreateWithoutBookingInput, BookingHostUncheckedCreateWithoutBookingInput> | BookingHostCreateWithoutBookingInput[] | BookingHostUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingHostCreateOrConnectWithoutBookingInput | BookingHostCreateOrConnectWithoutBookingInput[]
    upsert?: BookingHostUpsertWithWhereUniqueWithoutBookingInput | BookingHostUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingHostCreateManyBookingInputEnvelope
    set?: BookingHostWhereUniqueInput | BookingHostWhereUniqueInput[]
    disconnect?: BookingHostWhereUniqueInput | BookingHostWhereUniqueInput[]
    delete?: BookingHostWhereUniqueInput | BookingHostWhereUniqueInput[]
    connect?: BookingHostWhereUniqueInput | BookingHostWhereUniqueInput[]
    update?: BookingHostUpdateWithWhereUniqueWithoutBookingInput | BookingHostUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingHostUpdateManyWithWhereWithoutBookingInput | BookingHostUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingHostScalarWhereInput | BookingHostScalarWhereInput[]
  }

  export type BookingFoodItemUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingFoodItemCreateWithoutBookingInput, BookingFoodItemUncheckedCreateWithoutBookingInput> | BookingFoodItemCreateWithoutBookingInput[] | BookingFoodItemUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingFoodItemCreateOrConnectWithoutBookingInput | BookingFoodItemCreateOrConnectWithoutBookingInput[]
    upsert?: BookingFoodItemUpsertWithWhereUniqueWithoutBookingInput | BookingFoodItemUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingFoodItemCreateManyBookingInputEnvelope
    set?: BookingFoodItemWhereUniqueInput | BookingFoodItemWhereUniqueInput[]
    disconnect?: BookingFoodItemWhereUniqueInput | BookingFoodItemWhereUniqueInput[]
    delete?: BookingFoodItemWhereUniqueInput | BookingFoodItemWhereUniqueInput[]
    connect?: BookingFoodItemWhereUniqueInput | BookingFoodItemWhereUniqueInput[]
    update?: BookingFoodItemUpdateWithWhereUniqueWithoutBookingInput | BookingFoodItemUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingFoodItemUpdateManyWithWhereWithoutBookingInput | BookingFoodItemUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingFoodItemScalarWhereInput | BookingFoodItemScalarWhereInput[]
  }

  export type BookingHostUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingHostCreateWithoutBookingInput, BookingHostUncheckedCreateWithoutBookingInput> | BookingHostCreateWithoutBookingInput[] | BookingHostUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingHostCreateOrConnectWithoutBookingInput | BookingHostCreateOrConnectWithoutBookingInput[]
    upsert?: BookingHostUpsertWithWhereUniqueWithoutBookingInput | BookingHostUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingHostCreateManyBookingInputEnvelope
    set?: BookingHostWhereUniqueInput | BookingHostWhereUniqueInput[]
    disconnect?: BookingHostWhereUniqueInput | BookingHostWhereUniqueInput[]
    delete?: BookingHostWhereUniqueInput | BookingHostWhereUniqueInput[]
    connect?: BookingHostWhereUniqueInput | BookingHostWhereUniqueInput[]
    update?: BookingHostUpdateWithWhereUniqueWithoutBookingInput | BookingHostUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingHostUpdateManyWithWhereWithoutBookingInput | BookingHostUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingHostScalarWhereInput | BookingHostScalarWhereInput[]
  }

  export type EnumPackageCategoryFieldUpdateOperationsInput = {
    set?: $Enums.PackageCategory
  }

  export type EnumGroupTypeFieldUpdateOperationsInput = {
    set?: $Enums.GroupType
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BookingCreateNestedManyWithoutCustomerInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutCustomerInput | BookingUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutCustomerInput | BookingUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutCustomerInput | BookingUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutCustomerInput | BookingUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutCustomerInput | BookingUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutCustomerInput | BookingUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingFoodItemCreateNestedManyWithoutFoodItemInput = {
    create?: XOR<BookingFoodItemCreateWithoutFoodItemInput, BookingFoodItemUncheckedCreateWithoutFoodItemInput> | BookingFoodItemCreateWithoutFoodItemInput[] | BookingFoodItemUncheckedCreateWithoutFoodItemInput[]
    connectOrCreate?: BookingFoodItemCreateOrConnectWithoutFoodItemInput | BookingFoodItemCreateOrConnectWithoutFoodItemInput[]
    createMany?: BookingFoodItemCreateManyFoodItemInputEnvelope
    connect?: BookingFoodItemWhereUniqueInput | BookingFoodItemWhereUniqueInput[]
  }

  export type BookingFoodItemUncheckedCreateNestedManyWithoutFoodItemInput = {
    create?: XOR<BookingFoodItemCreateWithoutFoodItemInput, BookingFoodItemUncheckedCreateWithoutFoodItemInput> | BookingFoodItemCreateWithoutFoodItemInput[] | BookingFoodItemUncheckedCreateWithoutFoodItemInput[]
    connectOrCreate?: BookingFoodItemCreateOrConnectWithoutFoodItemInput | BookingFoodItemCreateOrConnectWithoutFoodItemInput[]
    createMany?: BookingFoodItemCreateManyFoodItemInputEnvelope
    connect?: BookingFoodItemWhereUniqueInput | BookingFoodItemWhereUniqueInput[]
  }

  export type BookingFoodItemUpdateManyWithoutFoodItemNestedInput = {
    create?: XOR<BookingFoodItemCreateWithoutFoodItemInput, BookingFoodItemUncheckedCreateWithoutFoodItemInput> | BookingFoodItemCreateWithoutFoodItemInput[] | BookingFoodItemUncheckedCreateWithoutFoodItemInput[]
    connectOrCreate?: BookingFoodItemCreateOrConnectWithoutFoodItemInput | BookingFoodItemCreateOrConnectWithoutFoodItemInput[]
    upsert?: BookingFoodItemUpsertWithWhereUniqueWithoutFoodItemInput | BookingFoodItemUpsertWithWhereUniqueWithoutFoodItemInput[]
    createMany?: BookingFoodItemCreateManyFoodItemInputEnvelope
    set?: BookingFoodItemWhereUniqueInput | BookingFoodItemWhereUniqueInput[]
    disconnect?: BookingFoodItemWhereUniqueInput | BookingFoodItemWhereUniqueInput[]
    delete?: BookingFoodItemWhereUniqueInput | BookingFoodItemWhereUniqueInput[]
    connect?: BookingFoodItemWhereUniqueInput | BookingFoodItemWhereUniqueInput[]
    update?: BookingFoodItemUpdateWithWhereUniqueWithoutFoodItemInput | BookingFoodItemUpdateWithWhereUniqueWithoutFoodItemInput[]
    updateMany?: BookingFoodItemUpdateManyWithWhereWithoutFoodItemInput | BookingFoodItemUpdateManyWithWhereWithoutFoodItemInput[]
    deleteMany?: BookingFoodItemScalarWhereInput | BookingFoodItemScalarWhereInput[]
  }

  export type BookingFoodItemUncheckedUpdateManyWithoutFoodItemNestedInput = {
    create?: XOR<BookingFoodItemCreateWithoutFoodItemInput, BookingFoodItemUncheckedCreateWithoutFoodItemInput> | BookingFoodItemCreateWithoutFoodItemInput[] | BookingFoodItemUncheckedCreateWithoutFoodItemInput[]
    connectOrCreate?: BookingFoodItemCreateOrConnectWithoutFoodItemInput | BookingFoodItemCreateOrConnectWithoutFoodItemInput[]
    upsert?: BookingFoodItemUpsertWithWhereUniqueWithoutFoodItemInput | BookingFoodItemUpsertWithWhereUniqueWithoutFoodItemInput[]
    createMany?: BookingFoodItemCreateManyFoodItemInputEnvelope
    set?: BookingFoodItemWhereUniqueInput | BookingFoodItemWhereUniqueInput[]
    disconnect?: BookingFoodItemWhereUniqueInput | BookingFoodItemWhereUniqueInput[]
    delete?: BookingFoodItemWhereUniqueInput | BookingFoodItemWhereUniqueInput[]
    connect?: BookingFoodItemWhereUniqueInput | BookingFoodItemWhereUniqueInput[]
    update?: BookingFoodItemUpdateWithWhereUniqueWithoutFoodItemInput | BookingFoodItemUpdateWithWhereUniqueWithoutFoodItemInput[]
    updateMany?: BookingFoodItemUpdateManyWithWhereWithoutFoodItemInput | BookingFoodItemUpdateManyWithWhereWithoutFoodItemInput[]
    deleteMany?: BookingFoodItemScalarWhereInput | BookingFoodItemScalarWhereInput[]
  }

  export type BookingCreateNestedOneWithoutFoodItemsInput = {
    create?: XOR<BookingCreateWithoutFoodItemsInput, BookingUncheckedCreateWithoutFoodItemsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutFoodItemsInput
    connect?: BookingWhereUniqueInput
  }

  export type FoodItemCreateNestedOneWithoutBookingsInput = {
    create?: XOR<FoodItemCreateWithoutBookingsInput, FoodItemUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: FoodItemCreateOrConnectWithoutBookingsInput
    connect?: FoodItemWhereUniqueInput
  }

  export type BookingUpdateOneRequiredWithoutFoodItemsNestedInput = {
    create?: XOR<BookingCreateWithoutFoodItemsInput, BookingUncheckedCreateWithoutFoodItemsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutFoodItemsInput
    upsert?: BookingUpsertWithoutFoodItemsInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutFoodItemsInput, BookingUpdateWithoutFoodItemsInput>, BookingUncheckedUpdateWithoutFoodItemsInput>
  }

  export type FoodItemUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<FoodItemCreateWithoutBookingsInput, FoodItemUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: FoodItemCreateOrConnectWithoutBookingsInput
    upsert?: FoodItemUpsertWithoutBookingsInput
    connect?: FoodItemWhereUniqueInput
    update?: XOR<XOR<FoodItemUpdateToOneWithWhereWithoutBookingsInput, FoodItemUpdateWithoutBookingsInput>, FoodItemUncheckedUpdateWithoutBookingsInput>
  }

  export type BookingCreateNestedOneWithoutBookingHostsInput = {
    create?: XOR<BookingCreateWithoutBookingHostsInput, BookingUncheckedCreateWithoutBookingHostsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutBookingHostsInput
    connect?: BookingWhereUniqueInput
  }

  export type HostCreateNestedOneWithoutBookingHostsInput = {
    create?: XOR<HostCreateWithoutBookingHostsInput, HostUncheckedCreateWithoutBookingHostsInput>
    connectOrCreate?: HostCreateOrConnectWithoutBookingHostsInput
    connect?: HostWhereUniqueInput
  }

  export type BookingUpdateOneRequiredWithoutBookingHostsNestedInput = {
    create?: XOR<BookingCreateWithoutBookingHostsInput, BookingUncheckedCreateWithoutBookingHostsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutBookingHostsInput
    upsert?: BookingUpsertWithoutBookingHostsInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutBookingHostsInput, BookingUpdateWithoutBookingHostsInput>, BookingUncheckedUpdateWithoutBookingHostsInput>
  }

  export type HostUpdateOneRequiredWithoutBookingHostsNestedInput = {
    create?: XOR<HostCreateWithoutBookingHostsInput, HostUncheckedCreateWithoutBookingHostsInput>
    connectOrCreate?: HostCreateOrConnectWithoutBookingHostsInput
    upsert?: HostUpsertWithoutBookingHostsInput
    connect?: HostWhereUniqueInput
    update?: XOR<XOR<HostUpdateToOneWithWhereWithoutBookingHostsInput, HostUpdateWithoutBookingHostsInput>, HostUncheckedUpdateWithoutBookingHostsInput>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPackageCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageCategory | EnumPackageCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.PackageCategory[] | ListEnumPackageCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.PackageCategory[] | ListEnumPackageCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumPackageCategoryFilter<$PrismaModel> | $Enums.PackageCategory
  }

  export type NestedEnumGroupTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupType | EnumGroupTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GroupType[] | ListEnumGroupTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GroupType[] | ListEnumGroupTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupTypeFilter<$PrismaModel> | $Enums.GroupType
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

  export type NestedEnumPackageCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageCategory | EnumPackageCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.PackageCategory[] | ListEnumPackageCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.PackageCategory[] | ListEnumPackageCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumPackageCategoryWithAggregatesFilter<$PrismaModel> | $Enums.PackageCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPackageCategoryFilter<$PrismaModel>
    _max?: NestedEnumPackageCategoryFilter<$PrismaModel>
  }

  export type NestedEnumGroupTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupType | EnumGroupTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GroupType[] | ListEnumGroupTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GroupType[] | ListEnumGroupTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupTypeWithAggregatesFilter<$PrismaModel> | $Enums.GroupType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGroupTypeFilter<$PrismaModel>
    _max?: NestedEnumGroupTypeFilter<$PrismaModel>
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

  export type UserRoleCreateWithoutUsersInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleCreateOrConnectWithoutUsersInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutUsersInput, UserRoleUncheckedCreateWithoutUsersInput>
  }

  export type UserRoleUpsertWithoutUsersInput = {
    update: XOR<UserRoleUpdateWithoutUsersInput, UserRoleUncheckedUpdateWithoutUsersInput>
    create: XOR<UserRoleCreateWithoutUsersInput, UserRoleUncheckedCreateWithoutUsersInput>
    where?: UserRoleWhereInput
  }

  export type UserRoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: UserRoleWhereInput
    data: XOR<UserRoleUpdateWithoutUsersInput, UserRoleUncheckedUpdateWithoutUsersInput>
  }

  export type UserRoleUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutRoleInput = {
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    password: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    password: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role_id?: IntFilter<"User"> | number
    active?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type BookingHostCreateWithoutHostInput = {
    booking: BookingCreateNestedOneWithoutBookingHostsInput
  }

  export type BookingHostUncheckedCreateWithoutHostInput = {
    id?: number
    bookingId: number
  }

  export type BookingHostCreateOrConnectWithoutHostInput = {
    where: BookingHostWhereUniqueInput
    create: XOR<BookingHostCreateWithoutHostInput, BookingHostUncheckedCreateWithoutHostInput>
  }

  export type BookingHostCreateManyHostInputEnvelope = {
    data: BookingHostCreateManyHostInput | BookingHostCreateManyHostInput[]
    skipDuplicates?: boolean
  }

  export type ShiftCreateWithoutHostInput = {
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: ShiftRoleCreateNestedOneWithoutShiftsInput
  }

  export type ShiftUncheckedCreateWithoutHostInput = {
    id?: number
    startTime: Date | string
    endTime: Date | string
    roleId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShiftCreateOrConnectWithoutHostInput = {
    where: ShiftWhereUniqueInput
    create: XOR<ShiftCreateWithoutHostInput, ShiftUncheckedCreateWithoutHostInput>
  }

  export type ShiftCreateManyHostInputEnvelope = {
    data: ShiftCreateManyHostInput | ShiftCreateManyHostInput[]
    skipDuplicates?: boolean
  }

  export type BookingHostUpsertWithWhereUniqueWithoutHostInput = {
    where: BookingHostWhereUniqueInput
    update: XOR<BookingHostUpdateWithoutHostInput, BookingHostUncheckedUpdateWithoutHostInput>
    create: XOR<BookingHostCreateWithoutHostInput, BookingHostUncheckedCreateWithoutHostInput>
  }

  export type BookingHostUpdateWithWhereUniqueWithoutHostInput = {
    where: BookingHostWhereUniqueInput
    data: XOR<BookingHostUpdateWithoutHostInput, BookingHostUncheckedUpdateWithoutHostInput>
  }

  export type BookingHostUpdateManyWithWhereWithoutHostInput = {
    where: BookingHostScalarWhereInput
    data: XOR<BookingHostUpdateManyMutationInput, BookingHostUncheckedUpdateManyWithoutHostInput>
  }

  export type BookingHostScalarWhereInput = {
    AND?: BookingHostScalarWhereInput | BookingHostScalarWhereInput[]
    OR?: BookingHostScalarWhereInput[]
    NOT?: BookingHostScalarWhereInput | BookingHostScalarWhereInput[]
    id?: IntFilter<"BookingHost"> | number
    bookingId?: IntFilter<"BookingHost"> | number
    hostId?: IntFilter<"BookingHost"> | number
  }

  export type ShiftUpsertWithWhereUniqueWithoutHostInput = {
    where: ShiftWhereUniqueInput
    update: XOR<ShiftUpdateWithoutHostInput, ShiftUncheckedUpdateWithoutHostInput>
    create: XOR<ShiftCreateWithoutHostInput, ShiftUncheckedCreateWithoutHostInput>
  }

  export type ShiftUpdateWithWhereUniqueWithoutHostInput = {
    where: ShiftWhereUniqueInput
    data: XOR<ShiftUpdateWithoutHostInput, ShiftUncheckedUpdateWithoutHostInput>
  }

  export type ShiftUpdateManyWithWhereWithoutHostInput = {
    where: ShiftScalarWhereInput
    data: XOR<ShiftUpdateManyMutationInput, ShiftUncheckedUpdateManyWithoutHostInput>
  }

  export type ShiftScalarWhereInput = {
    AND?: ShiftScalarWhereInput | ShiftScalarWhereInput[]
    OR?: ShiftScalarWhereInput[]
    NOT?: ShiftScalarWhereInput | ShiftScalarWhereInput[]
    id?: IntFilter<"Shift"> | number
    hostId?: IntNullableFilter<"Shift"> | number | null
    startTime?: DateTimeFilter<"Shift"> | Date | string
    endTime?: DateTimeFilter<"Shift"> | Date | string
    roleId?: IntNullableFilter<"Shift"> | number | null
    createdAt?: DateTimeFilter<"Shift"> | Date | string
    updatedAt?: DateTimeFilter<"Shift"> | Date | string
  }

  export type HostCreateWithoutShiftsInput = {
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookingHosts?: BookingHostCreateNestedManyWithoutHostInput
  }

  export type HostUncheckedCreateWithoutShiftsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookingHosts?: BookingHostUncheckedCreateNestedManyWithoutHostInput
  }

  export type HostCreateOrConnectWithoutShiftsInput = {
    where: HostWhereUniqueInput
    create: XOR<HostCreateWithoutShiftsInput, HostUncheckedCreateWithoutShiftsInput>
  }

  export type ShiftRoleCreateWithoutShiftsInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShiftRoleUncheckedCreateWithoutShiftsInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShiftRoleCreateOrConnectWithoutShiftsInput = {
    where: ShiftRoleWhereUniqueInput
    create: XOR<ShiftRoleCreateWithoutShiftsInput, ShiftRoleUncheckedCreateWithoutShiftsInput>
  }

  export type HostUpsertWithoutShiftsInput = {
    update: XOR<HostUpdateWithoutShiftsInput, HostUncheckedUpdateWithoutShiftsInput>
    create: XOR<HostCreateWithoutShiftsInput, HostUncheckedCreateWithoutShiftsInput>
    where?: HostWhereInput
  }

  export type HostUpdateToOneWithWhereWithoutShiftsInput = {
    where?: HostWhereInput
    data: XOR<HostUpdateWithoutShiftsInput, HostUncheckedUpdateWithoutShiftsInput>
  }

  export type HostUpdateWithoutShiftsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingHosts?: BookingHostUpdateManyWithoutHostNestedInput
  }

  export type HostUncheckedUpdateWithoutShiftsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingHosts?: BookingHostUncheckedUpdateManyWithoutHostNestedInput
  }

  export type ShiftRoleUpsertWithoutShiftsInput = {
    update: XOR<ShiftRoleUpdateWithoutShiftsInput, ShiftRoleUncheckedUpdateWithoutShiftsInput>
    create: XOR<ShiftRoleCreateWithoutShiftsInput, ShiftRoleUncheckedCreateWithoutShiftsInput>
    where?: ShiftRoleWhereInput
  }

  export type ShiftRoleUpdateToOneWithWhereWithoutShiftsInput = {
    where?: ShiftRoleWhereInput
    data: XOR<ShiftRoleUpdateWithoutShiftsInput, ShiftRoleUncheckedUpdateWithoutShiftsInput>
  }

  export type ShiftRoleUpdateWithoutShiftsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftRoleUncheckedUpdateWithoutShiftsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftCreateWithoutRoleInput = {
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    host?: HostCreateNestedOneWithoutShiftsInput
  }

  export type ShiftUncheckedCreateWithoutRoleInput = {
    id?: number
    hostId?: number | null
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShiftCreateOrConnectWithoutRoleInput = {
    where: ShiftWhereUniqueInput
    create: XOR<ShiftCreateWithoutRoleInput, ShiftUncheckedCreateWithoutRoleInput>
  }

  export type ShiftCreateManyRoleInputEnvelope = {
    data: ShiftCreateManyRoleInput | ShiftCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type ShiftUpsertWithWhereUniqueWithoutRoleInput = {
    where: ShiftWhereUniqueInput
    update: XOR<ShiftUpdateWithoutRoleInput, ShiftUncheckedUpdateWithoutRoleInput>
    create: XOR<ShiftCreateWithoutRoleInput, ShiftUncheckedCreateWithoutRoleInput>
  }

  export type ShiftUpdateWithWhereUniqueWithoutRoleInput = {
    where: ShiftWhereUniqueInput
    data: XOR<ShiftUpdateWithoutRoleInput, ShiftUncheckedUpdateWithoutRoleInput>
  }

  export type ShiftUpdateManyWithWhereWithoutRoleInput = {
    where: ShiftScalarWhereInput
    data: XOR<ShiftUpdateManyMutationInput, ShiftUncheckedUpdateManyWithoutRoleInput>
  }

  export type CustomerCreateWithoutBookingsInput = {
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    company?: string | null
    vatNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUncheckedCreateWithoutBookingsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    company?: string | null
    vatNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerCreateOrConnectWithoutBookingsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutBookingsInput, CustomerUncheckedCreateWithoutBookingsInput>
  }

  export type BookingFoodItemCreateWithoutBookingInput = {
    quantity?: number
    foodItem: FoodItemCreateNestedOneWithoutBookingsInput
  }

  export type BookingFoodItemUncheckedCreateWithoutBookingInput = {
    id?: number
    foodItemId: number
    quantity?: number
  }

  export type BookingFoodItemCreateOrConnectWithoutBookingInput = {
    where: BookingFoodItemWhereUniqueInput
    create: XOR<BookingFoodItemCreateWithoutBookingInput, BookingFoodItemUncheckedCreateWithoutBookingInput>
  }

  export type BookingFoodItemCreateManyBookingInputEnvelope = {
    data: BookingFoodItemCreateManyBookingInput | BookingFoodItemCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type BookingHostCreateWithoutBookingInput = {
    host: HostCreateNestedOneWithoutBookingHostsInput
  }

  export type BookingHostUncheckedCreateWithoutBookingInput = {
    id?: number
    hostId: number
  }

  export type BookingHostCreateOrConnectWithoutBookingInput = {
    where: BookingHostWhereUniqueInput
    create: XOR<BookingHostCreateWithoutBookingInput, BookingHostUncheckedCreateWithoutBookingInput>
  }

  export type BookingHostCreateManyBookingInputEnvelope = {
    data: BookingHostCreateManyBookingInput | BookingHostCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutBookingsInput = {
    update: XOR<CustomerUpdateWithoutBookingsInput, CustomerUncheckedUpdateWithoutBookingsInput>
    create: XOR<CustomerCreateWithoutBookingsInput, CustomerUncheckedCreateWithoutBookingsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutBookingsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutBookingsInput, CustomerUncheckedUpdateWithoutBookingsInput>
  }

  export type CustomerUpdateWithoutBookingsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    vatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    vatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingFoodItemUpsertWithWhereUniqueWithoutBookingInput = {
    where: BookingFoodItemWhereUniqueInput
    update: XOR<BookingFoodItemUpdateWithoutBookingInput, BookingFoodItemUncheckedUpdateWithoutBookingInput>
    create: XOR<BookingFoodItemCreateWithoutBookingInput, BookingFoodItemUncheckedCreateWithoutBookingInput>
  }

  export type BookingFoodItemUpdateWithWhereUniqueWithoutBookingInput = {
    where: BookingFoodItemWhereUniqueInput
    data: XOR<BookingFoodItemUpdateWithoutBookingInput, BookingFoodItemUncheckedUpdateWithoutBookingInput>
  }

  export type BookingFoodItemUpdateManyWithWhereWithoutBookingInput = {
    where: BookingFoodItemScalarWhereInput
    data: XOR<BookingFoodItemUpdateManyMutationInput, BookingFoodItemUncheckedUpdateManyWithoutBookingInput>
  }

  export type BookingFoodItemScalarWhereInput = {
    AND?: BookingFoodItemScalarWhereInput | BookingFoodItemScalarWhereInput[]
    OR?: BookingFoodItemScalarWhereInput[]
    NOT?: BookingFoodItemScalarWhereInput | BookingFoodItemScalarWhereInput[]
    id?: IntFilter<"BookingFoodItem"> | number
    bookingId?: IntFilter<"BookingFoodItem"> | number
    foodItemId?: IntFilter<"BookingFoodItem"> | number
    quantity?: IntFilter<"BookingFoodItem"> | number
  }

  export type BookingHostUpsertWithWhereUniqueWithoutBookingInput = {
    where: BookingHostWhereUniqueInput
    update: XOR<BookingHostUpdateWithoutBookingInput, BookingHostUncheckedUpdateWithoutBookingInput>
    create: XOR<BookingHostCreateWithoutBookingInput, BookingHostUncheckedCreateWithoutBookingInput>
  }

  export type BookingHostUpdateWithWhereUniqueWithoutBookingInput = {
    where: BookingHostWhereUniqueInput
    data: XOR<BookingHostUpdateWithoutBookingInput, BookingHostUncheckedUpdateWithoutBookingInput>
  }

  export type BookingHostUpdateManyWithWhereWithoutBookingInput = {
    where: BookingHostScalarWhereInput
    data: XOR<BookingHostUpdateManyMutationInput, BookingHostUncheckedUpdateManyWithoutBookingInput>
  }

  export type BookingCreateWithoutCustomerInput = {
    venue?: string | null
    dayOfWeek?: string | null
    startTime: Date | string
    endTime: Date | string
    playersCount: number
    hostsRequired: number
    food_required?: boolean
    is_b2b?: boolean
    status?: string | null
    eposFamily?: string | null
    bookingDescription?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    foodItems?: BookingFoodItemCreateNestedManyWithoutBookingInput
    bookingHosts?: BookingHostCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutCustomerInput = {
    id?: number
    venue?: string | null
    dayOfWeek?: string | null
    startTime: Date | string
    endTime: Date | string
    playersCount: number
    hostsRequired: number
    food_required?: boolean
    is_b2b?: boolean
    status?: string | null
    eposFamily?: string | null
    bookingDescription?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    foodItems?: BookingFoodItemUncheckedCreateNestedManyWithoutBookingInput
    bookingHosts?: BookingHostUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutCustomerInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput>
  }

  export type BookingCreateManyCustomerInputEnvelope = {
    data: BookingCreateManyCustomerInput | BookingCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type BookingUpsertWithWhereUniqueWithoutCustomerInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutCustomerInput, BookingUncheckedUpdateWithoutCustomerInput>
    create: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutCustomerInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutCustomerInput, BookingUncheckedUpdateWithoutCustomerInput>
  }

  export type BookingUpdateManyWithWhereWithoutCustomerInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutCustomerInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: IntFilter<"Booking"> | number
    venue?: StringNullableFilter<"Booking"> | string | null
    dayOfWeek?: StringNullableFilter<"Booking"> | string | null
    startTime?: DateTimeFilter<"Booking"> | Date | string
    endTime?: DateTimeFilter<"Booking"> | Date | string
    playersCount?: IntFilter<"Booking"> | number
    hostsRequired?: IntFilter<"Booking"> | number
    food_required?: BoolFilter<"Booking"> | boolean
    is_b2b?: BoolFilter<"Booking"> | boolean
    status?: StringNullableFilter<"Booking"> | string | null
    eposFamily?: StringNullableFilter<"Booking"> | string | null
    bookingDescription?: StringNullableFilter<"Booking"> | string | null
    notes?: StringNullableFilter<"Booking"> | string | null
    customerId?: IntNullableFilter<"Booking"> | number | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type BookingFoodItemCreateWithoutFoodItemInput = {
    quantity?: number
    booking: BookingCreateNestedOneWithoutFoodItemsInput
  }

  export type BookingFoodItemUncheckedCreateWithoutFoodItemInput = {
    id?: number
    bookingId: number
    quantity?: number
  }

  export type BookingFoodItemCreateOrConnectWithoutFoodItemInput = {
    where: BookingFoodItemWhereUniqueInput
    create: XOR<BookingFoodItemCreateWithoutFoodItemInput, BookingFoodItemUncheckedCreateWithoutFoodItemInput>
  }

  export type BookingFoodItemCreateManyFoodItemInputEnvelope = {
    data: BookingFoodItemCreateManyFoodItemInput | BookingFoodItemCreateManyFoodItemInput[]
    skipDuplicates?: boolean
  }

  export type BookingFoodItemUpsertWithWhereUniqueWithoutFoodItemInput = {
    where: BookingFoodItemWhereUniqueInput
    update: XOR<BookingFoodItemUpdateWithoutFoodItemInput, BookingFoodItemUncheckedUpdateWithoutFoodItemInput>
    create: XOR<BookingFoodItemCreateWithoutFoodItemInput, BookingFoodItemUncheckedCreateWithoutFoodItemInput>
  }

  export type BookingFoodItemUpdateWithWhereUniqueWithoutFoodItemInput = {
    where: BookingFoodItemWhereUniqueInput
    data: XOR<BookingFoodItemUpdateWithoutFoodItemInput, BookingFoodItemUncheckedUpdateWithoutFoodItemInput>
  }

  export type BookingFoodItemUpdateManyWithWhereWithoutFoodItemInput = {
    where: BookingFoodItemScalarWhereInput
    data: XOR<BookingFoodItemUpdateManyMutationInput, BookingFoodItemUncheckedUpdateManyWithoutFoodItemInput>
  }

  export type BookingCreateWithoutFoodItemsInput = {
    venue?: string | null
    dayOfWeek?: string | null
    startTime: Date | string
    endTime: Date | string
    playersCount: number
    hostsRequired: number
    food_required?: boolean
    is_b2b?: boolean
    status?: string | null
    eposFamily?: string | null
    bookingDescription?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer?: CustomerCreateNestedOneWithoutBookingsInput
    bookingHosts?: BookingHostCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutFoodItemsInput = {
    id?: number
    venue?: string | null
    dayOfWeek?: string | null
    startTime: Date | string
    endTime: Date | string
    playersCount: number
    hostsRequired: number
    food_required?: boolean
    is_b2b?: boolean
    status?: string | null
    eposFamily?: string | null
    bookingDescription?: string | null
    notes?: string | null
    customerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookingHosts?: BookingHostUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutFoodItemsInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutFoodItemsInput, BookingUncheckedCreateWithoutFoodItemsInput>
  }

  export type FoodItemCreateWithoutBookingsInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodItemUncheckedCreateWithoutBookingsInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodItemCreateOrConnectWithoutBookingsInput = {
    where: FoodItemWhereUniqueInput
    create: XOR<FoodItemCreateWithoutBookingsInput, FoodItemUncheckedCreateWithoutBookingsInput>
  }

  export type BookingUpsertWithoutFoodItemsInput = {
    update: XOR<BookingUpdateWithoutFoodItemsInput, BookingUncheckedUpdateWithoutFoodItemsInput>
    create: XOR<BookingCreateWithoutFoodItemsInput, BookingUncheckedCreateWithoutFoodItemsInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutFoodItemsInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutFoodItemsInput, BookingUncheckedUpdateWithoutFoodItemsInput>
  }

  export type BookingUpdateWithoutFoodItemsInput = {
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    dayOfWeek?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    playersCount?: IntFieldUpdateOperationsInput | number
    hostsRequired?: IntFieldUpdateOperationsInput | number
    food_required?: BoolFieldUpdateOperationsInput | boolean
    is_b2b?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    eposFamily?: NullableStringFieldUpdateOperationsInput | string | null
    bookingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutBookingsNestedInput
    bookingHosts?: BookingHostUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutFoodItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    dayOfWeek?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    playersCount?: IntFieldUpdateOperationsInput | number
    hostsRequired?: IntFieldUpdateOperationsInput | number
    food_required?: BoolFieldUpdateOperationsInput | boolean
    is_b2b?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    eposFamily?: NullableStringFieldUpdateOperationsInput | string | null
    bookingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingHosts?: BookingHostUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type FoodItemUpsertWithoutBookingsInput = {
    update: XOR<FoodItemUpdateWithoutBookingsInput, FoodItemUncheckedUpdateWithoutBookingsInput>
    create: XOR<FoodItemCreateWithoutBookingsInput, FoodItemUncheckedCreateWithoutBookingsInput>
    where?: FoodItemWhereInput
  }

  export type FoodItemUpdateToOneWithWhereWithoutBookingsInput = {
    where?: FoodItemWhereInput
    data: XOR<FoodItemUpdateWithoutBookingsInput, FoodItemUncheckedUpdateWithoutBookingsInput>
  }

  export type FoodItemUpdateWithoutBookingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodItemUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateWithoutBookingHostsInput = {
    venue?: string | null
    dayOfWeek?: string | null
    startTime: Date | string
    endTime: Date | string
    playersCount: number
    hostsRequired: number
    food_required?: boolean
    is_b2b?: boolean
    status?: string | null
    eposFamily?: string | null
    bookingDescription?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer?: CustomerCreateNestedOneWithoutBookingsInput
    foodItems?: BookingFoodItemCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutBookingHostsInput = {
    id?: number
    venue?: string | null
    dayOfWeek?: string | null
    startTime: Date | string
    endTime: Date | string
    playersCount: number
    hostsRequired: number
    food_required?: boolean
    is_b2b?: boolean
    status?: string | null
    eposFamily?: string | null
    bookingDescription?: string | null
    notes?: string | null
    customerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    foodItems?: BookingFoodItemUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutBookingHostsInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutBookingHostsInput, BookingUncheckedCreateWithoutBookingHostsInput>
  }

  export type HostCreateWithoutBookingHostsInput = {
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    shifts?: ShiftCreateNestedManyWithoutHostInput
  }

  export type HostUncheckedCreateWithoutBookingHostsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    shifts?: ShiftUncheckedCreateNestedManyWithoutHostInput
  }

  export type HostCreateOrConnectWithoutBookingHostsInput = {
    where: HostWhereUniqueInput
    create: XOR<HostCreateWithoutBookingHostsInput, HostUncheckedCreateWithoutBookingHostsInput>
  }

  export type BookingUpsertWithoutBookingHostsInput = {
    update: XOR<BookingUpdateWithoutBookingHostsInput, BookingUncheckedUpdateWithoutBookingHostsInput>
    create: XOR<BookingCreateWithoutBookingHostsInput, BookingUncheckedCreateWithoutBookingHostsInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutBookingHostsInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutBookingHostsInput, BookingUncheckedUpdateWithoutBookingHostsInput>
  }

  export type BookingUpdateWithoutBookingHostsInput = {
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    dayOfWeek?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    playersCount?: IntFieldUpdateOperationsInput | number
    hostsRequired?: IntFieldUpdateOperationsInput | number
    food_required?: BoolFieldUpdateOperationsInput | boolean
    is_b2b?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    eposFamily?: NullableStringFieldUpdateOperationsInput | string | null
    bookingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutBookingsNestedInput
    foodItems?: BookingFoodItemUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutBookingHostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    dayOfWeek?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    playersCount?: IntFieldUpdateOperationsInput | number
    hostsRequired?: IntFieldUpdateOperationsInput | number
    food_required?: BoolFieldUpdateOperationsInput | boolean
    is_b2b?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    eposFamily?: NullableStringFieldUpdateOperationsInput | string | null
    bookingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodItems?: BookingFoodItemUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type HostUpsertWithoutBookingHostsInput = {
    update: XOR<HostUpdateWithoutBookingHostsInput, HostUncheckedUpdateWithoutBookingHostsInput>
    create: XOR<HostCreateWithoutBookingHostsInput, HostUncheckedCreateWithoutBookingHostsInput>
    where?: HostWhereInput
  }

  export type HostUpdateToOneWithWhereWithoutBookingHostsInput = {
    where?: HostWhereInput
    data: XOR<HostUpdateWithoutBookingHostsInput, HostUncheckedUpdateWithoutBookingHostsInput>
  }

  export type HostUpdateWithoutBookingHostsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shifts?: ShiftUpdateManyWithoutHostNestedInput
  }

  export type HostUncheckedUpdateWithoutBookingHostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shifts?: ShiftUncheckedUpdateManyWithoutHostNestedInput
  }

  export type UserCreateManyRoleInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    password: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutRoleInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingHostCreateManyHostInput = {
    id?: number
    bookingId: number
  }

  export type ShiftCreateManyHostInput = {
    id?: number
    startTime: Date | string
    endTime: Date | string
    roleId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingHostUpdateWithoutHostInput = {
    booking?: BookingUpdateOneRequiredWithoutBookingHostsNestedInput
  }

  export type BookingHostUncheckedUpdateWithoutHostInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
  }

  export type BookingHostUncheckedUpdateManyWithoutHostInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
  }

  export type ShiftUpdateWithoutHostInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: ShiftRoleUpdateOneWithoutShiftsNestedInput
  }

  export type ShiftUncheckedUpdateWithoutHostInput = {
    id?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftUncheckedUpdateManyWithoutHostInput = {
    id?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftCreateManyRoleInput = {
    id?: number
    hostId?: number | null
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShiftUpdateWithoutRoleInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    host?: HostUpdateOneWithoutShiftsNestedInput
  }

  export type ShiftUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    hostId?: NullableIntFieldUpdateOperationsInput | number | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    hostId?: NullableIntFieldUpdateOperationsInput | number | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingFoodItemCreateManyBookingInput = {
    id?: number
    foodItemId: number
    quantity?: number
  }

  export type BookingHostCreateManyBookingInput = {
    id?: number
    hostId: number
  }

  export type BookingFoodItemUpdateWithoutBookingInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    foodItem?: FoodItemUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingFoodItemUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodItemId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type BookingFoodItemUncheckedUpdateManyWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodItemId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type BookingHostUpdateWithoutBookingInput = {
    host?: HostUpdateOneRequiredWithoutBookingHostsNestedInput
  }

  export type BookingHostUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    hostId?: IntFieldUpdateOperationsInput | number
  }

  export type BookingHostUncheckedUpdateManyWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    hostId?: IntFieldUpdateOperationsInput | number
  }

  export type BookingCreateManyCustomerInput = {
    id?: number
    venue?: string | null
    dayOfWeek?: string | null
    startTime: Date | string
    endTime: Date | string
    playersCount: number
    hostsRequired: number
    food_required?: boolean
    is_b2b?: boolean
    status?: string | null
    eposFamily?: string | null
    bookingDescription?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutCustomerInput = {
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    dayOfWeek?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    playersCount?: IntFieldUpdateOperationsInput | number
    hostsRequired?: IntFieldUpdateOperationsInput | number
    food_required?: BoolFieldUpdateOperationsInput | boolean
    is_b2b?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    eposFamily?: NullableStringFieldUpdateOperationsInput | string | null
    bookingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodItems?: BookingFoodItemUpdateManyWithoutBookingNestedInput
    bookingHosts?: BookingHostUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    dayOfWeek?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    playersCount?: IntFieldUpdateOperationsInput | number
    hostsRequired?: IntFieldUpdateOperationsInput | number
    food_required?: BoolFieldUpdateOperationsInput | boolean
    is_b2b?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    eposFamily?: NullableStringFieldUpdateOperationsInput | string | null
    bookingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodItems?: BookingFoodItemUncheckedUpdateManyWithoutBookingNestedInput
    bookingHosts?: BookingHostUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    dayOfWeek?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    playersCount?: IntFieldUpdateOperationsInput | number
    hostsRequired?: IntFieldUpdateOperationsInput | number
    food_required?: BoolFieldUpdateOperationsInput | boolean
    is_b2b?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    eposFamily?: NullableStringFieldUpdateOperationsInput | string | null
    bookingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingFoodItemCreateManyFoodItemInput = {
    id?: number
    bookingId: number
    quantity?: number
  }

  export type BookingFoodItemUpdateWithoutFoodItemInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    booking?: BookingUpdateOneRequiredWithoutFoodItemsNestedInput
  }

  export type BookingFoodItemUncheckedUpdateWithoutFoodItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type BookingFoodItemUncheckedUpdateManyWithoutFoodItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
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