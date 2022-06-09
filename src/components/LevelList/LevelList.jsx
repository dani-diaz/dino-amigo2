import './LevelList.css';

export default function LevelList({ levels, activeLev, setActiveLev }) {
  const levs = levels.map(lev =>
    <li
      key={lev}
      className={lev === activeLev ? 'active' : ''}
      onClick={() => setActiveLev(lev)}
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
