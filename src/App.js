import './styles.css';
import Header from './Components/header';
import ListingPage from './Components/main';
import Footer from './Components/footer';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <Header />
        <ListingPage />
        <Footer />
      </div>
    );
  }
}
export default App;
