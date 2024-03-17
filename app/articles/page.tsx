import ArticleCategorySelector from '../../containers/article/category/categorySelector';

export default function ArticlesPage() {
  return (
    <main className="flex w-full flex-col items-start gap-4 pt-[30px]">
      <h2 className="text-[28px] font-bold">카테고리</h2>
      <ArticleCategorySelector isHaveAll />
    </main>
  );
}
