import Header from "../layout/Header"
import Sidebar from "../layout/Sidebar"
import Content from "../layout/Content"
import Footer from "../layout/Footer"

const QuemSomos = () => {
    return (
        <>
            <Header />
            <div id="main">
                <Sidebar />
                <p>Quem Somos e oque fazemos</p>
                <Content />
            </div>
            <Footer />
        </>
    )
}

export default QuemSomos 