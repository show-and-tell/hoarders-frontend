import {BrowserRouter, Route, Routes} from "react-router";
import HomePage from "./components/Home.tsx";
import CollectionViewer from "./components/CollectionViewer.tsx";
import "./App.css"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="collection" element={<CollectionViewer/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
