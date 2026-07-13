
interface Settings {
  episodeServers: string[];
  supportsDub: boolean;
}
interface SearchOptions {
  query: string;
  dub: boolean;
  media: any;
}
interface SearchResult {
  id: string;
  title: string;
  url: string;
  subOrDub: string;
}
interface Episode {
  id: string;
  number: number;
  title?: string;
  url: string;
}
interface EpisodeDetails extends Episode {}
interface Subtitle {
  id: string;
  url: string;
  language: string;
  isDefault: boolean;
}
interface VideoSource {
  url: string;
  quality: string;
  type: string;
  subtitles?: Subtitle[];
}
interface EpisodeServer {
  server: string;
  headers: Record<string, string>;
  videoSources: VideoSource[];
}
