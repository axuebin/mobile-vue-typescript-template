export function qs() {
    const { href } = window.location;
    const result = {};
    let param = null;
    const reg = /[?&](.*?)=([^&#]*)/g;
    param = reg.exec(href);
    while (param) {
        try {
            result[param[1]] = decodeURIComponent(param[2]);
        } catch (e) {
            try {
                result[param[1]] = unescape(param[2]);
            } catch (escapeErr) {
                result[param[1]] = param[2]; // eslint-disable-line
            }
        }
        param = reg.exec(href);
    }
    return result;
}
