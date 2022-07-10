const showDate = () => {
  const event = new Date();
  const options = { dateStyle: 'short' };
  // @ts-ignore
  const dates = event.toLocaleString('en', options);
  document.querySelectorAll<HTMLElement>('[data-date]').forEach(date => {
    date.innerHTML = `${dates}`;
  });
};

export default showDate;
