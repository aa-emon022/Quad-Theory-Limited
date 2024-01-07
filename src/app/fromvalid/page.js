'use client'
import React from 'react';
import { useFormik } from 'formik';
import NavBar from '@/components/NavBar/NavBar';

const validate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(values.password)
  ) {
    errors.password =
      'Password must be 8 characters long and include at least 1 uppercase letter, 1 lowercase letter, and 1 number';
  }

  return errors;
};

const MyForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });

  return (
   <div className='bg-gray-200 h-screen
   '>
   <NavBar/>
     <form className=" max-w-md mx-auto mt-8 p-4 bg-gray-200 shadow-md rounded-md" onSubmit={formik.handleSubmit}>
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-600 font-semibold">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
          className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        {formik.errors.username && <div className="text-red-500">{formik.errors.username}</div>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-600 font-semibold">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        {formik.errors.email && <div className="text-red-500">{formik.errors.email}</div>}
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-600 font-semibold">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        {formik.errors.password && <div className="text-red-500">{formik.errors.password}</div>}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Submit
      </button>
    </form>
   </div>
  );
};

export default MyForm;

