function loadCSS(e, t, n) {
    "use strict";
    var r = window.document.createElement("link"),
        a = t || window.document.getElementsByTagName("script")[0];
    r.rel = "stylesheet", r.href = e, r.media = "only x", a.parentNode.insertBefore(r, a), setTimeout(function() {
        r.media = n || "all"
    })
}

function resizeThumb(e, t) {
    for (var n = document.getElementById(e).getElementsByTagName("img"), r = 0; r < n.length; r++) n[r].src = n[r].src.replace(/\/s72\-c/, "/s" + t + "-c"), n[r].width = t, n[r].height = t
}
eval(function(e, t, n, r, a, s) {
    if (a = function(e) {
            return (e < 49 ? "" : a(parseInt(e / 49))) + ((e %= 49) > 35 ? String.fromCharCode(e + 29) : e.toString(36))
        }, !"".replace(/^/, String)) {
        for (; n--;) s[a(n)] = r[n] || a(n);
        r = [function(e) {
            return s[e]
        }], a = function() {
            return "\\w+"
        }, n = 1
    }
    for (; n--;) r[n] && (e = e.replace(new RegExp("\\b" + a(n) + "\\b", "g"), r[n]));
    return e
}("2 4=g f();2 9=0;2 6=g f();d z(m){c(2 i=0;i<m.u.5.3;i++){2 5=m.u.5[i];4[9]=5.v.$t;c(2 k=0;k<5.h.3;k++){b(5.h[k].A=='y'){6[9]=5.h[k].x;9++;C}}}}d B(){2 7=g f(0);2 8=g f(0);c(2 i=0;i<6.3;i++){b(!q(7,6[i])){7.3+=1;7[7.3-1]=6[i];8.3+=1;8[8.3-1]=4[i]}}4=8;6=7}d q(a,e){c(2 j=0;j<a.3;j++)b(a[j]==e)p M;p L}d D(){2 r=s.K((4.3-1)*s.I());2 i=0;n.l('<o>');E(i<4.3&&i<F){n.l('<w><a x=\"'+6[r]+'\" J =\"G\" v=\"'+4[r]+'\">'+4[r]+'</a></w>');b(r<4.3-1){r++}H{r=0}i++}n.l('</o>')}", 0, 49, "||var|length|relatedTitles|entry|relatedUrls|tmp|tmp2|relatedTitlesNum||if|for|function||Array|new|link||||write|json|document|ul|return|contains||Math||feed|title|li|href|alternate|related_results_labels|rel|removeRelatedDuplicates|break|printRelatedLabels|while|20|_blank|else|random|target|floor|false|true".split("|"), 0, {})), loadCSS("//maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css"), loadCSS("//fonts.googleapis.com/css?family=Maven+Pro:400,500,700"), $(document).ready(function() {
    jQuery(".post-body img").each(function() {
        var e = this;
        if (!(jQuery(this).attr("src", jQuery(this).attr("src").replace("s1600", "s550").replace("s600", "s550").replace("s800", "s550")) || "").length > 0) {
            var t = jQuery(this).attr("lsrc", jQuery(this).attr("lsrc").replace("s1600", "s550")) || "";
            if (e.src = t, t.length > 0) {
                var n = new Image;
                n.src = t, $(n).load(function() {
                    e.src = this.src
                })
            }
        }
    })
}), $(window).on("load", function() {
    $("#page-loader").fadeOut(1e3), $("#page-loader").remove(), $("body").css("overflow", "auto")
}), $(window).on("beforeunload", function() {
    $("body").css("overflow", "hidden")
}), $(function() {
    $(".separator:first").remove(), $(".post-body > img:first").remove()
});
var slideIndex = 1;

function plusSlides(e, t, n) {
    showSlides(slideIndex += e, t, n)
}

function currentSlide(e, t, n) {
    showSlides(slideIndex = e, t, n)
}

function showSlides(e, t, n) {
    var r, a = document.getElementsByClassName(t),
        s = document.getElementsByClassName(n);
    if (null !== a) {
        for (e > a.length && (slideIndex = 1), e < 1 && (slideIndex = a.length), r = 0; r < a.length; r++) a[r].style.display = "none";
        for (r = 0; r < s.length; r++) s[r].className = s[r].className.replace(" active", "");
        a[slideIndex - 1].style.display = "block"
    }
}

function ASSetCookie(e, t, n) {
    var r = new Date;
    r.setDate(r.getDate() + n);
    var a = escape(t) + (0 == n ? ";path=/" : "; expires=" + r.toUTCString()) + ";path=/";
    document.cookie = e + "=" + a
}

function ASGetCookie(e) {
    var t, n, r, a = document.cookie.split(";");
    for (t = 0; t < a.length; t++)
        if (n = a[t].substr(0, a[t].indexOf("=")), r = a[t].substr(a[t].indexOf("=") + 1), (n = n.replace(/^\s+|\s+$/g, "")) == e) return unescape(r)
}

function ASSetCookieAds(e, t) {
    var n = ASGetCookie(e);
    null != n && "" != n ? (ASTheCookieInt = parseInt(n) + 1, ASSetCookie(e, ASTheCookieInt.toString(), 0)) : ASSetCookie(e, "1", t)
}

function ASMaxClick(e, t) {
    var n = ASGetCookie(e);
    return null != n && parseInt(n) >= t
}
$(function() {
    if ($(".sidebar-sticky").length) {
        var e = $(".sidebar-sticky"),
            t = $(".sidebar-sticky").offset().top;
        $(window).scroll(function() {
            var n = $(".sidebar-sticky").height(),
                r = $("#footer-wrapper").offset().top - n - 120,
                a = $(window).scrollTop(),
                s = $(window).width();
            if (t < a && s > 759 ? e.css({
                    position: "fixed",
                    top: 65
                }) : e.css("position", "static"), r < a) {
                var i = r - a;
                e.css({
                    top: i
                })
            }
        })
    }
}), $(window).scroll(function() {
    $(this).scrollTop() > 200 ? $("#back-to-top").fadeIn() : $("#back-to-top").fadeOut()
}), $("#back-to-top").hide().click(function() {
    return $("html, body").animate({
        scrollTop: 0
    }, 1e3), !1
}), $("ul li:has(ul)").addClass("has-submenu"), $("ul li ul").addClass("sub-menu"), $("ul.dropdown li").click(function() {
    $(this).addClass("hover")
}, function() {
    $(this).removeClass("hover")
});
var $menu = $("#menu"),
    $menulink = $("#spinner-form"),
    $search = $("#search"),
    $search_box = $(".search_box"),
    $menuTrigger = $(".has-submenu > a");
$menulink.click(function(e) {
    $menulink.toggleClass("active"), $menu.toggleClass("active"), $("#blank").toggleClass("blank-show"), $search.hasClass("active") && $(".menu.active").css("padding-top", "50px")
}), $search.click(function(e) {
    e.preventDefault(), $search_box.toggleClass("active")
}), $menuTrigger.click(function(e) {
    e.preventDefault(), $(this).toggleClass("active").next("ul").toggleClass("active")
}), $("ul li:has(ul)"), $(function() {
    var e = $(document).scrollTop(),
        t = $(".nav_wrapper").outerHeight();
    $(window).scroll(function() {
        var n = $(document).scrollTop();
        $(document).scrollTop(), $(".nav_wrapper").css("position"), n > t ? $(".nav_wrapper").addClass("scroll") : $(".nav_wrapper").removeClass("scroll"), n > e ? $(".nav_wrapper").removeClass("no-scroll") : $(".nav_wrapper").addClass("no-scroll"), e = $(document).scrollTop()
    })
});
var numfeed = 4,
    startfeed = 0,
    urlblog = "https://blog.nizwar.id",
    charac = 45,
    urlprevious, urlnext;

function nizwarFeed(e, t) {
    for (var n = e.split("<"), r = 0; r < n.length; r++) - 1 != n[r].indexOf(">") && (n[r] = n[r].substring(n[r].indexOf(">") + 1, n[r].length));
    return (n = n.join("")).substring(0, t - 1)
}

function showrecentpostsae(e) {
    var t, n, r, a, s = "";
    urlprevious = "", urlnext = "";
    for (var i = 0; i < e.feed.link.length; i++) "previous" == e.feed.link[i].rel && (urlprevious = e.feed.link[i].href), "next" == e.feed.link[i].rel && (urlnext = e.feed.link[i].href);
    for (var o = 0; o < numfeed && o != e.feed.entry.length; o++) {
        for (n = (t = e.feed.entry[o]).title.$t, i = 0; i < t.link.length; i++)
            if ("alternate" == t.link[i].rel) {
                r = t.link[i].href;
                break
            } a = "content" in t ? t.content.$t : "summary" in t ? t.summary.$t : "", s += "<div class='recentpostel'>", s += "<a href='" + r + "' target='_blank'><img alt='" + r + "' class='lazy' data-src='" + ("media$thumbnail" in t ? t.media$thumbnail.url : "https://3.bp.blogspot.com/-BHuXHny1kOk/VXrkSyxKCjI/AAAAAAAACas/pZLJAEUDtds/s1600/no-image.png") + "' /></a>", s += "<h6><a href='" + r + "'>" + n + "</a></h6>", s += "<p>" + nizwarFeed(a, charac) + "...</p>", s += "</div>"
    }
    document.getElementById("recentpostsae").innerHTML = s, s = "", s += urlprevious ? "<a href='javascript:navigasifeed(-1);' class='previousA'>Previous</a>" : "<span class='noactived previousA'>Previous</span>", s += urlnext ? "<a href='javascript:navigasifeed(1);' class='nextA'>Next</a>" : "<span class='noactived nextA'>Next</span>", s += "<a href='javascript:navigasifeed(0);' class='home'>Home</a>", document.getElementById("recentpostnavfeed").innerHTML = s
}

function navigasifeed(e) {
    var t, n; - 1 == e ? (t = urlprevious.indexOf("?"), n = urlprevious.substring(t)) : 1 == e ? (t = urlnext.indexOf("?"), n = urlnext.substring(t)) : n = "?start-index=1&max-results=" + numfeed + "&orderby=published&alt=json-in-script", incluirscript(n += "&callback=showrecentpostsae")
}

function incluirscript(e) {
    1 == startfeed && removerscript(), document.getElementById("recentpostsae").innerHTML = "<div id='recentpostload'></div>", document.getElementById("recentpostnavfeed").innerHTML = "";
    var t = urlblog + "/feeds/posts/summary" + e,
        n = document.createElement("script");
    n.setAttribute("type", "text/javascript"), n.setAttribute("src", t), n.setAttribute("id", "nizwarlabel"), document.getElementsByTagName("head")[0].appendChild(n), startfeed = 1
}

function removerscript() {
    var e = document.getElementById("nizwarlabel");
    e.parentNode.removeChild(e)
}
onload = function() {
    navigasifeed(0)
};

function MasTamvan() {
    for (var e = document.getElementsByClassName("lazy"), t = 0; t < e.length; t++) isInViewport(e[t]) && (e[t].src = e[t].getAttribute("data-src"))
}

function isInViewport(e) {
    var t = e.getBoundingClientRect();
    return 0 <= t.bottom && 0 <= t.right && t.top <= (window.innerHeight || document.documentElement.clientHeight) && t.left <= (window.innerWidth || document.documentElement.clientWidth)
}

function registerListener(e, t) {
    window.addEventListener ? window.addEventListener(e, t) : window.attachEvent("on" + e, t)
}
registerListener("load", MasTamvan), registerListener("scroll", MasTamvan), document.addEventListener("DOMContentLoaded", function() {
    "use strict";
    for (var e = document.querySelectorAll("a"), t = e.length, l = /firefox|trident/i.test(navigator.userAgent) ? document.documentElement : document.body; t--;) e.item(t).addEventListener("click", function(e) {
        if (null != document.getElementById(/[^#]+$/.exec(this.href)[0])) {
            var d, a = l.scrollTop,
                t = document.getElementById(/[^#]+$/.exec(this.href)[0]).getBoundingClientRect().top,
                n = l.scrollHeight - window.innerHeight,
                c = a + t < n ? t : n - a,
                s = function(e) {
                    var t, n, i, o = e - (d = d || e),
                        r = (t = o, n = a, i = c, (t /= 900 / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n);
                    l.scrollTop = r, o < 900 && requestAnimationFrame(s)
                };
            requestAnimationFrame(s), e.preventDefault()
        }
    })
});
