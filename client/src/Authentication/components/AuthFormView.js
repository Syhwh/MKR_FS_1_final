import React from 'react';
import { Link } from 'react-router-dom';

export const AuthFormView = ({ handleChange, handleSubmit, values, errors }) => {

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form'>
        <h2> Create your account. </h2>
        {errors.response && <p className='error'>{errors.response}</p>}
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            required={true}
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className='error'>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            required={true}
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p className='error'>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            required={true}
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p className='error'>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit' onClick={handleSubmit}>
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account? Login <Link to='/login'>here</Link>
        </span>
      </form>
    </div>
  );
}
