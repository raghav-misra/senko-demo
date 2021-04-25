import React from "react";
import ReactDOM from "react-dom";
import { useStore } from "./store";

function Form() {
    const store = useStore();

    const onLogin: React.FormEventHandler = (e) => {
        e.preventDefault();
        console.log(
            "You signed up with the username:",
            store.username,
            "\nThe email:",
            store.email,
            "\nAnd your password was supposed to be secret but we don't care:",
            store.password
        );
    };

    return (
        <form onSubmit={onLogin}>
            <label>Username:</label>
            <input
                type="text"
                placeholder="CoolGuy1234"
                {...store.model.username()}
            />

            <label>Email:</label>
            <input
                type="email"
                placeholder="coolguy1234@gmail.io"
                {...store.model.email()}
            />

            <label>Password:</label>
            <input
                type="password"
                placeholder="Shhhhhhhhh!"
                {...store.model.password()}
            />

            <button type="submit">Signup!</button>
        </form>
    );
}

ReactDOM.render(<Form />, document.querySelector("#root"));