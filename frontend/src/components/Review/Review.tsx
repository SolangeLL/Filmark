import { Rating } from '@mui/material';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbDownOutlined from '@mui/icons-material/ThumbDownOutlined';
import './Review.css';
import { Review as ReviewType } from '../../types/Review';

function Review({ review }: { review: ReviewType }) {
  return (
    <div className="review">
      <div className="review-user">
        <img
          src={review.profilePictureUrl || '/default-profile.png'}
          alt="Profile"
        />
        <p style={{ margin: '0.8rem 0 0.3rem 0' }}>Username</p>
        <p className="review-count">1 review</p>
      </div>

      <div className="review-content">
        <h4>{review.title}</h4>
        <p className="review-comment">{review.comment}</p>
        <div className="review-notes-container">
          <div className="review-note">
            <Rating
              name="fav-rating"
              value={review.goodNote}
              precision={0.5}
              size="medium"
              readOnly
            />
            <p>{review.goodNote}</p>
          </div>

          <div className="review-bottom">
            <div className="review-note">
              <Rating
                name="bad-rating"
                value={review.badNote}
                getLabelText={(value: number) =>
                  `${value} Heart${value !== 1 ? 's' : ''}`
                }
                precision={0.5}
                icon={<ThumbDownIcon sx={{ color: 'red' }} />}
                emptyIcon={<ThumbDownOutlined />}
                readOnly
              />
              <p>{review.badNote}</p>
            </div>
            <p className="review-date">{review.reviewDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
