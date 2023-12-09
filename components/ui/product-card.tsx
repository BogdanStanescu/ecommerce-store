"use client";

import { IProduct } from "@/types";
import { Expand, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import { useRouter } from "next/navigation";
import { usePreviewModal } from "@/hooks/use-preview-modal";
import { MouseEventHandler } from "react";
import { useCart } from "@/hooks/use-cart";

interface IProductProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProductProps) => {
  const cart = useCart();
  const router = useRouter();
  const previewModal = usePreviewModal();

  const handleClick = () => router.push(`/product/${product?.id}`);

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(product);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(product);
  };

  return (
    <div
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
      onClick={handleClick}
    >
      {/* Images and Actions */}

      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          className="aspect-square object-cover rounded-md"
          src={product?.images?.[0]?.url}
          fill
          alt={product.name}
        />

        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="font-semibold text-lg">
        <p>{product.name}</p>
        <p className="text-sm text-gray-500 font-normal">
          {product.category.name}
        </p>
      </div>

      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={+product.price} />
      </div>
    </div>
  );
};

export default ProductCard;
