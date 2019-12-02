
const handleDrift = (event) => {
  event.preventDefault();

  window.drift && window.drift.on('ready', (api) => {
    api.openChat();
  });
};

export {
  handleDrift,
};
