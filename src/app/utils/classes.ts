export class SiteFeatures {
  scroll(el: any): void {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
