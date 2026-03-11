import { ElementType } from 'react';
import './IconLabel.css';
import { DynamicFaIcon } from '../DynamicFaIcon/DynamicFaIcon';

interface IconLabelProps {
  icon: string;
  label: string;
}

function IconLabel({ icon, label }: IconLabelProps) {
  return (
    <div className="iconLabel">
      {/* <Icon className="icon" /> */}
      <span className='icon' >
        <DynamicFaIcon name={icon} />
      </span>
      <h2 className="label">{label}</h2>
    </div>
  );
}

export default IconLabel;
