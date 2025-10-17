import Link from 'next/link';

export function Header() {
  return (
    <header className="w-full p-4 bg-gray-900 border-b border-gray-700">
      <nav className="max-w-4xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white">
          João Nascimento
        </Link>
        <ul className="flex gap-4">
          <li>
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/projetos" className="text-gray-300 hover:text-white transition-colors">
              Projects
            </Link>
          </li>
          {/* <li>
            <Link href="/certificados" className="text-gray-300 hover:text-white transition-colors">
              Certificates
            </Link>
          </li> */}
          <li>
            <Link href="/sobre" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}