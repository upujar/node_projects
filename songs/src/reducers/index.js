import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Cold/Mess', duration: '4:04' },
    { title: 'Dill Se Re', duration: '4:44' },
    { title: 'Ud gaye', duration: '5:04' },
    { title: 'Khudi ko khud', duration: '4:34' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});