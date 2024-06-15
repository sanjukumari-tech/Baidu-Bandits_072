// import React, { useState } from 'react';

// const Training = () => {
//   const days = [
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//   ];

//   const exercises = {
//     monday: [
//       {
//         name: 'Bench Press',
//         gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/04/barbell-bench-press.gif',
//       },
//       {
//         name: 'Incline Dumbbell Press',
//         gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/09/dumbbell-incline-chest-press.gif',
//       },
//       {
//         name: 'Chest Fly',
//         gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/08/dumbbell-chest-fly-muscles.gif',
//       },
//       {
//         name: 'Push-Ups',
//         gif: 'https://cdn-cccio.nitrocdn.com/sQAAylIpwgMYZgBLSXcMgCkUIbfIzHvb/assets/images/optimized/rev-3d9de4c/www.aleanlife.com/wp-content/uploads/2020/09/classic-pushup.gif',
//       },
//       {
//         name: 'Cable Crossover',
//         gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2024/02/cable-standing-crossover.gif',
//       },
//     ],
//     tuesday: [
//       {
//         name: 'Pull-Ups',
//         gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/11/pull-up.gif',
//       },
//       {
//         name: 'Lat Pulldown',
//         gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2023/07/cable-pushdown.gif',
//       },
//       {
//         name: 'Cabel Machine Rows',
//         gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2024/01/cable-one-arm-seated-row.gif',
//       },
//       {
//         name: 'Single-Arm Dumbbell Row',
//         gif: 'https://i.pinimg.com/originals/2e/1d/11/2e1d11bc46aa8a0fb1d42fa9e97bbf9e.gif',
//       },
//       {
//         name: 'Back Extension',
//         gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/05/back-extension.gif',
//       },
//     ],
//     wednesday: [
//       {
//         name: 'Shoulder Press',
//         gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/10/seated-overhead-press.gif',
//       },
//       {
//         name: 'Lateral Raise',
//         gif: 'https://archive.org/download/dumbbell-4-way-lateral-raise/DUMBBELL%204%20WAY%20LATERAL%20RAISE.gif',
//       },
//       {
//         name: 'Front Raise',
//         gif: 'https://i.pinimg.com/originals/dd/01/d7/dd01d7f4b5a021849ab0a3e1a7f54c49.gif',
//       },
//       {
//         name: 'Pec Deck Fly',
//         gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/08/band-pull-apart.gif',
//       },
//       {
//         name: 'Shrugs',
//         gif: 'https://cdn.shopify.com/s/files/1/0547/0486/5477/files/dumbbell-shrug_480x480.gif?v=1701426774',
//       },
//     ],
//     thursday: [
//       {
//         name: 'Squats',
//         gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2021/03/full-squat-side-view.gif',
//       },
//       {
//         name: 'Leg Press',
//         gif: 'https://media.tenor.com/yBaS_oBgidsAAAAM/gym.gif',
//       },
//       {
//         name: 'Lunges',
//         gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2023/07/bodyweight-forward-lunge.gif',
//       },
//       {
//         name: 'Leg Extension',
//         gif: 'https://static.wixstatic.com/media/2edbed_3ffafa0b4e694caf9e49b851d474f160~mv2.gif',
//       },
//       {
//         name: 'Hamstring Curl',
//         gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/03/seated-leg-curl.gif',
//       },
//     ],
//     friday: [
//       {
//         name: 'Bicep Curl',
//         gif: 'https://homeworkouts.org/wp-content/uploads/anim-dumbbell-bicep-curls.gif',
//       },
//       {
//         name: 'Hammer Curl',
//         gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2023/03/elbow-flexion.gif',
//       },
//       {
//         name: 'Preacher Curl',
//         gif: 'https://newlife.com.cy/wp-content/uploads/2019/11/04021301-Dumbbell-Seated-Preacher-Curl_Upper-Arms_360.gif',
//       },
//       {
//         name: 'Concentration Curl',
//         gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/01/barbell-concentration-curls.gif',
//       },
//       {
//         name: 'Cable Curl',
//         gif: 'https://cdn-cccio.nitrocdn.com/sQAAylIpwgMYZgBLSXcMgCkUIbfIzHvb/assets/images/optimized/rev-3d9de4c/www.aleanlife.com/wp-content/uploads/2022/04/cable-curls.gif',
//       },
//     ],
//     saturday: [
//       {
//         name: 'Tricep Pushdown',
//         gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2023/03/straight-bar-tricep-pushdown.gif',
//       },
//       {
//         name: 'Overhead Tricep Extension',
//         gif: 'https://i.pinimg.com/originals/b0/7e/04/b07e041f3be7b6a0164b8a117300d9c4.gif',
//       },
//       {
//         name: 'Tricep Dips',
//         gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/11/bench-dips-on-floor.gif',
//       },
//       {
//         name: 'Skull Crushers',
//         gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/08/incline-skullcrusher.gif',
//       },
//       {
//         name: 'Tricep Kickback',
//         gif: 'https://www.aleanlife.com/wp-content/uploads/2020/09/dumbbell-kickbacks.gif',
//       },
//     ],
//   };
//   const workoutName = ['Chest', 'Lats', 'Shoulder', 'Leg', 'Bicep', 'Tricep'];
//   const [workout, setWorkout] = useState([]);

//   const handleClick = (e) => {
//     const val = e.target.innerText.toLowerCase();
//     setWorkout(exercises[val]);
//   };

//   return (
//     <div>
//       <div style={{ display: 'flex', justifyContent: 'center' }}>
//         {days.map((day) => {
//           return (
//             <button
//               key={day}
//               style={{
//                 background: '#f4f5f5',
//                 padding: '10px',
//                 border: '1px solid #11a5bc',
//                 borderRadius: '10px',
//                 color: '#11a5bc',
//                 width: '120px',
//                 margin: '15px',
//                 fontWeight: '600',
//                 marginTop: '20px',
//               }}
//               onClick={handleClick}
//             >
//               {day}
//             </button>
//           );
//         })}
//       </div>
//       <div style={{ marginTop: '20px', textAlign: 'center' }}>
//         {workout.length > 0 && (
//           <div
//             style={{
//               display: 'flex',
//               flexWrap: 'wrap',
//               gap: '10px',
//               padding: '10px',
//               justifyContent: 'center',
//             }}
//           >
//             {workout.map((exercise, index) => (
//               <div
//                 key={index}
//                 style={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                   width: '330px',
//                   fontSize: '25px',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   borderRadius: '20px',
//                   gap: '20px',
//                   padding: '10px',
//                   boxShadow:
//                     'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
//                 }}
//               >
//                 <img src={exercise.gif} width="300" />
//                 <p style={{ color: '#212121' }}>{exercise.name}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Training;

import React, { useState } from 'react';

const Training = () => {
  const days = [
    { day: 'Monday', name: 'Chest' },
    { day: 'Tuesday', name: 'Lats' },
    { day: 'Wednesday', name: 'Shoulders' },
    { day: 'Thursday', name: 'Legs' },
    { day: 'Friday', name: 'Biceps' },
    { day: 'Saturday', name: 'Triceps' },
  ];

  const exercises = {
    monday: [
      {
        name: 'Bench Press',
        gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/04/barbell-bench-press.gif',
      },
      {
        name: 'Incline Dumbbell Press',
        gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/09/dumbbell-incline-chest-press.gif',
      },
      {
        name: 'Chest Fly',
        gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/08/dumbbell-chest-fly-muscles.gif',
      },
      {
        name: 'Push-Ups',
        gif: 'https://cdn-cccio.nitrocdn.com/sQAAylIpwgMYZgBLSXcMgCkUIbfIzHvb/assets/images/optimized/rev-3d9de4c/www.aleanlife.com/wp-content/uploads/2020/09/classic-pushup.gif',
      },
      {
        name: 'Cable Crossover',
        gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2024/02/cable-standing-crossover.gif',
      },
    ],
    tuesday: [
      {
        name: 'Pull-Ups',
        gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/11/pull-up.gif',
      },
      {
        name: 'Lat Pulldown',
        gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2023/07/cable-pushdown.gif',
      },
      {
        name: 'Cable Machine Rows',
        gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2024/01/cable-one-arm-seated-row.gif',
      },
      {
        name: 'Single-Arm Dumbbell Row',
        gif: 'https://i.pinimg.com/originals/2e/1d/11/2e1d11bc46aa8a0fb1d42fa9e97bbf9e.gif',
      },
      {
        name: 'Back Extension',
        gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/05/back-extension.gif',
      },
    ],
    wednesday: [
      {
        name: 'Shoulder Press',
        gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/10/seated-overhead-press.gif',
      },
      {
        name: 'Lateral Raise',
        gif: 'https://archive.org/download/dumbbell-4-way-lateral-raise/DUMBBELL%204%20WAY%20LATERAL%20RAISE.gif',
      },
      {
        name: 'Front Raise',
        gif: 'https://i.pinimg.com/originals/dd/01/d7/dd01d7f4b5a021849ab0a3e1a7f54c49.gif',
      },
      {
        name: 'Pec Deck Fly',
        gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/08/band-pull-apart.gif',
      },
      {
        name: 'Shrugs',
        gif: 'https://cdn.shopify.com/s/files/1/0547/0486/5477/files/dumbbell-shrug_480x480.gif?v=1701426774',
      },
    ],
    thursday: [
      {
        name: 'Squats',
        gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2021/03/full-squat-side-view.gif',
      },
      {
        name: 'Leg Press',
        gif: 'https://media.tenor.com/yBaS_oBgidsAAAAM/gym.gif',
      },
      {
        name: 'Lunges',
        gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2023/07/bodyweight-forward-lunge.gif',
      },
      {
        name: 'Leg Extension',
        gif: 'https://static.wixstatic.com/media/2edbed_3ffafa0b4e694caf9e49b851d474f160~mv2.gif',
      },
      {
        name: 'Hamstring Curl',
        gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/03/seated-leg-curl.gif',
      },
    ],
    friday: [
      {
        name: 'Bicep Curl',
        gif: 'https://homeworkouts.org/wp-content/uploads/anim-dumbbell-bicep-curls.gif',
      },
      {
        name: 'Hammer Curl',
        gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2023/03/elbow-flexion.gif',
      },
      {
        name: 'Preacher Curl',
        gif: 'https://newlife.com.cy/wp-content/uploads/2019/11/04021301-Dumbbell-Seated-Preacher-Curl_Upper-Arms_360.gif',
      },
      {
        name: 'Concentration Curl',
        gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/01/barbell-concentration-curls.gif',
      },
      {
        name: 'Cable Curl',
        gif: 'https://cdn-cccio.nitrocdn.com/sQAAylIpwgMYZgBLSXcMgCkUIbfIzHvb/assets/images/optimized/rev-3d9de4c/www.aleanlife.com/wp-content/uploads/2022/04/cable-curls.gif',
      },
    ],
    saturday: [
      {
        name: 'Tricep Pushdown',
        gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2023/03/straight-bar-tricep-pushdown.gif',
      },
      {
        name: 'Overhead Tricep Extension',
        gif: 'https://i.pinimg.com/originals/b0/7e/04/b07e041f3be7b6a0164b8a117300d9c4.gif',
      },
      {
        name: 'Tricep Dips',
        gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/11/bench-dips-on-floor.gif',
      },
      {
        name: 'Skull Crushers',
        gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/08/incline-skullcrusher.gif',
      },
      {
        name: 'Tricep Kickback',
        gif: 'https://www.aleanlife.com/wp-content/uploads/2020/09/dumbbell-kickbacks.gif',
      },
    ],
  };

  const [workout, setWorkout] = useState([]);
  const [workoutTitle, setWorkoutTitle] = useState('');

  const handleClick = (e) => {
    const val = e.target.getAttribute('data-value');
    const title = e.target.getAttribute('data-title');
    setWorkout(exercises[val]);
    setWorkoutTitle(title);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {days.map(({ day, name }) => {
          return (
            <button
              key={day}
              data-value={day.toLowerCase()}
              data-title={name}
              style={{
                background: '#f4f5f5',
                padding: '10px',
                border: '1px solid #11a5bc',
                borderRadius: '10px',
                color: '#11a5bc',
                width: '120px',
                margin: '15px',
                fontWeight: '600',
                marginTop: '20px',
              }}
              onClick={handleClick}
            >
              {day}
            </button>
          );
        })}
      </div>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        {workout.length > 0 && (
          <div>
            <p style={{ fontSize: '23px', color: '#212121' }}>
              {workoutTitle} Workout
            </p>
            <p>All Excersise 3*15 Sets</p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                padding: '10px',
                justifyContent: 'center',
              }}
            >
              {workout.map((exercise, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '330px',
                    fontSize: '25px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '20px',
                    gap: '20px',
                    padding: '10px',
                    boxShadow:
                      'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
                  }}
                >
                  <img src={exercise.gif} width="300" />
                  <p style={{ color: '#212121' }}>{exercise.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Training;
