import ArticleContent from "../sections/ArticleContent";
import RelatedArticles from "../sections/RelatedArticles";

function ArticleContentLayout() {
  return (
    <>
      <main className="w-full bg-black text-white py-6 px-6 flex justify-center">
        <div className="max-w-screen-xl mx-auto w-full flex flex-col justify-between md:flex-row">
          <section className="w-full md:w-[70%] mx-auto md:mr-40">
            <ArticleContent />
          </section>

          <aside className="w-full md:w-[45%] space-y-6 ml-0 md:ml-4">
            <RelatedArticles />
          </aside>
        </div>
      </main>
    </>
  );
}

export default ArticleContentLayout;
