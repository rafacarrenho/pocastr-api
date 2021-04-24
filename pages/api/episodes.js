// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import api from "./server.json";

export default function getEpisode({ query: { _limit } }, res) {
  const response = api.episodes.slice(0, _limit);
  res.status(200).json(response);
}
