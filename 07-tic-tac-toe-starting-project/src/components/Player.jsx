import { useState } from "react";

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    

    function handleEditClick() {
        // If your new state depends on your previous state value,
        // you should NOT update the state with the prior state's value

        // Instead, pass a function to your state updating function.
        // This function will automatically be called by React and 
        // will receive the guaranteed latest state value.

        // State update are NOT performed instantly, but at some point in the future (when React has time for it)
        // In most cases, those state updates are still executed almost instantly.
        setIsEditing((editing) => !editing);
    }

    let buttonText = "Edit";
    let playerNameRow = "";

    isEditing
        ? buttonText = "Save"
        : buttonText = "Edit";

    isEditing
        ? playerNameRow = <input type="text" required value={name}/>
        : playerNameRow = <span className="player-name">{name}</span>;

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