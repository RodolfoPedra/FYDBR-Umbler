const replaceTitle = (title) => {
  if (title) {
    const newTitle = title
      .replace("&#8220;", '"')
      .replace("&#8221;", '"')
      .replace("&#8216;", "'")
      .replace("&#8217;", "'")
      .replace("&#038;", "&")
      .replace("&#8211;", "—");
    return newTitle;
  }
};

const replaceDate = (date) => {
  const splitDate = date.split(" ");

  const day = Number(splitDate[2]);
  const monthTemp = splitDate[1];
  const month = monthTemp
    .replace("Jan", "janeiro")
    .replace("Feb", "fevereiro")
    .replace("Mar", "março")
    .replace("Apr", "Abril")
    .replace("May", "Maio")
    .replace("Jun", "Junho")
    .replace("Jul", "Julho")
    .replace("Aug", "Agosto")
    .replace("Sep", "Setembro ")
    .replace("Oct", "outubro")
    .replace("Nov", "novembro")
    .replace("Dec", "Dezembro ");

  const dateFormat = `${month} ${day}, ${splitDate[3]} `;

  return dateFormat;
};

export { replaceTitle, replaceDate };
