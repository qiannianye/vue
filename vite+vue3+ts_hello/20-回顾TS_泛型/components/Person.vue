<template>
    <div class="person">
        <h1>Person组件</h1>
        <!-- person 是一般对象 -->
        <!-- <h3>人:{{ person.name }} - {{ person.age }}</h3> -->
        <!-- person是数组 -->
        <ul>
            <li v-for="p in persons" :key="p.id"> {{ p.name }} - {{ p.age }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
    // 注意：当引入时使用‘@/’就相当于站在金字塔的塔尖src那里，但有时候引入的时候会说找不到引入的模块，这就需要查看下在vuejs+ts的项目中，
    // tsconfig.app.json中的compilerOptions配置项，是否配置了baseUrl和paths项，如下：
    /**
     * "compilerOptions": {
           "baseUrl": ".",
            "paths": {
                "@/*": ["./src/*"]
            }
        }
     */
    import { type PersonInter, type PersonList, type Persons } from '@/types'
    // 当person没有做类型限定时，某个属性写错时（比如name写成nmae），编译器不会报错，也没有提示，只有页面上名字显示不出来，这在实际开发中不好定位问题。
    // const person = {
    //     name: '张三', 
    //     age: 18
    // }

    // person是对象：使用ts，自定义接口类型，限定person类型
    // const person: PersonInter = { 
    //     nmae: '张三', //这里故意将名字属性name写成nmae，因为做了类型限定就会报错：对象字面量只能指定已知属性，并且“nmae”不在类型“PersonInter”中。这样就很容易定位到问题。
    // }
    
    // persons是一个普通数组，没有加类型限定，某个属性写错时，不会提示，不好定位问题
    // const persons = [{id: '001', name: '张三', age: 20}, {id: '002', nmae: '李四', age: 22}]

    // persons是一个数组： 使用ts，限定persons类型 
    // PersonInter类型中没有id属性，下面写了id属性就会报错：对象字面量只能指定已知属性，并且“id”不在类型“PersonInter”中。 在PersonInter类型中加上id属性或者创建数组时去掉id属性就能解决报错问题。
    // 因为persons使用了类型限定，所以当数组中某个对象的某个属性写错的时候，比如name写成nmae，也会报错：对象字面量只能指定已知属性，并且“nmae”不在类型“PersonInter”中。
    // const persons: Array<PersonInter> = [{id: '001', name: '张三', age: 20}, {id: '002', nmae: '李四', age: 22}]
    
    // 数组限定的第一种写法：使用Array<限定类型的type>
    // const persons: Array<PersonInter> = [{id: '001', name: '张三', age: 20}, {id: '002', name: '李四', age: 22}] 
    // 这句代码等同于上面那句代码，只是将类型限定在定义的地方又单独做了简单的定义：Persons
    // const persons: Persons = [{id: '001', name: '张三', age: 20}, {id: '002', nmae: '李四', age: 22}]
    
    // 数组限定的第二种写法：限定类型的type[]
    // const persons: PersonInter[] = [{id: '001', name: '张三', age: 20}, {id: '002', name: '李四', age: 22}]
    // 下面这句代码等同于上面的那句代码，
    const persons: PersonList = [{id: '001', name: '张三', age: 20}, {id: '002', name: '李四', age: 22, x: 100}]

</script>

<style scoped>
    /* scoped: 局部样式标记，代表style里的样式只在本文件内生效，与其他文件里的同名样式互不干扰。 */
    .person {
        background-color: skyblue;
        border: 1px solid blueviolet;
        margin: 20px;
        padding: 20px;
    }
    button {
        margin-right: 10px;
    }
</style>