const webPush = require('web-push');

const vapidKeys = {
    publicKey: "BPQIegpz3QgBNNuoPbRi23LicyZ8PVjf3TfuSIBsJpBW_GRGiI3vjTqXfCLHin5JLuOOjW0MrpBVeHiD-S2aFQ0",
    privateKey: "eQIdaOb0PtH7H5g2_2G0sfHGVGVYv3iZU9Li98WYqic"
 };
  
  
 webPush.setVapidDetails(
    'mailto:bbmayu@yahoo.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
 )
 const pushSubscription = {
    endpoint: "https://fcm.googleapis.com/fcm/send/fIhCAUv7eOU:APA91bHVwyp2YD2HQ7I3QWgZ7coSrkzTiktf-zySPRKK9ZG9EbRzhuUzIt1-Fw04MO1mmxhlLi_3M0QMoHMQVyQyt1T5bjSybygWV0jqOwiW_kUftFs2Rxoy6WFgYs3dhSVmVqGF6M0C",
    keys: {
        p256dh: "BEF6QCHdnlDrnLdjQbKDXeV2RS0ArawLthJFWB/LXaxr3yDWXAYdpM1LdTrLTTCS4IbDvBeWNSbzHTEKDRuKHzA=",
        auth: "5UkT9Z8c8O+yuZaZ6xqR1w=="
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