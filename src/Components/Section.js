import "./styles.css";

const Section = ({ title, content, children }) => (
  <div className="section">
    <h1>{title}</h1>
    <p>{content}</p>
    {children}
  </div>
);

export default Section;
