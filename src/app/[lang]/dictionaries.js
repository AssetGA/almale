import "server-only";

const dictionaries = {
  kz: () =>
    import("../../../public/dictionaries/kz.json").then(
      (module) => module.default
    ),
  en: () =>
    import("../../../public/dictionaries/en.json").then(
      (module) => module.default
    ),
  ru: () =>
    import("../../../public/dictionaries/ru.json").then(
      (module) => module.default
    ),
};

export const getDictionary = async (locale) => dictionaries[locale]();
