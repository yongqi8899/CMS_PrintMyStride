const Img = ({ src, title}) => {
  return (
      <figure className="overflow-hidden bg-secondary">
        <img
          src={src}
          alt={title}
          onError={(e) => {
            e.target.src =
              "https://i0.wp.com/port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png?fit=1200%2C800&ssl=1";
          }}
          className="!object-cover w-full h-full transition-transform duration-500 ease-in-out transform h-min-48 hover:scale-110" 
        />
      </figure>
  );
};
export default Img;
