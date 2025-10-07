// app/(users)/static/page.jsx
import db from "@/config/db";


export const revalidate=30; // ISR



const StaticPage = async () => {
  try {
    const [doctors] = await db.execute("SELECT * FROM users"); 
    console.log(doctors);
  } catch (error) {
    console.error("❌ Database query failed:", error);
  }

  return (
    <div>
      Hii Fullstack
    </div>
  );
};

export default StaticPage;
