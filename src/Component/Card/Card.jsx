export const Card = ({ title, image }) => {
  return (
    <div class="card">
      <div class="imgbox">
        <img class="img" src={image} alt="image"/>
        <h2 class="h2">{title}</h2>
      </div>
    </div>
  );
};
