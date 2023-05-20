// type Expand<T> = T extends (...args: infer A) => infer R
//   ? (...args: Expand<A>) => Expand<R>
//   : T extends infer O
//   ? {
//     [K in keyof O]: O[K]
//   } : never

type Expand<T> = T extends (...args: infer A) => infer R
  ? (...args: Expand<A>) => Expand<R>
  : boolean[]

type TT = (a: string, b: string) => string
type TTT = (a: (a: string, b: string) => string) => string

let a:Expand<TT> // a: (...args: boolean[]) => boolean[]，最後A會變boolean[]，因為Expand<[a: string, b: string]> 不會符合 (...args: infer A) => infer R

let aaa:Expand<TTT>
// type AA<T> = T extends (...args: infer A) => infer B ? (...args: A) => A : string
// const aa: AA<(a: string, b:number) => string> = (a, b) => ['1', 2]
// aa('1', 2)
// type TT = number
// const a: Expand<TT> = 1

// type ValueOrNestedArray<T> = T | ValueOrNestedArray<T>[]; //T[] | T[][] | T[][][]...
// type NumberArray = ValueOrNestedArray<number>;

// let numberArray: NumberArray = 0;
// numberArray = [0, 1, [2, 3, [4]]];
type RecursiveCamelCase<T> = T extends `${infer Head}_${infer Tail}` ? `${Uncapitalize<Head>}${Capitalize<RecursiveCamelCase<Tail>>}` : T
type RecursiveCamelCase2<T> = T extends `${infer Head}_${infer Tail}` ? `${Uncapitalize<Head>}` : T

type Test = RecursiveCamelCase<'a_b_c'>
type Test2 = RecursiveCamelCase2<'a_b_c'>