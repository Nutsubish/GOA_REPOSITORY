import { useContext } from "react";
import { DataContext } from "./context/dataContext";

function App() {
    const { backgroundColor, handleChange } = useContext(DataContext);

    return (
        <>
            <div style={{ backgroundColor: backgroundColor }}>
                <button onClick={handleChange}>Click me</button>
            </div>
        </>
    );
}

export default App;
