import { trackCustomEvent } from 'gatsby-plugin-google-analytics';


const handleDrift = (event) => {
  event.preventDefault();

  window.drift && window.drift.on('ready', (api) => {
    api.openChat();
  });
};

const handleCTAClick = (event, elemCategory, redirUrl) => {
  event.preventDefault();
  debugger;
  window.open(redirUrl, '_blank');
  trackCustomEvent({
    category: elemCategory,
    action: "Click",
    label: "CTA",
  })
};

export {
  handleDrift,
  handleCTAClick,
};
