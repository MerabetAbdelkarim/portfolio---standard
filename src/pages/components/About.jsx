

function About() {
    return (
        <>
            <section id="about" className="pt-16 pb-72 bg-blue-700">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-28">
                    <h2 className="text-4xl text-white font-semibold mb-5 text-center">
                        About me
                    </h2>
                    <p className="text-xl text-gray-50 mb-4 text-center w-5/6 mx-auto leading-relaxed">
                        Hi, I’m Meziane Khalil. I’m a Front-End Developer located in Algeria. I have a serious passion for
                        frontend development and web accessibility. with a educational background in 💻 computer science.
                        I’m a self-taught developer and I’m always looking for new challenges to learn new technologies.
                    </p>
                    <a href="https://docs.google.com/document/d/1RoT47ic6VLn_-yPZNhOHTTD92qDsIraqtZ_i5MED3r8/edit?usp=sharing"
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