var au;
(function (au) {
    var rgba;
    (function (rgba_1) {
        "use strict";
        var COLOR_TABLE = {
            "aliceblue": "#f0f8ff",
            "antiquewhite": "#faebd7",
            "aqua": "#00ffff",
            "aquamarine": "#7fffd4",
            "azure": "#f0ffff",
            "beige": "#f5f5dc",
            "bisque": "#ffe4c4",
            "black": "#000000",
            "blanchedalmond": "#ffebcd",
            "blue": "#0000ff",
            "blueviolet": "#8a2be2",
            "brown": "#a52a2a",
            "burlywood": "#deb887",
            "cadetblue": "#5f9ea0",
            "chartreuse": "#7fff00",
            "chocolate": "#d2691e",
            "coral": "#ff7f50",
            "cornflowerblue": "#6495ed",
            "cornsilk": "#fff8dc",
            "crimson": "#dc143c",
            "cyan": "#00ffff",
            "darkblue": "#00008b",
            "darkcyan": "#008b8b",
            "darkgoldenrod": "#b8860b",
            "darkgray": "#a9a9a9",
            "darkgreen": "#006400",
            "darkkhaki": "#bdb76b",
            "darkmagenta": "#8b008b",
            "darkolivegreen": "#556b2f",
            "darkorange": "#ff8c00",
            "darkorchid": "#9932cc",
            "darkred": "#8b0000",
            "darksalmon": "#e9967a",
            "darkseagreen": "#8fbc8f",
            "darkslateblue": "#483d8b",
            "darkslategray": "#2f4f4f",
            "darkturquoise": "#00ced1",
            "darkviolet": "#9400d3",
            "deeppink": "#ff1493",
            "deepskyblue": "#00bfff",
            "dimgray": "#696969",
            "dodgerblue": "#1e90ff",
            "firebrick": "#b22222",
            "floralwhite": "#fffaf0",
            "forestgreen": "#228b22",
            "fuchsia": "#ff00ff",
            "gainsboro": "#dcdcdc",
            "ghostwhite": "#f8f8ff",
            "gold": "#ffd700",
            "goldenrod": "#daa520",
            "gray": "#808080",
            "green": "#008000",
            "greenyellow": "#adff2f",
            "honeydew": "#f0fff0",
            "hotpink": "#ff69b4",
            "indianred ": "#cd5c5c",
            "indigo": "#4b0082",
            "ivory": "#fffff0",
            "khaki": "#f0e68c",
            "lavender": "#e6e6fa",
            "lavenderblush": "#fff0f5",
            "lawngreen": "#7cfc00",
            "lemonchiffon": "#fffacd",
            "lightblue": "#add8e6",
            "lightcoral": "#f08080",
            "lightcyan": "#e0ffff",
            "lightgoldenrodyellow": "#fafad2",
            "lightgrey": "#d3d3d3",
            "lightgreen": "#90ee90",
            "lightpink": "#ffb6c1",
            "lightsalmon": "#ffa07a",
            "lightseagreen": "#20b2aa",
            "lightskyblue": "#87cefa",
            "lightslategray": "#778899",
            "lightsteelblue": "#b0c4de",
            "lightyellow": "#ffffe0",
            "lime": "#00ff00",
            "limegreen": "#32cd32",
            "linen": "#faf0e6",
            "magenta": "#ff00ff",
            "maroon": "#800000",
            "mediumaquamarine": "#66cdaa",
            "mediumblue": "#0000cd",
            "mediumorchid": "#ba55d3",
            "mediumpurple": "#9370d8",
            "mediumseagreen": "#3cb371",
            "mediumslateblue": "#7b68ee",
            "mediumspringgreen": "#00fa9a",
            "mediumturquoise": "#48d1cc",
            "mediumvioletred": "#c71585",
            "midnightblue": "#191970",
            "mintcream": "#f5fffa",
            "mistyrose": "#ffe4e1",
            "moccasin": "#ffe4b5",
            "navajowhite": "#ffdead",
            "navy": "#000080",
            "oldlace": "#fdf5e6",
            "olive": "#808000",
            "olivedrab": "#6b8e23",
            "orange": "#ffa500",
            "orangered": "#ff4500",
            "orchid": "#da70d6",
            "palegoldenrod": "#eee8aa",
            "palegreen": "#98fb98",
            "paleturquoise": "#afeeee",
            "palevioletred": "#d87093",
            "papayawhip": "#ffefd5",
            "peachpuff": "#ffdab9",
            "peru": "#cd853f",
            "pink": "#ffc0cb",
            "plum": "#dda0dd",
            "powderblue": "#b0e0e6",
            "purple": "#800080",
            "red": "#ff0000",
            "rosybrown": "#bc8f8f",
            "royalblue": "#4169e1",
            "saddlebrown": "#8b4513",
            "salmon": "#fa8072",
            "sandybrown": "#f4a460",
            "seagreen": "#2e8b57",
            "seashell": "#fff5ee",
            "sienna": "#a0522d",
            "silver": "#c0c0c0",
            "skyblue": "#87ceeb",
            "slateblue": "#6a5acd",
            "slategray": "#708090",
            "snow": "#fffafa",
            "springgreen": "#00ff7f",
            "steelblue": "#4682b4",
            "tan": "#d2b48c",
            "teal": "#008080",
            "thistle": "#d8bfd8",
            "tomato": "#ff6347",
            "turquoise": "#40e0d0",
            "violet": "#ee82ee",
            "wheat": "#f5deb3",
            "white": "#ffffff",
            "whitesmoke": "#f5f5f5",
            "yellow": "#ffff00",
            "yellowgreen": "#9acd32"
        };
        function parseArgsEx(text, length) {
            var lparen = text.split("(");
            if (lparen.length !== 2) {
                throw new Error("invalid arguments '" + text + "'");
            }
            var rparen = lparen[1].split(")");
            if (rparen.length !== 2) {
                throw new Error("invalid arguments '" + text + "'");
            }
            var commas = rparen[0].split(",");
            if (commas.length !== length) {
                throw new Error("invalid arguments '" + text + "'");
            }
            return commas;
        }
        function parseFloatEx(text) {
            var value = parseFloat(text);
            if (typeof (value) !== "number" || !isFinite(value)) {
                throw new Error("invalid floating-point number '" + text + "'");
            }
            return value;
        }
        function parseFloatArgsEx(text, length) {
            var args = parseArgsEx(text, length);
            var numbers = args.map(function (s) { return parseFloatEx(s); });
            return numbers;
        }
        function parseHex1Ex(text, index) {
            var n = parseIntEx(text.substr(index, 1), 16);
            return (n * 16) + n;
        }
        function parseHex2Ex(text, index) {
            return parseIntEx(text.substr(index, 2), 16);
        }
        function parseIntEx(text, radix) {
            var value = parseInt(text, radix);
            if (typeof (value) !== "number" || !isFinite(value)) {
                throw new Error("invalid number '" + text + "'");
            }
            return value;
        }
        function parsePercentEx(text) {
            var n = text.length;
            if (n > 0) {
                if (text.charAt(n - 1) === "%") {
                    return parseFloatEx(text.substr(0, n - 1));
                }
            }
            throw new Error("invalid percent '" + text + "'");
        }
        var R_BRIGHTNESS_SCALING = 0.2126 / 255.0;
        var G_BRIGHTNESS_SCALING = 0.7152 / 255.0;
        var B_BRIGHTNESS_SCALING = 0.0722 / 255.0;
        /**
         * Returns the brightness, ranging from 0 to 1, of a color according to
         * the formula f(r, g, b) := 0.2126 r + 0.7152 g + 0.0722 * b.
         * @param  {IRGBA}  color The RGBA color.
         * @return {number} The brightness, ranging from 0 to 1.
         */
        function brightness(color) {
            return ((color.r * R_BRIGHTNESS_SCALING) +
                (color.g * G_BRIGHTNESS_SCALING) +
                (color.b * B_BRIGHTNESS_SCALING));
        }
        rgba_1.brightness = brightness;
        /**
         * Creates a new {IRGBA} object by parsing the specified CSS color string.
         * If the color string is invalid, this function returns undefined.
         * @param  {string} color The CSS color string.
         * @return {undefiend|IRGBA} A new instance, or undefined.
         */
        function fromCSS(color) {
            color = color.toLowerCase().replace(" ", "").replace("\t", "");
            if (color in COLOR_TABLE) {
                color = COLOR_TABLE[color];
            }
            try {
                if (color.substr(0, 1) === "#") {
                    if (color.length === 4) {
                        return {
                            r: parseHex1Ex(color, 1),
                            g: parseHex1Ex(color, 2),
                            b: parseHex1Ex(color, 3),
                            a: 1.0
                        };
                    }
                    if (color.length === 7) {
                        return {
                            r: parseHex2Ex(color, 1),
                            g: parseHex2Ex(color, 3),
                            b: parseHex2Ex(color, 5),
                            a: 1.0
                        };
                    }
                    return undefined;
                }
                if (color.substr(0, 5) === "rgba(") {
                    var rgba_2 = parseFloatArgsEx(color, 4);
                    return { r: rgba_2[0], g: rgba_2[1], b: rgba_2[2], a: rgba_2[3] };
                }
                if (color.substr(0, 4) === "rgb(") {
                    var rgb = parseFloatArgsEx(color, 3);
                    return { r: rgb[0], g: rgb[1], b: rgb[2], a: 1.0 };
                }
                if (color.substr(0, 5) === "hsla(") {
                    var args = parseArgsEx(color, 4);
                    var h = parseFloatEx(args[0]);
                    var s = parsePercentEx(args[1]);
                    var l = parsePercentEx(args[2]);
                    var a = parseFloatEx(args[3]);
                    return fromHSLA(h, s, l, a);
                }
                if (color.substr(0, 4) === "hsl(") {
                    var args = parseArgsEx(color, 3);
                    var h = parseFloatEx(args[0]);
                    var s = parsePercentEx(args[1]);
                    var l = parsePercentEx(args[2]);
                    return fromHSL(h, s, l);
                }
            }
            catch (e) {
                console.log("invalid color '" + color + "'", e);
            }
            return undefined;
        }
        rgba_1.fromCSS = fromCSS;
        /**
         * Converts an HSL color to RGB.
         * @param  {number} h The hue, ranging from 0 to 360.
         * @param  {number} s The saturation, ranging from 0 to 100.
         * @param  {number} l The lightness, ranging from 0 to 100.
         * @return {IRGBA} A new object.
         */
        function fromHSL(h, s, l) {
            h /= 360.0;
            s /= 100.0;
            l /= 100.0;
            //
            // NOTE This implementation is based on the sample code provided at
            // http://stackoverflow.com/a/9493060.
            //
            var r = l;
            var g = l;
            var b = l;
            if (s !== 0) {
                var hue2rgb = function (p, q, t) {
                    if (t < 0.0)
                        t += 1.0;
                    if (t > 1.0)
                        t -= 1.0;
                    if (t < 1.0 / 6.0) {
                        return p + ((q - p) * 6.0 * t);
                    }
                    if (t < 1.0 / 2.0) {
                        return q;
                    }
                    if (t < 2.0 / 3.0) {
                        return p + ((q - p) * ((2.0 / 3.0) - t) * 6.0);
                    }
                    return p;
                };
                var q = l < 0.5 ? l * (1.0 + s) : (l + s) - (l * s);
                var p = (2.0 * l) - q;
                r = hue2rgb(p, q, h + (1.0 / 3.0));
                g = hue2rgb(p, q, h);
                b = hue2rgb(p, q, h - (1.0 / 3.0));
            }
            return {
                r: Math.round(r * 255.0),
                g: Math.round(g * 255.0),
                b: Math.round(b * 255.0),
                a: 1.0
            };
        }
        rgba_1.fromHSL = fromHSL;
        /**
         * Converts an HSL color to RGB.
         * @param  {number} h The hue, ranging from 0 to 360.
         * @param  {number} s The saturation, ranging from 0 to 100.
         * @param  {number} l The lightness, ranging from 0 to 100.
         * @param  {number} a The alpha, ranging from 0 to 1.
         * @return {IRGBA} A new object.
         */
        function fromHSLA(h, s, l, a) {
            var rgba = fromHSL(h, s, l);
            rgba.a = a;
            return rgba;
        }
        rgba_1.fromHSLA = fromHSLA;
    })(rgba = au.rgba || (au.rgba = {}));
})(au || (au = {}));
var au;
(function (au) {
    "use strict";
    function addVector(out, a, b) {
        a.forEach(function (ai, index) { return out[index] = ai + b[index]; });
        return out;
    }
    function cloneVector(a) {
        return a.map(function (ai) { return ai; });
    }
    function copyVector(out, src) {
        src.forEach(function (value, index) { return out[index] = value; });
        return out;
    }
    function createVector(length) {
        var out = [];
        while (length-- > 0) {
            out.push(0.0);
        }
        return out;
    }
    function multiplyVector(out, a, b) {
        a.forEach(function (ai, index) { return out[index] = ai * b[index]; });
        return out;
    }
    function readOption(actual, fallback) {
        return actual === undefined ? fallback : actual;
    }
    function scaleVector(out, a, k) {
        a.forEach(function (ai, index) { return out[index] = k * ai; });
        return out;
    }
    function subtractVector(out, lhs, rhs) {
        lhs.forEach(function (ai, index) { return out[index] = ai - rhs[index]; });
        return out;
    }
    /**
     * Creates a new object that implements the Nelder-Mead Simplex Method.
     * @param  {INelderMeadSpec} spec A specification for the new instance.
     * @return {INelderMead}          A new instance.
     */
    function createNelderMead(spec) {
        var n = spec.n;
        var objfunc = spec.objfunc;
        var unit = readOption(spec.unit, 1.0);
        //
        // NOTE These default values for rho, chi, gamma, and sigma are based
        // on the 2010 paper 'Implementing the Nelder-Mead simplex algorithm
        // with adaptive parameters' by Fuchang Gao and Lixing Han.
        //
        var rho = readOption(spec.rho, 1.0);
        var chi = readOption(spec.chi, n >= 2 ? (1.0 + (2.0 / n)) : 2.0);
        var gamma = readOption(spec.gamma, n >= 2 ? (0.75 - (1.0 / (2.0 * n))) : 0.5);
        var sigma = readOption(spec.sigma, n >= 2 ? (1.0 - (1.0 / n)) : 0.5);
        console.assert(rho > 0.0, "rho " + rho + " is invalid");
        console.assert(chi >= 1 && chi >= rho, "chi " + chi + " is invalid (rho = " + rho + ")");
        console.assert(gamma > 0.0 && gamma < 1.0, "gamma " + gamma + " is invalid");
        console.assert(sigma > 0.0 && sigma < 1.0, "sigma " + sigma + " is invalid");
        // Declare variables for statistics.
        var stats = {
            iterations: 0,
            evaluations: 0,
            reflections: 0,
            expansions: 0,
            insideContractions: 0,
            outsideContractions: 0,
            shinkages: 0
        };
        // Use the specified vertex as the first vertex in the simplex; if
        // unspecified, assign the origin.
        var x = [createVector(n)];
        if (spec.vertex !== undefined) {
            copyVector(x[0], spec.vertex);
        }
        // Add N additional vertices offset from x[0] by one unit in each
        // dimension; if unspecified, use a unit distance of one.
        x[0].forEach(function () { return x.push(cloneVector(x[0])); });
        for (var i = 0; i < n; i++) {
            x[i + 1][i] += unit;
        }
        // Evaluates the objective function.
        function evaluate(x) {
            stats.evaluations++;
            return objfunc(x);
        }
        // Initially evaluate the objective function for the simplex.
        var f = x.map(function (xi) { return evaluate(xi); });
        // Sorts the vertices of the simplex, and the calculations for the
        // objective function, based on those calculations.
        var sort = (function () {
            var scratch = x.map(function (xi, i) { return ({ i: i, xi: xi, fi: f[i] }); });
            return function () {
                scratch.forEach(function (ti, i) { ti.i = i; ti.xi = x[i]; ti.fi = f[i]; });
                scratch.sort(function (a, b) { return (a.fi < b.fi) ? -1 : ((b.fi < a.fi) ? 1 : 0); });
                scratch.forEach(function (ti, i) { x[i] = ti.xi; f[i] = ti.fi; });
            };
        })();
        // Initially sort the simplex.
        sort();
        // Accepts a new vertex into the simplex by replacing the vertex with
        // the highest value returned from the objective function and then
        // resorting.
        function accept(xn, fn) {
            copyVector(x[n], xn);
            f[n] = fn;
            sort();
        }
        // Declare vertices here to avoid memory allocations while iterating.
        var xbar = createVector(n); // centroid excluding x[n]
        var xr = createVector(n); // reflection vertex
        var xc = createVector(n); // outside contraction vertex
        var xcc = createVector(n); // inside contraction vertex
        var xe = createVector(n); // expansion vertex
        var vec = createVector(n); // a vector between two vertices
        return {
            stats: stats,
            get delta() {
                return f[n] - f[0];
            },
            get lengthSquared() {
                var max = 0.0;
                for (var i = 1; i <= n; i++) {
                    subtractVector(vec, x[i], x[0]);
                    multiplyVector(vec, vec, vec);
                    max = Math.max(max, vec.reduce(function (p, c) { return p + c; }));
                }
                return max;
            },
            copyVertex: function (out) {
                copyVector(out, x[0]);
                return out;
            },
            //
            // NOTE This implementation is based on the 1998 paper 'Convergence
            // Properties of the Nelder-Mead Simplex Method in Low Dimensions'
            // by Lagarias et al.
            //
            iterate: function () {
                stats.iterations++;
                //
                // REFLECTION
                //
                copyVector(xbar, x[0]);
                for (var i = 1; i < n; i++) {
                    addVector(xbar, xbar, x[i]);
                }
                scaleVector(xbar, xbar, 1.0 / n);
                subtractVector(xr, xbar, x[n]);
                scaleVector(xr, xr, rho);
                addVector(xr, xr, xbar);
                var fr = evaluate(xr);
                if (f[0] <= fr && fr < f[n - 1]) {
                    stats.reflections++;
                    accept(xr, fr);
                    return;
                }
                //
                // EXPANSION
                //
                if (fr < f[0]) {
                    subtractVector(xe, xr, xbar);
                    scaleVector(xe, xe, chi);
                    addVector(xe, xe, xbar);
                    var fe = evaluate(xe);
                    if (fe < fr) {
                        stats.expansions++;
                        accept(xe, fe);
                        return;
                    }
                    stats.reflections++;
                    accept(xr, fr);
                    return;
                }
                //
                // CONTRACTION
                //
                if (fr >= f[n - 1]) {
                    if (fr < f[n]) {
                        subtractVector(xc, xr, xbar);
                        scaleVector(xc, xc, gamma);
                        addVector(xc, xc, xbar);
                        var fc = evaluate(xc);
                        if (fc <= fr) {
                            stats.outsideContractions++;
                            accept(xc, fc);
                            return;
                        }
                    }
                    else {
                        subtractVector(xcc, xbar, x[n]);
                        scaleVector(xcc, xcc, gamma);
                        subtractVector(xcc, xbar, xcc);
                        var fcc = evaluate(xcc);
                        if (fcc < f[n]) {
                            stats.insideContractions++;
                            accept(xcc, fcc);
                            return;
                        }
                    }
                }
                //
                // SHRINKAGE
                //
                for (var i = 1; i <= n; i++) {
                    subtractVector(x[i], x[i], x[0]);
                    scaleVector(x[i], x[i], sigma);
                    addVector(x[i], x[i], x[0]);
                    f[i] = evaluate(x[i]);
                }
                sort();
                stats.shinkages++;
            }
        };
    }
    au.createNelderMead = createNelderMead;
})(au || (au = {}));
var au;
(function (au) {
    "use strict";
    var ASCII_TAB = 9;
    var ASCII_LF = 10;
    var ASCII_CR = 13;
    var ASCII_SPACE = 32;
    var ASCII_LPAREN = 40;
    var ASCII_RPAREN = 41;
    var ASCII_COMMA = 44;
    var ASCII_MINUS = 45;
    var ASCII_PERIOD = 46;
    var ASCII_ZERO = 48;
    var ASCII_NINE = 57;
    var ASCII_COLON = 58;
    var ASCII_SEMICOLON = 59;
    var ASCII_TILDA = 126;
    function clone(node) {
        var clone = createNode();
        clone.id = node.id;
        clone.name = node.name;
        if (node !== undefined) {
            clone.length = node.length;
        }
        return clone;
    }
    function copyChildren(source, target, excluded) {
        source.children.
            filter(function (sourceChild) { return sourceChild !== excluded; }).
            forEach(function (sourceChild) {
            var targetChild = clone(sourceChild);
            target.children.push(targetChild);
            targetChild.parent = target;
            copyChildren(sourceChild, targetChild);
        });
    }
    function copyParents(source, target) {
        if (source.parent !== undefined) {
            var targetChild = clone(source.parent);
            target.children.push(targetChild);
            targetChild.parent = target;
            copyChildren(source.parent, targetChild, source);
            copyParents(source.parent, targetChild);
        }
    }
    function count(node, predicate) {
        var sum = predicate(node) ? 1 : 0;
        node.children.forEach(function (child) { return sum += count(child, predicate); });
        return sum;
    }
    function createNode() {
        var node = {
            id: 0,
            name: "",
            children: [],
            count: function (predicate) { return count(node, predicate); },
            encode: function () { return encode(node) + ";"; },
            every: function (predicate) { return every(node, predicate); },
            filter: function (predicate) { return filter(node, predicate, []); },
            findRoot: function () { return findRoot(node); },
            forEach: function (action) { forEach(node, action); },
            isInterior: function () { return !node.isLeaf() && node.parent !== undefined; },
            isLeaf: function () { return node.children.length === 0; },
            map: function (transform) { return map(node, transform, []); },
            reroot: function () { return reroot(node); },
            some: function (predicate) { return some(node, predicate); },
        };
        return node;
    }
    function encode(node) {
        var s = "";
        if (node.children.length > 0) {
            s += "(" + node.children.map(encode).join(",") + ")";
        }
        s += node.name;
        if (node.length !== undefined) {
            s += ":" + node.length.toString();
        }
        return s;
    }
    function every(node, predicate) {
        if (!predicate(node)) {
            return false;
        }
        return node.children.every(function (child) { return every(child, predicate); });
    }
    function filter(node, predicate, array) {
        if (predicate(node)) {
            array.push(node);
        }
        node.children.forEach(function (child) { return filter(child, predicate, array); });
        return array;
    }
    function findRoot(node) {
        return node.parent === undefined ? node : findRoot(node.parent);
    }
    function forEach(node, action) {
        action(node);
        node.children.forEach(function (child) { return forEach(child, action); });
    }
    function map(node, transform, array) {
        array.push(transform(node));
        node.children.forEach(function (child) { return map(child, transform, array); });
        return array;
    }
    function reroot(node) {
        var newRoot = clone(node);
        copyChildren(node, newRoot);
        copyParents(node, newRoot);
        var oldRoot = node.findRoot();
        node.length = oldRoot.length;
        return newRoot;
    }
    function some(node, predicate) {
        if (predicate(node)) {
            return true;
        }
        return node.children.some(function (child) { return some(child, predicate); });
    }
    /**
     * Creates a new Newick node, the root of the tree parsed from the
     * specified string. The text should end with a semicolon.
     * @param  {string} text The text in Newick format.
     * @return {INewickNode} The root node of the tree.
     */
    function createNewickTree(text) {
        var g = { index: 0, nodeCount: 0 };
        function peek() {
            return g.index >= text.length ? -1 : text.charCodeAt(g.index);
        }
        function atDigit() {
            var code = peek();
            return (code >= ASCII_ZERO &&
                code <= ASCII_NINE);
        }
        function atEndOfName() {
            var code = peek();
            return (code < 0 ||
                code === ASCII_LPAREN ||
                code === ASCII_RPAREN ||
                code === ASCII_COMMA ||
                code === ASCII_COLON ||
                code === ASCII_SEMICOLON);
        }
        function atSpace() {
            var code = peek();
            return (code === ASCII_SPACE ||
                code === ASCII_LF ||
                code === ASCII_TAB ||
                code === ASCII_CR);
        }
        function skipWhitespace() {
            while (atSpace()) {
                g.index++;
            }
        }
        function skipDigits() {
            while (atDigit()) {
                g.index++;
            }
        }
        function tryChar(code) {
            skipWhitespace();
            if (code === peek()) {
                g.index++;
                return true;
            }
            return false;
        }
        function parseLength() {
            var anchor = g.index;
            tryChar(ASCII_MINUS);
            skipDigits();
            if (tryChar(ASCII_PERIOD)) {
                skipDigits();
            }
            if (anchor === g.index) {
                throw new Error("expected a length but encountered " + format(peek()) + " at index " + anchor);
            }
            var lengthText = text.substring(anchor, g.index);
            var length = parseFloat(lengthText);
            if (!isFinite(length)) {
                throw new Error("expected a length but encountered '" + lengthText + " at index " + anchor + "'");
            }
            return length;
        }
        function parseName() {
            var anchor = g.index;
            while (!atEndOfName()) {
                g.index++;
            }
            return text.substring(anchor, g.index).trim();
        }
        function format(code) {
            if (code < 0) {
                return "end of stream";
            }
            if (code < ASCII_SPACE || code > ASCII_TILDA) {
                return "ASCII code '" + code + "'";
            }
            var symbol = String.fromCharCode(code);
            return "symbol '" + symbol + "'";
        }
        function require(code) {
            skipWhitespace();
            var actualCode = peek();
            if (actualCode !== code) {
                var required = format(code);
                var actual = format(actualCode);
                throw new Error("expected " + required + " but encountered " + actual + " at index " + g.index);
            }
            g.index++;
        }
        function decode() {
            var parent = createNode();
            parent.id = g.nodeCount++;
            if (tryChar(ASCII_LPAREN)) {
                do {
                    var child = decode();
                    parent.children.push(child);
                    child.parent = parent;
                } while (tryChar(ASCII_COMMA));
                require(ASCII_RPAREN);
            }
            parent.name = parseName();
            if (tryChar(ASCII_COLON)) {
                parent.length = parseLength();
            }
            return parent;
        }
        var root = decode();
        require(ASCII_SEMICOLON);
        require(-1);
        return root;
    }
    au.createNewickTree = createNewickTree;
})(au || (au = {}));
var au;
(function (au) {
    "use strict";
    var storageKey = (function () {
        try {
            return window.location.pathname + "#";
        }
        catch (e) {
            return "";
        }
    })();
    au.storageKeySettings = storageKey + "settings";
    /**
     * The main entry point of this Web application.
     */
    function main() {
        var OptimizerState;
        (function (OptimizerState) {
            OptimizerState[OptimizerState["Off"] = 0] = "Off";
            OptimizerState[OptimizerState["Active"] = 1] = "Active";
            OptimizerState[OptimizerState["Ready"] = 2] = "Ready";
        })(OptimizerState || (OptimizerState = {}));
        var dom = {
            message: document.getElementById("message"),
            newickInput: document.getElementById("newick"),
            nodeInc: document.getElementById("node-inc"),
            nodeDec: document.getElementById("node-dec"),
            optimizeAnchor: document.getElementById("optimize"),
            optimizeSpinner: document.getElementById("optimize-spinner"),
            optimizeWarning: document.getElementById("optimize-warning"),
            randomizeAnchor: document.getElementById("randomize"),
            saveAnchor: document.getElementById("save"),
            settings: document.getElementById("settings"),
            settingsClose: document.getElementById("settings-close"),
            settingsLayer: document.getElementById("settings-layer"),
            settingsWindow: document.getElementById("settings-window"),
            svg: document.getElementById("svg")
        };
        var settings = au.settings.fromStorage();
        var editor = ace.edit("settings-editor");
        editor.setTheme("ace/theme/eclipse");
        editor.getSession().setMode("ace/mode/json");
        editor.$blockScrolling = Infinity;
        var newickTree;
        var optimizer;
        var optimizerState = OptimizerState.Ready;
        var svgTree;
        function render() {
            if (svgTree) {
                dom.svg.removeChild(svgTree.dom.containerGroup);
                svgTree = undefined;
            }
            if (!newickTree || !optimizer) {
                return;
            }
            svgTree = au.createSVGTree(dom.svg);
            dom.svg.appendChild(svgTree.dom.containerGroup);
            (function addTree(node, v) {
                var w = optimizer.positions[node.id];
                if (node.length !== undefined) {
                    svgTree.addEdge(au.createSVGEdge({
                        x1: v.x,
                        y1: v.y,
                        x2: w.x,
                        y2: w.y
                    }));
                }
                var color;
                if (node.name) {
                    if (settings.colorNodes) {
                        color = settings.colorMap[node.name];
                    }
                }
                var text = node.name;
                if (!settings.labelNodes) {
                    if (text.length > 0) {
                        text = " ";
                    }
                }
                svgTree.addNode(au.createSVGNode({
                    color: color,
                    x: w.x,
                    y: w.y,
                    text: text
                }));
                node.children.forEach(function (c) { return addTree(c, w); });
            })(newickTree, au.vec2.fromValues(0.0, 0.0));
            svgTree.zoomToFit(settings);
        }
        function parse() {
            try {
                newickTree = au.createNewickTree(dom.newickInput.value);
                if (newickTree.every(function (n) { return n.length !== undefined; })) {
                    newickTree.forEach(function (n) { return n.length = 1.0; });
                    newickTree.length = undefined;
                }
                optimizer = au.createTreeOptimizer({
                    tree: newickTree,
                    settings: settings
                });
                dom.message.classList.remove("message-warning");
                dom.message.textContent = "parsed as " + newickTree.encode();
                render();
                optimize();
            }
            catch (e) {
                newickTree = undefined;
                optimizer = undefined;
                dom.message.classList.add("message-warning");
                dom.message.textContent = e.message;
                render();
            }
        }
        function randomize() {
            var namedNodeCount = 0;
            var text = (function build(percent, hasLength) {
                var length = hasLength ? 0.01 + 0.08 * Math.random() : undefined;
                var children = [];
                for (var p = percent; Math.random() <= p; p *= 0.75) {
                    children.push(build(percent * 0.75, true));
                }
                var name = children.length === 0 ? "" + namedNodeCount++ : "";
                return ((children.length > 0 ? "(" + children.join(",") + ")" : "") +
                    name +
                    (length !== undefined ? ":" + length.toFixed(6) : ""));
            })(1.0, false) + ";";
            dom.newickInput.value = text;
            parse();
        }
        function updateOptimizerDom(newState) {
            if (optimizerState === newState) {
                return;
            }
            optimizerState = newState;
            var update = function (e, on, off) {
                on.forEach(function (c) { return e.classList.add(c); });
                off.forEach(function (c) { return e.classList.remove(c); });
            };
            var show = function (e) { return update(e, ["visible"], ["hidden"]); };
            var hide = function (e) { return update(e, ["hidden"], ["visible"]); };
            switch (newState) {
                case OptimizerState.Off: {
                    hide(dom.optimizeSpinner);
                    show(dom.optimizeWarning);
                    update(dom.optimizeAnchor, ["optimizer-off"], ["optimizer-ready", "optimizer-active"]);
                    break;
                }
                case OptimizerState.Ready: {
                    hide(dom.optimizeSpinner);
                    hide(dom.optimizeWarning);
                    update(dom.optimizeAnchor, ["optimizer-ready"], ["optimizer-off", "optimizer-active"]);
                    break;
                }
                case OptimizerState.Active: {
                    show(dom.optimizeSpinner);
                    hide(dom.optimizeWarning);
                    update(dom.optimizeAnchor, ["optimizer-active"], ["optimizer-off", "optimizer-ready"]);
                    break;
                }
            }
        }
        function optimize() {
            if (!newickTree || !optimizer) {
                return;
            }
            if (optimizerState === OptimizerState.Off) {
                return;
            }
            updateOptimizerDom(OptimizerState.Active);
            var isFinished = optimizer.optimize();
            render();
            if (isFinished) {
                updateOptimizerDom(OptimizerState.Ready);
            }
            else {
                setTimeout(optimize, 1);
            }
        }
        function toggleOptimization() {
            if (optimizerState === OptimizerState.Off) {
                updateOptimizerDom(OptimizerState.Ready);
                optimize();
            }
            else {
                updateOptimizerDom(OptimizerState.Off);
            }
        }
        function updateSaveAnchor(e) {
            if (!svgTree) {
                dom.saveAnchor.href = "";
                e.preventDefault();
                return;
            }
            dom.saveAnchor.href = URL.createObjectURL(new Blob([svgTree.toHTML()], { type: "image/svg+xml" }));
        }
        function showSettings() {
            editor.setValue(JSON.stringify(settings, undefined, 2));
            editor.gotoLine(1);
            dom.settingsLayer.style.display = "block";
            editor.focus();
        }
        function hideSettings() {
            dom.settingsLayer.style.display = "none";
            settings = au.settings.fromString(editor.getValue());
            au.settings.store(settings);
            render();
        }
        function adjustSizes(node, edge) {
            function bound(n) {
                n = Math.min(Math.max(0.0, n), 1.0);
                return Math.round(100.0 * n) / 100.0;
            }
            function adjust(n, d) {
                var PERCENT_PER_STEP = 0.05;
                return d === 0 ? n :
                    (d > 0 ? bound(n + PERCENT_PER_STEP) :
                        bound(n - PERCENT_PER_STEP));
            }
            settings.nodeSize = adjust(settings.nodeSize, node);
            settings.edgeSize = adjust(settings.edgeSize, edge);
            au.settings.store(settings);
            render();
        }
        function processWindowKey(e) {
            if (e.keyCode === 219) {
                if (e.shiftKey) {
                    adjustSizes(0, -1);
                }
                else {
                    adjustSizes(-1, 0);
                }
            }
            else if (e.keyCode === 221) {
                if (e.shiftKey) {
                    adjustSizes(0, 1);
                }
                else {
                    adjustSizes(1, 0);
                }
            }
        }
        function processWheel(e) {
            if (!newickTree || !optimizer) {
                return;
            }
            var RADIANS_PER_ROTATION = (5.0 / 360.0) * (2.0 * Math.PI);
            if (e.deltaY > 0) {
                optimizer.rotate(RADIANS_PER_ROTATION);
                render();
            }
            else if (e.deltaY < 0) {
                optimizer.rotate(-RADIANS_PER_ROTATION);
                render();
            }
        }
        function processEditorKey(e) {
            if (e.keyCode === 27) {
                hideSettings();
            }
        }
        dom.newickInput.addEventListener("input", parse);
        dom.optimizeAnchor.addEventListener("click", toggleOptimization);
        dom.randomizeAnchor.addEventListener("click", randomize);
        dom.saveAnchor.addEventListener("click", updateSaveAnchor);
        dom.settings.addEventListener("click", showSettings);
        dom.settingsClose.addEventListener("click", hideSettings);
        dom.settingsLayer.addEventListener("click", hideSettings);
        dom.settingsWindow.addEventListener("click", function (e) { return e.stopPropagation(); });
        dom.nodeDec.addEventListener("click", function () { return adjustSizes(-1, -1); });
        dom.nodeInc.addEventListener("click", function () { return adjustSizes(1, 1); });
        dom.svg.addEventListener("wheel", processWheel);
        editor.container.addEventListener("keydown", processEditorKey);
        window.addEventListener("keydown", processWindowKey);
        dom.newickInput.value = "(((0:0.051563,1:0.073665):0.067554,((2:0.024776,3:0.089292):0.032045,4:0.073556,5:0.073828):0.041653):0.061673,(((6:0.062106):0.027735,7:0.065435,8:0.084353,9:0.078113):0.013201,10:0.042450):0.014533,((((11:0.050176):0.019014):0.051895):0.050033,(12:0.076249,13:0.068482):0.078430):0.046452,14:0.079462);";
        parse();
    }
    document.addEventListener("DOMContentLoaded", function start() {
        document.removeEventListener("DOMContentLoaded", start);
        main();
    });
})(au || (au = {}));
var au;
(function (au) {
    var settings;
    (function (settings) {
        "use strict";
        function parseBoolean(object, property) {
            if (typeof (object) === "object") {
                var value = object[property];
                if (typeof (value) === "boolean") {
                    return value;
                }
            }
            return true;
        }
        function parseColorMap(object) {
            if (typeof (object) === "object") {
                var map_1 = object["colorMap"];
                if (typeof (map_1) === "object") {
                    var out_1 = {};
                    Object.getOwnPropertyNames(map_1).forEach(function (k) {
                        var v = map_1[k];
                        if (typeof (v) === "string") {
                            var color = au.rgba.fromCSS(v);
                            if (color !== undefined) {
                                out_1[k] = v;
                            }
                        }
                    });
                    return out_1;
                }
            }
            var colorMap = {};
            for (var i = 0; i < 42; i++) {
                var degrees = ((i * 180.0 * (3.0 - Math.sqrt(5))) % 360.0);
                colorMap["" + i] = "hsl(" + degrees.toFixed() + ", 25%, 40%)";
            }
            return colorMap;
        }
        function parseNumber(object, property) {
            if (typeof (object) === "object") {
                var value = object[property];
                if (typeof (value) === "number" && isFinite(value)) {
                    return Math.min(Math.max(0.0, value), 1.0);
                }
            }
            return 0.5;
        }
        function read(object) {
            return {
                edgeForce: parseNumber(object, "edgeForce"),
                edgeSize: parseNumber(object, "edgeSize"),
                nodeForce: parseNumber(object, "nodeForce"),
                nodeSize: parseNumber(object, "nodeSize"),
                colorNodes: parseBoolean(object, "colorNodes"),
                labelNodes: parseBoolean(object, "labelNodes"),
                colorMap: parseColorMap(object)
            };
        }
        /**
         * Creates and returns a new {ISettings} object based on a specified JSON
         * string.
         * @param  {string}    text The JSON string to parse.
         * @return {ISettings}      A new instance.
         */
        function fromString(text) {
            try {
                return read(JSON.parse(text));
            }
            catch (e) {
                return read();
            }
        }
        settings.fromString = fromString;
        /**
         * Creates and returns a new {ISettings} object based on the current values
         * in local storage.
         * @return {ISettings} A new instance.
         */
        function fromStorage() {
            try {
                return fromString(localStorage[au.storageKeySettings]);
            }
            catch (e) {
                return read();
            }
        }
        settings.fromStorage = fromStorage;
        /**
         * Stores a specified {ISettings} object to local storage.
         * @param {ISettings} object The object to serialize and save.
         */
        function store(object) {
            try {
                localStorage[au.storageKeySettings] = JSON.stringify(object);
            }
            catch (e) {
                console.log(e);
            }
        }
        settings.store = store;
    })(settings = au.settings || (au.settings = {}));
})(au || (au = {}));
var au;
(function (au) {
    "use strict";
    function createElement(elementName, attributes, styles) {
        var element = document.createElementNS("http://www.w3.org/2000/svg", elementName);
        if (attributes) {
            Object.getOwnPropertyNames(attributes).forEach(function (n) {
                element.setAttributeNS("", n, attributes[n].toString());
            });
        }
        if (styles) {
            element.setAttributeNS("", "style", Object.getOwnPropertyNames(styles).map(function (n) { return n + ":" + styles[n]; }).join(";"));
        }
        return element;
    }
    function createGroup(attributes, styles) {
        return createElement("g", attributes, styles);
    }
    function createCircle(cx, cy, r, styles) {
        var attributes = { cx: cx, cy: cy, r: r };
        return createElement("circle", attributes, styles);
    }
    function createLine(x1, y1, x2, y2, styles) {
        var attributes = { x1: x1, y1: y1, x2: x2, y2: y2 };
        return createElement("line", attributes, styles);
    }
    function createText(x, y, styles) {
        var attributes = { x: x, y: y };
        return createElement("text", attributes, styles);
    }
    /**
     * Creates a new {ISVGEdge} based on the specification.
     * @param  {ISVGEdgeSpec} spec The specification for the new object.
     * @return {ISVGEdge}          The new object.
     */
    function createSVGEdge(spec) {
        spec = spec || {};
        var x1 = spec.x1 !== undefined ? spec.x1 : 0.0;
        var y1 = spec.y1 !== undefined ? spec.y1 : 0.0;
        var x2 = spec.x2 !== undefined ? spec.x2 : 1.0;
        var y2 = spec.y2 !== undefined ? spec.y2 : 0.0;
        var strokeWidth = spec.strokeWidth !== undefined ? spec.strokeWidth : 1.0;
        var getX1 = function () { return x1 + "px"; };
        var getY1 = function () { return y1 + "px"; };
        var getX2 = function () { return x2 + "px"; };
        var getY2 = function () { return y2 + "px"; };
        var getStrokeWidth = function () { return strokeWidth + "px"; };
        var dom = {
            line: createLine(getX1(), getY1(), getX2(), getY2(), {
                "stroke": "#333",
                "stroke-width": getStrokeWidth()
            })
        };
        return {
            dom: dom,
            get strokeWidth() { return strokeWidth; },
            get x1() { return x1; },
            get y1() { return y1; },
            get x2() { return x2; },
            get y2() { return y2; },
            set strokeWidth(value) {
                strokeWidth = value;
                dom.line.style.strokeWidth = getStrokeWidth();
            },
            set x1(value) {
                x1 = value;
                dom.line.setAttribute("x1", getX1());
            },
            set x2(value) {
                x2 = value;
                dom.line.setAttribute("x2", getX2());
            },
            set y1(value) {
                y1 = value;
                dom.line.setAttribute("y1", getY1());
            },
            set y2(value) {
                y2 = value;
                dom.line.setAttribute("y2", getY2());
            }
        };
    }
    au.createSVGEdge = createSVGEdge;
    /**
     * Creates a new {ISVGNode} based on the specification.
     * @param  {ISVGNodeSpec} spec The specification for the new object.
     * @return {ISVGNode}          The new object.
     */
    function createSVGNode(spec) {
        spec = spec || {};
        var color = spec.color !== undefined ? spec.color : "#333";
        var radius0 = spec.radius0 !== undefined ? spec.radius0 : 1.0;
        var radius1 = spec.radius1 !== undefined ? spec.radius1 : 1.0;
        var x = spec.x !== undefined ? spec.x : 0.0;
        var y = spec.y !== undefined ? spec.y : 0.0;
        var text = spec.text !== undefined ? spec.text : "";
        var getCX = function () { return x + "px"; };
        var getCY = function () { return y + "px"; };
        var getFontSize = function () { return radius1 + "px"; };
        var getR = function () { return (text.length > 0 ? radius1 : radius0) + "px"; };
        var getStrokeWidthValue = function () { return radius1 * 2.0 / 18.0; };
        var getStrokeWidth = function () { return getStrokeWidthValue() + "px"; };
        var getX = function () { return x + "px"; };
        var getY = function () { return y + radius1 * 6.0 / 18.0 + "px"; };
        var getTextFillColor = function () {
            var obj = au.rgba.fromCSS(color);
            if (obj === undefined) {
                return "#fff";
            }
            ;
            var b = au.rgba.brightness(obj);
            if (b < 0.85) {
                return "#fff";
            }
            return "#444";
        };
        var dom = {
            group: createGroup(),
            circle: createCircle(getCX(), getCY(), getR(), {
                "fill": color,
                "stroke": "#fff",
                "stroke-width": getStrokeWidth()
            }),
            text: createText(getX(), getY(), {
                "fill": getTextFillColor(),
                "text-anchor": "middle",
                "font-size": getFontSize(),
                "font-family": "'Roboto Condensed',sans-serif"
            }),
            textNode: document.createTextNode(text)
        };
        dom.group.appendChild(dom.circle);
        dom.group.appendChild(dom.text);
        dom.text.appendChild(dom.textNode);
        return {
            dom: dom,
            get color() { return color; },
            get radius0() { return radius0; },
            get radius1() { return radius1; },
            get text() { return text; },
            get x() { return x; },
            get y() { return y; },
            set color(value) {
                color = value;
                dom.circle.setAttribute("color", color);
                dom.text.style.setProperty("textFillColor", getTextFillColor());
            },
            set radius0(value) {
                radius0 = value;
                dom.circle.setAttribute("r", getR());
                dom.circle.style.strokeWidth = getStrokeWidth();
                dom.text.setAttribute("y", getY());
                dom.text.style.fontSize = getFontSize();
            },
            set radius1(value) {
                radius1 = value;
                dom.circle.setAttribute("r", getR());
                dom.circle.style.strokeWidth = getStrokeWidth();
                dom.text.setAttribute("y", getY());
                dom.text.style.fontSize = getFontSize();
            },
            set text(value) {
                text = value;
                dom.textNode.textContent = value;
                dom.circle.setAttribute("r", getR());
            },
            set x(value) {
                x = value;
                dom.circle.setAttribute("cx", getCX());
                dom.text.setAttribute("x", getX());
            },
            set y(value) {
                y = value;
                dom.circle.setAttribute("cy", getCY());
                dom.text.setAttribute("y", getY());
            }
        };
    }
    au.createSVGNode = createSVGNode;
    /**
     * Creates a new {ISVGTree} to be used for the specified parent element.
     * @param  {HTMLElement} parent The parent element.
     * @return {ISVGTree}           The new object.
     */
    function createSVGTree(parent) {
        var nodes = [];
        var edges = [];
        var dom = {
            containerGroup: createGroup(),
            edgesGroup: createGroup(),
            nodesGroup: createGroup()
        };
        dom.containerGroup.appendChild(dom.edgesGroup);
        dom.containerGroup.appendChild(dom.nodesGroup);
        return {
            dom: dom,
            edges: edges,
            nodes: nodes,
            addEdge: function (edge) {
                edges.push(edge);
                dom.edgesGroup.appendChild(edge.dom.line);
            },
            addNode: function (node) {
                nodes.push(node);
                dom.nodesGroup.appendChild(node.dom.group);
            },
            zoomToFit: function (settings) {
                if (nodes.length === 0) {
                    return;
                }
                // Compute the bounds of the center positions of all nodes.
                var bounds = {
                    min: { x: nodes[0].x, y: nodes[0].y },
                    max: { x: nodes[0].x, y: nodes[0].y }
                };
                var expand = function (x, y) {
                    bounds.min.x = Math.min(bounds.min.x, x);
                    bounds.min.y = Math.min(bounds.min.y, y);
                    bounds.max.x = Math.max(bounds.max.x, x);
                    bounds.max.y = Math.max(bounds.max.y, y);
                };
                nodes.forEach(function (n) { return expand(n.x, n.y); });
                edges.forEach(function (e) { return expand(e.x1, e.y1); });
                edges.forEach(function (e) { return expand(e.x2, e.y2); });
                // Compute the dimensions of the inner bounds.
                var area = {
                    x: bounds.max.x - bounds.min.x,
                    y: bounds.max.y - bounds.min.y
                };
                // Enforce a minimum dimension.
                if (area.x === 0.0) {
                    area.x = 100.0;
                }
                if (area.y === 0.0) {
                    area.y = 100.0;
                }
                function lerp(p, a, b) {
                    p = Math.min(Math.max(0, p), 1);
                    return a + (b - a) * p;
                }
                var K1 = 1.5; // ratio: stroke width to small radius
                var K2 = 0.5 / K1; // ratio: radius to max small radius
                var K3 = 2.0; // a factor for the largest radius
                var K4 = 1.0 / 4.0; // a factor for the smallest radius
                var K5 = 1.0 / 3.0; // a factor for the minimum stroke width
                // If all nodes were aligned edge-to-edge, they would consume
                // some percentage of the largest dimension of the viewport;
                // let this determine their minimum and maximum radius.
                var measureRadius = function (n) { return n.text.length > 0 ? 1.0 : K2; };
                var maxDiameterSum = 2.0 * nodes.reduce(function (p, c) { return p + measureRadius(c); }, 0.0);
                var maxRadius = K3 * Math.max(area.x, area.y) / maxDiameterSum;
                var minRadius = K4 * maxRadius;
                var radius = lerp(settings.nodeSize, minRadius, maxRadius);
                // The stroke width is affected by the node radius.
                var maxStrokeWidth = K2 * radius;
                var minStrokeWdith = K5 * maxStrokeWidth;
                var strokeWidth = lerp(settings.edgeSize, minStrokeWdith, maxStrokeWidth);
                // Adjust the size of the nodes and edges.
                edges.forEach(function (e) { return e.strokeWidth = strokeWidth; });
                nodes.forEach(function (n) {
                    n.radius0 = strokeWidth * K1;
                    n.radius1 = radius;
                });
                // Expand the bounds to account for the radii.
                bounds.min.x -= radius;
                bounds.min.y -= radius;
                bounds.max.x += radius;
                bounds.max.y += radius;
                // Compute a padding size so the nodes and edges do not
                // extend to the absolute edge of the viewport.
                var padding = {
                    x: 0.1 * (bounds.max.x - bounds.min.x),
                    y: 0.1 * (bounds.max.y - bounds.min.y)
                };
                // Expand the bounds to accommodate for the padding.
                bounds.min.x -= padding.x;
                bounds.min.y -= padding.y;
                bounds.max.x += padding.x;
                bounds.max.y += padding.y;
                // Use this bounds as the SVG view box.
                var l = bounds.min.x;
                var t = bounds.min.y;
                var w = bounds.max.x - bounds.min.x;
                var h = bounds.max.y - bounds.min.y;
                parent.setAttribute("viewBox", l + " " + t + " " + w + " " + h);
            },
            toHTML: function () {
                if (nodes.length === 0) {
                    return undefined;
                }
                var k = 50.0 / nodes[0].radius1;
                var svg = parent.cloneNode(true);
                //
                // NOTE As of 2016, most SVG renderers fail to properly handle
                // transformation objects on the root SVG element, e.g.
                //
                //   <svg transform="scale(2)" ...>
                //     :
                //   </svg>
                //
                // Even wrapping the SVG with a group and another root SVG
                // element fails to work, e.g.
                //
                //   <svg ...><g transform="scale(2)"><svg ...>
                //     :
                //   </svg></g></svg>
                //
                // As an alternative, this function recursively "transforms"
                // the elements in the SVG tree by parsing, scaling, and
                // reassigning their attributes and styles. It seems like a lot
                // of work, but the result is a straightforward SVG file that
                // virtually all renderers support.
                //
                var scalePixels = function (text) {
                    return k * parseFloat(text) + "px";
                };
                var scaleAttribute = function (element, name) {
                    var attr = element.getAttribute(name);
                    if (!attr) {
                        return;
                    }
                    element.setAttribute(name, scalePixels(attr));
                };
                (function scale(n) {
                    if (n.localName === "svg") {
                        var t1 = n.getAttribute("viewBox");
                        var t2 = t1.match(/-?[\d\.]+/g);
                        var t3 = t2.map(function (x) { return parseFloat(x) * k; });
                        var t4 = t3.join(" ");
                        n.setAttribute("viewBox", t4);
                    }
                    else if (n.localName === "g") {
                        // do nothing
                    }
                    else if (n.localName === "line") {
                        n.style.strokeWidth = scalePixels(n.style.strokeWidth);
                        scaleAttribute(n, "x1");
                        scaleAttribute(n, "y1");
                        scaleAttribute(n, "x2");
                        scaleAttribute(n, "y2");
                        return;
                    }
                    else if (n.localName === "circle") {
                        n.style.strokeWidth = scalePixels(n.style.strokeWidth);
                        scaleAttribute(n, "r");
                        scaleAttribute(n, "cx");
                        scaleAttribute(n, "cy");
                        return;
                    }
                    else if (n.localName === "text") {
                        n.style.fontSize = scalePixels(n.style.fontSize);
                        scaleAttribute(n, "x");
                        scaleAttribute(n, "y");
                        return;
                    }
                    else {
                        return;
                    }
                    if (n.childNodes !== undefined) {
                        for (var i = 0; i < n.childNodes.length; i++) {
                            scale(n.childNodes.item(i));
                        }
                    }
                })(svg);
                return svg.outerHTML;
            }
        };
    }
    au.createSVGTree = createSVGTree;
})(au || (au = {}));
var au;
(function (au) {
    "use strict";
    var PLANCKS_CONSTANT = 6.62607004e-34;
    var TAU = 2.0 * Math.PI;
    function xor(a, b) {
        return (a && !b) || (!a && b);
    }
    function createEdgeDistanceInstrument() {
        var s1 = au.vec2.create();
        var s2 = au.vec2.create();
        var s3 = au.vec2.create();
        var s4 = au.vec2.create();
        return function (p, v, w) {
            var k1 = au.vec2.distanceSquared(v, w);
            if (k1 === 0.0) {
                return au.vec2.distanceSquared(p, v);
            }
            var k2 = (1.0 / k1) * au.vec2.dot(au.vec2.subtract(s1, p, v), au.vec2.subtract(s2, w, v));
            if (k2 < 0.0) {
                return au.vec2.distanceSquared(p, v);
            }
            if (k2 > 1.0) {
                return au.vec2.distanceSquared(p, w);
            }
            au.vec2.scale(s3, s2, k2);
            au.vec2.add(s4, s3, v);
            return au.vec2.distanceSquared(p, s4);
        };
    }
    function createEdgeIntersectionInstrument() {
        var s1 = au.vec2.create();
        var s2 = au.vec2.create();
        var s3 = au.vec2.create();
        //
        // NOTE This implementation is based on the sample code provided at
        // http://stackoverflow.com/a/565282.
        //
        return function (p1, p2, q1, q2) {
            au.vec2.subtract(s1, p2, p1);
            au.vec2.subtract(s2, q2, q1);
            au.vec2.subtract(s3, q1, p1);
            var k1 = au.vec2.cross(s3, s1);
            var k2 = au.vec2.cross(s1, s2);
            if (k2 === 0.0) {
                if (k1 === 0.0) {
                    if (au.vec2.equal(p1, q1)) {
                        return true;
                    }
                    if (au.vec2.equal(p1, q2)) {
                        return true;
                    }
                    if (au.vec2.equal(p2, q1)) {
                        return true;
                    }
                    if (au.vec2.equal(p2, q2)) {
                        return true;
                    }
                    var b1 = false;
                    b1 = xor(b1, q1.x - p1.x < 0.0);
                    b1 = xor(b1, q1.x - p2.x < 0.0);
                    b1 = xor(b1, q2.x - p1.x < 0.0);
                    b1 = xor(b1, q2.x - p2.x < 0.0);
                    if (b1) {
                        return true;
                    }
                    var b2 = false;
                    b2 = xor(b2, q1.y - p1.y < 0.0);
                    b2 = xor(b2, q1.y - p2.y < 0.0);
                    b2 = xor(b2, q2.y - p1.y < 0.0);
                    b2 = xor(b2, q2.y - p2.y < 0.0);
                    if (b2) {
                        return true;
                    }
                }
                return false;
            }
            au.vec2.subtract(s3, q1, p1);
            var k3 = au.vec2.cross(s3, s2) / k2;
            if (k3 < 0.0) {
                return false;
            }
            if (k3 > 1.0) {
                return false;
            }
            var k4 = k1 / k2;
            if (k4 < 0.0) {
                return false;
            }
            if (k4 > 1.0) {
                return false;
            }
            return true;
        };
    }
    /**
     * Creates a new {ITreeOptimizer} object.
     * @param  {ITreeOptimizerSpec} spec The specification for the object.
     * @return {ITreeOptimizer}          A new object.
     */
    function createTreeOptimizer(spec) {
        var tree = spec.tree;
        var settings = spec.settings;
        var computeEdgeDistance = createEdgeDistanceInstrument();
        var isEdgeIntersection = createEdgeIntersectionInstrument();
        // Compute the weight of each node as one plus the number of ancestors
        // of that node, and store the weights in a dictionary of node ids.
        var nodeWeights = (function () {
            var table = {};
            (function count(parent) {
                var weight = 1;
                parent.children.forEach(function (child) { return weight += count(child); });
                table[parent.id] = weight;
                return weight;
            })(tree);
            return table;
        })();
        // An array of angles, one for each node in the tree, ordered by
        // increasing node ID. Initially, all angles are assigned a sensible
        // value, evenly spreading them out radially from the root. The root
        // is assigned an angle of zero.
        var angles = (function accumulate(parent, spread, array) {
            var pw = nodeWeights[parent.id];
            var i = 0;
            parent.children.forEach(function (child) {
                var cw = nodeWeights[child.id];
                i += cw / 2;
                var percent = i / pw;
                array[child.id] = (spread * percent) - (0.5 * spread);
                accumulate(child, spread * cw / pw, array);
                i += cw / 2;
            });
            return array;
        })(tree, TAU, [0.0]);
        // An array of positions, one for each node in the tree, ordered by
        // increasing node ID. Initially, all positions are at the origin.
        var positions = tree.map(function () { return ({ x: 0.0, y: 0.0 }); });
        // An array of edges. Each item in this array contiains two node IDs,
        // one for the source and one for the target. Even if the root node
        // has length, it does not contribute to the objective function, so
        // it is not included in this array.
        var edges = (function accumulate(node, array) {
            node.children.forEach(function (child) {
                array.push({ v: node.id, w: child.id });
                accumulate(child, array);
            });
            return array;
        })(tree, []);
        // The root node does not affect the objective function, so its angle
        // is not provided to the optimizer. This means the simplex contains
        // N-1 dimensions where N is the number of nodes. This table contains
        // elements associating a simplex dimension and a node ID.
        var simplexMap = (function accumulate(node, index, array) {
            if (node !== tree) {
                array.push({ id: node.id, index: index[0]++ });
            }
            node.children.forEach(function (child) { return accumulate(child, index, array); });
            return array;
        })(tree, [0], []);
        function updatePositions() {
            var maxLength = 0.0;
            tree.forEach(function (node) {
                if (node.length !== undefined) {
                    maxLength = Math.max(maxLength, node.length);
                }
            });
            //
            // NOTE Most SVG renderers prefer units on this order of magnitude.
            //
            var minLength = maxLength * PLANCKS_CONSTANT * 1.0e+31;
            var unitLength = 1.0;
            if (maxLength > 0.0) {
                while (maxLength * unitLength < 10.00) {
                    unitLength *= 10.0;
                }
                while (maxLength * unitLength > 100.0) {
                    unitLength /= 10.0;
                }
            }
            (function apply(parent, pos0, rad0) {
                var length = Math.max(minLength, parent.length !== undefined ? parent.length : 0.0);
                var rad = rad0 + angles[parent.id];
                var pos = positions[parent.id] = au.vec2.fromValues(pos0.x + unitLength * length * Math.cos(rad), pos0.y + unitLength * length * Math.sin(rad));
                parent.children.forEach(function (child) { return apply(child, pos, rad); });
            })(tree, au.vec2.fromValues(0.0, 0.0), 0.0);
        }
        function testEdgeIntersection() {
            for (var i = 0; i + 1 < edges.length; i++) {
                var e1 = edges[i];
                for (var j = i + 1; j < edges.length; j++) {
                    var e2 = edges[j];
                    if (e1.v === e2.v) {
                        continue;
                    }
                    if (e1.v === e2.w) {
                        continue;
                    }
                    if (e1.w === e2.v) {
                        continue;
                    }
                    if (e1.w === e2.w) {
                        continue;
                    }
                    var v1 = positions[e1.v];
                    var w1 = positions[e1.w];
                    var v2 = positions[e2.v];
                    var w2 = positions[e2.w];
                    if (isEdgeIntersection(v1, w1, v2, w2)) {
                        return true;
                    }
                }
            }
            return false;
        }
        function lerp(p, a, b) {
            p = Math.min(Math.max(0, p), 1);
            return a + (p * (b - a));
        }
        function computeNodeEnergy() {
            var nodeEnergy = 0.0;
            var k1 = lerp(settings.nodeForce, 0.0, 4.0);
            if (k1 > 0.0) {
                // Loop over all nodes.
                for (var i = 0; i + 1 < positions.length; i++) {
                    var pi = positions[i];
                    // Loop over the remaining nodes.
                    for (var j = i + 1; j < positions.length; j++) {
                        var pj = positions[j];
                        // Accumulate the energy E = K_1 / d, allowing an
                        // infinite force if the distance is small enough.
                        var d2 = au.vec2.distanceSquared(pi, pj);
                        nodeEnergy += k1 / Math.sqrt(d2);
                    }
                }
            }
            return nodeEnergy;
        }
        function computeEdgeEnergy() {
            var edgeEnergy = 0.0;
            var k2 = lerp(settings.edgeForce, 0.0, 2.0);
            if (k2 > 0.0) {
                // Loop over each edge.
                for (var i = 0; i < edges.length; i++) {
                    var e = edges[i];
                    // Loop over the nodes, skipping the nodes that are
                    // attached to the edge.
                    for (var j = 0; j < positions.length; j++) {
                        if (e.v === j || e.w === j) {
                            continue;
                        }
                        // Accumulate the force E = K_2 / d, allowing an
                        // infinite force if the node and edge intersect.
                        var p = positions[j];
                        var v = positions[e.v];
                        var w = positions[e.w];
                        var d2 = computeEdgeDistance(p, v, w);
                        edgeEnergy += k2 / Math.sqrt(d2);
                    }
                }
            }
            return edgeEnergy;
        }
        function computeObjectFunction(vertex) {
            simplexMap.forEach(function (x) { return angles[x.id] = vertex[x.index]; });
            updatePositions();
            if (testEdgeIntersection()) {
                return Infinity;
            }
            var nodeEnergy = computeNodeEnergy();
            if (!isFinite(nodeEnergy)) {
                return Infinity;
            }
            var edgeEnergy = computeEdgeEnergy();
            if (!isFinite(edgeEnergy)) {
                return Infinity;
            }
            return nodeEnergy + edgeEnergy;
        }
        var vertex = [];
        simplexMap.forEach(function (x) { return vertex[x.index] = angles[x.id]; });
        var UNIT_LENGTH = TAU * 5.0 / 360.0;
        var optimizer = au.createNelderMead({
            n: vertex.length,
            objfunc: computeObjectFunction,
            unit: UNIT_LENGTH,
            vertex: vertex
        });
        updatePositions();
        return {
            get angles() { return angles; },
            get edges() { return edges; },
            get positions() { return positions; },
            optimize: function () {
                var MAX_MILLISECONDS = 25.0;
                var timeout = Date.now() + MAX_MILLISECONDS;
                while (Date.now() < timeout) {
                    optimizer.iterate();
                }
                optimizer.copyVertex(vertex);
                simplexMap.forEach(function (x) { return angles[x.id] = vertex[x.index]; });
                updatePositions();
                var MIN_ITERATIONS_PER_DIMENSION = 50;
                var minIterations = MIN_ITERATIONS_PER_DIMENSION * simplexMap.length;
                if (optimizer.stats.iterations < minIterations) {
                    return false;
                }
                var DELTA_EPSILON = 0.0001;
                if (optimizer.delta > DELTA_EPSILON) {
                    return false;
                }
                var LENGTH_SQUARED_EPSILON = 0.0001;
                if (optimizer.lengthSquared > LENGTH_SQUARED_EPSILON) {
                    return false;
                }
                console.log(optimizer.stats);
                return true;
            },
            rotate: function (radians) {
                angles[0] += radians;
                updatePositions();
            }
        };
    }
    au.createTreeOptimizer = createTreeOptimizer;
})(au || (au = {}));
var au;
(function (au) {
    "use strict";
})(au || (au = {}));
(function (au) {
    var vec2;
    (function (vec2) {
        "use strict";
        /**
         * Adds two vectors.
         * @param  {IVec2} out The vector receiving the result.
         * @param  {IVec2} a   The first vector to add.
         * @param  {IVec2} b   The second vector to add.
         * @return {IVec2}     The out parameter.
         */
        function add(out, a, b) {
            out.x = a.x + b.x;
            out.y = a.y + b.y;
            return out;
        }
        vec2.add = add;
        /**
         * Clones two vectors.
         * @param  {IVec2} a The vector to clone.
         * @return {IVec2}   A new instance with the values of a.
         */
        function clone(a) {
            return fromValues(a.x, a.y);
        }
        vec2.clone = clone;
        /**
         * Copies a vector.
         * @param  {IVec2} out The vector receiving the result.
         * @param  {IVec2} a   The vector to copy.
         * @return {IVec2}     The out parameter.
         */
        function copy(out, a) {
            out.x = a.x;
            out.y = a.y;
            return out;
        }
        vec2.copy = copy;
        /**
         * Creates a new vector at the origin.
         * @return {IVec2} The new vector.
         */
        function create() {
            return { x: 0, y: 0 };
        }
        vec2.create = create;
        /**
         * Computes the cross product of two vectors.
         * @param  {IVec2} a The left vector of the operation.
         * @param  {IVec2} b The right vector of the operation.
         * @return {IVec2}   The cross product.
         */
        function cross(a, b) {
            return (a.x * b.y) - (a.y * b.x);
        }
        vec2.cross = cross;
        /**
         * Computes the square of the distance between to vectors.
         * @param  {IVec2}  a The first vector.
         * @param  {IVec2}  b The second vector.
         * @return {number}   The square of the distance.
         */
        function distanceSquared(a, b) {
            var x = (b.x - a.x);
            var y = (b.y - a.y);
            return (x * x) + (y * y);
        }
        vec2.distanceSquared = distanceSquared;
        /**
         * Computes the dot product of two vectors.
         * @param  {IVec2}  a The first vector.
         * @param  {IVec2}  b The second vector.
         * @return {number}   The dot product.
         */
        function dot(a, b) {
            return (a.x * b.x) + (a.y * b.y);
        }
        vec2.dot = dot;
        /**
         * Returns true if the two vectors are equal.
         * @param  {IVec2}   a The first vector.
         * @param  {IVec2}   b The second vector.
         * @return {boolean}   True if the vectors are equal; otherwise, false.
         */
        function equal(a, b) {
            return a.x === b.x && a.y === b.y;
        }
        vec2.equal = equal;
        /**
         * Creates a new vector based on specified values.
         * @param  {number} x The X value.
         * @param  {number} y The Y value.
         * @return {IVec2}    A new vector with the specified values.
         */
        function fromValues(x, y) {
            return { x: x, y: y };
        }
        vec2.fromValues = fromValues;
        /**
         * Computes the square of the length of a vector.
         * @param  {IVec2}  a The vector to measure.
         * @return {number}   The square of the length.
         */
        function lengthSquared(a) {
            return (a.x * a.x) + (a.y * a.y);
        }
        vec2.lengthSquared = lengthSquared;
        /**
         * Multiplies two vectors.
         * @param  {IVec2} out The vector receiving the result.
         * @param  {IVec2} a   The first vector.
         * @param  {IVec2} b   The second vector.
         * @return {IVec2}     The out parameter.
         */
        function multiply(out, a, b) {
            out.x = a.x * b.x;
            out.y = a.y * b.y;
            return out;
        }
        vec2.multiply = multiply;
        /**
         * Scales a vector by a constant.
         * @param  {IVec2}  out The vector receiving the result.
         * @param  {IVec2}  a   The vector to scale.
         * @param  {number} b   The amount to scale.
         * @return {IVec2}      The out parameter.
         */
        function scale(out, a, b) {
            out.x = a.x * b;
            out.y = a.y * b;
            return out;
        }
        vec2.scale = scale;
        /**
         * Subtracts two vectors.
         * @param  {IVec2} out The vector receiving the result.
         * @param  {IVec2} a   The left vector of the operation.
         * @param  {IVec2} b   The right vector of the operation.
         * @return {IVec2}     The out parameter.
         */
        function subtract(out, a, b) {
            out.x = a.x - b.x;
            out.y = a.y - b.y;
            return out;
        }
        vec2.subtract = subtract;
    })(vec2 = au.vec2 || (au.vec2 = {}));
})(au || (au = {}));
//# sourceMappingURL=script.js.map