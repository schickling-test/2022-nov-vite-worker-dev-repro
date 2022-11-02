import './style.css';

// doesn't seem to load the worker
const worker = new Worker(new URL('./worker.ts', import.meta.url), {
  type: 'module',
});

// seems to work without the `.href`
// const worker = new Worker(new URL('./worker.ts', import.meta.url), {
//   type: 'module',
// });

worker.postMessage('');

worker.addEventListener('message', (e) => {
  document.getElementById('app').innerHTML = e.data;
});
