import { Rating } from '@mui/material';
import './FilmModal2.css';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbDownOutlined from '@mui/icons-material/ThumbDownOutlined';
import Review from '../Review/Review';

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
              icon={<ThumbDownIcon fontSize="large" sx={{ color: "red" }} />}
              emptyIcon={<ThumbDownOutlined fontSize="large" />}
            />
          </div>
        </div>

        <div className="film-modal-first-section">
          <div className="film-modal-synopsis">
            <h2>Synopsis</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>

          <div className="film-modal-information">
            <h2>Informations</h2>
            <p>Directed by <span id="detail">Director</span></p>
            <p>Released in <span id="detail">Date</span></p>
            <p>Duration <span id="detail">Duration</span></p>
          </div>
        </div>

        <div className="film-modal-second-section">
          <div className="genre-section">
            <h2>Genre</h2>
            <div className="genre-container">
              <div className="genre-badge">
                Action
              </div>
              <div className="genre-badge">
                Adventure
              </div>
            </div>
          </div>

          {/* Cast actor section ? */}

          <div className="customization">
            <h2>Customize your experience</h2>
          </div>
        </div>

        <div className="film-modal-third-section">
          <h2>Reviews</h2>
          <div className="review-container">
            <Review comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." goodNote={4.5} badNote={2.0} isNew={true} profilePictureUrl="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" />
            <Review comment="Great movie!" goodNote={4.5} badNote={2.0} isNew={false} profilePictureUrl="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" />
            <Review comment="Great movie!" goodNote={4.5} badNote={2.0} isNew={false} profilePictureUrl="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" />
          </div>
        </div>

      </div>

      {isOpen && <div onClick={onClose} className="background" />}
    </>
  );
}

export default FilmModal2;
