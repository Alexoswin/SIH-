import React, { lazy, Suspense } from 'react';
import { NavLink } from 'react-router-dom';

// Lazy load the Bootstrap components
const CDBSidebar = lazy(() => import('cdbreact').then((module) => ({ default: module.CDBSidebar })));
const CDBSidebarContent = lazy(() => import('cdbreact').then((module) => ({ default: module.CDBSidebarContent })));
const CDBSidebarFooter = lazy(() => import('cdbreact').then((module) => ({ default: module.CDBSidebarFooter })));
const CDBSidebarHeader = lazy(() => import('cdbreact').then((module) => ({ default: module.CDBSidebarHeader })));
const CDBSidebarMenu = lazy(() => import('cdbreact').then((module) => ({ default: module.CDBSidebarMenu })));
const CDBSidebarMenuItem = lazy(() => import('cdbreact').then((module) => ({ default: module.CDBSidebarMenuItem })));

const UserMenu = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div style={{ display: 'flex', height: '280vh', marginLeft: '0px' }}>
        <CDBSidebar textColor="#fff" backgroundColor="#333" style={{ height: '280vh' }}>
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
              NashaMukti
            </a>
          </CDBSidebarHeader>

          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink exact to="/user_dashboard" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/tables" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">View Centers</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/profile" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">Timeline</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/analytics" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="chart-line">Book Appointment</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="exclamation-circle">FAQ</CDBSidebarMenuItem>
              </NavLink>
              
              <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="exclamation-circle">Survey Form</CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>

          <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div
              style={{
                padding: '20px 5px',
              }}
            >
              Sidebar Footer
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    </Suspense>
  );
};

export default UserMenu;