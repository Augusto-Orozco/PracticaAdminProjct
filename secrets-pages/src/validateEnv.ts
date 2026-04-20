export function validateEnv() {
  const required = [
    "VITE_APP_NAME",
    "VITE_PORT",
    "VITE_NODE_ENV",
    "VITE_API_KEY",
    "VITE_JWT_SECRET",
    "VITE_DB_PASSWORD"
  ];


  const missing = required.filter((key) => !import.
meta.env[key]);


  if (missing.length > 0) {
    console.error("Missing env variables:");
    missing.forEach((m) => console.error(m));
    throw new Error("Invalid configuration");
  }


  if (isNaN(Number(import.meta.env.VITE_PORT))) {
    throw new Error("PORT must be numeric");
  }


  console.log("Env valid");
}