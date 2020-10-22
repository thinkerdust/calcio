const webPush = require('web-push');

const vapidKeys = {
    publicKey: "BP3GwbxXA_UXsh74WiEj321d7zzLalQ8-WmK6u4TvrJKgkwpgh1JJxKGoItfRzLobV5ZCPV_ISrv8ZrlEtEEmZw",
    privateKey: "3Ef93_DzxYIOSvqCptezCufO5GYCk6rVRLKcWQlBasg"
 };
  
  
 webPush.setVapidDetails(
    'mailto:bbmayu@yahoo.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
 )
 const pushSubscription = {
    endpoint: "https://fcm.googleapis.com/fcm/send/dZIxpEXdjO0:APA91bGIja9dGoO-5SXG9K97UW1vOsgeW-sNHSYUFtvSzJgnmQYTpyv4N9cjTyp1Tc-RrZ3Eskpt3_Mlmp5mHgolnYrMCUUSFw5Dd-CXaBlwrRDxVn4_KObcnrg_t0X_5d-3HLu5gRwf",
    keys: {
        p256dh: "BPx3f3dVj/KEJwKH2o22iBbSboLffFfo0QHKaV8LhKheJ5mj5ksRC+PFACjQld0tF3SJ2OQp2gRJYNSSHtFRUZ4=",
        auth: "n7fnl/C26USx2vlOKOJWwg=="
    }
 };
 const payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
  
 const options = {
    gcmAPIKey: "1096254381761",
    TTL: 60
 };
 webPush.sendNotification(
    pushSubscription,
    payload,
    options
 );