import runtime from "serviceworker-webpack-plugin/lib/runtime";

if ("serviceWorker" in navigator) {
    runtime
        .register()
        .then(function () {
            console.log("Pendaftaran ServiceWorker berhasil");
        })
        .catch(function () {
            console.log("Pendaftaran ServiceWorker gagal");
        });
} else {
    console.log("ServiceWorker belum didukung browser ini.");
}