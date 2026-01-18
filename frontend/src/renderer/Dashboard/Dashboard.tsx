import { HiPlus } from 'react-icons/hi2';
import './Dashboard.css';

function Dashboard() {
  function addFilm() {
    console.log('Add film');
  }

  return (
    <div className="dashboard">
      <h1>Dashboard Page</h1>

      <div className="list-section">
        <div className="list-header">
          <h2>List</h2>
          <button type="button" onClick={addFilm}>
            <HiPlus />
          </button>
        </div>
        <div className="list-content">
          <div className="film-card">Film 1</div>
          <div className="film-card">Film 2</div>
          <div className="film-card">Film 3</div>
          <div className="film-card">Film 4</div>
          <div className="film-card">Film 5</div>
          <div className="film-card">Film 6</div>
          <div className="film-card">Film 6</div>
        </div>
      </div>

      <div className="pinned">
        <div className="favorites">
          <h2>Favorites</h2>
          <div className="pinned-list-content">
            <div className="pinned-film-card">Film 1</div>
            <div className="pinned-film-card">Film 2</div>
            <div className="pinned-film-card">Film 3</div>
          </div>
        </div>

        <div className="trash">
          <h2>Trash</h2>
          <div className="pinned-list-content">
            <div className="pinned-film-card">Film 1</div>
            <div className="pinned-film-card">Film 2</div>
            <div className="pinned-film-card">Film 3</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
