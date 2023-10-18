import HeaderLogo from '../../assets/header-logo.png';
import { BiHomeAlt, BiLogOut } from 'react-icons/bi';
import { MdSettingsInputAntenna } from 'react-icons/md';

import './styles.scss';
import { FaSatellite, FaUsers } from 'react-icons/fa';

const Header = () => {
  return (
    <div className='header'>
      <img src={HeaderLogo} alt="SunSat Link Logo" className='header-logo' />
      <nav>
        <ul>
          <li>
            <a href="/">
              <BiHomeAlt className='icon' />
              <span className='link-name'>Home</span>
            </a>
          </li>
          <li>
            <a href="/users">
              <FaUsers className='icon' />
              <span className='link-name'>Usuarios</span>
            </a>
          </li>
          <li>
            <a href="#">
              <MdSettingsInputAntenna className='icon' />
              <span className='link-name'>Dispositivos</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FaSatellite className='icon' />
              <span className='link-name'>Satélites</span>
            </a>
          </li>
        </ul>
      </nav>
      <BiLogOut className='logout' />
    </div>
  )
}

export default Header;