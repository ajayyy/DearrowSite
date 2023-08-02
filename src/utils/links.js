export const extensionLinks = {
    chrome: "https://chrome.google.com/webstore/detail/enamippconapkdmgfgjchkhakpfinmaj",
    firefox: "https://addons.mozilla.org/firefox/addon/dearrow",
};

export function getHashParams() {
    if (typeof window === 'undefined') return {};

    const hash = window.location.hash.slice(1);
    return hash.split('&').reduce((acc, param) => {
        const [key, value] = param.split('=');
        acc[key] = parseValue(value);
        return acc;
    }, {});
}

function parseValue(value) {
    if (value === 'true') {
        return true;
    } else if (value === 'false') {
        return false;
    } else if (Number.isFinite(value)) {
        return Number(value);
    }
    return decodeURIComponent(value);
}