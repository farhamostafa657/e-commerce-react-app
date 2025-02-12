import image from "../../assets/images/404.png";
function NotFound() {
  return (
    <div>
      <img src={image} alt="" style={{ width: "90vw", height: "90vh" }} />
    </div>
  );
}

export default NotFound;
