import IconLabel from '../IconLabel/IconLabel';
import FilmList from '../FilmList/FilmList';
import './ListSection.css';
import { List as ListType } from '../../types/List';

interface ListSectionProps {
  list: ListType,
  onFilmClick: (filmName: string) => void;
}

function ListSection({ list, onFilmClick }: ListSectionProps) {
  return (
    <div className="list-section">
      <div className="title-bar">
        <IconLabel icon={list.icon} label={list.name} />
      </div>
      {
        list.films.length === 0
          ? <div className='empty-list'>No item added yet</div>
          : <FilmList films={list.films} onFilmClick={onFilmClick} />
      }
    </div>
  );
}

export default ListSection;
