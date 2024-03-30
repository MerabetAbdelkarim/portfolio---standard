

function About() {
    return (
        <>
            <section id="about" className="pt-16 pb-72 bg-green-600">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-28">
                    <h2 className="text-4xl text-white font-semibold mb-5 text-center">
                        About me
                    </h2>
                    <p className="text-xl text-gray-50 mb-4 text-center w-5/6 mx-auto leading-relaxed">
                        Hi, I’m john donne. I’m a web Developer .is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
                    <a href=""
                        target="_blank"
                        className="block mx-auto text-center w-48 border-2 border-solid border-white px-8 py-2 text-white rounded-sm text-lg  focus:outline-none focus:ring-2 focus:ring-blue-300">My
                        resume
                    </a>
                </div>
            </section>
        </>
    )
}

export default About