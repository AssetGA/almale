const Tooltip = ({ children, text }) => {
  return (
    <div className="relative group">
      {/* Элемент, на который наводится курсор */}
      {children}
      {/* Подсказка */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-green text-white text-sm py-1 px-2 rounded-lg">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
