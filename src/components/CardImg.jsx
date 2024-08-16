export default function CardImg({ src, alt, title = "" }) {
  return (
    <figure>
      <img
        src={src}
        alt={alt}
        onError={(e) => {
          e.target.src =
            "https://i0.wp.com/port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png?fit=1200%2C800&ssl=1";
        }}
        className="object-cover w-full h-48"
      />
      {title && (
        <figcaption className="m-auto mt-2 text-center">{title}</figcaption>
      )}
    </figure>
  );
}
