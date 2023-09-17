export default defineNuxtPlugin(() => {
  const cookieControl = useCookieControl()

  if (cookieControl.cookiesEnabledIds?.value?.includes('theme')) {
    const theme = useCookie('theme')

    if (theme.value) {
      const html = document.querySelector('html');
      html?.setAttribute('data-theme', theme.value);
    }
  }
});
