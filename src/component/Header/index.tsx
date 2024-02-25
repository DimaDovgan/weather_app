
import Link from 'next/link';
const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav>
        <ul className="flex">
          <li className="mr-6" >
            <Link href="/" passHref>Home</Link>
          </li>
          <li >
            <Link href="/savedUsers" passHref>Saved users</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;