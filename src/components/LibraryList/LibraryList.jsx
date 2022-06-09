import './LibraryList.css';
import LibraryListLesson from '../LibraryListLesson/LibraryListLesson';

export default function LibraryList({ libraryLessons, handleAddToLesson }) {
  const lessons = libraryLessons.map(lesson =>
    <LibraryListLesson
      key={lesson._id}
      libraryLesson={lesson}
      handleAddToLesson={handleAddToLesson}
    />
  );
  return (
    <main className="LibraryList">
      {lessons}
    </main>
  );
}