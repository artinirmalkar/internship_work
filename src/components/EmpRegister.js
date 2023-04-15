import React from 'react'
import Banner from './Header/Banner';
import Register from './Header/Register';
import TopFooter from './Footer/TopFooter';
import Footer from './Footer/Footer';

const EmpRegister = () => {
  return (
    <>
    <Banner heading="Connect with the best candidates directly,with ease!">
    <Register
        heading="REGISTER"
        confirmation="Already have an account?"
        back="Login"
      />
    </Banner>
        
      <TopFooter />
      <Footer />
    </>
  )
}

export default EmpRegister
