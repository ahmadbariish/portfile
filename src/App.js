import React, { Component } from 'react';
import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';
import Portfoloi from './components/portfoloi/Portfoloi';
import Pricing from './components/pricing/Pricing';
import Testimonials from './components/testimonials/Testimonials';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Sidebar from './components/sidebar/Sidebar.jsx';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="root">
        <main className="main">
          <Home />
          <About />
          <Services />
          <Resume />
          <Portfoloi />
          <Pricing />
          <Testimonials />
          <Blog />
          <Contact />
        </main>
      </div>
    );
  }
}

export default App;
