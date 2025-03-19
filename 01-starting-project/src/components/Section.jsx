// the "..." JavaScript feature is called "Rest property"
// This syntax groups all remaining object properties into a new object(named "props" in this case).
// These are also known as "forwared props" - or "proxy props"
export default function Section({ title, children, ...props }) {
    return (
        <section {...props}> {/*this is useful for wrapper components*/}
            <h2>{title}</h2>
            {children}
        </section>
    )
}
