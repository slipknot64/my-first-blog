function _typeof(e) {
  return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
}

function changeBg(e, t, i) {
  return !e || (e.style.backgroundImage == "url(" + t + ")" ? e.style.backgroundImage = "url(" + i + ")" : e.style.backgroundImage = "url(" + t + ")", !0)
}

function toggleOn(e) {
  var t = document.getElementById(e);
  return !t || (t.style.display = "block", !0)
}

function toggleOff(e) {
  var t = document.getElementById(e);
  return !t || (t.style.display = "none", !0)
}

function toggle(e) {
  var t = document.getElementById(e);
  if ("block" != t.style.display) {
    if (!t) return !0;
    t.style.display = "block"
  } else t.style.display = "none"
}

function toggleOnnb(e) {
  var t = document.getElementById(e);
  return !t || (t.style.display = "", !0)
}

function toggleOffnb(e) {
  var t = document.getElementById(e);
  return !t || (t.style.display = "none", !0)
}

function togglenb(e) {
  var t = document.getElementById(e);
  if ("" != t.style.display) {
    if (!t) return !0;
    t.style.display = ""
  } else t.style.display = "none"
}

function toggleByClass(e) {
  var t = document.getElementByClassName(e);
  if ("block" != t.style.display) {
    if (!t) return !0;
    t.style.display = "block"
  } else t.style.display = "none"
}

function MM_jumpMenu(targ, selObj, restore) {
  eval(targ + ".location='" + selObj.options[selObj.selectedIndex].value + "'"), restore && (selObj.selectedIndex = 0)
}

function openPopup(e, t, i) {
  t || (t = 600), i || (i = 600), t = 600, i = 600, popup = window.open(e, "popup", "width=" + t + ", height=" + i + ", scrollbars=no")
}

function showLayer(e) {
  makeHistory(e), document.getElementById(currentLayer).className = "hide", document.getElementById(e).className = "show", currentLayer = e
}

function showTab(e) {
  document.getElementById(currentTab).className = "taboff", document.getElementById(e).className = "tabon", currentTab = e
}

function makeHistory(e) {
  return window.location.hash = "_" + e, expectedHash = window.location.hash, !0
}

function handleHistory() {
  return window.location.hash != expectedHash && (expectedHash = window.location.hash, expectedHash.match("tab") && showLayer(expectedHash.substring(2))), !0
}

function pollHash() {
  return handleHistory(), window.setInterval("handleHistory()", 200), !0
}

function toggleDiv(e) {
  "none" == document.getElementById(e).style.display ? (document.getElementById(e).style.display = "block", document.getElementById("head_" + e).className = "function_cat open") : (document.getElementById(e).style.display = "none", document.getElementById("head_" + e).className = "function_cat closed")
}

function MM_swapImgRestore() {
  var e, t, i = document.MM_sr;
  for (e = 0; i && e < i.length && (t = i[e]) && t.oSrc; e++) t.src = t.oSrc
}

function MM_preloadImages() {
  var e = document;
  if (e.images) {
    e.MM_p || (e.MM_p = new Array);
    var t, i = e.MM_p.length,
      n = MM_preloadImages.arguments;
    for (t = 0; t < n.length; t++) 0 != n[t].indexOf("#") && (e.MM_p[i] = new Image, e.MM_p[i++].src = n[t])
  }
}

function MM_findObj(e, t) {
  var i, n, o;
  for (t || (t = document), (i = e.indexOf("?")) > 0 && parent.frames.length && (t = parent.frames[e.substring(i + 1)].document, e = e.substring(0, i)), !(o = t[e]) && t.all && (o = t.all[e]), n = 0; !o && n < t.forms.length; n++) o = t.forms[n][e];
  for (n = 0; !o && t.layers && n < t.layers.length; n++) o = MM_findObj(e, t.layers[n].document);
  return !o && t.getElementById && (o = t.getElementById(e)), o
}

function MM_swapImage() {
  var e, t, i = 0,
    n = MM_swapImage.arguments;
  for (document.MM_sr = new Array, e = 0; e < n.length - 2; e += 3) null != (t = MM_findObj(n[e])) && (document.MM_sr[i++] = t, t.oSrc || (t.oSrc = t.src), t.src = n[e + 2])
}

function isTouchDevice() {
  var e = document.createElement("div");
  return e.setAttribute("ontouchstart", "return;"), "function" == typeof e.ontouchstart
}

function scrolling(e) {
  var t = $(e),
    i = t.offset().top,
    n = $("#header").outerHeight();
  $("html,body").animate({
    scrollTop: i - n
  }, 800)
}

function set_background(e) {
  $("#coupon_background_image").css("background-image", "url(" + e + ")")
}

function set_background_active(e) {
  $(".dc_background").removeClass("active"), $("#dc_background_" + e).addClass("active"), $("#input_background_image_id").val(e)
}

function set_amount_active(e) {
  $(".dc_amount").removeClass("active"), $("#dc_amount_" + e).addClass("active"), $("#input_amount_id").val(e), $("#input_coupon_amount").val("")
}

function setCurrentToolbarClicked(e) {}

function showUl() {
  $(this).addClass("hoverintent")
}

function hideUl() {
  $(this).removeClass("hoverintent")
}

function showUlPrimary() {
  if ($(this).addClass("hoverintent"), 0 == $(this).children("ul").children(".arrow").length) {
    $(this).children("ul").append("<div class='arrow'></div>");
    $(this).children("ul").children(".arrow").css("left", $(this).position().left + $(this).width() / 2 + "px")
  }
}

function hideUlPrimary() {
  $(this).removeClass("hoverintent")
}

function showItemlistNoExt() {
  $(this).addClass("hoverintent")
}

function hideItemlistNoExt() {
  $(this).removeClass("hoverintent")
}

function showItemlistExt() {
  $(this).addClass("hoverintent")
}

function hideItemlistExt() {
  $(this).removeClass("hoverintent")
}

function dc_checkVat(e, t, i, n) {
  if (error = !1, e.is(":visible") && "" != t && i.length > 0 && -1 != $.inArray(n, i)) {
    jsvat.checkVAT(t).isValid ? e.parent().removeClass("has-danger") : (e.parent().addClass("has-danger"), error = !0)
  } else e.parent().hasClass("has-danger") && e.parent().removeClass("has-danger");
  return error
}

function initScrolltopbutton(e) {
  if ($(window).scrollTop() > 0) {
    e.addClass("sticky");
    e.offset().top, e.outerHeight();
    e.css("bottom", "")
  } else e.removeClass("sticky");
  $(window).scroll(function() {
    if ($(window).scrollTop() > 0) {
      e.addClass("sticky");
      e.offset().top, e.outerHeight();
      e.css("bottom", "")
    } else e.removeClass("sticky")
  }), e.click(function() {
    $("html,body").animate({
      scrollTop: 0
    }, 800)
  })
}

function toggle_mobile_menu() {
  var e = $("#primary_navigation_mobile").width(),
    t = $("#container").width();
  $("#container").hasClass("open_menu") ? ($("#overlay").animate({
    opacity: 0
  }, 100, function() {
    $("#container").animate({
      left: 0
    }, 200, function() {
      $("#container").removeClass("open_menu"), $("#container").width("auto"), $("#overlay").css("left", "120%"), $("#overlay").removeClass("open_menu")
    }), $("#primary_navigation_mobile").hide()
  }), "fixed" == $("header").css("position") && $("header").animate({
    left: 0
  }, 200)) : ($(".modal").modal("hide"), $("#primary_navigation_mobile").show(), $("#container").addClass("open_menu"), $("#container").width(t), $("#container").css("top", 0), $("#overlay").css("left", e), $("#overlay").addClass("open_menu"), $("#container").animate({
    left: e
  }, 200, function() {
    $("#overlay").animate({
      opacity: .6
    }, 100)
  }))
}

function stickyHeader() {
  var e = $("#header"),
    t = ($("#header"), "sticky"),
    i = $("#header_account").outerHeight();
  checkSticky(e, t, i), $(window).scroll(function() {
    checkSticky(e, t, i)
  }), $(window).resize(function() {
    var i = $("#header_account").outerHeight();
    checkSticky(e, t, i)
  })
}

function checkSticky(e, t, i) {
  if ($(window).scrollTop() > i) {
    var n = e.css("position");
    e.addClass(t), "fixed" != n && e.prev(".sticky-helper").length < 1 && e.before('<div class="sticky-helper" style="height:' + e.outerHeight() + 'px"></div>')
  } else e.removeClass(t), $(".sticky-helper").remove()
}

function itemsearchSuggest(e) {
  var t, i = {},
    n = $("#search_data");
  i.company = $(n).data("company"), i.shop_code = $(n).data("shop_code"), i.language_code = $(n).data("language_code"), i.site_language = $(n).data("site_language"), i.item_source = $(n).data("item_source"), i.site_code = $(n).data("site_code"), i.sid = $(n).data("sid"), i.image_config = $(n).data("image_config"), i.default_img = $(n).data("default_img"), i.input_search = e, i.customer_no = $(n).data("customer_no"), t = JSON.stringify(i), $.ajax({
    type: "POST",
    url: "/module/dcshop/b2c/ajax_itemsearch.php",
    data: t,
    dataType: "json",
    converters: {
      "text json": !0
    },
    beforeSend: function() {
      $("#itemsearch_suggestion_wrapper").hide().empty()
    }
  }).done(function(e) {
    console.log(e), $("#itemsearch_suggestion_wrapper").html(e).show(0, function() {
      var e = $(".search_suggestion");
      $(document).on("keydown", function(e) {
        var t = e || window.event;
        if (38 == t.keyCode || 40 == t.keyCode) return e.preventDefault(), !1
      }), $("#input_search").on("keyup", function(t) {
        var i = t || window.event;
        t.keyCode ? t.keyCode : t.which;
        40 === i.keyCode && void 0 !== e && e.length && $(e).first().addClass("hasfocus").focus()
      }), $(".search_suggestion").on("click", function() {
        var e = $(this).data("newhref");
        void 0 !== e && e.length && (window.location.href = e)
      }), $(".search_suggestion").on("keyup", function(t) {
        var i, n, o = $(this).data("newhref"),
          s = t || window.event,
          a = (s.keyCode ? s.keyCode : s.which, $(this)),
          r = $(a).data("suggestionindex");
        13 == s.keyCode && void 0 !== o && o.length ? window.location.href = o : 40 === s.keyCode && void 0 !== e && e.length ? (i = r + 1, void 0 !== (n = $("#item_search_suggestions").find("[data-suggestionIndex='" + i + "']")) && n.length && ($(n).siblings().removeClass("hasfocus"), $(n).addClass("hasfocus").focus())) : 38 === s.keyCode && void 0 !== e && e.length && (i = r - 1, n = $("#item_search_suggestions").find("[data-suggestionIndex='" + i + "']"), void 0 !== n && n.length ? ($(n).siblings().removeClass("hasfocus"), $(n).addClass("hasfocus").focus()) : ($(".search_suggestion").removeClass("hasfocus"), $("#input_search").focus()))
      })
    })
  }).fail(function() {
    $("#itemsearch_suggestion_wrapper").hide().empty()
  })
}! function(e, t) {
  function i(e) {
    var t = e.length,
      i = le.type(e);
    return !le.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === i || "function" !== i && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)))
  }

  function n(e) {
    var t = Ee[e] = {};
    return le.each(e.match(de) || [], function(e, i) {
      t[i] = !0
    }), t
  }

  function o(e, i, n, o) {
    if (le.acceptData(e)) {
      var s, a, r = le.expando,
        l = "string" == typeof i,
        c = e.nodeType,
        d = c ? le.cache : e,
        u = c ? e[r] : e[r] && r;
      if (u && d[u] && (o || d[u].data) || !l || n !== t) return u || (c ? e[r] = u = Q.pop() || le.guid++ : u = r), d[u] || (d[u] = {}, c || (d[u].toJSON = le.noop)), ("object" == typeof i || "function" == typeof i) && (o ? d[u] = le.extend(d[u], i) : d[u].data = le.extend(d[u].data, i)), s = d[u], o || (s.data || (s.data = {}), s = s.data), n !== t && (s[le.camelCase(i)] = n), l ? null == (a = s[i]) && (a = s[le.camelCase(i)]) : a = s, a
    }
  }

  function s(e, t, i) {
    if (le.acceptData(e)) {
      var n, o, s, a = e.nodeType,
        l = a ? le.cache : e,
        c = a ? e[le.expando] : le.expando;
      if (l[c]) {
        if (t && (s = i ? l[c] : l[c].data)) {
          le.isArray(t) ? t = t.concat(le.map(t, le.camelCase)) : t in s ? t = [t] : (t = le.camelCase(t), t = t in s ? [t] : t.split(" "));
          for (n = 0, o = t.length; o > n; n++) delete s[t[n]];
          if (!(i ? r : le.isEmptyObject)(s)) return
        }(i || (delete l[c].data, r(l[c]))) && (a ? le.cleanData([e], !0) : le.support.deleteExpando || l != l.window ? delete l[c] : l[c] = null)
      }
    }
  }

  function a(e, i, n) {
    if (n === t && 1 === e.nodeType) {
      var o = "data-" + i.replace(_e, "-$1").toLowerCase();
      if ("string" == typeof(n = e.getAttribute(o))) {
        try {
          n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Se.test(n) ? le.parseJSON(n) : n)
        } catch (e) {}
        le.data(e, i, n)
      } else n = t
    }
    return n
  }

  function r(e) {
    var t;
    for (t in e)
      if (("data" !== t || !le.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
    return !0
  }

  function l() {
    return !0
  }

  function c() {
    return !1
  }

  function d(e, t) {
    do {
      e = e[t]
    } while (e && 1 !== e.nodeType);
    return e
  }

  function u(e, t, i) {
    if (t = t || 0, le.isFunction(t)) return le.grep(e, function(e, n) {
      return !!t.call(e, n, e) === i
    });
    if (t.nodeType) return le.grep(e, function(e) {
      return e === t === i
    });
    if ("string" == typeof t) {
      var n = le.grep(e, function(e) {
        return 1 === e.nodeType
      });
      if (qe.test(t)) return le.filter(t, n, !i);
      t = le.filter(t, n)
    }
    return le.grep(e, function(e) {
      return le.inArray(e, t) >= 0 === i
    })
  }

  function h(e) {
    var t = Ue.split("|"),
      i = e.createDocumentFragment();
    if (i.createElement)
      for (; t.length;) i.createElement(t.pop());
    return i
  }

  function f(e, t) {
    return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
  }

  function p(e) {
    var t = e.getAttributeNode("type");
    return e.type = (t && t.specified) + "/" + e.type, e
  }

  function m(e) {
    var t = ot.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e
  }

  function g(e, t) {
    for (var i, n = 0; null != (i = e[n]); n++) le._data(i, "globalEval", !t || le._data(t[n], "globalEval"))
  }

  function v(e, t) {
    if (1 === t.nodeType && le.hasData(e)) {
      var i, n, o, s = le._data(e),
        a = le._data(t, s),
        r = s.events;
      if (r) {
        delete a.handle, a.events = {};
        for (i in r)
          for (n = 0, o = r[i].length; o > n; n++) le.event.add(t, i, r[i][n])
      }
      a.data && (a.data = le.extend({}, a.data))
    }
  }

  function y(e, t) {
    var i, n, o;
    if (1 === t.nodeType) {
      if (i = t.nodeName.toLowerCase(), !le.support.noCloneEvent && t[le.expando]) {
        o = le._data(t);
        for (n in o.events) le.removeEvent(t, n, o.handle);
        t.removeAttribute(le.expando)
      }
      "script" === i && t.text !== e.text ? (p(t).text = e.text, m(t)) : "object" === i ? (t.parentNode && (t.outerHTML = e.outerHTML), le.support.html5Clone && e.innerHTML && !le.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === i && tt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === i ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === i || "textarea" === i) && (t.defaultValue = e.defaultValue)
    }
  }

  function b(e, i) {
    var n, o, s = 0,
      a = typeof e.getElementsByTagName !== X ? e.getElementsByTagName(i || "*") : typeof e.querySelectorAll !== X ? e.querySelectorAll(i || "*") : t;
    if (!a)
      for (a = [], n = e.childNodes || e; null != (o = n[s]); s++) !i || le.nodeName(o, i) ? a.push(o) : le.merge(a, b(o, i));
    return i === t || i && le.nodeName(e, i) ? le.merge([e], a) : a
  }

  function C(e) {
    tt.test(e.type) && (e.defaultChecked = e.checked)
  }

  function x(e, t) {
    if (t in e) return t;
    for (var i = t.charAt(0).toUpperCase() + t.slice(1), n = t, o = St.length; o--;)
      if ((t = St[o] + i) in e) return t;
    return n
  }

  function w(e, t) {
    return e = t || e, "none" === le.css(e, "display") || !le.contains(e.ownerDocument, e)
  }

  function E(e, t) {
    for (var i, n, o, s = [], a = 0, r = e.length; r > a; a++) n = e[a], n.style && (s[a] = le._data(n, "olddisplay"), i = n.style.display, t ? (s[a] || "none" !== i || (n.style.display = ""), "" === n.style.display && w(n) && (s[a] = le._data(n, "olddisplay", k(n.nodeName)))) : s[a] || (o = w(n), (i && "none" !== i || !o) && le._data(n, "olddisplay", o ? i : le.css(n, "display"))));
    for (a = 0; r > a; a++) n = e[a], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? s[a] || "" : "none"));
    return e
  }

  function S(e, t, i) {
    var n = vt.exec(t);
    return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : t
  }

  function _(e, t, i, n, o) {
    for (var s = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > s; s += 2) "margin" === i && (a += le.css(e, i + Et[s], !0, o)), n ? ("content" === i && (a -= le.css(e, "padding" + Et[s], !0, o)), "margin" !== i && (a -= le.css(e, "border" + Et[s] + "Width", !0, o))) : (a += le.css(e, "padding" + Et[s], !0, o), "padding" !== i && (a += le.css(e, "border" + Et[s] + "Width", !0, o)));
    return a
  }

  function T(e, t, i) {
    var n = !0,
      o = "width" === t ? e.offsetWidth : e.offsetHeight,
      s = dt(e),
      a = le.support.boxSizing && "border-box" === le.css(e, "boxSizing", !1, s);
    if (0 >= o || null == o) {
      if (o = ut(e, t, s), (0 > o || null == o) && (o = e.style[t]), yt.test(o)) return o;
      n = a && (le.support.boxSizingReliable || o === e.style[t]), o = parseFloat(o) || 0
    }
    return o + _(e, t, i || (a ? "border" : "content"), n, s) + "px"
  }

  function k(e) {
    var t = Y,
      i = Ct[e];
    return i || (i = D(e, t), "none" !== i && i || (ct = (ct || le("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (ct[0].contentWindow || ct[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), i = D(e, t), ct.detach()), Ct[e] = i), i
  }

  function D(e, t) {
    var i = le(t.createElement(e)).appendTo(t.body),
      n = le.css(i[0], "display");
    return i.remove(), n
  }

  function I(e, t, i, n) {
    var o;
    if (le.isArray(t)) le.each(t, function(t, o) {
      i || Tt.test(e) ? n(e, o) : I(e + "[" + ("object" == typeof o ? t : "") + "]", o, i, n)
    });
    else if (i || "object" !== le.type(t)) n(e, t);
    else
      for (o in t) I(e + "[" + o + "]", t[o], i, n)
  }

  function H(e) {
    return function(t, i) {
      "string" != typeof t && (i = t, t = "*");
      var n, o = 0,
        s = t.toLowerCase().match(de) || [];
      if (le.isFunction(i))
        for (; n = s[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
    }
  }

  function M(e, i, n, o) {
    function s(l) {
      var c;
      return a[l] = !0, le.each(e[l] || [], function(e, l) {
        var d = l(i, n, o);
        return "string" != typeof d || r || a[d] ? r ? !(c = d) : t : (i.dataTypes.unshift(d), s(d), !1)
      }), c
    }
    var a = {},
      r = e === qt;
    return s(i.dataTypes[0]) || !a["*"] && s("*")
  }

  function F(e, i) {
    var n, o, s = le.ajaxSettings.flatOptions || {};
    for (o in i) i[o] !== t && ((s[o] ? e : n || (n = {}))[o] = i[o]);
    return n && le.extend(!0, e, n), e
  }

  function B(e, i, n) {
    var o, s, a, r, l = e.contents,
      c = e.dataTypes,
      d = e.responseFields;
    for (r in d) r in n && (i[d[r]] = n[r]);
    for (;
      "*" === c[0];) c.shift(), s === t && (s = e.mimeType || i.getResponseHeader("Content-Type"));
    if (s)
      for (r in l)
        if (l[r] && l[r].test(s)) {
          c.unshift(r);
          break
        } if (c[0] in n) a = c[0];
    else {
      for (r in n) {
        if (!c[0] || e.converters[r + " " + c[0]]) {
          a = r;
          break
        }
        o || (o = r)
      }
      a = a || o
    }
    return a ? (a !== c[0] && c.unshift(a), n[a]) : t
  }

  function P(e, t) {
    var i, n, o, s, a = {},
      r = 0,
      l = e.dataTypes.slice(),
      c = l[0];
    if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), l[1])
      for (o in e.converters) a[o.toLowerCase()] = e.converters[o];
    for (; n = l[++r];)
      if ("*" !== n) {
        if ("*" !== c && c !== n) {
          if (!(o = a[c + " " + n] || a["* " + n]))
            for (i in a)
              if (s = i.split(" "), s[1] === n && (o = a[c + " " + s[0]] || a["* " + s[0]])) {
                !0 === o ? o = a[i] : !0 !== a[i] && (n = s[0], l.splice(r--, 0, n));
                break
              } if (!0 !== o)
            if (o && e.throws) t = o(t);
            else try {
              t = o(t)
            } catch (e) {
              return {
                state: "parsererror",
                error: o ? e : "No conversion from " + c + " to " + n
              }
            }
        }
        c = n
      } return {
      state: "success",
      data: t
    }
  }

  function L() {
    try {
      return new e.XMLHttpRequest
    } catch (e) {}
  }

  function A() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP")
    } catch (e) {}
  }

  function N() {
    return setTimeout(function() {
      Kt = t
    }), Kt = le.now()
  }

  function j(e, t) {
    le.each(t, function(t, i) {
      for (var n = (ni[t] || []).concat(ni["*"]), o = 0, s = n.length; s > o; o++)
        if (n[o].call(e, t, i)) return
    })
  }

  function R(e, t, i) {
    var n, o, s = 0,
      a = ii.length,
      r = le.Deferred().always(function() {
        delete l.elem
      }),
      l = function() {
        if (o) return !1;
        for (var t = Kt || N(), i = Math.max(0, c.startTime + c.duration - t), n = i / c.duration || 0, s = 1 - n, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(s);
        return r.notifyWith(e, [c, s, i]), 1 > s && l ? i : (r.resolveWith(e, [c]), !1)
      },
      c = r.promise({
        elem: e,
        props: le.extend({}, t),
        opts: le.extend(!0, {
          specialEasing: {}
        }, i),
        originalProperties: t,
        originalOptions: i,
        startTime: Kt || N(),
        duration: i.duration,
        tweens: [],
        createTween: function(t, i) {
          var n = le.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
          return c.tweens.push(n), n
        },
        stop: function(t) {
          var i = 0,
            n = t ? c.tweens.length : 0;
          if (o) return this;
          for (o = !0; n > i; i++) c.tweens[i].run(1);
          return t ? r.resolveWith(e, [c, t]) : r.rejectWith(e, [c, t]), this
        }
      }),
      d = c.props;
    for ($(d, c.opts.specialEasing); a > s; s++)
      if (n = ii[s].call(c, e, d, c.opts)) return n;
    return j(c, d), le.isFunction(c.opts.start) && c.opts.start.call(e, c), le.fx.timer(le.extend(l, {
      elem: e,
      anim: c,
      queue: c.opts.queue
    })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
  }

  function $(e, t) {
    var i, n, o, s, a;
    for (o in e)
      if (n = le.camelCase(o), s = t[n], i = e[o], le.isArray(i) && (s = i[1], i = e[o] = i[0]), o !== n && (e[n] = i, delete e[o]), (a = le.cssHooks[n]) && "expand" in a) {
        i = a.expand(i), delete e[n];
        for (o in i) o in e || (e[o] = i[o], t[o] = s)
      } else t[n] = s
  }

  function W(e, t, i) {
    var n, o, s, a, r, l, c, d, u, h = this,
      f = e.style,
      p = {},
      m = [],
      g = e.nodeType && w(e);
    i.queue || (d = le._queueHooks(e, "fx"), null == d.unqueued && (d.unqueued = 0, u = d.empty.fire, d.empty.fire = function() {
      d.unqueued || u()
    }), d.unqueued++, h.always(function() {
      h.always(function() {
        d.unqueued--, le.queue(e, "fx").length || d.empty.fire()
      })
    })), 1 === e.nodeType && ("height" in t || "width" in t) && (i.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === le.css(e, "display") && "none" === le.css(e, "float") && (le.support.inlineBlockNeedsLayout && "inline" !== k(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), i.overflow && (f.overflow = "hidden", le.support.shrinkWrapBlocks || h.always(function() {
      f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
    }));
    for (o in t)
      if (a = t[o], Qt.exec(a)) {
        if (delete t[o], l = l || "toggle" === a, a === (g ? "hide" : "show")) continue;
        m.push(o)
      } if (s = m.length) {
      r = le._data(e, "fxshow") || le._data(e, "fxshow", {}), "hidden" in r && (g = r.hidden), l && (r.hidden = !g), g ? le(e).show() : h.done(function() {
        le(e).hide()
      }), h.done(function() {
        var t;
        le._removeData(e, "fxshow");
        for (t in p) le.style(e, t, p[t])
      });
      for (o = 0; s > o; o++) n = m[o], c = h.createTween(n, g ? r[n] : 0), p[n] = r[n] || le.style(e, n), n in r || (r[n] = c.start, g && (c.end = c.start, c.start = "width" === n || "height" === n ? 1 : 0))
    }
  }

  function O(e, t, i, n, o) {
    return new O.prototype.init(e, t, i, n, o)
  }

  function q(e, t) {
    var i, n = {
        height: e
      },
      o = 0;
    for (t = t ? 1 : 0; 4 > o; o += 2 - t) i = Et[o], n["margin" + i] = n["padding" + i] = e;
    return t && (n.opacity = n.width = e), n
  }

  function G(e) {
    return le.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
  }
  var z, U, X = typeof t,
    Y = e.document,
    V = e.location,
    J = e.jQuery,
    K = e.$,
    Z = {},
    Q = [],
    ee = "1.9.1",
    te = Q.concat,
    ie = Q.push,
    ne = Q.slice,
    oe = Q.indexOf,
    se = Z.toString,
    ae = Z.hasOwnProperty,
    re = ee.trim,
    le = function(e, t) {
      return new le.fn.init(e, t, U)
    },
    ce = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    de = /\S+/g,
    ue = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    he = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    fe = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    pe = /^[\],:{}\s]*$/,
    me = /(?:^|:|,)(?:\s*\[)+/g,
    ge = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    ve = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
    ye = /^-ms-/,
    be = /-([\da-z])/gi,
    Ce = function(e, t) {
      return t.toUpperCase()
    },
    xe = function(e) {
      (Y.addEventListener || "load" === e.type || "complete" === Y.readyState) && (we(), le.ready())
    },
    we = function() {
      Y.addEventListener ? (Y.removeEventListener("DOMContentLoaded", xe, !1), e.removeEventListener("load", xe, !1)) : (Y.detachEvent("onreadystatechange", xe), e.detachEvent("onload", xe))
    };
  le.fn = le.prototype = {
    jquery: ee,
    constructor: le,
    init: function(e, i, n) {
      var o, s;
      if (!e) return this;
      if ("string" == typeof e) {
        if (!(o = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : he.exec(e)) || !o[1] && i) return !i || i.jquery ? (i || n).find(e) : this.constructor(i).find(e);
        if (o[1]) {
          if (i = i instanceof le ? i[0] : i, le.merge(this, le.parseHTML(o[1], i && i.nodeType ? i.ownerDocument || i : Y, !0)), fe.test(o[1]) && le.isPlainObject(i))
            for (o in i) le.isFunction(this[o]) ? this[o](i[o]) : this.attr(o, i[o]);
          return this
        }
        if ((s = Y.getElementById(o[2])) && s.parentNode) {
          if (s.id !== o[2]) return n.find(e);
          this.length = 1, this[0] = s
        }
        return this.context = Y, this.selector = e, this
      }
      return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : le.isFunction(e) ? n.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), le.makeArray(e, this))
    },
    selector: "",
    length: 0,
    size: function() {
      return this.length
    },
    toArray: function() {
      return ne.call(this)
    },
    get: function(e) {
      return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
    },
    pushStack: function(e) {
      var t = le.merge(this.constructor(), e);
      return t.prevObject = this, t.context = this.context, t
    },
    each: function(e, t) {
      return le.each(this, e, t)
    },
    ready: function(e) {
      return le.ready.promise().done(e), this
    },
    slice: function() {
      return this.pushStack(ne.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    eq: function(e) {
      var t = this.length,
        i = +e + (0 > e ? t : 0);
      return this.pushStack(i >= 0 && t > i ? [this[i]] : [])
    },
    map: function(e) {
      return this.pushStack(le.map(this, function(t, i) {
        return e.call(t, i, t)
      }))
    },
    end: function() {
      return this.prevObject || this.constructor(null)
    },
    push: ie,
    sort: [].sort,
    splice: [].splice
  }, le.fn.init.prototype = le.fn, le.extend = le.fn.extend = function() {
    var e, i, n, o, s, a, r = arguments[0] || {},
      l = 1,
      c = arguments.length,
      d = !1;
    for ("boolean" == typeof r && (d = r, r = arguments[1] || {}, l = 2), "object" == typeof r || le.isFunction(r) || (r = {}), c === l && (r = this, --l); c > l; l++)
      if (null != (s = arguments[l]))
        for (o in s) e = r[o], n = s[o], r !== n && (d && n && (le.isPlainObject(n) || (i = le.isArray(n))) ? (i ? (i = !1, a = e && le.isArray(e) ? e : []) : a = e && le.isPlainObject(e) ? e : {}, r[o] = le.extend(d, a, n)) : n !== t && (r[o] = n));
    return r
  }, le.extend({
    noConflict: function(t) {
      return e.$ === le && (e.$ = K), t && e.jQuery === le && (e.jQuery = J), le
    },
    isReady: !1,
    readyWait: 1,
    holdReady: function(e) {
      e ? le.readyWait++ : le.ready(!0)
    },
    ready: function(e) {
      if (!0 === e ? !--le.readyWait : !le.isReady) {
        if (!Y.body) return setTimeout(le.ready);
        le.isReady = !0, !0 !== e && --le.readyWait > 0 || (z.resolveWith(Y, [le]), le.fn.trigger && le(Y).trigger("ready").off("ready"))
      }
    },
    isFunction: function(e) {
      return "function" === le.type(e)
    },
    isArray: Array.isArray || function(e) {
      return "array" === le.type(e)
    },
    isWindow: function(e) {
      return null != e && e == e.window
    },
    isNumeric: function(e) {
      return !isNaN(parseFloat(e)) && isFinite(e)
    },
    type: function(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[se.call(e)] || "object" : typeof e
    },
    isPlainObject: function(e) {
      if (!e || "object" !== le.type(e) || e.nodeType || le.isWindow(e)) return !1;
      try {
        if (e.constructor && !ae.call(e, "constructor") && !ae.call(e.constructor.prototype, "isPrototypeOf")) return !1
      } catch (e) {
        return !1
      }
      var i;
      for (i in e);
      return i === t || ae.call(e, i)
    },
    isEmptyObject: function(e) {
      var t;
      for (t in e) return !1;
      return !0
    },
    error: function(e) {
      throw Error(e)
    },
    parseHTML: function(e, t, i) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && (i = t, t = !1), t = t || Y;
      var n = fe.exec(e),
        o = !i && [];
      return n ? [t.createElement(n[1])] : (n = le.buildFragment([e], t, o), o && le(o).remove(), le.merge([], n.childNodes))
    },
    parseJSON: function(i) {
      return e.JSON && e.JSON.parse ? e.JSON.parse(i) : null === i ? i : "string" == typeof i && (i = le.trim(i)) && pe.test(i.replace(ge, "@").replace(ve, "]").replace(me, "")) ? Function("return " + i)() : (le.error("Invalid JSON: " + i), t)
    },
    parseXML: function(i) {
      var n, o;
      if (!i || "string" != typeof i) return null;
      try {
        e.DOMParser ? (o = new DOMParser, n = o.parseFromString(i, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(i))
      } catch (e) {
        n = t
      }
      return n && n.documentElement && !n.getElementsByTagName("parsererror").length || le.error("Invalid XML: " + i), n
    },
    noop: function() {},
    globalEval: function(t) {
      t && le.trim(t) && (e.execScript || function(t) {
        e.eval.call(e, t)
      })(t)
    },
    camelCase: function(e) {
      return e.replace(ye, "ms-").replace(be, Ce)
    },
    nodeName: function(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    },
    each: function(e, t, n) {
      var o = 0,
        s = e.length,
        a = i(e);
      if (n) {
        if (a)
          for (; s > o && !1 !== t.apply(e[o], n); o++);
        else
          for (o in e)
            if (!1 === t.apply(e[o], n)) break
      } else if (a)
        for (; s > o && !1 !== t.call(e[o], o, e[o]); o++);
      else
        for (o in e)
          if (!1 === t.call(e[o], o, e[o])) break;
      return e
    },
    trim: re && !re.call("\ufeff ") ? function(e) {
      return null == e ? "" : re.call(e)
    } : function(e) {
      return null == e ? "" : (e + "").replace(ue, "")
    },
    makeArray: function(e, t) {
      var n = t || [];
      return null != e && (i(Object(e)) ? le.merge(n, "string" == typeof e ? [e] : e) : ie.call(n, e)), n
    },
    inArray: function(e, t, i) {
      var n;
      if (t) {
        if (oe) return oe.call(t, e, i);
        for (n = t.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
          if (i in t && t[i] === e) return i
      }
      return -1
    },
    merge: function(e, i) {
      var n = i.length,
        o = e.length,
        s = 0;
      if ("number" == typeof n)
        for (; n > s; s++) e[o++] = i[s];
      else
        for (; i[s] !== t;) e[o++] = i[s++];
      return e.length = o, e
    },
    grep: function(e, t, i) {
      var n, o = [],
        s = 0,
        a = e.length;
      for (i = !!i; a > s; s++) n = !!t(e[s], s), i !== n && o.push(e[s]);
      return o
    },
    map: function(e, t, n) {
      var o, s = 0,
        a = e.length,
        r = i(e),
        l = [];
      if (r)
        for (; a > s; s++) null != (o = t(e[s], s, n)) && (l[l.length] = o);
      else
        for (s in e) null != (o = t(e[s], s, n)) && (l[l.length] = o);
      return te.apply([], l)
    },
    guid: 1,
    proxy: function(e, i) {
      var n, o, s;
      return "string" == typeof i && (s = e[i], i = e, e = s), le.isFunction(e) ? (n = ne.call(arguments, 2), o = function() {
        return e.apply(i || this, n.concat(ne.call(arguments)))
      }, o.guid = e.guid = e.guid || le.guid++, o) : t
    },
    access: function(e, i, n, o, s, a, r) {
      var l = 0,
        c = e.length,
        d = null == n;
      if ("object" === le.type(n)) {
        s = !0;
        for (l in n) le.access(e, i, l, n[l], !0, a, r)
      } else if (o !== t && (s = !0, le.isFunction(o) || (r = !0), d && (r ? (i.call(e, o), i = null) : (d = i, i = function(e, t, i) {
          return d.call(le(e), i)
        })), i))
        for (; c > l; l++) i(e[l], n, r ? o : o.call(e[l], l, i(e[l], n)));
      return s ? e : d ? i.call(e) : c ? i(e[0], n) : a
    },
    now: function() {
      return (new Date).getTime()
    }
  }), le.ready.promise = function(t) {
    if (!z)
      if (z = le.Deferred(), "complete" === Y.readyState) setTimeout(le.ready);
      else if (Y.addEventListener) Y.addEventListener("DOMContentLoaded", xe, !1), e.addEventListener("load", xe, !1);
    else {
      Y.attachEvent("onreadystatechange", xe), e.attachEvent("onload", xe);
      var i = !1;
      try {
        i = null == e.frameElement && Y.documentElement
      } catch (e) {}
      i && i.doScroll && function e() {
        if (!le.isReady) {
          try {
            i.doScroll("left")
          } catch (t) {
            return setTimeout(e, 50)
          }
          we(), le.ready()
        }
      }()
    }
    return z.promise(t)
  }, le.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
    Z["[object " + t + "]"] = t.toLowerCase()
  }), U = le(Y);
  var Ee = {};
  le.Callbacks = function(e) {
    e = "string" == typeof e ? Ee[e] || n(e) : le.extend({}, e);
    var i, o, s, a, r, l, c = [],
      d = !e.once && [],
      u = function(t) {
        for (o = e.memory && t, s = !0, r = l || 0, l = 0, a = c.length, i = !0; c && a > r; r++)
          if (!1 === c[r].apply(t[0], t[1]) && e.stopOnFalse) {
            o = !1;
            break
          } i = !1, c && (d ? d.length && u(d.shift()) : o ? c = [] : h.disable())
      },
      h = {
        add: function() {
          if (c) {
            var t = c.length;
            (function t(i) {
              le.each(i, function(i, n) {
                var o = le.type(n);
                "function" === o ? e.unique && h.has(n) || c.push(n) : n && n.length && "string" !== o && t(n)
              })
            })(arguments), i ? a = c.length : o && (l = t, u(o))
          }
          return this
        },
        remove: function() {
          return c && le.each(arguments, function(e, t) {
            for (var n;
              (n = le.inArray(t, c, n)) > -1;) c.splice(n, 1), i && (a >= n && a--, r >= n && r--)
          }), this
        },
        has: function(e) {
          return e ? le.inArray(e, c) > -1 : !(!c || !c.length)
        },
        empty: function() {
          return c = [], this
        },
        disable: function() {
          return c = d = o = t, this
        },
        disabled: function() {
          return !c
        },
        lock: function() {
          return d = t, o || h.disable(), this
        },
        locked: function() {
          return !d
        },
        fireWith: function(e, t) {
          return t = t || [], t = [e, t.slice ? t.slice() : t], !c || s && !d || (i ? d.push(t) : u(t)), this
        },
        fire: function() {
          return h.fireWith(this, arguments), this
        },
        fired: function() {
          return !!s
        }
      };
    return h
  }, le.extend({
    Deferred: function(e) {
      var t = [
          ["resolve", "done", le.Callbacks("once memory"), "resolved"],
          ["reject", "fail", le.Callbacks("once memory"), "rejected"],
          ["notify", "progress", le.Callbacks("memory")]
        ],
        i = "pending",
        n = {
          state: function() {
            return i
          },
          always: function() {
            return o.done(arguments).fail(arguments), this
          },
          then: function() {
            var e = arguments;
            return le.Deferred(function(i) {
              le.each(t, function(t, s) {
                var a = s[0],
                  r = le.isFunction(e[t]) && e[t];
                o[s[1]](function() {
                  var e = r && r.apply(this, arguments);
                  e && le.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[a + "With"](this === n ? i.promise() : this, r ? [e] : arguments)
                })
              }), e = null
            }).promise()
          },
          promise: function(e) {
            return null != e ? le.extend(e, n) : n
          }
        },
        o = {};
      return n.pipe = n.then, le.each(t, function(e, s) {
        var a = s[2],
          r = s[3];
        n[s[1]] = a.add, r && a.add(function() {
          i = r
        }, t[1 ^ e][2].disable, t[2][2].lock), o[s[0]] = function() {
          return o[s[0] + "With"](this === o ? n : this, arguments), this
        }, o[s[0] + "With"] = a.fireWith
      }), n.promise(o), e && e.call(o, o), o
    },
    when: function(e) {
      var t, i, n, o = 0,
        s = ne.call(arguments),
        a = s.length,
        r = 1 !== a || e && le.isFunction(e.promise) ? a : 0,
        l = 1 === r ? e : le.Deferred(),
        c = function(e, i, n) {
          return function(o) {
            i[e] = this, n[e] = arguments.length > 1 ? ne.call(arguments) : o, n === t ? l.notifyWith(i, n) : --r || l.resolveWith(i, n)
          }
        };
      if (a > 1)
        for (t = Array(a), i = Array(a), n = Array(a); a > o; o++) s[o] && le.isFunction(s[o].promise) ? s[o].promise().done(c(o, n, s)).fail(l.reject).progress(c(o, i, t)) : --r;
      return r || l.resolveWith(n, s), l.promise()
    }
  }), le.support = function() {
    var t, i, n, o, s, a, r, l, c, d, u = Y.createElement("div");
    if (u.setAttribute("className", "t"), u.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = u.getElementsByTagName("*"), n = u.getElementsByTagName("a")[0], !i || !n || !i.length) return {};
    s = Y.createElement("select"), r = s.appendChild(Y.createElement("option")), o = u.getElementsByTagName("input")[0], n.style.cssText = "top:1px;float:left;opacity:.5", t = {
      getSetAttribute: "t" !== u.className,
      leadingWhitespace: 3 === u.firstChild.nodeType,
      tbody: !u.getElementsByTagName("tbody").length,
      htmlSerialize: !!u.getElementsByTagName("link").length,
      style: /top/.test(n.getAttribute("style")),
      hrefNormalized: "/a" === n.getAttribute("href"),
      opacity: /^0.5/.test(n.style.opacity),
      cssFloat: !!n.style.cssFloat,
      checkOn: !!o.value,
      optSelected: r.selected,
      enctype: !!Y.createElement("form").enctype,
      html5Clone: "<:nav></:nav>" !== Y.createElement("nav").cloneNode(!0).outerHTML,
      boxModel: "CSS1Compat" === Y.compatMode,
      deleteExpando: !0,
      noCloneEvent: !0,
      inlineBlockNeedsLayout: !1,
      shrinkWrapBlocks: !1,
      reliableMarginRight: !0,
      boxSizingReliable: !0,
      pixelPosition: !1
    }, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !r.disabled;
    try {
      delete u.test
    } catch (e) {
      t.deleteExpando = !1
    }
    o = Y.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), a = Y.createDocumentFragment(), a.appendChild(o), t.appendChecked = o.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, u.attachEvent && (u.attachEvent("onclick", function() {
      t.noCloneEvent = !1
    }), u.cloneNode(!0).click());
    for (d in {
        submit: !0,
        change: !0,
        focusin: !0
      }) u.setAttribute(l = "on" + d, "t"), t[d + "Bubbles"] = l in e || !1 === u.attributes[l].expando;
    return u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === u.style.backgroundClip, le(function() {
      var i, n, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
        a = Y.getElementsByTagName("body")[0];
      a && (i = Y.createElement("div"), i.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(i).appendChild(u), u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = u.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === o[0].offsetHeight, u.innerHTML = "",
        u.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === u.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== a.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(u, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(u, null) || {
          width: "4px"
        }).width, n = u.appendChild(Y.createElement("div")), n.style.cssText = u.style.cssText = s, n.style.marginRight = n.style.width = "0", u.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(n, null) || {}).marginRight)), typeof u.style.zoom !== X && (u.innerHTML = "", u.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === u.offsetWidth, u.style.display = "block", u.innerHTML = "<div></div>", u.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== u.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(i), i = u = o = n = null)
    }), i = s = a = r = n = o = null, t
  }();
  var Se = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    _e = /([A-Z])/g;
  le.extend({
    cache: {},
    expando: "jQuery" + (ee + Math.random()).replace(/\D/g, ""),
    noData: {
      embed: !0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      applet: !0
    },
    hasData: function(e) {
      return !!(e = e.nodeType ? le.cache[e[le.expando]] : e[le.expando]) && !r(e)
    },
    data: function(e, t, i) {
      return o(e, t, i)
    },
    removeData: function(e, t) {
      return s(e, t)
    },
    _data: function(e, t, i) {
      return o(e, t, i, !0)
    },
    _removeData: function(e, t) {
      return s(e, t, !0)
    },
    acceptData: function(e) {
      if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
      var t = e.nodeName && le.noData[e.nodeName.toLowerCase()];
      return !t || !0 !== t && e.getAttribute("classid") === t
    }
  }), le.fn.extend({
    data: function(e, i) {
      var n, o, s = this[0],
        r = 0,
        l = null;
      if (e === t) {
        if (this.length && (l = le.data(s), 1 === s.nodeType && !le._data(s, "parsedAttrs"))) {
          for (n = s.attributes; n.length > r; r++) o = n[r].name, o.indexOf("data-") || (o = le.camelCase(o.slice(5)), a(s, o, l[o]));
          le._data(s, "parsedAttrs", !0)
        }
        return l
      }
      return "object" == typeof e ? this.each(function() {
        le.data(this, e)
      }) : le.access(this, function(i) {
        return i === t ? s ? a(s, e, le.data(s, e)) : null : (this.each(function() {
          le.data(this, e, i)
        }), t)
      }, null, i, arguments.length > 1, null, !0)
    },
    removeData: function(e) {
      return this.each(function() {
        le.removeData(this, e)
      })
    }
  }), le.extend({
    queue: function(e, i, n) {
      var o;
      return e ? (i = (i || "fx") + "queue", o = le._data(e, i), n && (!o || le.isArray(n) ? o = le._data(e, i, le.makeArray(n)) : o.push(n)), o || []) : t
    },
    dequeue: function(e, t) {
      t = t || "fx";
      var i = le.queue(e, t),
        n = i.length,
        o = i.shift(),
        s = le._queueHooks(e, t),
        a = function() {
          le.dequeue(e, t)
        };
      "inprogress" === o && (o = i.shift(), n--), s.cur = o, o && ("fx" === t && i.unshift("inprogress"), delete s.stop, o.call(e, a, s)), !n && s && s.empty.fire()
    },
    _queueHooks: function(e, t) {
      var i = t + "queueHooks";
      return le._data(e, i) || le._data(e, i, {
        empty: le.Callbacks("once memory").add(function() {
          le._removeData(e, t + "queue"), le._removeData(e, i)
        })
      })
    }
  }), le.fn.extend({
    queue: function(e, i) {
      var n = 2;
      return "string" != typeof e && (i = e, e = "fx", n--), n > arguments.length ? le.queue(this[0], e) : i === t ? this : this.each(function() {
        var t = le.queue(this, e, i);
        le._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && le.dequeue(this, e)
      })
    },
    dequeue: function(e) {
      return this.each(function() {
        le.dequeue(this, e)
      })
    },
    delay: function(e, t) {
      return e = le.fx ? le.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, i) {
        var n = setTimeout(t, e);
        i.stop = function() {
          clearTimeout(n)
        }
      })
    },
    clearQueue: function(e) {
      return this.queue(e || "fx", [])
    },
    promise: function(e, i) {
      var n, o = 1,
        s = le.Deferred(),
        a = this,
        r = this.length,
        l = function() {
          --o || s.resolveWith(a, [a])
        };
      for ("string" != typeof e && (i = e, e = t), e = e || "fx"; r--;)(n = le._data(a[r], e + "queueHooks")) && n.empty && (o++, n.empty.add(l));
      return l(), s.promise(i)
    }
  });
  var Te, ke, De = /[\t\r\n]/g,
    Ie = /\r/g,
    He = /^(?:input|select|textarea|button|object)$/i,
    Me = /^(?:a|area)$/i,
    Fe = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
    Be = /^(?:checked|selected)$/i,
    Pe = le.support.getSetAttribute,
    Le = le.support.input;
  le.fn.extend({
    attr: function(e, t) {
      return le.access(this, le.attr, e, t, arguments.length > 1)
    },
    removeAttr: function(e) {
      return this.each(function() {
        le.removeAttr(this, e)
      })
    },
    prop: function(e, t) {
      return le.access(this, le.prop, e, t, arguments.length > 1)
    },
    removeProp: function(e) {
      return e = le.propFix[e] || e, this.each(function() {
        try {
          this[e] = t, delete this[e]
        } catch (e) {}
      })
    },
    addClass: function(e) {
      var t, i, n, o, s, a = 0,
        r = this.length,
        l = "string" == typeof e && e;
      if (le.isFunction(e)) return this.each(function(t) {
        le(this).addClass(e.call(this, t, this.className))
      });
      if (l)
        for (t = (e || "").match(de) || []; r > a; a++)
          if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(De, " ") : " ")) {
            for (s = 0; o = t[s++];) 0 > n.indexOf(" " + o + " ") && (n += o + " ");
            i.className = le.trim(n)
          } return this
    },
    removeClass: function(e) {
      var t, i, n, o, s, a = 0,
        r = this.length,
        l = 0 === arguments.length || "string" == typeof e && e;
      if (le.isFunction(e)) return this.each(function(t) {
        le(this).removeClass(e.call(this, t, this.className))
      });
      if (l)
        for (t = (e || "").match(de) || []; r > a; a++)
          if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(De, " ") : "")) {
            for (s = 0; o = t[s++];)
              for (; n.indexOf(" " + o + " ") >= 0;) n = n.replace(" " + o + " ", " ");
            i.className = e ? le.trim(n) : ""
          } return this
    },
    toggleClass: function(e, t) {
      var i = typeof e,
        n = "boolean" == typeof t;
      return le.isFunction(e) ? this.each(function(i) {
        le(this).toggleClass(e.call(this, i, this.className, t), t)
      }) : this.each(function() {
        if ("string" === i)
          for (var o, s = 0, a = le(this), r = t, l = e.match(de) || []; o = l[s++];) r = n ? r : !a.hasClass(o), a[r ? "addClass" : "removeClass"](o);
        else(i === X || "boolean" === i) && (this.className && le._data(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : le._data(this, "__className__") || "")
      })
    },
    hasClass: function(e) {
      for (var t = " " + e + " ", i = 0, n = this.length; n > i; i++)
        if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(De, " ").indexOf(t) >= 0) return !0;
      return !1
    },
    val: function(e) {
      var i, n, o, s = this[0];
      return arguments.length ? (o = le.isFunction(e), this.each(function(i) {
        var s, a = le(this);
        1 === this.nodeType && (s = o ? e.call(this, i, a.val()) : e, null == s ? s = "" : "number" == typeof s ? s += "" : le.isArray(s) && (s = le.map(s, function(e) {
          return null == e ? "" : e + ""
        })), (n = le.valHooks[this.type] || le.valHooks[this.nodeName.toLowerCase()]) && "set" in n && n.set(this, s, "value") !== t || (this.value = s))
      })) : s ? (n = le.valHooks[s.type] || le.valHooks[s.nodeName.toLowerCase()], n && "get" in n && (i = n.get(s, "value")) !== t ? i : (i = s.value, "string" == typeof i ? i.replace(Ie, "") : null == i ? "" : i)) : void 0
    }
  }), le.extend({
    valHooks: {
      option: {
        get: function(e) {
          var t = e.attributes.value;
          return !t || t.specified ? e.value : e.text
        }
      },
      select: {
        get: function(e) {
          for (var t, i, n = e.options, o = e.selectedIndex, s = "select-one" === e.type || 0 > o, a = s ? null : [], r = s ? o + 1 : n.length, l = 0 > o ? r : s ? o : 0; r > l; l++)
            if (i = n[l], !(!i.selected && l !== o || (le.support.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && le.nodeName(i.parentNode, "optgroup"))) {
              if (t = le(i).val(), s) return t;
              a.push(t)
            } return a
        },
        set: function(e, t) {
          var i = le.makeArray(t);
          return le(e).find("option").each(function() {
            this.selected = le.inArray(le(this).val(), i) >= 0
          }), i.length || (e.selectedIndex = -1), i
        }
      }
    },
    attr: function(e, i, n) {
      var o, s, a, r = e.nodeType;
      if (e && 3 !== r && 8 !== r && 2 !== r) return typeof e.getAttribute === X ? le.prop(e, i, n) : (s = 1 !== r || !le.isXMLDoc(e), s && (i = i.toLowerCase(), o = le.attrHooks[i] || (Fe.test(i) ? ke : Te)), n === t ? o && s && "get" in o && null !== (a = o.get(e, i)) ? a : (typeof e.getAttribute !== X && (a = e.getAttribute(i)), null == a ? t : a) : null !== n ? o && s && "set" in o && (a = o.set(e, n, i)) !== t ? a : (e.setAttribute(i, n + ""), n) : (le.removeAttr(e, i), t))
    },
    removeAttr: function(e, t) {
      var i, n, o = 0,
        s = t && t.match(de);
      if (s && 1 === e.nodeType)
        for (; i = s[o++];) n = le.propFix[i] || i, Fe.test(i) ? !Pe && Be.test(i) ? e[le.camelCase("default-" + i)] = e[n] = !1 : e[n] = !1 : le.attr(e, i, ""), e.removeAttribute(Pe ? i : n)
    },
    attrHooks: {
      type: {
        set: function(e, t) {
          if (!le.support.radioValue && "radio" === t && le.nodeName(e, "input")) {
            var i = e.value;
            return e.setAttribute("type", t), i && (e.value = i), t
          }
        }
      }
    },
    propFix: {
      tabindex: "tabIndex",
      readonly: "readOnly",
      for: "htmlFor",
      class: "className",
      maxlength: "maxLength",
      cellspacing: "cellSpacing",
      cellpadding: "cellPadding",
      rowspan: "rowSpan",
      colspan: "colSpan",
      usemap: "useMap",
      frameborder: "frameBorder",
      contenteditable: "contentEditable"
    },
    prop: function(e, i, n) {
      var o, s, a, r = e.nodeType;
      if (e && 3 !== r && 8 !== r && 2 !== r) return a = 1 !== r || !le.isXMLDoc(e), a && (i = le.propFix[i] || i, s = le.propHooks[i]), n !== t ? s && "set" in s && (o = s.set(e, n, i)) !== t ? o : e[i] = n : s && "get" in s && null !== (o = s.get(e, i)) ? o : e[i]
    },
    propHooks: {
      tabIndex: {
        get: function(e) {
          var i = e.getAttributeNode("tabindex");
          return i && i.specified ? parseInt(i.value, 10) : He.test(e.nodeName) || Me.test(e.nodeName) && e.href ? 0 : t
        }
      }
    }
  }), ke = {
    get: function(e, i) {
      var n = le.prop(e, i),
        o = "boolean" == typeof n && e.getAttribute(i),
        s = "boolean" == typeof n ? Le && Pe ? null != o : Be.test(i) ? e[le.camelCase("default-" + i)] : !!o : e.getAttributeNode(i);
      return s && !1 !== s.value ? i.toLowerCase() : t
    },
    set: function(e, t, i) {
      return !1 === t ? le.removeAttr(e, i) : Le && Pe || !Be.test(i) ? e.setAttribute(!Pe && le.propFix[i] || i, i) : e[le.camelCase("default-" + i)] = e[i] = !0, i
    }
  }, Le && Pe || (le.attrHooks.value = {
    get: function(e, i) {
      var n = e.getAttributeNode(i);
      return le.nodeName(e, "input") ? e.defaultValue : n && n.specified ? n.value : t
    },
    set: function(e, i, n) {
      return le.nodeName(e, "input") ? (e.defaultValue = i, t) : Te && Te.set(e, i, n)
    }
  }), Pe || (Te = le.valHooks.button = {
    get: function(e, i) {
      var n = e.getAttributeNode(i);
      return n && ("id" === i || "name" === i || "coords" === i ? "" !== n.value : n.specified) ? n.value : t
    },
    set: function(e, i, n) {
      var o = e.getAttributeNode(n);
      return o || e.setAttributeNode(o = e.ownerDocument.createAttribute(n)), o.value = i += "", "value" === n || i === e.getAttribute(n) ? i : t
    }
  }, le.attrHooks.contenteditable = {
    get: Te.get,
    set: function(e, t, i) {
      Te.set(e, "" !== t && t, i)
    }
  }, le.each(["width", "height"], function(e, i) {
    le.attrHooks[i] = le.extend(le.attrHooks[i], {
      set: function(e, n) {
        return "" === n ? (e.setAttribute(i, "auto"), n) : t
      }
    })
  })), le.support.hrefNormalized || (le.each(["href", "src", "width", "height"], function(e, i) {
    le.attrHooks[i] = le.extend(le.attrHooks[i], {
      get: function(e) {
        var n = e.getAttribute(i, 2);
        return null == n ? t : n
      }
    })
  }), le.each(["href", "src"], function(e, t) {
    le.propHooks[t] = {
      get: function(e) {
        return e.getAttribute(t, 4)
      }
    }
  })), le.support.style || (le.attrHooks.style = {
    get: function(e) {
      return e.style.cssText || t
    },
    set: function(e, t) {
      return e.style.cssText = t + ""
    }
  }), le.support.optSelected || (le.propHooks.selected = le.extend(le.propHooks.selected, {
    get: function(e) {
      var t = e.parentNode;
      return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
    }
  })), le.support.enctype || (le.propFix.enctype = "encoding"), le.support.checkOn || le.each(["radio", "checkbox"], function() {
    le.valHooks[this] = {
      get: function(e) {
        return null === e.getAttribute("value") ? "on" : e.value
      }
    }
  }), le.each(["radio", "checkbox"], function() {
    le.valHooks[this] = le.extend(le.valHooks[this], {
      set: function(e, i) {
        return le.isArray(i) ? e.checked = le.inArray(le(e).val(), i) >= 0 : t
      }
    })
  });
  var Ae = /^(?:input|select|textarea)$/i,
    Ne = /^key/,
    je = /^(?:mouse|contextmenu)|click/,
    Re = /^(?:focusinfocus|focusoutblur)$/,
    $e = /^([^.]*)(?:\.(.+)|)$/;
  le.event = {
      global: {},
      add: function(e, i, n, o, s) {
        var a, r, l, c, d, u, h, f, p, m, g, v = le._data(e);
        if (v) {
          for (n.handler && (c = n, n = c.handler, s = c.selector), n.guid || (n.guid = le.guid++), (r = v.events) || (r = v.events = {}), (u = v.handle) || (u = v.handle = function(e) {
              return typeof le === X || e && le.event.triggered === e.type ? t : le.event.dispatch.apply(u.elem, arguments)
            }, u.elem = e), i = (i || "").match(de) || [""], l = i.length; l--;) a = $e.exec(i[l]) || [], p = g = a[1], m = (a[2] || "").split(".").sort(), d = le.event.special[p] || {}, p = (s ? d.delegateType : d.bindType) || p, d = le.event.special[p] || {}, h = le.extend({
            type: p,
            origType: g,
            data: o,
            handler: n,
            guid: n.guid,
            selector: s,
            needsContext: s && le.expr.match.needsContext.test(s),
            namespace: m.join(".")
          }, c), (f = r[p]) || (f = r[p] = [], f.delegateCount = 0, d.setup && !1 !== d.setup.call(e, o, m, u) || (e.addEventListener ? e.addEventListener(p, u, !1) : e.attachEvent && e.attachEvent("on" + p, u))), d.add && (d.add.call(e, h), h.handler.guid || (h.handler.guid = n.guid)), s ? f.splice(f.delegateCount++, 0, h) : f.push(h), le.event.global[p] = !0;
          e = null
        }
      },
      remove: function(e, t, i, n, o) {
        var s, a, r, l, c, d, u, h, f, p, m, g = le.hasData(e) && le._data(e);
        if (g && (d = g.events)) {
          for (t = (t || "").match(de) || [""], c = t.length; c--;)
            if (r = $e.exec(t[c]) || [], f = m = r[1], p = (r[2] || "").split(".").sort(), f) {
              for (u = le.event.special[f] || {}, f = (n ? u.delegateType : u.bindType) || f, h = d[f] || [], r = r[2] && RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = h.length; s--;) a = h[s], !o && m !== a.origType || i && i.guid !== a.guid || r && !r.test(a.namespace) || n && n !== a.selector && ("**" !== n || !a.selector) || (h.splice(s, 1), a.selector && h.delegateCount--, u.remove && u.remove.call(e, a));
              l && !h.length && (u.teardown && !1 !== u.teardown.call(e, p, g.handle) || le.removeEvent(e, f, g.handle), delete d[f])
            } else
              for (f in d) le.event.remove(e, f + t[c], i, n, !0);
          le.isEmptyObject(d) && (delete g.handle, le._removeData(e, "events"))
        }
      },
      trigger: function(i, n, o, s) {
        var a, r, l, c, d, u, h, f = [o || Y],
          p = ae.call(i, "type") ? i.type : i,
          m = ae.call(i, "namespace") ? i.namespace.split(".") : [];
        if (l = u = o = o || Y, 3 !== o.nodeType && 8 !== o.nodeType && !Re.test(p + le.event.triggered) && (p.indexOf(".") >= 0 && (m = p.split("."), p = m.shift(), m.sort()), r = 0 > p.indexOf(":") && "on" + p, i = i[le.expando] ? i : new le.Event(p, "object" == typeof i && i), i.isTrigger = !0, i.namespace = m.join("."), i.namespace_re = i.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, i.result = t, i.target || (i.target = o), n = null == n ? [i] : le.makeArray(n, [i]), d = le.event.special[p] || {}, s || !d.trigger || !1 !== d.trigger.apply(o, n))) {
          if (!s && !d.noBubble && !le.isWindow(o)) {
            for (c = d.delegateType || p, Re.test(c + p) || (l = l.parentNode); l; l = l.parentNode) f.push(l), u = l;
            u === (o.ownerDocument || Y) && f.push(u.defaultView || u.parentWindow || e)
          }
          for (h = 0;
            (l = f[h++]) && !i.isPropagationStopped();) i.type = h > 1 ? c : d.bindType || p, a = (le._data(l, "events") || {})[i.type] && le._data(l, "handle"), a && a.apply(l, n), (a = r && l[r]) && le.acceptData(l) && a.apply && !1 === a.apply(l, n) && i.preventDefault();
          if (i.type = p, !(s || i.isDefaultPrevented() || d._default && !1 !== d._default.apply(o.ownerDocument, n) || "click" === p && le.nodeName(o, "a") || !le.acceptData(o) || !r || !o[p] || le.isWindow(o))) {
            u = o[r], u && (o[r] = null), le.event.triggered = p;
            try {
              o[p]()
            } catch (e) {}
            le.event.triggered = t, u && (o[r] = u)
          }
          return i.result
        }
      },
      dispatch: function(e) {
        e = le.event.fix(e);
        var i, n, o, s, a, r = [],
          l = ne.call(arguments),
          c = (le._data(this, "events") || {})[e.type] || [],
          d = le.event.special[e.type] || {};
        if (l[0] = e, e.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, e)) {
          for (r = le.event.handlers.call(this, e, c), i = 0;
            (s = r[i++]) && !e.isPropagationStopped();)
            for (e.currentTarget = s.elem, a = 0;
              (o = s.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, (n = ((le.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, l)) !== t && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
          return d.postDispatch && d.postDispatch.call(this, e), e.result
        }
      },
      handlers: function(e, i) {
        var n, o, s, a, r = [],
          l = i.delegateCount,
          c = e.target;
        if (l && c.nodeType && (!e.button || "click" !== e.type))
          for (; c != this; c = c.parentNode || this)
            if (1 === c.nodeType && (!0 !== c.disabled || "click" !== e.type)) {
              for (s = [], a = 0; l > a; a++) o = i[a], n = o.selector + " ", s[n] === t && (s[n] = o.needsContext ? le(n, this).index(c) >= 0 : le.find(n, this, null, [c]).length), s[n] && s.push(o);
              s.length && r.push({
                elem: c,
                handlers: s
              })
            } return i.length > l && r.push({
          elem: this,
          handlers: i.slice(l)
        }), r
      },
      fix: function(e) {
        if (e[le.expando]) return e;
        var t, i, n, o = e.type,
          s = e,
          a = this.fixHooks[o];
        for (a || (this.fixHooks[o] = a = je.test(o) ? this.mouseHooks : Ne.test(o) ? this.keyHooks : {}), n = a.props ? this.props.concat(a.props) : this.props, e = new le.Event(s), t = n.length; t--;) i = n[t], e[i] = s[i];
        return e.target || (e.target = s.srcElement || Y), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, s) : e
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function(e, t) {
          return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
        }
      },
      mouseHooks: {
        props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function(e, i) {
          var n, o, s, a = i.button,
            r = i.fromElement;
          return null == e.pageX && null != i.clientX && (o = e.target.ownerDocument || Y, s = o.documentElement, n = o.body, e.pageX = i.clientX + (s && s.scrollLeft || n && n.scrollLeft || 0) - (s && s.clientLeft || n && n.clientLeft || 0), e.pageY = i.clientY + (s && s.scrollTop || n && n.scrollTop || 0) - (s && s.clientTop || n && n.clientTop || 0)), !e.relatedTarget && r && (e.relatedTarget = r === e.target ? i.toElement : r), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
        }
      },
      special: {
        load: {
          noBubble: !0
        },
        click: {
          trigger: function() {
            return le.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
          }
        },
        focus: {
          trigger: function() {
            if (this !== Y.activeElement && this.focus) try {
              return this.focus(), !1
            } catch (e) {}
          },
          delegateType: "focusin"
        },
        blur: {
          trigger: function() {
            return this === Y.activeElement && this.blur ? (this.blur(), !1) : t
          },
          delegateType: "focusout"
        },
        beforeunload: {
          postDispatch: function(e) {
            e.result !== t && (e.originalEvent.returnValue = e.result)
          }
        }
      },
      simulate: function(e, t, i, n) {
        var o = le.extend(new le.Event, i, {
          type: e,
          isSimulated: !0,
          originalEvent: {}
        });
        n ? le.event.trigger(o, null, t) : le.event.dispatch.call(t, o), o.isDefaultPrevented() && i.preventDefault()
      }
    }, le.removeEvent = Y.removeEventListener ? function(e, t, i) {
      e.removeEventListener && e.removeEventListener(t, i, !1)
    } : function(e, t, i) {
      var n = "on" + t;
      e.detachEvent && (typeof e[n] === X && (e[n] = null), e.detachEvent(n, i))
    }, le.Event = function(e, i) {
      return this instanceof le.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || !1 === e.returnValue || e.getPreventDefault && e.getPreventDefault() ? l : c) : this.type = e, i && le.extend(this, i), this.timeStamp = e && e.timeStamp || le.now(), this[le.expando] = !0, t) : new le.Event(e, i)
    }, le.Event.prototype = {
      isDefaultPrevented: c,
      isPropagationStopped: c,
      isImmediatePropagationStopped: c,
      preventDefault: function() {
        var e = this.originalEvent;
        this.isDefaultPrevented = l, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
      },
      stopPropagation: function() {
        var e = this.originalEvent;
        this.isPropagationStopped = l, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
      },
      stopImmediatePropagation: function() {
        this.isImmediatePropagationStopped = l, this.stopPropagation()
      }
    }, le.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout"
    }, function(e, t) {
      le.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function(e) {
          var i, n = this,
            o = e.relatedTarget,
            s = e.handleObj;
          return (!o || o !== n && !le.contains(n, o)) && (e.type = s.origType, i = s.handler.apply(this, arguments), e.type = t), i
        }
      }
    }), le.support.submitBubbles || (le.event.special.submit = {
      setup: function() {
        return !le.nodeName(this, "form") && (le.event.add(this, "click._submit keypress._submit", function(e) {
          var i = e.target,
            n = le.nodeName(i, "input") || le.nodeName(i, "button") ? i.form : t;
          n && !le._data(n, "submitBubbles") && (le.event.add(n, "submit._submit", function(e) {
            e._submit_bubble = !0
          }), le._data(n, "submitBubbles", !0))
        }), t)
      },
      postDispatch: function(e) {
        e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && le.event.simulate("submit", this.parentNode, e, !0))
      },
      teardown: function() {
        return !le.nodeName(this, "form") && (le.event.remove(this, "._submit"), t)
      }
    }), le.support.changeBubbles || (le.event.special.change = {
      setup: function() {
        return Ae.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (le.event.add(this, "propertychange._change", function(e) {
          "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
        }), le.event.add(this, "click._change", function(e) {
          this._just_changed && !e.isTrigger && (this._just_changed = !1), le.event.simulate("change", this, e, !0)
        })), !1) : (le.event.add(this, "beforeactivate._change", function(e) {
          var t = e.target;
          Ae.test(t.nodeName) && !le._data(t, "changeBubbles") && (le.event.add(t, "change._change", function(e) {
            !this.parentNode || e.isSimulated || e.isTrigger || le.event.simulate("change", this.parentNode, e, !0)
          }), le._data(t, "changeBubbles", !0))
        }), t)
      },
      handle: function(e) {
        var i = e.target;
        return this !== i || e.isSimulated || e.isTrigger || "radio" !== i.type && "checkbox" !== i.type ? e.handleObj.handler.apply(this, arguments) : t
      },
      teardown: function() {
        return le.event.remove(this, "._change"), !Ae.test(this.nodeName)
      }
    }), le.support.focusinBubbles || le.each({
      focus: "focusin",
      blur: "focusout"
    }, function(e, t) {
      var i = 0,
        n = function(e) {
          le.event.simulate(t, e.target, le.event.fix(e), !0)
        };
      le.event.special[t] = {
        setup: function() {
          0 == i++ && Y.addEventListener(e, n, !0)
        },
        teardown: function() {
          0 == --i && Y.removeEventListener(e, n, !0)
        }
      }
    }), le.fn.extend({
      on: function(e, i, n, o, s) {
        var a, r;
        if ("object" == typeof e) {
          "string" != typeof i && (n = n || i, i = t);
          for (a in e) this.on(a, i, n, e[a], s);
          return this
        }
        if (null == n && null == o ? (o = i, n = i = t) : null == o && ("string" == typeof i ? (o = n, n = t) : (o = n, n = i, i = t)), !1 === o) o = c;
        else if (!o) return this;
        return 1 === s && (r = o, o = function(e) {
          return le().off(e), r.apply(this, arguments)
        }, o.guid = r.guid || (r.guid = le.guid++)), this.each(function() {
          le.event.add(this, e, o, n, i)
        })
      },
      one: function(e, t, i, n) {
        return this.on(e, t, i, n, 1)
      },
      off: function(e, i, n) {
        var o, s;
        if (e && e.preventDefault && e.handleObj) return o = e.handleObj, le(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
        if ("object" == typeof e) {
          for (s in e) this.off(s, i, e[s]);
          return this
        }
        return (!1 === i || "function" == typeof i) && (n = i, i = t), !1 === n && (n = c), this.each(function() {
          le.event.remove(this, e, n, i)
        })
      },
      bind: function(e, t, i) {
        return this.on(e, null, t, i)
      },
      unbind: function(e, t) {
        return this.off(e, null, t)
      },
      delegate: function(e, t, i, n) {
        return this.on(t, e, i, n)
      },
      undelegate: function(e, t, i) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
      },
      trigger: function(e, t) {
        return this.each(function() {
          le.event.trigger(e, t, this)
        })
      },
      triggerHandler: function(e, i) {
        var n = this[0];
        return n ? le.event.trigger(e, i, n, !0) : t
      }
    }),
    function(e, t) {
      function i(e) {
        return ue.test(e + "")
      }

      function n() {
        var e, t = [];
        return e = function(i, n) {
          return t.push(i += " ") > w.cacheLength && delete e[t.shift()], e[i] = n
        }
      }

      function o(e) {
        return e[N] = !0, e
      }

      function s(e) {
        var t = I.createElement("div");
        try {
          return e(t)
        } catch (e) {
          return !1
        } finally {
          t = null
        }
      }

      function a(e, t, i, n) {
        var o, s, a, r, l, u, h, f, p, m;
        if ((t ? t.ownerDocument || t : j) !== I && D(t), t = t || I, i = i || [], !e || "string" != typeof e) return i;
        if (1 !== (r = t.nodeType) && 9 !== r) return [];
        if (!M && !n) {
          if (o = he.exec(e))
            if (a = o[1]) {
              if (9 === r) {
                if (!(s = t.getElementById(a)) || !s.parentNode) return i;
                if (s.id === a) return i.push(s), i
              } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(a)) && L(t, s) && s.id === a) return i.push(s), i
            } else {
              if (o[2]) return V.apply(i, J.call(t.getElementsByTagName(e), 0)), i;
              if ((a = o[3]) && R.getByClassName && t.getElementsByClassName) return V.apply(i, J.call(t.getElementsByClassName(a), 0)), i
            } if (R.qsa && !F.test(e)) {
            if (h = !0, f = N, p = t, m = 9 === r && e, 1 === r && "object" !== t.nodeName.toLowerCase()) {
              for (u = c(e), (h = t.getAttribute("id")) ? f = h.replace(me, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length; l--;) u[l] = f + d(u[l]);
              p = de.test(e) && t.parentNode || t, m = u.join(",")
            }
            if (m) try {
              return V.apply(i, J.call(p.querySelectorAll(m), 0)), i
            } catch (e) {} finally {
              h || t.removeAttribute("id")
            }
          }
        }
        return y(e.replace(ne, "$1"), t, i, n)
      }

      function r(e, t) {
        var i = t && e,
          n = i && (~t.sourceIndex || U) - (~e.sourceIndex || U);
        if (n) return n;
        if (i)
          for (; i = i.nextSibling;)
            if (i === t) return -1;
        return e ? 1 : -1
      }

      function l(e) {
        return o(function(t) {
          return t = +t, o(function(i, n) {
            for (var o, s = e([], i.length, t), a = s.length; a--;) i[o = s[a]] && (i[o] = !(n[o] = i[o]))
          })
        })
      }

      function c(e, t) {
        var i, n, o, s, r, l, c, d = q[e + " "];
        if (d) return t ? 0 : d.slice(0);
        for (r = e, l = [], c = w.preFilter; r;) {
          (!i || (n = oe.exec(r))) && (n && (r = r.slice(n[0].length) || r), l.push(o = [])), i = !1, (n = se.exec(r)) && (i = n.shift(), o.push({
            value: i,
            type: n[0].replace(ne, " ")
          }), r = r.slice(i.length));
          for (s in w.filter) !(n = ce[s].exec(r)) || c[s] && !(n = c[s](n)) || (i = n.shift(), o.push({
            value: i,
            type: s,
            matches: n
          }), r = r.slice(i.length));
          if (!i) break
        }
        return t ? r.length : r ? a.error(e) : q(e, l).slice(0)
      }

      function d(e) {
        for (var t = 0, i = e.length, n = ""; i > t; t++) n += e[t].value;
        return n
      }

      function u(e, t, i) {
        var n = t.dir,
          o = i && "parentNode" === n,
          s = W++;
        return t.first ? function(t, i, s) {
          for (; t = t[n];)
            if (1 === t.nodeType || o) return e(t, i, s)
        } : function(t, i, a) {
          var r, l, c, d = $ + " " + s;
          if (a) {
            for (; t = t[n];)
              if ((1 === t.nodeType || o) && e(t, i, a)) return !0
          } else
            for (; t = t[n];)
              if (1 === t.nodeType || o)
                if (c = t[N] || (t[N] = {}), (l = c[n]) && l[0] === d) {
                  if (!0 === (r = l[1]) || r === x) return !0 === r
                } else if (l = c[n] = [d], l[1] = e(t, i, a) || x, !0 === l[1]) return !0
        }
      }

      function h(e) {
        return e.length > 1 ? function(t, i, n) {
          for (var o = e.length; o--;)
            if (!e[o](t, i, n)) return !1;
          return !0
        } : e[0]
      }

      function f(e, t, i, n, o) {
        for (var s, a = [], r = 0, l = e.length, c = null != t; l > r; r++)(s = e[r]) && (!i || i(s, n, o)) && (a.push(s), c && t.push(r));
        return a
      }

      function p(e, t, i, n, s, a) {
        return n && !n[N] && (n = p(n)), s && !s[N] && (s = p(s, a)), o(function(o, a, r, l) {
          var c, d, u, h = [],
            p = [],
            m = a.length,
            g = o || v(t || "*", r.nodeType ? [r] : r, []),
            y = !e || !o && t ? g : f(g, h, e, r, l),
            b = i ? s || (o ? e : m || n) ? [] : a : y;
          if (i && i(y, b, r, l), n)
            for (c = f(b, p), n(c, [], r, l), d = c.length; d--;)(u = c[d]) && (b[p[d]] = !(y[p[d]] = u));
          if (o) {
            if (s || e) {
              if (s) {
                for (c = [], d = b.length; d--;)(u = b[d]) && c.push(y[d] = u);
                s(null, b = [], c, l)
              }
              for (d = b.length; d--;)(u = b[d]) && (c = s ? K.call(o, u) : h[d]) > -1 && (o[c] = !(a[c] = u))
            }
          } else b = f(b === a ? b.splice(m, b.length) : b), s ? s(null, a, b, l) : V.apply(a, b)
        })
      }

      function m(e) {
        for (var t, i, n, o = e.length, s = w.relative[e[0].type], a = s || w.relative[" "], r = s ? 1 : 0, l = u(function(e) {
            return e === t
          }, a, !0), c = u(function(e) {
            return K.call(t, e) > -1
          }, a, !0), f = [function(e, i, n) {
            return !s && (n || i !== k) || ((t = i).nodeType ? l(e, i, n) : c(e, i, n))
          }]; o > r; r++)
          if (i = w.relative[e[r].type]) f = [u(h(f), i)];
          else {
            if (i = w.filter[e[r].type].apply(null, e[r].matches), i[N]) {
              for (n = ++r; o > n && !w.relative[e[n].type]; n++);
              return p(r > 1 && h(f), r > 1 && d(e.slice(0, r - 1)).replace(ne, "$1"), i, n > r && m(e.slice(r, n)), o > n && m(e = e.slice(n)), o > n && d(e))
            }
            f.push(i)
          } return h(f)
      }

      function g(e, t) {
        var i = 0,
          n = t.length > 0,
          s = e.length > 0,
          r = function(o, r, l, c, d) {
            var u, h, p, m = [],
              g = 0,
              v = "0",
              y = o && [],
              b = null != d,
              C = k,
              E = o || s && w.find.TAG("*", d && r.parentNode || r),
              S = $ += null == C ? 1 : Math.random() || .1;
            for (b && (k = r !== I && r, x = i); null != (u = E[v]); v++) {
              if (s && u) {
                for (h = 0; p = e[h++];)
                  if (p(u, r, l)) {
                    c.push(u);
                    break
                  } b && ($ = S, x = ++i)
              }
              n && ((u = !p && u) && g--, o && y.push(u))
            }
            if (g += v, n && v !== g) {
              for (h = 0; p = t[h++];) p(y, m, r, l);
              if (o) {
                if (g > 0)
                  for (; v--;) y[v] || m[v] || (m[v] = Y.call(c));
                m = f(m)
              }
              V.apply(c, m), b && !o && m.length > 0 && g + t.length > 1 && a.uniqueSort(c)
            }
            return b && ($ = S, k = C), y
          };
        return n ? o(r) : r
      }

      function v(e, t, i) {
        for (var n = 0, o = t.length; o > n; n++) a(e, t[n], i);
        return i
      }

      function y(e, t, i, n) {
        var o, s, a, r, l, u = c(e);
        if (!n && 1 === u.length) {
          if (s = u[0] = u[0].slice(0), s.length > 2 && "ID" === (a = s[0]).type && 9 === t.nodeType && !M && w.relative[s[1].type]) {
            if (!(t = w.find.ID(a.matches[0].replace(ve, ye), t)[0])) return i;
            e = e.slice(s.shift().value.length)
          }
          for (o = ce.needsContext.test(e) ? 0 : s.length; o-- && (a = s[o], !w.relative[r = a.type]);)
            if ((l = w.find[r]) && (n = l(a.matches[0].replace(ve, ye), de.test(s[0].type) && t.parentNode || t))) {
              if (s.splice(o, 1), !(e = n.length && d(s))) return V.apply(i, J.call(n, 0)), i;
              break
            }
        }
        return _(e, u)(n, t, M, i, de.test(e)), i
      }

      function b() {}
      var C, x, w, E, S, _, T, k, D, I, H, M, F, B, P, L, A, N = "sizzle" + -new Date,
        j = e.document,
        R = {},
        $ = 0,
        W = 0,
        O = n(),
        q = n(),
        G = n(),
        z = typeof t,
        U = 1 << 31,
        X = [],
        Y = X.pop,
        V = X.push,
        J = X.slice,
        K = X.indexOf || function(e) {
          for (var t = 0, i = this.length; i > t; t++)
            if (this[t] === e) return t;
          return -1
        },
        Z = "[\\x20\\t\\r\\n\\f]",
        Q = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        ee = Q.replace("w", "w#"),
        te = "\\[" + Z + "*(" + Q + ")" + Z + "*(?:([*^$|!~]?=)" + Z + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ee + ")|)|)" + Z + "*\\]",
        ie = ":(" + Q + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + te.replace(3, 8) + ")*)|.*)\\)|)",
        ne = RegExp("^" + Z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Z + "+$", "g"),
        oe = RegExp("^" + Z + "*," + Z + "*"),
        se = RegExp("^" + Z + "*([\\x20\\t\\r\\n\\f>+~])" + Z + "*"),
        ae = RegExp(ie),
        re = RegExp("^" + ee + "$"),
        ce = {
          ID: RegExp("^#(" + Q + ")"),
          CLASS: RegExp("^\\.(" + Q + ")"),
          NAME: RegExp("^\\[name=['\"]?(" + Q + ")['\"]?\\]"),
          TAG: RegExp("^(" + Q.replace("w", "w*") + ")"),
          ATTR: RegExp("^" + te),
          PSEUDO: RegExp("^" + ie),
          CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + Z + "*(even|odd|(([+-]|)(\\d*)n|)" + Z + "*(?:([+-]|)" + Z + "*(\\d+)|))" + Z + "*\\)|)", "i"),
          needsContext: RegExp("^" + Z + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + Z + "*((?:-\\d)?\\d*)" + Z + "*\\)|)(?=[^-]|$)", "i")
        },
        de = /[\x20\t\r\n\f]*[+~]/,
        ue = /^[^{]+\{\s*\[native code/,
        he = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        fe = /^(?:input|select|textarea|button)$/i,
        pe = /^h\d$/i,
        me = /'|\\/g,
        ge = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
        ve = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
        ye = function(e, t) {
          var i = "0x" + t - 65536;
          return i !== i ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
        };
      try {
        J.call(j.documentElement.childNodes, 0)[0].nodeType
      } catch (e) {
        J = function(e) {
          for (var t, i = []; t = this[e++];) i.push(t);
          return i
        }
      }
      S = a.isXML = function(e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && "HTML" !== t.nodeName
      }, D = a.setDocument = function(e) {
        var n = e ? e.ownerDocument || e : j;
        return n !== I && 9 === n.nodeType && n.documentElement ? (I = n, H = n.documentElement, M = S(n), R.tagNameNoComments = s(function(e) {
          return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
        }), R.attributes = s(function(e) {
          e.innerHTML = "<select></select>";
          var t = typeof e.lastChild.getAttribute("multiple");
          return "boolean" !== t && "string" !== t
        }), R.getByClassName = s(function(e) {
          return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !(!e.getElementsByClassName || !e.getElementsByClassName("e").length) && (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length)
        }), R.getByName = s(function(e) {
          e.id = N + 0, e.innerHTML = "<a name='" + N + "'></a><div name='" + N + "'></div>", H.insertBefore(e, H.firstChild);
          var t = n.getElementsByName && n.getElementsByName(N).length === 2 + n.getElementsByName(N + 0).length;
          return R.getIdNotName = !n.getElementById(N), H.removeChild(e), t
        }), w.attrHandle = s(function(e) {
          return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== z && "#" === e.firstChild.getAttribute("href")
        }) ? {} : {
          href: function(e) {
            return e.getAttribute("href", 2)
          },
          type: function(e) {
            return e.getAttribute("type")
          }
        }, R.getIdNotName ? (w.find.ID = function(e, t) {
          if (typeof t.getElementById !== z && !M) {
            var i = t.getElementById(e);
            return i && i.parentNode ? [i] : []
          }
        }, w.filter.ID = function(e) {
          var t = e.replace(ve, ye);
          return function(e) {
            return e.getAttribute("id") === t
          }
        }) : (w.find.ID = function(e, i) {
          if (typeof i.getElementById !== z && !M) {
            var n = i.getElementById(e);
            return n ? n.id === e || typeof n.getAttributeNode !== z && n.getAttributeNode("id").value === e ? [n] : t : []
          }
        }, w.filter.ID = function(e) {
          var t = e.replace(ve, ye);
          return function(e) {
            var i = typeof e.getAttributeNode !== z && e.getAttributeNode("id");
            return i && i.value === t
          }
        }), w.find.TAG = R.tagNameNoComments ? function(e, i) {
          return typeof i.getElementsByTagName !== z ? i.getElementsByTagName(e) : t
        } : function(e, t) {
          var i, n = [],
            o = 0,
            s = t.getElementsByTagName(e);
          if ("*" === e) {
            for (; i = s[o++];) 1 === i.nodeType && n.push(i);
            return n
          }
          return s
        }, w.find.NAME = R.getByName && function(e, i) {
          return typeof i.getElementsByName !== z ? i.getElementsByName(name) : t
        }, w.find.CLASS = R.getByClassName && function(e, i) {
          return typeof i.getElementsByClassName === z || M ? t : i.getElementsByClassName(e)
        }, B = [], F = [":focus"], (R.qsa = i(n.querySelectorAll)) && (s(function(e) {
          e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || F.push("\\[" + Z + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || F.push(":checked")
        }), s(function(e) {
          e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && F.push("[*^$]=" + Z + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
        })), (R.matchesSelector = i(P = H.matchesSelector || H.mozMatchesSelector || H.webkitMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && s(function(e) {
          R.disconnectedMatch = P.call(e, "div"), P.call(e, "[s!='']:x"), B.push("!=", ie)
        }), F = RegExp(F.join("|")), B = RegExp(B.join("|")), L = i(H.contains) || H.compareDocumentPosition ? function(e, t) {
          var i = 9 === e.nodeType ? e.documentElement : e,
            n = t && t.parentNode;
          return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
        } : function(e, t) {
          if (t)
            for (; t = t.parentNode;)
              if (t === e) return !0;
          return !1
        }, A = H.compareDocumentPosition ? function(e, t) {
          var i;
          return e === t ? (T = !0, 0) : (i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & i || e.parentNode && 11 === e.parentNode.nodeType ? e === n || L(j, e) ? -1 : t === n || L(j, t) ? 1 : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
        } : function(e, t) {
          var i, o = 0,
            s = e.parentNode,
            a = t.parentNode,
            l = [e],
            c = [t];
          if (e === t) return T = !0, 0;
          if (!s || !a) return e === n ? -1 : t === n ? 1 : s ? -1 : a ? 1 : 0;
          if (s === a) return r(e, t);
          for (i = e; i = i.parentNode;) l.unshift(i);
          for (i = t; i = i.parentNode;) c.unshift(i);
          for (; l[o] === c[o];) o++;
          return o ? r(l[o], c[o]) : l[o] === j ? -1 : c[o] === j ? 1 : 0
        }, T = !1, [0, 0].sort(A), R.detectDuplicates = T, I) : I
      }, a.matches = function(e, t) {
        return a(e, null, null, t)
      }, a.matchesSelector = function(e, t) {
        if ((e.ownerDocument || e) !== I && D(e), t = t.replace(ge, "='$1']"), !(!R.matchesSelector || M || B && B.test(t) || F.test(t))) try {
          var i = P.call(e, t);
          if (i || R.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
        } catch (e) {}
        return a(t, I, null, [e]).length > 0
      }, a.contains = function(e, t) {
        return (e.ownerDocument || e) !== I && D(e), L(e, t)
      }, a.attr = function(e, t) {
        var i;
        return (e.ownerDocument || e) !== I && D(e), M || (t = t.toLowerCase()), (i = w.attrHandle[t]) ? i(e) : M || R.attributes ? e.getAttribute(t) : ((i = e.getAttributeNode(t)) || e.getAttribute(t)) && !0 === e[t] ? t : i && i.specified ? i.value : null
      }, a.error = function(e) {
        throw Error("Syntax error, unrecognized expression: " + e)
      }, a.uniqueSort = function(e) {
        var t, i = [],
          n = 1,
          o = 0;
        if (T = !R.detectDuplicates, e.sort(A), T) {
          for (; t = e[n]; n++) t === e[n - 1] && (o = i.push(n));
          for (; o--;) e.splice(i[o], 1)
        }
        return e
      }, E = a.getText = function(e) {
        var t, i = "",
          n = 0,
          o = e.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) i += E(e)
          } else if (3 === o || 4 === o) return e.nodeValue
        } else
          for (; t = e[n]; n++) i += E(t);
        return i
      }, w = a.selectors = {
        cacheLength: 50,
        createPseudo: o,
        match: ce,
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function(e) {
            return e[1] = e[1].replace(ve, ye), e[3] = (e[4] || e[5] || "").replace(ve, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
          },
          CHILD: function(e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || a.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && a.error(e[0]), e
          },
          PSEUDO: function(e) {
            var t, i = !e[5] && e[2];
            return ce.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : i && ae.test(i) && (t = c(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
          }
        },
        filter: {
          TAG: function(e) {
            return "*" === e ? function() {
              return !0
            } : (e = e.replace(ve, ye).toLowerCase(), function(t) {
              return t.nodeName && t.nodeName.toLowerCase() === e
            })
          },
          CLASS: function(e) {
            var t = O[e + " "];
            return t || (t = RegExp("(^|" + Z + ")" + e + "(" + Z + "|$)")) && O(e, function(e) {
              return t.test(e.className || typeof e.getAttribute !== z && e.getAttribute("class") || "")
            })
          },
          ATTR: function(e, t, i) {
            return function(n) {
              var o = a.attr(n, e);
              return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === i : "!=" === t ? o !== i : "^=" === t ? i && 0 === o.indexOf(i) : "*=" === t ? i && o.indexOf(i) > -1 : "$=" === t ? i && o.slice(-i.length) === i : "~=" === t ? (" " + o + " ").indexOf(i) > -1 : "|=" === t && (o === i || o.slice(0, i.length + 1) === i + "-"))
            }
          },
          CHILD: function(e, t, i, n, o) {
            var s = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              r = "of-type" === t;
            return 1 === n && 0 === o ? function(e) {
              return !!e.parentNode
            } : function(t, i, l) {
              var c, d, u, h, f, p, m = s !== a ? "nextSibling" : "previousSibling",
                g = t.parentNode,
                v = r && t.nodeName.toLowerCase(),
                y = !l && !r;
              if (g) {
                if (s) {
                  for (; m;) {
                    for (u = t; u = u[m];)
                      if (r ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                    p = m = "only" === e && !p && "nextSibling"
                  }
                  return !0
                }
                if (p = [a ? g.firstChild : g.lastChild], a && y) {
                  for (d = g[N] || (g[N] = {}), c = d[e] || [], f = c[0] === $ && c[1], h = c[0] === $ && c[2], u = f && g.childNodes[f]; u = ++f && u && u[m] || (h = f = 0) || p.pop();)
                    if (1 === u.nodeType && ++h && u === t) {
                      d[e] = [$, f, h];
                      break
                    }
                } else if (y && (c = (t[N] || (t[N] = {}))[e]) && c[0] === $) h = c[1];
                else
                  for (;
                    (u = ++f && u && u[m] || (h = f = 0) || p.pop()) && ((r ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++h || (y && ((u[N] || (u[N] = {}))[e] = [$, h]), u !== t)););
                return (h -= o) === n || 0 == h % n && h / n >= 0
              }
            }
          },
          PSEUDO: function(e, t) {
            var i, n = w.pseudos[e] || w.setFilters[e.toLowerCase()] || a.error("unsupported pseudo: " + e);
            return n[N] ? n(t) : n.length > 1 ? (i = [e, e, "", t], w.setFilters.hasOwnProperty(e.toLowerCase()) ? o(function(e, i) {
              for (var o, s = n(e, t), a = s.length; a--;) o = K.call(e, s[a]), e[o] = !(i[o] = s[a])
            }) : function(e) {
              return n(e, 0, i)
            }) : n
          }
        },
        pseudos: {
          not: o(function(e) {
            var t = [],
              i = [],
              n = _(e.replace(ne, "$1"));
            return n[N] ? o(function(e, t, i, o) {
              for (var s, a = n(e, null, o, []), r = e.length; r--;)(s = a[r]) && (e[r] = !(t[r] = s))
            }) : function(e, o, s) {
              return t[0] = e, n(t, null, s, i), !i.pop()
            }
          }),
          has: o(function(e) {
            return function(t) {
              return a(e, t).length > 0
            }
          }),
          contains: o(function(e) {
            return function(t) {
              return (t.textContent || t.innerText || E(t)).indexOf(e) > -1
            }
          }),
          lang: o(function(e) {
            return re.test(e || "") || a.error("unsupported lang: " + e), e = e.replace(ve, ye).toLowerCase(),
              function(t) {
                var i;
                do {
                  if (i = M ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-")
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1
              }
          }),
          target: function(t) {
            var i = e.location && e.location.hash;
            return i && i.slice(1) === t.id
          },
          root: function(e) {
            return e === H
          },
          focus: function(e) {
            return e === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
          },
          enabled: function(e) {
            return !1 === e.disabled
          },
          disabled: function(e) {
            return !0 === e.disabled
          },
          checked: function(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && !!e.checked || "option" === t && !!e.selected
          },
          selected: function(e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
          },
          empty: function(e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
            return !0
          },
          parent: function(e) {
            return !w.pseudos.empty(e)
          },
          header: function(e) {
            return pe.test(e.nodeName)
          },
          input: function(e) {
            return fe.test(e.nodeName)
          },
          button: function(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t
          },
          text: function(e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
          },
          first: l(function() {
            return [0]
          }),
          last: l(function(e, t) {
            return [t - 1]
          }),
          eq: l(function(e, t, i) {
            return [0 > i ? i + t : i]
          }),
          even: l(function(e, t) {
            for (var i = 0; t > i; i += 2) e.push(i);
            return e
          }),
          odd: l(function(e, t) {
            for (var i = 1; t > i; i += 2) e.push(i);
            return e
          }),
          lt: l(function(e, t, i) {
            for (var n = 0 > i ? i + t : i; --n >= 0;) e.push(n);
            return e
          }),
          gt: l(function(e, t, i) {
            for (var n = 0 > i ? i + t : i; t > ++n;) e.push(n);
            return e
          })
        }
      };
      for (C in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) w.pseudos[C] = function(e) {
        return function(t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e
        }
      }(C);
      for (C in {
          submit: !0,
          reset: !0
        }) w.pseudos[C] = function(e) {
        return function(t) {
          var i = t.nodeName.toLowerCase();
          return ("input" === i || "button" === i) && t.type === e
        }
      }(C);
      _ = a.compile = function(e, t) {
        var i, n = [],
          o = [],
          s = G[e + " "];
        if (!s) {
          for (t || (t = c(e)), i = t.length; i--;) s = m(t[i]), s[N] ? n.push(s) : o.push(s);
          s = G(e, g(o, n))
        }
        return s
      }, w.pseudos.nth = w.pseudos.eq, w.filters = b.prototype = w.pseudos, w.setFilters = new b, D(), a.attr = le.attr, le.find = a, le.expr = a.selectors, le.expr[":"] = le.expr.pseudos, le.unique = a.uniqueSort, le.text = a.getText, le.isXMLDoc = a.isXML, le.contains = a.contains
    }(e);
  var We = /Until$/,
    Oe = /^(?:parents|prev(?:Until|All))/,
    qe = /^.[^:#\[\.,]*$/,
    Ge = le.expr.match.needsContext,
    ze = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  le.fn.extend({
    find: function(e) {
      var t, i, n, o = this.length;
      if ("string" != typeof e) return n = this, this.pushStack(le(e).filter(function() {
        for (t = 0; o > t; t++)
          if (le.contains(n[t], this)) return !0
      }));
      for (i = [], t = 0; o > t; t++) le.find(e, this[t], i);
      return i = this.pushStack(o > 1 ? le.unique(i) : i), i.selector = (this.selector ? this.selector + " " : "") + e, i
    },
    has: function(e) {
      var t, i = le(e, this),
        n = i.length;
      return this.filter(function() {
        for (t = 0; n > t; t++)
          if (le.contains(this, i[t])) return !0
      })
    },
    not: function(e) {
      return this.pushStack(u(this, e, !1))
    },
    filter: function(e) {
      return this.pushStack(u(this, e, !0))
    },
    is: function(e) {
      return !!e && ("string" == typeof e ? Ge.test(e) ? le(e, this.context).index(this[0]) >= 0 : le.filter(e, this).length > 0 : this.filter(e).length > 0)
    },
    closest: function(e, t) {
      for (var i, n = 0, o = this.length, s = [], a = Ge.test(e) || "string" != typeof e ? le(e, t || this.context) : 0; o > n; n++)
        for (i = this[n]; i && i.ownerDocument && i !== t && 11 !== i.nodeType;) {
          if (a ? a.index(i) > -1 : le.find.matchesSelector(i, e)) {
            s.push(i);
            break
          }
          i = i.parentNode
        }
      return this.pushStack(s.length > 1 ? le.unique(s) : s)
    },
    index: function(e) {
      return e ? "string" == typeof e ? le.inArray(this[0], le(e)) : le.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(e, t) {
      var i = "string" == typeof e ? le(e, t) : le.makeArray(e && e.nodeType ? [e] : e),
        n = le.merge(this.get(), i);
      return this.pushStack(le.unique(n))
    },
    addBack: function(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), le.fn.andSelf = le.fn.addBack, le.each({
    parent: function(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    },
    parents: function(e) {
      return le.dir(e, "parentNode")
    },
    parentsUntil: function(e, t, i) {
      return le.dir(e, "parentNode", i)
    },
    next: function(e) {
      return d(e, "nextSibling")
    },
    prev: function(e) {
      return d(e, "previousSibling")
    },
    nextAll: function(e) {
      return le.dir(e, "nextSibling")
    },
    prevAll: function(e) {
      return le.dir(e, "previousSibling")
    },
    nextUntil: function(e, t, i) {
      return le.dir(e, "nextSibling", i)
    },
    prevUntil: function(e, t, i) {
      return le.dir(e, "previousSibling", i)
    },
    siblings: function(e) {
      return le.sibling((e.parentNode || {}).firstChild, e)
    },
    children: function(e) {
      return le.sibling(e.firstChild)
    },
    contents: function(e) {
      return le.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : le.merge([], e.childNodes)
    }
  }, function(e, t) {
    le.fn[e] = function(i, n) {
      var o = le.map(this, t, i);
      return We.test(e) || (n = i), n && "string" == typeof n && (o = le.filter(n, o)), o = this.length > 1 && !ze[e] ? le.unique(o) : o, this.length > 1 && Oe.test(e) && (o = o.reverse()), this.pushStack(o)
    }
  }), le.extend({
    filter: function(e, t, i) {
      return i && (e = ":not(" + e + ")"), 1 === t.length ? le.find.matchesSelector(t[0], e) ? [t[0]] : [] : le.find.matches(e, t)
    },
    dir: function(e, i, n) {
      for (var o = [], s = e[i]; s && 9 !== s.nodeType && (n === t || 1 !== s.nodeType || !le(s).is(n));) 1 === s.nodeType && o.push(s), s = s[i];
      return o
    },
    sibling: function(e, t) {
      for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
      return i
    }
  });
  var Ue = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    Xe = / jQuery\d+="(?:null|\d+)"/g,
    Ye = RegExp("<(?:" + Ue + ")[\\s/>]", "i"),
    Ve = /^\s+/,
    Je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Ke = /<([\w:]+)/,
    Ze = /<tbody/i,
    Qe = /<|&#?\w+;/,
    et = /<(?:script|style|link)/i,
    tt = /^(?:checkbox|radio)$/i,
    it = /checked\s*(?:[^=]|=\s*.checked.)/i,
    nt = /^$|\/(?:java|ecma)script/i,
    ot = /^true\/(.*)/,
    st = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    at = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: le.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    rt = h(Y),
    lt = rt.appendChild(Y.createElement("div"));
  at.optgroup = at.option, at.tbody = at.tfoot = at.colgroup = at.caption = at.thead, at.th = at.td, le.fn.extend({
    text: function(e) {
      return le.access(this, function(e) {
        return e === t ? le.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Y).createTextNode(e))
      }, null, e, arguments.length)
    },
    wrapAll: function(e) {
      if (le.isFunction(e)) return this.each(function(t) {
        le(this).wrapAll(e.call(this, t))
      });
      if (this[0]) {
        var t = le(e, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
          for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
          return e
        }).append(this)
      }
      return this
    },
    wrapInner: function(e) {
      return le.isFunction(e) ? this.each(function(t) {
        le(this).wrapInner(e.call(this, t))
      }) : this.each(function() {
        var t = le(this),
          i = t.contents();
        i.length ? i.wrapAll(e) : t.append(e)
      })
    },
    wrap: function(e) {
      var t = le.isFunction(e);
      return this.each(function(i) {
        le(this).wrapAll(t ? e.call(this, i) : e)
      })
    },
    unwrap: function() {
      return this.parent().each(function() {
        le.nodeName(this, "body") || le(this).replaceWith(this.childNodes)
      }).end()
    },
    append: function() {
      return this.domManip(arguments, !0, function(e) {
        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
      })
    },
    prepend: function() {
      return this.domManip(arguments, !0, function(e) {
        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
      })
    },
    before: function() {
      return this.domManip(arguments, !1, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    },
    after: function() {
      return this.domManip(arguments, !1, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    },
    remove: function(e, t) {
      for (var i, n = 0; null != (i = this[n]); n++)(!e || le.filter(e, [i]).length > 0) && (t || 1 !== i.nodeType || le.cleanData(b(i)), i.parentNode && (t && le.contains(i.ownerDocument, i) && g(b(i, "script")), i.parentNode.removeChild(i)));
      return this
    },
    empty: function() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        for (1 === e.nodeType && le.cleanData(b(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
        e.options && le.nodeName(e, "select") && (e.options.length = 0)
      }
      return this
    },
    clone: function(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function() {
        return le.clone(this, e, t)
      })
    },
    html: function(e) {
      return le.access(this, function(e) {
        var i = this[0] || {},
          n = 0,
          o = this.length;
        if (e === t) return 1 === i.nodeType ? i.innerHTML.replace(Xe, "") : t;
        if (!("string" != typeof e || et.test(e) || !le.support.htmlSerialize && Ye.test(e) || !le.support.leadingWhitespace && Ve.test(e) || at[(Ke.exec(e) || ["", ""])[1].toLowerCase()])) {
          e = e.replace(Je, "<$1></$2>");
          try {
            for (; o > n; n++) i = this[n] || {}, 1 === i.nodeType && (le.cleanData(b(i, !1)), i.innerHTML = e);
            i = 0
          } catch (e) {}
        }
        i && this.empty().append(e)
      }, null, e, arguments.length)
    },
    replaceWith: function(e) {
      return le.isFunction(e) || "string" == typeof e || (e = le(e).not(this).detach()), this.domManip([e], !0, function(e) {
        var t = this.nextSibling,
          i = this.parentNode;
        i && (le(this).remove(), i.insertBefore(e, t))
      })
    },
    detach: function(e) {
      return this.remove(e, !0)
    },
    domManip: function(e, i, n) {
      e = te.apply([], e);
      var o, s, a, r, l, c, d = 0,
        u = this.length,
        h = this,
        g = u - 1,
        v = e[0],
        y = le.isFunction(v);
      if (y || !(1 >= u || "string" != typeof v || le.support.checkClone) && it.test(v)) return this.each(function(o) {
        var s = h.eq(o);
        y && (e[0] = v.call(this, o, i ? s.html() : t)), s.domManip(e, i, n)
      });
      if (u && (c = le.buildFragment(e, this[0].ownerDocument, !1, this), o = c.firstChild, 1 === c.childNodes.length && (c = o), o)) {
        for (i = i && le.nodeName(o, "tr"), r = le.map(b(c, "script"), p), a = r.length; u > d; d++) s = c, d !== g && (s = le.clone(s, !0, !0), a && le.merge(r, b(s, "script"))), n.call(i && le.nodeName(this[d], "table") ? f(this[d], "tbody") : this[d], s, d);
        if (a)
          for (l = r[r.length - 1].ownerDocument, le.map(r, m), d = 0; a > d; d++) s = r[d], nt.test(s.type || "") && !le._data(s, "globalEval") && le.contains(l, s) && (s.src ? le.ajax({
            url: s.src,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
          }) : le.globalEval((s.text || s.textContent || s.innerHTML || "").replace(st, "")));
        c = o = null
      }
      return this
    }
  }), le.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(e, t) {
    le.fn[e] = function(e) {
      for (var i, n = 0, o = [], s = le(e), a = s.length - 1; a >= n; n++) i = n === a ? this : this.clone(!0), le(s[n])[t](i), ie.apply(o, i.get());
      return this.pushStack(o)
    }
  }), le.extend({
    clone: function(e, t, i) {
      var n, o, s, a, r, l = le.contains(e.ownerDocument, e);
      if (le.support.html5Clone || le.isXMLDoc(e) || !Ye.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (lt.innerHTML = e.outerHTML, lt.removeChild(s = lt.firstChild)), !(le.support.noCloneEvent && le.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || le.isXMLDoc(e)))
        for (n = b(s), r = b(e), a = 0; null != (o = r[a]); ++a) n[a] && y(o, n[a]);
      if (t)
        if (i)
          for (r = r || b(e), n = n || b(s), a = 0; null != (o = r[a]); a++) v(o, n[a]);
        else v(e, s);
      return n = b(s, "script"), n.length > 0 && g(n, !l && b(e, "script")), n = r = o = null, s
    },
    buildFragment: function(e, t, i, n) {
      for (var o, s, a, r, l, c, d, u = e.length, f = h(t), p = [], m = 0; u > m; m++)
        if ((s = e[m]) || 0 === s)
          if ("object" === le.type(s)) le.merge(p, s.nodeType ? [s] : s);
          else if (Qe.test(s)) {
        for (r = r || f.appendChild(t.createElement("div")), l = (Ke.exec(s) || ["", ""])[1].toLowerCase(), d = at[l] || at._default, r.innerHTML = d[1] + s.replace(Je, "<$1></$2>") + d[2], o = d[0]; o--;) r = r.lastChild;
        if (!le.support.leadingWhitespace && Ve.test(s) && p.push(t.createTextNode(Ve.exec(s)[0])), !le.support.tbody)
          for (s = "table" !== l || Ze.test(s) ? "<table>" !== d[1] || Ze.test(s) ? 0 : r : r.firstChild, o = s && s.childNodes.length; o--;) le.nodeName(c = s.childNodes[o], "tbody") && !c.childNodes.length && s.removeChild(c);
        for (le.merge(p, r.childNodes), r.textContent = ""; r.firstChild;) r.removeChild(r.firstChild);
        r = f.lastChild
      } else p.push(t.createTextNode(s));
      for (r && f.removeChild(r), le.support.appendChecked || le.grep(b(p, "input"), C), m = 0; s = p[m++];)
        if ((!n || -1 === le.inArray(s, n)) && (a = le.contains(s.ownerDocument, s), r = b(f.appendChild(s), "script"), a && g(r), i))
          for (o = 0; s = r[o++];) nt.test(s.type || "") && i.push(s);
      return r = null, f
    },
    cleanData: function(e, t) {
      for (var i, n, o, s, a = 0, r = le.expando, l = le.cache, c = le.support.deleteExpando, d = le.event.special; null != (i = e[a]); a++)
        if ((t || le.acceptData(i)) && (o = i[r], s = o && l[o])) {
          if (s.events)
            for (n in s.events) d[n] ? le.event.remove(i, n) : le.removeEvent(i, n, s.handle);
          l[o] && (delete l[o], c ? delete i[r] : typeof i.removeAttribute !== X ? i.removeAttribute(r) : i[r] = null, Q.push(o))
        }
    }
  });
  var ct, dt, ut, ht = /alpha\([^)]*\)/i,
    ft = /opacity\s*=\s*([^)]*)/,
    pt = /^(top|right|bottom|left)$/,
    mt = /^(none|table(?!-c[ea]).+)/,
    gt = /^margin/,
    vt = RegExp("^(" + ce + ")(.*)$", "i"),
    yt = RegExp("^(" + ce + ")(?!px)[a-z%]+$", "i"),
    bt = RegExp("^([+-])=(" + ce + ")", "i"),
    Ct = {
      BODY: "block"
    },
    xt = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    wt = {
      letterSpacing: 0,
      fontWeight: 400
    },
    Et = ["Top", "Right", "Bottom", "Left"],
    St = ["Webkit", "O", "Moz", "ms"];
  le.fn.extend({
    css: function(e, i) {
      return le.access(this, function(e, i, n) {
        var o, s, a = {},
          r = 0;
        if (le.isArray(i)) {
          for (s = dt(e), o = i.length; o > r; r++) a[i[r]] = le.css(e, i[r], !1, s);
          return a
        }
        return n !== t ? le.style(e, i, n) : le.css(e, i)
      }, e, i, arguments.length > 1)
    },
    show: function() {
      return E(this, !0)
    },
    hide: function() {
      return E(this)
    },
    toggle: function(e) {
      var t = "boolean" == typeof e;
      return this.each(function() {
        (t ? e : w(this)) ? le(this).show(): le(this).hide()
      })
    }
  }), le.extend({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          if (t) {
            var i = ut(e, "opacity");
            return "" === i ? "1" : i
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      float: le.support.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function(e, i, n, o) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var s, a, r, l = le.camelCase(i),
          c = e.style;
        if (i = le.cssProps[l] || (le.cssProps[l] = x(c, l)), r = le.cssHooks[i] || le.cssHooks[l], n === t) return r && "get" in r && (s = r.get(e, !1, o)) !== t ? s : c[i];
        if (a = typeof n, "string" === a && (s = bt.exec(n)) && (n = (s[1] + 1) * s[2] + parseFloat(le.css(e, i)), a = "number"), !(null == n || "number" === a && isNaN(n) || ("number" !== a || le.cssNumber[l] || (n += "px"), le.support.clearCloneStyle || "" !== n || 0 !== i.indexOf("background") || (c[i] = "inherit"), r && "set" in r && (n = r.set(e, n, o)) === t))) try {
          c[i] = n
        } catch (e) {}
      }
    },
    css: function(e, i, n, o) {
      var s, a, r, l = le.camelCase(i);
      return i = le.cssProps[l] || (le.cssProps[l] = x(e.style, l)), r = le.cssHooks[i] || le.cssHooks[l], r && "get" in r && (a = r.get(e, !0, n)), a === t && (a = ut(e, i, o)), "normal" === a && i in wt && (a = wt[i]), "" === n || n ? (s = parseFloat(a), !0 === n || le.isNumeric(s) ? s || 0 : a) : a
    },
    swap: function(e, t, i, n) {
      var o, s, a = {};
      for (s in t) a[s] = e.style[s], e.style[s] = t[s];
      o = i.apply(e, n || []);
      for (s in t) e.style[s] = a[s];
      return o
    }
  }), e.getComputedStyle ? (dt = function(t) {
    return e.getComputedStyle(t, null)
  }, ut = function(e, i, n) {
    var o, s, a, r = n || dt(e),
      l = r ? r.getPropertyValue(i) || r[i] : t,
      c = e.style;
    return r && ("" !== l || le.contains(e.ownerDocument, e) || (l = le.style(e, i)), yt.test(l) && gt.test(i) && (o = c.width, s = c.minWidth, a = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, l = r.width, c.width = o, c.minWidth = s, c.maxWidth = a)), l
  }) : Y.documentElement.currentStyle && (dt = function(e) {
    return e.currentStyle
  }, ut = function(e, i, n) {
    var o, s, a, r = n || dt(e),
      l = r ? r[i] : t,
      c = e.style;
    return null == l && c && c[i] && (l = c[i]), yt.test(l) && !pt.test(i) && (o = c.left, s = e.runtimeStyle, a = s && s.left, a && (s.left = e.currentStyle.left), c.left = "fontSize" === i ? "1em" : l, l = c.pixelLeft + "px", c.left = o, a && (s.left = a)), "" === l ? "auto" : l
  }), le.each(["height", "width"], function(e, i) {
    le.cssHooks[i] = {
      get: function(e, n, o) {
        return n ? 0 === e.offsetWidth && mt.test(le.css(e, "display")) ? le.swap(e, xt, function() {
          return T(e, i, o)
        }) : T(e, i, o) : t
      },
      set: function(e, t, n) {
        var o = n && dt(e);
        return S(e, t, n ? _(e, i, n, le.support.boxSizing && "border-box" === le.css(e, "boxSizing", !1, o), o) : 0)
      }
    }
  }), le.support.opacity || (le.cssHooks.opacity = {
    get: function(e, t) {
      return ft.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
    },
    set: function(e, t) {
      var i = e.style,
        n = e.currentStyle,
        o = le.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
        s = n && n.filter || i.filter || "";
      i.zoom = 1, (t >= 1 || "" === t) && "" === le.trim(s.replace(ht, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === t || n && !n.filter) || (i.filter = ht.test(s) ? s.replace(ht, o) : s + " " + o)
    }
  }), le(function() {
    le.support.reliableMarginRight || (le.cssHooks.marginRight = {
      get: function(e, i) {
        return i ? le.swap(e, {
          display: "inline-block"
        }, ut, [e, "marginRight"]) : t
      }
    }), !le.support.pixelPosition && le.fn.position && le.each(["top", "left"], function(e, i) {
      le.cssHooks[i] = {
        get: function(e, n) {
          return n ? (n = ut(e, i), yt.test(n) ? le(e).position()[i] + "px" : n) : t
        }
      }
    })
  }), le.expr && le.expr.filters && (le.expr.filters.hidden = function(e) {
    return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !le.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || le.css(e, "display"))
  }, le.expr.filters.visible = function(e) {
    return !le.expr.filters.hidden(e)
  }), le.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(e, t) {
    le.cssHooks[e + t] = {
      expand: function(i) {
        for (var n = 0, o = {}, s = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) o[e + Et[n] + t] = s[n] || s[n - 2] || s[0];
        return o
      }
    }, gt.test(e) || (le.cssHooks[e + t].set = S)
  });
  var _t = /%20/g,
    Tt = /\[\]$/,
    kt = /\r?\n/g,
    Dt = /^(?:submit|button|image|reset|file)$/i,
    It = /^(?:input|select|textarea|keygen)/i;
  le.fn.extend({
    serialize: function() {
      return le.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        var e = le.prop(this, "elements");
        return e ? le.makeArray(e) : this
      }).filter(function() {
        var e = this.type;
        return this.name && !le(this).is(":disabled") && It.test(this.nodeName) && !Dt.test(e) && (this.checked || !tt.test(e))
      }).map(function(e, t) {
        var i = le(this).val();
        return null == i ? null : le.isArray(i) ? le.map(i, function(e) {
          return {
            name: t.name,
            value: e.replace(kt, "\r\n")
          }
        }) : {
          name: t.name,
          value: i.replace(kt, "\r\n")
        }
      }).get()
    }
  }), le.param = function(e, i) {
    var n, o = [],
      s = function(e, t) {
        t = le.isFunction(t) ? t() : null == t ? "" : t, o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
      };
    if (i === t && (i = le.ajaxSettings && le.ajaxSettings.traditional), le.isArray(e) || e.jquery && !le.isPlainObject(e)) le.each(e, function() {
      s(this.name, this.value)
    });
    else
      for (n in e) I(n, e[n], i, s);
    return o.join("&").replace(_t, "+")
  }, le.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
    le.fn[t] = function(e, i) {
      return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
    }
  }), le.fn.hover = function(e, t) {
    return this.mouseenter(e).mouseleave(t || e)
  };
  var Ht, Mt, Ft = le.now(),
    Bt = /\?/,
    Pt = /#.*$/,
    Lt = /([?&])_=[^&]*/,
    At = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Nt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    jt = /^(?:GET|HEAD)$/,
    Rt = /^\/\//,
    $t = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    Wt = le.fn.load,
    Ot = {},
    qt = {},
    Gt = "*/".concat("*");
  try {
    Mt = V.href
  } catch (e) {
    Mt = Y.createElement("a"), Mt.href = "", Mt = Mt.href
  }
  Ht = $t.exec(Mt.toLowerCase()) || [], le.fn.load = function(e, i, n) {
    if ("string" != typeof e && Wt) return Wt.apply(this, arguments);
    var o, s, a, r = this,
      l = e.indexOf(" ");
    return l >= 0 && (o = e.slice(l, e.length), e = e.slice(0, l)), le.isFunction(i) ? (n = i, i = t) : i && "object" == typeof i && (a = "POST"), r.length > 0 && le.ajax({
      url: e,
      type: a,
      dataType: "html",
      data: i
    }).done(function(e) {
      s = arguments, r.html(o ? le("<div>").append(le.parseHTML(e)).find(o) : e)
    }).complete(n && function(e, t) {
      r.each(n, s || [e.responseText, t, e])
    }), this
  }, le.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
    le.fn[t] = function(e) {
      return this.on(t, e)
    }
  }), le.each(["get", "post"], function(e, i) {
    le[i] = function(e, n, o, s) {
      return le.isFunction(n) && (s = s || o, o = n, n = t), le.ajax({
        url: e,
        type: i,
        dataType: s,
        data: n,
        success: o
      })
    }
  }), le.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Mt,
      type: "GET",
      isLocal: Nt.test(Ht[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Gt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText"
      },
      converters: {
        "* text": e.String,
        "text html": !0,
        "text json": le.parseJSON,
        "text xml": le.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(e, t) {
      return t ? F(F(e, le.ajaxSettings), t) : F(le.ajaxSettings, e)
    },
    ajaxPrefilter: H(Ot),
    ajaxTransport: H(qt),
    ajax: function(e, i) {
      function n(e, i, n, o) {
        var s, u, y, b, x, E = i;
        2 !== C && (C = 2, l && clearTimeout(l), d = t, r = o || "", w.readyState = e > 0 ? 4 : 0, n && (b = B(h, w, n)), e >= 200 && 300 > e || 304 === e ? (h.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (le.lastModified[a] = x), (x = w.getResponseHeader("etag")) && (le.etag[a] = x)), 204 === e ? (s = !0, E = "nocontent") : 304 === e ? (s = !0, E = "notmodified") : (s = P(h, b), E = s.state, u = s.data, y = s.error, s = !y)) : (y = E, (e || !E) && (E = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (i || E) + "", s ? m.resolveWith(f, [u, E, w]) : m.rejectWith(f, [w, E, y]), w.statusCode(v), v = t, c && p.trigger(s ? "ajaxSuccess" : "ajaxError", [w, h, s ? u : y]), g.fireWith(f, [w, E]), c && (p.trigger("ajaxComplete", [w, h]), --le.active || le.event.trigger("ajaxStop")))
      }
      "object" == typeof e && (i = e, e = t), i = i || {};
      var o, s, a, r, l, c, d, u, h = le.ajaxSetup({}, i),
        f = h.context || h,
        p = h.context && (f.nodeType || f.jquery) ? le(f) : le.event,
        m = le.Deferred(),
        g = le.Callbacks("once memory"),
        v = h.statusCode || {},
        y = {},
        b = {},
        C = 0,
        x = "canceled",
        w = {
          readyState: 0,
          getResponseHeader: function(e) {
            var t;
            if (2 === C) {
              if (!u)
                for (u = {}; t = At.exec(r);) u[t[1].toLowerCase()] = t[2];
              t = u[e.toLowerCase()]
            }
            return null == t ? null : t
          },
          getAllResponseHeaders: function() {
            return 2 === C ? r : null
          },
          setRequestHeader: function(e, t) {
            var i = e.toLowerCase();
            return C || (e = b[i] = b[i] || e, y[e] = t), this
          },
          overrideMimeType: function(e) {
            return C || (h.mimeType = e), this
          },
          statusCode: function(e) {
            var t;
            if (e)
              if (2 > C)
                for (t in e) v[t] = [v[t], e[t]];
              else w.always(e[w.status]);
            return this
          },
          abort: function(e) {
            var t = e || x;
            return d && d.abort(t), n(0, t), this
          }
        };
      if (m.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, h.url = ((e || h.url || Mt) + "").replace(Pt, "").replace(Rt, Ht[1] + "//"), h.type = i.method || i.type || h.method || h.type, h.dataTypes = le.trim(h.dataType || "*").toLowerCase().match(de) || [""], null == h.crossDomain && (o = $t.exec(h.url.toLowerCase()), h.crossDomain = !(!o || o[1] === Ht[1] && o[2] === Ht[2] && (o[3] || ("http:" === o[1] ? 80 : 443)) == (Ht[3] || ("http:" === Ht[1] ? 80 : 443)))), h.data && h.processData && "string" != typeof h.data && (h.data = le.param(h.data, h.traditional)), M(Ot, h, i, w), 2 === C) return w;
      c = h.global, c && 0 == le.active++ && le.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !jt.test(h.type), a = h.url, h.hasContent || (h.data && (a = h.url += (Bt.test(a) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (h.url = Lt.test(a) ? a.replace(Lt, "$1_=" + Ft++) : a + (Bt.test(a) ? "&" : "?") + "_=" + Ft++)), h.ifModified && (le.lastModified[a] && w.setRequestHeader("If-Modified-Since", le.lastModified[a]), le.etag[a] && w.setRequestHeader("If-None-Match", le.etag[a])), (h.data && h.hasContent && !1 !== h.contentType || i.contentType) && w.setRequestHeader("Content-Type", h.contentType), w.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Gt + "; q=0.01" : "") : h.accepts["*"]);
      for (s in h.headers) w.setRequestHeader(s, h.headers[s]);
      if (h.beforeSend && (!1 === h.beforeSend.call(f, w, h) || 2 === C)) return w.abort();
      x = "abort";
      for (s in {
          success: 1,
          error: 1,
          complete: 1
        }) w[s](h[s]);
      if (d = M(qt, h, i, w)) {
        w.readyState = 1, c && p.trigger("ajaxSend", [w, h]), h.async && h.timeout > 0 && (l = setTimeout(function() {
          w.abort("timeout")
        }, h.timeout));
        try {
          C = 1, d.send(y, n)
        } catch (e) {
          if (!(2 > C)) throw e;
          n(-1, e)
        }
      } else n(-1, "No Transport");
      return w
    },
    getScript: function(e, i) {
      return le.get(e, t, i, "script")
    },
    getJSON: function(e, t, i) {
      return le.get(e, t, i, "json")
    }
  }), le.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      "text script": function(e) {
        return le.globalEval(e), e
      }
    }
  }), le.ajaxPrefilter("script", function(e) {
    e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
  }), le.ajaxTransport("script", function(e) {
    if (e.crossDomain) {
      var i, n = Y.head || le("head")[0] || Y.documentElement;
      return {
        send: function(t, o) {
          i = Y.createElement("script"), i.async = !0, e.scriptCharset && (i.charset = e.scriptCharset), i.src = e.url, i.onload = i.onreadystatechange = function(e, t) {
            (t || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), i = null, t || o(200, "success"))
          }, n.insertBefore(i, n.firstChild)
        },
        abort: function() {
          i && i.onload(t, !0)
        }
      }
    }
  });
  var zt = [],
    Ut = /(=)\?(?=&|$)|\?\?/;
  le.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var e = zt.pop() || le.expando + "_" + Ft++;
      return this[e] = !0, e
    }
  }), le.ajaxPrefilter("json jsonp", function(i, n, o) {
    var s, a, r, l = !1 !== i.jsonp && (Ut.test(i.url) ? "url" : "string" == typeof i.data && !(i.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(i.data) && "data");
    return l || "jsonp" === i.dataTypes[0] ? (s = i.jsonpCallback = le.isFunction(i.jsonpCallback) ? i.jsonpCallback() : i.jsonpCallback, l ? i[l] = i[l].replace(Ut, "$1" + s) : !1 !== i.jsonp && (i.url += (Bt.test(i.url) ? "&" : "?") + i.jsonp + "=" + s), i.converters["script json"] = function() {
      return r || le.error(s + " was not called"), r[0]
    }, i.dataTypes[0] = "json", a = e[s], e[s] = function() {
      r = arguments
    }, o.always(function() {
      e[s] = a, i[s] && (i.jsonpCallback = n.jsonpCallback, zt.push(s)), r && le.isFunction(a) && a(r[0]), r = a = t
    }), "script") : t
  });
  var Xt, Yt, Vt = 0,
    Jt = e.ActiveXObject && function() {
      var e;
      for (e in Xt) Xt[e](t, !0)
    };
  le.ajaxSettings.xhr = e.ActiveXObject ? function() {
    return !this.isLocal && L() || A()
  } : L, Yt = le.ajaxSettings.xhr(), le.support.cors = !!Yt && "withCredentials" in Yt, (Yt = le.support.ajax = !!Yt) && le.ajaxTransport(function(i) {
    if (!i.crossDomain || le.support.cors) {
      var n;
      return {
        send: function(o, s) {
          var a, r, l = i.xhr();
          if (i.username ? l.open(i.type, i.url, i.async, i.username, i.password) : l.open(i.type, i.url, i.async), i.xhrFields)
            for (r in i.xhrFields) l[r] = i.xhrFields[r];
          i.mimeType && l.overrideMimeType && l.overrideMimeType(i.mimeType), i.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
          try {
            for (r in o) l.setRequestHeader(r, o[r])
          } catch (e) {}
          l.send(i.hasContent && i.data || null), n = function(e, o) {
            var r, c, d, u;
            try {
              if (n && (o || 4 === l.readyState))
                if (n = t, a && (l.onreadystatechange = le.noop, Jt && delete Xt[a]), o) 4 !== l.readyState && l.abort();
                else {
                  u = {}, r = l.status, c = l.getAllResponseHeaders(), "string" == typeof l.responseText && (u.text = l.responseText);
                  try {
                    d = l.statusText
                  } catch (e) {
                    d = ""
                  }
                  r || !i.isLocal || i.crossDomain ? 1223 === r && (r = 204) : r = u.text ? 200 : 404
                }
            } catch (e) {
              o || s(-1, e)
            }
            u && s(r, d, u, c)
          }, i.async ? 4 === l.readyState ? setTimeout(n) : (a = ++Vt, Jt && (Xt || (Xt = {}, le(e).unload(Jt)), Xt[a] = n), l.onreadystatechange = n) : n()
        },
        abort: function() {
          n && n(t, !0)
        }
      }
    }
  });
  var Kt, Zt, Qt = /^(?:toggle|show|hide)$/,
    ei = RegExp("^(?:([+-])=|)(" + ce + ")([a-z%]*)$", "i"),
    ti = /queueHooks$/,
    ii = [W],
    ni = {
      "*": [function(e, t) {
        var i, n, o = this.createTween(e, t),
          s = ei.exec(t),
          a = o.cur(),
          r = +a || 0,
          l = 1,
          c = 20;
        if (s) {
          if (i = +s[2], "px" !== (n = s[3] || (le.cssNumber[e] ? "" : "px")) && r) {
            r = le.css(o.elem, e, !0) || i || 1;
            do {
              l = l || ".5", r /= l, le.style(o.elem, e, r + n)
            } while (l !== (l = o.cur() / a) && 1 !== l && --c)
          }
          o.unit = n, o.start = r, o.end = s[1] ? r + (s[1] + 1) * i : i
        }
        return o
      }]
    };
  le.Animation = le.extend(R, {
      tweener: function(e, t) {
        le.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
        for (var i, n = 0, o = e.length; o > n; n++) i = e[n], ni[i] = ni[i] || [], ni[i].unshift(t)
      },
      prefilter: function(e, t) {
        t ? ii.unshift(e) : ii.push(e)
      }
    }), le.Tween = O, O.prototype = {
      constructor: O,
      init: function(e, t, i, n, o, s) {
        this.elem = e, this.prop = i, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = s || (le.cssNumber[i] ? "" : "px")
      },
      cur: function() {
        var e = O.propHooks[this.prop];
        return e && e.get ? e.get(this) : O.propHooks._default.get(this)
      },
      run: function(e) {
        var t, i = O.propHooks[this.prop];
        return this.pos = t = this.options.duration ? le.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : O.propHooks._default.set(this), this
      }
    },
    O.prototype.init.prototype = O.prototype, O.propHooks = {
      _default: {
        get: function(e) {
          var t;
          return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = le.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
        },
        set: function(e) {
          le.fx.step[e.prop] ? le.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[le.cssProps[e.prop]] || le.cssHooks[e.prop]) ? le.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
        }
      }
    }, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
      set: function(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
    }, le.each(["toggle", "show", "hide"], function(e, t) {
      var i = le.fn[t];
      le.fn[t] = function(e, n, o) {
        return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(q(t, !0), e, n, o)
      }
    }), le.fn.extend({
      fadeTo: function(e, t, i, n) {
        return this.filter(w).css("opacity", 0).show().end().animate({
          opacity: t
        }, e, i, n)
      },
      animate: function(e, t, i, n) {
        var o = le.isEmptyObject(e),
          s = le.speed(t, i, n),
          a = function() {
            var t = R(this, le.extend({}, e), s);
            a.finish = function() {
              t.stop(!0)
            }, (o || le._data(this, "finish")) && t.stop(!0)
          };
        return a.finish = a, o || !1 === s.queue ? this.each(a) : this.queue(s.queue, a)
      },
      stop: function(e, i, n) {
        var o = function(e) {
          var t = e.stop;
          delete e.stop, t(n)
        };
        return "string" != typeof e && (n = i, i = e, e = t), i && !1 !== e && this.queue(e || "fx", []), this.each(function() {
          var t = !0,
            i = null != e && e + "queueHooks",
            s = le.timers,
            a = le._data(this);
          if (i) a[i] && a[i].stop && o(a[i]);
          else
            for (i in a) a[i] && a[i].stop && ti.test(i) && o(a[i]);
          for (i = s.length; i--;) s[i].elem !== this || null != e && s[i].queue !== e || (s[i].anim.stop(n), t = !1, s.splice(i, 1));
          (t || !n) && le.dequeue(this, e)
        })
      },
      finish: function(e) {
        return !1 !== e && (e = e || "fx"), this.each(function() {
          var t, i = le._data(this),
            n = i[e + "queue"],
            o = i[e + "queueHooks"],
            s = le.timers,
            a = n ? n.length : 0;
          for (i.finish = !0, le.queue(this, e, []), o && o.cur && o.cur.finish && o.cur.finish.call(this), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
          for (t = 0; a > t; t++) n[t] && n[t].finish && n[t].finish.call(this);
          delete i.finish
        })
      }
    }), le.each({
      slideDown: q("show"),
      slideUp: q("hide"),
      slideToggle: q("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function(e, t) {
      le.fn[e] = function(e, i, n) {
        return this.animate(t, e, i, n)
      }
    }), le.speed = function(e, t, i) {
      var n = e && "object" == typeof e ? le.extend({}, e) : {
        complete: i || !i && t || le.isFunction(e) && e,
        duration: e,
        easing: i && t || t && !le.isFunction(t) && t
      };
      return n.duration = le.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in le.fx.speeds ? le.fx.speeds[n.duration] : le.fx.speeds._default, (null == n.queue || !0 === n.queue) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
        le.isFunction(n.old) && n.old.call(this), n.queue && le.dequeue(this, n.queue)
      }, n
    }, le.easing = {
      linear: function(e) {
        return e
      },
      swing: function(e) {
        return .5 - Math.cos(e * Math.PI) / 2
      }
    }, le.timers = [], le.fx = O.prototype.init, le.fx.tick = function() {
      var e, i = le.timers,
        n = 0;
      for (Kt = le.now(); i.length > n; n++)(e = i[n])() || i[n] !== e || i.splice(n--, 1);
      i.length || le.fx.stop(), Kt = t
    }, le.fx.timer = function(e) {
      e() && le.timers.push(e) && le.fx.start()
    }, le.fx.interval = 13, le.fx.start = function() {
      Zt || (Zt = setInterval(le.fx.tick, le.fx.interval))
    }, le.fx.stop = function() {
      clearInterval(Zt), Zt = null
    }, le.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, le.fx.step = {}, le.expr && le.expr.filters && (le.expr.filters.animated = function(e) {
      return le.grep(le.timers, function(t) {
        return e === t.elem
      }).length
    }), le.fn.offset = function(e) {
      if (arguments.length) return e === t ? this : this.each(function(t) {
        le.offset.setOffset(this, e, t)
      });
      var i, n, o = {
          top: 0,
          left: 0
        },
        s = this[0],
        a = s && s.ownerDocument;
      return a ? (i = a.documentElement, le.contains(i, s) ? (typeof s.getBoundingClientRect !== X && (o = s.getBoundingClientRect()), n = G(a), {
        top: o.top + (n.pageYOffset || i.scrollTop) - (i.clientTop || 0),
        left: o.left + (n.pageXOffset || i.scrollLeft) - (i.clientLeft || 0)
      }) : o) : void 0
    }, le.offset = {
      setOffset: function(e, t, i) {
        var n = le.css(e, "position");
        "static" === n && (e.style.position = "relative");
        var o, s, a = le(e),
          r = a.offset(),
          l = le.css(e, "top"),
          c = le.css(e, "left"),
          d = ("absolute" === n || "fixed" === n) && le.inArray("auto", [l, c]) > -1,
          u = {},
          h = {};
        d ? (h = a.position(), o = h.top, s = h.left) : (o = parseFloat(l) || 0, s = parseFloat(c) || 0), le.isFunction(t) && (t = t.call(e, i, r)), null != t.top && (u.top = t.top - r.top + o), null != t.left && (u.left = t.left - r.left + s), "using" in t ? t.using.call(e, u) : a.css(u)
      }
    }, le.fn.extend({
      position: function() {
        if (this[0]) {
          var e, t, i = {
              top: 0,
              left: 0
            },
            n = this[0];
          return "fixed" === le.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), le.nodeName(e[0], "html") || (i = e.offset()), i.top += le.css(e[0], "borderTopWidth", !0), i.left += le.css(e[0], "borderLeftWidth", !0)), {
            top: t.top - i.top - le.css(n, "marginTop", !0),
            left: t.left - i.left - le.css(n, "marginLeft", !0)
          }
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (var e = this.offsetParent || Y.documentElement; e && !le.nodeName(e, "html") && "static" === le.css(e, "position");) e = e.offsetParent;
          return e || Y.documentElement
        })
      }
    }), le.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function(e, i) {
      var n = /Y/.test(i);
      le.fn[e] = function(o) {
        return le.access(this, function(e, o, s) {
          var a = G(e);
          return s === t ? a ? i in a ? a[i] : a.document.documentElement[o] : e[o] : (a ? a.scrollTo(n ? le(a).scrollLeft() : s, n ? s : le(a).scrollTop()) : e[o] = s, t)
        }, e, o, arguments.length, null)
      }
    }), le.each({
      Height: "height",
      Width: "width"
    }, function(e, i) {
      le.each({
        padding: "inner" + e,
        content: i,
        "": "outer" + e
      }, function(n, o) {
        le.fn[o] = function(o, s) {
          var a = arguments.length && (n || "boolean" != typeof o),
            r = n || (!0 === o || !0 === s ? "margin" : "border");
          return le.access(this, function(i, n, o) {
            var s;
            return le.isWindow(i) ? i.document.documentElement["client" + e] : 9 === i.nodeType ? (s = i.documentElement, Math.max(i.body["scroll" + e], s["scroll" + e], i.body["offset" + e], s["offset" + e], s["client" + e])) : o === t ? le.css(i, n, r) : le.style(i, n, o, r)
          }, i, a ? o : t, a, null)
        }
      })
    }), e.jQuery = e.$ = le, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
      return le
    })
}(window),
function e(t, i, n) {
  function o(a, r) {
    if (!i[a]) {
      if (!t[a]) {
        var l = "function" == typeof require && require;
        if (!r && l) return l(a, !0);
        if (s) return s(a, !0);
        var c = new Error("Cannot find module '" + a + "'");
        throw c.code = "MODULE_NOT_FOUND", c
      }
      var d = i[a] = {
        exports: {}
      };
      t[a][0].call(d.exports, function(e) {
        return o(t[a][1][e] || e)
      }, d, d.exports, e, t, i, n)
    }
    return i[a].exports
  }
  for (var s = "function" == typeof require && require, a = 0; a < n.length; a++) o(n[a]);
  return o
}({
  1: [function(e, t, i) {}, {}],
  2: [function(e, t, i) {
    (function(i) {
      var n, o = void 0 !== i ? i : "undefined" != typeof window ? window : {},
        s = e(1);
      "undefined" != typeof document ? n = document : (n = o["__GLOBAL_DOCUMENT_CACHE@4"]) || (n = o["__GLOBAL_DOCUMENT_CACHE@4"] = s), t.exports = n
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
  }, {
    1: 1
  }],
  3: [function(e, t, i) {
    (function(e) {
      var i;
      i = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, t.exports = i
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
  }, {}],
  4: [function(e, t, i) {
    ! function(e) {
      function i() {}

      function n(e, t) {
        return function() {
          e.apply(t, arguments)
        }
      }

      function o(e) {
        if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], d(e, this)
      }

      function s(e, t) {
        for (; 3 === e._state;) e = e._value;
        0 !== e._state ? (e._handled = !0, o._immediateFn(function() {
          var i = 1 === e._state ? t.onFulfilled : t.onRejected;
          if (null !== i) {
            var n;
            try {
              n = i(e._value)
            } catch (e) {
              return void r(t.promise, e)
            }
            a(t.promise, n)
          } else(1 === e._state ? a : r)(t.promise, e._value)
        })) : e._deferreds.push(t)
      }

      function a(e, t) {
        try {
          if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
          if (t && ("object" == typeof t || "function" == typeof t)) {
            var i = t.then;
            if (t instanceof o) return e._state = 3, e._value = t, void l(e);
            if ("function" == typeof i) return void d(n(i, t), e)
          }
          e._state = 1, e._value = t, l(e)
        } catch (t) {
          r(e, t)
        }
      }

      function r(e, t) {
        e._state = 2, e._value = t, l(e)
      }

      function l(e) {
        2 === e._state && 0 === e._deferreds.length && o._immediateFn(function() {
          e._handled || o._unhandledRejectionFn(e._value)
        });
        for (var t = 0, i = e._deferreds.length; t < i; t++) s(e, e._deferreds[t]);
        e._deferreds = null
      }

      function c(e, t, i) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = i
      }

      function d(e, t) {
        var i = !1;
        try {
          e(function(e) {
            i || (i = !0, a(t, e))
          }, function(e) {
            i || (i = !0, r(t, e))
          })
        } catch (e) {
          if (i) return;
          i = !0, r(t, e)
        }
      }
      var u = setTimeout;
      o.prototype.catch = function(e) {
        return this.then(null, e)
      }, o.prototype.then = function(e, t) {
        var n = new this.constructor(i);
        return s(this, new c(e, t, n)), n
      }, o.all = function(e) {
        var t = Array.prototype.slice.call(e);
        return new o(function(e, i) {
          function n(s, a) {
            try {
              if (a && ("object" == typeof a || "function" == typeof a)) {
                var r = a.then;
                if ("function" == typeof r) return void r.call(a, function(e) {
                  n(s, e)
                }, i)
              }
              t[s] = a, 0 == --o && e(t)
            } catch (e) {
              i(e)
            }
          }
          if (0 === t.length) return e([]);
          for (var o = t.length, s = 0; s < t.length; s++) n(s, t[s])
        })
      }, o.resolve = function(e) {
        return e && "object" == typeof e && e.constructor === o ? e : new o(function(t) {
          t(e)
        })
      }, o.reject = function(e) {
        return new o(function(t, i) {
          i(e)
        })
      }, o.race = function(e) {
        return new o(function(t, i) {
          for (var n = 0, o = e.length; n < o; n++) e[n].then(t, i)
        })
      }, o._immediateFn = "function" == typeof setImmediate && function(e) {
        setImmediate(e)
      } || function(e) {
        u(e, 0)
      }, o._unhandledRejectionFn = function(e) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
      }, o._setImmediateFn = function(e) {
        o._immediateFn = e
      }, o._setUnhandledRejectionFn = function(e) {
        o._unhandledRejectionFn = e
      }, void 0 !== t && t.exports ? t.exports = o : e.Promise || (e.Promise = o)
    }(this)
  }, {}],
  5: [function(e, t, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      o = function(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(e(7)),
      s = e(15),
      a = e(27),
      r = {
        lang: "en",
        en: s.EN
      };
    r.language = function() {
      for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
      if (null !== t && void 0 !== t && t.length) {
        if ("string" != typeof t[0]) throw new TypeError("Language code must be a string value");
        if (!/^[a-z]{2}(\-[a-z]{2})?$/i.test(t[0])) throw new TypeError("Language code must have format `xx` or `xx-xx`");
        r.lang = t[0], void 0 === r[t[0]] ? (t[1] = null !== t[1] && void 0 !== t[1] && "object" === n(t[1]) ? t[1] : {}, r[t[0]] = (0, a.isObjectEmpty)(t[1]) ? s.EN : t[1]) : null !== t[1] && void 0 !== t[1] && "object" === n(t[1]) && (r[t[0]] = t[1])
      }
      return r.lang
    }, r.t = function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if ("string" == typeof e && e.length) {
        var i = void 0,
          o = void 0,
          s = r.language(),
          l = function(e, t, i) {
            return "object" !== (void 0 === e ? "undefined" : n(e)) || "number" != typeof t || "number" != typeof i ? e : [function() {
              return arguments.length <= 1 ? void 0 : arguments[1]
            }, function() {
              return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2]
            }, function() {
              return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) || 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2]
            }, function() {
              return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 != 11 ? arguments.length <= 1 ? void 0 : arguments[1] : 0 !== (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
            }, function() {
              return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) || 11 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) || 12 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : (arguments.length <= 0 ? void 0 : arguments[0]) > 2 && (arguments.length <= 0 ? void 0 : arguments[0]) < 20 ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4]
            }, function() {
              return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 0 === (arguments.length <= 0 ? void 0 : arguments[0]) || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 > 0 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 20 ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
            }, function() {
              return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 != 11 ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) % 10 >= 2 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 20) ? arguments.length <= 2 ? void 0 : arguments[2] : [3]
            }, function() {
              return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 != 11 ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) % 10 >= 2 && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 <= 4 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 20) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
            }, function() {
              return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) >= 2 && (arguments.length <= 0 ? void 0 : arguments[0]) <= 4 ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
            }, function() {
              return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) % 10 >= 2 && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 <= 4 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 20) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
            }, function() {
              return (arguments.length <= 0 ? void 0 : arguments[0]) % 100 == 1 ? arguments.length <= 2 ? void 0 : arguments[2] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 == 2 ? arguments.length <= 3 ? void 0 : arguments[3] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 == 3 || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 == 4 ? arguments.length <= 4 ? void 0 : arguments[4] : arguments.length <= 1 ? void 0 : arguments[1]
            }, function() {
              return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : (arguments.length <= 0 ? void 0 : arguments[0]) > 2 && (arguments.length <= 0 ? void 0 : arguments[0]) < 7 ? arguments.length <= 3 ? void 0 : arguments[3] : (arguments.length <= 0 ? void 0 : arguments[0]) > 6 && (arguments.length <= 0 ? void 0 : arguments[0]) < 11 ? arguments.length <= 4 ? void 0 : arguments[4] : arguments.length <= 5 ? void 0 : arguments[5]
            }, function() {
              return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 3 ? void 0 : arguments[3] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 3 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 <= 10 ? arguments.length <= 4 ? void 0 : arguments[4] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 11 ? arguments.length <= 5 ? void 0 : arguments[5] : arguments.length <= 6 ? void 0 : arguments[6]
            }, function() {
              return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 0 === (arguments.length <= 0 ? void 0 : arguments[0]) || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 > 1 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 11 ? arguments.length <= 2 ? void 0 : arguments[2] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 > 10 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 20 ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4]
            }, function() {
              return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 2 ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
            }, function() {
              return 11 !== (arguments.length <= 0 ? void 0 : arguments[0]) && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2]
            }, function() {
              return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) % 10 >= 2 && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 <= 4 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 20) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
            }, function() {
              return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : 8 !== (arguments.length <= 0 ? void 0 : arguments[0]) && 11 !== (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4]
            }, function() {
              return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2]
            }, function() {
              return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : 3 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4]
            }, function() {
              return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
            }][i].apply(null, [t].concat(e))
          };
        return void 0 !== r[s] && (i = r[s][e], null !== t && "number" == typeof t && (o = r[s]["mejs.plural-form"], i = l.apply(null, [i, t, o]))), !i && r.en && (i = r.en[e], null !== t && "number" == typeof t && (o = r.en["mejs.plural-form"], i = l.apply(null, [i, t, o]))), i = i || e, null !== t && "number" == typeof t && (i = i.replace("%1", t)), (0, a.escapeHTML)(i)
      }
      return e
    }, o.default.i18n = r, "undefined" != typeof mejsL10n && o.default.i18n.language(mejsL10n.language, mejsL10n.strings), i.default = r
  }, {
    15: 15,
    27: 27,
    7: 7
  }],
  6: [function(e, t, i) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      a = n(e(3)),
      r = n(e(2)),
      l = n(e(7)),
      c = e(27),
      d = e(28),
      u = e(8),
      h = e(25),
      f = function e(t, i, n) {
        var f = this;
        o(this, e);
        var p = this;
        n = Array.isArray(n) ? n : null, p.defaults = {
          renderers: [],
          fakeNodeName: "mediaelementwrapper",
          pluginPath: "build/",
          shimScriptAccess: "sameDomain"
        }, i = Object.assign(p.defaults, i), p.mediaElement = r.default.createElement(i.fakeNodeName);
        var m = t,
          g = !1;
        if ("string" == typeof t ? p.mediaElement.originalNode = r.default.getElementById(t) : (p.mediaElement.originalNode = t, m = t.id), void 0 === p.mediaElement.originalNode || null === p.mediaElement.originalNode) return null;
        p.mediaElement.options = i, m = m || "mejs_" + Math.random().toString().slice(2), p.mediaElement.originalNode.setAttribute("id", m + "_from_mejs"), ["video", "audio"].indexOf(p.mediaElement.originalNode.tagName.toLowerCase()) > -1 && !p.mediaElement.originalNode.getAttribute("preload") && p.mediaElement.originalNode.setAttribute("preload", "none"), p.mediaElement.originalNode.parentNode.insertBefore(p.mediaElement, p.mediaElement.originalNode), p.mediaElement.appendChild(p.mediaElement.originalNode);
        var v = function(e, t) {
            if ("https:" === a.default.location.protocol && 0 === e.indexOf("http:") && h.IS_IOS && l.default.html5media.mediaTypes.indexOf(t) > -1) {
              var i = new XMLHttpRequest;
              i.onreadystatechange = function() {
                if (4 === this.readyState && 200 === this.status) {
                  var t = (a.default.URL || a.default.webkitURL).createObjectURL(this.response);
                  return p.mediaElement.originalNode.setAttribute("src", t), t
                }
                return e
              }, i.open("GET", e), i.responseType = "blob", i.send()
            }
            return e
          },
          y = void 0;
        if (null !== n) y = n;
        else if (null !== p.mediaElement.originalNode) switch (y = [], p.mediaElement.originalNode.nodeName.toLowerCase()) {
          case "iframe":
            y.push({
              type: "",
              src: p.mediaElement.originalNode.getAttribute("src")
            });
            break;
          case "audio":
          case "video":
            var b = p.mediaElement.originalNode.children.length,
              C = p.mediaElement.originalNode.getAttribute("src");
            if (C) {
              var x = p.mediaElement.originalNode,
                w = (0, d.formatType)(C, x.getAttribute("type"));
              y.push({
                type: w,
                src: v(C, w)
              })
            }
            for (var E = 0; E < b; E++) {
              var S = p.mediaElement.originalNode.children[E];
              if ("source" === S.tagName.toLowerCase()) {
                var _ = S.getAttribute("src"),
                  T = (0, d.formatType)(_, S.getAttribute("type"));
                y.push({
                  type: T,
                  src: v(_, T)
                })
              }
            }
        }
        p.mediaElement.id = m, p.mediaElement.renderers = {}, p.mediaElement.events = {}, p.mediaElement.promises = [], p.mediaElement.renderer = null, p.mediaElement.rendererName = null, p.mediaElement.changeRenderer = function(e, t) {
          var i = f,
            n = Object.keys(t[0]).length > 2 ? t[0] : t[0].src;
          if (void 0 !== i.mediaElement.renderer && null !== i.mediaElement.renderer && i.mediaElement.renderer.name === e) return i.mediaElement.renderer.pause(), i.mediaElement.renderer.stop && i.mediaElement.renderer.stop(), i.mediaElement.renderer.show(), i.mediaElement.renderer.setSrc(n), !0;
          void 0 !== i.mediaElement.renderer && null !== i.mediaElement.renderer && (i.mediaElement.renderer.pause(), i.mediaElement.renderer.stop && i.mediaElement.renderer.stop(), i.mediaElement.renderer.hide());
          var o = i.mediaElement.renderers[e],
            s = null;
          if (void 0 !== o && null !== o) return o.show(), o.setSrc(n), i.mediaElement.renderer = o, i.mediaElement.rendererName = e, !0;
          for (var a = i.mediaElement.options.renderers.length ? i.mediaElement.options.renderers : u.renderer.order, r = 0, l = a.length; r < l; r++) {
            var c = a[r];
            if (c === e) {
              s = u.renderer.renderers[c];
              var d = Object.assign(s.options, i.mediaElement.options);
              return o = s.create(i.mediaElement, d, t), o.name = e, i.mediaElement.renderers[s.name] = o, i.mediaElement.renderer = o, i.mediaElement.rendererName = e, o.show(), !0
            }
          }
          return !1
        }, p.mediaElement.setSize = function(e, t) {
          void 0 !== p.mediaElement.renderer && null !== p.mediaElement.renderer && p.mediaElement.renderer.setSize(e, t)
        }, p.mediaElement.generateError = function(e, t) {
          e = e || "", t = Array.isArray(t) ? t : [];
          var i = (0, c.createEvent)("error", p.mediaElement);
          i.message = e, i.urls = t, p.mediaElement.dispatchEvent(i), g = !0
        };
        var k = l.default.html5media.properties,
          D = l.default.html5media.methods,
          I = function(e, t, i, n) {
            var o = e[t];
            Object.defineProperty(e, t, {
              get: function() {
                return i.apply(e, [o])
              },
              set: function(t) {
                return o = n.apply(e, [t])
              }
            })
          },
          H = function() {
            return void 0 !== p.mediaElement.renderer && null !== p.mediaElement.renderer ? p.mediaElement.renderer.getSrc() : null
          },
          M = function(e) {
            var t = [];
            if ("string" == typeof e) t.push({
              src: e,
              type: e ? (0, d.getTypeFromFile)(e) : ""
            });
            else if ("object" === (void 0 === e ? "undefined" : s(e)) && void 0 !== e.src) {
              var i = (0, d.absolutizeUrl)(e.src),
                n = e.type,
                o = Object.assign(e, {
                  src: i,
                  type: "" !== n && null !== n && void 0 !== n || !i ? n : (0, d.getTypeFromFile)(i)
                });
              t.push(o)
            } else if (Array.isArray(e))
              for (var a = 0, r = e.length; a < r; a++) {
                var l = (0, d.absolutizeUrl)(e[a].src),
                  h = e[a].type,
                  f = Object.assign(e[a], {
                    src: l,
                    type: "" !== h && null !== h && void 0 !== h || !l ? h : (0, d.getTypeFromFile)(l)
                  });
                t.push(f)
              }
            var m = u.renderer.select(t, p.mediaElement.options.renderers.length ? p.mediaElement.options.renderers : []),
              g = void 0;
            if (p.mediaElement.paused || (p.mediaElement.pause(), g = (0, c.createEvent)("pause", p.mediaElement), p.mediaElement.dispatchEvent(g)), p.mediaElement.originalNode.src = t[0].src || "", null !== m || !t[0].src) return t[0].src ? p.mediaElement.changeRenderer(m.rendererName, t) : null;
            p.mediaElement.generateError("No renderer found", t)
          },
          F = function(e, t) {
            try {
              var i = p.mediaElement.renderer[e](t);
              i && "function" == typeof i.then && i.catch(function(t) {
                if ("play" !== e) return p.mediaElement.generateError(t, y);
                p.mediaElement.paused && setTimeout(function() {
                  var e = p.mediaElement.renderer.play();
                  void 0 !== e && e.catch(function() {
                    p.mediaElement.renderer.paused || p.mediaElement.renderer.pause()
                  })
                }, 150)
              })
            } catch (e) {
              p.mediaElement.generateError(e, y)
            }
          };
        I(p.mediaElement, "src", H, M), p.mediaElement.getSrc = H, p.mediaElement.setSrc = M;
        for (var B = 0, P = k.length; B < P; B++) ! function(e) {
          if ("src" !== e) {
            var t = "" + e.substring(0, 1).toUpperCase() + e.substring(1),
              i = function() {
                return void 0 !== p.mediaElement.renderer && null !== p.mediaElement.renderer && "function" == typeof p.mediaElement.renderer["get" + t] ? p.mediaElement.renderer["get" + t]() : null
              },
              n = function(e) {
                void 0 !== p.mediaElement.renderer && null !== p.mediaElement.renderer && "function" == typeof p.mediaElement.renderer["set" + t] && p.mediaElement.renderer["set" + t](e)
              };
            I(p.mediaElement, e, i, n), p.mediaElement["get" + t] = i, p.mediaElement["set" + t] = n
          }
        }(k[B]);
        for (var L = 0, A = D.length; L < A; L++) ! function(e) {
          p.mediaElement[e] = function() {
            for (var t = arguments.length, i = Array(t), n = 0; n < t; n++) i[n] = arguments[n];
            return void 0 !== p.mediaElement.renderer && null !== p.mediaElement.renderer && "function" == typeof p.mediaElement.renderer[e] && (p.mediaElement.promises.length ? Promise.all(p.mediaElement.promises).then(function() {
              F(e, i)
            }).catch(function(e) {
              p.mediaElement.generateError(e, y)
            }) : F(e, i)), null
          }
        }(D[L]);
        return p.mediaElement.addEventListener = function(e, t) {
          p.mediaElement.events[e] = p.mediaElement.events[e] || [], p.mediaElement.events[e].push(t)
        }, p.mediaElement.removeEventListener = function(e, t) {
          if (!e) return p.mediaElement.events = {}, !0;
          var i = p.mediaElement.events[e];
          if (!i) return !0;
          if (!t) return p.mediaElement.events[e] = [], !0;
          for (var n = 0; n < i.length; n++)
            if (i[n] === t) return p.mediaElement.events[e].splice(n, 1), !0;
          return !1
        }, p.mediaElement.dispatchEvent = function(e) {
          var t = p.mediaElement.events[e.type];
          if (t)
            for (var i = 0; i < t.length; i++) t[i].apply(null, [e])
        }, y.length && (p.mediaElement.src = y), p.mediaElement.promises.length ? Promise.all(p.mediaElement.promises).then(function() {
          p.mediaElement.options.success && p.mediaElement.options.success(p.mediaElement, p.mediaElement.originalNode)
        }).catch(function() {
          g && p.mediaElement.options.error && p.mediaElement.options.error(p.mediaElement, p.mediaElement.originalNode)
        }) : (p.mediaElement.options.success && p.mediaElement.options.success(p.mediaElement, p.mediaElement.originalNode), g && p.mediaElement.options.error && p.mediaElement.options.error(p.mediaElement, p.mediaElement.originalNode)), p.mediaElement
      };
    a.default.MediaElement = f, i.default = f
  }, {
    2: 2,
    25: 25,
    27: 27,
    28: 28,
    3: 3,
    7: 7,
    8: 8
  }],
  7: [function(e, t, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    var n = function(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(e(3)),
      o = {};
    o.version = "4.2.3", o.html5media = {
      properties: ["volume", "src", "currentTime", "muted", "duration", "paused", "ended", "buffered", "error", "networkState", "readyState", "seeking", "seekable", "currentSrc", "preload", "bufferedBytes", "bufferedTime", "initialTime", "startOffsetTime", "defaultPlaybackRate", "playbackRate", "played", "autoplay", "loop", "controls"],
      readOnlyProperties: ["duration", "paused", "ended", "buffered", "error", "networkState", "readyState", "seeking", "seekable"],
      methods: ["load", "play", "pause", "canPlayType"],
      events: ["loadstart", "durationchange", "loadedmetadata", "loadeddata", "progress", "canplay", "canplaythrough", "suspend", "abort", "error", "emptied", "stalled", "play", "playing", "pause", "waiting", "seeking", "seeked", "timeupdate", "ended", "ratechange", "volumechange"],
      mediaTypes: ["audio/mp3", "audio/ogg", "audio/oga", "audio/wav", "audio/x-wav", "audio/wave", "audio/x-pn-wav", "audio/mpeg", "audio/mp4", "video/mp4", "video/webm", "video/ogg", "video/ogv"]
    }, n.default.mejs = o, i.default = o
  }, {
    3: 3
  }],
  8: [function(e, t, i) {
    "use strict";

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.renderer = void 0;
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      s = function() {
        function e(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, i, n) {
          return i && e(t.prototype, i), n && e(t, n), t
        }
      }(),
      a = function(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(e(7)),
      r = function() {
        function e() {
          n(this, e), this.renderers = {}, this.order = []
        }
        return s(e, [{
          key: "add",
          value: function(e) {
            if (void 0 === e.name) throw new TypeError("renderer must contain at least `name` property");
            this.renderers[e.name] = e, this.order.push(e.name)
          }
        }, {
          key: "select",
          value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
              i = t.length;
            if (t = t.length ? t : this.order, !i) {
              var n = [/^(html5|native)/i, /^flash/i, /iframe$/i],
                o = function(e) {
                  for (var t = 0, i = n.length; t < i; t++)
                    if (n[t].test(e)) return t;
                  return n.length
                };
              t.sort(function(e, t) {
                return o(e) - o(t)
              })
            }
            for (var s = 0, a = t.length; s < a; s++) {
              var r = t[s],
                l = this.renderers[r];
              if (null !== l && void 0 !== l)
                for (var c = 0, d = e.length; c < d; c++)
                  if ("function" == typeof l.canPlayType && "string" == typeof e[c].type && l.canPlayType(e[c].type)) return {
                    rendererName: l.name,
                    src: e[c].src
                  }
            }
            return null
          }
        }, {
          key: "order",
          set: function(e) {
            if (!Array.isArray(e)) throw new TypeError("order must be an array of strings.");
            this._order = e
          },
          get: function() {
            return this._order
          }
        }, {
          key: "renderers",
          set: function(e) {
            if (null !== e && "object" !== (void 0 === e ? "undefined" : o(e))) throw new TypeError("renderers must be an array of objects.");
            this._renderers = e
          },
          get: function() {
            return this._renderers
          }
        }]), e
      }(),
      l = i.renderer = new r;
    a.default.Renderers = l
  }, {
    7: 7
  }],
  9: [function(e, t, i) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var o = n(e(3)),
      s = n(e(2)),
      a = n(e(5)),
      r = e(16),
      l = n(r),
      c = function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t.default = e, t
      }(e(25)),
      d = e(27),
      u = e(26),
      h = e(28);
    Object.assign(r.config, {
      usePluginFullScreen: !0,
      fullscreenText: null,
      useFakeFullscreen: !1
    }), Object.assign(l.default.prototype, {
      isFullScreen: !1,
      isNativeFullScreen: !1,
      isInIframe: !1,
      isPluginClickThroughCreated: !1,
      fullscreenMode: "",
      containerSizeTimeout: null,
      buildfullscreen: function(e) {
        if (e.isVideo) {
          e.isInIframe = o.default.location !== o.default.parent.location, e.detectFullscreenMode();
          var t = this,
            i = (0, d.isString)(t.options.fullscreenText) ? t.options.fullscreenText : a.default.t("mejs.fullscreen"),
            n = s.default.createElement("div");
          n.className = t.options.classPrefix + "button " + t.options.classPrefix + "fullscreen-button", n.innerHTML = '<button type="button" aria-controls="' + t.id + '" title="' + i + '" aria-label="' + i + '" tabindex="0"></button>', t.addControlElement(n, "fullscreen"), n.addEventListener("click", function() {
            c.HAS_TRUE_NATIVE_FULLSCREEN && c.IS_FULLSCREEN || e.isFullScreen ? e.exitFullScreen() : e.enterFullScreen()
          }), e.fullscreenBtn = n, t.exitFullscreenCallback = function(i) {
            27 === (i.which || i.keyCode || 0) && (c.HAS_TRUE_NATIVE_FULLSCREEN && c.IS_FULLSCREEN || t.isFullScreen) && e.exitFullScreen()
          }, t.globalBind("keydown", t.exitFullscreenCallback), t.normalHeight = 0, t.normalWidth = 0, c.HAS_TRUE_NATIVE_FULLSCREEN && e.globalBind(c.FULLSCREEN_EVENT_NAME, function() {
            e.isFullScreen && (c.isFullScreen() ? (e.isNativeFullScreen = !0, e.setControlsSize()) : (e.isNativeFullScreen = !1, e.exitFullScreen()))
          })
        }
      },
      cleanfullscreen: function(e) {
        e.exitFullScreen(), e.globalUnbind("keydown", e.exitFullscreenCallback)
      },
      detectFullscreenMode: function() {
        var e = this,
          t = null !== e.media.rendererName && /(native|html5)/i.test(e.media.rendererName),
          i = "";
        return c.HAS_TRUE_NATIVE_FULLSCREEN && t ? i = "native-native" : c.HAS_TRUE_NATIVE_FULLSCREEN && !t ? i = "plugin-native" : e.usePluginFullScreen && c.SUPPORT_POINTER_EVENTS && (i = "plugin-click"), e.fullscreenMode = i, i
      },
      enterFullScreen: function() {
        var e = this,
          t = null !== e.media.rendererName && /(html5|native)/i.test(e.media.rendererName),
          i = getComputedStyle(e.container);
        if (!1 === e.options.useFakeFullscreen && c.IS_IOS && c.HAS_IOS_FULLSCREEN && "function" == typeof e.media.originalNode.webkitEnterFullscreen && e.media.originalNode.canPlayType((0, h.getTypeFromFile)(e.media.getSrc()))) e.media.originalNode.webkitEnterFullscreen();
        else {
          if ((0, u.addClass)(s.default.documentElement, e.options.classPrefix + "fullscreen"), (0, u.addClass)(e.container, e.options.classPrefix + "container-fullscreen"), e.normalHeight = parseFloat(i.height), e.normalWidth = parseFloat(i.width), "native-native" !== e.fullscreenMode && "plugin-native" !== e.fullscreenMode || (c.requestFullScreen(e.container), e.isInIframe && setTimeout(function t() {
              if (e.isNativeFullScreen) {
                var i = o.default.innerWidth || s.default.documentElement.clientWidth || s.default.body.clientWidth,
                  n = screen.width;
                Math.abs(n - i) > .002 * n ? e.exitFullScreen() : setTimeout(t, 500)
              }
            }, 1e3)),
            e.container.style.width = "100%", e.container.style.height = "100%", e.containerSizeTimeout = setTimeout(function() {
              e.container.style.width = "100%", e.container.style.height = "100%", e.setControlsSize()
            }, 500), t) e.node.style.width = "100%", e.node.style.height = "100%";
          else
            for (var n = e.container.querySelectorAll("iframe, embed, object, video"), a = n.length, r = 0; r < a; r++) n[r].style.width = "100%", n[r].style.height = "100%";
          e.options.setDimensions && "function" == typeof e.media.setSize && e.media.setSize(screen.width, screen.height);
          for (var l = e.layers.children, f = l.length, p = 0; p < f; p++) l[p].style.width = "100%", l[p].style.height = "100%";
          e.fullscreenBtn && ((0, u.removeClass)(e.fullscreenBtn, e.options.classPrefix + "fullscreen"), (0, u.addClass)(e.fullscreenBtn, e.options.classPrefix + "unfullscreen")), e.setControlsSize(), e.isFullScreen = !0;
          var m = Math.min(screen.width / e.width, screen.height / e.height),
            g = e.container.querySelector("." + e.options.classPrefix + "captions-text");
          g && (g.style.fontSize = 100 * m + "%", g.style.lineHeight = "normal", e.container.querySelector("." + e.options.classPrefix + "captions-position").style.bottom = "45px");
          var v = (0, d.createEvent)("enteredfullscreen", e.container);
          e.container.dispatchEvent(v)
        }
      },
      exitFullScreen: function() {
        var e = this,
          t = null !== e.media.rendererName && /(native|html5)/i.test(e.media.rendererName);
        if (clearTimeout(e.containerSizeTimeout), c.HAS_TRUE_NATIVE_FULLSCREEN && (c.IS_FULLSCREEN || e.isFullScreen) && c.cancelFullScreen(), (0, u.removeClass)(s.default.documentElement, e.options.classPrefix + "fullscreen"), (0, u.removeClass)(e.container, e.options.classPrefix + "container-fullscreen"), e.options.setDimensions) {
          if (e.container.style.width = e.normalWidth + "px", e.container.style.height = e.normalHeight + "px", t) e.node.style.width = e.normalWidth + "px", e.node.style.height = e.normalHeight + "px";
          else
            for (var i = e.container.querySelectorAll("iframe, embed, object, video"), n = i.length, o = 0; o < n; o++) i[o].style.width = e.normalWidth + "px", i[o].style.height = e.normalHeight + "px";
          "function" == typeof e.media.setSize && e.media.setSize(e.normalWidth, e.normalHeight);
          for (var a = e.layers.children, r = a.length, l = 0; l < r; l++) a[l].style.width = e.normalWidth + "px", a[l].style.height = e.normalHeight + "px"
        }
        e.fullscreenBtn && ((0, u.removeClass)(e.fullscreenBtn, e.options.classPrefix + "unfullscreen"), (0, u.addClass)(e.fullscreenBtn, e.options.classPrefix + "fullscreen")), e.setControlsSize(), e.isFullScreen = !1;
        var h = e.container.querySelector("." + e.options.classPrefix + "captions-text");
        h && (h.style.fontSize = "", h.style.lineHeight = "", e.container.querySelector("." + e.options.classPrefix + "captions-position").style.bottom = "");
        var f = (0, d.createEvent)("exitedfullscreen", e.container);
        e.container.dispatchEvent(f)
      }
    })
  }, {
    16: 16,
    2: 2,
    25: 25,
    26: 26,
    27: 27,
    28: 28,
    3: 3,
    5: 5
  }],
  10: [function(e, t, i) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var o = n(e(2)),
      s = e(16),
      a = n(s),
      r = n(e(5)),
      l = e(27),
      c = e(26);
    Object.assign(s.config, {
      playText: null,
      pauseText: null
    }), Object.assign(a.default.prototype, {
      buildplaypause: function(e, t, i, n) {
        function s(e) {
          "play" === e ? ((0, c.removeClass)(f, a.options.classPrefix + "play"), (0, c.removeClass)(f, a.options.classPrefix + "replay"), (0, c.addClass)(f, a.options.classPrefix + "pause"), p.setAttribute("title", h), p.setAttribute("aria-label", h)) : ((0, c.removeClass)(f, a.options.classPrefix + "pause"), (0, c.removeClass)(f, a.options.classPrefix + "replay"), (0, c.addClass)(f, a.options.classPrefix + "play"), p.setAttribute("title", u), p.setAttribute("aria-label", u))
        }
        var a = this,
          d = a.options,
          u = (0, l.isString)(d.playText) ? d.playText : r.default.t("mejs.play"),
          h = (0, l.isString)(d.pauseText) ? d.pauseText : r.default.t("mejs.pause"),
          f = o.default.createElement("div");
        f.className = a.options.classPrefix + "button " + a.options.classPrefix + "playpause-button " + a.options.classPrefix + "play", f.innerHTML = '<button type="button" aria-controls="' + a.id + '" title="' + u + '" aria-label="' + h + '" tabindex="0"></button>', f.addEventListener("click", function() {
          a.paused ? a.play() : a.pause()
        });
        var p = f.querySelector("button");
        a.addControlElement(f, "playpause"), s("pse"), n.addEventListener("loadedmetadata", function() {
          -1 === n.rendererName.indexOf("flash") && s("pse")
        }), n.addEventListener("play", function() {
          s("play")
        }), n.addEventListener("playing", function() {
          s("play")
        }), n.addEventListener("pause", function() {
          s("pse")
        }), n.addEventListener("ended", function() {
          e.options.loop || ((0, c.removeClass)(f, a.options.classPrefix + "pause"), (0, c.removeClass)(f, a.options.classPrefix + "play"), (0, c.addClass)(f, a.options.classPrefix + "replay"), p.setAttribute("title", u), p.setAttribute("aria-label", u))
        })
      }
    })
  }, {
    16: 16,
    2: 2,
    26: 26,
    27: 27,
    5: 5
  }],
  11: [function(e, t, i) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var o = n(e(2)),
      s = e(16),
      a = n(s),
      r = n(e(5)),
      l = e(25),
      c = e(30),
      d = e(26);
    Object.assign(s.config, {
      enableProgressTooltip: !0,
      useSmoothHover: !0
    }), Object.assign(a.default.prototype, {
      buildprogress: function(e, t, i, n) {
        var s = 0,
          a = !1,
          u = !1,
          h = this,
          f = e.options.autoRewind,
          p = e.options.enableProgressTooltip ? '<span class="' + h.options.classPrefix + 'time-float"><span class="' + h.options.classPrefix + 'time-float-current">00:00</span><span class="' + h.options.classPrefix + 'time-float-corner"></span></span>' : "",
          m = o.default.createElement("div");
        m.className = h.options.classPrefix + "time-rail", m.innerHTML = '<span class="' + h.options.classPrefix + "time-total " + h.options.classPrefix + 'time-slider"><span class="' + h.options.classPrefix + 'time-buffering"></span><span class="' + h.options.classPrefix + 'time-loaded"></span><span class="' + h.options.classPrefix + 'time-current"></span><span class="' + h.options.classPrefix + 'time-hovered no-hover"></span><span class="' + h.options.classPrefix + 'time-handle"><span class="' + h.options.classPrefix + 'time-handle-content"></span></span>' + p + "</span>", h.addControlElement(m, "progress"), t.querySelector("." + h.options.classPrefix + "time-buffering").style.display = "none", h.rail = t.querySelector("." + h.options.classPrefix + "time-rail"), h.total = t.querySelector("." + h.options.classPrefix + "time-total"), h.loaded = t.querySelector("." + h.options.classPrefix + "time-loaded"), h.current = t.querySelector("." + h.options.classPrefix + "time-current"), h.handle = t.querySelector("." + h.options.classPrefix + "time-handle"), h.timefloat = t.querySelector("." + h.options.classPrefix + "time-float"), h.timefloatcurrent = t.querySelector("." + h.options.classPrefix + "time-float-current"), h.slider = t.querySelector("." + h.options.classPrefix + "time-slider"), h.hovered = t.querySelector("." + h.options.classPrefix + "time-hovered"), h.newTime = 0, h.forcedHandlePause = !1, h.setTransformStyle = function(e, t) {
          e.style.transform = t, e.style.webkitTransform = t, e.style.MozTransform = t, e.style.msTransform = t, e.style.OTransform = t
        };
        var g = function(t) {
            var i = getComputedStyle(h.total),
              n = (0, d.offset)(h.total),
              o = h.total.offsetWidth,
              s = void 0 !== i.webkitTransform ? "webkitTransform" : void 0 !== i.mozTransform ? "mozTransform " : void 0 !== i.oTransform ? "oTransform" : void 0 !== i.msTransform ? "msTransform" : "transform",
              r = "WebKitCSSMatrix" in window ? "WebKitCSSMatrix" : "MSCSSMatrix" in window ? "MSCSSMatrix" : "CSSMatrix" in window ? "CSSMatrix" : void 0,
              u = 0,
              f = 0,
              p = 0,
              m = void 0;
            if (m = t.originalEvent && t.originalEvent.changedTouches ? t.originalEvent.changedTouches[0].pageX : t.changedTouches ? t.changedTouches[0].pageX : t.pageX, h.getDuration()) {
              if (m < n.left ? m = n.left : m > o + n.left && (m = o + n.left), p = m - n.left, u = p / o, h.newTime = u <= .02 ? 0 : u * h.getDuration(), a && null !== h.getCurrentTime() && h.newTime.toFixed(4) !== h.getCurrentTime().toFixed(4) && (h.setCurrentRailHandle(h.newTime), h.updateCurrent(h.newTime)), !l.IS_IOS && !l.IS_ANDROID && h.timefloat) {
                if (p < 0 && (p = 0), h.options.useSmoothHover && null !== r && void 0 !== window[r]) {
                  var g = new window[r](getComputedStyle(h.handle)[s]).m41,
                    v = p / parseFloat(getComputedStyle(h.total).width) - g / parseFloat(getComputedStyle(h.total).width);
                  h.hovered.style.left = g + "px", h.setTransformStyle(h.hovered, "scaleX(" + v + ")"), h.hovered.setAttribute("pos", p), v >= 0 ? (0, d.removeClass)(h.hovered, "negative") : (0, d.addClass)(h.hovered, "negative")
                }
                var y = h.timefloat.offsetWidth / 2;
                f = m <= h.timefloat.offsetWidth + y ? y : m >= h.container.offsetWidth - y ? h.total.offsetWidth - y : p, h.timefloat.style.left = f + "px", h.timefloatcurrent.innerHTML = (0, c.secondsToTimeCode)(h.newTime, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond, e.options.secondsDecimalLength), h.timefloat.style.display = "block"
              }
            } else l.IS_IOS || l.IS_ANDROID || !h.timefloat || (f = h.timefloat.offsetWidth + o >= h.container.offsetWidth ? h.timefloat.offsetWidth / 2 : 0, h.timefloat.style.left = f + "px", h.timefloat.style.left = f + "px", h.timefloat.style.display = "block")
          },
          v = function() {
            var t = h.getCurrentTime(),
              i = r.default.t("mejs.time-slider"),
              o = (0, c.secondsToTimeCode)(t, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond, e.options.secondsDecimalLength),
              s = h.getDuration();
            h.slider.setAttribute("role", "slider"), h.slider.tabIndex = 0, n.paused ? (h.slider.setAttribute("aria-label", i), h.slider.setAttribute("aria-valuemin", 0), h.slider.setAttribute("aria-valuemax", s), h.slider.setAttribute("aria-valuenow", t), h.slider.setAttribute("aria-valuetext", o)) : (h.slider.removeAttribute("aria-label"), h.slider.removeAttribute("aria-valuemin"), h.slider.removeAttribute("aria-valuemax"), h.slider.removeAttribute("aria-valuenow"), h.slider.removeAttribute("aria-valuetext"))
          },
          y = function() {
            new Date - s >= 1e3 && h.play()
          },
          b = function() {
            a && null !== h.getCurrentTime() && h.newTime.toFixed(4) !== h.getCurrentTime().toFixed(4) && (h.setCurrentTime(h.newTime), h.setCurrentRail(), h.updateCurrent(h.newTime)), h.forcedHandlePause && (h.slider.focus(), h.play()), h.forcedHandlePause = !1
          };
        h.slider.addEventListener("focus", function() {
          e.options.autoRewind = !1
        }), h.slider.addEventListener("blur", function() {
          e.options.autoRewind = f
        }), h.slider.addEventListener("keydown", function(t) {
          if (new Date - s >= 1e3 && (u = h.paused), h.options.keyActions.length) {
            var i = t.which || t.keyCode || 0,
              o = h.getDuration(),
              a = e.options.defaultSeekForwardInterval(n),
              r = e.options.defaultSeekBackwardInterval(n),
              c = h.getCurrentTime();
            switch (i) {
              case 37:
              case 40:
                h.getDuration() !== 1 / 0 && (c -= r);
                break;
              case 39:
              case 38:
                h.getDuration() !== 1 / 0 && (c += a);
                break;
              case 36:
                c = 0;
                break;
              case 35:
                c = o;
                break;
              case 32:
                return void(l.IS_FIREFOX || (h.paused ? h.play() : h.pause()));
              case 13:
                return void(h.paused ? h.play() : h.pause());
              default:
                return
            }
            c = c < 0 ? 0 : c >= o ? o : Math.floor(c), s = new Date, u || e.pause(), c < h.getDuration() && !u && setTimeout(y, 1100), h.setCurrentTime(c), t.preventDefault(), t.stopPropagation()
          }
        });
        var C = ["mousedown", "touchstart"];
        h.slider.addEventListener("dragstart", function() {
          return !1
        });
        for (var x = 0, w = C.length; x < w; x++) h.slider.addEventListener(C[x], function(e) {
          if (h.forcedHandlePause = !1, h.getDuration() !== 1 / 0 && (1 === e.which || 0 === e.which)) {
            h.paused || (h.pause(), h.forcedHandlePause = !0), a = !0, g(e);
            for (var t = ["mouseup", "touchend"], i = 0, n = t.length; i < n; i++) h.container.addEventListener(t[i], function(e) {
              var t = e.target;
              (t === h.slider || t.closest("." + h.options.classPrefix + "time-slider")) && g(e)
            });
            h.globalBind("mouseup.dur touchend.dur", function() {
              b(), a = !1, h.timefloat && (h.timefloat.style.display = "none"), h.globalUnbind("mousemove.dur touchmove.dur mouseup.dur touchend.dur")
            })
          }
        });
        h.slider.addEventListener("mouseenter", function(e) {
          e.target === h.slider && h.getDuration() !== 1 / 0 && (h.container.addEventListener("mousemove", function(e) {
            var t = e.target;
            (t === h.slider || t.closest("." + h.options.classPrefix + "time-slider")) && g(e)
          }), !h.timefloat || l.IS_IOS || l.IS_ANDROID || (h.timefloat.style.display = "block"), h.hovered && !l.IS_IOS && !l.IS_ANDROID && h.options.useSmoothHover && (0, d.removeClass)(h.hovered, "no-hover"))
        }), h.slider.addEventListener("mouseleave", function() {
          h.getDuration() !== 1 / 0 && (a || (h.globalUnbind("mousemove.dur"), h.timefloat && (h.timefloat.style.display = "none"), h.hovered && h.options.useSmoothHover && (0, d.addClass)(h.hovered, "no-hover")))
        }), h.broadcastCallback = function(i) {
          var n = t.querySelector("." + h.options.classPrefix + "broadcast");
          if (h.getDuration() !== 1 / 0) n && (h.slider.style.display = "", n.remove()), e.setProgressRail(i), h.forcedHandlePause || e.setCurrentRail(i), v();
          else if (!n) {
            var s = o.default.createElement("span");
            s.className = h.options.classPrefix + "broadcast", s.innerText = r.default.t("mejs.live-broadcast"), h.slider.style.display = "none"
          }
        }, n.addEventListener("progress", h.broadcastCallback), n.addEventListener("timeupdate", h.broadcastCallback), h.container.addEventListener("controlsresize", function(t) {
          h.getDuration() !== 1 / 0 && (e.setProgressRail(t), h.forcedHandlePause || e.setCurrentRail(t))
        })
      },
      cleanprogress: function(e, t, i, n) {
        n.removeEventListener("progress", e.broadcastCallback), n.removeEventListener("timeupdate", e.broadcastCallback), e.rail && e.rail.remove()
      },
      setProgressRail: function(e) {
        var t = this,
          i = void 0 !== e ? e.detail.target || e.target : t.media,
          n = null;
        i && i.buffered && i.buffered.length > 0 && i.buffered.end && t.getDuration() ? n = i.buffered.end(i.buffered.length - 1) / t.getDuration() : i && void 0 !== i.bytesTotal && i.bytesTotal > 0 && void 0 !== i.bufferedBytes ? n = i.bufferedBytes / i.bytesTotal : e && e.lengthComputable && 0 !== e.total && (n = e.loaded / e.total), null !== n && (n = Math.min(1, Math.max(0, n)), t.loaded && t.setTransformStyle(t.loaded, "scaleX(" + n + ")"))
      },
      setCurrentRailHandle: function(e) {
        var t = this;
        t.setCurrentRailMain(t, e)
      },
      setCurrentRail: function() {
        var e = this;
        e.setCurrentRailMain(e)
      },
      setCurrentRailMain: function(e, t) {
        if (void 0 !== e.getCurrentTime() && e.getDuration()) {
          var i = void 0 === t ? e.getCurrentTime() : t;
          if (e.total && e.handle) {
            var n = parseFloat(getComputedStyle(e.total).width),
              o = Math.round(n * i / e.getDuration()),
              s = o - Math.round(e.handle.offsetWidth / 2);
            if (s = s < 0 ? 0 : s, e.setTransformStyle(e.current, "scaleX(" + o / n + ")"), e.setTransformStyle(e.handle, "translateX(" + s + "px)"), e.options.useSmoothHover && !(0, d.hasClass)(e.hovered, "no-hover")) {
              var a = parseInt(e.hovered.getAttribute("pos")),
                r = (a = isNaN(a) ? 0 : a) / n - s / n;
              e.hovered.style.left = s + "px", e.setTransformStyle(e.hovered, "scaleX(" + r + ")"), r >= 0 ? (0, d.removeClass)(e.hovered, "negative") : (0, d.addClass)(e.hovered, "negative")
            }
          }
        }
      }
    })
  }, {
    16: 16,
    2: 2,
    25: 25,
    26: 26,
    30: 30,
    5: 5
  }],
  12: [function(e, t, i) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var o = n(e(2)),
      s = e(16),
      a = n(s),
      r = e(30),
      l = e(26);
    Object.assign(s.config, {
      duration: 0,
      timeAndDurationSeparator: "<span> | </span>"
    }), Object.assign(a.default.prototype, {
      buildcurrent: function(e, t, i, n) {
        var s = this,
          a = o.default.createElement("div");
        a.className = s.options.classPrefix + "time", a.setAttribute("role", "timer"), a.setAttribute("aria-live", "off"), a.innerHTML = '<span class="' + s.options.classPrefix + 'currenttime">' + (0, r.secondsToTimeCode)(0, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond, e.options.secondsDecimalLength) + "</span>", s.addControlElement(a, "current"), s.updateTimeCallback = function() {
          s.controlsAreVisible && e.updateCurrent()
        }, n.addEventListener("timeupdate", s.updateTimeCallback)
      },
      cleancurrent: function(e, t, i, n) {
        n.removeEventListener("timeupdate", e.updateTimeCallback)
      },
      buildduration: function(e, t, i, n) {
        var s = this;
        if (t.lastChild.querySelector("." + s.options.classPrefix + "currenttime")) t.querySelector("." + s.options.classPrefix + "time").innerHTML += s.options.timeAndDurationSeparator + '<span class="' + s.options.classPrefix + 'duration">' + (0, r.secondsToTimeCode)(s.options.duration, s.options.alwaysShowHours, s.options.showTimecodeFrameCount, s.options.framesPerSecond, s.options.secondsDecimalLength) + "</span>";
        else {
          t.querySelector("." + s.options.classPrefix + "currenttime") && (0, l.addClass)(t.querySelector("." + s.options.classPrefix + "currenttime").parentNode, s.options.classPrefix + "currenttime-container");
          var a = o.default.createElement("div");
          a.className = s.options.classPrefix + "time " + s.options.classPrefix + "duration-container", a.innerHTML = '<span class="' + s.options.classPrefix + 'duration">' + (0, r.secondsToTimeCode)(s.options.duration, s.options.alwaysShowHours, s.options.showTimecodeFrameCount, s.options.framesPerSecond, s.options.secondsDecimalLength) + "</span>", s.addControlElement(a, "duration")
        }
        n.addEventListener("timeupdate", s.updateTimeCallback)
      },
      cleanduration: function(e, t, i, n) {
        n.removeEventListener("timeupdate", e.updateTimeCallback)
      },
      updateCurrent: function() {
        var e = this,
          t = e.getCurrentTime();
        isNaN(t) && (t = 0);
        var i = (0, r.secondsToTimeCode)(t, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond, e.options.secondsDecimalLength);
        i.length > 5 ? (0, l.addClass)(e.container, e.options.classPrefix + "long-video") : (0, l.removeClass)(e.container, e.options.classPrefix + "long-video"), e.controls.querySelector("." + e.options.classPrefix + "currenttime") && (e.controls.querySelector("." + e.options.classPrefix + "currenttime").innerText = i)
      },
      updateDuration: function() {
        var e = this,
          t = e.getDuration();
        (isNaN(t) || t === 1 / 0 || t < 0) && (e.media.duration = e.options.duration = t = 0), e.options.duration > 0 && (t = e.options.duration);
        var i = (0, r.secondsToTimeCode)(t, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond, e.options.secondsDecimalLength);
        i.length > 5 ? (0, l.addClass)(e.container, e.options.classPrefix + "long-video") : (0, l.removeClass)(e.container, e.options.classPrefix + "long-video"), e.controls.querySelector("." + e.options.classPrefix + "duration") && t > 0 && (e.controls.querySelector("." + e.options.classPrefix + "duration").innerHTML = i)
      }
    })
  }, {
    16: 16,
    2: 2,
    26: 26,
    30: 30
  }],
  13: [function(e, t, i) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var o = n(e(2)),
      s = n(e(7)),
      a = n(e(5)),
      r = e(16),
      l = n(r),
      c = e(30),
      d = e(27),
      u = e(26);
    Object.assign(r.config, {
      startLanguage: "",
      tracksText: null,
      chaptersText: null,
      tracksAriaLive: !1,
      hideCaptionsButtonWhenEmpty: !0,
      toggleCaptionsButtonWhenOnlyOne: !1,
      slidesSelector: ""
    }), Object.assign(l.default.prototype, {
      hasChapters: !1,
      buildtracks: function(e, t, i, n) {
        if (e.tracks.length || e.trackFiles && 0 !== !e.trackFiles.length) {
          var s = this,
            r = s.options.tracksAriaLive ? ' role="log" aria-live="assertive" aria-atomic="false"' : "",
            l = (0, d.isString)(s.options.tracksText) ? s.options.tracksText : a.default.t("mejs.captions-subtitles"),
            c = (0, d.isString)(s.options.chaptersText) ? s.options.chaptersText : a.default.t("mejs.captions-chapters"),
            h = null === e.trackFiles ? e.tracks.length : e.trackFiles.length;
          if (s.domNode.textTracks)
            for (var f = s.domNode.textTracks.length - 1; f >= 0; f--) s.domNode.textTracks[f].mode = "hidden";
          s.cleartracks(e), e.captions = o.default.createElement("div"), e.captions.className = s.options.classPrefix + "captions-layer " + s.options.classPrefix + "layer", e.captions.innerHTML = '<div class="' + s.options.classPrefix + "captions-position " + s.options.classPrefix + 'captions-position-hover"' + r + '><span class="' + s.options.classPrefix + 'captions-text"></span></div>', e.captions.style.display = "none", i.insertBefore(e.captions, i.firstChild), e.captionsText = e.captions.querySelector("." + s.options.classPrefix + "captions-text"), e.captionsButton = o.default.createElement("div"), e.captionsButton.className = s.options.classPrefix + "button " + s.options.classPrefix + "captions-button", e.captionsButton.innerHTML = '<button type="button" aria-controls="' + s.id + '" title="' + l + '" aria-label="' + l + '" tabindex="0"></button><div class="' + s.options.classPrefix + "captions-selector " + s.options.classPrefix + 'offscreen"><ul class="' + s.options.classPrefix + 'captions-selector-list"><li class="' + s.options.classPrefix + 'captions-selector-list-item"><input type="radio" class="' + s.options.classPrefix + 'captions-selector-input" name="' + e.id + '_captions" id="' + e.id + '_captions_none" value="none" checked disabled><label class="' + s.options.classPrefix + "captions-selector-label " + s.options.classPrefix + 'captions-selected" for="' + e.id + '_captions_none">' + a.default.t("mejs.none") + "</label></li></ul></div>", s.addControlElement(e.captionsButton, "tracks"), e.captionsButton.querySelector("." + s.options.classPrefix + "captions-selector-input").disabled = !1, e.chaptersButton = o.default.createElement("div"), e.chaptersButton.className = s.options.classPrefix + "button " + s.options.classPrefix + "chapters-button", e.chaptersButton.innerHTML = '<button type="button" aria-controls="' + s.id + '" title="' + c + '" aria-label="' + c + '" tabindex="0"></button><div class="' + s.options.classPrefix + "chapters-selector " + s.options.classPrefix + 'offscreen"><ul class="' + s.options.classPrefix + 'chapters-selector-list"></ul></div>';
          for (var p = 0, m = 0; m < h; m++) {
            var g = e.tracks[m].kind;
            e.tracks[m].src.trim() && ("subtitles" === g || "captions" === g ? p++ : "chapters" !== g || t.querySelector("." + s.options.classPrefix + "chapter-selector") || e.captionsButton.parentNode.insertBefore(e.chaptersButton, e.captionsButton))
          }
          e.trackToLoad = -1, e.selectedTrack = null, e.isLoadingTrack = !1;
          for (var v = 0; v < h; v++) {
            var y = e.tracks[v].kind;
            !e.tracks[v].src.trim() || "subtitles" !== y && "captions" !== y || e.addTrackButton(e.tracks[v].trackId, e.tracks[v].srclang, e.tracks[v].label)
          }
          e.loadNextTrack();
          var b = ["mouseenter", "focusin"],
            C = ["mouseleave", "focusout"];
          if (s.options.toggleCaptionsButtonWhenOnlyOne && 1 === p) e.captionsButton.addEventListener("click", function() {
            var t = "none";
            null === e.selectedTrack && (t = e.tracks[0].trackId), e.setTrack(t)
          });
          else {
            for (var x = e.captionsButton.querySelectorAll("." + s.options.classPrefix + "captions-selector-label"), w = e.captionsButton.querySelectorAll("input[type=radio]"), E = 0, S = b.length; E < S; E++) e.captionsButton.addEventListener(b[E], function() {
              (0, u.removeClass)(this.querySelector("." + s.options.classPrefix + "captions-selector"), s.options.classPrefix + "offscreen")
            });
            for (var _ = 0, T = C.length; _ < T; _++) e.captionsButton.addEventListener(C[_], function() {
              (0, u.addClass)(this.querySelector("." + s.options.classPrefix + "captions-selector"), s.options.classPrefix + "offscreen")
            });
            for (var k = 0, D = w.length; k < D; k++) w[k].addEventListener("click", function() {
              e.setTrack(this.value)
            });
            for (var I = 0, H = x.length; I < H; I++) x[I].addEventListener("click", function() {
              var e = (0, u.siblings)(this, function(e) {
                  return "INPUT" === e.tagName
                })[0],
                t = (0, d.createEvent)("click", e);
              e.dispatchEvent(t)
            });
            e.captionsButton.addEventListener("keydown", function(e) {
              e.stopPropagation()
            })
          }
          for (var M = 0, F = b.length; M < F; M++) e.chaptersButton.addEventListener(b[M], function() {
            this.querySelector("." + s.options.classPrefix + "chapters-selector-list").children.length && (0, u.removeClass)(this.querySelector("." + s.options.classPrefix + "chapters-selector"), s.options.classPrefix + "offscreen")
          });
          for (var B = 0, P = C.length; B < P; B++) e.chaptersButton.addEventListener(C[B], function() {
            (0, u.addClass)(this.querySelector("." + s.options.classPrefix + "chapters-selector"), s.options.classPrefix + "offscreen")
          });
          e.chaptersButton.addEventListener("keydown", function(e) {
            e.stopPropagation()
          }), e.options.alwaysShowControls ? (0, u.addClass)(e.container.querySelector("." + s.options.classPrefix + "captions-position"), s.options.classPrefix + "captions-position-hover") : (e.container.addEventListener("controlsshown", function() {
            (0, u.addClass)(e.container.querySelector("." + s.options.classPrefix + "captions-position"), s.options.classPrefix + "captions-position-hover")
          }), e.container.addEventListener("controlshidden", function() {
            n.paused || (0, u.removeClass)(e.container.querySelector("." + s.options.classPrefix + "captions-position"), s.options.classPrefix + "captions-position-hover")
          })), n.addEventListener("timeupdate", function() {
            e.displayCaptions()
          }), "" !== e.options.slidesSelector && (e.slidesContainer = o.default.querySelectorAll(e.options.slidesSelector), n.addEventListener("timeupdate", function() {
            e.displaySlides()
          }))
        }
      },
      cleartracks: function(e) {
        e && (e.captions && e.captions.remove(), e.chapters && e.chapters.remove(), e.captionsText && e.captionsText.remove(), e.captionsButton && e.captionsButton.remove(), e.chaptersButton && e.chaptersButton.remove())
      },
      rebuildtracks: function() {
        var e = this;
        e.findTracks(), e.buildtracks(e, e.controls, e.layers, e.media)
      },
      findTracks: function() {
        var e = this,
          t = null === e.trackFiles ? e.node.querySelectorAll("track") : e.trackFiles,
          i = t.length;
        e.tracks = [];
        for (var n = 0; n < i; n++) {
          var o = t[n],
            s = o.getAttribute("srclang").toLowerCase() || "",
            a = e.id + "_track_" + n + "_" + o.getAttribute("kind") + "_" + s;
          e.tracks.push({
            trackId: a,
            srclang: s,
            src: o.getAttribute("src"),
            kind: o.getAttribute("kind"),
            label: o.getAttribute("label") || "",
            entries: [],
            isLoaded: !1
          })
        }
      },
      setTrack: function(e) {
        for (var t = this, i = t.captionsButton.querySelectorAll('input[type="radio"]'), n = t.captionsButton.querySelectorAll("." + t.options.classPrefix + "captions-selected"), o = t.captionsButton.querySelector('input[value="' + e + '"]'), s = 0, a = i.length; s < a; s++) i[s].checked = !1;
        for (var r = 0, l = n.length; r < l; r++)(0, u.removeClass)(n[r], t.options.classPrefix + "captions-selected");
        o.checked = !0;
        for (var c = (0, u.siblings)(o, function(e) {
            return (0, u.hasClass)(e, t.options.classPrefix + "captions-selector-label")
          }), h = 0, f = c.length; h < f; h++)(0, u.addClass)(c[h], t.options.classPrefix + "captions-selected");
        if ("none" === e) t.selectedTrack = null, (0, u.removeClass)(t.captionsButton, t.options.classPrefix + "captions-enabled");
        else
          for (var p = 0, m = t.tracks.length; p < m; p++) {
            var g = t.tracks[p];
            if (g.trackId === e) {
              null === t.selectedTrack && (0, u.addClass)(t.captionsButton, t.options.classPrefix + "captions-enabled"), t.selectedTrack = g, t.captions.setAttribute("lang", t.selectedTrack.srclang), t.displayCaptions();
              break
            }
          }
        var v = (0, d.createEvent)("captionschange", t.media);
        v.detail.caption = t.selectedTrack, t.media.dispatchEvent(v)
      },
      loadNextTrack: function() {
        var e = this;
        e.trackToLoad++, e.trackToLoad < e.tracks.length ? (e.isLoadingTrack = !0, e.loadTrack(e.trackToLoad)) : (e.isLoadingTrack = !1, e.checkForTracks())
      },
      loadTrack: function(e) {
        var t = this,
          i = t.tracks[e];
        void 0 === i || void 0 === i.src && "" === i.src || (0, u.ajax)(i.src, "text", function(e) {
          i.entries = "string" == typeof e && /<tt\s+xml/gi.exec(e) ? s.default.TrackFormatParser.dfxp.parse(e) : s.default.TrackFormatParser.webvtt.parse(e), i.isLoaded = !0, t.enableTrackButton(i), t.loadNextTrack(), "slides" === i.kind ? t.setupSlides(i) : "chapters" !== i.kind || t.hasChapters || (t.drawChapters(i), t.hasChapters = !0)
        }, function() {
          t.removeTrackButton(i.trackId), t.loadNextTrack()
        })
      },
      enableTrackButton: function(e) {
        var t = this,
          i = e.srclang,
          n = o.default.getElementById("" + e.trackId);
        if (n) {
          var r = e.label;
          "" === r && (r = a.default.t(s.default.language.codes[i]) || i), n.disabled = !1;
          for (var l = (0, u.siblings)(n, function(e) {
              return (0, u.hasClass)(e, t.options.classPrefix + "captions-selector-label")
            }), c = 0, h = l.length; c < h; c++) l[c].innerHTML = r;
          if (t.options.startLanguage === i) {
            n.checked = !0;
            var f = (0, d.createEvent)("click", n);
            n.dispatchEvent(f)
          }
        }
      },
      removeTrackButton: function(e) {
        var t = o.default.getElementById("" + e);
        if (t) {
          var i = t.closest("li");
          i && i.remove()
        }
      },
      addTrackButton: function(e, t, i) {
        var n = this;
        "" === i && (i = a.default.t(s.default.language.codes[t]) || t), n.captionsButton.querySelector("ul").innerHTML += '<li class="' + n.options.classPrefix + 'captions-selector-list-item"><input type="radio" class="' + n.options.classPrefix + 'captions-selector-input" name="' + n.id + '_captions" id="' + e + '" value="' + e + '" disabled><label class="' + n.options.classPrefix + 'captions-selector-label"for="' + e + '">' + i + " (loading)</label></li>"
      },
      checkForTracks: function() {
        var e = this,
          t = !1;
        if (e.options.hideCaptionsButtonWhenEmpty) {
          for (var i = 0, n = e.tracks.length; i < n; i++) {
            var o = e.tracks[i].kind;
            if (("subtitles" === o || "captions" === o) && e.tracks[i].isLoaded) {
              t = !0;
              break
            }
          }
          e.captionsButton.style.display = t ? "" : "none", e.setControlsSize()
        }
      },
      displayCaptions: function() {
        if (void 0 !== this.tracks) {
          var e = this,
            t = e.selectedTrack;
          if (null !== t && t.isLoaded) {
            var i = e.searchTrackPosition(t.entries, e.media.currentTime);
            if (i > -1) return e.captionsText.innerHTML = function(e) {
              var t = o.default.createElement("div");
              t.innerHTML = e;
              for (var i = t.getElementsByTagName("script"), n = i.length; n--;) i[n].remove();
              for (var s = t.getElementsByTagName("*"), a = 0, r = s.length; a < r; a++)
                for (var l = s[a].attributes, c = Array.prototype.slice.call(l), d = 0, u = c.length; d < u; d++) c[d].name.startsWith("on") || c[d].value.startsWith("javascript") ? s[a].remove() : "style" === c[d].name && s[a].removeAttribute(c[d].name);
              return t.innerHTML
            }(t.entries[i].text), e.captionsText.className = e.options.classPrefix + "captions-text " + (t.entries[i].identifier || ""), e.captions.style.display = "", void(e.captions.style.height = "0px");
            e.captions.style.display = "none"
          } else e.captions.style.display = "none"
        }
      },
      setupSlides: function(e) {
        var t = this;
        t.slides = e, t.slides.entries.imgs = [t.slides.entries.length], t.showSlide(0)
      },
      showSlide: function(e) {
        var t = this,
          i = this;
        if (void 0 !== i.tracks && void 0 !== i.slidesContainer) {
          var n = i.slides.entries[e].text,
            s = i.slides.entries[e].imgs;
          if (void 0 === s || void 0 === s.fadeIn) {
            var a = o.default.createElement("img");
            a.src = n, a.addEventListener("load", function() {
              var e = t,
                n = (0, u.siblings)(e, function(e) {
                  return n(e)
                });
              e.style.display = "none", i.slidesContainer.innerHTML += e.innerHTML, (0, u.fadeIn)(i.slidesContainer.querySelector(a));
              for (var o = 0, s = n.length; o < s; o++)(0, u.fadeOut)(n[o], 400)
            }), i.slides.entries[e].imgs = s = a
          } else if (!(0, u.visible)(s)) {
            var r = (0, u.siblings)(self, function(e) {
              return r(e)
            });
            (0, u.fadeIn)(i.slidesContainer.querySelector(s));
            for (var l = 0, c = r.length; l < c; l++)(0, u.fadeOut)(r[l])
          }
        }
      },
      displaySlides: function() {
        var e = this;
        if (void 0 !== this.slides) {
          var t = e.slides,
            i = e.searchTrackPosition(t.entries, e.media.currentTime);
          i > -1 && e.showSlide(i)
        }
      },
      drawChapters: function(e) {
        var t = this,
          i = e.entries.length;
        if (i) {
          t.chaptersButton.querySelector("ul").innerHTML = "";
          for (var n = 0; n < i; n++) t.chaptersButton.querySelector("ul").innerHTML += '<li class="' + t.options.classPrefix + 'chapters-selector-list-item" role="menuitemcheckbox" aria-live="polite" aria-disabled="false" aria-checked="false"><input type="radio" class="' + t.options.classPrefix + 'captions-selector-input" name="' + t.id + '_chapters" id="' + t.id + "_chapters_" + n + '" value="' + e.entries[n].start + '" disabled><label class="' + t.options.classPrefix + 'chapters-selector-label"for="' + t.id + "_chapters_" + n + '">' + e.entries[n].text + "</label></li>";
          for (var o = t.chaptersButton.querySelectorAll('input[type="radio"]'), s = t.chaptersButton.querySelectorAll("." + t.options.classPrefix + "chapters-selector-label"), a = 0, r = o.length; a < r; a++) o[a].disabled = !1, o[a].checked = !1, o[a].addEventListener("click", function() {
            var e = this,
              i = t.chaptersButton.querySelectorAll("li"),
              n = (0, u.siblings)(e, function(e) {
                return (0, u.hasClass)(e, t.options.classPrefix + "chapters-selector-label")
              })[0];
            e.checked = !0, e.parentNode.setAttribute("aria-checked", !0), (0, u.addClass)(n, t.options.classPrefix + "chapters-selected"), (0, u.removeClass)(t.chaptersButton.querySelector("." + t.options.classPrefix + "chapters-selected"), t.options.classPrefix + "chapters-selected");
            for (var o = 0, s = i.length; o < s; o++) i[o].setAttribute("aria-checked", !1);
            t.media.setCurrentTime(parseFloat(e.value)), t.media.paused && t.media.play()
          });
          for (var l = 0, c = s.length; l < c; l++) s[l].addEventListener("click", function() {
            var e = (0, u.siblings)(this, function(e) {
                return "INPUT" === e.tagName
              })[0],
              t = (0, d.createEvent)("click", e);
            e.dispatchEvent(t)
          })
        }
      },
      searchTrackPosition: function(e, t) {
        for (var i = 0, n = e.length - 1, o = void 0, s = void 0, a = void 0; i <= n;) {
          if (o = i + n >> 1, s = e[o].start, a = e[o].stop, t >= s && t < a) return o;
          s < t ? i = o + 1 : s > t && (n = o - 1)
        }
        return -1
      }
    }), s.default.language = {
      codes: {
        af: "mejs.afrikaans",
        sq: "mejs.albanian",
        ar: "mejs.arabic",
        be: "mejs.belarusian",
        bg: "mejs.bulgarian",
        ca: "mejs.catalan",
        zh: "mejs.chinese",
        "zh-cn": "mejs.chinese-simplified",
        "zh-tw": "mejs.chines-traditional",
        hr: "mejs.croatian",
        cs: "mejs.czech",
        da: "mejs.danish",
        nl: "mejs.dutch",
        en: "mejs.english",
        et: "mejs.estonian",
        fl: "mejs.filipino",
        fi: "mejs.finnish",
        fr: "mejs.french",
        gl: "mejs.galician",
        de: "mejs.german",
        el: "mejs.greek",
        ht: "mejs.haitian-creole",
        iw: "mejs.hebrew",
        hi: "mejs.hindi",
        hu: "mejs.hungarian",
        is: "mejs.icelandic",
        id: "mejs.indonesian",
        ga: "mejs.irish",
        it: "mejs.italian",
        ja: "mejs.japanese",
        ko: "mejs.korean",
        lv: "mejs.latvian",
        lt: "mejs.lithuanian",
        mk: "mejs.macedonian",
        ms: "mejs.malay",
        mt: "mejs.maltese",
        no: "mejs.norwegian",
        fa: "mejs.persian",
        pl: "mejs.polish",
        pt: "mejs.portuguese",
        ro: "mejs.romanian",
        ru: "mejs.russian",
        sr: "mejs.serbian",
        sk: "mejs.slovak",
        sl: "mejs.slovenian",
        es: "mejs.spanish",
        sw: "mejs.swahili",
        sv: "mejs.swedish",
        tl: "mejs.tagalog",
        th: "mejs.thai",
        tr: "mejs.turkish",
        uk: "mejs.ukrainian",
        vi: "mejs.vietnamese",
        cy: "mejs.welsh",
        yi: "mejs.yiddish"
      }
    }, s.default.TrackFormatParser = {
      webvtt: {
        pattern: /^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
        parse: function(e) {
          for (var t = e.split(/\r?\n/), i = [], n = void 0, o = void 0, s = void 0, a = 0, r = t.length; a < r; a++) {
            if ((n = this.pattern.exec(t[a])) && a < t.length) {
              for (a - 1 >= 0 && "" !== t[a - 1] && (s = t[a - 1]), o = t[++a], a++;
                "" !== t[a] && a < t.length;) o = o + "\n" + t[a], a++;
              o = o.trim().replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), i.push({
                identifier: s,
                start: 0 === (0, c.convertSMPTEtoSeconds)(n[1]) ? .2 : (0, c.convertSMPTEtoSeconds)(n[1]),
                stop: (0, c.convertSMPTEtoSeconds)(n[3]),
                text: o,
                settings: n[5]
              })
            }
            s = ""
          }
          return i
        }
      },
      dfxp: {
        parse: function(e) {
          var t = (e = $(e).filter("tt")).firstChild,
            i = t.querySelectorAll("p"),
            n = e.getElementById("" + t.attr("style")),
            o = [],
            s = void 0;
          if (n.length) {
            n.removeAttribute("id");
            var a = n.attributes;
            if (a.length) {
              s = {};
              for (var r = 0, l = a.length; r < l; r++) s[a[r].name.split(":")[1]] = a[r].value
            }
          }
          for (var d = 0, u = i.length; d < u; d++) {
            var h = void 0,
              f = {
                start: null,
                stop: null,
                style: null,
                text: null
              };
            if (i.eq(d).attr("begin") && (f.start = (0, c.convertSMPTEtoSeconds)(i.eq(d).attr("begin"))), !f.start && i.eq(d - 1).attr("end") && (f.start = (0, c.convertSMPTEtoSeconds)(i.eq(d - 1).attr("end"))), i.eq(d).attr("end") && (f.stop = (0, c.convertSMPTEtoSeconds)(i.eq(d).attr("end"))), !f.stop && i.eq(d + 1).attr("begin") && (f.stop = (0, c.convertSMPTEtoSeconds)(i.eq(d + 1).attr("begin"))), s) {
              h = "";
              for (var p in s) h += p + ":" + s[p] + ";"
            }
            h && (f.style = h), 0 === f.start && (f.start = .2), f.text = i.eq(d).innerHTML.trim().replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), o.push(f)
          }
          return o
        }
      }
    }
  }, {
    16: 16,
    2: 2,
    26: 26,
    27: 27,
    30: 30,
    5: 5,
    7: 7
  }],
  14: [function(e, t, i) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var o = n(e(2)),
      s = e(16),
      a = n(s),
      r = n(e(5)),
      l = e(25),
      c = e(27),
      d = e(26);
    Object.assign(s.config, {
      muteText: null,
      unmuteText: null,
      allyVolumeControlText: null,
      hideVolumeOnTouchDevices: !0,
      audioVolume: "horizontal",
      videoVolume: "vertical",
      startVolume: .8
    }), Object.assign(a.default.prototype, {
      buildvolume: function(e, t, i, n) {
        if (!l.IS_ANDROID && !l.IS_IOS || !this.options.hideVolumeOnTouchDevices) {
          var s = this,
            a = s.isVideo ? s.options.videoVolume : s.options.audioVolume,
            u = (0, c.isString)(s.options.muteText) ? s.options.muteText : r.default.t("mejs.mute"),
            h = (0, c.isString)(s.options.unmuteText) ? s.options.unmuteText : r.default.t("mejs.unmute"),
            f = (0, c.isString)(s.options.allyVolumeControlText) ? s.options.allyVolumeControlText : r.default.t("mejs.volume-help-text"),
            p = o.default.createElement("div");
          if (p.className = s.options.classPrefix + "button " + s.options.classPrefix + "volume-button " + s.options.classPrefix + "mute", p.innerHTML = "horizontal" === a ? '<button type="button" aria-controls="' + s.id + '" title="' + u + '" aria-label="' + u + '" tabindex="0"></button>' : '<button type="button" aria-controls="' + s.id + '" title="' + u + '" aria-label="' + u + '" tabindex="0"></button><a href="javascript:void(0);" class="' + s.options.classPrefix + 'volume-slider" aria-label="' + r.default.t("mejs.volume-slider") + '" aria-valuemin="0" aria-valuemax="100" role="slider" aria-orientation="vertical"><span class="' + s.options.classPrefix + 'offscreen">' + f + '</span><div class="' + s.options.classPrefix + 'volume-total"><div class="' + s.options.classPrefix + 'volume-current"></div><div class="' + s.options.classPrefix + 'volume-handle"></div></div></a>', s.addControlElement(p, "volume"), "horizontal" === a) {
            var m = o.default.createElement("a");
            m.className = s.options.classPrefix + "horizontal-volume-slider", m.href = "javascript:void(0);", m.setAttribute("aria-label", r.default.t("mejs.volume-slider")), m.setAttribute("aria-valuemin", 0), m.setAttribute("aria-valuemax", 100), m.setAttribute("role", "slider"), m.innerHTML += '<span class="' + s.options.classPrefix + 'offscreen">' + f + '</span><div class="' + s.options.classPrefix + 'horizontal-volume-total"><div class="' + s.options.classPrefix + 'horizontal-volume-current"></div><div class="' + s.options.classPrefix + 'horizontal-volume-handle"></div></div>', p.parentNode.insertBefore(m, p.nextSibling)
          }
          var g = !1,
            v = !1,
            y = !1,
            b = function() {
              var e = Math.floor(100 * n.volume);
              C.setAttribute("aria-valuenow", e), C.setAttribute("aria-valuetext", e + "%")
            },
            C = "vertical" === a ? s.container.querySelector("." + s.options.classPrefix + "volume-slider") : s.container.querySelector("." + s.options.classPrefix + "horizontal-volume-slider"),
            x = "vertical" === a ? s.container.querySelector("." + s.options.classPrefix + "volume-total") : s.container.querySelector("." + s.options.classPrefix + "horizontal-volume-total"),
            w = "vertical" === a ? s.container.querySelector("." + s.options.classPrefix + "volume-current") : s.container.querySelector("." + s.options.classPrefix + "horizontal-volume-current"),
            E = "vertical" === a ? s.container.querySelector("." + s.options.classPrefix + "volume-handle") : s.container.querySelector("." + s.options.classPrefix + "horizontal-volume-handle"),
            S = function(e) {
              if (null !== e && !isNaN(e) && void 0 !== e) {
                if (e = Math.max(0, e), 0 === (e = Math.min(e, 1))) {
                  (0, d.removeClass)(p, s.options.classPrefix + "mute"), (0, d.addClass)(p, s.options.classPrefix + "unmute");
                  var t = p.firstElementChild;
                  t.setAttribute("title", h), t.setAttribute("aria-label", h)
                } else {
                  (0, d.removeClass)(p, s.options.classPrefix + "unmute"), (0, d.addClass)(p, s.options.classPrefix + "mute");
                  var i = p.firstElementChild;
                  i.setAttribute("title", u), i.setAttribute("aria-label", u)
                }
                var n = 100 * e + "%",
                  o = getComputedStyle(E);
                "vertical" === a ? (w.style.bottom = 0, w.style.height = n, E.style.bottom = n, E.style.marginBottom = -parseFloat(o.height) / 2 + "px") : (w.style.left = 0, w.style.width = n, E.style.left = n, E.style.marginLeft = -parseFloat(o.width) / 2 + "px")
              }
            },
            _ = function(e) {
              var t = (0, d.offset)(x),
                i = getComputedStyle(x);
              y = !0;
              var n = null;
              if ("vertical" === a) {
                var o = parseFloat(i.height);
                if (n = (o - (e.pageY - t.top)) / o, 0 === t.top || 0 === t.left) return
              } else {
                var r = parseFloat(i.width);
                n = (e.pageX - t.left) / r
              }
              n = Math.max(0, n), n = Math.min(n, 1), S(n), s.setMuted(0 === n), s.setVolume(n), e.preventDefault(), e.stopPropagation()
            },
            T = function() {
              s.muted ? (S(0), (0, d.removeClass)(p, s.options.classPrefix + "mute"), (0, d.addClass)(p, s.options.classPrefix + "unmute")) : (S(n.volume), (0, d.removeClass)(p, s.options.classPrefix + "unmute"), (0, d.addClass)(p, s.options.classPrefix + "mute"))
            };
          p.addEventListener("mouseenter", function(e) {
            e.target === p && (C.style.display = "block", v = !0, e.preventDefault(), e.stopPropagation())
          }), p.addEventListener("focusin", function() {
            C.style.display = "block", v = !0
          }), p.addEventListener("focusout", function(e) {
            e.relatedTarget && (!e.relatedTarget || e.relatedTarget.matches("." + s.options.classPrefix + "volume-slider")) || "vertical" !== a || (C.style.display = "none")
          }), p.addEventListener("mouseleave", function() {
            v = !1, g || "vertical" !== a || (C.style.display = "none")
          }), p.addEventListener("focusout", function() {
            v = !1
          }), p.addEventListener("keydown", function(e) {
            if (s.options.keyActions.length) {
              var t = e.which || e.keyCode || 0,
                i = n.volume;
              switch (t) {
                case 38:
                  i = Math.min(i + .1, 1);
                  break;
                case 40:
                  i = Math.max(0, i - .1);
                  break;
                default:
                  return !0
              }
              g = !1, S(i), n.setVolume(i), e.preventDefault(), e.stopPropagation()
            }
          }), p.querySelector("button").addEventListener("click", function() {
            n.setMuted(!n.muted);
            var e = (0, c.createEvent)("volumechange", n);
            n.dispatchEvent(e)
          }), C.addEventListener("dragstart", function() {
            return !1
          }), C.addEventListener("mouseover", function() {
            v = !0
          }), C.addEventListener("focusin", function() {
            C.style.display = "block", v = !0
          }), C.addEventListener("focusout", function() {
            v = !1, g || "vertical" !== a || (C.style.display = "none")
          }), C.addEventListener("mousedown", function(e) {
            _(e), s.globalBind("mousemove.vol", function(e) {
              var t = e.target;
              g && (t === C || t.closest("vertical" === a ? "." + s.options.classPrefix + "volume-slider" : "." + s.options.classPrefix + "horizontal-volume-slider")) && _(e)
            }), s.globalBind("mouseup.vol", function() {
              g = !1, s.globalUnbind("mousemove.vol mouseup.vol"), v || "vertical" !== a || (C.style.display = "none")
            }), g = !0, e.preventDefault(), e.stopPropagation()
          }), n.addEventListener("volumechange", function(e) {
            g || T(), b()
          });
          var k = !1;
          n.addEventListener("rendererready", function() {
            y || setTimeout(function() {
              k = !0, (0 === e.options.startVolume || n.originalNode.muted) && (n.setMuted(!0), e.options.startVolume = 0), n.setVolume(e.options.startVolume), s.setControlsSize()
            }, 250)
          }), n.addEventListener("loadedmetadata", function() {
            setTimeout(function() {
              y || k || ((0 === e.options.startVolume || n.originalNode.muted) && (n.setMuted(!0), e.options.startVolume = 0), n.setVolume(e.options.startVolume), s.setControlsSize()), k = !1
            }, 250)
          }), (0 === e.options.startVolume || n.originalNode.muted) && (n.setMuted(!0), e.options.startVolume = 0, T()), s.container.addEventListener("controlsresize", function() {
            T()
          })
        }
      }
    })
  }, {
    16: 16,
    2: 2,
    25: 25,
    26: 26,
    27: 27,
    5: 5
  }],
  15: [function(e, t, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.EN = {
      "mejs.plural-form": 1,
      "mejs.download-file": "Download File",
      "mejs.install-flash": "You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https://get.adobe.com/flashplayer/",
      "mejs.fullscreen": "Fullscreen",
      "mejs.play": "Play",
      "mejs.pause": "Pause",
      "mejs.time-slider": "Time Slider",
      "mejs.time-help-text": "Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.",
      "mejs.live-broadcast": "Live Broadcast",
      "mejs.volume-help-text": "Use Up/Down Arrow keys to increase or decrease volume.",
      "mejs.unmute": "Unmute",
      "mejs.mute": "Mute",
      "mejs.volume-slider": "Volume Slider",
      "mejs.video-player": "Video Player",
      "mejs.audio-player": "Audio Player",
      "mejs.captions-subtitles": "Captions/Subtitles",
      "mejs.captions-chapters": "Chapters",
      "mejs.none": "None",
      "mejs.afrikaans": "Afrikaans",
      "mejs.albanian": "Albanian",
      "mejs.arabic": "Arabic",
      "mejs.belarusian": "Belarusian",
      "mejs.bulgarian": "Bulgarian",
      "mejs.catalan": "Catalan",
      "mejs.chinese": "Chinese",
      "mejs.chinese-simplified": "Chinese (Simplified)",
      "mejs.chinese-traditional": "Chinese (Traditional)",
      "mejs.croatian": "Croatian",
      "mejs.czech": "Czech",
      "mejs.danish": "Danish",
      "mejs.dutch": "Dutch",
      "mejs.english": "English",
      "mejs.estonian": "Estonian",
      "mejs.filipino": "Filipino",
      "mejs.finnish": "Finnish",
      "mejs.french": "French",
      "mejs.galician": "Galician",
      "mejs.german": "German",
      "mejs.greek": "Greek",
      "mejs.haitian-creole": "Haitian Creole",
      "mejs.hebrew": "Hebrew",
      "mejs.hindi": "Hindi",
      "mejs.hungarian": "Hungarian",
      "mejs.icelandic": "Icelandic",
      "mejs.indonesian": "Indonesian",
      "mejs.irish": "Irish",
      "mejs.italian": "Italian",
      "mejs.japanese": "Japanese",
      "mejs.korean": "Korean",
      "mejs.latvian": "Latvian",
      "mejs.lithuanian": "Lithuanian",
      "mejs.macedonian": "Macedonian",
      "mejs.malay": "Malay",
      "mejs.maltese": "Maltese",
      "mejs.norwegian": "Norwegian",
      "mejs.persian": "Persian",
      "mejs.polish": "Polish",
      "mejs.portuguese": "Portuguese",
      "mejs.romanian": "Romanian",
      "mejs.russian": "Russian",
      "mejs.serbian": "Serbian",
      "mejs.slovak": "Slovak",
      "mejs.slovenian": "Slovenian",
      "mejs.spanish": "Spanish",
      "mejs.swahili": "Swahili",
      "mejs.swedish": "Swedish",
      "mejs.tagalog": "Tagalog",
      "mejs.thai": "Thai",
      "mejs.turkish": "Turkish",
      "mejs.ukrainian": "Ukrainian",
      "mejs.vietnamese": "Vietnamese",
      "mejs.welsh": "Welsh",
      "mejs.yiddish": "Yiddish"
    }
  }, {}],
  16: [function(e, t, i) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.config = void 0;
    var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      a = function() {
        function e(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, i, n) {
          return i && e(t.prototype, i), n && e(t, n), t
        }
      }(),
      r = n(e(3)),
      l = n(e(2)),
      c = n(e(7)),
      d = n(e(6)),
      u = n(e(17)),
      h = n(e(5)),
      f = e(25),
      p = e(27),
      m = e(30),
      g = e(28),
      v = function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t.default = e, t
      }(e(26));
    c.default.mepIndex = 0, c.default.players = {};
    var y = i.config = {
      poster: "",
      showPosterWhenEnded: !1,
      showPosterWhenPaused: !1,
      defaultVideoWidth: 480,
      defaultVideoHeight: 270,
      videoWidth: -1,
      videoHeight: -1,
      defaultAudioWidth: 400,
      defaultAudioHeight: 40,
      defaultSeekBackwardInterval: function(e) {
        return .05 * e.getDuration()
      },
      defaultSeekForwardInterval: function(e) {
        return .05 * e.getDuration()
      },
      setDimensions: !0,
      audioWidth: -1,
      audioHeight: -1,
      loop: !1,
      autoRewind: !0,
      enableAutosize: !0,
      timeFormat: "",
      alwaysShowHours: !1,
      showTimecodeFrameCount: !1,
      framesPerSecond: 25,
      alwaysShowControls: !1,
      hideVideoControlsOnLoad: !1,
      hideVideoControlsOnPause: !1,
      clickToPlayPause: !0,
      controlsTimeoutDefault: 1500,
      controlsTimeoutMouseEnter: 2500,
      controlsTimeoutMouseLeave: 1e3,
      iPadUseNativeControls: !1,
      iPhoneUseNativeControls: !1,
      AndroidUseNativeControls: !1,
      features: ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"],
      isVideo: !0,
      stretching: "auto",
      classPrefix: "mejs__",
      enableKeyboard: !0,
      pauseOtherPlayers: !0,
      secondsDecimalLength: 0,
      customError: "",
      keyActions: [{
        keys: [32, 179],
        action: function(e) {
          f.IS_FIREFOX || (e.paused || e.ended ? e.play() : e.pause())
        }
      }, {
        keys: [38],
        action: function(e) {
          (e.container.querySelector("." + y.classPrefix + "volume-button>button").matches(":focus") || e.container.querySelector("." + y.classPrefix + "volume-slider").matches(":focus")) && (e.container.querySelector("." + y.classPrefix + "volume-slider").style.display = ""), e.isVideo && (e.showControls(), e.startControlsTimer());
          var t = Math.min(e.volume + .1, 1);
          e.setVolume(t), t > 0 && e.setMuted(!1)
        }
      }, {
        keys: [40],
        action: function(e) {
          (e.container.querySelector("." + y.classPrefix + "volume-button>button").matches(":focus") || e.container.querySelector("." + y.classPrefix + "volume-slider").matches(":focus")) && (e.container.querySelector("." + y.classPrefix + "volume-slider").style.display = ""), e.isVideo && (e.showControls(), e.startControlsTimer());
          var t = Math.max(e.volume - .1, 0);
          e.setVolume(t), t <= .1 && e.setMuted(!0)
        }
      }, {
        keys: [37, 227],
        action: function(e) {
          if (!isNaN(e.duration) && e.duration > 0) {
            e.isVideo && (e.showControls(), e.startControlsTimer());
            var t = Math.max(e.currentTime - e.options.defaultSeekBackwardInterval(e), 0);
            e.setCurrentTime(t)
          }
        }
      }, {
        keys: [39, 228],
        action: function(e) {
          if (!isNaN(e.duration) && e.duration > 0) {
            e.isVideo && (e.showControls(), e.startControlsTimer());
            var t = Math.min(e.currentTime + e.options.defaultSeekForwardInterval(e), e.duration);
            e.setCurrentTime(t)
          }
        }
      }, {
        keys: [70],
        action: function(e, t, i, n) {
          n.ctrlKey || void 0 !== e.enterFullScreen && (e.isFullScreen ? e.exitFullScreen() : e.enterFullScreen())
        }
      }, {
        keys: [77],
        action: function(e) {
          e.container.querySelector("." + y.classPrefix + "volume-slider").style.display = "", e.isVideo && (e.showControls(), e.startControlsTimer()), e.media.muted ? e.setMuted(!1) : e.setMuted(!0)
        }
      }]
    };
    c.default.MepDefaults = y;
    var b = function() {
      function e(t, i) {
        o(this, e);
        var n = this,
          s = "string" == typeof t ? l.default.getElementById(t) : t;
        if (!(n instanceof e)) return new e(s, i);
        if (n.node = n.media = s, n.node) {
          if (n.media.player) return n.media.player;
          if (n.hasFocus = !1, n.controlsAreVisible = !0, n.controlsEnabled = !0, n.controlsTimer = null, n.currentMediaTime = 0, n.proxy = null, void 0 === i) {
            var a = n.node.getAttribute("data-mejsoptions");
            i = a ? JSON.parse(a) : {}
          }
          n.options = Object.assign({}, y, i), n.options.loop && !n.media.getAttribute("loop") ? (n.media.loop = !0, n.node.loop = !0) : n.media.loop && (n.options.loop = !0), n.options.timeFormat || (n.options.timeFormat = "mm:ss", n.options.alwaysShowHours && (n.options.timeFormat = "hh:mm:ss"), n.options.showTimecodeFrameCount && (n.options.timeFormat += ":ff")), (0, m.calculateTimeFormat)(0, n.options, n.options.framesPerSecond || 25), n.id = "mep_" + c.default.mepIndex++, c.default.players[n.id] = n;
          var r = Object.assign({}, n.options, {
              success: function(e, t) {
                n._meReady(e, t)
              },
              error: function(e) {
                n._handleError(e)
              }
            }),
            u = n.node.tagName.toLowerCase();
          if (n.isDynamic = "audio" !== u && "video" !== u && "iframe" !== u, n.isVideo = n.isDynamic ? n.options.isVideo : "audio" !== u && n.options.isVideo, n.mediaFiles = null, n.trackFiles = null, f.IS_IPAD && n.options.iPadUseNativeControls || f.IS_IPHONE && n.options.iPhoneUseNativeControls) n.node.setAttribute("controls", !0), f.IS_IPAD && n.node.getAttribute("autoplay") && n.play();
          else if (!(n.isVideo || !n.isVideo && n.options.features.length) || f.IS_ANDROID && n.options.AndroidUseNativeControls) n.isVideo || n.options.features.length || (n.node.style.display = "none");
          else {
            n.node.removeAttribute("controls");
            var b = n.isVideo ? h.default.t("mejs.video-player") : h.default.t("mejs.audio-player"),
              C = l.default.createElement("span");
            if (C.className = n.options.classPrefix + "offscreen", C.innerText = b, n.media.parentNode.insertBefore(C, n.media), n.container = l.default.createElement("div"), n.container.id = n.id, n.container.className = n.options.classPrefix + "container " + n.options.classPrefix + "container-keyboard-inactive " + n.media.className, n.container.tabIndex = 0, n.container.setAttribute("role", "application"), n.container.setAttribute("aria-label", b), n.container.innerHTML = '<div class="' + n.options.classPrefix + 'inner"><div class="' + n.options.classPrefix + 'mediaelement"></div><div class="' + n.options.classPrefix + 'layers"></div><div class="' + n.options.classPrefix + 'controls"></div></div>', n.container.addEventListener("focus", function(e) {
                if (!n.controlsAreVisible && !n.hasFocus && n.controlsEnabled) {
                  n.showControls(!0);
                  var t = (0, p.isNodeAfter)(e.relatedTarget, n.container) ? "." + n.options.classPrefix + "controls ." + n.options.classPrefix + "button:last-child > button" : "." + n.options.classPrefix + "playpause-button > button";
                  n.container.querySelector(t).focus()
                }
              }), n.node.parentNode.insertBefore(n.container, n.node), n.options.features.length || (n.container.style.background = "transparent", n.container.querySelector("." + n.options.classPrefix + "controls").style.display = "none"), n.isVideo && "fill" === n.options.stretching && !v.hasClass(n.container.parentNode, n.options.classPrefix + "fill-container")) {
              n.outerContainer = n.media.parentNode;
              var x = l.default.createElement("div");
              x.className = n.options.classPrefix + "fill-container", n.container.parentNode.insertBefore(x, n.container), x.appendChild(n.container)
            }
            if (f.IS_ANDROID && v.addClass(n.container, n.options.classPrefix + "android"), f.IS_IOS && v.addClass(n.container, n.options.classPrefix + "ios"), f.IS_IPAD && v.addClass(n.container, n.options.classPrefix + "ipad"), f.IS_IPHONE && v.addClass(n.container, n.options.classPrefix + "iphone"), v.addClass(n.container, n.isVideo ? n.options.classPrefix + "video" : n.options.classPrefix + "audio"), f.IS_SAFARI && !f.IS_IOS) {
              v.addClass(n.container, n.options.classPrefix + "hide-cues");
              for (var w = n.node.cloneNode(), E = n.node.children, S = [], _ = [], T = 0, k = E.length; T < k; T++) {
                var D = E[T];
                ! function() {
                  switch (D.tagName.toLowerCase()) {
                    case "source":
                      var e = {};
                      Array.prototype.slice.call(D.attributes).forEach(function(t) {
                        e[t.name] = t.value
                      }), e.type = (0, g.formatType)(e.src, e.type), S.push(e);
                      break;
                    case "track":
                      D.mode = "hidden", _.push(D);
                      break;
                    default:
                      w.appendChild(D)
                  }
                }()
              }
              n.node.remove(), n.node = n.media = w, S.length && (n.mediaFiles = S), _.length && (n.trackFiles = _)
            }
            n.container.querySelector("." + n.options.classPrefix + "mediaelement").appendChild(n.node), n.media.player = n, n.controls = n.container.querySelector("." + n.options.classPrefix + "controls"), n.layers = n.container.querySelector("." + n.options.classPrefix + "layers");
            var I = n.isVideo ? "video" : "audio",
              H = I.substring(0, 1).toUpperCase() + I.substring(1);
            n.options[I + "Width"] > 0 || n.options[I + "Width"].toString().indexOf("%") > -1 ? n.width = n.options[I + "Width"] : "" !== n.node.style.width && null !== n.node.style.width ? n.width = n.node.style.width : n.node.getAttribute("width") ? n.width = n.node.getAttribute("width") : n.width = n.options["default" + H + "Width"], n.options[I + "Height"] > 0 || n.options[I + "Height"].toString().indexOf("%") > -1 ? n.height = n.options[I + "Height"] : "" !== n.node.style.height && null !== n.node.style.height ? n.height = n.node.style.height : n.node.getAttribute("height") ? n.height = n.node.getAttribute("height") : n.height = n.options["default" + H + "Height"], n.initialAspectRatio = n.height >= n.width ? n.width / n.height : n.height / n.width, n.setPlayerSize(n.width, n.height), r.pluginWidth = n.width, r.pluginHeight = n.height
          }
          if (c.default.MepDefaults = r, new d.default(n.media, r, n.mediaFiles), void 0 !== n.container && n.options.features.length && n.controlsAreVisible && !n.options.hideVideoControlsOnLoad) {
            var M = (0, p.createEvent)("controlsshown", n.container);
            n.container.dispatchEvent(M)
          }
          return n
        }
      }
      return a(e, [{
        key: "showControls",
        value: function(e) {
          var t = this;
          if (e = void 0 === e || e, !t.controlsAreVisible && t.isVideo) {
            if (e) ! function() {
              v.fadeIn(t.controls, 200, function() {
                v.removeClass(t.controls, t.options.classPrefix + "offscreen");
                var e = (0, p.createEvent)("controlsshown", t.container);
                t.container.dispatchEvent(e)
              });
              for (var e = t.container.querySelectorAll("." + t.options.classPrefix + "control"), i = 0, n = e.length; i < n; i++) ! function(i, n) {
                v.fadeIn(e[i], 200, function() {
                  v.removeClass(e[i], t.options.classPrefix + "offscreen")
                })
              }(i)
            }();
            else {
              v.removeClass(t.controls, t.options.classPrefix + "offscreen"), t.controls.style.display = "", t.controls.style.opacity = 1;
              for (var i = t.container.querySelectorAll("." + t.options.classPrefix + "control"), n = 0, o = i.length; n < o; n++) v.removeClass(i[n], t.options.classPrefix + "offscreen"), i[n].style.display = "";
              var s = (0, p.createEvent)("controlsshown", t.container);
              t.container.dispatchEvent(s)
            }
            t.controlsAreVisible = !0, t.setControlsSize()
          }
        }
      }, {
        key: "hideControls",
        value: function(e, t) {
          var i = this;
          if (e = void 0 === e || e, !0 === t || !(!i.controlsAreVisible || i.options.alwaysShowControls || i.paused && 4 === i.readyState && (!i.options.hideVideoControlsOnLoad && i.currentTime <= 0 || !i.options.hideVideoControlsOnPause && i.currentTime > 0) || i.isVideo && !i.options.hideVideoControlsOnLoad && !i.readyState || i.ended)) {
            if (e) ! function() {
              v.fadeOut(i.controls, 200, function() {
                v.addClass(i.controls, i.options.classPrefix + "offscreen"), i.controls.style.display = "";
                var e = (0, p.createEvent)("controlshidden", i.container);
                i.container.dispatchEvent(e)
              });
              for (var e = i.container.querySelectorAll("." + i.options.classPrefix + "control"), t = 0, n = e.length; t < n; t++) ! function(t, n) {
                v.fadeOut(e[t], 200, function() {
                  v.addClass(e[t], i.options.classPrefix + "offscreen"), e[t].style.display = ""
                })
              }(t)
            }();
            else {
              v.addClass(i.controls, i.options.classPrefix + "offscreen"), i.controls.style.display = "", i.controls.style.opacity = 0;
              for (var n = i.container.querySelectorAll("." + i.options.classPrefix + "control"), o = 0, s = n.length; o < s; o++) v.addClass(n[o], i.options.classPrefix + "offscreen"), n[o].style.display = "";
              var a = (0, p.createEvent)("controlshidden", i.container);
              i.container.dispatchEvent(a)
            }
            i.controlsAreVisible = !1
          }
        }
      }, {
        key: "startControlsTimer",
        value: function(e) {
          var t = this;
          e = void 0 !== e ? e : t.options.controlsTimeoutDefault, t.killControlsTimer("start"), t.controlsTimer = setTimeout(function() {
            t.hideControls(), t.killControlsTimer("hide")
          }, e)
        }
      }, {
        key: "killControlsTimer",
        value: function() {
          var e = this;
          null !== e.controlsTimer && (clearTimeout(e.controlsTimer), delete e.controlsTimer, e.controlsTimer = null)
        }
      }, {
        key: "disableControls",
        value: function() {
          var e = this;
          e.killControlsTimer(), e.controlsEnabled = !1, e.hideControls(!1, !0)
        }
      }, {
        key: "enableControls",
        value: function() {
          var e = this;
          e.controlsEnabled = !0, e.showControls(!1)
        }
      }, {
        key: "_setDefaultPlayer",
        value: function() {
          var e = this;
          e.proxy && e.proxy.pause(), e.proxy = new u.default(e), e.media.addEventListener("loadedmetadata", function() {
            e.getCurrentTime() > 0 && (e.setCurrentTime(e.currentMediaTime), f.IS_IOS || f.IS_ANDROID || e.play())
          })
        }
      }, {
        key: "_meReady",
        value: function(e, t) {
          var i = this,
            n = t.getAttribute("autoplay"),
            o = !(void 0 === n || null === n || "false" === n),
            s = null !== e.rendererName && /(native|html5)/i.test(i.media.rendererName);
          if (i.controls && i.enableControls(), i.container && i.container.querySelector("." + i.options.classPrefix + "overlay-play") && (i.container.querySelector("." + i.options.classPrefix + "overlay-play").style.display = ""), !i.created) {
            if (i.created = !0, i.media = e, i.domNode = t, !(f.IS_ANDROID && i.options.AndroidUseNativeControls || f.IS_IPAD && i.options.iPadUseNativeControls || f.IS_IPHONE && i.options.iPhoneUseNativeControls)) {
              if (!i.isVideo && !i.options.features.length) return o && s && i.play(), void(i.options.success && ("string" == typeof i.options.success ? r.default[i.options.success](i.media, i.domNode, i) : i.options.success(i.media, i.domNode, i)));
              i.findTracks(), i.featurePosition = {};
              for (var a = 0, d = i.options.features.length; a < d; a++) {
                var u = i.options.features[a];
                if (i["build" + u]) try {
                  i["build" + u](i, i.controls, i.layers, i.media)
                } catch (e) {
                  console.error("error building " + u, e)
                }
              }
              i.buildposter(i, i.controls, i.layers, i.media), i.buildkeyboard(i, i.controls, i.layers, i.media), i.buildoverlays(i, i.controls, i.layers, i.media), i._setDefaultPlayer();
              var h = (0, p.createEvent)("controlsready", i.container);
              i.container.dispatchEvent(h), i.setPlayerSize(i.width, i.height), i.setControlsSize(), i.isVideo && (i.clickToPlayPauseCallback = function() {
                if (i.options.clickToPlayPause) {
                  var e = i.container.querySelector("." + i.options.classPrefix + "overlay-button"),
                    t = e.getAttribute("aria-pressed");
                  i.paused && t ? i.pause() : i.paused ? i.play() : i.pause(), e.setAttribute("aria-pressed", !t), i.container.focus()
                }
              }, i.createIframeLayer(), i.media.addEventListener("click", i.clickToPlayPauseCallback), !f.IS_ANDROID && !f.IS_IOS || i.options.alwaysShowControls ? (i.container.addEventListener("mouseenter", function() {
                i.controlsEnabled && (i.options.alwaysShowControls || (i.killControlsTimer("enter"), i.showControls(), i.startControlsTimer(i.options.controlsTimeoutMouseEnter)))
              }), i.container.addEventListener("mousemove", function() {
                i.controlsEnabled && (i.controlsAreVisible || i.showControls(), i.options.alwaysShowControls || i.startControlsTimer(i.options.controlsTimeoutMouseEnter))
              }), i.container.addEventListener("mouseleave", function() {
                i.controlsEnabled && (i.paused || i.options.alwaysShowControls || i.startControlsTimer(i.options.controlsTimeoutMouseLeave))
              })) : i.node.addEventListener("touchstart", function() {
                i.controlsAreVisible ? i.hideControls(!1) : i.controlsEnabled && i.showControls(!1)
              }), i.options.hideVideoControlsOnLoad && i.hideControls(!1), i.options.enableAutosize && i.media.addEventListener("loadedmetadata", function(e) {
                var t = void 0 !== e ? e.detail.target || e.target : i.media;
                i.options.videoHeight <= 0 && !i.domNode.getAttribute("height") && null !== t && !isNaN(t.videoHeight) && (i.setPlayerSize(t.videoWidth, t.videoHeight), i.setControlsSize(), i.media.setSize(t.videoWidth, t.videoHeight))
              })), i.media.addEventListener("play", function() {
                i.hasFocus = !0;
                for (var e in c.default.players)
                  if (c.default.players.hasOwnProperty(e)) {
                    var t = c.default.players[e];
                    t.id === i.id || !i.options.pauseOtherPlayers || t.paused || t.ended || (t.pause(), t.hasFocus = !1)
                  } f.IS_ANDROID || f.IS_IOS || i.options.alwaysShowControls || !i.isVideo || i.hideControls()
              }), i.media.addEventListener("ended", function() {
                if (i.options.autoRewind) try {
                  i.setCurrentTime(0), setTimeout(function() {
                    var e = i.container.querySelector("." + i.options.classPrefix + "overlay-loading");
                    e && e.parentNode && (e.parentNode.style.display = "none")
                  }, 20)
                } catch (e) {}
                "function" == typeof i.media.renderer.stop ? i.media.renderer.stop() : i.pause(), i.setProgressRail && i.setProgressRail(), i.setCurrentRail && i.setCurrentRail(), i.options.loop ? i.play() : !i.options.alwaysShowControls && i.controlsEnabled && i.showControls()
              }), i.media.addEventListener("loadedmetadata", function() {
                (0, m.calculateTimeFormat)(i.getDuration(), i.options, i.options.framesPerSecond || 25), i.updateDuration && i.updateDuration(), i.updateCurrent && i.updateCurrent(), i.isFullScreen || (i.setPlayerSize(i.width, i.height), i.setControlsSize())
              });
              var g = null;
              i.media.addEventListener("timeupdate", function() {
                isNaN(i.getDuration()) || g === i.getDuration() || (g = i.getDuration(), (0, m.calculateTimeFormat)(g, i.options, i.options.framesPerSecond || 25), i.updateDuration && i.updateDuration(), i.updateCurrent && i.updateCurrent(), i.setControlsSize())
              }), i.container.addEventListener("click", function(e) {
                v.addClass(e.currentTarget, i.options.classPrefix + "container-keyboard-inactive")
              }), i.container.addEventListener("focusin", function(e) {
                v.removeClass(e.currentTarget, i.options.classPrefix + "container-keyboard-inactive"), !i.isVideo || f.IS_ANDROID || f.IS_IOS || !i.controlsEnabled || i.options.alwaysShowControls || (i.killControlsTimer("enter"), i.showControls(), i.startControlsTimer(i.options.controlsTimeoutMouseEnter))
              }), i.container.addEventListener("focusout", function(e) {
                setTimeout(function() {
                  e.relatedTarget && i.keyboardAction && !e.relatedTarget.closest("." + i.options.classPrefix + "container") && (i.keyboardAction = !1, !i.isVideo || i.options.alwaysShowControls || i.paused || i.startControlsTimer(i.options.controlsTimeoutMouseLeave))
                }, 0)
              }), setTimeout(function() {
                i.setPlayerSize(i.width, i.height), i.setControlsSize()
              }, 0), i.globalResizeCallback = function() {
                i.isFullScreen || f.HAS_TRUE_NATIVE_FULLSCREEN && l.default.webkitIsFullScreen || i.setPlayerSize(i.width, i.height), i.setControlsSize()
              }, i.globalBind("resize", i.globalResizeCallback)
            }
            o && s && i.play(), i.options.success && ("string" == typeof i.options.success ? r.default[i.options.success](i.media, i.domNode, i) : i.options.success(i.media, i.domNode, i))
          }
        }
      }, {
        key: "_handleError",
        value: function(e, t, i) {
          var n = this,
            o = n.layers.querySelector("." + n.options.classPrefix + "overlay-play");
          o && (o.style.display = "none"), n.options.error && n.options.error(e, t, i), n.container.querySelector("." + n.options.classPrefix + "cannotplay") && n.container.querySelector("." + n.options.classPrefix + "cannotplay").remove();
          var s = l.default.createElement("div");
          s.className = n.options.classPrefix + "cannotplay", s.style.width = "100%", s.style.height = "100%";
          var a = n.options.customError;
          if (!a) {
            var r = n.media.originalNode.getAttribute("poster");
            if (r && (a += '<img src="' + r + '" width="100%" height="100%" alt="' + c.default.i18n.t("mejs.download-file") + '">'), e.message && (a += "<p>" + e.message + "</p>"), e.urls)
              for (var d = 0, u = e.urls.length; d < u; d++) {
                var h = e.urls[d];
                a += '<a href="' + h.src + '" data-type="' + h.type + '"><span>' + c.default.i18n.t("mejs.download-file") + ": " + h.src + "</span></a>"
              }
          }
          a && n.layers.querySelector("." + n.options.classPrefix + "overlay-error") && (s.innerHTML = a, n.layers.querySelector("." + n.options.classPrefix + "overlay-error").innerHTML = s.outerHTML, n.layers.querySelector("." + n.options.classPrefix + "overlay-error").parentNode.style.display = "block")
        }
      }, {
        key: "setPlayerSize",
        value: function(e, t) {
          var i = this;
          if (!i.options.setDimensions) return !1;
          switch (void 0 !== e && (i.width = e), void 0 !== t && (i.height = t), i.options.stretching) {
            case "fill":
              i.isVideo ? i.setFillMode() : i.setDimensions(i.width, i.height);
              break;
            case "responsive":
              i.setResponsiveMode();
              break;
            case "none":
              i.setDimensions(i.width, i.height);
              break;
            default:
              !0 === i.hasFluidMode() ? i.setResponsiveMode() : i.setDimensions(i.width, i.height)
          }
        }
      }, {
        key: "hasFluidMode",
        value: function() {
          var e = this;
          return -1 !== e.height.toString().indexOf("%") || e.node && e.node.style.maxWidth && "none" !== e.node.style.maxWidth && e.node.style.maxWidth !== e.width || e.node && e.node.currentStyle && "100%" === e.node.currentStyle.maxWidth
        }
      }, {
        key: "setResponsiveMode",
        value: function() {
          var e = this,
            t = function() {
              for (var t = void 0, i = e.container; i;) {
                try {
                  if (f.IS_FIREFOX && "html" === i.tagName.toLowerCase() && r.default.self !== r.default.top && null !== r.default.frameElement) return r.default.frameElement;
                  t = i.parentElement
                } catch (e) {
                  t = i.parentElement
                }
                if (t && v.visible(t)) return t;
                i = t
              }
              return null
            }(),
            i = t ? getComputedStyle(t, null) : getComputedStyle(l.default.body, null),
            n = e.isVideo ? e.media.videoWidth && e.media.videoWidth > 0 ? e.media.videoWidth : e.node.getAttribute("width") ? e.node.getAttribute("width") : e.options.defaultVideoWidth : e.options.defaultAudioWidth,
            o = e.isVideo ? e.media.videoHeight && e.media.videoHeight > 0 ? e.media.videoHeight : e.node.getAttribute("height") ? e.node.getAttribute("height") : e.options.defaultVideoHeight : e.options.defaultAudioHeight,
            s = function() {
              var t = 1;
              return e.isVideo ? (t = e.media.videoWidth && e.media.videoWidth > 0 && e.media.videoHeight && e.media.videoHeight > 0 ? e.height >= e.width ? e.media.videoWidth / e.media.videoHeight : e.media.videoHeight / e.media.videoWidth : e.initialAspectRatio, (isNaN(t) || t < .01 || t > 100) && (t = 1), t) : t
            }(),
            a = parseFloat(i.height),
            c = void 0,
            d = parseFloat(i.width);
          if (c = e.isVideo ? "100%" === e.height ? parseFloat(d * o / n, 10) : e.height >= e.width ? parseFloat(d / s, 10) : parseFloat(d * s, 10) : o, isNaN(c) && (c = a), e.container.parentNode.length > 0 && "body" === e.container.parentNode.tagName.toLowerCase() && (d = r.default.innerWidth || l.default.documentElement.clientWidth || l.default.body.clientWidth, c = r.default.innerHeight || l.default.documentElement.clientHeight || l.default.body.clientHeight), c && d) {
            e.container.style.width = d + "px", e.container.style.height = c + "px", e.node.style.width = "100%", e.node.style.height = "100%", e.isVideo && e.media.setSize && e.media.setSize(d, c);
            for (var u = e.layers.children, h = 0, p = u.length; h < p; h++) u[h].style.width = "100%", u[h].style.height = "100%"
          }
        }
      }, {
        key: "setFillMode",
        value: function() {
          var e = this,
            t = void 0,
            i = !1;
          try {
            r.default.self !== r.default.top ? (i = !0, t = r.default.frameElement) : t = e.outerContainer
          } catch (i) {
            t = e.outerContainer
          }
          var n = getComputedStyle(t);
          "none" !== e.node.style.height && e.node.style.height !== e.height && (e.node.style.height = "auto"), "none" !== e.node.style.maxWidth && e.node.style.maxWidth !== e.width && (e.node.style.maxWidth = "none"), "none" !== e.node.style.maxHeight && e.node.style.maxHeight !== e.height && (e.node.style.maxHeight = "none"),
            e.node.currentStyle && ("100%" === e.node.currentStyle.height && (e.node.currentStyle.height = "auto"), "100%" === e.node.currentStyle.maxWidth && (e.node.currentStyle.maxWidth = "none"), "100%" === e.node.currentStyle.maxHeight && (e.node.currentStyle.maxHeight = "none")), i || parseFloat(n.width) || (t.style.width = e.media.offsetWidth + "px"), i || parseFloat(n.height) || (t.style.height = e.media.offsetHeight + "px"), n = getComputedStyle(t);
          var o = parseFloat(n.width),
            s = parseFloat(n.height);
          e.setDimensions("100%", "100%");
          var a = e.container.querySelector("." + e.options.classPrefix + "poster>img");
          a && (a.style.display = "");
          for (var l = e.container.querySelectorAll("object, embed, iframe, video"), c = e.height, d = e.width, u = o, h = c * o / d, f = d * s / c, p = s, m = f > o == 0, g = m ? Math.floor(u) : Math.floor(f), v = m ? Math.floor(h) : Math.floor(p), y = m ? o + "px" : g + "px", b = m ? v + "px" : s + "px", C = 0, x = l.length; C < x; C++) l[C].style.height = b, l[C].style.width = y, e.media.setSize && e.media.setSize(y, b), l[C].style.marginLeft = Math.floor((o - g) / 2) + "px", l[C].style.marginTop = 0
        }
      }, {
        key: "setDimensions",
        value: function(e, t) {
          var i = this;
          e = (0, p.isString)(e) && e.indexOf("%") > -1 ? e : parseFloat(e) + "px", t = (0, p.isString)(t) && t.indexOf("%") > -1 ? t : parseFloat(t) + "px", i.container.style.width = e, i.container.style.height = t;
          for (var n = i.layers.children, o = 0, s = n.length; o < s; o++) n[o].style.width = e, n[o].style.height = t
        }
      }, {
        key: "setControlsSize",
        value: function() {
          var e = this;
          if (v.visible(e.container))
            if (e.rail && v.visible(e.rail)) {
              for (var t = e.total ? getComputedStyle(e.total, null) : null, i = t ? parseFloat(t.marginLeft) + parseFloat(t.marginRight) : 0, n = getComputedStyle(e.rail), o = parseFloat(n.marginLeft) + parseFloat(n.marginRight), s = 0, a = v.siblings(e.rail, function(t) {
                  return t !== e.rail
                }), r = a.length, l = 0; l < r; l++) s += a[l].offsetWidth;
              s += i + (0 === i ? 2 * o : o) + 1, e.container.style.minWidth = s + "px";
              var c = (0, p.createEvent)("controlsresize", e.container);
              e.container.dispatchEvent(c)
            } else {
              for (var d = e.controls.children, u = 0, h = 0, f = d.length; h < f; h++) u += d[h].offsetWidth;
              e.container.style.minWidth = u + "px"
            }
        }
      }, {
        key: "addControlElement",
        value: function(e, t) {
          var i = this;
          if (void 0 !== i.featurePosition[t]) {
            var n = i.controls.children[i.featurePosition[t] - 1];
            n.parentNode.insertBefore(e, n.nextSibling)
          } else {
            i.controls.appendChild(e);
            for (var o = i.controls.children, s = 0, a = o.length; s < a; s++)
              if (e === o[s]) {
                i.featurePosition[t] = s;
                break
              }
          }
        }
      }, {
        key: "createIframeLayer",
        value: function() {
          var e = this;
          if (e.isVideo && null !== e.media.rendererName && e.media.rendererName.indexOf("iframe") > -1 && !l.default.getElementById(e.media.id + "-iframe-overlay")) {
            var t = l.default.createElement("div"),
              i = l.default.getElementById(e.media.id + "_" + e.media.rendererName);
            t.id = e.media.id + "-iframe-overlay", t.className = e.options.classPrefix + "iframe-overlay", t.addEventListener("click", function(t) {
              e.options.clickToPlayPause && (e.paused ? e.play() : e.pause(), t.preventDefault(), t.stopPropagation())
            }), i.parentNode.insertBefore(t, i)
          }
        }
      }, {
        key: "resetSize",
        value: function() {
          var e = this;
          setTimeout(function() {
            e.setPlayerSize(e.width, e.height), e.setControlsSize()
          }, 50)
        }
      }, {
        key: "setPoster",
        value: function(e) {
          var t = this,
            i = t.container.querySelector("." + t.options.classPrefix + "poster");
          i || ((i = l.default.createElement("div")).className = t.options.classPrefix + "poster " + t.options.classPrefix + "layer", t.layers.appendChild(i));
          var n = i.querySelector("img");
          !n && e && ((n = l.default.createElement("img")).className = t.options.classPrefix + "poster-img", n.width = "100%", n.height = "100%", i.style.display = "", i.appendChild(n)), e ? (n.setAttribute("src", e), i.style.backgroundImage = 'url("' + e + '")', i.style.display = "") : n ? (i.style.backgroundImage = "none", i.style.display = "none", n.remove()) : i.style.display = "none"
        }
      }, {
        key: "changeSkin",
        value: function(e) {
          var t = this;
          t.container.className = t.options.classPrefix + "container " + e, t.setPlayerSize(t.width, t.height), t.setControlsSize()
        }
      }, {
        key: "globalBind",
        value: function(e, t) {
          var i = this,
            n = i.node ? i.node.ownerDocument : l.default;
          if ((e = (0, p.splitEvents)(e, i.id)).d)
            for (var o = e.d.split(" "), s = 0, a = o.length; s < a; s++) o[s].split(".").reduce(function(e, i) {
              return n.addEventListener(i, t, !1), i
            }, "");
          if (e.w)
            for (var c = e.w.split(" "), d = 0, u = c.length; d < u; d++) c[d].split(".").reduce(function(e, i) {
              return r.default.addEventListener(i, t, !1), i
            }, "")
        }
      }, {
        key: "globalUnbind",
        value: function(e, t) {
          var i = this,
            n = i.node ? i.node.ownerDocument : l.default;
          if ((e = (0, p.splitEvents)(e, i.id)).d)
            for (var o = e.d.split(" "), s = 0, a = o.length; s < a; s++) o[s].split(".").reduce(function(e, i) {
              return n.removeEventListener(i, t, !1), i
            }, "");
          if (e.w)
            for (var c = e.w.split(" "), d = 0, u = c.length; d < u; d++) c[d].split(".").reduce(function(e, i) {
              return r.default.removeEventListener(i, t, !1), i
            }, "")
        }
      }, {
        key: "buildposter",
        value: function(e, t, i, n) {
          var o = this,
            s = l.default.createElement("div");
          s.className = o.options.classPrefix + "poster " + o.options.classPrefix + "layer", i.appendChild(s);
          var a = n.originalNode.getAttribute("poster");
          a && f.IS_IOS && n.originalNode.removeAttribute("poster"), "" !== e.options.poster && (a = e.options.poster), a ? o.setPoster(a) : null !== o.media.renderer && "function" == typeof o.media.renderer.getPosterUrl ? o.setPoster(o.media.renderer.getPosterUrl()) : s.style.display = "none", n.addEventListener("play", function() {
            s.style.display = "none"
          }), n.addEventListener("playing", function() {
            s.style.display = "none"
          }), e.options.showPosterWhenEnded && e.options.autoRewind && n.addEventListener("ended", function() {
            s.style.display = ""
          }), n.addEventListener("error", function() {
            s.style.display = "none"
          }), e.options.showPosterWhenPaused && n.addEventListener("pause", function() {
            e.ended || (s.style.display = "")
          })
        }
      }, {
        key: "buildoverlays",
        value: function(e, t, i, n) {
          if (e.isVideo) {
            var o = this,
              s = l.default.createElement("div"),
              a = l.default.createElement("div"),
              r = l.default.createElement("div"),
              c = t.querySelector("." + o.options.classPrefix + "time-buffering");
            s.style.display = "none", s.className = o.options.classPrefix + "overlay " + o.options.classPrefix + "layer", s.innerHTML = '<div class="' + o.options.classPrefix + 'overlay-loading"><span class="' + o.options.classPrefix + 'overlay-loading-bg-img"></span></div>', i.appendChild(s), a.style.display = "none", a.className = o.options.classPrefix + "overlay " + o.options.classPrefix + "layer", a.innerHTML = '<div class="' + o.options.classPrefix + 'overlay-error"></div>', i.appendChild(a), r.className = o.options.classPrefix + "overlay " + o.options.classPrefix + "layer " + o.options.classPrefix + "overlay-play", r.innerHTML = '<div class="' + o.options.classPrefix + 'overlay-button" role="button" tabindex="0" aria-label="' + h.default.t("mejs.play") + '" aria-pressed="false"></div>', r.addEventListener("click", function() {
              if (o.options.clickToPlayPause) {
                var e = o.container.querySelector("." + o.options.classPrefix + "overlay-button"),
                  t = e.getAttribute("aria-pressed");
                o.paused ? o.play() : o.pause(), e.setAttribute("aria-pressed", !!t), o.container.focus()
              }
            }), r.addEventListener("keydown", function(e) {
              var t = e.keyCode || e.which || 0;
              if (13 === t || f.IS_FIREFOX && 32 === t) {
                var i = (0, p.createEvent)("click", r);
                return r.dispatchEvent(i), !1
              }
            }), i.appendChild(r), null !== o.media.rendererName && (/(youtube|facebook)/i.test(o.media.rendererName) && !(o.media.originalNode.getAttribute("poster") || e.options.poster || "function" == typeof o.media.renderer.getPosterUrl && o.media.renderer.getPosterUrl()) || f.IS_STOCK_ANDROID) && (r.style.display = "none");
            var d = !1;
            n.addEventListener("play", function() {
              r.style.display = "none", s.style.display = "none", null !== c && (c.style.display = "none"), a.style.display = "none", d = !1
            }), n.addEventListener("playing", function() {
              r.style.display = "none", s.style.display = "none", null !== c && (c.style.display = "none"), a.style.display = "none", d = !1
            }), n.addEventListener("seeking", function() {
              r.style.display = "none", s.style.display = "", null !== c && (c.style.display = ""), d = !1
            }), n.addEventListener("seeked", function() {
              r.style.display = o.paused && !f.IS_STOCK_ANDROID ? "" : "none", s.style.display = "none", null !== c && (c.style.display = "none"), d = !1
            }), n.addEventListener("pause", function() {
              s.style.display = "none", f.IS_STOCK_ANDROID || d || (r.style.display = ""), null !== c && (c.style.display = "none"), d = !1
            }), n.addEventListener("waiting", function() {
              s.style.display = "", null !== c && (c.style.display = ""), d = !1
            }), n.addEventListener("loadeddata", function() {
              s.style.display = "", null !== c && (c.style.display = ""), f.IS_ANDROID && (n.canplayTimeout = setTimeout(function() {
                if (l.default.createEvent) {
                  var e = l.default.createEvent("HTMLEvents");
                  return e.initEvent("canplay", !0, !0), n.dispatchEvent(e)
                }
              }, 300)), d = !1
            }), n.addEventListener("canplay", function() {
              s.style.display = "none", null !== c && (c.style.display = "none"), clearTimeout(n.canplayTimeout), d = !1
            }), n.addEventListener("error", function(e) {
              o._handleError(e, o.media, o.node), s.style.display = "none", r.style.display = "none", null !== c && (c.style.display = "none"), d = !0
            }), n.addEventListener("keydown", function(t) {
              o.onkeydown(e, n, t), d = !1
            })
          }
        }
      }, {
        key: "buildkeyboard",
        value: function(e, t, i, n) {
          var o = this;
          o.container.addEventListener("keydown", function() {
            o.keyboardAction = !0
          }), o.globalKeydownCallback = function(t) {
            var i = l.default.activeElement.closest("." + o.options.classPrefix + "container"),
              s = o.media.closest("." + o.options.classPrefix + "container");
            return o.hasFocus = !(!i || !s || i.id !== s.id), o.onkeydown(e, n, t)
          }, o.globalClickCallback = function(e) {
            o.hasFocus = !!e.target.closest("." + o.options.classPrefix + "container")
          }, o.globalBind("keydown", o.globalKeydownCallback), o.globalBind("click", o.globalClickCallback)
        }
      }, {
        key: "onkeydown",
        value: function(e, t, i) {
          if (e.hasFocus && e.options.enableKeyboard)
            for (var n = 0, o = e.options.keyActions.length; n < o; n++)
              for (var s = e.options.keyActions[n], a = 0, r = s.keys.length; a < r; a++) i.keyCode === s.keys[a] && (s.action(e, t, i.keyCode, i), i.preventDefault(), i.stopPropagation());
          return !0
        }
      }, {
        key: "play",
        value: function() {
          this.proxy.play()
        }
      }, {
        key: "pause",
        value: function() {
          this.proxy.pause()
        }
      }, {
        key: "load",
        value: function() {
          this.proxy.load()
        }
      }, {
        key: "setCurrentTime",
        value: function(e) {
          this.proxy.setCurrentTime(e)
        }
      }, {
        key: "getCurrentTime",
        value: function() {
          return this.proxy.currentTime
        }
      }, {
        key: "getDuration",
        value: function() {
          return this.proxy.duration
        }
      }, {
        key: "setVolume",
        value: function(e) {
          this.proxy.volume = e
        }
      }, {
        key: "getVolume",
        value: function() {
          return this.proxy.getVolume()
        }
      }, {
        key: "setMuted",
        value: function(e) {
          this.proxy.setMuted(e)
        }
      }, {
        key: "setSrc",
        value: function(e) {
          this.controlsEnabled || this.enableControls(), this.proxy.setSrc(e)
        }
      }, {
        key: "getSrc",
        value: function() {
          return this.proxy.getSrc()
        }
      }, {
        key: "canPlayType",
        value: function(e) {
          return this.proxy.canPlayType(e)
        }
      }, {
        key: "remove",
        value: function() {
          var e = this,
            t = e.media.rendererName,
            i = e.media.originalNode.src;
          for (var n in e.options.features) {
            var o = e.options.features[n];
            if (e["clean" + o]) try {
              e["clean" + o](e, e.layers, e.controls, e.media)
            } catch (e) {
              console.error("error cleaning " + o, e)
            }
          }
          var a = e.node.getAttribute("width"),
            r = e.node.getAttribute("height");
          a ? -1 === a.indexOf("%") && (a += "px") : a = "auto", r ? -1 === r.indexOf("%") && (r += "px") : r = "auto", e.node.style.width = a, e.node.style.height = r, e.isDynamic ? e.container.parentNode.insertBefore(e.node, e.container) : function() {
            e.node.setAttribute("controls", !0), e.node.setAttribute("id", e.node.getAttribute("id").replace("_" + t, "").replace("_from_mejs", ""));
            var n = e.container.querySelector("." + e.options.classPrefix + "poster>img");
            n && e.node.setAttribute("id", n.src), delete e.node.autoplay, "" !== e.media.canPlayType((0, g.getTypeFromFile)(i)) && e.node.setAttribute("src", i), ~t.indexOf("iframe") && l.default.getElementById(e.media.id + "-iframe-overlay").remove();
            var o = e.node.cloneNode();
            if (o.style.display = "", e.container.parentNode.insertBefore(o, e.container), e.node.remove(), e.mediaFiles)
              for (var s = 0, a = e.mediaFiles.length; s < a; s++) {
                var r = l.default.createElement("source");
                r.setAttribute("src", e.mediaFiles[s].src), r.setAttribute("type", e.mediaFiles[s].type), o.appendChild(r)
              }
            if (e.trackFiles)
              for (var c = 0, d = e.trackFiles.length; c < d; c++) ! function(t, i) {
                var n = e.trackFiles[t],
                  s = l.default.createElement("track");
                s.kind = n.kind, s.label = n.label, s.srclang = n.srclang, s.src = n.src, o.appendChild(s), s.addEventListener("load", function() {
                  this.mode = "showing", o.textTracks[t].mode = "showing"
                })
              }(c);
            delete e.node, delete e.mediaFiles, delete e.trackFiles
          }(), "function" == typeof e.media.renderer.destroy && e.media.renderer.destroy(), delete c.default.players[e.id], "object" === s(e.container) && (e.container.parentNode.querySelector("." + e.options.classPrefix + "offscreen").remove(), e.container.remove()), e.globalUnbind("resize", e.globalResizeCallback), e.globalUnbind("keydown", e.globalKeydownCallback), e.globalUnbind("click", e.globalClickCallback), delete e.media.player
        }
      }, {
        key: "paused",
        get: function() {
          return this.proxy.paused
        }
      }, {
        key: "muted",
        get: function() {
          return this.proxy.muted
        },
        set: function(e) {
          this.setMuted(e)
        }
      }, {
        key: "ended",
        get: function() {
          return this.proxy.ended
        }
      }, {
        key: "readyState",
        get: function() {
          return this.proxy.readyState
        }
      }, {
        key: "currentTime",
        set: function(e) {
          this.setCurrentTime(e)
        },
        get: function() {
          return this.getCurrentTime()
        }
      }, {
        key: "duration",
        get: function() {
          return this.getDuration()
        }
      }, {
        key: "volume",
        set: function(e) {
          this.setVolume(e)
        },
        get: function() {
          return this.getVolume()
        }
      }, {
        key: "src",
        set: function(e) {
          this.setSrc(e)
        },
        get: function() {
          return this.getSrc()
        }
      }]), e
    }();
    r.default.MediaElementPlayer = b, i.default = b
  }, {
    17: 17,
    2: 2,
    25: 25,
    26: 26,
    27: 27,
    28: 28,
    3: 3,
    30: 30,
    5: 5,
    6: 6,
    7: 7
  }],
  17: [function(e, t, i) {
    "use strict";

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    var o = function() {
        function e(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, i, n) {
          return i && e(t.prototype, i), n && e(t, n), t
        }
      }(),
      s = function(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(e(3)),
      a = function() {
        function e(t) {
          return n(this, e), this.media = t.media, this.isVideo = t.isVideo, this.classPrefix = t.options.classPrefix, this.createIframeLayer = function() {
            return t.createIframeLayer()
          }, this.setPoster = function(e) {
            return t.setPoster(e)
          }, this
        }
        return o(e, [{
          key: "play",
          value: function() {
            this.media.play()
          }
        }, {
          key: "pause",
          value: function() {
            this.media.pause()
          }
        }, {
          key: "load",
          value: function() {
            var e = this;
            e.isLoaded || e.media.load(), e.isLoaded = !0
          }
        }, {
          key: "setCurrentTime",
          value: function(e) {
            this.media.setCurrentTime(e)
          }
        }, {
          key: "getCurrentTime",
          value: function() {
            return this.media.currentTime
          }
        }, {
          key: "getDuration",
          value: function() {
            return this.media.getDuration()
          }
        }, {
          key: "setVolume",
          value: function(e) {
            this.media.setVolume(e)
          }
        }, {
          key: "getVolume",
          value: function() {
            return this.media.getVolume()
          }
        }, {
          key: "setMuted",
          value: function(e) {
            this.media.setMuted(e)
          }
        }, {
          key: "setSrc",
          value: function(e) {
            var t = this,
              i = document.getElementById(t.media.id + "-iframe-overlay");
            i && i.remove(), t.media.setSrc(e), t.createIframeLayer(), null !== t.media.renderer && "function" == typeof t.media.renderer.getPosterUrl && t.setPoster(t.media.renderer.getPosterUrl())
          }
        }, {
          key: "getSrc",
          value: function() {
            return this.media.getSrc()
          }
        }, {
          key: "canPlayType",
          value: function(e) {
            return this.media.canPlayType(e)
          }
        }, {
          key: "paused",
          get: function() {
            return this.media.paused
          }
        }, {
          key: "muted",
          set: function(e) {
            this.setMuted(e)
          },
          get: function() {
            return this.media.muted
          }
        }, {
          key: "ended",
          get: function() {
            return this.media.ended
          }
        }, {
          key: "readyState",
          get: function() {
            return this.media.readyState
          }
        }, {
          key: "currentTime",
          set: function(e) {
            this.setCurrentTime(e)
          },
          get: function() {
            return this.getCurrentTime()
          }
        }, {
          key: "duration",
          get: function() {
            return this.getDuration()
          }
        }, {
          key: "volume",
          set: function(e) {
            this.setVolume(e)
          },
          get: function() {
            return this.getVolume()
          }
        }, {
          key: "src",
          set: function(e) {
            this.setSrc(e)
          },
          get: function() {
            return this.getSrc()
          }
        }]), e
      }();
    i.default = a, s.default.DefaultPlayer = a
  }, {
    3: 3
  }],
  18: [function(e, t, i) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var o = n(e(3)),
      s = n(e(7)),
      a = n(e(16));
    "undefined" != typeof jQuery ? s.default.$ = o.default.jQuery = o.default.$ = jQuery : "undefined" != typeof Zepto ? s.default.$ = o.default.Zepto = o.default.$ = Zepto : "undefined" != typeof ender && (s.default.$ = o.default.ender = o.default.$ = ender),
      function(e) {
        void 0 !== e && (e.fn.mediaelementplayer = function(t) {
          return !1 === t ? this.each(function() {
            var t = e(this).data("mediaelementplayer");
            t && t.remove(), e(this).removeData("mediaelementplayer")
          }) : this.each(function() {
            e(this).data("mediaelementplayer", new a.default(this, t))
          }), this
        }, e(document).ready(function() {
          e("." + s.default.MepDefaults.classPrefix + "player").mediaelementplayer()
        }))
      }(s.default.$)
  }, {
    16: 16,
    3: 3,
    7: 7
  }],
  19: [function(e, t, i) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      s = n(e(3)),
      a = n(e(7)),
      r = e(8),
      l = e(27),
      c = e(28),
      d = e(25),
      u = e(26),
      h = {
        promise: null,
        load: function(e) {
          return "undefined" != typeof dashjs ? h.promise = new Promise(function(e) {
            e()
          }).then(function() {
            h._createPlayer(e)
          }) : (e.options.path = "string" == typeof e.options.path ? e.options.path : "https://cdn.dashjs.org/latest/dash.all.min.js", h.promise = h.promise || (0, u.loadScript)(e.options.path), h.promise.then(function() {
            h._createPlayer(e)
          })), h.promise
        },
        _createPlayer: function(e) {
          var t = dashjs.MediaPlayer().create();
          return s.default["__ready__" + e.id](t), t
        }
      },
      f = {
        name: "native_dash",
        options: {
          prefix: "native_dash",
          dash: {
            path: "https://cdn.dashjs.org/latest/dash.all.min.js",
            debug: !1,
            drm: {},
            robustnessLevel: ""
          }
        },
        canPlayType: function(e) {
          return d.HAS_MSE && ["application/dash+xml"].indexOf(e.toLowerCase()) > -1
        },
        create: function(e, t, i) {
          var n = e.originalNode,
            c = e.id + "_" + t.prefix,
            d = n.autoplay,
            u = n.children,
            f = null,
            p = null;
          n.removeAttribute("type");
          for (var m = 0, g = u.length; m < g; m++) u[m].removeAttribute("type");
          f = n.cloneNode(!0), t = Object.assign(t, e.options);
          for (var v = a.default.html5media.properties, y = a.default.html5media.events.concat(["click", "mouseover", "mouseout"]), b = function(t) {
              var i = (0, l.createEvent)(t.type, e);
              e.dispatchEvent(i)
            }, C = 0, x = v.length; C < x; C++) ! function(e) {
            var i = "" + e.substring(0, 1).toUpperCase() + e.substring(1);
            f["get" + i] = function() {
              return null !== p ? f[e] : null
            }, f["set" + i] = function(i) {
              if (-1 === a.default.html5media.readOnlyProperties.indexOf(e))
                if ("src" === e) {
                  var n = "object" === (void 0 === i ? "undefined" : o(i)) && i.src ? i.src : i;
                  if (f[e] = n, null !== p) {
                    p.reset();
                    for (var s = 0, r = y.length; s < r; s++) f.removeEventListener(y[s], b);
                    p = h._createPlayer({
                      options: t.dash,
                      id: c
                    }), i && "object" === (void 0 === i ? "undefined" : o(i)) && "object" === o(i.drm) && (p.setProtectionData(i.drm), (0, l.isString)(t.dash.robustnessLevel) && t.dash.robustnessLevel && p.getProtectionController().setRobustnessLevel(t.dash.robustnessLevel)), p.attachSource(n), d && p.play()
                  }
                } else f[e] = i
            }
          }(v[C]);
          if (s.default["__ready__" + c] = function(i) {
              e.dashPlayer = p = i;
              for (var n = dashjs.MediaPlayer.events, s = 0, r = y.length; s < r; s++) ! function(e) {
                "loadedmetadata" === e && (p.getDebug().setLogToBrowserConsole(t.dash.debug), p.initialize(), p.setScheduleWhilePaused(!1), p.setFastSwitchEnabled(!0), p.attachView(f), p.setAutoPlay(!1), "object" !== o(t.dash.drm) || a.default.Utils.isObjectEmpty(t.dash.drm) || (p.setProtectionData(t.dash.drm), (0, l.isString)(t.dash.robustnessLevel) && t.dash.robustnessLevel && p.getProtectionController().setRobustnessLevel(t.dash.robustnessLevel)), p.attachSource(f.getSrc())), f.addEventListener(e, b)
              }(y[s]);
              for (var c in n) n.hasOwnProperty(c) && p.on(n[c], function(t) {
                var i = (0, l.createEvent)(t.type, f);
                i.data = t, e.dispatchEvent(i), "error" === t.type.toLowerCase() && console.error(t)
              })
            }, i && i.length > 0)
            for (var w = 0, E = i.length; w < E; w++)
              if (r.renderer.renderers[t.prefix].canPlayType(i[w].type)) {
                f.setAttribute("src", i[w].src), void 0 !== i[w].drm && (t.dash.drm = i[w].drm);
                break
              } f.setAttribute("id", c), n.parentNode.insertBefore(f, n), n.autoplay = !1, n.style.display = "none", f.setSize = function(e, t) {
            return f.style.width = e + "px", f.style.height = t + "px", f
          }, f.hide = function() {
            return f.pause(), f.style.display = "none", f
          }, f.show = function() {
            return f.style.display = "", f
          }, f.destroy = function() {
            null !== p && p.reset()
          };
          var S = (0, l.createEvent)("rendererready", f);
          return e.dispatchEvent(S), e.promises.push(h.load({
            options: t.dash,
            id: c
          })), f
        }
      };
    c.typeChecks.push(function(e) {
      return ~e.toLowerCase().indexOf(".mpd") ? "application/dash+xml" : null
    }), r.renderer.add(f)
  }, {
    25: 25,
    26: 26,
    27: 27,
    28: 28,
    3: 3,
    7: 7,
    8: 8
  }],
  20: [function(e, t, i) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.PluginDetector = void 0;
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      s = n(e(3)),
      a = n(e(2)),
      r = n(e(7)),
      l = n(e(5)),
      c = e(8),
      d = e(27),
      u = e(25),
      h = e(28),
      f = i.PluginDetector = {
        plugins: [],
        hasPluginVersion: function(e, t) {
          var i = f.plugins[e];
          return t[1] = t[1] || 0, t[2] = t[2] || 0, i[0] > t[0] || i[0] === t[0] && i[1] > t[1] || i[0] === t[0] && i[1] === t[1] && i[2] >= t[2]
        },
        addPlugin: function(e, t, i, n, o) {
          f.plugins[e] = f.detectPlugin(t, i, n, o)
        },
        detectPlugin: function(e, t, i, n) {
          var a = [0, 0, 0],
            r = void 0,
            l = void 0;
          if (null !== u.NAV.plugins && void 0 !== u.NAV.plugins && "object" === o(u.NAV.plugins[e])) {
            if ((r = u.NAV.plugins[e].description) && (void 0 === u.NAV.mimeTypes || !u.NAV.mimeTypes[t] || u.NAV.mimeTypes[t].enabledPlugin))
              for (var c = 0, d = (a = r.replace(e, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split(".")).length; c < d; c++) a[c] = parseInt(a[c].match(/\d+/), 10)
          } else if (void 0 !== s.default.ActiveXObject) try {
            (l = new ActiveXObject(i)) && (a = n(l))
          } catch (e) {}
          return a
        }
      };
    f.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function(e) {
      var t = [],
        i = e.GetVariable("$version");
      return i && (i = i.split(" ")[1].split(","), t = [parseInt(i[0], 10), parseInt(i[1], 10), parseInt(i[2], 10)]), t
    });
    var p = {
      create: function(e, t, i) {
        var n = {};
        n.options = t, n.id = e.id + "_" + n.options.prefix, n.mediaElement = e, n.flashState = {}, n.flashApi = null, n.flashApiStack = [];
        for (var o = r.default.html5media.properties, f = 0, p = o.length; f < p; f++) ! function(e) {
          n.flashState[e] = null;
          var t = "" + e.substring(0, 1).toUpperCase() + e.substring(1);
          n["get" + t] = function() {
            if (null !== n.flashApi) {
              if ("function" == typeof n.flashApi["get_" + e]) {
                var t = n.flashApi["get_" + e]();
                return "buffered" === e ? {
                  start: function() {
                    return 0
                  },
                  end: function() {
                    return t
                  },
                  length: 1
                } : t
              }
              return null
            }
            return null
          }, n["set" + t] = function(t) {
            if ("src" === e && (t = (0, h.absolutizeUrl)(t)), null !== n.flashApi && void 0 !== n.flashApi["set_" + e]) try {
              n.flashApi["set_" + e](t)
            } catch (e) {} else n.flashApiStack.push({
              type: "set",
              propName: e,
              value: t
            })
          }
        }(o[f]);
        var m = r.default.html5media.methods;
        m.push("stop");
        for (var g = 0, v = m.length; g < v; g++) ! function(e) {
          n[e] = function() {
            if (null !== n.flashApi) {
              if (n.flashApi["fire_" + e]) try {
                n.flashApi["fire_" + e]()
              } catch (e) {}
            } else n.flashApiStack.push({
              type: "call",
              methodName: e
            })
          }
        }(m[g]);
        for (var y = ["rendererready"], b = 0, C = y.length; b < C; b++) {
          var x = (0, d.createEvent)(y[b], n);
          e.dispatchEvent(x)
        }
        s.default["__ready__" + n.id] = function() {
          if (n.flashReady = !0, n.flashApi = a.default.getElementById("__" + n.id), n.flashApiStack.length)
            for (var e = 0, t = n.flashApiStack.length; e < t; e++) {
              var i = n.flashApiStack[e];
              if ("set" === i.type) {
                var o = i.propName,
                  s = "" + o.substring(0, 1).toUpperCase() + o.substring(1);
                n["set" + s](i.value)
              } else "call" === i.type && n[i.methodName]()
            }
        }, s.default["__event__" + n.id] = function(e, t) {
          var i = (0, d.createEvent)(e, n);
          if (t) try {
            i.data = JSON.parse(t), i.details.data = JSON.parse(t)
          } catch (e) {
            i.message = t
          }
          n.mediaElement.dispatchEvent(i)
        }, n.flashWrapper = a.default.createElement("div"), -1 === ["always", "sameDomain"].indexOf(n.options.shimScriptAccess) && (n.options.shimScriptAccess = "sameDomain");
        var w = e.originalNode.autoplay,
          E = ["uid=" + n.id, "autoplay=" + w, "allowScriptAccess=" + n.options.shimScriptAccess],
          S = null !== e.originalNode && "video" === e.originalNode.tagName.toLowerCase(),
          _ = S ? e.originalNode.height : 1,
          T = S ? e.originalNode.width : 1;
        e.originalNode.getAttribute("src") && E.push("src=" + e.originalNode.getAttribute("src")), !0 === n.options.enablePseudoStreaming && (E.push("pseudostreamstart=" + n.options.pseudoStreamingStartQueryParam), E.push("pseudostreamtype=" + n.options.pseudoStreamingType)), e.appendChild(n.flashWrapper), null !== e.originalNode && (e.originalNode.style.display = "none");
        var k = [];
        if (u.IS_IE) {
          var D = a.default.createElement("div");
          n.flashWrapper.appendChild(D), k = ['classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"', 'codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab"', 'id="__' + n.id + '"', 'width="' + T + '"', 'height="' + _ + '"'], S || k.push('style="clip: rect(0 0 0 0); position: absolute;"'), D.outerHTML = "<object " + k.join(" ") + '><param name="movie" value="' + n.options.pluginPath + n.options.filename + "?x=" + new Date + '" /><param name="flashvars" value="' + E.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="' + n.options.shimScriptAccess + '" /><param name="allowFullScreen" value="true" /><div>' + l.default.t("mejs.install-flash") + "</div></object>"
        } else k = ['id="__' + n.id + '"', 'name="__' + n.id + '"', 'play="true"', 'loop="false"', 'quality="high"', 'bgcolor="#000000"', 'wmode="transparent"', 'allowScriptAccess="' + n.options.shimScriptAccess + '"', 'allowFullScreen="true"', 'type="application/x-shockwave-flash"', 'pluginspage="//www.macromedia.com/go/getflashplayer"', 'src="' + n.options.pluginPath + n.options.filename + '"', 'flashvars="' + E.join("&") + '"', 'width="' + T + '"', 'height="' + _ + '"'], S || k.push('style="clip: rect(0 0 0 0); position: absolute;"'), n.flashWrapper.innerHTML = "<embed " + k.join(" ") + ">";
        if (n.flashNode = n.flashWrapper.lastChild, n.hide = function() {
            S && (n.flashNode.style.display = "none")
          }, n.show = function() {
            S && (n.flashNode.style.display = "")
          }, n.setSize = function(e, t) {
            n.flashNode.style.width = e + "px", n.flashNode.style.height = t + "px", null !== n.flashApi && "function" == typeof n.flashApi.fire_setSize && n.flashApi.fire_setSize(e, t)
          }, n.destroy = function() {
            n.flashNode.remove()
          }, i && i.length > 0)
          for (var I = 0, H = i.length; I < H; I++)
            if (c.renderer.renderers[t.prefix].canPlayType(i[I].type)) {
              n.setSrc(i[I].src);
              break
            } return n
      }
    };
    if (f.hasPluginVersion("flash", [10, 0, 0])) {
      h.typeChecks.push(function(e) {
        return (e = e.toLowerCase()).startsWith("rtmp") ? ~e.indexOf(".mp3") ? "audio/rtmp" : "video/rtmp" : /\.og(a|g)/i.test(e) ? "audio/ogg" : ~e.indexOf(".m3u8") ? "application/x-mpegURL" : ~e.indexOf(".mpd") ? "application/dash+xml" : ~e.indexOf(".flv") ? "video/flv" : null
      });
      var m = {
        name: "flash_video",
        options: {
          prefix: "flash_video",
          filename: "mediaelement-flash-video.swf",
          enablePseudoStreaming: !1,
          pseudoStreamingStartQueryParam: "start",
          pseudoStreamingType: "byte"
        },
        canPlayType: function(e) {
          return ~["video/mp4", "video/rtmp", "audio/rtmp", "rtmp/mp4", "audio/mp4", "video/flv", "video/x-flv"].indexOf(e.toLowerCase())
        },
        create: p.create
      };
      c.renderer.add(m);
      var g = {
        name: "flash_hls",
        options: {
          prefix: "flash_hls",
          filename: "mediaelement-flash-video-hls.swf"
        },
        canPlayType: function(e) {
          return ~["application/x-mpegurl", "vnd.apple.mpegurl", "audio/mpegurl", "audio/hls", "video/hls"].indexOf(e.toLowerCase())
        },
        create: p.create
      };
      c.renderer.add(g);
      var v = {
        name: "flash_dash",
        options: {
          prefix: "flash_dash",
          filename: "mediaelement-flash-video-mdash.swf"
        },
        canPlayType: function(e) {
          return ~["application/dash+xml"].indexOf(e.toLowerCase())
        },
        create: p.create
      };
      c.renderer.add(v);
      var y = {
        name: "flash_audio",
        options: {
          prefix: "flash_audio",
          filename: "mediaelement-flash-audio.swf"
        },
        canPlayType: function(e) {
          return ~["audio/mp3"].indexOf(e.toLowerCase())
        },
        create: p.create
      };
      c.renderer.add(y);
      var b = {
        name: "flash_audio_ogg",
        options: {
          prefix: "flash_audio_ogg",
          filename: "mediaelement-flash-audio-ogg.swf"
        },
        canPlayType: function(e) {
          return ~["audio/ogg", "audio/oga", "audio/ogv"].indexOf(e.toLowerCase())
        },
        create: p.create
      };
      c.renderer.add(b)
    }
  }, {
    2: 2,
    25: 25,
    27: 27,
    28: 28,
    3: 3,
    5: 5,
    7: 7,
    8: 8
  }],
  21: [function(e, t, i) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      s = n(e(3)),
      a = n(e(7)),
      r = e(8),
      l = e(27),
      c = e(25),
      d = e(28),
      u = e(26),
      h = {
        promise: null,
        load: function(e) {
          return "undefined" != typeof flvjs ? h.promise = new Promise(function(e) {
            e()
          }).then(function() {
            h._createPlayer(e)
          }) : (e.options.path = "string" == typeof e.options.path ? e.options.path : "https://cdnjs.cloudflare.com/ajax/libs/flv.js/1.3.2/flv.min.js", h.promise = h.promise || (0, u.loadScript)(e.options.path), h.promise.then(function() {
            h._createPlayer(e)
          })), h.promise
        },
        _createPlayer: function(e) {
          flvjs.LoggingControl.enableDebug = e.options.debug, flvjs.LoggingControl.enableVerbose = e.options.debug;
          var t = flvjs.createPlayer(e.options);
          return s.default["__ready__" + e.id](t), t
        }
      },
      f = {
        name: "native_flv",
        options: {
          prefix: "native_flv",
          flv: {
            path: "https://cdnjs.cloudflare.com/ajax/libs/flv.js/1.3.2/flv.min.js",
            cors: !0,
            debug: !1
          }
        },
        canPlayType: function(e) {
          return c.HAS_MSE && ["video/x-flv", "video/flv"].indexOf(e.toLowerCase()) > -1
        },
        create: function(e, t, i) {
          var n = e.originalNode,
            c = e.id + "_" + t.prefix,
            d = null,
            u = null;
          d = n.cloneNode(!0), t = Object.assign(t, e.options);
          for (var f = a.default.html5media.properties, p = a.default.html5media.events.concat(["click", "mouseover", "mouseout"]), m = function(t) {
              var i = (0, l.createEvent)(t.type, e);
              e.dispatchEvent(i)
            }, g = 0, v = f.length; g < v; g++) ! function(e) {
            var i = "" + e.substring(0, 1).toUpperCase() + e.substring(1);
            d["get" + i] = function() {
              return null !== u ? d[e] : null
            }, d["set" + i] = function(i) {
              if (-1 === a.default.html5media.readOnlyProperties.indexOf(e))
                if ("src" === e) {
                  if (d[e] = "object" === (void 0 === i ? "undefined" : o(i)) && i.src ? i.src : i, null !== u) {
                    var n = {};
                    n.type = "flv", n.url = i, n.cors = t.flv.cors, n.debug = t.flv.debug, n.path = t.flv.path, u.destroy();
                    for (var s = 0, r = p.length; s < r; s++) d.removeEventListener(p[s], m);
                    (u = h._createPlayer({
                      options: n,
                      id: c
                    })).attachMediaElement(d), u.load()
                  }
                } else d[e] = i
            }
          }(f[g]);
          if (s.default["__ready__" + c] = function(t) {
              e.flvPlayer = u = t;
              for (var i = flvjs.Events, n = 0, o = p.length; n < o; n++) ! function(e) {
                "loadedmetadata" === e && (u.unload(), u.detachMediaElement(), u.attachMediaElement(d), u.load()), d.addEventListener(e, m)
              }(p[n]);
              var s = function(t, i) {
                var n = (0, l.createEvent)(t, d);
                n.data = i, e.dispatchEvent(n)
              };
              for (var a in i) ! function(e) {
                i.hasOwnProperty(e) && u.on(i[e], function(t) {
                  s(i[e], t)
                })
              }(a)
            }, i && i.length > 0)
            for (var y = 0, b = i.length; y < b; y++)
              if (r.renderer.renderers[t.prefix].canPlayType(i[y].type)) {
                d.setAttribute("src", i[y].src);
                break
              } d.setAttribute("id", c), n.parentNode.insertBefore(d, n), n.autoplay = !1, n.style.display = "none";
          var C = {};
          C.type = "flv", C.url = d.src, C.cors = t.flv.cors, C.debug = t.flv.debug, C.path = t.flv.path, d.setSize = function(e, t) {
            return d.style.width = e + "px", d.style.height = t + "px", d
          }, d.hide = function() {
            return null !== u && u.pause(), d.style.display = "none", d
          }, d.show = function() {
            return d.style.display = "", d
          }, d.destroy = function() {
            null !== u && u.destroy()
          };
          var x = (0, l.createEvent)("rendererready", d);
          return e.dispatchEvent(x), e.promises.push(h.load({
            options: C,
            id: c
          })), d
        }
      };
    d.typeChecks.push(function(e) {
      return ~e.toLowerCase().indexOf(".flv") ? "video/flv" : null
    }), r.renderer.add(f)
  }, {
    25: 25,
    26: 26,
    27: 27,
    28: 28,
    3: 3,
    7: 7,
    8: 8
  }],
  22: [function(e, t, i) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      s = n(e(3)),
      a = n(e(7)),
      r = e(8),
      l = e(27),
      c = e(25),
      d = e(28),
      u = e(26),
      h = {
        promise: null,
        load: function(e) {
          return "undefined" != typeof Hls ? h.promise = new Promise(function(e) {
            e()
          }).then(function() {
            h._createPlayer(e)
          }) : (e.options.path = "string" == typeof e.options.path ? e.options.path : "https://cdnjs.cloudflare.com/ajax/libs/hls.js/0.7.11/hls.min.js", h.promise = h.promise || (0, u.loadScript)(e.options.path), h.promise.then(function() {
            h._createPlayer(e)
          })), h.promise
        },
        _createPlayer: function(e) {
          var t = new Hls(e.options);
          return s.default["__ready__" + e.id](t), t
        }
      },
      f = {
        name: "native_hls",
        options: {
          prefix: "native_hls",
          hls: {
            path: "https://cdnjs.cloudflare.com/ajax/libs/hls.js/0.7.10/hls.min.js",
            autoStartLoad: !1,
            debug: !1
          }
        },
        canPlayType: function(e) {
          return c.HAS_MSE && ["application/x-mpegurl", "vnd.apple.mpegurl", "audio/mpegurl", "audio/hls", "video/hls"].indexOf(e.toLowerCase()) > -1
        },
        create: function(e, t, i) {
          var n = e.originalNode,
            c = e.id + "_" + t.prefix,
            d = n.getAttribute("preload"),
            u = n.autoplay,
            f = null,
            p = null;
          p = n.cloneNode(!0), (t = Object.assign(t, e.options)).hls.autoStartLoad = d && "none" !== d || u;
          for (var m = a.default.html5media.properties, g = a.default.html5media.events.concat(["click", "mouseover", "mouseout"]), v = function(t) {
              var i = (0, l.createEvent)(t.type, e);
              e.dispatchEvent(i)
            }, y = 0, b = m.length; y < b; y++) ! function(e) {
            var i = "" + e.substring(0, 1).toUpperCase() + e.substring(1);
            p["get" + i] = function() {
              return null !== f ? p[e] : null
            }, p["set" + i] = function(i) {
              if (-1 === a.default.html5media.readOnlyProperties.indexOf(e))
                if ("src" === e) {
                  if (p[e] = "object" === (void 0 === i ? "undefined" : o(i)) && i.src ? i.src : i, null !== f) {
                    f.destroy();
                    for (var n = 0, s = g.length; n < s; n++) p.removeEventListener(g[n], v);
                    (f = h._createPlayer({
                      options: t.hls,
                      id: c
                    })).loadSource(i), f.attachMedia(p)
                  }
                } else p[e] = i
            }
          }(m[y]);
          if (s.default["__ready__" + c] = function(t) {
              e.hlsPlayer = f = t;
              for (var i = Hls.Events, n = 0, o = g.length; n < o; n++) ! function(t) {
                if ("loadedmetadata" === t) {
                  var i = e.originalNode.src;
                  f.detachMedia(), f.loadSource(i), f.attachMedia(p)
                }
                p.addEventListener(t, v)
              }(g[n]);
              var s = void 0,
                a = void 0;
              for (var r in i) i.hasOwnProperty(r) && f.on(i[r], function(t, i) {
                var n = (0, l.createEvent)(t, p);
                if (n.data = i, e.dispatchEvent(n), "hlsError" === t && (console.warn(t, i), i.fatal)) switch (i.type) {
                  case "mediaError":
                    var o = (new Date).getTime();
                    !s || o - s > 3e3 ? (s = (new Date).getTime(), f.recoverMediaError()) : !a || o - a > 3e3 ? (a = (new Date).getTime(), console.warn("Attempting to swap Audio Codec and recover from media error"), f.swapAudioCodec(), f.recoverMediaError()) : console.error("Cannot recover, last media error recovery failed");
                    break;
                  case "networkError":
                    console.error("Network error");
                    break;
                  default:
                    f.destroy()
                }
              })
            }, i && i.length > 0)
            for (var C = 0, x = i.length; C < x; C++)
              if (r.renderer.renderers[t.prefix].canPlayType(i[C].type)) {
                p.setAttribute("src", i[C].src);
                break
              }
          "auto" === d || u || (p.addEventListener("play", function() {
            null !== f && f.startLoad()
          }), p.addEventListener("pause", function() {
            null !== f && f.stopLoad()
          })), p.setAttribute("id", c), n.parentNode.insertBefore(p, n), n.autoplay = !1, n.style.display = "none", p.setSize = function(e, t) {
            return p.style.width = e + "px", p.style.height = t + "px", p
          }, p.hide = function() {
            return p.pause(), p.style.display = "none", p
          }, p.show = function() {
            return p.style.display = "", p
          }, p.destroy = function() {
            null !== f && (f.stopLoad(), f.destroy())
          };
          var w = (0, l.createEvent)("rendererready", p);
          return e.dispatchEvent(w), e.promises.push(h.load({
            options: t.hls,
            id: c
          })), p
        }
      };
    d.typeChecks.push(function(e) {
      return ~e.toLowerCase().indexOf(".m3u8") ? "application/x-mpegURL" : null
    }), r.renderer.add(f)
  }, {
    25: 25,
    26: 26,
    27: 27,
    28: 28,
    3: 3,
    7: 7,
    8: 8
  }],
  23: [function(e, t, i) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var o = n(e(3)),
      s = n(e(2)),
      a = n(e(7)),
      r = e(8),
      l = e(27),
      c = e(25),
      d = {
        name: "html5",
        options: {
          prefix: "html5"
        },
        canPlayType: function(e) {
          var t = s.default.createElement("video");
          return c.IS_ANDROID && /\/mp(3|4)$/i.test(e) || ~["application/x-mpegurl", "vnd.apple.mpegurl", "audio/mpegurl", "audio/hls", "video/hls"].indexOf(e.toLowerCase()) && c.SUPPORTS_NATIVE_HLS ? "yes" : t.canPlayType ? t.canPlayType(e.toLowerCase()).replace(/no/, "") : ""
        },
        create: function(e, t, i) {
          var n = e.id + "_" + t.prefix,
            o = null;
          void 0 === e.originalNode || null === e.originalNode ? (o = s.default.createElement("audio"), e.appendChild(o)) : o = e.originalNode, o.setAttribute("id", n);
          for (var c = a.default.html5media.properties, d = 0, u = c.length; d < u; d++) ! function(e) {
            var t = "" + e.substring(0, 1).toUpperCase() + e.substring(1);
            o["get" + t] = function() {
              return o[e]
            }, o["set" + t] = function(t) {
              -1 === a.default.html5media.readOnlyProperties.indexOf(e) && (o[e] = t)
            }
          }(c[d]);
          for (var h = a.default.html5media.events.concat(["click", "mouseover", "mouseout"]), f = 0, p = h.length; f < p; f++) ! function(t) {
            o.addEventListener(t, function(t) {
              var i = (0, l.createEvent)(t.type, e);
              e.dispatchEvent(i)
            })
          }(h[f]);
          if (o.setSize = function(e, t) {
              return o.style.width = e + "px", o.style.height = t + "px", o
            }, o.hide = function() {
              return o.style.display = "none", o
            }, o.show = function() {
              return o.style.display = "", o
            }, i && i.length > 0)
            for (var m = 0, g = i.length; m < g; m++)
              if (r.renderer.renderers[t.prefix].canPlayType(i[m].type)) {
                o.setAttribute("src", i[m].src);
                break
              } var v = (0, l.createEvent)("rendererready", o);
          return e.dispatchEvent(v), o
        }
      };
    o.default.HtmlMediaElement = a.default.HtmlMediaElement = d, r.renderer.add(d)
  }, {
    2: 2,
    25: 25,
    27: 27,
    3: 3,
    7: 7,
    8: 8
  }],
  24: [function(e, t, i) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var o = n(e(3)),
      s = n(e(2)),
      a = n(e(7)),
      r = e(8),
      l = e(27),
      c = e(28),
      d = e(26),
      u = {
        isIframeStarted: !1,
        isIframeLoaded: !1,
        iframeQueue: [],
        enqueueIframe: function(e) {
          u.isLoaded = "undefined" != typeof YT && YT.loaded, u.isLoaded ? u.createIframe(e) : (u.loadIframeApi(), u.iframeQueue.push(e))
        },
        loadIframeApi: function() {
          u.isIframeStarted || ((0, d.loadScript)("https://www.youtube.com/player_api"), u.isIframeStarted = !0)
        },
        iFrameReady: function() {
          for (u.isLoaded = !0, u.isIframeLoaded = !0; u.iframeQueue.length > 0;) {
            var e = u.iframeQueue.pop();
            u.createIframe(e)
          }
        },
        createIframe: function(e) {
          return new YT.Player(e.containerId, e)
        },
        getYouTubeId: function(e) {
          var t = "";
          return e.indexOf("?") > 0 ? "" === (t = u.getYouTubeIdFromParam(e)) && (t = u.getYouTubeIdFromUrl(e)) : t = u.getYouTubeIdFromUrl(e), (t = t.substring(t.lastIndexOf("/") + 1).split("?"))[0]
        },
        getYouTubeIdFromParam: function(e) {
          if (void 0 === e || null === e || !e.trim().length) return null;
          for (var t = e.split("?")[1].split("&"), i = "", n = 0, o = t.length; n < o; n++) {
            var s = t[n].split("=");
            if ("v" === s[0]) {
              i = s[1];
              break
            }
          }
          return i
        },
        getYouTubeIdFromUrl: function(e) {
          return void 0 !== e && null !== e && e.trim().length ? (e = e.split("?")[0]).substring(e.lastIndexOf("/") + 1) : null
        },
        getYouTubeNoCookieUrl: function(e) {
          if (void 0 === e || null === e || !e.trim().length || -1 === e.indexOf("//www.youtube")) return e;
          var t = e.split("/");
          return t[2] = t[2].replace(".com", "-nocookie.com"), t.join("/")
        }
      },
      h = {
        name: "youtube_iframe",
        options: {
          prefix: "youtube_iframe",
          youtube: {
            autoplay: 0,
            controls: 0,
            disablekb: 1,
            end: 0,
            loop: 0,
            modestbranding: 0,
            playsinline: 0,
            rel: 0,
            showinfo: 0,
            start: 0,
            iv_load_policy: 3,
            nocookie: !1,
            imageQuality: null
          }
        },
        canPlayType: function(e) {
          return ~["video/youtube", "video/x-youtube"].indexOf(e.toLowerCase())
        },
        create: function(e, t, i) {
          var n = {},
            r = [],
            c = null,
            d = !0,
            h = !1,
            f = null,
            p = 1;
          n.options = t, n.id = e.id + "_" + t.prefix, n.mediaElement = e;
          for (var m = a.default.html5media.properties, g = 0, v = m.length; g < v; g++) ! function(t) {
            var i = "" + t.substring(0, 1).toUpperCase() + t.substring(1);
            n["get" + i] = function() {
              if (null !== c) {
                switch (t) {
                  case "currentTime":
                    return c.getCurrentTime();
                  case "duration":
                    return c.getDuration();
                  case "volume":
                    return p = c.getVolume() / 100;
                  case "paused":
                    return d;
                  case "ended":
                    return h;
                  case "muted":
                    return c.isMuted();
                  case "buffered":
                    var e = c.getVideoLoadedFraction(),
                      i = c.getDuration();
                    return {
                      start: function() {
                        return 0
                      }, end: function() {
                        return e * i
                      }, length: 1
                    };
                  case "src":
                    return c.getVideoUrl();
                  case "readyState":
                    return 4
                }
                return null
              }
              return null
            }, n["set" + i] = function(i) {
              if (null !== c) switch (t) {
                case "src":
                  var o = "string" == typeof i ? i : i[0].src,
                    s = u.getYouTubeId(o);
                  e.originalNode.autoplay ? c.loadVideoById(s) : c.cueVideoById(s);
                  break;
                case "currentTime":
                  c.seekTo(i);
                  break;
                case "muted":
                  i ? c.mute() : c.unMute(), setTimeout(function() {
                    var t = (0, l.createEvent)("volumechange", n);
                    e.dispatchEvent(t)
                  }, 50);
                  break;
                case "volume":
                  p = i, c.setVolume(100 * i), setTimeout(function() {
                    var t = (0, l.createEvent)("volumechange", n);
                    e.dispatchEvent(t)
                  }, 50);
                  break;
                case "readyState":
                  var a = (0, l.createEvent)("canplay", n);
                  e.dispatchEvent(a)
              } else r.push({
                type: "set",
                propName: t,
                value: i
              })
            }
          }(m[g]);
          for (var y = a.default.html5media.methods, b = 0, C = y.length; b < C; b++) ! function(e) {
            n[e] = function() {
              if (null !== c) switch (e) {
                case "play":
                  return d = !1, c.playVideo();
                case "pause":
                  return d = !0, c.pauseVideo();
                case "load":
                  return null
              } else r.push({
                type: "call",
                methodName: e
              })
            }
          }(y[b]);
          var x = s.default.createElement("div");
          x.id = n.id, n.options.youtube.nocookie && (e.originalNode.src = u.getYouTubeNoCookieUrl(i[0].src)), e.originalNode.parentNode.insertBefore(x, e.originalNode), e.originalNode.style.display = "none";
          var w = "audio" === e.originalNode.tagName.toLowerCase(),
            E = w ? "1" : e.originalNode.height,
            S = w ? "1" : e.originalNode.width,
            _ = u.getYouTubeId(i[0].src),
            T = {
              id: n.id,
              containerId: x.id,
              videoId: _,
              height: E,
              width: S,
              playerVars: Object.assign({
                controls: 0,
                rel: 0,
                disablekb: 1,
                showinfo: 0,
                modestbranding: 0,
                html5: 1,
                playsinline: 0,
                start: 0,
                end: 0,
                iv_load_policy: 3
              }, n.options.youtube),
              origin: o.default.location.host,
              events: {
                onReady: function(t) {
                  if (e.youTubeApi = c = t.target, e.youTubeState = {
                      paused: !0,
                      ended: !1
                    }, r.length)
                    for (var i = 0, o = r.length; i < o; i++) {
                      var s = r[i];
                      if ("set" === s.type) {
                        var a = s.propName,
                          d = "" + a.substring(0, 1).toUpperCase() + a.substring(1);
                        n["set" + d](s.value)
                      } else "call" === s.type && n[s.methodName]()
                    }
                  f = c.getIframe(), e.originalNode.getAttribute("muted") && c.mute();
                  for (var u = ["mouseover", "mouseout"], h = 0, p = u.length; h < p; h++) f.addEventListener(u[h], function(t) {
                    var i = (0, l.createEvent)(t.type, n);
                    e.dispatchEvent(i)
                  }, !1);
                  for (var m = ["rendererready", "loadedmetadata", "loadeddata", "canplay"], g = 0, v = m.length; g < v; g++) {
                    var y = (0, l.createEvent)(m[g], n);
                    e.dispatchEvent(y)
                  }
                },
                onStateChange: function(t) {
                  var i = [];
                  switch (t.data) {
                    case -1:
                      i = ["loadedmetadata"], d = !0, h = !1;
                      break;
                    case 0:
                      i = ["ended"], d = !1, h = !n.options.youtube.loop, n.options.youtube.loop || n.stopInterval();
                      break;
                    case 1:
                      i = ["play", "playing"], d = !1, h = !1, n.startInterval();
                      break;
                    case 2:
                      i = ["pause"], d = !0, h = !1, n.stopInterval();
                      break;
                    case 3:
                      i = ["progress"], h = !1;
                      break;
                    case 5:
                      i = ["loadeddata", "loadedmetadata", "canplay"], d = !0, h = !1
                  }
                  for (var o = 0, s = i.length; o < s; o++) {
                    var a = (0, l.createEvent)(i[o], n);
                    e.dispatchEvent(a)
                  }
                },
                onError: function(t) {
                  var i = (0, l.createEvent)("error", n);
                  i.data = t.data, e.dispatchEvent(i)
                }
              }
            };
          return w && (T.playerVars.playsinline = 1), e.originalNode.autoplay && (T.playerVars.autoplay = 1), e.originalNode.loop && (T.playerVars.loop = 1), u.enqueueIframe(T), n.onEvent = function(t, i, n) {
            null !== n && void 0 !== n && (e.youTubeState = n)
          }, n.setSize = function(e, t) {
            null !== c && c.setSize(e, t)
          }, n.hide = function() {
            n.stopInterval(), n.pause(), f && (f.style.display = "none")
          }, n.show = function() {
            f && (f.style.display = "")
          }, n.destroy = function() {
            c.destroy()
          }, n.interval = null, n.startInterval = function() {
            n.interval = setInterval(function() {
              var t = (0, l.createEvent)("timeupdate", n);
              e.dispatchEvent(t)
            }, 250)
          }, n.stopInterval = function() {
            n.interval && clearInterval(n.interval)
          }, n.getPosterUrl = function() {
            var i = t.youtube.imageQuality,
              n = ["default", "hqdefault", "mqdefault", "sddefault", "maxresdefault"],
              o = u.getYouTubeId(e.originalNode.src);
            return i && n.indexOf(i) > -1 && o ? "https://img.youtube.com/vi/" + o + "/" + i + ".jpg" : ""
          }, n
        }
      };
    o.default.onYouTubePlayerAPIReady = function() {
      u.iFrameReady()
    }, c.typeChecks.push(function(e) {
      return /\/\/(www\.youtube|youtu\.?be)/i.test(e) ? "video/x-youtube" : null
    }), r.renderer.add(h)
  }, {
    2: 2,
    26: 26,
    27: 27,
    28: 28,
    3: 3,
    7: 7,
    8: 8
  }],
  25: [function(e, t, i) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.cancelFullScreen = i.requestFullScreen = i.isFullScreen = i.FULLSCREEN_EVENT_NAME = i.HAS_NATIVE_FULLSCREEN_ENABLED = i.HAS_TRUE_NATIVE_FULLSCREEN = i.HAS_IOS_FULLSCREEN = i.HAS_MS_NATIVE_FULLSCREEN = i.HAS_MOZ_NATIVE_FULLSCREEN = i.HAS_WEBKIT_NATIVE_FULLSCREEN = i.HAS_NATIVE_FULLSCREEN = i.SUPPORTS_NATIVE_HLS = i.SUPPORT_POINTER_EVENTS = i.HAS_MSE = i.IS_STOCK_ANDROID = i.IS_SAFARI = i.IS_FIREFOX = i.IS_CHROME = i.IS_EDGE = i.IS_IE = i.IS_ANDROID = i.IS_IOS = i.IS_IPOD = i.IS_IPHONE = i.IS_IPAD = i.UA = i.NAV = void 0;
    for (var o = n(e(3)), s = n(e(2)), a = n(e(7)), r = i.NAV = o.default.navigator, l = i.UA = r.userAgent.toLowerCase(), c = i.IS_IPAD = /ipad/i.test(l) && !o.default.MSStream, d = i.IS_IPHONE = /iphone/i.test(l) && !o.default.MSStream, u = i.IS_IPOD = /ipod/i.test(l) && !o.default.MSStream, h = (i.IS_IOS = /ipad|iphone|ipod/i.test(l) && !o.default.MSStream, i.IS_ANDROID = /android/i.test(l)), f = i.IS_IE = /(trident|microsoft)/i.test(r.appName), p = (i.IS_EDGE = "msLaunchUri" in r && !("documentMode" in s.default)), m = i.IS_CHROME = /chrome/i.test(l), g = i.IS_FIREFOX = /firefox/i.test(l), v = i.IS_SAFARI = /safari/i.test(l) && !m, y = i.IS_STOCK_ANDROID = /^mozilla\/\d+\.\d+\s\(linux;\su;/i.test(l), b = (i.HAS_MSE = "MediaSource" in o.default), C = (i.SUPPORT_POINTER_EVENTS = function() {
        var e = s.default.createElement("x"),
          t = s.default.documentElement,
          i = o.default.getComputedStyle;
        if (!("pointerEvents" in e.style)) return !1;
        e.style.pointerEvents = "auto", e.style.pointerEvents = "x", t.appendChild(e);
        var n = i && "auto" === i(e, "").pointerEvents;
        return e.remove(), !!n
      }()), x = ["source", "track", "audio", "video"], w = void 0, E = 0, S = x.length; E < S; E++) w = s.default.createElement(x[E]);
    var _ = i.SUPPORTS_NATIVE_HLS = v || h && (m || y) || f && /edge/i.test(l),
      T = void 0 !== w.webkitEnterFullscreen,
      k = void 0 !== w.requestFullscreen;
    T && /mac os x 10_5/i.test(l) && (k = !1, T = !1);
    var D = void 0 !== w.webkitRequestFullScreen,
      I = void 0 !== w.mozRequestFullScreen,
      H = void 0 !== w.msRequestFullscreen,
      M = D || I || H,
      F = M,
      B = "",
      P = void 0,
      L = void 0,
      A = void 0;
    I ? F = s.default.mozFullScreenEnabled : H && (F = s.default.msFullscreenEnabled), m && (T = !1), M && (D ? B = "webkitfullscreenchange" : I ? B = "mozfullscreenchange" : H && (B = "MSFullscreenChange"), i.isFullScreen = P = function() {
      return I ? s.default.mozFullScreen : D ? s.default.webkitIsFullScreen : H ? null !== s.default.msFullscreenElement : void 0
    }, i.requestFullScreen = L = function(e) {
      D ? e.webkitRequestFullScreen() : I ? e.mozRequestFullScreen() : H && e.msRequestFullscreen()
    }, i.cancelFullScreen = A = function() {
      D ? s.default.webkitCancelFullScreen() : I ? s.default.mozCancelFullScreen() : H && s.default.msExitFullscreen()
    });
    var N = i.HAS_NATIVE_FULLSCREEN = k,
      j = i.HAS_WEBKIT_NATIVE_FULLSCREEN = D,
      R = i.HAS_MOZ_NATIVE_FULLSCREEN = I,
      $ = i.HAS_MS_NATIVE_FULLSCREEN = H,
      W = i.HAS_IOS_FULLSCREEN = T,
      O = i.HAS_TRUE_NATIVE_FULLSCREEN = M,
      q = i.HAS_NATIVE_FULLSCREEN_ENABLED = F,
      G = i.FULLSCREEN_EVENT_NAME = B;
    i.isFullScreen = P, i.requestFullScreen = L, i.cancelFullScreen = A, a.default.Features = a.default.Features || {}, a.default.Features.isiPad = c, a.default.Features.isiPod = u, a.default.Features.isiPhone = d, a.default.Features.isiOS = a.default.Features.isiPhone || a.default.Features.isiPad, a.default.Features.isAndroid = h, a.default.Features.isIE = f, a.default.Features.isEdge = p, a.default.Features.isChrome = m, a.default.Features.isFirefox = g, a.default.Features.isSafari = v, a.default.Features.isStockAndroid = y, a.default.Features.hasMSE = b, a.default.Features.supportsNativeHLS = _, a.default.Features.supportsPointerEvents = C, a.default.Features.hasiOSFullScreen = W, a.default.Features.hasNativeFullscreen = N, a.default.Features.hasWebkitNativeFullScreen = j, a.default.Features.hasMozNativeFullScreen = R, a.default.Features.hasMsNativeFullScreen = $, a.default.Features.hasTrueNativeFullScreen = O, a.default.Features.nativeFullScreenEnabled = q, a.default.Features.fullScreenEventName = G, a.default.Features.isFullScreen = P, a.default.Features.requestFullScreen = L, a.default.Features.cancelFullScreen = A
  }, {
    2: 2,
    3: 3,
    7: 7
  }],
  26: [function(e, t, i) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function o(e) {
      return new Promise(function(t, i) {
        var n = f.default.createElement("script");
        n.src = e, n.async = !0, n.onload = function() {
          n.remove(), t()
        }, n.onerror = function() {
          n.remove(), i()
        }, f.default.head.appendChild(n)
      })
    }

    function s(e) {
      var t = e.getBoundingClientRect(),
        i = h.default.pageXOffset || f.default.documentElement.scrollLeft,
        n = h.default.pageYOffset || f.default.documentElement.scrollTop;
      return {
        top: t.top + n,
        left: t.left + i
      }
    }

    function a(e, t) {
      y(e, t) ? C(e, t) : b(e, t)
    }

    function r(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 400,
        i = arguments[2];
      e.style.opacity || (e.style.opacity = 1);
      var n = null;
      h.default.requestAnimationFrame(function o(s) {
        var a = s - (n = n || s),
          r = parseFloat(1 - a / t, 2);
        e.style.opacity = r < 0 ? 0 : r, a > t ? i && "function" == typeof i && i() : h.default.requestAnimationFrame(o)
      })
    }

    function l(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 400,
        i = arguments[2];
      e.style.opacity || (e.style.opacity = 0);
      var n = null;
      h.default.requestAnimationFrame(function o(s) {
        var a = s - (n = n || s),
          r = parseFloat(a / t, 2);
        e.style.opacity = r > 1 ? 1 : r, a > t ? i && "function" == typeof i && i() : h.default.requestAnimationFrame(o)
      })
    }

    function c(e, t) {
      var i = [];
      e = e.parentNode.firstChild;
      do {
        t && !t(e) || i.push(e)
      } while (e = e.nextSibling);
      return i
    }

    function d(e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }

    function u(e, t, i, n) {
      var o = h.default.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"),
        s = "application/x-www-form-urlencoded; charset=UTF-8",
        a = !1,
        r = "*/".concat("*");
      switch (t) {
        case "text":
          s = "text/plain";
          break;
        case "json":
          s = "application/json, text/javascript";
          break;
        case "html":
          s = "text/html";
          break;
        case "xml":
          s = "application/xml, text/xml"
      }
      "application/x-www-form-urlencoded" !== s && (r = s + ", */*; q=0.01"), o && (o.open("GET", e, !0), o.setRequestHeader("Accept", r), o.onreadystatechange = function() {
        if (!a && 4 === o.readyState)
          if (200 === o.status) {
            a = !0;
            var e = void 0;
            switch (t) {
              case "json":
                e = JSON.parse(o.responseText);
                break;
              case "xml":
                e = o.responseXML;
                break;
              default:
                e = o.responseText
            }
            i(e)
          } else "function" == typeof n && n(o.status)
      }, o.send())
    }
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.removeClass = i.addClass = i.hasClass = void 0, i.loadScript = o, i.offset = s, i.toggleClass = a, i.fadeOut = r, i.fadeIn = l, i.siblings = c, i.visible = d, i.ajax = u;
    var h = n(e(3)),
      f = n(e(2)),
      p = n(e(7)),
      m = void 0,
      g = void 0,
      v = void 0;
    "classList" in f.default.documentElement ? (m = function(e, t) {
      return void 0 !== e.classList && e.classList.contains(t)
    }, g = function(e, t) {
      return e.classList.add(t)
    }, v = function(e, t) {
      return e.classList.remove(t)
    }) : (m = function(e, t) {
      return new RegExp("\\b" + t + "\\b").test(e.className)
    }, g = function(e, t) {
      y(e, t) || (e.className += " " + t)
    }, v = function(e, t) {
      e.className = e.className.replace(new RegExp("\\b" + t + "\\b", "g"), "")
    });
    var y = i.hasClass = m,
      b = i.addClass = g,
      C = i.removeClass = v;
    p.default.Utils = p.default.Utils || {}, p.default.Utils.offset = s, p.default.Utils.hasClass = y, p.default.Utils.addClass = b, p.default.Utils.removeClass = C, p.default.Utils.toggleClass = a, p.default.Utils.fadeIn = l, p.default.Utils.fadeOut = r, p.default.Utils.siblings = c, p.default.Utils.visible = d, p.default.Utils.ajax = u, p.default.Utils.loadScript = o
  }, {
    2: 2,
    3: 3,
    7: 7
  }],
  27: [function(e, t, i) {
    "use strict";

    function n(e) {
      if ("string" != typeof e) throw new Error("Argument passed must be a string");
      var t = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;"
      };
      return e.replace(/[&<>"]/g, function(e) {
        return t[e]
      })
    }

    function o(e, t) {
      var i = this,
        n = arguments,
        o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if ("function" != typeof e) throw new Error("First argument must be a function");
      if ("number" != typeof t) throw new Error("Second argument must be a numeric value");
      var s = void 0;
      return function() {
        var a = i,
          r = n,
          l = o && !s;
        clearTimeout(s), s = setTimeout(function() {
          s = null, o || e.apply(a, r)
        }, t), l && e.apply(a, r)
      }
    }

    function s(e) {
      return Object.getOwnPropertyNames(e).length <= 0
    }

    function a(e, t) {
      var i = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/,
        n = {
          d: [],
          w: []
        };
      return (e || "").split(" ").forEach(function(e) {
        var o = e + (t ? "." + t : "");
        o.startsWith(".") ? (n.d.push(o), n.w.push(o)) : n[i.test(e) ? "w" : "d"].push(o)
      }), n.d = n.d.join(" "), n.w = n.w.join(" "), n
    }

    function r(e, t) {
      if ("string" != typeof e) throw new Error("Event name must be a string");
      var i = e.match(/([a-z]+\.([a-z]+))/i),
        n = {
          target: t
        };
      return null !== i && (e = i[1], n.namespace = i[2]), new window.CustomEvent(e, {
        detail: n
      })
    }

    function l(e, t) {
      return !!(e && t && 2 & e.compareDocumentPosition(t))
    }

    function c(e) {
      return "string" == typeof e
    }
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.escapeHTML = n, i.debounce = o, i.isObjectEmpty = s, i.splitEvents = a, i.createEvent = r, i.isNodeAfter = l, i.isString = c;
    var d = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(e(7));
    d.default.Utils = d.default.Utils || {}, d.default.Utils.escapeHTML = n, d.default.Utils.debounce = o, d.default.Utils.isObjectEmpty = s, d.default.Utils.splitEvents = a, d.default.Utils.createEvent = r, d.default.Utils.isNodeAfter = l, d.default.Utils.isString = c
  }, {
    7: 7
  }],
  28: [function(e, t, i) {
    "use strict";

    function n(e) {
      if ("string" != typeof e) throw new Error("`url` argument must be a string");
      var t = document.createElement("div");
      return t.innerHTML = '<a href="' + (0, d.escapeHTML)(e) + '">x</a>', t.firstChild.href
    }

    function o(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      return e && !t ? a(e) : s(t)
    }

    function s(e) {
      if ("string" != typeof e) throw new Error("`type` argument must be a string");
      return e && e.indexOf(";") > -1 ? e.substr(0, e.indexOf(";")) : e
    }

    function a(e) {
      if ("string" != typeof e) throw new Error("`url` argument must be a string");
      for (var t = 0, i = u.length; t < i; t++) {
        var n = u[t](e);
        if (n) return n
      }
      var o = l(r(e)),
        s = "video/mp4";
      return o && (~["mp4", "m4v", "ogg", "ogv", "webm", "flv", "mpeg", "mov"].indexOf(o) ? s = "video/" + o : ~["mp3", "oga", "wav", "mid", "midi"].indexOf(o) && (s = "audio/" + o)), s
    }

    function r(e) {
      if ("string" != typeof e) throw new Error("`url` argument must be a string");
      var t = e.split("?")[0].split("\\").pop().split("/").pop();
      return ~t.indexOf(".") ? t.substring(t.lastIndexOf(".") + 1) : ""
    }

    function l(e) {
      if ("string" != typeof e) throw new Error("`extension` argument must be a string");
      switch (e) {
        case "mp4":
        case "m4v":
          return "mp4";
        case "webm":
        case "webma":
        case "webmv":
          return "webm";
        case "ogg":
        case "oga":
        case "ogv":
          return "ogg";
        default:
          return e
      }
    }
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.typeChecks = void 0, i.absolutizeUrl = n, i.formatType = o, i.getMimeFromType = s, i.getTypeFromFile = a, i.getExtension = r, i.normalizeExtension = l;
    var c = function(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(e(7)),
      d = e(27),
      u = i.typeChecks = [];
    c.default.Utils = c.default.Utils || {}, c.default.Utils.typeChecks = u, c.default.Utils.absolutizeUrl = n, c.default.Utils.formatType = o, c.default.Utils.getMimeFromType = s, c.default.Utils.getTypeFromFile = a, c.default.Utils.getExtension = r, c.default.Utils.normalizeExtension = l
  }, {
    27: 27,
    7: 7
  }],
  29: [function(e, t, i) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var o = n(e(2)),
      s = n(e(4));
    [Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach(function(e) {
        e.hasOwnProperty("remove") || Object.defineProperty(e, "remove", {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: function() {
            this.parentNode.removeChild(this)
          }
        })
      }),
      function() {
        function e(e, t) {
          t = t || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
          };
          var i = o.default.createEvent("CustomEvent");
          return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i
        }
        if ("function" == typeof window.CustomEvent) return !1;
        e.prototype = window.Event.prototype, window.CustomEvent = e
      }(), "function" != typeof Object.assign && (Object.assign = function(e) {
        if (null === e || void 0 === e) throw new TypeError("Cannot convert undefined or null to object");
        for (var t = Object(e), i = 1, n = arguments.length; i < n; i++) {
          var o = arguments[i];
          if (null !== o)
            for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (t[s] = o[s])
        }
        return t
      }), String.prototype.startsWith || (String.prototype.startsWith = function(e, t) {
        return t = t || 0, this.substr(t, e.length) === e
      }), Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(e) {
        for (var t = (this.document || this.ownerDocument).querySelectorAll(e), i = t.length - 1; --i >= 0 && t.item(i) !== this;);
        return i > -1
      }), window.Element && !Element.prototype.closest && (Element.prototype.closest = function(e) {
        var t = (this.document || this.ownerDocument).querySelectorAll(e),
          i = void 0,
          n = this;
        do {
          for (i = t.length; --i >= 0 && t.item(i) !== n;);
        } while (i < 0 && (n = n.parentElement));
        return n
      }),
      function() {
        for (var e = 0, t = ["ms", "moz", "webkit", "o"], i = 0; i < t.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[t[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[i] + "CancelAnimationFrame"] || window[t[i] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(t) {
          var i = (new Date).getTime(),
            n = Math.max(0, 16 - (i - e)),
            o = window.setTimeout(function() {
              t(i + n)
            }, n);
          return e = i + n, o
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
          clearTimeout(e)
        })
      }(), /firefox/i.test(navigator.userAgent) && (window.mediaElementJsOldGetComputedStyle = window.getComputedStyle, window.getComputedStyle = function(e, t) {
        var i = window.mediaElementJsOldGetComputedStyle(e, t);
        return null === i ? {
          getPropertyValue: function() {}
        } : i
      }), window.Promise || (window.Promise = s.default),
      function(e) {
        e && e.prototype && null === e.prototype.children && Object.defineProperty(e.prototype, "children", {
          get: function() {
            for (var e = 0, t = void 0, i = this.childNodes, n = []; t = i[e++];) 1 === t.nodeType && n.push(t);
            return n
          }
        })
      }(window.Node || window.Element)
  }, {
    2: 2,
    4: 4
  }],
  30: [function(e, t, i) {
    "use strict";

    function n() {
      return !((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25) % 1 == 0)
    }

    function o(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 25,
        s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      e = !e || "number" != typeof e || e < 0 ? 0 : e;
      var a = Math.round(.066666 * o),
        r = Math.round(o),
        l = 24 * Math.round(3600 * o),
        c = Math.round(600 * o),
        d = n(o) ? ";" : ":",
        u = void 0,
        h = void 0,
        f = void 0,
        p = void 0,
        m = Math.round(e * o);
      if (n(o)) {
        m < 0 && (m = l + m);
        var g = (m %= l) % c;
        m += 9 * a * Math.floor(m / c), g > a && (m += a * Math.floor((g - a) / Math.round(60 * r - a)));
        var v = Math.floor(m / r);
        u = Math.floor(Math.floor(v / 60) / 60), h = Math.floor(v / 60) % 60, f = i ? v % 60 : (m / r % 60).toFixed(s)
      } else u = Math.floor(e / 3600) % 24, h = Math.floor(e / 60) % 60, f = i ? Math.floor(e % 60) : (e % 60).toFixed(s);
      u = u <= 0 ? 0 : u, h = h <= 0 ? 0 : h, f = f <= 0 ? 0 : f;
      var y = t || u > 0 ? (u < 10 ? "0" + u : u) + ":" : "";
      return y += (h < 10 ? "0" + h : h) + ":", y += "" + (f < 10 ? "0" + f : f), i && (y += (p = (p = (m % r).toFixed(0)) <= 0 ? 0 : p) < 10 ? d + "0" + p : "" + d + p), y
    }

    function s(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 25;
      if ("string" != typeof e) throw new TypeError("Time must be a string");
      if (e.indexOf(";") > 0 && (e = e.replace(";", ":")), !/\d{2}(\:\d{2}){0,3}/i.test(e)) throw new TypeError("Time code must have the format `00:00:00`");
      var i = e.split(":"),
        o = void 0,
        s = 0,
        a = 0,
        r = 0,
        l = 0,
        c = 0,
        d = Math.round(.066666 * t),
        u = Math.round(t),
        h = 3600 * u,
        f = 60 * u;
      switch (i.length) {
        default:
        case 1:
          r = parseInt(i[0], 10);
          break;
        case 2:
          a = parseInt(i[0], 10), r = parseInt(i[1], 10);
          break;
        case 3:
          s = parseInt(i[0], 10), a = parseInt(i[1], 10), r = parseInt(i[2], 10);
          break;
        case 4:
          s = parseInt(i[0], 10), a = parseInt(i[1], 10), r = parseInt(i[2], 10), l = parseInt(i[3], 10)
      }
      return o = n(t) ? h * s + f * a + u * r + l - d * ((c = 60 * s + a) - Math.floor(c / 10)) : (h * s + f * a + t * r + l) / t, parseFloat(o.toFixed(3))
    }

    function a(e, t) {
      var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 25;
      e = !e || "number" != typeof e || e < 0 ? 0 : e;
      for (var n = Math.floor(e / 3600) % 24, o = Math.floor(e / 60) % 60, s = Math.floor(e % 60), a = [
          [Math.floor((e % 1 * i).toFixed(3)), "f"],
          [s, "s"],
          [o, "m"],
          [n, "h"]
        ], r = t.timeFormat, l = r[1] === r[0], c = l ? 2 : 1, d = r.length < c ? r[c] : ":", u = r[0], h = !1, f = 0, p = a.length; f < p; f++)
        if (~r.indexOf(a[f][1])) h = !0;
        else if (h) {
        for (var m = !1, g = f; g < p; g++)
          if (a[g][0] > 0) {
            m = !0;
            break
          } if (!m) break;
        l || (r = u + r), r = a[f][1] + d + r, l && (r = a[f][1] + r), u = a[f][1]
      }
      t.currentTimeFormat = r
    }

    function r(e) {
      if ("string" != typeof e) throw new TypeError("Argument must be a string value");
      for (var t = ~(e = e.replace(",", ".")).indexOf(".") ? e.split(".")[1].length : 0, i = 0, n = 1, o = 0, s = (e = e.split(":").reverse()).length; o < s; o++) n = 1, o > 0 && (n = Math.pow(60, o)), i += Number(e[o]) * n;
      return Number(i.toFixed(t))
    }
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.isDropFrame = n, i.secondsToTimeCode = o, i.timeCodeToSeconds = s, i.calculateTimeFormat = a, i.convertSMPTEtoSeconds = r;
    var l = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(e(7));
    l.default.Utils = l.default.Utils || {}, l.default.Utils.secondsToTimeCode = o, l.default.Utils.timeCodeToSeconds = s, l.default.Utils.calculateTimeFormat = a, l.default.Utils.convertSMPTEtoSeconds = r
  }, {
    7: 7
  }]
}, {}, [29, 6, 5, 15, 23, 20, 19, 21, 22, 24, 16, 18, 17, 9, 10, 11, 12, 13, 14]),
function(e) {
  "use strict";

  function t(t) {
    return this.each(function() {
      var n = e(this),
        o = n.data("bs.affix"),
        s = "object" == typeof t && t;
      o || n.data("bs.affix", o = new i(this, s)), "string" == typeof t && o[t]()
    })
  }
  var i = function(t, n) {
    this.options = e.extend({}, i.DEFAULTS, n), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
  };
  i.VERSION = "3.3.7", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
    offset: 0,
    target: window
  }, i.prototype.getState = function(e, t, i, n) {
    var o = this.$target.scrollTop(),
      s = this.$element.offset(),
      a = this.$target.height();
    if (null != i && "top" == this.affixed) return o < i && "top";
    if ("bottom" == this.affixed) return null != i ? !(o + this.unpin <= s.top) && "bottom" : !(o + a <= e - n) && "bottom";
    var r = null == this.affixed,
      l = r ? o : s.top,
      c = r ? a : t;
    return null != i && o <= i ? "top" : null != n && l + c >= e - n && "bottom"
  }, i.prototype.getPinnedOffset = function() {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(i.RESET).addClass("affix");
    var e = this.$target.scrollTop(),
      t = this.$element.offset();
    return this.pinnedOffset = t.top - e
  }, i.prototype.checkPositionWithEventLoop = function() {
    setTimeout(e.proxy(this.checkPosition, this), 1)
  }, i.prototype.checkPosition = function() {
    if (this.$element.is(":visible")) {
      var t = this.$element.height(),
        n = this.options.offset,
        o = n.top,
        s = n.bottom,
        a = Math.max(e(document).height(), e(document.body).height());
      "object" != typeof n && (s = o = n), "function" == typeof o && (o = n.top(this.$element)), "function" == typeof s && (s = n.bottom(this.$element));
      var r = this.getState(a, t, o, s);
      if (this.affixed != r) {
        null != this.unpin && this.$element.css("top", "");
        var l = "affix" + (r ? "-" + r : ""),
          c = e.Event(l + ".bs.affix");
        if (this.$element.trigger(c), c.isDefaultPrevented()) return;
        this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
      }
      "bottom" == r && this.$element.offset({
        top: a - t - s
      })
    }
  };
  var n = e.fn.affix;
  e.fn.affix = t, e.fn.affix.Constructor = i, e.fn.affix.noConflict = function() {
    return e.fn.affix = n, this
  }, e(window).on("load", function() {
    e('[data-spy="affix"]').each(function() {
      var i = e(this),
        n = i.data();
      n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), t.call(i, n)
    })
  })
}(jQuery),
function(e) {
  "use strict";

  function t(t) {
    return this.each(function() {
      var i = e(this),
        o = i.data("bs.alert");
      o || i.data("bs.alert", o = new n(this)), "string" == typeof t && o[t].call(i)
    })
  }
  var i = '[data-dismiss="alert"]',
    n = function(t) {
      e(t).on("click", i, this.close)
    };
  n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.close = function(t) {
    function i() {
      a.detach().trigger("closed.bs.alert").remove()
    }
    var o = e(this),
      s = o.attr("data-target");
    s || (s = o.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
    var a = e("#" === s ? [] : s);
    t && t.preventDefault(), a.length || (a = o.closest(".alert")), a.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (a.removeClass("in"), e.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
  };
  var o = e.fn.alert;
  e.fn.alert = t, e.fn.alert.Constructor = n, e.fn.alert.noConflict = function() {
    return e.fn.alert = o, this
  }, e(document).on("click.bs.alert.data-api", i, n.prototype.close)
}(jQuery),
function(e) {
  "use strict";

  function t(t) {
    return this.each(function() {
      var n = e(this),
        o = n.data("bs.button"),
        s = "object" == typeof t && t;
      o || n.data("bs.button", o = new i(this, s)), "toggle" == t ? o.toggle() : t && o.setState(t)
    })
  }
  var i = function(t, n) {
    this.$element = e(t), this.options = e.extend({}, i.DEFAULTS, n), this.isLoading = !1
  };
  i.VERSION = "3.3.7", i.DEFAULTS = {
    loadingText: "loading..."
  }, i.prototype.setState = function(t) {
    var i = "disabled",
      n = this.$element,
      o = n.is("input") ? "val" : "html",
      s = n.data();
    t += "Text", null == s.resetText && n.data("resetText", n[o]()), setTimeout(e.proxy(function() {
      n[o](null == s[t] ? this.options[t] : s[t]), "loadingText" == t ? (this.isLoading = !0, n.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i).prop(i, !1))
    }, this), 0)
  }, i.prototype.toggle = function() {
    var e = !0,
      t = this.$element.closest('[data-toggle="buttons"]');
    if (t.length) {
      var i = this.$element.find("input");
      "radio" == i.prop("type") ? (i.prop("checked") && (e = !1), t.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (e = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), e && i.trigger("change")
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
  };
  var n = e.fn.button;
  e.fn.button = t, e.fn.button.Constructor = i, e.fn.button.noConflict = function() {
    return e.fn.button = n, this
  }, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
    var n = e(i.target).closest(".btn");
    t.call(n, "toggle"), e(i.target).is('input[type="radio"], input[type="checkbox"]') || (i.preventDefault(), n.is("input,button") ? n.trigger("focus") : n.find("input:visible,button:visible").first().trigger("focus"))
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
    e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
  })
}(jQuery),
function(e) {
  "use strict";

  function t(t, n) {
    return this.each(function() {
      var o = e(this),
        s = o.data("bs.modal"),
        a = e.extend({}, i.DEFAULTS, o.data(), "object" == typeof t && t);
      s || o.data("bs.modal", s = new i(this, a)), "string" == typeof t ? s[t](n) : a.show && s.show(n)
    })
  }
  var i = function(t, i) {
    this.options = i, this.$body = e(document.body), this.$element = e(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
      this.$element.trigger("loaded.bs.modal")
    }, this))
  };
  i.VERSION = "3.3.7", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, i.prototype.toggle = function(e) {
    return this.isShown ? this.hide() : this.show(e)
  }, i.prototype.show = function(t) {
    var n = this,
      o = e.Event("show.bs.modal", {
        relatedTarget: t
      });
    this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
      n.$element.one("mouseup.dismiss.bs.modal", function(t) {
        e(t.target).is(n.$element) && (n.ignoreBackdropClick = !0)
      })
    }), this.backdrop(function() {
      var o = e.support.transition && n.$element.hasClass("fade");
      n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), o && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
      var s = e.Event("shown.bs.modal", {
        relatedTarget: t
      });
      o ? n.$dialog.one("bsTransitionEnd", function() {
        n.$element.trigger("focus").trigger(s)
      }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(s)
    }))
  }, i.prototype.hide = function(t) {
    t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
  }, i.prototype.enforceFocus = function() {
    e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
      document === e.target || this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
    }, this))
  }, i.prototype.escape = function() {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) {
      27 == e.which && this.hide()
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
  }, i.prototype.resize = function() {
    this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
  }, i.prototype.hideModal = function() {
    var e = this;
    this.$element.hide(), this.backdrop(function() {
      e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
    })
  }, i.prototype.removeBackdrop = function() {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
  }, i.prototype.backdrop = function(t) {
    var n = this,
      o = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
      var s = e.support.transition && o;
      if (this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
          if (this.ignoreBackdropClick) return void(this.ignoreBackdropClick = !1);
          e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
        }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
      s ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : t()
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");
      var a = function() {
        n.removeBackdrop(), t && t()
      };
      e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a()
    } else t && t()
  }, i.prototype.handleUpdate = function() {
    this.adjustDialog()
  }, i.prototype.adjustDialog = function() {
    var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
      paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
    })
  }, i.prototype.resetAdjustments = function() {
    this.$element.css({
      paddingLeft: "",
      paddingRight: ""
    })
  }, i.prototype.checkScrollbar = function() {
    var e = window.innerWidth;
    if (!e) {
      var t = document.documentElement.getBoundingClientRect();
      e = t.right - Math.abs(t.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
  }, i.prototype.setScrollbar = function() {
    var e = parseInt(this.$body.css("padding-right") || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
  }, i.prototype.resetScrollbar = function() {
    this.$body.css("padding-right", this.originalBodyPad)
  }, i.prototype.measureScrollbar = function() {
    var e = document.createElement("div");
    e.className = "modal-scrollbar-measure", this.$body.append(e);
    var t = e.offsetWidth - e.clientWidth;
    return this.$body[0].removeChild(e), t
  };
  var n = e.fn.modal;
  e.fn.modal = t, e.fn.modal.Constructor = i, e.fn.modal.noConflict = function() {
    return e.fn.modal = n, this
  }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
    var n = e(this),
      o = n.attr("href"),
      s = e(n.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
      a = s.data("bs.modal") ? "toggle" : e.extend({
        remote: !/#/.test(o) && o
      }, s.data(), n.data());
    n.is("a") && i.preventDefault(), s.one("show.bs.modal", function(e) {
      e.isDefaultPrevented() || s.one("hidden.bs.modal", function() {
        n.is(":visible") && n.trigger("focus")
      })
    }), t.call(s, a, this)
  })
}(jQuery),
function(e) {
  "use strict";

  function t(t) {
    return this.each(function() {
      var n = e(this),
        o = n.data("bs.tooltip"),
        s = "object" == typeof t && t;
      !o && /destroy|hide/.test(t) || (o || n.data("bs.tooltip", o = new i(this, s)), "string" == typeof t && o[t]())
    })
  }
  var i = function(e, t) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", e, t)
  };
  i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
      selector: "body",
      padding: 0
    }
  }, i.prototype.init = function(t, i, n) {
    if (this.enabled = !0, this.type = t, this.$element = e(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && e(e.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
        click: !1,
        hover: !1,
        focus: !1
      }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
    for (var o = this.options.trigger.split(" "), s = o.length; s--;) {
      var a = o[s];
      if ("click" == a) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
      else if ("manual" != a) {
        var r = "hover" == a ? "mouseenter" : "focusin",
          l = "hover" == a ? "mouseleave" : "focusout";
        this.$element.on(r + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
      }
    }
    this.options.selector ? this._options = e.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }) : this.fixTitle()
  }, i.prototype.getDefaults = function() {
    return i.DEFAULTS
  }, i.prototype.getOptions = function(t) {
    return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
      show: t.delay,
      hide: t.delay
    }), t
  }, i.prototype.getDelegateOptions = function() {
    var t = {},
      i = this.getDefaults();
    return this._options && e.each(this._options, function(e, n) {
      i[e] != n && (t[e] = n)
    }), t
  }, i.prototype.enter = function(t) {
    var i = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
    return i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, i)), t instanceof e.Event && (i.inState["focusin" == t.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
      "in" == i.hoverState && i.show()
    }, i.options.delay.show)) : i.show())
  }, i.prototype.isInStateTrue = function() {
    for (var e in this.inState)
      if (this.inState[e]) return !0;
    return !1
  }, i.prototype.leave = function(t) {
    var i = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
    if (i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, i)), t instanceof e.Event && (i.inState["focusout" == t.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) {
      if (clearTimeout(i.timeout), i.hoverState = "out", !i.options.delay || !i.options.delay.hide) return i.hide();
      i.timeout = setTimeout(function() {
        "out" == i.hoverState && i.hide()
      }, i.options.delay.hide)
    }
  }, i.prototype.show = function() {
    var t = e.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
      this.$element.trigger(t);
      var n = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
      if (t.isDefaultPrevented() || !n) return;
      var o = this,
        s = this.tip(),
        a = this.getUID(this.type);
      this.setContent(), s.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && s.addClass("fade");
      var r = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
        l = /\s?auto?\s?/i,
        c = l.test(r);
      c && (r = r.replace(l, "") || "top"), s.detach().css({
        top: 0,
        left: 0,
        display: "block"
      }).addClass(r).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
      var d = this.getPosition(),
        u = s[0].offsetWidth,
        h = s[0].offsetHeight;
      if (c) {
        var f = r,
          p = this.getPosition(this.$viewport);
        r = "bottom" == r && d.bottom + h > p.bottom ? "top" : "top" == r && d.top - h < p.top ? "bottom" : "right" == r && d.right + u > p.width ? "left" : "left" == r && d.left - u < p.left ? "right" : r, s.removeClass(f).addClass(r)
      }
      var m = this.getCalculatedOffset(r, d, u, h);
      this.applyPlacement(m, r);
      var g = function() {
        var e = o.hoverState;
        o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == e && o.leave(o)
      };
      e.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", g).emulateTransitionEnd(i.TRANSITION_DURATION) : g()
    }
  }, i.prototype.applyPlacement = function(t, i) {
    var n = this.tip(),
      o = n[0].offsetWidth,
      s = n[0].offsetHeight,
      a = parseInt(n.css("margin-top"), 10),
      r = parseInt(n.css("margin-left"), 10);
    isNaN(a) && (a = 0), isNaN(r) && (r = 0), t.top += a, t.left += r, e.offset.setOffset(n[0], e.extend({
      using: function(e) {
        n.css({
          top: Math.round(e.top),
          left: Math.round(e.left)
        })
      }
    }, t), 0), n.addClass("in");
    var l = n[0].offsetWidth,
      c = n[0].offsetHeight;
    "top" == i && c != s && (t.top = t.top + s - c);
    var d = this.getViewportAdjustedDelta(i, t, l, c);
    d.left ? t.left += d.left : t.top += d.top;
    var u = /top|bottom/.test(i),
      h = u ? 2 * d.left - o + l : 2 * d.top - s + c,
      f = u ? "offsetWidth" : "offsetHeight";
    n.offset(t), this.replaceArrow(h, n[0][f], u)
  }, i.prototype.replaceArrow = function(e, t, i) {
    this.arrow().css(i ? "left" : "top", 50 * (1 - e / t) + "%").css(i ? "top" : "left", "")
  }, i.prototype.setContent = function() {
    var e = this.tip(),
      t = this.getTitle();
    e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
  }, i.prototype.hide = function(t) {
    function n() {
      "in" != o.hoverState && s.detach(), o.$element && o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), t && t()
    }
    var o = this,
      s = e(this.$tip),
      a = e.Event("hide.bs." + this.type);
    if (this.$element.trigger(a), !a.isDefaultPrevented()) return s.removeClass("in"), e.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), this.hoverState = null, this
  }, i.prototype.fixTitle = function() {
    var e = this.$element;
    (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
  }, i.prototype.hasContent = function() {
    return this.getTitle()
  }, i.prototype.getPosition = function(t) {
    t = t || this.$element;
    var i = t[0],
      n = "BODY" == i.tagName,
      o = i.getBoundingClientRect();
    null == o.width && (o = e.extend({}, o, {
      width: o.right - o.left,
      height: o.bottom - o.top
    }));
    var s = window.SVGElement && i instanceof window.SVGElement,
      a = n ? {
        top: 0,
        left: 0
      } : s ? null : t.offset(),
      r = {
        scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
      },
      l = n ? {
        width: e(window).width(),
        height: e(window).height()
      } : null;
    return e.extend({}, o, r, l, a)
  }, i.prototype.getCalculatedOffset = function(e, t, i, n) {
    return "bottom" == e ? {
      top: t.top + t.height,
      left: t.left + t.width / 2 - i / 2
    } : "top" == e ? {
      top: t.top - n,
      left: t.left + t.width / 2 - i / 2
    } : "left" == e ? {
      top: t.top + t.height / 2 - n / 2,
      left: t.left - i
    } : {
      top: t.top + t.height / 2 - n / 2,
      left: t.left + t.width
    }
  }, i.prototype.getViewportAdjustedDelta = function(e, t, i, n) {
    var o = {
      top: 0,
      left: 0
    };
    if (!this.$viewport) return o;
    var s = this.options.viewport && this.options.viewport.padding || 0,
      a = this.getPosition(this.$viewport);
    if (/right|left/.test(e)) {
      var r = t.top - s - a.scroll,
        l = t.top + s - a.scroll + n;
      r < a.top ? o.top = a.top - r : l > a.top + a.height && (o.top = a.top + a.height - l)
    } else {
      var c = t.left - s,
        d = t.left + s + i;
      c < a.left ? o.left = a.left - c : d > a.right && (o.left = a.left + a.width - d)
    }
    return o
  }, i.prototype.getTitle = function() {
    var e = this.$element,
      t = this.options;
    return e.attr("data-original-title") || ("function" == typeof t.title ? t.title.call(e[0]) : t.title)
  }, i.prototype.getUID = function(e) {
    do {
      e += ~~(1e6 * Math.random())
    } while (document.getElementById(e));
    return e
  }, i.prototype.tip = function() {
    if (!this.$tip && (this.$tip = e(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
    return this.$tip
  }, i.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
  }, i.prototype.enable = function() {
    this.enabled = !0
  }, i.prototype.disable = function() {
    this.enabled = !1
  }, i.prototype.toggleEnabled = function() {
    this.enabled = !this.enabled
  }, i.prototype.toggle = function(t) {
    var i = this;
    t && ((i = e(t.currentTarget).data("bs." + this.type)) || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, i))), t ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
  }, i.prototype.destroy = function() {
    var e = this;
    clearTimeout(this.timeout), this.hide(function() {
      e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), e.$tip = null, e.$arrow = null, e.$viewport = null, e.$element = null
    })
  };
  var n = e.fn.tooltip;
  e.fn.tooltip = t, e.fn.tooltip.Constructor = i, e.fn.tooltip.noConflict = function() {
    return e.fn.tooltip = n, this
  }
}(jQuery),
function(e) {
  "use strict";

  function t() {
    var e = document.createElement("bootstrap"),
      t = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
      };
    for (var i in t)
      if (void 0 !== e.style[i]) return {
        end: t[i]
      };
    return !1
  }
  e.fn.emulateTransitionEnd = function(t) {
    var i = !1,
      n = this;
    e(this).one("bsTransitionEnd", function() {
      i = !0
    });
    var o = function() {
      i || e(n).trigger(e.support.transition.end)
    };
    return setTimeout(o, t), this
  }, e(function() {
    e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = {
      bindType: e.support.transition.end,
      delegateType: e.support.transition.end,
      handle: function(t) {
        if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
      }
    })
  })
}(jQuery);
var jsvat = function() {
  "use strict";

  function e(e, t, i) {
    this.value = e || null, this.isValid = !!t, i && (this.country = {
      name: i.name,
      isoCode: {
        short: i.codes[0],
        long: i.codes[1],
        numeric: i.codes[2]
      }
    })
  }

  function t(e) {
    return e = e || "", e.toString().toUpperCase().replace(/(\s|-|\.)+/g, "")
  }

  function i(e, t) {
    return e === t[0] || e === t[1] || e === t[2]
  }

  function n(e, t) {
    if (!e) return !1;
    for (var n = 0; n < e.length; n++) {
      var o = e[n].toUpperCase();
      if (o === t.name.toUpperCase()) return !0;
      if (i(o, t.codes)) return !0
    }
    return !1
  }

  function o(e, t, i) {
    if (n(t, e)) return !0;
    var o = n(i, e);
    return i.length > 0 && !o
  }

  function s(e, t) {
    for (var i in t)
      if (t.hasOwnProperty(i)) {
        var n = a(e, t[i].rules.regex);
        if (n.isValid) return t[i]
      } return null
  }

  function a(e, t) {
    for (var i = 0; i < t.length; i++) {
      var n = t[i];
      if (n.test(e)) return {
        isValid: !0,
        regex: n
      }
    }
    return {
      isValid: !1
    }
  }

  function r(e, t) {
    return t.calcFn(e)
  }

  function l(e, t) {
    var i = a(e, t.rules.regex);
    return !!i.isValid && r(i.regex.exec(e)[2], t)
  }
  var c = {
    blocked: [],
    allowed: [],
    countries: {},
    checkVAT: function(i) {
      if (!i) throw new Error("VAT should be specified");
      var n = t(i),
        a = new e(n),
        r = s(n, this.countries);
      if (!r) return a;
      if (o(r, this.blocked, this.allowed)) return new e(n, !1, r);
      var c = l(n, r);
      return c ? new e(n, c, r) : a
    }
  };
  return c.countries.austria = {
    name: "Austria",
    codes: ["AT", "AUT", "040"],
    calcFn: function(e) {
      for (var t, i = 0, n = 0; n < 7; n++) t = e.charAt(n) * this.rules.multipliers[n], i += t > 9 ? Math.floor(t / 10) + t % 10 : t;
      return i = 10 - (i + 4) % 10, 10 === i && (i = 0), i === +e.slice(7, 8)
    },
    rules: {
      multipliers: [1, 2, 1, 2, 1, 2, 1],
      regex: [/^(AT)U(\d{8})$/]
    }
  }, c.countries.belgium = {
    name: "Belgium",
    codes: ["BE", "BEL", "056"],
    calcFn: function(e) {
      return 9 === e.length && (e = "0" + e), 0 != +e.slice(1, 2) && 97 - +e.slice(0, 8) % 97 == +e.slice(8, 10)
    },
    rules: {
      regex: [/^(BE)(0?\d{9})$/]
    }
  }, c.countries.bulgaria = {
    name: "Bulgaria",
    codes: ["BG", "BGR", "100"],
    calcFn: function(e) {
      function t(e, t, i, n, o) {
        for (var s = i; s < n; s++) e += +t.charAt(s) * (s + o);
        return e
      }

      function i(e, t, i, n, o) {
        for (var s = i; s < n; s++) e += +t.charAt(s) * o[s];
        return e
      }
      return 9 === e.length ? function(e) {
        var i, n = 0,
          o = +e.slice(8);
        return n = t(n, e, 0, 8, 1), 10 !== (i = n % 11) ? i === o : (n = t(0, e, 0, 8, 3), i = n % 11, 10 === i && (i = 0), i === o)
      }(e) : function(e, t) {
        if (/^\d\d[0-5]\d[0-3]\d\d{4}$/.test(e)) {
          var n = +e.slice(2, 4);
          if (n > 0 && n < 13 || n > 20 && n < 33 || n > 40 && n < 53) {
            var o = i(0, e, 0, 9, t.multipliers.physical);
            if (o %= 11, 10 === o && (o = 0), o === +e.substr(9, 1)) return !0
          }
        }
        return !1
      }(e, this.rules) || function(e, t) {
        if (i(0, e, 0, 9, t.multipliers.foreigner) % 10 == +e.substr(9, 1)) return !0
      }(e, this.rules) || function(e, t) {
        var n = i(0, e, 0, 9, t.multipliers.miscellaneous);
        return 10 != (n = 11 - n % 11) && (11 === n && (n = 0), n === +e.substr(9, 1))
      }(e, this.rules)
    },
    rules: {
      multipliers: {
        physical: [2, 4, 8, 5, 10, 9, 7, 3, 6],
        foreigner: [21, 19, 17, 13, 11, 9, 7, 3, 1],
        miscellaneous: [4, 3, 2, 7, 6, 5, 4, 3, 2]
      },
      regex: [/^(BG)(\d{9,10})$/]
    }
  }, c.countries.croatia = {
    name: "Croatia",
    codes: ["HR", "HRV", "191"],
    calcFn: function(e) {
      for (var t, i = 10, n = 0, o = 0; o < 10; o++) n = (+e.charAt(o) + i) % 10, 0 === n && (n = 10), i = 2 * n % 11;
      return t = +e.slice(10, 11), (i + t) % 10 == 1
    },
    rules: {
      regex: [/^(HR)(\d{11})$/]
    }
  }, c.countries.cyprus = {
    name: "Cyprus",
    codes: ["CY", "CYP", "196"],
    calcFn: function(e) {
      var t, i = 0;
      if (12 == +e.slice(0, 2)) return !1;
      for (var n = 0; n < 8; n++) {
        var o = +e.charAt(n);
        if (n % 2 == 0) switch (o) {
          case 0:
            o = 1;
            break;
          case 1:
            o = 0;
            break;
          case 2:
            o = 5;
            break;
          case 3:
            o = 7;
            break;
          case 4:
            o = 9;
            break;
          default:
            o = 2 * o + 3
        }
        i += o
      }
      return i %= 26, i = String.fromCharCode(i + 65), t = e.substr(8, 1), i === t
    },
    rules: {
      regex: [/^(CY)([0-59]\d{7}[A-Z])$/]
    }
  }, c.countries.czech_republic = {
    name: "Czech Republic",
    codes: ["CZ", "CZE", "203"],
    calcFn: function(e) {
      return !! function(e, t) {
        var i = 0;
        if (t.additional[0].test(e)) {
          for (var n = 0; n < 7; n++) i += +e.charAt(n) * t.multipliers[n];
          i = 11 - i % 11, 10 === i && (i = 0), 11 === i && (i = 1);
          return i === +e.slice(7, 8)
        }
        return !1
      }(e, this.rules) || (!! function(e, t) {
        var i = 0;
        if (t.additional[2].test(e)) {
          for (var n = 0; n < 7; n++) i += +e.charAt(n + 1) * t.multipliers[n];
          i = 11 - i % 11, 10 === i && (i = 0), 11 === i && (i = 1);
          var o = +e.slice(8, 9);
          return t.lookup[i - 1] === o
        }
        return !1
      }(e, this.rules) || !! function(e, t) {
        if (t.additional[3].test(e)) {
          var i = +e.slice(0, 2) + e.slice(2, 4) + e.slice(4, 6) + e.slice(6, 8) + e.slice(8),
            n = +e % 11 == 0;
          return !(i % 11 != 0 || !n)
        }
        return !1
      }(e, this.rules))
    },
    rules: {
      multipliers: [8, 7, 6, 5, 4, 3, 2],
      lookup: [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10],
      regex: [/^(CZ)(\d{8,10})(\d{3})?$/],
      additional: [/^\d{8}$/, /^[0-5][0-9][0|1|5|6]\d[0-3]\d\d{3}$/, /^6\d{8}$/, /^\d{2}[0-3|5-8]\d[0-3]\d\d{4}$/]
    }
  }, c.countries.denmark = {
    name: "Denmark",
    codes: ["DK", "DNK", "208"],
    calcFn: function(e) {
      for (var t = 0, i = 0; i < 8; i++) t += +e.charAt(i) * this.rules.multipliers[i];
      return t % 11 == 0
    },
    rules: {
      multipliers: [2, 7, 6, 5, 4, 3, 2, 1],
      regex: [/^(DK)(\d{8})$/]
    }
  }, c.countries.estonia = {
    name: "Estonia",
    codes: ["EE", "EST", "233"],
    calcFn: function(e) {
      for (var t, i = 0, n = 0; n < 8; n++) i += +e.charAt(n) * this.rules.multipliers[n];
      return i = 10 - i % 10, 10 === i && (i = 0), t = +e.slice(8, 9), i === t
    },
    rules: {
      multipliers: [3, 7, 1, 3, 7, 1, 3, 7],
      regex: [/^(EE)(10\d{7})$/]
    }
  }, c.countries.europe = {
    name: "Europe",
    codes: ["EU", "EUR", "000"],
    calcFn: function() {
      return !0
    },
    rules: {
      regex: [/^(EU)(\d{9})$/]
    }
  }, c.countries.finland = {
    name: "Finland",
    codes: ["FI", "FIN", "246"],
    calcFn: function(e) {
      for (var t, i = 0, n = 0; n < 7; n++) i += +e.charAt(n) * this.rules.multipliers[n];
      return i = 11 - i % 11, i > 9 && (i = 0), t = +e.slice(7, 8), i === t
    },
    rules: {
      multipliers: [7, 9, 10, 5, 8, 4, 2],
      regex: [/^(FI)(\d{8})$/]
    }
  }, c.countries.france = {
    name: "France",
    codes: ["FR", "FRA", "250"],
    calcFn: function(e) {
      var t, i;
      return !/^\d{11}$/.test(e) || (t = +e.substring(2), t = (100 * t + 12) % 97, i = +e.slice(0, 2), t === i)
    },
    rules: {
      regex: [/^(FR)(\d{11})$/, /^(FR)([A-HJ-NP-Z]\d{10})$/, /^(FR)(\d[A-HJ-NP-Z]\d{9})$/, /^(FR)([A-HJ-NP-Z]{2}\d{9})$/]
    }
  }, c.countries.germany = {
    name: "Germany",
    codes: ["DE", "DEU", "276"],
    calcFn: function(e) {
      for (var t, i = 10, n = 0, o = 0, s = 0; s < 8; s++) n = (+e.charAt(s) + i) % 10, 0 === n && (n = 10), i = 2 * n % 11;
      return o = 11 - i == 10 ? 0 : 11 - i, t = +e.slice(8, 9), o === t
    },
    rules: {
      regex: [/^(DE)([1-9]\d{8})$/]
    }
  }, c.countries.greece = {
    name: "Greece",
    codes: ["GR", "GRC", "300"],
    calcFn: function(e) {
      var t, i = 0;
      8 === e.length && (e = "0" + e);
      for (var n = 0; n < 8; n++) i += +e.charAt(n) * this.rules.multipliers[n];
      return i %= 11, i > 9 && (i = 0), t = +e.slice(8, 9), i === t
    },
    rules: {
      multipliers: [256, 128, 64, 32, 16, 8, 4, 2],
      regex: [/^(EL)(\d{9})$/]
    }
  }, c.countries.hungary = {
    name: "Hungary",
    codes: ["HU", "HUN", "348"],
    calcFn: function(e) {
      for (var t, i = 0, n = 0; n < 7; n++) i += +e.charAt(n) * this.rules.multipliers[n];
      return i = 10 - i % 10, 10 === i && (i = 0), t = +e.slice(7, 8), i === t
    },
    rules: {
      multipliers: [9, 7, 3, 1, 9, 7, 3],
      regex: [/^(HU)(\d{8})$/]
    }
  }, c.countries.ireland = {
    name: "Ireland",
    codes: ["IE", "IRL", "372"],
    calcFn: function(e) {
      var t, i = 0;
      this.rules.typeFormats.first.test(e) && (e = "0" + e.substring(2, 7) + e.substring(0, 1) + e.substring(7, 8));
      for (var n = 0; n < 7; n++) i += +e.charAt(n) * this.rules.multipliers[n];
      return this.rules.typeFormats.third.test(e) && ("H" === e.charAt(8) ? i += 72 : i += 9), i %= 23, i = 0 === i ? "W" : String.fromCharCode(i + 64), t = e.slice(7, 8), i === t
    },
    rules: {
      multipliers: [8, 7, 6, 5, 4, 3, 2],
      typeFormats: {
        first: /^\d[A-Z*+]/,
        third: /^\d{7}[A-Z][AH]$/
      },
      regex: [/^(IE)(\d{7}[A-W])$/, /^(IE)([7-9][A-Z*+)]\d{5}[A-W])$/, /^(IE)(\d{7}[A-W][AH])$/]
    }
  }, c.countries.italy = {
    name: "Italy",
    codes: ["IT", "ITA", "380"],
    calcFn: function(e) {
      var t, i, n = 0;
      if (0 == +e.slice(0, 7)) return !1;
      if ((t = +e.slice(7, 10)) < 1 || t > 201 && 999 !== t && 888 !== t) return !1;
      for (var o = 0; o < 10; o++) t = +e.charAt(o) * this.rules.multipliers[o], n += t > 9 ? Math.floor(t / 10) + t % 10 : t;
      return n = 10 - n % 10, n > 9 && (n = 0), i = +e.slice(10, 11), n === i
    },
    rules: {
      multipliers: [1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
      regex: [/^(IT)(\d{11})$/]
    }
  }, c.countries.latvia = {
    name: "Latvia",
    codes: ["LV", "LVA", "428"],
    calcFn: function(e) {
      var t, i = 0;
      if (/^[0-3]/.test(e)) return !!/^[0-3][0-9][0-1][0-9]/.test(e);
      for (var n = 0; n < 10; n++) i += +e.charAt(n) * this.rules.multipliers[n];
      return i % 11 == 4 && 9 === e[0] && (i -= 45), i % 11 == 4 ? i = 4 - i % 11 : i % 11 > 4 ? i = 14 - i % 11 : i % 11 < 4 && (i = 3 - i % 11), t = +e.slice(10, 11), i === t
    },
    rules: {
      multipliers: [9, 1, 4, 8, 3, 10, 2, 5, 7, 6],
      regex: [/^(LV)(\d{11})$/]
    }
  }, c.countries.lithuania = {
    name: "Lithuania",
    codes: ["LT", "LTU", "440"],
    calcFn: function(e) {
      function t(e, t, i) {
        return +e.charAt(i) * t[i]
      }

      function i(e, i, n) {
        if (i % 11 == 10) {
          i = 0;
          for (var o = 0; o < 8; o++) i += t(e, n.multipliers.short, o)
        }
        return i
      }

      function n(e, t) {
        for (var i = 0; i < 8; i++) t += +e.charAt(i) * (i + 1);
        return t
      }

      function o(e) {
        return e %= 11, 10 === e && (e = 0), e
      }

      function s(e, i, n) {
        for (var o = 0; o < 11; o++) i += t(e, n.multipliers.med, o);
        return i
      }

      function a(e, i, n) {
        if (i % 11 == 10) {
          i = 0;
          for (var o = 0; o < 11; o++) i += t(e, n.multipliers.alt, o)
        }
        return i
      }
      return function(e, t) {
        var s = 0;
        if (9 === e.length) {
          if (!/^\d{7}1/.test(e)) return !1;
          s = n(e, s), s = i(e, s, t), s = o(s);
          return s === +e.slice(8, 9)
        }
        return !1
      }(e, this.rules) || function(e, t) {
        var i = 0;
        if (12 === e.length) {
          if (!t.check.test(e)) return !1;
          i = s(e, i, t), i = a(e, i, t), i = o(i);
          return i === +e.slice(11, 12)
        }
        return !1
      }(e, this.rules)
    },
    rules: {
      multipliers: {
        short: [3, 4, 5, 6, 7, 8, 9, 1],
        med: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2],
        alt: [3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4]
      },
      check: /^\d{10}1/,
      regex: [/^(LT)(\d{9}|\d{12})$/]
    }
  }, c.countries.luxembourg = {
    name: "Luxembourg",
    codes: ["LU", "LUX", "442"],
    calcFn: function(e) {
      var t = +e.slice(6, 8);
      return +e.slice(0, 6) % 89 === t
    },
    rules: {
      regex: [/^(LU)(\d{8})$/]
    }
  }, c.countries.malta = {
    name: "Malta",
    codes: ["MT", "MLT", "470"],
    calcFn: function(e) {
      for (var t, i = 0, n = 0; n < 6; n++) i += +e.charAt(n) * this.rules.multipliers[n];
      return i = 37 - i % 37, t = +e.slice(6, 8), i === t
    },
    rules: {
      multipliers: [3, 4, 6, 7, 8, 9],
      regex: [/^(MT)([1-9]\d{7})$/]
    }
  }, c.countries.netherlands = {
    name: "Netherlands",
    codes: ["NL", "NLD", "528"],
    calcFn: function(e) {
      for (var t, i = 0, n = 0; n < 8; n++) i += +e.charAt(n) * this.rules.multipliers[n];
      return i %= 11, i > 9 && (i = 0), t = +e.slice(8, 9), i === t
    },
    rules: {
      multipliers: [9, 8, 7, 6, 5, 4, 3, 2],
      regex: [/^(NL)(\d{9})B\d{2}$/]
    }
  }, c.countries.norway = {
    name: "Norway",
    codes: ["NO", "NOR", "578"],
    calcFn: function(e) {
      for (var t, i = 0, n = 0; n < 8; n++) i += +e.charAt(n) * this.rules.multipliers[n];
      if (i = 11 - i % 11, 11 === i && (i = 0), i < 10) return t = +e.slice(8, 9), i === t
    },
    rules: {
      multipliers: [3, 2, 7, 6, 5, 4, 3, 2],
      regex: [/^(NO)(\d{9})$/]
    }
  }, c.countries.poland = {
    name: "Poland",
    codes: ["PL", "POL", "616"],
    calcFn: function(e) {
      for (var t, i = 0, n = 0; n < 9; n++) i += +e.charAt(n) * this.rules.multipliers[n];
      return i %= 11, i > 9 && (i = 0), t = +e.slice(9, 10), i === t
    },
    rules: {
      multipliers: [6, 5, 7, 2, 3, 4, 5, 6, 7],
      regex: [/^(PL)(\d{10})$/]
    }
  }, c.countries.portugal = {
    name: "Portugal",
    codes: ["PT", "PRT", "620"],
    calcFn: function(e) {
      for (var t, i = 0, n = 0; n < 8; n++) i += +e.charAt(n) * this.rules.multipliers[n];
      return i = 11 - i % 11, i > 9 && (i = 0), t = +e.slice(8, 9), i === t
    },
    rules: {
      multipliers: [9, 8, 7, 6, 5, 4, 3, 2],
      regex: [/^(PT)(\d{9})$/]
    }
  }, c.countries.romania = {
    name: "Romania",
    codes: ["RO", "ROU", "642"],
    calcFn: function(e) {
      for (var t, i = 0, n = e.length, o = this.rules.multipliers.slice(10 - n), s = 0; s < e.length - 1; s++) i += +e.charAt(s) * o[s];
      return i = 10 * i % 11, 10 === i && (i = 0), t = +e.slice(e.length - 1, e.length), i === t
    },
    rules: {
      multipliers: [7, 5, 3, 2, 1, 7, 5, 3, 2],
      regex: [/^(RO)([1-9]\d{1,9})$/]
    }
  }, c.countries.russia = {
    name: "Russian Federation",
    codes: ["RU", "RUS", "643"],
    calcFn: function(e) {
      return function(e, t) {
        var i = 0;
        if (10 === e.length) {
          for (var n = 0; n < 10; n++) i += +e.charAt(n) * t.multipliers.m_1[n];
          i %= 11, i > 9 && (i %= 10);
          return i === +e.slice(9, 10)
        }
        return !1
      }(e, this.rules) || function(e, t) {
        var i = 0,
          n = 0;
        if (12 === e.length) {
          for (var o = 0; o < 11; o++) i += +e.charAt(o) * t.multipliers.m_2[o];
          i %= 11, i > 9 && (i %= 10);
          for (var s = 0; s < 11; s++) n += +e.charAt(s) * t.multipliers.m_3[s];
          n %= 11, n > 9 && (n %= 10);
          var a = i === +e.slice(10, 11),
            r = n === +e.slice(11, 12);
          return a && r
        }
        return !1
      }(e, this.rules)
    },
    rules: {
      multipliers: {
        m_1: [2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
        m_2: [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
        m_3: [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0]
      },
      regex: [/^(RU)(\d{10}|\d{12})$/]
    }
  }, c.countries.serbia = {
    name: "Serbia",
    codes: ["RS", "SRB", "688"],
    calcFn: function(e) {
      for (var t = 10, i = 0, n = 0; n < 8; n++) i = (+e.charAt(n) + t) % 10, 0 === i && (i = 10), t = 2 * i % 11;
      return 1 === (t + +e.slice(8, 9)) % 10
    },
    rules: {
      regex: [/^(RS)(\d{9})$/]
    }
  }, c.countries.slovakia_republic = {
    name: "Slovakia_",
    codes: ["SK", "SVK", "703"],
    calcFn: function(e) {
      return 0 == e % 11
    },
    rules: {
      regex: [/^(SK)([1-9]\d[2346-9]\d{7})$/]
    }
  }, c.countries.slovenia = {
    name: "Slovenia",
    codes: ["SI", "SVN", "705"],
    calcFn: function(e) {
      for (var t, i = 0, n = 0; n < 7; n++) i += +e.charAt(n) * this.rules.multipliers[n];
      return i = 11 - i % 11, 10 === i && (i = 0), t = +e.slice(7, 8), !(11 === i || i !== t)
    },
    rules: {
      multipliers: [8, 7, 6, 5, 4, 3, 2],
      regex: [/^(SI)([1-9]\d{7})$/]
    }
  }, c.countries.spain = {
    name: "Spain",
    codes: ["ES", "ESP", "724"],
    calcFn: function(e) {
      var t, i, n = 0,
        o = 0;
      if (this.rules.additional[0].test(e)) {
        for (n = 0; n < 7; n++) t = e.charAt(n + 1) * this.rules.multipliers[n], o += t > 9 ? Math.floor(t / 10) + t % 10 : t;
        return o = 10 - o % 10, 10 === o && (o = 0), i = +e.slice(8, 9), o === i
      }
      if (this.rules.additional[1].test(e)) {
        for (n = 0; n < 7; n++) t = e.charAt(n + 1) * this.rules.multipliers[n], o += t > 9 ? Math.floor(t / 10) + t % 10 : t;
        return o = 10 - o % 10, o = String.fromCharCode(o + 64), i = e.slice(8, 9), o === i
      }
      if (this.rules.additional[2].test(e)) {
        var s = e;
        return "Y" === s.substring(0, 1) && (s = s.replace(/Y/, "1")), "Z" === s.substring(0, 1) && (s = s.replace(/Z/, "2")), i = "TRWAGMYFPDXBNJZSQVHLCKE".charAt(+s.substring(0, 8) % 23), s.charAt(8) === i
      }
      return !!this.rules.additional[3].test(e) && (i = "TRWAGMYFPDXBNJZSQVHLCKE".charAt(+e.substring(1, 8) % 23), e.charAt(8) === i)
    },
    rules: {
      multipliers: [2, 1, 2, 1, 2, 1, 2],
      regex: [/^(ES)([A-Z]\d{8})$/, /^(ES)([A-HN-SW]\d{7}[A-J])$/, /^(ES)([0-9YZ]\d{7}[A-Z])$/, /^(ES)([KLMX]\d{7}[A-Z])$/],
      additional: [/^[A-H|J|U|V]\d{8}$/, /^[A-H|N-S|W]\d{7}[A-J]$/, /^[0-9|Y|Z]\d{7}[A-Z]$/, /^[K|L|M|X]\d{7}[A-Z]$/]
    }
  }, c.countries.sweden = {
    name: "Sweden",
    codes: ["SE", "SWE", "752"],
    calcFn: function(e) {
      for (var t, i, n = 0, o = 0; o < 9; o += 2) i = +e.charAt(o), n += Math.floor(i / 5) + 2 * i % 10;
      for (var s = 0, a = 1; a < 9; a += 2) s += +e.charAt(a);
      var r = (10 - (n + s) % 10) % 10;
      return t = +e.slice(9, 10), r === t
    },
    rules: {
      regex: [/^(SE)(\d{10}01)$/]
    }
  }, c.countries.switzerland = {
    name: "Switzerland",
    codes: ["CH", "CHE", "756"],
    calcFn: function(e) {
      for (var t = 0, i = 0; i < 8; i++) t += +e.charAt(i) * this.rules.multipliers[i];
      return 10 != (t = 11 - t % 11) && (11 === t && (t = 0), t === +e.substr(8, 1))
    },
    rules: {
      multipliers: [5, 4, 3, 2, 7, 6, 5, 4],
      regex: [/^(CHE)(\d{9})(MWST)?$/]
    }
  }, c.countries.united_kingdom = {
    name: "United Kingdom",
    codes: ["GB", "GBR", "826"],
    calcFn: function(e) {
      var t, i = 0;
      if ("GD" === e.substr(0, 2)) return t = 500, e.substr(2, 3) < t;
      if ("HA" === e.substr(0, 2)) return t = 499, e.substr(2, 3) > t;
      if (0 == +e.slice(0)) return !1;
      for (var n = +e.slice(0, 7), o = 0; o < 7; o++) i += +e.charAt(o) * this.rules.multipliers[o];
      for (var s = i; s > 0;) s -= 97;
      return (s = Math.abs(s)) === +e.slice(7, 9) && n < 9990001 && (n < 1e5 || n > 999999) && (n < 9490001 || n > 97e5) || (s >= 55 ? s -= 55 : s += 42, t = +e.slice(7, 9), !!(s === t && n > 1e6))
    },
    rules: {
      multipliers: [8, 7, 6, 5, 4, 3, 2],
      regex: [/^(GB)?(\d{9})$/, /^(GB)?(\d{12})$/, /^(GB)?(GD\d{3})$/, /^(GB)?(HA\d{3})$/]
    }
  }, "object" == typeof module && module.exports && (module.exports = c), c
}();
! function(e) {
  e.fn.hoverIntent = function(t, i, n) {
    var o = {
      interval: 100,
      sensitivity: 6,
      timeout: 0
    };
    o = "object" == typeof t ? e.extend(o, t) : e.isFunction(i) ? e.extend(o, {
      over: t,
      out: i,
      selector: n
    }) : e.extend(o, {
      over: t,
      out: t,
      selector: i
    });
    var s, a, r, l, c = function(e) {
        s = e.pageX, a = e.pageY
      },
      d = function(t, i) {
        if (i.hoverIntent_t = clearTimeout(i.hoverIntent_t), Math.sqrt((r - s) * (r - s) + (l - a) * (l - a)) < o.sensitivity) return e(i).off("mousemove.hoverIntent", c), i.hoverIntent_s = !0, o.over.apply(i, [t]);
        r = s, l = a, i.hoverIntent_t = setTimeout(function() {
          d(t, i)
        }, o.interval)
      },
      u = function(e, t) {
        return t.hoverIntent_t = clearTimeout(t.hoverIntent_t), t.hoverIntent_s = !1, o.out.apply(t, [e])
      },
      h = function(t) {
        var i = e.extend({}, t),
          n = this;
        n.hoverIntent_t && (n.hoverIntent_t = clearTimeout(n.hoverIntent_t)), "mouseenter" === t.type ? (r = i.pageX, l = i.pageY, e(n).on("mousemove.hoverIntent", c), n.hoverIntent_s || (n.hoverIntent_t = setTimeout(function() {
          d(i, n)
        }, o.interval))) : (e(n).off("mousemove.hoverIntent", c), n.hoverIntent_s && (n.hoverIntent_t = setTimeout(function() {
          u(i, n)
        }, o.timeout)))
      };
    return this.on({
      "mouseenter.hoverIntent": h,
      "mouseleave.hoverIntent": h
    }, o.selector)
  }
}(jQuery),
function(e) {
  var t = {},
    n = {
      mode: "horizontal",
      slideSelector: "",
      infiniteLoop: !0,
      hideControlOnEnd: !1,
      speed: 500,
      easing: null,
      slideMargin: 0,
      startSlide: 0,
      randomStart: !1,
      captions: !1,
      ticker: !1,
      tickerHover: !1,
      adaptiveHeight: !1,
      adaptiveHeightSpeed: 500,
      video: !1,
      useCSS: !0,
      preloadImages: "visible",
      responsive: !0,
      slideZIndex: 50,
      wrapperClass: "bx-wrapper",
      touchEnabled: !0,
      swipeThreshold: 50,
      oneToOneTouch: !0,
      preventDefaultSwipeX: !0,
      preventDefaultSwipeY: !1,
      pager: !0,
      pagerType: "full",
      pagerShortSeparator: " / ",
      pagerSelector: null,
      buildPager: null,
      pagerCustom: null,
      controls: !0,
      nextText: "Next",
      prevText: "Prev",
      nextSelector: null,
      prevSelector: null,
      autoControls: !1,
      startText: "Start",
      stopText: "Stop",
      autoControlsCombine: !1,
      autoControlsSelector: null,
      auto: !1,
      pause: 4e3,
      autoStart: !0,
      autoDirection: "next",
      autoHover: !1,
      autoDelay: 0,
      autoSlideForOnePage: !1,
      minSlides: 1,
      maxSlides: 1,
      moveSlides: 0,
      slideWidth: 0,
      autoReload: !1,
      onSliderLoad: function() {},
      onSlideBefore: function() {},
      onSlideAfter: function() {},
      onSlideNext: function() {},
      onSlidePrev: function() {},
      onSliderResize: function() {}
    };
  e.fn.bxSlider = function(o) {
    if (0 == this.length) return this;
    if (this.length > 1) return this.each(function() {
      e(this).bxSlider(o)
    }), this;
    var s = {},
      a = this;
    t.el = this;
    var r = e(window).width(),
      l = e(window).height(),
      c = function() {
        function t(e, t, i) {
          var n = (e - i * (t - 1)) / t;
          return Math.floor(n)
        }

        function i(e) {
          for (var t in e) s.settings[t] = e[t]
        }

        function l() {
          s.settings.slides && (s.settings.maxSlides = s.settings.slides, s.settings.minSlides = s.settings.slides, s.settings.slideWidth = t(r, s.settings.slides, s.settings.slideMargin))
        }

        function c(e) {
          return e = e.replace(/([a-zA-Z0-9]+?):/g, '"$1":'), e = e.replace(/'/g, '"'), jQuery.parseJSON(e)
        }
        s.settings = e.extend({}, n, o), l();
        var u = e(window).width();
        r = u;
        var h = e(a).attr("data-options");
        if (h) {
          var f = h.charAt(h.length - 1);
          "{" != h.charAt(0) && "}" != f && (h = "{" + h + "}");
          var p = c(h);
          for (var m in p) s.settings[m] = p[m];
          l()
        }
        var g = e(a).attr("data-breaks");
        if (g && (s.settings.breaks = c(g)), s.settings.breaks) {
          s.settings.breaks.sort(function(e, t) {
            return e.screen - t.screen
          });
          for (var v = 0; v < s.settings.breaks.length; ++v) {
            var y, b = s.settings.breaks[v],
              C = {},
              x = b.screen;
            v < s.settings.breaks.length - 1 ? (C = s.settings.breaks[v + 1], y = C.screen, u >= x && y > u && i(b)) : u >= x && i(b)
          }
          l()
        }
        s.settings.slideWidth = parseInt(s.settings.slideWidth), s.children = a.children(s.settings.slideSelector), s.children.length < s.settings.minSlides && (s.settings.minSlides = s.children.length), s.children.length < s.settings.maxSlides && (s.settings.maxSlides = s.children.length), s.settings.randomStart && (s.settings.startSlide = Math.floor(Math.random() * s.children.length)), s.active = {
          index: s.settings.startSlide
        }, s.carousel = s.settings.minSlides > 1 || s.settings.maxSlides > 1, s.carousel && (s.settings.preloadImages = "all"), s.minThreshold = s.settings.minSlides * s.settings.slideWidth + (s.settings.minSlides - 1) * s.settings.slideMargin, s.maxThreshold = s.settings.maxSlides * s.settings.slideWidth + (s.settings.maxSlides - 1) * s.settings.slideMargin, s.working = !1, s.controls = {}, s.interval = null, s.animProp = "vertical" == s.settings.mode ? "top" : "left", s.usingCSS = s.settings.useCSS && "fade" != s.settings.mode && function() {
          var e = document.createElement("div"),
            t = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
          for (var i in t)
            if (void 0 !== e.style[t[i]]) return s.cssPrefix = t[i].replace("Perspective", "").toLowerCase(), s.animProp = "-" + s.cssPrefix + "-transform", !0;
          return !1
        }(), "vertical" == s.settings.mode && (s.settings.maxSlides = s.settings.minSlides), a.data("origStyle", a.attr("style")), a.children(s.settings.slideSelector).each(function() {
          e(this).data("origStyle", e(this).attr("style"))
        }), d()
      },
      d = function() {
        a.wrap('<div class="' + s.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'), s.viewport = a.parent(), s.loader = e('<div class="bx-loading" />'), s.viewport.prepend(s.loader), a.css({
          width: "horizontal" == s.settings.mode ? 100 * s.children.length + 215 + "%" : "auto",
          position: "relative"
        }), s.usingCSS && s.settings.easing ? a.css("-" + s.cssPrefix + "-transition-timing-function", s.settings.easing) : s.settings.easing || (s.settings.easing = "swing"), g(), s.viewport.css({
          width: "100%",
          overflow: "hidden",
          position: "relative"
        }), s.viewport.parent().css({
          maxWidth: p()
        }), s.settings.pager || s.viewport.parent().css({
          margin: "0 auto 0px"
        }), s.children.css({
          float: "horizontal" == s.settings.mode ? "left" : "none",
          listStyle: "none",
          position: "relative"
        }), s.children.css("width", m()), "horizontal" == s.settings.mode && s.settings.slideMargin > 0 && s.children.css("marginRight", s.settings.slideMargin), "vertical" == s.settings.mode && s.settings.slideMargin > 0 && s.children.css("marginBottom", s.settings.slideMargin), "fade" == s.settings.mode && (s.children.css({
          position: "absolute",
          zIndex: 0,
          display: "none"
        }), s.children.eq(s.settings.startSlide).css({
          zIndex: s.settings.slideZIndex,
          display: "block"
        })), s.controls.el = e('<div class="bx-controls" />'), s.settings.captions && _(), s.active.last = s.settings.startSlide == v() - 1, s.settings.video && a.fitVids();
        var t = s.children.eq(s.settings.startSlide);
        "all" == s.settings.preloadImages && (t = s.children), s.settings.ticker ? s.settings.pager = !1 : (s.settings.pager && w(), s.settings.controls && E(), s.settings.auto && s.settings.autoControls && S(), (s.settings.controls || s.settings.autoControls || s.settings.pager) && s.viewport.after(s.controls.el)), u(t, h)
      },
      u = function(t, i) {
        var n = t.find("img, iframe").length;
        if (0 == n) return void i();
        var o = 0;
        t.find("img, iframe").each(function() {
          e(this).one("load", function() {
            ++o == n && i()
          }).each(function() {
            this.complete && e(this).trigger("load")
          })
        })
      },
      h = function() {
        if (s.settings.infiniteLoop && "fade" != s.settings.mode && !s.settings.ticker) {
          var t = "vertical" == s.settings.mode ? s.settings.minSlides : s.settings.maxSlides,
            i = s.children.slice(0, t).clone().addClass("bx-clone"),
            n = s.children.slice(-t).clone().addClass("bx-clone");
          a.append(i).prepend(n)
        }
        s.loader.remove(), b(), "vertical" == s.settings.mode && (s.settings.adaptiveHeight = !0), s.viewport.height(f()), a.redrawSlider(), s.settings.onSliderLoad(s.active.index), s.initialized = !0, s.settings.responsive && e(window).bind("resize", O), s.settings.auto && s.settings.autoStart && (v() > 1 || s.settings.autoSlideForOnePage) && L(), s.settings.ticker && A(), s.settings.pager && M(s.settings.startSlide), s.settings.controls && P(), s.settings.touchEnabled && !s.settings.ticker && j()
      },
      f = function() {
        var t = 0,
          n = e();
        if ("vertical" == s.settings.mode || s.settings.adaptiveHeight)
          if (s.carousel) {
            var o = 1 == s.settings.moveSlides ? s.active.index : s.active.index * y();
            for (n = s.children.eq(o), i = 1; i <= s.settings.maxSlides - 1; i++) n = n.add(o + i >= s.children.length ? s.children.eq(i - 1) : s.children.eq(o + i))
          } else n = s.children.eq(s.active.index);
        else n = s.children;
        return "vertical" == s.settings.mode ? (n.each(function() {
          t += e(this).outerHeight()
        }), s.settings.slideMargin > 0 && (t += s.settings.slideMargin * (s.settings.minSlides - 1))) : t = Math.max.apply(Math, n.map(function() {
          return e(this).outerHeight(!1)
        }).get()), "border-box" == s.viewport.css("box-sizing") ? t += parseFloat(s.viewport.css("padding-top")) + parseFloat(s.viewport.css("padding-bottom")) + parseFloat(s.viewport.css("border-top-width")) + parseFloat(s.viewport.css("border-bottom-width")) : "padding-box" == s.viewport.css("box-sizing") && (t += parseFloat(s.viewport.css("padding-top")) + parseFloat(s.viewport.css("padding-bottom"))), t
      },
      p = function() {
        var e = "100%";
        return s.settings.slideWidth > 0 && (e = "horizontal" == s.settings.mode ? s.settings.maxSlides * s.settings.slideWidth + (s.settings.maxSlides - 1) * s.settings.slideMargin : s.settings.slideWidth), e
      },
      m = function() {
        var e = s.settings.slideWidth,
          t = s.viewport.width();
        return 0 == s.settings.slideWidth || s.settings.slideWidth > t && !s.carousel || "vertical" == s.settings.mode ? e = t : s.settings.maxSlides > 1 && "horizontal" == s.settings.mode && (t > s.maxThreshold || t < s.minThreshold && (e = (t - s.settings.slideMargin * (s.settings.minSlides - 1)) / s.settings.minSlides)), e
      },
      g = function() {
        var e = 1;
        if ("horizontal" == s.settings.mode && s.settings.slideWidth > 0)
          if (s.viewport.width() < s.minThreshold) e = s.settings.minSlides;
          else if (s.viewport.width() > s.maxThreshold) e = s.settings.maxSlides;
        else {
          var t = s.children.first().width() + s.settings.slideMargin;
          e = Math.floor((s.viewport.width() + s.settings.slideMargin) / t)
        } else "vertical" == s.settings.mode && (e = s.settings.minSlides);
        return e
      },
      v = function() {
        var e = 0;
        if (s.settings.moveSlides > 0)
          if (s.settings.infiniteLoop) e = Math.ceil(s.children.length / y());
          else
            for (var t = 0, i = 0; t < s.children.length;) ++e, t = i + g(), i += s.settings.moveSlides <= g() ? s.settings.moveSlides : g();
        else e = Math.ceil(s.children.length / g());
        return e
      },
      y = function() {
        return s.settings.moveSlides > 0 && s.settings.moveSlides <= g() ? s.settings.moveSlides : g()
      },
      b = function() {
        if (s.children.length > s.settings.maxSlides && s.active.last && !s.settings.infiniteLoop) {
          if ("horizontal" == s.settings.mode) {
            var e = s.children.last(),
              t = e.position();
            C(-(t.left - (s.viewport.width() - e.outerWidth())), "reset", 0)
          } else if ("vertical" == s.settings.mode) {
            var i = s.children.length - s.settings.minSlides,
              t = s.children.eq(i).position();
            C(-t.top, "reset", 0)
          }
        } else {
          var t = s.children.eq(s.active.index * y()).position();
          s.active.index == v() - 1 && (s.active.last = !0), void 0 != t && ("horizontal" == s.settings.mode ? C(-t.left, "reset", 0) : "vertical" == s.settings.mode && C(-t.top, "reset", 0))
        }
      },
      C = function(e, t, i, n) {
        if (s.usingCSS) {
          var o = "vertical" == s.settings.mode ? "translate3d(0, " + e + "px, 0)" : "translate3d(" + e + "px, 0, 0)";
          a.css("-" + s.cssPrefix + "-transition-duration", i / 1e3 + "s"), "slide" == t ? (a.css(s.animProp, o), a.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
            a.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), F()
          })) : "reset" == t ? a.css(s.animProp, o) : "ticker" == t && (a.css("-" + s.cssPrefix + "-transition-timing-function", "linear"), a.css(s.animProp, o), a.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
            a.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), C(n.resetValue, "reset", 0), N()
          }))
        } else {
          var r = {};
          r[s.animProp] = e, "slide" == t ? a.animate(r, i, s.settings.easing, function() {
            F()
          }) : "reset" == t ? a.css(s.animProp, e) : "ticker" == t && a.animate(r, speed, "linear", function() {
            C(n.resetValue, "reset", 0), N()
          })
        }
      },
      x = function() {
        for (var t = "", i = v(), n = 0; i > n; n++) {
          var o = "";
          s.settings.buildPager && e.isFunction(s.settings.buildPager) ? (o = s.settings.buildPager(n), s.pagerEl.addClass("bx-custom-pager")) : (o = n + 1, s.pagerEl.addClass("bx-default-pager")), t += '<div class="bx-pager-item"><a href="" data-slide-index="' + n + '" class="bx-pager-link">' + o + "</a></div>"
        }
        s.pagerEl.html(t)
      },
      w = function() {
        s.settings.pagerCustom ? s.pagerEl = e(s.settings.pagerCustom) : (s.pagerEl = e('<div class="bx-pager" />'), s.settings.pagerSelector ? e(s.settings.pagerSelector).html(s.pagerEl) : s.controls.el.addClass("bx-has-pager").append(s.pagerEl), x()), s.pagerEl.on("click", "a", H)
      },
      E = function() {
        s.controls.next = e('<a class="bx-next" href="">' + s.settings.nextText + "</a>"), s.controls.prev = e('<a class="bx-prev" href="">' + s.settings.prevText + "</a>"), s.controls.next.bind("click", T), s.controls.prev.bind("click", k), s.settings.nextSelector && e(s.settings.nextSelector).append(s.controls.next), s.settings.prevSelector && e(s.settings.prevSelector).append(s.controls.prev), s.settings.nextSelector || s.settings.prevSelector || (s.controls.directionEl = e('<div class="bx-controls-direction" />'), s.controls.directionEl.append(s.controls.prev).append(s.controls.next), s.controls.el.addClass("bx-has-controls-direction").append(s.controls.directionEl))
      },
      S = function() {
        s.controls.start = e('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + s.settings.startText + "</a></div>"), s.controls.stop = e('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + s.settings.stopText + "</a></div>"), s.controls.autoEl = e('<div class="bx-controls-auto" />'), s.controls.autoEl.on("click", ".bx-start", D), s.controls.autoEl.on("click", ".bx-stop", I), s.settings.autoControlsCombine ? s.controls.autoEl.append(s.controls.start) : s.controls.autoEl.append(s.controls.start).append(s.controls.stop), s.settings.autoControlsSelector ? e(s.settings.autoControlsSelector).html(s.controls.autoEl) : s.controls.el.addClass("bx-has-controls-auto").append(s.controls.autoEl), B(s.settings.autoStart ? "stop" : "start")
      },
      _ = function() {
        s.children.each(function() {
          var t = e(this).find("img:first").attr("title");
          void 0 != t && ("" + t).length && e(this).append('<div class="bx-caption"><span>' + t + "</span></div>")
        })
      },
      T = function(e) {
        s.settings.auto && a.stopAuto(), a.goToNextSlide(), e.preventDefault()
      },
      k = function(e) {
        s.settings.auto && a.stopAuto(), a.goToPrevSlide(), e.preventDefault()
      },
      D = function(e) {
        a.startAuto(), e.preventDefault()
      },
      I = function(e) {
        a.stopAuto(), e.preventDefault()
      },
      H = function(t) {
        s.settings.auto && a.stopAuto();
        var i = e(t.currentTarget);
        if (void 0 !== i.attr("data-slide-index")) {
          var n = parseInt(i.attr("data-slide-index"));
          n != s.active.index && a.goToSlide(n), t.preventDefault()
        }
      },
      M = function(t) {
        var i = s.children.length;
        return "short" == s.settings.pagerType ? (s.settings.maxSlides > 1 && (i = Math.ceil(s.children.length / s.settings.maxSlides)), void s.pagerEl.html(t + 1 + s.settings.pagerShortSeparator + i)) : (s.pagerEl.find("a").removeClass("active"), void s.pagerEl.each(function(i, n) {
          e(n).find("a").eq(t).addClass("active")
        }))
      },
      F = function() {
        if (s.settings.infiniteLoop) {
          var e = "";
          0 == s.active.index ? e = s.children.eq(0).position() : s.active.index == v() - 1 && s.carousel ? e = s.children.eq((v() - 1) * y()).position() : s.active.index == s.children.length - 1 && (e = s.children.eq(s.children.length - 1).position()), e && ("horizontal" == s.settings.mode ? C(-e.left, "reset", 0) : "vertical" == s.settings.mode && C(-e.top, "reset", 0))
        }
        s.working = !1, s.settings.onSlideAfter(s.children.eq(s.active.index), s.oldIndex, s.active.index)
      },
      B = function(e) {
        s.settings.autoControlsCombine ? s.controls.autoEl.html(s.controls[e]) : (s.controls.autoEl.find("a").removeClass("active"), s.controls.autoEl.find("a:not(.bx-" + e + ")").addClass("active"))
      },
      P = function() {
        1 == v() ? (s.controls.prev.addClass("disabled"), s.controls.next.addClass("disabled")) : !s.settings.infiniteLoop && s.settings.hideControlOnEnd && (0 == s.active.index ? (s.controls.prev.addClass("disabled"), s.controls.next.removeClass("disabled")) : s.active.index == v() - 1 ? (s.controls.next.addClass("disabled"), s.controls.prev.removeClass("disabled")) : (s.controls.prev.removeClass("disabled"), s.controls.next.removeClass("disabled")))
      },
      L = function() {
        s.settings.autoDelay > 0 ? setTimeout(a.startAuto, s.settings.autoDelay) : a.startAuto(), s.settings.autoHover && a.hover(function() {
          s.interval && (a.stopAuto(!0), s.autoPaused = !0)
        }, function() {
          s.autoPaused && (a.startAuto(!0), s.autoPaused = null)
        })
      },
      A = function() {
        var t = 0;
        if ("next" == s.settings.autoDirection) a.append(s.children.clone().addClass("bx-clone"));
        else {
          a.prepend(s.children.clone().addClass("bx-clone"));
          var i = s.children.first().position();
          t = "horizontal" == s.settings.mode ? -i.left : -i.top
        }
        C(t, "reset", 0), s.settings.pager = !1, s.settings.controls = !1, s.settings.autoControls = !1, s.settings.tickerHover && !s.usingCSS && s.viewport.hover(function() {
          a.stop()
        }, function() {
          var t = 0;
          s.children.each(function() {
            t += "horizontal" == s.settings.mode ? e(this).outerWidth(!0) : e(this).outerHeight(!0)
          });
          var i = s.settings.speed / t,
            n = "horizontal" == s.settings.mode ? "left" : "top",
            o = i * (t - Math.abs(parseInt(a.css(n))));
          N(o)
        }), N()
      },
      N = function(e) {
        speed = e || s.settings.speed;
        var t = {
            left: 0,
            top: 0
          },
          i = {
            left: 0,
            top: 0
          };
        "next" == s.settings.autoDirection ? t = a.find(".bx-clone").first().position() : i = s.children.first().position();
        var n = "horizontal" == s.settings.mode ? -t.left : -t.top,
          o = "horizontal" == s.settings.mode ? -i.left : -i.top,
          r = {
            resetValue: o
          };
        C(n, "ticker", speed, r)
      },
      j = function() {
        s.touch = {
          start: {
            x: 0,
            y: 0
          },
          end: {
            x: 0,
            y: 0
          }
        }, s.viewport.bind("touchstart", R)
      },
      R = function(e) {
        if (s.working) e.preventDefault();
        else {
          s.touch.originalPos = a.position();
          var t = e.originalEvent;
          s.touch.start.x = t.changedTouches[0].pageX, s.touch.start.y = t.changedTouches[0].pageY, s.viewport.bind("touchmove", $), s.viewport.bind("touchend", W)
        }
      },
      $ = function(e) {
        var t = e.originalEvent,
          i = Math.abs(t.changedTouches[0].pageX - s.touch.start.x),
          n = Math.abs(t.changedTouches[0].pageY - s.touch.start.y);
        if (3 * i > n && s.settings.preventDefaultSwipeX ? e.preventDefault() : 3 * n > i && s.settings.preventDefaultSwipeY && e.preventDefault(), "fade" != s.settings.mode && s.settings.oneToOneTouch) {
          var o = 0;
          if ("horizontal" == s.settings.mode) {
            var a = t.changedTouches[0].pageX - s.touch.start.x;
            o = s.touch.originalPos.left + a
          } else {
            var a = t.changedTouches[0].pageY - s.touch.start.y;
            o = s.touch.originalPos.top + a
          }
          C(o, "reset", 0)
        }
      },
      W = function(e) {
        s.viewport.unbind("touchmove", $);
        var t = e.originalEvent,
          i = 0;
        if (s.touch.end.x = t.changedTouches[0].pageX, s.touch.end.y = t.changedTouches[0].pageY, "fade" == s.settings.mode) {
          var n = Math.abs(s.touch.start.x - s.touch.end.x);
          n >= s.settings.swipeThreshold && (s.touch.start.x > s.touch.end.x ? a.goToNextSlide() : a.goToPrevSlide(), a.stopAuto())
        } else {
          var n = 0;
          "horizontal" == s.settings.mode ? (n = s.touch.end.x - s.touch.start.x, i = s.touch.originalPos.left) : (n = s.touch.end.y - s.touch.start.y, i = s.touch.originalPos.top), !s.settings.infiniteLoop && (0 == s.active.index && n > 0 || s.active.last && 0 > n) ? C(i, "reset", 200) : Math.abs(n) >= s.settings.swipeThreshold ? (0 > n ? a.goToNextSlide() : a.goToPrevSlide(), a.stopAuto()) : C(i, "reset", 200)
        }
        s.viewport.unbind("touchend", W)
      },
      O = function() {
        if (s.initialized) {
          var t = e(window).width(),
            i = e(window).height();
          (r != t || l != i) && (r = t, l = i, a.redrawSlider(), s.settings.onSliderResize.call(a, s.active.index))
        }
      };
    return a.goToSlide = function(t, i) {
      if (!s.working && s.active.index != t)
        if (s.working = !0, s.oldIndex = s.active.index, s.active.index = 0 > t ? v() - 1 : t >= v() ? 0 : t, s.settings.onSlideBefore(s.children.eq(s.active.index), s.oldIndex, s.active.index), "next" == i ? s.settings.onSlideNext(s.children.eq(s.active.index), s.oldIndex, s.active.index) : "prev" == i && s.settings.onSlidePrev(s.children.eq(s.active.index), s.oldIndex, s.active.index), s.active.last = s.active.index >= v() - 1, s.settings.pager && M(s.active.index), s.settings.controls && P(), "fade" == s.settings.mode) s.settings.adaptiveHeight && s.viewport.height() != f() && s.viewport.animate({
          height: f()
        }, s.settings.adaptiveHeightSpeed), s.children.filter(":visible").fadeOut(s.settings.speed).css({
          zIndex: 0
        }), s.children.eq(s.active.index).css("zIndex", s.settings.slideZIndex + 1).fadeIn(s.settings.speed, function() {
          e(this).css("zIndex", s.settings.slideZIndex), F()
        });
        else {
          s.settings.adaptiveHeight && s.viewport.height() != f() && s.viewport.animate({
            height: f()
          }, s.settings.adaptiveHeightSpeed);
          var n = 0,
            o = {
              left: 0,
              top: 0
            };
          if (!s.settings.infiniteLoop && s.carousel && s.active.last)
            if ("horizontal" == s.settings.mode) {
              var r = s.children.eq(s.children.length - 1);
              o = r.position(), n = s.viewport.width() - r.outerWidth()
            } else {
              var l = s.children.length - s.settings.minSlides;
              o = s.children.eq(l).position()
            }
          else if (s.carousel && s.active.last && "prev" == i) {
            var c = 1 == s.settings.moveSlides ? s.settings.maxSlides - y() : (v() - 1) * y() - (s.children.length - s.settings.maxSlides),
              r = a.children(".bx-clone").eq(c);
            o = r.position()
          } else if ("next" == i && 0 == s.active.index) o = a.find("> .bx-clone").eq(s.settings.maxSlides).position(), s.active.last = !1;
          else if (t >= 0) {
            var d = t * y();
            o = s.children.eq(d).position()
          }
          if (void 0 !== o) {
            var u = "horizontal" == s.settings.mode ? -(o.left - n) : -o.top;
            C(u, "slide", s.settings.speed)
          }
        }
    }, a.goToNextSlide = function() {
      if (s.settings.infiniteLoop || !s.active.last) {
        var e = parseInt(s.active.index) + 1;
        a.goToSlide(e, "next")
      }
    }, a.goToPrevSlide = function() {
      if (s.settings.infiniteLoop || 0 != s.active.index) {
        var e = parseInt(s.active.index) - 1;
        a.goToSlide(e, "prev")
      }
    }, a.startAuto = function(e) {
      s.interval || (s.interval = setInterval(function() {
        "next" == s.settings.autoDirection ? a.goToNextSlide() : a.goToPrevSlide()
      }, s.settings.pause), s.settings.autoControls && 1 != e && B("stop"))
    }, a.stopAuto = function(e) {
      s.interval && (clearInterval(s.interval), s.interval = null, s.settings.autoControls && 1 != e && B("start"))
    }, a.getCurrentSlide = function() {
      return s.active.index
    }, a.getCurrentSlideElement = function() {
      return s.children.eq(s.active.index)
    }, a.getSlideCount = function() {
      return s.children.length
    }, a.redrawSlider = function() {
      s.children.add(a.find(".bx-clone")).width(m()), s.viewport.css("height", f()), s.settings.ticker || b(), s.active.last && (s.active.index = v() - 1), s.active.index >= v() && (s.active.last = !0), s.settings.pager && !s.settings.pagerCustom && (x(), M(s.active.index))
    }, a.destroySlider = function() {
      s.initialized && (s.initialized = !1, e(".bx-clone", this).remove(), s.children.each(function() {
        void 0 != e(this).data("origStyle") ? e(this).attr("style", e(this).data("origStyle")) : e(this).removeAttr("style")
      }), void 0 != e(this).data("origStyle") ? this.attr("style", e(this).data("origStyle")) : e(this).removeAttr("style"), e(this).unwrap().unwrap(), s.controls.el && s.controls.el.remove(), s.controls.next && s.controls.next.remove(), s.controls.prev && s.controls.prev.remove(), s.pagerEl && s.settings.controls && s.pagerEl.remove(), e(".bx-caption", this).remove(), s.controls.autoEl && s.controls.autoEl.remove(), clearInterval(s.interval), s.settings.responsive && e(window).unbind("resize", O))
    }, a.reloadSlider = function(e) {
      void 0 != e && (o = e), a.destroySlider(), c()
    }, e(window).resize(function() {
      s.settings.autoReload && a.reloadSlider()
    }), c(), this
  }, e('[data-call="bxslider"]').each(function() {
    e(this).bxSlider()
  })
}(jQuery);
var windowIsDefined = "object" === ("undefined" == typeof window ? "undefined" : _typeof(window));
! function(e) {
  if ("function" == typeof define && define.amd) define(["jquery"], e);
  else if ("object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports) {
    var t;
    try {
      t = require("jquery")
    } catch (e) {
      t = null
    }
    module.exports = e(t)
  } else window && (window.Slider = e(window.jQuery))
}(function(e) {
  var t = "slider",
    i = "bootstrapSlider";
  windowIsDefined && !window.console && (window.console = {}), windowIsDefined && !window.console.log && (window.console.log = function() {}), windowIsDefined && !window.console.warn && (window.console.warn = function() {});
  var n;
  return function(e) {
      function t() {}
      var i = Array.prototype.slice;
      ! function(e) {
        function n(t) {
          t.prototype.option || (t.prototype.option = function(t) {
            e.isPlainObject(t) && (this.options = e.extend(!0, this.options, t))
          })
        }

        function o(t, n) {
          e.fn[t] = function(o) {
            if ("string" == typeof o) {
              for (var a = i.call(arguments, 1), r = 0, l = this.length; l > r; r++) {
                var c = this[r],
                  d = e.data(c, t);
                if (d)
                  if (e.isFunction(d[o]) && "_" !== o.charAt(0)) {
                    var u = d[o].apply(d, a);
                    if (void 0 !== u && u !== d) return u
                  } else s("no such method '" + o + "' for " + t + " instance");
                else s("cannot call methods on " + t + " prior to initialization; attempted to call '" + o + "'")
              }
              return this
            }
            var h = this.map(function() {
              var i = e.data(this, t);
              return i ? (i.option(o), i._init()) : (i = new n(this, o), e.data(this, t, i)), e(this)
            });
            return !h || h.length > 1 ? h : h[0]
          }
        }
        if (e) {
          var s = "undefined" == typeof console ? t : function(e) {
            console.error(e)
          };
          e.bridget = function(e, t) {
            n(t), o(e, t)
          }, e.bridget
        }
      }(e)
    }(e),
    function(e) {
      function o(t, i) {
        this._state = {
          value: null,
          enabled: null,
          offset: null,
          size: null,
          percentage: null,
          inDrag: !1,
          over: !1
        }, "string" == typeof t ? this.element = document.querySelector(t) : t instanceof HTMLElement && (this.element = t), i = i || {};
        for (var n = Object.keys(this.defaultOptions), o = 0; o < n.length; o++) {
          var s = n[o],
            r = i[s];
          r = void 0 !== r ? r : function(e, t) {
            var i = "data-slider-" + t.replace(/_/g, "-"),
              n = e.getAttribute(i);
            try {
              return JSON.parse(n)
            } catch (e) {
              return n
            }
          }(this.element, s), r = null !== r ? r : this.defaultOptions[s], this.options || (this.options = {}), this.options[s] = r
        }
        "vertical" !== this.options.orientation || "top" !== this.options.tooltip_position && "bottom" !== this.options.tooltip_position ? "horizontal" !== this.options.orientation || "left" !== this.options.tooltip_position && "right" !== this.options.tooltip_position || (this.options.tooltip_position = "top") : this.options.tooltip_position = "right";
        var l, c, d, u, h, f = this.element.style.width,
          p = !1,
          m = this.element.parentNode;
        if (this.sliderElem) p = !0;
        else {
          this.sliderElem = document.createElement("div"), this.sliderElem.className = "slider";
          var g = document.createElement("div");
          if (g.className = "slider-track", c = document.createElement("div"), c.className = "slider-track-low", l = document.createElement("div"), l.className = "slider-selection", d = document.createElement("div"), d.className = "slider-track-high", u = document.createElement("div"), u.className = "slider-handle min-slider-handle", u.setAttribute("role", "slider"), u.setAttribute("aria-valuemin", this.options.min), u.setAttribute("aria-valuemax", this.options.max), h = document.createElement("div"), h.className = "slider-handle max-slider-handle", h.setAttribute("role", "slider"), h.setAttribute("aria-valuemin", this.options.min), h.setAttribute("aria-valuemax", this.options.max), g.appendChild(c), g.appendChild(l), g.appendChild(d), this.rangeHighlightElements = [], Array.isArray(this.options.rangeHighlights) && this.options.rangeHighlights.length > 0)
            for (var v = 0; v < this.options.rangeHighlights.length; v++) {
              var y = document.createElement("div");
              y.className = "slider-rangeHighlight slider-selection", this.rangeHighlightElements.push(y), g.appendChild(y)
            }
          var b = Array.isArray(this.options.labelledby);
          if (b && this.options.labelledby[0] && u.setAttribute("aria-labelledby", this.options.labelledby[0]), b && this.options.labelledby[1] && h.setAttribute("aria-labelledby", this.options.labelledby[1]), !b && this.options.labelledby && (u.setAttribute("aria-labelledby", this.options.labelledby), h.setAttribute("aria-labelledby", this.options.labelledby)), this.ticks = [], Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
            for (this.ticksContainer = document.createElement("div"), this.ticksContainer.className = "slider-tick-container", o = 0; o < this.options.ticks.length; o++) {
              var C = document.createElement("div");
              C.className = "slider-tick", this.ticks.push(C), this.ticksContainer.appendChild(C)
            }
            l.className += " tick-slider-selection"
          }
          if (this.tickLabels = [], Array.isArray(this.options.ticks_labels) && this.options.ticks_labels.length > 0)
            for (this.tickLabelContainer = document.createElement("div"), this.tickLabelContainer.className = "slider-tick-label-container", o = 0; o < this.options.ticks_labels.length; o++) {
              var x = document.createElement("div"),
                w = 0 === this.options.ticks_positions.length,
                E = this.options.reversed && w ? this.options.ticks_labels.length - (o + 1) : o;
              x.className = "slider-tick-label", x.innerHTML = this.options.ticks_labels[E], this.tickLabels.push(x), this.tickLabelContainer.appendChild(x)
            }
          var S = function(e) {
              var t = document.createElement("div");
              t.className = "tooltip-arrow";
              var i = document.createElement("div");
              i.className = "tooltip-inner", e.appendChild(t), e.appendChild(i)
            },
            _ = document.createElement("div");
          _.className = "tooltip tooltip-main", _.setAttribute("role", "presentation"), S(_);
          var T = document.createElement("div");
          T.className = "tooltip tooltip-min", T.setAttribute("role", "presentation"), S(T);
          var k = document.createElement("div");
          k.className = "tooltip tooltip-max", k.setAttribute("role", "presentation"), S(k), this.sliderElem.appendChild(g), this.sliderElem.appendChild(_), this.sliderElem.appendChild(T), this.sliderElem.appendChild(k), this.tickLabelContainer && this.sliderElem.appendChild(this.tickLabelContainer), this.ticksContainer && this.sliderElem.appendChild(this.ticksContainer), this.sliderElem.appendChild(u), this.sliderElem.appendChild(h), m.insertBefore(this.sliderElem, this.element), this.element.style.display = "none"
        }
        if (e && (this.$element = e(this.element), this.$sliderElem = e(this.sliderElem)), this.eventToCallbackMap = {}, this.sliderElem.id = this.options.id, this.touchCapable = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, this.touchX = 0, this.touchY = 0, this.tooltip = this.sliderElem.querySelector(".tooltip-main"), this.tooltipInner = this.tooltip.querySelector(".tooltip-inner"), this.tooltip_min = this.sliderElem.querySelector(".tooltip-min"), this.tooltipInner_min = this.tooltip_min.querySelector(".tooltip-inner"), this.tooltip_max = this.sliderElem.querySelector(".tooltip-max"), this.tooltipInner_max = this.tooltip_max.querySelector(".tooltip-inner"), a[this.options.scale] && (this.options.scale = a[this.options.scale]), !0 === p && (this._removeClass(this.sliderElem, "slider-horizontal"), this._removeClass(this.sliderElem, "slider-vertical"), this._removeClass(this.tooltip, "hide"), this._removeClass(this.tooltip_min, "hide"), this._removeClass(this.tooltip_max, "hide"), ["left", "top", "width", "height"].forEach(function(e) {
            this._removeProperty(this.trackLow, e), this._removeProperty(this.trackSelection, e), this._removeProperty(this.trackHigh, e)
          }, this), [this.handle1, this.handle2].forEach(function(e) {
            this._removeProperty(e, "left"), this._removeProperty(e, "top")
          }, this), [this.tooltip, this.tooltip_min, this.tooltip_max].forEach(function(e) {
            this._removeProperty(e, "left"), this._removeProperty(e, "top"), this._removeProperty(e, "margin-left"), this._removeProperty(e, "margin-top"), this._removeClass(e, "right"), this._removeClass(e, "top")
          }, this)), "vertical" === this.options.orientation ? (this._addClass(this.sliderElem, "slider-vertical"), this.stylePos = "top", this.mousePos = "pageY", this.sizePos = "offsetHeight") : (this._addClass(this.sliderElem, "slider-horizontal"), this.sliderElem.style.width = f, this.options.orientation = "horizontal", this.stylePos = "left", this.mousePos = "pageX", this.sizePos = "offsetWidth"), this._setTooltipPosition(), Array.isArray(this.options.ticks) && this.options.ticks.length > 0 && (this.options.max = Math.max.apply(Math, this.options.ticks), this.options.min = Math.min.apply(Math, this.options.ticks)), Array.isArray(this.options.value) ? (this.options.range = !0, this._state.value = this.options.value) : this.options.range ? this._state.value = [this.options.value, this.options.max] : this._state.value = this.options.value, this.trackLow = c || this.trackLow, this.trackSelection = l || this.trackSelection, this.trackHigh = d || this.trackHigh, "none" === this.options.selection && (this._addClass(this.trackLow, "hide"), this._addClass(this.trackSelection, "hide"), this._addClass(this.trackHigh, "hide")), this.handle1 = u || this.handle1, this.handle2 = h || this.handle2, !0 === p)
          for (this._removeClass(this.handle1, "round triangle"), this._removeClass(this.handle2, "round triangle hide"), o = 0; o < this.ticks.length; o++) this._removeClass(this.ticks[o], "round triangle hide");
        if (-1 !== ["round", "triangle", "custom"].indexOf(this.options.handle))
          for (this._addClass(this.handle1, this.options.handle), this._addClass(this.handle2, this.options.handle), o = 0; o < this.ticks.length; o++) this._addClass(this.ticks[o], this.options.handle);
        this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos], this.setValue(this._state.value), this.handle1Keydown = this._keydown.bind(this, 0), this.handle1.addEventListener("keydown", this.handle1Keydown, !1), this.handle2Keydown = this._keydown.bind(this, 1), this.handle2.addEventListener("keydown", this.handle2Keydown, !1), this.mousedown = this._mousedown.bind(this), this.touchstart = this._touchstart.bind(this), this.touchmove = this._touchmove.bind(this), this.touchCapable && (this.sliderElem.addEventListener("touchstart", this.touchstart, !1), this.sliderElem.addEventListener("touchmove", this.touchmove, !1)), this.sliderElem.addEventListener("mousedown", this.mousedown, !1), this.resize = this._resize.bind(this), window.addEventListener("resize", this.resize, !1), "hide" === this.options.tooltip ? (this._addClass(this.tooltip, "hide"), this._addClass(this.tooltip_min, "hide"), this._addClass(this.tooltip_max, "hide")) : "always" === this.options.tooltip ? (this._showTooltip(), this._alwaysShowTooltip = !0) : (this.showTooltip = this._showTooltip.bind(this), this.hideTooltip = this._hideTooltip.bind(this), this.sliderElem.addEventListener("mouseenter", this.showTooltip, !1), this.sliderElem.addEventListener("mouseleave", this.hideTooltip, !1), this.handle1.addEventListener("focus", this.showTooltip, !1), this.handle1.addEventListener("blur", this.hideTooltip, !1), this.handle2.addEventListener("focus", this.showTooltip, !1), this.handle2.addEventListener("blur", this.hideTooltip, !1)), this.options.enabled ? this.enable() : this.disable()
      }
      var s = {
          formatInvalidInputErrorMsg: function(e) {
            return "Invalid input value '" + e + "' passed in"
          },
          callingContextNotSliderInstance: "Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"
        },
        a = {
          linear: {
            toValue: function(e) {
              var t = e / 100 * (this.options.max - this.options.min),
                i = !0;
              if (this.options.ticks_positions.length > 0) {
                for (var n, o, s, a = 0, r = 1; r < this.options.ticks_positions.length; r++)
                  if (e <= this.options.ticks_positions[r]) {
                    n = this.options.ticks[r - 1], s = this.options.ticks_positions[r - 1], o = this.options.ticks[r], a = this.options.ticks_positions[r];
                    break
                  } t = n + (e - s) / (a - s) * (o - n), i = !1
              }
              var l = i ? this.options.min : 0,
                c = l + Math.round(t / this.options.step) * this.options.step;
              return c < this.options.min ? this.options.min : c > this.options.max ? this.options.max : c
            },
            toPercentage: function(e) {
              if (this.options.max === this.options.min) return 0;
              if (this.options.ticks_positions.length > 0) {
                for (var t, i, n, o = 0, s = 0; s < this.options.ticks.length; s++)
                  if (e <= this.options.ticks[s]) {
                    t = s > 0 ? this.options.ticks[s - 1] : 0, n = s > 0 ? this.options.ticks_positions[s - 1] : 0, i = this.options.ticks[s], o = this.options.ticks_positions[s];
                    break
                  } if (s > 0) {
                  return n + (e - t) / (i - t) * (o - n)
                }
              }
              return 100 * (e - this.options.min) / (this.options.max - this.options.min)
            }
          },
          logarithmic: {
            toValue: function(e) {
              var t = 0 === this.options.min ? 0 : Math.log(this.options.min),
                i = Math.log(this.options.max),
                n = Math.exp(t + (i - t) * e / 100);
              return n = this.options.min + Math.round((n - this.options.min) / this.options.step) * this.options.step, n < this.options.min ? this.options.min : n > this.options.max ? this.options.max : n
            },
            toPercentage: function(e) {
              if (this.options.max === this.options.min) return 0;
              var t = Math.log(this.options.max),
                i = 0 === this.options.min ? 0 : Math.log(this.options.min);
              return 100 * ((0 === e ? 0 : Math.log(e)) - i) / (t - i)
            }
          }
        };
      n = function(e, t) {
        return o.call(this, e, t), this
      }, n.prototype = {
        _init: function() {},
        constructor: n,
        defaultOptions: {
          id: "",
          min: 0,
          max: 10,
          step: 1,
          precision: 0,
          orientation: "horizontal",
          value: 5,
          range: !1,
          selection: "before",
          tooltip: "show",
          tooltip_split: !1,
          handle: "round",
          reversed: !1,
          enabled: !0,
          formatter: function(e) {
            return Array.isArray(e) ? e[0] + " : " + e[1] : e
          },
          natural_arrow_keys: !1,
          ticks: [],
          ticks_positions: [],
          ticks_labels: [],
          ticks_snap_bounds: 0,
          scale: "linear",
          focus: !1,
          tooltip_position: null,
          labelledby: null,
          rangeHighlights: []
        },
        getElement: function() {
          return this.sliderElem
        },
        getValue: function() {
          return this.options.range ? this._state.value : this._state.value[0]
        },
        setValue: function(e, t, i) {
          e || (e = 0);
          var n = this.getValue();
          this._state.value = this._validateInputValue(e);
          var o = this._applyPrecision.bind(this);
          this.options.range ? (this._state.value[0] = o(this._state.value[0]), this._state.value[1] = o(this._state.value[1]), this._state.value[0] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[0])), this._state.value[1] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[1]))) : (this._state.value = o(this._state.value), this._state.value = [Math.max(this.options.min, Math.min(this.options.max, this._state.value))], this._addClass(this.handle2, "hide"), "after" === this.options.selection ? this._state.value[1] = this.options.max : this._state.value[1] = this.options.min), this.options.max > this.options.min ? this._state.percentage = [this._toPercentage(this._state.value[0]), this._toPercentage(this._state.value[1]), 100 * this.options.step / (this.options.max - this.options.min)] : this._state.percentage = [0, 0, 100], this._layout();
          var s = this.options.range ? this._state.value : this._state.value[0];
          return this._setDataVal(s), !0 === t && this._trigger("slide", s), n !== s && !0 === i && this._trigger("change", {
            oldValue: n,
            newValue: s
          }), this
        },
        destroy: function() {
          this._removeSliderEventHandlers(), this.sliderElem.parentNode.removeChild(this.sliderElem), this.element.style.display = "", this._cleanUpEventCallbacksMap(), this.element.removeAttribute("data"), e && (this._unbindJQueryEventHandlers(), this.$element.removeData("slider"))
        },
        disable: function() {
          return this._state.enabled = !1, this.handle1.removeAttribute("tabindex"), this.handle2.removeAttribute("tabindex"), this._addClass(this.sliderElem, "slider-disabled"), this._trigger("slideDisabled"), this
        },
        enable: function() {
          return this._state.enabled = !0, this.handle1.setAttribute("tabindex", 0), this.handle2.setAttribute("tabindex", 0), this._removeClass(this.sliderElem, "slider-disabled"), this._trigger("slideEnabled"), this
        },
        toggle: function() {
          return this._state.enabled ? this.disable() : this.enable(), this
        },
        isEnabled: function() {
          return this._state.enabled
        },
        on: function(e, t) {
          return this._bindNonQueryEventHandler(e, t), this
        },
        off: function(t, i) {
          e ? (this.$element.off(t, i), this.$sliderElem.off(t, i)) : this._unbindNonQueryEventHandler(t, i)
        },
        getAttribute: function(e) {
          return e ? this.options[e] : this.options
        },
        setAttribute: function(e, t) {
          return this.options[e] = t, this
        },
        refresh: function() {
          return this._removeSliderEventHandlers(), o.call(this, this.element, this.options), e && e.data(this.element, "slider", this), this
        },
        relayout: function() {
          return this._resize(), this._layout(), this
        },
        _removeSliderEventHandlers: function() {
          this.handle1.removeEventListener("keydown", this.handle1Keydown, !1), this.handle2.removeEventListener("keydown", this.handle2Keydown, !1), this.showTooltip && (this.handle1.removeEventListener("focus", this.showTooltip, !1), this.handle2.removeEventListener("focus", this.showTooltip, !1)), this.hideTooltip && (this.handle1.removeEventListener("blur", this.hideTooltip, !1), this.handle2.removeEventListener("blur", this.hideTooltip, !1)), this.showTooltip && this.sliderElem.removeEventListener("mouseenter", this.showTooltip, !1), this.hideTooltip && this.sliderElem.removeEventListener("mouseleave", this.hideTooltip, !1), this.sliderElem.removeEventListener("touchstart", this.touchstart, !1), this.sliderElem.removeEventListener("touchmove", this.touchmove, !1), this.sliderElem.removeEventListener("mousedown", this.mousedown, !1), window.removeEventListener("resize", this.resize, !1)
        },
        _bindNonQueryEventHandler: function(e, t) {
          void 0 === this.eventToCallbackMap[e] && (this.eventToCallbackMap[e] = []), this.eventToCallbackMap[e].push(t)
        },
        _unbindNonQueryEventHandler: function(e, t) {
          var i = this.eventToCallbackMap[e];
          if (void 0 !== i)
            for (var n = 0; n < i.length; n++)
              if (i[n] === t) {
                i.splice(n, 1);
                break
              }
        },
        _cleanUpEventCallbacksMap: function() {
          for (var e = Object.keys(this.eventToCallbackMap), t = 0; t < e.length; t++) {
            var i = e[t];
            this.eventToCallbackMap[i] = null
          }
        },
        _showTooltip: function() {
          !1 === this.options.tooltip_split ? (this._addClass(this.tooltip, "in"), this.tooltip_min.style.display = "none", this.tooltip_max.style.display = "none") : (this._addClass(this.tooltip_min, "in"), this._addClass(this.tooltip_max, "in"), this.tooltip.style.display = "none"), this._state.over = !0
        },
        _hideTooltip: function() {
          !1 === this._state.inDrag && !0 !== this.alwaysShowTooltip && (this._removeClass(this.tooltip, "in"), this._removeClass(this.tooltip_min, "in"), this._removeClass(this.tooltip_max, "in")), this._state.over = !1
        },
        _layout: function() {
          var e;
          if (e = this.options.reversed ? [100 - this._state.percentage[0], this.options.range ? 100 - this._state.percentage[1] : this._state.percentage[1]] : [this._state.percentage[0], this._state.percentage[1]], this.handle1.style[this.stylePos] = e[0] + "%", this.handle1.setAttribute("aria-valuenow", this._state.value[0]), this.handle2.style[this.stylePos] = e[1] + "%", this.handle2.setAttribute("aria-valuenow", this._state.value[1]), this.rangeHighlightElements.length > 0 && Array.isArray(this.options.rangeHighlights) && this.options.rangeHighlights.length > 0)
            for (var t = 0; t < this.options.rangeHighlights.length; t++) {
              var i = this._toPercentage(this.options.rangeHighlights[t].start),
                n = this._toPercentage(this.options.rangeHighlights[t].end),
                o = this._createHighlightRange(i, n);
              o ? "vertical" === this.options.orientation ? (this.rangeHighlightElements[t].style.top = o.start + "%", this.rangeHighlightElements[t].style.height = o.size + "%") : (this.rangeHighlightElements[t].style.left = o.start + "%", this.rangeHighlightElements[t].style.width = o.size + "%") : this.rangeHighlightElements[t].style.display = "none"
            }
          if (Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
            var s = "vertical" === this.options.orientation ? "height" : "width",
              a = "vertical" === this.options.orientation ? "marginTop" : "marginLeft",
              r = this._state.size / (this.options.ticks.length - 1);
            if (this.tickLabelContainer) {
              var l = 0;
              if (0 === this.options.ticks_positions.length) "vertical" !== this.options.orientation && (this.tickLabelContainer.style[a] = -r / 2 + "px"), l = this.tickLabelContainer.offsetHeight;
              else
                for (c = 0; c < this.tickLabelContainer.childNodes.length; c++) this.tickLabelContainer.childNodes[c].offsetHeight > l && (l = this.tickLabelContainer.childNodes[c].offsetHeight);
              "horizontal" === this.options.orientation && (this.sliderElem.style.marginBottom = l + "px")
            }
            for (var c = 0; c < this.options.ticks.length; c++) {
              var d = this.options.ticks_positions[c] || this._toPercentage(this.options.ticks[c]);
              this.options.reversed && (d = 100 - d), this.ticks[c].style[this.stylePos] = d + "%", this._removeClass(this.ticks[c], "in-selection"), this.options.range ? d >= e[0] && d <= e[1] && this._addClass(this.ticks[c], "in-selection") : "after" === this.options.selection && d >= e[0] ? this._addClass(this.ticks[c], "in-selection") : "before" === this.options.selection && d <= e[0] && this._addClass(this.ticks[c], "in-selection"), this.tickLabels[c] && (this.tickLabels[c].style[s] = r + "px", "vertical" !== this.options.orientation && void 0 !== this.options.ticks_positions[c] ? (this.tickLabels[c].style.position = "absolute", this.tickLabels[c].style[this.stylePos] = d + "%", this.tickLabels[c].style[a] = -r / 2 + "px") : "vertical" === this.options.orientation && (this.tickLabels[c].style.marginLeft = this.sliderElem.offsetWidth + "px", this.tickLabelContainer.style.marginTop = this.sliderElem.offsetWidth / 2 * -1 + "px"))
            }
          }
          var u;
          if (this.options.range) {
            u = this.options.formatter(this._state.value), this._setText(this.tooltipInner, u), this.tooltip.style[this.stylePos] = (e[1] + e[0]) / 2 + "%", "vertical" === this.options.orientation ? this._css(this.tooltip, "margin-top", -this.tooltip.offsetHeight / 2 + "px") : this._css(this.tooltip, "margin-left", -this.tooltip.offsetWidth / 2 + "px"), "vertical" === this.options.orientation ? this._css(this.tooltip, "margin-top", -this.tooltip.offsetHeight / 2 + "px") : this._css(this.tooltip, "margin-left", -this.tooltip.offsetWidth / 2 + "px");
            var h = this.options.formatter(this._state.value[0]);
            this._setText(this.tooltipInner_min, h);
            var f = this.options.formatter(this._state.value[1]);
            this._setText(this.tooltipInner_max, f), this.tooltip_min.style[this.stylePos] = e[0] + "%", "vertical" === this.options.orientation ? this._css(this.tooltip_min, "margin-top", -this.tooltip_min.offsetHeight / 2 + "px") : this._css(this.tooltip_min, "margin-left", -this.tooltip_min.offsetWidth / 2 + "px"), this.tooltip_max.style[this.stylePos] = e[1] + "%", "vertical" === this.options.orientation ? this._css(this.tooltip_max, "margin-top", -this.tooltip_max.offsetHeight / 2 + "px") : this._css(this.tooltip_max, "margin-left", -this.tooltip_max.offsetWidth / 2 + "px")
          } else u = this.options.formatter(this._state.value[0]), this._setText(this.tooltipInner, u), this.tooltip.style[this.stylePos] = e[0] + "%", "vertical" === this.options.orientation ? this._css(this.tooltip, "margin-top", -this.tooltip.offsetHeight / 2 + "px") : this._css(this.tooltip, "margin-left", -this.tooltip.offsetWidth / 2 + "px");
          if ("vertical" === this.options.orientation) this.trackLow.style.top = "0", this.trackLow.style.height = Math.min(e[0], e[1]) + "%", this.trackSelection.style.top = Math.min(e[0], e[1]) + "%", this.trackSelection.style.height = Math.abs(e[0] - e[1]) + "%", this.trackHigh.style.bottom = "0", this.trackHigh.style.height = 100 - Math.min(e[0], e[1]) - Math.abs(e[0] - e[1]) + "%";
          else {
            this.trackLow.style.left = "0", this.trackLow.style.width = Math.min(e[0], e[1]) + "%", this.trackSelection.style.left = Math.min(e[0], e[1]) + "%", this.trackSelection.style.width = Math.abs(e[0] - e[1]) + "%", this.trackHigh.style.right = "0", this.trackHigh.style.width = 100 - Math.min(e[0], e[1]) - Math.abs(e[0] - e[1]) + "%";
            var p = this.tooltip_min.getBoundingClientRect(),
              m = this.tooltip_max.getBoundingClientRect();
            "bottom" === this.options.tooltip_position ? p.right > m.left ? (this._removeClass(this.tooltip_max, "bottom"), this._addClass(this.tooltip_max, "top"), this.tooltip_max.style.top = "", this.tooltip_max.style.bottom = "22px") : (this._removeClass(this.tooltip_max, "top"), this._addClass(this.tooltip_max, "bottom"), this.tooltip_max.style.top = this.tooltip_min.style.top, this.tooltip_max.style.bottom = "") : p.right > m.left ? (this._removeClass(this.tooltip_max, "top"), this._addClass(this.tooltip_max, "bottom"), this.tooltip_max.style.top = "18px") : (this._removeClass(this.tooltip_max, "bottom"), this._addClass(this.tooltip_max, "top"), this.tooltip_max.style.top = this.tooltip_min.style.top)
          }
        },
        _createHighlightRange: function(e, t) {
          return this._isHighlightRange(e, t) ? e > t ? {
            start: t,
            size: e - t
          } : {
            start: e,
            size: t - e
          } : null
        },
        _isHighlightRange: function(e, t) {
          return e >= 0 && 100 >= e && t >= 0 && 100 >= t
        },
        _resize: function(e) {
          this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos], this._layout()
        },
        _removeProperty: function(e, t) {
          e.style.removeProperty ? e.style.removeProperty(t) : e.style.removeAttribute(t)
        },
        _mousedown: function(e) {
          if (!this._state.enabled) return !1;
          this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos];
          var t = this._getPercentage(e);
          if (this.options.range) {
            var i = Math.abs(this._state.percentage[0] - t),
              n = Math.abs(this._state.percentage[1] - t);
            this._state.dragged = n > i ? 0 : 1, this._adjustPercentageForRangeSliders(t)
          } else this._state.dragged = 0;
          this._state.percentage[this._state.dragged] = t, this._layout(), this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), this.mousemove && document.removeEventListener("mousemove", this.mousemove, !1), this.mouseup && document.removeEventListener("mouseup", this.mouseup, !1), this.mousemove = this._mousemove.bind(this), this.mouseup = this._mouseup.bind(this), this.touchCapable && (document.addEventListener("touchmove", this.mousemove, !1), document.addEventListener("touchend", this.mouseup, !1)), document.addEventListener("mousemove", this.mousemove, !1), document.addEventListener("mouseup", this.mouseup, !1), this._state.inDrag = !0;
          var o = this._calculateValue();
          return this._trigger("slideStart", o), this._setDataVal(o), this.setValue(o, !1, !0), this._pauseEvent(e), this.options.focus && this._triggerFocusOnHandle(this._state.dragged), !0
        },
        _touchstart: function(e) {
          if (void 0 === e.changedTouches) return void this._mousedown(e);
          var t = e.changedTouches[0];
          this.touchX = t.pageX, this.touchY = t.pageY
        },
        _triggerFocusOnHandle: function(e) {
          0 === e && this.handle1.focus(), 1 === e && this.handle2.focus()
        },
        _keydown: function(e, t) {
          if (!this._state.enabled) return !1;
          var i;
          switch (t.keyCode) {
            case 37:
            case 40:
              i = -1;
              break;
            case 39:
            case 38:
              i = 1
          }
          if (i) {
            if (this.options.natural_arrow_keys) {
              var n = "vertical" === this.options.orientation && !this.options.reversed,
                o = "horizontal" === this.options.orientation && this.options.reversed;
              (n || o) && (i = -i)
            }
            var s = this._state.value[e] + i * this.options.step;
            return this.options.range && (s = [e ? this._state.value[0] : s, e ? s : this._state.value[1]]), this._trigger("slideStart", s), this._setDataVal(s), this.setValue(s, !0, !0), this._setDataVal(s), this._trigger("slideStop", s), this._layout(), this._pauseEvent(t), !1
          }
        },
        _pauseEvent: function(e) {
          e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault(), e.cancelBubble = !0, e.returnValue = !1
        },
        _mousemove: function(e) {
          if (!this._state.enabled) return !1;
          var t = this._getPercentage(e);
          this._adjustPercentageForRangeSliders(t), this._state.percentage[this._state.dragged] = t, this._layout();
          var i = this._calculateValue(!0);
          return this.setValue(i, !0, !0), !1
        },
        _touchmove: function(e) {
          if (void 0 !== e.changedTouches) {
            var t = e.changedTouches[0],
              i = t.pageX - this.touchX,
              n = t.pageY - this.touchY;
            this._state.inDrag || ("vertical" === this.options.orientation && 5 >= i && i >= -5 && (n >= 15 || -15 >= n) ? this._mousedown(e) : 5 >= n && n >= -5 && (i >= 15 || -15 >= i) && this._mousedown(e))
          }
        },
        _adjustPercentageForRangeSliders: function(e) {
          if (this.options.range) {
            var t = this._getNumDigitsAfterDecimalPlace(e);
            t = t ? t - 1 : 0;
            var i = this._applyToFixedAndParseFloat(e, t);
            0 === this._state.dragged && this._applyToFixedAndParseFloat(this._state.percentage[1], t) < i ? (this._state.percentage[0] = this._state.percentage[1], this._state.dragged = 1) : 1 === this._state.dragged && this._applyToFixedAndParseFloat(this._state.percentage[0], t) > i && (this._state.percentage[1] = this._state.percentage[0], this._state.dragged = 0)
          }
        },
        _mouseup: function() {
          if (!this._state.enabled) return !1;
          this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), document.removeEventListener("mousemove", this.mousemove, !1), document.removeEventListener("mouseup", this.mouseup, !1), this._state.inDrag = !1, !1 === this._state.over && this._hideTooltip();
          var e = this._calculateValue(!0);
          return this._layout(), this._setDataVal(e), this._trigger("slideStop", e), !1
        },
        _calculateValue: function(e) {
          var t;
          if (this.options.range ? (t = [this.options.min, this.options.max], 0 !== this._state.percentage[0] && (t[0] = this._toValue(this._state.percentage[0]), t[0] = this._applyPrecision(t[0])), 100 !== this._state.percentage[1] && (t[1] = this._toValue(this._state.percentage[1]), t[1] = this._applyPrecision(t[1]))) : (t = this._toValue(this._state.percentage[0]), t = parseFloat(t), t = this._applyPrecision(t)), e) {
            for (var i = [t, 1 / 0], n = 0; n < this.options.ticks.length; n++) {
              var o = Math.abs(this.options.ticks[n] - t);
              o <= i[1] && (i = [this.options.ticks[n], o])
            }
            if (i[1] <= this.options.ticks_snap_bounds) return i[0]
          }
          return t
        },
        _applyPrecision: function(e) {
          var t = this.options.precision || this._getNumDigitsAfterDecimalPlace(this.options.step);
          return this._applyToFixedAndParseFloat(e, t)
        },
        _getNumDigitsAfterDecimalPlace: function(e) {
          var t = ("" + e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
          return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0
        },
        _applyToFixedAndParseFloat: function(e, t) {
          var i = e.toFixed(t);
          return parseFloat(i)
        },
        _getPercentage: function(e) {
          !this.touchCapable || "touchstart" !== e.type && "touchmove" !== e.type || (e = e.touches[0]);
          var t = e[this.mousePos],
            i = this._state.offset[this.stylePos],
            n = t - i,
            o = n / this._state.size * 100;
          return o = Math.round(o / this._state.percentage[2]) * this._state.percentage[2], this.options.reversed && (o = 100 - o), Math.max(0, Math.min(100, o))
        },
        _validateInputValue: function(e) {
          if ("number" == typeof e) return e;
          if (Array.isArray(e)) return this._validateArray(e), e;
          throw new Error(s.formatInvalidInputErrorMsg(e))
        },
        _validateArray: function(e) {
          for (var t = 0; t < e.length; t++) {
            var i = e[t];
            if ("number" != typeof i) throw new Error(s.formatInvalidInputErrorMsg(i))
          }
        },
        _setDataVal: function(e) {
          this.element.setAttribute("data-value", e), this.element.setAttribute("value", e), this.element.value = e
        },
        _trigger: function(t, i) {
          i = i || 0 === i ? i : void 0;
          var n = this.eventToCallbackMap[t];
          if (n && n.length)
            for (var o = 0; o < n.length; o++) {
              var s = n[o];
              s(i)
            }
          e && this._triggerJQueryEvent(t, i)
        },
        _triggerJQueryEvent: function(e, t) {
          var i = {
            type: e,
            value: t
          };
          this.$element.trigger(i), this.$sliderElem.trigger(i)
        },
        _unbindJQueryEventHandlers: function() {
          this.$element.off(), this.$sliderElem.off()
        },
        _setText: function(e, t) {
          void 0 !== e.textContent ? e.textContent = t : void 0 !== e.innerText && (e.innerText = t)
        },
        _removeClass: function(e, t) {
          for (var i = t.split(" "), n = e.className, o = 0; o < i.length; o++) {
            var s = i[o],
              a = new RegExp("(?:\\s|^)" + s + "(?:\\s|$)");
            n = n.replace(a, " ")
          }
          e.className = n.trim()
        },
        _addClass: function(e, t) {
          for (var i = t.split(" "), n = e.className, o = 0; o < i.length; o++) {
            var s = i[o];
            new RegExp("(?:\\s|^)" + s + "(?:\\s|$)").test(n) || (n += " " + s)
          }
          e.className = n.trim()
        },
        _offsetLeft: function(e) {
          return e.getBoundingClientRect().left
        },
        _offsetTop: function(e) {
          for (var t = e.offsetTop;
            (e = e.offsetParent) && !isNaN(e.offsetTop);) t += e.offsetTop, "BODY" !== e.tagName && (t -= e.scrollTop);
          return t
        },
        _offset: function(e) {
          return {
            left: this._offsetLeft(e),
            top: this._offsetTop(e)
          }
        },
        _css: function(t, i, n) {
          if (e) e.style(t, i, n);
          else {
            var o = i.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(e, t) {
              return t.toUpperCase()
            });
            t.style[o] = n
          }
        },
        _toValue: function(e) {
          return this.options.scale.toValue.apply(this, [e])
        },
        _toPercentage: function(e) {
          return this.options.scale.toPercentage.apply(this, [e])
        },
        _setTooltipPosition: function() {
          var e = [this.tooltip, this.tooltip_min, this.tooltip_max];
          if ("vertical" === this.options.orientation) {
            var t = this.options.tooltip_position || "right",
              i = "left" === t ? "right" : "left";
            e.forEach(function(e) {
              this._addClass(e, t), e.style[i] = "100%"
            }.bind(this))
          } else "bottom" === this.options.tooltip_position ? e.forEach(function(e) {
            this._addClass(e, "bottom"), e.style.top = "22px"
          }.bind(this)) : e.forEach(function(e) {
            this._addClass(e, "top"), e.style.top = -this.tooltip.outerHeight - 14 + "px"
          }.bind(this))
        }
      }, e && function() {
        var o = void 0;
        e.fn.slider ? (windowIsDefined && window.console.warn("bootstrap-slider.js - WARNING: $.fn.slider namespace is already bound. Use the $.fn.bootstrapSlider namespace instead."), o = i) : (e.bridget(t, n), o = t), e.bridget(i, n), e(function() {
          e("input[data-provide=slider]")[o]()
        })
      }()
    }(e), n
}),
function(e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function(e, t) {
  function i() {
    return new Date(Date.UTC.apply(Date, arguments))
  }

  function n() {
    var e = new Date;
    return i(e.getFullYear(), e.getMonth(), e.getDate())
  }

  function o(e, t) {
    return e.getUTCFullYear() === t.getUTCFullYear() && e.getUTCMonth() === t.getUTCMonth() && e.getUTCDate() === t.getUTCDate()
  }

  function s(e) {
    return function() {
      return this[e].apply(this, arguments)
    }
  }

  function a(e) {
    return e && !isNaN(e.getTime())
  }

  function r(t, i) {
    function n(e, t) {
      return t.toLowerCase()
    }
    var o, s = e(t).data(),
      a = {},
      r = new RegExp("^" + i.toLowerCase() + "([A-Z])");
    i = new RegExp("^" + i.toLowerCase());
    for (var l in s) i.test(l) && (o = l.replace(r, n), a[o] = s[l]);
    return a
  }

  function l(t) {
    var i = {};
    if (g[t] || (t = t.split("-")[0], g[t])) {
      var n = g[t];
      return e.each(m, function(e, t) {
        t in n && (i[t] = n[t])
      }), i
    }
  }
  var c = function() {
      var t = {
        get: function(e) {
          return this.slice(e)[0]
        },
        contains: function(e) {
          for (var t = e && e.valueOf(), i = 0, n = this.length; n > i; i++)
            if (this[i].valueOf() === t) return i;
          return -1
        },
        remove: function(e) {
          this.splice(e, 1)
        },
        replace: function(t) {
          t && (e.isArray(t) || (t = [t]), this.clear(), this.push.apply(this, t))
        },
        clear: function() {
          this.length = 0
        },
        copy: function() {
          var e = new c;
          return e.replace(this), e
        }
      };
      return function() {
        var i = [];
        return i.push.apply(i, arguments), e.extend(i, t), i
      }
    }(),
    d = function(t, i) {
      e(t).data("datepicker", this), this._process_options(i), this.dates = new c, this.viewDate = this.o.defaultViewDate, this.focusDate = null, this.element = e(t), this.isInput = this.element.is("input"), this.inputField = this.isInput ? this.element : this.element.find("input"), this.component = !!this.element.hasClass("date") && this.element.find(".add-on, .input-group-addon, .btn"), this.hasInput = this.component && this.inputField.length, this.component && 0 === this.component.length && (this.component = !1), this.isInline = !this.component && this.element.is("div"), this.picker = e(v.template), this._check_template(this.o.templates.leftArrow) && this.picker.find(".prev").html(this.o.templates.leftArrow), this._check_template(this.o.templates.rightArrow) && this.picker.find(".next").html(this.o.templates.rightArrow), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.viewMode = this.o.startView, this.o.calendarWeeks && this.picker.find("thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan", function(e, t) {
        return parseInt(t) + 1
      }), this._allow_update = !1, this.setStartDate(this._o.startDate), this.setEndDate(this._o.endDate), this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled), this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted), this.setDatesDisabled(this.o.datesDisabled), this.fillDow(), this.fillMonths(), this._allow_update = !0, this.update(), this.showMode(), this.isInline && this.show()
    };
  d.prototype = {
    constructor: d,
    _resolveViewName: function(e, i) {
      return 0 === e || "days" === e || "month" === e ? 0 : 1 === e || "months" === e || "year" === e ? 1 : 2 === e || "years" === e || "decade" === e ? 2 : 3 === e || "decades" === e || "century" === e ? 3 : 4 === e || "centuries" === e || "millennium" === e ? 4 : i !== t && i
    },
    _check_template: function(i) {
      try {
        if (i === t || "" === i) return !1;
        if ((i.match(/[<>]/g) || []).length <= 0) return !0;
        return e(i).length > 0
      } catch (e) {
        return !1
      }
    },
    _process_options: function(t) {
      this._o = e.extend({}, this._o, t);
      var o = this.o = e.extend({}, this._o),
        s = o.language;
      g[s] || (s = s.split("-")[0], g[s] || (s = p.language)), o.language = s, o.startView = this._resolveViewName(o.startView, 0), o.minViewMode = this._resolveViewName(o.minViewMode, 0), o.maxViewMode = this._resolveViewName(o.maxViewMode, 4), o.startView = Math.min(o.startView, o.maxViewMode), o.startView = Math.max(o.startView, o.minViewMode), !0 !== o.multidate && (o.multidate = Number(o.multidate) || !1, !1 !== o.multidate && (o.multidate = Math.max(0, o.multidate))), o.multidateSeparator = String(o.multidateSeparator), o.weekStart %= 7, o.weekEnd = (o.weekStart + 6) % 7;
      var a = v.parseFormat(o.format);
      o.startDate !== -1 / 0 && (o.startDate ? o.startDate instanceof Date ? o.startDate = this._local_to_utc(this._zero_time(o.startDate)) : o.startDate = v.parseDate(o.startDate, a, o.language, o.assumeNearbyYear) : o.startDate = -1 / 0), o.endDate !== 1 / 0 && (o.endDate ? o.endDate instanceof Date ? o.endDate = this._local_to_utc(this._zero_time(o.endDate)) : o.endDate = v.parseDate(o.endDate, a, o.language, o.assumeNearbyYear) : o.endDate = 1 / 0), o.daysOfWeekDisabled = o.daysOfWeekDisabled || [], e.isArray(o.daysOfWeekDisabled) || (o.daysOfWeekDisabled = o.daysOfWeekDisabled.split(/[,\s]*/)), o.daysOfWeekDisabled = e.map(o.daysOfWeekDisabled, function(e) {
        return parseInt(e, 10)
      }), o.daysOfWeekHighlighted = o.daysOfWeekHighlighted || [], e.isArray(o.daysOfWeekHighlighted) || (o.daysOfWeekHighlighted = o.daysOfWeekHighlighted.split(/[,\s]*/)), o.daysOfWeekHighlighted = e.map(o.daysOfWeekHighlighted, function(e) {
        return parseInt(e, 10)
      }), o.datesDisabled = o.datesDisabled || [], e.isArray(o.datesDisabled) || (o.datesDisabled = [o.datesDisabled]), o.datesDisabled = e.map(o.datesDisabled, function(e) {
        return v.parseDate(e, a, o.language, o.assumeNearbyYear)
      });
      var r = String(o.orientation).toLowerCase().split(/\s+/g),
        l = o.orientation.toLowerCase();
      if (r = e.grep(r, function(e) {
          return /^auto|left|right|top|bottom$/.test(e)
        }), o.orientation = {
          x: "auto",
          y: "auto"
        }, l && "auto" !== l)
        if (1 === r.length) switch (r[0]) {
          case "top":
          case "bottom":
            o.orientation.y = r[0];
            break;
          case "left":
          case "right":
            o.orientation.x = r[0]
        } else l = e.grep(r, function(e) {
          return /^left|right$/.test(e)
        }), o.orientation.x = l[0] || "auto", l = e.grep(r, function(e) {
          return /^top|bottom$/.test(e)
        }), o.orientation.y = l[0] || "auto";
      if (o.defaultViewDate) {
        var c = o.defaultViewDate.year || (new Date).getFullYear(),
          d = o.defaultViewDate.month || 0,
          u = o.defaultViewDate.day || 1;
        o.defaultViewDate = i(c, d, u)
      } else o.defaultViewDate = n()
    },
    _events: [],
    _secondaryEvents: [],
    _applyEvents: function(e) {
      for (var i, n, o, s = 0; s < e.length; s++) i = e[s][0], 2 === e[s].length ? (n = t, o = e[s][1]) : 3 === e[s].length && (n = e[s][1], o = e[s][2]), i.on(o, n)
    },
    _unapplyEvents: function(e) {
      for (var i, n, o, s = 0; s < e.length; s++) i = e[s][0], 2 === e[s].length ? (o = t, n = e[s][1]) : 3 === e[s].length && (o = e[s][1], n = e[s][2]), i.off(n, o)
    },
    _buildEvents: function() {
      var t = {
        keyup: e.proxy(function(t) {
          -1 === e.inArray(t.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
        }, this),
        keydown: e.proxy(this.keydown, this),
        paste: e.proxy(this.paste, this)
      };
      !0 === this.o.showOnFocus && (t.focus = e.proxy(this.show, this)), this.isInput ? this._events = [
        [this.element, t]
      ] : this.component && this.hasInput ? this._events = [
        [this.inputField, t],
        [this.component, {
          click: e.proxy(this.show, this)
        }]
      ] : this._events = [
        [this.element, {
          click: e.proxy(this.show, this),
          keydown: e.proxy(this.keydown, this)
        }]
      ], this._events.push([this.element, "*", {
        blur: e.proxy(function(e) {
          this._focused_from = e.target
        }, this)
      }], [this.element, {
        blur: e.proxy(function(e) {
          this._focused_from = e.target
        }, this)
      }]), this.o.immediateUpdates && this._events.push([this.element, {
        "changeYear changeMonth": e.proxy(function(e) {
          this.update(e.date)
        }, this)
      }]), this._secondaryEvents = [
        [this.picker, {
          click: e.proxy(this.click, this)
        }],
        [e(window), {
          resize: e.proxy(this.place, this)
        }],
        [e(document), {
          mousedown: e.proxy(function(e) {
            this.element.is(e.target) || this.element.find(e.target).length || this.picker.is(e.target) || this.picker.find(e.target).length || this.isInline || this.hide()
          }, this)
        }]
      ]
    },
    _attachEvents: function() {
      this._detachEvents(), this._applyEvents(this._events)
    },
    _detachEvents: function() {
      this._unapplyEvents(this._events)
    },
    _attachSecondaryEvents: function() {
      this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents)
    },
    _detachSecondaryEvents: function() {
      this._unapplyEvents(this._secondaryEvents)
    },
    _trigger: function(t, i) {
      var n = i || this.dates.get(-1),
        o = this._utc_to_local(n);
      this.element.trigger({
        type: t,
        date: o,
        dates: e.map(this.dates, this._utc_to_local),
        format: e.proxy(function(e, t) {
          0 === arguments.length ? (e = this.dates.length - 1, t = this.o.format) : "string" == typeof e && (t = e, e = this.dates.length - 1), t = t || this.o.format;
          var i = this.dates.get(e);
          return v.formatDate(i, t, this.o.language)
        }, this)
      })
    },
    show: function() {
      return this.inputField.prop("disabled") || this.inputField.prop("readonly") && !1 === this.o.enableOnReadonly ? void 0 : (this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && e(this.element).blur(), this)
    },
    hide: function() {
      return this.isInline || !this.picker.is(":visible") ? this : (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && this.inputField.val() && this.setValue(), this._trigger("hide"), this)
    },
    destroy: function() {
      return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date, this
    },
    paste: function(t) {
      var i;
      if (t.originalEvent.clipboardData && t.originalEvent.clipboardData.types && -1 !== e.inArray("text/plain", t.originalEvent.clipboardData.types)) i = t.originalEvent.clipboardData.getData("text/plain");
      else {
        if (!window.clipboardData) return;
        i = window.clipboardData.getData("Text")
      }
      this.setDate(i), this.update(), t.preventDefault()
    },
    _utc_to_local: function(e) {
      return e && new Date(e.getTime() + 6e4 * e.getTimezoneOffset())
    },
    _local_to_utc: function(e) {
      return e && new Date(e.getTime() - 6e4 * e.getTimezoneOffset())
    },
    _zero_time: function(e) {
      return e && new Date(e.getFullYear(), e.getMonth(), e.getDate())
    },
    _zero_utc_time: function(e) {
      return e && new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()))
    },
    getDates: function() {
      return e.map(this.dates, this._utc_to_local)
    },
    getUTCDates: function() {
      return e.map(this.dates, function(e) {
        return new Date(e)
      })
    },
    getDate: function() {
      return this._utc_to_local(this.getUTCDate())
    },
    getUTCDate: function() {
      var e = this.dates.get(-1);
      return void 0 !== e ? new Date(e) : null
    },
    clearDates: function() {
      this.inputField && this.inputField.val(""), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide()
    },
    setDates: function() {
      var t = e.isArray(arguments[0]) ? arguments[0] : arguments;
      return this.update.apply(this, t), this._trigger("changeDate"), this.setValue(), this
    },
    setUTCDates: function() {
      var t = e.isArray(arguments[0]) ? arguments[0] : arguments;
      return this.update.apply(this, e.map(t, this._utc_to_local)), this._trigger("changeDate"), this.setValue(), this
    },
    setDate: s("setDates"),
    setUTCDate: s("setUTCDates"),
    remove: s("destroy"),
    setValue: function() {
      var e = this.getFormattedDate();
      return this.inputField.val(e), this
    },
    getFormattedDate: function(i) {
      i === t && (i = this.o.format);
      var n = this.o.language;
      return e.map(this.dates, function(e) {
        return v.formatDate(e, i, n)
      }).join(this.o.multidateSeparator)
    },
    getStartDate: function() {
      return this.o.startDate
    },
    setStartDate: function(e) {
      return this._process_options({
        startDate: e
      }), this.update(), this.updateNavArrows(), this
    },
    getEndDate: function() {
      return this.o.endDate
    },
    setEndDate: function(e) {
      return this._process_options({
        endDate: e
      }), this.update(), this.updateNavArrows(), this
    },
    setDaysOfWeekDisabled: function(e) {
      return this._process_options({
        daysOfWeekDisabled: e
      }), this.update(), this.updateNavArrows(), this
    },
    setDaysOfWeekHighlighted: function(e) {
      return this._process_options({
        daysOfWeekHighlighted: e
      }), this.update(), this
    },
    setDatesDisabled: function(e) {
      this._process_options({
        datesDisabled: e
      }), this.update(), this.updateNavArrows()
    },
    place: function() {
      if (this.isInline) return this;
      var t = this.picker.outerWidth(),
        i = this.picker.outerHeight(),
        n = e(this.o.container),
        o = n.width(),
        s = "body" === this.o.container ? e(document).scrollTop() : n.scrollTop(),
        a = n.offset(),
        r = [];
      this.element.parents().each(function() {
        var t = e(this).css("z-index");
        "auto" !== t && 0 !== t && r.push(parseInt(t))
      });
      var l = Math.max.apply(Math, r) + this.o.zIndexOffset,
        c = this.component ? this.component.parent().offset() : this.element.offset(),
        d = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
        u = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
        h = c.left - a.left,
        f = c.top - a.top;
      "body" !== this.o.container && (f += s), this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (h -= t - u)) : c.left < 0 ? (this.picker.addClass("datepicker-orient-left"), h -= c.left - 10) : h + t > o ? (this.picker.addClass("datepicker-orient-right"), h += u - t) : this.picker.addClass("datepicker-orient-left");
      var p, m = this.o.orientation.y;
      if ("auto" === m && (p = -s + f - i, m = 0 > p ? "bottom" : "top"), this.picker.addClass("datepicker-orient-" + m), "top" === m ? f -= i + parseInt(this.picker.css("padding-top")) : f += d, this.o.rtl) {
        var g = o - (h + u);
        this.picker.css({
          top: f,
          right: g,
          zIndex: l
        })
      } else this.picker.css({
        top: f,
        left: h,
        zIndex: l
      });
      return this
    },
    _allow_update: !0,
    update: function() {
      if (!this._allow_update) return this;
      var t = this.dates.copy(),
        i = [],
        n = !1;
      return arguments.length ? (e.each(arguments, e.proxy(function(e, t) {
          t instanceof Date && (t = this._local_to_utc(t)), i.push(t)
        }, this)), n = !0) : (i = this.isInput ? this.element.val() : this.element.data("date") || this.inputField.val(), i = i && this.o.multidate ? i.split(this.o.multidateSeparator) : [i], delete this.element.data().date), i = e.map(i, e.proxy(function(e) {
          return v.parseDate(e, this.o.format, this.o.language, this.o.assumeNearbyYear)
        }, this)), i = e.grep(i, e.proxy(function(e) {
          return !this.dateWithinRange(e) || !e
        }, this), !0), this.dates.replace(i), this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate ? this.viewDate = new Date(this.o.endDate) : this.viewDate = this.o.defaultViewDate, n ? this.setValue() : i.length && String(t) !== String(this.dates) && this._trigger("changeDate"),
        !this.dates.length && t.length && this._trigger("clearDate"), this.fill(), this.element.change(), this
    },
    fillDow: function() {
      var t = this.o.weekStart,
        i = "<tr>";
      for (this.o.calendarWeeks && (this.picker.find(".datepicker-days .datepicker-switch").attr("colspan", function(e, t) {
          return parseInt(t) + 1
        }), i += '<th class="cw">&#160;</th>'); t < this.o.weekStart + 7;) i += '<th class="dow', e.inArray(t, this.o.daysOfWeekDisabled) > -1 && (i += " disabled"), i += '">' + g[this.o.language].daysMin[t++ % 7] + "</th>";
      i += "</tr>", this.picker.find(".datepicker-days thead").append(i)
    },
    fillMonths: function() {
      for (var e = this._utc_to_local(this.viewDate), t = "", i = 0; 12 > i;) {
        t += '<span class="month' + (e && e.getMonth() === i ? " focused" : "") + '">' + g[this.o.language].monthsShort[i++] + "</span>"
      }
      this.picker.find(".datepicker-months td").html(t)
    },
    setRange: function(t) {
      t && t.length ? this.range = e.map(t, function(e) {
        return e.valueOf()
      }) : delete this.range, this.fill()
    },
    getClassNames: function(t) {
      var i = [],
        n = this.viewDate.getUTCFullYear(),
        o = this.viewDate.getUTCMonth(),
        s = new Date;
      return t.getUTCFullYear() < n || t.getUTCFullYear() === n && t.getUTCMonth() < o ? i.push("old") : (t.getUTCFullYear() > n || t.getUTCFullYear() === n && t.getUTCMonth() > o) && i.push("new"), this.focusDate && t.valueOf() === this.focusDate.valueOf() && i.push("focused"), this.o.todayHighlight && t.getUTCFullYear() === s.getFullYear() && t.getUTCMonth() === s.getMonth() && t.getUTCDate() === s.getDate() && i.push("today"), -1 !== this.dates.contains(t) && i.push("active"), this.dateWithinRange(t) || i.push("disabled"), this.dateIsDisabled(t) && i.push("disabled", "disabled-date"), -1 !== e.inArray(t.getUTCDay(), this.o.daysOfWeekHighlighted) && i.push("highlighted"), this.range && (t > this.range[0] && t < this.range[this.range.length - 1] && i.push("range"), -1 !== e.inArray(t.valueOf(), this.range) && i.push("selected"), t.valueOf() === this.range[0] && i.push("range-start"), t.valueOf() === this.range[this.range.length - 1] && i.push("range-end")), i
    },
    _fill_yearsView: function(i, n, o, s, a, r, l, c) {
      var d, u, h, f, p, m, g, v, y, b, C;
      for (d = "", u = this.picker.find(i), h = parseInt(a / o, 10) * o, p = parseInt(r / s, 10) * s, m = parseInt(l / s, 10) * s, f = e.map(this.dates, function(e) {
          return parseInt(e.getUTCFullYear() / s, 10) * s
        }), u.find(".datepicker-switch").text(h + "-" + (h + 9 * s)), g = h - s, v = -1; 11 > v; v += 1) y = [n], b = null, -1 === v ? y.push("old") : 10 === v && y.push("new"), -1 !== e.inArray(g, f) && y.push("active"), (p > g || g > m) && y.push("disabled"), g === this.viewDate.getFullYear() && y.push("focused"), c !== e.noop && (C = c(new Date(g, 0, 1)), C === t ? C = {} : "boolean" == typeof C ? C = {
        enabled: C
      } : "string" == typeof C && (C = {
        classes: C
      }), !1 === C.enabled && y.push("disabled"), C.classes && (y = y.concat(C.classes.split(/\s+/))), C.tooltip && (b = C.tooltip)), d += '<span class="' + y.join(" ") + '"' + (b ? ' title="' + b + '"' : "") + ">" + g + "</span>", g += s;
      u.find("td").html(d)
    },
    fill: function() {
      var n, o, s = new Date(this.viewDate),
        a = s.getUTCFullYear(),
        r = s.getUTCMonth(),
        l = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
        c = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
        d = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
        u = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
        h = g[this.o.language].today || g.en.today || "",
        f = g[this.o.language].clear || g.en.clear || "",
        p = g[this.o.language].titleFormat || g.en.titleFormat;
      if (!isNaN(a) && !isNaN(r)) {
        this.picker.find(".datepicker-days .datepicker-switch").text(v.formatDate(s, p, this.o.language)), this.picker.find("tfoot .today").text(h).toggle(!1 !== this.o.todayBtn), this.picker.find("tfoot .clear").text(f).toggle(!1 !== this.o.clearBtn), this.picker.find("thead .datepicker-title").text(this.o.title).toggle("" !== this.o.title), this.updateNavArrows(), this.fillMonths();
        var m = i(a, r - 1, 28),
          y = v.getDaysInMonth(m.getUTCFullYear(), m.getUTCMonth());
        m.setUTCDate(y), m.setUTCDate(y - (m.getUTCDay() - this.o.weekStart + 7) % 7);
        var b = new Date(m);
        m.getUTCFullYear() < 100 && b.setUTCFullYear(m.getUTCFullYear()), b.setUTCDate(b.getUTCDate() + 42), b = b.valueOf();
        for (var C, x = []; m.valueOf() < b;) {
          if (m.getUTCDay() === this.o.weekStart && (x.push("<tr>"), this.o.calendarWeeks)) {
            var w = new Date(+m + (this.o.weekStart - m.getUTCDay() - 7) % 7 * 864e5),
              E = new Date(Number(w) + (11 - w.getUTCDay()) % 7 * 864e5),
              S = new Date(Number(S = i(E.getUTCFullYear(), 0, 1)) + (11 - S.getUTCDay()) % 7 * 864e5),
              _ = (E - S) / 864e5 / 7 + 1;
            x.push('<td class="cw">' + _ + "</td>")
          }
          C = this.getClassNames(m), C.push("day"), this.o.beforeShowDay !== e.noop && (o = this.o.beforeShowDay(this._utc_to_local(m)), o === t ? o = {} : "boolean" == typeof o ? o = {
            enabled: o
          } : "string" == typeof o && (o = {
            classes: o
          }), !1 === o.enabled && C.push("disabled"), o.classes && (C = C.concat(o.classes.split(/\s+/))), o.tooltip && (n = o.tooltip)), C = e.isFunction(e.uniqueSort) ? e.uniqueSort(C) : e.unique(C), x.push('<td class="' + C.join(" ") + '"' + (n ? ' title="' + n + '"' : "") + ">" + m.getUTCDate() + "</td>"), n = null, m.getUTCDay() === this.o.weekEnd && x.push("</tr>"), m.setUTCDate(m.getUTCDate() + 1)
        }
        this.picker.find(".datepicker-days tbody").empty().append(x.join(""));
        var T = g[this.o.language].monthsTitle || g.en.monthsTitle || "Months",
          k = this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode < 2 ? T : a).end().find("span").removeClass("active");
        if (e.each(this.dates, function(e, t) {
            t.getUTCFullYear() === a && k.eq(t.getUTCMonth()).addClass("active")
          }), (l > a || a > d) && k.addClass("disabled"), a === l && k.slice(0, c).addClass("disabled"), a === d && k.slice(u + 1).addClass("disabled"), this.o.beforeShowMonth !== e.noop) {
          var D = this;
          e.each(k, function(i, n) {
            var o = new Date(a, i, 1),
              s = D.o.beforeShowMonth(o);
            s === t ? s = {} : "boolean" == typeof s ? s = {
              enabled: s
            } : "string" == typeof s && (s = {
              classes: s
            }), !1 !== s.enabled || e(n).hasClass("disabled") || e(n).addClass("disabled"), s.classes && e(n).addClass(s.classes), s.tooltip && e(n).prop("title", s.tooltip)
          })
        }
        this._fill_yearsView(".datepicker-years", "year", 10, 1, a, l, d, this.o.beforeShowYear), this._fill_yearsView(".datepicker-decades", "decade", 100, 10, a, l, d, this.o.beforeShowDecade), this._fill_yearsView(".datepicker-centuries", "century", 1e3, 100, a, l, d, this.o.beforeShowCentury)
      }
    },
    updateNavArrows: function() {
      if (this._allow_update) {
        var e = new Date(this.viewDate),
          t = e.getUTCFullYear(),
          i = e.getUTCMonth();
        switch (this.viewMode) {
          case 0:
            this.o.startDate !== -1 / 0 && t <= this.o.startDate.getUTCFullYear() && i <= this.o.startDate.getUTCMonth() ? this.picker.find(".prev").css({
              visibility: "hidden"
            }) : this.picker.find(".prev").css({
              visibility: "visible"
            }), this.o.endDate !== 1 / 0 && t >= this.o.endDate.getUTCFullYear() && i >= this.o.endDate.getUTCMonth() ? this.picker.find(".next").css({
              visibility: "hidden"
            }) : this.picker.find(".next").css({
              visibility: "visible"
            });
            break;
          case 1:
          case 2:
          case 3:
          case 4:
            this.o.startDate !== -1 / 0 && t <= this.o.startDate.getUTCFullYear() || this.o.maxViewMode < 2 ? this.picker.find(".prev").css({
              visibility: "hidden"
            }) : this.picker.find(".prev").css({
              visibility: "visible"
            }), this.o.endDate !== 1 / 0 && t >= this.o.endDate.getUTCFullYear() || this.o.maxViewMode < 2 ? this.picker.find(".next").css({
              visibility: "hidden"
            }) : this.picker.find(".next").css({
              visibility: "visible"
            })
        }
      }
    },
    click: function(t) {
      t.preventDefault(), t.stopPropagation();
      var o, s, a, r, l, c, d;
      o = e(t.target), o.hasClass("datepicker-switch") && this.showMode(1);
      var u = o.closest(".prev, .next");
      u.length > 0 && (s = v.modes[this.viewMode].navStep * (u.hasClass("prev") ? -1 : 1), 0 === this.viewMode ? (this.viewDate = this.moveMonth(this.viewDate, s), this._trigger("changeMonth", this.viewDate)) : (this.viewDate = this.moveYear(this.viewDate, s), 1 === this.viewMode && this._trigger("changeYear", this.viewDate)), this.fill()), o.hasClass("today") && !o.hasClass("day") && (this.showMode(-2), this._setDate(n(), "linked" === this.o.todayBtn ? null : "view")), o.hasClass("clear") && this.clearDates(), o.hasClass("disabled") || (o.hasClass("day") && (a = parseInt(o.text(), 10) || 1, r = this.viewDate.getUTCFullYear(), l = this.viewDate.getUTCMonth(), o.hasClass("old") && (0 === l ? (l = 11, r -= 1, c = !0, d = !0) : (l -= 1, c = !0)), o.hasClass("new") && (11 === l ? (l = 0, r += 1, c = !0, d = !0) : (l += 1, c = !0)), this._setDate(i(r, l, a)), d && this._trigger("changeYear", this.viewDate), c && this._trigger("changeMonth", this.viewDate)), o.hasClass("month") && (this.viewDate.setUTCDate(1), a = 1, l = o.parent().find("span").index(o), r = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(l), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode ? (this._setDate(i(r, l, a)), this.showMode()) : this.showMode(-1), this.fill()), (o.hasClass("year") || o.hasClass("decade") || o.hasClass("century")) && (this.viewDate.setUTCDate(1), a = 1, l = 0, r = parseInt(o.text(), 10) || 0, this.viewDate.setUTCFullYear(r), o.hasClass("year") && (this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(i(r, l, a))), o.hasClass("decade") && (this._trigger("changeDecade", this.viewDate), 3 === this.o.minViewMode && this._setDate(i(r, l, a))), o.hasClass("century") && (this._trigger("changeCentury", this.viewDate), 4 === this.o.minViewMode && this._setDate(i(r, l, a))), this.showMode(-1), this.fill())), this.picker.is(":visible") && this._focused_from && e(this._focused_from).focus(), delete this._focused_from
    },
    _toggle_multidate: function(e) {
      var t = this.dates.contains(e);
      if (e || this.dates.clear(), -1 !== t ? (!0 === this.o.multidate || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(t) : !1 === this.o.multidate ? (this.dates.clear(), this.dates.push(e)) : this.dates.push(e), "number" == typeof this.o.multidate)
        for (; this.dates.length > this.o.multidate;) this.dates.remove(0)
    },
    _setDate: function(e, t) {
      t && "date" !== t || this._toggle_multidate(e && new Date(e)), t && "view" !== t || (this.viewDate = e && new Date(e)), this.fill(), this.setValue(), t && "view" === t || this._trigger("changeDate"), this.inputField && this.inputField.change(), !this.o.autoclose || t && "date" !== t || this.hide()
    },
    moveDay: function(e, t) {
      var i = new Date(e);
      return i.setUTCDate(e.getUTCDate() + t), i
    },
    moveWeek: function(e, t) {
      return this.moveDay(e, 7 * t)
    },
    moveMonth: function(e, t) {
      if (!a(e)) return this.o.defaultViewDate;
      if (!t) return e;
      var i, n, o = new Date(e.valueOf()),
        s = o.getUTCDate(),
        r = o.getUTCMonth(),
        l = Math.abs(t);
      if (t = t > 0 ? 1 : -1, 1 === l) n = -1 === t ? function() {
        return o.getUTCMonth() === r
      } : function() {
        return o.getUTCMonth() !== i
      }, i = r + t, o.setUTCMonth(i), (0 > i || i > 11) && (i = (i + 12) % 12);
      else {
        for (var c = 0; l > c; c++) o = this.moveMonth(o, t);
        i = o.getUTCMonth(), o.setUTCDate(s), n = function() {
          return i !== o.getUTCMonth()
        }
      }
      for (; n();) o.setUTCDate(--s), o.setUTCMonth(i);
      return o
    },
    moveYear: function(e, t) {
      return this.moveMonth(e, 12 * t)
    },
    moveAvailableDate: function(e, t, i) {
      do {
        if (e = this[i](e, t), !this.dateWithinRange(e)) return !1;
        i = "moveDay"
      } while (this.dateIsDisabled(e));
      return e
    },
    weekOfDateIsDisabled: function(t) {
      return -1 !== e.inArray(t.getUTCDay(), this.o.daysOfWeekDisabled)
    },
    dateIsDisabled: function(t) {
      return this.weekOfDateIsDisabled(t) || e.grep(this.o.datesDisabled, function(e) {
        return o(t, e)
      }).length > 0
    },
    dateWithinRange: function(e) {
      return e >= this.o.startDate && e <= this.o.endDate
    },
    keydown: function(e) {
      if (!this.picker.is(":visible")) return void((40 === e.keyCode || 27 === e.keyCode) && (this.show(), e.stopPropagation()));
      var t, i, n = !1,
        o = this.focusDate || this.viewDate;
      switch (e.keyCode) {
        case 27:
          this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), e.preventDefault(), e.stopPropagation();
          break;
        case 37:
        case 38:
        case 39:
        case 40:
          if (!this.o.keyboardNavigation || 7 === this.o.daysOfWeekDisabled.length) break;
          t = 37 === e.keyCode || 38 === e.keyCode ? -1 : 1, 0 === this.viewMode ? e.ctrlKey ? (i = this.moveAvailableDate(o, t, "moveYear")) && this._trigger("changeYear", this.viewDate) : e.shiftKey ? (i = this.moveAvailableDate(o, t, "moveMonth")) && this._trigger("changeMonth", this.viewDate) : 37 === e.keyCode || 39 === e.keyCode ? i = this.moveAvailableDate(o, t, "moveDay") : this.weekOfDateIsDisabled(o) || (i = this.moveAvailableDate(o, t, "moveWeek")) : 1 === this.viewMode ? ((38 === e.keyCode || 40 === e.keyCode) && (t *= 4), i = this.moveAvailableDate(o, t, "moveMonth")) : 2 === this.viewMode && ((38 === e.keyCode || 40 === e.keyCode) && (t *= 4), i = this.moveAvailableDate(o, t, "moveYear")), i && (this.focusDate = this.viewDate = i, this.setValue(), this.fill(), e.preventDefault());
          break;
        case 13:
          if (!this.o.forceParse) break;
          o = this.focusDate || this.dates.get(-1) || this.viewDate, this.o.keyboardNavigation && (this._toggle_multidate(o), n = !0), this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (e.preventDefault(), e.stopPropagation(), this.o.autoclose && this.hide());
          break;
        case 9:
          this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide()
      }
      n && (this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate"), this.inputField && this.inputField.change())
    },
    showMode: function(e) {
      e && (this.viewMode = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, this.viewMode + e))), this.picker.children("div").hide().filter(".datepicker-" + v.modes[this.viewMode].clsName).show(), this.updateNavArrows()
    }
  };
  var u = function(t, i) {
    e(t).data("datepicker", this), this.element = e(t), this.inputs = e.map(i.inputs, function(e) {
      return e.jquery ? e[0] : e
    }), delete i.inputs, f.call(e(this.inputs), i).on("changeDate", e.proxy(this.dateUpdated, this)), this.pickers = e.map(this.inputs, function(t) {
      return e(t).data("datepicker")
    }), this.updateDates()
  };
  u.prototype = {
    updateDates: function() {
      this.dates = e.map(this.pickers, function(e) {
        return e.getUTCDate()
      }), this.updateRanges()
    },
    updateRanges: function() {
      var t = e.map(this.dates, function(e) {
        return e.valueOf()
      });
      e.each(this.pickers, function(e, i) {
        i.setRange(t)
      })
    },
    dateUpdated: function(t) {
      if (!this.updating) {
        this.updating = !0;
        var i = e(t.target).data("datepicker");
        if (void 0 !== i) {
          var n = i.getUTCDate(),
            o = e.inArray(t.target, this.inputs),
            s = o - 1,
            a = o + 1,
            r = this.inputs.length;
          if (-1 !== o) {
            if (e.each(this.pickers, function(e, t) {
                t.getUTCDate() || t.setUTCDate(n)
              }), n < this.dates[s])
              for (; s >= 0 && n < this.dates[s];) this.pickers[s--].setUTCDate(n);
            else if (n > this.dates[a])
              for (; r > a && n > this.dates[a];) this.pickers[a++].setUTCDate(n);
            this.updateDates(), delete this.updating
          }
        }
      }
    },
    remove: function() {
      e.map(this.pickers, function(e) {
        e.remove()
      }), delete this.element.data().datepicker
    }
  };
  var h = e.fn.datepicker,
    f = function(i) {
      var n = Array.apply(null, arguments);
      n.shift();
      var o;
      if (this.each(function() {
          var t = e(this),
            s = t.data("datepicker"),
            a = "object" == typeof i && i;
          if (!s) {
            var c = r(this, "date"),
              h = e.extend({}, p, c, a),
              f = l(h.language),
              m = e.extend({}, p, f, c, a);
            t.hasClass("input-daterange") || m.inputs ? (e.extend(m, {
              inputs: m.inputs || t.find("input").toArray()
            }), s = new u(this, m)) : s = new d(this, m), t.data("datepicker", s)
          }
          "string" == typeof i && "function" == typeof s[i] && (o = s[i].apply(s, n))
        }), o === t || o instanceof d || o instanceof u) return this;
      if (this.length > 1) throw new Error("Using only allowed for the collection of a single element (" + i + " function)");
      return o
    };
  e.fn.datepicker = f;
  var p = e.fn.datepicker.defaults = {
      assumeNearbyYear: !1,
      autoclose: !1,
      beforeShowDay: e.noop,
      beforeShowMonth: e.noop,
      beforeShowYear: e.noop,
      beforeShowDecade: e.noop,
      beforeShowCentury: e.noop,
      calendarWeeks: !1,
      clearBtn: !1,
      toggleActive: !1,
      daysOfWeekDisabled: [],
      daysOfWeekHighlighted: [],
      datesDisabled: [],
      endDate: 1 / 0,
      forceParse: !0,
      format: "mm/dd/yyyy",
      keyboardNavigation: !0,
      language: "en",
      minViewMode: 0,
      maxViewMode: 4,
      multidate: !1,
      multidateSeparator: ",",
      orientation: "auto",
      rtl: !1,
      startDate: -1 / 0,
      startView: 0,
      todayBtn: !1,
      todayHighlight: !1,
      weekStart: 0,
      disableTouchKeyboard: !1,
      enableOnReadonly: !0,
      showOnFocus: !0,
      zIndexOffset: 10,
      container: "body",
      immediateUpdates: !1,
      title: "",
      templates: {
        leftArrow: "&laquo;",
        rightArrow: "&raquo;"
      }
    },
    m = e.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
  e.fn.datepicker.Constructor = d;
  var g = e.fn.datepicker.dates = {
      en: {
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        today: "Today",
        clear: "Clear",
        titleFormat: "MM yyyy"
      }
    },
    v = {
      modes: [{
        clsName: "days",
        navFnc: "Month",
        navStep: 1
      }, {
        clsName: "months",
        navFnc: "FullYear",
        navStep: 1
      }, {
        clsName: "years",
        navFnc: "FullYear",
        navStep: 10
      }, {
        clsName: "decades",
        navFnc: "FullDecade",
        navStep: 100
      }, {
        clsName: "centuries",
        navFnc: "FullCentury",
        navStep: 1e3
      }],
      isLeapYear: function(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
      },
      getDaysInMonth: function(e, t) {
        return [31, v.isLeapYear(e) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
      },
      validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
      nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
      parseFormat: function(e) {
        if ("function" == typeof e.toValue && "function" == typeof e.toDisplay) return e;
        var t = e.replace(this.validParts, "\0").split("\0"),
          i = e.match(this.validParts);
        if (!t || !t.length || !i || 0 === i.length) throw new Error("Invalid date format.");
        return {
          separators: t,
          parts: i
        }
      },
      parseDate: function(o, s, a, r) {
        function l(e, t) {
          return !0 === t && (t = 10), 100 > e && (e += 2e3) > (new Date).getFullYear() + t && (e -= 100), e
        }

        function c() {
          var e = this.slice(0, y[f].length),
            t = y[f].slice(0, e.length);
          return e.toLowerCase() === t.toLowerCase()
        }
        if (!o) return t;
        if (o instanceof Date) return o;
        if ("string" == typeof s && (s = v.parseFormat(s)), s.toValue) return s.toValue(o, s, a);
        var u, h, f, p, m = /([\-+]\d+)([dmwy])/,
          y = o.match(/([\-+]\d+)([dmwy])/g),
          b = {
            d: "moveDay",
            m: "moveMonth",
            w: "moveWeek",
            y: "moveYear"
          },
          C = {
            yesterday: "-1d",
            today: "+0d",
            tomorrow: "+1d"
          };
        if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(o)) {
          for (o = new Date, f = 0; f < y.length; f++) u = m.exec(y[f]), h = parseInt(u[1]), p = b[u[2]], o = d.prototype[p](o, h);
          return i(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate())
        }
        if (void 0 !== C[o] && (o = C[o], y = o.match(/([\-+]\d+)([dmwy])/g), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(o))) {
          for (o = new Date, f = 0; f < y.length; f++) u = m.exec(y[f]), h = parseInt(u[1]), p = b[u[2]], o = d.prototype[p](o, h);
          return i(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate())
        }
        y = o && o.match(this.nonpunctuation) || [], o = new Date;
        var x, w, E = {},
          S = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
          _ = {
            yyyy: function(e, t) {
              return e.setUTCFullYear(r ? l(t, r) : t)
            },
            yy: function(e, t) {
              return e.setUTCFullYear(r ? l(t, r) : t)
            },
            m: function(e, t) {
              if (isNaN(e)) return e;
              for (t -= 1; 0 > t;) t += 12;
              for (t %= 12, e.setUTCMonth(t); e.getUTCMonth() !== t;) e.setUTCDate(e.getUTCDate() - 1);
              return e
            },
            d: function(e, t) {
              return e.setUTCDate(t)
            }
          };
        _.M = _.MM = _.mm = _.m, _.dd = _.d, o = n();
        var T = s.parts.slice();
        if (y.length !== T.length && (T = e(T).filter(function(t, i) {
            return -1 !== e.inArray(i, S)
          }).toArray()), y.length === T.length) {
          var k;
          for (f = 0, k = T.length; k > f; f++) {
            if (x = parseInt(y[f], 10), u = T[f], isNaN(x)) switch (u) {
              case "MM":
                w = e(g[a].months).filter(c), x = e.inArray(w[0], g[a].months) + 1;
                break;
              case "M":
                w = e(g[a].monthsShort).filter(c), x = e.inArray(w[0], g[a].monthsShort) + 1
            }
            E[u] = x
          }
          var D, I;
          for (f = 0; f < S.length; f++)(I = S[f]) in E && !isNaN(E[I]) && (D = new Date(o), _[I](D, E[I]), isNaN(D) || (o = D))
        }
        return o
      },
      formatDate: function(t, i, n) {
        if (!t) return "";
        if ("string" == typeof i && (i = v.parseFormat(i)), i.toDisplay) return i.toDisplay(t, i, n);
        var o = {
          d: t.getUTCDate(),
          D: g[n].daysShort[t.getUTCDay()],
          DD: g[n].days[t.getUTCDay()],
          m: t.getUTCMonth() + 1,
          M: g[n].monthsShort[t.getUTCMonth()],
          MM: g[n].months[t.getUTCMonth()],
          yy: t.getUTCFullYear().toString().substring(2),
          yyyy: t.getUTCFullYear()
        };
        o.dd = (o.d < 10 ? "0" : "") + o.d, o.mm = (o.m < 10 ? "0" : "") + o.m, t = [];
        for (var s = e.extend([], i.separators), a = 0, r = i.parts.length; r >= a; a++) s.length && t.push(s.shift()), t.push(o[i.parts[a]]);
        return t.join("")
      },
      headTemplate: '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',
      contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
      footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
    };
  v.template = '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' + v.headTemplate + "<tbody></tbody>" + v.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + v.headTemplate + v.contTemplate + v.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + v.headTemplate + v.contTemplate + v.footTemplate + '</table></div><div class="datepicker-decades"><table class="table-condensed">' + v.headTemplate + v.contTemplate + v.footTemplate + '</table></div><div class="datepicker-centuries"><table class="table-condensed">' + v.headTemplate + v.contTemplate + v.footTemplate + "</table></div></div>", e.fn.datepicker.DPGlobal = v, e.fn.datepicker.noConflict = function() {
    return e.fn.datepicker = h, this
  }, e.fn.datepicker.version = "1.6.4", e(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(t) {
    var i = e(this);
    i.data("datepicker") || (t.preventDefault(), f.call(i, "show"))
  }), e(function() {
    f.call(e('[data-provide="datepicker-inline"]'))
  })
}),
function(e, t, i, n) {
  function o(t, i) {
    this.settings = null, this.options = e.extend({}, o.Defaults, i), this.$element = e(t), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
      time: null,
      target: null,
      pointer: null,
      stage: {
        start: null,
        current: null
      },
      direction: null
    }, this._states = {
      current: {},
      tags: {
        initializing: ["busy"],
        animating: ["busy"],
        dragging: ["interacting"]
      }
    }, e.each(["onResize", "onThrottledResize"], e.proxy(function(t, i) {
      this._handlers[i] = e.proxy(this[i], this)
    }, this)), e.each(o.Plugins, e.proxy(function(e, t) {
      this._plugins[e.charAt(0).toLowerCase() + e.slice(1)] = new t(this)
    }, this)), e.each(o.Workers, e.proxy(function(t, i) {
      this._pipe.push({
        filter: i.filter,
        run: e.proxy(i.run, this)
      })
    }, this)), this.setup(), this.initialize()
  }
  o.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    checkVisibility: !0,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: t,
    fallbackEasing: "swing",
    slideTransition: "",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab"
  }, o.Width = {
    Default: "default",
    Inner: "inner",
    Outer: "outer"
  }, o.Type = {
    Event: "event",
    State: "state"
  }, o.Plugins = {}, o.Workers = [{
    filter: ["width", "settings"],
    run: function() {
      this._width = this.$element.width()
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function(e) {
      e.current = this._items && this._items[this.relative(this._current)]
    }
  }, {
    filter: ["items", "settings"],
    run: function() {
      this.$stage.children(".cloned").remove()
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function(e) {
      var t = this.settings.margin || "",
        i = !this.settings.autoWidth,
        n = this.settings.rtl,
        o = {
          width: "auto",
          "margin-left": n ? t : "",
          "margin-right": n ? "" : t
        };
      !i && this.$stage.children().css(o), e.css = o
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function(e) {
      var t = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
        i = null,
        n = this._items.length,
        o = !this.settings.autoWidth,
        s = [];
      for (e.items = {
          merge: !1,
          width: t
        }; n--;) i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, e.items.merge = i > 1 || e.items.merge, s[n] = o ? t * i : this._items[n].width();
      this._widths = s
    }
  }, {
    filter: ["items", "settings"],
    run: function() {
      var t = [],
        i = this._items,
        n = this.settings,
        o = Math.max(2 * n.items, 4),
        s = 2 * Math.ceil(i.length / 2),
        a = n.loop && i.length ? n.rewind ? o : Math.max(o, s) : 0,
        r = "",
        l = "";
      for (a /= 2; a > 0;) t.push(this.normalize(t.length / 2, !0)), r += i[t[t.length - 1]][0].outerHTML, t.push(this.normalize(i.length - 1 - (t.length - 1) / 2, !0)), l = i[t[t.length - 1]][0].outerHTML + l, a -= 1;
      this._clones = t, e(r).addClass("cloned").appendTo(this.$stage), e(l).addClass("cloned").prependTo(this.$stage)
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function() {
      for (var e = this.settings.rtl ? 1 : -1, t = this._clones.length + this._items.length, i = -1, n = 0, o = 0, s = []; ++i < t;) n = s[i - 1] || 0, o = this._widths[this.relative(i)] + this.settings.margin, s.push(n + o * e);
      this._coordinates = s
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function() {
      var e = this.settings.stagePadding,
        t = this._coordinates,
        i = {
          width: Math.ceil(Math.abs(t[t.length - 1])) + 2 * e,
          "padding-left": e || "",
          "padding-right": e || ""
        };
      this.$stage.css(i)
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function(e) {
      var t = this._coordinates.length,
        i = !this.settings.autoWidth,
        n = this.$stage.children();
      if (i && e.items.merge)
        for (; t--;) e.css.width = this._widths[this.relative(t)], n.eq(t).css(e.css);
      else i && (e.css.width = e.items.width, n.css(e.css))
    }
  }, {
    filter: ["items"],
    run: function() {
      this._coordinates.length < 1 && this.$stage.removeAttr("style")
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function(e) {
      e.current = e.current ? this.$stage.children().index(e.current) : 0, e.current = Math.max(this.minimum(), Math.min(this.maximum(), e.current)), this.reset(e.current)
    }
  }, {
    filter: ["position"],
    run: function() {
      this.animate(this.coordinates(this._current))
    }
  }, {
    filter: ["width", "position", "items", "settings"],
    run: function() {
      var e, t, i, n, o = this.settings.rtl ? 1 : -1,
        s = 2 * this.settings.stagePadding,
        a = this.coordinates(this.current()) + s,
        r = a + this.width() * o,
        l = [];
      for (i = 0, n = this._coordinates.length; i < n; i++) e = this._coordinates[i - 1] || 0, t = Math.abs(this._coordinates[i]) + s * o, (this.op(e, "<=", a) && this.op(e, ">", r) || this.op(t, "<", a) && this.op(t, ">", r)) && l.push(i);
      this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
    }
  }], o.prototype.initializeStage = function() {
    this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = e("<" + this.settings.stageElement + ">", {
      class: this.settings.stageClass
    }).wrap(e("<div/>", {
      class: this.settings.stageOuterClass
    })), this.$element.append(this.$stage.parent()))
  }, o.prototype.initializeItems = function() {
    var t = this.$element.find(".owl-item");
    if (t.length) return this._items = t.get().map(function(t) {
      return e(t)
    }), this._mergers = this._items.map(function() {
      return 1
    }), void this.refresh();
    this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
  }, o.prototype.initialize = function() {
    if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
      var e, t, i;
      e = this.$element.find("img"), t = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : n, i = this.$element.children(t).width(), e.length && i <= 0 && this.preloadAutoWidthImages(e)
    }
    this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
  }, o.prototype.isVisible = function() {
    return !this.settings.checkVisibility || this.$element.is(":visible")
  }, o.prototype.setup = function() {
    var t = this.viewport(),
      i = this.options.responsive,
      n = -1,
      o = null;
    i ? (e.each(i, function(e) {
      e <= t && e > n && (n = Number(e))
    }), o = e.extend({}, this.options, i[n]), "function" == typeof o.stagePadding && (o.stagePadding = o.stagePadding()), delete o.responsive, o.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n))) : o = e.extend({}, this.options), this.trigger("change", {
      property: {
        name: "settings",
        value: o
      }
    }), this._breakpoint = n, this.settings = o, this.invalidate("settings"), this.trigger("changed", {
      property: {
        name: "settings",
        value: this.settings
      }
    })
  }, o.prototype.optionsLogic = function() {
    this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
  }, o.prototype.prepare = function(t) {
    var i = this.trigger("prepare", {
      content: t
    });
    return i.data || (i.data = e("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)), this.trigger("prepared", {
      content: i.data
    }), i.data
  }, o.prototype.update = function() {
    for (var t = 0, i = this._pipe.length, n = e.proxy(function(e) {
        return this[e]
      }, this._invalidated), o = {}; t < i;)(this._invalidated.all || e.grep(this._pipe[t].filter, n).length > 0) && this._pipe[t].run(o), t++;
    this._invalidated = {}, !this.is("valid") && this.enter("valid")
  }, o.prototype.width = function(e) {
    switch (e = e || o.Width.Default) {
      case o.Width.Inner:
      case o.Width.Outer:
        return this._width;
      default:
        return this._width - 2 * this.settings.stagePadding + this.settings.margin
    }
  }, o.prototype.refresh = function() {
    this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
  }, o.prototype.onThrottledResize = function() {
    t.clearTimeout(this.resizeTimer), this.resizeTimer = t.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
  }, o.prototype.onResize = function() {
    return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
  }, o.prototype.registerEventHandlers = function() {
    e.support.transition && this.$stage.on(e.support.transition.end + ".owl.core", e.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(t, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", e.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
      return !1
    })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", e.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", e.proxy(this.onDragEnd, this)))
  }, o.prototype.onDragStart = function(t) {
    var n = null;
    3 !== t.which && (e.support.transform ? (n = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), n = {
      x: n[16 === n.length ? 12 : 4],
      y: n[16 === n.length ? 13 : 5]
    }) : (n = this.$stage.position(), n = {
      x: this.settings.rtl ? n.left + this.$stage.width() - this.width() + this.settings.margin : n.left,
      y: n.top
    }), this.is("animating") && (e.support.transform ? this.animate(n.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = e(t.target), this._drag.stage.start = n, this._drag.stage.current = n, this._drag.pointer = this.pointer(t), e(i).on("mouseup.owl.core touchend.owl.core", e.proxy(this.onDragEnd, this)), e(i).one("mousemove.owl.core touchmove.owl.core", e.proxy(function(t) {
      var n = this.difference(this._drag.pointer, this.pointer(t));
      e(i).on("mousemove.owl.core touchmove.owl.core", e.proxy(this.onDragMove, this)), Math.abs(n.x) < Math.abs(n.y) && this.is("valid") || (t.preventDefault(), this.enter("dragging"), this.trigger("drag"))
    }, this)))
  }, o.prototype.onDragMove = function(e) {
    var t = null,
      i = null,
      n = null,
      o = this.difference(this._drag.pointer, this.pointer(e)),
      s = this.difference(this._drag.stage.start, o);
    this.is("dragging") && (e.preventDefault(), this.settings.loop ? (t = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - t, s.x = ((s.x - t) % i + i) % i + t) : (t = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), n = this.settings.pullDrag ? -1 * o.x / 5 : 0, s.x = Math.max(Math.min(s.x, t + n), i + n)), this._drag.stage.current = s, this.animate(s.x))
  }, o.prototype.onDragEnd = function(t) {
    var n = this.difference(this._drag.pointer, this.pointer(t)),
      o = this._drag.stage.current,
      s = n.x > 0 ^ this.settings.rtl ? "left" : "right";
    e(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== n.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(o.x, 0 !== n.x ? s : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = s, (Math.abs(n.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
      return !1
    })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
  }, o.prototype.closest = function(t, i) {
    var o = -1,
      s = this.width(),
      a = this.coordinates();
    return this.settings.freeDrag || e.each(a, e.proxy(function(e, r) {
      return "left" === i && t > r - 30 && t < r + 30 ? o = e : "right" === i && t > r - s - 30 && t < r - s + 30 ? o = e + 1 : this.op(t, "<", r) && this.op(t, ">", a[e + 1] !== n ? a[e + 1] : r - s) && (o = "left" === i ? e + 1 : e),
        -1 === o
    }, this)), this.settings.loop || (this.op(t, ">", a[this.minimum()]) ? o = t = this.minimum() : this.op(t, "<", a[this.maximum()]) && (o = t = this.maximum())), o
  }, o.prototype.animate = function(t) {
    var i = this.speed() > 0;
    this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), e.support.transform3d && e.support.transition ? this.$stage.css({
      transform: "translate3d(" + t + "px,0px,0px)",
      transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
    }) : i ? this.$stage.animate({
      left: t + "px"
    }, this.speed(), this.settings.fallbackEasing, e.proxy(this.onTransitionEnd, this)) : this.$stage.css({
      left: t + "px"
    })
  }, o.prototype.is = function(e) {
    return this._states.current[e] && this._states.current[e] > 0
  }, o.prototype.current = function(e) {
    if (e === n) return this._current;
    if (0 === this._items.length) return n;
    if (e = this.normalize(e), this._current !== e) {
      var t = this.trigger("change", {
        property: {
          name: "position",
          value: e
        }
      });
      t.data !== n && (e = this.normalize(t.data)), this._current = e, this.invalidate("position"), this.trigger("changed", {
        property: {
          name: "position",
          value: this._current
        }
      })
    }
    return this._current
  }, o.prototype.invalidate = function(t) {
    return "string" === e.type(t) && (this._invalidated[t] = !0, this.is("valid") && this.leave("valid")), e.map(this._invalidated, function(e, t) {
      return t
    })
  }, o.prototype.reset = function(e) {
    (e = this.normalize(e)) !== n && (this._speed = 0, this._current = e, this.suppress(["translate", "translated"]), this.animate(this.coordinates(e)), this.release(["translate", "translated"]))
  }, o.prototype.normalize = function(e, t) {
    var i = this._items.length,
      o = t ? 0 : this._clones.length;
    return !this.isNumeric(e) || i < 1 ? e = n : (e < 0 || e >= i + o) && (e = ((e - o / 2) % i + i) % i + o / 2), e
  }, o.prototype.relative = function(e) {
    return e -= this._clones.length / 2, this.normalize(e, !0)
  }, o.prototype.maximum = function(e) {
    var t, i, n, o = this.settings,
      s = this._coordinates.length;
    if (o.loop) s = this._clones.length / 2 + this._items.length - 1;
    else if (o.autoWidth || o.merge) {
      if (t = this._items.length)
        for (i = this._items[--t].width(), n = this.$element.width(); t-- && !((i += this._items[t].width() + this.settings.margin) > n););
      s = t + 1
    } else s = o.center ? this._items.length - 1 : this._items.length - o.items;
    return e && (s -= this._clones.length / 2), Math.max(s, 0)
  }, o.prototype.minimum = function(e) {
    return e ? 0 : this._clones.length / 2
  }, o.prototype.items = function(e) {
    return e === n ? this._items.slice() : (e = this.normalize(e, !0), this._items[e])
  }, o.prototype.mergers = function(e) {
    return e === n ? this._mergers.slice() : (e = this.normalize(e, !0), this._mergers[e])
  }, o.prototype.clones = function(t) {
    var i = this._clones.length / 2,
      o = i + this._items.length,
      s = function(e) {
        return e % 2 == 0 ? o + e / 2 : i - (e + 1) / 2
      };
    return t === n ? e.map(this._clones, function(e, t) {
      return s(t)
    }) : e.map(this._clones, function(e, i) {
      return e === t ? s(i) : null
    })
  }, o.prototype.speed = function(e) {
    return e !== n && (this._speed = e), this._speed
  }, o.prototype.coordinates = function(t) {
    var i, o = 1,
      s = t - 1;
    return t === n ? e.map(this._coordinates, e.proxy(function(e, t) {
      return this.coordinates(t)
    }, this)) : (this.settings.center ? (this.settings.rtl && (o = -1, s = t + 1), i = this._coordinates[t], i += (this.width() - i + (this._coordinates[s] || 0)) / 2 * o) : i = this._coordinates[s] || 0, i = Math.ceil(i))
  }, o.prototype.duration = function(e, t, i) {
    return 0 === i ? 0 : Math.min(Math.max(Math.abs(t - e), 1), 6) * Math.abs(i || this.settings.smartSpeed)
  }, o.prototype.to = function(e, t) {
    var i = this.current(),
      n = null,
      o = e - this.relative(i),
      s = (o > 0) - (o < 0),
      a = this._items.length,
      r = this.minimum(),
      l = this.maximum();
    this.settings.loop ? (!this.settings.rewind && Math.abs(o) > a / 2 && (o += -1 * s * a), e = i + o, (n = ((e - r) % a + a) % a + r) !== e && n - o <= l && n - o > 0 && (i = n - o, e = n, this.reset(i))) : this.settings.rewind ? (l += 1, e = (e % l + l) % l) : e = Math.max(r, Math.min(l, e)), this.speed(this.duration(i, e, t)), this.current(e), this.isVisible() && this.update()
  }, o.prototype.next = function(e) {
    e = e || !1, this.to(this.relative(this.current()) + 1, e)
  }, o.prototype.prev = function(e) {
    e = e || !1, this.to(this.relative(this.current()) - 1, e)
  }, o.prototype.onTransitionEnd = function(e) {
    if (e !== n && (e.stopPropagation(), (e.target || e.srcElement || e.originalTarget) !== this.$stage.get(0))) return !1;
    this.leave("animating"), this.trigger("translated")
  }, o.prototype.viewport = function() {
    var n;
    return this.options.responsiveBaseElement !== t ? n = e(this.options.responsiveBaseElement).width() : t.innerWidth ? n = t.innerWidth : i.documentElement && i.documentElement.clientWidth ? n = i.documentElement.clientWidth : console.warn("Can not detect viewport width."), n
  }, o.prototype.replace = function(t) {
    this.$stage.empty(), this._items = [], t && (t = t instanceof jQuery ? t : e(t)), this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector)), t.filter(function() {
      return 1 === this.nodeType
    }).each(e.proxy(function(e, t) {
      t = this.prepare(t), this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
    }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
  }, o.prototype.add = function(t, i) {
    var o = this.relative(this._current);
    i = i === n ? this._items.length : this.normalize(i, !0), t = t instanceof jQuery ? t : e(t), this.trigger("add", {
      content: t,
      position: i
    }), t = this.prepare(t), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(t), 0 !== this._items.length && this._items[i - 1].after(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(t), this._items.splice(i, 0, t), this._mergers.splice(i, 0, 1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[o] && this.reset(this._items[o].index()), this.invalidate("items"), this.trigger("added", {
      content: t,
      position: i
    })
  }, o.prototype.remove = function(e) {
    (e = this.normalize(e, !0)) !== n && (this.trigger("remove", {
      content: this._items[e],
      position: e
    }), this._items[e].remove(), this._items.splice(e, 1), this._mergers.splice(e, 1), this.invalidate("items"), this.trigger("removed", {
      content: null,
      position: e
    }))
  }, o.prototype.preloadAutoWidthImages = function(t) {
    t.each(e.proxy(function(t, i) {
      this.enter("pre-loading"), i = e(i), e(new Image).one("load", e.proxy(function(e) {
        i.attr("src", e.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
      }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
    }, this))
  }, o.prototype.destroy = function() {
    this.$element.off(".owl.core"), this.$stage.off(".owl.core"), e(i).off(".owl.core"), !1 !== this.settings.responsive && (t.clearTimeout(this.resizeTimer), this.off(t, "resize", this._handlers.onThrottledResize));
    for (var n in this._plugins) this._plugins[n].destroy();
    this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
  }, o.prototype.op = function(e, t, i) {
    var n = this.settings.rtl;
    switch (t) {
      case "<":
        return n ? e > i : e < i;
      case ">":
        return n ? e < i : e > i;
      case ">=":
        return n ? e <= i : e >= i;
      case "<=":
        return n ? e >= i : e <= i
    }
  }, o.prototype.on = function(e, t, i, n) {
    e.addEventListener ? e.addEventListener(t, i, n) : e.attachEvent && e.attachEvent("on" + t, i)
  }, o.prototype.off = function(e, t, i, n) {
    e.removeEventListener ? e.removeEventListener(t, i, n) : e.detachEvent && e.detachEvent("on" + t, i)
  }, o.prototype.trigger = function(t, i, n, s, a) {
    var r = {
        item: {
          count: this._items.length,
          index: this.current()
        }
      },
      l = e.camelCase(e.grep(["on", t, n], function(e) {
        return e
      }).join("-").toLowerCase()),
      c = e.Event([t, "owl", n || "carousel"].join(".").toLowerCase(), e.extend({
        relatedTarget: this
      }, r, i));
    return this._supress[t] || (e.each(this._plugins, function(e, t) {
      t.onTrigger && t.onTrigger(c)
    }), this.register({
      type: o.Type.Event,
      name: t
    }), this.$element.trigger(c), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, c)), c
  }, o.prototype.enter = function(t) {
    e.each([t].concat(this._states.tags[t] || []), e.proxy(function(e, t) {
      this._states.current[t] === n && (this._states.current[t] = 0), this._states.current[t]++
    }, this))
  }, o.prototype.leave = function(t) {
    e.each([t].concat(this._states.tags[t] || []), e.proxy(function(e, t) {
      this._states.current[t]--
    }, this))
  }, o.prototype.register = function(t) {
    if (t.type === o.Type.Event) {
      if (e.event.special[t.name] || (e.event.special[t.name] = {}), !e.event.special[t.name].owl) {
        var i = e.event.special[t.name]._default;
        e.event.special[t.name]._default = function(e) {
          return !i || !i.apply || e.namespace && -1 !== e.namespace.indexOf("owl") ? e.namespace && e.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
        }, e.event.special[t.name].owl = !0
      }
    } else t.type === o.Type.State && (this._states.tags[t.name] ? this._states.tags[t.name] = this._states.tags[t.name].concat(t.tags) : this._states.tags[t.name] = t.tags, this._states.tags[t.name] = e.grep(this._states.tags[t.name], e.proxy(function(i, n) {
      return e.inArray(i, this._states.tags[t.name]) === n
    }, this)))
  }, o.prototype.suppress = function(t) {
    e.each(t, e.proxy(function(e, t) {
      this._supress[t] = !0
    }, this))
  }, o.prototype.release = function(t) {
    e.each(t, e.proxy(function(e, t) {
      delete this._supress[t]
    }, this))
  }, o.prototype.pointer = function(e) {
    var i = {
      x: null,
      y: null
    };
    return e = e.originalEvent || e || t.event, e = e.touches && e.touches.length ? e.touches[0] : e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e, e.pageX ? (i.x = e.pageX, i.y = e.pageY) : (i.x = e.clientX, i.y = e.clientY), i
  }, o.prototype.isNumeric = function(e) {
    return !isNaN(parseFloat(e))
  }, o.prototype.difference = function(e, t) {
    return {
      x: e.x - t.x,
      y: e.y - t.y
    }
  }, e.fn.owlCarousel = function(t) {
    var i = Array.prototype.slice.call(arguments, 1);
    return this.each(function() {
      var n = e(this),
        s = n.data("owl.carousel");
      s || (s = new o(this, "object" == typeof t && t), n.data("owl.carousel", s), e.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(t, i) {
        s.register({
          type: o.Type.Event,
          name: i
        }), s.$element.on(i + ".owl.carousel.core", e.proxy(function(e) {
          e.namespace && e.relatedTarget !== this && (this.suppress([i]), s[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
        }, s))
      })), "string" == typeof t && "_" !== t.charAt(0) && s[t].apply(s, i)
    })
  }, e.fn.owlCarousel.Constructor = o
}(window.Zepto || window.jQuery, window, document),
function(e, t, i, n) {
  var o = function(t) {
    this._core = t, this._interval = null, this._visible = null, this._handlers = {
      "initialized.owl.carousel": e.proxy(function(e) {
        e.namespace && this._core.settings.autoRefresh && this.watch()
      }, this)
    }, this._core.options = e.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers)
  };
  o.Defaults = {
    autoRefresh: !0,
    autoRefreshInterval: 500
  }, o.prototype.watch = function() {
    this._interval || (this._visible = this._core.isVisible(), this._interval = t.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
  }, o.prototype.refresh = function() {
    this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
  }, o.prototype.destroy = function() {
    var e, i;
    t.clearInterval(this._interval);
    for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
    for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
  }, e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = o
}(window.Zepto || window.jQuery, window, document),
function(e, t, i, n) {
  var o = function(t) {
    this._core = t, this._loaded = [], this._handlers = {
      "initialized.owl.carousel change.owl.carousel resized.owl.carousel": e.proxy(function(t) {
        if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type)) {
          var i = this._core.settings,
            n = i.center && Math.ceil(i.items / 2) || i.items,
            o = i.center && -1 * n || 0,
            s = (t.property && void 0 !== t.property.value ? t.property.value : this._core.current()) + o,
            a = this._core.clones().length,
            r = e.proxy(function(e, t) {
              this.load(t)
            }, this);
          for (i.lazyLoadEager > 0 && (n += i.lazyLoadEager, i.loop && (s -= i.lazyLoadEager, n++)); o++ < n;) this.load(a / 2 + this._core.relative(s)), a && e.each(this._core.clones(this._core.relative(s)), r), s++
        }
      }, this)
    }, this._core.options = e.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers)
  };
  o.Defaults = {
    lazyLoad: !1,
    lazyLoadEager: 0
  }, o.prototype.load = function(i) {
    var n = this._core.$stage.children().eq(i),
      o = n && n.find(".owl-lazy");
    !o || e.inArray(n.get(0), this._loaded) > -1 || (o.each(e.proxy(function(i, n) {
      var o, s = e(n),
        a = t.devicePixelRatio > 1 && s.attr("data-src-retina") || s.attr("data-src") || s.attr("data-srcset");
      this._core.trigger("load", {
        element: s,
        url: a
      }, "lazy"), s.is("img") ? s.one("load.owl.lazy", e.proxy(function() {
        s.css("opacity", 1), this._core.trigger("loaded", {
          element: s,
          url: a
        }, "lazy")
      }, this)).attr("src", a) : s.is("source") ? s.one("load.owl.lazy", e.proxy(function() {
        this._core.trigger("loaded", {
          element: s,
          url: a
        }, "lazy")
      }, this)).attr("srcset", a) : (o = new Image, o.onload = e.proxy(function() {
        s.css({
          "background-image": 'url("' + a + '")',
          opacity: "1"
        }), this._core.trigger("loaded", {
          element: s,
          url: a
        }, "lazy")
      }, this), o.src = a)
    }, this)), this._loaded.push(n.get(0)))
  }, o.prototype.destroy = function() {
    var e, t;
    for (e in this.handlers) this._core.$element.off(e, this.handlers[e]);
    for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
  }, e.fn.owlCarousel.Constructor.Plugins.Lazy = o
}(window.Zepto || window.jQuery, window, document),
function(e, t, i, n) {
  var o = function(i) {
    this._core = i, this._previousHeight = null, this._handlers = {
      "initialized.owl.carousel refreshed.owl.carousel": e.proxy(function(e) {
        e.namespace && this._core.settings.autoHeight && this.update()
      }, this),
      "changed.owl.carousel": e.proxy(function(e) {
        e.namespace && this._core.settings.autoHeight && "position" === e.property.name && this.update()
      }, this),
      "loaded.owl.lazy": e.proxy(function(e) {
        e.namespace && this._core.settings.autoHeight && e.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
      }, this)
    }, this._core.options = e.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
    var n = this;
    e(t).on("load", function() {
      n._core.settings.autoHeight && n.update()
    }), e(t).resize(function() {
      n._core.settings.autoHeight && (null != n._intervalId && clearTimeout(n._intervalId), n._intervalId = setTimeout(function() {
        n.update()
      }, 250))
    })
  };
  o.Defaults = {
    autoHeight: !1,
    autoHeightClass: "owl-height"
  }, o.prototype.update = function() {
    var t = this._core._current,
      i = t + this._core.settings.items,
      n = this._core.settings.lazyLoad,
      o = this._core.$stage.children().toArray().slice(t, i),
      s = [],
      a = 0;
    e.each(o, function(t, i) {
      s.push(e(i).height())
    }), a = Math.max.apply(null, s), a <= 1 && n && this._previousHeight && (a = this._previousHeight), this._previousHeight = a, this._core.$stage.parent().height(a).addClass(this._core.settings.autoHeightClass)
  }, o.prototype.destroy = function() {
    var e, t;
    for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
    for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
  }, e.fn.owlCarousel.Constructor.Plugins.AutoHeight = o
}(window.Zepto || window.jQuery, window, document),
function(e, t, i, n) {
  var o = function(t) {
    this._core = t, this._videos = {}, this._playing = null, this._handlers = {
      "initialized.owl.carousel": e.proxy(function(e) {
        e.namespace && this._core.register({
          type: "state",
          name: "playing",
          tags: ["interacting"]
        })
      }, this),
      "resize.owl.carousel": e.proxy(function(e) {
        e.namespace && this._core.settings.video && this.isInFullScreen() && e.preventDefault()
      }, this),
      "refreshed.owl.carousel": e.proxy(function(e) {
        e.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
      }, this),
      "changed.owl.carousel": e.proxy(function(e) {
        e.namespace && "position" === e.property.name && this._playing && this.stop()
      }, this),
      "prepared.owl.carousel": e.proxy(function(t) {
        if (t.namespace) {
          var i = e(t.content).find(".owl-video");
          i.length && (i.css("display", "none"), this.fetch(i, e(t.content)))
        }
      }, this)
    }, this._core.options = e.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", e.proxy(function(e) {
      this.play(e)
    }, this))
  };
  o.Defaults = {
    video: !1,
    videoHeight: !1,
    videoWidth: !1
  }, o.prototype.fetch = function(e, t) {
    var i = function() {
        return e.attr("data-vimeo-id") ? "vimeo" : e.attr("data-vzaar-id") ? "vzaar" : "youtube"
      }(),
      n = e.attr("data-vimeo-id") || e.attr("data-youtube-id") || e.attr("data-vzaar-id"),
      o = e.attr("data-width") || this._core.settings.videoWidth,
      s = e.attr("data-height") || this._core.settings.videoHeight,
      a = e.attr("href");
    if (!a) throw new Error("Missing video URL.");
    if (n = a.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), n[3].indexOf("youtu") > -1) i = "youtube";
    else if (n[3].indexOf("vimeo") > -1) i = "vimeo";
    else {
      if (!(n[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
      i = "vzaar"
    }
    n = n[6], this._videos[a] = {
      type: i,
      id: n,
      width: o,
      height: s
    }, t.attr("data-video", a), this.thumbnail(e, this._videos[a])
  }, o.prototype.thumbnail = function(t, i) {
    var n, o, s, a = i.width && i.height ? "width:" + i.width + "px;height:" + i.height + "px;" : "",
      r = t.find("img"),
      l = "src",
      c = "",
      d = this._core.settings,
      u = function(i) {
        o = '<div class="owl-video-play-icon"></div>', n = d.lazyLoad ? e("<div/>", {
          class: "owl-video-tn " + c,
          srcType: i
        }) : e("<div/>", {
          class: "owl-video-tn",
          style: "opacity:1;background-image:url(" + i + ")"
        }), t.after(n), t.after(o)
      };
    if (t.wrap(e("<div/>", {
        class: "owl-video-wrapper",
        style: a
      })), this._core.settings.lazyLoad && (l = "data-src", c = "owl-lazy"), r.length) return u(r.attr(l)), r.remove(), !1;
    "youtube" === i.type ? (s = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", u(s)) : "vimeo" === i.type ? e.ajax({
      type: "GET",
      url: "//vimeo.com/api/v2/video/" + i.id + ".json",
      jsonp: "callback",
      dataType: "jsonp",
      success: function(e) {
        s = e[0].thumbnail_large, u(s)
      }
    }) : "vzaar" === i.type && e.ajax({
      type: "GET",
      url: "//vzaar.com/api/videos/" + i.id + ".json",
      jsonp: "callback",
      dataType: "jsonp",
      success: function(e) {
        s = e.framegrab_url, u(s)
      }
    })
  }, o.prototype.stop = function() {
    this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
  }, o.prototype.play = function(t) {
    var i, n = e(t.target),
      o = n.closest("." + this._core.settings.itemClass),
      s = this._videos[o.attr("data-video")],
      a = s.width || "100%",
      r = s.height || this._core.$stage.height();
    this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), o = this._core.items(this._core.relative(o.index())), this._core.reset(o.index()), i = e('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'), i.attr("height", r), i.attr("width", a), "youtube" === s.type ? i.attr("src", "//www.youtube.com/embed/" + s.id + "?autoplay=1&rel=0&v=" + s.id) : "vimeo" === s.type ? i.attr("src", "//player.vimeo.com/video/" + s.id + "?autoplay=1") : "vzaar" === s.type && i.attr("src", "//view.vzaar.com/" + s.id + "/player?autoplay=true"), e(i).wrap('<div class="owl-video-frame" />').insertAfter(o.find(".owl-video")), this._playing = o.addClass("owl-video-playing"))
  }, o.prototype.isInFullScreen = function() {
    var t = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
    return t && e(t).parent().hasClass("owl-video-frame")
  }, o.prototype.destroy = function() {
    var e, t;
    this._core.$element.off("click.owl.video");
    for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
    for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
  }, e.fn.owlCarousel.Constructor.Plugins.Video = o
}(window.Zepto || window.jQuery, window, document),
function(e, t, i, n) {
  var o = function(t) {
    this.core = t, this.core.options = e.extend({}, o.Defaults, this.core.options), this.swapping = !0, this.previous = n, this.next = n, this.handlers = {
      "change.owl.carousel": e.proxy(function(e) {
        e.namespace && "position" == e.property.name && (this.previous = this.core.current(), this.next = e.property.value)
      }, this),
      "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": e.proxy(function(e) {
        e.namespace && (this.swapping = "translated" == e.type)
      }, this),
      "translate.owl.carousel": e.proxy(function(e) {
        e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
      }, this)
    }, this.core.$element.on(this.handlers)
  };
  o.Defaults = {
    animateOut: !1,
    animateIn: !1
  }, o.prototype.swap = function() {
    if (1 === this.core.settings.items && e.support.animation && e.support.transition) {
      this.core.speed(0);
      var t, i = e.proxy(this.clear, this),
        n = this.core.$stage.children().eq(this.previous),
        o = this.core.$stage.children().eq(this.next),
        s = this.core.settings.animateIn,
        a = this.core.settings.animateOut;
      this.core.current() !== this.previous && (a && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.one(e.support.animation.end, i).css({
        left: t + "px"
      }).addClass("animated owl-animated-out").addClass(a)), s && o.one(e.support.animation.end, i).addClass("animated owl-animated-in").addClass(s))
    }
  }, o.prototype.clear = function(t) {
    e(t.target).css({
      left: ""
    }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
  }, o.prototype.destroy = function() {
    var e, t;
    for (e in this.handlers) this.core.$element.off(e, this.handlers[e]);
    for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
  }, e.fn.owlCarousel.Constructor.Plugins.Animate = o
}(window.Zepto || window.jQuery, window, document),
function(e, t, i, n) {
  var o = function(t) {
    this._core = t, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
      "changed.owl.carousel": e.proxy(function(e) {
        e.namespace && "settings" === e.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : e.namespace && "position" === e.property.name && this._paused && (this._time = 0)
      }, this),
      "initialized.owl.carousel": e.proxy(function(e) {
        e.namespace && this._core.settings.autoplay && this.play()
      }, this),
      "play.owl.autoplay": e.proxy(function(e, t, i) {
        e.namespace && this.play(t, i)
      }, this),
      "stop.owl.autoplay": e.proxy(function(e) {
        e.namespace && this.stop()
      }, this),
      "mouseover.owl.autoplay": e.proxy(function() {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
      }, this),
      "mouseleave.owl.autoplay": e.proxy(function() {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
      }, this),
      "touchstart.owl.core": e.proxy(function() {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
      }, this),
      "touchend.owl.core": e.proxy(function() {
        this._core.settings.autoplayHoverPause && this.play()
      }, this)
    }, this._core.$element.on(this._handlers), this._core.options = e.extend({}, o.Defaults, this._core.options)
  };
  o.Defaults = {
    autoplay: !1,
    autoplayTimeout: 5e3,
    autoplayHoverPause: !1,
    autoplaySpeed: !1
  }, o.prototype._next = function(n) {
    this._call = t.setTimeout(e.proxy(this._next, this, n), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || i.hidden || this._core.next(n || this._core.settings.autoplaySpeed)
  }, o.prototype.read = function() {
    return (new Date).getTime() - this._time
  }, o.prototype.play = function(i, n) {
    var o;
    this._core.is("rotating") || this._core.enter("rotating"), i = i || this._core.settings.autoplayTimeout, o = Math.min(this._time % (this._timeout || i), i), this._paused ? (this._time = this.read(), this._paused = !1) : t.clearTimeout(this._call), this._time += this.read() % i - o, this._timeout = i, this._call = t.setTimeout(e.proxy(this._next, this, n), i - o)
  }, o.prototype.stop = function() {
    this._core.is("rotating") && (this._time = 0, this._paused = !0, t.clearTimeout(this._call), this._core.leave("rotating"))
  }, o.prototype.pause = function() {
    this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, t.clearTimeout(this._call))
  }, o.prototype.destroy = function() {
    var e, t;
    this.stop();
    for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
    for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
  }, e.fn.owlCarousel.Constructor.Plugins.autoplay = o
}(window.Zepto || window.jQuery, window, document),
function(e, t, i, n) {
  "use strict";
  var o = function(t) {
    this._core = t, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
      next: this._core.next,
      prev: this._core.prev,
      to: this._core.to
    }, this._handlers = {
      "prepared.owl.carousel": e.proxy(function(t) {
        t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + e(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
      }, this),
      "added.owl.carousel": e.proxy(function(e) {
        e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 0, this._templates.pop())
      }, this),
      "remove.owl.carousel": e.proxy(function(e) {
        e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 1)
      }, this),
      "changed.owl.carousel": e.proxy(function(e) {
        e.namespace && "position" == e.property.name && this.draw()
      }, this),
      "initialized.owl.carousel": e.proxy(function(e) {
        e.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
      }, this),
      "refreshed.owl.carousel": e.proxy(function(e) {
        e.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
      }, this)
    }, this._core.options = e.extend({}, o.Defaults, this._core.options), this.$element.on(this._handlers)
  };
  o.Defaults = {
    nav: !1,
    navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
    navSpeed: !1,
    navElement: 'button type="button" role="presentation"',
    navContainer: !1,
    navContainerClass: "owl-nav",
    navClass: ["owl-prev", "owl-next"],
    slideBy: 1,
    dotClass: "owl-dot",
    dotsClass: "owl-dots",
    dots: !0,
    dotsEach: !1,
    dotsData: !1,
    dotsSpeed: !1,
    dotsContainer: !1
  }, o.prototype.initialize = function() {
    var t, i = this._core.settings;
    this._controls.$relative = (i.navContainer ? e(i.navContainer) : e("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = e("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", e.proxy(function(e) {
      this.prev(i.navSpeed)
    }, this)), this._controls.$next = e("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", e.proxy(function(e) {
      this.next(i.navSpeed)
    }, this)), i.dotsData || (this._templates = [e('<button role="button">').addClass(i.dotClass).append(e("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? e(i.dotsContainer) : e("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", e.proxy(function(t) {
      var n = e(t.target).parent().is(this._controls.$absolute) ? e(t.target).index() : e(t.target).parent().index();
      t.preventDefault(), this.to(n, i.dotsSpeed)
    }, this));
    for (t in this._overrides) this._core[t] = e.proxy(this[t], this)
  }, o.prototype.destroy = function() {
    var e, t, i, n, o;
    o = this._core.settings;
    for (e in this._handlers) this.$element.off(e, this._handlers[e]);
    for (t in this._controls) "$relative" === t && o.navContainer ? this._controls[t].html("") : this._controls[t].remove();
    for (n in this.overides) this._core[n] = this._overrides[n];
    for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
  }, o.prototype.update = function() {
    var e, t, i, n = this._core.clones().length / 2,
      o = n + this._core.items().length,
      s = this._core.maximum(!0),
      a = this._core.settings,
      r = a.center || a.autoWidth || a.dotsData ? 1 : a.dotsEach || a.items;
    if ("page" !== a.slideBy && (a.slideBy = Math.min(a.slideBy, a.items)), a.dots || "page" == a.slideBy)
      for (this._pages = [], e = n, t = 0, i = 0; e < o; e++) {
        if (t >= r || 0 === t) {
          if (this._pages.push({
              start: Math.min(s, e - n),
              end: e - n + r - 1
            }), Math.min(s, e - n) === s) break;
          t = 0, ++i
        }
        t += this._core.mergers(this._core.relative(e))
      }
  }, o.prototype.draw = function() {
    var t, i = this._core.settings,
      n = this._core.items().length <= i.items,
      o = this._core.relative(this._core.current()),
      s = i.loop || i.rewind;
    this._controls.$relative.toggleClass("disabled", !i.nav || n), i.nav && (this._controls.$previous.toggleClass("disabled", !s && o <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !s && o >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || n), i.dots && (t = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== t ? this._controls.$absolute.html(this._templates.join("")) : t > 0 ? this._controls.$absolute.append(new Array(t + 1).join(this._templates[0])) : t < 0 && this._controls.$absolute.children().slice(t).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(e.inArray(this.current(), this._pages)).addClass("active"))
  }, o.prototype.onTrigger = function(t) {
    var i = this._core.settings;
    t.page = {
      index: e.inArray(this.current(), this._pages),
      count: this._pages.length,
      size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
    }
  }, o.prototype.current = function() {
    var t = this._core.relative(this._core.current());
    return e.grep(this._pages, e.proxy(function(e, i) {
      return e.start <= t && e.end >= t
    }, this)).pop()
  }, o.prototype.getPosition = function(t) {
    var i, n, o = this._core.settings;
    return "page" == o.slideBy ? (i = e.inArray(this.current(), this._pages), n = this._pages.length, t ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, t ? i += o.slideBy : i -= o.slideBy), i
  }, o.prototype.next = function(t) {
    e.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
  }, o.prototype.prev = function(t) {
    e.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
  }, o.prototype.to = function(t, i, n) {
    var o;
    !n && this._pages.length ? (o = this._pages.length, e.proxy(this._overrides.to, this._core)(this._pages[(t % o + o) % o].start, i)) : e.proxy(this._overrides.to, this._core)(t, i)
  }, e.fn.owlCarousel.Constructor.Plugins.Navigation = o
}(window.Zepto || window.jQuery, window, document),
function(e, t, i, n) {
  "use strict";
  var o = function(i) {
    this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
      "initialized.owl.carousel": e.proxy(function(i) {
        i.namespace && "URLHash" === this._core.settings.startPosition && e(t).trigger("hashchange.owl.navigation")
      }, this),
      "prepared.owl.carousel": e.proxy(function(t) {
        if (t.namespace) {
          var i = e(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
          if (!i) return;
          this._hashes[i] = t.content
        }
      }, this),
      "changed.owl.carousel": e.proxy(function(i) {
        if (i.namespace && "position" === i.property.name) {
          var n = this._core.items(this._core.relative(this._core.current())),
            o = e.map(this._hashes, function(e, t) {
              return e === n ? t : null
            }).join();
          if (!o || t.location.hash.slice(1) === o) return;
          t.location.hash = o
        }
      }, this)
    }, this._core.options = e.extend({}, o.Defaults, this._core.options), this.$element.on(this._handlers), e(t).on("hashchange.owl.navigation", e.proxy(function(e) {
      var i = t.location.hash.substring(1),
        n = this._core.$stage.children(),
        o = this._hashes[i] && n.index(this._hashes[i]);
      void 0 !== o && o !== this._core.current() && this._core.to(this._core.relative(o), !1, !0)
    }, this))
  };
  o.Defaults = {
    URLhashListener: !1
  }, o.prototype.destroy = function() {
    var i, n;
    e(t).off("hashchange.owl.navigation");
    for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
    for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
  }, e.fn.owlCarousel.Constructor.Plugins.Hash = o
}(window.Zepto || window.jQuery, window, document),
function(e, t, i, n) {
  function o(t, i) {
    var o = !1,
      s = t.charAt(0).toUpperCase() + t.slice(1);
    return e.each((t + " " + r.join(s + " ") + s).split(" "), function(e, t) {
      if (a[t] !== n) return o = !i || t, !1
    }), o
  }

  function s(e) {
    return o(e, !0)
  }
  var a = e("<support>").get(0).style,
    r = "Webkit Moz O ms".split(" "),
    l = {
      transition: {
        end: {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd",
          transition: "transitionend"
        }
      },
      animation: {
        end: {
          WebkitAnimation: "webkitAnimationEnd",
          MozAnimation: "animationend",
          OAnimation: "oAnimationEnd",
          animation: "animationend"
        }
      }
    },
    c = {
      csstransforms: function() {
        return !!o("transform")
      },
      csstransforms3d: function() {
        return !!o("perspective")
      },
      csstransitions: function() {
        return !!o("transition")
      },
      cssanimations: function() {
        return !!o("animation")
      }
    };
  c.csstransitions() && (e.support.transition = new String(s("transition")), e.support.transition.end = l.transition.end[e.support.transition]), c.cssanimations() && (e.support.animation = new String(s("animation")), e.support.animation.end = l.animation.end[e.support.animation]), c.csstransforms() && (e.support.transform = new String(s("transform")), e.support.transform3d = c.csstransforms3d())
}(window.Zepto || window.jQuery, window, document), eval(function(e, t, i, n, o, s) {
    if (o = function(e) {
        return (e < 62 ? "" : o(parseInt(e / 62))) + ((e %= 62) > 35 ? String.fromCharCode(e + 29) : e.toString(36))
      }, !"".replace(/^/, String)) {
      for (; i--;) s[o(i)] = n[i] || o(i);
      n = [function(e) {
        return s[e]
      }], o = function() {
        return "\\w+"
      }, i = 1
    }
    for (; i--;) n[i] && (e = e.replace(new RegExp("\\b" + o(i) + "\\b", "g"), n[i]));
    return e
  }('1l.4Q=(17(){1a p,q;p=q=(17(){1a N={5g:"gM.3-b3-8-gL",fM:0,8L:{},$6T:17(R){18(R.$6M||(R.$6M=++H.fM))},9u:17(R){18(H.8L[R]||(H.8L[R]={}))},$F:17(){},$1c:17(){18 1c},$1f:17(){18 1f},g3:"ey-"+1g.5Y(1g.7E()*1w bF().fr()),3c:17(R){18(2U!=R)},bJ:17(S,R){18(2U!=S)?S:R},9B:17(R){18!!(R)},1P:17(R){if(!H.3c(R)){18 1c}if(R.$4W){18 R.$4W}if(!!R.52){if(1==R.52){18"7D"}if(3==R.52){18"fL"}}if(R.1q&&R.2Z){18"gK"}if(R.1q&&R.9F){18"3h"}if((R 4v 1l.fB||R 4v 1l.c4)&&R.4z===H.4h){18"2B"}if(R 4v 1l.5W){18"40"}if(R 4v 1l.c4){18"17"}if(R 4v 1l.ex){18"2e"}if(H.1e.5K){if(H.3c(R.ds)){18"1D"}}1b{if(R===1l.1D||R.4z==1l.1u||R.4z==1l.gJ||R.4z==1l.gN||R.4z==1l.gO||R.4z==1l.gR){18"1D"}}if(R 4v 1l.bF){18"fK"}if(R 4v 1l.gQ){18"gP"}if(R===1l){18"1l"}if(R===1k){18"1k"}18 bc(R)},1T:17(W,V){if(!(W 4v 1l.5W)){W=[W]}if(!V){18 W[0]}1r(1a U=0,S=W.1q;U<S;U++){if(!H.3c(W)){4Y}1r(1a T in V){if(!fB.29.4s.2k(V,T)){4Y}3M{W[U][T]=V[T]}3X(R){}}}18 W[0]},9w:17(V,U){if(!(V 4v 1l.5W)){V=[V]}1r(1a T=0,R=V.1q;T<R;T++){if(!H.3c(V[T])){4Y}if(!V[T].29){4Y}1r(1a S in(U||{})){if(!V[T].29[S]){V[T].29[S]=U[S]}}}18 V[0]},fv:17(T,S){if(!H.3c(T)){18 T}1r(1a R in(S||{})){if(!T[R]){T[R]=S[R]}}18 T},$3M:17(){1r(1a S=0,R=3h.1q;S<R;S++){3M{18 3h[S]()}3X(T){}}18 1i},$A:17(T){if(!H.3c(T)){18 H.$([])}if(T.fJ){18 H.$(T.fJ())}if(T.2Z){1a S=T.1q||0,R=1w 5W(S);4R(S--){R[S]=T[S]}18 H.$(R)}18 H.$(5W.29.b9.2k(T))},5X:17(){18 1w bF().fr()},6o:17(V){1a T;7a(H.1P(V)){1R"8s":T={};1r(1a U in V){T[U]=H.6o(V[U])}1O;1R"40":T=[];1r(1a S=0,R=V.1q;S<R;S++){T[S]=H.6o(V[S])}1O;2E:18 V}18 H.$(T)},$:17(T){1a R=1f;if(!H.3c(T)){18 1i}if(T.$bx){18 T}7a(H.1P(T)){1R"40":T=H.fv(T,H.1T(H.5W,{$bx:H.$F}));T.1A=T.ew;18 T;1O;1R"2e":1a S=1k.e9(T);if(H.3c(S)){18 H.$(S)}18 1i;1O;1R"1l":1R"1k":H.$6T(T);T=H.1T(T,H.3Y);1O;1R"7D":H.$6T(T);T=H.1T(T,H.3C);1O;1R"1D":T=H.1T(T,H.1u);1O;1R"fL":1R"17":1R"40":1R"fK":2E:R=1c;1O}if(R){18 H.1T(T,{$bx:H.$F})}1b{18 T}},$1w:17(R,T,S){18 H.$(H.by.6n(R)).e7(T||{}).2W(S||{})},eV:17(S,U,Y){1a V,T,W,X=[],R=-1;Y||(Y=H.g3);V=H.$(Y)||H.$1w("3e",{id:Y,1H:"9s/d1"}).4e((1k.gI||1k.4j),"1M");T=V.fT||V.eH;if("2e"!=H.1P(U)){1r(1a W in U){X.2c(W+":"+U[W])}U=X.9p(";")}if(T.g7){R=T.g7(S+" {"+U+"}",T.gH.1q)}1b{R=T.gB(S,U)}18 R},d3:17(U,R){1a T,S;T=H.$(U);if("7D"!==H.1P(T)){18}S=T.fT||T.eH;if(S.eG){S.eG(R)}1b{if(S.eF){S.eF(R)}}},gA:17(){18"gz-gy-gC-gD-gG".5F(/[gF]/g,17(T){1a S=1g.7E()*16|0,R=T=="x"?S:(S&3|8);18 R.8Q(16)}).9f()},gE:(17(){1a R;18 17(S){if(!R){R=1k.6n("a")}R.3v("9S",S);18("!!"+R.9S).5F("!!","")}})(),gx:17(T){1a U=0,R=T.1q;1r(1a S=0;S<R;++S){U=31*U+T.h8(S);U%=h7}18 U}};1a H=N;1a I=N.$;if(!1l.cK){1l.cK=N;1l.$ey=N.$}H.5W={$4W:"40",7z:17(U,V){1a R=14.1q;1r(1a S=14.1q,T=(V<0)?1g.6S(0,S+V):V||0;T<S;T++){if(14[T]===U){18 T}}18-1},3f:17(R,S){18 14.7z(R,S)!=-1},ew:17(R,U){1r(1a T=0,S=14.1q;T<S;T++){if(T in 14){R.2k(U,14[T],T,14)}}},4N:17(R,W){1a V=[];1r(1a U=0,S=14.1q;U<S;U++){if(U in 14){1a T=14[U];if(R.2k(W,14[U],U,14)){V.2c(T)}}}18 V},fm:17(R,V){1a U=[];1r(1a T=0,S=14.1q;T<S;T++){if(T in 14){U[T]=R.2k(V,14[T],T,14)}}18 U}};H.9w(ex,{$4W:"2e",48:17(){18 14.5F(/^\\s+|\\s+$/g,"")},eq:17(R,S){18(S||1c)?(14.8Q()===R.8Q()):(14.34().8Q()===R.34().8Q())},5V:17(){18 14.5F(/-\\D/g,17(R){18 R.ay(1).9f()})},aP:17(){18 14.5F(/[A-Z]/g,17(R){18("-"+R.ay(0).34())})},h6:17(R){18 1X(14,R||10)},h5:17(){18 3H(14)},db:17(){18!14.5F(/1f/i,"").48()},9J:17(S,R){R=R||"";18(R+14+R).7z(R+S+R)>-1}});N.9w(c4,{$4W:"17",1d:17(){1a S=H.$A(3h),R=14,T=S.6K();18 17(){18 R.5u(T||1i,S.cn(H.$A(3h)))}},6x:17(){1a S=H.$A(3h),R=14,T=S.6K();18 17(U){18 R.5u(T||1i,H.$([U||(H.1e.1z?1l.1D:1i)]).cn(S))}},3r:17(){1a S=H.$A(3h),R=14,T=S.6K();18 1l.4P(17(){18 R.5u(R,S)},T||0)},dJ:17(){1a S=H.$A(3h),R=14;18 17(){18 R.3r.5u(R,S)}},dg:17(){1a S=H.$A(3h),R=14,T=S.6K();18 1l.h9(17(){18 R.5u(R,S)},T||0)}});1a O={},G=3W.ha.34(),F=G.4G(/(5A|b6|5K|cL)\\/(\\d+\\.?\\d*)/i),K=G.4G(/(hd|bi)\\/(\\d+\\.?\\d*)/i)||G.4G(/(fq|aJ|fl|fb|91|bi)\\/(\\d+\\.?\\d*)/i),M=G.4G(/5g\\/(\\d+\\.?\\d*)/i),B=1k.7B.3e;17 C(S){1a R=S.ay(0).9f()+S.b9(1);18 S in B||("fI"+R)in B||("fp"+R)in B||("4O"+R)in B||("O"+R)in B}H.1e={51:{hc:!!(1k.hb),h4:!!(1l.gW),gV:!!(1k.gU),78:!!(1k.gY||1k.gZ||1k.9N||1k.d7||1k.h2||1k.gn||1k.ge||1k.gf||1k.gw),dk:!!(1l.gr)&&!!(1l.gq)&&(1l.aU&&"gt"in 1w aU),2Y:C("2Y"),ar:C("ar"),fa:C("fa"),2q:C("2q"),5O:1c,fO:1c,bB:1c,9C:(17(){18 1k.gg.gi("gh://gk.gm.gl/gs/ga/gc#g9","1.1")})()},cl:17(){18"gd"in 1l||(1l.fR&&1k 4v fR)}(),8h:G.4G(/(am|bb\\d+|iC).+|iA|iy\\/|iE|iF|iK|iJ|iI|iG|iH|ip(ev|eA|ad)|ix|iw|il |ii|hf|io|8h.+fb|iq|91 m(iv|in)i|iu( it)?|eQ|p(ir|is)\\/|iL|j7|j8|jb(4|6)0|j9|j1|iR\\.(1e|iN)|iZ|hB|hw (ce|eQ)|hx|hC/)?1f:1c,8n:(F&&F[1])?F[1].34():(1l.91)?"cL":!!(1l.hD)?"5K":(2U!==1k.hI||1i!=1l.hH)?"b6":(1i!==1l.hG||!3W.hE)?"5A":"hu",5g:(F&&F[2])?3H(F[2]):0,9m:(K&&K[1])?K[1].34():"",c6:(K&&K[2])?3H(K[2]):0,fz:"",ba:"",56:"",1z:0,7P:G.4G(/ip(?:ad|eA|ev)/)?"dw":(G.4G(/(?:hk|am)/)||3W.7P.4G(/hi|9W|hg/i)||["hm"])[0].34(),fs:1k.a0&&"es"==1k.a0.34(),fW:0,5x:17(){18(1k.a0&&"es"==1k.a0.34())?1k.4j:1k.7B},5O:1l.5O||1l.hq||1l.ho||1l.hp||1l.hJ||2U,aG:1l.aG||1l.fj||1l.fj||1l.hK||1l.i4||1l.i2||2U,5J:1c,8e:17(){if(H.1e.5J){18}1a U,T;H.1e.5J=1f;H.4j=H.$(1k.4j);H.9W=H.$(1l);3M{1a S=H.$1w("38").2W({1B:2z,1J:2z,6E:"2o",2D:"7o",1M:-i1}).4e(1k.4j);H.1e.fW=S.e5-S.dq;S.2J()}3X(R){}3M{U=H.$1w("38");T=U.3e;T.fZ="fP:9v(bI://),9v(bI://),ib 9v(bI://)";H.1e.51.fO=(/(9v\\s*\\(.*?){3}/).3E(T.fP);T=1i;U=1i}3X(R){}if(!H.1e.fX){H.1e.fX=H.aD("ar").aP()}3M{U=H.$1w("38");U.3e.fZ=H.aD("4N").aP()+":g1(ia);";H.1e.51.bB=!!U.3e.1q&&(!H.1e.1z||H.1e.1z>9);U=1i}3X(R){}if(!H.1e.51.bB){H.$(1k.7B).2X("fQ-i7-6g")}if(2U===1l.i8&&2U!==1l.hZ){O.6C="hP"}H.3Y.1s.2k(H.$(1k),"9c")}};(17(){1a V=[],U,T,S;17 R(){18!!(3h.9F.bu)}7a(H.1e.8n){1R"5K":if(!H.1e.5g){H.1e.5g=!!(1l.aU)?3:2}1O;1R"b6":H.1e.5g=(K&&K[2])?3H(K[2]):0;1O}H.1e[H.1e.8n]=1f;if(K&&"fq"===K[1]){H.1e.9m="aJ"}if(!!1l.aJ){H.1e.aJ=1f}if(K&&"bi"===K[1]){H.1e.9m="91";H.1e.91=1f}if("fl"===H.1e.9m&&(M&&M[1])){H.1e.c6=3H(M[1])}if("am"==H.1e.7P&&H.1e.5A&&(M&&M[1])){H.1e.fo=1f}U=({b6:["-fH-","fp","fH"],5A:["-5A-","fI","5A"],5K:["-4O-","4O","4O"],cL:["-o-","O","o"]})[H.1e.8n]||["","",""];H.1e.fz=U[0];H.1e.ba=U[1];H.1e.56=U[2];H.1e.1z=(!H.1e.5K)?2U:(1k.fD)?1k.fD:17(){1a W=0;if(H.1e.fs){18 5}7a(H.1e.5g){1R 2:W=6;1O;1R 3:W=7;1O}18 W}();V.2c(H.1e.7P+"-6g");if(H.1e.8h){V.2c("8h-6g")}if(H.1e.fo){V.2c("am-1e-6g")}if(H.1e.1z){H.1e.9m="ie";H.1e.c6=H.1e.1z;V.2c("ie"+H.1e.1z+"-6g");1r(T=11;T>H.1e.1z;T--){V.2c("lt-ie"+T+"-6g")}}if(H.1e.5A&&H.1e.5g<hX){H.1e.51.78=1c}if(H.1e.5O){H.1e.5O.2k(1l,17(){H.1e.51.5O=1f})}if(H.1e.51.9C){V.2c("9C-6g")}1b{V.2c("fQ-9C-6g")}S=(1k.7B.6j||"").4G(/\\S+/g)||[];1k.7B.6j=H.$(S).cn(V).9p(" ");if(H.1e.1z&&H.1e.1z<9){1k.6n("4t");1k.6n("33")}})();(17(){H.1e.78={cW:H.1e.51.78,f6:17(){18!!(1k.hW||1k[H.1e.56+"hV"]||1k.78||1k.hT||1k[H.1e.56+"hU"])},dn:17(R,S){S||(S={});if(14.cW){H.$(1k).1G(14.cD,14.d8=17(T){if(14.f6()){S.di&&S.di()}1b{H.$(1k).1V(14.cD,14.d8);S.d6&&S.d6()}}.6x(14));H.$(1k).1G(14.b8,14.5c=17(T){S.9t&&S.9t();H.$(1k).1V(14.b8,14.5c)}.6x(14));(R[H.1e.56+"hS"]||R[H.1e.56+"hR"]||R.hM||17(){}).2k(R)}1b{if(S.9t){S.9t()}}},hL:(1k.9N||1k.d7||1k[H.1e.56+"hN"]||1k[H.1e.56+"hO"]||17(){}).1d(1k),cD:1k.dY?"hQ":(1k.9N?"":H.1e.56)+"hY",b8:1k.dY?"i9":(1k.9N?"":H.1e.56)+"i6",i5:H.1e.56,i0:1i}})();1a Q=/\\S+/g,E=/^(5T(dW|dQ|dO|dS)i3)|((5w|6f)(dW|dQ|dO|dS))$/,J={"hs":("2U"===bc(B.e4))?"ht":"e4"},L={hn:1f,hh:1f,3j:1f,bS:1f,bM:1f},D=(1l.eg)?17(T,R){1a S=1l.eg(T,1i);18 S?S.hj(R)||S[R]:1i}:17(U,S){1a T=U.hl,R=1i;R=T?T[S]:1i;if(1i==R&&U.3e&&U.3e[S]){R=U.3e[S]}18 R};17 P(T){1a R,S;S=(H.1e.5A&&"4N"==T)?1c:(T in B);if(!S){R=H.1e.ba+T.ay(0).9f()+T.b9(1);if(R in B){18 R}}18 T}H.aD=P;H.3C={8B:17(R){18!(R||"").9J(" ")&&(14.6j||"").9J(R," ")},2X:17(V){1a S=(14.6j||"").4G(Q)||[],U=(V||"").4G(Q)||[],R=U.1q,T=0;1r(;T<R;T++){if(!H.$(S).3f(U[T])){S.2c(U[T])}}14.6j=S.9p(" ");18 14},4L:17(W){1a S=(14.6j||"").4G(Q)||[],V=(W||"").4G(Q)||[],R=V.1q,U=0,T;1r(;U<R;U++){if((T=H.$(S).7z(V[U]))>-1){S.bA(T,1)}}14.6j=W?S.9p(" "):"";18 14},hv:17(R){18 14.8B(R)?14.4L(R):14.2X(R)},2n:17(S){1a T=S.5V(),R=1i;S=J[T]||(J[T]=P(T));R=D(14,S);if("1Z"===R){R=1i}if(1i!==R){if("3j"==S){18 H.3c(R)?3H(R):1}if(E.3E(S)){R=1X(R,10)?R:"ct"}}18 R},1L:17(S,R){1a U=S.5V();3M{if("3j"==S){14.3V(R);18 14}S=J[U]||(J[U]=P(U));14.3e[S]=R+(("5e"==H.1P(R)&&!L[U])?"2G":"")}3X(T){}18 14},2W:17(S){1r(1a R in S){14.1L(R,S[R])}18 14},hF:17(){1a R={};H.$A(3h).1A(17(S){R[S]=14.2n(S)},14);18 R},3V:17(T,R){1a S;R=R||1c;14.3e.3j=T;T=1X(3H(T)*2z);if(R){if(0===T){if("6H"!=14.3e.6s){14.3e.6s="6H"}}1b{if("72"!=14.3e.6s){14.3e.6s="72"}}}if(H.1e.1z&&H.1e.1z<9){if(!6u(T)){if(!~14.3e.4N.7z("cE")){14.3e.4N+=" ei:ed.ec.cE(ax="+T+")"}1b{14.3e.4N=14.3e.4N.5F(/ax=\\d*/i,"ax="+T)}}1b{14.3e.4N=14.3e.4N.5F(/ei:ed.ec.cE\\(ax=\\d*\\)/i,"").48();if(""===14.3e.4N){14.3e.3U("4N")}}}18 14},e7:17(R){1r(1a S in R){if("2B"===S){14.2X(""+R[S])}1b{14.3v(S,""+R[S])}}18 14},4q:17(){18 14.2W({5r:"5G",6s:"6H"})},2M:17(){18 14.2W({5r:"",6s:"72"})},2j:17(){18{1B:14.e5,1J:14.6e}},hy:17(S){1a R=14.2j();R.1B-=(3H(14.2n("5T-1N-1B")||0)+3H(14.2n("5T-6q-1B")||0));R.1J-=(3H(14.2n("5T-1M-1B")||0)+3H(14.2n("5T-5h-1B")||0));if(!S){R.1B-=(3H(14.2n("5w-1N")||0)+3H(14.2n("5w-6q")||0));R.1J-=(3H(14.2n("5w-1M")||0)+3H(14.2n("5w-5h")||0))}18 R},9A:17(){18{1M:14.b0,1N:14.b5}},hz:17(){1a R=14,S={1M:0,1N:0};do{S.1N+=R.b5||0;S.1M+=R.b0||0;R=R.3q}4R(R);18 S},5j:17(){1a V=14,S=0,U=0;if(H.3c(1k.7B.e8)){1a R=14.e8(),T=H.$(1k).9A(),W=H.1e.5x();18{1M:R.1M+T.y-W.hA,1N:R.1N+T.x-W.ic}}do{S+=V.aV||0;U+=V.cO||0;V=V.ig}4R(V&&!(/^(?:4j|iW)$/i).3E(V.2y));18{1M:U,1N:S}},iV:17(){1a S=14.5j();1a R=14.2j();18{1M:S.1M,5h:S.1M+R.1J,1N:S.1N,6q:S.1N+R.1B}},iX:17(S){3M{14.eR=S}3X(R){14.iY=S}18 14},2J:17(){18(14.3q)?14.3q.9e(14):14},4B:17(){H.$A(14.2g).1A(17(R){if(3==R.52||8==R.52){18}H.$(R).4B()});14.2J();14.cr();if(14.$6M){H.8L[14.$6M]=1i;5t H.8L[14.$6M]}18 1i},2r:17(T,S){S=S||"5h";1a R=14.3n;("1M"==S&&R)?14.7q(T,R):14.8N(T);18 14},4e:17(T,S){1a R=H.$(T).2r(14,S);18 14},iU:17(R){14.2r(R.3q.iT(14,R));18 14},iO:17(R){if("7D"!==H.1P("2e"==H.1P(R)?R=1k.e9(R):R)){18 1c}18(14==R)?1c:(14.3f&&!(H.1e.ea))?(14.3f(R)):(14.eb)?!!(14.eb(R)&16):H.$A(14.7J(R.2y)).3f(R)}};H.3C.iP=H.3C.2n;H.3C.iQ=H.3C.2W;if(!1l.3C){1l.3C=H.$F;if(H.1e.8n.5A){1l.1k.6n("iS")}1l.3C.29=(H.1e.8n.5A)?1l["[[j0.29]]"]:{}}H.9w(1l.3C,{$4W:"7D"});H.3Y={2j:17(){if(H.1e.cl||H.1e.ja||H.1e.ea){18{1B:1l.jc,1J:1l.jd}}18{1B:H.1e.5x().dq,1J:H.1e.5x().j3}},9A:17(){18{x:1l.j2||H.1e.5x().b5,y:1l.j4||H.1e.5x().b0}},j5:17(){1a R=14.2j();18{1B:1g.6S(H.1e.5x().j6,R.1B),1J:1g.6S(H.1e.5x().iM,R.1J)}}};H.1T(1k,{$4W:"1k"});H.1T(1l,{$4W:"1l"});H.1T([H.3C,H.3Y],{2p:17(U,S){1a R=H.9u(14.$6M),T=R[U];if(2U!==S&&2U===T){T=R[U]=S}18(H.3c(T)?T:1i)},3p:17(T,S){1a R=H.9u(14.$6M);R[T]=S;18 14},3D:17(S){1a R=H.9u(14.$6M);5t R[S];18 14}});if(!(1l.d0&&1l.d0.29&&1l.d0.29.d2)){H.1T([H.3C,H.3Y],{d2:17(R){18 H.$A(14.9Q("*")).4N(17(T){3M{18(1==T.52&&T.6j.9J(R," "))}3X(S){}})}})}H.1T([H.3C,H.3Y],{fi:17(){18 14.d2(3h[0])},7J:17(){18 14.9Q(3h[0])}});if(H.1e.78.cW&&!1k.dp){H.3C.dp=17(){H.1e.78.dn(14)}}H.1u={$4W:"1D",74:H.$1c,27:17(){18 14.8q().4l()},8q:17(){if(14.dr){14.dr()}1b{14.ds=1f}18 14},4l:17(){if(14.du){14.du()}1b{14.et=1c}18 14},8p:17(){14.74=H.$1f;18 14},dv:17(){1a S,R;S=((/5R/i).3E(14.1H))?14.3k[0]:14;18(!H.3c(S))?{x:0,y:0}:{x:S.3b,y:S.3a}},6I:17(){1a S,R;S=((/5R/i).3E(14.1H))?14.3k[0]:14;18(!H.3c(S))?{x:0,y:0}:{x:S.6m||S.3b+H.1e.5x().b5,y:S.6r||S.3a+H.1e.5x().b0}},cc:17(){1a R=14.1Y||14.ih;4R(R&&3==R.52){R=R.3q}18 R},az:17(){1a S=1i;7a(14.1H){1R"5o":1R"ij":1R"ik":S=14.aC||14.im;1O;1R"6P":1R"iz":1R"iB":S=14.aC||14.iD;1O;2E:18 S}3M{4R(S&&3==S.52){S=S.3q}}3X(R){S=1i}18 S},7H:17(){if(!14.df&&14.3T!==2U){18(14.3T&1?1:(14.3T&2?3:(14.3T&4?2:0)))}18 14.df},je:17(){18(14.3i&&("5R"===14.3i||14.3i===14.6R))||(/5R/i).3E(14.1H)},gT:17(){18 14.3i?(("5R"===14.3i||14.6R===14.3i)&&14.d5):1===14.3k.1q&&(14.8t.1q?14.8t[0].4x==14.3k[0].4x:1f)}};H.ai="dj";H.9n="gb";H.7s="";if(!1k.dj){H.ai="gj";H.9n="go";H.7s="3N"}H.1u.1v={1H:"",x:1i,y:1i,36:1i,3T:1i,1Y:1i,aC:1i,$4W:"1D.gp",74:H.$1c,6D:H.$([]),4y:17(R){1a S=R;14.6D.2c(S)},27:17(){18 14.8q().4l()},8q:17(){14.6D.1A(17(S){3M{S.8q()}3X(R){}});18 14},4l:17(){14.6D.1A(17(S){3M{S.4l()}3X(R){}});18 14},8p:17(){14.74=H.$1f;18 14},dv:17(){18{x:14.3b,y:14.3a}},6I:17(){18{x:14.x,y:14.y}},cc:17(){18 14.1Y},az:17(){18 14.aC},7H:17(){18 14.3T},gu:17(){18 14.6D.1q>0?14.6D[0].cc():2U}};H.1T([H.3C,H.3Y],{1G:17(T,V,W,Z){1a Y,R,U,X,S;if("2e"==H.1P(T)){S=T.8g(" ");if(S.1q>1){T=S}}if(H.1P(T)=="40"){H.$(T).1A(14.1G.6x(14,V,W,Z));18 14}if(!T||!V||H.1P(T)!="2e"||H.1P(V)!="17"){18 14}if(T=="9c"&&H.1e.5J){V.2k(14);18 14}T=O[T]||T;W=1X(W||50);if(!V.$4d){V.$4d=1g.5Y(1g.7E()*H.5X())}Y=H.3Y.2p.2k(14,"96",{});R=Y[T];if(!R){Y[T]=R=H.$([]);U=14;if(H.1u.1v[T]){H.1u.1v[T].1Q.6B.2k(14,Z)}1b{R.3K=17(aa){aa=H.1T(aa||1l.e,{$4W:"1D"});H.3Y.1s.2k(U,T,H.$(aa))};14[H.ai](H.7s+T,R.3K,1c)}}X={1H:T,fn:V,cd:W,dI:V.$4d};R.2c(X);R.gv(17(ab,aa){18 ab.cd-aa.cd});18 14},1V:17(X){1a V=H.3Y.2p.2k(14,"96",{}),T,R,S,Y,W,U;W=3h.1q>1?3h[1]:-2z;if("2e"==H.1P(X)){U=X.8g(" ");if(U.1q>1){X=U}}if(H.1P(X)=="40"){H.$(X).1A(14.1V.6x(14,W));18 14}X=O[X]||X;if(!X||H.1P(X)!="2e"||!V||!V[X]){18 14}T=V[X]||[];1r(S=0;S<T.1q;S++){R=T[S];if(-2z==W||!!W&&W.$4d===R.dI){Y=T.bA(S--,1)}}if(0===T.1q){if(H.1u.1v[X]){H.1u.1v[X].1Q.2J.2k(14)}1b{14[H.9n](H.7s+X,T.3K,1c)}5t V[X]}18 14},1s:17(V,X){1a U=H.3Y.2p.2k(14,"96",{}),T,R,S;V=O[V]||V;if(!V||H.1P(V)!="2e"||!U||!U[V]){18 14}3M{X=H.1T(X||{},{1H:V})}3X(W){}if(2U===X.36){X.36=H.5X()}T=U[V]||[];1r(S=0;S<T.1q&&!(X.74&&X.74());S++){T[S].fn.2k(14,X)}},he:17(S,R){1a V=("9c"==S)?1c:1f,U=14,T;S=O[S]||S;if(!V){H.3Y.1s.2k(14,S);18 14}if(U===1k&&1k.aW&&!U.dy){U=1k.7B}if(1k.aW){T=1k.aW(S);T.h0(R,1f,1f)}1b{T=1k.h1();T.aK=S}if(1k.aW){U.dy(T)}1b{U.gX("3N"+R,T)}18 T},cr:17(){1a S=H.3Y.2p.2k(14,"96");if(!S){18 14}1r(1a R in S){H.3Y.1V.2k(14,R)}H.3Y.3D.2k(14,"96");18 14}});(17(R){if("4f"===1k.99){18 R.1e.8e.3r(1)}if(R.1e.5A&&R.1e.5g<h3){(17(){(R.$(["4F","4f"]).3f(1k.99))?R.1e.8e():3h.9F.3r(50)})()}1b{if(R.1e.5K&&R.1e.1z<9&&1l==1M){(17(){(R.$3M(17(){R.1e.5x().gS("1N");18 1f}))?R.1e.8e():3h.9F.3r(50)})()}1b{R.3Y.1G.2k(R.$(1k),"fu",R.1e.8e);R.3Y.1G.2k(R.$(1l),"2O",R.1e.8e)}}})(N);H.4h=17(){1a V=1i,S=H.$A(3h);if("2B"==H.1P(S[0])){V=S.6K()}1a R=17(){1r(1a Y in 14){14[Y]=H.6o(14[Y])}if(14.4z.$4a){14.$4a={};1a aa=14.4z.$4a;1r(1a Z in aa){1a X=aa[Z];7a(H.1P(X)){1R"17":14.$4a[Z]=H.4h.dC(14,X);1O;1R"8s":14.$4a[Z]=H.6o(X);1O;1R"40":14.$4a[Z]=H.6o(X);1O}}}1a W=(14.4g)?14.4g.5u(14,3h):14;5t 14.bu;18 W};if(!R.29.4g){R.29.4g=H.$F}if(V){1a U=17(){};U.29=V.29;R.29=1w U;R.$4a={};1r(1a T in V.29){R.$4a[T]=V.29[T]}}1b{R.$4a=1i}R.4z=H.4h;R.29.4z=R;H.1T(R.29,S[0]);H.1T(R,{$4W:"2B"});18 R};N.4h.dC=17(R,S){18 17(){1a U=14.bu;1a T=S.5u(R,3h);18 T}};(17(U){1a T=U.$;1a R=5,S=8u;U.1u.1v.2I=1w U.4h(U.1T(U.1u.1v,{1H:"2I",4g:17(X,W){1a V=W.6I();14.x=V.x;14.y=V.y;14.3b=W.3b;14.3a=W.3a;14.36=W.36;14.3T=W.7H();14.1Y=X;14.4y(W)}}));U.1u.1v.2I.1Q={1t:{8d:S,3T:1},6B:17(V){14.3p("1D:2I:1t",U.1T(U.6o(U.1u.1v.2I.1Q.1t),V||{}));14.1G("7X",U.1u.1v.2I.1Q.3K,1);14.1G("6l",U.1u.1v.2I.1Q.3K,1);14.1G("4k",U.1u.1v.2I.1Q.bt,1);if(U.1e.5K&&U.1e.1z<9){14.1G("8H",U.1u.1v.2I.1Q.3K,1)}},2J:17(){14.1V("7X",U.1u.1v.2I.1Q.3K);14.1V("6l",U.1u.1v.2I.1Q.3K);14.1V("4k",U.1u.1v.2I.1Q.bt);if(U.1e.5K&&U.1e.1z<9){14.1V("8H",U.1u.1v.2I.1Q.3K)}},bt:17(V){V.4l()},3K:17(Y){1a X,V,W;V=14.2p("1D:2I:1t");if(Y.1H!="8H"&&Y.7H()!=V.3T){18}if(14.2p("1D:2I:bk")){14.3D("1D:2I:bk");18}if("7X"==Y.1H){X=1w U.1u.1v.2I(14,Y);14.3p("1D:2I:9I",X)}1b{if("6l"==Y.1H){X=14.2p("1D:2I:9I");if(!X){18}W=Y.6I();14.3D("1D:2I:9I");X.4y(Y);if(Y.36-X.36<=V.8d&&1g.7Q(1g.4K(W.x-X.x,2)+1g.4K(W.y-X.y,2))<=R){14.1s("2I",X)}1k.1s("6l",Y)}1b{if(Y.1H=="8H"){X=1w U.1u.1v.2I(14,Y);14.1s("2I",X)}}}}}})(N);(17(S){1a R=S.$;S.1u.1v.2H=1w S.4h(S.1T(S.1u.1v,{1H:"2H",4T:"4c",6V:1c,4g:17(W,V,U){1a T=V.6I();14.x=T.x;14.y=T.y;14.3b=V.3b;14.3a=V.3a;14.36=V.36;14.3T=V.7H();14.1Y=W;14.4y(V);14.4T=U}}));S.1u.1v.2H.1Q={6B:17(){1a U=S.1u.1v.2H.1Q.dD.6x(14),T=S.1u.1v.2H.1Q.9r.6x(14);14.1G("7X",S.1u.1v.2H.1Q.bp,1);14.1G("6l",S.1u.1v.2H.1Q.9r,1);1k.1G("aF",U,1);1k.1G("6l",T,1);14.3p("1D:2H:5q:1k:7t",U);14.3p("1D:2H:5q:1k:5S",T)},2J:17(){14.1V("7X",S.1u.1v.2H.1Q.bp);14.1V("6l",S.1u.1v.2H.1Q.9r);R(1k).1V("aF",14.2p("1D:2H:5q:1k:7t")||S.$F);R(1k).1V("6l",14.2p("1D:2H:5q:1k:5S")||S.$F);14.3D("1D:2H:5q:1k:7t");14.3D("1D:2H:5q:1k:5S")},bp:17(U){1a T;if(1!=U.7H()){18}U.4l();T=1w S.1u.1v.2H(14,U,"4c");14.3p("1D:2H:4c",T)},9r:17(U){1a T;T=14.2p("1D:2H:4c");if(!T){18}U.4l();T=1w S.1u.1v.2H(14,U,"9a");14.3D("1D:2H:4c");14.1s("2H",T)},dD:17(U){1a T;T=14.2p("1D:2H:4c");if(!T){18}U.4l();if(!T.6V){T.6V=1f;14.1s("2H",T)}T=1w S.1u.1v.2H(14,U,"dB");14.1s("2H",T)}}})(N);(17(S){1a R=S.$;S.1u.1v.4H=1w S.4h(S.1T(S.1u.1v,{1H:"4H",88:1c,8l:1i,4g:17(V,U){1a T=U.6I();14.x=T.x;14.y=T.y;14.3b=U.3b;14.3a=U.3a;14.36=U.36;14.3T=U.7H();14.1Y=V;14.4y(U)}}));S.1u.1v.4H.1Q={1t:{8d:5B},6B:17(T){14.3p("1D:4H:1t",S.1T(S.6o(S.1u.1v.4H.1Q.1t),T||{}));14.1G("2I",S.1u.1v.4H.1Q.3K,1)},2J:17(){14.1V("2I",S.1u.1v.4H.1Q.3K)},3K:17(V){1a U,T;U=14.2p("1D:4H:1D");T=14.2p("1D:4H:1t");if(!U){U=1w S.1u.1v.4H(14,V);U.8l=4P(17(){U.88=1f;V.74=S.$1c;14.1s("2I",V);14.3D("1D:4H:1D")}.1d(14),T.8d+10);14.3p("1D:4H:1D",U);V.8p()}1b{3s(U.8l);14.3D("1D:4H:1D");if(!U.88){U.4y(V);V.8p().27();14.1s("4H",U)}1b{}}}}})(N);(17(X){1a W=X.$;17 R(Y){18 Y.3i?(("5R"===Y.3i||Y.6R===Y.3i)&&Y.d5):1===Y.3k.1q&&(Y.8t.1q?Y.8t[0].4x==Y.3k[0].4x:1f)}17 T(Y){if(Y.3i){18("5R"===Y.3i||Y.6R===Y.3i)?Y.aO:1i}1b{18 Y.3k[0].4x}}17 U(Y){if(Y.3i){18("5R"===Y.3i||Y.6R===Y.3i)?Y:1i}1b{18 Y.3k[0]}}X.1u.1v.3w=1w X.4h(X.1T(X.1u.1v,{1H:"3w",id:1i,4g:17(Z,Y){1a aa=U(Y);14.id=aa.aO||aa.4x;14.x=aa.6m;14.y=aa.6r;14.6m=aa.6m;14.6r=aa.6r;14.3b=aa.3b;14.3a=aa.3a;14.36=Y.36;14.3T=0;14.1Y=Z;14.4y(Y)}}));1a S=10,V=5B;X.1u.1v.3w.1Q={6B:17(Y){14.1G(["7T",1l.3W.4E?"aX":"9T"],X.1u.1v.3w.1Q.8b,1);14.1G(["7V",1l.3W.4E?"8c":"85"],X.1u.1v.3w.1Q.7y,1);14.1G("4k",X.1u.1v.3w.1Q.bn,1)},2J:17(){14.1V(["7T",1l.3W.4E?"aX":"9T"],X.1u.1v.3w.1Q.8b);14.1V(["7V",1l.3W.4E?"8c":"85"],X.1u.1v.3w.1Q.7y);14.1V("4k",X.1u.1v.3w.1Q.bn)},bn:17(Y){Y.4l()},8b:17(Y){if(!R(Y)){14.3D("1D:3w:1D");18}14.3p("1D:3w:1D",1w X.1u.1v.3w(14,Y));14.3p("1D:2I:bk",1f)},7y:17(ab){1a Z=X.5X(),aa=14.2p("1D:3w:1D"),Y=14.2p("1D:3w:1t");if(!aa||!R(ab)){18}14.3D("1D:3w:1D");if(aa.id==T(ab)&&ab.36-aa.36<=V&&1g.7Q(1g.4K(U(ab).6m-aa.x,2)+1g.4K(U(ab).6r-aa.y,2))<=S){14.3D("1D:2I:9I");ab.27();aa.4y(ab);14.1s("3w",aa)}}}})(N);H.1u.1v.4U=1w H.4h(H.1T(H.1u.1v,{1H:"4U",88:1c,8l:1i,4g:17(S,R){14.x=R.x;14.y=R.y;14.3b=R.3b;14.3a=R.3a;14.36=R.36;14.3T=0;14.1Y=S;14.4y(R)}}));H.1u.1v.4U.1Q={1t:{8d:8u},6B:17(R){14.3p("1D:4U:1t",H.1T(H.6o(H.1u.1v.4U.1Q.1t),R||{}));14.1G("3w",H.1u.1v.4U.1Q.3K,1)},2J:17(){14.1V("3w",H.1u.1v.4U.1Q.3K)},3K:17(T){1a S,R;S=14.2p("1D:4U:1D");R=14.2p("1D:4U:1t");if(!S){S=1w H.1u.1v.4U(14,T);S.8l=4P(17(){S.88=1f;T.74=H.$1c;14.1s("3w",T)}.1d(14),R.8d+10);14.3p("1D:4U:1D",S);T.8p()}1b{3s(S.8l);14.3D("1D:4U:1D");if(!S.88){S.4y(T);T.8p().27();14.1s("4U",S)}1b{}}}};(17(W){1a V=W.$;17 R(X){18 X.3i?(("5R"===X.3i||X.6R===X.3i)&&X.d5):1===X.3k.1q&&(X.8t.1q?X.8t[0].4x==X.3k[0].4x:1f)}17 T(X){if(X.3i){18("5R"===X.3i||X.6R===X.3i)?X.aO:1i}1b{18 X.3k[0].4x}}17 U(X){if(X.3i){18("5R"===X.3i||X.6R===X.3i)?X:1i}1b{18 X.3k[0]}}1a S=10;W.1u.1v.2u=1w W.4h(W.1T(W.1u.1v,{1H:"2u",4T:"4c",id:1i,6V:1c,4g:17(Z,Y,X){1a aa=U(Y);14.id=aa.aO||aa.4x;14.3b=aa.3b;14.3a=aa.3a;14.6m=aa.6m;14.6r=aa.6r;14.x=aa.6m;14.y=aa.6r;14.36=Y.36;14.3T=0;14.1Y=Z;14.4y(Y);14.4T=X}}));W.1u.1v.2u.1Q={6B:17(){1a Y=W.1u.1v.2u.1Q.aA.1d(14),X=W.1u.1v.2u.1Q.7y.1d(14);14.1G(["7T",1l.3W.4E?"aX":"9T"],W.1u.1v.2u.1Q.8b,1);14.1G(["7V",1l.3W.4E?"8c":"85"],W.1u.1v.2u.1Q.7y,1);14.1G(["aH",1l.3W.4E?"a1":"a7"],W.1u.1v.2u.1Q.aA,1);14.3p("1D:2u:5q:1k:7t",Y);14.3p("1D:2u:5q:1k:5S",X);V(1k).1G(1l.3W.4E?"a1":"a7",Y,1);V(1k).1G(1l.3W.4E?"8c":"85",X,1)},2J:17(){14.1V(["7T",1l.3W.4E?"aX":"9T"],W.1u.1v.2u.1Q.8b);14.1V(["7V",1l.3W.4E?"8c":"85"],W.1u.1v.2u.1Q.7y);14.1V(["aH",1l.3W.4E?"a1":"a7"],W.1u.1v.2u.1Q.aA);V(1k).1V(1l.3W.4E?"a1":"a7",14.2p("1D:2u:5q:1k:7t")||W.$F,1);V(1k).1V(1l.3W.4E?"8c":"85",14.2p("1D:2u:5q:1k:5S")||W.$F,1);14.3D("1D:2u:5q:1k:7t");14.3D("1D:2u:5q:1k:5S")},8b:17(Y){1a X;if(!R(Y)){18}X=1w W.1u.1v.2u(14,Y,"4c");14.3p("1D:2u:4c",X)},7y:17(Y){1a X;X=14.2p("1D:2u:4c");if(!X||!X.6V||X.id!=T(Y)){18}X=1w W.1u.1v.2u(14,Y,"9a");14.3D("1D:2u:4c");14.1s("2u",X)},aA:17(Y){1a X;X=14.2p("1D:2u:4c");if(!X||!R(Y)){18}if(X.id!=T(Y)){14.3D("1D:2u:4c");18}if(!X.6V&&1g.7Q(1g.4K(U(Y).6m-X.x,2)+1g.4K(U(Y).6r-X.y,2))>S){X.6V=1f;14.1s("2u",X)}if(!X.6V){18}X=1w W.1u.1v.2u(14,Y,"dB");14.1s("2u",X)}}})(N);H.1u.1v.4o=1w H.4h(H.1T(H.1u.1v,{1H:"4o",7m:1,bL:1,dx:1,4T:"jv",4g:17(S,R){14.36=R.36;14.3T=0;14.1Y=S;14.x=R.4S[0].3b+(R.4S[1].3b-R.4S[0].3b)/2;14.y=R.4S[0].3a+(R.4S[1].3a-R.4S[0].3a)/2;14.dA=1g.7Q(1g.4K(R.4S[0].3b-R.4S[1].3b,2)+1g.4K(R.4S[0].3a-R.4S[1].3a,2));14.4y(R)},6L:17(R){1a S;14.4T="m9";if(R.3k[0].4x!=14.6D[0].4S[0].4x||R.3k[1].4x!=14.6D[0].4S[1].4x){18}S=1g.7Q(1g.4K(R.3k[0].3b-R.3k[1].3b,2)+1g.4K(R.3k[0].3a-R.3k[1].3a,2));14.bL=14.7m;14.7m=S/14.dA;14.dx=14.7m/14.bL;14.x=R.3k[0].3b+(R.3k[1].3b-R.3k[0].3b)/2;14.y=R.3k[0].3a+(R.3k[1].3a-R.3k[0].3a)/2;14.4y(R)}}));H.1u.1v.4o.1Q={6B:17(){14.1G("7T",H.1u.1v.4o.1Q.c5,1);14.1G("7V",H.1u.1v.4o.1Q.cp,1);14.1G("aH",H.1u.1v.4o.1Q.co,1)},2J:17(){14.1V("7T",H.1u.1v.4o.1Q.c5);14.1V("7V",H.1u.1v.4o.1Q.cp);14.1V("aH",H.1u.1v.4o.1Q.co)},c5:17(S){1a R;if(S.4S.1q!=2){18}S.4l();R=1w H.1u.1v.4o(14,S);14.3p("1D:4o:1D",R)},cp:17(S){1a R;R=14.2p("1D:4o:1D");if(!R){18}S.4l();14.3D("1D:4o:1D")},co:17(S){1a R;R=14.2p("1D:4o:1D");if(!R){18}S.4l();R.6L(S);14.1s("4o",R)}};(17(W){1a U=W.$;W.1u.1v.4r=1w W.4h(W.1T(W.1u.1v,{1H:"4r",4g:17(ac,ab,ae,Y,X,ad,Z){1a aa=ab.6I();14.x=aa.x;14.y=aa.y;14.36=ab.36;14.1Y=ac;14.m7=ae||0;14.3O=Y||0;14.3J=X||0;14.lF=ad||0;14.lG=Z||0;14.c8=ab.c8||0;14.4M=1c;14.4y(ab)}}));1a V,S;17 R(){V=1i}17 T(X,Y){18(X>50)||(1===Y&&!("9W"==W.1e.7P&&X<1))||(0===X%12)||(0==X%4.kV)}W.1u.1v.4r.1Q={aK:"kU"in 1k||W.1e.1z>8?"kZ":"b1",6B:17(){14.1G(W.1u.1v.4r.1Q.aK,W.1u.1v.4r.1Q.3K,1)},2J:17(){14.1V(W.1u.1v.4r.1Q.aK,W.1u.1v.4r.1Q.3K,1)},3K:17(ac){1a ad=0,aa=0,Y=0,X=0,ab,Z;if(ac.dz){Y=ac.dz*-1}if(ac.dE!==2U){Y=ac.dE}if(ac.dF!==2U){Y=ac.dF}if(ac.dK!==2U){aa=ac.dK*-1}if(ac.3J){Y=-1*ac.3J}if(ac.3O){aa=ac.3O}if(0===Y&&0===aa){18}ad=0===Y?aa:Y;X=1g.6S(1g.1E(Y),1g.1E(aa));if(!V||X<V){V=X}ab=ad>0?"5Y":"8M";ad=1g[ab](ad/V);aa=1g[ab](aa/V);Y=1g[ab](Y/V);if(S){3s(S)}S=4P(R,5B);Z=1w W.1u.1v.4r(14,ac,ad,aa,Y,0,V);Z.4M=T(V,ac.c8||0);14.1s("4r",Z)}}})(N);H.9W=H.$(1l);H.by=H.$(1k);18 N})();(17(D){if(!D){6w"7k 7g 7i"}1a C=D.$;1a B=1l.l3||1l.l2||1i;p.g0=1w D.4h({2b:1i,5J:1c,1t:{aj:D.$F,67:D.$F,9d:D.$F,5c:D.$F,8k:D.$F,dG:D.$F,9Y:1c,dL:1f},1y:1i,9g:1i,ca:0,8j:{aj:17(E){if(E.1Y&&(5B===E.1Y.ap||dH===E.1Y.ap)&&E.l1){14.1t.aj.1d(1i,(E.4F-(14.1t.dL?14.ca:0))/E.l0).3r(1);14.ca=E.4F}},67:17(E){if(E){C(E).27()}14.9j();if(14.5J){18}14.5J=1f;14.9k();!14.1t.9Y&&14.1t.aj.1d(1i,1).3r(1);14.1t.67.1d(1i,14).3r(1);14.1t.8k.1d(1i,14).3r(1)},9d:17(E){if(E){C(E).27()}14.9j();14.5J=1c;14.9k();14.1t.9d.1d(1i,14).3r(1);14.1t.8k.1d(1i,14).3r(1)},5c:17(E){if(E){C(E).27()}14.9j();14.5J=1c;14.9k();14.1t.5c.1d(1i,14).3r(1);14.1t.8k.1d(1i,14).3r(1)}},9U:17(){C(["2O","9h","7p"]).1A(17(E){14.2b.1G(E,14.8j["3N"+E].6x(14).dJ(1))},14)},9j:17(){if(14.9g){3M{3s(14.9g)}3X(E){}14.9g=1i}C(["2O","9h","7p"]).1A(17(F){14.2b.1V(F)},14)},9k:17(){14.2j();if(14.2b.2p("1w")){1a E=14.2b.3q;14.2b.2J().3D("1w").2W({2D:"lw",1M:"1Z"});E.4B()}},dd:17(F){1a G=1w aU(),E;C(["9h","1K"]).1A(17(H){G["3N"+H]=C(17(I){14.8j["3N"+H].2k(14,I)}).1d(14)},14);G.5c=C(17(){14.1t.dG.1d(1i,14).3r(1);14.1t.9Y=1c;14.9U();14.2b.43=F}).1d(14);G.67=C(17(){if(5B!==G.ap&&dH!==G.ap){14.8j.5c.2k(14);18}E=G.lE;14.9U();if(B&&!D.1e.5K&&!("dw"===D.1e.7P&&D.1e.5g<lD)){14.2b.3v("43",B.lC(E))}1b{14.2b.43=F}}).1d(14);G.ls("lj",F);G.ln="lq";G.lp()},4g:17(F,E){14.1t=D.1T(14.1t,E);14.2b=C(F)||D.$1w("2b",{},{"6S-1B":"5G","6S-1J":"5G"}).4e(D.$1w("38").2X("6g-kX-2b").2W({2D:"7o",1M:-lo,1B:10,1J:10,6E:"6H"}).4e(1k.4j)).3p("1w",1f);if(D.1e.51.dk&&14.1t.9Y&&"2e"==D.1P(F)){14.dd(F);18}1a G=17(){if(14.de()){14.8j.67.2k(14)}1b{14.8j.5c.2k(14)}G=1i}.1d(14);14.9U();if("2e"==D.1P(F)){14.2b.43=F}1b{if(D.1e.5K&&5==D.1e.5g&&D.1e.1z<9){14.2b.dh=17(){if(/4F|4f/.3E(14.2b.99)){14.2b.dh=1i;G&&G()}}.1d(14)}14.2b.43=F.3S("43")}14.2b&&14.2b.4f&&G&&(14.9g=G.3r(2z))},g6:17(){14.9j();14.9k();14.5J=1c;18 14},de:17(){1a E=14.2b;18(E.ch)?(E.ch>0):(E.99)?("4f"==E.99):E.1B>0},2j:17(){18 14.1y||(14.1y={1B:14.2b.ch||14.2b.1B,1J:14.2b.lr||14.2b.1J})}})})(p);(17(C){if(!C){6w"7k 7g 7i"}if(C.4n){18}1a B=C.$;C.4n=1w C.4h({4g:17(E,D){1a F;14.el=C.$(E);14.1t=C.1T(14.1t,D);14.6k=1c;14.7Z=14.9H;F=C.4n.8I[14.1t.2Y]||14.1t.2Y;if("17"===C.1P(F)){14.7Z=F}1b{14.5I=14.8V(F)||14.8V("7n")}if("2e"==C.1P(14.1t.8a)){14.1t.8a="3z"===14.1t.8a?lm:1X(14.1t.8a)||1}},1t:{dl:60,3I:be,2Y:"7n",8a:1,1I:"li",8O:C.$F,57:C.$F,aB:C.$F,dt:C.$F,9V:1c,lk:1c},4Z:1i,5I:1i,7Z:1i,ll:17(D){14.1t.2Y=D;D=C.4n.8I[14.1t.2Y]||14.1t.2Y;if("17"===C.1P(D)){14.7Z=D}1b{14.7Z=14.9H;14.5I=14.8V(D)||14.8V("7n")}},2A:17(F){1a D=/\\%$/,E;14.4Z=F;14.bQ=0;14.4T=0;14.lu=0;14.9y={};14.7Y="7Y"===14.1t.1I||"7Y-4C"===14.1t.1I;14.2s="2s"===14.1t.1I||"2s-4C"===14.1t.1I;1r(E in 14.4Z){D.3E(14.4Z[E][0])&&(14.9y[E]=1f);if("4C"===14.1t.1I||"7Y-4C"===14.1t.1I||"2s-4C"===14.1t.1I){14.4Z[E].4C()}}14.ci=C.5X();14.dm=14.ci+14.1t.3I;14.1t.8O.2k();if(0===14.1t.3I){14.7b(1);14.1t.57.2k()}1b{14.9x=14.1n.1d(14);if(!14.1t.9V&&C.1e.51.5O){14.6k=C.1e.5O.2k(1l,14.9x)}1b{14.6k=14.9x.dg(1g.5Q(cS/14.1t.dl))}}18 14},bR:17(){if(14.6k){if(!14.1t.9V&&C.1e.51.5O&&C.1e.aG){C.1e.aG.2k(1l,14.6k)}1b{lB(14.6k)}14.6k=1c}},27:17(D){D=C.3c(D)?D:1c;14.bR();if(D){14.7b(1);14.1t.57.3r(10)}18 14},bO:17(F,E,D){F=3H(F);E=3H(E);18(E-F)*D+F},1n:17(){1a E=C.5X(),D=(E-14.ci)/14.1t.3I,F=1g.5Y(D);if(E>=14.dm&&F>=14.1t.8a){14.bR();14.7b(1);14.1t.57.3r(10);18 14}if(14.7Y&&14.bQ<F){1r(1a G in 14.4Z){14.4Z[G].4C()}}14.bQ=F;if(!14.1t.9V&&C.1e.51.5O){14.6k=C.1e.5O.2k(1l,14.9x)}14.7b((14.2s?F:0)+14.7Z(D%1))},7b:17(D){1a E={},G=D;1r(1a F in 14.4Z){if("3j"===F){E[F]=1g.5Q(14.bO(14.4Z[F][0],14.4Z[F][1],D)*2z)/2z}1b{E[F]=14.bO(14.4Z[F][0],14.4Z[F][1],D);14.9y[F]&&(E[F]+="%")}}14.1t.aB(E,14.el);14.2f(E);14.1t.dt(E,14.el)},2f:17(D){18 14.el.2W(D)},8V:17(D){1a E,F=1i;if("2e"!==C.1P(D)){18 1i}7a(D){1R"93":F=B([0,0,1,1]);1O;1R"7n":F=B([0.25,0.1,0.25,1]);1O;1R"7n-in":F=B([0.42,0,1,1]);1O;1R"7n-au":F=B([0,0,0.58,1]);1O;1R"7n-in-au":F=B([0.42,0,0.58,1]);1O;1R"ee":F=B([0.47,0,0.lA,0.lz]);1O;1R"ef":F=B([0.39,0.lv,0.lx,1]);1O;1R"ly":F=B([0.lg,0.cy,0.55,0.95]);1O;1R"dU":F=B([0.55,0.kY,0.68,0.53]);1O;1R"dR":F=B([0.25,0.46,0.45,0.94]);1O;1R"kW":F=B([0.l4,0.dN,0.l5,0.lc]);1O;1R"dP":F=B([0.55,0.ld,0.le,0.19]);1O;1R"dV":F=B([0.lf,0.61,0.dM,1]);1O;1R"lb":F=B([0.la,0.ej,0.dM,1]);1O;1R"l6":F=B([0.l7,0.dN,0.l8,0.22]);1O;1R"l9":F=B([0.e6,0.84,0.44,1]);1O;1R"lT":F=B([0.77,0,0.eh,1]);1O;1R"m5":F=B([0.m6,0.cy,0.lZ,0.m0]);1O;1R"m8":F=B([0.23,1,0.32,1]);1O;1R"mb":F=B([0.86,0,0.lX,1]);1O;1R"e3":F=B([0.95,0.cy,0.lN,0.lL]);1O;1R"dT":F=B([0.19,1,0.22,1]);1O;1R"lU":F=B([1,0,0,1]);1O;1R"lS":F=B([0.6,0.lM,0.98,0.lR]);1O;1R"lQ":F=B([0.lW,0.82,0.e6,1]);1O;1R"lV":F=B([0.lP,0.lO,0.15,0.86]);1O;1R"e1":F=B([0.6,-0.28,0.lJ,0.ej]);1O;1R"e2":F=B([0.eh,0.lI,0.32,1.lH]);1O;1R"lK":F=B([0.68,-0.55,0.lY,1.55]);1O;2E:D=D.5F(/\\s/g,"");if(D.4G(/^5E-5M\\((?:-?[0-9\\.]{0,}[0-9]{1,},){3}(?:-?[0-9\\.]{0,}[0-9]{1,})\\)$/)){F=D.5F(/^5E-5M\\s*\\(|\\)$/g,"").8g(",");1r(E=F.1q-1;E>=0;E--){F[E]=3H(F[E])}}}18 B(F)},9H:17(P){1a D=0,O=0,L=0,Q=0,N=0,J=0,K=14.1t.3I;17 I(R){18((D*R+O)*R+L)*R}17 H(R){18((Q*R+N)*R+J)*R}17 F(R){18(3*D*R+2*O)*R+L}17 M(R){18 1/(5B*R)}17 E(R,S){18 H(G(R,S))}17 G(Y,Z){1a X,W,V,S,R,U;17 T(aa){if(aa>=0){18 aa}1b{18 0-aa}}1r(V=Y,U=0;U<8;U++){S=I(V)-Y;if(T(S)<Z){18 V}R=F(V);if(T(R)<0.m1){1O}V=V-S/R}X=0;W=1;V=Y;if(V<X){18 X}if(V>W){18 W}4R(X<W){S=I(V);if(T(S-Y)<Z){18 V}if(Y>S){X=V}1b{W=V}V=(W-X)*0.5+X}18 V}L=3*14.5I[0];O=3*(14.5I[2]-14.5I[0])-L;D=1-L-O;J=3*14.5I[1];N=3*(14.5I[3]-14.5I[1])-J;Q=1-J-N;18 E(P,M(K))}});C.4n.8I={93:"93",ma:"ee",m2:"ef",m3:"e3",m4:"dT",lh:"dU",kS:"dR",jN:"dP",jO:"dV",jP:"e1",jQ:"e2",e0:17(E,D){D=D||[];18 1g.4K(2,10*--E)*1g.eB(20*E*1g.3A*(D[0]||1)/3)},jM:17(E,D){18 1-C.4n.8I.e0(1-E,D)},dZ:17(F){1r(1a E=0,D=1;1;E+=D,D/=2){if(F>=(7-4*E)/11){18 D*D-1g.4K((11-6*E-11*F)/4,2)}}},jL:17(D){18 1-C.4n.8I.dZ(1-D)},5G:17(D){18 0}}})(p);(17(C){if(!C){6w"7k 7g 7i"}if(C.dX){18}1a B=C.$;C.dX=1w C.4h(C.4n,{4g:17(D,E){14.bl=D;14.1t=C.1T(14.1t,E);14.6k=1c;14.$4a.4g()},2A:17(H){1a D=/\\%$/,G,F,E=H.1q;14.bH=H;14.a2=1w 5W(E);1r(F=0;F<E;F++){14.a2[F]={};1r(G in H[F]){D.3E(H[F][G][0])&&(14.a2[F][G]=1f);if("4C"===14.1t.1I||"7Y-4C"===14.1t.1I||"2s-4C"===14.1t.1I){14.bH[F][G].4C()}}}14.$4a.2A([]);18 14},7b:17(D){1r(1a E=0;E<14.bl.1q;E++){14.el=C.$(14.bl[E]);14.4Z=14.bH[E];14.9y=14.a2[E];14.$4a.7b(D)}}})})(p);(17(C){if(!C){6w"7k 7g 7i";18}if(C.bD){18}1a B=C.$;C.bD=17(E,F){1a D=14.8f=C.$1w("38",1i,{2D:"7o","z-1U":ek}).2X("jH");C.$(E).1G("5o",17(){D.4e(1k.4j)});C.$(E).1G("6P",17(){D.2J()});C.$(E).1G("aF",17(K){1a M=20,J=C.$(K).6I(),I=D.2j(),H=C.$(1l).2j(),L=C.$(1l).9A();17 G(P,N,O){18(O<(P-N)/2)?O:((O>(P+N)/2)?(O-N):(P-N)/2)}D.2W({1N:L.x+G(H.1B,I.1B+2*M,J.x-L.x)+M,1M:L.y+G(H.1J,I.1J+2*M,J.y-L.y)+M})});14.9s(F)};C.bD.29.9s=17(D){14.8f.3n&&14.8f.9e(14.8f.3n);14.8f.2r(1k.bC(D))}})(p);(17(C){if(!C){6w"7k 7g 7i";18}if(C.jG){18}1a B=C.$;C.al=17(G,F,E,D){14.aI=1i;14.62=C.$1w("an",1i,{2D:"7o","z-1U":ek,6s:"6H",3j:0.8}).2X(D||"").4e(E||1k.4j);14.dc(G);14.2M(F)};C.al.29.2M=17(D){14.62.2M();14.aI=14.4q.1d(14).3r(C.bJ(D,jI))};C.al.29.4q=17(D){3s(14.aI);14.aI=1i;if(14.62&&!14.bE){14.bE=1w p.4n(14.62,{3I:C.bJ(D,9q),57:17(){14.62.4B();5t 14.62;14.bE=1i}.1d(14)}).2A({3j:[14.62.2n("3j"),0]})}};C.al.29.dc=17(D){14.62.3n&&14.8f.9e(14.62.3n);14.62.2r(1k.bC(D))}})(p);(17(C){if(!C){6w"7k 7g 7i"}if(C.c9){18}1a F=C.$,B=1i,J={"65":1,40:2,5e:3,"17":4,2e:2z},D={"65":17(M,L,K){if("65"!=C.1P(L)){if(K||"2e"!=C.1P(L)){18 1c}1b{if(!/^(1f|1c)$/.3E(L)){18 1c}1b{L=L.db()}}}if(M.4s("3B")&&!F(M["3B"]).3f(L)){18 1c}B=L;18 1f},2e:17(M,L,K){if("2e"!==C.1P(L)){18 1c}1b{if(M.4s("3B")&&!F(M["3B"]).3f(L)){18 1c}1b{B=""+L;18 1f}}},5e:17(N,M,L){1a K=1c,P=/%$/,O=(C.1P(M)=="2e"&&P.3E(M));if(L&&!"5e"==bc M){18 1c}M=3H(M);if(6u(M)){18 1c}if(6u(N.7c)){N.7c=da.jJ}if(6u(N.bK)){N.bK=da.jK}if(N.4s("3B")&&!F(N["3B"]).3f(M)){18 1c}if(N.7c>M||M>N.bK){18 1c}B=O?(M+"%"):M;18 1f},40:17(N,L,K){if("2e"===C.1P(L)){3M{L=1l.jR.jS(L)}3X(M){18 1c}}if(C.1P(L)==="40"){B=L;18 1f}1b{18 1c}},"17":17(M,L,K){if(C.1P(L)==="17"){B=L;18 1f}1b{18 1c}}},E=17(P,O,L){1a N;N=P.4s("3G")?P.3G:[P];if("40"!=C.1P(N)){18 1c}1r(1a M=0,K=N.1q-1;M<=K;M++){if(D[N[M].1H](N[M],O,L)){18 1f}}18 1c},H=17(P){1a N,M,O,K,L;if(P.4s("3G")){K=P.3G.1q;1r(N=0;N<K;N++){1r(M=N+1;M<K;M++){if(J[P.3G[N]["1H"]]>J[P.3G[M].1H]){L=P.3G[N];P.3G[N]=P.3G[M];P.3G[M]=L}}}}18 P},I=17(N){1a M;M=N.4s("3G")?N.3G:[N];if("40"!=C.1P(M)){18 1c}1r(1a L=M.1q-1;L>=0;L--){if(!M[L].1H||!J.4s(M[L].1H)){18 1c}if(C.3c(M[L]["3B"])){if("40"!==C.1P(M[L]["3B"])){18 1c}1r(1a K=M[L]["3B"].1q-1;K>=0;K--){if(!D[M[L].1H]({1H:M[L].1H},M[L]["3B"][K],1f)){18 1c}}}}if(N.4s("2E")&&!E(N,N["2E"],1f)){18 1c}18 1f},G=17(K){14.5f={};14.1t={};14.d9(K)};C.1T(G.29,{d9:17(M){1a L,K,N;1r(L in M){if(!M.4s(L)){4Y}K=(L+"").48().5V();if(!14.5f.4s(K)){14.5f[K]=H(M[L]);if(!I(14.5f[K])){6w"jZ k0 k1 k2 \'"+L+"\' jY in "+M}14.1t[K]=2U}}},2f:17(L,K){L=(L+"").48().5V();if(C.1P(K)=="2e"){K=K.48()}if(14.5f.4s(L)){B=K;if(E(14.5f[L],K)){14.1t[L]=B}B=1i}},g8:17(K){K=(K+"").48().5V();if(14.5f.4s(K)){18 C.3c(14.1t[K])?14.1t[K]:14.5f[K]["2E"]}},7G:17(L){1r(1a K in L){14.2f(K,L[K])}},jX:17(){1a L=C.1T({},14.1t);1r(1a K in L){if(2U===L[K]&&2U!==14.5f[K]["2E"]){L[K]=14.5f[K]["2E"]}}18 L},8J:17(K){F(K.8g(";")).1A(F(17(L){L=L.8g(":");14.2f(L.6K().48(),L.9p(":"))}).1d(14))},9B:17(K){K=(K+"").48().5V();18 14.5f.4s(K)},jT:17(K){K=(K+"").48().5V();18 14.9B(K)&&C.3c(14.1t[K])},2J:17(K){K=(K+"").48().5V();if(14.9B(K)){5t 14.1t[K];5t 14.5f[K]}}});C.c9=G}(p));q.$9o=17(B){1a D=[],C;1r(C in B){if(!B.4s(C)||(C+"").jU(0,2)=="$J"){4Y}D.2c(B[C])}18 q.$A(D)};q.9b={4k:2,8H:2,6l:2,7X:2,jV:2,b1:2,jW:2,5o:2,6P:2,aF:2,jF:2,jE:2,8A:2,jn:2,jo:2,jp:2,g1:2,jq:2,bz:2,jm:2,jl:2,2O:1,jh:1,jg:2,5H:1,7t:1,fu:1,ji:1,7p:1,9h:1};q.jj={1k:1f,7D:1f,"2B":1f,8s:1f};q.6O={2K:17(F,E,C){if(q.1P(F)=="40"){j(F).1A(14.2K.6x(14,E,C));18 14}if(!F||!E||q.1P(F)!="2e"||q.1P(E)!="17"){18 14}if(F=="9c"&&q.1e.5J){E.2k(14);18 14}C=1X(C||10);if(!E.$4d){E.$4d=1g.5Y(1g.7E()*q.5X())}1a D=14.2p("8R",{});D[F]||(D[F]={});D[F][C]||(D[F][C]={});D[F]["5s"]||(D[F]["5s"]={});if(D[F][C][E.$4d]){18 14}if(D[F]["5s"][E.$4d]){14.fC(F,E)}1a B=14,G=17(H){18 E.2k(B,j(H))};if(q.9b[F]&&!D[F]["17"]){if(q.9b[F]==2){G=17(H){H=q.1T(H||1l.e,{$4W:"1D"});18 E.2k(B,j(H))}}D[F]["17"]=17(H){B.1s(F,H)};14[q.ai](q.7s+F,D[F]["17"],1c)}D[F][C][E.$4d]=G;D[F]["5s"][E.$4d]=C;18 14},1s:17(C,E){3M{E=q.1T(E||{},{1H:C})}3X(D){}if(!C||q.1P(C)!="2e"){18 14}1a B=14.2p("8R",{});B[C]||(B[C]={});B[C]["5s"]||(B[C]["5s"]={});q.$9o(B[C]).1A(17(F){if(F!=B[C]["5s"]&&F!=B[C]["17"]){q.$9o(F).1A(17(G){G(14)},14)}},E);18 14},fC:17(E,D){if(!E||!D||q.1P(E)!="2e"||q.1P(D)!="17"){18 14}if(!D.$4d){D.$4d=1g.5Y(1g.7E()*q.5X())}1a C=14.2p("8R",{});C[E]||(C[E]={});C[E]["5s"]||(C[E]["5s"]={});4J=C[E]["5s"][D.$4d];C[E][4J]||(C[E][4J]={});if(4J>=0&&C[E][4J][D.$4d]){5t C[E][4J][D.$4d];5t C[E]["5s"][D.$4d];if(q.$9o(C[E][4J]).1q==0){5t C[E][4J];if(q.9b[E]&&q.$9o(C[E]).1q==0){1a B=14;14[q.9n](q.7s+E,C[E]["17"],1c)}}}18 14},eK:17(D){if(!D||q.1P(D)!="2e"){18 14}1a C=14.2p("8R",{});if(q.9b[D]){1a B=14;14[q.9n](q.7s+D,C[D]["17"],1c)}C[D]={};18 14},jk:17(D,C){1a B=14.2p("8R",{});1r(t in B){if(C&&t!=C){4Y}1r(4J in B[t]){if(4J=="5s"||4J=="17"){4Y}1r(f in B[t][4J]){j(D).2K(t,B[t][4J][f],4J)}}}18 14},jr:17(E,D){if(1!==E.52){18 14}1a C=14.2p("6D");if(!C){18 14}1r(1a B in C){if(D&&B!=D){4Y}1r(1a F in C[B]){j(E).2K(B,C[B][F])}}18 14},2p:q.3C.2p,3p:q.3C.3p};(17(B){if(!B){6w"7k 7g 7i";18}B.1T=17(J,I){if(!(J 4v 1l.5W)){J=[J]}if(!(I 4v 1l.5W)){I=[I]}1r(1a G=0,D=J.1q;G<D;G++){if(!B.3c(J[G])){4Y}1r(1a F=0,H=I.1q;F<H;F++){if(!B.3c(I[F])){4Y}1r(1a E in(I[F]||{})){3M{J[G][E]=I[F][E]}3X(C){}}}}18 J[0]};B.c0=17(E,D){17 C(){}C.29=D.29;E.$4a=D.29;E.29=1w C();E.29.4z=E};B.1T([B.3C,1l.cK.3C],{fA:B.3C.2j,2j:17(C){1a D=14.fA();if(C){D.1B+=(1X(14.2n("6f-1N")||0)+1X(14.2n("6f-6q")||0));D.1J+=(1X(14.2n("6f-1M")||0)+((14.2n("5r")!="7C")?1X(14.2n("6f-5h")||0):0))}18 D}})})(p);q.3Q||(q.3Q={});q.3Q.f0=(17(){1a B=["8i","7M"],E;17 F(H,G){18 q.$1w("3T",1i,{5r:"7O-7C"}).2X(E["2B"]).2X(E.1S).2X(E["2B"]+"-fE").2X(E["2B"]+"-fE-"+H).4e(G)}17 C(G,H){H.8q();14.1s(G)}1a D=17(H,G){q.$6T(14);14.1t={"2B":"",9Z:"",aR:"",2D:"fY",1S:"4O-3l",js:"3T"};E=14.o=14.1t;q.1T(14.o,H);14.7M=F("7M",G);14.8i=F("8i",G);14.8i.1G("4k",17(I){I.27()}).1G("2I 3w",C.1d(14,"1F"));14.7M.1G("4k",17(I){I.27()}).1G("2I 3w",C.1d(14,"2w"))};D.29={7u:17(G){i(G&&[G]||B).1A(17(H){14[H].2X(E.aR)},14)},4i:17(G){i(G&&[G]||B).1A(17(H){14[H].4L(E.aR)},14)},4q:17(G){i(G&&[G]||B).1A(17(H){14[H].2X(E.9Z)},14)},2M:17(G){i(G&&[G]||B).1A(17(H){14[H].4L(E.9Z)},14)},2J:17(G){i(G&&[G]||B).1A(17(H){14[H].4B()},14)},eY:17(G){i(B).1A(17(H){14[H].4L("21-"+E.1S);14[H].2X("21-"+G)},14);14.o.1S="21-"+G}};q.1T(D.29,q.6O);18 D})();q.3Q||(q.3Q={});q.3Q.f3=(17(){1a C="jA",B=17(F,E,D){q.$6T(14);14.8r={};14.o=14.8r;q.1T(14.o,F);14.26=q.$([]);14.4A=D;14.5N={};14.a4=1c;14.1j=q.$1w("38",{"2B":"21-26"});14.1j.4e(E)};B.29={2c:17(D){1a E=i(17(G){1a F=14.26.1q;14.26.2c({1U:F,4i:1c,2P:G,1o:q.$1w("38",{"2B":"21-fG 21-fG-"+F})});if(!F){14.5N=14.26[F];14.8W(14.26[F]);14.26[F].4i=1f}14.26[F].1o.1G("4k",i(17(H){H.27();if(14.26[F].1U==14.5N.1U){18}14.a4=14.4A();!14.a4&&14.1s("26-4k",{1I:14.fy(14.26[F]),f2:14.26[F].2P})}).1d(14));14.26[F].1o.4e(14.1j)}).1d(14);14.bz();D.1A(i(17(F){E(F)}).1d(14))},cm:17(D,E){if(14.5N.1U==D[0]){18}14.8W(14.fw(D,E))},2M:17(){14.1j.2X("2M")},6L:17(){if(14.5N.1o){14.bd();14.8W(14.26[0])}},2J:17(){14.26.1A(17(D){D.1o.4B()});14.1j.4B()},bd:17(){14.5N.4i=1c;14.5N.1o.4L(C)},8W:17(D){14.bd();14.5N=D;D.4i=1f;D.1o.2X(C)},fy:17(D){1a E=14.5N.1U>D.1U?"2w":"1F";14.8W(D);18 E},fw:17(D,G){1a H,F=14.26.1q-1,E=14.5N;1r(1a H=F;H>=0;H--){if(14.26[H].2P<=D[0]){E=14.26[H];1O}}if(G){if(14.o.1h-1==D[D.1q-1]){E=14.26[F]}}18 E},bz:17(){14.a4=1c;14.5N={};14.26.1A(17(D){D.1o.4B()});14.26.1q=0}};q.1T(B.29,q.6O);18 B})();q.3Q||(q.3Q={});q.3Q.9i=(17(){1a C=8u,B=17(D,E){14.6J="5G";14.1o=q.$1w("38",{"2B":"21-3x"});if(q.1e.1z&&q.1e.1z<10){14.1o.2r(q.$1w("38",{"2B":"21-3x-9s"}).2r(q.by.bC("jB...")))}1b{if(E){14.1o.2r(q.$1w("38",{"2B":"21-3x-fk"}).2r(q.$1w("38",{"2B":"21-2Z-3x"},{"z-1U":eL})))}1b{14.1o.2r(q.$1w("38",{"2B":"21-3x-fk"}).2r(q.$1w("38",{"2B":"21-3x-2S 21-3x-jC"})).2r(q.$1w("38",{"2B":"21-3x-2S 21-3x-jD"})).2r(q.$1w("38",{"2B":"21-3x-2S 21-3x-jz"})).2r(q.$1w("38",{"2B":"21-3x-2S 21-3x-jy"})).2r(q.$1w("38",{"2B":"21-3x-2S 21-3x-ju"})).2r(q.$1w("38",{"2B":"21-3x-2S 21-3x-jt"})).2r(q.$1w("38",{"2B":"21-3x-2S 21-3x-kT"})).2r(q.$1w("38",{"2B":"21-3x-2S 21-3x-jw"})))}}14.1o.4e(D);14.1o.4q();if(q.1e.1z&&q.1e.1z<10){14.fx=1w q.4n(14.1o,{3I:C,57:14.cN.1d(14)})}1b{14.1o.1G("6C",i(17(F){if(F.1Y==14.1o){14.cN()}}).1d(14));14.1o.1L("2Y","3j "+C+"4O")}};B.29={4f:1f,cN:17(){14.4f=1f;14.1o.4q();14.6J=="cF"&&14.5k()},2M:17(){if(14.6J=="2M"){18}14.4f=1c;14.6J="2M";14.1o.3V(1);14.1o.2M()},4q:17(D){if(14.6J=="4q"){18}14.6J=D?"cF":"4q";if(14.4f){14.5k()}1b{if(14.fx){14.fx.2A({3j:[0.6,0]})}1b{4P(17(){14.1o.3V(0)}.1d(14),1)}}},2J:17(){if(14.6J=="4q"){14.6J="cF";14.4f&&14.1o.4B()}1b{14.4q()}},5k:17(){14.1o.4B()}};18 B})();q.3Q||(q.3Q={});q.3Q.jx=(17(){1a B=17(){1a I=[],D=8u,F=0,G=0,J=1c,H=14;q.$6T(14);17 E(){1a M;if(I.1q==0){H.1s("4f");18}if(!J&&I.1q>0){J=1f;M=I.6K();1a L=i([]);L.2c(M.2Z);if(M.2Z.5l&&M.2Z.5l.1q>0){i(M.2Z.5l).1A(i(17(N){L.2c(N)}).1d(14))}L.1A(17(O,N){G+=1;if(M.72){if(N){M.72=1c}}K(O,!!N,M.72,M.4A,17(){J=1c;E()},M.7S)})}}17 C(M,O,L,N){if(M.1K){M.1K.4q(1f)}F++;if(F==G){G=F=0;L();N()}}17 K(R,Q,N,O,M,L){1a S,T,P=i(R.2m);if(R.2O=="4F"){C(R,Q,O,M);18}if(N){if(q.1e.1z&&q.1e.1z<10){T=i(P).2j();S={3j:[0,1],1M:[T.1J/2,0],1N:[T.1B/2,0],1B:[0,T.1B],1J:[0,T.1J]};14.g2=1w q.4n(P,{3I:D,57:i(17(V,U){P.2W({6E:"",2D:"",1M:"",1N:"",1B:"",1J:""});Q&&(R.2O="4F");C(R,Q,V,U)}).1d(14,O,M),8O:i(17(){P.2W({2D:"fS",6E:"6H"})}).1d(14)});14.g2.2A(S)}1b{P.1L(e,"7m(0.2, 0.2)");P.1L("2Y","5G");P.3V(0);P.6e;P.3q.6e;P.1G("6C",i(17(U){if(U.1Y==P){14.1V(U.1H);14.1L(e,"");14.1L("2Y","")}}).1d(P));if(!Q&&L){L(R)}P.1L("2Y",e+" "+D+"4O 5E-5M(.5,.5,.69,1.9), 3j "+D+"4O 93");P.6e;P.3q.6e;P.1L(e,"7m(1.0, 1.0)");P.3V(1);Q&&(R.2O="4F");C(R,Q,O,M)}}1b{P.3V(1);if(Q){R.2O="4F"}1b{L(R)}C(R,Q,O,M)}}14.2c=17(N,M,L,O){I.2c({2Z:N,72:M,4A:L,7S:O});E()}};q.1T(B.29,q.6O);18 B})();(17(B){B.cf=17(I,D){1a C=0,H=14,G,E;17 L(M){18 17(N){(D[M]||B.$F).2k(H,N,N.g4);C--;K()}}17 K(){1a M;if(!I.1q){}1b{if(C<(D.79||3)){G=I.6K();M=F(G.1o);if(M){E=1w B.g0(M,{67:L("67"),5c:L("5c"),9d:L("9d"),8k:L("8k")});E.g4=G}1b{(D.67||B.$F).2k(H,{1y:i(G.1o).2j(),2b:M},G);C--;K()}C++}}}17 J(M){1a N,O;N=(M&&M 4v jf);if(N){O=M.3S("2i-43")||1i;if(O){M.3v("43",O)}}18(N&&M.3S("43"))?M:1i}17 F(M){18 B.1P(G)=="2e"?M:(B.1P(M)=="8s"?J(M.2b):((M.2y=="A"||M.2y.34()=="4t")?J(i(M).7J("6b")[0]||M.3n):(M.2y=="6b"?J(M):1i)))}14.2c=17(M,N){I[N?"k3":"2c"](M);D.g5||K();18 14};14.9h=17(){E.g6();k4--};14.2O=K;D.g5||I.1q&&K()}})(p);1a l,i=q.$,y=i,j=i;q.4V={};l={1B:{3G:[{1H:"5e",7c:1},{1H:"2e","3B":["1Z"]}],"2E":"1Z"},1J:{3G:[{1H:"5e",7c:1},{1H:"2e","3B":["1Z"]}],"2E":"1Z"},1h:{3G:[{1H:"5e",7c:1},{1H:"40"},{1H:"2e","3B":["1Z","7v"]}],"2E":"1Z"},4D:{3G:[{1H:"65"},{1H:"2e","3B":["1Z"]}],"2E":"1Z"},2h:{3G:[{1H:"65"},{1H:"2e","3B":["fY","c7","9E"]}],"2E":"c7"},4u:{1H:"5e","2E":0},8P:{1H:"5e","2E":be},1n:{3G:[{1H:"2e","3B":["3z","6z","9E"]},{1H:"65","3B":[1c]}],"2E":"3z"},3R:{1H:"65","2E":1c},1S:{1H:"2e","3B":["3l","3t"],"2E":"3l"},3u:{3G:[{1H:"5e",7c:0},{1H:"2e","3B":["1Z"]}],"2E":"1Z"},2t:{1H:"2e","3B":["2o","2q","66","64-6h"],"2E":"2o"},cb:{1H:"65","2E":1c},8o:{1H:"2e","2E":"5E-5M(.8, 0, .5, 1)"},6t:{1H:"65","2E":1c},aE:{1H:"65","2E":1f},c2:{1H:"17","2E":q.$F},bZ:{1H:"17","2E":q.$F},bW:{1H:"17","2E":q.$F},eC:{1H:"17","2E":q.$F},bX:{1H:"17","2E":q.$F},aq:{1H:"17","2E":q.$F}};1k.6n("4t");1k.6n("33");1a m=17(B){18{1B:((1X(B.2n("6f-1N"))||0)+(1X(B.2n("6f-6q"))||0)),1J:((1X(B.2n("6f-1M"))||0)+(1X(B.2n("6f-5h"))||0))}},h=17(B){18{1B:((1X(B.2n("5w-1N"))||0)+(1X(B.2n("5w-6q"))||0)),1J:((1X(B.2n("5w-1M"))||0)+(1X(B.2n("5w-5h"))||0))}},o=17(B){18{1B:((1X(B.2n("5T-1N-1B"))||0)+(1X(B.2n("5T-6q-1B"))||0)),1J:((1X(B.2n("5T-1M-1B"))||0)+(1X(B.2n("5T-5h-1B"))||0))}},A=17(B){18{1B:i(B).2n("1B"),1J:i(B).2n("1J")}},r=q.1e.56,e=q.aD("ar").aP(),b=17(C,D){1a B=1c,E=0;q.$6T(14);14.8r={4I:1f,6p:"5E-5M(.8, 0, .5, 1)",1p:"2o",2s:1c,1K:1c,6W:1c,1S:"3l",3I:9q,1n:1f,3R:1f,3u:"1Z",6t:1c};14.o=14.8r;q.1T(14.o,D);14.1j=i(C).1L("kC-kD","kE");14.1n={2V:1c,2Q:1c};14.as();14.aL=i(17(H){1a G={},F=1f;if(37===H.bq||39===H.bq){G.1I=H.bq==39?"1F":"2w";if(!14.o.1n){if("1F"===G.1I){if(14.1n.2Q){F=1c}}1b{if(14.1n.2V){F=1c}}}F&&14.1s("fg",G)}}).1d(14);14.7e="2o";14.1h=i([]);14.4m=i([]);14.6U=i([]);14.5y=i([]);14.6Q=i([]);14.1m=0;14.3m=0;14.2v=14.o.3u;14.1C=0;14.l=1i;14.5n=1i;14.2l=1i;14.2C=0;14.7j=0;14.24=0;14.1I="1F";14.4A=q.$F;14.3y=0;14.71=1c;14.2R=1i;14.8E=0;14.8m=1i;14.cG=14.1m;14.73=1c;14.bj=1c;14.bs=1c;14.5L=1c;14.ah=1i;14.4b={};14.9R=0;14.8D={1I:"1F",76:1c};14.79=1w q.cf([],{79:1,5c:i(17(G,H){1a F=14.1h[H.1U];F.2O="7p";if(F.1K){F.1K.5k();F.1K=1i}F.1o.2X("21-fN");14.9O(i(17(J,I){if(J.1U==F.1U){J.2r=1f;if(J.1K){J.1K.5k();J.1K=1i}J.1o.2O="7p";J.1o.2X("21-fN")}}).1d(14));E++;if(14.o.3R){if(14.9D()){if(14.o.4I||!14.4b.5v){14.1s("aN");14.1s("bg")}if(!14.2L){14.7F()}!14.4b.5v&&14.1s("4f")}}1b{if(E==14.l&&!14.o.3R){14.5L=1f;!14.4b.5v&&14.1s("4f")}}14.bo()}).1d(14),67:(17(I,J){1a H=[],G=14.1h[J.1U],F;if(!G){18}G.1o.2r(G.2m);if(!14.o.3R&&!14.bs){3M{14.aw(G);14.9l(G)}3X(I){14.bs=1f}}14.bv(G,i(17(){1a K=1f;if(i(["2o","2q"]).3f(14.7e)){if(!14.4b.5v&&!14.o.3R){K=J.1U<14.3y}}14.bw(G,K,14.7S);G.2O="4F";E++;if(14.o.3R){if(14.9D()){if(14.o.4I||!14.4b.5v){14.1s("aN");14.1s("bg")}if(!14.4b.5v){14.1s("4f")}}}1b{if(E==14.l){14.5L=1f;!14.4b.5v&&14.1s("4f")}}14.bo()}).1d(14))}).1d(14)})};b.29={4z:b,7S:q.$F,9l:q.$F,aw:q.$F,bw:17(F,I,H){1a B,E,D,G=9q,C=F.2m;if(I){if(q.1e.1z&&q.1e.1z<10){B=i(C).2j();E={3j:[0,1],1M:[B.1J/2,0],1N:[B.1B/2,0],1B:[0,B.1B],1J:[0,B.1J]};D=1w q.4n(C,{3I:G,57:i(17(K,J){C.2W({6E:"",2D:"",1M:"",1N:"",1B:"",1J:""});if(F.1K){F.1K.5k();F.1K=1i}}).1d(14),8O:i(17(){C.2W({2D:"fS",6E:"6H"})}).1d(14)});D.2A(E)}1b{C.1L("2Y","5G");C.3V(0);C.6e;C.3q.6e;C.1G("6C",i(17(J){if(J.1Y==C){14.1V(J.1H);14.1L(e,"");14.1L("2Y","");if(F.1K){F.1K.5k();F.1K=1i}}}).1d(C));C.1L("2Y",e+" "+G+"4O 5E-5M(.5,.5,.69,1.9), 3j "+G+"4O 93");C.6e;C.3q.6e;C.3V(1);H&&H(F)}}1b{C.3V(1);if(F.1K){F.1K.5k();F.1K=1i}}F.5l.1q>0&&i(F.5l).1A(i(17(J){if(J){i(J.2m).3V(1);J.2O="4F";if(J.1K){J.1K.5k();J.1K=1i}}}).1d(14))},bo:17(){1a B=0;14.1h.1A(i(17(C){if(C.2O=="4F"||C.2O=="7p"){B++}if(14.l==B){14.5L=1f;14.1s("aN")}}).1d(14))},9D:17(){1a B=0,C=0;if(14.5L){18 1f}1r(;B<14.3y;B++){if(14.1h[14.3F(14.1m+B)].2O=="4F"||14.1h[14.3F(14.1m+B)].2O=="7p"){C+=1}}18 C==14.3y},7l:17(){18 14.1j.3q.2j()[14.1x.1y]},as:17(){1a B={3l:{1y:"1B",1W:"1N",fV:"1J"},3t:{1y:"1J",1W:"1M",fV:"1B"}};14.1x=B[14.o.1S];if(14.o.3u==0){14.o.3u="1Z"}if(!14.o.1n||"6z"===14.o.1n){14.1n.2V=1f}if(q.1e.1z&&q.1e.1z<10){14.1j.1L(14.1x.1W,0)}1b{14.1j.1L(e,"4w(0, 0, 0)")}},8S:17(){14.1j.6e},a6:17(){if(14.5L||14.bj){18}14.bj=1f;14.1s("aM");14.1h.1A(i(17(B){if(B.2O=="7K"){if(B.1K){B.1K.5k();B.1K=1i}B.5l.1q>0&&i(B.5l).1A(17(C){if(C.1K){C.1K.5k();C.1K=1i}});14.79.2c({1o:B.2m,1U:B.1U})}}).1d(14));14.5L=1f},83:17(C){1a D,F=14.1m,B=i([]),E,G;if(14.5L){18}if(14.o.3R){C&&(F=(C=="1F")?14.3F(F+14.3y):14.3F(F-14.3y));G=i(17(H){if(H.2O=="7K"){if(14.o.4I){!C&&14.1s("aM")}1b{H.1K&&H.1K.2M()}H.2O="2O";14.79.2c({1o:H.2m,1U:H.1U})}}).1d(14);1r(D=0;D<14.3y;D++){E=14.1h[14.3F(F+D)];G(E);if(!C){G(14.1h[14.3F(E.1U+14.3y)]);G(14.1h[14.3F(E.1U-14.3y)])}}}},cH:17(G){1a H,C,E,D,B=0,F=14.ah.1q;if(G=="2w"){B=F-1;F=-1}if(!14.5L){4R(B!=F){D=14.ah[B];H=D.5j();C=D.3S("2i-2Z");if(H[14.1x.1W]+14.1h[0].1y[14.1x.1y]>14.9R[14.1x.1W]&&H[14.1x.1W]<14.9R[14.1x.1W]+14.24){E=14.1h[C];if(E.2O=="7K"){E.2O="2O";E.1K&&E.1K.2M();i(E.5l).1A(i(17(I){I.1K&&I.1K.2M()}).1d(14));14.79.2c({1o:E.2m,1U:E.1U})}}G=="1F"?B++:B--}}},87:17(F){1a C,B,E,D;if(14.4b.81){18}14.4b.81=1f;B=14.l=14.1h.1q;14.24=14.7l();E=i(14.1j.3q).5j();1r(C=0;C<14.l;C++){D=14.1h[C];D.1y=D.1o.2j(1f);14.2C+=D.1y[14.1x.1y]}14.3P()},aZ:17(C){14.4b.5v=1f;14.a9();if(!q.1e.1z||q.1e.1z&&q.1e.1z>9){14.7f()}14.80();if((!q.1e.1z||q.1e.1z&&q.1e.1z>9)&&"2o"===14.o.1p&&14.o.4D){14.7d()}if(i(["2o","2q"]).3f(14.7e)){1r(1a B=0;B<14.1h.1q;B++){if(B>=14.3y){14.1h[B].1K&&14.1h[B].1K.2M()}}}14.1m=0;14.3m=14.4m.1q;i(1l).1G("5H",14.3P.1d(14));if(14.o.6t){i(1k).1G("8A",14.aL)}14.3P();C&&C()},80:17(){14.1h.1A(i(17(B){B.2m.f5=i(17(){14.1s("2M-14",{1U:B.1U})}).1d(14);B.2m.1G("4k",i(17(C){if(14.2L){C.27()}}).1d(14))}).1d(14))},a9:17(D){1a B,C=0;if(14.71){18}if(14.o.2s){14.2v=14.3y;18}1r(B=0;B<14.l;B++){C+=14.1h[B].1y[14.1x.1y];if(C>=14.24){if(14.2v=="1Z"||14.2v>=B){if(14.o.1p=="2q"&&C-14.1h[B].1y[14.1x.1y]+5<14.24||C==14.24){B+=1}14.2v=B;if(14.o.3u!="1Z"&&14.o.3u<14.2v){14.2v=14.o.3u}}1O}}!14.2v&&(14.2v=1)},cY:17(C){1a B=C.6i();4t=1k.6n("4t"),33=1k.6n("33");q.$A(C.3n.2g).1A(i(17(D){if(D.2y.34()=="33"){q.$A(D.2g).1A(i(17(E){i(33).2r(E.6i(1f))}).1d(14));q.$A(D.fU).1A(i(17(E){4t.3v(E,E.9L)}).1d(14));4t.2r(33)}1b{i(4t).2r(D.6i(1f))}}).1d(14));q.$A(C.3n.fU).1A(i(17(D){4t.3v(D,D.9L)}).1d(14));B.2r(4t);18 B},9O:17(B){if(14.4m.1q>0){i([14.4m,14.6U]).1A(i(17(C){C.1A(i(17(E,D){B(E,D)}).1d(14))}).1d(14))}},bv:17(C,D){if(14.4m.1q>0){1a B=i(17(){1a E;if(q.1e.1z&&q.1e.1z<9&&C.1o.3n.2y.34()=="4t"){E=14.cY(C.2m.6i(1f))}1b{E=C.2m.6i(1f)}E.2g&&q.$A(E.2g).1A(i(17(F){if(i(F).8B&&i(F).8B("4Q-1K-kF")){F.4B()}}).1d(14));18 E}).1d(14);14.9O(i(17(F,E){if(F.1U==C.1U&&!F.2r){F.2m=B();14.1h[C.1U].5l.2c(F);F.2r=1f;F.1o.2r(F.2m)}}).1d(14))}D&&D()},cZ:17(){1a B,C=0,F=0,H=0,E={1N:0,1M:0},G,D;if(14.71){18}1r(B=0;B<14.l;B++){C+=14.1h[B].1y[14.1x.1y];H++;if(14.24<=C){1O}}if(14.l>1&&(H>14.3y||14.4m.1q==0)){F=14.4m.1q;1r(B=F;B<H;B++){G={1o:14.1h[14.l-1-B].1o.6i(),2O:"7K",2r:1c};i(G.1o).3v("2i-2Z",14.l-1-B);G.1U=14.1h[14.l-1-B].1U;if(14.o.3R&&14.o.1K){G.1K=1w q.3Q.9i(G.1o);G.1K.2M()}14.4m.2c(G);D={1o:14.1h[B].1o.6i(),2O:"7K",2r:1c};i(D.1o).3v("2i-2Z",B);D.1U=14.1h[B].1U;if(14.o.3R&&14.o.1K){D.1K=1w q.3Q.9i(D.1o);D.1K.2M()}14.6U.2c(D);i([D.1o,G.1o]).1A(i(17(I){I.1G("4k",i(17(J){if(14.2L){J.27()}}).1d(14))}).1d(14));14.1j.2r(D.1o);14.1j.2r(G.1o,"1M");i([14.1h[14.l-1-B],14.1h[B]]).1A(i(17(I){if(I.2O=="4F"){14.bv(I,i(17(){1a J=1f;if(i(["2o","2q"]).3f(14.7e)){if(!14.4b.5v&&!14.o.3R){J=I.1U<14.3y}}14.bw(I,J);I.5l.1q>0&&i(I.5l).1A(17(K){if(K.1K){K.1K.5k();K.1K=1i}})}).1d(14))}}).1d(14))}if(F){14.3y+=H-F}1b{14.3y=H}}1b{14.3y=H}14.7j=14.1C=0;C=0;1r(B=0;B<14.4m.1q;B++){C+=14.1h[14.l-1-B].1y[14.1x.1y]}14.7j+=C;14.1C-=C;E[14.1x.1W]=14.1C;if(q.1e.1z&&q.1e.1z<10){14.1j.1L(14.1x.1W,E[14.1x.1W])}1b{14.cx()}},2c:17(B){14.l=14.1h.1q;B.1U=14.l;B.2O="7K";B.5l=[];if(14.o.1K&&14.o.3R){B.1K=1w q.3Q.9i(B.1o,1f);if(!14.o.4I){B.1K.2M()}}B.1o.3v("2i-2Z",B.1U);B.1o.1G("5o 6P",i(17(D){1a C=D.az();4R(C&&C!==B.1o){C=C.3q}if(C==B.1o){18}if("5o"===D.1H){14.1s("3N-2Z-f7",{av:B.1U})}1b{14.1s("3N-2Z-au",{av:B.1U})}}).1d(14));14.1h.2c(B)},3F:17(B){B%=14.l;B<0&&(B=B+14.l);18 B},2P:17(C,D){1a B;if(C=="1F"||C=="2w"){14.1I=C}if(14.2L||14.73){18}14.2L=1f;if(q.1P(C)=="8s"){14.1I=C.1I;C.76=1c;C.7W=1c}1b{if(/1F|2w|^\\+|^\\-/.3E(C)){if(/^\\+|^\\-/.3E(C)){B=/^\\+/.3E(C)?"1F":"2w";C={6A:1g.1E(1X(C)),1I:B};C.6A>14.l&&(C.6A=14.l);C.1Y=14.3F(C.1I=="1F"?(14.1m+C.6A):(14.1m-C.6A))}1b{C={1I:C};C.1Y=14.3F(C.1I=="1F"?(14.1m+14.2v):(14.1m-14.2v))}C.76=1c;C.7W=1f}1b{if(q.1P(1X(C))=="5e"){C={1Y:14.3F(C),76:1f,7W:1c}}}}C.4A=D;if(!14.o.1n){if(14.1n.2V||14.1n.2Q){if(14.1n.2V){if("2w"===C.1I){14.2L=1c;D(1i,1f);18}}1b{if("1F"===C.1I){14.2L=1c;D(1i,1f);18}}}}14["kB"+14.7e](C)},5P:17(E,C){1a D={1N:0,1M:0},F=1c,B=C||14.1C;if(E=="1F"){if(B+14.7j-14.2l+14.2C<0){14.1C=B+14.2C;D[14.1x.1W]=14.1C;F=1f}}1b{if(B+14.2l>0){14.1C=B-14.2C;D[14.1x.1W]=14.1C;F=1f}}if(F){if(q.1e.1z&&q.1e.1z<10){14.1j.1L(14.1x.1W,D[14.1x.1W]+"2G")}1b{14.1j.1L(e,"4w("+D.1N+"2G, "+D.1M+"2G, 0)");14.1j.1L("2Y",e+" b7 "+14.o.6p);14.8S();if(14.o.1p=="2q"){14.8X=14.3m=14.6F();if(E=="1F"){14.3m+=14.2v}1b{14.3m-=14.2v}}}}18 F},7U:17(E,D){1a C,B=1f;if(!D){if(14.o.3u=="1Z"){14.2v="1Z";14.a9(E=="2w")}B=1c;D=14.2v}1b{14.o.4I=1c}1r(C=D;C>0;C--){14.1m=14.3F((E=="1F")?(14.1m+1):(14.1m-1));14.3m=(E=="1F")?(14.3m+1):(14.3m-1);14.2l+=14.1h[(E=="1F")?14.3F(14.1m-1):14.1m].1y[14.1x.1y]}if("3z"===14.o.1n){if(!14.o.2s){14.1s("3N-2A-1p",{3Z:14.5b()})}}1b{if("2o"===14.o.1p&&14.1n.2Q&&E=="2w"){if(B){14.1m-=(14.7h-1)}1b{14.1m-=(D-1)}if(14.1m<0){14.1m=0}}14.1s("4i");if(14.1n.2Q&&E=="1F"){14.1n.2Q=1c;14.1n.2V=1f;14.1C=0;14.2l=0;14.1m=0;14.3m=0;14.1s("5d-3g");14.1s("3N-2A-1p",{3Z:14.5b()})}1b{if(14.1n.2V&&E=="2w"){14.1n.2V=1c;14.1n.2Q=1f;14.2l=0;14.1m=14.l-1;if(14.o.1p=="2o"){14.3m=14.l-14.7h;14.1C=(14.2C-14.24)*(-1)}1b{14.3m=14.l-14.l%14.7h;14.1C=(1g.8M(14.l/14.2v)-1)*14.24*(-1)}14.1s("1m-3g");14.1s("3N-2A-1p",{3Z:14.5b(1f)})}1b{14.1n.2Q=1c;14.1n.2V=1c;if(E=="1F"){if(14.1C-14.2l<=14.24-14.2C||14.1C-14.2l+1<=14.24-14.2C){14.1s("1m-3g");if(14.o.1p=="2o"||14.o.1p=="2q"&&"3z"===14.o.1n){14.2l=14.1C-(14.24-14.2C)}1b{14.2l=14.24}14.1n.2Q=1f;14.1m=14.l-1;14.1s("3N-2A-1p",{3Z:14.5b(1f)})}1b{14.1s("3N-2A-1p",{3Z:14.5b()})}}1b{if(14.1C+14.2l>=0||14.1C+14.2l===-1){14.1s("5d-3g");14.2l=1g.1E(14.1C);14.1n.2V=1f;14.3m=0;14.1m=0;14.1s("3N-2A-1p",{3Z:14.5b()})}1b{14.1s("3N-2A-1p",{3Z:14.5b()})}}}}}},eD:17(F){1a B,D,C=0,E;if(!F.1I){C=1g.5Y(14.3y/2);if(14.3y%2==0){C-=1}C<0&&(C=0)}if("3z"===14.o.1n){F.1Y=14.3F(F.1Y-C)}if(14.1m!=F.1Y){14.o.4I=1c;E=i(17(J){1a H=14.1m,I=0,G;do{I++;!J?H++:H--;G=14.3F(H)}4R(G!=F.1Y);18 I}).1d(14);if(!F.1I){if("3z"===14.o.1n){F.1I=E()<=E(1f)?"1F":"2w"}1b{F.1I=F.1Y>14.1m?"1F":"2w"}}14.1s("4i");if("3z"===14.o.1n){4R(14.1m!=F.1Y){14.1m=14.3F(F.1I=="1F"?++14.1m:--14.1m);14.3m=F.1I=="1F"?++14.3m:--14.3m;14.2l+=14.1h[14.1m].1y[14.1x.1y]}}1b{14.1n.2Q=1c;14.1n.2V=1c;14.1m=F.1Y;D=0;1r(B=0;B<F.1Y-C;B++){D+=14.1h[B].1y[14.1x.1y]}14.3m=F.1Y;14.1C=0-14.7j-D;if(14.o.1p=="2o"&&14.1C<=0-(14.2C-14.24)||14.1C<=0-((14.2C+(14.l%14.2v)*14.1h[0].1y[14.1x.1y])-14.24)){if(14.o.1p=="2o"){14.1C=0-(14.2C-14.24)}14.1n.2Q=1f;14.1s("1m-3g");14.1m=14.l-1}if(14.1C>=0){14.1C=0;14.1s("5d-3g");14.1n.2V=1f;14.1m=0}}}1b{14.2L=1c;14.73=1c;14.1s("fh")}},eU:17(E){1a B=14.1C,C=1c,D;14.8X=14.3m;14.2l=0;if((!14.o.1n||"6z"===14.o.1n)&&14.o.1p=="2q"){if(14.1n.2Q&&E.1I=="1F"||14.1n.2V&&E.1I=="2w"){C=1f}}if(E.7W){14.7U(E.1I,E.6A)}1b{14.eD(E)}if(C){E.1I=E.1I=="1F"?"2w":"1F"}if(0!==14.8E){D=14.1h[14.cG].1y[14.1x.1y]-14.8E;if(E.1I=="1F"){14.2l-=D}1b{14.2l+=D}14.8E=0}"3z"===14.o.1n&&14.5P(E.1I);if(E.1I=="1F"){14.1C-=14.2l}1b{14.1C+=14.2l}14.8D.1I=E.1I;14.8D.76=E.76;if(B!=14.1C){14.4A=E.4A;if(14.o.4I&&!14.5L&&!14.9D()){14.1s("aM");14.83();14.2K("bg",i(17(F){14.2L&&14.6N(1i,F.1I,F.76)}).1d(14,14.8D))}1b{if(!14.5L){14.83()}14.6N(1i,E.1I,E.76)}}1b{14.1s("eS")}},6N:17(C,B,E){1a D={1N:0,1M:0};14.2L=1f;if(q.1e.1z&&q.1e.1z<10){D={};D[14.1x.1W]=[1X(14.1j.2n(14.1x.1W)),14.1C];14.fx=1w q.4n(14.1j,{2Y:14.o.6p,3I:C||14.o.3I,57:14.75.1d(14),8O:i(17(){14.f9=1c}).1d(14)}).2A(D)}1b{D[14.1x.1W]=14.1C;if(14.o.1p=="2q"&&!E){14.eE(B,D)}1b{14.1j.1V("6C");14.1j.1G("6C",i(17(F){if(F.1Y==14.1j){14.1j.1V(F.1H);if(E){14.3m=14.6F();14.cJ()}14.75()}}).1d(14));14.1j.1L(e,"4w("+D.1N+"2G, "+D.1M+"2G, 0)");14.1j.1L("2Y",e+" "+(C||14.o.3I)+"4O "+14.o.6p)}}},eE:17(H,G){1a F,C,E,D=14.1j.2g,B=D.1q,I=i(17(J){J%=14.5n;J<0&&(J=J+14.5n);18 J}).1d(14);14.5y.1q=0;14.6Q.1q=0;1r(F=0;F<14.2v;F++){if("3z"===14.o.1n){C=I(14.8X+F)}1b{C=14.8X+F<B?14.8X+F:1i}C!=1i&&14.5y.2c(D[C]);if("3z"===14.o.1n){E=I(14.3m+F)}1b{E=14.3m+F<B?14.3m+F:1i}E!=1i&&14.6Q.2c(D[E])}if(H=="2w"){14.5y.4C();14.6Q.4C()}14.1j.3v("2i-"+H,"");14.5y.1A(i(17(K,J){K.1G(r+"8w 8G",i(17(L,M,N){if(L==14.5y[M]){L.1V(r+"8w 8G").3v("2i-cv","");if(M==14.5y.1q-1){14.5y.1A(i(17(P,O){P.3U("2i-2q-92");P.3U("2i-8U")}).1d(14));14.6Q.1A(i(17(P,O){if(O==14.6Q.1q-1){P.1G(r+"8w 8G",i(17(Q){if(Q.1Y==P){P.1V(r+"8w 8G");14.6Q.1A(i(17(R,S){R.3U("2i-2q-92");R.3U("2i-8U")}).1d(14));14.5y.1A(i(17(R,S){R.3U("2i-cv")}).1d(14));14.1j.3U("2i-"+H);14.8S();14.75()}}).1d(14))}P.3v("2i-cu","");P.1G(r+"8y 8v",i(17(Q){if(Q.1Y==14){14.1V(r+"8y 8v");P.3U("2i-cu")}}).1d(P));P.3v("2i-8U","kA");P.3v("2i-2q-92",(O+1))}).1d(14));14.1j.1L(e,"4w("+G.1N+"2G, "+G.1M+"2G, 0)")}}}).1d(14,K,J))}).1d(14));14.5y.1A(i(17(K,J){K.3v("2i-cB","");K.1G(r+"8y 8v",i(17(L){if(L.1Y==14){K.1V(r+"8y 8v");14.3U("2i-cB")}}).1d(K));K.3v("2i-8U","kw");K.3v("2i-2q-92",(J+1))}).1d(14))},5b:17(E){1a F=0,D=14.2v,B=[],C;if(E){if(14.o.1p=="2o"){F=14.l-14.2v}1b{F=14.l%14.2v?14.l-14.l%14.2v:14.l-14.2v}D=14.l}1r(;F<D;F++){if(!E){C=14.1m+F}1b{C=F}B.2c(14.3F(C))}18 B},75:17(){14.2L=1c;14.8Y=1c;14.4A&&14.4A(14.5b(14.1n.2Q))},cJ:17(){14.1j.1L("2Y",e+" b7")},a8:17(G){1a F={x:0,y:0},D=G.2n(e)||"",E=/3d/.3E(D)?(/kv\\(([^\\)]+)\\)/):(/kx\\(([^\\)]+)\\)/),C=/3d/.3E(D)?12:4,B=/3d/.3E(D)?13:5;(G.2n(e)||"").5F(E,17(J,I){1a H=I.8g(",");F.x+=1X(H[C],10);F.y+=1X(H[B])});18 F},6F:17(){1a E,D,B,C=eL,F=14.1j.3q.5j()[14.1x.1W];1r(E=0;E<14.5n;E++){D=14.1j.2g[E].5j()[14.1x.1W];if(C>1g.1E(F-D)){C=1g.1E(F-D);B=E}1b{1O}}18 B},7F:17(){if(14.4m.1q==0){18}1a C,B,D=i(17(F,G){1a H,E;if(14.1h[G].1o!=F&&14.1h[G].2O=="4F"){1r(E=0;E<14.5n;E++){if(14.1h[G].1o==14.1j.2g[E]){H=E;1O}}if(H<B){14.1j.7q(F,14.1j.2g[H]);if(B+1<=14.5n-1){14.1j.7q(14.1h[G].1o,14.1j.2g[B+1])}1b{14.1j.8N(14.1h[G].1o)}}1b{14.1j.7q(14.1h[G].1o,F);if(H+1<=14.5n-1){14.1j.7q(F,14.1j.2g[H+1])}1b{14.1j.8N(F)}}}}).1d(14);B=14.6F();1r(C=0;C<14.3y;C++){D(14.1j.2g[B],14.3F(14.1m+C));B++}},aT:17(J){1a H,F,G,M=0,C=0,L,I=14.1j.3q.5j()[14.1x.1W]+1,E=14.1j.5j()[14.1x.1W]-I,K=1g.1E(1g.1E(E)-1g.1E(14.1C)),D,B=i(17(N){18 1X(14.1j.2g[N].3S("2i-2Z"))}).1d(14);(K>0&&K<1)&&(K=0);if(J=="1F"){I+=K}1b{I-=K}1r(H=0;H<14.5n;H++){G=14.1j.2g[H].5j()[14.1x.1W];if(G==I){14.1m=B(H);18 0}L=1X(14.1j.2g[H].2j()[14.1x.1y]);if(G<I&&G+L>I){D=H;if(J=="1F"){D=H+1>14.5n-1?14.5n-1:H+1;H++}1r(F=0;F<H;F++){C+=14.1h[B(F)].1y[14.1x.1y]}M=1g.1E(1g.1E(14.1C)-C);14.1m=B(D);1O}}18 M},7f:17(){1a ab,G,Z,R,aa,F,B=(14.1x.1W=="1N")?"x":"y",H={x:0,y:0},P=14.o.1p=="2o",S,U=1f,K={x:0,y:0},D=1c,T=1c,I=1i,N=0,V=1i,O=1c,C=i(17(ae){1a ad,ac=0;if(ae>14.24){ae=14.24}1r(ad=1.5;ad<=90;ad+=1.5){ac+=(ae*1g.eB(ad/1g.3A/2))}18 14.24>ac?ac:14.24}).1d(14),E=i(17(ae){1a af,ac=0,ad,ag;4R(ac>14.1C){ac-=14.24}if(1g.1E(ac-14.1C)>14.24/2){ac+=14.24}ag=ac;1r(af=0;af<14.5n;af++){ad=1X(14.1j.2g[af].3S("2i-2Z"));if(ag==0){14.1m=ad;1O}ag+=14.1h[ad].1y[14.1x.1y]}18 ac}).1d(14),X=i(17(ac){T=1f;i(1k.4j).2X("21-7N");14.o.4I=1c;U=1f;3s(14.2R);if(14.o.1p=="2q"){14.cI()}14.8F&&14.8F();H={x:0,y:0};B=(14.1x.1W=="1N")?"x":"y";14.1s("5m-2A");14.1j.1V("6C");14.1C=14.a8(14.1j)[B];H[B]=14.1C;14.1j.1L(e,"4w("+H.x+"2G, "+H.y+"2G, 0)");14.1j.1L("2Y","5G");14.8S();14.o.1p=="2o"&&(P=1f);14.2L=1f}).1d(14),Q=i(17(ad){i(1k.4j).4L("21-7N");if(T){T=1c;1a ac=14.1C;if(!U){ad.et=1c;M();G=ad.36-ab;if(14.o.1p=="2o"){if(G>5B){F=aa;P=1c}1b{F=C(1g.1E(K[B]-ad[B]))}aa=F;if("3z"===14.o.1n){14.2l=1g.1E(aa);14.5P(Z)}if("3z"===14.o.1n||14.1C<=0){if(1g.1E(14.1C)<aa){aa=1g.1E(14.1C)}14.1C-=aa}Z=="1F"?14.1C-=14.aT(Z):14.1C+=14.aT(Z);if(!14.o.1n||"6z"===14.o.1n){14.1s("4i");14.1n.2V=1c;14.1n.2Q=1c;if(14.1C>0){14.1C=0;14.1m=0;P=1f;14.1s("5d-3g");14.1n.2V=1f}if(14.1C<14.24-14.2C){14.1C=14.24-14.2C;14.1m=14.l-1;P=1f;14.1s("1m-3g");14.1n.2Q=1f}}S=P?be:8u}1b{P=1f;14.2l=0;14.1C=E();"3z"===14.o.1n&&14.5P(Z);if(G<5B){14.2l=14.24;"3z"===14.o.1n&&14.5P(Z);if(Z=="1F"){14.1C-=14.24}1b{14.1C+=14.24}}if(!14.o.1n||"6z"===14.o.1n){14.1s("4i");14.1n.2V=1c;14.1n.2Q=1c;if(14.1C>=0){14.1C=0;14.1m=0;14.1n.2V=1f;14.1s("5d-3g")}if(14.1C<=(1g.8M(14.l/14.2v)-1)*14.24*(-1)){14.1C=(1g.8M(14.l/14.2v)-1)*14.24*(-1);14.1m=14.l-1;14.1n.2Q=1f;14.1s("1m-3g")}}S=9q}H[B]=14.1C;14.1j.1G("6C",i(17(ae){if(ae.1Y==14.1j){if(14.o.1p=="2q"){14.1j.1L("2Y","5G");14.3m=14.6F()}if(14.o.1p=="2q"){14.1m=1X(14.1j.2g[14.6F()].3S("2i-2Z"))}if("3z"===14.o.1n){14.7F()}14.2L=1c;14.73=1c;P=1c;U=1f;14.83();14.1s("5m-5S",{3Z:14.5b(14.1n.2Q)})}}).1d(14));if(ac==14.1C){14.2L=1c;P=1c;U=1f}14.1j.1L("2Y",e+" "+S+"4O 5E-5M(.22,.63,.49,.8)");14.1j.1L(e,"4w("+H.x+"2G, "+H.y+"2G, 0)")}1b{14.2L=1c}}}).1d(14),J=0,M=i(17(){3s(V);V=1i;O=1c;J=0}).1d(14),Y=i(17(){1a ac=J*0.2;if(1g.1E(ac)<0.ky){M();18}J-=ac;14.1C-=ac;H[B]=14.1C;14.1j.1L(e,"4w("+H.x+"2G, "+H.y+"2G, 0)");V=4P(Y,16)}).1d(14),W=i(17(ad){if(T){1a ac=ad[B]-N>0?"2w":"1F";U=1c;if("3z"===14.o.1n){14.2l=1g.1E(aa);14.5P(ac)}if(q.1e.1z){J+=aa;if(!O){O=1f;Y()}}1b{14.1j.1L("2Y",e+" b7");if(14.o.1p=="2q"){}14.1C-=aa;H[B]=14.1C;14.1j.1L(e,"4w("+H.x+"2G, "+H.y+"2G, 0)")}14.cH(ac)}}).1d(14),L=i(17(ac){if(14.71||14.o.1p=="2q"&&P){18}if("4c"==ac.4T){ab=ac.36;K.x=ac.x;K.y=ac.y;N=ac[B]}1b{Z=(aa>0)?"1F":"2w";aa=N-ac[B];14.8D.1I=Z;if("9a"==ac.4T){if(D){D=1c;Q(ac)}}1b{if(14.o.1S=="3t"||1g.1E(ac.x-K.x)>1g.1E(ac.y-K.y)){ac.4l();if(!D){if(14.o.1p=="2q"&&14.2L){18}D=1f;X(ac)}1b{W(ac)}}}}N=ac[B]}).1d(14);if(!q.1e.1z||q.1e.1z&&q.1e.1z>9){14.1j.3q.1G("2H 2u",L)}},7d:17(){1a F,G,C=0,E={x:0,y:0},D=(14.1x.1W=="1N")?"x":"y",B=i(17(I){1a H=C*(I||0.2);F=H>0?"1F":"2w";C-=H;if(1g.1E(H)<0.aY){3s(14.2R);14.1m=1X(14.1j.2g[14.6F()].3S("2i-2Z"));14.7F();14.8E=14.cX();14.cG=14.1m;C=0;14.2l=0;14.2R=1i;14.73=1c;14.2L=1c;14.1s("5m-5S",{3Z:14.5b(14.1n.2Q)});18}14.2l=1g.1E(H);"3z"===14.o.1n&&14.5P(F);14.1C-=H;14.2l=0;14.cH(F);if(!14.o.1n||"6z"===14.o.1n){if(14.1C>0){14.1C=0;C=0.aY;14.1s("5d-3g")}1b{if(14.1C<14.24-14.2C){14.1C=14.24-14.2C;C=0.aY;14.1s("1m-3g")}1b{14.1s("4i")}}}E[D]=14.1C;14.1j.1L(e,"4w("+E.x+"2G, "+E.y+"2G, 0)");14.2R=4P(B.1d(14,I),30)}).1d(14);if(q.1e.1z&&q.1e.1z<10||14.71){18}14.8F=i(17(){if(14.73){3s(14.2R);C=0;14.2l=0;14.2R=1i;14.73=1c;14.2L=1c}}).1d(14);14.1j.1G("4r",i(17(H){1a I=(1g.1E(H.3J)<1g.1E(H.3O)?H.3O:H.3J*(!H.4M?-1:-30));if(14.2L){18}if((1f===14.o.4D&&H.4M)||"3t"===14.o.1S&&1g.1E(H.3J)>1g.1E(H.3O)||"3l"===14.o.1S&&1g.1E(H.3J)<1g.1E(H.3O)){H.27();14.73=1f;if(0===C){14.1j.1L("2Y",e+" b7");E={x:0,y:0};D=(14.1x.1W=="1N")?"x":"y"}14.1s("5m-2A");C+=I;if(!14.2R){B(0.4)}}}).1d(14))},cX:17(){1a C,B,D=14.1C,E=i(["8m","1h","6U"]);14.8m=[];14.4m.1A(i(17(F){14.8m.2c(F)}).1d(14));14.8m.4C();1r(C=0;C<E.1q;C++){1r(B=0;B<14[E[C]].1q;B++){D+=14.1h[14[E[C]][B].1U].1y[14.1x.1y];if(D>0){14.1m=14[E[C]][B].1U;14.8m=1i;18 D}}}},5a:17(){1a B,C;if(!14.o.2s||14.8Y||!14.2L||14.o.1p=="2q"){18}14.8Y=1f;if(q.1e.1z&&q.1e.1z<10){14.fx&&(14.fx.1t.57=q.$F);14.fx&&14.fx.27();14.fx=1i;14.1C=1g.5Q(1X(14.1j.2n(14.1x.1W)))}1b{14.1C=14.a8(14.1j)[(14.1x.1W=="1N")?"x":"y"]}B=14.aT(14.1I);C=14.o.3I/14.2l*B;if(14.1I=="1F"){14.1C-=B}1b{14.1C+=B}14.6N(C)},27:17(){14.f9=1f;14.2L=1c;14.8F&&14.8F();if(14.o.1p=="2q"){14.cI()}if(q.1e.1z&&q.1e.1z<10){14.fx&&14.fx.27(1f);14.fx=1i}1b{14.cJ()}},cI:17(){1a B={x:0,y:0};if(!q.1e.1z||q.1e.1z&&q.1e.1z>10){B[14.1x.1W]=14.1C;14.1j.3U("2i-1F");14.1j.3U("2i-2w");i([14.5y,14.6Q]).1A(i(17(C,D){if(C.1q>0){C.1A(i(17(F,E){F.1V(r+"8y 8v "+r+"8w 8G");F.3U("2i-2q-92");F.3U("2i-8U");if(!D){F.3U("2i-cB");F.3U("2i-cv")}1b{F.3U("2i-cu")}}).1d(14))}}).1d(14));14.1j.1L(e,"4w("+B.1N+"2G, "+B.1M+"2G, 0)");14.2L=1c;14.8S()}},3P:17(){1a B,C;14.27();14.8Y=1c;14.9R=i(14.1j.3q).5j();14.24=14.7l();14.7h=0;14.2C=0;1r(B=0;B<14.l;B++){14.1h[B].1y=14.1h[B].1o.2j(1f);14.2C+=14.1h[B].1y[14.1x.1y];if(14.2C<=14.24){14.7h+=1}}if(q.1e.1z&&q.1e.1z<10){14.1m=0}1b{14.cx()}14.2l=0;14.2v=14.o.3u;if(14.2C<=14.24){14.71=1f;14.1s("eZ");14.1s("7u");14.7j=0;14.1C=0;if(q.1e.1z&&q.1e.1z<10){14.1j.1L(14.1x.1W,0)}1b{14.1j.1L(e,"4w(ct, ct, 0)")}14.9P()}1b{14.71=1c;14.1s("f1");14.1s("4i");if(!14.o.1n||"6z"===14.o.1n){if(14.1n.2V){14.1s("5d-3g")}if(14.1n.2Q){14.1s("1m-3g")}}}if((14.2C>14.24)&&("3z"===14.o.1n||14.o.2s)){14.cZ()}1b{14.3y=C=0;1r(B=0;B<14.l;B++){C+=14.1h[B].1y[14.1x.1y];14.3y++;if(14.24<=C){1O}}}14.5P("1F");14.1j.1V("6C");14.3m=14.6F();14.5n=14.1j.2g.1q;14.a9();14.7F();14.ah=q.$A(14.1j.2g);14.o.3R?14.83():14.a6()},cx:17(){1a D,F,E={1N:0,1M:0},C=14.1h[14.1m].1o.5j()[14.1x.1W],B=14.1j.3q.5j()[14.1x.1W];if(q.1e.1z&&q.1e.1z<10){}1b{if(!14.o.1n&&14.1n.2Q){if("2o"===14.o.1p){E[14.1x.1W]=14.24-14.2C}1b{F=14.7h-14.l%14.7h;E[14.1x.1W]=14.24-(14.2C+14.1h[0].1y[14.1x.1y]*F)}}1b{D=14.a8(14.1j)["1N"===14.1x.1W?"x":"y"];E[14.1x.1W]=D-(C-B)}14.1C=E[14.1x.1W];14.1j.1L(e,"4w("+E.1N+"2G, "+E.1M+"2G, 0)")}},fd:17(){1a H=0,G=1f,C=14.l-1,D=i(["6U","1h","4m"]),F=i(17(L,J){1a I,K=1i;1r(I=0;I<L.1q;I++){if(L[I].1U==J){K=L[I].1o;1O}}18 K}).1d(14),E=i(17(I){18(H==0)?I-1:(H-1)}).1d(14),B=i(17(L,J){1a K,I=L.1q;if(I>0){1r(K=0;K<I;K++){if(G){G=1c;H=I-1;14.1j.8N(L[H].1o)}1b{14.1j.7q(F(L,!H?C:E(I)),F(!H?14[D[J-1]]:L,H));H=!H?C:H-1}}}}).1d(14);D.1A(i(17(I,J){B(14[I],J);H=0}).1d(14));14.1m=0},9P:17(){14.4m.1A(17(B){B.1o.4B()});14.4m=i([]);14.6U.1A(17(B){B.1o.4B()});14.6U=i([])},6L:17(B){1a C={1N:0,1M:0};14.27();14.1C=14.1m=0;if(q.1e.1z&&q.1e.1z<10){14.1j.2W(C)}1b{14.1j.1L(e,"4w("+C.1N+"2G, "+C.1M+"2G, 0)")}14.2v=14.o.3u;if((!14.o.2s&&(!14.o.1n||"6z"===14.o.1n))&&14.4m.1q>0){14.7j=0;14.9P()}14.3P();14.fd();14.2L=1c},eN:17(B){1r(1a C in B){14.o[C]=B[C]}14.as()},7x:17(){14.27();14.9P();i(1l).1V("5H");i(1k).1V("8A");14.1j.1V("2u 2H");14.1h.1A(i(17(B){B.1o.1V("5o 6P");5t B.2m.f5}).1d(14))}};q.1T(b.29,q.6O);q.4V.cM=b;1a u=17(B,C){q.4V.cM.5u(14,3h);14.8r={5U:"1Z",7r:i([0.44,0.59,0.35,0.89]),9G:kz,6p:"5E-5M(.8, 0, .5, 1)"};14.7e="66";14.o=14.8r;q.1T(14.o,C);14.2l=70;14.6v=0;14.2F=0;14.2R=1i;14.b4=1g.4K(10,8);14.2S=2*1g.3A;14.1m=0;14.kG=i([]);14.b2=1i;14.5p=1i;14.6d=1i;14.5U=0;14.l=0;14.6X=1c;14.cU=1i};q.c0(u,q.4V.cM);q.1T(u.29,{4z:u,cZ:q.$F,7F:q.$F,5b:q.$F,eU:q.$F,5a:q.$F,cg:q.$F,9O:q.$F,cY:q.$F,83:q.$F,cX:q.$F,7r:q.1T({},q.4n.29),5P:17(){14.6v%=14.2S;14.2F=14.6v},87:17(D){1a C,B;if(14.4b.81){18}14.4b.81=1f;B=14.l=14.1h.1q;14.24=14.7l();if(q.1e.1z&&q.1e.1z<10&&14.1h[0].2m.1q&&14.1h[0].2m.aS.2y.34()=="33"){14.cU=1X(14.1h[0].2m.aS.2n("kH-1y"))}14.7r.5I=14.o.7r;1r(C=0;C<14.l;C++){14.1h[C].1y=14.1h[C].1o.2j(1f);14.2C+=14.1h[C].1y[14.1x.1y];14.1h[C].1o.1L("2D","7o");14.1h[C].2b=14.bV(14.1h[C])}if("3z"===14.o.1n){14.1s("4i")}if(14.1h[0].33&&!14.6X){if(14.1h[0].2m.2y.34()!="4t"){14.6X=1f}}14.3P();14.a6()},aZ:17(B){14.4b.5v=1f;14.80();14.5p=14.2S/14.l;14.6d=(14.2S-14.5p)*(-1);14.2v=1;14.7f();14.o.4D&&14.7d();i(1l).1G("5H",14.3P.1d(14));if(14.o.6t){i(1k).1G("8A",14.aL)}B&&B();14.3P()},80:17(){u.$4a.80.5u(14);14.1h.1A(i(17(B){B.1o.1G("4k",i(17(C){14.1s("2Z-4k",{1U:B.1U})}).1d(14))}).1d(14))},7S:17(C){1a B=cS;if(q.1e.1z&&q.1e.1z<10||!C.4X){18}C.4X.3V(1);C.4X.1L("2Y","3j "+B+"4O")},9l:17(D){1a B,C,E=i(17(F){if(F.4X||14.6X){B=F.2b.2j();C=F.2b.cO+B.1J;if(F.4X){F.4X.2W({1M:C,1N:F.2b.aV,1B:B.1B})}if(14.6X&&F.33){F.33.2W({1M:C,1N:F.2b.aV,1B:B.1B})}}}).1d(14);D?E(D):14.1h.1A(i(17(F){E(F)}).1d(14))},bV:17(D){1a B,C=D.2m;if(C.2y=="6b"){B=C}1b{if(C.3n.2y=="6b"){B=C.3n}1b{if(C.3n.2y=="cq"&&C.3n.3n.2y=="6b"){B=C.3n.3n}1b{B=1i}}}if(B){i(B).1L("z-1U",2z)}18 B},aw:17(O){if(14.o.1S=="3t"){18}1a D=q.$1w("4X",{},{3j:0}),P=q.$1w("4X"),C,B,G,M,L,N,Q=1,J,K,H,E,I,F;if(q.1e.1z&&q.1e.1z<10){18}if(D.d4){C=D.d4("2d");B=P.d4("2d");if(!O.2b){18}L=i(O.2b).2j();N=L.1J/2z*30;P.1B=L.1B;P.1J=L.1J;B.em();B.7m(1,-1);B.kO(O.2b,0,L.1J*(-1),L.1B,L.1J);G=B.kP(0,0,L.1B,N);B.fc();D.1B=L.1B;D.1J=N;C.em();K=G.2i;F=K.1q;E=F/4/L.1B;H=14.o.9G;J=F/E;1r(I=3;I<F;I+=4){if(I>J){J+=(F/E);Q++;H=1g.5Q(14.o.9G-14.o.9G*14.7r.9H(1/(E/Q)))}K[I]=H}C.kQ(G,0,0);C.fc();O.4X=D;if((!O.2m.2g||O.2m.2g.1q<2)&&O.2m.2y.34()!=="a"){O.1o.8N(D)}1b{O.2m.7q(D,O.2m.2g[1])}D.2X("21-kR")}},c1:17(C){1a D=0,B=14.2l/(14.l/2),E=2z-B;if(C>E){D=(C-E)/B}18 D},5Z:17(I){1a F={1N:0,1M:0},D={1N:0,1M:0},P={1N:0,1M:0},J,O,N=14.l,K=14.2l,B=14.2S/N,M,E,C,H,G,L;F[14.1x.1W]=14.5U;q.3c(I)||(I=0);14.6v=I;1r(G=0;G<N;G++){E=C=G*B+I;C%=14.2S;E%=14.2S;if(C!=0&&C!=1g.3A){if(1g.8M(1g.1E(C)/1g.3A)%2==0){if(1g.1E(C)%1g.3A!=0){E=1g.3A-(1g.1E(C)%1g.3A)}}1b{E=1g.1E(C)}}E=1g.1E(E*2z/1g.3A);if(14.1h[G].33){14.1h[G].33.3V(14.c1(2z-(E*K/2z)))}E=2z-1g.5Q(E*K/2z);!14.b2&&(14.b2=14.1h[G].1y);J=1g.1E(C);if(J>1g.3A/2&&J<1g.3A+1g.3A/2){if(J>1g.3A){J=1g.3A/2-1g.1E(J-1g.3A)}1b{J=J-1g.3A/2}J=(1-1g.6a(J))*0.7}1b{J=1}if(q.1e.1z&&q.1e.1z<10){H={1B:14.cR("1B",E),1J:14.cR("1J",E)};14.1h[G].1o.2W(H);14.1h[G].1o.2W({1M:1g.6a(C)*F.1M+1X(14.8Z.1J)/2-1X(H.1J)/2,1N:1g.6a(C)*F.1N+1X(14.8Z.1B)/2-1X(H.1B)/2});if(14.1h[G].2m.1q&&14.1h[G].2m.aS.2y.34()=="33"){14.1h[G].2m.aS.3e.kN=14.f8(E/2z*E)}if(14.6X){M=14.1h[G].2b.2j();14.1h[G].33.2W({1M:14.1h[G].2b.cO+M.1J,1N:14.1h[G].2b.aV,1B:M.1B})}}1b{P[14.1x.1W]=6c/14.2S*C;14.o.1S=="3t"&&(P[14.1x.1W]*=(-1));L=1g.1E(C);O=1g.7Q(1-1g.6a(L)*1g.6a(L));if(L>1g.3A/2&&L<1g.3A+1g.3A/2){L=14.5U*(O)+14.5U}1b{L=14.5U*(1-O)}L>0&&(L*=(-1));D[14.1x.1W]=(1g.6a(C)*F[14.1x.1W]+1X(14.8Z[14.1x.1y])/2-14.1h[G].1y[14.1x.1y]/2);14.1h[G].1o.1L(e,"kM("+D.1N+"2G)kI("+D.1M+"2G)9X("+L+"2G)eO("+P.1M+"a5)eI("+P.1N+"a5)")}14.1h[G].1o.1L("z-1U",0+E);14.1h[G].1o.3V(J)}},5Q:17(B,C){1a D=1g.4K(10,C||15);18 1g.5Q(B*D)/D},7U:17(E){1a C,D,B=6c/14.l;if(E.7W){if(E.6A){if(E.1I=="1F"&&14.1m>E.1Y){C=14.l-14.1m;C+=E.1Y}1b{if(E.1I=="2w"&&14.1m<E.1Y){C=14.l-E.1Y;C+=14.1m}}!C&&(C=1g.1E(14.1m-E.1Y));14.1m=E.1Y}1b{C=14.2v;14.1m=14.3F(E.1I=="1F"?14.1m+C:14.1m-C)}}1b{D=(6c-14.1m*B+E.1Y*B)%6c;if(D>=0&&D<=bU){!E.1I&&(E.1I="1F")}1b{if(D>=bU&&D<=6c){!E.1I&&(E.1I="2w")}}if(E.1I=="1F"){C=1g.5Q(D/B)}1b{C=1g.5Q((6c-D)/B)}14.1m=E.1Y}18 q.1T(E,{5p:C*14.5p})},eu:17(C){1a B;C=14.7U(C);B=C.5p;if(!14.o.1n){14.1s("4i")}if(C.1I=="1F"){14.2F-=B;if(!14.o.1n){if(14.2F==14.6d){14.1s("1m-3g")}1b{if(14.2F<14.6d){14.1m=0;14.2F=0;14.1s("5d-3g")}}}}1b{14.2F+=B;if(!14.o.1n){if(14.2F==0){14.1s("5d-3g")}1b{if(14.2F>0){14.1m=14.l-1;14.2F=14.6d;14.1s("1m-3g")}}}}14.1s("3N-2A-1p",{3Z:[14.1m]});14.4A=C.4A;14.6N(14.2F)},cR:17(B,C){18 14.b2[B]/2z*C},f8:17(B){18 1g.5Q(14.cU/2z*B)+"2G"},6N:17(B){14.fx=1w q.4n(14.1j,{3I:14.o.3I,2Y:14.o.6p,aB:(17(C){14.5Z(C.5p/14.b4)}).1d(14),57:i(17(){14.75()}).1d(14)}).2A({5p:[14.b4*14.6v,14.b4*B]})},75:17(){14.5P();u.$4a.75.5u(14)},6G:17(C){1a B=1g.1E(14.2F-14.6v)*(C||0.2);if(1g.1E(B)<0.aY){3s(14.2R);14.2R=1i;14.2L=1c;14.1s("5m-5S",{3Z:[14.1m]});18}if(14.2F<14.6v){B*=(-1)}14.5Z(14.6v+B);14.2R=4P(14.6G.1d(14,C),30)},7L:17(){1a D,E=14.2F%14.2S,C=1X(1g.1E(14.2F/14.2S)),G,F,B=i(17(H){4R(C!=0){C--;if(E<=0){H-=14.2S}1b{H+=14.2S}}18 H}).1d(14);1r(D=0;D<14.l;D++){G=(D*14.2S)/14.l;F=((D+1)*14.2S)/14.l;if(E<=0){G*=(-1);F*=(-1)}1b{G=14.2S-G;F=14.2S-F}if(G!=E){if(G>E&&E>F){if(1g.1E(E-G)<=1g.1E(F-E)){14.2F=B(G);14.1m=D}1b{14.2F=B(F);14.1m=14.3F(D+1)}}}1b{14.1m=D}}},7d:17(){1a D,C,B=14.2S/6c*15;14.1j.1G("4r",i(17(E){if(1f===14.o.4D||E.4M||"3t"===14.o.1S&&1g.1E(E.3J)>1g.1E(E.3O)||"3l"===14.o.1S&&1g.1E(E.3J)<1g.1E(E.3O)){14.1s("5m-2A");14.fx&&14.fx.27(1f);14.fx=1i;E.27();if(q.1e.1z&&q.1e.1z<10){E.4M=1f}C=1g.1E(E.3J)<1g.1E(E.3O)?E.3O:-1*E.3J;C=E.4M?(C*B):(C*(8/kJ));!E.4M&&(C=C>0?1g.9M(14.5p/4,C):1g.6S(14.5p/4*(-1),C));14.2F-=C;3s(D);D=4P(i(17(){14.7L()}).1d(14),2z);if(!14.o.1n){if(14.2F>=0){14.1s("5d-3g");14.2F=0;14.1m=0}1b{if(14.2F<=14.6d){14.1s("1m-3g");14.2F=14.6d;14.1m=14.l-1}}}if(!14.2R){14.6G(0.fF)}}}).1d(14))},7f:17(){1a G=(14.1x.1W=="1N")?"x":"y",I={x:0,y:0},H={x:0,y:0},F,C=1c,E="1F",B=1c,D=i(17(J){if("4c"==J.4T){i(1k.4j).2X("21-7N");B=1f;I.x=H.x=J.x;I.y=H.y=J.y}1b{if(B){I.x=J.x;I.y=J.y;if("9a"==J.4T){i(1k.4j).4L("21-7N");B=1c;if(C){C=1c;14.7L()}}1b{if(14.o.1S=="3t"||1g.1E(J.x-H.x)>1g.1E(J.y-H.y)){J.4l();if(!C){C=1f;14.2L=1f;14.fx&&14.fx.27();14.1s("5m-2A");3s(14.2R);14.2R=1i}E=H[G]<I[G]?"2w":"1F";F=1g.1E(H[G]-I[G])/14.5U;if(E=="1F"){14.2F-=F;if(!14.o.1n){if(14.2F<=14.6d){14.1s("1m-3g");14.2F=14.6d;14.1m=14.l-1}}}1b{14.2F+=F;if(!14.o.1n){if(14.2F>=0){14.1s("5d-3g");14.2F=0;14.1m=0}}}!14.2R&&14.6G()}H.x=I.x;H.y=I.y}}}}).1d(14);14.1j.1G("2u 2H",D)},27:17(){14.fx&&14.fx.27(1f);14.fx=1i;3s(14.2R);14.2R=1i;14.2F&&14.5Z(14.2F)},3P:17(){1a B,C;14.27();14.24=14.7l();14.8Z=14.1j.3q.2j();14.2C=0;1r(B=0;B<14.l;B++){14.1h[B].1y=14.1h[B].1o.2j(1f);14.2C+=14.1h[B].1y[14.1x.1y]}14.5p=1*14.2S/14.l;14.6d=(14.2S-14.5p)*(-1);C=14.2C/14.2S;14.5U=14.8Z[14.1x.1y]/2;(14.5U<C)&&(14.5U=C);(q.1e.1z&&q.1e.1z<10)&&(14.5U-=(14.1h[0].1y[14.1x.1y]/2));14.6v=14.2F=14.1m=0;14.5Z();14.9l()},6L:17(B){14.27();14.1m=0;if(14.o.1S=="3t"){14.bY()}1b{14.1h.1A(i(17(C){if(!C.4X){14.aw(C)}}).1d(14))}14.1j.1V("2u 2H 4r");14.7f();14.o.4D&&14.7d();14.cg();14.as();14.3P();if(14.o.1S=="3l"){14.1h.1A(i(17(C){14.7S(C)}).1d(14))}14.2L=1c},bY:17(){14.1h.1A(i(17(B){if(B.4X){B.4X.2J();5t B.4X}}).1d(14))},7x:17(){u.$4a.7x.5u(14);14.1j.1V("4r");14.bY();14.1h.1A(i(17(B){B.1o.1V("4k")}).1d(14))}});q.1T(u.29,q.6O);q.4V.c3=u;1a c=17(B,C){q.4V.c3.5u(14,3h);14.7e="kK";14.2x=1i;14.2l=1i;14.2T=1i;14.5i=1i;14.4p=1i;14.bN=kL;14.2v=1;14.2R=1i;14.3L=1i;14.2N=1i;14.3o=1i};q.c0(c,q.4V.c3);q.1T(c.29,{4z:c,5P:q.$F,eu:q.$F,c1:q.$F,ft:17(){1a B,D,C;14.3o=14.2T;if(14.o.1S=="3t"){C=14.2T+14.2T*0.8;14.3o/=2}1b{C=14.2T*2}1r(B=0;B<14.l;B++){D=(B==1)?C:14.3o;14.1h[B].2D=!B?(14.2x-14.2T):(14.1h[B-1].2D+D)}},bS:17(B){if(14.o.1S=="3l"){18 1g.5Q(14.2C-1g.1E(14.2x-(B.2D+14.2T)))}},87:17(D){1a C,B;if(14.81){18}14.81=1f;B=14.l=14.1h.1q;14.24=14.7l();14.7r.5I=14.o.7r;1r(C=0;C<14.l;C++){14.1h[C].1y=14.1h[C].1o.2j(1f);14.2C+=14.1h[C].1y[14.1x.1y];14.1h[C].1o.1L("2D","7o");14.1h[C].2b=14.bV(14.1h[C]);14.1h[C].33&&i(14.1h[C].33).3V(0)}14.o.1n=1c;if(14.1h[0].33&&!14.6X){if(14.1h[0].2m.2y.34()!="4t"){14.6X=1f}}14.3P();14.a6()},aZ:17(B){14.4b.5v=1f;14.80();14.2v=1;14.7f();14.o.4D&&14.7d();i(1l).1G("5H",14.3P.1d(14));if(14.o.6t){i(1k).1G("8A",14.aL)}B&&B();14.3P()},bM:17(J){1a H,C,I,G,D=1,B,E=J.2D+14.2T,F=J.2D+14.2T<=14.2x;G=F?(14.2x-E):(E-14.2x);G/=((F?(14.2x-14.3L):(14.2N-14.2x))/2z);C=(90/2z*G)*(1g.3A/bU);H=60*1g.6a(C);B=1-1*1g.6a(C);if(14.o.1S=="3l"){!F&&(H*=(-1))}1b{H*=(-1);F&&(D=1-0.7*1g.6a(C))}I=14.bN*1g.6a(C)*(-1);18{8C:H,9X:I,3j:D,bT:B}},ep:17(F,H){1a D,C=1c,G=1c,B=F.2D+14.2T,I,E={8C:60,9X:14.bN*(-1),3j:1};I=B-H;if(B>=14.2N){if(B-H<14.2N){D=B-14.2N;G=1f;H-=D;if(H<=14.2T){H=(14.2N-14.2x)/14.3o*H}1b{if(H<=14.2T*2){H=(14.2N-14.3L)/(14.3o*2)*H}1b{H+=(14.2T*2);G=1c}}F.2D-=D}C=1f;F.2D-=H}1b{if(B<=14.3L){if(14.o.1S=="3t"){H=(14.2N-14.2x)/14.3o*H}1b{if(B-H>14.3L){G=1f;D=14.3L-B;H+=D;if(H>=14.2T*(-1)){H=(14.2N-14.2x)/14.3o*H}1b{if(H>=14.2T*2*(-1)){H=(14.2N-14.3L)/(14.3o*2)*H}1b{H-=(14.2T*2)}}F.2D+=D}}C=1f;F.2D-=H}1b{if(B>14.3L&&B<14.2N){H=(14.2N-14.2x)/14.3o*H;if(B-H>=14.2N){D=14.2N-B;H+=D;H=14.3o/((14.2N-14.2x)/H);F.2D+=D}1b{if(B-H<=14.3L){if(14.o.1S=="3l"){D=B-14.3L;H-=D;H=14.3o/((14.2N-14.2x)/H);F.2D-=D}}1b{G=1f}}F.2D-=H}}}if(14.o.1S=="3l"){F.2D>14.2x&&(E.8C*=(-1))}1b{E.8C=60*(-1);F.2D<14.2x&&(E.3j=0.3)}G&&(E=14.bM(F));C&&(E.bT=0);18 E},5Z:17(E){1a C,D,G,B,F=14.5i-E;E||(E=0);14.5i=E;1r(C=0;C<14.l;C++){G={1N:0,1M:0};B={1N:0,1M:0};D=14.ep(14.1h[C],F);G[14.1x.1W]=14.1h[C].2D;B[14.1x.1W]=D.8C;14.1h[C].1o.1L(e,"4w("+G.1N+"2G, "+G.1M+"2G, "+D.9X+"2G)eO("+B.1M+"a5)eI("+B.1N+"a5)");14.1h[C].33&&14.1h[C].33.3V(D.bT);if(14.o.1S=="3l"){14.1h[C].1o.1L("z-1U",14.bS(14.1h[C]))}1b{14.1h[C].1o.3V(D.3j)}}},7U:17(C){1a B=14.2v;if(C.7W){C.6A&&(B=C.6A);if(C.1I=="1F"){14.1n.2V=1c;if(14.1m+B>14.l-1){if(14.1m!=14.l-1){B=14.l-1-14.1m;14.1m+=B;14.1n.2Q=1f}1b{14.1m=0;B=14.l-1;14.1n.2V=1f;14.1n.2Q=1c;C.1I="2w"}}1b{14.1m+=B;if(14.1m===14.l-1){14.1n.2Q=1f}}}1b{14.1n.2Q=1c;if(14.1m-B<0){if(14.1m!=0){B=14.1m;14.1m-=B;14.1n.2V=1f}1b{14.1m=14.l-1;B=14.l-1;14.1n.2V=1c;14.1n.2Q=1f;C.1I="1F"}}1b{14.1m-=B;if(14.1m===0){14.1n.2V=1f}}}}1b{!C.1I&&(C.1I=C.1Y>=14.1m?"1F":"2w");B=1g.1E(14.1m-C.1Y);14.1m=C.1Y}14.2l=14.3o*B;18 C.1I},ku:17(B){B.1I=14.7U(B);14.4A=B.4A;14.1s("3N-2A-1p",{3Z:[14.1m]});14.6N(B.1I=="1F"?14.5i-14.2l:14.5i+14.2l)},6N:17(B){14.4p=B;14.fx=1w q.4n(14.1j,{3I:9q,2Y:14.o.6p,aB:(17(C){14.5Z(C.1W)}).1d(14),57:i(17(){14.75()}).1d(14)}).2A({1W:[14.5i,B]})},6G:17(C){1a B=1g.1E(14.4p-14.5i)*(C||0.2);if(1g.1E(B)<0.kt){3s(14.2R);14.2R=1i;14.2L=1c;14.1s("5m-5S",{3Z:[14.1m]});18}if(14.4p<14.5i){B*=(-1)}14.5Z(14.5i+B);14.2R=4P(14.6G.1d(14,C),30)},cj:17(F,G){1a D,C=F.2D+14.2T,B=F.2D,E=i(17(H){if(C>14.3L&&C<14.2N||H){G=(14.2N-14.2x)/14.3o*G;if(C-G>=14.2N){D=14.2N-C;G+=D;G=14.3o/((14.2N-14.2x)/G);B+=D}1b{if(C-G<=14.3L){if(14.o.1S=="3l"){D=C-14.3L;G-=D;G=14.3o/((14.2N-14.2x)/G);B-=D}}}B-=G}}).1d(14);if(C>=14.2N){if(C-G<14.2N){D=C-14.2N;G-=D;B-=D;E(1f)}1b{B-=G}}1b{if(C<=14.3L){if(14.o.1S=="3t"){G=(14.2N-14.2x)/14.3o*G}if(C-G>14.3L){D=14.3L-C;G+=D;B+=D;E(1f)}1b{B-=G}}1b{E()}}18 B},7L:17(){1a D,C,B,E=14.5i-14.4p;if(14.o.1S=="3t"){E*=2}1r(D=0;D<14.l;D++){C=!C?14.cj(14.1h[D],E):B;B=(D+1<14.l)?14.cj(14.1h[D+1],E):1i;if(C+14.2T>14.3L||D==14.l-1){if(B&&B+14.2T>=14.2N||!B){B=kc}if(14.2x-(C+14.2T)<(B+14.2T)-14.2x){14.1m=D}1b{14.1m=D+1}if(14.1m===0){14.1n.2V=1f}1b{if(14.1m===14.l-1){14.1n.2Q=1f}}14.4p=14.2x-14.1m*14.3o;1O}}},7d:17(){1a C,B;14.1j.1G("4r",i(17(D){if(1f===14.o.4D||D.4M||"3t"===14.o.1S&&1g.1E(D.3J)>1g.1E(D.3O)||"3l"===14.o.1S&&1g.1E(D.3J)<1g.1E(D.3O)){14.1s("5m-2A");14.fx&&14.fx.27();14.fx=1i;D.27();B=1g.1E(D.3J)<1g.1E(D.3O)?D.3O:-1*D.3J;B=D.4M?(B*14.3o):(B*(8/13));!D.4M&&(B=B>0?1g.9M(14.3o/4,B):1g.6S(14.3o/4*(-1),B));14.4p-=B;3s(C);C=4P(i(17(){14.7L()}).1d(14),2z);if(14.4p>=14.2x){14.4p=14.2x;14.1m=0}1b{if(14.4p<=14.2x-((14.l-1)*14.3o)){14.4p=14.2x-((14.l-1)*14.3o);14.1m=14.l-1}}if(!14.2R){14.6G(0.fF)}}}).1d(14))},7f:17(){1a E=(14.1x.1W=="1N")?"x":"y",G={x:0,y:0},F={x:0,y:0},C=1c,B=1c,D=i(17(H){if("4c"==H.4T){i(1k.4j).2X("21-7N");B=1f;G.x=F.x=H.x;G.y=F.y=H.y;14.1n.2V=1c;14.1n.2Q=1c}1b{if(B){G.x=H.x;G.y=H.y;if("9a"==H.4T){i(1k.4j).4L("21-7N");B=1c;if(C){14.7L();C=1c}}1b{if(14.o.1S=="3t"||1g.1E(H.x-F.x)>1g.1E(H.y-F.y)){H.4l();if(!C){14.fx&&14.fx.27();14.1s("5m-2A");3s(14.2R);14.2L=1f;14.2R=1i;C=1f}14.4p-=(F[E]-G[E]);!14.2R&&14.6G()}1b{14.2L=1c}F.x=G.x;F.y=G.y}}}}).1d(14);14.1j.1G("2u 2H",D)},27:17(){14.fx&&14.fx.27(1f);14.fx=1i;3s(14.2R);14.2R=1i;14.4p&&14.5Z(14.4p)},3P:17(){1a B;14.27();14.2l=0;14.1m=0;14.24=14.7l();14.2C=0;1r(B=0;B<14.l;B++){14.1h[B].1y=14.1h[B].1o.2j(1f);14.2C+=14.1h[B].1y[14.1x.1y]}14.2T=14.1h[0].1y[14.1x.1y]/2;if(14.o.1S=="3l"){14.2x=14.24/2}1b{14.2x=14.2T+(14.2T/50*15)}14.5i=14.4p=14.2x;if(14.o.1S=="3l"){14.3L=14.2x-(14.2T*2);14.2N=14.2x+(14.2T*2)}1b{14.3L=0;14.2N=14.2x+14.2T+14.2T*0.8}14.ft();14.5Z(14.5i);14.9l()},cg:17(){14.1h.1A(i(17(B){if(14.o.1S=="3l"){B.1o.3e.3j=""}1b{B.1o.1L("z-1U","")}}).1d(14))}});q.1T(c.29,q.6O);q.4V.kd=c;1a x=17(E,O){1a I,G,C,K,N,F,J,L,H=0,B,D,M="ke kf 2o 1y.";14.1t=1w q.c9(l);14.o=14.1t.g8.1d(14.1t);14.2f=14.1t.2f.1d(14.1t);14.1t.7G(1l.bh||{});14.1t.7G((1l.bG||{})[E.3S("id")||""]||{});14.1t.8J(E.3S("2i-1t")||"");if(q.1e.8h){14.1t.7G(1l.bm||{});14.1t.7G((1l.bf||{})[E.3S("id")||""]||{});14.1t.8J(E.3S("2i-8h-1t")||"")}if("2e"==q.1P(O)){14.1t.8J(O||"")}1b{14.1t.7G(O||{})}if(!14.o("aE")){18 1c}14.kb=i(E).3p("2o",14);q.$6T(14);14.7R=1c;if(q.1e.1z){q.$A(E.9Q("a")).1A(17(P){P.9S=P.9S});q.$A(E.9Q("2b")).1A(17(P){P.43=P.43})}14.er=i(E).3S("2B")||i(E).3S("6j");14.6y=[];14.2a={4u:14.o("4u"),5a:1f,6W:1c,1K:1f,2s:1c,eo:"2o",4I:1f,f4:"5E-5M(.8, 0, .5, 1)",7w:"1Z"};14.id=E.3S("id")||"4Q-"+1g.5Y(1g.7E()*q.5X());14.1j=E.3p("2o",14);14.41=q.$1w("38",{"2B":"21-41"},{5r:"7O-7C"});14.6Y=q.$1w("38",{"2B":"21-1h-1j"});14.7R=1c;1r(I=14.1j.2g.1q-1;I>=0;I--){C=14.1j.2g[I];if(C.52===3||C.52===8){14.1j.9e(C)}1b{14.6y.2c(C)}}if(14.6y.1q===0){18}F=17(Q){1a P=17(T){1a S=Q.2g[T],R=S.2y.34();if("br"===R||"hr"===R){18 P(++T)}1b{18 S}};18 P(0)};L=F(14.1j);if(L.2y=="cq"){L=i(L).7J("6b")[0]||L.3n}if(L.2y=="A"){L=i(L).7J("6b")[0]||L.3n}14.aQ=1c;if(L.2y=="6b"){14.aQ=L;J=L.3S("2i-43");if(J){J=(J+"").48();if(""!=J){L.3v("43",J)}}}14.ao=1i;B=i(17(P){14.ao=4P(i(17(){14.8z=i(F(14.1j)).2j();if(14.8z.1J==0){if(H<2z){H++;B(P)}}1b{3s(14.ao);P()}}).1d(14),2z)}).1d(14);B(i(17(){14.7I=i([]);K=q.$A(14.1j.2g);14.2V=K[0];i(K[0]).1L("5r","5G");14.fe={1y:A(K[0]),5T:o(K[0]),5w:h(K[0]),6f:m(K[0])};K[0].1L("5r","7O-7C");14.1j.1L("5r","5G");14.bP=A(14.1j);14.1j.1L("5r","7O-7C");14.5z=1i;14.cP();if(14.2a.1K){14.1K=1w q.3Q.9i(14.1j)}14.cz();14.eX();D=i(17(){1a Q,R=1f,P={};14.6Z=q.$1w("38",1i,{2D:"7o",1N:"-en",1M:"-en"}).4e(1k.4j);14.2M();1r(I=0,G=K.1q;I<G;I++){Q=K[I].2y.34();if(R){if("br"===Q||"hr"===Q){4Y}}1b{if("br"===Q||"hr"===Q){4Y}}R=1c;i(K[I]).3V(0).1L("5r","7O-7C");14.2c(K[I],P);P={};if(I==G-1){14.87()}}}).1d(14);1w q.cf([{1o:K[0]}],{79:1,5c:17(P){6w"ez: 4Q: ez ka k6 - "+P.2b.43+". "+M},67:(17(P,Q){14.5z=(P.2b)?P.2b.2j():P.1y;if(Q.1o.2y.34()=="4t"){q.$A(Q.1o.2g).1A(i(17(S){if(S.2y.34()=="33"){1a R=m(i(S));14.97=S.2j();14.97.1B+=R.1B;14.97.1J+=R.1J;14.5z.1J+=14.97.1J}}).1d(14))}D()}).1d(14)})}).1d(14))};q.1T(x.29,{ck:1c,cP:17(){if("2q"==14.o("2t")&&(q.1e.1z||!q.1e.51.2q)){14.2f("2t","2o");14.2f("1h","7v");14.2f("3u","1Z")}if(q.1e.1z&&q.1e.1z<=9&&14.o("2t")=="64-6h"){14.2f("2t","2o")}14.2a.6W=1k.k5.k7.7z("#6g-6W-2t")!=-1;if(q.1P(14.o("1h"))==="40"){14.2a.7w=14.o("1h");i(17(){1a D,F,C,E=14.2a.7w,B=E.1q;1r(D=0;D<B;D++){1r(F=D+1;F<B;F++){if(E[D][0]<E[F][0]){C=E[D];E[D]=E[F];E[F]=C}}}14.2a.7w=E}).1d(14)();14.2f("1h","1Z")}if(14.o("8P")===0){14.2f("8P",10)}if(14.o("4u")<0||14.o("3u")==0){14.2a.2s=1f}if(i(["64-6h","2q"]).3f(14.o("2t"))){14.2a.2s=1c}if("9E"===14.o("1n")||"1c"===14.o("1n")){14.2f("1n",1c)}if(14.o("2t")=="66"||14.2a.2s){14.2f("1n","3z")}if(14.o("2t")=="64-6h"){14.2f("1n",1c)}if("6z"===14.o("1n")&&"2q"===14.o("2t")){14.2f("1n",1c)}if(i(["64-6h","66"]).3f(14.o("2t"))||14.2a.2s){14.2f("cb",1c)}if(i(["64-6h","66"]).3f(14.o("2t"))&&!14.2a.2s){14.2f("3u",1)}if(i(["64-6h","66"]).3f(14.o("2t"))&&!i(["1Z","7v"]).3f(14.o("1h"))){14.2f("1h","1Z")}if(14.o("2t")=="2q"&&14.o("1h")=="1Z"){14.2f("1h","7v")}if(14.o("2t")=="2q"){14.2f("3u","1Z")}if(14.2a.2s){14.2f("8o","5E-5M(0, 0, 1, 1)")}1b{if(14.o("8o")=="5E-5M(0, 0, 1, 1)"){14.2f("8o",14.2a.f4)}}if(i(["64-6h","66"]).3f(14.o("2t"))){14.2f("3R",1c);14.2a.7w="1Z"}14.k8=14.o("1B");14.k9=14.o("1J");if(14.2a.2s){14.2f("4u",0)}if(i(["64-6h","66"]).3f(14.o("2t"))||14.2a.2s){14.2f("2h",1c)}if("1c"===14.o("2h")||"9E"===14.o("2h")){14.2f("2h",1c)}if(14.o("2h")){14.1j.2X("4Q-2h-"+14.o("2h"))}14.1j.2X("4Q-"+14.o("1S"));14.1j.3v("2i-2t",14.o("2t"))},cz:17(){if(!14.o("cb")){if(14.26){14.26.2J();14.26=1i}18}if(!14.26){14.26=1w q.3Q.f3({},14.1j,i(17(){18 14.5C}).1d(14));14.1j.2X("4Q-26");14.26.2K("26-4k",i(17(B){14.2P({1I:B.1I,1Y:B.f2})}).1d(14))}},cA:17(){1a C,B=i([]);if(!14.1p){18}1r(C=0;C<14.1p.l;C++){if(i(["2o","2q"]).3f(14.o("2t"))){if(C%14.1p.2v==0){B.2c(14.1p.1h[C].1U)}}1b{B.2c(14.1p.1h[C].1U)}}14.26.2c(B)},cV:17(){1a B=h(14.1j);if(14.2h){14.2h.2J();14.2h=1i}14.41.2W({1M:"",1N:"",6q:"",5h:""});if(14.o("2h")){if(!14.2h){14.2h=1w q.3Q.f0({1S:"21-"+14.o("1S"),"2B":"21-3T",9Z:"21-6H",aR:"21-kg"},14.1j);14.1p.2K("7u",14.2h.7u.1d(14.2h,2U));14.1p.2K("4i",14.2h.4i.1d(14.2h,2U));14.1p.2K("eZ",14.2h.4q.1d(14.2h,2U));14.1p.2K("f1",14.2h.2M.1d(14.2h,2U));if(!14.o("1n")){14.1p.2K("2o",14.2h.4i.1d(14.2h,2U));14.1p.2K("1m-3g",14.2h.7u.1d(14.2h,"8i"));14.1p.2K("5d-3g",14.2h.7u.1d(14.2h,"7M"))}14.2h.2K("1F",(17(F){14.2P("1F")}).1d(14));14.2h.2K("2w",(17(F){14.2P("2w")}).1d(14))}1b{14.2h.eY(14.o("1S"))}if(14.o("2h")=="c7"){1a E=14.o("1S")=="3l"?i(["1N","6q"]):i(["1M","5h"]),C=14.o("1S")=="3l"?"1B":"1J",D=1X(14.2h.8i.2j()[C]);E.1A(i(17(F){14.41.1L(F,D+(B[C]/2))}).1d(14))}}},8K:17(){if(14.o("1B")!="1Z"){14.1j.1L("1B",14.o("1B"))}if(14.o("1J")!="1Z"){14.1j.1L("1J",14.o("1J"))}18},eX:17(){1a B=i(["2o","2q"]).3f(14.o("2t"))?"1p":14.o("2t");14.1p=1w q.4V[("-"+B).5V()](14.6Y,{1S:14.o("1S"),3I:14.o("8P"),2s:14.2a.2s,6p:14.o("8o"),1n:14.o("1n"),3u:14.o("3u"),1p:14.o("2t"),3R:14.o("3R"),1K:14.2a.1K,4I:14.2a.4I,6W:14.2a.6W,4D:14.o("4D"),6t:14.o("6t")});if(14.o("1h")!="1Z"&&14.o("3u")=="1Z"){14.2f("3u",14.o("1h"))}14.1p.2K("eS",i(17(){14.5C=1c;14.1Z()}).1d(14))},2P:17(B,C){if(14.o("2t")=="2q"&&/^\\+|^\\-/.3E(B)){B=/^\\+/.3E(B)?"1F":"2w"}if(!14.5C&&!14.1p.71){14.5C=1f;3s(14.7A);14.1p.2P(B,i(17(D,E){14.5C=1c;if(E){18}14.1s("cQ-2o");if(!14.2a.2s||14.ck||14.5D){if(14.6Z.2g.1q==0){14.6Z.2J()}if(14.o("1n")){14.1p.7F()}14.o("aq")({id:14.id,1h:D});14.1p.kh=1c;C&&C()}1b{14.2P("1F",C)}}).1d(14))}},ff:17(G){1a C,F,D,B,E;if(G.2y.9f()=="A"){if((B=i(G).7J("6b")[0])){if((E=i(G).7J("an")[0])&&""!==E.eR.48()){F=i(E.6i(1f)).2X("21-eW")}1b{if(((C=B.eT)&&3==C.52&&""!==C.9L.48())||(E&&(C=E.eT)&&3==C.52&&""!==C.9L.48())){F=q.$1w("an",{"2B":"21-eW"}).2r(C.6i(1f))}}1r(D=G.2g.1q-1;D>=0;D--){if(B!==G.2g[D]){G.9e(G.2g[D])}}if(F){G.2r(F)}}}1b{if(G.2y.34()=="4t"){q.$A(G.2g).1A(i(17(H){if(H.2y.34()=="33"){C=H.3S("id")||"33-"+1g.5Y(1g.7E()*q.5X());H.3v("id",C);F=H;14.kp=q.eV("#"+C+":kq",{"5w-1M":(14.97.1J+o(i(H))/2)/1X(14.8z.1B)*2z+"%"})}}).1d(14))}}18{1o:G,33:F}},a3:17(B){if(14.o("1h")!="1Z"){B.1o.1L(14.o("1S")=="3l"?"1B":"1J",2z/14.o("1h")+"%")}},ak:17(C){1a D,B;if(14.o("1h")=="7v"){14.2f("1h",1g.5Y(14.41.2j()[14.1p.1x.1y]/14.5z[14.1p.1x.1y]))}1b{if(14.o("1h")=="1Z"){if(!14.fe.1y[14.1p.1x.1y]){D=14.5z[14.1p.1x.1y]||14.8z[14.1p.1x.1y];B=14.6Y.2j();if("3t"===14.o("1S")){D=1g.9M(D,B[14.1p.1x.1y])}B=(D+m(C.2m)[14.1p.1x.1y]+o(C.2m)[14.1p.1x.1y]+h(C.2m)[14.1p.1x.1y]+h(C.1o)[14.1p.1x.1y])/14.6Y.2j()[14.1p.1x.1y]*2z;if(B>2z){B=2z}C.1o.1L(14.1p.1x.1y,B+"%")}}}},2c:17(C,B){C.2M();C={2m:C};if(B.1M){B.1M.1A(17(E){E.2J()})}if(B.5h){B.5h.1A(17(E){E.2J()})}C.kr=B;1a D=14.ff(C.2m);C.2m=D.1o;C.33=D.33;C.1o=q.$1w("38",{"2B":"21-2Z"});C.1o.4e(14.6Y);14.ak(C);14.a3(C);C.2m.4e(14.6Z);14.1p.2c(C)},2M:17(){if(14.cC){18}14.cC=1f;14.1j.2r(14.41.2r(14.6Y)).2M().3v("id",14.id);14.1j.1L("5r","7O-7C");if(14.o("2h")){14.cV();14.o("1n")&&14.2h.7u("7M");14.2h.4q()}14.9z();14.8K();if(14.aQ){if("3l"===14.o("1S")&&14.1j.2j().1B<14.5z.1B){14.9z(1f);14.8K()}}14.9K();i(1l).1G("5H",14.3P.1d(14))},87:17(B){14.1p.2K("fg",i(17(C){14.2P(C.1I)}).1d(14));14.1p.2K("2M-14",i(17(C){14.2P(C.1U)}).1d(14));14.1p.2K("aM",i(17(){14.1K&&14.1K.2M()}).1d(14));14.1p.2K("aN",i(17(){14.1K&&14.1K.4q()}).1d(14));14.1p.2K("4f",i(17(){14.1p.aZ(i(17(){14.1p.2K("fh",i(17(){14.5C=1c}).1d(14));14.1p.2K("2Z-4k",i(17(E){1a D=1f,C,F;if(14.o("2t")=="66"){C=6c/14.1p.l;F=(6c-14.1p.1m*C+E.1U*C)%6c;if(F>90&&F<ks){D=1c}}D&&14.2P(E.1U)}).1d(14));if(14.26){14.26.o.1h=14.1p.1h.1q;14.cA();14.26.2M()}14.1p.2K("3N-2Z-f7",i(17(C){14.o("c2")({id:14.id,2Z:C.av})}).1d(14));14.1p.2K("3N-2Z-au",i(17(C){14.o("bZ")({id:14.id,2Z:C.av})}).1d(14));14.1p.2K("3N-2A-1p",i(17(C){14.26&&14.26.cm(C.3Z,!14.o("1n"));14.o("bX")({id:14.id,1h:C.3Z})}).1d(14));14.1p.2K("5m-2A",i(17(){14.5C=1f;14.1Z()}).1d(14));14.1p.2K("5m-5S",i(17(C){14.26&&14.26.cm(C.3Z,!14.o("1n"));14.5C=1c;14.o("aq")({id:14.id,1h:C.3Z});if(14.6Z.2g.1q==0){14.6Z.2J()}14.1Z()}).1d(14));14.1j.1L("6E","72");14.7R=1f;14.o("bW").2k(14,14.id);i(1l).1G("5H",i(17(){14.5C=1c;if(14.2a.2s){14.2P.1d(14,"1F").3r(5B)}1b{14.1Z()}}).1d(14));14.cw();if("3t"===14.o("1S")&&/%$/.3E(14.o("1J"))){14.2f("1J",14.1j.2j().1J);14.8K()}if(14.o("4u")!=0){14.1Z()}1b{14.5D=1f}if(14.2a.2s){14.5D=1c;14.2P.1d(14,"1F").3r(5B)}14.7R=1f}).1d(14))}).1d(14));14.1p.87()},cw:17(){14.2K("cQ-2o",i(17(){if(14.2a.4u!=0){!14.2a.2s&&14.1Z()}}).1d(14));if(!q.1e.cl&&(14.2a.5a||14.2a.2s)){14.41.1G("5o 6P",i(17(C){C.27();1a B=C.az();4R(B&&B!==14.41){B=B.3q}if(B==14.41){18}if(14.2a.5a&&!14.5D){14.eJ="5o"==C.1H;14.ck="5o"==C.1H;if(14.2a.2s){if(C.1H=="5o"){14.cT()}1b{14.2P("1F")}}1b{14.1Z()}}}).1d(14))}if(!14.2a.2s&&"2q"===14.o("2t")&&14.o("4D")){14.41.1G("4r",i(17(B){1a C=-1*(1g.1E(B.3J)<1g.1E(B.3O)?B.3O:-1*B.3J);C=B.4M?(C):(C*(8/54));if((1f===14.o("4D")&&B.4M)||"3t"===14.o("1S")&&1g.1E(B.3J)>1g.1E(B.3O)||"3l"===14.o("1S")&&1g.1E(B.3J)<1g.1E(B.3O)){B.27();if(1g.1E(C)<0.6){18}14.2P(C>0?"2w":"1F")}}).1d(14))}},9z:17(J){1a I="1B",K="1J",F=14.o("1S")=="3t",B=14.1j.2j(),E={1B:0,1J:0},G=h(14.1j),N=o(14.41),R=m(14.41),L=h(14.41),M=m(14.2V),H=q.$1w("38",{"2B":"21-2Z"}).4e(14.41.3n),O,P,D,Q,C=h(H);H.2J();if(14.1j.2n("eP-ko")=="5T-eP"){E=o(14.1j)}if(F){I=K;K="1B"}if(14.o(I)=="1Z"&&!1X(14.bP[I])){if(F){if(!6u(14.o("1h"))){14.2f(I,B[I]*14.o("1h"))}1b{14.2f(I,B[I])}}1b{14.2f(I,"2z%")}}if(14.o(K)=="1Z"&&!1X(14.bP[K])||J){D=E[K]+G[K]+N[K]+M[K]+C[K];if(F){O=1g.9M(14.5z[K],B[K])}1b{O=14.5z[K];if(14.aQ){P=14.5z[K]/14.5z[I];if(14.5z[I]>B[I]){O=B[I]*P}}}Q=(O+m(i(14.6y[0]))[K]+h(14.6y[0])[K]+o(14.6y[0])[K])||14.8z[K]||B[K];Q+=D;Q+="";14.2f(K,Q)}},9K:17(){1a D,C,B,F,E=1f;if(14.2a.7w!="1Z"&&i(["2o","2q"]).3f(14.o("2t"))){F=14.2a.7w;B=F.1q;C=14.2a.eo=="2o"?14.1j.2j()[14.o("1S")=="3t"?"1J":"1B"]:i(1l).2j()[14.o("1S")=="3t"?"1J":"1B"];1r(D=B-1;D>=0;D--){if(C<=F[D][0]&&!6u(F[D][1])){14.2f("1h",F[D][1]);E=1c;1O}1b{if(0===D){if(i(["66","64-6h"]).3f(14.o("2t"))){14.2f("1h",1)}1b{if("2q"===14.o("2t")){14.2f("1h","7v")}1b{14.2f("1h","7v")}}}}}q.$A(14.6Y.2g).1A(i(17(H,G){14.ak({1o:H,2m:H.3n});14.a3({1o:H})}).1d(14));if(14.1p.1h.1q>0){14.1p.6L()}}},3P:17(){14.9K();14.26&&14.26.6L()},5H:17(){if(14.7R){14.3P();14.1p.3P()}},cT:17(){14.1p.5a()},27:17(){14.1j.3p("kn-1h-3j",1c);14.1p&&14.1p.27();14.5C=1c;3s(14.7A);14.7A=1c},kj:17(B){18 B==14.o("2t")},cs:17(C,B){if(!i(["c2","bZ","bW","bX","aq"]).3f(C)){18}14.2f(C,B)},7x:17(){1a B,C,D;14.27();3s(14.ao);14.41.1V("5o 6P");14.41.1V("b1");14.1p&&14.1p.7x();if(14.7I){1r(B=0;B<14.7I.1q;B++){q.d3("eM-d1",14.7I[B])}}14.1j.4L("4Q-26");i(14.6y).1A(i(17(E){if(E.3q){i(E).2J()}D=E;if(D.2y=="cq"){D=D.3n}if(D.2y=="A"){D=D.3n}if(D.2y=="6b"){C=D.3S("2i-43");if(C){C=(C+"").48();if(""!=C){D.3U("43")}}}if(E.2g.1q>0&&E.2y.34()=="a"){q.$A(E.2g).1A(i(17(F){if(F.2y&&F.2y.34()=="an"){E.2r(F.2g[0]);F.2J()}}).1d(14))}E.2W({6s:"",3j:"1"})}).1d(14));14.6Z&&14.6Z.2J();q.$A(14.1j.2g).1A(17(E){i(E).4B()});i(14.1j).3U("2i-2t");i(14.1j).cr().4L().2X(14.er);14.1j.2W({1B:"",1J:"",6s:"",5r:"",6E:""});14.1j.3D("2o");1r(B=14.6y.1q-1;B>=0;B--){i(14.6y[B]).2W({3j:""}).4e(14.1j)}14.o("eC").2k(14,14.id);18 1i},8x:17(B){if(1i===B||2U===B){B=14.o("4u")}1b{B||(B=cS);B=1X(B);if(6u(B)){B=14.o("4u")}}if(!14.5D){18}if(!14.7A){14.5D=1c;14.1p.8Y=1c;14.2a.4u=B;14.2P("1F")}},5a:17(){if(14.5D){18}14.5D=1f;if(14.2a.2s){14.cT()}1b{14.27()}14.1Z()},8T:17(B){1a E,D={1J:"",1B:""},C=14.o("2t");14.27();14.1j.4L("4Q-2h-"+14.o("2h"));14.1j.4L("4Q-"+14.o("1S"));14.41.1V("5o 6P b1");14.eK("cQ-2o");14.1K=1i;14.1j.4L("4Q-26");if("2e"==q.1P(B)){14.1t.8J(B||"")}1b{14.1t.7G(B||{})}if(C!=14.o("2t")){18 1c}14.2a.4u=14.o("4u");14.cP();14.1p.1h.1A(i(17(F){F.1o.2W(D)}).1d(14));14.1p.4m.1A(i(17(F){i(F).1o.2W(D)}).1d(14));14.1p.6U.1A(i(17(F){i(F).1o.2W(D)}).1d(14));14.cV();1r(E=0;E<14.7I.1q;E++){14.7I[E]&&q.d3("eM-d1",14.7I[E])}14.1p.eN({1S:14.o("1S"),3I:14.o("8P"),2s:14.2a.2s,6p:14.o("8o"),1n:14.o("1n"),3u:14.o("3u"),1p:14.o("2t"),3R:14.o("3R"),1K:14.2a.1K,4I:14.2a.4I,6W:14.2a.6W,4D:14.o("4D"),6t:14.o("6t")});14.9z();14.8K();14.9K();q.$A(14.6Y.2g).1A(i(17(G,F){14.ak({1o:G,2m:G.3n});14.a3({1o:G})}).1d(14));14.1p.6L();14.cz();if(14.26){14.cA();14.26.2M()}if(14.o("4u")==0){14.5a()}1b{14.5D=1c}14.o("2h")&&14.2h.2M();14.cw();if(14.2a.2s){14.2P.1d(14,"1F").3r(5B);14.5D=1c}1b{14.1Z()}18 1f},1Z:17(){1a B="1F";3s(14.7A);14.7A=1c;if(14.5C||14.5D||14.eJ){18}if(14.2a.4u!=0){14.7A=4P(i(17(){14.2P(B)}).1d(14),1g.1E(14.2a.4u))}}});q.1T(x.29,q.6O);q.4V.at=x;1a z=17(C){1a B=g(C);if(!B){18}18{cs:B.cs.1d(B),5a:B.5a.1d(B),8x:i(17(D){14.8x(D)}).1d(B),1F:i(17(D){D=!D?"1F":a(D,"+");14.2P(D)}).1d(B),2w:i(17(D){D=!D?"2w":a(D,"-");14.2P(D)}).1d(B),2P:i(17(D){if(!D||6u(1g.1E(1X(D)))){D="1F"}14.2P(D)}).1d(B),8T:i(17(D){if(!D||q.1P(D)!="8s"){D={}}14.8T(D)}).1d(B)}},g=17(C){1a B=1i;if(q.1P(C)=="2e"&&i(C)||q.1P(C)=="7D"){B=i(C).2p("2o")}1b{if(q.1P(C)=="17"&&(C 4v q.4V.at)||C&&C.cC){B=C}}18 B},d=17(D,E,C){1a B=g(D);if(B){18 B[C](E)}1b{E=D;D=v}i(D).1A(17(F){F[C](E)})},a=17(C,B){if(q.1P(C)==="2e"){C=1X(C);if(6u(C)){C=C}}if(q.1P(C)==="5e"){C=B+C}18 C},s=17(C){1a B=q.$A((C||1k).fi("4Q")).fm(17(D){18 n.2A(D)});k=1f;18 B},k=1c,w=17(B){18 v=i(v).4N(17(C){18 C.7x()})},v=[],n={5g:"ki.0.4",2A:17(C){1a B=1i;if(3h.1q){C=i(C);if(C&&i(C).8B("4Q")){if(B=i(C).2p("2o")){18 B}1b{B=1w q.4V.at(C,k?{aE:1f}:{});if(!B.o("aE")){B=1i;18 1c}1b{v.2c(B);18 B}}}1b{18 1c}}1b{18 s()}},27:17(B){if(3h.1q){B=(B 4v q.4V.at)?B:(i(B)&&i(B).2p("2o")||1i);if(!B){18}v.bA(i(v).7z(B),1);B.7x()}1b{w();18}},kk:17(B){if(B){n.27(B);18 n.2A(B.id||B)}1b{w();18 s()}},kl:17(D){1a C,B=1c;if(D){C=g(D);if(C){B=C.7R}}18 B},km:17(B){18 z(B)},8T:17(B,C){18 d(B,C,"8T")},5H:17(B){if(B){d(B,1i,"5H")}1b{i(v).1A(17(C){n.5H(C)})}},2P:17(B,C){if(2U!=B&&1i!=B){d(B,C,"2P")}},5a:17(B){d(B,1i,"5a")},8x:17(B,C){d(B,C,"8x")},1F:17(B,C){1a D;C=!C?"1F":a(C,"+");if(!B){B=C}1b{if(!g(B)){B=a(B,"+")}}d(B,C,"2P")},2w:17(B,C){1a D;C=!C?"2w":a(C,"-");if(!B){B=C}1b{if(!g(B)){B=a(B,"-")}}d(B,C,"2P")}};i(1k).1G("9c",17(){q.3c(1l.bh)||(1l.bh={});q.3c(1l.bm)||(1l.bm={});q.3c(1l.bG)||(1l.bG={});q.3c(1l.bf)||(1l.bf={});n.2A.3r(10)});18 n})();', 0, 1376, "||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||this|||function|return||var|else|false|jBind|jBrowser|true|Math|items|null|container|document|window|last|loop|node|effect|length|for|jCallEvent|options|Event|Custom|new|p_|size|ieMode|jEach|width|containerPosition|event|abs|forward|jAddEvent|type|direction|height|progress|jSetCssProp|top|left|break|jTypeOf|handler|case|orientation|extend|index|jRemoveEvent|pos|parseInt|target|auto||mcs|||containerWidth||bullets|stop||prototype|_insideOptions|img|push||string|set|childNodes|arrows|data|jGetSize|call|distance|content|jGetCss|scroll|jFetch|animation|append|continuous|mode|touchdrag|itemStep|backward|center|tagName|100|start|class|allSize|position|default|nextAngle|px|mousedrag|btnclick|jRemove|bindEvent|move_|show|lastSide|load|jump|lastItem|moveTimer|circle|moiety|undefined|firstItem|jSetCss|jAddClass|transition|item||||figcaption|toLowerCase||timeStamp||div||clientY|clientX|defined||style|contains|frame|arguments|pointerType|opacity|changedTouches|horizontal|globalIndex|firstChild|stepDistance|jStore|parentNode|jDelay|clearTimeout|vertical|step|setAttribute|tap|loader|fullViewedItems|infinite|PI|enum|Element|jDel|test|_getItemIndex|oneOf|parseFloat|duration|deltaY|handle|firstSide|try|on|deltaX|onResize|Modules|lazyLoad|getAttribute|button|removeAttribute|jSetOpacity|navigator|catch|Doc|arr|array|wrapper||src|||||jTrim||parent|doneFlag|dragstart|J_EUID|jAppendTo|complete|init|Class|enable|body|click|stopDefaults|itemsFirstClones|FX|touchpinch|nextPosition|hide|mousescroll|hasOwnProperty|figure|autoplay|instanceof|translate3d|identifier|pushToEvents|constructor|callback|kill|reverse|scrollOnWheel|pointerEnabled|loaded|match|dblbtnclick|stopDownload|order|pow|jRemoveClass|isMouse|filter|ms|setTimeout|MagicScroll|while|touches|state|dbltap|Scroll|J_TYPE|canvas|continue|styles||features|nodeType||||domPrefix|onComplete|||pause|getVisibleIndexes|onerror|first|number|schema|version|bottom|lastPosition|jGetPosition|extraRemove|clone|drag|globalLength|mouseover|angle|listeners|display|orders|delete|apply|two|padding|getDoc|exitItems|sizeFirstImg|webkit|200|hold_|pause_|cubic|replace|none|resize|cubicBezier|ready|trident|loadAll|bezier|activeBullet|requestAnimationFrame|_shiftContainer|round|touch|end|border|radius|jCamelize|Array|now|floor|renderCarousel|||messageBox||cover|boolean|carousel|onload|||sin|IMG|360|endItem|offsetHeight|margin|magic|flow|cloneNode|className|timer|mouseup|pageX|createElement|detach|timingFunction|right|pageY|visibility|keyboard|isNaN|lastAngle|throw|jBindAsEvent|originalNodes|rewind|goTo|add|transitionend|events|overflow|_getGlobalIndex|_move2|hidden|jGetPageXY|flag|shift|update|J_UUID|_move|customEvents|mouseout|enterItems|MSPOINTER_TYPE_TOUCH|max|uuid|itemsLastClones|dragged|debug|captionA|itemsContainer|hashBox||stopScroll|visible|wheel_|isQueueStopped|_onComplete|disableEffect||fullScreen|queue|switch|render|minimum|_initOnWheel|name|_initDragOnScroll|not|itemsVisible|found|correctPosition|MagicJS|_sWidth|scale|ease|absolute|error|insertBefore|gradientBezier|_event_prefix_|move|disable|fit|itemSettings|dispose|onTouchEnd|indexOf|auto_|documentElement|block|element|random|changeClones|fromJSON|getButton|cachedCSS|byTag|notLoaded|searchIndex|prev|dragging|inline|platform|sqrt|scrollReady|showReflection|touchstart|_calcDistance|touchend|defaultMove|mousedown|alternate|easeFn|itemEvent|one||preloadItem||MSPointerUp||done|timedout||cycles|onTouchStart|pointerup|threshold|onready|tooltip|split|mobile|next|_handlers|oncomplete|tm|tempArray|engine|easing|stopQueue|stopDistribution|_options|object|targetTouches|300|animationstart|AnimationEnd|play|AnimationStart|firstItemSize|keydown|jHasClass|rotate|moveSettings|wheelDiff|stopWhell|animationend|dblclick|Transition|fromString|setContainerSize|storage|ceil|appendChild|onStart|speed|toString|_events|_render|updateOptions|action|parseCubicBezier|activate|previous|continuousPause|containerSize||opera|nth|linear|||_EVENTS_|sizefigcaption||readyState|dragend|nativeEvents|domready|onabort|removeChild|toUpperCase|_timer|abort|Progress|_unbind|_cleanup|setCanvasPosition|uaName|_event_del_|AA|join|500|handleMouseUp|text|fallback|getStorage|url|implement|loopBind|pStyles|checkSizes_|jGetScroll|exists|svg|checkLoadingVisibleItems|off|callee|startAlpha|cubicBezierAtTime|btnclickEvent|has|countTheNumberOfItems|nodeValue|min|exitFullscreen|performedOnClones|_removeClones|getElementsByTagName|wrapperPosition|href|MSPointerDown|_bind|forceAnimation|win|translateZ|xhr|classHidden|compatMode|pointermove|pStyles_arr|setPercent|ban|deg|preloadAll|MSPointerMove|getMatrixPosition|setItemStep||||||||allNodes|_event_add_|onprogress|checkWholeItems|Message|android|span|coreTimeout|status|onMoveEnd|transform|_setProperties|Full|out|itemIndex|setReflection|Opacity|charAt|getRelated|onTouchMove|onBeforeRender|relatedTarget|normalizeCSS|autostart|mousemove|cancelAnimationFrame|touchmove|hideTimer|chrome|eventType|keyboardCallback|showProgress|hideProgress|pointerId|dashize|tagImg|classDisabled|lastChild|correctItemPosition|XMLHttpRequest|offsetLeft|createEvent|pointerdown|00001|done2|scrollTop|mousewheel|originSize||fxk|scrollLeft|gecko|0ms|errorEventName|slice|cssDomPrefix||typeof|deactivate|600|MagicScrollMobileExtraOptions|groupLoad|MagicScrollOptions|opr|preloadAllFlag|ignore|el_arr|MagicScrollMobileOptions|onClick|checkLoadedItems|handleMouseDown|keyCode||disableReflection|onclick|caller|addCloneContent|showItem|J_EXT|doc|reset|splice|cssFilters|createTextNode|Tooltip|hideFX|Date|MagicScrollExtraOptions|styles_arr|https|ifndef|maximum|previousScale|zoom|depth|calc|containerCssSize|cycle|stopAnimation|zIndex|captionOpasity|180|getImg|onReady|onMoveStart|removeCanvas|onItemOut|inherit|showCaption|onItemHover|Carousel|Function|handleTouchStart|uaVersion|outside|deltaMode|Options|loadedBytes|pagination|getTarget|priority||QImageLoader|resetZIndex|naturalWidth|startTime|checkPosition|hovered|touchScreen|setActiveBullet|concat|handleTouchMove|handleTouchEnd|FIGURE|jClearEvents|registerCallback|0px|entering|exited|setEvent|correctContainerPosition|05|initBullets|setBullets|exiting|indoc|changeEventName|Alpha|removed|prevIndex|freeTouchPreload|stopEffect|_cleansingStyles|magicJS|presto|Effect|_complete|offsetTop|setupOptions|after|setItemSide|1000|pauseContinuous|originFontSize|setupArrows|capable|_getWheelDiff|cloneFigure|_prepareClones|HTMLElement|css|getElementsByClassName|removeCSS|getContext|isPrimary|onExit|cancelFullScreen|onchange|parseSchema|Number|jToBool|setMessage|loadBlob|isReady|which|interval|onreadystatechange|onEnter|addEventListener|xhr2|fps|finishTime|request||requestFullScreen|clientWidth|stopPropagation|cancelBubble|onAfterRender|preventDefault|getClientXY|ios|curScale|dispatchEvent|detail|_initialDistance|dragmove|wrap|handleMouseMove|wheelDelta|wheelDeltaY|onxhrerror|304|euid|jDefer|wheelDeltaX|progressiveLoad|355|03|Left|easeInCubic|Bottom|easeOutQuad|Right|easeOutExpo|easeInQuad|easeOutCubic|Top|PFX|msExitFullscreen|bounceIn|elasticIn|easeInBack|easeOutBack|easeInExpo|styleFloat|offsetWidth|165|setProps|getBoundingClientRect|getElementById|webkit419|compareDocumentPosition|Microsoft|DXImageTransform|easeInSine|easeOutSine|getComputedStyle|175|progid|045|999||save|10000px|maxSize|calcItemPosition||originalClasses|backcompat|returnValue|_carousel|hone|forEach|String|mjs|Error|od|cos|onStop|jumpToNumber|_moveEffect|removeRule|deleteRule|styleSheet|rotateY|pauseHover_|destroyEvent|100000|magicscroll|setNewOptions|rotateX|box|phone|innerHTML|hold|nextSibling|_scroll|addCSS|caption|initEffect_|setOrientation|hideArrows|ArrowsPair|showArrows|jumpIndex|Bullets|timingFunctionDefault|showThis|enabled|hover|setFontSize|stop_|perspective|firefox|restore|rightQueue|itemCss|parseTag|key_down|disableHold|byClass|mozCancelAnimationFrame|circles|safari|map||androidBrowser|Moz|crios|getTime|backCompat|setItemsPosition|DOMContentLoaded|nativize|getBulletIndex||getDirection|cssPrefix|jGetSize_|Object|unbindEvent|documentMode|arrow|08|bullet|moz|Webkit|toArray|date|textnode|UUID|noimg|multibackground|background|no|DocumentTouch|relative|sheet|attributes|otherSize|scrollbarsWidth|cssTransformProp|inside|cssText|ImageLoader|blur|itemFX|stylesId|origItem|delay|destroy|insertRule|get|Image|SVG11|removeEventListener|feature|ontouchstart|mozCancelFullScreen|oCancelFullScreen|implementation|http|hasFeature|attachEvent|www|org|w3|webkitCancelFullScreen|detachEvent|custom|FormData|ProgressEvent|TR|withCredentials|getOriginalTarget|sort|msCancelFullScreen|getHashCode|xxxx|xxxxxxxx|generateUUID|addRule|4xxx|yxxx|getAbsoluteURL|xy|xxxxxxxxxxxx|cssRules|head|MouseEvent|collection|g4bc9bfe|v3|UIEvent|KeyboardEvent|regexp|RegExp|KeyEvent|doScroll|isPrimaryTouch|querySelector|query|runtime|fireEvent|fullscreenEnabled|msFullscreenEnabled|initEvent|createEventObject|webkitexitFullscreen|420|air|toFloat|jToInt|4294967296|charCodeAt|setInterval|userAgent|evaluate|xpath|edge|jRaiseEvent|midp|linux|lineHeight|mac|getPropertyValue|webos|currentStyle|other|fontWeight|webkitRequestAnimationFrame|oRequestAnimationFrame|mozRequestAnimationFrame||float|cssFloat|unknown|jToggleClass|windows|xda|getInnerSize|jGetFullScroll|clientTop|wap|xiino|ActiveXObject|taintEnabled|jGetStyles|WebKitPoint|mozInnerScreenY|getBoxObjectFor|msRequestAnimationFrame|oCancelAnimationFrame|cancel|requestFullscreen|ExitFullscreen|CancelFullScreen|webkitTransitionEnd|MSFullscreenChange|RequestFullScreen|RequestFullscreen|webkitIsFullScreen|FullScreen|FullscreenElement|fullscreenElement|536|fullscreenchange|WebKitTransitionEvent|activeElement|9999|webkitCancelRequestAnimationFrame|Width|msCancelAnimationFrame|prefix|fullscreenerror|cssfilters|TransitionEvent|MSFullscreenError|2px|red|clientLeft||||offsetParent|srcElement|maemo|pointerover|MSPointerOver|lge|fromElement||mmp||netfront|ixi|re|os|palm|ob|kindle|iris|bada|pointerout|avantgo|MSPointerOut|meego|toElement|blackberry|blazer|hiptop|iemobile|fennec|elaine|compal|plucker|scrollHeight|link|hasChild|jGetStyle|jSetStyle|up|iframe|replaceChild|enclose|jGetRect|html|changeContent|innerText|vodafone|DOMElement|treo|pageXOffset|clientHeight|pageYOffset|jGetFullSize|scrollWidth|pocket|psp|symbian|presto925|series|innerWidth|innerHeight|isTouchEvent|HTMLImageElement|beforeunload|unload|readystatechange|customEventsAllowed|cloneEvents|submit|select|keypress|keyup|focus|change|jCopyEvents|form|circle_06|circle_05|pinchstart|circle_08|ShowItems|circle_04|circle_03|active|Loading|circle_01|circle_02|selectend|selectstart|MessageBox|MagicToolboxTooltip|5000|NEGATIVE_INFINITY|POSITIVE_INFINITY|bounceOut|elasticOut|cubicIn|cubicOut|backIn|backOut|JSON|parse|isset|substring|contextmenu|DOMMouseScroll|getJSON|parameter|Incorrect|definition|of|the|unshift|count|location|image|hash|originwidth|originheight|loading|original|100000000|CoverFlow|Cannot|calculate|disabled|continuousMove|v2|checkEffect|refresh|running|getInstance|swap|sizing|cssId|before|additionalTags|270|01|_coverFlow|matrix3d|exit|matrix|0001|255|enter|_|white|space|nowrap|bar|getVisibleItems|font|translateY|864|coverFlow|350|translateX|fontSize|drawImage|getImageData|putImageData|reflection|quadOut|circle_07|onwheel|000244140625|easeInOutQuad|temporary|085|wheel|total|lengthComputable|webkitURL|URL|455|515|easeInQuart|895|685|easeOutQuart|645|easeInOutCubic|955|055|675|215|445|quadIn|normal|GET|roundCss|setTransition|Infinity|responseType|10000|send|blob|naturalHeight|open||curFrame|575|static|565|easeInOutSine|715|745|clearInterval|createObjectURL|537|response|deltaZ|deltaFactor|275|885|735|easeInOutBack|035|04|795|135|785|easeOutCirc|335|easeInCirc|easeInOutQuart|easeInOutExpo|easeInOutCirc|075|07|265|855|06|000001|sineOut|expoIn|expoOut|easeInQuint|755|delta|easeOutQuint|pinchupdate|sineIn|easeInOutQuint".split("|"), 0, {})),
  eval(function(e, t, i, n, o, s) {
    if (o = function(e) {
        return (e < 62 ? "" : o(parseInt(e / 62))) + ((e %= 62) > 35 ? String.fromCharCode(e + 29) : e.toString(36))
      }, !"".replace(/^/, String)) {
      for (; i--;) s[o(i)] = n[i] || o(i);
      n = [function(e) {
        return s[e]
      }], o = function() {
        return "\\w+"
      }, i = 1
    }
    for (; i--;) n[i] && (e = e.replace(new RegExp("\\b" + o(i) + "\\b", "g"), n[i]));
    return e
  }('1j.8P=(17(){1c w,y;w=y=(17(){1c S={4q:"fx.3-b3-8-fy",eC:0,7J:{},$aH:17(W){1a(W.$5U||(W.$5U=++M.eC))},9v:17(W){1a(M.7J[W]||(M.7J[W]={}))},$F:17(){},$1n:17(){1a 1n},$1r:17(){1a 1r},es:"dD-"+1o.6e(1o.6O()*1t a5().eo()),3o:17(W){1a(2D!=W)},aF:17(X,W){1a(2D!=X)?X:W},8X:17(W){1a!!(W)},1P:17(W){if(!M.3o(W)){1a 1n}if(W.$4G){1a W.$4G}if(!!W.5M){if(1==W.5M){1a"5Z"}if(3==W.5M){1a"ek"}}if(W.1I&&W.eK){1a"fb"}if(W.1I&&W.9N){1a"29"}if((W 5g 1j.eM||W 5g 1j.bC)&&W.57===M.3y){1a"3M"}if(W 5g 1j.69){1a"4b"}if(W 5g 1j.bC){1a"17"}if(W 5g 1j.5W){1a"1O"}if(M.1e.4K){if(M.3o(W.cd)){1a"1z"}}1k{if(W===1j.1z||W.57==1j.1u||W.57==1j.eb||W.57==1j.dJ||W.57==1j.fj||W.57==1j.fh){1a"1z"}}if(W 5g 1j.a5){1a"eP"}if(W 5g 1j.dd){1a"fe"}if(W===1j){1a"1j"}if(W===1m){1a"1m"}1a 93(W)},1X:17(ab,aa){if(!(ab 5g 1j.69)){ab=[ab]}if(!aa){1a ab[0]}1S(1c Z=0,X=ab.1I;Z<X;Z++){if(!M.3o(ab)){7G}1S(1c Y in aa){if(!eM.2w.41.2b(aa,Y)){7G}3x{ab[Z][Y]=aa[Y]}3R(W){}}}1a ab[0]},9U:17(aa,Z){if(!(aa 5g 1j.69)){aa=[aa]}1S(1c Y=0,W=aa.1I;Y<W;Y++){if(!M.3o(aa[Y])){7G}if(!aa[Y].2w){7G}1S(1c X in(Z||{})){if(!aa[Y].2w[X]){aa[Y].2w[X]=Z[X]}}}1a aa[0]},em:17(Y,X){if(!M.3o(Y)){1a Y}1S(1c W in(X||{})){if(!Y[W]){Y[W]=X[W]}}1a Y},$3x:17(){1S(1c X=0,W=29.1I;X<W;X++){3x{1a 29[X]()}3R(Y){}}1a 1h},$A:17(Y){if(!M.3o(Y)){1a M.$([])}if(Y.eL){1a M.$(Y.eL())}if(Y.eK){1c X=Y.1I||0,W=1t 69(X);5l(X--){W[X]=Y[X]}1a M.$(W)}1a M.$(69.2w.ao.2b(Y))},6q:17(){1a 1t a5().eo()},4a:17(aa){1c Y;4r(M.1P(aa)){1B"8O":Y={};1S(1c Z in aa){Y[Z]=M.4a(aa[Z])}1G;1B"4b":Y=[];1S(1c X=0,W=aa.1I;X<W;X++){Y[X]=M.4a(aa[X])}1G;1R:1a aa}1a M.$(Y)},$:17(Y){1c W=1r;if(!M.3o(Y)){1a 1h}if(Y.$aL){1a Y}4r(M.1P(Y)){1B"4b":Y=M.em(Y,M.1X(M.69,{$aL:M.$F}));Y.36=Y.ds;1a Y;1G;1B"1O":1c X=1m.cW(Y);if(M.3o(X)){1a M.$(X)}1a 1h;1G;1B"1j":1B"1m":M.$aH(Y);Y=M.1X(Y,M.3v);1G;1B"5Z":M.$aH(Y);Y=M.1X(Y,M.3Y);1G;1B"1z":Y=M.1X(Y,M.1u);1G;1B"ek":1B"17":1B"4b":1B"eP":1R:W=1n;1G}if(W){1a M.1X(Y,{$aL:M.$F})}1k{1a Y}},$1t:17(W,Y,X){1a M.$(M.cv.7L(W)).bK(Y||{}).1x(X||{})},76:17(X,Z,ad){1c aa,Y,ab,ac=[],W=-1;ad||(ad=M.es);aa=M.$(ad)||M.$1t("2l",{id:ad,1y:"9T/6M"}).1Z((1m.fO||1m.3H),"1H");Y=aa.f8||aa.eV;if("1O"!=M.1P(Z)){1S(1c ab in Z){ac.38(ab+":"+Z[ab])}Z=ac.6Y(";")}if(Y.eO){W=Y.eO(X+" {"+Z+"}",Y.fL.1I)}1k{W=Y.fP(X,Z)}1a W},fE:17(Z,W){1c Y,X;Y=M.$(Z);if("5Z"!==M.1P(Y)){1a}X=Y.f8||Y.eV;if(X.f2){X.f2(W)}1k{if(X.eY){X.eY(W)}}},fX:17(){1a"fd-fv-fq-fi-fo".4v(/[g7]/g,17(Y){1c X=1o.6O()*16|0,W=Y=="x"?X:(X&3|8);1a W.8p(16)}).9b()},6b:(17(){1c W;1a 17(X){if(!W){W=1m.7L("a")}W.3T("6K",X);1a("!!"+W.6K).4v("!!","")}})(),fY:17(Y){1c Z=0,W=Y.1I;1S(1c X=0;X<W;++X){Z=31*Z+Y.ex(X);Z%=fV}1a Z}};1c M=S;1c N=S.$;if(!1j.dG){1j.dG=S;1j.$dD=S.$}M.69={$4G:"4b",6a:17(Z,aa){1c W=13.1I;1S(1c X=13.1I,Y=(aa<0)?1o.1V(0,X+aa):aa||0;Y<X;Y++){if(13[Y]===Z){1a Y}}1a-1},5F:17(W,X){1a 13.6a(W,X)!=-1},ds:17(W,Z){1S(1c Y=0,X=13.1I;Y<X;Y++){if(Y in 13){W.2b(Z,13[Y],Y,13)}}},2V:17(W,ab){1c aa=[];1S(1c Z=0,X=13.1I;Z<X;Z++){if(Z in 13){1c Y=13[Z];if(W.2b(ab,13[Z],Z,13)){aa.38(Y)}}}1a aa},fJ:17(W,aa){1c Z=[];1S(1c Y=0,X=13.1I;Y<X;Y++){if(Y in 13){Z[Y]=W.2b(aa,13[Y],Y,13)}}1a Z}};M.9U(5W,{$4G:"1O",4X:17(){1a 13.4v(/^\\s+|\\s+$/g,"")},eq:17(W,X){1a(X||1n)?(13.8p()===W.8p()):(13.5u().8p()===W.5u().8p())},5A:17(){1a 13.4v(/-\\D/g,17(W){1a W.9g(1).9b()})},9Z:17(){1a 13.4v(/[A-Z]/g,17(W){1a("-"+W.9g(0).5u())})},fU:17(W){1a 5D(13,W||10)},fM:17(){1a 2F(13)},cS:17(){1a!13.4v(/1r/i,"").4X()},4F:17(X,W){W=W||"";1a(W+13+W).6a(W+X+W)>-1}});S.9U(bC,{$4G:"17",1E:17(){1c X=M.$A(29),W=13,Y=X.6Q();1a 17(){1a W.6i(Y||1h,X.5E(M.$A(29)))}},2E:17(){1c X=M.$A(29),W=13,Y=X.6Q();1a 17(Z){1a W.6i(Y||1h,M.$([Z||(M.1e.2n?1j.1z:1h)]).5E(X))}},2y:17(){1c X=M.$A(29),W=13,Y=X.6Q();1a 1j.4D(17(){1a W.6i(W,X)},Y||0)},cB:17(){1c X=M.$A(29),W=13;1a 17(){1a W.2y.6i(W,X)}},c7:17(){1c X=M.$A(29),W=13,Y=X.6Q();1a 1j.f6(17(){1a W.6i(W,X)},Y||0)}});1c T={},L=2H.fN.5u(),K=L.3s(/(3W|5K|4K|bF)\\/(\\d+\\.?\\d*)/i),P=L.3s(/(fQ|ap)\\/(\\d+\\.?\\d*)/i)||L.3s(/(eu|4l|8L|dV|6h|ap)\\/(\\d+\\.?\\d*)/i),R=L.3s(/4q\\/(\\d+\\.?\\d*)/i),G=1m.6k.2l;17 H(X){1c W=X.9g(0).9b()+X.ao(1);1a X in G||("er"+W)in G||("ev"+W)in G||("7D"+W)in G||("O"+W)in G}M.1e={2L:{fK:!!(1m.fD),fC:!!(1j.et),bl:!!(1m.ei),4Z:!!(1m.fF||1m.fG||1m.9K||1m.eN||1m.fI||1m.fH||1m.fR||1m.fS||1m.g2),cl:!!(1j.g1)&&!!(1j.g3)&&(1j.8K&&"g6"in 1t 8K),1Y:H("1Y"),2g:H("2g"),8V:H("8V"),ef:H("ef"),4Y:1n,eW:1n,8q:1n,75:(17(){1a 1m.g0.fZ("bU://bV.b1.b8/fB/fT/fW#f9","1.1")})()},cY:17(){1a"fa"in 1j||(1j.dY&&1m 5g dY)}(),3t:L.3s(/(6y|bb\\d+|fu).+|fp|fs\\/|fr|fw|fm|ft|fA|fc|fg|ip(dr|df|ad)|ff|hQ|hj |hi|hh|hf|3t.+dV|hg|6h m(hk|in)i|hp( ho)?|e9|p(hn|hd)\\/|h1|h2|h9|hq(4|6)0|g8|hr|hL\\.(1e|43)|hP|hN|hM (ce|e9)|hw|hs/)?1r:1n,7n:(K&&K[1])?K[1].5u():(1j.6h)?"bF":!!(1j.h0)?"4K":(2D!==1m.gp||1h!=1j.go)?"5K":(1h!==1j.gt||!2H.gx)?"3W":"gw",4q:(K&&K[2])?2F(K[2]):0,3B:(P&&P[1])?P[1].5u():"",7l:(P&&P[2])?2F(P[2]):0,8a:"",aw:"",4W:"",2n:0,4N:L.3s(/ip(?:ad|df|dr)/)?"8R":(L.3s(/(?:gv|6y)/)||2H.4N.3s(/gm|8Y|gl/i)||["gd"])[0].5u(),ej:1m.8U&&"dI"==1m.8U.5u(),f1:0,49:17(){1a(1m.8U&&"dI"==1m.8U.5u())?1m.3H:1m.6k},4Y:1j.4Y||1j.gc||1j.gb||1j.g9||1j.ge||2D,9s:1j.9s||1j.eU||1j.eU||1j.gf||1j.gk||1j.gj||2D,2i:1n,7p:17(){if(M.1e.2i){1a}1c Z,Y;M.1e.2i=1r;M.3H=M.$(1m.3H);M.8Y=M.$(1j);3x{1c X=M.$1t("2Y").1x({1f:2N,1g:2N,5d:"5O",2e:"5C",1H:-gi}).1Z(1m.3H);M.1e.f1=X.d8-X.cZ;X.2P()}3R(W){}3x{Z=M.$1t("2Y");Y=Z.2l;Y.eQ="eR:2d(a8://),2d(a8://),gg 2d(a8://)";M.1e.2L.eW=(/(2d\\s*\\(.*?){3}/).3e(Y.eR);Y=1h;Z=1h}3R(W){}if(!M.1e.7v){M.1e.7v=M.9Q("2g").9Z()}3x{Z=M.$1t("2Y");Z.2l.eQ=M.9Q("2V").9Z()+":5e(gh);";M.1e.2L.8q=!!Z.2l.1I&&(!M.1e.2n||M.1e.2n>9);Z=1h}3R(W){}if(!M.1e.2L.8q){M.$(1m.6k).1A("6E-gz-3p")}if(2D===1j.gS&&2D!==1j.gQ){T.2S="gO"}M.3v.2U.2b(M.$(1m),"9z")}};(17(){1c aa=[],Z,Y,X;17 W(){1a!!(29.9N.bT)}4r(M.1e.7n){1B"4K":if(!M.1e.4q){M.1e.4q=!!(1j.8K)?3:2}1G;1B"5K":M.1e.4q=(P&&P[2])?2F(P[2]):0;1G}M.1e[M.1e.7n]=1r;if(P&&"eu"===P[1]){M.1e.3B="4l"}if(!!1j.4l){M.1e.4l=1r}if(P&&"ap"===P[1]){M.1e.3B="6h";M.1e.6h=1r}if("8L"===M.1e.3B&&(R&&R[1])){M.1e.7l=2F(R[1])}if("6y"==M.1e.4N&&M.1e.3W&&(R&&R[1])){M.1e.6u=1r}Z=({5K:["-ew-","ev","ew"],3W:["-3W-","er","3W"],4K:["-7D-","7D","7D"],bF:["-o-","O","o"]})[M.1e.7n]||["","",""];M.1e.8a=Z[0];M.1e.aw=Z[1];M.1e.4W=Z[2];M.1e.2n=(!M.1e.4K)?2D:(1m.ep)?1m.ep:17(){1c ab=0;if(M.1e.ej){1a 5}4r(M.1e.4q){1B 2:ab=6;1G;1B 3:ab=7;1G}1a ab}();aa.38(M.1e.4N+"-3p");if(M.1e.3t){aa.38("3t-3p")}if(M.1e.6u){aa.38("6y-1e-3p")}if(M.1e.2n){M.1e.3B="ie";M.1e.7l=M.1e.2n;aa.38("ie"+M.1e.2n+"-3p");1S(Y=11;Y>M.1e.2n;Y--){aa.38("gY-ie"+Y+"-3p")}}if(M.1e.3W&&M.1e.4q<gX){M.1e.2L.4Z=1n}if(M.1e.4Y){M.1e.4Y.2b(1j,17(){M.1e.2L.4Y=1r})}if(M.1e.2L.75){aa.38("75-3p")}1k{aa.38("6E-75-3p")}X=(1m.6k.5L||"").3s(/\\S+/g)||[];1m.6k.5L=M.$(X).5E(aa).6Y(" ");if(M.1e.2n&&M.1e.2n<9){1m.7L("8c");1m.7L("dE")}})();(17(){M.1e.4Z={9w:M.1e.2L.4Z,5p:17(){1a!!(1m.gW||1m[M.1e.4W+"gV"]||1m.4Z||1m.gN||1m[M.1e.4W+"gM"])},bH:17(W,X){X||(X={});if(13.9w){M.$(1m).1C(13.aT,13.ez=17(Y){if(13.5p()){X.bE&&X.bE()}1k{M.$(1m).1N(13.aT,13.ez);X.bB&&X.bB()}}.2E(13));M.$(1m).1C(13.b2,13.5S=17(Y){X.8y&&X.8y();M.$(1m).1N(13.b2,13.5S)}.2E(13));(W[M.1e.4W+"gE"]||W[M.1e.4W+"gD"]||W.gC||17(){}).2b(W)}1k{if(X.8y){X.8y()}}},dL:(1m.9K||1m.eN||1m[M.1e.4W+"gB"]||1m[M.1e.4W+"gF"]||17(){}).1E(1m),aT:1m.eE?"gG":(1m.9K?"":M.1e.4W)+"gK",b2:1m.eE?"gH":(1m.9K?"":M.1e.4W)+"gI",gJ:M.1e.4W,gL:1h}})();1c V=/\\S+/g,J=/^(3G(c2|c0|bY|d9)gA)|((78|7X)(c2|c0|bY|d9))$/,O={"gU":("2D"===93(G.cO))?"gT":"cO"},Q={dH:1r,gP:1r,2r:1r,dF:1r,1l:1r},I=(1j.cP)?17(Y,W){1c X=1j.cP(Y,1h);1a X?X.gR(W)||X[W]:1h}:17(Z,X){1c Y=Z.gy,W=1h;W=Y?Y[X]:1h;if(1h==W&&Z.2l&&Z.2l[X]){W=Z.2l[X]}1a W};17 U(Y){1c W,X;X=(M.1e.3W&&"2V"==Y)?1n:(Y in G);if(!X){W=M.1e.aw+Y.9g(0).9b()+Y.ao(1);if(W in G){1a W}}1a Y}M.9Q=U;M.3Y={cG:17(W){1a!(W||"").4F(" ")&&(13.5L||"").4F(W," ")},1A:17(aa){1c X=(13.5L||"").3s(V)||[],Z=(aa||"").3s(V)||[],W=Z.1I,Y=0;1S(;Y<W;Y++){if(!M.$(X).5F(Z[Y])){X.38(Z[Y])}}13.5L=X.6Y(" ");1a 13},1T:17(ab){1c X=(13.5L||"").3s(V)||[],aa=(ab||"").3s(V)||[],W=aa.1I,Z=0,Y;1S(;Z<W;Z++){if((Y=M.$(X).6a(aa[Z]))>-1){X.9X(Y,1)}}13.5L=ab?X.6Y(" "):"";1a 13},ga:17(W){1a 13.cG(W)?13.1T(W):13.1A(W)},3K:17(X){1c Y=X.5A(),W=1h;X=O[Y]||(O[Y]=U(Y));W=I(13,X);if("2t"===W){W=1h}if(1h!==W){if("2r"==X){1a M.3o(W)?2F(W):1}if(J.3e(X)){W=5D(W,10)?W:"5Q"}}1a W},3F:17(X,W){1c Z=X.5A();3x{if("2r"==X){13.cH(W);1a 13}X=O[Z]||(O[Z]=U(Z));13.2l[X]=W+(("63"==M.1P(W)&&!Q[Z])?"2v":"")}3R(Y){}1a 13},1x:17(X){1S(1c W in X){13.3F(W,X[W])}1a 13},gu:17(){1c W={};M.$A(29).36(17(X){W[X]=13.3K(X)},13);1a W},cH:17(Y,W){1c X;W=W||1n;13.2l.2r=Y;Y=5D(2F(Y)*2N);if(W){if(0===Y){if("3f"!=13.2l.5a){13.2l.5a="3f"}}1k{if("6n"!=13.2l.5a){13.2l.5a="6n"}}}if(M.1e.2n&&M.1e.2n<9){if(!9x(Y)){if(!~13.2l.2V.6a("bw")){13.2l.2V+=" cK:cT.d4.bw(8B="+Y+")"}1k{13.2l.2V=13.2l.2V.4v(/8B=\\d*/i,"8B="+Y)}}1k{13.2l.2V=13.2l.2V.4v(/cK:cT.d4.bw\\(8B=\\d*\\)/i,"").4X();if(""===13.2l.2V){13.2l.5B("2V")}}}1a 13},bK:17(W){1S(1c X in W){if("3M"===X){13.1A(""+W[X])}1k{13.3T(X,""+W[X])}}1a 13},4i:17(){1a 13.1x({7A:"3k",5a:"3f"})},5q:17(){1a 13.1x({7A:"",5a:"6n"})},1F:17(){1a{1f:13.d8,1g:13.gs}},8u:17(X){1c W=13.1F();W.1f-=(2F(13.3K("3G-1M-1f")||0)+2F(13.3K("3G-2R-1f")||0));W.1g-=(2F(13.3K("3G-1H-1f")||0)+2F(13.3K("3G-2Q-1f")||0));if(!X){W.1f-=(2F(13.3K("78-1M")||0)+2F(13.3K("78-2R")||0));W.1g-=(2F(13.3K("78-1H")||0)+2F(13.3K("78-2Q")||0))}1a W},6X:17(){1a{1H:13.7W,1M:13.80}},gn:17(){1c W=13,X={1H:0,1M:0};do{X.1M+=W.80||0;X.1H+=W.7W||0;W=W.4H}5l(W);1a X},8b:17(){1c aa=13,X=0,Z=0;if(M.3o(1m.6k.7I)){1c W=13.7I(),Y=M.$(1m).6X(),ab=M.1e.49();1a{1H:W.1H+Y.y-ab.gq,1M:W.1M+Y.x-ab.gr}}do{X+=aa.gZ||0;Z+=aa.hz||0;aa=aa.hA}5l(aa&&!(/^(?:3H|hB)$/i).3e(aa.a9));1a{1H:Z,1M:X}},7S:17(){1c X=13.8b();1c W=13.1F();1a{1H:X.1H,2Q:X.1H+W.1g,1M:X.1M,2R:X.1M+W.1f}},5k:17(X){3x{13.hC=X}3R(W){13.hy=X}1a 13},2P:17(){1a(13.4H)?13.4H.ak(13):13},5i:17(){M.$A(13.hx).36(17(W){if(3==W.5M||8==W.5M){1a}M.$(W).5i()});13.2P();13.bo();if(13.$5U){M.7J[13.$5U]=1h;4P M.7J[13.$5U]}1a 1h},3n:17(Y,X){X=X||"2Q";1c W=13.4h;("1H"==X&&W)?13.ht(Y,W):13.b5(Y);1a 13},1Z:17(Y,X){1c W=M.$(Y).3n(13,X);1a 13},eg:17(W){13.3n(W.4H.b0(13,W));1a 13},9O:17(W){if("5Z"!==M.1P("1O"==M.1P(W)?W=1m.cW(W):W)){1a 1n}1a(13==W)?1n:(13.5F&&!(M.1e.d0))?(13.5F(W)):(13.cX)?!!(13.cX(W)&16):M.$A(13.7T(W.a9)).5F(W)}};M.3Y.hu=M.3Y.3K;M.3Y.hv=M.3Y.1x;if(!1j.3Y){1j.3Y=M.$F;if(M.1e.7n.3W){1j.1m.7L("hD")}1j.3Y.2w=(M.1e.7n.3W)?1j["[[hE.2w]]"]:{}}M.9U(1j.3Y,{$4G:"5Z"});M.3v={1F:17(){if(M.1e.cY||M.1e.hO||M.1e.d0){1a{1f:1j.5f,1g:1j.4J}}1a{1f:M.1e.49().cZ,1g:M.1e.49().hK}},6X:17(){1a{x:1j.hG||M.1e.49().80,y:1j.hF||M.1e.49().7W}},hH:17(){1c W=13.1F();1a{1f:1o.1V(M.1e.49().hI,W.1f),1g:1o.1V(M.1e.49().hJ,W.1g)}}};M.1X(1m,{$4G:"1m"});M.1X(1j,{$4G:"1j"});M.1X([M.3Y,M.3v],{26:17(Z,X){1c W=M.9v(13.$5U),Y=W[Z];if(2D!==X&&2D===Y){Y=W[Z]=X}1a(M.3o(Y)?Y:1h)},34:17(Y,X){1c W=M.9v(13.$5U);W[Y]=X;1a 13},2X:17(X){1c W=M.9v(13.$5U);4P W[X];1a 13}});if(!(1j.aS&&1j.aS.2w&&1j.aS.2w.bj)){M.1X([M.3Y,M.3v],{bj:17(W){1a M.$A(13.9p("*")).2V(17(Y){3x{1a(1==Y.5M&&Y.5L.4F(W," "))}3R(X){}})}})}M.1X([M.3Y,M.3v],{9u:17(){1a 13.bj(29[0])},7T:17(){1a 13.9p(29[0])}});if(M.1e.4Z.9w&&!1m.cD){M.3Y.cD=17(){M.1e.4Z.bH(13)}}M.1u={$4G:"1z",62:M.$1n,2a:17(){1a 13.5c().3z()},5c:17(){if(13.cC){13.cC()}1k{13.cd=1r}1a 13},3z:17(){if(13.ch){13.ch()}1k{13.h8=1n}1a 13},4I:17(){13.62=M.$1r;1a 13},7K:17(){1c X,W;X=((/3A/i).3e(13.1y))?13.2C[0]:13;1a(!M.3o(X))?{x:0,y:0}:{x:X.2O,y:X.2K}},6j:17(){1c X,W;X=((/3A/i).3e(13.1y))?13.2C[0]:13;1a(!M.3o(X))?{x:0,y:0}:{x:X.5n||X.2O+M.1e.49().80,y:X.5o||X.2K+M.1e.49().7W}},bf:17(){1c W=13.4e||13.ha;5l(W&&3==W.5M){W=W.4H}1a W},7Y:17(){1c X=1h;4r(13.1y){1B"7x":1B"hb":1B"hc":X=13.9D||13.h7;1G;1B"8k":1B"ba":1B"ee":X=13.9D||13.h6;1G;1R:1a X}3x{5l(X&&3==X.5M){X=X.4H}}3R(W){X=1h}1a X},6D:17(){if(!13.cj&&13.2o!==2D){1a(13.2o&1?1:(13.2o&2?3:(13.2o&4?2:0)))}1a 13.cj},h3:17(){1a(13.2k&&("3A"===13.2k||13.2k===13.59))||(/3A/i).3e(13.1y)},h4:17(){1a 13.2k?(("3A"===13.2k||13.59===13.2k)&&13.9Y):1===13.2C.1I&&(13.6d.1I?13.6d[0].3D==13.2C[0].3D:1r)}};M.bd="ci";M.bk="h5";M.9q="";if(!1m.ci){M.bd="he";M.bk="hm";M.9q="8f"}M.1u.1w={1y:"",x:1h,y:1h,2I:1h,2o:1h,4e:1h,9D:1h,$4G:"1z.4k",62:M.$1n,5G:M.$([]),4d:17(W){1c X=W;13.5G.38(X)},2a:17(){1a 13.5c().3z()},5c:17(){13.5G.36(17(X){3x{X.5c()}3R(W){}});1a 13},3z:17(){13.5G.36(17(X){3x{X.3z()}3R(W){}});1a 13},4I:17(){13.62=M.$1r;1a 13},7K:17(){1a{x:13.2O,y:13.2K}},6j:17(){1a{x:13.x,y:13.y}},bf:17(){1a 13.4e},7Y:17(){1a 13.9D},6D:17(){1a 13.2o},e3:17(){1a 13.5G.1I>0?13.5G[0].bf():2D}};M.1X([M.3Y,M.3v],{1C:17(Y,aa,ab,ae){1c ad,W,Z,ac,X;if("1O"==M.1P(Y)){X=Y.7H(" ");if(X.1I>1){Y=X}}if(M.1P(Y)=="4b"){M.$(Y).36(13.1C.2E(13,aa,ab,ae));1a 13}if(!Y||!aa||M.1P(Y)!="1O"||M.1P(aa)!="17"){1a 13}if(Y=="9z"&&M.1e.2i){aa.2b(13);1a 13}Y=T[Y]||Y;ab=5D(ab||50);if(!aa.$9C){aa.$9C=1o.6e(1o.6O()*M.6q())}ad=M.3v.26.2b(13,"8l",{});W=ad[Y];if(!W){ad[Y]=W=M.$([]);Z=13;if(M.1u.1w[Y]){M.1u.1w[Y].1K.5m.2b(13,ae)}1k{W.3j=17(af){af=M.1X(af||1j.e,{$4G:"1z"});M.3v.2U.2b(Z,Y,M.$(af))};13[M.bd](M.9q+Y,W.3j,1n)}}ac={1y:Y,fn:aa,bc:ab,cc:aa.$9C};W.38(ac);W.hl(17(ag,af){1a ag.bc-af.bc});1a 13},1N:17(ac){1c aa=M.3v.26.2b(13,"8l",{}),Y,W,X,ad,ab,Z;ab=29.1I>1?29[1]:-2N;if("1O"==M.1P(ac)){Z=ac.7H(" ");if(Z.1I>1){ac=Z}}if(M.1P(ac)=="4b"){M.$(ac).36(13.1N.2E(13,ab));1a 13}ac=T[ac]||ac;if(!ac||M.1P(ac)!="1O"||!aa||!aa[ac]){1a 13}Y=aa[ac]||[];1S(X=0;X<Y.1I;X++){W=Y[X];if(-2N==ab||!!ab&&ab.$9C===W.cc){ad=Y.9X(X--,1)}}if(0===Y.1I){if(M.1u.1w[ac]){M.1u.1w[ac].1K.2P.2b(13)}1k{13[M.bk](M.9q+ac,Y.3j,1n)}4P aa[ac]}1a 13},2U:17(aa,ac){1c Z=M.3v.26.2b(13,"8l",{}),Y,W,X;aa=T[aa]||aa;if(!aa||M.1P(aa)!="1O"||!Z||!Z[aa]){1a 13}3x{ac=M.1X(ac||{},{1y:aa})}3R(ab){}if(2D===ac.2I){ac.2I=M.6q()}Y=Z[aa]||[];1S(X=0;X<Y.1I&&!(ac.62&&ac.62());X++){Y[X].fn.2b(13,ac)}},bt:17(X,W){1c aa=("9z"==X)?1n:1r,Z=13,Y;X=T[X]||X;if(!aa){M.3v.2U.2b(13,X);1a 13}if(Z===1m&&1m.9M&&!Z.aG){Z=1m.6k}if(1m.9M){Y=1m.9M(X);Y.5T(W,1r,1r)}1k{Y=1m.fz();Y.9R=X}if(1m.9M){Z.aG(Y)}1k{Z.fl("8f"+W,Y)}1a Y},bo:17(){1c X=M.3v.26.2b(13,"8l");if(!X){1a 13}1S(1c W in X){M.3v.1N.2b(13,W)}M.3v.2X.2b(13,"8l");1a 13}});(17(W){if("8j"===1m.8m){1a W.1e.7p.2y(1)}if(W.1e.3W&&W.1e.4q<fk){(17(){(W.$(["2f","8j"]).5F(1m.8m))?W.1e.7p():29.9N.2y(50)})()}1k{if(W.1e.4K&&W.1e.2n<9&&1j==1H){(17(){(W.$3x(17(){W.1e.49().g5("1M");1a 1r}))?W.1e.7p():29.9N.2y(50)})()}1k{W.3v.1C.2b(W.$(1m),"g4",W.1e.7p);W.3v.1C.2b(W.$(1j),"5X",W.1e.7p)}}})(S);M.3y=17(){1c aa=1h,X=M.$A(29);if("3M"==M.1P(X[0])){aa=X.6Q()}1c W=17(){1S(1c ad in 13){13[ad]=M.4a(13[ad])}if(13.57.$3I){13.$3I={};1c af=13.57.$3I;1S(1c ae in af){1c ac=af[ae];4r(M.1P(ac)){1B"17":13.$3I[ae]=M.3y.cy(13,ac);1G;1B"8O":13.$3I[ae]=M.4a(ac);1G;1B"4b":13.$3I[ae]=M.4a(ac);1G}}}1c ab=(13.3J)?13.3J.6i(13,29):13;4P 13.bT;1a ab};if(!W.2w.3J){W.2w.3J=M.$F}if(aa){1c Z=17(){};Z.2w=aa.2w;W.2w=1t Z;W.$3I={};1S(1c Y in aa.2w){W.$3I[Y]=aa.2w[Y]}}1k{W.$3I=1h}W.57=M.3y;W.2w.57=W;M.1X(W.2w,X[0]);M.1X(W,{$4G:"3M"});1a W};S.3y.cy=17(W,X){1a 17(){1c Z=13.bT;1c Y=X.6i(W,29);1a Y}};(17(Z){1c Y=Z.$;1c W=5,X=aZ;Z.1u.1w.1Q=1t Z.3y(Z.1X(Z.1u.1w,{1y:"1Q",3J:17(ac,ab){1c aa=ab.6j();13.x=aa.x;13.y=aa.y;13.2O=ab.2O;13.2K=ab.2K;13.2I=ab.2I;13.2o=ab.6D();13.4e=ac;13.4d(ab)}}));Z.1u.1w.1Q.1K={1v:{7e:X,2o:1},5m:17(aa){13.34("1z:1Q:1v",Z.1X(Z.4a(Z.1u.1w.1Q.1K.1v),aa||{}));13.1C("6B",Z.1u.1w.1Q.1K.3j,1);13.1C("5Y",Z.1u.1w.1Q.1K.3j,1);13.1C("2W",Z.1u.1w.1Q.1K.bz,1);if(Z.1e.4K&&Z.1e.2n<9){13.1C("9a",Z.1u.1w.1Q.1K.3j,1)}},2P:17(){13.1N("6B",Z.1u.1w.1Q.1K.3j);13.1N("5Y",Z.1u.1w.1Q.1K.3j);13.1N("2W",Z.1u.1w.1Q.1K.bz);if(Z.1e.4K&&Z.1e.2n<9){13.1N("9a",Z.1u.1w.1Q.1K.3j)}},bz:17(aa){aa.3z()},3j:17(ad){1c ac,aa,ab;aa=13.26("1z:1Q:1v");if(ad.1y!="9a"&&ad.6D()!=aa.2o){1a}if(13.26("1z:1Q:ax")){13.2X("1z:1Q:ax");1a}if("6B"==ad.1y){ac=1t Z.1u.1w.1Q(13,ad);13.34("1z:1Q:9y",ac)}1k{if("5Y"==ad.1y){ac=13.26("1z:1Q:9y");if(!ac){1a}ab=ad.6j();13.2X("1z:1Q:9y");ac.4d(ad);if(ad.2I-ac.2I<=aa.7e&&1o.8z(1o.4z(ab.x-ac.x,2)+1o.4z(ab.y-ac.y,2))<=W){13.2U("1Q",ac)}1m.2U("5Y",ad)}1k{if(ad.1y=="9a"){ac=1t Z.1u.1w.1Q(13,ad);13.2U("1Q",ac)}}}}}})(S);(17(X){1c W=X.$;X.1u.1w.2J=1t X.3y(X.1X(X.1u.1w,{1y:"2J",2m:"3E",6l:1n,3J:17(ab,aa,Z){1c Y=aa.6j();13.x=Y.x;13.y=Y.y;13.2O=aa.2O;13.2K=aa.2K;13.2I=aa.2I;13.2o=aa.6D();13.4e=ab;13.4d(aa);13.2m=Z}}));X.1u.1w.2J.1K={5m:17(){1c Z=X.1u.1w.2J.1K.cu.2E(13),Y=X.1u.1w.2J.1K.92.2E(13);13.1C("6B",X.1u.1w.2J.1K.bG,1);13.1C("5Y",X.1u.1w.2J.1K.92,1);1m.1C("7E",Z,1);1m.1C("5Y",Y,1);13.34("1z:2J:4t:1m:5s",Z);13.34("1z:2J:4t:1m:7j",Y)},2P:17(){13.1N("6B",X.1u.1w.2J.1K.bG);13.1N("5Y",X.1u.1w.2J.1K.92);W(1m).1N("7E",13.26("1z:2J:4t:1m:5s")||X.$F);W(1m).1N("5Y",13.26("1z:2J:4t:1m:7j")||X.$F);13.2X("1z:2J:4t:1m:5s");13.2X("1z:2J:4t:1m:7j")},bG:17(Z){1c Y;if(1!=Z.6D()){1a}Z.3z();Y=1t X.1u.1w.2J(13,Z,"3E");13.34("1z:2J:3E",Y)},92:17(Z){1c Y;Y=13.26("1z:2J:3E");if(!Y){1a}Z.3z();Y=1t X.1u.1w.2J(13,Z,"9I");13.2X("1z:2J:3E");13.2U("2J",Y)},cu:17(Z){1c Y;Y=13.26("1z:2J:3E");if(!Y){1a}Z.3z();if(!Y.6l){Y.6l=1r;13.2U("2J",Y)}Y=1t X.1u.1w.2J(13,Z,"cs");13.2U("2J",Y)}}})(S);(17(X){1c W=X.$;X.1u.1w.4f=1t X.3y(X.1X(X.1u.1w,{1y:"4f",7d:1n,73:1h,3J:17(aa,Z){1c Y=Z.6j();13.x=Y.x;13.y=Y.y;13.2O=Z.2O;13.2K=Z.2K;13.2I=Z.2I;13.2o=Z.6D();13.4e=aa;13.4d(Z)}}));X.1u.1w.4f.1K={1v:{7e:7s},5m:17(Y){13.34("1z:4f:1v",X.1X(X.4a(X.1u.1w.4f.1K.1v),Y||{}));13.1C("1Q",X.1u.1w.4f.1K.3j,1)},2P:17(){13.1N("1Q",X.1u.1w.4f.1K.3j)},3j:17(aa){1c Z,Y;Z=13.26("1z:4f:1z");Y=13.26("1z:4f:1v");if(!Z){Z=1t X.1u.1w.4f(13,aa);Z.73=4D(17(){Z.7d=1r;aa.62=X.$1n;13.2U("1Q",aa);13.2X("1z:4f:1z")}.1E(13),Y.7e+10);13.34("1z:4f:1z",Z);aa.4I()}1k{3P(Z.73);13.2X("1z:4f:1z");if(!Z.7d){Z.4d(aa);aa.4I().2a();13.2U("4f",Z)}1k{}}}}})(S);(17(ac){1c ab=ac.$;17 W(ad){1a ad.2k?(("3A"===ad.2k||ad.59===ad.2k)&&ad.9Y):1===ad.2C.1I&&(ad.6d.1I?ad.6d[0].3D==ad.2C[0].3D:1r)}17 Y(ad){if(ad.2k){1a("3A"===ad.2k||ad.59===ad.2k)?ad.9J:1h}1k{1a ad.2C[0].3D}}17 Z(ad){if(ad.2k){1a("3A"===ad.2k||ad.59===ad.2k)?ad:1h}1k{1a ad.2C[0]}}ac.1u.1w.21=1t ac.3y(ac.1X(ac.1u.1w,{1y:"21",id:1h,3J:17(ae,ad){1c af=Z(ad);13.id=af.9J||af.3D;13.x=af.5n;13.y=af.5o;13.5n=af.5n;13.5o=af.5o;13.2O=af.2O;13.2K=af.2K;13.2I=ad.2I;13.2o=0;13.4e=ae;13.4d(ad)}}));1c X=10,aa=7s;ac.1u.1w.21.1K={5m:17(ad){13.1C(["51",1j.2H.3b?"7Q":"7R"],ac.1u.1w.21.1K.72,1);13.1C(["5R",1j.2H.3b?"6o":"6v"],ac.1u.1w.21.1K.6T,1);13.1C("2W",ac.1u.1w.21.1K.az,1)},2P:17(){13.1N(["51",1j.2H.3b?"7Q":"7R"],ac.1u.1w.21.1K.72);13.1N(["5R",1j.2H.3b?"6o":"6v"],ac.1u.1w.21.1K.6T);13.1N("2W",ac.1u.1w.21.1K.az)},az:17(ad){ad.3z()},72:17(ad){if(!W(ad)){13.2X("1z:21:1z");1a}13.34("1z:21:1z",1t ac.1u.1w.21(13,ad));13.34("1z:1Q:ax",1r)},6T:17(ag){1c ae=ac.6q(),af=13.26("1z:21:1z"),ad=13.26("1z:21:1v");if(!af||!W(ag)){1a}13.2X("1z:21:1z");if(af.id==Y(ag)&&ag.2I-af.2I<=aa&&1o.8z(1o.4z(Z(ag).5n-af.x,2)+1o.4z(Z(ag).5o-af.y,2))<=X){13.2X("1z:1Q:9y");ag.2a();af.4d(ag);13.2U("21",af)}}}})(S);M.1u.1w.3q=1t M.3y(M.1X(M.1u.1w,{1y:"3q",7d:1n,73:1h,3J:17(X,W){13.x=W.x;13.y=W.y;13.2O=W.2O;13.2K=W.2K;13.2I=W.2I;13.2o=0;13.4e=X;13.4d(W)}}));M.1u.1w.3q.1K={1v:{7e:aZ},5m:17(W){13.34("1z:3q:1v",M.1X(M.4a(M.1u.1w.3q.1K.1v),W||{}));13.1C("21",M.1u.1w.3q.1K.3j,1)},2P:17(){13.1N("21",M.1u.1w.3q.1K.3j)},3j:17(Y){1c X,W;X=13.26("1z:3q:1z");W=13.26("1z:3q:1v");if(!X){X=1t M.1u.1w.3q(13,Y);X.73=4D(17(){X.7d=1r;Y.62=M.$1n;13.2U("21",Y)}.1E(13),W.7e+10);13.34("1z:3q:1z",X);Y.4I()}1k{3P(X.73);13.2X("1z:3q:1z");if(!X.7d){X.4d(Y);Y.4I().2a();13.2U("3q",X)}1k{}}}};(17(ab){1c aa=ab.$;17 W(ac){1a ac.2k?(("3A"===ac.2k||ac.59===ac.2k)&&ac.9Y):1===ac.2C.1I&&(ac.6d.1I?ac.6d[0].3D==ac.2C[0].3D:1r)}17 Y(ac){if(ac.2k){1a("3A"===ac.2k||ac.59===ac.2k)?ac.9J:1h}1k{1a ac.2C[0].3D}}17 Z(ac){if(ac.2k){1a("3A"===ac.2k||ac.59===ac.2k)?ac:1h}1k{1a ac.2C[0]}}1c X=10;ab.1u.1w.2p=1t ab.3y(ab.1X(ab.1u.1w,{1y:"2p",2m:"3E",id:1h,6l:1n,3J:17(ae,ad,ac){1c af=Z(ad);13.id=af.9J||af.3D;13.2O=af.2O;13.2K=af.2K;13.5n=af.5n;13.5o=af.5o;13.x=af.5n;13.y=af.5o;13.2I=ad.2I;13.2o=0;13.4e=ae;13.4d(ad);13.2m=ac}}));ab.1u.1w.2p.1K={5m:17(){1c ad=ab.1u.1w.2p.1K.9G.1E(13),ac=ab.1u.1w.2p.1K.6T.1E(13);13.1C(["51",1j.2H.3b?"7Q":"7R"],ab.1u.1w.2p.1K.72,1);13.1C(["5R",1j.2H.3b?"6o":"6v"],ab.1u.1w.2p.1K.6T,1);13.1C(["7N",1j.2H.3b?"6r":"7h"],ab.1u.1w.2p.1K.9G,1);13.34("1z:2p:4t:1m:5s",ad);13.34("1z:2p:4t:1m:7j",ac);aa(1m).1C(1j.2H.3b?"6r":"7h",ad,1);aa(1m).1C(1j.2H.3b?"6o":"6v",ac,1)},2P:17(){13.1N(["51",1j.2H.3b?"7Q":"7R"],ab.1u.1w.2p.1K.72);13.1N(["5R",1j.2H.3b?"6o":"6v"],ab.1u.1w.2p.1K.6T);13.1N(["7N",1j.2H.3b?"6r":"7h"],ab.1u.1w.2p.1K.9G);aa(1m).1N(1j.2H.3b?"6r":"7h",13.26("1z:2p:4t:1m:5s")||ab.$F,1);aa(1m).1N(1j.2H.3b?"6o":"6v",13.26("1z:2p:4t:1m:7j")||ab.$F,1);13.2X("1z:2p:4t:1m:5s");13.2X("1z:2p:4t:1m:7j")},72:17(ad){1c ac;if(!W(ad)){1a}ac=1t ab.1u.1w.2p(13,ad,"3E");13.34("1z:2p:3E",ac)},6T:17(ad){1c ac;ac=13.26("1z:2p:3E");if(!ac||!ac.6l||ac.id!=Y(ad)){1a}ac=1t ab.1u.1w.2p(13,ad,"9I");13.2X("1z:2p:3E");13.2U("2p",ac)},9G:17(ad){1c ac;ac=13.26("1z:2p:3E");if(!ac||!W(ad)){1a}if(ac.id!=Y(ad)){13.2X("1z:2p:3E");1a}if(!ac.6l&&1o.8z(1o.4z(Z(ad).5n-ac.x,2)+1o.4z(Z(ad).5o-ac.y,2))>X){ac.6l=1r;13.2U("2p",ac)}if(!ac.6l){1a}ac=1t ab.1u.1w.2p(13,ad,"cs");13.2U("2p",ac)}}})(S);M.1u.1w.3Z=1t M.3y(M.1X(M.1u.1w,{1y:"3Z",4c:1,a7:1,cq:1,2m:"iH",3J:17(X,W){13.2I=W.2I;13.2o=0;13.4e=X;13.x=W.4o[0].2O+(W.4o[1].2O-W.4o[0].2O)/2;13.y=W.4o[0].2K+(W.4o[1].2K-W.4o[0].2K)/2;13.ct=1o.8z(1o.4z(W.4o[0].2O-W.4o[1].2O,2)+1o.4z(W.4o[0].2K-W.4o[1].2K,2));13.4d(W)},40:17(W){1c X;13.2m="jW";if(W.2C[0].3D!=13.5G[0].4o[0].3D||W.2C[1].3D!=13.5G[0].4o[1].3D){1a}X=1o.8z(1o.4z(W.2C[0].2O-W.2C[1].2O,2)+1o.4z(W.2C[0].2K-W.2C[1].2K,2));13.a7=13.4c;13.4c=X/13.ct;13.cq=13.4c/13.a7;13.x=W.2C[0].2O+(W.2C[1].2O-W.2C[0].2O)/2;13.y=W.2C[0].2K+(W.2C[1].2K-W.2C[0].2K)/2;13.4d(W)}}));M.1u.1w.3Z.1K={5m:17(){13.1C("51",M.1u.1w.3Z.1K.a1,1);13.1C("5R",M.1u.1w.3Z.1K.aJ,1);13.1C("7N",M.1u.1w.3Z.1K.aD,1)},2P:17(){13.1N("51",M.1u.1w.3Z.1K.a1);13.1N("5R",M.1u.1w.3Z.1K.aJ);13.1N("7N",M.1u.1w.3Z.1K.aD)},a1:17(X){1c W;if(X.4o.1I!=2){1a}X.3z();W=1t M.1u.1w.3Z(13,X);13.34("1z:3Z:1z",W)},aJ:17(X){1c W;W=13.26("1z:3Z:1z");if(!W){1a}X.3z();13.2X("1z:3Z:1z")},aD:17(X){1c W;W=13.26("1z:3Z:1z");if(!W){1a}X.3z();W.40(X);13.2U("3Z",W)}};(17(ab){1c Z=ab.$;ab.1u.1w.4x=1t ab.3y(ab.1X(ab.1u.1w,{1y:"4x",3J:17(ah,ag,aj,ad,ac,ai,ae){1c af=ag.6j();13.x=af.x;13.y=af.y;13.2I=ag.2I;13.4e=ah;13.jX=aj||0;13.as=ad||0;13.7V=ac||0;13.jY=ai||0;13.jV=ae||0;13.bD=ag.bD||0;13.aX=1n;13.4d(ag)}}));1c aa,X;17 W(){aa=1h}17 Y(ac,ad){1a(ac>50)||(1===ad&&!("8Y"==ab.1e.4N&&ac<1))||(0===ac%12)||(0==ac%4.jU)}ab.1u.1w.4x.1K={9R:"jQ"in 1m||ab.1e.2n>8?"jR":"jS",5m:17(){13.1C(ab.1u.1w.4x.1K.9R,ab.1u.1w.4x.1K.3j,1)},2P:17(){13.1N(ab.1u.1w.4x.1K.9R,ab.1u.1w.4x.1K.3j,1)},3j:17(ah){1c ai=0,af=0,ad=0,ac=0,ag,ae;if(ah.cp){ad=ah.cp*-1}if(ah.cm!==2D){ad=ah.cm}if(ah.cn!==2D){ad=ah.cn}if(ah.co!==2D){af=ah.co*-1}if(ah.7V){ad=-1*ah.7V}if(ah.as){af=ah.as}if(0===ad&&0===af){1a}ai=0===ad?af:ad;ac=1o.1V(1o.3w(ad),1o.3w(af));if(!aa||ac<aa){aa=ac}ag=ai>0?"6e":"3N";ai=1o[ag](ai/aa);af=1o[ag](af/aa);ad=1o[ag](ad/aa);if(X){3P(X)}X=4D(W,7s);ae=1t ab.1u.1w.4x(13,ah,ai,af,ad,0,aa);ae.aX=Y(aa,ah.bD||0);13.2U("4x",ae)}}})(S);M.8Y=M.$(1j);M.cv=M.$(1m);1a S})();(17(I){if(!I){67"6I 6H 6G"}1c H=I.$;1c G=1j.jT||1j.jZ||1h;w.a6=1t I.3y({24:1h,2i:1n,1v:{9j:I.$F,6c:I.$F,by:I.$F,5S:I.$F,7a:I.$F,cw:I.$F,9P:1n,cA:1r},1D:1h,8i:1h,bu:0,7k:{9j:17(J){if(J.4e&&(7s===J.4e.9W||cx===J.4e.9W)&&J.k0){13.1v.9j.1E(1h,(J.2f-(13.1v.cA?13.bu:0))/J.k7).2y(1);13.bu=J.2f}},6c:17(J){if(J){H(J).2a()}13.8h();if(13.2i){1a}13.2i=1r;13.81();!13.1v.9P&&13.1v.9j.1E(1h,1).2y(1);13.1v.6c.1E(1h,13).2y(1);13.1v.7a.1E(1h,13).2y(1)},by:17(J){if(J){H(J).2a()}13.8h();13.2i=1n;13.81();13.1v.by.1E(1h,13).2y(1);13.1v.7a.1E(1h,13).2y(1)},5S:17(J){if(J){H(J).2a()}13.8h();13.2i=1n;13.81();13.1v.5S.1E(1h,13).2y(1);13.1v.7a.1E(1h,13).2y(1)}},9L:17(){H(["5X","bM","cz"]).36(17(J){13.24.1C(J,13.7k["8f"+J].2E(13).cB(1))},13)},8h:17(){if(13.8i){3x{3P(13.8i)}3R(J){}13.8i=1h}H(["5X","bM","cz"]).36(17(K){13.24.1N(K)},13)},81:17(){13.1F();if(13.24.26("1t")){1c J=13.24.4H;13.24.2P().2X("1t").1x({2e:"k8",1H:"2t"});J.5i()}},ck:17(K){1c L=1t 8K(),J;H(["bM","k9"]).36(17(M){L["8f"+M]=H(17(N){13.7k["8f"+M].2b(13,N)}).1E(13)},13);L.5S=H(17(){13.1v.cw.1E(1h,13).2y(1);13.1v.9P=1n;13.9L();13.24.1U=K}).1E(13);L.6c=H(17(){if(7s!==L.9W&&cx!==L.9W){13.7k.5S.2b(13);1a}J=L.k6;13.9L();if(G&&!I.1e.4K&&!("8R"===I.1e.4N&&I.1e.4q<k5)){13.24.3T("1U",G.k1(J))}1k{13.24.1U=K}}).1E(13);L.a4("k2",K);L.k3="k4";L.jP()},3J:17(K,J){13.1v=I.1X(13.1v,J);13.24=H(K)||I.$1t("24",{},{"1V-1f":"3k","1V-1g":"3k"}).1Z(I.$1t("2Y").1A("3p-at-24").1x({2e:"5C",1H:-dA,1f:10,1g:10,5d:"3f"}).1Z(1m.3H)).34("1t",1r);if(I.1e.2L.cl&&13.1v.9P&&"1O"==I.1P(K)){13.ck(K);1a}1c L=17(){if(13.ca()){13.7k.6c.2b(13)}1k{13.7k.5S.2b(13)}L=1h}.1E(13);13.9L();if("1O"==I.1P(K)){13.24.1U=K}1k{if(I.1e.4K&&5==I.1e.4q&&I.1e.2n<9){13.24.c9=17(){if(/2f|8j/.3e(13.24.8m)){13.24.c9=1h;L&&L()}}.1E(13)}13.24.1U=K.2q("1U")}13.24&&13.24.8j&&L&&(13.8i=L.2y(2N))},jO:17(){13.8h();13.81();13.2i=1n;1a 13},ca:17(){1c J=13.24;1a(J.9r)?(J.9r>0):(J.8m)?("8j"==J.8m):J.1f>0},1F:17(){1a 13.1D||(13.1D={1f:13.24.9r||13.24.1f,1g:13.24.c1||13.24.1g})}})})(w);(17(H){if(!H){67"6I 6H 6G"}if(H.5w){1a}1c G=H.$;H.5w=1t H.3y({3J:17(J,I){1c K;13.el=H.$(J);13.1v=H.1X(13.1v,I);13.5t=1n;13.7f=13.br;K=H.5w.7P[13.1v.1Y]||13.1v.1Y;if("17"===H.1P(K)){13.7f=K}1k{13.5J=13.8w(K)||13.8w("66")}if("1O"==H.1P(13.1v.71)){13.1v.71="jz"===13.1v.71?6m:5D(13.1v.71)||1}},1v:{c3:60,5z:8g,1Y:"66",71:1,4U:"jA",c8:H.$F,7m:H.$F,bR:H.$F,c6:H.$F,9A:1n,jB:1n},4g:1h,5J:1h,7f:1h,jC:17(I){13.1v.1Y=I;I=H.5w.7P[13.1v.1Y]||13.1v.1Y;if("17"===H.1P(I)){13.7f=I}1k{13.7f=13.br;13.5J=13.8w(I)||13.8w("66")}},4V:17(K){1c I=/\\%$/,J;13.4g=K;13.bi=0;13.2m=0;13.jy=0;13.8T={};13.7y="7y"===13.1v.4U||"7y-4p"===13.1v.4U;13.7w="7w"===13.1v.4U||"7w-4p"===13.1v.4U;1S(J in 13.4g){I.3e(13.4g[J][0])&&(13.8T[J]=1r);if("4p"===13.1v.4U||"7y-4p"===13.1v.4U||"7w-4p"===13.1v.4U){13.4g[J].4p()}}13.bm=H.6q();13.c5=13.bm+13.1v.5z;13.1v.c8.2b();if(0===13.1v.5z){13.6p(1);13.1v.7m.2b()}1k{13.9H=13.c4.1E(13);if(!13.1v.9A&&H.1e.2L.4Y){13.5t=H.1e.4Y.2b(1j,13.9H)}1k{13.5t=13.9H.c7(1o.5y(jx/13.1v.c3))}}1a 13},bn:17(){if(13.5t){if(!13.1v.9A&&H.1e.2L.4Y&&H.1e.9s){H.1e.9s.2b(1j,13.5t)}1k{dM(13.5t)}13.5t=1n}},2a:17(I){I=H.3o(I)?I:1n;13.bn();if(I){13.6p(1);13.1v.7m.2y(10)}1a 13},b9:17(K,J,I){K=2F(K);J=2F(J);1a(J-K)*I+K},c4:17(){1c J=H.6q(),I=(J-13.bm)/13.1v.5z,K=1o.6e(I);if(J>=13.c5&&K>=13.1v.71){13.bn();13.6p(1);13.1v.7m.2y(10);1a 13}if(13.7y&&13.bi<K){1S(1c L in 13.4g){13.4g[L].4p()}}13.bi=K;if(!13.1v.9A&&H.1e.2L.4Y){13.5t=H.1e.4Y.2b(1j,13.9H)}13.6p((13.7w?K:0)+13.7f(I%1))},6p:17(I){1c J={},L=I;1S(1c K in 13.4g){if("2r"===K){J[K]=1o.5y(13.b9(13.4g[K][0],13.4g[K][1],I)*2N)/2N}1k{J[K]=13.b9(13.4g[K][0],13.4g[K][1],I);13.8T[K]&&(J[K]+="%")}}13.1v.bR(J,13.el);13.7g(J);13.1v.c6(J,13.el)},7g:17(I){1a 13.el.1x(I)},8w:17(I){1c J,K=1h;if("1O"!==H.1P(I)){1a 1h}4r(I){1B"8D":K=G([0,0,1,1]);1G;1B"66":K=G([0.25,0.1,0.25,1]);1G;1B"66-in":K=G([0.42,0,1,1]);1G;1B"66-cb":K=G([0,0,0.58,1]);1G;1B"66-in-cb":K=G([0.42,0,0.58,1]);1G;1B"d1":K=G([0.47,0,0.jt,0.ju]);1G;1B"d2":K=G([0.39,0.jv,0.kb,1]);1G;1B"jw":K=G([0.jD,0.aQ,0.55,0.95]);1G;1B"d5":K=G([0.55,0.jE,0.68,0.53]);1G;1B"d3":K=G([0.25,0.46,0.45,0.94]);1G;1B"jL":K=G([0.jM,0.cf,0.jN,0.jK]);1G;1B"cU":K=G([0.55,0.jJ,0.jF,0.19]);1G;1B"cJ":K=G([0.jG,0.61,0.cg,1]);1G;1B"jI":K=G([0.ka,0.9V,0.cg,1]);1G;1B"kf":K=G([0.e1,0.cf,0.ed,0.22]);1G;1B"kB":K=G([0.cV,0.84,0.44,1]);1G;1B"kA":K=G([0.77,0,0.88,1]);1G;1B"kz":K=G([0.kC,0.aQ,0.kx,0.ki]);1G;1B"kj":K=G([0.23,1,0.32,1]);1G;1B"kk":K=G([0.86,0,0.kl,1]);1G;1B"d7":K=G([0.95,0.aQ,0.kh,0.kg]);1G;1B"d6":K=G([0.19,1,0.22,1]);1G;1B"kd":K=G([1,0,0,1]);1G;1B"ke":K=G([0.6,0.ky,0.98,0.km]);1G;1B"kn":K=G([0.ku,0.82,0.cV,1]);1G;1B"kw":K=G([0.kt,0.ks,0.15,0.86]);1G;1B"cI":K=G([0.6,-0.28,0.aW,0.9V]);1G;1B"cE":K=G([0.88,0.9c,0.32,1.ay]);1G;1B"kp":K=G([0.68,-0.55,0.kq,1.55]);1G;1R:I=I.4v(/\\s/g,"");if(I.3s(/^4S-4T\\((?:-?[0-9\\.]{0,}[0-9]{1,},){3}(?:-?[0-9\\.]{0,}[0-9]{1,})\\)$/)){K=I.4v(/^4S-4T\\s*\\(|\\)$/g,"").7H(",");1S(J=K.1I-1;J>=0;J--){K[J]=2F(K[J])}}}1a G(K)},br:17(U){1c I=0,T=0,Q=0,V=0,S=0,O=0,P=13.1v.5z;17 N(W){1a((I*W+T)*W+Q)*W}17 M(W){1a((V*W+S)*W+O)*W}17 K(W){1a(3*I*W+2*T)*W+Q}17 R(W){1a 1/(7s*W)}17 J(W,X){1a M(L(W,X))}17 L(ad,ae){1c ac,ab,aa,X,W,Z;17 Y(af){if(af>=0){1a af}1k{1a 0-af}}1S(aa=ad,Z=0;Z<8;Z++){X=N(aa)-ad;if(Y(X)<ae){1a aa}W=K(aa);if(Y(W)<0.be){1G}aa=aa-X/W}ac=0;ab=1;aa=ad;if(aa<ac){1a ac}if(aa>ab){1a ab}5l(ac<ab){X=N(aa);if(Y(X-ad)<ae){1a aa}if(ad>X){ac=aa}1k{ab=aa}aa=(ab-ac)*0.5+ac}1a aa}Q=3*13.5J[0];T=3*(13.5J[2]-13.5J[0])-Q;I=1-Q-T;O=3*13.5J[1];S=3*(13.5J[3]-13.5J[1])-O;V=1-O-S;1a J(U,R(P))}});H.5w.7P={8D:"8D",jr:"d1",ir:"d2",is:"d7",it:"d6",iu:"d5",iq:"d3",io:"cU",ij:"cJ",ik:"cI",il:"cE",cF:17(J,I){I=I||[];1a 1o.4z(2,10*--J)*1o.eB(20*J*1o.eG*(I[0]||1)/3)},im:17(J,I){1a 1-H.5w.7P.cF(1-J,I)},cL:17(K){1S(1c J=0,I=1;1;J+=I,I/=2){if(K>=(7-4*J)/11){1a I*I-1o.4z((11-6*J-11*K)/4,2)}}},iv:17(I){1a 1-H.5w.7P.cL(1-I)},3k:17(I){1a 0}}})(w);(17(H){if(!H){67"6I 6H 6G"}if(H.8E){1a}1c G=H.$;H.8E=1t H.3y(H.5w,{3J:17(I,J){13.an=I;13.1v=H.1X(13.1v,J);13.5t=1n;13.$3I.3J()},4V:17(M){1c I=/\\%$/,L,K,J=M.1I;13.aq=M;13.8W=1t 69(J);1S(K=0;K<J;K++){13.8W[K]={};1S(L in M[K]){I.3e(M[K][L][0])&&(13.8W[K][L]=1r);if("4p"===13.1v.4U||"7y-4p"===13.1v.4U||"7w-4p"===13.1v.4U){13.aq[K][L].4p()}}}13.$3I.4V([]);1a 13},6p:17(I){1S(1c J=0;J<13.an.1I;J++){13.el=H.$(13.an[J]);13.4g=13.aq[J];13.8T=13.8W[J];13.$3I.6p(I)}}})})(w);(17(H){if(!H){67"6I 6H 6G";1a}if(H.ar){1a}1c G=H.$;H.ar=17(J,K){1c I=13.74=H.$1t("2Y",1h,{2e:"5C","z-8J":cM}).1A("iD");H.$(J).1C("7x",17(){I.1Z(1m.3H)});H.$(J).1C("8k",17(){I.2P()});H.$(J).1C("7E",17(P){1c R=20,O=H.$(P).6j(),N=I.1F(),M=H.$(1j).1F(),Q=H.$(1j).6X();17 L(U,S,T){1a(T<(U-S)/2)?T:((T>(U+S)/2)?(T-S):(U-S)/2)}I.1x({1M:Q.x+L(M.1f,N.1f+2*R,O.x-Q.x)+R,1H:Q.y+L(M.1g,N.1g+2*R,O.y-Q.y)+R})});13.9T(K)};H.ar.2w.9T=17(I){13.74.4h&&13.74.ak(13.74.4h);13.74.3n(1m.bx(I))}})(w);(17(H){if(!H){67"6I 6H 6G";1a}if(H.iE){1a}1c G=H.$;H.8M=17(L,K,J,I){13.8G=1h;13.52=H.$1t("bQ",1h,{2e:"5C","z-8J":cM,5a:"3f",2r:0.8}).1A(I||"").1Z(J||1m.3H);13.cR(L);13.5q(K)};H.8M.2w.5q=17(I){13.52.5q();13.8G=13.4i.1E(13).2y(H.aF(I,iF))};H.8M.2w.4i=17(I){3P(13.8G);13.8G=1h;if(13.52&&!13.av){13.av=1t w.5w(13.52,{5z:H.aF(I,eD),7m:17(){13.52.5i();4P 13.52;13.av=1h}.1E(13)}).4V({2r:[13.52.3K("2r"),0]})}};H.8M.2w.cR=17(I){13.52.4h&&13.74.ak(13.52.4h);13.52.3n(1m.bx(I))}})(w);(17(H){if(!H){67"6I 6H 6G"}if(H.7c){1a}1c K=H.$,G=1h,O={"3u":1,4b:2,63:3,"17":4,1O:2N},I={"3u":17(R,Q,P){if("3u"!=H.1P(Q)){if(P||"1O"!=H.1P(Q)){1a 1n}1k{if(!/^(1r|1n)$/.3e(Q)){1a 1n}1k{Q=Q.cS()}}}if(R.41("2u")&&!K(R["2u"]).5F(Q)){1a 1n}G=Q;1a 1r},1O:17(R,Q,P){if("1O"!==H.1P(Q)){1a 1n}1k{if(R.41("2u")&&!K(R["2u"]).5F(Q)){1a 1n}1k{G=""+Q;1a 1r}}},63:17(S,R,Q){1c P=1n,U=/%$/,T=(H.1P(R)=="1O"&&U.3e(R));if(Q&&!"63"==93 R){1a 1n}R=2F(R);if(9x(R)){1a 1n}if(9x(S.7r)){S.7r=cQ.iC}if(9x(S.aC)){S.aC=cQ.js}if(S.41("2u")&&!K(S["2u"]).5F(R)){1a 1n}if(S.7r>R||R>S.aC){1a 1n}G=T?(R+"%"):R;1a 1r},4b:17(S,Q,P){if("1O"===H.1P(Q)){3x{Q=1j.iB.ix(Q)}3R(R){1a 1n}}if(H.1P(Q)==="4b"){G=Q;1a 1r}1k{1a 1n}},"17":17(R,Q,P){if(H.1P(Q)==="17"){G=Q;1a 1r}1k{1a 1n}}},J=17(U,T,Q){1c S;S=U.41("33")?U.33:[U];if("4b"!=H.1P(S)){1a 1n}1S(1c R=0,P=S.1I-1;R<=P;R++){if(I[S[R].1y](S[R],T,Q)){1a 1r}}1a 1n},M=17(U){1c S,R,T,P,Q;if(U.41("33")){P=U.33.1I;1S(S=0;S<P;S++){1S(R=S+1;R<P;R++){if(O[U.33[S]["1y"]]>O[U.33[R].1y]){Q=U.33[S];U.33[S]=U.33[R];U.33[R]=Q}}}}1a U},N=17(S){1c R;R=S.41("33")?S.33:[S];if("4b"!=H.1P(R)){1a 1n}1S(1c Q=R.1I-1;Q>=0;Q--){if(!R[Q].1y||!O.41(R[Q].1y)){1a 1n}if(H.3o(R[Q]["2u"])){if("4b"!==H.1P(R[Q]["2u"])){1a 1n}1S(1c P=R[Q]["2u"].1I-1;P>=0;P--){if(!I[R[Q].1y]({1y:R[Q].1y},R[Q]["2u"][P],1r)){1a 1n}}}}if(S.41("1R")&&!J(S,S["1R"],1r)){1a 1n}1a 1r},L=17(P){13.4B={};13.1v={};13.cN(P)};H.1X(L.2w,{cN:17(R){1c Q,P,S;1S(Q in R){if(!R.41(Q)){7G}P=(Q+"").4X().5A();if(!13.4B.41(P)){13.4B[P]=M(R[Q]);if(!N(13.4B[P])){67"iy iz iA ii \'"+Q+"\' ih in "+R}13.1v[P]=2D}}},7g:17(Q,P){Q=(Q+"").4X().5A();if(H.1P(P)=="1O"){P=P.4X()}if(13.4B.41(Q)){G=P;if(J(13.4B[Q],P)){13.1v[Q]=G}G=1h}},eZ:17(P){P=(P+"").4X().5A();if(13.4B.41(P)){1a H.3o(13.1v[P])?13.1v[P]:13.4B[P]["1R"]}},7M:17(Q){1S(1c P in Q){13.7g(P,Q[P])}},eX:17(){1c Q=H.1X({},13.1v);1S(1c P in Q){if(2D===Q[P]&&2D!==13.4B[P]["1R"]){Q[P]=13.4B[P]["1R"]}}1a Q},8S:17(P){K(P.7H(";")).36(K(17(Q){Q=Q.7H(":");13.7g(Q.6Q().4X(),Q.6Y(":"))}).1E(13))},8X:17(P){P=(P+"").4X().5A();1a 13.4B.41(P)},hY:17(P){P=(P+"").4X().5A();1a 13.8X(P)&&H.3o(13.1v[P])},2P:17(P){P=(P+"").4X().5A();if(13.8X(P)){4P 13.1v[P];4P 13.4B[P]}}});H.7c=L}(w));(17(K){if(!K){67"6I 6H 6G";1a}1c J=K.$;if(K.8Z){1a}1c I="bU://bV.b1.b8/hZ/75",H="bU://bV.b1.b8/i0/i1";1c G=17(L){13.6t={};13.7i=J(L);13.7C=J(1m.9S(I,"75"));13.7C.3T("1f",13.7i.9r||13.7i.1f);13.7C.3T("1g",13.7i.c1||13.7i.1g);13.1i=J(1m.9S(I,"1i"));13.1i.hX(H,"6K",13.7i.2q("1U"));13.1i.3T("1f","2N%");13.1i.3T("1g","2N%");13.1i.1Z(13.7C)};G.2w.6C=17(){1a 13.7C};G.2w.5e=17(L){if(1o.5y(L)<1){1a}if(!13.6t.5e){13.6t.5e=J(1m.9S(I,"2V"));13.6t.5e.3T("id","bX");13.6t.5e.b5(J(1m.9S(I,"hW")).bK({"in":"hS",bZ:L}));13.6t.5e.1Z(13.7C);13.1i.3T("2V","2d(#bX)")}1k{13.6t.5e.4h.3T("bZ",L)}1a 13};K.8Z=G}(w));1c r=(17(I){1c H=I.$;1c G=17(K,J){13.3h={8a:"3p",3r:"7Z",2e:"2Q",1D:{hT:"2v",1f:"2t",1g:"2t"},hU:["1g","1f"]};13.3I=K;13.4u=1h;13.6S=1h;13.2G=1h;13.2M={};13.eF=[];13.5P=1h;13.aK=1h;13.5H=1h;13.3h=I.1X(13.3h,J);13.3g=13.3h.8a+"-aP";13.8n=13.3h.8a+"-6N";13.ec()};G.2w={ec:17(){13.4u=I.$1t("2Y").1A(13.3g).1A(13.3g+"-"+13.3h.3r).1x({5a:"3f"});13.6S=I.$1t("2Y").1A(13.3g+"-6S").1Z(13.4u);13.4u.1Z(13.3I);H(["4C","4y"]).36(17(J){13.2M[J]=I.$1t("2o").1A(13.3g+"-2o").1A(13.3g+"-2o-"+J).1Z(13.4u).1C("1Q 21",(17(L,K){H(L).5G[0].2a().4I();H(L).5c();13.5O(K)}).2E(13,J))}.1E(13));13.2M.4C.1A(13.3g+"-2o-4O");13.2G=I.$1t("hV").1C("1Q 21",17(J){J.2a()})},dS:17(K){1c J=I.$1t("i2").1A(13.8n).3n(K).1Z(13.2G);1t I.a6(K,{7a:13.9B.1E(13)});13.eF.38(J);1a J},dk:17(K){1c J=13.5P||13.2G.9u(13.8n+"-6L")[0];if(J){H(J).1T(13.8n+"-6L")}13.5P=H(K);if(!13.5P){1a}13.5P.1A(13.8n+"-6L");13.5O(13.5P)},bP:17(){if(13.6S!==13.2G.4H){H(13.2G).1Z(13.6S);13.eA();H(1j).1C("7t",13.5H=13.9B.1E(13));13.bP.1E(13).2y(1);1a}1c J=13.3I.1F();if(J.1g>0&&J.1g>J.1f){13.7O("4Q")}1k{13.7O("7Z")}13.9B();13.4u.1x({5a:""})},2a:17(){if(13.5H){H(1j).1N("7t",13.5H)}13.4u.5i()},5O:17(W,M){1c O={x:0,y:0},Z="4Q"==13.3h.3r?"1H":"1M",R="4Q"==13.3h.3r?"1g":"1f",N="4Q"==13.3h.3r?"y":"x",V=13.2G.4H.1F()[R],S=13.2G.4H.8b(),L=13.2G.1F()[R],U,J,Y,P,K,T,Q,X=[];if(13.aK){13.aK.2a()}1k{13.2G.1x("1Y",I.1e.7v+5W.79(32)+"6Z")}if(2D===M){M=8g}U=13.2G.8b();if("1O"==I.1P(W)){O[N]=("4y"==W)?1o.1V(U[Z]-S[Z]-V,V-L):1o.2h(U[Z]-S[Z]+V,0)}1k{if("5Z"==I.1P(W)){J=W.1F();Y=W.8b();O[N]=1o.2h(0,1o.1V(V-L,U[Z]+V/2-Y[Z]-J[R]/2))}1k{1a}}if(I.1e.5K&&"6y"==I.1e.4N||I.1e.2n&&I.1e.2n<10){if("1O"==I.1P(W)&&O[N]==U[Z]-S[Z]){U[Z]+=0===U[Z]-S[Z]?30:-30}O["7X-"+Z]=[((L<=V)?0:(U[Z]-S[Z])),O[N]];4P O.x;4P O.y;if(!13.bA){13.bA=1t I.8E([13.2G],{5z:eD})}X.38(O);13.bA.4V(X);Q=O["7X-"+Z][1]}1k{13.2G.1x({1Y:I.1e.7v+5W.79(32)+M+"7D 66",2g:"4m("+O.x+"2v, "+O.y+"2v, 0)"});Q=O[N]}if(Q>=0){13.2M.4C.1A(13.3g+"-2o-4O")}1k{13.2M.4C.1T(13.3g+"-2o-4O")}if(Q<=V-L){13.2M.4y.1A(13.3g+"-2o-4O")}1k{13.2M.4y.1T(13.3g+"-2o-4O")}Q=1h},eA:17(){1c L,K,M,T,S,V,N,R,Q,U,aa,X,Y,W={x:0,y:0},J,P,O=aZ,Z=17(ad){1c ac,ab=0;1S(ac=1.5;ac<=90;ac+=1.5){ab+=(ad*1o.eB(ac/1o.eG/2))}(T<0)&&(ab*=(-1));1a ab};S=H(17(ab){W={x:0,y:0};J="4Q"==13.3h.3r?"1H":"1M";P="4Q"==13.3h.3r?"1g":"1f";L="4Q"==13.3h.3r?"y":"x";X=13.2G.4H.1F()[P];aa=13.2G.1F()[P];M=X-aa;if(M>=0){1a}if(ab.2m=="3E"){if(2D===Y){Y=0}13.2G.3F("1Y",I.1e.7v+5W.79(32)+"e5");V=ab[L];Q=ab.y;R=ab.x;U=1n}1k{if("9I"==ab.2m){if(U){1a}N=Z(1o.3w(T));Y+=N;(Y<=M)&&(Y=M);(Y>=0)&&(Y=0);W[L]=Y;13.2G.3F("1Y",I.1e.7v+5W.79(32)+O+"7D  4S-4T(.0, .0, .0, 1)");13.2G.3F("2g","4m("+W.x+"2v, "+W.y+"2v, 5Q)");T=0}1k{if(U){1a}if("7Z"==13.3h.3r&&1o.3w(ab.x-R)>1o.3w(ab.y-Q)||"4Q"==13.3h.3r&&1o.3w(ab.x-R)<1o.3w(ab.y-Q)){ab.2a();T=ab[L]-V;Y+=T;W[L]=Y;13.2G.3F("2g","4m("+W.x+"2v, "+W.y+"2v, 5Q)");if(Y>=0){13.2M.4C.1A(13.3g+"-2o-4O")}1k{13.2M.4C.1T(13.3g+"-2o-4O")}if(Y<=M){13.2M.4y.1A(13.3g+"-2o-4O")}1k{13.2M.4y.1T(13.3g+"-2o-4O")}}1k{U=1r}}V=ab[L]}}).1E(13);13.2G.1C("2p",S)},9B:17(){1c M,L,J,K=13.3I.1F();if(K.1g>0&&K.1g>K.1f){13.7O("4Q")}1k{13.7O("7Z")}M="4Q"==13.3h.3r?"1g":"1f";L=13.2G.1F()[M];J=13.4u.1F()[M];if(L<=J){13.4u.1A("6E-2M");13.2G.3F("1Y","").1F();13.2G.3F("2g","4m(0,0,0)");13.2M.4C.1A(13.3g+"-2o-4O");13.2M.4y.1T(13.3g+"-2o-4O")}1k{13.4u.1T("6E-2M")}if(13.5P){13.5O(13.5P,0)}},7O:17(J){if("4Q"!==J&&"7Z"!==J||J==13.3h.3r){1a}13.4u.1T(13.3g+"-"+13.3h.3r);13.3h.3r=J;13.4u.1A(13.3g+"-"+13.3h.3r);13.2G.3F("1Y","3k").1F();13.2G.3F("2g","").3F("7X","")}};1a G})(w);1c h=y.$;if(!y.1e.87){y.1e.87=y.9Q("2g").9Z()}1c o={4A:{1y:"1O","2u":["2W","7z"],"1R":"7z"},3O:{33:[{1y:"1O","2u":["1l","2B","48","3L"],"1R":"1l"},{1y:"3u","2u":[1n]}],"1R":"1l"},eh:{33:[{1y:"1O","2u":["2t"]},{1y:"63",7r:1}],"1R":"2t"},dh:{33:[{1y:"1O","2u":["2t"]},{1y:"63",7r:1}],"1R":"2t"},91:{1y:"1O","1R":"2R"},ib:{1y:"63",7r:0,"1R":15},7F:{33:[{1y:"1O","2u":["2Q","1H","3L"],"1R":"3L"},{1y:"3u","2u":[1n]}],"1R":"3L"},2A:{33:[{1y:"1O","2u":["1j","dq","3L"]},{1y:"3u","2u":[1n]}],"1R":"1j"},65:{33:[{1y:"1O","2u":["1l","2B","3L"],"1R":"1l"},{1y:"3u","2u":[1n]}],"1R":"1l"},3V:{1y:"1O","2u":["2W","3i"],"1R":"2W"},3X:{1y:"3u","1R":1r},e8:{1y:"3u","1R":1r},3a:{33:[{1y:"1O","2u":["aM","3i","3L"]},{1y:"3u","2u":[1n]}],"1R":"aM"},e2:{1y:"3u","1R":1r},e0:{1y:"3u","1R":1n},9f:{1y:"3u","1R":1n},a2:{1y:"3u","1R":1r},dz:{1y:"3u","1R":1n},dp:{1y:"3u","1R":1r},aV:{1y:"1O","2u":["2W","7z"],"1R":"2W"},5x:{1y:"1O"},bO:{1y:"1O","1R":"ic 6F 1l"},8H:{1y:"1O","1R":"eJ 6F 1l"},8Q:{1y:"1O","1R":"eJ 6F 2A"},ig:{1y:"1O","1R":"i9"},i8:{1y:"1O","1R":"i4"},i5:{1y:"1O","1R":"i6"}};1c l={3O:{33:[{1y:"1O","2u":["1l","2B","3L"],"1R":"1l"},{1y:"3u","2u":[1n]}],"1R":"1l"},3V:{1y:"1O","2u":["2W"],"1R":"2W"},8Q:{1y:"1O","1R":"hR 6F 2A"},bO:{1y:"1O","1R":"i7 6F 1l"},8H:{1y:"1O","1R":"iG 21 6F 1l"}};1c n="8P",B="1q",b=20,z=["db","de","dP","dO","e7","dl"];1c t,p={},D=h([]),F,e=1j.jc||1,E,x=1r,f=y.1e.2L.8V?"4m(":"9d(",A=y.1e.2L.8V?",0)":")",m=1h;1c q=(17(){1c H,K,J,I,G;1a G})();17 v(I){1c H,G;H="";1S(G=0;G<I.1I;G++){H+=5W.79(14^I.ex(G))}1a H}17 i(I){1c H=[],G=1h;(I&&(G=h(I)))&&(H=D.2V(17(J){1a J.3U===G}));1a H.1I?H[0]:1h}17 a(I){1c H=h(1j).1F(),G=h(1j).6X();I=I||0;1a{1M:I,2R:H.1f-I,1H:I,2Q:H.1g-I,x:G.x,y:G.y}}17 c(G){1a(G.2k&&("3A"===G.2k||G.2k===G.59))||(/3A/i).3e(G.1y)}17 g(G){1a G.2k?(("3A"===G.2k||G.59===G.2k)&&G.9Y):1===G.2C.1I&&(G.6d.1I?G.6d[0].3D==G.2C[0].3D:1r)}17 s(){1c I=y.$A(29),H=I.6Q(),G=p[H];if(G){1S(1c J=0;J<G.1I;J++){G[J].6i(1h,I)}}}17 C(){1c K=29[0],G,J,H=[];3x{do{J=K.a9;if(/^[A-am-z]*$/.3e(J)){if(G=K.2q("id")){if(/^[A-am-z][-A-am-je-jf]*/.3e(G)){J+="#"+G}}H.38(J)}K=K.4H}5l(K&&K!==1m.6k);H=H.4p();y.76(H.6Y(" ")+"> .1q-8c > 24",{1f:"2N% !2s;"},"1q-et-6M",1r)}3R(I){}}17 u(){1c H=1h,I=1h,G=17(){1j.jb(1m.3H.80,1m.3H.7W);1j.aG(1t 1u("7t"))};I=f6(17(){1c L=1j.3r==90||1j.3r==-90,K=1j.4J,J=(L?f5.ja:f5.j6)*0.85;if((H==1h||H==1n)&&((L&&K<J)||(!L&&K<J))){H=1r;G()}1k{if((H==1h||H==1r)&&((L&&K>J)||(!L&&K>J))){H=1n;G()}}},j7);1a I}17 d(){y.76(".3p-3f-6S, .3p-at-24",{7A:"eS !2s","2h-1g":"0 !2s","2h-1f":"0 !2s","1V-1g":"3k !2s","1V-1f":"3k !2s",1f:"f4 !2s",1g:"f4 !2s",2e:"5C !2s",1H:"-a3 !2s",1M:"0 !2s",5d:"3f !2s","-3W-2g":"3k !2s",2g:"3k !2s","-3W-1Y":"3k !2s",1Y:"3k !2s"},"9o-8C-6M");y.76(".3p-at-24 24",{7A:"dC-eS !2s",3G:"0 !2s",78:"0 !2s","2h-1g":"0 !2s","2h-1f":"0 !2s","1V-1g":"3k !2s","1V-1f":"3k !2s","-3W-2g":"3k !2s",2g:"3k !2s","-3W-1Y":"3k !2s",1Y:"3k !2s"},"9o-8C-6M");if(y.1e.6u){y.76(".3t-3p .1q-2A .1q-2A-bg",{7A:"3k !2s"},"9o-8C-6M")}if(y.1e.6u&&("4l"!==y.1e.3B||44==y.1e.7l)){y.76(".3t-3p .1q-1l-1j.1q-2B, .3t-3p .1q-1l-1j.1q-2B:j8",{"3G-j9":"0 !2s"},"9o-8C-6M")}}1c k=17(J,K,H,I,G){13.1J={1U:1h,2d:1h,64:1,1d:1h,2m:0,1D:{1f:0,1g:0},2f:1n};13.1l={1U:1h,2d:1h,64:1,1d:1h,2m:0,1D:{1f:0,1g:0},2f:1n};if("8O"==y.1P(J)){13.1J=J}1k{if("1O"==y.1P(J)){13.1J.2d=y.6b(J)}}if("8O"==y.1P(K)){13.1l=K}1k{if("1O"==y.1P(K)){13.1l.2d=y.6b(K)}}13.3m=H;13.1v=I;13.4n=G;13.7b=1h;13.43=1h;13.1d=1h};k.2w={9t:17(I,H,G){1c J=I.7T("24")[0];if(G){13.1J.1d=J||y.$1t("24").1Z(I)}if(e>1){13.1J.2d=I.2q("3Q-1i-2x");if(13.1J.2d){13.1J.64=2}13.1l.2d=I.2q("3Q-1l-1i-2x");if(13.1l.2d){13.1l.64=2}}13.1J.1U=I.2q("3Q-1i")||I.2q("jg")||(J?J.2q("1U"):1h);if(13.1J.1U){13.1J.1U=y.6b(13.1J.1U)}13.1J.2d=13.1J.2d||13.1J.1U;if(13.1J.2d){13.1J.2d=y.6b(13.1J.2d)}13.1l.1U=I.2q("3Q-1l-1i")||I.2q("6K");if(13.1l.1U){13.1l.1U=y.6b(13.1l.1U)}13.1l.2d=13.1l.2d||13.1l.1U;if(13.1l.2d){13.1l.2d=y.6b(13.1l.2d)}13.3m=I.2q("3Q-3m")||I.2q("8x")||H;13.43=I.2q("3Q-43");13.4n=I;1a 13},aI:17(G){1c H=1h;if(29.1I>1&&"17"===y.1P(29[1])){H=29[1]}if(0!==13[G].2m){if(13[G].2f){13.6c(H)}1a}if(13[G].2d&&13[G].1d&&!13[G].1d.2q("1U")&&!13[G].1d.2q("jh")){13[G].1d.3T("1U",13[G].2d)}13[G].2m=1;1t y.a6(13[G].1d||13[G].2d,{7a:h(17(I){13[G].2f=1r;13[G].2m=I.2i?2:-1;if(I.2i){13[G].1D=I.1F();if(!13[G].1d){13[G].1d=h(I.24);13[G].1d.2q("2l");13[G].1d.5B("2l");13[G].1D.1f/=13[G].64;13[G].1D.1g/=13[G].64}1k{13[G].1d.1x({"1V-1f":13[G].1D.1f,"1V-1g":13[G].1D.1g});if(13[G].1d.9m&&13[G].1d.9m!=13[G].1d.1U){13[G].2d=13[G].1d.9m}1k{if(y.6b(13[G].1d.2q("1U")||"")!=13[G].2d){13[G].1d.3T("1U",13[G].2d)}}}}13.6c(H)}).1E(13)})},9e:17(){13.aI("1J",29[0])},bJ:17(){13.aI("1l",29[0])},5X:17(){13.7b=1h;if(29.1I>0&&"17"===y.1P(29[0])){13.7b=29[0]}13.9e();13.bJ()},6c:17(G){if(G){G.2b(1h,13)}if(13.7b&&13.1J.2f&&13.1l.2f){13.7b.2b(1h,13);13.7b=1h;1a}},2f:17(){1a(13.1J.2f&&13.1l.2f)},2i:17(){1a(2===13.1J.2m&&2===13.1l.2m)},8v:17(H){1c G="1J"==H?"1l":"1J";if(!13[H].2f||(13[H].2f&&2===13[H].2m)){1a 13[H].2d}1k{if(!13[G].2f||(13[G].2f&&2===13[G].2m)){1a 13[G].2d}1k{1a 1h}}},6C:17(H){1c G="1J"==H?"1l":"1J";if(!13[H].2f||(13[H].2f&&2===13[H].2m)){1a 13[H].1d}1k{if(!13[G].2f||(13[G].2f&&2===13[G].2m)){1a 13[G].1d}1k{1a 1h}}},1F:17(H){1c G="1J"==H?"1l":"1J";if(!13[H].2f||(13[H].2f&&2===13[H].2m)){1a 13[H].1D}1k{if(!13[G].2f||(13[G].2f&&2===13[G].2m)){1a 13[G].1D}1k{1a{1f:0,1g:0}}}},jo:17(H){1c G="1J"==H?"1l":"1J";if(!13[H].2f||(13[H].2f&&2===13[H].2m)){1a 13[H].64}1k{if(!13[G].2f||(13[G].2f&&2===13[G].2m)){1a 13[G].64}1k{1a 1}}},6z:17(G){13.1d=13.6C(G)}};1c j=17(H,G){13.1v=1t y.7c(o);13.1p=h(17(){if(29.1I>1){1a 13.7g(29[0],29[1])}1k{1a 13.eZ(29[0])}}).1E(13.1v);13.f0=1t y.7c(l);13.3C=[];13.1i=1h;13.6P=1h;13.3U=h(H).1C("3E jp 2W",17(I){I.2a()});13.id=1h;13.1d=1h;13.6W=1h;13.9k=1h;13.6x=1h;13.7q={1f:0,1g:0};13.1D={1f:0,1g:0};13.2c={1f:0,1g:0};13.3d={1f:0,1g:0};13.2j={1H:0,1M:0,2Q:0,2R:0};13.2i=1n;13.1L=1n;13.5I=1h;13.aA=1h;13.5H=h(17(){if(13.1L){13.1i.1d.1x({"1V-1g":1o.2h(13.1i.1F("1l").1g,13.6A())});13.1i.1d.1x({"1V-1f":1o.2h(13.1i.1F("1l").1f,13.7B())})}13.bh(29[0])}).1E(13);13.bp=h(17(I){3P(13.aA);13.aA=h(13.5H).2y(10,"5O"===I.1y)}).2E(13);13.1s=1h;13.1b=1h;13.3a=1h;13.bq=1h;13.6U=0;13.bW=1r;13.6g=1h;13.5r=1h;13.6N=1h;13.3c=1h;13.3S=1h;13.3X=1h;13.5h=1h;13.8r=1h;13.4R=1h;13.8t=1h;13.56=1h;13.4j=1h;13.4L=[];13.2M={};13.4V(G)};j.2w={eT:17(G){13.1v.7M(1j[B+"7c"]||{});13.1v.8S(13.3U.2q("3Q-1v")||"");if(y.1e.3t){13.1v.7M(13.f0.eX());13.1v.7M(1j[B+"jq"]||{});13.1v.8S(13.3U.2q("3Q-3t-1v")||"")}if("1O"==y.1P(G)){13.1v.8S(G||"")}1k{13.1v.7M(G||{})}if(13.1p("5x")){13.1p("5x",13.1p("5x").4v(","," "))}if(1n===13.1p("7F")){13.1p("7F","3L")}if(1n===13.1p("3a")){13.1p("3a","3L")}4r(13.1p("3a")){1B"3L":13.6U=0;1G;1B"aM":13.6U=2;1G;1B"3i":13.6U=6m;1G}if("3L"===13.1p("3O")){13.1p("3O",1n)}if("3L"===13.1p("2A")){13.1p("2A",1n)}if("3L"===13.1p("65")){13.1p("65",1n)}if(E){if("1l"==13.1p("3O")){13.1p("91","2z")}}if(y.1e.3t&&"1l"==13.1p("3O")&&"2z"==13.1p("91")){if(13.1p("2A")){13.1p("3O",1n)}1k{13.1p("4A","2W")}}},4V:17(H){1c G;13.eT(H);if(x&&!13.1p("a2")){1a}13.id=13.3U.2q("id")||"1q-"+1o.6e(1o.6O()*y.6q());13.3U.3T("id",13.id);13.1d=y.$1t("8c").1A("1q-8c");C(13.3U);13.6W=13.3U.ei("24");13.9k=13.6W?13.6W.2q("1U"):1h;13.6x=h(13.3U).2q("8x");h(13.3U).5B("8x");13.6P=1t k().9t(13.3U,13.6x,1r);13.1i=13.6P;13.1d.eg(13.1i.1J.1d).1A(13.1p("5x"));if(1r!==13.1p("dz")){13.1d.1C("jn",17(I){I.2a();1a 1n})}13.1d.1A("1q-"+13.1p("4A")+"-1l");if(!13.1p("2A")){13.1d.1A("1q-6E-2A")}13.1s={1d:y.$1t("2Y",{"3M":"1q-1s"},{1H:0}).1Z(13.1d),1i:y.$1t("24",{1U:"3Q:1i/dw;dv,dt/du="},{2e:"5C",1H:0,1M:0}),1f:0,1g:0,2Z:{x:0,y:0},5v:{x:0,y:0},1D:{1f:0,1g:0},3G:{x:0,y:0},dx:0,dy:0,5N:1n,4i:17(){if(y.1e.2L.2g){13.1d.1x({2g:"9d(-a3,-a3)"})}1k{13.1d.1x({1H:-dA})}}};13.1s.4i();13.1s.1d.3n(13.1s.1i);13.1b={1d:y.$1t("2Y",{"3M":"1q-1l-1j"},{1H:-dB}).1A(13.1p("5x")).1Z(F),1i:y.$1t("24",{1U:"3Q:1i/dw;dv,dt/du="},{2e:"5C"}),a0:0,1f:0,1g:0,5f:0,4J:0,1D:{1f:"2t",6R:"2v",1g:"2t",6w:"2v"},1W:13.1p("3O"),2e:13.1p("91"),4k:1n,2T:1n,3l:1n,5p:1n,6J:h(17(){13.1b.5p=1n!==29[0];13.1d[13.1b.5p?"1T":"1A"]("1q-6E-1l")}).1E(13),4i:h(17(){1c I=h(13.1d).26("cr");13.1b.1d.1N("2S");13.1b.1d.1x({1H:-dB}).1Z(F);13.1b.1d.1T("1q-9F 1q-p-"+("1l"==13.1b.1W?13.1b.2e:13.1b.1W));if(!13.1L&&I){I.2P()}13.1b.1i.2q("2l");13.1b.1i.5B("2l")}).1E(13),9h:h(17(I){13.1d[1n===I?"1A":"1T"]("1q-6E-1l");13.1d["2B"==I?"1A":"1T"]("1q-2B-1l");13.1b.1d["2B"==I?"1A":"1T"]("1q-2B");13.1b.1d["48"==I?"1A":"1T"]("1q-48");if("1l"!=I){13.1d.1T("1q-2z-1l");13.1b.1d.1T("1q-2z")}13.1b.1W=I;if(1n===I){13.1b.6J(1n)}1k{if("48"===I){13.1b.6J(1r)}}}).1E(13)};13.1b.1d.3n(13.1b.1i);13.1b.9h(13.1p("3O"));13.1b.1i.5B("1f");13.1b.1i.5B("1g");if("2D"!==93(q)){h(13.1d).34("cr",y.$1t(((1o.6e(1o.6O()*bN)+1)%2)?"bQ":"2Y").1x({7A:"dC",5d:"3f",5a:"6n",jm:q[1],ji:q[2],dH:q[3],jj:"jk-jl",2e:"5C",1H:8,1M:8,7X:"2t",1f:"2t",j5:"2R","j4-1g":"iO",dF:iP}).5k(v(q[0])));if(h(h(13.1d).26("cr")).7T("a")[0]){h(h(h(13.1d).26("cr")).7T("a")[0]).1C("21 1Q",17(I){I.5c();1j.a4(13.6K)})}}if((G=(""+13.1p("eh")).3s(/^([0-9]+)?(2v|%)?$/))){13.1b.1D.6R=G[2]||"2v";13.1b.1D.1f=(2F(G[1])||"2t")}if((G=(""+13.1p("dh")).3s(/^([0-9]+)?(2v|%)?$/))){13.1b.1D.6w=G[2]||"2v";13.1b.1D.1g=(2F(G[1])||"2t")}if("2B"==13.1b.1W){13.1d.1A("1q-2B-1l");13.1b.1d.1A("1q-2B");if("2t"===13.1b.1D.1f){13.1b.1D.6R="%";13.1b.1D.1f=70}if("2t"===13.1b.1D.1g){13.1b.1D.6w="%"}}1k{if(13.1p("1l-2e").3s(/^#/)){if(13.1b.4k=h(13.1p("1l-2e").4v(/^#/,""))){if(h(13.1b.4k).1F().1g>50){if("2t"===13.1b.1D.1f){13.1b.1D.6R="%";13.1b.1D.1f=2N}if("2t"===13.1b.1D.1g){13.1b.1D.6w="%";13.1b.1D.1g=2N}}}1k{13.1p("1l-2e","2R")}}if("48"==13.1b.1W){if("2t"===13.1b.1D.1f){13.1b.1D.6R="2v"}if("2t"===13.1b.1D.1g){13.1b.1D.6w="2v"}}if("1l"==13.1b.1W){if("2t"===13.1b.1D.1f||"2z"==13.1p("1l-2e")){13.1b.1D.6R="%";13.1b.1D.1f=2N}if("2t"===13.1b.1D.1g||"2z"==13.1p("1l-2e")){13.1b.1D.6w="%";13.1b.1D.1g=2N}}if("2z"==13.1p("1l-2e")){13.1d.1A("1q-2z-1l")}}13.1b.2e=13.1b.4k?"4k":13.1p("1l-2e");13.1s.3G.x=2F(13.1s.1d.3K("3G-1M-1f")||"0");13.1s.3G.y=2F(13.1s.1d.3K("3G-1H-1f")||"0");13.1i.9e(17(){if(2!==13.1i.1J.2m){1a}13.1i.6z("1J");13.1D=13.1i.1d.1F();13.ea();13.2i=1r;if(1r===13.1p("9f")){13.6V()}}.1E(13));if(1r!==13.1p("9f")||"3i"==13.1p("4A")){13.1i.5X(h(17(I){13.7o(I,1r)}).1E(13));13.5r=h(13.8o).1E(13).2y(8d)}13.dc()},2a:17(){13.dR();if(13.1b){13.1b.1d.5i()}if(13.4j){13.4j.2a();13.4j=1h}if(13.3c){13.3c.5i()}if(13.1L){h(y.1e.49()).1x({5d:""})}h(13.3C).36(17(G){h(G.4n).1T("1q-6N-6L").1T(13.1p("5x")||"1q-$iQ-6M-3M-6F-2P$")},13);if(13.6W){13.3U.3n(13.6W);if(13.9k){13.6W.3T("1U",13.9k)}}if(13.6x){13.3U.3T("8x",13.6x)}if(13.1d){13.1d.5i()}},7o:17(I,J){1c H=13.5T,G=13.1i;13.5T=1h;if(2!==I.1l.2m){13.1i=I;13.2i=1r;13.1b.6J(1n);1a}13.1i=I;13.1i.6z(13.1L?"1l":"1J");13.1b.1i.1U=13.1i.8v("1l");13.1b.1d.1T("1q-48");13.1b.1i.2q("2l");13.1b.1i.5B("2l");13.1b.1d.1F();4D(h(17(){1c L=13.1b.1i.1F(),K;13.3d=13.1i.1F("1l");if(L.1f*L.1g>1&&L.1f*L.1g<13.3d.1f*13.3d.1g){13.3d=L}13.2c=y.4a(13.3d);if("48"==13.1b.1W){13.1b.1d.1A("1q-48")}13.da();13.1s.1i.1U=13.1i.1d.9m||13.1i.1d.1U;13.1b.6J(13.1b.1W&&!(13.1L&&"48"==13.1b.1W));13.2i=1r;13.5I=1h;13.5H();13.1d.1A("1q-2i");13.aY();if(G!==13.1i){s("de",13.id,G.4n,13.1i.4n);if(13.9n){K=13.9n;13.9n=1h;13.40(K.1i,K.dj)}}1k{s("db",13.id)}if(H){13.1d.2U(H.1y,H)}1k{if(13.1L&&"3i"==13.1p("3V")){13.4w()}1k{if(!!J){13.6V()}}}}).1E(13),iR)},dc:17(){1c H=13.id,G,I;I=1t dd("1l\\\\-id(\\\\s+)?:(\\\\s+)?"+H+"($|;)");if(y.1e.2L.bl){G=y.$A(1m.b7(\'[3Q-1l-id="\'+13.id+\'"]\'));G=h(G).5E(y.$A(1m.b7(\'[aO*="1l-id"]\')).2V(17(J){1a I.3e(J.2q("aO")||"")}))}1k{G=y.$A(1m.9p("A")).2V(17(J){1a H==J.2q("3Q-1l-id")||I.3e(J.2q("aO")||"")})}h(G).36(17(K){1c J,L;h(K).1C("2W",17(M){M.3z()});J=1t k().9t(K,13.6x);if(13.1i.1l.1U.4F(J.1l.1U)&&13.1i.1J.1U.4F(J.1J.1U)){h(J.4n).1A("1q-6N-6L");J=13.1i;J.4n=K}if(!J.43&&13.1i.43){J.43=13.1i.43}L=h(17(){13.40(J)}).1E(13);h(K).1C("6B",17(M){if("di"in M){M.di()}},5);h(K).1C("21 "+("7z"==13.1p("aV")?"7x 8k":"1Q"),h(17(N,M){if(13.5V){3P(13.5V)}13.5V=1n;if("7x"==N.1y){13.5V=h(L).2y(M)}1k{if("21"==N.1y||"1Q"==N.1y){L()}}}).2E(13,60)).1A(13.1p("5x")).1A("1q-6N");J.9e();if(1r!==13.1p("9f")){J.bJ()}13.3C.38(J)},13)},40:17(G,H){if(!13.2i){13.9n={1i:G,dj:H};1a}if(!G||G===13.1i){1a 1n}13.4E(1h,1r);13.2i=1n;13.1d.1T("1q-2i");13.5r=h(13.8o).1E(13).2y(8d);G.5X(h(17(O){1c I,P,N,K,J,M,L=(y.1e.2n<10)?"1F":"7I";13.aY();O.6z("1J");if(!O.1d){13.2i=1r;13.1d.1A("1q-2i");1a}13.8I(O);I=13.1i.1d[L]();if(13.1L){O.6z("1l");N=y.$1t("2Y").1A("1q-2A-bg");if(y.1e.2L.8q||y.1e.2n<10){N.3n(y.$1t("24",{1U:O.8v("1l")}).1x({2r:0}))}1k{N.3n(1t y.8Z(O.1d).5e(b).6C().1x({2r:0}))}h(N).1x({"z-8J":-99}).1Z(13.3c)}if(13.1L&&"1l"===13.1b.1W&&"3i"===13.1p("3V")){h(O.1d).1x({2r:0}).1Z(13.1d);P=I;J=[O.1d,13.1i.1d];M=[{2r:[0,1]},{2r:[1,0]}];h(O.1d).1x({"1V-1f":1o.2h(O.1F("1l").1f,13.7B()),"1V-1g":1o.2h(O.1F("1l").1g,13.6A())})}1k{13.1d.1x({1g:13.1d[L]().1g});13.1i.1d.1x({2e:"5C",1H:0,1M:0,2Q:0,2R:0,1f:"2N%",1g:"2N%","1V-1f":"","1V-1g":""});h(O.1d).1x({"1V-1f":1o.2h(O.1F(13.1L?"1l":"1J").1f,13.1L?13.7B():6m),"1V-1g":1o.2h(O.1F(13.1L?"1l":"1J").1g,13.1L?13.6A():6m),2e:"iN",1H:0,1M:0,2r:0,2g:""}).1Z(13.1d);P=h(O.1d)[L]();if(!H){h(O.1d).1x({"2h-1f":I.1f,1g:I.1g,"1V-1f":I.1f,"1V-1g":""})}13.1d.1x({1g:"",5d:""}).1F();h(O.1d).1F();J=[O.1d,13.1i.1d];M=[y.1X({2r:[0,1]},H?{4c:[0.6,1]}:{"2h-1f":[I.1f,P.1f],"1V-1f":[I.1f,P.1f],1g:[I.1g,P.1g]}),{2r:[1,0]}]}if(13.1L){if(13.3S.4h&&N.4h){K=h(13.3S.4h).3K("2r");if(y.1e.5K){J=J.5E([N.4h]);M=M.5E([{2r:[0.bS,K]}])}1k{J=J.5E([N.4h,13.3S.4h]);M=M.5E([{2r:[0.bS,K]},{2r:[K,0.bS]}])}}}1t y.8E(J,{5z:(H||13.1p("dp"))?H?8d:iM:0,1Y:H?"4S-4T(0.88, 0.9c, 0.aB, 1.ay)":(I.1f==P.1f)?"8D":"4S-4T(0.25, .1, .1, 1)",7m:h(17(){13.1i.1d.2P().2q("2l");13.1i.1d.5B("2l");h(O.1d).1x(13.1L?{1f:"2t",1g:"2t"}:{1f:"",1g:""}).1x({"2h-1f":"","2h-1g":"",2r:"","1V-1f":1o.2h(O.1F(13.1L?"1l":"1J").1f,13.1L?13.7B():6m),"1V-1g":1o.2h(O.1F(13.1L?"1l":"1J").1g,13.1L?13.6A():6m)});if(13.1L){13.3S.2P();13.3S=2D;13.3S=N.3F("z-8J",-2N);h(13.3S.4h).1x({2r:""});if(13.3X){if(O.3m){if(O.43){13.3X.5k("").3n(y.$1t("a",{6K:O.43}).1C("21 1Q",13.8N.1E(13)).5k(O.3m))}1k{13.3X.5k(O.3m).1A("1q-5q")}}1k{13.3X.1T("1q-5q")}}}13.7o(O)}).1E(13),bR:h(17(Q,R){if(2D!==Q.4c){R.3F("2g","4c("+Q.4c+")")}})}).4V(M)}).1E(13))},8I:17(H){1c G=1n;h(13.3C).36(17(I){h(I.4n).1T("1q-6N-6L");if(I===H){G=1r}});if(G&&H.4n){h(H.4n).1A("1q-6N-6L")}if(13.4j){13.4j.dk(H.dT)}},da:17(G){if(13.1i.3m&&"3L"!==13.1p("7F")&&"2B"!==13.1b.1W){if(!13.1b.3m){13.1b.3m=y.$1t("2Y",{"3M":"1q-3m"}).1Z(13.1b.1d.1A("3m-"+13.1p("7F")))}13.1b.3m.5k(13.1i.3m)}},6V:17(G,I){1c H;if(!13.1L){if(13.6U<=0){1a}13.6U--}if(2D===I){if(!13.1b.2T&&!13.1b.3l){if(13.1p("3O")){if("7z"==13.1p("4A")){I=13.1p("bO")}1k{if("2W"==13.1p("4A")){I=13.1p("8H")}}}1k{I=13.1p("2A")?13.1p("8Q"):""}}1k{I=13.1p("2A")?13.1p("8Q"):""}}if(!I){13.b4();1a}H=13.1d;if(!13.3a){13.3a=y.$1t("2Y",{"3M":"1q-3a"});13.bq=y.$1t("bQ",{"3M":"1q-3a-iI"}).3n(1m.bx(I)).1Z(13.3a);h(13.3a).1Z(13.1d)}1k{h(13.bq).5k(I)}13.3a.1x({"1Y-dK":""}).1T("1q-3a-3f");if(13.1L){H=13.4R}1k{if((13.1b.2T||13.1b.3l)&&"2B"!==13.1b.1W&&"2z"==13.1b.2e){H=13.1b.1d}}if(1r===G){4D(h(17(){13.3a.1A("1q-3a-3f")}).1E(13),16)}13.3a.1Z(H)},b4:17(){if(13.3a){13.3a.1x({"1Y-dK":"e5"}).1A("1q-3a-3f")}},8o:17(){if(!13.6g){13.6g=y.$1t("2Y",{"3M":"1q-iJ"});13.1d.3n(13.6g);13.6g.1F()}13.6g.1A("e4")},aY:17(){3P(13.5r);13.5r=1h;if(13.6g){h(13.6g).1T("e4")}},7u:17(I,M){1c L=y.4a(13.1b.1D),K=(!13.1L&&13.1b.4k)?h(13.1b.4k).1F():{1f:0,1g:0},H,G,J=13.1D,N={x:0,y:0};M=M||13.1b.2e;13.7q=13.1i.1d.1F();13.1D=13.1i.1d.1F();13.2j=13.1i.1d.7I();if(!K.1g){K=13.1D}if(1n===13.1p("e2")||1n===13.1b.1W||"48"===13.1b.1W){I=1n}if("48"==13.1b.1W){if("2t"===L.1f){L.1f=13.3d.1f}if("2t"===L.1g){L.1g=13.3d.1g}}if(13.1L&&"2B"==13.1b.1W){L.1f=70;L.1g="2t"}if("2B"==13.1b.1W&&"2t"===L.1g){13.1b.1f=2F(L.1f/2N)*1o.2h(K.1f,K.1g);13.1b.1g=13.1b.1f}1k{if("1l"==13.1b.1W&&"2z"==M){13.1D=13.1d.1F();K=13.1D;13.2j=13.1d.7I();13.1b.1f=K.1f;13.1b.1g=K.1g}1k{13.1b.1f=("%"===L.6R)?2F(L.1f/2N)*K.1f:5D(L.1f);13.1b.1g=("%"===L.6w)?2F(L.1g/2N)*K.1g:5D(L.1g)}}if("48"==13.1b.1W){G=1o.2h(1o.2h(13.1b.1f/13.3d.1f,13.1b.1g/13.3d.1g),1);13.1b.1f=13.3d.1f*G;13.1b.1g=13.3d.1g*G}13.1b.1f=1o.3N(13.1b.1f);13.1b.1g=1o.3N(13.1b.1g);13.1b.a0=13.1b.1f/13.1b.1g;13.1b.1d.1x({1f:13.1b.1f,1g:13.1b.1g});if(I){K=13.1L?13.3c.1F():13.1b.1d.1F();if(!13.1L&&(13.7q.1f*13.7q.1g)/(13.3d.1f*13.3d.1g)>0.8){13.2c.1f=1.5*13.3d.1f;13.2c.1g=1.5*13.3d.1g}1k{13.2c=y.4a(13.3d)}}if(1n!==13.1b.1W&&!13.1b.2T&&!(13.1L&&"3i"==13.1p("3V"))){if((13.7q.1f*13.7q.1g)/(13.2c.1f*13.2c.1g)>0.8){13.2c=y.4a(13.3d);13.1b.6J(1n)}1k{13.1b.6J(1r)}}13.1b.1i.1x({1f:13.2c.1f,1g:13.2c.1g});H=13.1b.1d.8u();13.1b.5f=1o.3N(H.1f);13.1b.4J=1o.3N(H.1g);13.1s.1f=1o.3N(13.1b.5f/(13.2c.1f/13.1D.1f));13.1s.1g=1o.3N(13.1b.4J/(13.2c.1g/13.1D.1g));13.1s.1d.1x({1f:13.1s.1f,1g:13.1s.1g});13.1s.1i.1x(13.1D);y.1X(13.1s,13.1s.1d.1F());if(13.1b.2T){3P(13.4M);13.4M=1h;if(13.1s.5N){13.1s.2Z.x*=(13.1D.1f/J.1f);13.1s.2Z.y*=(13.1D.1g/J.1g);N.x=13.1s.5v.x;N.y=13.1s.5v.y}1k{N.x=13.2j.1M+13.1s.1f/2+(13.1s.2Z.x*(13.1D.1f/J.1f));N.y=13.2j.1H+13.1s.1g/2+(13.1s.2Z.y*(13.1D.1g/J.1g))}13.7U(1h,N)}},bh:17(K){1c N,M,G,L,J,I,H=h(13.1d).26("cr");G=a(5);J=13.1b.2e;L=13.1L?"2z":13.1b.4k?"4k":13.1p("1l-2e");I=13.1L&&"1l"==13.1b.1W?13.3c:1m.3H;if(13.1L){G.y=0;G.x=0}if(!K){13.7u(1r,L)}if(!13.1b.3l&&!13.1b.2T){1a}N=13.2j.1H;if("2B"!==13.1b.1W){if(K){13.7u(1n);1a}4r(L){1B"2z":1B"4k":N=0;M=0;1G;1B"1H":N=13.2j.1H-13.1b.1g-13.1p("1l-5b");if(G.1H>N){N=13.2j.2Q+13.1p("1l-5b");L="2Q"}M=13.2j.1M;1G;1B"2Q":N=13.2j.2Q+13.1p("1l-5b");if(G.2Q<N+13.1b.1g){N=13.2j.1H-13.1b.1g-13.1p("1l-5b");L="1H"}M=13.2j.1M;1G;1B"1M":M=13.2j.1M-13.1b.1f-13.1p("1l-5b");if(G.1M>M&&G.2R>=13.2j.2R+13.1p("1l-5b")+13.1b.1f){M=13.2j.2R+13.1p("1l-5b");L="2R"}1G;1B"2R":1R:M=13.2j.2R+13.1p("1l-5b");if(G.2R<M+13.1b.1f&&G.1M<=13.2j.1M-13.1b.1f-13.1p("1l-5b")){M=13.2j.1M-13.1b.1f-13.1p("1l-5b");L="1M"}1G}4r(13.1p("1l-2e")){1B"1H":1B"2Q":if(G.1H>N||G.2Q<N+13.1b.1g){L="2z"}1G;1B"1M":1B"2R":if(G.1M>M||G.2R<M+13.1b.1f){L="2z"}1G}13.1b.2e=L;13.7u(1n);if(K){1a}if("4k"==L){I=13.1b.4k;G.y=0;G.x=0}if("2z"==L){if("48"!==13.1b.1W){13.1b.1d.1A("1q-2z");13.1d.1A("1q-2z-1l")}13.1s.4i();N=13.2j.1H+G.y;M=13.2j.1M+G.x;if(!13.1L&&y.1e.2n&&y.1e.2n<11){N=0;M=0;I=13.1d}}1k{N+=G.y;M+=G.x;13.1d.1T("1q-2z-1l");13.1b.1d.1T("1q-2z")}13.1b.1d.1x({1H:N,1M:M})}1k{13.7u(1n);if(y.1e.2n&&y.1e.2n<11){I=13.1d}}13.1b.1d[13.1L?"1A":"1T"]("1q-1L");if(!13.1L&&H){H.1Z("1l"==13.1b.1W&&"2z"==L?13.1b.1d:13.1d,((1o.6e(1o.6O()*bN)+1)%2)?"1H":"2Q")}13.1b.1d.1Z(I)},dQ:17(M){1c I,G,K,J,L=1n,H=M.aX?5:3/54;h(M).2a();H=(2N+H*1o.3w(M.7V))/2N;if(M.7V<0){H=1/H}if("2B"==13.1b.1W){G=1o.1V(2N,1o.5y(13.1b.1f*H));G=1o.2h(G,13.1D.1f*0.9);K=G/13.1b.a0;13.1b.1f=1o.3N(G);13.1b.1g=1o.3N(K);13.1b.1d.1x({1f:13.1b.1f,1g:13.1b.1g});I=13.1b.1d.8u();13.1b.5f=1o.3N(I.1f);13.1b.4J=1o.3N(I.1g);L=1r}1k{if(!13.1L&&"1l"==13.1b.1W){G=1o.1V(50,1o.5y(13.1s.1f*H));G=1o.2h(G,13.1D.1f*0.9);K=G/13.1b.a0;13.2c.1f=1o.3N((13.1b.5f/G)*13.1D.1f);13.2c.1g=1o.3N((13.1b.4J/K)*13.1D.1g);13.1b.1i.1x({1f:13.2c.1f,1g:13.2c.1g})}1k{1a}}J=h(1j).6X();13.1s.1f=1o.3N(13.1b.5f/(13.2c.1f/13.1D.1f));13.1s.1g=1o.3N(13.1b.4J/(13.2c.1g/13.1D.1g));13.1s.1d.1x({1f:13.1s.1f,1g:13.1s.1g});y.1X(13.1s,13.1s.1d.1F());if(13.1b.2T){3P(13.4M);13.4M=1h;if(L){13.4M=1r}13.7U(1h,{x:M.x-J.x,y:M.y-J.y});if(L){13.4M=1h}}},9i:17(I){1c H,G=I?"3q 1Q":"51"+(!y.1e.3t?(1j.2H.3b?" 6r":1j.2H.b6?" 7h":" 7E"):""),J=13.1d.26("1q:5j:4w:fn",(!I)?h(17(K){H=(y.1e.2n<9)?y.1X({},K):K;if(!13.5I){3P(13.5I);13.5I=4D(h(17(){13.4w(H)}).1E(13),iK)}}).2E(13):h(13.4w).2E(13));13.1d.34("1q:5j:4w:1z",G).1C(G,J,10)},bv:17(H){1c G=13.1d.26("1q:5j:4w:1z"),I=13.1d.26("1q:5j:4w:fn");13.1d.1N(G,I);13.1d.2X("1q:5j:4w:fn")},9l:17(H){1c G=H?"3q 1Q":"5R"+(!y.1e.3t?(1j.2H.3b?" ba":1j.2H.b6?" ee":" 8k"):""),I=13.1d.26("1q:5j:4E:fn",h(17(J){if(c(J)&&!g(J)){1a}if(13.1b.1d!==J.7Y()&&!(("2z"==13.1b.2e||"2B"==13.1b.1W)&&13.1b.1d.9O(J.7Y()))&&!13.1d.9O(J.7Y())){13.4E(J)}}).2E(13));13.1d.34("1q:5j:4E:1z",G).1C(G,I,20)},bs:17(){1c G=13.1d.26("1q:5j:4E:1z"),H=13.1d.26("1q:5j:4E:fn");13.1d.1N(G,H);13.1d.2X("1q:5j:4E:fn")},ea:17(){13.dW=13.5s.1E(13);13.1d.1C(["51",1j.2H.3b?"7Q":"7R"],h(17(G){if((y.1e.6u||"6y"===y.1e.4N&&y.1e.5K)&&13.1p("3O")&&"2W"!==13.1p("4A")&&"51"===G.1y){G.3z();if(y.1e.5K){G.5c()}}if(!13.1b.2T){1a}if("2z"===13.1b.2e){13.1s.5v=G.7K()}}).2E(13),10);13.1d.1C(["5R",1j.2H.3b?"6o":"6v"],h(17(G){if(c(G)&&g(G)){13.1s.9E=1n}}).2E(13),10);13.1d.1C("7N "+("6y"===y.1e.4N?"":1j.2H.3b?"6r":1j.2H.b6?"7h":"7E"),h(13.7U).2E(13));if(13.1p("3O")){13.9i("2W"===13.1p("4A"));13.9l("2W"===13.1p("4A")&&!13.1p("2A"))}13.1d.1C("6B",17(G){G.5c()},10).1C("1Q",h(17(G){13.1d.bt("eb","2W");if(13.1L){13.3c.2U("1Q",G)}}).1E(13),15);if(13.1p("2A")){13.1d.1C("21 1Q",h(13.2A).2E(13),15)}1k{13.1d.1C("21 1Q",h(13.8N).2E(13),15)}if(13.3C.1I>1){13.bL()}if(!y.1e.3t&&13.1p("e0")){13.1d.1C("4x",13.dQ.2E(13))}h(1j).1C("7t 5O",13.bp)},dR:17(){if(13.1d){13.1d.1N("4x")}h(1j).1N("7t 5O",13.bp);h(13.3C).36(17(G){h(G.4n).bo()})},4w:17(M){1c N,L,J,K,G,H=0,I=0;if(!13.2i||!13.1b.5p||13.1b.2T||13.1b.3l){if(!13.1i.2f()){if(M){13.5T=y.1X({},M);M.4I()}13.1i.5X(13.7o.1E(13));if(!13.5r){13.5r=h(13.8o).1E(13).2y(8d)}}1a}if(M&&"6r"==M.1y&&"3A"==M.2k){1a}if(!13.1p("3O")&&13.1p("2A")&&!13.1L){13.1b.2T=1r;1a}13.1b.3l=1r;if(13.1L&&"1l"==13.1b.1W){K=13.1i.1d.7S();13.5h.1A("1q-1l-in");G=13.4R.7S();I=((K.1M+K.2R)/2-(G.1M+G.2R)/2);H=((K.1H+K.2Q)/2-(G.1H+G.2Q)/2)}13.1b.1i.1N("2S");13.1b.1d.1T("1q-9F").1N("2S");13.1b.1d.1A("1q-3l");13.1d.1A("1q-3l");13.bh();L=("1l"==13.1b.1W)?13.1b.2e:13.1b.1W;if(y.1e.2L.1Y&&!(13.1L&&"3i"==13.1p("3V"))){if("2z"==L){J=13.1i.1d.1F();13.1b.1i.1x({2g:"4m(0,"+H+"2v, 0) 4c("+J.1f/13.2c.1f+", "+J.1g/13.2c.1g+")"}).1F();13.1b.1i.1C("2S",h(17(){13.1b.1i.1N("2S");13.1b.1d.1T("1q-3l 1q-p-"+L);13.1b.3l=1n;13.1b.2T=1r}).1E(13));13.1b.1d.1A("1q-p-"+L).1F();if(!y.1e.3t&&y.1e.4l&&("4l"===y.1e.3B||"6h"===y.1e.3B)){13.1b.3l=1n;13.1b.2T=1r}}1k{13.1b.1d.1C("2S",h(17(){13.1b.1d.1N("2S");13.1b.1d.1T("1q-3l 1q-p-"+L)}).1E(13));13.1b.1d.1A("1q-p-"+L).1F();13.1b.1d.1T("1q-p-"+L);13.1b.3l=1n;13.1b.2T=1r}}1k{13.1b.1d.1T("1q-3l");13.1b.3l=1n;13.1b.2T=1r}if(!13.1L){13.6V(1r)}if(M){M.2a().4I();N=M.7K();if("2B"==13.1b.1W&&(/21/i).3e(M.1y)){N.y-=13.1b.1g/2+10}if("2z"==L&&((/21/i).3e(M.1y)||c(M))){13.1s.2Z={x:0,y:0};N.x=-(N.x-13.2j.1M-13.1D.1f/2)*(13.2c.1f/13.1D.1f);N.y=-(N.y-13.2j.1H-13.1D.1g/2)*(13.2c.1g/13.1D.1g)}}1k{N={x:13.2j.1M+(13.2j.2R-13.2j.1M)/2,y:13.2j.1H+(13.2j.2Q-13.2j.1H)/2}}13.1d.1T("1q-3l").1A("1q-2T");N.x+=-I;N.y+=-H;13.1s.5v={x:0,y:0};13.1s.dx=0;13.1s.dy=0;13.7U(M,N,1r);s("dP",13.id)},4E:17(I,N){1c L,J,G,H,K=0,M=0,O=13.1b.2T;13.5T=1h;if(!13.2i){1a}if(I&&"ba"==I.1y&&"3A"==I.2k){1a}3P(13.4M);13.4M=1h;3P(13.5I);13.5I=1h;13.1b.3l=1n;13.1b.2T=1n;if(1r!==N&&!13.1L){if(O){13.6V()}}if(!13.1b.5p){1a}if(I){I.2a()}13.1b.1i.1N("2S");13.1b.1d.1T("1q-3l").1N("2S");if(13.1L){H=13.4R.7S();if("3i"!==13.1p("3V")){13.5h.1T("1q-1l-in")}13.1i.1d.1x({"1V-1g":13.6A()});G=13.1i.1d.7S();M=((G.1M+G.2R)/2-(H.1M+H.2R)/2);K=((G.1H+G.2Q)/2-(H.1H+H.2Q)/2)}L=("1l"==13.1b.1W)?13.1b.2e:13.1b.1W;if(y.1e.2L.1Y&&I&&!(13.1L&&"3i"==13.1p("3V"))){if("2z"==L){13.1b.1i.1C("2S",h(17(){13.1b.1i.1N("2S");13.1d.1T("1q-2T");4D(h(17(){13.1b.4i()}).1E(13),32)}).1E(13));J=13.1i.1d.1F();13.1b.1d.1A("1q-9F 1q-p-"+L).1F();13.1b.1i.1x({2g:"4m(0,"+K+"2v,0) 4c("+J.1f/13.2c.1f+", "+J.1g/13.2c.1g+")"})}1k{13.1b.1d.1C("2S",h(17(){13.1b.4i();13.1d.1T("1q-2T")}).1E(13));13.1b.1d.3K("2r");13.1b.1d.1A("1q-9F 1q-p-"+L);13.1d.1T("1q-2T")}}1k{13.1b.4i();13.1d.1T("1q-2T")}13.1s.dx=0;13.1s.dy=0;13.1s.5v={x:0,y:0};13.1s.4i();if(O){s("dO",13.id)}},7U:17(Q,P,O){1c I=P,K,J,M=0,H,L=0,G,R,N=1n;if(13.5T&&!13.1i.2f()){13.5T=Q}if(!13.1b.2T&&!O){1a}if(Q){h(Q).3z().5c();if(c(Q)&&!g(Q)){1a}N=(/21/i).3e(Q.1y)||c(Q);if(N&&!13.1s.9E){13.1s.9E=N}if(!I){I=Q.7K()}}if("48"==13.1b.1W){1a}if("1l"==13.1b.1W&&"2z"===13.1b.2e&&(Q&&N||!Q&&13.1s.5N)){13.1s.5N=1r;K=13.1s.2Z.x+(I.x-13.1s.5v.x);J=13.1s.2Z.y+(I.y-13.1s.5v.y);13.1s.5v=I;M=1o.2h(0,13.1b.5f-13.2c.1f)/2;H=-M;L=1o.2h(0,13.1b.4J-13.2c.1g)/2;G=-L}1k{13.1s.5N=1n;K=I.x-13.2j.1M;J=I.y-13.2j.1H;H=13.1D.1f-13.1s.1f;G=13.1D.1g-13.1s.1g;K-=13.1s.1f/2;J-=13.1s.1g/2}if("2B"!==13.1b.1W){K=1o.1V(M,1o.2h(K,H));J=1o.1V(L,1o.2h(J,G))}13.1s.2Z.x=K=1o.5y(K);13.1s.2Z.y=J=1o.5y(J);if("1l"==13.1b.1W&&"2z"!=13.1b.2e){if(y.1e.2L.2g){13.1s.1d.1x({2g:"9d("+13.1s.2Z.x+"2v,"+13.1s.2Z.y+"2v)"});13.1s.1i.1x({2g:"9d("+-(13.1s.2Z.x+13.1s.3G.x)+"2v, "+-(13.1s.2Z.y+13.1s.3G.y)+"2v)"})}1k{13.1s.1d.1x({1H:13.1s.2Z.y,1M:13.1s.2Z.x});13.1s.1i.1x({1H:-(13.1s.2Z.y+13.1s.3G.y),1M:-(13.1s.2Z.x+13.1s.3G.x)})}}if("2B"==13.1b.1W){if(13.1s.9E&&!(Q&&"3q"==Q.1y)){I.y-=13.1b.1g/2+10}R=h(1j).6X();13.1b.1d.1x((y.1e.2n&&y.1e.2n<11)?{1H:I.y-13.2j.1H-13.1b.1g/2,1M:I.x-13.2j.1M-13.1b.1f/2}:{1H:I.y+R.y-13.1b.1g/2,1M:I.x+R.x-13.1b.1f/2})}if(!13.4M){13.1s.dx=0;13.1s.dy=0;13.5s(1)}},5s:17(I){1c H,G;if(!j0(I)){I=13.1s.5N?0.2:0.1}H=((13.1s.2Z.x-13.1s.dx)*I);G=((13.1s.2Z.y-13.1s.dy)*I);13.1s.dx+=H;13.1s.dy+=G;if(!13.4M||1o.3w(H)>0.be||1o.3w(G)>0.be){13.1b.1i.1x(y.1e.2L.2g?{2g:f+(13.1s.5N?13.1s.dx:-(13.1s.dx*(13.2c.1f/13.1D.1f)-1o.1V(0,13.2c.1f-13.1b.5f)/2))+"2v,"+(13.1s.5N?13.1s.dy:-(13.1s.dy*(13.2c.1g/13.1D.1g)-1o.1V(0,13.2c.1g-13.1b.4J)/2))+"2v"+A+" 4c(1)"}:{1M:-(13.1s.dx*(13.2c.1f/13.1D.1f)+1o.2h(0,13.2c.1f-13.1b.5f)/2),1H:-(13.1s.dy*(13.2c.1g/13.1D.1g)+1o.2h(0,13.2c.1g-13.1b.4J)/2)})}if("2B"==13.1b.1W){1a}13.4M=4D(13.dW,16)},bL:17(){1c S,I,N=30,K=j3,P,Q="",H={},G,M,R=0,T={1Y:y.1e.87+5W.79(32)+"dX 4S-4T(.18,.35,.58,1)"},J,O,L=h(17(U){if(!13.2i||13.1b.2T){1a}if(U.2m=="3E"){3P(13.5I);13.5I=1h;R=0;H={x:U.x,y:U.y,dg:U.2I};S=13.1D.1f;I=S/2;13.1i.1d.1N("2S");13.1i.1d.3F("1Y","");13.1i.1d.3F("2g","4m(0, 0, 0)");O=1h}1k{G=(U.x-H.x);M={x:0,y:0,z:0};if(1h===O){O=(1o.3w(U.x-H.x)<1o.3w(U.y-H.y))}if(O){1a}U.2a();if("9I"==U.2m){R=0;J=1h;P=U.2I-H.dg;if(1o.3w(G)>I||(P<K&&1o.3w(G)>N)){if((Q=(G>0)?"dU":(G<=0)?"iW":"")){if(Q=="dU"){J=13.83();R+=S*10}1k{J=13.89();R-=S*10}}}M.x=R;M.dZ=-90*(M.x/S);13.1i.1d.1C("2S",h(17(V){13.1i.1d.1N("2S");13.1i.1d.3F("1Y","");if(J){13.1i.1d.1x({2g:"4m("+M.x+"2v, 5Q, 5Q)"});13.40(J,1r)}}).1E(13));13.1i.1d.1x(T);13.1i.1d.1x({"1Y-5z":M.x?"iX":"dX",2r:1-0.7*1o.3w(M.x/S),2g:"4m("+M.x+"2v, 5Q, 5Q)"});G=0;1a}M.x=G;M.z=-50*1o.3w(M.x/I);M.dZ=-60*(M.x/I);13.1i.1d.1x({2r:1-0.7*1o.3w(M.x/I),2g:"4m("+M.x+"2v, 5Q, "+M.z+"2v)"})}}).1E(13);13.1d.1C("2p",L)},dn:17(){1c H,G;if(13.3C.1I){13.4L=13.3C}1k{H=13.3U.2q("3Q-aU");if(H){if(y.1e.2L.bl){G=y.$A(1m.b7(\'.8P[3Q-aU="\'+H+\'"]\'))}1k{G=y.$A(1m.9p("A")).2V(17(I){1a H==I.2q("3Q-aU")})}h(G).36(17(J){1c I,K;I=i(J);if(I&&I.3C.1I>0){1a}if(I){K=1t k(I.1i.1J.2d,I.1i.1l.2d,I.1i.3m,1h,I.1i.4n)}1k{K=1t k().9t(J,I?I.6x:1h)}if(13.1i.1l.1U.4F(K.1l.1U)&&13.1i.1J.1U.4F(K.1J.1U)){K=13.1i}13.4L.38(K)},13);13.6P=13.1i}}if(13.4L.1I>1){13.5h.1A("dN-aP");13.56=y.$1t("2Y",{"3M":"1q-2A-iV"}).1Z(13.5h);13.4j=1t r(13.56);h(13.4L).36(17(I){1c J=h(17(K){13.8I(I);13.40(I)}).1E(13);I.dT=13.4j.dS(y.$1t("24",{1U:I.8v("1J")}).1C("21 1Q",17(K){K.2a()}).1C("21 "+("7z"==13.1p("aV")?"7x 8k":"1Q"),h(17(L,K){if(13.5V){3P(13.5V)}13.5V=1n;if("7x"==L.1y){13.5V=h(J).2y(K)}1k{if("21"==L.1y||"1Q"==L.1y){J()}}}).2E(13,60)))},13);13.2M.4y.5q();13.2M.4C.5q()}1k{13.5h.1T("dN-aP");13.2M.4y.4i();13.2M.4C.4i()}},e6:17(){1c G;if(13.4j){13.4j.2a();13.4j=1h}if(13.56){13.56.2P();13.56=1h}if(13.4L.1I>1&&!13.3C.1I){13.1d.1N("2p");13.1i.1d.2P().2q("2l");13.1i.1d.5B("2l");13.6P.1d.1Z(13.1d);13.7o(13.6P);5l(G=13.4L.iU()){if(G!==13.6P){if(G.1J.1d){G.1J.1d.5i();G.1J.1d=1h}if(G.1l.1d){G.1l.1d.5i();G.1l.1d=1h}G=1h}}}13.4L=[]},6f:17(){if(!13.2i||!13.1L){1a}if("8R"==y.1e.4N&&"8L"==y.1e.3B&&7==5D(y.1e.7l)){dM(m);m=1h}h(1m).1N("bI",13.8F);13.4E(1h,1r);13.2i=1n;if(w.1e.4Z.9w&&w.1e.4Z.5p()){w.1e.4Z.dL()}1k{if(y.1e.2L.1Y){13.1d.1N("2S").1x({1Y:""});13.1d.1C("2S",13.8A);if(y.1e.4l&&("4l"===y.1e.3B||"6h"===y.1e.3B)){4D(h(17(){13.8A()}).1E(13),8g)}13.3S.1N("2S").1x({1Y:""});13.3S.1x({1Y:"aR 0.6s 4S-4T(0.e1, 0.iY, 0.ed, 0.iZ) 0.6Z"}).1F();if(y.1e.6u&&"4l"!==y.1e.3B){13.1d.1x({1Y:"aR .4s 4S-4T(0.8g, 0, 0.aW, 0.9V) 6Z"}).1F()}1k{13.1d.1x({1Y:"aR .4s 4S-4T(0.8g, -0.j2, 0.aW, 0.9V) 6Z"}).1F()}if("3i"==13.1p("3V")&&"2B"!==13.1p("65")){13.1i.1d.1x({"1V-1g":13.1i.1F("1l").1g});13.1i.1d.1x({"1V-1f":13.1i.1F("1l").1f})}13.3S.1x({2r:0.4});13.1d.1x({2r:0.j1,2g:"4c(0.4)"})}1k{13.8A()}}},2A:17(I){if(!13.1i.2f()||!13.2i||13.1L){if(!13.1i.2f()){if(I){13.5T=y.1X({},I);I.4I()}13.1i.5X(13.7o.1E(13));if(!13.5r){13.5r=h(13.8o).1E(13).2y(8d)}}1a}if(I){I.4I()}1c G=h(13.1d).26("cr"),H=1m.iT();13.b4();13.6U--;13.4E(1h,1r);13.bv();13.bs();13.2i=1n;if(!13.3c){13.3c=y.$1t("2Y").1A("1q-2A").1A(13.1p("5x")).1x({2r:0});13.5h=y.$1t("2Y").1A("1q-2A-dm").1Z(13.3c);13.8t=y.$1t("2Y").1A("1q-2A-iS").1Z(13.5h);h(["4C","4y","6f"]).36(17(K){1c J="1q-2o";13.2M[K]=y.$1t("2o",{8x:13.1p("9T-iL-"+K)}).1A(J).1A(J+"-"+K);H.b5(13.2M[K]);4r(K){1B"4C":13.2M[K].1C("21 1Q",17(L){L.2a();13.40(13.83())}.2E(13));1G;1B"4y":13.2M[K].1C("21 1Q",17(L){L.2a();13.40(13.89())}.2E(13));1G;1B"6f":13.2M[K].1C("21 1Q",17(L){L.2a();13.6f()}.2E(13));1G}},13);13.8t.3n(H);13.3c.1C("4x 51 3q",h(17(J){h(J).2a()}));if(13.1p("e8")){13.3c.1C("21 1Q",17(J){if("3i"!==13.1p("3V")&&13.1d.9O(J.e3())){1a}J.2a();13.6f()}.2E(13))}13.8F=h(17(K){1c J=1h;if(27!==K.8s&&37!==K.8s&&39!==K.8s){1a}h(K).2a();if(27===K.8s){13.6f()}1k{J=(37===K.8s)?13.83():13.89();if(J){13.40(J)}}}).2E(13);13.8e=h(17(){1c J;13.1d.1N("2S").1x({1Y:"",2g:"4m(0,0,0)"});if(13.1L){1a}13.1L=1r;13.3c.1x({2r:1});13.1b.9h(13.1p("65"));13.2c=y.4a(13.3d);13.5H();if(13.3X&&13.1i.3m){if(13.1i.43){13.3X.3n(y.$1t("a",{6K:13.1i.43}).1C("21 1Q",13.8N.1E(13)).5k(13.1i.3m))}1k{13.3X.5k(13.1i.3m)}13.3X.1A("1q-5q")}if("3i"!==13.1p("3V")){13.9i(1r);13.9l(1r)}13.2i=1r;if("3i"===13.1p("3V")){13.4w()}if(y.1e.3t&&13.bW&&13.1b.5p){13.6V(1r,13.1p("8H"));13.bW=1n}13.8t.1T("1q-3f").1A("1q-97 1q-6n");13.56&&13.56.1T("1q-3f").1A("1q-97 1q-6n");if(13.4j){13.4j.bP();13.8I(13.1i)}if(G){G.1Z(13.3c,((1o.6e(1o.6O()*bN)+1)%2)?"1H":"2Q")}if(13.4L.1I&&!13.3C.1I){13.bL()}h(1m).1C("bI",13.8F);if("8R"==y.1e.4N&&"8L"==y.1e.3B&&7==5D(y.1e.7l)){m=u()}s("e7",13.id)}).1E(13);13.8A=h(17(){13.1d.1N("2S");if(!13.1L){1a}if(13.1L){h(1m).1N("bI",13.8F);13.4E(1h,1r)}13.e6();13.1L=1n;13.1b.9h(13.1p("3O"));13.1d.b0(13.1i.6C("1J"),13.1i.1d);13.1i.6z("1J");h(13.1i.1d).1x({1f:"",1g:"","1V-1f":1o.2h(13.1i.1F("1J").1f),"1V-1g":1o.2h(13.1i.1F("1J").1g)});13.1d.1x({2r:"",1Y:""});13.1d.1x({2g:"4m(0,0,0)"});13.1d.1Z(13.3U);13.7u(1r);if(13.3X){13.3X.2P();13.3X=1h}13.bv();13.bs();if("3i"==13.1p("4A")){13.4w()}1k{if(1n!==13.1p("3O")){13.9i("2W"===13.1p("4A"));13.9l("2W"===13.1p("4A")&&!13.1p("2A"))}}13.6V();13.3S.1N("2S");13.3c.2P();13.3S.2P();13.3S=1h;h(y.1e.49()).1x({5d:""});h(1m.3H).1x({5d:""});13.2i=1r;if(y.1e.2n<10){13.5H()}1k{h(1j).bt("dJ","7t")}s("dl",13.id)}).1E(13);13.8r=y.$1t("2Y",{"3M":"1q-1i-dm"}).1Z(13.5h);13.4R=y.$1t("8c").1Z(13.8r)}13.dn();h(y.1e.49()).1x({5d:"3f"});h(1m.3H).1x({5d:"3f"}).1F();if("dq"==13.1p("2A")){13.aE();w.1e.4Z.bH(13.3c,{bE:h(17(){13.8e()}).1E(13),bB:13.8A,8y:h(17(){13.aN()}).1E(13)})}1k{4D(h(17(){13.aN()}).1E(13),96)}},aE:17(){1c G;G=y.$1t("24",{1U:13.1i.8v("1l")});13.3S=y.$1t("2Y").1A("1q-2A-bg").3n((y.1e.2L.8q||y.1e.2n<10)?G:1t y.8Z(G).5e(b).6C()).1Z(13.3c);if("3i"===13.1p("3V")){13.5h.1A("1q-3i-1l"+("1l"===13.1p("65")?" 1q-1l-in":"")).1F()}13.1d.b0(13.1i.6C("1l"),13.1i.1d);13.1i.6z("1l");13.3c.1Z(1m.3H);13.7B=17(){1c H=13.8r;if(h(13.4R).1F().1f>50){H=13.4R}1a 17(){1a"3i"==13.1p("3V")&&"2B"!==13.1p("65")?6m:1o.5y(h(H).8u().1f)}}.2b(13);13.6A=17(){1c H=13.8r;if(h(13.4R).1F().1g>50){H=13.4R}1a 17(){1a"3i"==13.1p("3V")&&"2B"!==13.1p("65")?6m:1o.5y(h(H).8u().1g)}}.2b(13);13.8t.1T("1q-97 1q-6n").1A("1q-3f");13.56&&13.56.1T("1q-97 1q-6n").1A("1q-3f");13.1i.1d.1x({"1V-1g":1o.2h(13.1i.1F("1l").1g,13.6A())});13.1i.1d.1x({"1V-1f":1o.2h(13.1i.1F("1l").1f,13.7B())});13.4R.3n(13.1d);if(13.1p("3X")){13.3X=y.$1t("dE",{"3M":"1q-3m"}).1Z(13.4R)}},aN:17(){13.aE();13.1d.1x({1Y:""});13.1d.1x({2g:"4c(0.6)"}).1F();if(y.1e.6u&&"4l"!==y.1e.3B){13.1d.1x({1Y:y.1e.87+" 0.6s 4S-4T(0.88, 0.9c, 0.aB, 1) 6Z"})}1k{13.1d.1x({1Y:y.1e.87+" 0.6s 4S-4T(0.88, 0.9c, 0.aB, 1.ay) 6Z"})}if(y.1e.2L.1Y){13.1d.1C("2S",13.8e);if(y.1e.4l&&("4l"===y.1e.3B||"6h"===y.1e.3B)){4D(h(17(){13.8e()}).1E(13),jd)}}1k{13.8e.2y(16,13)}13.3c.1x({2r:1});13.1d.1x({2g:"4c(1)"})},8N:17(){if(13.1i.43){1j.a4(13.1i.43,"ia")}},89:17(){1c G=(13.1L?13.4L:13.3C).2V(17(J){1a(-1!==J.1J.2m||-1!==J.1l.2m)}),H=G.1I,I=h(G).6a(13.1i)+1;1a(1>=H)?1h:G[(I>=H)?0:I]},83:17(){1c G=(13.1L?13.4L:13.3C).2V(17(J){1a(-1!==J.1J.2m||-1!==J.1l.2m)}),H=G.1I,I=h(G).6a(13.1i)-1;1a(1>=H)?1h:G[(I<0)?H-1:I]},f3:17(H,I){1c G=13.3C.2V(17(J){1a((J.1l.1U.4F(H)||J.1l.2d.4F(H))&&(J.1J.1U.4F(I)||J.1J.2d.4F(I)))})||[];1a G[0]||((I&&H&&"1O"===y.1P(I)&&"1O"===y.1P(H))?1t k(I,H):1h)},au:17(H){1c G=13.3C.2V(17(I){1a(I.4n===H)})||[];1a G[0]},f7:17(G){1a 13.3C[G]}};t={4q:"i3.0.8",4V:17(J,H){1c I=1h,G=[];y.$A((J?[h(J)]:y.$A(1m.9u("8P")).5E(y.$A(1m.9u("al"))))).36((17(K){if(h(K)){if(!i(K)){I=1t j(K,H);if(x&&!I.1p("a2")){I.2a();I=1h}1k{D.38(I);G.38(I)}}}}).1E(13));1a J?G[0]:G},2a:17(J){1c H,I,G;if(J){(I=i(J))&&(I=D.9X(D.6a(I),1))&&I[0].2a()&&(4P I[0]);1a}5l(H=D.1I){I=D.9X(H-1,1);I[0].2a();4P I[0]}},iw:17(G){13.2a(G);1a 13.4V(G)},40:17(L,K,J,H){1c I=i(L),G;if(I){G="5Z"===y.1P(K)?I.au(K):I.f3(K,J);if(G){I.40(G)}}},kr:17(J,I){1c H=i(J),G;if(H){4r(y.1P(I)){1B"5Z":G=H.au(I);1G;1B"63":G=H.f7(I);1G;1R:}if(G){H.40(G)}}},4C:17(H){1c G;(G=i(H))&&G.40(G.83())},4y:17(H){1c G;(G=i(H))&&G.40(G.89())},ko:17(H){1c G;(G=i(H))&&G.4w()},kv:17(H){1c G;(G=i(H))&&G.4E()},2A:17(H){1c G;(G=i(H))&&G.2A()},6f:17(H){1c G;(G=i(H))&&G.6f()},eH:17(G,H){if(!p[G]){p[G]=[]}if("17"==y.1P(H)){p[G].38(H)}},kc:17(G){1a!!i(G)}};h(1m).1C("9z",17(){1c H=1j[B+"7c"]||{};d();F=y.$1t("2Y",{"3M":"3p-3f-6S"}).1Z(1m.3H);E=(y.1e.3t&&1j.en&&1j.en("(1V-ey-1f: eI), (1V-ey-1g: eI)").jH);if(y.1e.3t){y.1X(o,l)}1S(1c G=0;G<z.1I;G++){if(H[z[G]]&&y.$F!==H[z[G]]){t.eH(z[G],H[z[G]])}}t.4V();x=1n});1j.al=1j.al||{};1a t})();', 0, 1279, "|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||this||||function|||return|zoomBox|var|node|jBrowser|width|height|null|image|window|else|zoom|document|false|Math|option|mz|true|lens|new|Event|options|Custom|jSetCss|type|event|jAddClass|case|jAddEvent|size|jBind|jGetSize|break|top|length|small|handler|expanded|left|jRemoveEvent|string|jTypeOf|btnclick|default|for|jRemoveClass|src|max|mode|extend|transition|jAppendTo||tap|||img||jFetch|||arguments|stop|call|zoomSize|url|position|loaded|transform|min|ready|boundaries|pointerType|style|state|ieMode|button|touchdrag|getAttribute|opacity|important|auto|enum|px|prototype||jDelay|inner|expand|magnifier|changedTouches|undefined|jBindAsEvent|parseFloat|context|navigator|timeStamp|mousedrag|clientY|features|buttons|100|clientX|jRemove|bottom|right|transitionend|active|jCallEvent|filter|click|jDel|div|pos||||oneOf|jStore||jEach||push||hint|pointerEnabled|expandBox|zoomSizeOrigin|test|hidden|rootCSS|settings|always|handle|none|activating|caption|append|defined|magic|dbltap|orientation|match|mobile|boolean|Doc|abs|try|Class|stopDefaults|touch|uaName|additionalImages|identifier|dragstart|jSetCssProp|border|body|parent|init|jGetCss|off|class|ceil|zoomMode|clearTimeout|data|catch|expandBg|setAttribute|placeholder|expandZoomOn|webkit|expandCaption|Element|touchpinch|update|hasOwnProperty||link|||||preview|getDoc|detach|array|scale|pushToEvents|target|dblbtnclick|styles|firstChild|hide|expandThumbs|custom|chrome|translate3d|origin|touches|reverse|version|switch||listeners|root|replace|activate|mousescroll|next|pow|zoomOn|schema|prev|setTimeout|deactivate|has|J_TYPE|parentNode|stopQueue|innerHeight|trident|expandGallery|moveTimer|platform|disabled|delete|vertical|expandFigure|cubic|bezier|direction|start|domPrefix|jTrim|requestAnimationFrame|fullScreen||touchstart|messageBox||||expandNav|constructor||MSPOINTER_TYPE_TOUCH|visibility|distance|stopDistribution|overflow|blur|innerWidth|instanceof|expandStage|kill|handlers|changeContent|while|add|pageX|pageY|enabled|show|loadTimer|move|timer|toLowerCase|spos|FX|cssClass|round|duration|jCamelize|removeAttribute|absolute|parseInt|concat|contains|events|resizeCallback|activateTimer|cubicBezier|gecko|className|nodeType|innertouch|scroll|selectedItem|0px|touchend|onerror|initEvent|J_UUID|updateTimer|String|load|mouseup|element|||isQueueStopped|number|dppx|expandZoomMode|ease|throw||Array|indexOf|getAbsoluteURL|onload|targetTouches|floor|close|loadingBox|opera|apply|jGetPageXY|documentElement|dragged|Infinity|visible|pointerup|render|now|pointermove||filters|androidBrowser|MSPointerUp|hunits|originalTitle|android|setCurNode|expandMaxHeight|mousedown|getNode|getButton|no|to|found|not|MagicJS|enable|href|selected|css|thumb|random|primaryImage|shift|wunits|wrapper|onTouchEnd|hintRuns|showHint|originalImg|jGetScroll|join|0s||cycles|onTouchStart|tm|tooltip|svg|addCSS||padding|fromCharCode|oncomplete|callback|Options|timedout|threshold|easeFn|set|MSPointerMove|originalImage|end|_handlers|uaVersion|onComplete|engine|setupZoom|onready|normalSize|minimum|200|resize|setSize|cssTransformProp|continuous|mouseover|alternate|hover|display|expandMaxWidth|canvas|ms|mousemove|zoomCaption|continue|split|getBoundingClientRect|storage|getClientXY|createElement|fromJSON|touchmove|setOrientation|Transition|pointerdown|MSPointerDown|jGetRect|byTag|animate|deltaY|scrollTop|margin|getRelated|horizontal|scrollLeft|_cleanup||getPrev||||cssTransform|175|getNext|cssPrefix|jGetPosition|figure|400|onExpand|on|600|_unbind|_timer|complete|mouseout|_EVENTS_|readyState|itemCSS|showLoading|toString|cssFilters|expandImageStage|keyCode|expandControls|getInnerSize|getURL|parseCubicBezier|title|fallback|sqrt|onClose|Opacity|reset|linear|PFX|keyboardCallback|hideTimer|textClickZoomHint|setActiveThumb|index|XMLHttpRequest|safari|Message|openLink|object|MagicZoom|textExpandHint|ios|fromString|pStyles|compatMode|perspective|pStyles_arr|exists|win|SVGImage||zoomPosition|handleMouseUp|typeof||||fade|||dblclick|toUpperCase|885|translate|loadSmall|lazyZoom|charAt|setMode|registerActivateEvent|onprogress|originalImgSrc|registerDeactivateEvent|currentSrc|nextImage|magiczoom|getElementsByTagName|_event_prefix_|naturalWidth|cancelAnimationFrame|parseNode|byClass|getStorage|capable|isNaN|btnclickEvent|domready|forceAnimation|reflow|J_EUID|relatedTarget|touchmovement|deactivating|onTouchMove|loopBind|dragend|pointerId|exitFullscreen|_bind|createEvent|callee|hasChild|xhr|normalizeCSS|eventType|createElementNS|text|implement|045|status|splice|isPrimary|dashize|aspectRatio|handleTouchStart|autostart|10000px|open|Date|ImageLoader|previousScale|https|tagName|||||||||||removeChild|MagicZoomPlus|Za|el_arr|slice|opr|styles_arr|Tooltip|deltaX|temporary|imageByOrigin|hideFX|cssDomPrefix|ignore|275|onClick|resizeTimer|320|maximum|handleTouchMove|prepareExpandedView|ifndef|dispatchEvent|uuid|loadImg|handleTouchEnd|scrollFX|J_EXT|once|expandToWindow|rel|thumbs|05|all|HTMLElement|changeEventName|gallery|selectorTrigger|735|isMouse|hideLoading|300|replaceChild|w3|errorEventName||hideHint|appendChild|msPointerEnabled|querySelectorAll|org|calc|pointerout||priority|_event_add_|000001|getTarget||reflowZoom|cycle|getElementsByClassName|_event_del_|query|startTime|stopAnimation|jClearEvents|onResize|hintMessage|cubicBezierAtTime|unregisterDeactivateEvent|jRaiseEvent|loadedBytes|unregisterActivateEvent|Alpha|createTextNode|onabort|onclick|selectorsMoveFX|onExit|Function|deltaMode|onEnter|presto|handleMouseDown|request|keydown|loadZoom|setProps|swipe|abort|101|textHoverZoomHint|run|span|onBeforeRender|0001|caller|http|www|mobileZoomHint|filterBlur|Left|stdDeviation|Bottom|naturalHeight|Top|fps|loop|finishTime|onAfterRender|interval|onStart|onreadystatechange|isReady|out|euid|cancelBubble||03|355|preventDefault|addEventListener|which|loadBlob|xhr2|wheelDelta|wheelDeltaY|wheelDeltaX|detail|curScale||dragmove|_initialDistance|handleMouseMove|doc|onxhrerror|304|wrap|error|progressiveLoad|jDefer|stopPropagation|requestFullScreen|easeOutBack|elasticIn|jHasClass|jSetOpacity|easeInBack|easeOutCubic|progid|bounceIn|999|parseSchema|styleFloat|getComputedStyle|Number|setMessage|jToBool|DXImageTransform|easeInCubic|165|getElementById|compareDocumentPosition|touchScreen|clientWidth|webkit419|easeInSine|easeOutSine|easeOutQuad|Microsoft|easeInQuad|easeOutExpo|easeInExpo|offsetWidth|Right|setCaption|onZoomReady|setupSelectors|RegExp|onUpdate|od|ts|zoomHeight|stopImmediatePropagation|onswipe|selectItem|onExpandClose|stage|setupExpandGallery||transitionEffect|fullscreen|hone|forEach|R0lGODlhAQABAAD|ACwAAAAAAQABAAACADs|base64|gif|||rightClick|10000|100000|inline|mjs|figcaption|zIndex|magicJS|fontWeight|backcompat|UIEvent|delay|cancel|clearInterval|with|onZoomOut|onZoomIn|changeZoomLevel|unregisterEvents|addItem|selector|backward|firefox|moveBind|300ms|DocumentTouch|deg|variableZoom|895|upscale|getOriginalTarget|shown|0ms|destroyExpandGallery|onExpandOpen|closeOnClickOutside|phone|registerEvents|MouseEvent|setupContent|685|MSPointerOut|animation|enclose|zoomWidth|querySelector|backCompat|textnode||nativize|matchMedia|getTime|documentMode||Webkit|stylesId|runtime|crios|Moz|moz|charCodeAt|device|onchange|initDrag|cos|UUID|500|msExitFullscreen|items|PI|registerCallback|767px|Click|item|toArray|Object|cancelFullScreen|insertRule|date|cssText|background|block|loadOptions|mozCancelAnimationFrame|styleSheet|multibackground|getJSON|removeRule|get|touchOptions|scrollbarsWidth|deleteRule|imageByURL|10px|screen|setInterval|imageByIndex|sheet|Image|ontouchstart|collection|hiptop|xxxxxxxx|regexp|iris|iemobile|KeyEvent|yxxx|KeyboardEvent|420|fireEvent|compal||xxxxxxxxxxxx|avantgo|4xxx|blackberry|bada|elaine|meego|xxxx|blazer|v3|g4bc9bfe|createEventObject|fennec|TR|air|evaluate|removeCSS|fullscreenEnabled|msFullscreenEnabled|webkitCancelFullScreen|webkitexitFullscreen|map|xpath|cssRules|toFloat|userAgent|head|addRule|edge|mozCancelFullScreen|oCancelFullScreen|SVG11|jToInt|4294967296|feature|generateUUID|getHashCode|hasFeature|implementation|ProgressEvent|msCancelFullScreen|FormData|DOMContentLoaded|doScroll|withCredentials|xy|symbian|oRequestAnimationFrame|jToggleClass|webkitRequestAnimationFrame|mozRequestAnimationFrame|other|msRequestAnimationFrame|oCancelAnimationFrame|red|2px|9999|webkitCancelRequestAnimationFrame|msCancelAnimationFrame|linux|mac|jGetFullScroll|mozInnerScreenY|getBoxObjectFor|clientTop|clientLeft|offsetHeight|WebKitPoint|jGetStyles|webos|unknown|taintEnabled|currentStyle|cssfilters|Width|ExitFullscreen|requestFullscreen|RequestFullScreen|RequestFullscreen|CancelFullScreen|MSFullscreenChange|MSFullscreenError|fullscreenerror|prefix|fullscreenchange|activeElement|FullScreen|webkitIsFullScreen|webkitTransitionEnd|lineHeight|WebKitTransitionEvent|getPropertyValue|TransitionEvent|cssFloat|float|FullscreenElement|fullscreenElement|536|lt|offsetLeft|ActiveXObject|plucker|pocket|isTouchEvent|isPrimaryTouch|removeEventListener|toElement|fromElement|returnValue|psp|srcElement|pointerover|MSPointerOver|re|attachEvent|mmp|netfront|midp|maemo|lge|ob|sort|detachEvent|ixi|os|palm|series|treo|xiino|insertBefore|jGetStyle|jSetStyle|xda|childNodes|innerText|offsetTop|offsetParent|html|innerHTML|iframe|DOMElement|pageYOffset|pageXOffset|jGetFullSize|scrollWidth|scrollHeight|clientHeight|up|windows|wap|presto925|vodafone|kindle|Tap|SourceGraphic|units|sides|ul|feGaussianBlur|setAttributeNS|isset|2000|1999|xlink|li|v5|Next|textBtnPrev|Previous|Touch|textBtnNext|Close|_self|zoomDistance|Hover||||textBtnClose|parameter|the|cubicOut|backIn|backOut|elasticOut||cubicIn||quadOut|sineOut|expoIn|expoOut|quadIn|bounceOut|refresh|parse|Incorrect|definition|of|JSON|NEGATIVE_INFINITY|MagicToolboxTooltip|MessageBox|5000|Double|pinchstart|message|loading|120|btn|350|relative|2em|2147483647|dummy|256|controls|createDocumentFragment|pop|thumbnails|forward|100ms|030|220|isFinite|01|280|201|line|textAlign|availHeight|250|before|radius|availWidth|scrollTo|devicePixelRatio|800|z0|9_|rev|srcset|fontSize|fontFamily|sans|serif|color|contextmenu|getRatio|selectstart|MobileOptions|sineIn|POSITIVE_INFINITY|745|715|575|easeInOutSine|1000|curFrame|infinite|normal|roundCss|setTransition|445|085|675|215|matches|easeInOutCubic|055|955|easeInOutQuad|455|515|destroy|send|onwheel|wheel|mousewheel|URL|000244140625|deltaFactor|pinchupdate|delta|deltaZ|webkitURL|lengthComputable|createObjectURL|GET|responseType|blob|537|response|total|static|progress|645|565|running|easeInOutExpo|easeInCirc|easeInQuart|035|795|06|easeOutQuint|easeInOutQuint|07|335|easeOutCirc|zoomIn|easeInOutBack|265|switchTo|135|785|075|zoomOut|easeInOutCirc|855|04|easeInQuint|easeInOutQuart|easeOutQuart|755".split("|"), 0, {})),
  function(e) {
    "use strict";
    var t = function(t, i) {
      function n(e) {
        return -1 === e ? i.shortPass : -2 === e ? i.containsUsername : (e = e < 0 ? 0 : e, e < 34 ? i.badPass : e < 68 ? i.goodPass : i.strongPass)
      }

      function o(e, t) {
        var n = 0;
        if (e.length < i.minimumLength) return -1;
        if (i.username) {
          if (e.toLowerCase() === t.toLowerCase()) return -2;
          if (i.usernamePartialMatch && t.length) {
            var o = new RegExp(t.toLowerCase());
            if (e.toLowerCase().match(o)) return -2
          }
        }
        n += 4 * e.length, n += s(1, e).length - e.length, n += s(2, e).length - e.length, n += s(3, e).length - e.length, n += s(4, e).length - e.length, e.match(/(.*[0-9].*[0-9].*[0-9])/) && (n += 5);
        var a = ".*[!,@,#,$,%,^,&,*,?,_,~]";
        return a = new RegExp("(" + a + a + ")"), e.match(a) && (n += 5), e.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/) && (n += 10), e.match(/([a-zA-Z])/) && e.match(/([0-9])/) && (n += 15), e.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && e.match(/([0-9])/) && (n += 15), e.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && e.match(/([a-zA-Z])/) && (n += 15), (e.match(/^\w+$/) || e.match(/^\d+$/)) && (n -= 10), n > 100 && (n = 100), n < 0 && (n = 0), n
      }

      function s(e, t) {
        for (var i = "", n = !1, o = 0; o < t.length; o++) {
          n = !0;
          for (var s = 0; s < e && s + o + e < t.length; s++) n = n && t.charAt(s + o) === t.charAt(s + o + e);
          s < e && (n = !1), n ? (o += e - 1, n = !1) : i += t.charAt(o)
        }
        return i
      }

      function a() {
        var s = !0,
          a = i.showText,
          r = i.showPercent,
          l = e("<div>").addClass("pass-graybar"),
          c = e("<div>").addClass("pass-colorbar"),
          d = e("<div>").addClass("pass-wrapper").append(l.append(c));
        return t.parent().addClass("pass-strength-visible"), i.animate && (d.css("display", "none"), s = !1, t.parent().removeClass("pass-strength-visible")), i.showPercent && (r = e("<span>").addClass("pass-percent").text("0%"), d.append(r)), i.showText && (a = e("<span>").addClass("pass-text").html(i.enterPass), d.append(a)), t.after(d), t.keyup(function() {
          var s = i.username || "";
          s && (s = e(s).val());
          var l = o(t.val(), s);
          t.trigger("password.score", [l]);
          var d = l < 0 ? 0 : l;
          if (c.css({
              backgroundPosition: "0px -" + d + "px",
              width: d + "%"
            }), i.showPercent && r.html(d + "%"), i.showText) {
            var u = n(l);
            !t.val().length && l <= 0 && (u = i.enterPass), a.html() !== e("<div>").html(u).html() && (a.html(u), t.trigger("password.text", [u, l]))
          }
        }), i.animate && (t.focus(function() {
          s || d.slideDown(i.animateSpeed, function() {
            s = !0, t.parent().addClass("pass-strength-visible")
          })
        }), t.blur(function() {
          !t.val().length && s && d.slideUp(i.animateSpeed, function() {
            s = !1, t.parent().removeClass("pass-strength-visible")
          })
        })), this
      }
      var r = {
        shortPass: "The password is too short",
        badPass: "Weak; try combining letters & numbers",
        goodPass: "Medium; try using special charecters",
        strongPass: "Strong password",
        containsUsername: "The password contains the username",
        enterPass: "Type your password",
        showPercent: !1,
        showText: !0,
        animate: !0,
        animateSpeed: "fast",
        username: !1,
        usernamePartialMatch: !0,
        minimumLength: 4
      };
      return i = e.extend({}, r, i), a.call(this)
    };
    e.fn.password = function(i) {
      return this.each(function() {
        new t(e(this), i)
      })
    }
  }(jQuery),
  function(e, t) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
      return t(e, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("jquery")) : e.jQueryBridget = t(e, e.jQuery)
  }(window, function(e, t) {
    "use strict";

    function i(i, s, r) {
      function l(e, t, n) {
        var o, s = "$()." + i + '("' + t + '")';
        return e.each(function(e, l) {
          var c = r.data(l, i);
          if (!c) return void a(i + " not initialized. Cannot call methods, i.e. " + s);
          var d = c[t];
          if (!d || "_" == t.charAt(0)) return void a(s + " is not a valid method");
          var u = d.apply(c, n);
          o = void 0 === o ? u : o
        }), void 0 !== o ? o : e
      }

      function c(e, t) {
        e.each(function(e, n) {
          var o = r.data(n, i);
          o ? (o.option(t), o._init()) : (o = new s(n, t), r.data(n, i, o))
        })
      }(r = r || t || e.jQuery) && (s.prototype.option || (s.prototype.option = function(e) {
        r.isPlainObject(e) && (this.options = r.extend(!0, this.options, e))
      }), r.fn[i] = function(e) {
        if ("string" == typeof e) {
          return l(this, e, o.call(arguments, 1))
        }
        return c(this, e), this
      }, n(r))
    }

    function n(e) {
      !e || e && e.bridget || (e.bridget = i)
    }
    var o = Array.prototype.slice,
      s = e.console,
      a = void 0 === s ? function() {} : function(e) {
        s.error(e)
      };
    return n(t || e.jQuery), i
  }),
  function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
  }("undefined" != typeof window ? window : this, function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
      if (e && t) {
        var i = this._events = this._events || {},
          n = i[e] = i[e] || [];
        return -1 == n.indexOf(t) && n.push(t), this
      }
    }, t.once = function(e, t) {
      if (e && t) {
        this.on(e, t);
        var i = this._onceEvents = this._onceEvents || {};
        return (i[e] = i[e] || {})[t] = !0, this
      }
    }, t.off = function(e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        var n = i.indexOf(t);
        return -1 != n && i.splice(n, 1), this
      }
    }, t.emitEvent = function(e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        var n = 0,
          o = i[n];
        t = t || [];
        for (var s = this._onceEvents && this._onceEvents[e]; o;) {
          var a = s && s[o];
          a && (this.off(e, o), delete s[o]), o.apply(this, t), n += a ? 0 : 1, o = i[n]
        }
        return this
      }
    }, e
  }),
  function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
      return t()
    }) : "object" == typeof module && module.exports ? module.exports = t() : e.getSize = t()
  }(window, function() {
    "use strict";

    function e(e) {
      var t = parseFloat(e);
      return -1 == e.indexOf("%") && !isNaN(t) && t
    }

    function t() {}

    function i() {
      for (var e = {
          width: 0,
          height: 0,
          innerWidth: 0,
          innerHeight: 0,
          outerWidth: 0,
          outerHeight: 0
        }, t = 0; t < c; t++) {
        e[l[t]] = 0
      }
      return e
    }

    function n(e) {
      var t = getComputedStyle(e);
      return t || r("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), t
    }

    function o() {
      if (!d) {
        d = !0;
        var t = document.createElement("div");
        t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";
        var i = document.body || document.documentElement;
        i.appendChild(t);
        var o = n(t);
        s.isBoxSizeOuter = a = 200 == e(o.width), i.removeChild(t)
      }
    }

    function s(t) {
      if (o(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
        var s = n(t);
        if ("none" == s.display) return i();
        var r = {};
        r.width = t.offsetWidth, r.height = t.offsetHeight;
        for (var d = r.isBorderBox = "border-box" == s.boxSizing, u = 0; u < c; u++) {
          var h = l[u],
            f = s[h],
            p = parseFloat(f);
          r[h] = isNaN(p) ? 0 : p
        }
        var m = r.paddingLeft + r.paddingRight,
          g = r.paddingTop + r.paddingBottom,
          v = r.marginLeft + r.marginRight,
          y = r.marginTop + r.marginBottom,
          b = r.borderLeftWidth + r.borderRightWidth,
          C = r.borderTopWidth + r.borderBottomWidth,
          x = d && a,
          w = e(s.width);
        !1 !== w && (r.width = w + (x ? 0 : m + b));
        var E = e(s.height);
        return !1 !== E && (r.height = E + (x ? 0 : g + C)), r.innerWidth = r.width - (m + b), r.innerHeight = r.height - (g + C), r.outerWidth = r.width + v, r.outerHeight = r.height + y, r
      }
    }
    var a, r = "undefined" == typeof console ? t : function(e) {
        console.error(e)
      },
      l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
      c = l.length,
      d = !1;
    return s
  }),
  function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", t) : "object" == typeof module && module.exports ? module.exports = t() : e.matchesSelector = t()
  }(window, function() {
    "use strict";
    var e = function() {
      var e = window.Element.prototype;
      if (e.matches) return "matches";
      if (e.matchesSelector) return "matchesSelector";
      for (var t = ["webkit", "moz", "ms", "o"], i = 0; i < t.length; i++) {
        var n = t[i],
          o = n + "MatchesSelector";
        if (e[o]) return o
      }
    }();
    return function(t, i) {
      return t[e](i)
    }
  }),
  function(e, t) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
      return t(e, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("desandro-matches-selector")) : e.fizzyUIUtils = t(e, e.matchesSelector)
  }(window, function(e, t) {
    var i = {};
    i.extend = function(e, t) {
      for (var i in t) e[i] = t[i];
      return e
    }, i.modulo = function(e, t) {
      return (e % t + t) % t
    }, i.makeArray = function(e) {
      var t = [];
      if (Array.isArray(e)) t = e;
      else if (e && "object" == typeof e && "number" == typeof e.length)
        for (var i = 0; i < e.length; i++) t.push(e[i]);
      else t.push(e);
      return t
    }, i.removeFrom = function(e, t) {
      var i = e.indexOf(t); - 1 != i && e.splice(i, 1)
    }, i.getParent = function(e, i) {
      for (; e.parentNode && e != document.body;)
        if (e = e.parentNode, t(e, i)) return e
    }, i.getQueryElement = function(e) {
      return "string" == typeof e ? document.querySelector(e) : e
    }, i.handleEvent = function(e) {
      var t = "on" + e.type;
      this[t] && this[t](e)
    }, i.filterFindElements = function(e, n) {
      e = i.makeArray(e);
      var o = [];
      return e.forEach(function(e) {
        if (e instanceof HTMLElement) {
          if (!n) return void o.push(e);
          t(e, n) && o.push(e);
          for (var i = e.querySelectorAll(n), s = 0; s < i.length; s++) o.push(i[s])
        }
      }), o
    }, i.debounceMethod = function(e, t, i) {
      var n = e.prototype[t],
        o = t + "Timeout";
      e.prototype[t] = function() {
        var e = this[o];
        e && clearTimeout(e);
        var t = arguments,
          s = this;
        this[o] = setTimeout(function() {
          n.apply(s, t), delete s[o]
        }, i || 100)
      }
    }, i.docReady = function(e) {
      var t = document.readyState;
      "complete" == t || "interactive" == t ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e)
    }, i.toDashed = function(e) {
      return e.replace(/(.)([A-Z])/g, function(e, t, i) {
        return t + "-" + i
      }).toLowerCase()
    };
    var n = e.console;
    return i.htmlInit = function(t, o) {
      i.docReady(function() {
        var s = i.toDashed(o),
          a = "data-" + s,
          r = document.querySelectorAll("[" + a + "]"),
          l = document.querySelectorAll(".js-" + s),
          c = i.makeArray(r).concat(i.makeArray(l)),
          d = a + "-options",
          u = e.jQuery;
        c.forEach(function(e) {
          var i, s = e.getAttribute(a) || e.getAttribute(d);
          try {
            i = s && JSON.parse(s)
          } catch (t) {
            return void(n && n.error("Error parsing " + a + " on " + e.className + ": " + t))
          }
          var r = new t(e, i);
          u && u.data(e, o, r)
        })
      })
    }, i
  }),
  function(e, t) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("ev-emitter"), require("get-size")) : (e.Outlayer = {}, e.Outlayer.Item = t(e.EvEmitter, e.getSize))
  }(window, function(e, t) {
    "use strict";

    function i(e) {
      for (var t in e) return !1;
      return null, !0
    }

    function n(e, t) {
      e && (this.element = e, this.layout = t, this.position = {
        x: 0,
        y: 0
      }, this._create())
    }
    var o = document.documentElement.style,
      s = "string" == typeof o.transition ? "transition" : "WebkitTransition",
      a = "string" == typeof o.transform ? "transform" : "WebkitTransform",
      r = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
      } [s],
      l = {
        transform: a,
        transition: s,
        transitionDuration: s + "Duration",
        transitionProperty: s + "Property",
        transitionDelay: s + "Delay"
      },
      c = n.prototype = Object.create(e.prototype);
    c.constructor = n, c._create = function() {
      this._transn = {
        ingProperties: {},
        clean: {},
        onEnd: {}
      }, this.css({
        position: "absolute"
      })
    }, c.handleEvent = function(e) {
      var t = "on" + e.type;
      this[t] && this[t](e)
    }, c.getSize = function() {
      this.size = t(this.element)
    }, c.css = function(e) {
      var t = this.element.style;
      for (var i in e) {
        t[l[i] || i] = e[i]
      }
    }, c.getPosition = function() {
      var e = getComputedStyle(this.element),
        t = this.layout._getOption("originLeft"),
        i = this.layout._getOption("originTop"),
        n = e[t ? "left" : "right"],
        o = e[i ? "top" : "bottom"],
        s = this.layout.size,
        a = -1 != n.indexOf("%") ? parseFloat(n) / 100 * s.width : parseInt(n, 10),
        r = -1 != o.indexOf("%") ? parseFloat(o) / 100 * s.height : parseInt(o, 10);
      a = isNaN(a) ? 0 : a, r = isNaN(r) ? 0 : r, a -= t ? s.paddingLeft : s.paddingRight, r -= i ? s.paddingTop : s.paddingBottom, this.position.x = a, this.position.y = r
    }, c.layoutPosition = function() {
      var e = this.layout.size,
        t = {},
        i = this.layout._getOption("originLeft"),
        n = this.layout._getOption("originTop"),
        o = i ? "paddingLeft" : "paddingRight",
        s = i ? "left" : "right",
        a = i ? "right" : "left",
        r = this.position.x + e[o];
      t[s] = this.getXValue(r), t[a] = "";
      var l = n ? "paddingTop" : "paddingBottom",
        c = n ? "top" : "bottom",
        d = n ? "bottom" : "top",
        u = this.position.y + e[l];
      t[c] = this.getYValue(u), t[d] = "", this.css(t), this.emitEvent("layout", [this])
    }, c.getXValue = function(e) {
      var t = this.layout._getOption("horizontal");
      return this.layout.options.percentPosition && !t ? e / this.layout.size.width * 100 + "%" : e + "px"
    }, c.getYValue = function(e) {
      var t = this.layout._getOption("horizontal");
      return this.layout.options.percentPosition && t ? e / this.layout.size.height * 100 + "%" : e + "px"
    }, c._transitionTo = function(e, t) {
      this.getPosition();
      var i = this.position.x,
        n = this.position.y,
        o = parseInt(e, 10),
        s = parseInt(t, 10),
        a = o === this.position.x && s === this.position.y;
      if (this.setPosition(e, t), a && !this.isTransitioning) return void this.layoutPosition();
      var r = e - i,
        l = t - n,
        c = {};
      c.transform = this.getTranslate(r, l), this.transition({
        to: c,
        onTransitionEnd: {
          transform: this.layoutPosition
        },
        isCleaning: !0
      })
    }, c.getTranslate = function(e, t) {
      var i = this.layout._getOption("originLeft"),
        n = this.layout._getOption("originTop");
      return e = i ? e : -e, t = n ? t : -t, "translate3d(" + e + "px, " + t + "px, 0)"
    }, c.goTo = function(e, t) {
      this.setPosition(e, t), this.layoutPosition()
    }, c.moveTo = c._transitionTo, c.setPosition = function(e, t) {
      this.position.x = parseInt(e, 10), this.position.y = parseInt(t, 10)
    }, c._nonTransition = function(e) {
      this.css(e.to), e.isCleaning && this._removeStyles(e.to);
      for (var t in e.onTransitionEnd) e.onTransitionEnd[t].call(this)
    }, c.transition = function(e) {
      if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(e);
      var t = this._transn;
      for (var i in e.onTransitionEnd) t.onEnd[i] = e.onTransitionEnd[i];
      for (i in e.to) t.ingProperties[i] = !0, e.isCleaning && (t.clean[i] = !0);
      if (e.from) {
        this.css(e.from);
        this.element.offsetHeight;
        null
      }
      this.enableTransition(e.to), this.css(e.to), this.isTransitioning = !0
    };
    var d = "opacity," + function(e) {
      return e.replace(/([A-Z])/g, function(e) {
        return "-" + e.toLowerCase()
      })
    }(a);
    c.enableTransition = function() {
      if (!this.isTransitioning) {
        var e = this.layout.options.transitionDuration;
        e = "number" == typeof e ? e + "ms" : e, this.css({
          transitionProperty: d,
          transitionDuration: e,
          transitionDelay: this.staggerDelay || 0
        }), this.element.addEventListener(r, this, !1)
      }
    }, c.onwebkitTransitionEnd = function(e) {
      this.ontransitionend(e)
    }, c.onotransitionend = function(e) {
      this.ontransitionend(e)
    };
    var u = {
      "-webkit-transform": "transform"
    };
    c.ontransitionend = function(e) {
      if (e.target === this.element) {
        var t = this._transn,
          n = u[e.propertyName] || e.propertyName;
        if (delete t.ingProperties[n], i(t.ingProperties) && this.disableTransition(), n in t.clean && (this.element.style[e.propertyName] = "", delete t.clean[n]), n in t.onEnd) {
          t.onEnd[n].call(this), delete t.onEnd[n]
        }
        this.emitEvent("transitionEnd", [this])
      }
    }, c.disableTransition = function() {
      this.removeTransitionStyles(), this.element.removeEventListener(r, this, !1), this.isTransitioning = !1
    }, c._removeStyles = function(e) {
      var t = {};
      for (var i in e) t[i] = "";
      this.css(t)
    };
    var h = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: ""
    };
    return c.removeTransitionStyles = function() {
      this.css(h)
    }, c.stagger = function(e) {
      e = isNaN(e) ? 0 : e, this.staggerDelay = e + "ms"
    }, c.removeElem = function() {
      this.element.parentNode.removeChild(this.element), this.css({
        display: ""
      }), this.emitEvent("remove", [this])
    }, c.remove = function() {
      if (!s || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
      this.once("transitionEnd", function() {
        this.removeElem()
      }), this.hide()
    }, c.reveal = function() {
      delete this.isHidden, this.css({
        display: ""
      });
      var e = this.layout.options,
        t = {};
      t[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
        from: e.hiddenStyle,
        to: e.visibleStyle,
        isCleaning: !0,
        onTransitionEnd: t
      })
    }, c.onRevealTransitionEnd = function() {
      this.isHidden || this.emitEvent("reveal")
    }, c.getHideRevealTransitionEndProperty = function(e) {
      var t = this.layout.options[e];
      if (t.opacity) return "opacity";
      for (var i in t) return i
    }, c.hide = function() {
      this.isHidden = !0, this.css({
        display: ""
      });
      var e = this.layout.options,
        t = {};
      t[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
        from: e.visibleStyle,
        to: e.hiddenStyle,
        isCleaning: !0,
        onTransitionEnd: t
      })
    }, c.onHideTransitionEnd = function() {
      this.isHidden && (this.css({
        display: "none"
      }), this.emitEvent("hide"))
    }, c.destroy = function() {
      this.css({
        position: "",
        left: "",
        right: "",
        top: "",
        bottom: "",
        transition: "",
        transform: ""
      })
    }, n
  }),
  function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, s) {
      return t(e, i, n, o, s)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : e.Outlayer = t(e, e.EvEmitter, e.getSize, e.fizzyUIUtils, e.Outlayer.Item)
  }(window, function(e, t, i, n, o) {
    "use strict";

    function s(e, t) {
      var i = n.getQueryElement(e);
      if (!i) return void(l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || e)));
      this.element = i, c && (this.$element = c(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(t);
      var o = ++u;
      this.element.outlayerGUID = o, h[o] = this, this._create(), this._getOption("initLayout") && this.layout()
    }

    function a(e) {
      function t() {
        e.apply(this, arguments)
      }
      return t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t
    }

    function r(e) {
      if ("number" == typeof e) return e;
      var t = e.match(/(^\d*\.?\d*)(\w*)/),
        i = t && t[1],
        n = t && t[2];
      return i.length ? (i = parseFloat(i)) * (p[n] || 1) : 0
    }
    var l = e.console,
      c = e.jQuery,
      d = function() {},
      u = 0,
      h = {};
    s.namespace = "outlayer", s.Item = o, s.defaults = {
      containerStyle: {
        position: "relative"
      },
      initLayout: !0,
      originLeft: !0,
      originTop: !0,
      resize: !0,
      resizeContainer: !0,
      transitionDuration: "0.4s",
      hiddenStyle: {
        opacity: 0,
        transform: "scale(0.001)"
      },
      visibleStyle: {
        opacity: 1,
        transform: "scale(1)"
      }
    };
    var f = s.prototype;
    n.extend(f, t.prototype), f.option = function(e) {
      n.extend(this.options, e)
    }, f._getOption = function(e) {
      var t = this.constructor.compatOptions[e];
      return t && void 0 !== this.options[t] ? this.options[t] : this.options[e]
    }, s.compatOptions = {
      initLayout: "isInitLayout",
      horizontal: "isHorizontal",
      layoutInstant: "isLayoutInstant",
      originLeft: "isOriginLeft",
      originTop: "isOriginTop",
      resize: "isResizeBound",
      resizeContainer: "isResizingContainer"
    }, f._create = function() {
      this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
    }, f.reloadItems = function() {
      this.items = this._itemize(this.element.children)
    }, f._itemize = function(e) {
      for (var t = this._filterFindItemElements(e), i = this.constructor.Item, n = [], o = 0; o < t.length; o++) {
        var s = t[o],
          a = new i(s, this);
        n.push(a)
      }
      return n
    }, f._filterFindItemElements = function(e) {
      return n.filterFindElements(e, this.options.itemSelector)
    }, f.getItemElements = function() {
      return this.items.map(function(e) {
        return e.element
      })
    }, f.layout = function() {
      this._resetLayout(), this._manageStamps();
      var e = this._getOption("layoutInstant"),
        t = void 0 !== e ? e : !this._isLayoutInited;
      this.layoutItems(this.items, t), this._isLayoutInited = !0
    }, f._init = f.layout, f._resetLayout = function() {
      this.getSize()
    }, f.getSize = function() {
      this.size = i(this.element)
    }, f._getMeasurement = function(e, t) {
      var n, o = this.options[e];
      o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[e] = n ? i(n)[t] : o) : this[e] = 0
    }, f.layoutItems = function(e, t) {
      e = this._getItemsForLayout(e), this._layoutItems(e, t), this._postLayout()
    }, f._getItemsForLayout = function(e) {
      return e.filter(function(e) {
        return !e.isIgnored
      })
    }, f._layoutItems = function(e, t) {
      if (this._emitCompleteOnItems("layout", e), e && e.length) {
        var i = [];
        e.forEach(function(e) {
          var n = this._getItemLayoutPosition(e);
          n.item = e, n.isInstant = t || e.isLayoutInstant, i.push(n)
        }, this), this._processLayoutQueue(i)
      }
    }, f._getItemLayoutPosition = function() {
      return {
        x: 0,
        y: 0
      }
    }, f._processLayoutQueue = function(e) {
      this.updateStagger(), e.forEach(function(e, t) {
        this._positionItem(e.item, e.x, e.y, e.isInstant, t)
      }, this)
    }, f.updateStagger = function() {
      var e = this.options.stagger;
      return null === e || void 0 === e ? void(this.stagger = 0) : (this.stagger = r(e), this.stagger)
    }, f._positionItem = function(e, t, i, n, o) {
      n ? e.goTo(t, i) : (e.stagger(o * this.stagger), e.moveTo(t, i))
    }, f._postLayout = function() {
      this.resizeContainer()
    }, f.resizeContainer = function() {
      if (this._getOption("resizeContainer")) {
        var e = this._getContainerSize();
        e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
      }
    }, f._getContainerSize = d, f._setContainerMeasure = function(e, t) {
      if (void 0 !== e) {
        var i = this.size;
        i.isBorderBox && (e += t ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), e = Math.max(e, 0), this.element.style[t ? "width" : "height"] = e + "px"
      }
    }, f._emitCompleteOnItems = function(e, t) {
      function i() {
        o.dispatchEvent(e + "Complete", null, [t])
      }

      function n() {
        ++a == s && i()
      }
      var o = this,
        s = t.length;
      if (!t || !s) return void i();
      var a = 0;
      t.forEach(function(t) {
        t.once(e, n)
      })
    }, f.dispatchEvent = function(e, t, i) {
      var n = t ? [t].concat(i) : i;
      if (this.emitEvent(e, n), c)
        if (this.$element = this.$element || c(this.element), t) {
          var o = c.Event(t);
          o.type = e, this.$element.trigger(o, i)
        } else this.$element.trigger(e, i)
    }, f.ignore = function(e) {
      var t = this.getItem(e);
      t && (t.isIgnored = !0)
    }, f.unignore = function(e) {
      var t = this.getItem(e);
      t && delete t.isIgnored
    }, f.stamp = function(e) {
      (e = this._find(e)) && (this.stamps = this.stamps.concat(e), e.forEach(this.ignore, this))
    }, f.unstamp = function(e) {
      (e = this._find(e)) && e.forEach(function(e) {
        n.removeFrom(this.stamps, e), this.unignore(e)
      }, this)
    }, f._find = function(e) {
      if (e) return "string" == typeof e && (e = this.element.querySelectorAll(e)), e = n.makeArray(e)
    }, f._manageStamps = function() {
      this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, f._getBoundingRect = function() {
      var e = this.element.getBoundingClientRect(),
        t = this.size;
      this._boundingRect = {
        left: e.left + t.paddingLeft + t.borderLeftWidth,
        top: e.top + t.paddingTop + t.borderTopWidth,
        right: e.right - (t.paddingRight + t.borderRightWidth),
        bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
      }
    }, f._manageStamp = d, f._getElementOffset = function(e) {
      var t = e.getBoundingClientRect(),
        n = this._boundingRect,
        o = i(e);
      return {
        left: t.left - n.left - o.marginLeft,
        top: t.top - n.top - o.marginTop,
        right: n.right - t.right - o.marginRight,
        bottom: n.bottom - t.bottom - o.marginBottom
      }
    }, f.handleEvent = n.handleEvent, f.bindResize = function() {
      e.addEventListener("resize", this), this.isResizeBound = !0
    }, f.unbindResize = function() {
      e.removeEventListener("resize", this), this.isResizeBound = !1
    }, f.onresize = function() {
      this.resize()
    }, n.debounceMethod(s, "onresize", 100), f.resize = function() {
      this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, f.needsResizeLayout = function() {
      var e = i(this.element);
      return this.size && e && e.innerWidth !== this.size.innerWidth
    }, f.addItems = function(e) {
      var t = this._itemize(e);
      return t.length && (this.items = this.items.concat(t)), t
    }, f.appended = function(e) {
      var t = this.addItems(e);
      t.length && (this.layoutItems(t, !0), this.reveal(t))
    }, f.prepended = function(e) {
      var t = this._itemize(e);
      if (t.length) {
        var i = this.items.slice(0);
        this.items = t.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(i)
      }
    }, f.reveal = function(e) {
      if (this._emitCompleteOnItems("reveal", e), e && e.length) {
        var t = this.updateStagger();
        e.forEach(function(e, i) {
          e.stagger(i * t), e.reveal()
        })
      }
    }, f.hide = function(e) {
      if (this._emitCompleteOnItems("hide", e), e && e.length) {
        var t = this.updateStagger();
        e.forEach(function(e, i) {
          e.stagger(i * t), e.hide()
        })
      }
    }, f.revealItemElements = function(e) {
      var t = this.getItems(e);
      this.reveal(t)
    }, f.hideItemElements = function(e) {
      var t = this.getItems(e);
      this.hide(t)
    }, f.getItem = function(e) {
      for (var t = 0; t < this.items.length; t++) {
        var i = this.items[t];
        if (i.element == e) return i
      }
    }, f.getItems = function(e) {
      e = n.makeArray(e);
      var t = [];
      return e.forEach(function(e) {
        var i = this.getItem(e);
        i && t.push(i)
      }, this), t
    }, f.remove = function(e) {
      var t = this.getItems(e);
      this._emitCompleteOnItems("remove", t), t && t.length && t.forEach(function(e) {
        e.remove(), n.removeFrom(this.items, e)
      }, this)
    }, f.destroy = function() {
      var e = this.element.style;
      e.height = "", e.position = "", e.width = "", this.items.forEach(function(e) {
        e.destroy()
      }), this.unbindResize();
      var t = this.element.outlayerGUID;
      delete h[t], delete this.element.outlayerGUID, c && c.removeData(this.element, this.constructor.namespace)
    }, s.data = function(e) {
      e = n.getQueryElement(e);
      var t = e && e.outlayerGUID;
      return t && h[t]
    }, s.create = function(e, t) {
      var i = a(s);
      return i.defaults = n.extend({}, s.defaults), n.extend(i.defaults, t), i.compatOptions = n.extend({}, s.compatOptions), i.namespace = e, i.data = s.data, i.Item = a(o), n.htmlInit(i, e), c && c.bridget && c.bridget(e, i), i
    };
    var p = {
      ms: 1,
      s: 1e3
    };
    return s.Item = o, s
  }),
  function(e, t) {
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer")) : (e.Isotope = e.Isotope || {}, e.Isotope.Item = t(e.Outlayer))
  }(window, function(e) {
    "use strict";

    function t() {
      e.Item.apply(this, arguments)
    }
    var i = t.prototype = Object.create(e.Item.prototype),
      n = i._create;
    i._create = function() {
      this.id = this.layout.itemGUID++, n.call(this), this.sortData = {}
    }, i.updateSortData = function() {
      if (!this.isIgnored) {
        this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
        var e = this.layout.options.getSortData,
          t = this.layout._sorters;
        for (var i in e) {
          var n = t[i];
          this.sortData[i] = n(this.element, this)
        }
      }
    };
    var o = i.destroy;
    return i.destroy = function() {
      o.apply(this, arguments), this.css({
        display: ""
      })
    }, t
  }),
  function(e, t) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], t) : "object" == typeof module && module.exports ? module.exports = t(require("get-size"), require("outlayer")) : (e.Isotope = e.Isotope || {}, e.Isotope.LayoutMode = t(e.getSize, e.Outlayer))
  }(window, function(e, t) {
    "use strict";

    function i(e) {
      this.isotope = e, e && (this.options = e.options[this.namespace], this.element = e.element, this.items = e.filteredItems, this.size = e.size)
    }
    var n = i.prototype;
    return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function(e) {
      n[e] = function() {
        return t.prototype[e].apply(this.isotope, arguments)
      }
    }), n.needsVerticalResizeLayout = function() {
      var t = e(this.isotope.element);
      return this.isotope.size && t && t.innerHeight != this.isotope.size.innerHeight
    }, n._getMeasurement = function() {
      this.isotope._getMeasurement.apply(this, arguments)
    }, n.getColumnWidth = function() {
      this.getSegmentSize("column", "Width")
    }, n.getRowHeight = function() {
      this.getSegmentSize("row", "Height")
    }, n.getSegmentSize = function(e, t) {
      var i = e + t,
        n = "outer" + t;
      if (this._getMeasurement(i, n), !this[i]) {
        var o = this.getFirstItemSize();
        this[i] = o && o[n] || this.isotope.size["inner" + t]
      }
    }, n.getFirstItemSize = function() {
      var t = this.isotope.filteredItems[0];
      return t && t.element && e(t.element)
    }, n.layout = function() {
      this.isotope.layout.apply(this.isotope, arguments)
    }, n.getSize = function() {
      this.isotope.getSize(), this.size = this.isotope.size
    }, i.modes = {}, i.create = function(e, t) {
      function o() {
        i.apply(this, arguments)
      }
      return o.prototype = Object.create(n), o.prototype.constructor = o, t && (o.options = t), o.prototype.namespace = e, i.modes[e] = o, o
    }, i
  }),
  function(e, t) {
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer"), require("get-size")) : e.Masonry = t(e.Outlayer, e.getSize)
  }(window, function(e, t) {
    var i = e.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var n = i.prototype;
    return n._resetLayout = function() {
      this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
      for (var e = 0; e < this.cols; e++) this.colYs.push(0);
      this.maxY = 0, this.horizontalColIndex = 0
    }, n.measureColumns = function() {
      if (this.getContainerWidth(), !this.columnWidth) {
        var e = this.items[0],
          i = e && e.element;
        this.columnWidth = i && t(i).outerWidth || this.containerWidth
      }
      var n = this.columnWidth += this.gutter,
        o = this.containerWidth + this.gutter,
        s = o / n,
        a = n - o % n,
        r = a && a < 1 ? "round" : "floor";
      s = Math[r](s), this.cols = Math.max(s, 1)
    }, n.getContainerWidth = function() {
      var e = this._getOption("fitWidth"),
        i = e ? this.element.parentNode : this.element,
        n = t(i);
      this.containerWidth = n && n.innerWidth
    }, n._getItemLayoutPosition = function(e) {
      e.getSize();
      var t = e.size.outerWidth % this.columnWidth,
        i = t && t < 1 ? "round" : "ceil",
        n = Math[i](e.size.outerWidth / this.columnWidth);
      n = Math.min(n, this.cols);
      for (var o = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[o](n, e), a = {
          x: this.columnWidth * s.col,
          y: s.y
        }, r = s.y + e.size.outerHeight, l = n + s.col, c = s.col; c < l; c++) this.colYs[c] = r;
      return a
    }, n._getTopColPosition = function(e) {
      var t = this._getTopColGroup(e),
        i = Math.min.apply(Math, t);
      return {
        col: t.indexOf(i),
        y: i
      }
    }, n._getTopColGroup = function(e) {
      if (e < 2) return this.colYs;
      for (var t = [], i = this.cols + 1 - e, n = 0; n < i; n++) t[n] = this._getColGroupY(n, e);
      return t
    }, n._getColGroupY = function(e, t) {
      if (t < 2) return this.colYs[e];
      var i = this.colYs.slice(e, e + t);
      return Math.max.apply(Math, i)
    }, n._getHorizontalColPosition = function(e, t) {
      var i = this.horizontalColIndex % this.cols;
      i = e > 1 && i + e > this.cols ? 0 : i;
      var n = t.size.outerWidth && t.size.outerHeight;
      return this.horizontalColIndex = n ? i + e : this.horizontalColIndex, {
        col: i,
        y: this._getColGroupY(i, e)
      }
    }, n._manageStamp = function(e) {
      var i = t(e),
        n = this._getElementOffset(e),
        o = this._getOption("originLeft"),
        s = o ? n.left : n.right,
        a = s + i.outerWidth,
        r = Math.floor(s / this.columnWidth);
      r = Math.max(0, r);
      var l = Math.floor(a / this.columnWidth);
      l -= a % this.columnWidth ? 0 : 1, l = Math.min(this.cols - 1, l);
      for (var c = this._getOption("originTop"), d = (c ? n.top : n.bottom) + i.outerHeight, u = r; u <= l; u++) this.colYs[u] = Math.max(d, this.colYs[u])
    }, n._getContainerSize = function() {
      this.maxY = Math.max.apply(Math, this.colYs);
      var e = {
        height: this.maxY
      };
      return this._getOption("fitWidth") && (e.width = this._getContainerFitWidth()), e
    }, n._getContainerFitWidth = function() {
      for (var e = 0, t = this.cols; --t && 0 === this.colYs[t];) e++;
      return (this.cols - e) * this.columnWidth - this.gutter
    }, n.needsResizeLayout = function() {
      var e = this.containerWidth;
      return this.getContainerWidth(), e != this.containerWidth
    }, i
  }),
  function(e, t) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], t) : "object" == typeof module && module.exports ? module.exports = t(require("../layout-mode"), require("masonry-layout")) : t(e.Isotope.LayoutMode, e.Masonry)
  }(window, function(e, t) {
    "use strict";
    var i = e.create("masonry"),
      n = i.prototype,
      o = {
        _getElementOffset: !0,
        layout: !0,
        _getMeasurement: !0
      };
    for (var s in t.prototype) o[s] || (n[s] = t.prototype[s]);
    var a = n.measureColumns;
    n.measureColumns = function() {
      this.items = this.isotope.filteredItems, a.call(this)
    };
    var r = n._getOption;
    return n._getOption = function(e) {
      return "fitWidth" == e ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : r.apply(this.isotope, arguments)
    }, i
  }),
  function(e, t) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], t) : "object" == typeof exports ? module.exports = t(require("../layout-mode")) : t(e.Isotope.LayoutMode)
  }(window, function(e) {
    "use strict";
    var t = e.create("fitRows"),
      i = t.prototype;
    return i._resetLayout = function() {
      this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, i._getItemLayoutPosition = function(e) {
      e.getSize();
      var t = e.size.outerWidth + this.gutter,
        i = this.isotope.size.innerWidth + this.gutter;
      0 !== this.x && t + this.x > i && (this.x = 0, this.y = this.maxY);
      var n = {
        x: this.x,
        y: this.y
      };
      return this.maxY = Math.max(this.maxY, this.y + e.size.outerHeight), this.x += t, n
    }, i._getContainerSize = function() {
      return {
        height: this.maxY
      }
    }, t
  }),
  function(e, t) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], t) : "object" == typeof module && module.exports ? module.exports = t(require("../layout-mode")) : t(e.Isotope.LayoutMode)
  }(window, function(e) {
    "use strict";
    var t = e.create("vertical", {
        horizontalAlignment: 0
      }),
      i = t.prototype;
    return i._resetLayout = function() {
      this.y = 0
    }, i._getItemLayoutPosition = function(e) {
      e.getSize();
      var t = (this.isotope.size.innerWidth - e.size.outerWidth) * this.options.horizontalAlignment,
        i = this.y;
      return this.y += e.size.outerHeight, {
        x: t,
        y: i
      }
    }, i._getContainerSize = function() {
      return {
        height: this.y
      }
    }, t
  }),
  function(e, t) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, n, o, s, a, r) {
      return t(e, i, n, o, s, a, r)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : e.Isotope = t(e, e.Outlayer, e.getSize, e.matchesSelector, e.fizzyUIUtils, e.Isotope.Item, e.Isotope.LayoutMode)
  }(window, function(e, t, i, n, o, s, a) {
    function r(e, t) {
      return function(i, n) {
        for (var o = 0; o < e.length; o++) {
          var s = e[o],
            a = i.sortData[s],
            r = n.sortData[s];
          if (a > r || a < r) {
            var l = void 0 !== t[s] ? t[s] : t,
              c = l ? 1 : -1;
            return (a > r ? 1 : -1) * c
          }
        }
        return 0
      }
    }
    var l = e.jQuery,
      c = String.prototype.trim ? function(e) {
        return e.trim()
      } : function(e) {
        return e.replace(/^\s+|\s+$/g, "")
      },
      d = t.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0
      });
    d.Item = s, d.LayoutMode = a;
    var u = d.prototype;
    u._create = function() {
      this.itemGUID = 0, this._sorters = {}, this._getSorters(), t.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
      for (var e in a.modes) this._initLayoutMode(e)
    }, u.reloadItems = function() {
      this.itemGUID = 0, t.prototype.reloadItems.call(this)
    }, u._itemize = function() {
      for (var e = t.prototype._itemize.apply(this, arguments), i = 0; i < e.length; i++) {
        e[i].id = this.itemGUID++
      }
      return this._updateItemsSortData(e), e
    }, u._initLayoutMode = function(e) {
      var t = a.modes[e],
        i = this.options[e] || {};
      this.options[e] = t.options ? o.extend(t.options, i) : i, this.modes[e] = new t(this)
    }, u.layout = function() {
      if (!this._isLayoutInited && this._getOption("initLayout")) return void this.arrange();
      this._layout()
    }, u._layout = function() {
      var e = this._getIsInstant();
      this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, e), this._isLayoutInited = !0
    }, u.arrange = function(e) {
      this.option(e), this._getIsInstant();
      var t = this._filter(this.items);
      this.filteredItems = t.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [t]) : this._hideReveal(t), this._sort(), this._layout()
    }, u._init = u.arrange, u._hideReveal = function(e) {
      this.reveal(e.needReveal), this.hide(e.needHide)
    }, u._getIsInstant = function() {
      var e = this._getOption("layoutInstant"),
        t = void 0 !== e ? e : !this._isLayoutInited;
      return this._isInstant = t, t
    }, u._bindArrangeComplete = function() {
      function e() {
        t && i && n && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
      }
      var t, i, n, o = this;
      this.once("layoutComplete", function() {
        t = !0, e()
      }), this.once("hideComplete", function() {
        i = !0, e()
      }), this.once("revealComplete", function() {
        n = !0, e()
      })
    }, u._filter = function(e) {
      var t = this.options.filter;
      t = t || "*";
      for (var i = [], n = [], o = [], s = this._getFilterTest(t), a = 0; a < e.length; a++) {
        var r = e[a];
        if (!r.isIgnored) {
          var l = s(r);
          l && i.push(r), l && r.isHidden ? n.push(r) : l || r.isHidden || o.push(r)
        }
      }
      return {
        matches: i,
        needReveal: n,
        needHide: o
      }
    }, u._getFilterTest = function(e) {
      return l && this.options.isJQueryFiltering ? function(t) {
        return l(t.element).is(e)
      } : "function" == typeof e ? function(t) {
        return e(t.element)
      } : function(t) {
        return n(t.element, e)
      }
    }, u.updateSortData = function(e) {
      var t;
      e ? (e = o.makeArray(e), t = this.getItems(e)) : t = this.items, this._getSorters(), this._updateItemsSortData(t)
    }, u._getSorters = function() {
      var e = this.options.getSortData;
      for (var t in e) {
        var i = e[t];
        this._sorters[t] = h(i)
      }
    }, u._updateItemsSortData = function(e) {
      for (var t = e && e.length, i = 0; t && i < t; i++) {
        e[i].updateSortData()
      }
    };
    var h = function() {
      function e(e) {
        if ("string" != typeof e) return e;
        var i = c(e).split(" "),
          n = i[0],
          o = n.match(/^\[(.+)\]$/),
          s = o && o[1],
          a = t(s, n),
          r = d.sortDataParsers[i[1]];
        return e = r ? function(e) {
          return e && r(a(e))
        } : function(e) {
          return e && a(e)
        }
      }

      function t(e, t) {
        return e ? function(t) {
          return t.getAttribute(e)
        } : function(e) {
          var i = e.querySelector(t);
          return i && i.textContent
        }
      }
      return e
    }();
    d.sortDataParsers = {
      parseInt: function(e) {
        return parseInt(e, 10)
      },
      parseFloat: function(e) {
        return parseFloat(e)
      }
    }, u._sort = function() {
      if (this.options.sortBy) {
        var e = o.makeArray(this.options.sortBy);
        this._getIsSameSortBy(e) || (this.sortHistory = e.concat(this.sortHistory));
        var t = r(this.sortHistory, this.options.sortAscending);
        this.filteredItems.sort(t)
      }
    }, u._getIsSameSortBy = function(e) {
      for (var t = 0; t < e.length; t++)
        if (e[t] != this.sortHistory[t]) return !1;
      return !0
    }, u._mode = function() {
      var e = this.options.layoutMode,
        t = this.modes[e];
      if (!t) throw new Error("No layout mode: " + e);
      return t.options = this.options[e], t
    }, u._resetLayout = function() {
      t.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, u._getItemLayoutPosition = function(e) {
      return this._mode()._getItemLayoutPosition(e)
    }, u._manageStamp = function(e) {
      this._mode()._manageStamp(e)
    }, u._getContainerSize = function() {
      return this._mode()._getContainerSize()
    }, u.needsResizeLayout = function() {
      return this._mode().needsResizeLayout()
    }, u.appended = function(e) {
      var t = this.addItems(e);
      if (t.length) {
        var i = this._filterRevealAdded(t);
        this.filteredItems = this.filteredItems.concat(i)
      }
    }, u.prepended = function(e) {
      var t = this._itemize(e);
      if (t.length) {
        this._resetLayout(), this._manageStamps();
        var i = this._filterRevealAdded(t);
        this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = t.concat(this.items)
      }
    }, u._filterRevealAdded = function(e) {
      var t = this._filter(e);
      return this.hide(t.needHide), this.reveal(t.matches), this.layoutItems(t.matches, !0), t.matches
    }, u.insert = function(e) {
      var t = this.addItems(e);
      if (t.length) {
        var i, n, o = t.length;
        for (i = 0; i < o; i++) n = t[i], this.element.appendChild(n.element);
        var s = this._filter(t).matches;
        for (i = 0; i < o; i++) t[i].isLayoutInstant = !0;
        for (this.arrange(), i = 0; i < o; i++) delete t[i].isLayoutInstant;
        this.reveal(s)
      }
    };
    var f = u.remove;
    return u.remove = function(e) {
      e = o.makeArray(e);
      var t = this.getItems(e);
      f.call(this, e);
      for (var i = t && t.length, n = 0; i && n < i; n++) {
        var s = t[n];
        o.removeFrom(this.filteredItems, s)
      }
    }, u.shuffle = function() {
      for (var e = 0; e < this.items.length; e++) {
        this.items[e].sortData.random = Math.random()
      }
      this.options.sortBy = "random", this._sort(), this._layout()
    }, u._noTransition = function(e, t) {
      var i = this.options.transitionDuration;
      this.options.transitionDuration = 0;
      var n = e.apply(this, t);
      return this.options.transitionDuration = i, n
    }, u.getFilteredItemElements = function() {
      return this.filteredItems.map(function(e) {
        return e.element
      })
    }, d
  }), $(document).ready(function() {
    $(".modal-iframe").click(function() {
      e = $(this), $("iframe", "#iframeContent").load(e.data("target")), $("#iframeContent").modal({
        show: !0
      })
    }), $(".share_popup").on("click", function(e) {
      e.preventDefault();
      var t = $(this).data("target");
      window.open(t, "_blank", "width=600,height=460")
    }), $(".itemcard_order_button_radio_wrapper_inner").change("input", function() {
      $("#itemcard_order_type_choice_1").is(":checked") ? ($("#itemcard_order_button_form_indiv_outer").addClass("itemcard_order_button_inactive"), $("#itemcard_order_button_form_std_outer").removeClass("itemcard_order_button_inactive"), $('div[u="slides"] > div:nth-child(2) > div > img[cust_img="0"]').click(), $("#itemcard_order_button_form_indiv select").attr("disabled", "disabled"), $("#itemcard_order_button_form_std select").removeAttr("disabled")) : ($("#itemcard_order_button_form_indiv_outer").removeClass("itemcard_order_button_inactive"), $("#itemcard_order_button_form_std_outer").addClass("itemcard_order_button_inactive"), $('div[u="thumbnavigator"] img[cust_img="1"]').click(), $("#itemcard_order_button_form_std select").attr("disabled", "disabled"), $("#itemcard_order_button_form_indiv select").removeAttr("disabled"))
    }), $(".customize_delete_pic").click(function(e) {
      var t = $(this);
      e.preventDefault(), $.ajax({
        url: "/module/dcshop/b2c/ajax.php" + $(t).attr("href"),
        method: "POST"
      }).done(function(e) {
        var i = $(t).parents(".cust_img_area");
        $(i).html(e), $(i).on("change", "input[type='file']", function() {
          $(i).find('input[type="text"]').val(this.files[0].name)
        })
      })
    }), $(".slidecontent_headline").click(function() {
      $(this).toggleClass("active"), $(this).next(".slidecontent_content_container").slideToggle("fast")
    }), $("#header_shop_icons .header_icon_search").click(function() {
      $("#header_4").slideToggle("fast"), $("#header_4 #input_search").focus()
    });
    var t = "de",
      i = "dd.mm.yyyy";
    $("#search_data").data("site_language") && (t = $("#search_data").data("site_language")), $("#search_data").data("date_format") && (i = $("#search_data").data("date_format")), $(".datepicker").datepicker({
      format: i,
      language: t
    }), $(".date_years").datepicker({
      format: i,
      language: t,
      startDate: "-100y",
      endDate: "-18y",
      startView: "years"
    }), $("#form_search").submit(function(e) {
      $("#form_search").find("#input_search").val() || (e.preventDefault(e), e.stopPropagation(e))
    });
    var n = $(".flashMessage");
    if ($(window).load(function() {
        n.fadeIn("slow"), $(function() {
          setTimeout(function() {
            n.fadeOut("slow")
          }, "20000")
        }), n.click(function() {
          $(this).fadeOut("slow")
        })
      }), $(".jumpmark").click(function() {
        scrolling($(this).attr("href"))
      }), $(".dc_isotope .collection_wrapper.isList").length > 0) {
      var o = $.urlParam("group_filter"),
        s = "*";
      null != o && 0 != o && (s = ".collection_group_" + o);
      var a = $(".dc_isotope .collection_wrapper.isList").isotope({
        itemSelector: ".collection_list",
        layoutMode: "masonry",
        filter: s
      });
      $(".dc_isotope .group_filter_area a").on("click", function(e) {
        e.preventDefault();
        var t = $(this).attr("data-filter");
        "*" != t && (t = "." + t), a.isotope({
          filter: t
        }), $(this).closest(".group_filter_area").children(".group_filter").removeClass("active"), $(this).parent().addClass("active")
      })
    }
  }),
  function(e) {
    e.fn.datepicker.dates.de = {
      days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
      daysShort: ["Son", "Mon", "Die", "Mit", "Don", "Fre", "Sam"],
      daysMin: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
      months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
      monthsShort: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
      today: "Heute",
      monthsTitle: "Monate",
      clear: "Löschen",
      weekStart: 1,
      format: "dd.mm.yyyy"
    }
  }(jQuery), $.urlParam = function(e) {
    var t = new RegExp("[?&]" + e + "=([^]*)").exec(window.location.href);
    return null == t ? null : t[1] || 0
  }, jQuery.fn.borderFlash = function(e, t, i) {
    var n = this.css("border-color"),
      o = 1;
    do {
      this.animate({
        borderTopColor: "rgb(" + e + ")",
        borderLeftColor: "rgb(" + e + ")",
        borderBottomColor: "rgb(" + e + ")",
        borderRightColor: "rgb(" + e + ")"
      }, t / 2), this.animate({
        borderTopColor: n,
        borderLeftColor: n,
        borderBottomColor: n,
        borderRightColor: n
      }, t / 2), o++
    } while (o <= i)
  }, jQuery.fn.Flash = function(e, t, i) {
    var n = this.css("background-color"),
      o = 1;
    do {
      this.animate({
        backgroundColor: "rgb(" + e + ")"
      }, t / 2), this.animate({
        backgroundColor: n
      }, t / 2), o++
    } while (o <= i)
  }, $(document).ready(function() {
    $("#dc_shipping_option1").bind("click", function() {
      toggleOn("dc_shipping_option_inputs1"), toggleOff("dc_shipping_option_inputs0")
    }), $("#dc_shipping_option0").bind("click", function() {
      toggleOn("dc_shipping_option_inputs0"), toggleOff("dc_shipping_option_inputs1")
    }), $("#dc_message #message").on("keyup", function(e) {
      if (8 !== e.keyCode && 46 !== e.keyCode) {
        var t = $(this).val();
        textLen = t.length, totalLength = 0, newText = "", textCopy = t.replace(/\n/g, "~"), console.log(textCopy);
        for (var i = 0, n = textCopy.length; i < n; i++) "~" == textCopy[i] ? totalLength += 85 : totalLength++, console.log("Total Length" + totalLength);
        if (totalLength > 1e3) {
          totalLength = 0;
          for (var i = 0, n = textCopy.length; i < n && totalLength <= 1e3; i++) "~" == textCopy[i] ? (totalLength += 85, newText += "\n") : (totalLength++, newText += textCopy[i]);
          $("#dc_message #message").val(newText)
        }
      }
    })
  }),
  function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
  }(function(e) {
    e.fn.addBack = e.fn.addBack || e.fn.andSelf, e.fn.extend({
      actual: function(t, i) {
        if (!this[t]) throw '$.actual => The jQuery method "' + t + '" you called does not exist';
        var n, o, s = {
            absolute: !1,
            clone: !1,
            includeMargin: !1,
            display: "block"
          },
          a = e.extend(s, i),
          r = this.eq(0);
        if (!0 === a.clone) n = function() {
          r = r.clone().attr("style", "position: absolute !important; top: -1000 !important; ").appendTo("body")
        }, o = function() {
          r.remove()
        };
        else {
          var l, c = [],
            d = "";
          n = function() {
            l = r.parents().addBack().filter(":hidden"), d += "visibility: hidden !important; display: " + a.display + " !important; ", !0 === a.absolute && (d += "position: absolute !important; "), l.each(function() {
              var t = e(this),
                i = t.attr("style");
              c.push(i), t.attr("style", i ? i + ";" + d : d)
            })
          }, o = function() {
            l.each(function(t) {
              var i = e(this),
                n = c[t];
              void 0 === n ? i.removeAttr("style") : i.attr("style", n)
            })
          }
        }
        n();
        var u = /(outer)/.test(t) ? r[t](a.includeMargin) : r[t]();
        return o(), u
      }
    })
  }),
  function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports && "function" == typeof require ? require("jquery") : jQuery)
  }(function(e) {
    "use strict";

    function t(i, n) {
      var o = this;
      o.element = i, o.el = e(i), o.suggestions = [], o.badQueries = [], o.selectedIndex = -1, o.currentValue = o.element.value, o.timeoutId = null, o.cachedResponse = {}, o.onChangeTimeout = null, o.onChange = null, o.isLocal = !1, o.suggestionsContainer = null, o.noSuggestionsContainer = null, o.options = e.extend(!0, {}, t.defaults, n), o.classes = {
        selected: "autocomplete-selected",
        suggestion: "autocomplete-suggestion"
      }, o.hint = null, o.hintValue = "", o.selection = null, o.initialize(), o.setOptions(n)
    }

    function i(e, t, i) {
      return -1 !== e.value.toLowerCase().indexOf(i)
    }

    function n(t) {
      return "string" == typeof t ? e.parseJSON(t) : t
    }

    function o(e, t) {
      if (!t) return e.value;
      var i = "(" + a.escapeRegExChars(t) + ")";
      return e.value.replace(new RegExp(i, "gi"), "<strong>$1</strong>").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/&lt;(\/?strong)&gt;/g, "<$1>")
    }

    function s(e, t) {
      return '<div class="autocomplete-group">' + t + "</div>"
    }
    var a = function() {
        return {
          escapeRegExChars: function(e) {
            return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
          },
          createNode: function(e) {
            var t = document.createElement("div");
            return t.className = e, t.style.position = "absolute", t.style.display = "none", t
          }
        }
      }(),
      r = {
        ESC: 27,
        TAB: 9,
        RETURN: 13,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
      },
      l = e.noop;
    t.utils = a, e.Autocomplete = t, t.defaults = {
      ajaxSettings: {},
      autoSelectFirst: !1,
      appendTo: "body",
      serviceUrl: null,
      lookup: null,
      onSelect: null,
      width: "auto",
      minChars: 1,
      maxHeight: 300,
      deferRequestBy: 0,
      params: {},
      formatResult: o,
      formatGroup: s,
      delimiter: null,
      zIndex: 9999,
      type: "GET",
      noCache: !1,
      onSearchStart: l,
      onSearchComplete: l,
      onSearchError: l,
      preserveInput: !1,
      containerClass: "autocomplete-suggestions",
      tabDisabled: !1,
      dataType: "text",
      currentRequest: null,
      triggerSelectOnValidInput: !0,
      preventBadQueries: !0,
      lookupFilter: i,
      paramName: "query",
      transformResult: n,
      showNoSuggestionNotice: !1,
      noSuggestionNotice: "No results",
      orientation: "bottom",
      forceFixPosition: !1
    }, t.prototype = {
      initialize: function() {
        var i, n = this,
          o = "." + n.classes.suggestion,
          s = n.classes.selected,
          a = n.options;
        n.element.setAttribute("autocomplete", "off"), n.noSuggestionsContainer = e('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0), n.suggestionsContainer = t.utils.createNode(a.containerClass), i = e(n.suggestionsContainer), i.appendTo(a.appendTo || "body"), "auto" !== a.width && i.css("width", a.width), i.on("mouseover.autocomplete", o, function() {
          n.activate(e(this).data("index"))
        }), i.on("mouseout.autocomplete", function() {
          n.selectedIndex = -1, i.children("." + s).removeClass(s)
        }), i.on("click.autocomplete", o, function() {
          n.select(e(this).data("index"))
        }), i.on("click.autocomplete", function() {
          clearTimeout(n.blurTimeoutId)
        }), n.fixPositionCapture = function() {
          n.visible && n.fixPosition()
        }, e(window).on("resize.autocomplete", n.fixPositionCapture), n.el.on("keydown.autocomplete", function(e) {
          n.onKeyPress(e)
        }), n.el.on("keyup.autocomplete", function(e) {
          n.onKeyUp(e)
        }), n.el.on("blur.autocomplete", function() {
          n.onBlur()
        }), n.el.on("focus.autocomplete", function() {
          n.onFocus()
        }), n.el.on("change.autocomplete", function(e) {
          n.onKeyUp(e)
        }), n.el.on("input.autocomplete", function(e) {
          n.onKeyUp(e)
        })
      },
      onFocus: function() {
        var e = this;
        e.fixPosition(), e.el.val().length >= e.options.minChars && e.onValueChange()
      },
      onBlur: function() {
        var e = this;
        e.blurTimeoutId = setTimeout(function() {
          e.hide()
        }, 200)
      },
      abortAjax: function() {
        var e = this;
        e.currentRequest && (e.currentRequest.abort(), e.currentRequest = null)
      },
      setOptions: function(t) {
        var i = this,
          n = e.extend({}, i.options, t);
        i.isLocal = Array.isArray(n.lookup), i.isLocal && (n.lookup = i.verifySuggestionsFormat(n.lookup)), n.orientation = i.validateOrientation(n.orientation, "bottom"), e(i.suggestionsContainer).css({
          "max-height": n.maxHeight + "px",
          width: n.width + "px",
          "z-index": n.zIndex
        }), this.options = n
      },
      clearCache: function() {
        this.cachedResponse = {}, this.badQueries = []
      },
      clear: function() {
        this.clearCache(), this.currentValue = "", this.suggestions = []
      },
      disable: function() {
        var e = this;
        e.disabled = !0, clearTimeout(e.onChangeTimeout), e.abortAjax()
      },
      enable: function() {
        this.disabled = !1
      },
      fixPosition: function() {
        var t = this,
          i = e(t.suggestionsContainer),
          n = i.parent().get(0);
        if (n === document.body || t.options.forceFixPosition) {
          var o = t.options.orientation,
            s = i.outerHeight(),
            a = t.el.outerHeight(),
            r = t.el.offset(),
            l = {
              top: r.top,
              left: r.left
            };
          if ("auto" === o) {
            var c = e(window).height(),
              d = e(window).scrollTop(),
              u = -d + r.top - s,
              h = d + c - (r.top + a + s);
            o = Math.max(u, h) === u ? "top" : "bottom"
          }
          if (l.top += "top" === o ? -s : a, n !== document.body) {
            var f, p = i.css("opacity");
            t.visible || i.css("opacity", 0).show(), f = i.offsetParent().offset(), l.top -= f.top, l.top += n.scrollTop, l.left -= f.left, t.visible || i.css("opacity", p).hide()
          }
          "auto" === t.options.width && (l.width = t.el.outerWidth() + "px"), i.css(l)
        }
      },
      isCursorAtEnd: function() {
        var e, t = this,
          i = t.el.val().length,
          n = t.element.selectionStart;
        return "number" == typeof n ? n === i : !document.selection || (e = document.selection.createRange(), e.moveStart("character", -i), i === e.text.length)
      },
      onKeyPress: function(e) {
        var t = this;
        if (!t.disabled && !t.visible && e.which === r.DOWN && t.currentValue) return void t.suggest();
        if (!t.disabled && t.visible) {
          switch (e.which) {
            case r.ESC:
              t.el.val(t.currentValue), t.hide();
              break;
            case r.RIGHT:
              if (t.hint && t.options.onHint && t.isCursorAtEnd()) {
                t.selectHint();
                break
              }
              return;
            case r.TAB:
              if (t.hint && t.options.onHint) return void t.selectHint();
              if (-1 === t.selectedIndex) return void t.hide();
              if (t.select(t.selectedIndex), !1 === t.options.tabDisabled) return;
              break;
            case r.RETURN:
              if (-1 === t.selectedIndex) return void t.hide();
              t.select(t.selectedIndex);
              break;
            case r.UP:
              t.moveUp();
              break;
            case r.DOWN:
              t.moveDown();
              break;
            default:
              return
          }
          e.stopImmediatePropagation(), e.preventDefault()
        }
      },
      onKeyUp: function(e) {
        var t = this;
        if (!t.disabled) {
          switch (e.which) {
            case r.UP:
            case r.DOWN:
              return
          }
          clearTimeout(t.onChangeTimeout), t.currentValue !== t.el.val() && (t.findBestHint(), t.options.deferRequestBy > 0 ? t.onChangeTimeout = setTimeout(function() {
            t.onValueChange()
          }, t.options.deferRequestBy) : t.onValueChange())
        }
      },
      onValueChange: function() {
        if (this.ignoreValueChange) return void(this.ignoreValueChange = !1);
        var t = this,
          i = t.options,
          n = t.el.val(),
          o = t.getQuery(n);
        return t.selection && t.currentValue !== o && (t.selection = null, (i.onInvalidateSelection || e.noop).call(t.element)), clearTimeout(t.onChangeTimeout), t.currentValue = n, t.selectedIndex = -1, i.triggerSelectOnValidInput && t.isExactMatch(o) ? void t.select(0) : void(o.length < i.minChars ? t.hide() : t.getSuggestions(o))
      },
      isExactMatch: function(e) {
        var t = this.suggestions;
        return 1 === t.length && t[0].value.toLowerCase() === e.toLowerCase()
      },
      getQuery: function(t) {
        var i, n = this.options.delimiter;
        return n ? (i = t.split(n), e.trim(i[i.length - 1])) : t
      },
      getSuggestionsLocal: function(t) {
        var i, n = this,
          o = n.options,
          s = t.toLowerCase(),
          a = o.lookupFilter,
          r = parseInt(o.lookupLimit, 10);
        return i = {
          suggestions: e.grep(o.lookup, function(e) {
            return a(e, t, s)
          })
        }, r && i.suggestions.length > r && (i.suggestions = i.suggestions.slice(0, r)), i
      },
      getSuggestions: function(t) {
        var i, n, o, s, a = this,
          r = a.options,
          l = r.serviceUrl;
        if (r.params[r.paramName] = t, !1 !== r.onSearchStart.call(a.element, r.params)) {
          if (n = r.ignoreParams ? null : r.params, e.isFunction(r.lookup)) return void r.lookup(t, function(e) {
            a.suggestions = e.suggestions, a.suggest(), r.onSearchComplete.call(a.element, t, e.suggestions)
          });
          a.isLocal ? i = a.getSuggestionsLocal(t) : (e.isFunction(l) && (l = l.call(a.element, t)), o = l + "?" + e.param(n || {}), i = a.cachedResponse[o]), i && Array.isArray(i.suggestions) ? (a.suggestions = i.suggestions, a.suggest(), r.onSearchComplete.call(a.element, t, i.suggestions)) : a.isBadQuery(t) ? r.onSearchComplete.call(a.element, t, []) : (a.abortAjax(), s = {
            url: l,
            data: n,
            type: r.type,
            dataType: r.dataType
          }, e.extend(s, r.ajaxSettings), a.currentRequest = e.ajax(s).done(function(e) {
            var i;
            a.currentRequest = null, i = r.transformResult(e, t), a.processResponse(i, t, o), r.onSearchComplete.call(a.element, t, i.suggestions)
          }).fail(function(e, i, n) {
            r.onSearchError.call(a.element, t, e, i, n)
          }))
        }
      },
      isBadQuery: function(e) {
        if (!this.options.preventBadQueries) return !1;
        for (var t = this.badQueries, i = t.length; i--;)
          if (0 === e.indexOf(t[i])) return !0;
        return !1
      },
      hide: function() {
        var t = this,
          i = e(t.suggestionsContainer);
        e.isFunction(t.options.onHide) && t.visible && t.options.onHide.call(t.element, i), t.visible = !1, t.selectedIndex = -1, clearTimeout(t.onChangeTimeout), e(t.suggestionsContainer).hide(), t.signalHint(null)
      },
      suggest: function() {
        if (!this.suggestions.length) return void(this.options.showNoSuggestionNotice ? this.noSuggestions() : this.hide());
        var t, i = this,
          n = i.options,
          o = n.groupBy,
          s = n.formatResult,
          a = i.getQuery(i.currentValue),
          r = i.classes.suggestion,
          l = i.classes.selected,
          c = e(i.suggestionsContainer),
          d = e(i.noSuggestionsContainer),
          u = n.beforeRender,
          h = "",
          f = function(e, i) {
            var s = e.data[o];
            return t === s ? "" : (t = s, n.formatGroup(e, t))
          };
        return n.triggerSelectOnValidInput && i.isExactMatch(a) ? void i.select(0) : (e.each(i.suggestions, function(e, t) {
          o && (h += f(t, 0)), h += '<div class="' + r + '" data-index="' + e + '">' + s(t, a, e) + "</div>"
        }), this.adjustContainerWidth(), d.detach(), c.html(h), e.isFunction(u) && u.call(i.element, c, i.suggestions), i.fixPosition(), c.show(), n.autoSelectFirst && (i.selectedIndex = 0, c.scrollTop(0), c.children("." + r).first().addClass(l)), i.visible = !0, void i.findBestHint())
      },
      noSuggestions: function() {
        var t = this,
          i = t.options.beforeRender,
          n = e(t.suggestionsContainer),
          o = e(t.noSuggestionsContainer);
        this.adjustContainerWidth(), o.detach(), n.empty(), n.append(o), e.isFunction(i) && i.call(t.element, n, t.suggestions), t.fixPosition(), n.show(), t.visible = !0
      },
      adjustContainerWidth: function() {
        var t, i = this,
          n = i.options,
          o = e(i.suggestionsContainer);
        "auto" === n.width ? (t = i.el.outerWidth(), o.css("width", t > 0 ? t : 300)) : "flex" === n.width && o.css("width", "")
      },
      findBestHint: function() {
        var t = this,
          i = t.el.val().toLowerCase(),
          n = null;
        i && (e.each(t.suggestions, function(e, t) {
          var o = 0 === t.value.toLowerCase().indexOf(i);
          return o && (n = t), !o
        }), t.signalHint(n))
      },
      signalHint: function(t) {
        var i = "",
          n = this;
        t && (i = n.currentValue + t.value.substr(n.currentValue.length)), n.hintValue !== i && (n.hintValue = i, n.hint = t, (this.options.onHint || e.noop)(i))
      },
      verifySuggestionsFormat: function(t) {
        return t.length && "string" == typeof t[0] ? e.map(t, function(e) {
          return {
            value: e,
            data: null
          }
        }) : t
      },
      validateOrientation: function(t, i) {
        return t = e.trim(t || "").toLowerCase(), -1 === e.inArray(t, ["auto", "bottom", "top"]) && (t = i), t
      },
      processResponse: function(e, t, i) {
        var n = this,
          o = n.options;
        e.suggestions = n.verifySuggestionsFormat(e.suggestions), o.noCache || (n.cachedResponse[i] = e, o.preventBadQueries && !e.suggestions.length && n.badQueries.push(t)), t === n.getQuery(n.currentValue) && (n.suggestions = e.suggestions, n.suggest())
      },
      activate: function(t) {
        var i, n = this,
          o = n.classes.selected,
          s = e(n.suggestionsContainer),
          a = s.find("." + n.classes.suggestion);
        return s.find("." + o).removeClass(o), n.selectedIndex = t, -1 !== n.selectedIndex && a.length > n.selectedIndex ? (i = a.get(n.selectedIndex), e(i).addClass(o), i) : null
      },
      selectHint: function() {
        var t = this,
          i = e.inArray(t.hint, t.suggestions);
        t.select(i)
      },
      select: function(e) {
        var t = this;
        t.hide(), t.onSelect(e)
      },
      moveUp: function() {
        var t = this;
        if (-1 !== t.selectedIndex) return 0 === t.selectedIndex ? (e(t.suggestionsContainer).children("." + t.classes.suggestion).first().removeClass(t.classes.selected), t.selectedIndex = -1, t.ignoreValueChange = !1, t.el.val(t.currentValue), void t.findBestHint()) : void t.adjustScroll(t.selectedIndex - 1)
      },
      moveDown: function() {
        var e = this;
        e.selectedIndex !== e.suggestions.length - 1 && e.adjustScroll(e.selectedIndex + 1)
      },
      adjustScroll: function(t) {
        var i = this,
          n = i.activate(t);
        if (n) {
          var o, s, a, r = e(n).outerHeight();
          o = n.offsetTop, s = e(i.suggestionsContainer).scrollTop(), a = s + i.options.maxHeight - r, o < s ? e(i.suggestionsContainer).scrollTop(o) : o > a && e(i.suggestionsContainer).scrollTop(o - i.options.maxHeight + r), i.options.preserveInput || (i.ignoreValueChange = !0, i.el.val(i.getValue(i.suggestions[t].value))), i.signalHint(null)
        }
      },
      onSelect: function(t) {
        var i = this,
          n = i.options.onSelect,
          o = i.suggestions[t];
        i.currentValue = i.getValue(o.value), i.currentValue === i.el.val() || i.options.preserveInput || i.el.val(i.currentValue), i.signalHint(null), i.suggestions = [], i.selection = o, e.isFunction(n) && n.call(i.element, o)
      },
      getValue: function(e) {
        var t, i, n = this,
          o = n.options.delimiter;
        return o ? (t = n.currentValue, i = t.split(o), 1 === i.length ? e : t.substr(0, t.length - i[i.length - 1].length) + e) : e
      },
      dispose: function() {
        var t = this;
        t.el.off(".autocomplete").removeData("autocomplete"), e(window).off("resize.autocomplete", t.fixPositionCapture), e(t.suggestionsContainer).remove()
      }
    }, e.fn.devbridgeAutocomplete = function(i, n) {
      var o = "autocomplete";
      return arguments.length ? this.each(function() {
        var s = e(this),
          a = s.data(o);
        "string" == typeof i ? a && "function" == typeof a[i] && a[i](n) : (a && a.dispose && a.dispose(), a = new t(this, i), s.data(o, a))
      }) : this.first().data(o)
    }, e.fn.autocomplete || (e.fn.autocomplete = e.fn.devbridgeAutocomplete)
  });
var config = {
    over: showUl,
    timeout: 200,
    out: hideUl
  },
  configPrimary = {
    over: showUlPrimary,
    timeout: 200,
    out: hideUlPrimary
  },
  configItemlist = {
    over: showItemlistExt,
    timeout: 200,
    out: hideItemlistExt
  },
  configItemlistNoExt = {
    over: showItemlistNoExt,
    timeout: 200,
    out: hideItemlistNoExt
  },
  variant_slider_array = new Array,
  myPlayer;
$(document).ready(function() {
  $(".textcontent table").wrap('<div class="table_wrapper"></div>'), $("#primary_navigation li").each(function(e) {
    ($(this).hasClass("active") || $(this).hasClass("active_tree")) && $(this).parent("ul").addClass("sub_category_active")
  }), $(".itemlist_order_button_link").on("click", function(e) {
    if (e.preventDefault(), e.stopPropagation(), "disabled" != $(this).attr("data-disabled")) {
      var t = document.createElement("a");
      t.href = window.location.href;
      var i = t.search;
      i = i.replace("?action=shop_add_item_to_basket_list", "").replace("&action=shop_add_item_to_basket_list", "");
      var n = "?";
      "" != i && (n = i + "&"), n += "action=shop_add_item_to_basket_list", $("<input>").attr({
        type: "hidden",
        id: "item_qty",
        name: "item_qty",
        value: $(this).closest("form").find(".input_item_quantity_value").val()
      }).appendTo($(this).closest("form")), $("<input>").attr({
        type: "hidden",
        id: "item_id",
        name: "item_id",
        value: $(this).closest("form").find(".input_item_id").val()
      }).appendTo($(this).closest("form")), $(this).closest("form").attr("action", n), $(this).closest("form").submit()
    }
  }), $("body").on("click", ".video-select", function(e) {
    return e.preventDefault, videoPath = $(this).attr("data-videoPath"), videoName = $(this).attr("data-videoName"), videoId = $(this).attr("data-videoId"), $(".mcs-item").each(function(e) {
      $(this).find("a").removeClass("mz-thumb-selected")
    }), $(".item_video_container").removeClass("active"), $(".item_video_container").find(".video_container").hide(), $(this).addClass("mz-thumb-selected"), $("#video_" + videoId).show(), $("#video_" + videoId).parents(".item_video_container").addClass("active"), !1
  }), $("body").on("click", ".mz-thumb", function(e) {
    e.preventDefault, $(e.target).is(".video-select") || $(e.target).parent().is(".video-select") || ($(".mcs-item").each(function(e) {
      $(this).find("a").removeClass("mz-thumb-selected")
    }), $(this).addClass("mz-thumb-selected"), $(".item_video_container").removeClass("active"), $(".item_video_container").find(".video_container").hide())
  }), $("#box,.user_account_link,#header_basket,.language_switch, #shop_by_category").hoverIntent(config), $("#primary_navigation li.level_1").hoverIntent(configPrimary), $(".itemcard_list2 .itemlist__container").hoverIntent(configItemlist);
  var e = $("#menu_1 div.itemlist11>a>img").length,
    t = 0;
  $("#menu_1 div.itemlist11>a>img").on("load", function() {
    ++t == e && $("#menu_1 div.itemlist11>a>img").each(function() {
      var e = $(this),
        t = $(this).outerHeight(),
        i = $(e).parents("a"),
        n = $(i).height(),
        o = Math.ceil((n - t) / 2);
      console.log("picHeight:" + t + " parHeight:" + n + " margin:" + o), $(e).css("margin-top", o + "px")
    })
  });
  var i = $("#itemcard_left div.item_images>a>img").length,
    n = 0;
  $("#itemcard_left div.item_images>a>img").on("load", function() {
    ++n == i && $("#itemcard_left div.item_images>a>img").each(function() {
      var e = $(this),
        t = $(this).outerHeight(),
        i = $(e).parents("a"),
        n = $(i).height(),
        o = Math.ceil((n - t) / 2);
      console.log("picHeight:" + t + " parHeight:" + n + " margin:" + o), $(e).css("margin-top", o + "px")
    })
  }), $(".headline-lines").each(function() {
    var e = ["h1", "h2", "h3", "h4", "h5", "h6"],
      t = $(this);
    jQuery.each(e, function(e, i) {
      var n = t.find(i).html();
      t.find(i).html("<span>" + n + "</span>")
    })
  }), $("#toggle_navigation, #primary_navigation_mobile .close_button_navigation_mobile, #overlay").click(function() {
    toggle_mobile_menu()
  }), $(".filterbox-mobilebutton").click(function() {
    $(this).toggleClass("active"), $(".filterbox").slideToggle("fast")
  }), $(".filter > .filter_headline").click(function() {
    var e = $(this).hasClass("clicked");
    $(".filterbox .filter_headline").removeClass("clicked"), 0 != e ? ($(this).removeClass("clicked"), $(this).next(".filter_toggle").slideUp("fast")) : ($(this).addClass("clicked"), $(this).next(".filter_toggle").slideDown("fast"))
  }), $("#primary_navigation_mobile ul li .arrow_mobile").click(function(e) {
    var t = $(this).next("ul");
    t.length > 0 ? (t.is(":visible") ? (t.slideUp("slow"), $(this).removeClass("active_tree"), $(this).parent().removeClass("active_tree"), t.find("ul").slideUp("fast")) : (t.slideDown("slow"), $(this).addClass("active_tree"), $(this).parent().addClass("active_tree")), e.preventDefault()) : window.location = $(this).parent().find("a").attr("href")
  });
  var o = $(".free_items_wrapper .item").length;
  $(".special_items_wrapper .owl-carousel").owlCarousel({
      loop: !1,
      items: 9,
      autoWidth: !0,
      margin: 30,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      autoplayHoverPause: !0,
      nav: !0,
      responsive: {
        0: {
          items: 1,
          autoplay: !0,
          center: !1,
          nav: !1
        },
        680: {
          items: 2,
          autoplay: !0
        },
        1250: {
          autoplay: !0,
          items: 3
        },
        1540: {
          autoplay: !0,
          items: 10 - o
        }
      }
    }), $(".trustinfo_banner .owl-carousel").owlCarousel({
      loop: !1,
      items: 7,
      autoWidth: !0,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      autoplayHoverPause: !0,
      nav: !0,
      responsive: {
        0: {
          autoWidth: !1,
          items: 1,
          center: !1,
          nav: !1,
          autoplay: !0
        },
        320: {
          autoWidth: !1,
          items: 2,
          loop: !0,
          autoplay: !0
        },
        520: {
          autoWidth: !1,
          items: 4,
          loop: !0,
          autoplay: !0
        },
        1250: {
          autoWidth: !1,
          items: 7
        }
      }
    }), $(".free_items_wrapper .owl-carousel").owlCarousel({
      loop: !1,
      margin: 30,
      items: 3,
      autoWidth: !0,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      autoplayHoverPause: !0,
      nav: !0,
      responsive: {
        0: {
          items: 1,
          center: !1,
          nav: !1
        },
        680: {
          autoplay: !0,
          items: 2
        },
        1250: {
          autoplay: !0,
          items: 3
        },
        1540: {
          autoplay: !0,
          items: 3
        }
      }
    }), $(".shop_item_preview .owl-carousel").length > 0 && $(".shop_item_preview .owl-carousel").each(function() {
      $(this).closest(".nopreviewslider").length > 0 ? $(this).removeClass("owl-carousel") : $(this).owlCarousel({
        loop: !0,
        margin: 30,
        items: 4,
        autoplay: !0,
        autoHeight: !0,
        autoWidth: !1,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        nav: !1,
        dots: !1,
        autoplayHoverPause: !0,
        responsive: {
          0: {
            items: 1,
            center: !1,
            nav: !1
          },
          430: {
            nav: !1,
            items: 2
          },
          1024: {
            nav: !0,
            items: 3
          },
          1540: {
            items: 4
          }
        }
      })
    }), $(".itemcard_crossseller .owl-carousel").length > 0 && $(".itemcard_crossseller .owl-carousel").each(function() {
      $(this).closest(".nopreviewslider").length > 0 ? $(this).removeClass("owl-carousel") : $(this).owlCarousel({
        loop: !1,
        margin: 30,
        items: 4,
        autoplay: !0,
        autoHeight: !0,
        autoWidth: !1,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        nav: !0,
        autoplayHoverPause: !0,
        responsive: {
          0: {
            items: 1,
            center: !1,
            nav: !1
          },
          680: {
            items: 3
          },
          1250: {
            items: 4
          },
          1540: {
            items: 5
          }
        }
      })
    }), $(".itemlist_variants_wrapper").each(function(e) {
      var t = $(this).children(".variant_image").length;
      variant_slider_array[e] = $(this).bxSlider({
        mode: "vertical",
        pager: !1,
        autoReload: !0,
        controls: !1,
        slideMargin: 5,
        maxSlides: 3,
        minSlides: 3,
        adaptiveHeight: !0
      }), $(this).parents(".itemlist_variants").find(".variant-next").on("click", function(t) {
        t.preventDefault(), variant_slider_array[e].goToNextSlide()
      }), $(this).parents(".itemlist_variants").find(".variant-prev").on("click", function(t) {
        t.preventDefault(), variant_slider_array[e].goToPrevSlide()
      }), t < 4 && ($(this).parents(".itemlist_variants").find(".variant-next").hide(), $(this).parents(".itemlist_variants").find(".variant-prev").hide())
    }),
    $(".input_quantity_line").keydown(function(e) {
      if (13 == e.keyCode) return this.form.submit(), !1
    }), $(window).width() < 768 && $(".textcontent table").wrap('<div class="table_wrapper"></div>');
  var s, a;
  $(".itemlist_variants_wrapper").on("mouseenter", ".variant_image", function(e) {
    return variantImage = $(this), a = variantImage.parent().find(".main_active"), variantImage.hasClass("active") || (s = $(this).parents(".itemlist_container").find(".itemlist_item a .image img"), s.attr("src", variantImage.find("img").data("big")), variantImage.parent().find(".variant_image").removeClass("active"), variantImage.addClass("active")), !1
  }), $(".itemlist_variants_wrapper").on("mouseleave", function() {
    return a.hasClass("active") || (s.attr("src", s.data("main")), $(this).find(".variant_image").removeClass("active"), a.addClass("active")), !1
  }), $(".collection_container .link-actions").length > 0 && $(".collection_container").each(function() {
    var e = $(this).find(".link-actions"),
      t = e.children("a");
    $(this).wrap('<a href="' + t.attr("href") + '"></a>'), e.remove()
  }), initScrolltopbutton($("#scrolltop_button")), $(document).on("click", ".itemlist .favorite-button,.itemlist .itemlist_order_button_link ", function(e) {
    e.preventDefault()
  })
}), $(document).ready(function() {
  $("#primary_navigation_mobile .language_switch_button").on("click", function() {
    $("#primary_navigation_mobile .list_language_switch").toggleClass("active")
  }), $("#primary_navigation_mobile .currency_switch").on("click", function() {
    $("#primary_navigation_mobile .list_currency_switch").toggleClass("active")
  });
  var e, t, i, n = $("input[type!=hidden]:visible");
  $(n).each(function() {
    t = $(this), e = t.parents("form"), formID = $(e).attr("id"), "form_itemcard" !== formID && (i = $(e).find("input[type!=hidden]:visible").last(), lastTextInputInForm = $(e).find("input[type!=checkbox]:visible").last(), t[0] != i[0] && t[0] != lastTextInputInForm[0] || $(t).off("keyup").on("keyup", function(e) {
      if (13 === e.which) return !1
    }))
  }), $(window).width() < 1600 && $(".itemcard_item_name").prependTo("#itemcard_left"), $(".hasvar td:first-child").on("click", function() {
    var e, t, i, n = $(this).parent(".hasvar"),
      o = n[0].dataset.itemno,
      s = $(n).find(".replace_price_string_toggle"),
      a = 0;
    void 0 !== s && s.length > 0 && (t = $(s).data("initstring"), i = $(s).data("replacementstring")), void 0 !== o && o.length > 0 && (e = $(".isvar_" + o), varTrscol = $(".iscolorvar_" + o), void 0 !== e && e.length > 0 && (a = 0, $(e).each(function() {
      $(this).is(":visible") ? ($(this).hide(), 0 == a && ($(n).removeClass("varsopen").addClass("varsclosed"), t.length > 0 && i.length > 0 && $(s).empty().html(t))) : ($(this).show(), 0 == a && ($(n).removeClass("varsclosed").addClass("varsopen"), t.length > 0 && i.length > 0 && $(s).empty().html(i))), a++
    })), "undefined" != typeof varTrscol && varTrscol.length > 0 && $(varTrscol).each(function() {
      $(this).is(":visible") ? $(this).hide() : $(this).show()
    }))
  })
}), $(document).ready(function() {});