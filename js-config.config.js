module.exports = {
  interactiveMessageConfig: {
    fetchMyIssuesParam: {
      owner: "bird-studio",
      repo: "stylelint-config",
      state: "open",
      assignUser: "akira-toriyama",
    },
    scope: [
      ...require("fs")
        .readdirSync("./lib")
        .map((v) => ({
          description: v,
          value: v,
        })),
      { description: "other: Other directory", value: "other" },
    ],
  },
};
