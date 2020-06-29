const {
	after
} = require("lodash");

(function (mod) {
	if (typeof exports == "object" && typeof module == "object") // CommonJS
		mod(require("codemirror/lib/codemirror"));
	else if (typeof define == "function" && define.amd) // AMD
		define(["codemirror/lib/codemirror"], mod);
	else // Plain browser env
		mod(CodeMirror);
})(function (CodeMirror) {
	"use strict";

	CodeMirror.defineMode("macro", function (config, parserConfig) {
		var jsonldMode = parserConfig.jsonld;
		var isOperatorChar = /[+\-*&%=<>!?|~^@]/;

		function parseWords(str) {
			var obj = {},
				words = str.split(" ");
			for (var i = 0; i < words.length; ++i) obj[words[i]] = true;
			return obj;
		}

		// 关键字
		var keywords = parseWords("/cast /fcast");

		var logic = ["&", "|"];
		var relation = ["<", ">", "<=", ">=", "=", "~", "~="];

		var subname = ["buff", "nobuff", "bufftime", "life", "mana", "rage", "qidian", "energy", "sun", "moon", "sun_power", "moon_power", "skill_energy", "skill", "noskill", "last_skill", "npclevel", "nearby_enemy", "skill_notin_cd", "tbuff", "tnobuff", "tbufftime"];

		var type, content;

		function ret(tp, style, cont) {
			type = tp;
			content = cont;
			return style;
		}

		function tokenBase(stream, state) {
			var beforeParams = state.beforeParams;
			state.beforeParams = false;
			var inCondition = state.inCondition;
			state.inCondition = false;
			var afterOperator = state.afterOperator
			var nextIsCondition = state.nextIsCondition
			state.nextIsCondition = false
			var ch = stream.next();
			console.log('next', ch)
			console.log('nextIsCondition', nextIsCondition)
			if (inCondition) {
				if (ch === ']') {
					state.inCondition = false
					afterOperator = false
					state.afterOperator = false
					state.nextIsCondition = false
					return "string-2"
				}
				state.inCondition = true
				if (logic.includes(ch)) {
					state.nextIsCondition = true
					return "string-2"
				}
				if (ch === ':' || relation.includes(ch)) {
					state.afterOperator = true
					state.nextIsCondition = false
					return "condition-operator"
				}
				if (nextIsCondition) {
					state.nextIsCondition = true
					stream.match(/[a-z]+_?[a-z]+/);
					let word = stream.current()
					if (subname.includes(word)) {
						return "condition-name"
					}
				}
				
				console.log('this_current', stream.current())
				
				return "condition-else"
			} else if (ch === '[' || logic.includes(ch)) {
				console.log('ch', ch)
				state.inCondition = true
				state.nextIsCondition = true
				return "string-2"
			// } 
			// else if (logic.includes(ch) || relation.includes(ch)) {
			// 	state.tokenize = tokenString(ch);
			// 	return state.tokenize(stream, state);
			// } else if (stream.match(/([1-9]\d*(\.?\d+)?|0\.\d+)/)) {
			// 	return ret("number", "number");
			// } else if (/\d/.test(ch)) {
			// 	stream.eatWhile(/[\w\.]/);
			// 	return "number";
			} else {
				stream.eatWhile(/[\w\$_{}\xa1-\uffff]/);
				var word = stream.current();
				if (keywords && keywords.propertyIsEnumerable(word)) {
					state.beforeParams = true;
					return "keyword";
				}

				if (subname && subname.includes(word)) {
					state.beforeParams = true;
					return "condition-name";
				}

				return null;
			}
		}

		function tokenString(quote) {
			return function (stream, state) {
				var escaped = false,
					next;
				if (jsonldMode && stream.peek() == "@" && stream.match(isJsonldKeyword)) {
					state.tokenize = tokenBase;
					return ret("jsonld-keyword", "meta");
				}
				while ((next = stream.next()) != null) {
					if (next == quote && !escaped) break;
					escaped = !escaped && next == "\\";
				}
				if (!escaped) state.tokenize = tokenBase;
				return ret("string", "string");
			};
		}

		function tokenCondition(stream, state) {
			var escaped = false,
				next;
			while ((next = stream.next()) != null) {
				console.log(stream)
				if (!escaped && (next == "]" || next == "$" && stream.eat("{"))) {
					console.log('in')
					state.tokenize = tokenBase;
					break;
				}
				escaped = !escaped && next == "\\";
			}
			return ret("quasi", "string-2", stream.current());
		}

		return {
			startState: function () {
				return {
					tokenize: tokenBase,
					beforeParams: false,
					inParams: false,
					inCondition: false,
					afterOperator: false,
					nextIsCondition: false,
				};
			},
			token: function (stream, state) {
				if (stream.eatSpace()) return null;
				return state.tokenize(stream, state);
			}
		};

	});

	CodeMirror.registerHelper("hint", "macro", function (cm) {
		//自动补全
		var hintList = ['/cast', '/fcast', "buff", "nobuff", "bufftime", "life", "mana", "rage", "qidian", "energy", "sun", "moon", "sun_power", "moon_power", "skill_energy", "skill", "noskill", "last_skill", "npclevel", "nearby_enemy", "skill_notin_cd", "tbuff", "tnobuff", "tbufftime"];

		var cur = cm.getCursor(),
			token = cm.getTokenAt(cur);
		var start = token.start,
			end = cur.ch
		var str = token.string

		var list = hintList.filter(function (item) {
			return item.indexOf(str) === 0
		})

		if (list.length) return {
			list: list,
			from: CodeMirror.Pos(cur.line, start),
			to: CodeMirror.Pos(cur.line, end)
		};
	});

	CodeMirror.defineMIME("text/x-macro", "macro");

});