if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("/service-worker.js", { scope: "/" })
      .then(function() {
        console.log("[Companion]", "Rails Service worker registered!")
      })
      .catch(function(error) {
	      // registration failed :(
        console.log("[Companion]", "Rails Service worker registration failed: " + error)
      })
}
