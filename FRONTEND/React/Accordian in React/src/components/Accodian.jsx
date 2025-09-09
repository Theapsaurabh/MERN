
import {FAQ} from "../Api/faq.json"
import { useEffect, useState } from "react";
const Accodian = () => {
    const {data. setData}= useState();
    useEffect(()=>{
        setData(FAQ)
    },[])
  return (
    <>
      <h1></h1>
    </>
  )
}

export default Accodian
