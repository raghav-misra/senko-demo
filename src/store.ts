// No senko app is complete without senko!
import senko from "senko";

// We're gonna have a signup form:
// Pass in the initial state to the senko function:
export const useStore = senko({
    username: "",
    email: "",
    password: "",
});

// Oh also you can use a default export instead,
// I'm just not a big fan xD.
