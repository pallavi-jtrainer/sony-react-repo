import { useRef, useState } from "react";

export default function UseRefDemo() {
    const count = useRef(0);  //stores a mutable value which does not re-render the component when updated
    const [clickCount, setClickCount] = useState(0);

    const inputRef = useRef(null); //stores a reference to a DOM element

    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    count.current = count.current + 1;

    const handleClick = () => {
        setClickCount(prev => prev + 1);
    }

    return (
        <div>
            <h2>UseRef Demo</h2>
            <p>Component Render Count: {count.current}</p>
            <p>Button Click Count: {clickCount}</p>
            <button onClick={handleClick}>Click Me</button>
            <p>
                <input type="text" ref={inputRef} placeholder="Focus me using button" />
                <button onClick={focusInput}>Focus Input</button>
            </p>

        </div>
    )
}