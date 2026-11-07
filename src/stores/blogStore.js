
import { writable } from "svelte/store";
import { initialPosts } from "../data/posts.js";

/**
 * @typedef {Object} BlogPost
 * @property {number} id
 * @property {string} title
 * @property {string} content
 * @property {string} date
 * @property {boolean} featured
 */

const STORAGE_KEY = "svelte-blog-posts";

function createBlogStore() {
  /** @type {BlogPost[]} */
  let savedPosts = initialPosts;

  if (typeof localStorage !== "undefined") {
    try {
      const storedPosts = localStorage.getItem(STORAGE_KEY);

      if (storedPosts) {
        const parsed = JSON.parse(storedPosts);

        if (Array.isArray(parsed)) {
          savedPosts = parsed;
        }
      }
    } catch (error) {
      console.error("Error loading blog posts:", error);
    }
  }

  const posts = writable(savedPosts);

  posts.subscribe((value) => {
    if (typeof localStorage !== "undefined") {
      try {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(value)
        );
      } catch (error) {
        console.error("Error saving blog posts:", error);
      }
    }
  });

  return {
    subscribe: posts.subscribe,

    // Add a new post
    /** @param {Omit<BlogPost, "id" | "date" | "featured">} post */
    add(post) {
      posts.update((items) => [
        {
          ...post,
          id: Date.now(),
          date: new Date().toISOString().slice(0, 10),
          featured: false
        },
        ...items
      ]);
    },

    // Remove a post by ID
    /** @param {number} id */
    remove(id) {
      posts.update((items) =>
        items.filter((post) => post.id !== id)
      );
    }
  };
}

export const blogPosts = createBlogStore();
