import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/counter">Counter</Link></li>
        <li><Link href="/toggle">Toggle</Link></li>
        <li><Link href="/components-demo">Components Demo</Link></li>
        <li><Link href="/user-interactions">User Interactions</Link></li>
      </ul>
    </nav>
  );
}
