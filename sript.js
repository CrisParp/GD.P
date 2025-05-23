function selectMode(mode) {
  document.querySelector('.mode-grid').style.display = 'none';
  document.querySelector('h1').style.display = 'none';
  const gameScreen = document.getElementById('game-screen');
  gameScreen.style.display = 'flex';
  document.getElementById('mode-title').innerText = `${mode} Mode`;
}

function goBack() {
  document.querySelector('.mode-grid').style.display = 'grid';
  document.querySelector('h1').style.display = 'block';
  document.getElementById('game-screen').style.display = 'none';
}
