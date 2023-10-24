import production from "./appsettings.json";
import settingsSchema from "./types";

let settings;

try {
  const dev = await import("./appsettings.development.json");
  settings = import.meta.env.NODE_ENV !== "development" ? production : dev;
} catch {
  settings = production;
}

export default settingsSchema.parse(settings);
