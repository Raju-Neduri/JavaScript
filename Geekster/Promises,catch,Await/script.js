let p1 = new Promise((resolve) => setTimeout(() => resolve("✅ A"), 1000));
let p2 = new Promise((resolve) => setTimeout(() => resolve("✅ B"), 2000));
let p3 = new Promise((resolve) => setTimeout(() => resolve("✅ C"), 1500));

Promise.all([p1, p2, p3]).then((results) => {
  console.log("All done:", results); // ["✅ A", "✅ B", "✅ C"]
});
