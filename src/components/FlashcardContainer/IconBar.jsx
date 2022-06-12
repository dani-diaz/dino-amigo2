

export default function IconBar({ setQuizMode, setAddQuestionsView }) {
  return (
    <div className="sidebar-icon-bar">
      <button
        onClick={() => {
          setQuizMode(false);
          setAddQuestionsView(false);
        }}>DECKS</button>
    </div>
  );
}
