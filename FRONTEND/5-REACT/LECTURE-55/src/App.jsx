
function Product( {title, price}){
  
  return (
    <div>
       <h1>{title}</h1>
       <h3>{price}</h3>
    </div>
   
  );
}
let shoData=[
  {
    title: "Nike shoes",
    price: "599"
  }
]

function App() {
// let a= 5;
// let b=5;
// let c= a+b;
// console.log(c);

  
  return (
    <div>
  <Product title="Nike shoes" price="16999"/>
  <Product title="Addidas shoes" price="1699"/>
  <Product title="Red-tape shoes" price="16899"/>
  <Product title="Campus shoes" price="1599"/>
  <Product title="HRX shoes" price="1899"/>

    </div>
  
);
}

export default App
