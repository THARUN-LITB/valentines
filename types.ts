export type AppState = 
  | 'intro' 
  | 'proposal' 
  | 'celebration' 
  | 'menu' 
  | 'letter' 
  | 'gallery' 
  | 'quiz'
  | 'final'
  | 'valentine-week';

export interface Photo {
  url: string;
  caption: string;
  rotation: number;
}