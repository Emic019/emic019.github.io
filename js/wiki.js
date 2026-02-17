(function() {
  'use strict';

  const sidebar = document.getElementById('wiki-sidebar');
  const reader = document.getElementById('wiki-reader');
  const iframe = document.getElementById('wiki-iframe');
  const welcome = document.querySelector('.wiki-welcome');
  const toolbar = document.querySelector('.wiki-toolbar');
  const backBtn = document.getElementById('wiki-back-to-toc');
  const showTocBtn = document.getElementById('wiki-show-toc');
  const sidebarClose = document.getElementById('sidebar-close');
  let currentActiveLink = null;

  window.loadArticle = function(url, element) {
    const fullUrl = new URL(url, window.location.origin).href;
    if (welcome) welcome.style.display = 'none';
    if (reader) reader.style.display = 'block';
    if (toolbar) toolbar.style.display = 'none';
    iframe.src = fullUrl;

    // 移除上一个高亮的文章
    if (currentActiveLink) {
      currentActiveLink.classList.remove('active');
    }
    // 移除上一个高亮的一级分类
    const prevActiveCategory = document.querySelector('.category-name.active-category');
    if (prevActiveCategory) {
      prevActiveCategory.classList.remove('active-category');
    }

    // 高亮当前点击的文章
    if (element) {
      element.classList.add('active');
      currentActiveLink = element;

      // 找到该文章所属的一级分类并高亮
      const postItem = element.closest('.post-item');
      if (postItem) {
        const parentDetails = postItem.closest('details');
        if (parentDetails) {
          const categoryName = parentDetails.querySelector('summary .category-name');
          if (categoryName) {
            categoryName.classList.add('active-category');
          }
        }
      }
    }

    // 移动端自动隐藏侧边栏
    if (window.innerWidth <= 768) {
      sidebar.classList.remove('active');
    }
  };

  function backToToc() {
    if (welcome) welcome.style.display = 'flex';
    if (reader) reader.style.display = 'none';
    if (toolbar) toolbar.style.display = 'flex';
    iframe.src = '';

    // 移除所有高亮
    if (currentActiveLink) {
      currentActiveLink.classList.remove('active');
      currentActiveLink = null;
    }
    const prevActiveCategory = document.querySelector('.category-name.active-category');
    if (prevActiveCategory) {
      prevActiveCategory.classList.remove('active-category');
    }
  }

  if (showTocBtn) {
    showTocBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      sidebar.classList.toggle('active');
    });
  }

  if (backBtn) {
    backBtn.addEventListener('click', backToToc);
  }

  if (sidebarClose) {
    sidebarClose.addEventListener('click', function() {
      sidebar.classList.remove('active');
    });
  }

  document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
      if (!sidebar.contains(e.target) && !showTocBtn.contains(e.target)) {
        sidebar.classList.remove('active');
      }
    }
  });
})();