function gel(id) {
    return document.getElementById(id);
  }
  
  gel("hostButton").onclick = confirmHost;
  
  function confirmHost() {
    window.location = "https://chunkymonkey00.github.io/VidParty/host.html";
  }
