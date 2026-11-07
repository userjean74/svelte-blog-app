<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let title = "";
  let excerpt = "";
  let content = "";
  let category = "Development";
  let author = "";
  let image = "";

  function submitPost() {
    if (
      !title.trim() ||
      !content.trim() ||
      !author.trim()
    ) {
      return;
    }

    dispatch("save", {
      title: title.trim(),
      excerpt: excerpt.trim(),
      content: content.trim(),
      category,
      author: author.trim(),
      image: image.trim() ||
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900"
    });
  }
</script>

<section class="editor">
  <button
    class="back-button"
    onclick={() => dispatch("cancel")}
  >
    ← Cancel
  </button>

  <h1>Create a new article</h1>

  <p>Share your ideas with the community.</p>

  <form
    onsubmit={(event) => {
      event.preventDefault();
      submitPost();
    }}
  >
    <label>
      Article title

      <input
        bind:value={title}
        placeholder="Enter your title"
        required
      />
    </label>

    <label>
      Short description

      <input
        bind:value={excerpt}
        placeholder="Write a short description"
      />
    </label>

    <label>
      Author

      <input
        bind:value={author}
        placeholder="Your name"
        required
      />
    </label>

    <label>
      Category

      <select bind:value={category}>
        <option>Development</option>
        <option>Technology</option>
        <option>DevOps</option>
        <option>Design</option>
        <option>Business</option>
      </select>
    </label>

    <label>
      Cover image URL

      <input
        bind:value={image}
        placeholder="https://example.com/image.jpg"
      />
    </label>

    <label>
      Article content

      <textarea
        bind:value={content}
        rows="10"
        placeholder="Write your article..."
        required
      ></textarea>
    </label>

    <button class="write-button" type="submit">
      Publish article
    </button>
  </form>
</section>