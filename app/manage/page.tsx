import ViewTrendChart from '../../containers/manage/viewTrend/viewTrendChart';

export default function ManagePage() {
  return (
    <div className="flex w-4/5 flex-col">
      <h2 className="p-2 font-bold">블로그 관리</h2>
      <ViewTrendChart />
    </div>
  );
}
