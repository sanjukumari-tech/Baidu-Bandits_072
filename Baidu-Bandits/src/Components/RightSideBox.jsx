import React, { useState, useEffect } from 'react';
import { Avatar, Checkbox, Button } from '@chakra-ui/react';
import loc from '../assets/location-pin-svgrepo-com.svg';
import bell from '../assets/bell-svgrepo-com.svg';
import sett from '../assets/setting-2-svgrepo-com.svg';
import { useToast } from '@chakra-ui/react';

const RightSideBox = () => {
  const [appointments, setAppointments] = useState([]);
  const [checkedItems, setCheckedItems] = useState([
    false,
    false,
    false,
    false,
  ]);
  const toast = useToast();

  const dailyTasks = [
    'Drink 4 litres of water',
    'Do Workout',
    '8 hours of Sleep',
    'Update the data',
  ];

  useEffect(() => {
    const storedAppointments =
      JSON.parse(localStorage.getItem('appData')) || [];
    const storedCheckedItems = JSON.parse(
      localStorage.getItem('checkedItems')
    ) || [false, false, false, false];
    const lastResetTime = localStorage.getItem('lastResetTime');
    const now = new Date();
    const currentTime = now.getTime();
    const today6AM = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      6,
      0,
      0
    ).getTime();

    setAppointments(storedAppointments);
    setCheckedItems(storedCheckedItems);

    if (
      !lastResetTime ||
      (currentTime >= today6AM && currentTime - today6AM < 24 * 60 * 60 * 1000)
    ) {
      localStorage.setItem('lastResetTime', today6AM);
      setCheckedItems([false, false, false, false]);
      localStorage.setItem(
        'checkedItems',
        JSON.stringify([false, false, false, false])
      );
    }

    removeExpiredAppointments(storedAppointments);
  }, []);

  const handleCheckboxChange = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
    localStorage.setItem('checkedItems', JSON.stringify(newCheckedItems));
  };

  const handleCancelAppointment = (index) => {
    const updatedAppointments = [...appointments];
    updatedAppointments.splice(index, 1);
    setAppointments(updatedAppointments);
    localStorage.setItem('appData', JSON.stringify(updatedAppointments));
    toast({
      title: 'Appointment Canceled',
      description: 'Your appointment has been canceled.',
      status: 'error',
      duration: 3000,
      isClosable: true,
    });
  };

  const removeExpiredAppointments = (storedAppointments) => {
    const now = new Date();
    const currentTime = now.getTime();
    const updatedAppointments = storedAppointments.filter((appointment) => {
      const appointmentTime = new Date(
        `${appointment.date} ${appointment.time}`
      ).getTime();
      return appointmentTime >= currentTime;
    });
    if (updatedAppointments.length !== storedAppointments.length) {
      setAppointments(updatedAppointments);
      localStorage.setItem('appData', JSON.stringify(updatedAppointments));
    }
  };

  const divstyle = {
    display: 'flex',
    width: 'auto',
    justifyContent: 'space-evenly',
    background: 'white',
    alignItems: 'center',
    margin: '5%',
    padding: '7px',
    borderRadius: '10px',
    marginTop: '30px',
    paddingTop: '15px',
    flexDirection: 'column',
  };

  return (
    <div
      style={{
        width: '22%',
        background: '#f4f5f5',
        fontFamily: 'sans-serif',
        padding: '0px 10px',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '39px',
          alignItems: 'center',
          margin: '7%',
          marginTop: '30px',
        }}
      >
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Avatar name="" size="md" src="https://bit.ly/broken-link" />
          <div>
            <p style={{ fontWeight: '800', fontSize: '17px' }}>
              James Septimus
            </p>
            <div style={{ display: 'flex', gap: '5px' }}>
              <img src={loc} alt="location" width="18px" />
              <p style={{ fontSize: '17px', color: 'grey' }}>India</p>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '15px' }}>
          <img src={bell} alt="bell" width="20px" />
          <img src={sett} alt="settings" width="20px" />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          width: 'auto',
          justifyContent: 'space-evenly',
          background: 'white',
          alignItems: 'center',
          margin: '7%',
          padding: '7px',
          borderRadius: '10px',
          marginTop: '30px',
          paddingTop: '15px',
        }}
      >
        <div>
          <p>
            <span style={{ fontSize: '25px', fontWeight: '600' }}>56</span>{' '}
            <sub style={{ fontSize: '16px', color: '#adb3bc' }}>kg</sub>
          </p>
          <p style={{ color: '#adb3bc' }}>Weight</p>
        </div>
        <div>
          <p>
            <span style={{ fontSize: '25px', fontWeight: '600' }}>5.7</span>
          </p>
          <p style={{ color: '#adb3bc' }}>Height</p>
        </div>
        <div>
          <p>
            <span style={{ fontSize: '25px', fontWeight: '600' }}>31</span>{' '}
            <sub style={{ fontSize: '16px', color: '#adb3bc' }}>yrs</sub>
          </p>
          <p style={{ color: '#adb3bc' }}>Age</p>
        </div>
      </div>
      <div style={divstyle}>
        <p
          style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#11a5bc',
            margin: '10px 0px',
          }}
        >
          Daily Routines
        </p>
        {dailyTasks.map((item, index) => (
          <div
            key={index}
            style={{
              background: 'white',
              width: '90%',
              display: 'flex',
              alignItems: 'center',
              margin: '10px',
            }}
          >
            <Checkbox
              size="lg"
              colorScheme="teal"
              isChecked={checkedItems[index]}
              onChange={() => handleCheckboxChange(index)}
            >
              {item}
            </Checkbox>
          </div>
        ))}
      </div>

      <p
        style={{
          fontSize: '20px',
          fontWeight: '600',
          color: '#11a5bc',
          margin: '10px 0px',
          textAlign: 'center',
          marginTop: '25px',
        }}
      >
        Upcoming Appointments
      </p>

      {appointments.length > 0 ? (
        appointments.map((item, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '88%',
              background: 'white',
              padding: '15px',
              borderRadius: '10px',
              marginTop: '10px',
              margin: '6%',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <p style={{ fontWeight: 'bold' }}>Date: {item.date}</p>
            <p>Time: {item.time}</p>

            <Button
              colorScheme="red"
              size="sm"
              onClick={() => handleCancelAppointment(index)}
              style={{ marginTop: '10px' }}
            >
              Cancel Appointment
            </Button>
          </div>
        ))
      ) : (
        <p
          style={{
            fontSize: '20px',
            textAlign: 'center',
          }}
        >
          No upcoming appointments
        </p>
      )}
    </div>
  );
};

export default RightSideBox;
