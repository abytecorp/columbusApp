import React from 'react';

const Footer = () => (
  <footer className='footer'>
    <div className='container-fluid'>
      <div className='row text-muted'>
        <div className='col-6 text-left'>
          <ul className='list-inline'>
            <li className='list-inline-item'>
              <a className='text-muted' href='home'>Support</a>
            </li>
            <li className='list-inline-item'>
              <a className='text-muted' href='home'>Help Center</a>
            </li>
            <li className='list-inline-item'>
              <a className='text-muted' href='home'>Privacy</a>
            </li>
            <li className='list-inline-item'>
              <a className='text-muted' href='home'>Terms of Service</a>
            </li>
          </ul>
        </div>
        <div className='col-6 text-right'>
          <p className='mb-0'>
                    abytecorp
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
