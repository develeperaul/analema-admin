const storage = window.localStorage;

function setTokensData(token, expires = 15) {
  storage.setItem("expiresIn", expires * 60 * 1000);
  storage.setItem("token", token);
}

function getAccessToken() {
  const token = storage.getItem("token");
  // if (isTokenExpired()) return null;
  return token;
}

function isTokenExpired() {
  const token = storage.getItem("token");
  const currentTime = Date.now() / 1000;
  const expiresIn = storage.getItem("expiresIn");

  return !(
    token !== null &&
    expiresIn !== null &&
    parseInt(expiresIn) > currentTime
  );
}

function cleanTokensData() {
  storage.removeItem("token");
  storage.removeItem("expiresIn");
}

export { setTokensData, getAccessToken, cleanTokensData, isTokenExpired };
