export const useThemeState = () => {
  const cookieControl = useCookieControl();
  const currentTheme = useState('theme', () => useCookie('theme').value ?? 'light');
  // 'light', 'dark', 'business', 'cyberpunk', 'coffee', 'forest', 'aqua', 'dracula', 'retro', 'synthwave', 'luxury', 'wireframe'
  const availableThemes = ['light', 'dark', 'business', 'dracula', 'retro'];

  function changeTheme(newThemeID: string) {
    currentTheme.value = newThemeID;

    if (cookieControl.cookiesEnabledIds?.value?.includes('theme')) useCookie('theme').value = newThemeID;
  }

  return {
    currentTheme,
    availableThemes,
    changeTheme,
  };
}
