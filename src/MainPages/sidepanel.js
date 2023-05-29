import React from 'react';
import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './sidepanel.css';


function SidePanel() {
  const [navCollapse, setnavCollapse] = useState(false);
  const [navSmallCollapse, setSmallnavCollapse] = useState(false);
  return (
    <div className='container'>
      <nav className='nav'>
        <div className='logo'>
          <i class="bi bi-list largeDeviceIcon" onClick={e => setnavCollapse(!navCollapse)}></i>
          <i class="bi bi-list smallDeviceIcon" onClick={e => setSmallnavCollapse(!navSmallCollapse)}></i>
          <h3>Dashboard</h3>
        </div>
      </nav>
      <div className='sidebar-content'>
        <div className={`${setSmallnavCollapse ? "smallNav" : ""} sidebar-container ${navCollapse ? "navCollapse1" : ""}`}>
          <div className='nav-option option1'>
            <i class="bi bi-chat-left-dots"></i>
            <h3>Conversations</h3>
          </div>
          <div className='nav-option option1'>
            <i class="bi bi-microsoft"></i>
            <h3>Automation</h3>
          </div>
          <div className='nav-option option1'>
            <i class="bi bi-bookmark"></i>
            <h3>Campaigns</h3>
          </div>
          <div className='nav-option option1'>
            <i class="bi bi-suit-club"></i>
            <h3>Segments</h3>
          </div>
          <div className='nav-option option1'>
            <i class="bi bi-cloud-fog"></i>
            <h3>Live Chats</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidePanel;