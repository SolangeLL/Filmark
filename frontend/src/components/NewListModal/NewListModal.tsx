import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import './NewListModal.css';

interface NewListModalProps {
  isOpen: boolean;
  onSubmit: () => void;
  onClose: () => void;
}

function NewListModal({ isOpen, onSubmit, onClose }: NewListModalProps) {
  const [filmName, setFilmName] = useState('');
  return (
    <>
      <div className={`new-list-modal ${isOpen ? 'open' : ''}`}>
        <h2 className="new-list-title">Add new custom list</h2>
        {/* <TextInput
          title="New List Name"
          placeholder="List name..."
          onChange={} */}

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
