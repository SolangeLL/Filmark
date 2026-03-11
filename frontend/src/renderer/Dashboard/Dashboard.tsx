import { useState } from 'react';
import './Dashboard.css';
import ListSection from '../../components/ListSection/ListSection';
import PinnedSection from '../../components/PinnedSection/PinnedSection';
import FilmModal from '../../components/FilmModal/FilmModal';
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
const FAVORITES = ['Film 1', 'Film 2', 'Film 3'];
const TRASH = ['Film 1', 'Film 2', 'Film 3'];

const defaultList: ListType = {
  id: 1,
  name: 'List',
  icon: 'FaList',
  films: FILMS
};

function Dashboard() {
  const [selectedFilm, setSelectedFilm] = useState<string | null>(null);

  function viewAllFavorites() {
    console.log('View all favorites');
  }

  function viewAllTrash() {
    console.log('View all trash');
  }

  function closeModal() {
    setSelectedFilm(null);
  }

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <ListSection
        list={defaultList}
        onFilmClick={setSelectedFilm}
      />

      <div className="pinned">
        <PinnedSection
          icon={ICON_OPTIONS.heart}
          title="Favorites"
          films={FAVORITES}
          onFilmClick={setSelectedFilm}
          onViewAll={() => viewAllFavorites()}
        />

        <PinnedSection
          icon={ICON_OPTIONS.trash}
          title="Trash"
          films={TRASH}
          onFilmClick={setSelectedFilm}
          onViewAll={() => viewAllTrash()}
        />
      </div>

      <FilmModal
        isOpen={selectedFilm !== null}
        filmName={selectedFilm}
        onClose={() => closeModal()}
      />
    </div>
  );
}

export default Dashboard;
