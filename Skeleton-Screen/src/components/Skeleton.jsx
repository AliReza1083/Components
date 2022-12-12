import "./Skeleton.css";

const Skeleton = ({ shape }) => {
  const classes = `skeleton ${shape}`;

  return <div className={classes}></div>;
};

export default Skeleton;
