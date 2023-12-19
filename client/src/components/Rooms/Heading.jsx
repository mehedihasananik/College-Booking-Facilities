const Heading = ({ title, subtitle, center }) => {
  return (
    <div className={center ? "text-center pt-20" : "text-start"}>
      <div className="text-2xl font-bold">{title}</div>
      <div className="font-light text-neutral-500 mt-2">{subtitle}</div>
    </div>
  );
};

export default Heading;
