import { ElementType } from 'react';
import IconLabel from '../IconLabel/IconLabel';
import FilmList from '../FilmList/FilmList';
import './ListSection.css';

interface ListSectionProps {
  icon: ElementType;
  title: string;
  films: string[];
  onFilmClick: (filmName: string) => void;
}

function ListSection({ icon, title, films, onFilmClick }: ListSectionProps) {
  return (
    <div className="list-section">
      <div className="title-bar">
        <IconLabel icon={icon} label={title} />
      </div>
      <FilmList films={films} onFilmClick={onFilmClick} />
    </div>
  );
}

export default ListSection;
