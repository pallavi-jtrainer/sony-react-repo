
import "../styles/styles.css"
import Footer from "./Footer";
import Header from "./Header";
import Table from "./Table";
export default function MainComponent(props) {
    let first = props.first;
    let last = props.last;

    let fullname = first + ' ' + last;

    return (
        // <div className="p-3 mb-2 myStyle">
        //     <h3>Welcome to the First Child Component {fullname}!!!</h3>
        // </div>
        <div>
            <h3>Welcome to the First Child Component {fullname}!!!</h3>
            <Header />
            <Table />
            <Footer />
        </div>
    )
}

// export default MainComponent;
