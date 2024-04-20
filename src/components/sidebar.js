import React from "react";

const Sidebar=()=>{

    return(<div className="sidebar">
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a href="#" className="active">
      <span role="img" aria-label="Notes">&#128220;</span> Notes
    </a>
    <a href="#">
      <span role="img" aria-label="Reminders">&#128276;</span> Reminders
    </a>
    <a href="#">
      <span role="img" aria-label="Edit Labels">&#128196;</span> Edit Labels
    </a>
    <a href="#">
      <span role="img" aria-label="Archive">&#128451;</span> Archive
    </a>
    <a href="#">
      <span role="img" aria-label="Trash">&#128465;</span> Trash
    </a>
  </div>
  );

};

export default Sidebar