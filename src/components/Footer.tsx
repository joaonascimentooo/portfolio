import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">About</h3>
                        <p className="text-sm">
                            Building amazing web experiences with modern technologies.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-sm hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-sm hover:text-white transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="text-sm hover:text-white transition-colors">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="https://github.com/joaonascimentooo" target="_blank" rel="noopener noreferrer" 
                                 className="hover:text-white transition-colors">
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-nascimento1/" target="_blank" rel="noopener noreferrer"
                                 className="hover:text-white transition-colors">
                                LinkedIn
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                                 className="hover:text-white transition-colors">
                                Twitter
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
                    <p>&copy; {currentYear} João Nascimento. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}