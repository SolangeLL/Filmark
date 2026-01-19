import { ElementType } from 'react';
import { LuEye } from 'react-icons/lu';
import IconLabel from '../IconLabel/IconLabel';
import PinnedFilmCard from '../PinnedFilmCard/PinnedFilmCard';
import './PinnedSection.css';

interface PinnedSectionProps {
  icon: ElementType;
  title: string;
  films: string[];
  onFilmClick: (filmName: string) => void;
  onViewAll: () => void;
}

function PinnedSection({
  icon,
  title,
  films,
  onFilmClick,
  onViewAll,
}: PinnedSectionProps) {
  return (
    <div className="pinned-section-container">
      <div className="title-bar">
        <IconLabel icon={icon} label={title} />
        <button type="button" onClick={onViewAll} className="view-all-button">
          <LuEye />
          View all
        </button>
      </div>
      <div className="pinned-list-content">
        {films.map((film) => (
          <PinnedFilmCard
            key={film}
            title={film}
            onClick={() => onFilmClick(film)}
          />
        ))}
      </div>
    </div>
  );
}

export default PinnedSection;
