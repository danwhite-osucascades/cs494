
'use client';
import {
    AppBar, 
    Box, 
    Toolbar,  
    Container,
    Button, 
 } from "@mui/material";

 import { useRouter } from 'next/navigation';

export default function NavBar(){
    const router = useRouter();
    const sections: string[] = ["Home", "Dogs", "Cats", "Favorites"];
    const handleSectionClick = (section: string) => {
        if (section == "Home"){
            router.push("/");
        }
        else if (section == "Dogs"){
            router.push("/dogs");
        }
        else if (section == "Cats"){
            router.push("/cats");
        }
        else if (section == "Favorites"){
            router.push("/favorites");
        }
    };
    
    return (
        <header>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
                        {sections.map((section, i) => (
                        <Button
                            key={i}
                            onClick={()=>{handleSectionClick(section)}}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {section}
                        </Button>
                        ))}
                    </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        </header>
    )
}