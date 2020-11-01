const webPush = require('web-push');

const vapidKeys = {
    publicKey: "BHE_tp_-EHwFj7EWiLBu4o10jeBBUWAsDTpLEQCBiX2p9pZpTqUOgE4i8DijK5XeKFqA99R7uf0TS7EOksJpAz0",
    privateKey: "qpPWnvZXfYTE-KA5dauh6tbDWsganDC2cx8pTxIMOeI"
 };
  
  
 webPush.setVapidDetails(
    'mailto:bbmayu@yahoo.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
 )
 const pushSubscription = {
    endpoint: "https://fcm.googleapis.com/fcm/send/d4YxhOqg8xw:APA91bF-LOJygtm9rLMt1aPo5Sbhcs_0QRDm883TGHLbltKtrtCcx6dErf2rZnVptarujh9L6qgMTpfuc0vqwghF9jutMm-7YNVfkG65eEprlwJI50vrMkvWPEqqymy_x8OW3S8kpxPV",
    keys: {
        p256dh: "BAXioA4epEdEIoebITMNk9KW6CaP/JXXLxA/31N6T2sH030ebYMPzK84/BuPINGDQuV2Gu+xCfpKnnz103d739Y=",
        auth: "S4ftQA+xEZbzeSMdG3H4hA=="
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