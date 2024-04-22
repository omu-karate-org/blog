import React from "react";
import Link from "next/link";
import nextConfig from "../../next.config.mjs"

type ArticleCardProps = {
  article: any;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  const basePath = nextConfig.basePath;

  const imageSrc = article.images.length > 0 ? article.images[0] : basePath + "/no_image_logo.png";
  return (
    <div>
      <article className="flex flex-col shadow my-4">
        <Link href={`/${article.date}`} className="hover:opacity-75">
          <img
            src={imageSrc}
            width={1280}
            height={300}
            alt=""
          />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link
            href={`/${article.date}`}
            className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
          >
            {/* Next.js13. no-storeとno-cacheの違い */}
            {article.description}
          </Link>
          <p className="text-sm pb-3 text-slate-900">
            {article.date}
          </p>
          <Link href={`/${article.date}`} className="pb-6 text-slate-900">
            {article.description.length > 70
              ? article.description.substring(0, 70) + "..."
              : article.description}
          </Link>
          <Link
            href={`/${article.date}`}
            className="uppercase text-pink-800 hover:text-black"
          >
            続きを読む <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleCard;
