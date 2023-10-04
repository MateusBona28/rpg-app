import { useLogout } from './hooks/useLogout';
import './styles.css';
import { RxExit } from 'react-icons/rx';
import { HiMiniUserCircle } from 'react-icons/hi2'
import { useNavbarCollapse } from './hooks/useNavbarCollapse';

export default function TableTop() {
  const { handleLogout } = useLogout();
  const { collapse, handleCollapse } = useNavbarCollapse();
  return (
    <div className="table-top-wrapper">
      <div className='table-top-navbar'>
        { collapse && <div className='table-top-nav-itens-column'>Componentizar</div> }
        <div className='table-top-navbar-actions-column'>
          <div className='table-header-partition' onClick={handleCollapse}>
            <HiMiniUserCircle
              className='characters-icon'
            />
            <span className='label-subtext'>Personagens</span>
          </div>
          <div className='table-header-partition' onClick={handleLogout}>
            <RxExit 
              className='exit-icon' 
            />
            <span className='label-subtext'>Sair</span>
          </div>
        </div>
      </div>
    </div>
  );
}