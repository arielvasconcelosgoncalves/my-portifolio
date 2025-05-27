import { Box, Card, Container, Grid, Typography, styled } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const AboutSection: React.FC = () => {

    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }));

    const skillsSet = [
        "Javascript", "Typescript", "React", "Git", "HTML", "CSS", "AWS", "Material UI"
    ]

    return (
        <>
            <Container maxWidth="lg">
                <Box id="about" pt={5} mb={3}>
                    <Typography variant="h2" textAlign="center" >Sobre Mim</Typography>
                </Box>
                <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
                    <Grid size={{xs:9, md:2.5}}>
                        <AnimationComponent moveDirection="right">
                            <StyledCard variant="outlined">
                                <WorkspacePremiumIcon />
                                <Typography textAlign="center" fontWeight={600}>Profissional</Typography>
                                <Typography textAlign="center">Analista</Typography>
                                <Typography textAlign="center">de Compras</Typography>
                            </StyledCard>
                        </AnimationComponent>
                        <AnimationComponent moveDirection="right">
                            <StyledCard variant="outlined">
                                <SchoolIcon />
                                <Typography textAlign="center" fontWeight={600}>Educação</Typography>
                                <Typography textAlign="center">Bacharelado</Typography>
                                <Typography textAlign="center">Engenharia da Computação</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                    <Grid size={{xs:9, md:2.5}}>
                        <AnimationComponent moveDirection="left">
                            <StyledCard variant="outlined">
                                <SchoolIcon />
                                <Typography textAlign="center" fontWeight={600}>Educação</Typography>
                                <Typography textAlign="center">Bacharelado</Typography>
                                <Typography textAlign="center">Tecnologia da Informação</Typography>
                            </StyledCard>
                        </AnimationComponent>
                        <AnimationComponent moveDirection="left">
                            <StyledCard variant="outlined">
                                <SchoolIcon />
                                <Typography textAlign="center" fontWeight={600}>Educação</Typography>
                                <Typography textAlign="center">Bacharelado</Typography>
                                <Typography textAlign="center">Engenharia Civil</Typography>
                            </StyledCard>
                        </AnimationComponent>

                    </Grid>
                </Grid>
                <Box pb={1}>
                    <Typography>
                        Sou formado em Engenharia Civil, Engenharia da Computação e Tecnologia da Informação. Ao longo da minha trajetória, desenvolvi uma base sólida tanto em raciocínio lógico quanto em resolução de problemas complexos — habilidades que aplico diariamente no universo da tecnologia.
                        Aprofundei meus conhecimentos em desenvolvimento web por meio do curso Full Stack do Instituto Ser (Vai na Web), com foco nas tecnologias React, JavaScript, Python, Flask e bancos de dados SQL. Nesse programa, pude unir teoria e prática em projetos reais, desenvolvendo soluções robustas e com atenção à experiência do usuário.
                        Hoje, meu objetivo é criar aplicações modernas, eficientes e intuitivas. Estou sempre em busca de novos desafios e oportunidades que me permitam crescer e contribuir com soluções de impacto.
                    </Typography>
                </Box>
                <hr />
                <Box id="skills" pt={1} mb={3}>
                    <Typography variant="h3" textAlign="center" fontWeight={300}>Habilidades</Typography>
                </Box>
                <Box mb={5}>
                    <Grid container spacing={3} justifyContent="center">
                        {skillsSet.map((skill, index) => (
                            <Grid key={index} size={{xs:8, sm:6, md:3, lg:3}}>
                                <StyledCard variant="outlined">
                                    {skill}
                                </StyledCard>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default AboutSection
