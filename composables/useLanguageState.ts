export const useLanguageState = () => {
  const cookieControl = useCookieControl();
  const { locale, locales, setLocale } = useI18n();

  const availableLocales = computed(() => {
    return (locales.value).filter(i => i.code !== locale.value)
  });

  function changeLanguage(newLanguageID: string) {
    console.log('changeLanguage', newLanguageID, locale.value)
    if (newLanguageID === locale.value) return;

    if (!verifyAvailableLanguage(newLanguageID)) return;

    console.log('changeLanguage', newLanguageID, locale.value, 'changing')
    setLocale(newLanguageID);
    if (cookieControl.cookiesEnabledIds?.value?.includes('i18n')) useCookie('anuness_i18n_redirected').value = newLanguageID;
  }

  function verifyAvailableLanguage(newLanguageID: string): boolean {
    return availableLocales.value.find(i => i.code === newLanguageID) ? true : false;
  }

  return {
    locale,
    availableLocales,
    changeLanguage
  };
};
