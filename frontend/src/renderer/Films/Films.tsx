import { useState } from 'react';
import { LuPlus } from 'react-icons/lu';
import FilmModal from '../../components/FilmModal/FilmModal';
import ListSection from '../../components/ListSection/ListSection';
import NewListModal from '../../components/NewListModal/NewListModal';
import './Films.css';
import { List as ListType } from '../../types/List';
import { ICON_OPTIONS } from '../../constants/IconOptions';

const FILMS = [
  'Film 1',
  'Film 2',
  'Film 3',
  'Film 4',
  'Film 5',
  'Film 6',
  'Film 7',
];

function Films() {
  const [selectedFilm, setSelectedFilm] = useState('');
  const [isNewListModalOpen, setIsNewListModalOpen] = useState(false);
  const [filmLists, setFilmLists] = useState<ListType[]>([
    {
      id: 1,
      name: "To watch",
      icon: ICON_OPTIONS.list,
      films: FILMS
    }
  ])

  function closeModal() {
    setSelectedFilm('');
  }

  function toggleNewListModal() {
    setIsNewListModalOpen(!isNewListModalOpen);
  }

  function updateFilmLists(newListName: string, newIcon: string) {
    const newList: ListType = {
      id: filmLists.length + 1,
      name: newListName,
      icon: newIcon,
      films: FILMS
    };

    setFilmLists([...filmLists, newList]);
  }

  return (
    <div className="films">
      <h1>Films</h1>
      {
        filmLists.map((list, index) => (
          <ListSection
            key={index}
            list={list}
            onFilmClick={setSelectedFilm}
          />
        ))
      }

      <button
        type="button"
        className="new-list-button"
        onClick={toggleNewListModal}
      >
        <LuPlus />
      </button>

      <FilmModal
        isOpen={selectedFilm !== ''}
        filmName={selectedFilm}
        onClose={() => closeModal()}
      />

      <NewListModal
        isOpen={isNewListModalOpen}
        onSubmit={(newListName: string, iconName: string) => updateFilmLists(newListName, iconName)}
        onClose={toggleNewListModal}
      />
    </div>
  );
}

export default Films;
