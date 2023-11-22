"use client";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { IImage } from "@/types";
import GalleryTab from "./gallery-tab";

interface IGalleryProps {
  images: IImage[];
}

const Gallery = ({ images }: IGalleryProps) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>

      <Tab.Panels className="w-full aspect-square">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className="h-full w-full aspect-square relative sm:rounded-lg overflow-hidden">
              <Image
                fill
                alt="Image"
                src={image.url}
                className="object-cover object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;
