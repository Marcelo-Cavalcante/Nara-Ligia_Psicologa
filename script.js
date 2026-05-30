// Navbar scroll
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    });

    // Video modal
    function openVideo(url) {
      document.getElementById('videoIframe').src = url + '?autoplay=1&rel=0';
      document.getElementById('videoModal').classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeVideo() {
      document.getElementById('videoIframe').src = '';
      document.getElementById('videoModal').classList.remove('open');
      document.body.style.overflow = '';
    }
    function closeVideoOnOverlay(e) {
      if (e.target === document.getElementById('videoModal')) closeVideo();
    }
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeVideo(); });

    // Reveal on scroll
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));