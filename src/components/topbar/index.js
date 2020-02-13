import React from "react";
import { Topbar } from "../../styled_fragments/styled_topbar";

const TopbarComponent = styles => {
  return (
    <Topbar styles={styles}>
      <span>🤡</span> App
      <span>⚙️</span>
    </Topbar>
  );
};

export default TopbarComponent;
