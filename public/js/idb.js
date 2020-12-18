// create variable to hold db connection
// Check lesson 18.4 for all of the IndexedDB information from modules
let db;
// establish a connection to IndexedDB database called 'budget' and set it to version 1
const request = indexedDB.open("budget", 1)

// this event will emit if the database version changes (nonexistant to version 1, v1 to v2, etc.)
request.onupgradeneeded = function(event) {
    // save a reference to the database
    const db = event.target.result
        // create an object store (table) called `pending`, set it to have an auto incrementing primary key of sorts
        // remember autoIncrement is an out of line keyPath for object store
        // ALSO REMEMBER TO CLEAR CACHE WHEN THIS DOES NOT INITIALLY WORK BECAUSE IT WILL NOT ADD UNTIL THE CACHE IS CLEARED
    db.createObjectStore("pending", {
        autoIncrement: true
    });
};

request.onsuccess = function(event) {
    db = event.target.result;

    // check if app is online before reading from db
    if (navigator.onLine) {
        checkDatabase(db);
    }
};

request.onerror = function(event) {
    // log error here
    console.log(event.target.errorCode);
};

// This function will be executed if we attempt to submit a budget and there's no internet connection
function saveRecord(record) {
    // open a new transaction with the database with read and write permissions 
    const transaction = db.transaction(['pending'], 'readwrite');

    // access the object store for `pending`
    const budgetObjectStore = transaction.objectStore('pending');

    // add record to your store with add method.
    budgetObjectStore.add(record);
}

function checkDatabase() {
    // open a transaction on your pending db
    const transaction = db.transaction(['pending'], 'readwrite');

    // access your pending objectstore
    const budgetObjectStore = transaction.objectStore('pending');

    // get all records from the store and set them to a variable
    const getAll = budgetObjectStore.getAll();

    getAll.onsuccess = function() {
        if (getAll.result.length > 0) {
            fetch('/api/transaction/', {
                    method: "POST",
                    body: JSON.stringify(getAll.result),
                    headers: {
                        Accept: "application/json,text/plain,*/*",
                        "Content-Type": "application/json"
                    }
                })
                .then(response => response.json())
                .then(serverResponse => {
                    if (serverResponse.message) {
                        throw new Error(serverResponse);
                    }
                    // Once the response has passed it will open up the store once more and clear it out
                    const transaction = db.transaction(['pending'], 'readwrite');
                    const budgetObjectStore = transaction.objectStore('pending');
                    budgetObjectStore.clear();

                    alert('All numbers have been added');
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
}

// listen for app coming back online
window.addEventListener('online', checkDatabase);