// reduce saertod ver gavuge da tan mag dros ro xsniden ver vigebdi da chanawerebs
// unda vuyuro bevrjer

// async da promise 
// 1. 
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved after 2 seconds");
    }, 2000);
  });
  
  promise1.then((message) => {
    console.log(message);
  });
  
  // 2. 
  async function asyncFunction1() {
    try {
      const result = await promise1;
      console.log(result);
    } catch (error) {
      console.log("Error in asyncFunction1:", error);
    }
  }
  
  asyncFunction1();
  
  // 3. 
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Promise rejected"));
    }, 1500);
  });
  
  promise2.catch((error) => {
    console.log("Error in promise2:", error.message);
  });
  
  // 4. 
  async function asyncFunction2() {
    try {
      const result = await promise2;
      console.log(result);
    } catch (error) {
      console.log("Error in asyncFunction2:", error.message);
    }
  }
  
  asyncFunction2();
  
  // 5. 
  const promise3 = new Promise((resolve, reject) => {
    resolve("First promise resolved");
  });
  
  promise3
    .then((message) => {
      console.log(message);
      return "Second promise result";
    })
    .then((message) => {
      console.log(message);
      throw new Error("Error chaining promises");
    })
    .catch((error) => {
      console.log("Error in promise chain:", error.message);
    });
  
  // 6. 
  const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 4 resolved after 3 seconds");
    }, 3000);
  });
  
  async function asyncFunction3() {
    try {
      const results = await Promise.all([promise1, promise4]);
      results.forEach((result) => {
        console.log("Result f:", result);
      });
    } catch (error) {
      console.log("Error i:", error);
    }
  }
  
  asyncFunction3();
  
  // 7. 
    const promise5 = new Promise((resolve, reject) => {
    resolve(10);
  });
  
  promise5.then((value) => {
    console.log("Transformed value:", value * 2);
  });
  
  // 8.
  async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log("Fetched data:", data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }
  
  fetchData();
  
  // 9. 
  // ?
  
  // 10.
  // ? 
  