import { create } from "zustand";

export const showSideMenu = create((set) => ({
  value: false,
  openSideMenu: () => set(() => ({ value: true })),
  closeSideMenu: () => set(() => ({ value: false })),
}));

export const showModalCart = create((set) => ({
  showCart: false,
  productsCart: [
    { name: "iPhone X", price: 400, qty: 3 },
    { name: "iPhone 10", price: 500, qty: 3 },
    // { name: "iPhone 11", price: 600, qty: 3 },
    // { name: "iPhone 12", price: 700, qty: 3 },
  ],
  openModalCart: () => set(() => ({ showCart: true })),
  closeModalCart: () => set(() => ({ showCart: false })),
}));
