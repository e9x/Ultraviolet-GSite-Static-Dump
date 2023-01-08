import { fileURLToPath } from "url";

export const publicPath = fileURLToPath(new URL("../docs/", import.meta.url));
