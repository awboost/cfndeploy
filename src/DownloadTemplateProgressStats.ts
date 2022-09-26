import { ProgressStats } from '@awboost/cfnassets';
import { TemplateLocation } from './TemplateLocation.js';

export interface DownloadTemplateProgressStats extends ProgressStats {
  location: TemplateLocation;
}
