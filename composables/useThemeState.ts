export const useThemeState = () => {
  const cookieControl = useCookieControl();
  const currentTheme = useState('theme', () => useCookie('theme').value ?? 'light');
  const availableThemes = ['light', 'dark', 'business', 'retro'];

  function changeTheme(newThemeID: string) {
    currentTheme.value = newThemeID;

    if (cookieControl.cookiesEnabledIds?.value?.includes('theme')) ('theme').value = newThemeID;
  }

  return {
    currentTheme,
    availableThemes,
    changeTheme,
  };
}
