import { useState } from 'react';
import { LuEye, LuHeart, LuList, LuPlus, LuTrash } from 'react-icons/lu';
import FilmModal from '../../components/FilmModal/FilmModal';
import ListSection from '../../components/ListSection/ListSection';
import './Films.css';
import NewListModal from '../../components/NewListModal/NewListModal';

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
  const [selectedFilm, setSelectedFilm] = useState<string | null>(null);
  const [isNewListModalOpen, setIsNewListModalOpen] = useState(false);

  function closeModal() {
    setSelectedFilm(null);
  }

  function toggleNewListModal() {
    setIsNewListModalOpen(!isNewListModalOpen);
  }

  return (
    <div className="films">
      <h1>Films</h1>
      <ListSection
        icon={LuList}
        title="To watch"
        films={FILMS}
        onFilmClick={setSelectedFilm}
      />

      <ListSection
        icon={LuEye}
        title="Viewed"
        films={FILMS}
        onFilmClick={setSelectedFilm}
      />

      <ListSection
        icon={LuHeart}
        title="Favorites"
        films={FILMS}
        onFilmClick={setSelectedFilm}
      />

      <ListSection
        icon={LuTrash}
        title="Trash"
        films={FILMS}
        onFilmClick={setSelectedFilm}
      />

      <button
        type="button"
        className="new-list-button"
        onClick={toggleNewListModal}
      >
        <LuPlus />
      </button>

      <FilmModal
        isOpen={selectedFilm !== null}
        filmName={selectedFilm}
        onClose={() => closeModal()}
      />

      <NewListModal isOpen={isNewListModalOpen} onSubmit={() => {}} onClose={toggleNewListModal} />
    </div>
  );
}

export default Films;
