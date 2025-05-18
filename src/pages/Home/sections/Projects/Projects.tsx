import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { type ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "Exemplo Projeto",
            subtitle: "Jan 2019 - Maio 2019",
            srcImg: "/src/assets/images/",
            description: "Descricao",
            technologies: "Tecnologias:",
            websiteURL: "https://",
            codeURL: "https://github.com/",
        },
        {
            title: "Exemplo Projeto",
            subtitle: "Jan 2019 - Maio 2019",
            srcImg: "/src/assets/images/",
            description: "Descricao",
            technologies: "Tecnologias:",
            websiteURL: "https://",
            codeURL: "https://github.com/",
        },
        {
            title: "Exemplo Projeto",
            subtitle: "Jan 2019 - Maio 2019",
            srcImg: "/src/assets/images/",
            description: "Descricao",
            technologies: "Tecnologias:",
            websiteURL: "https://",
            codeURL: "https://github.com/",
        },
        {
            title: "Exemplo Projeto",
            subtitle: "Jan 2019 - Maio 2019",
            srcImg: "/src/assets/images/",
            description: "Descricao",
            technologies: "Tecnologias:",
            websiteURL: "https://",
            codeURL: "https://github.com/",
        },
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid key={index} size={{md:6}}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection
