import { Rating } from '@mui/material';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbDownOutlined from '@mui/icons-material/ThumbDownOutlined';
import './Review.css';

interface ReviewProps {
  title: string;
  comment: string;
  goodNote: number;
  badNote: number;
  profilePictureUrl?: string;
  reviewDate: string;
}

function Review({
  title,
  comment,
  goodNote,
  badNote,
  profilePictureUrl,
  reviewDate,
}: ReviewProps) {
  return (
    <div className="review">
      <div className="review-user">
        <img src={profilePictureUrl || '/default-profile.png'} alt="Profile" />
        <p style={{ margin: '0.8rem 0 0.3rem 0' }}>Username</p>
        <p className="review-count">1 review</p>
      </div>

      <div className="review-content">
        <h4>{title}</h4>
        <p className="review-comment">{comment}</p>
        <div className="review-notes-container">
          <div className="review-note">
            <Rating
              name="fav-rating"
              value={goodNote}
              precision={0.5}
              size="medium"
              readOnly
            />
            <p>{goodNote}</p>
          </div>

          <div className="review-bottom">
            <div className="review-note">
              <Rating
                name="bad-rating"
                value={badNote}
                getLabelText={(value: number) =>
                  `${value} Heart${value !== 1 ? 's' : ''}`
                }
                precision={0.5}
                icon={<ThumbDownIcon sx={{ color: 'red' }} />}
                emptyIcon={<ThumbDownOutlined />}
                readOnly
              />
              <p>{badNote}</p>
            </div>
            <p className="review-date">{reviewDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
