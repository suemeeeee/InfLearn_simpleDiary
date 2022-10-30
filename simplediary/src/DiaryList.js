import DiaryItem from "./DiaryItem";

const DiaryList = ({ onEdit, onRemove, diaryList }) => {
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onEdit={onEdit} onRemove={onRemove} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  //defaultProps 사용 팁
  diaryList: [], //기본값 빈 배열 (undefined 전달 시 에러 방지)
};

export default DiaryList;
