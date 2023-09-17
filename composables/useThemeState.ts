export const useThemeState = () => {
  const cookieControl = useCookieControl();
  const currentTheme = useState('theme', () => useCookie('theme').value ?? 'light');
  const availableThemes = ['light', 'dark', 'business', 'cyberpunk', 'coffee', 'forest', 'aqua', 'dracula', 'retro', 'synthwave', 'luxury', 'wireframe'];

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
