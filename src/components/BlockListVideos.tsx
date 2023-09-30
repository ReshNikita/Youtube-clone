import { FC } from "react";

import { Stack } from "@mui/material";

import { VideoInfo } from "../types";

import { VideoBlockCard } from ".";

interface BlockListVideoProps {
  videos: VideoInfo[];
}

const BlockListVideos: FC<BlockListVideoProps> = ({ videos }) => (
  <Stack
    flexWrap="wrap"
    flexDirection="row"
    justifyContent="center"
    mt={1}
    gap={2}
    sx={{
      "@media (max-width: 1005px)": {
        justifyContent: "start",
        gap: 0.5,
      },
    }}
  >
    {Object.values(videos).map((item, index: number) => (
      <VideoBlockCard
        key={index}
        id={item?.id.videoId}
        title={item?.snippet.title}
        img={item?.snippet.thumbnails.high.url}
        channelTitle={item?.snippet.channelTitle}
      />
    ))}
  </Stack>
);

export default BlockListVideos;
