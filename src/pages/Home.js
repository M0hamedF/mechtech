import { useSelector } from "react-redux";

import { textToURL } from "../utils/helpers";

import style from "../styles/home.module.css";
import components from "../styles/app.module.css";
import heroImgSrc from "../img/hero-img.png";
import Card from "../components/Card";

export const Home = () => {
  let catagories;
  const products = useSelector((state) => state.products);
  if (products) {
    catagories = Object.keys(products);
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
                  href={`/products/${textToURL(category)}`}
                  bg={`https://seefshop.herokuapp.com${
                    products[category][0].product_image1 || heroImgSrc
                  }`}
                >
                  {category}
                </Card>
              ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
