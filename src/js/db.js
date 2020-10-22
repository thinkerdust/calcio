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
        store.add(teams); 
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
        .then(function(teams) {
            resolve(teams);
        });
    });
}

function destroy(id) {
    dbPromised.then(function(db) {
        const tx = db.transaction('teams', 'readwrite');
        const store = tx.objectStore('teams');
        store.delete(parseInt(id));
        return tx.complete;
    }).then(function() {
        console.log('Teams deleted');
    });
}

export {tambah, show, destroy}