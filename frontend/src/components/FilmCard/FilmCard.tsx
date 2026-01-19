import './FilmCard.css';

interface FilmCardProps {
  title: string;
  onClick: () => void;
}

function FilmCard({ title, onClick }: FilmCardProps) {
  return (
    <div className="film-card" onClick={onClick}>
      {title}
    </div>
  );
}

export default FilmCard;
