import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div>
          <div className="first">
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Why list</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="second">
            <ul>
              <li>Pricing</li>
              <li>FAQ</li>
              <li>Privacy</li>
              <li>Terms of use</li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
