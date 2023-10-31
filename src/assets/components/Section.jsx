import data from "../data.json";

const Section = () => {
  return data.map((elem, index) => {
    console.log(elem);

    return (
      <section key={index}>
        <h2>{elem.category}</h2>
        <div>
          {elem.images.map((image, imageIndex) => {
            return <img key={imageIndex} src={image} alt="" />;
          })}
        </div>
      </section>
    );
  });
};

export default Section;
