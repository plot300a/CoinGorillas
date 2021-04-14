import React from "react";

function SidebarRow({ selected, Icon, Title }) {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      <Icon className="sidebarRow__icon" />
      <h2 className="sidebarRow__title">{Title}</h2>
    </div>
  );
}

export default SidebarRow;
