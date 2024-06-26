import {
  FETCH,
  UPDATE,
  ADDTOSCHEDULE,
  COMPLETE,
  BOOKAPPOINTMENT,
  DELETEAPPOINTMENT,
  SET_WEEKLY_DATA,
  SET_EDIT_MODE,
  DAILY,

} from './actionTypes';

export const init = {
  schedulearr: [],
  doctorAppointments: [],
  refresh:true,

  weeklyData: {},
  editMode: {},

  loading: false,
  data: null,
  error: null
};

export const reducer = (state = init, action) => {
  switch (action.type) {
    case FETCH:
      return {...action.payload };

    case UPDATE:
      return {
        ...state,
        schedulearr: state.schedulearr.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
      case DAILY:
        
        return {
          ...state,
          calories:[...state.calories,+action.payload.caloriesBurned],
          steps:[...state.steps, +action.payload.stepsTaken],
          exerciseTime:[...state.exerciseTime, +action.payload.workoutDuration]

        };

    case ADDTOSCHEDULE:
      return {
        ...state,
        schedulearr: [...state.schedulearr, action.payload],
        
      };

    case COMPLETE:
      return {
        ...state,
        schedulearr: state.schedulearr.filter(
          (item) => item.id !== action.payload
        ),
      };

    case BOOKAPPOINTMENT:
      return {
        ...state,
        doctorAppointments: [...state.doctorAppointments, action.payload],
      };

    case DELETEAPPOINTMENT:
      return {
        ...state,
        doctorAppointments: state.doctorAppointments.filter(
          (item) => item.id !== action.payload
        ),
      };

      case SET_WEEKLY_DATA:
        return {
          ...state,
          weeklyData: {
            ...state.weeklyData,
            [action.payload.day]: action.payload.data,
          },
        };
      case SET_EDIT_MODE:
        return {
          ...state,
          editMode: {
            ...state.editMode,
            [action.payload.day]: action.payload.mode,
          },
        };  

      

    default:
      return state;
  }
};
