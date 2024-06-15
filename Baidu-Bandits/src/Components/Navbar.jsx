import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import dashboard from '../assets/dashboard-svgrepo-com (3).svg';
import activity from '../assets/activity-tracker-fitness-svgrepo-com.svg';
import doc from '../assets/doctor-bag-svgrepo-com.svg';
import mental from '../assets/mental-health-svgrepo-com.svg';
import nutri from '../assets/i-nutrition-svgrepo-com.svg';
import gym from '../assets/gym-svgrepo-com.svg';
import logout from '../assets/logout-svgrepo-com.svg';
import { auth } from '../auth/firebase';
import { signOut } from 'firebase/auth';
import home from '../assets/home-1-svgrepo-com.svg';

const Navbar = () => {
  const location = useLocation();
  const signOff = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };

  const getLinkStyle = (path) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '7px',
    borderRadius: '10px',
    backgroundColor: location.pathname === path ? '#11a5bc' : 'transparent',
    color: location.pathname === path ? '#ffffff' : '#adb3bc',
  });

  return (
    <div
      style={{
        width: '15%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh',
        background: '#fafafa',
        padding: '5px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'sans-serif',
          gap: '25px',
          fontSize: '20px',
          margin: '5px',
        }}
      >
        <h1>Logo</h1>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div style={getLinkStyle('/')}>
            <img src={home} alt="" width="35px" />
            Home
          </div>
        </Link>
        <Link to="/dashboard" style={{ textDecoration: 'none' }}>
          <div style={getLinkStyle('/dashboard')}>
            <img src={dashboard} alt="" width="35px" />
            Dashboard
          </div>
        </Link>
        <Link to="/activitytracker" style={{ textDecoration: 'none' }}>
          <div style={getLinkStyle('/activitytracker')}>
            <img src={activity} alt="" width="35px" />
            Activity Tracker
          </div>
        </Link>
        <Link to="/doctorappointment" style={{ textDecoration: 'none' }}>
          <div style={getLinkStyle('/doctorappointment')}>
            <img src={doc} alt="" width="35px" />
            Doctor Appointment
          </div>
        </Link>
        <Link to="/mentalwellness" style={{ textDecoration: 'none' }}>
          <div style={getLinkStyle('/mentalwellness')}>
            <img src={mental} alt="" width="35px" />
            Mental Wellness
          </div>
        </Link>
        <Link to="/nutrition" style={{ textDecoration: 'none' }}>
          <div style={getLinkStyle('/nutrition')}>
            <img src={nutri} alt="" width="35px" />
            Nutrition
          </div>
        </Link>
        <Link to="/personaltraining" style={{ textDecoration: 'none' }}>
          <div style={getLinkStyle('/personaltraining')}>
            <img src={gym} alt="" width="35px" />
            Personal Training
          </div>
        </Link>
      </div>
      <div style={{ marginBottom: '20%' }}>
        <button
          style={{
            fontSize: '25px',
            border: 'none',
            background: 'none',
            color: '#adb3bc',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '5px',
              borderRadius: '10px',
            }}
            onClick={signOff}
          >
            <img src={logout} alt="" width="30px" />
            Logout
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
