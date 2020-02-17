import React, { useState, useEffect } from "react";
import { NoMoreRoot } from "../styled_fragments/styled_main";
import * as Component from "../components";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const updateDimensions = () => {
    let windowWidth = typeof window !== undefined ? window.innerWidth : 0;
    setWindowWidth(windowWidth);

    let windowHeight = typeof window !== undefined ? window.innerHeight : 0;
    setWindowHeight(windowHeight);
  };

  useEffect(() => {
    updateDimensions();
    //component did mount
    window.addEventListener("resize", updateDimensions);

    //component will mount
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const styles = {
    white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    topBarHeight: 40,
    footerMenuHeight: 50,
    showFooterMenuText: windowWidth > 500,
    showSidebar: windowWidth > 768,
    sidebarWidth: windowWidth < 1100 ? 50 : 150,
    sidebarCollapsed: windowWidth < 1100
  };

  const menuItems = styles.showSidebar
    ? [
        { icon: `😀`, text: "Item 1" },
        { icon: `😉`, text: "Item 2" },
        { icon: `😎`, text: "Item 3" },
        { icon: `🤔`, text: "Item 4" },
        { icon: `😛`, text: "Item 5" },
        { icon: `😺️`, text: "Profile" },
        { icon: `⚙`, text: "Settings" }
      ]
    : [
        { icon: `😀`, text: "Item 1" },
        { icon: `😉`, text: "Item 2" },
        { icon: `😎`, text: "Item 3" },
        { icon: `🤔`, text: "Item 4" },
        { icon: `😛`, text: "Item 5" }
      ];

  return (
    <NoMoreRoot styles={styles}>
      {styles.showSidebar ? (
        <Component.SidebarComponent menuItems={menuItems} styles={styles} />
      ) : (
        <Component.TopbarComponent styles={styles} />
      )}
      <Component.ContentComponent styles={styles} />

      {!styles.showSidebar && (
        <Component.FooterMenuComponent menuItems={menuItems} styles={styles} />
      )}
    </NoMoreRoot>
  );
};

export default App;
