import Cookie from 'js-cookie'

export function setToken(key, value) {
  //localStorage.setItem(key, value);
  Cookie.set(key,value)
}
export function getToken(key) {
  return  Cookie.get(key) || "";
}
export function removeToken(key) {
  //localStorage.removeItem(key);
  Cookie.remove(key)
}
export function clear() {
 // localStorage.clear();
}
