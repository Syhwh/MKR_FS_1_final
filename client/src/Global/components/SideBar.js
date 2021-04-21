
import React, { useState } from 'react'
import { Nav, NavItem, Dropdown, Image } from 'react-bootstrap'

export const SideBar = () => {
  return (
    <div className='d-flex flex-column p-3 text-white bg-dark' style={{ width: '280px', height: 'auto' }}>
      <a href='/' className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none'>
        <svg className='bi me-2' width='40' height='32'></svg>
        <span className='fs-4'>Sidebar</span>
      </a>
      <hr />
      <ul className='nav nav-pills flex-column mb-auto'>
        <li className='nav-item'>
          <a href='#' className='nav-link active'>
            <svg className='bi me-2' width='16' height='16'></svg>
            Home
            </a>
        </li>
        <li>
          <a href='/projects' className='nav-link text-white'>
            <svg className='bi me-2' width='16' height='16'></svg>
            Dashboard	</a>
        </li>
        <li>
          <a href='#' className='nav-link text-white'>
            <svg className='bi me-2' width='16' height='16'></svg>Orders
	</a>
        </li>
        <li>
          <a href='#' className='nav-link text-white'>
            <svg className='bi me-2' width='16' height='16'></svg>Products
	</a>
        </li>
        <li>
          <a href='#' className='nav-link text-white'>
            <svg className='bi me-2' width='16' height='16'></svg>
		Customers	</a>
        </li>
      </ul>
      <hr />

    </div>

  )
}
