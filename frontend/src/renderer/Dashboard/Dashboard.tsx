import { HiPlus } from 'react-icons/hi2';
import { HiX } from 'react-icons/hi';
import { useState } from 'react';
import './Dashboard.css';
import { LuHeart, LuList, LuTrash } from 'react-icons/lu';
import IconLabel from '../../components/IconLabel/IconLabel';

const FILMS = [
  'Film 1',
  'Film 2',
  'Film 3',
  'Film 4',
  'Film 5',
  'Film 6',
  'Film 7',
];

function Dashboard() {
  const [selectedFilm, setSelectedFilm] = useState<string | null>(null);

  function addFilm() {
    console.log('Add film');
  }

  function openFilmDetails(filmName: string) {
    setSelectedFilm(filmName);
  }

  function closeModal() {
    setSelectedFilm(null);
  }

  return (
    <div className="dashboard">
      <h1>Dashboard Page</h1>

      <div className="list-section">
        <div className="list-header">
          <IconLabel icon={LuList} label="Films" />
          <button type="button" onClick={addFilm}>
            <HiPlus />
          </button>
        </div>
        <div className="list-content">
          {FILMS.map((film) => (
            <div
              key={film}
              className="film-card"
              onClick={() => openFilmDetails(film)}
            >
              {film}
            </div>
          ))}
        </div>
      </div>

      <div className="pinned">
        <div className="favorites">
          <IconLabel icon={LuHeart} label="Favorites" />
          <div className="pinned-list-content">
            <div
              className="pinned-film-card"
              onClick={() => openFilmDetails('Film 1')}
            >
              Film 1
            </div>
            <div
              className="pinned-film-card"
              onClick={() => openFilmDetails('Film 2')}
            >
              Film 2
            </div>
            <div
              className="pinned-film-card"
              onClick={() => openFilmDetails('Film 3')}
            >
              Film 3
            </div>
          </div>
        </div>

        <div className="trash">
          <IconLabel icon={LuTrash} label="Trash" />
          <div className="pinned-list-content">
            <div
              className="pinned-film-card"
              onClick={() => openFilmDetails('Film 1')}
            >
              Film 1
            </div>
            <div
              className="pinned-film-card"
              onClick={() => openFilmDetails('Film 2')}
            >
              Film 2
            </div>
            <div
              className="pinned-film-card"
              onClick={() => openFilmDetails('Film 3')}
            >
              Film 3
            </div>
          </div>
        </div>
      </div>

      <div className={`film-modal ${selectedFilm ? 'open' : ''}`}>
        <div className="film-modal-header">
          <h2>Détails du film</h2>
          <button onClick={closeModal} className="film-modal-close-button">
            <HiX />
          </button>
        </div>

        {selectedFilm && (
          <div>
            <div className="modal-picture">{selectedFilm}</div>

            <div id="modal-section" style={{ marginBottom: '1.5rem' }}>
              <h3>Titre</h3>
              <p style={{ color: '#6b7280' }}>{selectedFilm}</p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3>Description</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                Ceci est une description détaillée du {selectedFilm}. Vous
                pouvez ajouter ici toutes les informations pertinentes comme le
                synopsis, la date de sortie, les acteurs, etc.
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3>Genre</h3>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span
                  style={{
                    background: '#dbeafe',
                    color: '#1e40af',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '999px',
                    fontSize: '0.875rem',
                  }}
                >
                  Action
                </span>
                <span
                  style={{
                    background: '#dbeafe',
                    color: '#1e40af',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '999px',
                    fontSize: '0.875rem',
                  }}
                >
                  Aventure
                </span>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>Note</h3>
              <p
                style={{
                  color: '#6b7280',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                }}
              >
                ⭐ 4.5/5
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '2rem' }}>
              <button
                style={{
                  flex: 1,
                  background: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '500',
                }}
              >
                Ajouter aux favoris
              </button>
              <button
                style={{
                  flex: 1,
                  background: '#ef4444',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '500',
                }}
              >
                Supprimer
              </button>
            </div>
          </div>
        )}
      </div>

      {selectedFilm && (
        <div
          onClick={closeModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.3)',
            zIndex: 999,
            transition: 'opacity 0.3s ease',
          }}
        />
      )}
    </div>
  );
}

export default Dashboard;
