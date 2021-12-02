export interface TwitterNameAndGihubRepositoriesView {
  twitter: {
    name: string;
  };
  github: {
    repositories: {
      url: string;
    }[];
  };
}
