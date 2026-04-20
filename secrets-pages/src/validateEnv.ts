export function validateEnv() {
  const env = import.meta.env;

  console.log("ENV DEBUG:", env);

  const required = [
    "VITE_APP_NAME",
    "VITE_PORT",
    "VITE_API_KEY",
    "VITE_JWT_SECRET",
    "VITE_DB_PASSWORD"
  ];

  const missing = required.filter((key) => {
    return !(key in env) || !env[key as keyof typeof env];
  });

  if (missing.length > 0) {
    console.error("Missing env variables:", missing);

    // NO romper nunca en browser
    if (import.meta.env.DEV) {
      // Solo loggear
      console.warn("DEV mode - missing env");
    }
  }

  if (env.VITE_PORT && isNaN(Number(env.VITE_PORT))) {
    console.warn("PORT inválido");
  }

  console.log("Env check complete");
}