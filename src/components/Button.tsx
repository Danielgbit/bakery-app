const Button = ({ href = "#", children = '' }) => {
  return (
    <div>
      <a
        href={href}
        className="bg-button text-tertiary text-sm hover:text-amber-400 font-semibold py-2 px-4 rounded-xl transition"
      >
        {children}
      </a>
    </div>
  );
};

export default Button;
