import React from 'react'
import { Product } from './Component/Product.jsx'



let shoedata = [
  {
    id:'1',
    title: 'NIKE SHOES',
    price: '2999'
  },
  {
    id:'2',
    title: 'NEW BALANCE SHOES',
    price: '5644'
  },
  {
    id:'3',
    title: 'COMET SHOES',
    price: '7643'
  },
  {
    id:'4',
    title: 'DIOR SHOES',
    price: '653'
  }
]

export function App() {
  return (
    <div>

      {
        shoedata.map((data)=>{
          return <Product key={data.id} title={data.title} price={data.price} />
          })
      }

      {/* <Product title='NIKE SHOES' price='2999' />
      <Product title='NEW BALANCE SHOES' price='6543' />
      <Product title='ABIBAS SHOES' price='9943' />
      <Product title='COMET SHOES' price='7643' />
      <Product title='DIOR SHOES' price='653' /> */}
    </div>
  )

}

// let ele = App()
// console.log(ele)


