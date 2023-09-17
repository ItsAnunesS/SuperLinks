export const useLanguageState = () => {
  const { locale, locales } = useI18n();

  const language = useState('language', () => useCookie('language').value ?? locale.value ??'en');
  const availableLocales = computed(() => {
    return (locales.value).filter(i => i.code !== locale.value)
  });

  return {
    language,
    availableLocales,
  };
};
