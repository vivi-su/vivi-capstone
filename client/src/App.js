import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import EntryPage from "./pages/entry-page/EntryPage";
import DisneyPage from "./pages/disney/DisneyPage";
import Drum from "./components/drum/Drum";
import Draw from "./components/draw/Draw";
import Whack from "./components/whack/Whack";




import "./App.scss";
import HomePage from "./pages/home-page/HomePage";

function App() {
  return (
    <section className="App">
      <section className="App__container">
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<EntryPage />} />
            <Route path="/play/disney" element={<DisneyPage />} />

            <Route path="/play" element={<HomePage />}>
              <Route index element={<Navigate replace to="drum" />} />
              <Route path="drum" element={<Drum />} />
              <Route path="draw" element={<Draw />} />
              <Route path="whack" element={<Whack />} />
            </Route>
            <Route path="*" element={<EntryPage />} />
          </Routes>
        </BrowserRouter>
      </section>
    </section>
  );
}

export default App;