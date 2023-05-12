
const datePicker = document.getElementById('date-picker');
const moodSelect = document.getElementById('mood-select');
const saveBtn = document.getElementById('save-btn');


let moodHistory = {};


if (localStorage.getItem('moodHistory')) {
  moodHistory = JSON.parse(localStorage.getItem('moodHistory'));
}

saveBtn.addEventListener('click', function() {

  const selectedDate = datePicker.value;
  const selectedMood = moodSelect.value;


  moodHistory[selectedDate] = selectedMood;

  localStorage.setItem('moodHistory', JSON.stringify(moodHistory));


  alert('Mood saved!');
});

// Display mood history on page load
for (const date in moodHistory) {
  const mood = moodHistory[date];
  const moodHistoryDiv = document.createElement('div');
  moodHistoryDiv.textContent = `${date}: ${mood}`;
  document.querySelector('.mood-history').appendChild(moodHistoryDiv);
}
