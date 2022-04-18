import style from "../styles/home.module.css";
import components from "../styles/app.module.css";
import heroImgSrc from "../img/hero-img.png";
import Card from "../components/Card";

export const Home = () => {
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

      <main>
        <section id="categories" className={style.categories}>
          <h2 className={style.title}>
            Choose Your <br></br> <span>Category</span>
          </h2>

          <div className={style.categoriesContainer}>
            <Card href={`/category/id`} bg={heroImgSrc}>
              Desktop
            </Card>
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
