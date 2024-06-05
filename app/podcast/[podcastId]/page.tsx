import React from "react";

const PodcastDetails = ({ params }: { params: { podcastId: string } }) => {
  return <p className="text-white-1">PodcastDetails for podcast id {params.podcastId}</p>;
};

export default PodcastDetails;
