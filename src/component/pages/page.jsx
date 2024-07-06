import React from 'react'
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import { Header } from '../common/Header';
import { home } from '../home/home';
import { About } from './About';
import { Services } from '../pages/Services';
import { Portfolio } from "../pages/Protfolio"
import { Contact } from './Contact';
import { Footer } from '../common/Footer';

 const Pages = () => {
  return (
    <>
       <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={home}  />
            <Route exact path="/about" component={About}  />
            <Route exact path="/services" component={Services}  />
            <Route exact path="/protfolio" component={Portfolio}  />
            {/* <Route exact path="/blog" component={Blog}  /> */}
            <Route exact path="/contact" component={Contact}  />

          </Switch>
          <Footer />
       </Router>
    </>
  )
}
export default Pages;