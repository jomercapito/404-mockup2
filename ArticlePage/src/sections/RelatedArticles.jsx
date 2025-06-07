import articleImage from "../assets/images/banners/musicals-banner-1.svg";

function RelatedArticles() {
  //* This articles array of object is for demonstration only. mockDb.json will be used for the actual data fetching.
  const articles = [
    {
      articleID: 1,
      articleTitle: "Interview with the Ant",
      publishDate: "04/20/25",
      articleTags: ["Ant Musical", "Ant Theater", "Ant Comedy"],
      author: {
        name: "James Johnson",
        role: "Ant at Red Curtain Addict",
        profileImage: "./assets/images/banners/author-profile.svg",
      },
      articleHeading:
        "1-on-1 interview with the legendary Ant and an inside look at their journey through out the years.",
      articleDetail:
        "Ant Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      articleSecondTitle: "This is the Ant",
      articleSecondDetail: [
        "Ant At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        "Ant At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
      ],
      articleImage: "./assets/images/banners/broadway-banner-1.svg",
    },
    {
      articleID: 2,
      articleTitle: "Interview with the Rodent",
      publishDate: "04/22/2024",
      articleTags: ["Rod Musical", "Rod Theater", "Rod Comedy"],
      author: {
        name: "James Johnson",
        role: "Rodent at Red Curtain Addict",
        profileImage: "./assets/images/banners/author-profile.svg",
      },
      articleHeading:
        "1-on-1 interview with the legendary Rodent and an inside look at their journey through out the years.",
      articleDetail:
        "Rodent Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      articleSecondTitle: "This is the Rodent",
      articleSecondDetail: [
        "Rodent At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        "Rodent At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
      ],
      articleImage: "./assets/images/banners/broadway-banner-2.svg",
    },
    {
      articleID: 3,
      articleTitle: "Interview with the Beatles",
      publishDate: "04/24/2023",
      articleTags: ["Musical", "Theater", "Comedy"],
      author: {
        name: "James Johnson",
        role: "Editor at Red Curtain Addict",
        profileImage: "./assets/images/banners/author-profile.svg",
      },
      articleHeading:
        "1-on-1 interview with the legendary Beatles and an inside look at their journey through out the years.",
      articleDetail:
        "Beatles Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      articleSecondTitle: "This is the Beatles",
      articleSecondDetail: [
        "Beatles At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        "Beatles At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
      ],
      articleImage: "./assets/images/banners/musicals-banner-1.svg",
    },
  ];
  return (
    <>
      <div className="space-y-6 tracking-wide">
        <h1 className="text-2xl font-bold pt-6 mb-4">Related articles</h1>
        {articles.map((article) => (
          <div
            key={article.articleID}
            className="flex items-center bg-neutral-800 min-h-44 rounded-2xl space-x-4 cursor-pointer"
          >
            <img
              src={articleImage}
              alt={article.articleTitle}
              className="w-[40%] h-[50%] py-3 pl-3 rounded-4xl"
            />
            <div className="text-left pt-3 md:pt-0 pr-2">
              <h2 className="text-xl font-bold text-white mb-1 tracking-wide">
                {article.articleTitle}
              </h2>
              <h3 className="text-sm pb-4 text-neutral-400 mb-1 tracking-wide">
                {article.articleHeading}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default RelatedArticles;
