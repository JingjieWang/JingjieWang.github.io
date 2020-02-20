webpackJsonp([1], {
    40: function (n, e) {
    }, 41: function (n, e, t) {
        t(88);
        var r = t(14)(t(48), t(96), "data-v-647e008b", null);
        n.exports = r.exports
    }, 42: function (n, e, t) {
        t(86);
        var r = t(14)(t(49), t(94), "data-v-35c047fd", null);
        n.exports = r.exports
    }, 43: function (n, e, t) {
        t(85);
        var r = t(14)(t(46), t(93), "data-v-22ce9519", null);
        n.exports = r.exports
    }, 44: function (n, e, t) {
        t(87);
        var r = t(14)(t(47), t(95), "data-v-53c8d54c", null);
        n.exports = r.exports
    }, 46: function (n, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var r = t(15), o = t.n(r), i = t(25), s = t.n(i), a = t(24), u = t.n(a), c = t(42), l = t.n(c), d = t(41),
            h = t.n(d), p = t(40);
        t.n(p);
        e.default = {
            name: "app", components: {StyleEditor: l.a, ResumeEditor: h.a}, data: function () {
                return {
                    interval: 20,
                    currentStyle: "",
                    enableHtml: !1,
                    fullStyle: ["/*\n* * 你好，面试官大大。\n* 这是一份特殊的介绍，主要说下我的一些经历\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .3s;\n}\n/* 白色背景太单调了，我们来点色彩 */\nhtml {\n  color: rgb(222,222,222); background: rgb(0,43,54);\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw; height: 90vh;\n}\n/* 代码高亮 */\n.token.selector{ color: rgb(133,153,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(42,161,152); }\n\n/* 加点 3D 效果呗 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 48vw; height: 90vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 好了，我开始写情书了 */\n\n\n", "\n/* 这封情书好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成对 小奈 更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n", '\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],
                    currentMarkdown: "",
                    fullMarkdown: "\n\n面试官您好，我是一个会写代码的产品经理 \n\n实习写过一年IM工具的iOS端，关键词：mqtt、IM、消息队列、MVP \n\nPMskill站长，后端+前端+运维，一站式操盘，小破站目前已接入阿里联盟、谷歌adsense \n\n关键词：Node.js、js、redis、mongodb、web、python爬虫、七牛图库、邮件服务 \n\n----\n  - 作为站长，从后尝试国aws、谷歌云、阿里云，域名注册，https证书、图床、邮箱服务、cdn等等 \n  - 也折腾过智能问答（机器学习训练中文语料，效果非常差）\n\n折腾过类黄金眼的报表，关键词：Hadoop、canal、kafka、Hbase\n----\n  - 对于大数据和云的理解，超过99%的产品经理，专门给产品经理写过技术科普的文集\n  - 大学折腾过黑苹果、学校断网时候 用icmp包、驱动翻过墙\n  - 大二写过安卓，类似腾讯手机管家的密码锁、便捷小工具\n  - 用Docker部署过ss服务、数据库、ngnix，熟练使用过\n  - 从ajax、Node.js到现在的serverless，技术变革红利\n  - 函数计算、云服务即将迎来了成熟商用的阶段\n  - 比起技术实现，我更想做商业驱动的策划\n  - 说了那么多，希望能与面试官您有进一步的交流\n\n 谢谢🙏"
                }
            }, created: function () {
                this.makeResume()
            }, methods: {
                makeResume: function () {
                    function n() {
                        return e.apply(this, arguments)
                    }

                    var e = u()(s.a.mark(function n() {
                        return s.a.wrap(function (n) {
                            for (; ;)switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2, this.progressivelyShowStyle(0);
                                case 2:
                                    return n.next = 4, this.progressivelyShowResume();
                                case 4:
                                    return n.next = 6, this.progressivelyShowStyle(1);
                                case 6:
                                    return n.next = 8, this.showHtml();
                                case 8:
                                    return n.next = 10, this.progressivelyShowStyle(2);
                                case 10:
                                case"end":
                                    return n.stop()
                            }
                        }, n, this)
                    }));
                    return n
                }(), showHtml: function () {
                    var n = this;
                    return new o.a(function (e, t) {
                        n.enableHtml = !0, e()
                    })
                }, progressivelyShowStyle: function (n) {
                    var e = this;
                    return new o.a(function (t, r) {
                        var o = e.interval, i = u()(s.a.mark(function e() {
                            var r, a, u, c, l, d = this;
                            return s.a.wrap(function (e) {
                                for (; ;)switch (e.prev = e.next) {
                                    case 0:
                                        if (r = this.fullStyle[n]) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        a = this.fullStyle.filter(function (e, t) {
                                            return t <= n
                                        }).map(function (n) {
                                            return n.length
                                        }).reduce(function (n, e) {
                                            return n + e
                                        }, 0), u = a - r.length, this.currentStyle.length < a ? (c = this.currentStyle.length - u, l = r.substring(c, c + 1) || " ", this.currentStyle += l, "\n" === r.substring(c - 1, c) && this.$refs.styleEditor && this.$nextTick(function () {
                                            d.$refs.styleEditor.goBottom()
                                        }), setTimeout(i, o)) : t();
                                    case 6:
                                    case"end":
                                        return e.stop()
                                }
                            }, e, this)
                        })).bind(e);
                        i()
                    })
                }, progressivelyShowResume: function () {
                    var n = this;
                    return new o.a(function (e, t) {
                        var r = n.fullMarkdown.length, o = n.interval;
                        !function t() {
                            if (n.currentMarkdown.length < r) {
                                n.currentMarkdown = n.fullMarkdown.substring(0, n.currentMarkdown.length + 1);
                                n.currentMarkdown[n.currentMarkdown.length - 1];
                                "\n" === n.currentMarkdown[n.currentMarkdown.length - 2] && n.$refs.resumeEditor && n.$nextTick(function () {
                                    return n.$refs.resumeEditor.goBottom()
                                }), setTimeout(t, o)
                            } else e()
                        }()
                    })
                }
            }
        }
    }, 47: function (n, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var r = t(15), o = t.n(r), i = t(25), s = t.n(i), a = t(24), u = t.n(a), c = t(42), l = t.n(c), d = t(41),
            h = t.n(d), p = t(40);
        t.n(p);
        e.default = {
            name: "app", components: {StyleEditor: l.a, ResumeEditor: h.a}, data: function () {
                return {
                    interval: 10,
                    currentStyle: "",
                    enableHtml: !1,
                    fullStyle: ["/*\n* 大家好，我是帅气的小明。\n* 今天我要和小奈表白了，希望大家转发，阅读1000次以上，小奈将接受我的表白！\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .3s;\n}\n/* 白色背景太单调了，我们来点色彩吧 */\nhtml {\n  color: rgb(222,222,222);\n  background: rgb(0,43,54);\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  overflow: auto;\n  width: 90vw;\n  margin: 2.5vh 5vw;\n  height: 90vh;\n}\n/* 太高了 */\n.styleEditor {\n  height: 45vh;\n}\n/* 代码高亮 */\n.token.selector{\n  color: rgb(133,153,0);\n}\n.token.property{\n  color: rgb(187,137,0);\n}\n.token.punctuation{\n  color: yellow;\n}\n.token.function{\n  color: rgb(42,161,152);\n}\n\n/* 加点 3D 效果呗 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  transform: rotateX(-10deg) translateZ(-50px) ;\n}\n\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed;\n  top: 50%; left: 0;\n  padding: .5em;  margin: 2.5vh;\n  width: 95vw; height: 45vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 后退，我要开始写情书了 */\n\n\n", "\n/* 这封情书好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成对 小奈 更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n", '\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],
                    currentMarkdown: "",
                    fullMarkdown: "\n\n* ![关注我](http://p7vrjjfog.bkt.clouddn.com/pm.jpg?imageView/2/w/200)\n* \n\n* [ 产品经理的技术课堂（简书主页） ](https://www.jianshu.com/u/b5de3a38334b)\n*\n\n我是帅气的小明\n  ====\n\n坐标：深圳南山，没有房，没有车，但是我骚啊。\n\n资深工程师，现任李大仁公司主力后端。\n\n过去的我\n\n----\n  - 我大学在黑龙江xx学校心理学专业\n  - 毕业后在北京五道口切过菜\n\n那时候很迷茫\n----\n  - 有一天看到了犀牛书，瞬间很有兴趣\n  - 入门了前端，原来技术如此有趣\n  - 所以我就南下深圳，然后我遇到了你，你是那么好\n  - 那么温柔、美女、像一个风一样的女子\n  - 我是沙子，随你飞扬\n  - 犹如万家灯火照亮了我的心\n  - 让我这个深圳漂泊的孩子有了一丝丝甜蜜\n  - 总会不经意想起你\n\n* ![](http://p7vrjjfog.bkt.clouddn.com/1.gif?imageView2/2/w/250/h/150)\n* - 当我女朋友吧"
                }
            }, created: function () {
                this.makeResume()
            }, methods: {
                makeResume: function () {
                    function n() {
                        return e.apply(this, arguments)
                    }

                    var e = u()(s.a.mark(function n() {
                        return s.a.wrap(function (n) {
                            for (; ;)switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2, this.progressivelyShowStyle(0);
                                case 2:
                                    return n.next = 4, this.progressivelyShowResume();
                                case 4:
                                    return n.next = 6, this.progressivelyShowStyle(1);
                                case 6:
                                    return n.next = 8, this.showHtml();
                                case 8:
                                    return n.next = 10, this.progressivelyShowStyle(2);
                                case 10:
                                case"end":
                                    return n.stop()
                            }
                        }, n, this)
                    }));
                    return n
                }(), showHtml: function () {
                    var n = this;
                    return new o.a(function (e, t) {
                        n.enableHtml = !0, n.$nextTick(function () {
                            n.$refs.resumeEditor.goTop()
                        }), e()
                    })
                }, progressivelyShowStyle: function (n) {
                    var e = this;
                    return new o.a(function (t, r) {
                        var o = e.interval, i = u()(s.a.mark(function e() {
                            var r, a, u, c, l, d = this;
                            return s.a.wrap(function (e) {
                                for (; ;)switch (e.prev = e.next) {
                                    case 0:
                                        if (r = this.fullStyle[n]) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        a = this.fullStyle.filter(function (e, t) {
                                            return t <= n
                                        }).map(function (n) {
                                            return n.length
                                        }).reduce(function (n, e) {
                                            return n + e
                                        }, 0), u = a - r.length, this.currentStyle.length < a ? (c = this.currentStyle.length - u, l = r.substring(c, c + 1) || " ", this.currentStyle += l, "\n" === r.substring(c - 1, c) && this.$refs.styleEditor && this.$nextTick(function () {
                                            d.$refs.styleEditor.goBottom()
                                        }), setTimeout(i, o)) : t();
                                    case 6:
                                    case"end":
                                        return e.stop()
                                }
                            }, e, this)
                        })).bind(e);
                        i()
                    })
                }, progressivelyShowResume: function () {
                    var n = this;
                    return new o.a(function (e, t) {
                        var r = n.fullMarkdown.length, o = n.interval;
                        !function t() {
                            if (n.currentMarkdown.length < r) {
                                n.currentMarkdown = n.fullMarkdown.substring(0, n.currentMarkdown.length + 1);
                                n.currentMarkdown[n.currentMarkdown.length - 1];
                                "\n" === n.currentMarkdown[n.currentMarkdown.length - 2] && n.$refs.resumeEditor && n.$nextTick(function () {
                                    return n.$refs.resumeEditor.goBottom()
                                }), setTimeout(t, o)
                            } else e()
                        }()
                    })
                }
            }
        }
    }, 48: function (n, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var r = t(89), o = t.n(r);
        e.default = {
            props: ["markdown", "enableHtml"], name: "ResumeEditor", computed: {
                result: function () {
                    return this.enableHtml ? o()(this.markdown) : this.markdown
                }
            }, methods: {
                goBottom: function () {
                    this.$refs.container.scrollTop = 1e5
                }, goTop: function () {
                    this.$refs.container.scrollTop = 0
                }
            }
        }
    }, 49: function (n, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var r = t(90), o = t.n(r);
        e.default = {
            name: "Editor", props: ["code"], computed: {
                highlightedCode: function () {
                    return o.a.highlight(this.code, o.a.languages.css)
                }, codeInStyleTag: function () {
                    return "<style>" + this.code + "</style>"
                }
            }, methods: {
                goBottom: function () {
                    this.$refs.container.scrollTop = 1e5
                }
            }
        }
    }, 50: function (n, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var r = t(45), o = t(43), i = t.n(o), s = t(44), a = t.n(s), u = document.documentElement.clientWidth;
        new r.a({
            el: "#app", render: function (n) {
                return n(u > 500 ? i.a : a.a)
            }
        })
    }, 85: function (n, e) {
    }, 86: function (n, e) {
    }, 87: function (n, e) {
    }, 88: function (n, e) {
    }, 93: function (n, e) {
        n.exports = {
            render: function () {
                var n = this, e = n.$createElement, t = n._self._c || e;
                return t("div", {attrs: {id: "app"}}, [t("StyleEditor", {
                    ref: "styleEditor",
                    attrs: {code: n.currentStyle}
                }), n._v(" "), t("ResumeEditor", {
                    ref: "resumeEditor",
                    attrs: {markdown: n.currentMarkdown, enableHtml: n.enableHtml}
                })], 1)
            }, staticRenderFns: []
        }
    }, 94: function (n, e) {
        n.exports = {
            render: function () {
                var n = this, e = n.$createElement, t = n._self._c || e;
                return t("div", {ref: "container", staticClass: "styleEditor"}, [t("div", {
                    staticClass: "code",
                    domProps: {innerHTML: n._s(n.codeInStyleTag)}
                }), n._v(" "), t("pre", {domProps: {innerHTML: n._s(n.highlightedCode)}})])
            }, staticRenderFns: []
        }
    }, 95: function (n, e) {
        n.exports = {
            render: function () {
                var n = this, e = n.$createElement, t = n._self._c || e;
                return t("div", {attrs: {id: "app"}}, [t("StyleEditor", {
                    ref: "styleEditor",
                    attrs: {code: n.currentStyle}
                }), n._v(" "), t("ResumeEditor", {
                    ref: "resumeEditor",
                    attrs: {markdown: n.currentMarkdown, enableHtml: n.enableHtml}
                })], 1)
            }, staticRenderFns: []
        }
    }, 96: function (n, e) {
        n.exports = {
            render: function () {
                var n = this, e = n.$createElement, t = n._self._c || e;
                return t("div", {
                    ref: "container",
                    staticClass: "resumeEditor",
                    class: {htmlMode: n.enableHtml}
                }, [n.enableHtml ? t("div", {domProps: {innerHTML: n._s(n.result)}}) : t("pre", [n._v(n._s(n.result))])])
            }, staticRenderFns: []
        }
    }
}, [50]);
//# sourceMappingURL=app.4199f1700ff5fd5ce61a.js.map