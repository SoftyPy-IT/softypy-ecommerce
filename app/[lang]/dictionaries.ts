export const getDictionary = async (lang: string) => {
  switch (lang) {
    case "bn":
      return import("./dictionaries/bn.json").then((m) => m.default);
    case "en":
    default:
      return import("./dictionaries/en.json").then((m) => m.default);
  }
};
