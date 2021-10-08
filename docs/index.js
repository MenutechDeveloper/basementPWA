

window.addEventListener('load', () => {
  registerSW();
});



  const main = document.querySelector('main');

  

async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./sw.js');
    } catch (e) {
      console.log(`SW registration failed`);
    }
  }
}
