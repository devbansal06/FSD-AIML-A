// function wait(ms) {
//   const start = Date.now();
//   while (Date.now() - start < ms) {
//     // blocking wait
//   }
// }

// function login(){
//     console.log("Logging in...")
//     wait(2000);
//     console.log("logged in sucessfully");
// }
// function getData(){
//     console.log("fetching data");
//     wait(8000);
//     console.log("data fetched succesfully");
// }
// function calculateData(){
//     console.log("calculating data");
//     wait(3000);
//     console.log("data calculated");

// }
// function sendSMS(){
//     console.log("sending SMS");
//     wait(1000);
//     console.log("SMS sent successfully");
// }
// function logout(){
//     console.log("Logging out");
//     wait(1000);
//     console.log("logged out");
// }

// login();
// getData();
// calculateData();
// sendSMS();
// logout();

function wait(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function login() {
  console.log("Logging in...");
  await wait(8000);
  console.log("Login successful");
}

async function login(){
    console.log("Logging in...");
    await wait(8000);
    console.log("Login successful");
}

async function getData() {
  console.log("Fetching data...");
  await wait(8000);
  console.log("Data fetched");
}

async function calculateData() {
  console.log("Calculating data...");
  await wait(3000);
  console.log("Data calculated");
}

async function sendSMS() {
  console.log("Sending SMS...");
  await wait(1000);
  console.log("SMS sent");
}

async function logout() {
  console.log("Logging out...");
  await wait(1000);
  console.log("Logged out");
}

async function main() {
  await login();
  await getData();
  await calculateData();
  await sendSMS();
  await logout();
}

main();