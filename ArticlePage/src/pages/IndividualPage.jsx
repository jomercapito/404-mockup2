import Footer from "../sections/Footer";
import Individual from "../sections/Individual";
import Navbar from "../sections/navbar";
import ArticleContentLayout from "../components/IndividualArticleContentLayout";

function IndividualPage() {
  return (
    <>
      <Navbar />
      <Individual />
      <ArticleContentLayout />
      <Footer />
    </>
  );
}

export default IndividualPage;
