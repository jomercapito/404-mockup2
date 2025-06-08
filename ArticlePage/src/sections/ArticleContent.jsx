import React from "react";
import articleImage from "../assets/images/banners/musicals-banner-1.svg";

function ArticleContent() {
  return (
    <>
      <section>
        <div className="space-y-6 tracking-wide">
          <h1 className="text-5xl py-4 font-bold">
            Interview with the Beatles
          </h1>
          <h2 className="text-2xl py-4 font-bold">
            1-on-1 interview with the legendary band and an inside look at their
            journey through out the years.
          </h2>

          <p className="text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <h2 className="text-2xl font-bold mt-10">This is a title</h2>

          <p className="text-base leading-relaxed">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio.
          </p>

          <p className="text-base leading-relaxed">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio.
          </p>

          <div className="flex justify-center py-6">
            <img
              src={articleImage}
              alt="The Beatles performing"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default ArticleContent;
