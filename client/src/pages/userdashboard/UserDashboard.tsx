import React from 'react';
import UserMenu from './UserMenu';
import Chatbot from './ChatBot';
import UserIntro from './UserIntro';
import LeafletMap from './LeafletMap';
import Faq from './Faq';
import UserTimeline from './UserTimeline';
import AppointmentBooking from './AppointmentBooking';
import Email from './Email';
import Footer from './UserFooter';
import Survey from './Survey';

const UserDashboard = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ display: 'flex' }}>
        <UserMenu />

        <div style={{ flex: 1, padding: '20px' }}>
          {/* Place your components here with added margin */}
          <UserIntro style={{ marginBottom: '20px' }} />
          <LeafletMap style={{ marginBottom: '20px' }} />
          <UserTimeline style={{ marginBottom: '20px' }} />
          <AppointmentBooking style={{ marginBottom: '20px' }} />
          <Faq style={{ marginBottom: '20px' }} />
          <Survey style={{ marginBottom: '20px' }} />
          <Chatbot style={{ marginBottom: '20px' }} />
          {/* Add other components as needed */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserDashboard;
