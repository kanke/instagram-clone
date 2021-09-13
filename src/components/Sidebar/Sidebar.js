import React from 'react';
import User from "./User";
import './Sidebar.css';
import Suggestions from "./Suggestions";

function Sidebar() {
return (
    <div className="two">
        <User />
        <Suggestions />
        {/*<User username={username} fullName={fullName} />*/}
        {/*<Suggestions userId={userId} following={following} loggedInUserDocId={docId} />*/}
    </div>
);

}

export default Sidebar;