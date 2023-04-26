import React from 'react';
import addIcon from '../../assets/icons/add-icon.svg';
import deleteIcon from '../../assets/icons/delete-icon.svg';
import styles from './Icon.module.css';

const Icon = ({ type }) => {
  let icon = null;

  switch (type) {
    case 'add':
      icon = <img src={addIcon} alt="Додати" />;
      break;
    case 'delete':
      icon = <img src={deleteIcon} alt="Видалити" />;
      break;
    default:
      icon = <span>Unknown Icon</span>;
      break;
  }
  
  return (
    <div className={styles.icon}>
      {icon}
    </div>
  );
}

export default Icon;
