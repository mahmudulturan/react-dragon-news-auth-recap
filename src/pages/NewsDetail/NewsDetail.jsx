import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import { useParams } from 'react-router-dom';

const NewsDetail = () => {
    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            thedetail
            <h1>{id}</h1>
        </div>
    );
};

export default NewsDetail;