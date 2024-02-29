import React from 'react';
import UserMenu from './UserMenu';
import Chatbot from './ChatBot';
import UserIntro from './UserIntro';
import LeafletMap from './LeafletMap'
import Faq from './Faq';
import UserTimeline from './UserTimeline';
import AppointmentBooking from './AppointmentBooking';
import Email from './Email';
import Footer from './UserFooter';
import UserNav from './UserNav';

const UserDashboard = () => {
  return (
    <div>
      <UserNav/>
      <UserIntro />
      <div style={{ marginTop: '20px' }}>
        {/* Add some margin between UserIntro and LeafletMap */}
        <LeafletMap/>
      </div>
      <AppointmentBooking/>
      <Faq/>
      {/* Add other components as needed */}
      <Footer/>
    </div>
  );
}

export default UserDashboard;
