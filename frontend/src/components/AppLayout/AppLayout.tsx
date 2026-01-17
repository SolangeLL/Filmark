import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import './AppLayout.css';
import {
  HiArrowLeftOnRectangle,
  HiSquares2X2,
  HiCamera,
  HiTv,
  HiCog6Tooth,
  HiUser,
  HiChevronDoubleLeft,
} from 'react-icons/hi2';
// import { useAuth } from '../contexts/AuthContext.tsx';

export default function AppLayout() {
  // const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    // logout();
    navigate('/login');
  };

  const collapseSidebar = () => {
    console.log('Collapse sidebar clicked');
  };

  return (
    <div className="layout-container">
      <aside className="sidebar">
        <div className="sidebar-title-section">
          <h1 className="sidebar-title">Filmark</h1>
          <button
            type="button"
            className="collapse-button"
            onClick={collapseSidebar}
          >
            <HiChevronDoubleLeft />
          </button>
        </div>

        <h3 className="nav-section-title">Marks</h3>

        <nav className="sidebar-nav">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            <HiSquares2X2 style={{ marginRight: '0.5rem' }} />
            Dashboard
          </NavLink>
          <NavLink
            to="/films"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            <HiCamera style={{ marginRight: '0.5rem' }} />
            Films
          </NavLink>
          <NavLink
            to="/series"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            <HiTv style={{ marginRight: '0.5rem' }} />
            Series
          </NavLink>

          <div className="bottom-section">
            <h3 className="nav-section-title">Account</h3>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              <HiCog6Tooth style={{ marginRight: '0.5rem' }} />
              Settings
            </NavLink>
            <NavLink
              to="/user"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              <HiUser style={{ marginRight: '0.5rem' }} />
              User
            </NavLink>

            <NavLink to="/login" className="nav-link" onClick={handleLogout}>
              <HiArrowLeftOnRectangle style={{ marginRight: '0.5rem' }} />
              Log Out
            </NavLink>
          </div>
        </nav>
      </aside>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
