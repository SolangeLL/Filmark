import { useState } from 'react';
import { Rating } from '@mui/material';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbDownOutlined from '@mui/icons-material/ThumbDownOutlined';
import toast from 'react-hot-toast';
import { Review } from '../../types/Review';
import './NewReview.css';
import TextInput from '../TextInput/TextInput';

interface NewReviewProps {
  onSubmit: (
    review: Omit<Review, 'id' | 'reviewDate' | 'profilePictureUrl'>,
  ) => void;
}

function NewReview({ onSubmit }: NewReviewProps) {
  const [goodMark, setGoodMark] = useState(0);
  const [badMark, setBadMark] = useState(0);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState({
    title: false,
    comment: false,
    goodMark: false,
    badMark: false,
  });

  const handleSubmit = () => {
    const newErrors = {
      title: title.trim() === '',
      comment: comment.trim() === '',
      goodMark: goodMark === 0,
      badMark: badMark === 0,
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      toast.dismiss();
      toast.error('Please fill in all fields and provide ratings.');
      return;
    }

    onSubmit({
      title,
      comment,
      goodNote: goodMark,
      badNote: badMark,
    });

    setTitle('');
    setComment('');
    setGoodMark(0);
    setBadMark(0);
    setErrors({
      title: false,
      comment: false,
      goodMark: false,
      badMark: false,
    });

    toast.success('Review submitted successfully!');
  };

  const handleTitleChande = (value: string) => {
    setTitle(value);
    if (errors.title && value.trim() !== '') {
      setErrors({ ...errors, title: false });
    }
  }

  return (
    <div className="new-review">
      <TextInput
        title={title}
        placeholder="Review Title"
        onChange={(value) => { handleTitleChande(value); }}
        isError={errors.title}
      />
      <textarea
        className={`new-review-comment ${errors.comment ? 'error' : ''}`}
        placeholder="Write your review here..."
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
          if (errors.comment && e.target.value.trim() !== '') {
            setErrors({ ...errors, comment: false });
          }
        }}
      />
      <div className="review-notes-container">
        <div className={`review-note ${errors.goodMark ? 'error-rating' : ''}`}>
          <Rating
            name="fav-rating"
            value={goodMark}
            precision={0.5}
            size="medium"
            onChange={(_, value) => {
              setGoodMark(value || 0);
              if (errors.goodMark && value && value > 0) {
                setErrors({ ...errors, goodMark: false });
              }
            }}
          />
          <p>{goodMark}</p>
        </div>

        <div className="review-bottom">
          <div
            className={`review-note ${errors.badMark ? 'error-rating' : ''}`}
          >
            <Rating
              name="bad-rating"
              value={badMark}
              getLabelText={(value: number) =>
                `${value} Heart${value !== 1 ? 's' : ''}`
              }
              precision={0.5}
              icon={<ThumbDownIcon sx={{ color: 'red' }} />}
              emptyIcon={<ThumbDownOutlined />}
              onChange={(_, value) => {
                setBadMark(value || 0);
                if (errors.badMark && value && value > 0) {
                  setErrors({ ...errors, badMark: false });
                }
              }}
            />
            <p>{badMark}</p>
          </div>
          <button
            type="button"
            className="submit-review-button"
            onClick={handleSubmit}
          >
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewReview;
