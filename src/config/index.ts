import production from "./appsettings.json";
import settingsSchema from "./types";

let rawSettings;

try {
  const dev = await import("./appsettings.development.json");
  rawSettings = import.meta.env.NODE_ENV !== "development" ? production : dev;
} catch {
  rawSettings = production;
}

const settings = settingsSchema.parse(rawSettings);

export default settings;
