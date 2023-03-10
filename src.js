_
    ._([document.createElement('link')])._(([_]) => { _._({ rel: 'manifest' }) })._(([_]) => document.head.replaceChildren(_))._(([_]) => {
        _.setAttribute("href", 'data:application/json;base64,' + btoa(JSON.stringify({
            "name": "QR - ENC",
            "icons": [{ "src": location.origin + "/favicon.png", "sizes": "192x192" }],
            "start_url": location.origin,
            "share_target": { "action": location.origin + "/share", "method": "POST", "enctype": "multipart/form-data", "params": { "title": "title", "text": "text", "url": "url", "files": [{ "name": "files", "accept": ["*/*", ".*"] }] } },
            "display": "standalone"
        })))
    })
    ._([document.createElement('script')])
    ._([`https://cdnjs.cloudflare.com/ajax/libs/qrcode/1.5.1/qrcode.min.js`])
    ._([_ => {
        _
            ._([document.createElement('img')])
            ._(([_]) => { _._(_ => _.style)._({ maxWidth: '100%' }) })
            ._(([_]) => { _._({ src: 'favicon.png' }) })
            ._(([$]) => { dispatchEvent(new Event('qr')._({ f: _ => QRCode.toDataURL(_).then(_ => { $._({ src: _ }) }).catch(_ => alert('FAILED')) })) })
            ._([document.createElement('textarea')])
            ._(([_]) => { _._({ rows: 8, placeholder: 'enter text here ...' }) })
            ._(([_]) => { _._(_ => _.style)._({ width: '100%', display: 'block' }) })
            ._(([_, $]) => { _._({ oninput: _ => _._(_ => _.target.value)._(_ => `${_}` ? QRCode.toDataURL(`${_}`).then(_ => { $._({ src: _ }) }) : $._({ src: 'favicon.png' })) }) })
            ._([document.createElement('h1')])
            ._(([_]) => { _._({ innerText: 'QR - ENC' }) })
            ._(_ => document.body.replaceChildren(..._))
    }])
    ._(([onload, src, _]) => [_._({ src, onload })])
    ._([document.createElement('meta')])
    ._(([_]) => { _._({ name: 'viewport', content: 'width=device-width, initial-scale=1.0' }) })
    ._([document.createElement('link')])
    ._(([_]) => { _._({ rel: 'icon', href: 'favicon.png' }) })
    ._([document.createElement('meta')])
    ._(([_]) => { _.setAttribute('charset', 'UTF-8') })
    ._([document.createElement('title')])
    ._(([_]) => { _._({ innerText: 'QR - ENC' }) })
    ._(_ => document.head.append(..._))
    ._(_ => document.body.replaceChildren('LOADING ...'))
    ._(_ => document.body.style._({ textAlign: 'center' }))
    ._(_ => navigator.serviceWorker?.register('_.js'))
    ._(_ => navigator.serviceWorker?.addEventListener("message", _ => window.addEventListener('qr', ({ f }) => { f(_.data.files.length > 0 ? _.data.files[0].text() : _.data.url ?? _.data.text ?? _.data.title) })))


