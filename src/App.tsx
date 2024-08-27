import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Feed from "./pages/Feed";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <header className="flex flex-row justify-center items-center gap-5 bg-blue-500 text-white p-4 text-center text-xl sticky top-0 z-10">
          <Link to="/">Feed</Link>
          <Link to="/create-post">Criar publicação</Link>
        </header>
        <div className="flex-1 overflow-y-auto bg-gray-100 p-4">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
