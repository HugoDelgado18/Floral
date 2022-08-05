import React from 'react';
// import Icon from '@mui/material/Icon';
// import RiceBowlOutlinedIcon from '@mui/icons-material/RiceBowlOutlined';





const pages = ["Home", "Menu", "Order", "Contact Us"];

function Header() {

  return (
   
    <nav style={styles.navbar}>
      {/*  --- Logo  --- */}
      <div>
      <a href='/' style={styles.logo}> FLORAL. </a>
      </div>
      {/* --- inbetween space --- */}
      <div></div>
      {/* --- inbetween space --- */}
      
      {/* menu-items */}
      <ul style={styles.menubar}>
      {pages.map((page, index ) => {
        return (
          <li style={styles.menuitems}>
            {page}
          </li>
        )
      })}
      </ul>



    </nav>

  );
}

export default Header;

const styles = {
  navbar: {
    display: 'flex',
    position: 'sticky',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  logo: {
    fontFamily: 'fantasy',
    fontSize: 25,
    color: 'grey',
    padding: "10px 150px 10px",
    textDecoration: 'none',

  },
  menubar: {
    display: 'block',
    padding: '10px 120px 10px',
  },
  menuitems: {
    display: 'inline',
    listStyle: 'none',
    flex: 1,
    padding: 15,
    color: 'grey',
  }
}
