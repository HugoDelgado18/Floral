import React from 'react';
import Header from '../components/Header';
import OrderHome from '../components/OrderHome';
import AboutBox from '../components/AboutBox';
import MenuPreview from '../components/MenuPreview';
import BookTableSection from '../components/BookTableSection';
import Footer from '../components/Footer';








function Home () {

  return (
    <div style={styles.container}>
      <Header/>
      <OrderHome/>
      <AboutBox/>
      <MenuPreview/>
      <BookTableSection/>
      <Footer/>
      {/* <Review/> */}
    </div>
  );
}

export default Home;

const styles = {
  container: {
    width: '100%',
  }
}