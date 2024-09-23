function getSourceFromScriptTag() {
    const scriptTag = document.currentScript; // Get the current script tag
    return scriptTag ? scriptTag.getAttribute('data-source') : '';
}

(async function () {
    const sourceUrl = getSourceFromScriptTag() || '';

    function createVisitorSession() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    const pageUrl = window.location.href;

    async function getIPAddress() {
        try {
            const response = await fetch('https://api64.ipify.org?format=json');
            const data = await response.json();
            return data.ip;
        } catch (error) {
            console.error('Error fetching IP address:', error);
            return null;
        }
    }

    function detectIPType(ipAddress) {
        return ipAddress.includes(':') ? 'IPv6' : 'IPv4';
    }

    function getBrowserInfo() {
        return navigator.userAgent;
    }

    const scriptVersion = "0.1.0";

    const session = createVisitorSession();
    const ipAddress = await getIPAddress();
    const ipType = ipAddress ? detectIPType(ipAddress) : null;
    const browserInfo = getBrowserInfo();

    const payload = {
        session: session,
        pageUrl: pageUrl,
        sourceUrl: sourceUrl,
        ipAddress: ipAddress,
        ipType: ipType,
        browserInfo: browserInfo,
        scriptVersion: scriptVersion
    };

    try {
        await fetch('https://sink.metrics.gmbh/webvisit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        console.log('Data sent successfully:', payload);
    } catch (error) {
        console.error('Error sending data:', error);
    }
})();
