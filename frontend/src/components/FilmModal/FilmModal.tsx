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

            <div id="modal-section" style={{ marginBottom: '1.5rem' }}>
              <h3>Titre</h3>
              <p style={{ color: '#6b7280' }}>{filmName}</p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3>Description</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                Ceci est une description détaillée du {filmName}. Vous
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
                ⭐ 4.5/5 💩 0/5
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

      {isOpen && (
        <div
          onClick={onClose}
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
    </>
  );
}

export default FilmModal;
