/** 
  O tipo de utilidade Replace é usado quando você precisa substituir uma propriedade por outro tipo, por exemplo:
  ```
    type A = { a: string, b: number }
    type C = Replace<A, { b: string }>
    typeof C => { a: string, b: string }
  ```
*/
export type Replace<T, R> = Omit<T, keyof R> & R;

/** 
  O tipo de utilidade Remove é usado quando você precisa remover uma propriedade, por exemplo:
  ```
    type A = { a: string, b: number}
    type C = Remove<A, 'b'>
    typeof C => { a: string }
  ```
*/
export type Remove<T, R extends keyof T> = Omit<T, R>;

/** 
  O tipo de utilidade Property é usado quando você precisa escolher uma única propriedade, substituindo o uso de typeof Aluno["id"], por exemplo:
  ```
    type A = { a: string, b: number}
    type C = Property<A, 'b'>
    typeof C => { b: number }
  ```
*/
export type Property<T, R extends keyof T> = Extract<T, R>;

type Only<T, U> = {
  [P in keyof T]: T[P];
} &
  {
    [P in keyof U]?: never;
  };

type Either<T, U> = Only<T, U> | Only<U, T>;
