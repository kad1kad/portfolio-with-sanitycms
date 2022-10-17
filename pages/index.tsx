import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProjectList from "../components/ProjectList";
import SkillList from "../components/SkillList";

import { PageInfo, Project, Skill } from "../typings";

import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import type { GetServerSideProps, GetStaticProps } from "next";

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
};

const Home = ({ pageInfo, skills, projects }: Props) => {
  return (
    <div className="px-5 bg-[#0a1216] text-neutral-100 tracking-wider">
      <Head>
        <title>Kad Aliu Portfolio</title>
        <meta
          name="description"
          content="Kad Aliu Portfolio Frontend Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero pageInfo={pageInfo} speed={0} />

      <SkillList skills={skills} />
      <ProjectList projects={projects} />
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();

  return {
    props: {
      pageInfo,
      projects,
      skills,
    },
  };
};

export default Home;
