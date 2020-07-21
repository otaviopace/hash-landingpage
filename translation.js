const enImg = document.createElement("img")
enImg.id = 'en-img'
enImg.src = 'BT_EN@2x.png'

const ptImg = document.createElement("img")
ptImg.id = 'pt-img'
ptImg.src = 'BT_PT@2x.png'

const translations = {
  pt: {
    image: ptImg,
    text: {
      ...ptTranslation,
    },
  },
  en: {
    image: enImg,
    text: {
      ...enTranslation,
    },
  },
}

function updateText (lang) {
  const langTranslations = translations[lang].text
  for (const key in langTranslations) {
    const element = document.getElementById(`${key}-text`)
    element.innerText = langTranslations[key]
  }
}

const changeLanguageButton = document.getElementById('change-language')


changeLanguageButton.appendChild(enImg)

const initialLanguage = 'pt'

updateText(initialLanguage)

function opositeLang (lang) {
  if (lang === 'en') { return 'pt' }
  return 'en'
}

function changeLanguage () {
  const urlParams = new URLSearchParams(window.location.search)
  let language = urlParams.get('lang')
  const oposite = opositeLang(language)
  updateText(language || oposite)
  changeLanguageButton.removeChild(document.getElementById(`${oposite}-img`))
  language = opositeLang(oposite)
  console.log('languagé', language)
  console.log('ptImg', ptImg)
  console.log('enImg', enImg)
  console.log('window[]', window[`${language}Img`])
  changeLanguageButton.appendChild(window[`${language}Img`])
  window.location.href = updateQueryStringParameter(window.location.href, 'lang', language)
}

function updateQueryStringParameter(uri, key, value) {
  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  var separator = uri.indexOf('?') !== -1 ? "&" : "?";
  if (uri.match(re)) {
    return uri.replace(re, '$1' + key + "=" + value + '$2');
  }
  else {
    return uri + separator + key + "=" + value;
  }
}
