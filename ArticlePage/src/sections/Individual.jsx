import "./Hero.css";
import Ellipse from "../assets/images/logos/Ellipse.svg";

const categories = ["Theater", "Musical", "Comedy"];

export default function Individual() {
  return (
    <div className="interview-page">
      <header className="hero">
        <main className="articles">
          <div className="button-container">
            {categories.map((category) => (
              <button key={category} className="button-categories">
                {category}
              </button>
            ))}
          </div>
        </main>
      </header>
      <div className="author-card">
        <div className="author-left">
          <img src={Ellipse} alt="James Johnson" className="author-avatar" />
          <div>
            <p className="author-name">James Johnson</p>
            <p className="author-title">Editor at Red Curtain Addict</p>
          </div>
          <button className="follow-button">Follow</button>
        </div>
        <div className="author-right">
          <p>Published:</p>
          <p>04/18/2021</p>
        </div>
      </div>
    </div>
  );
}
