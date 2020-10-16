import idb from 'idb/lib/idb';
import api from './api';

let dbPromised = idb.open("team-details", 1, function (upgradeDb) {
  let teamsObjectStore = upgradeDb.createObjectStore("teams", {
    keyPath: "id"
  });
  teamsObjectStore.createIndex("name", "name", {
    unique: false
  });
});

function saveForLater(teams) {
  dbPromised
    .then(function (db) {
      let tx = db.transaction("teams", "readwrite");
      let store = tx.objectStore("teams");
      store.add(teams);
      return tx.complete;
    })
    .then(function () {
      console.log("teams berhasil disimpan");
    })
}

function getById(id) {
  return new Promise(function (resolve, reject) {
    dbPromised
      .then(function (db) {
        let tx = db.transaction("teams", "readonly");
        const store = tx.objectStore("teams");
        return store.get(parseInt(id));
      })
      .then(function (teams) {
        resolve(teams);
      });
  });
}

function getAll() {
  return new Promise(function (resolve, reject) {
    dbPromised
      .then(function (db) {
        let tx = db.transaction("teams", "readonly");
        const store = tx.objectStore("teams");
        return store.getAll();
      })
      .then(function (teams) {
        resolve(teams);
      });
  });
}

function deleteById(id) {
  dbPromised.then(function (db) {
    var tx = db.transaction("teams", "readwrite");
    var store = tx.objectStore("teams");
    store.delete(parseInt(id));
    return tx.complete;
  }).then(function () {
    console.log('item deleted');
    api.getSavedTeam();
  })
}

export {
  saveForLater,
  getAll,
  getById,
  deleteById
}