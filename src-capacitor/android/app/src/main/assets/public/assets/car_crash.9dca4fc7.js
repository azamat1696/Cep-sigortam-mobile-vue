import{m as B,i as s,j as A,c as g,h as Q,k as c,g as p,l as u,ap as l}from"./index.30f5c437.js";var d=B({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(t,{slots:o}){const{proxy:{$q:n}}=p(),e=s(u,A);if(e===A)return console.error("QPage needs to be a deep child of QLayout"),A;if(s(l,A)===A)return console.error("QPage needs to be child of QPageContainer"),A;const r=g(()=>{const a=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof t.styleFn=="function"){const h=e.isContainer.value===!0?e.containerHeight.value:n.screen.height;return t.styleFn(a,h)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-a+"px":n.screen.height===0?a!==0?`calc(100vh - ${a}px)`:"100vh":n.screen.height-a+"px"}}),i=g(()=>`q-page${t.padding===!0?" q-layout-padding":""}`);return()=>Q("main",{class:i.value,style:r.value},c(o.default))}}),E="assets/home_page.f5137ee4.png",K="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAwCAYAAABE1blzAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMmSURBVHgB3Vn/ddMwEP7al/9JJ0BMkDBBxQSECWomIEyQMAEwQcIE0AlsJmg6gc0EKRMEXyTxHEWnH4nT2v7eOye2TtKddCfdSVdIx7imTzVNNdkQOA+V9f6k6UdNhaO8VSxq2ta0e0Fa4AKgWXsAsOsIrdAycgC7jlFrSmaOxklhCTWzl8ZYy1A65JihBdgNL+EWYg41ql9x2kIjdF1qI2N41pYsDzgTM6vBEm7B7EGghUgirZ+toy/bQsaOviTOwMpqLIvgaSoZY8IuoX1+llk833AiBMKzB/gXAokwZp76Wwf/GIezvfU1fu0pk9b7FwePgB+hcsI4sYw2/XuLR+IE5DgcTcHw+Tb+abibvXBc/TKyTo5ECIR9wWDOCPcT8ciZNjJPHXtgk7asFdL2myWORzSlQwE1IE2/miOtzxD/AUpEOnEDxhcEToeAMuuYwZGIMNMRU1E03n8j3JFLqEJTDKRuY6Lf/9S00VQxdQpNstGGRESftnlmCbw2hUxVIBznLjz1bf8/2hNHFvNrh0ICbiUn8CtPkFAKfGfKTV7pw1Lz3COMu5peQVndulmQwT+KfaSMFDMb/XNkBS8KMoE+zU4MHU1a2WFhU+l/GtWMRQdpplf6V4CP+/qKm5qezAy2kvp3DBk9jIK3GB7e08OYaGz23SdQ3nhDMxgb3PYNpNOUFBQYLiQpKD0MdEzxoaaPuPCdQCIKKLneQd1ZcBAUbE+Yws84jM5/QQXOXHBMNl/p33Phc5sCSrHmewV31iHo4YoEuD0x8/C36ccC/FmPZOq4+EvuVK1K/G6uuNpCBb4vbvA3jm9ixDCLxO9kUiuEs/9Y3IJ3hTdQGb9LBie4gNW2ad8J9HMH0rY7LDj+K/2HwxpqVsytrkA3UEGdEpBb3IH3S+Lr5N1fW5TTIhNz1tFXPJKJmsuMIeKt+ZOjX6YXQyUpZvbBtpb3LqGgh1Fwg+HhkR5GwTajkK5gP2nXGC72kzZKqFAh/jLl0qAzpFBwv98ZUhQsoPLCLkAg8tp6yCa6R8oi8xfdwUnyUvbObZoUwQt0B5Qa0UbukpV8b2kY/wHgicm7GXQDfwAAAABJRU5ErkJggg==",m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAwCAYAAAChS3wfAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQSSURBVHgB5VpLdtMwFL1AJ4wIK6iYMSOsoGIFLSvAO6CsoO4KWlaQsoKWEUN3yKxhBXGHjFJWEHyjp1hxFH9iKUnbe847tmVZ7+npffQxEBcDT9kJnhFGBSnnOSkowzMCOztBqQT7PMCe4CXCQXnK7gv6VtB1QUMp++ncEztVRkgFEBxhmr3r53lB3wu6K+hHQTfynh2/EHoy0DAmfiXXqZQRVikDeXcn9OSC4mVBp3JPU1eeOgmMIjLsUTwICY7ssEW9kVwV/IqKjgOEAUdxKHQszzTtccN3jAluliAeYOKGe/0n99Xy3niBcEgL+gLTqbRFfQVjKZBv2KFDKR841zrkWFaKq6gxWigppAIIBRPVaQkfawRgx+6k/jsYgevaVFhWShtF5TDZ5xJbxFeYjumGevT9GcpgGQJK+J5IuxPhobEFKJiIPhUBdE3dBEawCeLLNEPD1DuUC2isRnFOeB48QmVoZ/ohQF66oLcIFDT7gqaZIazp10HDWEGKntAwgs8CE+NFgrggD7qmN6O8QjPo079gzDaHMaVQ9F7aZ/r6jTh4LTz+bsqjOqcPCeW035TzN8VA2s+wARIYU00QDxqB/LQGlyjTrurw3Xx0YqcrwqbQWFagsRp/yLN2KZ4g/uhXeaWIB28Qf9HwgSroE+Lna8JulXF+QFM9gn+Oj8p9WzAQXlfK8rrKsUekisThqVBOZeuIdThQ7NiFfMt2NMx6xHWpgXwzlXcnWONyGqXvK2wXNiMoGOG03FPgFJvPN2x/7LN2mV6gTBNupRTbR4JloadCdtl8hTATsMxluk5jCrvBBH6ZDrGsoK4dvq6UaTLjrrBvkcANihy7wfmacgbCLmnyFmZLngshBvLPcrVYbNkxGIxQrtGtD+4SU5GFo0a57ARmnXW41LQfYdsYVV8k8PjHjmDNNZVnjXadJ9VtsytU4oA7D9il368D3ZPzApprl4G5hXHhe6fsDcrteFtn4RJ8MdtTSkXGaeB2M0c5c79xX2SBmXWhSaWzU5HxMjCfG9v5oUfbhEK4vNuGRlgOXm6HNfwLmj602C0+dQqHWIWKrIgM/qitPMKGdIOUDR6g+ag6h4kRY4Q/yT3H+hmndu6VXHnWYM8bKesx2h3B+TC2NxwB1/80/NnAdZVQ5EtZqqAzLI/2BH5kPXhrNnDgYZ5VynK5xtisuMbyjFOhG/rINFdqm8NRhbhQHeoyFhyh3FRV2BzzOUKo0+FtwZ5C98XC/x+bAmgBtzAjf4huJ8kuFguux6aAMer/OVBYVcoH5zmH6fyt/eCxKaAJOTou4/sqgOfvDx3qn2EP0SeXHqIbNuUzQSSs2xHaN0STkS7wB5v/q2cPNmNjjIiwh4ezPSaFyFDY7R7AOqJMGhHxH6tE2BUl9RevAAAAAElFTkSuQmCC";export{d as Q,E as _,K as a,m as b};