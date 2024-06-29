import React from "react";
import Image from "next/image";

const PodcastDetails = ({ params }: { params: { podcastId: string } }) => {
  return (
    <section className="flex w-full flex-col">
      <header className="mt-9 flex items-center justify-between">
        <h1 className="text-20 font-bold text-white-1">Currenty Playing</h1>
        <figure className="flex gap-3">
          <Image
            src="/icons/headphone.svg"
            width={24}
            height={24}
            alt="headphone"
          />
        </figure>
      </header>
    </section>
  );
};

export default PodcastDetails;
