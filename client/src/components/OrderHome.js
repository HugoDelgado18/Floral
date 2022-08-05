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
    height: 900,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerText: {
    // position: 'absolute',
    marginRight: 730,
    paddingLeft: 20,
    fontSize: 200,
    fontFamily: 'fantasy',
    color: 'white',
    letterSpacing: '5px',
  },
  containerItems: {
    listStyle: 'none',
  },
  containerAddress: {
    marginLeft: 25,
    color: 'white',
  },
  // orderButton: {
  //   marginTop: 300,
  //   marginRight: 15,
  //   backgroundColor: 'transparent',
  //   borderColor: 'white',
  //   height: 40,
  //   width: 130,
  //   borderRadius: 15,
  //   // fontFamily: '',
  //   color: 'white',
  //   fontSize: 20,
  // }
}