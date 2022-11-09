import { login } from "./login";

const VALID_EMAIL = "saba@noroff.no";
const INVALID_EMAIL = "invalid@email.com";
const PASSWORD = "Tobi1234";

const TOKEN = "accessTokenCodeFromLocalStorage.";

const profile = {
  name: "saba",
  email: VALID_EMAIL,
};

//source reference
//https://stackoverflow.com/questions/32911630/how-do-i-deal-with-localstorage-in-jest-tests/32911774#32911774

const localStorageMock = (() => {
  let store = {};

  return {
    getItem(key) {
      return store[key];
    },

    setItem(key, value) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();
global.localStorage = localStorageMock;

function fetchSuccess(status = 201, statusText = "Success!") {
  return Promise.resolve({
    ok: true,
    status,
    statusText,
    json: () => Promise.resolve({ ...profile, TOKEN }),
  });
}

function fetchFailure(status = 404, statusText = "Unsuccessful") {
  return Promise.resolve({
    ok: false,
    status,
    statusText,
  });
}

describe("login", () => {
  it("returns a valid token when provided with valid credentials", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const data = await login(VALID_EMAIL, PASSWORD);
    expect(VALID_EMAIL).toMatch("@noroff.no");
    expect(PASSWORD).toHaveLength(8);
    expect(data.TOKEN).toEqual(TOKEN);
  });

  it("throws an error when provided with invalid credentials", async () => {
    global.fetch = jest.fn(() => fetchFailure());
    await expect(login(INVALID_EMAIL, PASSWORD)).rejects.toThrow(
      "Unsuccessful"
    );
  });
});
