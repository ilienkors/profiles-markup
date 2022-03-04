const goToProfile = (identifier) => {
  const url = document.getElementById("connectButtonId").getAttribute("url");
  window.location.href = url + identifier;
}
