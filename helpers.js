import Intl from 'intl';
import 'intl/locale-data/jsonp/en'; // Import the locale data for 'en'

export default getCurrentDate = (includeYear) => {
  const date = new Date();
  let options = { month: 'long', day: 'numeric' };
  if (includeYear) {
    options.year = 'numeric';
  }
  
  const formattedDate = new Intl.DateTimeFormat('en', options).format(date);
  return formattedDate;
};