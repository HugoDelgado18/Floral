import React from 'react';
import Header from '../components/Header';
import OrderHome from '../components/OrderHome';
import AboutBox from '../components/AboutBox';
import MenuPreview from '../components/MenuPreview';







function Home () {

  return (
    <div>
      <Header/>
      <OrderHome/>
      <AboutBox/>
      <MenuPreview/>
    </div>
  );
}

export default Home;