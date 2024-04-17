"use client";

import Modal from "@/components/Modal";
import PhotoItem from "@/components/PhotoItem";
import { photoList } from "@/data/photoList";
import { Photo } from "@/types/Photo";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [imageOfModal, setImageOfModal] = useState<string>("");

  const openModal = (id: number) => {
    const photo = photoList.find((item) => item.id === id);
    if (photo) {
      setImageOfModal(photo.url);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  }
  return (
    <div className="mx-2">
      <h1 className="text-center text-3xl font-bold my-10">
        Fotos Intergaláticas
      </h1>

      <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photoList.map((item) => (
          <div key={item.id}>
            <PhotoItem
              key={item.id}
              photo={item}
              onClick={() => {
                openModal(item.id);
              }}
            />
          </div>
        ))}
      </section>
      {showModal && 
        <Modal image={imageOfModal} closeModal={closeModal}/>
      }
    </div>
  );
}
