import { reactLocalStorage } from "reactjs-localstorage";

export function retrieveCategories() {
  return reactLocalStorage.getObject("categories", []);
}

export function storeCategories(categories) {
  reactLocalStorage.setObject("categories", categories);
}
