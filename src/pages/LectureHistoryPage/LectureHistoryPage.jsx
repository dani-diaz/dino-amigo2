import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as lecturesAPI from '../../utilities/lectures-api';
import './LectureHistoryPage.css';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import LectureDetail from '../../components/LectureDetail/LectureDetail';
import LectureList from '../../components/LectureList/LectureList';

export default function LectureHistoryPage({ user, setUser }) {
  const [lectures, setLectures] = useState([]);
  const [selectedLecture, setSelectedLecture] = useState(null);

  useEffect(function() {
    async function getLectures() {
      const lectures = await lecturesAPI.getAllForUser();
      setLectures(lectures);
      setSelectedLecture(lectures[0]);
    }
    getLectures();
  }, []);

  return (
    <main className="LectureHistoryPage">
      <aside>
        <Link to="/classes/new" className="button btn-sm">NEW CLASS</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <LectureList
        lectures={lectures}
        selectedLecture={selectedLecture}
        setSelectedLecture={setSelectedLecture}
      />
      <LectureDetail lecture={selectedLecture} />
    </main>
  );
}