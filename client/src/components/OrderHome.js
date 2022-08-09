import React from 'react';
import coffee from '../images/coffee-image.jpg';
// import Paper from '@mui/material/Paper';
// import bambooForest from './bambooForest.jpg';







function OrderHome () {
  return (
    <div style={styles.container}>
      {/* <h1 style={styles.containerText}>FLORAL.</h1>
      <p>1445 Floral Ave. New York City, United States</p> */}
      <ul style={styles.containerItems} >
        <li style={styles.containerText}>FLORAL.</li>
        <li style={styles.containerAddress}>1445 Floral Ave. New York City, United States</li>
      </ul>

      {/* <button style={styles.orderButton}>Order now</button> */}
    </div>
  );
}

export default OrderHome;

const styles = {
  container: {
    backgroundImage: `url(${coffee})`,
    width: '100%',
    paddingBottom: '13.9%',
    display: 'flex',
  },
  containerText: {
    fontSize: 150,
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "Bold",
    fontWieght: 700,
    color: 'white',
    letterSpacing: '5px',
    paddingLeft: '35%',
  },
  containerItems: {
    listStyle: 'none',
    marginTop: '20%',
  },
  containerAddress: {
    paddingLeft: '35%',
    color: 'white',
  },

}