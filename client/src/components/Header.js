import React from 'react';
import Link from '@mui/material/Link';
// import Icon from '@mui/material/Icon';
// import RiceBowlOutlinedIcon from '@mui/icons-material/RiceBowlOutlined';





const pages = ["Home", "Menu", "Book"];

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
      <div style={styles.menubar}>
        <Link
        style={styles.menuitems}
        underline='hover'
        href='/' >
          Home
        </Link>
        <Link style={styles.menuitems} underline='hover' href='/Menu' >
          Menu
        </Link>
        <Link style={styles.menuitems} underline='hover' href='/Book' >
          Book
        </Link>
      </div>



    </nav>

  );
}

export default Header;

const styles = {
  navbar: {
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    backgroundColor: '#191E20',
    width: '100%',
  },
  logo: {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "Bold",
    fontWieght: 700,
    fontSize: 25,
    color: 'grey',
    paddingLeft: '280%',
    textDecoration: 'none',

  },
  menubar: {
    display: 'flex',
    // padding: '10px 120px 10px',
    paddingTop: '1%',
    paddingBottom: '1%',
    paddingRight: '20%'
  },
  menuitems: {
    // display: 'inline',
    flexDirection: 'row',
    listStyle: 'none',
    flex: 1,
    padding: 15,
    color: 'grey',
  },

}
