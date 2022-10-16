interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "PageInfo";
  name: string;
  role: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  title: string;
}

export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  title: string;
}

export interface Project extends SanityBody {
  linkToCode: string;
  linkToLive: string;
  technologies: Technology[];
  title: string;
  image: Image[];
  summary: string;
}
