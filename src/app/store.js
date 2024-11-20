import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  notificationsReducer,
  themeReducer,
  sidebarReducer,
  uiReducer,
  quizzesReducer,
  filieresReducer,
  authReducer,
  competencesSlice,
  scheduleReducer,
  formateurReducer,
} from '../features';

const rootReducer = combineReducers({
  notifications: notificationsReducer,
  theme: themeReducer,
  sidebar: sidebarReducer,
  ui: uiReducer,
  quizzes: quizzesReducer,
  filieres: filieresReducer,
  competences: competencesSlice,
  auth: authReducer,
  schedule: scheduleReducer,
  formateurs: formateurReducer,  
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
