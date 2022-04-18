import Header from "./components/Header"
import Footer from "./components/Footer.js"
import Main from "./components/Main"
import ItemListContainer from "./components/ItemListContainer"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
    return (
        <>
            <Header/>
            <Main nombre="Francisco">
            </Main>
            <ItemListContainer/>
            <Footer/>


        </>
    )
}

export default App