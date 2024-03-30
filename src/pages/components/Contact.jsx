
function Contact() {
    return (
        <section id="contact" className="py-16 bg-white relative">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-28">
                <h2 className="text-4xl text-gray-900 font-semibold mb-3 text-center">Contact me</h2>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2">
                        <form action="">
                            <div className="flex flex-wrap -mx-3 mb-6 bg-white px-3 py-4 rounded-sm">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-gray-800 text-sm font-meduim mb-2"
                                        htmlFor="grid-first-name">
                                        Full Name
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-50 text-gray-800 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                        id="grid-first-name" type="text" placeholder="john donne"/>
                                </div>
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-gray-800 text-sm font-meduim mb-2"
                                        htmlFor="grid-last-name">
                                        Email Adress
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-50 text-gray-800 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                        type="text" placeholder="johndonne@gmail.com"/>
                                </div>
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-gray-800 text-sm font-meduim mb-2"
                                        htmlFor="grid-last-name">
                                        Message
                                    </label>
                                    <textarea
                                        className="appearance-none block w-full bg-gray-50 text-gray-800 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                        type="text" placeholder="" aria-label="message content"></textarea>
                                </div>
                                <div className="w-full px-3">
                                    <button
                                        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-10 rounded focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                        type="button">
                                        Send
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="w-full lg:w-1/2 lg:px-8 py-6">
                        <h3 className="text-gray-900 text-2xl font-semibold mb-4">Contact Information</h3>
                        <ul className="flex flex-col gap-2 ">
                            <li>
                                <h3 className="text-xl text-gray-800 font-medium mb-1">Mobile</h3>
                                <p className="text-xm text-gray-700">(+213)778578282</p>
                            </li>
                            <li>
                                <h3 className="text-xl text-gray-800 font-medium mb-1">Email</h3>
                                <p className="text-xm text-gray-700">johndonne@gmail.com </p>
                            </li>
                            <li>
                                <h3 className="text-xl text-gray-800 font-medium mb-1">Address</h3>
                                <p className="text-xm text-gray-700">Algeria</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact