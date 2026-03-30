# 🎯 Event Landing Page - Full Stack Application

Un sitio web completo para eventos y conferencias con registro de asistentes, generación de entradas, galería de fotos y panel de administración.

**Status**: ✅ Fase 1 Completada - Infraestructura y Setup listo para desarrollo

## 🎯 Características

- ✅ Página de aterrizaje responsiva con información del evento
- ✅ Horario del evento con información de ponentes
- ✅ Directorio de ponentes con enlaces a redes sociales
- ✅ Galería de fotos con lightbox
- ✅ Sistema de registro de asistentes
- ✅ Generación y validación de entradas
- ✅ Panel de administración para gestionar el evento
- ✅ Búsqueda y filtrado de schedules
- ✅ SEO optimizado

## 🏗️ Arquitectura

**Monorepo Full-Stack** con separación clara de responsabilidades:

```
event-landing/
├── apps/
│   ├── frontend/          # Next.js 14 (Puerto 3000)
│   │   ├── app/           # Páginas y rutas
│   │   ├── components/    # Componentes reutilizables
│   │   ├── lib/           # Utilidades y servicios
│   │   └── styles/        # Estilos globales
│   │
│   └── backend/           # Express.js API (Puerto 3001)
│       ├── src/
│       │   ├── routes/    # Endpoints de la API
│       │   ├── controllers/
│       │   ├── middleware/
│       │   └── utils/
│       └── prisma/        # ORM y esquema de BD
│
├── docs/                  # Documentación
│   ├── SETUP.md
│   ├── API.md
│   └── DATABASE.md
│
└── package.json           # Monorepo root
```

## 🚀 Tecnologías

| Capa | Tecnología |
|------|-----------|
| Frontend | Next.js 14, React 18, TailwindCSS |
| Backend | Node.js, Express.js |
| Base de Datos | PostgreSQL, Prisma ORM |
| Autenticación | JWT + bcryptjs |
| Formularios | react-hook-form, Zod |
| Estilos | TailwindCSS 3.3 |

## ⚙️ Requisitos Previos

### Para Mac
```bash
# Verificar Node.js y npm
node --version  # Debe ser v18 o superior
npm --version   # Debe ser v9 o superior

# Si no los tienes instalados:
# Opción 1: Usar Homebrew
brew install node

# Opción 2: Descargar desde https://nodejs.org
```

### Para Windows
```powershell
# Verificar Node.js y npm
node --version  # Debe ser v18 o superior
npm --version   # Debe ser v9 o superior

# Si no los tienes instalados:
# Opción 1: Descargar desde https://nodejs.org (recomendado)
# Opción 2: Usar Chocolatey
choco install nodejs

# Opción 3: Usar Windows Package Manager
winget install OpenJS.NodeJS
```

### PostgreSQL (Requerido)

#### Mac
```bash
# Opción 1: Homebrew (Recomendado)
brew install postgresql
brew services start postgresql

# Opción 2: Docker
docker run --name event-db -e POSTGRES_PASSWORD=password -d -p 5432:5432 postgres:15

# Opción 3: Descargar desde https://www.postgresql.org/download/macosx/
```

#### Windows
```powershell
# Opción 1: Descargar instalador desde https://www.postgresql.org/download/windows/
# Sigue el instalador gráfico

# Opción 2: Chocolatey
choco install postgresql

# Opción 3: Docker Desktop for Windows
docker run --name event-db -e POSTGRES_PASSWORD=password -d -p 5432:5432 postgres:15

# Opción 4: Windows Package Manager
winget install PostgreSQL.PostgreSQL
```

**Nota importante**: Por defecto PostgreSQL usa puerto 5432. Asegúrate que esté disponible.

---

## 🚀 Instalación y Ejecución Rápida

### 1️⃣ Clonar y Navegar al Proyecto

#### Mac
```bash
cd ~/Desktop/event-landing
# o donde hayas clonado el proyecto
```

#### Windows (PowerShell)
```powershell
cd "C:\Users\TuUsuario\Desktop\event-landing"
# o donde hayas clonado el proyecto
```

### 2️⃣ Instalar Dependencias

```bash
npm install
# Esto instalará dependencias para frontend y backend (monorepo)
```

**Tiempo estimado**: 2-5 minutos

### 3️⃣ Configurar Base de Datos

#### Opción A: PostgreSQL Local (Recomendado para desarrollo)

##### Mac
```bash
# 1. Crear la base de datos
createdb event_landing

# 2. Actualizar archivo .env en apps/backend
# Abre: apps/backend/.env
# y cambia la línea DATABASE_URL a:
# DATABASE_URL="postgresql://localhost:5432/event_landing?schema=public"

# 3. Ejecutar migraciones
cd apps/backend
npm run prisma:generate
npm run migrate
```

##### Windows (PowerShell)
```powershell
# 1. Conectar a PostgreSQL y crear base de datos
psql -U postgres
# Dentro de psql:
CREATE DATABASE event_landing;
\q

# 2. Actualizar archivo .env en apps/backend
# Abre: apps/backend/.env
# y cambia la línea DATABASE_URL a:
# DATABASE_URL="postgresql://localhost:5432/event_landing?schema=public"

# 3. Ejecutar migraciones
cd apps/backend
npm run prisma:generate
npm run migrate
```

#### Opción B: Docker (Sin instalar PostgreSQL localmente)

```bash
# Mac y Windows (igual)
docker run --name event-db \
  -e POSTGRES_PASSWORD=password \
  -d \
  -p 5432:5432 \
  postgres:15

# Luego abre apps/backend/.env y usa:
# DATABASE_URL="postgresql://postgres:password@localhost:5432/event_landing?schema=public"
```

### 4️⃣ Ejecutar Servidores en Desarrollo

Necesitarás **2 terminales** abiertas (una para frontend, otra para backend)

#### Terminal 1 - Frontend (Mac y Windows)
```bash
npm run dev:frontend
# o
npm run dev:frontend -- -p 3000

# Se abrirá en: http://localhost:3000
```

#### Terminal 2 - Backend (Mac y Windows)
```bash
cd apps/backend
npm run dev
# Se ejecutará en: http://localhost:3001
```

**Tips**:
- Si el puerto 3000 o 3001 está ocupado, VS Code te lo preguntará
- En Windows, si tienes error de permisos, ejecuta las terminales como **Administrador**

---

## 🌐 Urls de Desarrollo

Cuando ambos servidores estén corriendo:

| Página | URL | Descripción |
|--------|-----|-------------|
| 🏠 Home | http://localhost:3000 | Landing page principal |
| 📅 Schedule | http://localhost:3000/schedule | Horario del evento |
| 🎤 Speakers | http://localhost:3000/speakers | Directorio de ponentes |
| 🖼️ Galería | http://localhost:3000/gallery | Galería de fotos |
| ✍️ Registro | http://localhost:3000/register | Formulario de registro |
| 🎫 Ticket | http://localhost:3000/ticket | Vista de entrada |
| 🔐 Admin | http://localhost:3000/admin | Dashboard admin |
| 📊 API | http://localhost:3001/api | API REST |
| 💚 Health | http://localhost:3001/health | Estado del servidor |

---

## 📦 Comandos Disponibles

### Todos los comandos (ejecutar desde raíz)

```bash
# Desarrollar
npm run dev              # Inicia frontend + backend
npm run dev:frontend     # Solo frontend
npm run dev:backend      # Solo backend

# Construir para producción
npm run build            # Build de ambos
npm run build:frontend   # Build solo frontend
npm run build:backend    # Build solo backend
```

### Comandos específicos de Backend

```bash
cd apps/backend

npm run dev              # Desarrollo con nodemon
npm start                # Producción
npm run migrate          # Ejecutar migraciones
npm run prisma:generate  # Regenerar cliente Prisma
```

### Comandos específicos de Frontend

```bash
cd apps/frontend

npm run dev              # Desarrollo
npm run build            # Build para producción
npm run start            # Servir build de producción
npm run lint             # Validar código
```

---

## 🔧 Solución de Problemas

### ❌ "Puerto 3000 ya está en uso"

#### Mac
```bash
# Encontrar proceso en puerto 3000
lsof -i :3000

# Matar proceso (reemplaza PID)
kill -9 <PID>

# O usa otro puerto
npm run dev:frontend -- -p 3002
```

#### Windows (PowerShell)
```powershell
# Encontrar proceso en puerto 3000
netstat -ano | findstr :3000

# Matar proceso (reemplaza PID)
taskkill /PID <PID> /F

# O usa otro puerto
npm run dev:frontend -- -p 3002
```

### ❌ "No se puede conectar a PostgreSQL"

```bash
# Mac - Verificar que PostgreSQL está corriendo
brew services list
# Si no: brew services start postgresql

# Windows - Verificar servicios
Get-Service PostgreSQL*

# Verificar conexión
psql -U postgres -h localhost

# Si error de contraseña, usa:
psql -U postgres -h localhost -W

# Si no existe la BD:
createdb event_landing
```

### ❌ "Error: ENOENT: no such file or directory"

```bash
# Regenerar cliente Prisma
cd apps/backend
npm run prisma:generate

# Reinstalar dependencias
npm install
```

### ❌ "Module not found" en Frontend

```bash
cd apps/frontend
npm install
npm run dev
```

### ❌ Error de permisos en Windows

- Abre PowerShell/CMD como **Administrador**
- Intenta de nuevo

### ❌ Prisma está desactualizado

```bash
cd apps/backend
npm run prisma:generate
npm run migrate
```

---

## 📚 Estructura de Carpetas Detallada

```
event-landing/
│
├── apps/frontend/
│   ├── app/
│   │   ├── page.jsx              # Home
│   │   ├── layout.jsx            # Layout raíz
│   │   ├── globals.css           # Estilos globales
│   │   ├── schedule/page.jsx     # Página de horario
│   │   ├── speakers/page.jsx     # Página de ponentes
│   │   ├── gallery/page.jsx      # Página de galería
│   │   ├── register/page.jsx     # Formulario de registro
│   │   ├── ticket/page.jsx       # Página de entrada
│   │   └── admin/page.jsx        # Dashboard admin
│   │
│   ├── components/
│   │   ├── Header.jsx            # Navegación
│   │   ├── Footer.jsx            # Pie de página
│   │   ├── ScheduleItem.jsx      # Item de horario
│   │   └── SpeakerCard.jsx       # Tarjeta de ponente
│   │
│   ├── lib/
│   │   ├── api.js                # Cliente API (próximamente)
│   │   └── validators.js         # Validadores
│   │
│   ├── public/                   # Archivos estáticos
│   ├── styles/                   # Estilos adicionales
│   │
│   ├── package.json
│   ├── next.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── jsconfig.json
│   ├── .eslintrc.json
│   └── .env.local                # Variables de entorno frontend
│
├── apps/backend/
│   ├── src/
│   │   ├── server.js             # Punto de entrada
│   │   │
│   │   ├── routes/
│   │   │   ├── auth.routes.js
│   │   │   ├── event.routes.js
│   │   │   ├── schedule.routes.js
│   │   │   ├── speaker.routes.js
│   │   │   ├── attendee.routes.js
│   │   │   ├── ticket.routes.js
│   │   │   ├── gallery.routes.js
│   │   │   └── admin.routes.js
│   │   │
│   │   ├── controllers/
│   │   │   └── auth.controller.js
│   │   │
│   │   ├── middleware/
│   │   │   └── errorHandler.js
│   │   │
│   │   ├── utils/
│   │   │   └── helpers.js
│   │   │
│   │   └── config/
│   │
│   ├── prisma/
│   │   ├── schema.prisma         # Definición de modelos
│   │   └── migrations/           # Historial de cambios
│   │
│   ├── package.json
│   ├── .env                      # Variables de entorno backend
│   └── .gitignore
│
├── docs/
│   ├── SETUP.md                  # Guía de instalación
│   ├── API.md                    # Documentación de API
│   └── DATABASE.md               # Esquema de BD
│
├── .gitignore
├── README.md                     # Este archivo
└── package.json                  # Monorepo root
```

---

## 📖 Documentación Adicional

- **[SETUP.md](docs/SETUP.md)** - Guía detallada de instalación
- **[API.md](docs/API.md)** - Documentación completa de endpoints
- **[DATABASE.md](docs/DATABASE.md)** - Esquema de base de datos

---

## 🎯 Fases del Proyecto

### Phase 1: ✅ Setup & Infraestructura
- [x] Estructura monorepo
- [x] Setup Next.js frontend
- [x] Setup Express backend
- [x] Configuración Prisma + PostgreSQL
- [x] Variables de entorno
- [x] Documentación básica

### Phase 2: 🔄 Frontend - Páginas (En Progreso)
- [x] Layouts responsivos
- [x] Home/landing page
- [x] Página de horario
- [x] Directorio de ponentes
- [x] Galería de fotos
- [ ] Pulidas y optimizadas

### Phase 3: ⏳ Backend - APIs
- [ ] Autenticación de usuarios
- [ ] Endpoints de eventos
- [ ] Endpoints de horarios
- [ ] Endpoints de ponentes
- [ ] Endpoints de registro
- [ ] Generación de entradas

### Phase 4: ⏳ Características Interactivas
- [ ] Formulario de registro
- [ ] Visualización de entradas
- [ ] Búsqueda y filtrado
- [ ] Paginación

### Phase 5: ⏳ Dashboard Admin
- [ ] Sistema de login
- [ ] Layout dashboard
- [ ] Gestión de asistentes
- [ ] Panel de reportes
- [ ] Carga de galería

### Phase 6: ⏳ Optimizaciones & Deploy
- [ ] SEO y meta tags
- [ ] Optimización de rendimiento
- [ ] Seguridad
- [ ] Tests
- [ ] Deploy a producción

---

## 🤝 Información de Contacto

**Evento**: AI Workshop - 30 de Marzo, 2026
**Correo**: contact@aievent.com
**Teléfono**: +1 (555) 000-0000

---

## 📄 Licencia

Este proyecto es privado y propietario.

---

**Última actualización**: 30 de Marzo, 2026

