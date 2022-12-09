var relnojudul = 0;
var relmaxtampil = 6;
var numchars = 120;
var reljudul = new Array();
var relurls = new Array();
var relcuplikan = new Array();
var relgambar = new Array();

function saringtags(g, h) {
    var e = g.split("<");
    for (var f = 0; f < e.length; f++) {
        if (e[f].indexOf(">") != -1) {
            e[f] = e[f].substring(e[f].indexOf(">") + 1, e[f].length)
        }
    }
    e = e.join("");
    e = e.substring(0, h - 1);
    return e
}

function relpostimgcuplik(h) {
    for (var e = 0; e < h.feed.entry.length; e++) {
        var g = h.feed.entry[e];
        reljudul[relnojudul] = g.title.$t;
        postcontent = "";
        if ("content" in g) {
            postcontent = g.content.$t
        } else {
            if ("summary" in g) {
                postcontent = g.summary.$t
            }
        }
        relcuplikan[relnojudul] = saringtags(postcontent, numchars);
        if ("media$thumbnail" in g) {
            postimg = g.media$thumbnail.url
        } else {
            postimg = "//1.bp.blogspot.com/-htG7vy9vIAA/Tp0KrMUdoWI/AAAAAAAABAU/e7XkFtErqsU/s1600/grey.GIF"
        }
        relgambar[relnojudul] = postimg;
        for (var f = 0; f < g.link.length; f++) {
            if (g.link[f].rel == "alternate") {
                relurls[relnojudul] = g.link[f].href;
                break
            }
        }
        relnojudul++
    }
}

function contains(a, e) {
    for (var f = 0; f < a.length; f++) {
        if (a[f] == e) {
            return true
        }
    }
    return false
}

function artikelterkait() {
    var v = new Array(0);
    var w = new Array(0);
    var x = new Array(0);
    var A = new Array(0);
    for (var u = 0; u < relurls.length; u++) {
        if (!contains(v, relurls[u])) {
            v.length += 1;
            v[v.length - 1] = relurls[u];
            w.length += 1;
            w[w.length - 1] = reljudul[u];
            x.length += 1;
            x[x.length - 1] = relcuplikan[u];
            A.length += 1;
            A[A.length - 1] = relgambar[u]
        }
    }
    reljudul = w;
    relurls = v;
    relcuplikan = x;
    relgambar = A;
    for (var u = 0; u < reljudul.length; u++) {
        var B = Math.floor((reljudul.length - 1) * Math.random());
        var i = reljudul[u];
        var s = relurls[u];
        var y = relcuplikan[u];
        var C = relgambar[u];
        reljudul[u] = reljudul[B];
        relurls[u] = relurls[B];
        relcuplikan[u] = relcuplikan[B];
        relgambar[u] = relgambar[B];
        reljudul[B] = i;
        relurls[B] = s;
        relcuplikan[B] = y;
        relgambar[B] = C
    }
    var r = 0;
    var D = Math.floor((reljudul.length - 1) * Math.random());
    var z = D;
    var q;
    var t = document.URL;
    while (r < relmaxtampil) {
        if (relurls[D] != t) {
            q = "<li class='news-title clearfix'>";
            q += "<a href='" + relurls[D] + "' rel='nofollow' target='_top' title='" + reljudul[D] + "'><img alt='" + reljudul[D] + "' data-src='" + relgambar[D] + "' src='data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=' /></a>";
            q += "<a class='relinkjdulx' href='" + relurls[D] + "' target='_top'>" + reljudul[D] + "</a>";
            q += "<span class='news-text'>" + relcuplikan[D] + "</span>";
            q += "</li>";
            document.write(q);
            r++;
            if (r == relmaxtampil) {
                break
            }
        }
        if (D < reljudul.length - 1) {
            D++
        } else {
            D = 0
        }
        if (D == z) {
            break
        }
    }
};