import React from 'react';
import Autosuggest from 'react-autosuggest';
import "../assets/scss/SearchForm/autoSuggest.css"
// Otomatik olarak önermek istediğiniz dillerin bir listesinin olduğunu hayal edin.
const languages = [
  {
    name: 'Istanbul',
    code: 'IST'
  },
  {
    name: 'Ankara',
    code: 'ANK'
  },
  {
    name: 'Kars',
    code: 'KS'
  },
  {
    name: 'Antalya',
    code: 'AYT'
  },
];


// Otomatik Öneri'ye verilen herhangi bir giriş değeri için önerilerin nasıl hesaplanacağını öğretin.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : languages.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// Öneri tıklandığında, Otomatik Önerinin girişi doldurması gerekir
// tıklanan öneriye göre. Otomatik Öneri'ye nasıl hesaplanacağını öğretin.
// verilen her öneri için giriş değeri.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div className='suggestion_item'>
        <div className='city_info'>
            {suggestion.name}
        </div>
        <div className='city_code'>
            {suggestion.code}
        </div>
  </div>
);

class autoSuggest extends React.Component {
  constructor() {
    super();

    // Otomatik Öneri, kontrollü bir bileşendir.
    // Bu, bir giriş değeri sağlamanız gerektiği anlamına gelir
    // ve bu değeri güncelleyen bir onChange işleyicisi (aşağıya bakın).
    // Önerilerin de Otomatik Öneriye sunulması gerekiyor,
    // ve Otomatik Öneri kapalı olduğu için başlangıçta boşturlar.
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

    // Autosuggest, önerileri her güncellemeniz gerektiğinde bu işlevi çağırır.
    // Bu mantığı yukarıda zaten uyguladınız, bu yüzden sadece kullanın.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Otomatik öneri, önerileri her temizlemeniz gerektiğinde bu işlevi çağırır.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Otomatik öneri, tüm bu aksesuarlardan girişe geçecektir.
    const inputProps = {
      placeholder: 'Şehir veya Havalimanı Yazın',
      value,
      onChange: this.onChange
    };

    // Son olarak, render edin!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default autoSuggest;