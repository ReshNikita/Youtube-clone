import { FC } from "react";
import { Stack } from "@mui/material";

import { VideoInfo } from "../types";

import { VideoListCard } from ".";

interface ListVideoProps {
  videos: VideoInfo[];
}

const ListVideos: FC<ListVideoProps> = ({ videos }) => (
  <Stack alignItems="center" flexDirection="column" gap={2}>
    {Object.values(videos).map((item, index: number) => (
      <VideoListCard
        key={index}
        id={item?.id.videoId}
        title={item?.snippet?.title}
        img={item?.snippet?.thumbnails.high.url}
        channelTitle={item?.snippet?.channelTitle}
      />
    ))}
  </Stack>
);

export default ListVideos;
