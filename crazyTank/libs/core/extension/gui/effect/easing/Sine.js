/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
var egret;
(function (egret) {
    var gui;
    (function (gui) {
        /**
         * @class egret.gui.Sine
         * @classdesc
         * Sine 类使用 Sine 函数定义缓动功能。
         * @extends egret.gui.EaseInOutBase
         */
        var Sine = (function (_super) {
            __extends(Sine, _super);
            /**
             * @param easeInFraction 缓入过程所占动画播放时间的百分比。剩余即为缓出的时间。
             * @method egret.gui.Sine#constructor
             */
            function Sine(easeInFraction) {
                if (easeInFraction === void 0) { easeInFraction = 0.5; }
                _super.call(this, easeInFraction);
            }
            var __egretProto__ = Sine.prototype;
            /**
             * @inheritDoc
             */
            __egretProto__._easeIn = function (fraction) {
                return 1 - Math.cos(fraction * Math.PI / 2);
            };
            /**
             * @inheritDoc
             */
            __egretProto__._easeOut = function (fraction) {
                return Math.sin(fraction * Math.PI / 2);
            };
            return Sine;
        })(gui.EaseInOutBase);
        gui.Sine = Sine;
        Sine.prototype.__class__ = "egret.gui.Sine";
    })(gui = egret.gui || (egret.gui = {}));
})(egret || (egret = {}));
