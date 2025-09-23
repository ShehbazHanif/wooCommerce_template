import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";
import HeroBanner from "../components/HeroBanner";
import products from "../mockData/mockData";

const Home = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <Header />

        <HeroBanner
          title="Featured Category Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
          buttonText="Read more"
        />
        <div className="container mx-auto p-4 md:p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4">
              <Filters />
            </div>
            <div className="md:w-3/4">
              <h1 className="text-3xl font-bold mb-6">
                All Products and Filters Block
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Home;
