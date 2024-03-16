import ManangeCategories from '../../../../containers/manage/category/categories';

export default function CategoryManagePage() {
  return (
    <div className="flex w-4/5 flex-col">
      <h2 className="p-2 font-bold">카테고리 관리</h2>
      <ManangeCategories />
    </div>
  );
}
