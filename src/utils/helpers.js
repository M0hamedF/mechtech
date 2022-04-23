const appKey = "mechtech";
const defaultDur = 60000 * 60 * 24; // 1 Day
export const getStorageKey = () => appKey;

export function setToStorage(value, key = appKey, ttl = defaultDur) {
  const now = new Date();
  const item = {
    value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

export function getFromStorage(key = appKey) {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
}

export function removeFromStorage(key = appKey) {
  localStorage.removeItem(key);
}

export function textToURL(str) {
  return str.replace(/\s/g, "-");
}
export function URLToText(str) {
  return str.replace(/-/g, " ");
}

export function productsFormat(products) {
  const obj = {};

  for (let i = 0; i < products.length; i++) {
    obj[products[i].product_categorize] = products.filter(
      (product) => product.product_categorize === products[i].product_categorize
    );
  }

  return obj;
}

export function userFormat({ id, name, nick_name, email, phone, img }) {
  return { id, name, username: nick_name, email, phone, img };
}
