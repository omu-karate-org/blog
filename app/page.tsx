import fsPromises from 'fs/promises'
import ArticleList from "./components/ArticleList";
import Link from 'next/link';
// import { getAllArticles } from "@/pages/api/blogAPI";

export default async function Home() {
  // const articles = await getAllArticles();
  // console.log(articles);
  return (
    <div className="md:flex">
      <section className="w-full md:w-2/3 flex flex-col items-center px-3">
        <Link href="/list/1" className="text-slate-900 text-3xl font-bold hover:text-blue-700 pb-4">ブログへ</Link>
        応援ページの内容はこちらのリンクから
        <Link href="/archive/1" className="text-slate-900 text-3xl font-bold hover:text-blue-700 pb-4">アーカイブへ</Link>
      </section>

      <aside className="w-full md:w-1/3 flex flex-col items-center px-3 md:pl-6">
        <div className="bg-white shadow-md rounded p-4 mb-6 mt-4">
          <h3 className="font-bold text-gray-900 mb-2">About Me</h3>
          <p className="text-gray-600">
            作成中
          </p>
        </div>
      </aside>
    </div>
  );
}