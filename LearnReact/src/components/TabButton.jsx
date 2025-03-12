// Structured approach:
// export default function TabButton(props) {
//     return (
//         <li>
//             <button>{props.children}</button>
//         </li>);
// }

// Destructured approach:
export default function TabButton({ children, onSelect, isSelected }) {
    console.log('TAB COMPONENT EXECUTING');
    return (
        <li>
            <button className={isSelected ? 'active' : undefined } onClick={onSelect}>{children}</button>
        </li>);
}