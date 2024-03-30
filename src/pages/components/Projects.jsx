import { Link } from "react-router-dom"
import { ListProjects } from "../../Data/ListProjects"

function Projects() {

    return (
        <>
            <section id="projects" className=" py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-28">
                    <h2 className="text-4xl text-gray-900 font-semibold mb-3 text-center">My Recent Work</h2>
                    <p className="text-gray-700 text-center text-lg">Here are a few past projects I've worked on</p>
                    <div className="mt-4">
                        <ul className="flex flex-col gap-16">
                            {
                                ListProjects.map((item, index) => (
                                    <li key={index}>
                                        <div className="grid md:grid-cols-2 gap-2 items-center bg-white shadow-sm md:shadow-none rounded-sm py-2">
                                            <div className="md:w-full h-[300px] overflow-hidden bg-gray-200 rounded-sm shadow-sm">
                                                <img
                                                    className="object-contain w-full h-full m-auto  transform duration-500 ease-in-out hover:scale-105"
                                                    src={item.imgUrl}
                                                />
                                            </div>
                                            <div className="md:w-full  pl-8">
                                                <h3 className="text-2xl capitalize text-gray-900 font-semibold"><Link to={`/project/${item.id}`}>{item.title}</Link></h3>
                                                <ul className="flex gap-1 flex-wrap my-2">
                                                    {
                                                        Object.keys(item.tags).map((tag, y) => (
                                                            <li key={y}
                                                                className="bg-blue-50 text-sm capitalize px-4 py-1 rounded-full text-blue-700 font-medium">
                                                                {item.tags[tag]}
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                                <p className="text-gray-700">
                                                    {item.subDesc}
                                                </p>
                                                <div className="mt-2 w-fit">
                                                    <ul className="flex gap-1 flex-wrap my-2">
                                                        {
                                                            Object.keys(item.bnts).map((btn, x) => (
                                                                <li key={x}
                                                                    className="px-2 py-1 opacity-70 hover:opacity-100 transition-opacity duration-300">
                                                                    <a href={item.bnts[btn].link}><img src={item.bnts[btn].icon} width={'30px'} height={'30px'} /></a>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects