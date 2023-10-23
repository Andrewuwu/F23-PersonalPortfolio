import "./Profile.css";
import { Button, Card, CardContent, CardMedia } from "@mui/material";

function Profile() {
    return (
        <section id="profile">
            <Card 
                sx={{ width:"auto", display: "flex", flexDirection: "row", padding: "2rem", boxShadow: "none"}}
            >
                <CardMedia
                    component="img"
                    sx={{ width: "auto", borderRadius: "2rem"}}
                    image="./src/assets/profile1.png"
                />
                <CardContent sx={{ 
                    display: 'flex', 
                    flexDirection: "column", 
                    alignItems: 'center',
                    justifyContent: 'center' }}
                >
                    <h4 class="greeting">Hello, I'm</h4>
                    <h1 class="name">John Doe</h1>
                    <h2 class="title">Frontend Developer</h2>
                    <div class="btn-container">
                        <Button
                            variant="outlined"
                            size="large"
                            color="inherit"
                            style={{ borderRadius: "2rem" }}
                            onClick={() => window.open('./src/assets/resume.pdf')}
                        > 
                            Download CV
                        </Button>
                        <Button
                            variant="contained"
                            size="large"
                            color="inherit"
                            style={{ borderRadius: "2rem" }}
                            href="#contact"
                        >
                            Contact Info
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}

export default Profile;
