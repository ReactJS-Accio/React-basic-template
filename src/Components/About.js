import "./styles.css";

const About = (props) => (
  <div className="about">
    <h1>About Us</h1>
    <p>
      Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Exercitationem alias, animi quod, totam voluptate sed repudiandae unde
      quas dolorum ea sint praesentium quos nam aliquid doloremque. Placeat
      exercitationem quasi blanditiis laudantium illo, vero laboriosam at quae
      repellat odio ratione reprehenderit ducimus beatae! Consequatur reiciendis
      minima aliquid nobis accusamus exercitationem libero alias ad vitae
      sapiente ducimus cumque, obcaecati, inventore distinctio illum itaque.
      Sit, tempore doloremque. Reprehenderit ad perspiciatis cumque fugiat
      officiis? Iste blanditiis quasi corrupti vel laborum temporibus
      consectetur, mollitia magnam officiis aperiam ducimus sed unde nostrum
      eaque modi nesciunt est quas, facilis cumque quidem quod totam veritatis
      ipsum optio. Rem.
    </p>
    {props.children}
  </div>
);

export default About;
