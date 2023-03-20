import Portfolio from "@/components/portfolio";

const Home: React.FC = () => {
  return <Portfolio />;
};

export default Home;

export const getStaticProps = async () => {
  return {
    props: {
      pageTitle: "Portfolio",
    },
  };
};
