<script>
  import BlogCard from "./BlogCard.svelte";

  export let posts = [];
  export let onSelect;
  export let search = "";
  export let category = "All";

  $: filteredPosts = posts.filter((post) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      post.title.toLowerCase().includes(searchText) ||
      post.content.toLowerCase().includes(searchText);

    const matchesCategory =
      category === "All" || post.category === category;

    return matchesSearch && matchesCategory;
  });
</script>

<section class="posts-section">
  <div class="section-heading">
    <div>
      <span class="eyebrow">OUR BLOG</span>
      <h2>Latest articles</h2>
    </div>

    <span class="post-count">
      {filteredPosts.length} articles
    </span>
  </div>

  {#if filteredPosts.length > 0}
    <div class="blog-grid">
      {#each filteredPosts as post (post.id)}
        <BlogCard {post} {onSelect} />
      {/each}
    </div>
  {:else}
    <div class="empty-state">
      <h3>No articles found</h3>
      <p>Try another search or category.</p>
    </div>
  {/if}
</section>