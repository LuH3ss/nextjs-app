import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="container flex">
      <ul className="flex bg-slate-700">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/productos">Productos</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/password">Parsword</Link></li>
        <li><Link href="/registro">Registro</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
  )
}
