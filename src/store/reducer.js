import { combineReducers } from 'redux';

// ## Generator Reducer Imports
import contact from '../modules/contact/ContactState';
import bookings from '../modules/bookings/BookingsState';
import alerts from '../modules/alerts/AlertsState';
import journey from '../modules/journey/JourneyState';
import chat from '../modules/chat/ChatState';
import sampleForm from '../modules/samples/form/SampleFormState';
import app from '../modules/app/AppState';
import home from '../modules/home/HomeState';

export default combineReducers({
  // ## Generator Reducers
  contact,
  bookings,
  alerts,
  journey,
  chat,
  sampleForm,
  app,
  home
});
