import React from "react";

const ComingSoon: React.FC = () => {
  return (
    <div>
      <h3>This page is work in progress</h3>
    </div>
  );
};

export default ComingSoon;

export const getStaticProps = async () => {
  return {
    props: {
      pageTitle: "Coming Soon",
    },
  };
};
