import { Rating } from '@mui/material';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbDownOutlined from '@mui/icons-material/ThumbDownOutlined';
import './Review.css'

interface ReviewProps {
  comment: string;
  goodNote: number;
  badNote: number;
  isNew: boolean;
  profilePictureUrl?: string;
}

function Review({ comment, goodNote, badNote, isNew, profilePictureUrl }: ReviewProps) {
  return (
    <div className="review">
      <div className="review-user">
        <img src={profilePictureUrl || '/default-profile.png'} alt="Profile" className="review-profile-picture" />
        <p>Username</p>
      </div>
      
      <div className="review-content">
        <h4>Review Title</h4>
        <p className="review-comment">{comment}</p>
        <div className="review-notes-container">
          <div className="review-note">
            <Rating name="fav-rating" value={goodNote} precision={0.5} size="medium" readOnly />
            <p>{goodNote}</p>
          </div>
          <div className="review-note">
            <Rating name="bad-rating"
              value={badNote}
              getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
              precision={0.5}
              icon={<ThumbDownIcon sx={{ color: "red" }} />}
              emptyIcon={<ThumbDownOutlined />}
              readOnly
            />
            <p>{badNote}</p>
          </div>
        </div>
        {/* {isNew && <span className="review-new-badge">New</span>} */}
      </div>
    </div>
  );
}

export default Review;