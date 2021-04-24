import api from "../server.json";

export default function getEpisode({ query: { id } }, res) {
  const result = api.episodes.filter((a) => a.id === id);
  res.status(200).json(result[0]);
}
