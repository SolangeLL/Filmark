import { Rating } from '@mui/material';
import './FilmModal2.css';
// import { HiHeart, HiOutlineHeart } from 'react-icons/hi2';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface FilmModal2Props {
  isOpen: boolean;
  filmName: string | null;
  onClose: () => void;
}

function FilmModal2({ isOpen, filmName, onClose }: FilmModal2Props) {
  return (
    <>
      <div className={`film-modal ${isOpen ? 'open' : ''}`}>

        <div className="film-modal-header">
          <div className="film-modal-picture">
            <img
              src="https://oblikon.net/wp-content/uploads/her_affiche.jpg"
              alt="Close"
              onClick={onClose}
            />
          </div>

          <div className="film-modal-header-content">
            <h2>{filmName}</h2>
            <Rating name="fav-rating" defaultValue={0} precision={0.5} size="large" sx={{ fontSize: '4rem' }} />
            <Rating name="bad-rating"
              defaultValue={0}
              getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
              precision={0.5}
              icon={<FavoriteIcon fontSize="large" sx={{ color: "red" }} />}
              emptyIcon={<FavoriteBorderIcon fontSize="large" />}
            />
          </div>
        </div>

        <div className="film-modal-first-section">
          <div className="film-modal-synopsis">
            <h3>Synopsis</h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>

          <div className="film-modal-details">
            <h3>Informations</h3>
            <p>Directed by <span id="detail">Director</span></p>
            <p>Released <span id="detail">Date</span></p>
            <p>Duration <span id="detail">Duration</span></p>
          </div>
        </div>

        <div className="film-modal-second-section">
          <div className="genre-section">
            <h3>Genre</h3>
            <div className="genre-container">
              <div className="genre-badge">
                Genre1
              </div>
              <div className="genre-badge">
                Genre2
              </div>
            </div>
          </div>

          {/* Cast actor section ? */}

          <div className="customization">
            <h3>Customize your experience</h3>
          </div>
        </div>

        <div className="film-modal-third-section">
          <h3>Your Reviews</h3>
        </div>

      </div>

      {isOpen && <div onClick={onClose} className="background" />}
    </>
  );
}

export default FilmModal2;
