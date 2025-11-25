<div id="hmpl-scroll-container">
  <button id="hmpl-scroll-btn" aria-label="Scroll to top" title="Go to top">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 19V5M5 12l7-7 7 7"/>
    </svg>
  </button>
</div>

<style>
  #hmpl-scroll-btn {
    display: none;
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 9999;
    width: 50px;
    height: 50px;
    border: none;
    outline: none;
    background-color: var(--sl-color-accent, #3b82f6);
    color: white;
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    transition: all 0.3s ease-in-out;
    padding: 12px;
  }

  #hmpl-scroll-btn:hover {
    background-color: var(--sl-color-accent-high, #2563eb);
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0,0,0,0.2);
  }

  #hmpl-scroll-btn svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 640px) {
    #hmpl-scroll-btn {
      bottom: 20px;
      right: 20px;
      width: 40px;
      height: 40px;
      padding: 8px;
    }
  }
</style>

<script>
  const scrollBtn = document.getElementById("hmpl-scroll-btn");

  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
</script>
