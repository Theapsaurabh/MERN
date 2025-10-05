import ProductList from "./ProductList";

 const Products= async(props)=>{
    const searchParams=await props.searchParams
    console.log(searchParams) // Server  {} bcz query search is em pty
    //http://localhost:3000/users/products?cat=laptop. ->  this will show -> Server  {cat: 'laptop'}


    const category= searchParams?.category || "all";
    const  sort= searchParams?.sort || "default";
    const page= searchParams?.page || 1;

    return (
        <div>
            <ProductList/>
            Showing {category} products, sorted by {sort}, page {page}
        </div>
    );


   
    return <h1>
        Search Params
    </h1>


}
export default Products;