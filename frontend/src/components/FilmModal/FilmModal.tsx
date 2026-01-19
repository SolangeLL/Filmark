import { HiX } from 'react-icons/hi';
import './FilmModal.css';

interface FilmModalProps {
  isOpen: boolean;
  filmName: string | null;
  onClose: () => void;
}

function FilmModal({ isOpen, filmName, onClose }: FilmModalProps) {
  return (
    <>
      <div className={`film-modal ${isOpen ? 'open' : ''}`}>
        <div className="film-modal-header">
          <h2>Détails du film</h2>
          <button
            type="button"
            onClick={onClose}
            className="film-modal-close-button"
          >
            <HiX />
          </button>
        </div>

        {filmName && (
          <div>
            <div className="modal-picture">{filmName}</div>

            <div className="modal-section">
              <h3>Titre</h3>
              <p style={{ color: '#6b7280' }}>{filmName}</p>
            </div>

            <div className="modal-section">
              <h3>Description</h3>
              <p>
                Ceci est une description détaillée du {filmName}. Vous pouvez
                ajouter ici toutes les informations pertinentes comme le
                synopsis, la date de sortie, les acteurs, etc.
              </p>
            </div>

            <div className="modal-section">
              <h3>Genre</h3>
              <div className="genre-container">
                <span className="genre-badge">Action</span>
                <span className="genre-badge">Aventure</span>
              </div>
            </div>

            <div className="modal-section note">
              <h3>Note</h3>
              <p>⭐ 4.5/5 💩 0/5</p>
            </div>

            <div
              className="modal-section"
              style={{ display: 'flex', gap: '0.75rem', marginTop: '2rem' }}
            >
              <button
                type="button"
                className="film-button"
                style={{ background: '#3b82f6' }}
              >
                Ajouter aux favoris
              </button>
              <button
                type="button"
                className="film-button"
                style={{ background: '#ef4444' }}
              >
                Supprimer
              </button>
            </div>
          </div>
        )}
      </div>

      {isOpen && <div onClick={onClose} className="background" />}
    </>
  );
}

export default FilmModal;
