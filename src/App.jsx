import React, { useState } from 'react';
import SideBar from './components/SideBar.jsx';
import ServerSideBar from './components/ServerSideBar';
import ChannelContent from './components/Channel';
import UserBar from './components/UserBar';

function App() {
  const [channelName] = useState('general');

  return (
    <div className='flex'>
      <SideBar />
      <div className='flex flex-col'>
        <ServerSideBar />
        <UserBar />
      </div>
      <ChannelContent channelName={channelName} />
    </div>
  );
}

export default App;
