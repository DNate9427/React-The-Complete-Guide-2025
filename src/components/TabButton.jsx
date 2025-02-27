// Structured approach:
// export default function TabButton(props) {
//     return (
//         <li>
//             <button>{props.children}</button>
//         </li>);
// }

// Destructured approach:
export default function TabButton({ children, onSelect }) {
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>);
}