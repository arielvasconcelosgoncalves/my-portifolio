import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { type ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "Livros Vai na Web",
            subtitle: "Jan 2025 - Fev 2025",
            srcImg: "/src/assets/images/livros_vai_na_web.jpg",
            description: "Descrição: Website para doação de livros, feito para conclusão do curso de Desenvolvedor FullStack do "+
            "Vai na Web, por meio dos métodos POST e GET, cadastramos e consultamos livros por meio de uma API Rest. Frontend e Backend"+
            "foram ambos desenvolvidos por mim no decorrer do curso. Foram utilizados hooks (useEffect, useState) e responsividade foi indispensável. ",
            technologies: "Tecnologias: HTML, Sass, Javascript",
            websiteURL: "https://livros-vai-na-web-ariel.netlify.app/",
            codeURL: "https://github.com/arielvasconcelosgoncalves/livros-vai-na-web",
        },
        {
            title: "API de Livros",
            subtitle: "Jan 2025 - Fev 2025",
            srcImg: "/src/assets/images/api_livros.jpg",
            description: "Descrição: Uma API Rest que utiliza Flask, um microframework do python, que pode cadastrar livros por meio"+
            " do método POST e consultar para exibir livros doados por meio do método GET. A conexão com o banco de dados foi realizada "+
            "por meio da sqlite3. Essa API é utilizada no site Livros Vai na Web em tempo real, método POST na aba Quero Doar e o método GET em "+
            "Livros Doados.",
            technologies: "Tecnologias: Python (Flask), SQL",
            websiteURL: "https://livros-vai-na-web-ariel.netlify.app",
            codeURL: "https://github.com/arielvasconcelosgoncalves/api_livros",
        },
        {
            title: "Calculadora",
            subtitle: "Mai 2025 - Mai 2025",
            srcImg: "/src/assets/images/calculadora.jpg",
            description: "Descrição: Este é um projeto simples de uma calculadora funcional desenvolvida com HTML, "+
            "CSS e JavaScript puro. O objetivo deste projeto foi consolidar conhecimentos em manipulação do DOM, "+
            "eventos e lógica de programação, além de aplicar um pouco de estilização com foco em usabilidade e aparência agradável,"+
            " para chegar assim o mais próximo possível das funcionalidades de uma calculadora.",
            technologies: "Tecnologias: HTML, CSS, Javascript",
            websiteURL: "https://calculadora-ariel.netlify.app/",
            codeURL: "https://github.com/arielvasconcelosgoncalves/calculadora",
        },
        {
            title: "Helper - Site de Denúncias",
            subtitle: "Jan 2018 - Jun 2018",
            srcImg: "/src/assets/images/helper.jpg",
            description: "Descrição: Website de denúncias de crimes virtuais, criado como projeto de conclusão de curso "+
            "do curso técnico de informática da ETEC Arnaldo Pereira Cheregatti foi utilizado um modelo pré-pronto de "+
            "frontend (W3Layouts) e trabalhado o backend com php. Possui um sistema de login com acesso restrito para "+
            "usuários que vão receber as denúncias e acesso público para usuários que vão realizar as denúncias.",
            technologies: "Tecnologias: HTML, PHP, CSS, Bootstrap, Javascript",
            websiteURL: "https://helper-ariel.netlify.app/",
            codeURL: "https://github.com/arielvasconcelosgoncalves/helper",
        },
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projetos</Typography>
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
