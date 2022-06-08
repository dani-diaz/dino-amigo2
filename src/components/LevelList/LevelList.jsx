import './LevelList.css';

export default function LevelList({ levels, activeLev, setActiveLev }) {
  const levs = levels.map(lev =>
    <li
      key={lev}
      className={lev === activeLev ? 'active' : ''}
      // FYI, the below will also work, but will give a warning
      // className={lev === activeCat && 'active'}
      onClick={() => setActiveCat(lev)}
    >
      {lev}
    </li>
  );
  return (
    <ul className="LevelList">
      {levs}
    </ul>
  );
}
