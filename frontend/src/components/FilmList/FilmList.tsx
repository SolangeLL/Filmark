import FilmCard from '../FilmCard/FilmCard';
import './FilmList.css';

interface FilmListProps {
  films: string[];
  onFilmClick: (filmName: string) => void;
}

function FilmList({ films, onFilmClick }: FilmListProps) {
  return (
    <div className="list-content">
      {films.map((film) => (
        <FilmCard key={film} title={film} onClick={() => onFilmClick(film)} />
      ))}
    </div>
  );
}

export default FilmList;
