"use client";

import Loading from "@/components/Loading";
import { Product } from "@/components/Products/ProductIndex";
import { ShoopingCart } from "@/components/ShoopingCart/ShoopingCartIndex";
import { ProductsList } from "@/data/ProductsList";
import { addNewItem } from "@/hooks/addNewItem";
import { findItemById } from "@/hooks/findItemById";
import {
  createIndexedDb,
  getItemsAtDB,
  modifyItemsAtDB,
} from "@/hooks/indexDB";
import { updateQuantity } from "@/hooks/updateQuantity";
import { ProductType } from "@/types/ProductType";
import { useEffect, useState } from "react";

function page() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [shoopingCartList, setShoopingCartList] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  function handleClickAdd(id: number) {
    setShoopingCartList((currentCart) => {
      const item = findItemById(currentCart, id);
      if (item) {
        return updateQuantity(currentCart, id, 1);
      } else {
        const newItem = findItemById(ProductsList, id);
        return newItem ? addNewItem(currentCart, newItem) : currentCart;
      }
    });
  }

  useEffect(() => {
    createIndexedDb();
    getItemsAtDB((item) => setShoopingCartList(item));
    setLoading(false);
  }, []);
  useEffect(() => {
    if (shoopingCartList.length > 0) {
      modifyItemsAtDB(shoopingCartList);
    }
  }, [shoopingCartList]);

  function handleClickRemove(id: number) {
    setShoopingCartList((currentCart) => {
      const item = findItemById(currentCart, id);
      if (!item) return currentCart;
      if (item.quantity <= 1) {
        return currentCart.filter((item) => item.id !== id);
      } else {
        return updateQuantity(currentCart, id, -1);
      }
    });
  }

  return (
    <main className="place-items-center items-center h-full relative">
      <ShoopingCart.OpenButton
        menuIsOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen}
      />
      {menuIsOpen && (
        <ShoopingCart.Root>
          {loading && <Loading />}
          {shoopingCartList.length > 0 &&
            !loading &&
            shoopingCartList.map((item) => {
              return (
                <div className="flex w-full justify-between" key={item.id}>
                  <div className="flex">
                    <ShoopingCart.Item.Image image={item.image} />
                    <div className="flex flex-col ">
                      <ShoopingCart.Item.Name name={item.name} />
                      <div className="">
                        <ShoopingCart.Item.Price price={item.price} />
                        <ShoopingCart.Item.RemoveButton
                          onClick={() => handleClickRemove(item.id)}
                          id={item.id}
                        />
                      </div>
                    </div>
                  </div>
                  <ShoopingCart.Item.Quantity quantity={item.quantity} />
                </div>
              );
            })}
        </ShoopingCart.Root>
      )}
      <div className="flex flex-col gap-2 p-4">
        {ProductsList.length > 0 &&
          ProductsList.map((item) => {
            return (
              <Product.Root key={item.id}>
                <Product.Image image={item.image} />
                <Product.Price price={item.price} />
                <Product.Name name={item.name} />
                <Product.AddButton
                  onClick={() => handleClickAdd(item.id)}
                  id={item.id}
                />
              </Product.Root>
            );
          })}
      </div>
    </main>
  );
}

export default page;
