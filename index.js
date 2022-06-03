function introduction(name) {
    
    const introduction = "Hi, my name is "

    return `${introduction}${name}.`;
  }
  function introductionWithLanguage(name, language){
      
    var intro = "Hi, my name is "
    var duty = " and I am learning to program in "

    return `${intro}${name}${duty}${language}.`
  }

  function introductionWithLanguageOptional(name, language = "JavaScript"){

          
    var intro = "Hi, my name is "
    var duty = " and I am learning to program in "

    return `${intro}${name}${duty}${language}.`
  }