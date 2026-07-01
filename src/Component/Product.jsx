export function Product(props) {  //(title,price)
  //console.log(props.title)
  return (
    <>
      <h1>{props.title}</h1>
      <h3>{props.price}</h3>
    </>
  )
}