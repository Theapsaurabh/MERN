import Link from "next/link";


export default function Navigation() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-100">
      <div className="text-xl font-bold">Saurabh</div>
      
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/service">Service</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
