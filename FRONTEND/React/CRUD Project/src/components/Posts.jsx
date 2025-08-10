
import { useEffect, useState } from "react"
import { deletePost, getPost } from "../api/PostApi"


const Posts = () => {
    const [data, setData]= useState([])
    const getPostData= async ()=>{
   const res= await getPost();
   console.log(res)
   setData(res.data)
  }
  const handleDaletePost=async (id)=>{
    try {
    const res= await deletePost(id)
   if(res.status== 200){
     const newUpdatedPost= data.filter((currElem)=>{
        return currElem.id != id;


     })
     setData(newUpdatedPost)
   }
        
    } catch (error) {
        console.log(error)
        
    }
  
}
  
  useEffect(()=>{
    getPostData();
  },[])
  return (
    <section className="section-post">
        <ul>
            {
                data.map((currElem)=>{
                    return <li key={currElem.id}>
                        <p> Title:{currElem.title}</p>
                        <p> News: {currElem.body}</p>
                        <button>Edit</button>
                        <button onClick={()=>{handleDaletePost(currElem.id)}}>Delete</button>
                    </li>

                })
            }
        </ul>

    </section>
  )
}

export default Posts
