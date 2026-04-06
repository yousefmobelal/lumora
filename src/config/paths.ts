export const paths = {
  intro: {
    path: "/",
    getHref: () => "/",
  },
  wonder: {
    path: "/wonder/:wonderId",
    getHref: (wonderId: string, tabIndex: number) =>
      `/wonder/${wonderId}?t=${tabIndex}`,
  },
  artifactDetails: {
    path: `/wonder/:wonderId/artifact/:artifactId`,
    getHref: (wonderId: string, artifactId: string) =>
      `/wonder/${wonderId}/artifact/${artifactId}`,
  },
};
