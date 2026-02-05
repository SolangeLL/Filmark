import { useState } from 'react';
import { Rating } from '@mui/material';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbDownOutlined from '@mui/icons-material/ThumbDownOutlined';
import './NewReview.css';

function NewReview() {
  const [goodMark, setGoodMark] = useState(0);
  const [badMark, setBadMark] = useState(0);

  return (
    <div className="new-review">
      <span
        className="review-title"
        contentEditable
        data-placeholder="Review Title"
        suppressContentEditableWarning
      />
      {/* <input type="text" className="review-title" placeholder="Review Title" /> */}
      <textarea
        className="new-review-comment"
        placeholder="Write your review here..."
      />
      <div className="review-notes-container">
        <div className="review-note">
          <Rating
            name="fav-rating"
            defaultValue={goodMark}
            precision={0.5}
            size="medium"
            onChange={(_, value) => setGoodMark(value || 0)}
          />
          <p>{goodMark}</p>
        </div>

        <div className="review-bottom">
          <div className="review-note">
            <Rating
              name="bad-rating"
              defaultValue={badMark}
              getLabelText={(value: number) =>
                `${value} Heart${value !== 1 ? 's' : ''}`
              }
              precision={0.5}
              icon={<ThumbDownIcon sx={{ color: 'red' }} />}
              emptyIcon={<ThumbDownOutlined />}
              onChange={(_, value) => setBadMark(value || 0)}
            />
            <p>{badMark}</p>
          </div>
          <button type="button" className="submit-review-button">
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewReview;
