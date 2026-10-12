for (const button of document.querySelectorAll('[data-copy]')) {
  if (!navigator.clipboard || !window.isSecureContext) continue;
  button.hidden = false;
  button.addEventListener('click', async () => {
    const original = button.textContent;
    try {
      await navigator.clipboard.writeText(document.getElementById(button.dataset.copy).textContent);
      button.textContent = document.documentElement.lang === 'zh-CN' ? '已复制' : 'Copied';
    } catch {
      button.textContent = document.documentElement.lang === 'zh-CN' ? '请手动选择复制' : 'Select text to copy';
    }
    setTimeout(() => { button.textContent = original; }, 2200);
  });
}
