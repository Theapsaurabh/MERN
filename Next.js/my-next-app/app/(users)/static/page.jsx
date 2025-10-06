import {db} from "@/config/bd";
const StaticPage= async ()=>{

    const doctors= await db.execute("Select * from startersql")
    console.log(doctors)
    return <div>
        Hii Fullstack 


    </div>
}
export default StaticPage