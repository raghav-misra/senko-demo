import React from "react";
import ReactDOM from "react-dom";
import { useStore } from "./store";
import "./style.css";

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
            <div className="field">
                <h3>Test Form (submit and check console):</h3>
            </div>

            <div className="field">
                <label>Username:</label>
                <input
                    type="text"
                    placeholder="CoolGuy1234"
                    {...store.model.username()}
                />
            </div>

            <div className="field">
                <label>Email:</label>
                <input
                    type="email"
                    placeholder="coolguy1234@gmail.io"
                    {...store.model.email()}
                />
            </div>

            <div className="field">
                <label>Password:</label>
                <input
                    type="password"
                    placeholder="Shhhhhhhhh!"
                    {...store.model.password()}
                />
            </div>

            <div className="field">
                <button type="submit">Signup!</button>
            </div>
        </form>
    );
}

ReactDOM.render(<Form />, document.querySelector("#root"));