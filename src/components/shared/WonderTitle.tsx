const WonderTitle = ({
  title,
  className = "",
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h1 className={className}>
      {title.split(" ").map((word, index) => {
        if (["the", "of"].includes(word.toLowerCase())) {
          return (
            <span key={index} className="text-lg">
              {index > 0 ? <br /> : null}
              {word.toLowerCase()}
              {index === 0 ? <br /> : null}
            </span>
          );
        } else {
          return word;
        }
      })}
    </h1>
  );
};

export default WonderTitle;
