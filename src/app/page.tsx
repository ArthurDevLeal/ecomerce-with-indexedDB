"use client";

import Loading from "@/components/Loading";
import { Product } from "@/components/Products/ProductIndex";
import { ShoopingCart } from "@/components/ShoopingCart/ShoopingCartIndex";
import { ProductsList } from "@/data/ProductsList";
import { addNewItem } from "@/hooks/addNewItem";
import { findItemById } from "@/hooks/findItemById";
import {
  clearDB,
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

  function handleClickRemove(id: number) {
    setShoopingCartList((currentCart) => {
      const updatedCart = currentCart.map(item => 
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
      return updatedCart.filter(item => item.quantity > 0);
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
    }else{
      clearDB()
    }
  }, [shoopingCartList]);

  return (
    <main className="items-center h-full relative">
      <ShoopingCart.OpenButton
        menuIsOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen}
      />
      {menuIsOpen && (
        <ShoopingCart.Root>
          {loading && <Loading />}
          {!loading &&
            shoopingCartList.map((item) => {
              return (
                <div className="flex w-full gap-2" key={item.id}>
                  <ShoopingCart.Item.Image image={item.image} />
                  <div className="flex flex-col grow items-start">
                  <ShoopingCart.Item.Name name={item.name} />
                  <ShoopingCart.Item.Price price={item.price} />
                  <ShoopingCart.Item.RemoveButton
                    onClick={() => handleClickRemove(item.id)}
                    id={item.id}
                  />
                  <ShoopingCart.Item.Quantity quantity={item.quantity} />
                  </div>
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
