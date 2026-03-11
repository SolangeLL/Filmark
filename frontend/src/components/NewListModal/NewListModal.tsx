import { useState } from 'react';
import './NewListModal.css';
import { Grid, TextField } from '@mui/material';
import { ICON_OPTIONS } from '../../constants/IconOptions';
import { DynamicFaIcon } from '../DynamicFaIcon/DynamicFaIcon';

interface NewListModalProps {
  isOpen: boolean;
  onSubmit: (listName: string, iconName: string) => void;
  onClose: () => void;
}

function NewListModal({ isOpen, onSubmit, onClose }: NewListModalProps) {
  const [listName, setListName] = useState('');
  const [selectedIcon, setSelectedIcon] = useState(ICON_OPTIONS.list);
  return (
    <>
      <div className={`new-list-modal ${isOpen ? 'open' : ''}`}>
        <h1>Add new list</h1>

        <section className='new-list-section'>
          <h2>Name your custom list</h2>
          <TextField
            fullWidth
            label="New list name"
            value={listName}
            onChange={(e) => setListName(e.target.value)}
          />
        </section>

        <section className='new-list-section'>
          <h2>Select an icon</h2>
          <Grid
            container
            justifyContent={'center'}
            spacing={2}
          >
            {Object.values(ICON_OPTIONS).map((iconName) => (
              <button
                key={iconName}
                className={`icon-button ${selectedIcon === iconName ? 'selected' : ''}`}
                onClick={() => setSelectedIcon(iconName)}
              >
                <DynamicFaIcon name={iconName} />
              </button>
            ))}
          </Grid>
        </section>

        <button
          className='submit-list-button'
          onClick={() => onSubmit(listName, selectedIcon)}
        >
          Submit
        </button>

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
