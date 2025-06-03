import React from "react";
import "./Hero.css";

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
    </div>
  );
}
