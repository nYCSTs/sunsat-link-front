import { ReactNode } from 'react';
import SunSatLinkLogo from '../../assets/photo.png';

import './style.scss';

const Authentication = ({ children }: { children: ReactNode }) => {
  return (
    <div className='container'>
      <img src={SunSatLinkLogo} alt="Logo" className='logo' />
      {children}
    </div>
  );
}

export default Authentication;