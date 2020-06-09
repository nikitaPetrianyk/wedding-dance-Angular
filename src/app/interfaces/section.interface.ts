export interface Section {
  meta: SectionMeta;
  _id: string;
  action?: SectionAction;
  type: string;
  content: SectionContent[];
}

export interface Sections {
  content: Section[];
}

export interface SectionMeta {
  title: string;
  description: string;
  location?: string;
  heroImage?: string;
}

export interface SectionContent {
  style?: string[];
  _id?: string;
  title?: string;
  url?: string;
  name?: string;
  direction?: string;
  workExperience?: string;
  teachExperience?: string;
}

export interface SectionAction {
  title: string;
  url: string;
}

export interface InfoSectionForUpdate {
  meta: SectionMeta;
  content: SectionContent[];
}
