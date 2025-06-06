import "./Article.css";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import ballet1 from "../assets/images/banners/ballet-banner-1.svg";
import ballet2 from "../assets/images/banners/ballet-banner-2.svg";
import broadway1 from "../assets/images/banners/broadway-banner-1.svg";
import broadway2 from "../assets/images/banners/broadway-banner-2.svg";
import musicals1 from "../assets/images/banners/musicals-banner-1.svg";
import musicals2 from "../assets/images/banners/musicals-banner-2.svg";

const categories = ["All", "Broadway", "Musicals", "Ballet"];

const articles = [
  {
    category: "Broadway",
    items: [
      {
        title: "An exclusive interview with David Brown - Mr. Piano man",
        image: broadway1,
        date: "04/18/2021",
      },
      {
        title: "An exclusive interview with David Brown - Mr. Piano man",
        image: broadway2,
        date: "04/18/2021",
      },
    ],
  },
  {
    category: "Musicals",
    items: [
      {
        title: "An exclusive interview with David Brown - Mr. Piano man",
        image: musicals1,
        date: "04/18/2021",
      },
      {
        title: "An exclusive interview with David Brown - Mr. Piano man",
        image: musicals2,
        date: "04/18/2021",
      },
    ],
  },
  {
    category: "Ballet",
    items: [
      {
        title: "An exclusive interview with David Brown - Mr. Piano man",
        image: ballet1,
        date: "04/18/2021",
      },
      {
        title: "An exclusive interview with David Brown - Mr. Piano man",
        image: ballet2,
        date: "04/18/2021",
      },
    ],
  },
];

export default function ArticleComponent() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  return (
    <div className="body-article">
      <div className="title-section">
        <h3>Article</h3>
        <div className="selector">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="dropdown-button"
          >
            {selectedCategory}
            <ChevronDown className=".icon-chevron" />
          </button>

          {dropdownOpen && (
            <div className="dropdown-menu">
              <div className="py-1">
                {categories.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSelectedCategory(option);
                      setDropdownOpen(false);
                    }}
                    className={`dropdown-item ${
                      selectedCategory === option ? "bg-neutral-800" : ""
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {filteredArticles.map((section) => (
        <div key={section.category} className="article-section">
          <div className="section-header">
            <h3 className="section-title">{section.category}</h3>
            <div className="section-navigation">
              <button>
                <ChevronLeft className="icon" />
              </button>
              <button>
                <ChevronRight className="icon" />
              </button>
            </div>
          </div>
          <div className="article-cards">
            {section.items.map((item, idx) => (
              <div key={idx} className="article-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="article-image"
                />
                <div className="article-content">
                  <h4 className="article-title">{item.title}</h4>
                  <p className="article">
                    1-on-1 interview with the legendary band and an inside look
                    at their journey through the years. A read you won’t want to
                    miss!
                  </p>
                  <p className="article-published">Published:</p>
                  <p className="article-date">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
