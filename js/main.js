var unreadCount = 0;


window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js');
    }
// Set the badge
setAppBadge();


}


function displayNotification() {

    Notification.requestPermission().then(function(permission) {

    console.log('notification permission status: ', permission)

    });


    if(Notification.permission === 'granted'){
        navigator.serviceWorker.getRegistration()
        .then(reg =>{
            reg.showNotification('Hello World!', options);
            unreadCount++;
        });

    }

    
    setAppBadge();
   
}

function setAppBadge(){
        
navigator.setAppBadge(unreadCount).catch((error) => {
    //Do something with the error.
    unreadCount = 0;
    console.log(error);
  });

}

function clearAppBadge(){
    navigator.clearAppBadge().catch((error) => {
        // Do something with the error.
        console.log(error);
  });  
}

function go() {

}


    const options = {
        body: 'This is notification body!',
        icon: 'images/hello-icon-512.png',
        vibrate: [100,500,100],
        badge: 'images/hello-icon-512.png',
        data: {primaryKey:1},
        actions:[
            {action: 'go', title: 'Go to the Website!', icon:'https://vanarragon.ca/nimage/icon.png'},
            {action: 'close', title: 'No Thanks', icon:'https://vanarragon.ca/nimage/icon.png'}
        ]


    };
