(this.webpackJsonpiterms=this.webpackJsonpiterms||[]).push([[0],{24:function(t,s,e){},26:function(t,s,e){},27:function(t,s,e){},28:function(t,s,e){},29:function(t,s,e){},31:function(t,s,e){"use strict";e.r(s);var n=e(0),i=e(9),r=e.n(i),a=e(5),c=e(6),o=e(3),u=e(8),b=e(7),l=e(4),p=(e(24),e(1)),j=function(t){Object(u.a)(e,t);var s=Object(b.a)(e);function e(){return Object(a.a)(this,e),s.apply(this,arguments)}return Object(c.a)(e,[{key:"fixZero",value:function(t){return 1===t.toString().length?"0"+t:t}},{key:"render",value:function(){return Object(p.jsx)(n.Fragment,{children:Object(p.jsx)("div",{className:"timer__time-block",children:this.props.isRest?Object(p.jsxs)(n.Fragment,{children:[Object(p.jsx)("h1",{className:"timer__time-title",children:"\u041f\u0435\u0440\u0435\u0440\u044b\u0432"}),"".concat(this.fixZero(this.props.restMinutes),":").concat(this.fixZero(this.props.seconds))]}):Object(p.jsxs)(n.Fragment,{children:[Object(p.jsx)("h1",{className:"timer__time-title",children:"\u0420\u0430\u0431\u043e\u0447\u0435\u0435 \u0432\u0440\u0435\u043c\u044f"}),"".concat(this.fixZero(this.props.workMinutes),":").concat(this.fixZero(this.props.seconds))]})})})}}]),e}(n.Component),d=Object(l.b)((function(t){return{workMinutes:t.workMinutes,restMinutes:t.restMinutes,isRest:t.isRest,seconds:t.seconds}}))(j),h=(e(26),function(t){Object(u.a)(e,t);var s=Object(b.a)(e);function e(){var t;Object(a.a)(this,e);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=s.call.apply(s,[this].concat(i))).isDisabledWorkMinus=function(t){return t<=1},t.isDisabledWorkPlus=function(t){return 30===t},t.isDisabledRestMinus=function(t){return!t},t.isDisabledRestPlus=function(t){return 10===t},t.disabledClass=function(t){return t?"disabled":""},t}return Object(c.a)(e,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"settings__wrapper col-12",children:[Object(p.jsx)("div",{className:"settings__title-block",children:Object(p.jsx)("h1",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438:"})}),Object(p.jsxs)("div",{className:"settings__time-block",children:[Object(p.jsx)("b",{children:"\u0412\u0440\u0435\u043c\u044f \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u0441\u0435\u0441\u0441\u0438\u0438:"}),Object(p.jsxs)("div",{className:"settings__btn-group btn-group-md "+this.disabledClass(this.props.saveSettings),children:[Object(p.jsx)("button",{className:"btn btn-lg btn-success",disabled:this.isDisabledWorkMinus(this.props.workMinutes),onClick:this.props.subWorkMinute,children:"-"}),Object(p.jsx)("span",{className:"settings__minutes",children:this.props.saveSettings?this.props.settings.work:this.props.workMinutes}),Object(p.jsx)("button",{className:"btn btn-lg btn-success",disabled:this.isDisabledWorkPlus(this.props.workMinutes),onClick:this.props.addWorkMinute,children:"+"})]})]}),Object(p.jsxs)("div",{className:"settings__time-block",children:[Object(p.jsx)("b",{children:"\u0412\u0440\u0435\u043c\u044f \u043f\u0435\u0440\u0435\u0440\u044b\u0432\u0430 \u043c\u0435\u0436\u0434\u0443 \u0440\u0430\u0431\u043e\u0447\u0438\u043c\u0438 \u0441\u0435\u0441\u0441\u0438\u044f\u043c\u0438:"}),Object(p.jsxs)("div",{className:"settings__btn-group btn-group-md "+this.disabledClass(this.props.saveSettings),children:[Object(p.jsx)("button",{className:"btn btn-lg btn-success",disabled:this.isDisabledRestMinus(this.props.restMinutes),onClick:this.props.subRestMinute,children:"-"}),Object(p.jsx)("span",{className:"settings__minutes",children:this.props.saveSettings?this.props.settings.rest:this.props.restMinutes}),Object(p.jsx)("button",{className:"btn btn-lg btn-success",disabled:this.isDisabledRestPlus(this.props.restMinutes),onClick:this.props.addRestMinute,children:"+"})]})]})]})}}]),e}(n.Component)),O=Object(l.b)((function(t){return{workMinutes:t.workMinutes,restMinutes:t.restMinutes,settings:t.settings,isWork:t.isWork,seconds:t.seconds,saveSettings:t.saveSettings}}),(function(t){return{addWorkMinute:function(){return t({type:"ADD_WORK_MINUTE"})},subWorkMinute:function(){return t({type:"SUB_WORK_MINUTE"})},addRestMinute:function(){return t({type:"ADD_REST_MINUTE"})},subRestMinute:function(){return t({type:"SUB_REST_MINUTE"})}}}))(h),m=(e(27),function(t){for(var s,e=[],n=t.tomato;0!==n;)e.push((s=n,Object(p.jsx)("span",{className:"tomato__item",children:Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANOSURBVEiJnZZNbFRVFMd/57773sxYWmKrbRcGDNFgJLEorUbERePGaCK1pg3EBQt2JBCiKzdKF640mqgrNwXDYigx0viRGONCUInY+pFQaSJhoRUR6wy0M8ObN+++46LpOB3e2I+TvLz77v+c/znn3nPveagqG3kOffzmnmMTx4LV9AwbkMOfvjUiwrn5O9r3rqZr10M89t37eRWRxCV94klBjP/5ajb/m8EYmLHTp4Pl72w2GMoGdrharmyPboVvd5V6w7FVOERVU4FXvnznh8CThwG8jB8HuUzV920bQLVaU2s953nGApQr0dSrAwcH1pVB9qkj/ZFLzubKEX6hZKOFSlu5uEi5uIgrh8KfRevm5in8ffMrHTj42JozOD86mmsneklgj6ruVOjNeB6bAx8jksZxFWFalXMVk3v33vHxsKWD2f1Du+NYjyvcvzyXsx6bg4A1yqwhOdB1YuLC8kR9iWZGnj9ac3q2kdwaoWPt5AAPJJhvrx/Yd2hFBjP7hvtcknwvqn6jdlc2g2/Wf1QUIlV29XyQv2gYHLSauOPN5L4xGyIHEAiMMM7goDUz3R0vqrKzWSlnLflQOFNN3VgAzlSFfCikFzr981u7R4wqt5eYCKX2HnqyOXxgMYVhUcEHerI5Cm3dkFJhijxqVeURmmII7nuS3i072CJC7cp53LVZCgl8Fi2RPBMonQae27odf9vjACTFOaJLXzR5kH4r6IPNAUpmU73mJdsBQKeBpwOtjxuxpXF7yirpQzaBawIr0Ojy11SiGwRJRPzXr/X5u5r2PP79J4jK4Odw1y+nOOAPa+DHxtoH0HCB0pULdAR+mtF/4iLiqzMtYUGmjQfTaWDoHK7FRbhWUXTKZCSTF2GhGUxU+SesUkuSjfLf9Jz90GybmPhNjLycppGoUqhWuRW7VrXeUlQ40nny5Fz9srs4uvcTVZ5tZSAiZDxD1vPIeB6tjx+AfnT3iVPD0NAys6XaC5U2/3URjqJ4t5moEsaOMHaICFYEETAsvUUEgzjf8MY9kXmtHlhzP5jdP7S7Fut7IvSt+adASFD52Rg9vOPU5DcroFYt85fR0U3qqgNiZZeCJyrFFRmJ3qngJI6nb8Te1BOTk4tpPP8CC0CRXvV/RkQAAAAASUVORK5CYII=",alt:"tomato"})},s))),n--;return Object(p.jsx)("div",{className:"tomato__wrapper",children:e.map((function(t){return t}))})}),g=(e(28),function(t){Object(u.a)(e,t);var s=Object(b.a)(e);function e(t){var n;return Object(a.a)(this,e),(n=s.call(this,t)).startInterval=n.startInterval.bind(Object(o.a)(n)),n.stopInterval=n.stopInterval.bind(Object(o.a)(n)),n.startTimer=n.startTimer.bind(Object(o.a)(n)),n.startRest=n.startRest.bind(Object(o.a)(n)),n.pauseTimer=n.pauseTimer.bind(Object(o.a)(n)),n.continueTimer=n.continueTimer.bind(Object(o.a)(n)),n}return Object(c.a)(e,[{key:"startTimer",value:function(){var t={work:this.props.workMinutes,rest:this.props.restMinutes};this.props.save(t),this.startInterval()}},{key:"continueTimer",value:function(){this.props.continue(),this.props.isRest?this.startRest():this.startInterval()}},{key:"pauseTimer",value:function(){clearInterval(this.interval),this.props.pause({settings:this.props.settings,status:this.props.isRest})}},{key:"startInterval",value:function(){var t=this;this.interval=setInterval((function(){0===t.props.seconds?0===t.props.workMinutes?(t.props.changeRest(),clearInterval(t.interval),t.props.addTomato(),t.startRest()):(t.props.start(),t.props.subMinute()):t.props.start()}),1e3)}},{key:"startRest",value:function(){var t=this;this.interval=setInterval((function(){0===t.props.seconds?0===t.props.restMinutes?(t.props.changeWork(),clearInterval(t.interval),alert("\u0426\u0438\u043a\u043b \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d. \u0412\u0430\u0448\u0438 \u0442\u043e\u043c\u0430\u0442\u044b: ".concat(t.props.tomato))):(t.props.start(),t.props.subMinuteRest()):t.props.start()}),1e3)}},{key:"stopInterval",value:function(){this.props.stop(),clearInterval(this.interval)}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"app__wrapper col-md-6",children:[Object(p.jsxs)("h1",{className:"app__title",children:["Pomodoro",Object(p.jsx)(m,{tomato:this.props.tomato})]}),Object(p.jsx)(d,{}),Object(p.jsx)(O,{}),Object(p.jsx)("hr",{}),Object(p.jsxs)("div",{className:"col-md-12 d-flex justify-content-between",children:[this.props.isWork?Object(p.jsx)("button",{className:"btn btn-lg btn-warning",onClick:this.pauseTimer,children:"\u041f\u0430\u0443\u0437\u0430"}):this.props.saveSettings?Object(p.jsx)("button",{className:"btn btn-lg btn-primary",onClick:this.continueTimer,children:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"}):Object(p.jsx)("button",{className:"btn btn-lg btn-primary",onClick:this.startTimer,children:"\u0421\u0442\u0430\u0440\u0442"}),Object(p.jsx)("button",{className:"btn btn-lg btn-outline-danger",onClick:this.stopInterval,children:"\u0421\u0431\u0440\u043e\u0441"})]})]})}}]),e}(n.Component)),v=Object(l.b)((function(t){return{workMinutes:t.workMinutes,restMinutes:t.restMinutes,isWork:t.isWork,isPause:t.isPause,isRest:t.isRest,saveSettings:t.saveSettings,settings:t.settings,seconds:t.seconds,tomato:t.tomato}}),(function(t){return{start:function(){return t({type:"START"})},subMinute:function(){return t({type:"SUB_MINUTE"})},subMinuteRest:function(){return t({type:"SUB_MINUTE_REST"})},stop:function(){return t({type:"STOP"})},pause:function(s){return t({type:"PAUSE",payload:s})},continue:function(){return t({type:"CONTINUE"})},save:function(s){return t({type:"SAVE_SETTINGS",payload:s})},changeRest:function(){return t({type:"CHANGE_REST"})},changeWork:function(){return t({type:"CHANGE_WORK"})},addTomato:function(){return t({type:"ADD_TOMATO"})}}}))(g),M=e(13),k=e(2),A={workMinutes:15,restMinutes:5,settings:{work:0,rest:0},seconds:0,tomato:0,isWork:!1,isPause:!1,isRest:!1,saveSettings:!1},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case"SAVE_SETTINGS":return Object(k.a)(Object(k.a)({},t),{},{isWork:!0,saveSettings:!0,settings:s.payload});case"START":return Object(k.a)(Object(k.a)({},t),{},{isPause:!1,workMinutes:t.workMinutes,restMinutes:t.restMinutes,seconds:t.seconds-1});case"CONTINUE":return Object(k.a)(Object(k.a)({},t),{},{settings:t.settings,isWork:!0,isPause:!1});case"PAUSE":return Object(k.a)(Object(k.a)({},t),{},{settings:s.payload.settings,isRest:s.payload.status,isWork:!1,isPause:!0});case"STOP":return Object(k.a)({},A);case"CHANGE_REST":return Object(k.a)(Object(k.a)({},t),{},{settings:t.settings,workMinutes:t.settings.work,isRest:!0});case"CHANGE_WORK":return Object(k.a)(Object(k.a)({},t),{},{settings:t.settings,restMinutes:t.settings.rest,isRest:!1,isWork:!1});case"SUB_MINUTE":return Object(k.a)(Object(k.a)({},t),{},{workMinutes:t.workMinutes-1,seconds:59});case"SUB_MINUTE_REST":return Object(k.a)(Object(k.a)({},t),{},{restMinutes:t.restMinutes-1,seconds:59});case"ADD_WORK_MINUTE":return Object(k.a)(Object(k.a)({},t),{},{workMinutes:t.workMinutes+1});case"SUB_WORK_MINUTE":return Object(k.a)(Object(k.a)({},t),{},{workMinutes:t.workMinutes-1});case"ADD_REST_MINUTE":return Object(k.a)(Object(k.a)({},t),{},{restMinutes:t.restMinutes+1});case"SUB_REST_MINUTE":return Object(k.a)(Object(k.a)({},t),{},{restMinutes:t.restMinutes-1});case"ADD_TOMATO":return Object(k.a)(Object(k.a)({},t),{},{tomato:t.tomato+1});default:return t}},R=(e(29),e(30),Object(M.a)(f));r.a.render(Object(p.jsx)(l.a,{store:R,children:Object(p.jsx)(v,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.295dc303.chunk.js.map