import Image from "next/image";
import thapa from "@/public/thapa.jpg"
import style from "./service.module.css"

{/**Meta Data */}
export const metadata= {
    title: "Service Page",
    description: "This is my service ",
    authors: [{name: "Saurabh Pandey "}, {name:"Coder"}],
    keywords:['next.js', "React.js", "Frontend Developer", "Backend Developer"],
    


};


const Services= async ()=>{
    return(
        <section>
            <h1 className={style.common_heading}>
                Hello Service
                </h1>
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">

                        Our Team
                    </h2>
                    <div className="grid grid-cols-3 gap-8">
                        {/**<--- Team Member-1 ----->*/}
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:translate-y-2 transition-all duration-300">
                            <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <Image src="/thapa.jpg" width={500} height={500} alt="Saurabh"
                                className="w-full h-full rounded-full  "
                                />


                            </div>
                            <h3 className="text-lg font-semibold text-center text-gray-800">
                                  Saurabh Pandey
                            </h3>
                            <p className="text-sm text-gray-600 text-center mt-2">Frontend Developer</p>
                            <p className="text-sm text-gray-500 text-center mt-1">react & Typescript</p>

                          

                        </div> 

                        {/**<--- Team Member-2 ----->*/}
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:translate-y-2 transition-all duration-300">
                            <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <Image src="/thapa.jpg" width={500} height={500} alt="Saurabh"
                                className="w-full h-full rounded-full  "
                                />

                            </div>
                            <h3 className="text-lg font-semibold text-center text-gray-800">
                                  Saurabh Pandey
                            </h3>
                            <p className="text-sm text-gray-600 text-center mt-2">Frontend Developer</p>
                            <p className="text-sm text-gray-500 text-center mt-1">react & Typescript</p>

                          

                        </div> 

                        {/**<--- Team Member-3 ----->*/}
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:translate-y-2 transition-all duration-300">
                            <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                                 <Image src="/thapa.jpg" width={500} height={500} alt="Saurabh"
                                className="w-full h-full rounded-full  "
                                />

                            </div>
                            <h3 className="text-lg font-semibold text-center text-gray-800">
                                  Saurabh Pandey
                            </h3>
                            <p className="text-sm text-gray-600 text-center mt-2">Frontend Developer</p>
                            <p className="text-sm text-gray-500 text-center mt-1">react & Typescript</p>

                          

                        </div> 

                        {/**<--- Team Member-4 ----->*/}
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:translate-y-2 transition-all duration-300">
                            <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                                 <Image src="/thapa.jpg" width={500} height={500} alt="Saurabh"
                                className="w-full h-full rounded-full  "
                                />

                            </div>
                            <h3 className="text-lg font-semibold text-center text-gray-800">
                                  Saurabh Pandey
                            </h3>
                            <p className="text-sm text-gray-600 text-center mt-2">Backend Developer</p>
                            <p className="text-sm text-gray-500 text-center mt-1">Node.js & Express</p>

                          

                        </div> 

                    </div>


                </div>
        </section>

    )
}
export default Services