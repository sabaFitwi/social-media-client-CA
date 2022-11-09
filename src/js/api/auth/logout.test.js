import { logout } from "./logout";

const TOKEN = "accessTokenCodeFromLocalStorage.";
const PROFILE = {
  name: "saba",
  email: "saba@noroff.no",
  banner: null,
  avatar: "http//URLimage",
};

//source reference
//https://stackoverflow.com/questions/32911630/how-do-i-deal-with-localstorage-in-jest-tests/32911774#32911774

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

describe("logout", () => {
  it("Returns a valid response object and a valid access token for local storage.", () => {
    localStorage.setItem("profile", JSON.stringify(PROFILE));
    localStorage.setItem("token", JSON.stringify(TOKEN));
    logout();
    expect(localStorage.getItem("profile")).toEqual(null);
    expect(localStorage.getItem("token")).toEqual(null);
  });
});
