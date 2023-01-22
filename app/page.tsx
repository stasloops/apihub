"use client"

import { useAppSelector } from '../logic/hooks/useRedux'
import style from '../styles/home.module.css'


export default function Home() {
  const { variant } = useAppSelector((state) => state.theme)

  // const tree: any = {
  //   value: 5,
  //   right: [
  //     {
  //       value: 1,
  //       right: [
  //         {
  //           value: 5
  //         },
  //         {
  //           value: 7
  //         }
  //       ],
  //     },
  //     {
  //       value: 10,
  //       right: [
  //         {
  //           value: 5
  //         },
  //         {
  //           value: 1
  //         }
  //       ],
  //     },
  //   ]
  // }

  // function calculationCount(tree: any) {
  //   const stack = [tree]
  //   let result = 0
  //   // console.log(typeof stack); // object
  //   while (stack.length > 0) {
  //     const node = stack.shift()
  //     if (node.value !== undefined) {
  //       result += node.value
  //     }
  //     if (node.right?.length) {
  //       stack.push(...node.right)
  //       // console.log(node.right, '.');
  //       // console.log(...node.right, '...');
  //     }
  //   }
  //   return result
  // }
  // console.log(calculationCount(tree), 'result');



  // function closure(higherSum: number) {
  //   let balance = 0;
  //   console.log(balance);

  //   return function (sum: number) {

  //     balance += sum += higherSum
  //     console.log(`balance ${balance}`);
  //   }
  // }
  // const change = closure(1000)
  // change(50) //50
  // change(100) //150
  // change(-100) // 50

  // const changeTwo = closure(100)
  // changeTwo(500) //500
  // changeTwo(1000) //1500
  // changeTwo(-1000) // 500

  // it doesn't matter the arrow or the usual function

  // const noneClosure = (sum: number) => {
  //   let balance = 0;
  //   balance += sum
  //   console.log(`balance ${balance}`);
  // }

  // noneClosure(50)// 50
  // noneClosure(100)//100
  // noneClosure(-100)//-100

  //   const setVal:any = new Set()
  //   console.log(setVal);

  //   setVal.add(1)
  //   setVal.add(2)
  //   setVal.add(5)
  //   setVal.add(5)
  //   setVal.add('ada')
  //   setVal.add('asdf')
  //   setVal.add('sss')
  //  console.log(setVal.has('sss'));
  //   console.log(setVal);

  // let user = {
  //   firstName: "Вася",
  //   sayHi() {
  //     console.log(`Привет, ${this.firstName}!`)
  //   }
  // };

  // setTimeout(() => user.sayHi(), 1000);


  // const obj = {
  //   name: 'Стас',
  //   func () {

  //     console.log(`hello ${this.name}`);
  //   }
  // }

  // obj.func()

  // const log = (message: any) => {
  //   console.log(message)
  // }

  // const debounce = (callback: (message: any) => void, delay: any) => {
  //   let timer:any = null

  //   return (...message: any) => {
  //     if (timer) {
  //       clearInterval(timer)
  //     }

  //     timer = setTimeout(() => {
  //       callback(...message)
  //     }, delay);
  //   }
  // }

  // const callLog = debounce(log, 10000)

  // callLog(1)
  // callLog(2)
  // callLog(3)
  // callLog(4)
  // callLog(5)
  // callLog(6)

  // function arrayDiff(a: number[], b: number[]) {
  //   let result: number[] = a


  //  b.map((itemB) => {
  //   console.count('a');
  //   result = result.filter((item) => (item !== itemB))
  //  })

  //   console.log(result)
  //   return result
  // }

  // arrayDiff([1, 2, 3, 3, 5, 5, 6, 10], [2, 3, 2,6])


  // const transportsDefault = [
  //   5000, // Поезд
  //   2000, // Грузовик
  //   1000, // Фургон
  //   100, // Легковой автомобиль
  //   10 // Почтальон
  // ];

  // const transSort = (weight: any, transports = transportsDefault) => {
  //   let a: any = []

  //   transports.forEach((item) => {
  //     a.push({ val: item, count: 0 })
  //   });

  //   for (let i = 0; i < a.length; i++) {
  //     while (weight >= a[i].val) {
  //       weight -= a[i].val
  //       ++a[i].count
  //     }
  //   }
  //   if (weight !== 0) {
  //     ++a[a.length - 1].count
  //   }

  //   return a;
  // };

  // console.log(transSort(10410), 'aa');


  return (
    <div style={{ backgroundColor: variant.background, color: variant.color }} className={style.app}>

    </div>
  )
}

