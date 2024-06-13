import React, { useState } from 'react';
import {
  Radio,
  RadioGroup,
  Stack,
  Text,
  Checkbox,
  useToast,
} from '@chakra-ui/react';

const DoctorAppointment = () => {
  const [formData, setFormData] = useState({
    title: '',
    fullName: '',
    email: '',
    mobile: '',
    date: '',
    time: '',
    problem: '',
    terms: true,
  });

  const [bookedSlots, setBookedSlots] = useState({});
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleDateChange = (e) => {
    setFormData({ ...formData, date: e.target.value, time: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { date, time } = formData;

    // Add the booked time slot to the bookedSlots state
    setBookedSlots((prevSlots) => ({
      ...prevSlots,
      [date]: [...(prevSlots[date] || []), time],
    }));

    console.log(formData);
    toast({
      title: 'Appointment booked.',
      description: "We've received your appointment request.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    });

    // Reset form fields
    setFormData({
      title: '',
      fullName: '',
      email: '',
      mobile: '',
      date: '',
      time: '',
      problem: '',
      terms: true,
    });
  };

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

  const availableTimes = formData.date
    ? times.filter((time) => !(bookedSlots[formData.date] || []).includes(time))
    : times;

  return (
    <div
      style={{
        fontFamily: 'sans-serif',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: '20px',
          width: '90%',
          marginTop: '10%',
          gap: '50px',
          padding: '20px',
        }}
      >
        <Text fontSize="4xl" color="#11a5bc">
          Make An Appointment
        </Text>
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <RadioGroup
            name="title"
            value={formData.title}
            onChange={(value) => setFormData({ ...formData, title: value })}
          >
            <Stack spacing={5} direction="row">
              <Radio colorScheme="teal" value="Mr" size="lg">
                Mr
              </Radio>
              <Radio colorScheme="teal" value="Mrs" size="lg">
                Mrs
              </Radio>
            </Stack>
          </RadioGroup>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name *"
            value={formData.fullName}
            onChange={handleChange}
            style={{
              borderBottom: '1px solid grey',
              width: '500px',
              fontSize: '20px',
              padding: '3px',
            }}
          />
        </div>
        <div style={{ display: 'flex', gap: '55px' }}>
          <input
            type="text"
            name="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleChange}
            style={{
              borderBottom: '1px solid grey',
              width: '300px',
              fontSize: '20px',
            }}
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number *"
            value={formData.mobile}
            onChange={handleChange}
            style={{
              borderBottom: '1px solid grey',
              width: '300px',
              fontSize: '20px',
            }}
          />
        </div>
        <div style={{ display: 'flex', gap: '55px' }}>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleDateChange}
            style={{
              borderBottom: '1px solid grey',
              width: '300px',
              fontSize: '20px',
            }}
            min={new Date().toISOString().split('T')[0]}
          />
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            style={{
              borderBottom: '1px solid grey',
              width: '300px',
              fontSize: '20px',
            }}
          >
            <option value="">hh:mm</option>
            {availableTimes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            type="text"
            name="problem"
            placeholder="Your Problem Summary..."
            value={formData.problem}
            onChange={handleChange}
            style={{
              borderBottom: '1px solid grey',
              width: '650px',
              fontSize: '20px',
            }}
          />
        </div>
        <div style={{ marginLeft: '-27%' }}>
          <Checkbox
            name="terms"
            isChecked={formData.terms}
            onChange={handleChange}
            size="md"
            colorScheme="teal"
          >
            <span style={{ color: 'grey' }}>I agree to your </span>
            <span style={{ textDecoration: 'underline', color: 'grey' }}>
              Terms of Service{' '}
            </span>
            <span style={{ color: 'grey' }}>and </span>
            <span style={{ textDecoration: 'underline', color: 'grey' }}>
              Privacy Policy.
            </span>
          </Checkbox>
        </div>
        <button
          type="submit"
          style={{
            background: '#11a5bc',
            width: '70%',
            color: 'white',
            padding: '10px',
            fontSize: '20px',
          }}
        >
          Book
        </button>
      </form>
    </div>
  );
};

export default DoctorAppointment;
