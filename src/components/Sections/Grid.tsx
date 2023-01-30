"use client";

import { Tvideo } from "../../types/apiTypes";
import Thumbnail from "./Thumbnail";
import VideoCard from "./VideoCard";

interface IProps {
  videos: Tvideo[];
  activeFavorite: boolean;
  displayFavorite: boolean;
  title: string;
}

export default function Grid({
  videos,
  activeFavorite,
  displayFavorite,
  title,
}: IProps) {
  return (
    <div className="flex flex-col p-3">
      <p className="text-lg md:text-2xl p-3">{title}</p>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {videos
          .filter((video: Tvideo) => video.display === true)
          .map((video: Tvideo) => (
            <div key={video.id} className="relative shadow-2xl">
              <Thumbnail video={video} />
              <VideoCard
                video={video}
                activeFavorite={activeFavorite}
                displayFavorite={displayFavorite}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
