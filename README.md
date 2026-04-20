# Actividad 4 — Gestión profesional de configuración y secretos

## Propósito de la solución

Esta aplicación demuestra cómo gestionar configuración y secretos de manera profesional utilizando variables de entorno en una aplicación React con Vite.

Se implementa un flujo completo que incluye:

* separación entre configuración y datos sensibles
* validación automática al iniciar la aplicación
* uso de variables de entorno en desarrollo y CI
* despliegue en GitHub Pages mediante pipeline

El objetivo es simular un entorno real donde la configuración cambia sin modificar el código.

---

## Variables requeridas

### Configuración (no sensible)

```env
VITE_APP_NAME
VITE_PORT
VITE_LOG_LEVEL
VITE_FEATURE_X_ENABLED
```

### Secretos (sensibles)

```env
VITE_API_KEY
VITE_JWT_SECRET
VITE_DB_PASSWORD
```

---

## Diferencia entre configuración y secretos

| Tipo          | Descripción                                | Ejemplo             |
| ------------- | ------------------------------------------ | ------------------- |
| Configuración | Valores que cambian por entorno            | PORT, LOG_LEVEL     |
| Secretos      | Información sensible que no debe exponerse | API_KEY, JWT_SECRET |

Los secretos **nunca deben subirse al repositorio**.

---

## Cómo crear el archivo `.env`

1. Copiar el archivo de ejemplo:

```bash
cp .env.example .env
```

2. Completar con valores reales o de prueba:

```env
VITE_APP_NAME=AppName
VITE_PORT=8888
VITE_LOG_LEVEL=debug
VITE_FEATURE_X_ENABLED=true

VITE_API_KEY=test_key
VITE_JWT_SECRET=test_secret
VITE_DB_PASSWORD=test_password
```

---

## Cómo ejecutar la aplicación

```bash
npm install
npm run dev
```

Abrir en el navegador:

```
http://localhost:****
```

---

## Cómo validar que funciona

La aplicación valida automáticamente las variables al iniciar:

* Si falta una variable obligatoria → error
* Si el puerto no es numérico → error
* Si todo es correcto → la aplicacion se ejecuta

También se puede verificar en la interfaz:

* entorno actual
* estado de Feature X
* valores de configuración
* secretos enmascarados

---

## Qué NO debe subirse al repositorio

 - Archivos `.env`
 - Credenciales reales
 - API keys reales
 - Tokens o secretos

El repositorio solo debe incluir:

 - `.env.example`
 - código fuente
 - configuración del pipeline

---

## Automatización en CI

El proyecto incluye un workflow de GitHub Actions que:

* instala dependencias
* construye la aplicación
* inyecta variables simuladas
* valida que el build funcione correctamente
* despliega en GitHub Pages desde `staging`

---

## Simulación de cambio (Feature Flag)

Se implementó una feature flag:

```env
VITE_FEATURE_X_ENABLED=true
```

Permite activar o desactivar funcionalidad sin cambiar el código.

Ejemplo:

* `false` → Feature deshabilitada
* `true` → Feature habilitada

Esto simula cambios controlados en producción.

---

## Conclusión

Esta práctica demuestra cómo:

* desacoplar configuración del código
* proteger información sensible
* validar configuraciones automáticamente
* usar CI/CD para asegurar calidad
* manejar cambios de forma controlada

Estas prácticas son fundamentales en entornos profesionales de desarrollo.
