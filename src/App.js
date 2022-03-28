import { Route, Routes } from "react-router-dom";
import { Footer, Navbar, Product, ScrollToTop } from "./components";
import { Home, Hoodie, PageNotFound, Tshirt } from "./pages";
import { GlobalStyle } from "./styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hoodie" element={<Hoodie />} />
        <Route path="/tshirt" element={<Tshirt />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
