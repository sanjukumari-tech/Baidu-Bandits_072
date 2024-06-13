import React, { useState } from 'react';
import { Auth } from '../Components/Auth';
import { auth } from '../auth/firebase';

const DoctorAppointment = () => {
  const times = [
    '9:00',
    '9:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '1:00',
    '1:30',
    '3:00',
    '3:30',
    '4:00',
    '4:30',
  ];

  const initialFormState = {
    name: '',
    age: '',
    gender: '',
    date: '',
    time: '',
  };
  const [res, setres] = useState(true);
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialFormState);
  };

  const inputbox = {
    padding: '5px',
    border: '1px solid black',
    borderRadius: '10px',
    width: '350px',
  };

  const divstyle = {
    fontSize: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
  };

  const btnstyle = {
    background: '#11a5bc',
    width: '100%',
    padding: '10px',
    borderRadius: '10px',
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold',
    boxSizing: 'border-box',
  };

  return (
    <>
    {
      auth?.currentUser?.email ===undefined ? (<Auth setres={setres}/>):
      (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        marginTop: '100px',
        flexDirection: 'column',
        fontFamily: 'sans-serif',
        width: '550px',
        marginLeft: '23%',
        borderRadius: '10px',
        padding: '10px',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      }}
    >
      <p style={{ fontSize: '30px' }}>Book Appointment</p>
      <form
        onSubmit={handleSubmit}
        style={{
          width: '500px',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <div style={divstyle}>
          <label>Name : </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={inputbox}
          />
        </div>

        <div style={divstyle}>
          <label>Age : </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            max={100}
            min={10}
            style={inputbox}
          />
        </div>

        <div style={divstyle}>
          <label>Gender : </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            style={inputbox}
          >
            <option value="">Gender</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
          </select>
        </div>

        <div style={divstyle}>
          <label>Date : </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            style={inputbox}
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        <div style={divstyle}>
          <label>Time : </label>
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            style={inputbox}
          >
            <option value=""></option>
            {times.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <button style={btnstyle} type="submit">
          Book
        </button>
      </form>
    </div>
  )}
  </>
  )
};

export default DoctorAppointment;
