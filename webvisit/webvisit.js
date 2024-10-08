// Helper function to get the data-source attribute from the script tag
function getSourceFromScriptTag() {
  const scriptTag = document.currentScript; // Get the current script tag
  return scriptTag ? scriptTag.getAttribute('data-domain') : '';
}

// Function to get UTM parameters from the URL
function getUTMParameters() {
  const urlParams = new URLSearchParams(window.location.search);
  const utmParams = {};

  for (const [key, value] of urlParams.entries()) {
    if (key.startsWith('utm_')) {
      utmParams[key] = value;
    }
  }

  return Object.keys(utmParams).length > 0 ? utmParams : [];
}

// Function to detect the referrer or mark traffic as direct
function getTrafficSource() {
  const referrer = document.referrer;
  if (referrer) {
    return referrer;
  } else {
    return 'direct';
  }
}

(async function () {
  // Fetch the sourceUrl from the data-source attribute
  const registeredDomain = getSourceFromScriptTag() || '';

  function createVisitorSession() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  const pageUrl = window.location.href;

  function getBrowserInfo() {
    return navigator.userAgent;
  }

  const scriptVersion = '0.1.7';

  const session = createVisitorSession();
  const browserInfo = getBrowserInfo();
  const utmParams = getUTMParameters(); // UTM query parameters
  const trafficSource = getTrafficSource(); // Referrer or Direct Traffic

  const payload = {
    session: session,
    pageUrl: pageUrl,
    registeredDomain: registeredDomain,
    browserInfo: browserInfo,
    utmParams: utmParams,
    trafficSource: trafficSource, // Referrer or Direct Traffic
    scriptVersion: scriptVersion,
  };

  try {
    await fetch('https://sink.metrics.gmbh/webvisit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    console.log('Data sent successfully:', payload);
  } catch (error) {
    console.error('Error sending data:', error);
  }
})();
