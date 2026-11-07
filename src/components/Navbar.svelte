<script>
  export let onHome;
  export let onCreate;
</script>

<nav class="navbar">
  <div class="nav-container">
    <a
      href="/"
      class="logo"
      onclick={(event) => {
        event.preventDefault();
        onHome();
      }}
    >
      <span class="logo-icon">✦</span>
      SvelteBlog
    </a>

    <div class="nav-links">
      <button onclick={onHome}>Home</button>

      <button class="write-button" onclick={onCreate}>
        + Write a post
      </button>
    </div>
  </div>
</nav>