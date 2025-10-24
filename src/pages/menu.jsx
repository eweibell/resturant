import {Box, Typography} from "@mui/material";

import {Header} from '../components/header.jsx'
import food1 from '../assets/food/food-1.webp'
import food2 from '../assets/food/food-2.webp'
import food3 from '../assets/food/food-3.webp'
import food4 from '../assets/food/food-4.webp'
import food5 from '../assets/food/food-5.webp'
import food6 from '../assets/food/food-6.webp'
import food7 from '../assets/food/food-7.webp'
import food8 from '../assets/food/food-8.webp'
import {fusionEatsTheme} from "../muiTheme";
import {Footer} from "../components/footer";

export const Menu = () => {
    const dishes = [
        {
            name: "Tokyo Burger",
            image: food1,
            description: "Saftig biff, wasabi-mayo og sprø løk på briochebrød."
        },
        {
            name: "Nordic Ramen",
            image: food2,
            description: "Rik buljong med laks, egg og fermenterte grønnsaker."
        },
        {
            name: "Tempura Taco",
            image: food3,
            description: "Knasende tempura-reker med chili-lime saus."
        },
        {
            name: "Sushi Burrito",
            image: food4,
            description: "Stort sushi-rull fylt med tunfisk, avocado, og soyasaus i et tangblad."
        },
        {
            name: "Korean BBQ Beef",
            image: food5,
            description: "Mør biff marinert i en soyasaus, hvitløk og sesamolje, servert med ris."
        },
        {
            name: "Miso Tofu Stir-fry",
            image: food6,
            description: "Sprø tofu stekt med miso-glaze og grønnsaker."
        },
        {
            name: "Poke Bowl",
            image: food7,
            description: "Marinert rå fisk, ris, avocado, og edamame, toppet med sesamfrø og soyasaus."
        },
        {
            name: "Ramen Burger",
            image: food8,
            description: "En unik burger med ramen-boller som brød, fylt med saftig kylling og kimchi."
        },
    ];

    return (
        <section
            style={{
                minHeight: '100vh',
                width: '100vw',
                backgroundColor: fusionEatsTheme.palette.background.default,
            }}
        >
            <Header></Header>
            <Typography variant="h2" sx={{fontWeight: '700', margin:'1rem', paddingLeft: '2.4rem'}}>Meny</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(24rem, 1fr))',
                        gap: '2rem',
                        margin: '3vw',
                        marginTop: '1vw',
                        backgroundColor: fusionEatsTheme.palette.background.default,
                    }}
                >
                    {dishes.map((dish) => (
                        <Box key={dish.name}>
                            <Box sx={{
                                "&:hover": {
                                    transform: 'translateY(-1rem)',
                                    transition: 'transform .7s',
                                },
                                "&:not(:hover)": {
                                    transform: 'translateY(0)',
                                    transition: 'transform .3s',
                            }}}>
                                <img class="menu-img" src={dish.image} alt={dish.name} style={{width:'100%', objectFit: 'cover', borderRadius: '5%'}}/>
                            </Box>
                            <Typography variant="h5">{dish.name}</Typography>
                            <Typography>{dish.description}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </section>
    );
}