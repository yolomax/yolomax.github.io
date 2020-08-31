/*!
 * Bootstrap v4.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
! function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t((e = e || self).bootstrap = {}, e.jQuery)
}(this, function (e, p) {
  "use strict";

  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }

  function s(e, t, n) {
    return t && i(e.prototype, t), n && i(e, n), e
  }

  function t(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      e && (i = i.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      })), n.push.apply(n, i)
    }
    return n
  }

  function l(o) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {};
      e % 2 ? t(Object(r), !0).forEach(function (e) {
        var t, n, i;
        t = o, i = r[n = e], n in t ? Object.defineProperty(t, n, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[n] = i
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : t(Object(r)).forEach(function (e) {
        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(r, e))
      })
    }
    return o
  }
  p = p && p.hasOwnProperty("default") ? p.default : p;
  var n = "transitionend";

  function o(e) {
    var t = this,
      n = !1;
    return p(this).one(m.TRANSITION_END, function () {
      n = !0
    }), setTimeout(function () {
      n || m.triggerTransitionEnd(t)
    }, e), this
  }
  var m = {
    TRANSITION_END: "bsTransitionEnd",
    getUID: function (e) {
      for (; e += ~~(1e6 * Math.random()), document.getElementById(e););
      return e
    },
    getSelectorFromElement: function (e) {
      var t = e.getAttribute("data-target");
      if (!t || "#" === t) {
        var n = e.getAttribute("href");
        t = n && "#" !== n ? n.trim() : ""
      }
      try {
        return document.querySelector(t) ? t : null
      } catch (e) {
        return null
      }
    },
    getTransitionDurationFromElement: function (e) {
      if (!e) return 0;
      var t = p(e).css("transition-duration"),
        n = p(e).css("transition-delay"),
        i = parseFloat(t),
        o = parseFloat(n);
      return i || o ? (t = t.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(t) + parseFloat(n))) : 0
    },
    reflow: function (e) {
      return e.offsetHeight
    },
    triggerTransitionEnd: function (e) {
      p(e).trigger(n)
    },
    supportsTransitionEnd: function () {
      return Boolean(n)
    },
    isElement: function (e) {
      return (e[0] || e).nodeType
    },
    typeCheckConfig: function (e, t, n) {
      for (var i in n)
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
            r = t[i],
            s = r && m.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
          if (!new RegExp(o).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
        } var a
    },
    findShadowRoot: function (e) {
      if (!document.documentElement.attachShadow) return null;
      if ("function" != typeof e.getRootNode) return e instanceof ShadowRoot ? e : e.parentNode ? m.findShadowRoot(e.parentNode) : null;
      var t = e.getRootNode();
      return t instanceof ShadowRoot ? t : null
    },
    jQueryDetection: function () {
      if ("undefined" == typeof p) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
      var e = p.fn.jquery.split(" ")[0].split(".");
      if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }
  };
  m.jQueryDetection(), p.fn.emulateTransitionEnd = o, p.event.special[m.TRANSITION_END] = {
    bindType: n,
    delegateType: n,
    handle: function (e) {
      if (p(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
    }
  };
  var j = "carousel",
    H = "bs.carousel",
    R = "." + H,
    F = ".data-api",
    M = p.fn[j],
    W = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0
    },
    U = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean"
    },
    B = "next",
    q = "prev",
    K = "left",
    Q = "right",
    V = {
      SLIDE: "slide" + R,
      SLID: "slid" + R,
      KEYDOWN: "keydown" + R,
      MOUSEENTER: "mouseenter" + R,
      MOUSELEAVE: "mouseleave" + R,
      TOUCHSTART: "touchstart" + R,
      TOUCHMOVE: "touchmove" + R,
      TOUCHEND: "touchend" + R,
      POINTERDOWN: "pointerdown" + R,
      POINTERUP: "pointerup" + R,
      DRAG_START: "dragstart" + R,
      LOAD_DATA_API: "load" + R + F,
      CLICK_DATA_API: "click" + R + F
    },
    Y = "carousel",
    z = "active",
    X = "slide",
    G = "carousel-item-right",
    $ = "carousel-item-left",
    J = "carousel-item-next",
    Z = "carousel-item-prev",
    ee = "pointer-event",
    te = ".active",
    ne = ".active.carousel-item",
    ie = ".carousel-item",
    oe = ".carousel-item img",
    re = ".carousel-item-next, .carousel-item-prev",
    se = ".carousel-indicators",
    ae = "[data-slide], [data-slide-to]",
    le = '[data-ride="carousel"]',
    ce = {
      TOUCH: "touch",
      PEN: "pen"
    },
    he = function () {
      function r(e, t) {
        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(se), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
      }
      var e = r.prototype;
      return e.next = function () {
        this._isSliding || this._slide(B)
      }, e.nextWhenVisible = function () {
        !document.hidden && p(this._element).is(":visible") && "hidden" !== p(this._element).css("visibility") && this.next()
      }, e.prev = function () {
        this._isSliding || this._slide(q)
      }, e.pause = function (e) {
        e || (this._isPaused = !0), this._element.querySelector(re) && (m.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
      }, e.cycle = function (e) {
        e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
      }, e.to = function (e) {
        var t = this;
        this._activeElement = this._element.querySelector(ne);
        var n = this._getItemIndex(this._activeElement);
        if (!(e > this._items.length - 1 || e < 0))
          if (this._isSliding) p(this._element).one(V.SLID, function () {
            return t.to(e)
          });
          else {
            if (n === e) return this.pause(), void this.cycle();
            var i = n < e ? B : q;
            this._slide(i, this._items[e])
          }
      }, e.dispose = function () {
        p(this._element).off(R), p.removeData(this._element, H), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
      }, e._getConfig = function (e) {
        return e = l({}, W, {}, e), m.typeCheckConfig(j, e, U), e
      }, e._handleSwipe = function () {
        var e = Math.abs(this.touchDeltaX);
        if (!(e <= 40)) {
          var t = e / this.touchDeltaX;
          (this.touchDeltaX = 0) < t && this.prev(), t < 0 && this.next()
        }
      }, e._addEventListeners = function () {
        var t = this;
        this._config.keyboard && p(this._element).on(V.KEYDOWN, function (e) {
          return t._keydown(e)
        }), "hover" === this._config.pause && p(this._element).on(V.MOUSEENTER, function (e) {
          return t.pause(e)
        }).on(V.MOUSELEAVE, function (e) {
          return t.cycle(e)
        }), this._config.touch && this._addTouchEventListeners()
      }, e._addTouchEventListeners = function () {
        var t = this;
        if (this._touchSupported) {
          var n = function (e) {
              t._pointerEvent && ce[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX)
            },
            i = function (e) {
              t._pointerEvent && ce[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
                return t.cycle(e)
              }, 500 + t._config.interval))
            };
          p(this._element.querySelectorAll(oe)).on(V.DRAG_START, function (e) {
            return e.preventDefault()
          }), this._pointerEvent ? (p(this._element).on(V.POINTERDOWN, function (e) {
            return n(e)
          }), p(this._element).on(V.POINTERUP, function (e) {
            return i(e)
          }), this._element.classList.add(ee)) : (p(this._element).on(V.TOUCHSTART, function (e) {
            return n(e)
          }), p(this._element).on(V.TOUCHMOVE, function (e) {
            return function (e) {
              e.originalEvent.touches && 1 < e.originalEvent.touches.length ? t.touchDeltaX = 0 : t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX
            }(e)
          }), p(this._element).on(V.TOUCHEND, function (e) {
            return i(e)
          }))
        }
      }, e._keydown = function (e) {
        if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
          case 37:
            e.preventDefault(), this.prev();
            break;
          case 39:
            e.preventDefault(), this.next()
        }
      }, e._getItemIndex = function (e) {
        return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(ie)) : [], this._items.indexOf(e)
      }, e._getItemByDirection = function (e, t) {
        var n = e === B,
          i = e === q,
          o = this._getItemIndex(t),
          r = this._items.length - 1;
        if ((i && 0 === o || n && o === r) && !this._config.wrap) return t;
        var s = (o + (e === q ? -1 : 1)) % this._items.length;
        return -1 == s ? this._items[this._items.length - 1] : this._items[s]
      }, e._triggerSlideEvent = function (e, t) {
        var n = this._getItemIndex(e),
          i = this._getItemIndex(this._element.querySelector(ne)),
          o = p.Event(V.SLIDE, {
            relatedTarget: e,
            direction: t,
            from: i,
            to: n
          });
        return p(this._element).trigger(o), o
      }, e._setActiveIndicatorElement = function (e) {
        if (this._indicatorsElement) {
          var t = [].slice.call(this._indicatorsElement.querySelectorAll(te));
          p(t).removeClass(z);
          var n = this._indicatorsElement.children[this._getItemIndex(e)];
          n && p(n).addClass(z)
        }
      }, e._slide = function (e, t) {
        var n, i, o, r = this,
          s = this._element.querySelector(ne),
          a = this._getItemIndex(s),
          l = t || s && this._getItemByDirection(e, s),
          c = this._getItemIndex(l),
          h = Boolean(this._interval);
        if (o = e === B ? (n = $, i = J, K) : (n = G, i = Z, Q), l && p(l).hasClass(z)) this._isSliding = !1;
        else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
          this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l);
          var u = p.Event(V.SLID, {
            relatedTarget: l,
            direction: o,
            from: a,
            to: c
          });
          if (p(this._element).hasClass(X)) {
            p(l).addClass(i), m.reflow(l), p(s).addClass(n), p(l).addClass(n);
            var f = parseInt(l.getAttribute("data-interval"), 10);
            f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = f) : this._config.interval = this._config.defaultInterval || this._config.interval;
            var d = m.getTransitionDurationFromElement(s);
            p(s).one(m.TRANSITION_END, function () {
              p(l).removeClass(n + " " + i).addClass(z), p(s).removeClass(z + " " + i + " " + n), r._isSliding = !1, setTimeout(function () {
                return p(r._element).trigger(u)
              }, 0)
            }).emulateTransitionEnd(d)
          } else p(s).removeClass(z), p(l).addClass(z), this._isSliding = !1, p(this._element).trigger(u);
          h && this.cycle()
        }
      }, r._jQueryInterface = function (i) {
        return this.each(function () {
          var e = p(this).data(H),
            t = l({}, W, {}, p(this).data());
          "object" == typeof i && (t = l({}, t, {}, i));
          var n = "string" == typeof i ? i : t.slide;
          if (e || (e = new r(this, t), p(this).data(H, e)), "number" == typeof i) e.to(i);
          else if ("string" == typeof n) {
            if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
            e[n]()
          } else t.interval && t.ride && (e.pause(), e.cycle())
        })
      }, r._dataApiClickHandler = function (e) {
        var t = m.getSelectorFromElement(this);
        if (t) {
          var n = p(t)[0];
          if (n && p(n).hasClass(Y)) {
            var i = l({}, p(n).data(), {}, p(this).data()),
              o = this.getAttribute("data-slide-to");
            o && (i.interval = !1), r._jQueryInterface.call(p(n), i), o && p(n).data(H).to(o), e.preventDefault()
          }
        }
      }, s(r, null, [{
        key: "VERSION",
        get: function () {
          return "4.4.1"
        }
      }, {
        key: "Default",
        get: function () {
          return W
        }
      }]), r
    }();
  p(document).on(V.CLICK_DATA_API, ae, he._dataApiClickHandler), p(window).on(V.LOAD_DATA_API, function () {
    for (var e = [].slice.call(document.querySelectorAll(le)), t = 0, n = e.length; t < n; t++) {
      var i = p(e[t]);
      he._jQueryInterface.call(i, i.data())
    }
  }), p.fn[j] = he._jQueryInterface, p.fn[j].Constructor = he, p.fn[j].noConflict = function () {
    return p.fn[j] = M, he._jQueryInterface
  };
});
//# sourceMappingURL=bootstrap.bundle.min.js.map