import React from 'react';
import './homepage.styles.scss';
import { DirectoryRedux as Directory } from '../../components/directory/directory.component';

const HomePage: React.FC = (): JSX.Element => {
  return (
    <div className='homepage'>
      <Directory />
    </div>
  );
}

export default HomePage;
