import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h3>Home Page</h3>
      <Link href='/about'>About</Link>
      <Link href='/recipes'>Recipes</Link>
    </div>
  );
}
