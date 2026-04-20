import "./styles.css";

const environment = import.meta.env.VITE_NODE_ENV || "unknown";
const version = import.meta.env.VITE_PUBLIC_VERSION || "dev";
const appName = import.meta.env.VITE_APP_NAME || "Gestión profesional de configuración y secretos";
const port = import.meta.env.VITE_PORT || "N/A";
const logLevel = import.meta.env.VITE_LOG_LEVEL || "N/A";
const featureX = import.meta.env.VITE_FEATURE_X_ENABLED === "true";

// Nunca mostrar secretos completos
const apiKey = import.meta.env.VITE_API_KEY;
const jwtSecret = import.meta.env.VITE_JWT_SECRET;
const dbPassword = import.meta.env.VITE_DB_PASSWORD;

const mask = (value: string | undefined) =>
  value ? value.slice(0, 3) + "****" : "not set";

const notes = [
  "Configuración mediante variables de entorno",
  "Validación automática al iniciar",
  "Separación entre config y secretos",
  "Pipeline con variables simuladas",
  "Cambio controlado por feature flag"
];

export default function App() {
  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">Actividad 4</p>
        <h1>{appName}</h1>
        <p className="hero-copy">
          Aplicación demostrando gestión de configuración y secretos usando variables de entorno.
        </p>
      </section>

      <section className="grid">
        {/* CONFIG */}
        <article className="card card-accent">
          <h2>Configuración</h2>
          <p><strong>ENV:</strong> {environment}</p>
          <p><strong>PORT:</strong> {port}</p>
          <p><strong>LOG LEVEL:</strong> {logLevel}</p>
          <p>
            <strong>Feature X:</strong>{" "}
            <span className="badge">
              {featureX ? "ENABLED" : "DISABLED"}
            </span>
          </p>
        </article>

        {/* BUILD INFO */}
        <article className="card">
          <h2>Build Info</h2>
          <p className="mono">{version}</p>
          <p>Identificador del commit desplegado</p>
        </article>

        {/* SECRETS (OCULTOS) */}
        <article className="card">
          <h2>Secretos (protegidos)</h2>
          <p><strong>API KEY:</strong> {mask(apiKey)}</p>
          <p><strong>JWT:</strong> {mask(jwtSecret)}</p>
          <p><strong>DB PASS:</strong> {mask(dbPassword)}</p>
          <p style={{ fontSize: "0.8rem", opacity: 0.7 }}>
            (Los valores reales nunca se exponen)
          </p>
        </article>

        {/* NOTES */}
        <article className="card">
          <h2>Buenas prácticas</h2>
          <ul>
            {notes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
