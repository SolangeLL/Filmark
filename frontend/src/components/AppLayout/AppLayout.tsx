import { useState } from 'react';
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
  HiChevronDoubleRight,
  HiTrash,
  HiHeart,
} from 'react-icons/hi2';

const NAV_ITEMS = [
  { path: '/dashboard', icon: HiSquares2X2, label: 'Dashboard' },
  { path: '/films', icon: HiCamera, label: 'Films' },
  { path: '/series', icon: HiTv, label: 'Series' },
  { path: '/favorites', icon: HiHeart, label: 'Hall of Fame' },
  { path: '/trash', icon: HiTrash, label: 'Hall of Shame' },
];

const ACCOUNT_ITEMS = [
  { path: '/settings', icon: HiCog6Tooth, label: 'Settings' },
  { path: '/profil', icon: HiUser, label: 'Profil' },
];

export default function AppLayout() {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLogout = () => {
    navigate('/login');
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="layout-container">
      <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        {/* Header */}
        <div className="sidebar-header">
          {!isCollapsed && <h1 className="sidebar-title">Filmark</h1>}
          <button
            type="button"
            className="collapse-button"
            onClick={toggleSidebar}
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {isCollapsed ? <HiChevronDoubleRight /> : <HiChevronDoubleLeft />}
          </button>
        </div>

        {/* Main Navigation */}
        <nav className="sidebar-nav">
          <div className="nav-divider" />
          {!isCollapsed && <h3 className="nav-section-title">Marks</h3>}

          {NAV_ITEMS.map(({ path, icon: Icon, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
              title={isCollapsed ? label : undefined}
            >
              <Icon className="nav-icon" />
              {!isCollapsed && <span>{label}</span>}
            </NavLink>
          ))}

          {/* Account Section */}
          <div className="bottom-section">
            <div className="nav-divider" />
            {!isCollapsed && <h3 className="nav-section-title">Account</h3>}

            {ACCOUNT_ITEMS.map(({ path, icon: Icon, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
                title={isCollapsed ? label : undefined}
              >
                <Icon className="nav-icon" />
                {!isCollapsed && <span>{label}</span>}
              </NavLink>
            ))}

            <NavLink
              to="/login"
              className="nav-link"
              onClick={handleLogout}
              title={isCollapsed ? 'Log Out' : undefined}
            >
              <HiArrowLeftOnRectangle className="nav-icon" />
              {!isCollapsed && <span>Log Out</span>}
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
