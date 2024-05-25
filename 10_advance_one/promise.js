const promiseOne = new Promise((resolve, reject) => {
  //Do an aysnc task
  // Db calls, cryptography, network call
  setTimeout(() => {
    console.log("completed");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Promise consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("now");
    resolve();
  }, 1000);
}).then(() => {
  console.log("async 2 resolved");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Shubham", email: "Shubham@gmail.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "shubham", password: "dfad" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Promise is fulfilled");
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "13334" });
    } else {
      reject("Error: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

consumePromiseFive();

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally();
