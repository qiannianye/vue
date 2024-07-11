/**
 * 创建一个PersonInter的接口，并暴露出去
 */
export interface PersonInter {
    id: string,
    name: string, //定义类型的时候用小写string，命名空间的时候用大写String
    age: number,
    x?: number //表示可有可无,需要的时候再用
}

// 将复杂的数据限定，定义成简单的，并暴露出去
export type Persons = Array<PersonInter>
export type PersonList = PersonInter[]