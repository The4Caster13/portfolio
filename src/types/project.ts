export interface MediaItem {
  url: string;
  type: "image" | "video";
}
//fixes the unorganized string problem 
export interface ProgressionStage {
  stage: string;
  title: string;
  description: string;
  image: string;
  icon?: string;
  details: {
    process: string;
    tools: string[];
    timeline: string;
    deliverables: string[];
  };
}

export interface Project {
  title: string;
  image: string;
  description: string;
  year: string;
  location: string;
  featured: boolean;
  construction?: boolean;
  images?: (string | MediaItem)[];
  progressionStages?: ProgressionStage[];
}
