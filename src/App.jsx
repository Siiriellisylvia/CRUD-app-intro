import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";

function App() {
    return (
        <>
            <NavBar />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/create" element={<CreatePage />} />
                    <Route path="/posts/:postId" element={<UpdatePage/>} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
