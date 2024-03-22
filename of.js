function requestTimeout() {
  return setTimeout(() => {
    console.log('Timeout triggered');
  }, 1000); // sets a timeout for 1 second
}

const timeoutId = requestTimeout();
// Later on, if you need to cancel the timeout, you can call:
// clearTimeout(timeoutId);
