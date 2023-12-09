import { create } from "zustand";
import { IProduct } from "../types";

interface PreviewModalStore {
  isOpen: boolean;
  data?: IProduct;
  onOpen: (data: IProduct) => void;
  onClose: () => void;
}

export const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  onOpen: (data) => set({ isOpen: true, data }),
  onClose: () => set({ isOpen: false }),
}));
