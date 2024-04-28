import fsPromises from 'fs/promises';
import ArticleList from '../../components/ArticleList';
import Link from 'next/link';
import { Metadata } from 'next';

type paramsType = {
  id: string;
};

export async function generateStaticParams(): Promise<paramsType[]> {
  const data: any = await fsPromises.readFile('./app/data/archive.json');
  const keys = Object.keys(JSON.parse(data));
  const idArray: Array<paramsType> = [];
  const len = Math.ceil(keys.length / 10);
  for (let i = 1; i <= len; i++) {
    idArray.push({ id: `${i}` });
  }
  return idArray;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'アーカイブ記事一覧 | 大阪公立大学空手道部',
    description: 'アーカイブ記事一覧',
  };
}

const page = async ({ params }: { params: paramsType }) => {
  // const articles = await getAllArticles();
  // console.log(articles);
  const data: any = await fsPromises.readFile('./app/data/archive.json');
  const jsonData = JSON.parse(data);
  const keys = Object.keys(jsonData);
  const id = Number(params.id);
  const start: number = (id - 1) * 10;
  const end: number = Math.min(id * 10 - 1, keys.length - 1);
  const len: number = Math.ceil(keys.length / 10);
  const paging: Array<any> = [];
  for (let i = 1; i <= len; i++) {
    const classVal =
      Number(params.id) === i
        ? 'h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center'
        : 'h-10 w-10 text-gray-800 hover:bg-blue-600 hover:text-white font-semibold  text-sm flex items-center justify-center';
    paging.push(
      <Link key={i.toString()} href={i.toString()} className={classVal}>
        {i}
      </Link>,
    );
  }
  const articles = keys
    .map((key) => {
      return Object.assign({ date: key }, jsonData[key], { path: '/archive/article' });
    })
    .reverse()
    .slice(start, end);
  return (
    <div className="md:flex">
      <section className="w-full md:w-2/3 flex flex-col items-center px-3">
        <ArticleList articles={articles} />
        <div className="flex items-center py-8">{paging}</div>
      </section>

      <aside className="w-full md:w-1/3 flex flex-col items-center px-3 md:pl-6">
        <div className="bg-white shadow-md rounded p-4 mb-6 mt-4">
          <h3 className="font-bold text-gray-900 mb-2">About Me</h3>
          <p className="text-gray-600">作成中</p>
          <Link href="/list/1" className="pb-6 text-slate-900">
            ブログへ
          </Link>
        </div>
        {/* <div className="bg-white shadow-md rounded p-4 mb-6 mt-4 w-full">
          <h3 className="font-bold text-gray-900 mb-2">Category</h3>
          <ul className="text-gray-600 mt-2">
            <li>
              <a href="#">練習</a>
            </li>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#">Finance</a>
            </li>
            <li>
              <a href="#">Sports</a>
            </li>
          </ul>
        </div> */}
      </aside>
    </div>
  );
};

export default page;
