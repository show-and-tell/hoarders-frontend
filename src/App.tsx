import {BrowserRouter, Route, Routes} from "react-router";
import cat1 from "./assets/cat1.jpg";
import cat2 from "./assets/cat2.jpg";
import cat3 from "./assets/cat3.jpg";
import cat4 from "./assets/cat4.jpg";
import cat5 from "./assets/cat5.jpg";
import dog1 from "./assets/dog1.jpg";
import dog2 from "./assets/dog2.jpg";
import dog3 from "./assets/dog3.jpg";
import HomePage from "./components/Home.tsx";
import CollectionViewer from "./components/CollectionViewer.tsx";
import "./App.css"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="collection1" element={<CollectionViewer
                    images={[cat1, cat2, cat3, cat4, cat5]}
                />}/>
                <Route path="collection2" element={<CollectionViewer
                    images={[dog1, dog2, dog3]}
                />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
