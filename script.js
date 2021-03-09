if('serviceWorker' in navigator){
  window.addEventListener('load', function(){
    navigator.serviceWorker.register('/sw.js').then(function(
      registration){
      console.log('service register');
    }, function(err){
      console.log('service error', err);
    });
  });
}

let deferredPrompt;
var popUp=document.querySelector('.popUp');
var addHome=document.querySelector('.addHome');
popUp.style.display='none';

window.addEventListener('beforeinstallprompt', (e) =>{
  e.preventDefault();
  deferredPrompt=e;
});
  popUp.style.display='block';

  addHome.addEventListener('click', (e) =>{
    popUp.style.display='none';
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult)=>{
      if(choiceResult.outcome === 'acepted'){
        console.log('acepted');
      }
      deferredPrompt=null;
    
  });
});


