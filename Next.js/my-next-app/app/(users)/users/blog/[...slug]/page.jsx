

const Page =async (props) => {
    const {slug}= await props.params;
    console.log(slug); // this will be array 
    

  return (
    <div>
      <h1>Blog</h1>
    </div>
  )
}

export default Page
