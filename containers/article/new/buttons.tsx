export default function ArticleNewButtons() {
  return (
    <div className="flex justify-end gap-3">
      <button type="submit" className="h-[50px] w-[170px] rounded-[10px] bg-[#111926] text-white">
        임시저장
      </button>
      <button type="submit" className="h-[50px] w-[170px] rounded-[10px] bg-[#111926] text-white">
        작성하기
      </button>
    </div>
  );
}
