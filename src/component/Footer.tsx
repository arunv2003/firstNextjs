const Footer = () => {
    return (
        <footer className="bg-black text-gray-500 p-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 sm:px-6 md:px-7 lg:-8">
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">About us</h2>
                    <p className="mb-4">
                        Music school is a premier institution dedicated to teaching the art and science of music. We nurture talent form the ground
                        up , fostering a vibrant community of musicians
                    </p>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">
                        Quick Links
                    </h2>
                    <ul>
                        <li>
                            <a href="#" className="hover:text-white transition-colors duration-300">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition-colors duration-300">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition-colors duration-300">
                                Courses
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition-colors duration-300">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Follow us</h2>
                    <div className="flex space-x-4">
                        <ul>
                            <li>
                                <a href="#" className="hover:text-white transition-colors duration-300">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors duration-300">
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
                    <p className="hover:text-white transition-colors duration-300 cursor-pointer">Lucknow, India</p>
                    <p className="hover:text-white transition-colors duration-300 cursor-pointer">Chinhat Lucknow</p>
                    <p className="hover:text-white transition-colors duration-300 cursor-pointer">Email : info@musicgamil.com</p>
                    <p className="hover:text-white transition-colors duration-300 cursor-pointer">Phone : 9874964690</p>
                </div>
            </div>
            <p className="text-center text-xs pt-8">© 2025 Music School. All right reserved.</p>
        </footer>
    )
}

export default Footer