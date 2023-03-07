_
    ._([document.createElement('script')])
    ._([`https://cdnjs.cloudflare.com/ajax/libs/qrcode/1.5.1/qrcode.min.js`])
    ._([_ => {
        _
            ._([document.createElement('img')])
            ._([document.createElement('br')])
            ._([document.createElement('textarea')])
            ._(([_]) => { _._(_ => _.style)._({ width: '100%' }) })
            ._(([_, , $]) => { _._({ oninput: _ => _._(_ => _.target.value)._(_ => QRCode.toDataURL(`${_}`).then(_ => { $._({ src: _ }) })) }) })
            ._(_ => document.body.replaceChildren(..._))
    }])
    ._(([onload, src, _]) => [_._({ src, onload })])
    ._([document.createElement('link')])._(([_]) => {
        const path = location.origin
        _._({
            rel: 'manifest', href: URL.createObjectURL(new Blob([JSON.stringify({
                "name": "QR - ENC",
                "icons": [{ "src": path + "/favicon.png", "sizes": "192x192" }],
                "start_url": path,
                "share_target":
                {
                    "action": path + "/share",
                    "method": "POST",
                    "enctype": "multipart/form-data",
                    "params": { "title": "title", "text": "text", "url": "url", "files": [{ "name": "files", "accept": ["*"] }] }
                },
                "display": "standalone"
            })], { type: 'application/json' }))
        })
    })
    ._([document.createElement('meta')])._(([_]) => { _._({ name: 'viewport', content: "width=device-width, initial-scale=1" }) })
    ._([document.createElement('meta')])._(([_]) => { _.setAttribute("charset", "UTF-8") })
    ._([document.createElement('title')])._(([_]) => { _._({ innerText: 'QR - ENC' }) })
    ._((_) => document.head.replaceChildren(..._))
    ._((_) => { navigator.serviceWorker.register('_.js') })

