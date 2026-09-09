// Gates a page's content behind a client-side password check.
// This is a casual-visitor deterrent, not real access control: the SHA-256
// hash below ships to the browser, so anyone reading the page source can
// still brute-force or look up the password. Do not use it to hide anything
// genuinely sensitive.
(function () {
    var body = document.body;
    var hash = body.getAttribute('data-gate-hash');
    var key = body.getAttribute('data-gate-key');
    if (!hash || !key) return;

    var storageKey = 'password-gate-unlocked-' + key;
    var gate = document.getElementById('password-gate');
    var content = document.getElementById('password-gate-content');
    var form = document.getElementById('password-gate-form');
    var input = document.getElementById('password-gate-input');
    var error = document.getElementById('password-gate-error');

    function unlock() {
        gate.hidden = true;
        content.hidden = false;
        var heading = content.querySelector('h1');
        if (heading) {
            heading.setAttribute('tabindex', '-1');
            heading.focus();
        }
    }

    try {
        if (sessionStorage.getItem(storageKey) === 'true') {
            unlock();
            return;
        }
    } catch (e) {
        // sessionStorage unavailable (private mode, etc.) - fall through to the form.
    }

    input.focus();

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var value = input.value.trim().toLowerCase();
        var data = new TextEncoder().encode(value);
        crypto.subtle.digest('SHA-256', data).then(function (buffer) {
            var digest = Array.from(new Uint8Array(buffer))
                .map(function (byte) { return byte.toString(16).padStart(2, '0'); })
                .join('');
            if (digest === hash) {
                try {
                    sessionStorage.setItem(storageKey, 'true');
                } catch (e) {
                    // Unlock for this view even if we can't persist it.
                }
                error.hidden = true;
                unlock();
            } else {
                error.hidden = false;
                input.select();
            }
        });
    });
})();
