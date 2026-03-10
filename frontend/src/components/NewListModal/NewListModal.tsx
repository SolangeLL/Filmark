import { useState } from 'react';
import './NewListModal.css';
import { Grid, TextField } from '@mui/material';
import { ICON_OPTIONS } from '../../constants/IconOptions';
import { DynamicFaIcon } from '../DynamicFaIcon/DynamicFaIcon';

interface NewListModalProps {
  isOpen: boolean;
  onSubmit: () => void;
  onClose: () => void;
}

function NewListModal({ isOpen, onSubmit, onClose }: NewListModalProps) {
  const [filmName, setFilmName] = useState('');
  const [selectedIcon, setSelectedIcon] = useState(ICON_OPTIONS[0]);
  console.log(selectedIcon)
  return (
    <>
      <div className={`new-list-modal ${isOpen ? 'open' : ''}`}>
        <h1>Add new list</h1>

        <section className='new-list-section'>
          <h2>Name your custom list</h2>
          <TextField
            fullWidth
            label="New list name"
            value={filmName}
            onChange={(e) => setFilmName(e.target.value)}
          />
        </section>

        <section className='new-list-section'>
          <h2>Select an icon</h2>
          <Grid
            container
            justifyContent={'center'}
            spacing={2}
          >
            {
              ICON_OPTIONS.map((iconName) => (
                <button
                  className={`icon-button ${selectedIcon === iconName ? 'selected' : ''}`}
                  onClick={() => setSelectedIcon(iconName)}
                >
                  <DynamicFaIcon name={iconName} />
                </button>
              ))
            }
          </Grid>
        </section>

        <button className='submit-list-button'>Submit</button>

      </div>
      {isOpen && (
        <button
          type="button"
          onClick={onClose}
          className="background"
          aria-label="Close on background button"
        />
      )}
    </>

  );
}

export default NewListModal;
