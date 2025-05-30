import React from "react";
import "./Hero.css";

export default function InterviewPage() {
  return (
    <div className="interview-page">
      <header className="hero">
        <main className="articles">
          <div className="hero-content">
            <h1 className="hero-title">Interview with the Beatles</h1>
            <p className="hero-description">
              1-on-1 interview with the legendary band and an inside look at
              their journey through out the years.
            </p>
            <button className="read-more">Read more</button>
          </div>
        </main>
      </header>
    </div>
  );
}
