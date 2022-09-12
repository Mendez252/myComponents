import "./Card.css";

const Card = ({ title, image, description }) => {
  const shortText = () => {
    if (description?.length > 50) {
      let shortDescription =
        description.substring(0, 200) + "..." + " READ MORE";
      return shortDescription;
    }
  };

  return (
    <div className="card_container">
      <div className="title">
        <div className="card_logo">S</div>
        <p>Shrimp and Chorizo Paella</p>
        <i className="fa-solid fa-ellipsis-vertical"></i> {/* vertical menu */}
      </div>
      <div className="image">
        <img
          src="https://i.ytimg.com/vi/DZ-DkAtQrGo/maxresdefault.jpg"
          alt="paella_dish"
        />
      </div>
      <div className="description">{shortText()}</div>
      <div className="like_share">
        <div className="social_icons">
          <i className="fa-regular fa-heart"></i> {/* heart */}
          <i className="fa-sharp fa-solid fa-share-nodes"></i> {/* share */}
        </div>
        <i className="fa-sharp fa-solid fa-caret-down"></i> {/* arrow-down */}
      </div>
    </div>
  );
};

export default Card;
