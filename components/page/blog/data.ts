import superagent from "superagent";

export const fetchPosts = async () => {
  const DEV_TO_URL = "https://dev.to/api/articles";

  try {
    const result = superagent
      .get(DEV_TO_URL)
      .query({ username: "anubra266", state: "all" })
      .then((res) => {
        return res.body;
      });
    return result;
  } catch (error) {
    console.log("WE HAVE FETCH POST ERROR", error);
  }
};

export const schemes = [
  "blue",
  "cyan",
  "gray",
  "green",
  "orange",
  "pink",
  "purple",
  "red",
  "teal",
  "yellow",
  "linkedin",
  "facebook",
  "messenger",
  "whatsapp",
  "twitter",
  "telegram",
];
