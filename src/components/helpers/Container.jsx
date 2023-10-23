import "./Container.css"

const Container = ({ children }) => {
  return (
    <div className="experience-details-container">
      <div className="about-containers">
        {children}
      </div>
    </div>
  );
};

export default Container;
