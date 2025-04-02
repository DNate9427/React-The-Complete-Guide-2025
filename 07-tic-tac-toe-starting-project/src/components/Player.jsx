import { useState } from "react";

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    

    function handleEditClick() {
        setIsEditing(!isEditing);
    }


    let buttonText = "Edit";
    let playerNameRow = "";

    isEditing
        ? buttonText = "Save"
        : buttonText = "Edit";

    isEditing
        ? playerNameRow = <input type="text" required />
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