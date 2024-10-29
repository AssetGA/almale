import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product, lang, t }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden p-1">
      {/* Изображение товара */}
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={300}
        height={300}
        className="w-full object-cover hover:opacity-90"
      />

      <div className="p-4">
        {/* Название товара */}
        <h2
          className="text-xl font-semibold text-gray-800"
          style={{ fontFamily: "Montserrat-Bold" }}
        >
          {product.name}
        </h2>
        <span className="text-sm">{product.diameter}</span>

        {/* Описание товара */}
        <p className="text-gray-600 mt-2">{product.description}</p>

        {/* Цена */}

        {/* Кнопка добавления в корзину */}
        <Link href={`/${lang}/product/` + product._id}>
          <button className="mt-4 bg-green text-white py-2 px-4 rounded-md hover:bg-green-light">
            {t.card.buttonMore}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
