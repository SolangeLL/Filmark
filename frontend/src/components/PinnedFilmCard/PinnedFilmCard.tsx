import './PinnedFilmCard.css';

interface PinnedFilmCardProps {
  title: string;
  onClick: () => void;
}

function PinnedFilmCard({ title, onClick }: PinnedFilmCardProps) {
  return (
    <div className="pinned-film-card" onClick={onClick}>
      {title}
    </div>
  );
}

export default PinnedFilmCard;
