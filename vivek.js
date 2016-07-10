var d = document;

    // var sNew = document.createElement("script");
    // sNew.setAttribute('type', 'text/javascript');
    // sNew.setAttribute('data-cfasync', 'false');
    // sNew.src = "https://p226865.clksite.com/adServe/banners?tid=226865_428139_0&tagid=2";
    // d.body.appendChild(sNew);

    vivek = [],
    yadav = [],
    _gEBC = function(a) {
        return d.getElementsByClassName(a)
    }
    _gEBT = function(a) {
        return d.getElementsByTagName(a)
    },
    rL = function(a) {
        var b = a;
        if (b) {
            b = b.replace(/((https?\:\/\/)|(www\.))(\S+)(\w{2,4})(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi, function(a) {
                var b = a;
                return b.match("^https?://") || (b = "http://" + b), '<a href="' + b + '" style="text-decoration:underline;color:blue;" target="_blank">' + a + "</a>"
            });
            var c = function(a) {
                    var b = /^#([a-zA-Z0-9_])/g;
                    a = a.replace(b, '<a href="/explore/tags/$1/">#$1</a>');
                    var c = /([^&])#([a-zA-Z0-9_]+)/g;
                    return a = a.replace(c, '$1<a href="/explore/tags/$2/">#$2</a>')
                },
                d = function(a) {
                    var b = /^@([a-zA-Z0-9._]+)/g;
                    a = a.replace(b, '<a href="/$1/">@$1</a>');
                    var c = /([^&])@([a-zA-Z0-9._]+)/g;
                    return a = a.replace(c, '$1<a href="/$2/">@$2</a>')
                };
            return b = c(b), b = c(b), b = d(b)
        }
    },
    dTlt = function() {
        var a = _gEBT("h1"),
            b = a.length;
        if (b > 0 && "https://www.instagram.com/" == location.href)
            for (var c = 0; c < b; c++) {
                var d = a[c].innerHTML;
                a[c].innerHTML = rL(d)
            }
    },
    cB = function() {
        var a = d.createElement("BUTTON"),
            b = d.createTextNode("DOWNLOAD");
        return a.setAttribute("class", "d_b"), a.appendChild(b), a.style.color = "white", a.style.backgroundColor = "teal", a.style.border = "1px solid white", a.style.height = "30px", a.style.cursor = "pointer", a.style.fontFamily = "helvetica", a.style.outline = "none", a
    },
    dT = function(a) {
        var a = a;
        if (a.parentNode.querySelector("._e3il2 img")) {
            var b = d.createElement("A");
            b.setAttribute("href", a.parentNode.querySelector("._e3il2 img").getAttribute("src")), b.setAttribute("download", a.parentNode.querySelector("._e3il2 img").getAttribute("src")), b.click()
        }else if(a.parentNode.querySelector("._sxolz img")) {
            var b = d.createElement("A");
            b.setAttribute("href", a.parentNode.querySelector("._sxolz img").getAttribute("src")), b.setAttribute("download", a.parentNode.querySelector("._sxolz img").getAttribute("src")), b.click()
        }else if(a.parentNode.querySelector("._qzesf video")) {
            var b = d.createElement("A");
            b.setAttribute("href", a.parentNode.querySelector("._qzesf video").getAttribute("src")), b.setAttribute("download", a.parentNode.querySelector("._qzesf video").getAttribute("src")), b.click()
        }
    },
    sDb = function() {
        for (var a = _gEBC("_622au").length, b = 0; b < a; b++) {
            var c = cB();
            _gEBC("_622au")[b].querySelector(".d_b") || _gEBC("_622au")[b].insertBefore(c, _gEBC("_622au")[b].childNodes[1]), c.onclick = function() {
                dT(this)
            }
        }
    },
    pAlt = function() {
        if ("https://www.instagram.com/" != window.location.href)
            for (var a = 0; a < _gEBC("_8mlbc").length; a++) vivek.push("https://www.instagram.com" + _gEBC("_8mlbc")[a].getAttribute("href")), yadav.push(_gEBC("_8mlbc")[a].querySelector("._jjzlb img").getAttribute("alt"))
    };

d.addEventListener("DOMNodeInserted", function(a) {
    var b = /https:\/\/www.instagram.com\/p\/+/;
    if (b.exec(window.location.href) && "DIV" == a.srcElement.tagName) {
        if (pAlt(), d.querySelector("._622au")) {
            var c = cB();
            d.querySelector("._sxolz").querySelector(".d_b") || d.querySelector("._sxolz").insertBefore(c, d.querySelector("._sxolz").childNodes[0]), c.onclick = function() {
                dT(this)
            }
        }
        if (d.querySelector("._djxz1")) {
            var c = cB();
            d.querySelector("._djxz1").querySelector(".d_b") || d.querySelector("._djxz1").insertBefore(c, d.querySelector("._djxz1").childNodes[0]), c.onclick = function() {
                dT(this)
            }
        }
        if (index = vivek.indexOf(window.location.href), index > -1) _gEBC("_31wak")[0] && (_gEBC("_31wak")[0].innerHTML = rL(yadav[index].toString()));
        else if (a.srcElement.querySelector("._jjzlb img")) {
            var e = a.srcElement.querySelector("._jjzlb img").getAttribute("alt");
            null === e ? _gEBC("_31wak")[0].innerHTML = "" : _gEBC("_31wak")[0].innerHTML = rL(yadav[index].toString());
        }
    }

        if("https://www.instagram.com/" == window.location.href && "ARTICLE" == a.srcElement.tagName){
            dTlt();
            sDb();
        }

}, !1), window.onload = function() {
    dTlt(), sDb(), pAlt()
};
