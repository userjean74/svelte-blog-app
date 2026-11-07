<script>
  export let post;
  export let onSelect;
</script>

<article class="blog-card">
  <img src={post.image} alt={post.title} />

  <div class="blog-card-content">
    <span class="category">{post.category}</span>

    <h3>{post.title}</h3>

    <p>{post.excerpt}</p>

    <div class="card-footer">
      <span>{post.author}</span>
      <span>{post.date}</span>
    </div>

    <button
      class="read-more"
      onclick={() => onSelect(post)}
    >
      Read article →
    </button>
  </div>
</article>