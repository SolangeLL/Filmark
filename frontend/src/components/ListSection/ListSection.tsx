import { ElementType } from 'react';
import { HiPlus } from 'react-icons/hi2';
import IconLabel from '../IconLabel/IconLabel';
import FilmList from '../FilmList/FilmList';
import './ListSection.css';

interface ListSectionProps {
  icon: ElementType;
  title: string;
  films: string[];
  onFilmClick: (filmName: string) => void;
  onAdd: () => void;
}

function ListSection({
  icon,
  title,
  films,
  onFilmClick,
  onAdd,
}: ListSectionProps) {
  return (
    <div className="list-section">
      <div className="title-bar">
        <IconLabel icon={icon} label={title} />
        <button type="button" onClick={onAdd}>
          <HiPlus />
        </button>
      </div>
      <FilmList films={films} onFilmClick={onFilmClick} />
    </div>
  );
}

export default ListSection;
