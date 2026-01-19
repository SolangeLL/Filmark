import { HiX } from 'react-icons/hi';
import { useState } from 'react';
import './Dashboard.css';
import { LuHeart, LuList, LuTrash } from 'react-icons/lu';
import ListSection from '../../components/ListSection/ListSection';
import PinnedSection from '../../components/PinnedSection/PinnedSection';
import FilmModal from '../../components/FilmModal/FilmModal';

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

function Dashboard() {
  const [selectedFilm, setSelectedFilm] = useState<string | null>(null);

  function addFilm() {
    console.log('Add film');
  }

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
      <h1>Dashboard Page</h1>

      <ListSection
        icon={LuList}
        title="List"
        films={FILMS}
        onFilmClick={setSelectedFilm}
        onAdd={() => addFilm()}
      />

      <div className="pinned">
        <PinnedSection
          icon={LuHeart}
          title="Favorites"
          films={FAVORITES}
          onFilmClick={setSelectedFilm}
          onViewAll={() => viewAllFavorites()}
        />

        <PinnedSection
          icon={LuTrash}
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
