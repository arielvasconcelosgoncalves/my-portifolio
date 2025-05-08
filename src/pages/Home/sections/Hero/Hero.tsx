import {Button, Container, Grid, styled, Typography} from "@mui/material"
import Avatar from "../../../../assets/images/avatar.png"
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import EmailIcon from '@mui/icons-material/Email';


const Hero = () =>{

    const StyledHero = styled("div")(() => ({
        backgroundColor: "green",
        height: "100vh"
    }))

    const StyledImg = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%"
    }))

    return (
      <>
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 4 }}>
                        <StyledImg src={Avatar} alt="" />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 8 }} display="flex" flexDirection="column" justifyContent="center">
                        <Typography color="primary" variant="h1" textAlign="center">Ariel Vasconcelos</Typography>
                        <Typography color="primary" variant="h2" textAlign="center">I'm a Computer Engineer</Typography>                       
                    </Grid>
                </Grid>
                <Grid container display="flex" justifyContent="end">
                    <Grid size={{ xs: 12, sm: 4 }} display="flex" justifyContent="center">
                        <Button><FileDownloadIcon/>Download CV</Button>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }} display="flex" justifyContent="center">
                        <Button><EmailIcon/>Contact Me</Button>
                    </Grid>
                </Grid>
            </Container>
            
        </StyledHero>
      </>
    )
   
  }
  
  export default Hero
  