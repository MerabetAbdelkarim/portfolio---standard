import { Link } from "react-router-dom"
import { ListOtherProjects } from "../../Data/ListOtherProjects.jsx"

function OtherProjects() {
    return (
        <section className="py-16 bg-gray-50 bg-opacity-50 border-y-2 border-gray-100 border-solid">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-28">
                <h2 className="text-4xl text-gray-900 font-semibold mb-3 text-center">Other Projects</h2>
                <div className="mt-4">
                    <ul className="flex flex-wrap flex-col md:flex-row">
                        {
                            ListOtherProjects.map((item, index) => (
                                <li key={index} className="w-full md:w-1/2 p-2">
                                    <div className="flex items-center">
                                        <div className="bg-white shadow-sm rounded-sm px-6 py-4">
                                            <h3 className="text-2xl capitalize text-gray-900 font-semibold"><Link to={`/other-project/${item.id}`}>{item.title}</Link></h3>
                                            <p className="text-gray-700 my-1">{item.subDesc}</p>
                                            <div className="mt-3 flex justify-between align-middle h-10 items-center">
                                                <ul className="flex gap-1 flex-wrap my-2">
                                                    {
                                                        Object.keys(item.tags).map((tag, y) => (
                                                            <li key={y}
                                                                className="bg-blue-50 text-sm capitalize px-4 py-1.5 rounded-full text-blue-600">
                                                                {item.tags[tag]}
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                                <div className="">
                                                    {
                                                        Object.keys(item.bnts).map((btn,x) => (
                                                            <a key={x} href={item.bnts[btn].link}
                                                                aria-label="github link repository">
                                                                <img src={item.bnts[btn].icon} alt="" />
                                                            </a>
                                                        ))
                                                    }

                                                </div>
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
    )
}

export default OtherProjects