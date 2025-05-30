function showSection(id) {
  document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if(id === 'data') drawDataChart();
  if(id === 'train') drawTrainChart();
  if(id === 'ai') drawAIChart();
}
function drawDataChart() {
  const ctx = document.getElementById('dataChart').getContext('2d');
  new Chart(ctx, { type: 'bar', data: {
      labels: ['Feature A','B','C','D','E'], datasets: [{ label: 'Value', data: [65, 59, 80, 81, 56],
      backgroundColor: '#00ffe1' }] }, options: { responsive: true } });
}
function drawTrainChart() {
  const ctx = document.getElementById('trainChart').getContext('2d');
  new Chart(ctx, { type: 'line', data: {
      labels: Array.from({length:20},(_,i)=>i+1),
      datasets: [{ label: 'Training Loss', data: Array.from({length:20},()=>Math.random()*0.5+0.2),
      borderColor: '#ff4b1f', fill: false }] }, options: { responsive: true } });
}
function drawAIChart() {
  const ctx = document.getElementById('aiChart').getContext('2d');
  new Chart(ctx, { type: 'line', data: {
      labels: ['Case1','Case2','Case3','Case4','Case5'],
      datasets: [
        { label: 'Actual', data: [20, 30, 25, 35, 30], borderColor: '#a0a7ff', fill: false },
        { label: 'Predicted', data: [18, 28, 22, 33, 29], borderColor: '#ff00ff', fill: false }
      ] }, options: { responsive: true } });
}
// show data explorer as default
document.addEventListener('DOMContentLoaded', () => showSection('data'));
