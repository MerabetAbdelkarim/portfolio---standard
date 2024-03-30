import { useParams } from "react-router-dom"
import { ListProjects } from "../Data/ListProjects"
import Fancybox from "./components/Fancybox"






function ProjectDetails() {
    const { id } = useParams()
    const project = ListProjects.find((item) => (item.id === id))

    return (
        <div>
            <div className="container pt-10 ">
                <h1 className="text-4xl font-medium mb-10">{project.title}</h1>
                <div className="md:w-full h-[400px] overflow-hidden bg-gray-200 rounded-sm shadow-sm">
                    <img
                        className="object-contain w-full h-full m-auto  transform duration-500 ease-in-out hover:scale-105"
                        src={project.imgUrl}
                    />
                </div>
                <Fancybox
                    options={{
                        Carousel: {
                            infinite: false,
                        },
                    }}
                >
                    <a data-fancybox="gallery" href="https://lipsum.app/id/60/1600x1200">
                        <img src="https://lipsum.app/id/60/200x150" width="200" height="150" />
                    </a>
                    <a data-fancybox="gallery" href="https://lipsum.app/id/61/1600x1200">
                        <img src="https://lipsum.app/id/61/200x150" width="200" height="150" />
                    </a>
                    <a data-fancybox="gallery" href="https://lipsum.app/id/62/1600x1200">
                        <img src="https://lipsum.app/id/62/200x150" width="200" height="150" />
                    </a>
                    <a data-fancybox="gallery" href="https://lipsum.app/id/63/1600x1200">
                        <img src="https://lipsum.app/id/63/200x150" width="200" height="150" />
                    </a>
                    <a data-fancybox="gallery" href="https://lipsum.app/id/64/1600x1200">
                        <img src="https://lipsum.app/id/64/200x150" width="200" height="150" />
                    </a>
                </Fancybox>
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

export default ProjectDetails