
# 📝 Svelte Blog

A modern, responsive blog application built with **Svelte 5, JavaScript, and Vite**. The application provides a clean interface for creating, viewing, managing, and deleting blog posts.

It features reusable Svelte components, centralized state management with Svelte stores, and browser-based data persistence using `localStorage`.

The project also includes **Docker and Nginx configuration** for containerized deployment.

---

## ✨ Features

- **Responsive Design:** Clean and user-friendly interface across desktop, tablet, and mobile devices.
- **Blog Listing:** Display blog posts in an organized layout.
- **Blog Details:** View individual blog posts and their content.
- **Create Blog Posts:** Write and publish new blog posts.
- **Edit Blog Posts:** Update existing blog posts.
- **Delete Blog Posts:** Remove unwanted blog posts.
- **Featured Posts:** Support for highlighting featured blog posts.
- **State Management:** Manage blog data using Svelte writable stores.
- **Local Storage:** Automatically persist blog posts in the browser.
- **Reusable Components:** Organized and maintainable component architecture.
- **Docker Support:** Run the application inside a Docker container.
- **Nginx:** Serve the production application using Nginx.

---

## 🛠️ Technologies Used

| Technology | Purpose |
| --- | --- |
| Svelte 5 | Frontend framework |
| JavaScript | Application logic |
| Vite | Development server and build tool |
| HTML5 | Application structure |
| CSS3 | Styling and responsive layout |
| Svelte Stores | State management |
| LocalStorage | Browser-based data persistence |
| Docker | Containerization |
| Docker Compose | Container orchestration |
| Nginx | Production web server |
| Git & GitHub | Version control and collaboration |

---

## 📋 Prerequisites

Before installing the project, ensure you have the following:

- [Node.js](<https://nodejs.org/>) (LTS version recommended).
- npm (included with Node.js).
- [Git](<https://git-scm.com/>).
- [Docker Desktop](<https://www.docker.com/products/docker-desktop/>) (optional, for containerized deployment).

---

## 📁 Project Structure

text

```text
svelte-blog/
│
├── public/
│   └── favicon.svg
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Navbar.svelte
│   │   ├── BlogCard.svelte
│   │   ├── BlogList.svelte
│   │   ├── BlogDetail.svelte
│   │   ├── BlogEditor.svelte
│   │   └── Footer.svelte
│   │
│   ├── data/
│   │   └── posts.js
│   │
│   ├── stores/
│   │   └── blogStore.js
│   │
│   ├── App.svelte
│   ├── app.css
│   └── main.js
│
├── .vscode/
│   └── extensions.json
│
├── .dockerignore
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── index.html
├── jsconfig.json
├── nginx.conf
├── package.json
├── svelte.config.js
└── vite.config.js
```

### Component Description

| Component | Responsibility |
| --- | --- |
| `Navbar.svelte` | Application navigation and header |
| `BlogCard.svelte` | Displays an individual blog post preview |
| `BlogList.svelte` | Displays the collection of blog posts |
| `BlogDetail.svelte` | Displays the full content of a selected post |
| `BlogEditor.svelte` | Creates and edits blog posts |
| `Footer.svelte` | Application footer |
| `App.svelte` | Main application component |

### Other Important Files

| File | Description |
| --- | --- |
| `main.js` | Application entry point |
| `app.css` | Global application styles |
| `data/posts.js` | Initial blog post data |
| `stores/blogStore.js` | Blog state management and local storage |
| `Dockerfile` | Defines the Docker image |
| `docker-compose.yml` | Configures Docker services |
| `nginx.conf` | Nginx web server configuration |
| `vite.config.js` | Vite configuration |
| `svelte.config.js` | Svelte configuration |
| `jsconfig.json` | JavaScript project configuration |
| `.dockerignore` | Excludes files from the Docker build context |
| `.gitignore` | Excludes files from Git tracking |

---

## 🚀 Getting Started

Follow these instructions to run the project locally.

### 1\. Clone the repository

bash

```bash
git clone https://github.com/YOUR-USERNAME/svelte-blog.git
```

### 2\. Navigate to the project directory

bash

```bash
cd svelte-blog
```

### 3\. Install dependencies

bash

```bash
npm install
```

### 4\. Start the development server

bash

```bash
npm run dev
```

### 5\. Open the application

Visit the following address in your browser:

text

```text
http://localhost:5173/
```

The application should now be running locally.

---

## 📜 Available Scripts

The following commands are commonly available through the project's `package.json`:

| Command | Description |
| --- | --- |
| `npm install` | Install project dependencies |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build |

Run commands from the project root directory.

---

## 📝 Managing Blog Posts

The application uses a centralized Svelte writable store located at:

text

```text
src/stores/blogStore.js
```

The store manages blog post operations.

### Add a Blog Post

javascript

```javascript
blogPosts.add({
  title: "Getting Started with Svelte",
  content: "Learn how to build modern applications with Svelte."
});
```

### Delete a Blog Post

javascript

```javascript
blogPosts.remove(postId);
```

### Subscribe to Blog Posts

Svelte components can access the store using the `$` prefix:

svelte

```svelte
<script>
  import { blogPosts } from "./stores/blogStore.js";
</script>

{#each $blogPosts as post (post.id)}
  <h2>{post.title}</h2>
  <p>{post.content}</p>
{/each}
```

---

## 💾 Data Persistence

Blog posts are stored using the browser's `localStorage` API.

The storage key is:

text

```text
svelte-blog-posts
```

### How It Works

1. The application loads initial posts from `src/data/posts.js`.
2. Previously saved posts are retrieved from browser storage when available.
3. Changes to the Svelte store are automatically saved to `localStorage`.
4. Posts remain available after refreshing the browser.

**Important:** Data is stored locally in the browser. There is currently no backend database or automatic synchronization between different devices.

Clearing browser storage will remove locally saved blog posts.

---

## 🐳 Running with Docker

This project includes Docker configuration for building and running the application in a container.

### Prerequisites

Install and start Docker Desktop or Docker Engine.

### 1\. Build and start the container

From the project root directory, run:

bash

```bash
docker compose up --build -d
```

### 2\. Check running containers

bash

```bash
docker compose ps
```

### 3\. Open the application

If your Docker Compose configuration maps port 80, visit:

text

```text
http://localhost/
```

If a different port is configured, use the corresponding port from `docker-compose.yml`.

### 4\. View container logs

bash

```bash
docker compose logs -f
```

### 5\. Stop the application

bash

```bash
docker compose down
```

### Docker Configuration

The project contains:

- `Dockerfile` – Defines the application image and build process.
- `docker-compose.yml` – Defines the container service and port configuration.
- `nginx.conf` – Configures Nginx to serve the production application.
- `.dockerignore` – Excludes unnecessary files from the Docker build context.

---

## 🏗️ Production Build

To generate an optimized production version:

bash

```bash
npm run build
```

The production files will be generated in:

text

```text
dist/
```

To preview the production build locally:

bash

```bash
npm run preview
```

---

## 🌐 Deployment

The application can be deployed using several hosting platforms:

- [Vercel](<https://vercel.com/>)
- [Netlify](<https://www.netlify.com/>)
- [GitHub Pages](<https://pages.github.com/>)
- Docker-compatible hosting platforms.
- VPS servers using Docker and Nginx.

For static hosting, build the application first and deploy the generated `dist/` directory.

For Docker-based deployment, use the included Dockerfile and Docker Compose configuration.

---

## 🔮 Future Improvements

Potential improvements for future versions include:

- User registration and authentication.
- Backend API integration.
- Database integration (PostgreSQL, MongoDB, or MySQL).
- Image uploads for blog posts.
- Blog categories and tags.
- Search and filtering functionality.
- Pagination.
- Markdown editor.
- Comments and discussions.
- Social media sharing.
- Dark mode.
- SEO optimization.

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome\!

To contribute:

1. Fork this repository.
2. Create a new feature branch:

bash

```bash
git checkout -b feature/new-feature
```

3. Make your changes.
4. Commit your changes:

bash

```bash
git commit -m "Add new feature"
```

5. Push your branch:

bash

```bash
git push origin feature/new-feature
```

6. Open a Pull Request on GitHub.

---

## 📄 License

This project is available for personal and educational use.

Consider adding an MIT License if you want others to freely use, modify, and distribute your project.

---

## 👨‍💻 Author

**Your Name**

- GitHub: @userjean74

---

## ⭐ Support

If you find this project useful, please consider giving the repository a ⭐ star on GitHub.

**Built with ❤️ using Svelte 5, JavaScript, Vite, Docker, and Nginx.**

## Before uploading to GitHub

1. Save the document as `README.md` in the root of your `svelte-blog/` directory.
2. Replace `YOUR-USERNAME` with your GitHub username.
3. Update the author section.
4. Verify that the Docker commands and port numbers match your actual `Dockerfile` and `docker-compose.yml`.
5. Add screenshots of your application to make the repository more attractive.

