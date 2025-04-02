import { useState } from "react";

export default function Player({ initialName, symbol }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        // If your new state depends on your previous state value,
        // you should NOT update the state with the prior state's value - setIsEditing((!isEditing);

        // Instead, pass a function to your state updating function.
        // This function will automatically be called by React and 
        // will receive the guaranteed latest state value.

        // State update are NOT performed instantly, but at some point in the future (when React has time for it)
        // In most cases, those state updates are still executed almost instantly.
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let buttonText = "Edit";
    let playerNameRow = "";

    isEditing
        ? buttonText = "Save"
        : buttonText = "Edit";

    isEditing
        // Two-Way Binding: Getting a value out and putting it back in.
        ? playerNameRow = <input type="text" required value={playerName} onChange={handleChange} />
        : playerNameRow = <span className="player-name">{playerName}</span>;

    return (
        <li>
            <span className="player">
                {playerNameRow}
                <span className="player-symbol">{symbol}</span>
                <button onClick={handleEditClick}>{buttonText}</button>
            </span>
        </li>
    );
}