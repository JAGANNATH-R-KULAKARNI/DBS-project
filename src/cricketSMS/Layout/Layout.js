import React from 'react';
import LayoutUI from './LayoutUI';
import Players from '../component/players/players';
import Stadiums from '../component/stadiums/stadiums';
import Teams from '../component/teams/teams';

class Layout extends React.Component
{
    render()
    {
        return (
            <div>
           <LayoutUI players={<Players />} stadiums={<Stadiums />} teams={<Teams />}/>
            </div>
        );
    }
};

export default Layout;