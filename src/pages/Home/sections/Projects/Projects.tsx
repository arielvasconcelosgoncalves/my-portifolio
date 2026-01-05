import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, {
  type ProjectCardProps,
} from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import livro from "../../../../assets/images/livros_vai_na_web.jpg";
import devmovies from "../../../../assets/images/devmovies.png";
import helper from "../../../../assets/images/helper.jpg";
import fine from "../../../../assets/images/fine.png";
import devburger from "../../../../assets/images/devburger.png";
import convertMoney from "../../../../assets/images/convert-money-devclub.png";

const ProjectsSection: React.FC = () => {
  const StyledExperience = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
  }));

  const projects = [
    {
      title: "Fine - Controle Financeiro",
      subtitle: "Set 2025 - Out 2025",
      srcImg: fine,
      description:
        "Descrição: Fine é uma aplicação web full stack voltada ao controle financeiro pessoal, com interface moderna e intuitiva. Permite o registro e categorização de receitas e despesas, exibição de gráficos interativos e autenticação segura via Firebase. O sistema facilita o acompanhamento do orçamento e a análise dos hábitos financeiros de forma prática.",
      technologies:
        "Tecnologias: Typescript, React, Node.js, Express, MongoDB, Firebase",
      websiteURL: "https://controle-financeiro-fine.netlify.app/",
      codeURL: "https://github.com/arielvasconcelosgoncalves/fine",
    },
    {
      title: "DevBurger - Sistema de Pedidos",
      subtitle: "Jul 2025 - Set 2025",
      srcImg: devburger,
      description:
        "Descrição: O DevBurger é um projeto full stack que simula um sistema de delivery de hamburgueria, com interface moderna e integração com API de pagamentos (Stripe). Ele permite o cadastro de usuários, realização de pedidos, upload de imagens de produtos e administração do cardápio.",
      technologies:
        "Tecnologias: React, Node.js, Express, MongoDB, PostgreSQL, Stripe API",
      websiteURL:
        "https://devburger-ariel.netlify.app/",
      codeURL: "https://github.com/arielvasconcelosgoncalves/projeto-devburger",
    },
    {
      title: "DevMovies - Consumo de API de Filmes",
      subtitle: "Out 2025 - Nov 2025",
      srcImg: devmovies,
      description:
        "Descrição: O DevMovies tem como objetivo apresentar de forma clara e visualmente atraente informações sobre filmes e séries populares. Utilizei a API pública do TMDb para buscar os dados mais atualizados e exibi-los em uma interface intuitiva. Esse projeto também foi inspirado em atividades práticas do curso DevClub, onde pude aprofundar meus conhecimentos em React, consumo de APIs e boas práticas.",
      websiteURL: "https://devmovies-ariel.netlify.app/",
      technologies: "Tecnologias: HTML, CSS, Javascript, API TMDb",
      codeURL: "https://github.com/arielvasconcelosgoncalves/devmovies",
    },
    {
      title: "Livros Vai na Web",
      subtitle: "Jan 2025 - Fev 2025",
      srcImg: livro,
      description:
        "Descrição: Website para doação de livros, feito para conclusão do curso de Desenvolvedor FullStack do " +
        "Vai na Web, por meio dos métodos POST e GET, cadastramos e consultamos livros por meio de uma API Rest. Frontend e Backend" +
        "foram ambos desenvolvidos por mim no decorrer do curso. Foram utilizados hooks (useEffect, useState) e responsividade foi indispensável. ",
      technologies: "Tecnologias: HTML, Sass, Javascript",
      websiteURL: "https://livros-vai-na-web-ariel.netlify.app/",
      codeURL: "https://github.com/arielvasconcelosgoncalves/livros-vai-na-web",
    },
    {
      title: "Convert Money - Conversor de Moedas",
      subtitle: "Jul 2025 - Ago 2025",
      srcImg: convertMoney,
      description:
        "Este projeto foi desenvolvido durante o curso do Dev Club na seção de Front-End para fins de aprendizado. O objetivo é criar uma aplicação simples de conversão de moedas utilizando HTML, CSS e JavaScript, consumindo dados de uma API de câmbio em tempo real. Atualmente ele têm capacidade de converter em tempo real as seguintes moedas: Real (BRL), Dólar (USD), Euro (EUR) e Bitcoin (BTC).",
      technologies: "Tecnologias: HTML, CSS, Javascript",
      websiteURL: "https://convert-money.netlify.app/",
      codeURL:
        "https://github.com/arielvasconcelosgoncalves/convert-money-devclub",
    },
    {
      title: "Helper - Site de Denúncias",
      subtitle: "Jan 2018 - Jun 2018",
      srcImg: helper,
      description:
        "Descrição: Website de denúncias de crimes virtuais, criado como projeto de conclusão de curso " +
        "do curso técnico de informática da ETEC Arnaldo Pereira Cheregatti foi utilizado um modelo pré-pronto de " +
        "frontend (W3Layouts) e trabalhado o backend com php. Possui um sistema de login com acesso restrito para " +
        "usuários que vão receber as denúncias e acesso público para usuários que vão realizar as denúncias.",
      technologies: "Tecnologias: HTML, PHP, CSS, Bootstrap, Javascript",
      websiteURL: "https://helper-ariel.netlify.app/",
      codeURL: "https://github.com/arielvasconcelosgoncalves/helper",
    },
  ];

  return (
    <StyledExperience>
      <Container maxWidth="lg">
        <Box id="projects" pt={5} pb={3}>
          <Typography
            variant="h2"
            textAlign="center"
            color="primary.contrastText"
          >
            Projetos
          </Typography>
        </Box>
        <Grid container spacing={5} pb={3}>
          {projects.map((project: ProjectCardProps, index: number) => (
            <Grid key={index} size={{ md: 6 }}>
              <AnimationComponent
                moveDirection={index % 2 == 0 ? "right" : "left"}
              >
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
  );
};

export default ProjectsSection;
