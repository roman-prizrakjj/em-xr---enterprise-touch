export interface ServicePackage {
  title: string;
  subtitle: string;
  price?: string;
  description: string;
  features: string[];
  cta: string;
}

export interface SeoResult {
  keywords: string[];
  summary: string;
  sources: Array<{ title: string; uri: string }>;
}

export interface VideoGenerationState {
  isGenerating: boolean;
  videoUrl: string | null;
  error: string | null;
  progressMessage: string;
}