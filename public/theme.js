try {
  const mode = localStorage.getItem('vueuse-color-scheme') || 'auto'
  const dark = mode === 'dark' || (mode === 'auto' && matchMedia('(prefers-color-scheme: dark)').matches)
  document.documentElement.classList.toggle('dark', dark)
}
catch {}
