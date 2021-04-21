import React from 'react'
import { JumbotronComponent } from './components/JumbotronComponent'
import { SideBar } from './components/SideBar'

export const Home = () => {
  return (<>
    <div className='d-flex justify-content-between'>
        <SideBar />

      <div className='container py-3'>
        <JumbotronComponent />
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h1 className="display-4 fw-normal">Pricing</h1>
          <p className="fs-5 text-muted">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
        </div>


        <div className='row row-cols-1 row-cols-md-3 mb-3 text-center'>
          <div className='col'>
            <div className='card mb-4 rounded-3 shadow-sm'>
              <div className='card-header py-3'>
                <h4 className='my-0 fw-normal'>Free</h4>
              </div>
              <div className='card-body'>
                <h1 className='card-title pricing-card-title'>$0<small className='text-muted fw-light'>/mo</small></h1>
                <ul className='list-unstyled mt-3 mb-4'>
                  <li>10 users included</li>
                  <li>2 GB of storage</li>
                  <li>Email support</li>
                  <li>Help center access</li>
                </ul>
                <button type='button' className='w-100 btn btn-lg btn-outline-primary'>Sign up for free</button>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card mb-4 rounded-3 shadow-sm'>
              <div className='card-header py-3'>
                <h4 className='my-0 fw-normal'>Pro</h4>
              </div>
              <div className='card-body'>
                <h1 className='card-title pricing-card-title'>$15<small className='text-muted fw-light'>/mo</small></h1>
                <ul className='list-unstyled mt-3 mb-4'>
                  <li>20 users included</li>
                  <li>10 GB of storage</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
                <button type='button' className='w-100 btn btn-lg btn-primary'>Get started</button>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card mb-4 rounded-3 shadow-sm border-primary'>
              <div className='card-header py-3 text-white bg-primary border-primary'>
                <h4 className='my-0 fw-normal'>Enterprise</h4>
              </div>
              <div className='card-body'>
                <h1 className='card-title pricing-card-title'>$29<small className='text-muted fw-light'>/mo</small></h1>
                <ul className='list-unstyled mt-3 mb-4'>
                  <li>30 users included</li>
                  <li>15 GB of storage</li>
                  <li>Phone and email support</li>
                  <li>Help center access</li>
                </ul>
                <button type='button' className='w-100 btn btn-lg btn-primary'>Contact us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>)
}
