import { $gettext, T } from "common/vm";

/* Theme Styles */

let themes = {
  default: {
    name: "default",
    dark: false,
    sponsor: false,
    colors: {
      application: "#F5F5F5",
      form: "#eeeeee",
      card: "#bdbdbd",
      primary: "#FFCA28",
      "primary-button": "#212121",
      "secondary-dark": "#212121",
      secondary: "#bdbdbd",
      "secondary-light": "#e0e0e0",
      accent: "#757575",
      error: "#e57373",
      info: "#00acc1",
      success: "#4db6ac",
      warning: "#ffd740",
      remove: "#e57373",
      restore: "#64b5f6",
      album: "#ffab00",
      download: "#00bfa5",
      private: "#00b8d4",
      edit: "#00b8d4",
      share: "#9575cd",
      love: "#ef5350",
      terminal: "#333333",
      navigation: "#212121",
      "navigation-home": "#000000",
    },
  },
  grayscale: {
    name: "grayscale",
    dark: true,
    sponsor: false,
    colors: {
      application: "#525252",
      form: "#e5e4e2",
      card: "#444444",
      primary: "#c8bdb1",
      "primary-button": "#726e69",
      "secondary-dark": "#c8bdb1",
      secondary: "#444",
      "secondary-light": "#5E5E5E",
      accent: "#333",
      error: "#e57373",
      info: "#5a94dd",
      success: "#4db6ac",
      warning: "#e3d181",
      love: "#ef5350",
      remove: "#e35333",
      restore: "#64b5f6",
      album: "#ffab40",
      download: "#07bd9f",
      private: "#48bcd6",
      edit: "#48bcd6",
      share: "#0070a0",
      terminal: "#333333",
      navigation: "#353839",
      "navigation-home": "#212121",
    },
  },
  cyano: {
    name: "cyano",
    dark: false,
    sponsor: false,
    colors: {
      application: "#eceff1",
      form: "#eceff1",
      card: "#bdbdbd",
      primary: "#80deea",
      "primary-button": "#757575",
      "secondary-dark": "#757575",
      secondary: "#b0bec5",
      "secondary-light": "#eeeeee",
      accent: "#757575",
      error: "#e57373",
      info: "#00acc1",
      success: "#4db6ac",
      warning: "#ffd740",
      remove: "#e57373",
      restore: "#64b5f6",
      album: "#ffab00",
      download: "#00bfa5",
      private: "#00b8d4",
      edit: "#00b8d4",
      share: "#9575cd",
      love: "#ef5350",
      terminal: "#333333",
      navigation: "#006064",
      "navigation-home": "#37474f",
    },
  },
  raspberry: {
    name: "raspberry",
    dark: false,
    sponsor: false,
    colors: {
      application: "#FDEDF5",
      form: "#fafafa",
      card: "#bdbdbd",
      primary: "#ffb3cc",
      "primary-button": "#EA3495",
      "secondary-dark": "#EA3495",
      secondary: "#F6C5DC",
      "secondary-light": "#FDD8E7",
      accent: "#B994A5",
      error: "#e57373",
      info: "#00acc1",
      success: "#4db6ac",
      warning: "#ffd740",
      remove: "#e57373",
      restore: "#64b5f6",
      album: "#ffab00",
      download: "#00bfa5",
      private: "#00b8d4",
      edit: "#00b8d4",
      share: "#9575cd",
      love: "#ef5350",
      terminal: "#a97599",
      navigation: "#A21F65",
      "navigation-home": "#891A55",
    },
  },
  lavender: {
    name: "lavender",
    dark: false,
    sponsor: false,
    colors: {
      application: "#fafafa",
      form: "#fafafa",
      card: "#bdbdbd",
      primary: "#9ca2c9",
      "primary-button": "#6c6f84",
      "secondary-dark": "#475185",
      secondary: "#dee0ed",
      "secondary-light": "#eef0f6",
      accent: "#8c8c8c",
      error: "#e57373",
      info: "#00acc1",
      success: "#4db6ac",
      warning: "#ffd740",
      remove: "#e57373",
      restore: "#64b5f6",
      album: "#ffab00",
      download: "#00bfa5",
      private: "#00b8d4",
      edit: "#00b8d4",
      share: "#9575cd",
      love: "#ef5350",
      terminal: "#333333",
      navigation: "#1b1e32",
      "navigation-home": "#121421",
    },
  },
  moonlight: {
    name: "moonlight",
    dark: false,
    sponsor: false,
    colors: {
      application: "#eeeeee",
      form: "#eeeeee",
      card: "#bdbdbd",
      primary: "#a5b3c0",
      "primary-button": "#212121",
      "secondary-dark": "#212121",
      secondary: "#bdbdbd",
      "secondary-light": "#e0e0e0",
      accent: "#757575",
      error: "#e57373",
      info: "#00acc1",
      success: "#4db6ac",
      warning: "#ffd740",
      remove: "#e57373",
      restore: "#64b5f6",
      album: "#ffab00",
      download: "#00bfa5",
      private: "#00b8d4",
      edit: "#00b8d4",
      share: "#9575cd",
      love: "#ef5350",
      terminal: "#333333",
      navigation: "#212121",
      "navigation-home": "#000000",
    },
  },
  onyx: {
    name: "onyx",
    dark: false,
    sponsor: false,
    colors: {
      application: "#e5e4e2",
      form: "#e5e4e2",
      card: "#bdbdbd",
      primary: "#c8bdb1",
      "primary-button": "#353839",
      "secondary-dark": "#353839",
      secondary: "#a8a8a8",
      "secondary-light": "#cdccca",
      accent: "#656565",
      error: "#e57373",
      info: "#5a94dd",
      success: "#4db6ac",
      warning: "#e3d181",
      love: "#ef5350",
      remove: "#e35333",
      restore: "#64b5f6",
      album: "#ffab40",
      download: "#07bd9f",
      private: "#48bcd6",
      edit: "#48bcd6",
      share: "#0070a0",
      terminal: "#333333",
      navigation: "#353839",
      "navigation-home": "#212121",
    },
  },
  shadow: {
    name: "shadow",
    dark: true,
    sponsor: true,
    colors: {
      application: "#444",
      form: "#eeeeee",
      card: "#3c3f41",
      primary: "#c4f1e5",
      "primary-button": "#74817d",
      "secondary-dark": "#c8e3e7",
      secondary: "#585858",
      "secondary-light": "#666",
      accent: "#333",
      error: "#e57373",
      info: "#00acc1",
      success: "#4db6ac",
      warning: "#ffd740",
      remove: "#e57373",
      restore: "#64b5f6",
      album: "#ffab00",
      download: "#00bfa5",
      private: "#00b8d4",
      edit: "#00b8d4",
      share: "#9575cd",
      love: "#ef5350",
      terminal: "#333333",
      navigation: "#212121",
      "navigation-home": "#000000",
    },
  },
  yellowstone: {
    name: "yellowstone",
    dark: true,
    sponsor: true,
    colors: {
      application: "#444",
      form: "#eeeeee",
      card: "#3c3f41",
      primary: "#ffb700",
      "primary-button": "#918c7d",
      "secondary-dark": "#ffb700",
      secondary: "#585858",
      "secondary-light": "#666",
      accent: "#333",
      error: "#e57373",
      info: "#00acc1",
      success: "#4db6ac",
      warning: "#ffd740",
      remove: "#e57373",
      restore: "#64b5f6",
      album: "#ffab00",
      download: "#00bfa5",
      private: "#00b8d4",
      edit: "#00b8d4",
      share: "#9575cd",
      love: "#ef5350",
      terminal: "#333333",
      navigation: "#111",
      "navigation-home": "#000000",
    },
  },
  vanta: {
    name: "vanta",
    dark: true,
    sponsor: true,
    colors: {
      application: "#212121",
      form: "#AFB42B",
      card: "#3c3f41",
      primary: "#04acaf",
      "primary-button": "#444444",
      "secondary-dark": "#04acaf",
      secondary: "#111111",
      "secondary-light": "#1a1a1a",
      accent: "#090c10",
      error: "#e57373",
      info: "#00acc1",
      success: "#4db6ac",
      warning: "#ffd740",
      remove: "#e57373",
      restore: "#64b5f6",
      album: "#ffab00",
      download: "#00bfa5",
      private: "#00b8d4",
      edit: "#00b8d4",
      share: "#9575cd",
      love: "#ef5350",
      terminal: "#333333",
      navigation: "#0d0d0d",
      "navigation-home": "#000000",
    },
  },
  abyss: {
    name: "abyss",
    dark: true,
    sponsor: true,
    colors: {
      application: "#212121",
      form: "#AFB42B",
      card: "#3c3f41",
      primary: "#814fd9",
      "primary-button": "#7e57c2",
      "secondary-dark": "#814fd9",
      secondary: "#111111",
      "secondary-light": "#1a1a1a",
      accent: "#090c10",
      error: "#e57373",
      info: "#00acc1",
      success: "#4db6ac",
      warning: "#ffd740",
      remove: "#9575cd",
      restore: "#64b5f6",
      album: "#7e57c2",
      download: "#673ab7",
      private: "#512da8",
      edit: "#4527a0",
      share: "#311b92",
      love: "#ef5350",
      terminal: "#333333",
      navigation: "#0d0d0d",
      "navigation-home": "#000000",
    },
  },
  gemstone: {
    name: "gemstone",
    dark: true,
    sponsor: true,
    colors: {
      application: "#353535",
      form: "#eeeeee",
      card: "#3c3f41",
      primary: "#AFB4D4",
      "primary-button": "#545465",
      "secondary-dark": "#9BA0C5",
      secondary: "#272727",
      "secondary-light": "#424242",
      accent: "#333",
      error: "#e57373",
      info: "#00acc1",
      success: "#4db6ac",
      warning: "#ffd740",
      remove: "#e57373",
      restore: "#64b5f6",
      album: "#ffab00",
      download: "#00bfa5",
      private: "#00b8d4",
      edit: "#00b8d4",
      share: "#9575cd",
      love: "#ef5350",
      terminal: "#4A464F",
      navigation: "#1C1C21",
      "navigation-home": "#131316",
    },
  },
  electra: {
    dark: true,
    sponsor: true,
    title: "Electra",
    name: "electra",
    colors: {
      application: "#26243a",
      form: "#eeeeee",
      card: "#3b394e",
      primary: "#D3CBFF",
      "primary-button": "#53478a",
      "secondary-dark": "#9c8aef",
      secondary: "#0c0910",
      "secondary-light": "#2f2b44",
      accent: "#262238",
      error: "#e57373",
      info: "#00acc1",
      success: "#4db6ac",
      warning: "#ffd740",
      remove: "#e57373",
      restore: "#64b5f6",
      album: "#ffab00",
      download: "#00bfa5",
      private: "#00b8d4",
      edit: "#00b8d4",
      share: "#9575cd",
      love: "#ef5350",
      terminal: "#070121",
      navigation: "#0f0e1f",
      "navigation-home": "#02000e",
    },
  },
};

/* Available Themes */

let options = [
  {
    text: $gettext("Default"),
    value: "default",
    disabled: false,
  },
  {
    text: $gettext("Grayscale"),
    value: "grayscale",
    disabled: false,
  },
  {
    text: $gettext("Vanta"),
    value: "vanta",
    disabled: false,
  },
  {
    text: $gettext("Abyss"),
    value: "abyss",
    disabled: false,
  },
  {
    text: $gettext("Electra"),
    value: "electra",
    disabled: false,
  },
  {
    text: $gettext("Moonlight"),
    value: "moonlight",
    disabled: false,
  },
  {
    text: $gettext("Onyx"),
    value: "onyx",
    disabled: false,
  },
  {
    text: $gettext("Cyano"),
    value: "cyano",
    disabled: false,
  },
  {
    text: $gettext("Lavender"),
    value: "lavender",
    disabled: false,
  },
  {
    text: $gettext("Gemstone"),
    value: "gemstone",
    disabled: false,
  },
  {
    text: $gettext("Raspberry"),
    value: "raspberry",
    disabled: false,
  },
  {
    text: $gettext("Shadow"),
    value: "shadow",
    disabled: false,
  },
  {
    text: $gettext("Yellowstone"),
    value: "yellowstone",
    disabled: false,
  },
];

/* Theme Functions */

// Returns a theme by name.
export const Get = (name) => {
  if (typeof themes[name] === "undefined") {
    return themes[options[0].value];
  }

  return themes[name];
};

// Adds or replaces a theme by name.
export const Set = (name, val) => {
  if (typeof themes[name] === "undefined") {
    options.push({
      text: val.title,
      value: val.name,
      disabled: false,
    });
  }

  themes[name] = val;
};

// Removes a theme by name.
export const Remove = (name) => {
  delete themes[name];
  const i = options.findIndex((el) => el.value === name);
  if (i > -1) {
    options.splice(i, 1);
  }
};

// Returns translated theme options.
export const Translated = () => {
  return options.map((v) => {
    if (v.disabled) {
      return null;
    }

    return {
      text: T(v.text),
      value: v.value,
    };
  });
};

export const Options = () => options;

export const SetOptions = (v) => (options = v);
