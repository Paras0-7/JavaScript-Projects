const timeouts = [];
const originalTimeoutFn = Window.setTimeout;

window.setTimeout = function setTimeout(fn, delay) {
  const id = originalTimeoutFn(fn, delay);
  timeouts.push(id);

  return id;
};

const clearAllTimeout = function () {
  while (timeouts.length) {
    console.log("Timeout Cleared");
    clearTimeout(timeouts.pop());
  }
};

setTimeout(() => console.log("One"), 1000);
setTimeout(() => console.log("Two"), 2000);
setTimeout(() => console.log("Three"), 3000);
setTimeout(() => console.log("Four"), 4000);

clearAllTimeout();
