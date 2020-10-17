const webPush = require('web-push');

const vapidKeys = {
    "publicKey": "<Public Key>",
    "privateKey": "<Private Key>"
 };
  
  
 webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
 )
 const pushSubscription = {
    "endpoint": "<Endpoint URL>",
    "keys": {
        "p256dh": "<p256dh Key>",
        "auth": "<Auth key>"
    }
 };
 const payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
  
 const options = {
    gcmAPIKey: '1096254381761',
    TTL: 60
 };
 webPush.sendNotification(
    pushSubscription,
    payload,
    options
 );