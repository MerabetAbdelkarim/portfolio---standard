import { useParams } from "react-router-dom"
import { ListOtherProjects } from "../Data/ListOtherProjects"






function OtherProjectDetails() {
    const { id } = useParams()
    const project = ListOtherProjects.find((item) => (item.id === id))

    return (
        <div>
            <div className="container pt-10 ">
                <h1 className="text-4xl font-medium mb-10">{project.title}</h1>
                {
                    project.imgUrl && <div className="md:w-full h-[400px] overflow-hidden bg-gray-200 rounded-sm shadow-sm mb-3">
                        <img
                            className="object-contain w-full h-full m-auto  transform duration-500 ease-in-out hover:scale-105"
                            src={project.imgUrl}
                        />
                    </div>
                }

                <div className="mb-10">
                    <h2 className="font-medium">Tags:</h2>
                    <div className="mt-2 w-fit">
                        <ul className="flex gap-1 flex-wrap my-2">
                            {
                                Object.keys(project.tags).map((tag, y) => (
                                    <li key={y}
                                        className="bg-blue-200 text-sm capitalize px-4 py-1 rounded-full text-blue-700 font-medium">
                                        {project.tags[tag]}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="font-medium mb-10">
                    <h2>Links:</h2>
                    <div className="mt-2 w-fit">
                        <ul className="flex gap-1 flex-wrap my-2">
                            {
                                Object.keys(project.bnts).map((btn, x) => (
                                    <li key={x}
                                        className="px-2 py-1 opacity-70 hover:opacity-100 transition-opacity duration-300">
                                        <a href={project.bnts[btn].link}><img src={project.bnts[btn].icon} width={'30px'} height={'30px'} /></a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div >
                    <h2 className="font-medium">description :</h2>
                    <p className="mb-5">{project.subDesc} </p>
                    <ul>
                        {
                            Object.keys(project.desc).map((line, k) => (
                                <li key={k}
                                    className="text-sm  px-1 py-1 font-medium">
                                    {project.desc[line]}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default OtherProjectDetails