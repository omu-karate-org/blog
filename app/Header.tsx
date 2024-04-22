import Link from "next/link";

export default function Header() {
  return (
    <header className="py-5 px-10 border-b flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-extrabold">
          <Link href="/">大坂公立大学空手道部</Link>
        </h1>
      </div>
      <div>
        <nav className="text-sm font-medium">
          <a
            href="https://mtaketani113.github.io/omu-karate-page/"
            className="bg-orange-300 px-3 py-3 rounded-md"
          >
            応援ページへ
          </a>
        </nav>
      </div>
    </header>
  );
}