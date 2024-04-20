import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <button className="active">
        <span role="img" aria-label="Notes">&#128220;</span> Notes
      </button>
      <button>
        <span role="img" aria-label="Reminders">&#128276;</span> Reminders
      </button>
      <button>
        <span role="img" aria-label="Edit Labels">&#128196;</span> Edit Labels
      </button>
      <button>
        <span role="img" aria-label="Archive">&#128451;</span> Archive
      </button>
      <button>
        <span role="img" aria-label="Trash">&#128465;</span> Trash
      </button>
    </div>
  );
};

export default Sidebar;
