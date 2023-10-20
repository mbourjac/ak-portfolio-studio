export const getEmbedYoutubeUrl = (url: string): string | null => {
  // Regex to match 'youtube.com/embed/', 'youtube.com/watch?v=', or 'youtu.be/' followed by the 11-characters Youtube video id, which is captured in the videoId group
  const pattern =
    /(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)(?<videoId>[A-Za-z0-9_-]{11})/;

  const match = url.match(pattern);

  if (!match) {
    return null;
  }

  return `https://www.youtube.com/embed/${match.groups?.videoId}`;
};
