const translations = {
  'pt-BR': {
    ...ptTranslation,
  },
  en: {
    ...enTranslation,
  },
}

let language = 'pt-BR'

function updateText (lang) {
  const langTranslations = translations[lang]
  for (const key in langTranslations) {
    const element = document.getElementById(`${key}-text`)
    element.innerText = langTranslations[key]
  }
}

updateText('pt-BR')

function changeLanguage (lang) {
  updateText(lang)
}
