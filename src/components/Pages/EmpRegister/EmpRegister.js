import React from 'react'
import NavBar from '../../CommonComponent/NavBar';
import Banner from '../../CommonComponent/Banner';
import Register from '../../Auth/Register';
import TopFooter from '../../CommonComponent/TopFooter';
import Footer from '../../CommonComponent/Footer';

const EmpRegister = () => {
  return (
    <>
    <NavBar/>
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
