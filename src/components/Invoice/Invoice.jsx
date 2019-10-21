import React from 'react';

const Invoice = () => (
  <main className='content'>
    <div className='row'>
      <div className='col-12 col-sm-6 col-xl d-flex'>
        <div className='card flex-fill'>
          <div className='card-body py-4'>
            <div className='media'>
              <div className='d-inline-block mt-2 mr-3'>
                <i className='feather-lg text-primary' data-feather='shopping-cart' />
              </div>
              <div className='media-body'>
                <h3 className='mb-2'>2.562</h3>
                <div className='mb-0'>Sales Today</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default Invoice;
