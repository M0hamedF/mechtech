import { useSelector } from "react-redux";

import style from "../styles/home.module.css";
import components from "../styles/app.module.css";
import heroImgSrc from "../img/hero-img.png";
import Card from "../components/Card";

export const Home = () => {
  let catagories;
  const products = useSelector((state) => state.products);
  if (products) {
    catagories = Object.keys(products).filter((key) => key !== "top");
  }

  return (
    <>
      <header id="hero" className={style.hero}>
        <div className={style.intro}>
          <h1>
            <pre>
              If You Are A <span>True Gamer!!</span>
            </pre>
            <pre>
              This Is Your <span>Destination</span>
            </pre>
          </h1>
          <p>Its not just shopping .. its a life style</p>
          <a href="#categories" className={components.btn}>
            Shop Now
          </a>
        </div>

        <div className={style.image}>
          <img src={heroImgSrc} alt="Headphones" />
        </div>
      </header>

      <main className={style.home}>
        <section id="categories" className={style.categories}>
          <h2 className={style.title}>
            Choose Your <br></br> <span>Category</span>
          </h2>

          <div className={style.categoriesContainer}>
            {products &&
              catagories.map((category) => (
                <Card
                  key={category}
                  href={`/category/${category.toLowerCase()}`}
                  bg={`https://seefshop.herokuapp.com${
                    products[category][0].product_image1 || heroImgSrc
                  }`}
                >
                  {category}
                </Card>
              ))}
          </div>
        </section>

        <section className="top-products">
          <h2 className={style.title}>Top Products</h2>

          <div className={style.topContainer}>
            <Card href={`/category/id`} bg={heroImgSrc}>
              Desktop
            </Card>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
