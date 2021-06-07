import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div>
        <input type="text" value="Search by City,State,Zipcode" />
        <nav>
          <ul>
            <li>What are you looking for?</li>
            <li>Horses</li>
            <li>Barns</li>
            <li>Vets</li>
            <li>Farriers</li>
            <li>Transporters</li>
            <li>Tack Shop</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
