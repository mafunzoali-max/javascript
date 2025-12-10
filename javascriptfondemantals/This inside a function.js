function showThis() {
  "use strict"; // Remove to see the difference
  console.log(this);
}
showThis(); // Output: undefined (strict mode), or Window (non-strict mode)
