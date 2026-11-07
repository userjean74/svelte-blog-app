<script>
  export let post;
  export let onBack;
  export let onDelete;
</script>

<article class="detail-page">
  <button class="back-button" onclick={onBack}>
    ← Back to articles
  </button>

  <img
    class="detail-image"
    src={post.image}
    alt={post.title}
  />

  <div class="detail-content">
    <span class="category">{post.category}</span>

    <h1>{post.title}</h1>

    <div class="detail-meta">
      By {post.author} · {post.date}
    </div>

    <div class="article-body">
      {#each post.content.split("\n") as paragraph}
        <p>{paragraph}</p>
      {/each}
    </div>

    <button
      class="delete-button"
      onclick={() => onDelete(post.id)}
    >
      Delete article
    </button>
  </div>
</article>