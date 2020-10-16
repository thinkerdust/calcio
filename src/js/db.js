import idb from 'idb';

const dbPromised = idb.open("calcio", 1, function(upgradeDb) {
    const teamsObjectStore = upgradeDb.createObjectStore("teams", {
        keyPath: 'id'
    });
    teamsObjectStore.createIndex("id", "id", {
        unique: false
    });
});
      
    
function tambah(teams) {
    dbPromised.then(function(db) {
        const tx = db.transaction('teams', 'readwrite');
        const store = tx.objectStore('teams');
        console.log(teams);
        store.put(teams); 
        return tx.complete;
    }).then(function() {
        console.log('teams berhasil disimpan.')
    }).catch(function() {
        console.log('teams gagal disimpan.')
    })
}

function show() {
    return new Promise(function(resolve, reject) {
        dbPromised
        .then(function(db) {
            const tx = db.transaction("teams", "readonly");
            const store = tx.objectStore("teams");
            return store.getAll();
        })
        .then(function(articles) {
            resolve(articles);
        });
    });
}

function destroy(teams) {
    dbPromised.then(function(db) {
        const tx = db.transaction('teams', 'readwrite');
        const store = tx.objectStore('teams');
        store.delete(teams);
        return tx.complete;
    }).then(function() {
    console.log('Teams deleted');
    });
}

export {tambah, show, destroy}