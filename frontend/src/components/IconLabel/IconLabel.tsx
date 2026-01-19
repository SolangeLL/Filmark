import { ElementType } from 'react';
import './IconLabel.css';

interface IconLabelProps {
  icon: ElementType;
  label: string;
}

function IconLabel({ icon: Icon, label }: IconLabelProps) {
  return (
    <div className="iconLabel">
      <Icon className="icon" />
      <h2 className="label">{label}</h2>
    </div>
  );
}

export default IconLabel;
