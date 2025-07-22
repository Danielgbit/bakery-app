const Button = ({ href = "#", children = '' }) => {
  return (
    <div>
      <a
        href={href}
        className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition"
      >
        {children}
      </a>
    </div>
  );
};

export default Button;
