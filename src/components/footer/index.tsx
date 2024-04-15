import "./style.scss";
import {Container} from '@containers'


const index = () => {

    const date = new Date();

    return (
        <footer className="bg-[#0f0b1f] py-[20px]">
            <Container>
                <p className="text-center text-white font-medium">CopyRight Otabek Dev {date.getFullYear()} </p>
            </Container>
        </footer>
    );
};

export default index;