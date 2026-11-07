<script>
  import Navbar from "./components/Navbar.svelte";
  import BlogList from "./components/BlogList.svelte";
  import BlogDetail from "./components/BlogDetail.svelte";
  import BlogEditor from "./components/BlogEditor.svelte";
  import Footer from "./components/Footer.svelte";

  import { blogPosts } from "./stores/blogStore.js";

  let page = "home";
  let selectedPost = null;
  let search = "";
  let category = "All";

  $: categories = [
    "All",
    ...new Set(
      $blogPosts.map((post) => post.category)
    )
  ];

  function openPost(post) {
    selectedPost = post;
    page = "detail";
    window.scrollTo(0, 0);
  }

  function showHome() {
    page = "home";
    selectedPost = null;
  }

  function createPost() {
    page = "create";
    window.scrollTo(0, 0);
  }

  function savePost(event) {
    blogPosts.add(event.detail);
    showHome();
  }

  function deletePost(id) {
    blogPosts.remove(id);
    showHome();
  }
</script>

<svelte:head>
  <title>SvelteBlog - Ideas Worth Sharing</title>

  <meta
    name="description"
    content="Discover articles about development, technology and design."
  />
</svelte:head>

<Navbar
  onHome={showHome}
  onCreate={createPost}
/>

{#if page === "home"}
  <main>
    <section class="hero">
      <div class="hero-content">
        <span class="eyebrow">
          WELCOME TO SVELTEBLOG
        </span>

        <h1>
          Ideas worth sharing.<br />
          Stories worth reading.
        </h1>

        <p>
          Discover fresh perspectives on technology,
          development and creativity.
        </p>

        <button
          class="write-button"
          onclick={createPost}
        >
          Start writing →
        </button>
      </div>
    </section>

    <section class="filters">
      <input
        type="search"
        bind:value={search}
        placeholder="Search articles..."
      />

      <select bind:value={category}>
        {#each categories as item}
          <option value={item}>
            {item}
          </option>
        {/each}
      </select>
    </section>

    <BlogList
      posts={$blogPosts}
      {search}
      {category}
      onSelect={openPost}
    />
  </main>

{:else if page === "detail" && selectedPost}
  <main>
    <BlogDetail
      post={selectedPost}
      onBack={showHome}
      onDelete={deletePost}
    />
  </main>

{:else if page === "create"}
  <main>
    <BlogEditor
      on:save={savePost}
      on:cancel={showHome}
    />
  </main>
{/if}

<Footer />