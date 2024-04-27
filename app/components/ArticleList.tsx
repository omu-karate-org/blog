import React from 'react';
import ArticleCard from './ArticleCard';

type ArticleListProps = {
  articles: any[];
};

const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <div>
      {articles.map((article: any) => (
        <ArticleCard key={article.date} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
