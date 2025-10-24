import {Hero} from "../components/hero.jsx";
import {Header} from "../components/header.jsx";
import {Footer} from "../components/footer.jsx";
import {fusionEatsTheme} from "../muiTheme";

export const Home = () => {
    return (
        <section
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '95vh',
                width: '100vw',
                backgroundColor: fusionEatsTheme.palette.background.default,
            }}
        >
            <Header />
            <Hero />
        </section>
    );
}