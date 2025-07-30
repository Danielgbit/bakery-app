const Button = ({ href = "#", children = '' }) => {
  return (
    <div>
      <a
        href={href}
        className="bg-button text-button text-sm  font-semibold py-2 px-4 rounded-4xl transition"
      >
        {children}
      </a>
    </div>
  );
};

export default Button;
