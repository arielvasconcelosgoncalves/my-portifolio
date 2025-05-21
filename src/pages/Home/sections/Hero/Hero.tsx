import {Box, Container, Grid, styled, Typography} from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import curriculo from "../../../../assets/pdfs/ariel_de_vasconcelos_goncalves.pdf"

const Hero = () =>{

    const StyledHero = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center"
       
    }))

    const StyledImg = styled("img")(({theme}) => ({
        width: "80%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }))

    return (
      <>
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 4.5 }}>
                        <Box position="relative">
                            <Box position="absolute" width={"150%"} top={-100} right={0}>
                                <AnimatedBackground />
                            </Box>
                            <Box position="relative" textAlign="center">
                                <StyledImg src={Avatar} alt="" />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 7.5 }} display="flex" flexDirection="column" justifyContent="center">
                        <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Ariel Vasconcelos</Typography>
                        <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm a Computer Engineer</Typography>                       
                    </Grid>
                </Grid>
                <Grid container display="flex" justifyContent="end" spacing={3} pt={3}>
                    <Grid size={{ xs: 12, sm: 4 }} display="flex" justifyContent="center">
                        <a href={curriculo} download style={{ textDecoration: "none", width: "100%", display: "flex", justifyContent: "center", }}>
                        <StyledButton onClick={() => console.log("download")}>
                            <FileDownloadIcon/>
                            <Typography>
                            Baixar Currículo
                            </Typography> 
                        </StyledButton>
                        </a>
                        
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }} display="flex" justifyContent="center">
                        <a href={"mailto:ariel.goncalves@sou.unifeob.edu.br"} style={{ textDecoration: "none", width: "100%", display: "flex", justifyContent: "center", }}>
                        <StyledButton onClick={() => console.log("Contact")}>
                            <EmailIcon/>
                            <Typography>
                            Me Contate
                            </Typography>
                        </StyledButton>
                        </a>
                    </Grid>
                </Grid>
            </Container>
            
        </StyledHero>
      </>
    )
   
  }
  
  export default Hero
  