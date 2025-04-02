// This is to allow for dynamic assignment of the wrapper element to make the component even more flexible.
export default function Tabs({ children, buttons, ButtonsContainer }) {
    // We must use the props value, so we must set a variable:
    // const ButtonsContainer = buttonsContainer; - if we went with a lowercase beginning character 
    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    );
}
