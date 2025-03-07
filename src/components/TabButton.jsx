// Structured approach:
// export default function TabButton(props) {
//     return (
//         <li>
//             <button>{props.children}</button>
//         </li>);
// }

// Destructured approach:
export default function TabButton({ children, onSelect }) {
    console.log('TAB COMPONENT EXECUTING');
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>);
}