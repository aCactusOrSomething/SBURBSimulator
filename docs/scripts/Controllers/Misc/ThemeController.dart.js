{}(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
var y=function(){function t(){};return typeof t.name=='string'}()
function setFunctionNamesIfNecessary(a){if(y)return
for(var t=0;t<a.length;t++){var s=a[t]
var r=Object.keys(s)
for(var q=0;q<r.length;q++){var p=r[q]
var o=s[p]
if(typeof o=='function')o.name=p}}}function inherit(a,b){a.builtin$cls=a.name
a.prototype.constructor=a
a.prototype["$is"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function mixin(a,b){copyProperties(b.prototype,a.prototype)}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){H.Bg(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d){return d?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"(x) {"+"if (c === null) c = "+"H.pd"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"() {"+"if (c === null) c = "+"H.pd"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,H,null)}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.pd(this,a,b,true,[],d).prototype
return t}:tearOffGetter(a,b,d,e)}var w=0
function installTearOff(a,b,c,d,e,f,g,h,i){var t=[]
for(var s=0;s<h.length;s++){var r=h[s]
if(typeof r=='string')r=a[r]
r.$callName=g[s]
t.push(r)}var r=t[0]
r.$R=e
r.$D=f
var q=i
if(typeof q=="number")q=q+w
var p=h[0]
r.$stubName=p
var o=tearOff(t,q,c,p,d)
a[b]=o
if(c)r.$tearOff=o}function setOrUpdateInterceptorsByTag(a){var t=u.interceptorsByTag
if(!t){u.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=u.leafTags
if(!t){u.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=u.types
t.push.apply(t,a)}function updateHolder(a,b){copyProperties(b,a)
return a}function initializeDeferredHunk(a){w=u.types.length
a(inherit,mixin,lazy,makeConstList,convertToFastObject,installTearOff,setFunctionNamesIfNecessary,updateHolder,updateTypes,setOrUpdateInterceptorsByTag,setOrUpdateLeafTags,u,v,$)}function getGlobalFromName(a){for(var t=0;t<v.length;t++){if(v[t]==C)continue
if(v[t][a])return v[t][a]}}var C={},H={og:function og(a){this.a=a},
mZ:function(a){var t,s
t=a^48
if(t<=9)return t
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
qR:function(a,b,c,d){var t=new H.l5(a,b,c,[d])
t.dn(a,b,c,d)
return t},
eM:function(a,b,c,d){if(!!J.aP(a).$isJ)return new H.fx(a,b,[c,d])
return new H.eL(a,b,[c,d])},
jt:function(){return new P.d0("No element")},
qu:function(){return new P.d0("Too few elements")},
hq:function(a,b,c,d){if(c-b<=32)H.zZ(a,b,c,d)
else H.zY(a,b,c,d)},
zZ:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.bi(a);t<=c;++t){r=s.l(a,t)
q=t
while(!0){if(!(q>b&&J.bS(d.$2(s.l(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.l(a,p))
q=p}s.i(a,q,r)}},
zY:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=C.c.Y(a4-a3+1,6)
s=a3+t
r=a4-t
q=C.c.Y(a3+a4,2)
p=q-t
o=q+t
n=J.bi(a2)
m=n.l(a2,s)
l=n.l(a2,p)
k=n.l(a2,q)
j=n.l(a2,o)
i=n.l(a2,r)
if(J.bS(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.bS(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.bS(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.bS(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.bS(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.bS(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.bS(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.bS(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.bS(a5.$2(j,i),0)){h=i
i=j
j=h}n.i(a2,s,m)
n.i(a2,q,k)
n.i(a2,r,i)
n.i(a2,p,n.l(a2,a3))
n.i(a2,o,n.l(a2,a4))
g=a3+1
f=a4-1
if(J.bj(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=n.l(a2,e)
c=a5.$2(d,l)
b=J.aP(c)
if(b.H(c,0))continue
if(b.K(c,0)){if(e!==g){n.i(a2,e,n.l(a2,g))
n.i(a2,g,d)}++g}else for(;!0;){c=a5.$2(n.l(a2,f),l)
b=J.cR(c)
if(b.ad(c,0)){--f
continue}else{a=f-1
if(b.K(c,0)){n.i(a2,e,n.l(a2,g))
a0=g+1
n.i(a2,g,n.l(a2,f))
n.i(a2,f,d)
f=a
g=a0
break}else{n.i(a2,e,n.l(a2,f))
n.i(a2,f,d)
f=a
break}}}}a1=!0}else{for(e=g;e<=f;++e){d=n.l(a2,e)
if(J.d7(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.l(a2,g))
n.i(a2,g,d)}++g}else if(J.bS(a5.$2(d,j),0))for(;!0;)if(J.bS(a5.$2(n.l(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.d7(a5.$2(n.l(a2,f),l),0)){n.i(a2,e,n.l(a2,g))
a0=g+1
n.i(a2,g,n.l(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.l(a2,f))
n.i(a2,f,d)}f=a
break}}a1=!1}b=g-1
n.i(a2,a3,n.l(a2,b))
n.i(a2,b,l)
b=f+1
n.i(a2,a4,n.l(a2,b))
n.i(a2,b,j)
H.hq(a2,a3,g-2,a5)
H.hq(a2,f+2,a4,a5)
if(a1)return
if(g<s&&f>r){for(;J.bj(a5.$2(n.l(a2,g),l),0);)++g
for(;J.bj(a5.$2(n.l(a2,f),j),0);)--f
for(e=g;e<=f;++e){d=n.l(a2,e)
if(J.bj(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.l(a2,g))
n.i(a2,g,d)}++g}else if(J.bj(a5.$2(d,j),0))for(;!0;)if(J.bj(a5.$2(n.l(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.d7(a5.$2(n.l(a2,f),l),0)){n.i(a2,e,n.l(a2,g))
a0=g+1
n.i(a2,g,n.l(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.l(a2,f))
n.i(a2,f,d)}f=a
break}}H.hq(a2,g,f,a5)}else H.hq(a2,g,f,a5)},
i9:function i9(a){this.a=a},
J:function J(){},
dk:function dk(){},
l5:function l5(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
dl:function dl(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
eL:function eL(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
fx:function fx(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
ha:function ha(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
e6:function e6(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
d5:function d5(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
dy:function dy(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
fI:function fI(){},
lo:function lo(){},
f1:function f1(){},
hH:function(a,b){var t=a.aM(b)
if(!u.globalState.d.cy)u.globalState.f.aW()
return t},
rD:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.aP(s).$isI)throw H.r(P.dH("Arguments to main must be a List: "+H.w(s)))
u.globalState=new H.mr(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$pQ()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.lY(P.om(null,H.dB),0)
r=P.K
s.z=new H.p(0,null,null,null,null,null,0,[r,H.ef])
s.ch=new H.p(0,null,null,null,null,null,0,[r,null])
if(s.x===!0){q=new H.mq()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.u3,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.Ag)}if(u.globalState.x===!0)return
s=u.globalState.a++
q=P.a5(null,null,null,r)
p=new H.ea(0,null,!1)
o=new H.ef(s,new H.p(0,null,null,null,null,null,0,[r,H.ea]),q,u.createNewIsolate(),p,new H.cD(H.nd()),new H.cD(H.nd()),!1,!1,[],P.a5(null,null,null,null),null,null,!1,!0,P.a5(null,null,null,null))
q.h(0,0)
o.c_(0,p)
u.globalState.e=o
u.globalState.d=o
if(H.el(a,{func:1,args:[,]}))o.aM(new H.ne(t,a))
else if(H.el(a,{func:1,args:[,,]}))o.aM(new H.nf(t,a))
else o.aM(a)
u.globalState.f.aW()},
Ag:function(a){var t=P.eJ(["command","print","msg",a])
return new H.cv(!0,P.f7(null,P.K)).a3(t)},
u5:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x===!0)return H.u6()
return},
u6:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.r(new P.aN("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.r(new P.aN('Cannot extract URI from "'+t+'"'))},
u3:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.dA(!0,[]).an(b.data)
s=J.bi(t)
switch(s.l(t,"command")){case"start":u.globalState.b=s.l(t,"id")
r=s.l(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.l(t,"args")
o=new H.dA(!0,[]).an(s.l(t,"msg"))
n=s.l(t,"isSpawnUri")
m=s.l(t,"startPaused")
l=new H.dA(!0,[]).an(s.l(t,"replyTo"))
s=u.globalState.a++
k=P.K
j=P.a5(null,null,null,k)
i=new H.ea(0,null,!1)
h=new H.ef(s,new H.p(0,null,null,null,null,null,0,[k,H.ea]),j,u.createNewIsolate(),i,new H.cD(H.nd()),new H.cD(H.nd()),!1,!1,[],P.a5(null,null,null,null),null,null,!1,!0,P.a5(null,null,null,null))
j.h(0,0)
h.c_(0,i)
u.globalState.f.a.ak(new H.dB(h,new H.jh(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.aW()
break
case"spawn-worker":break
case"message":if(s.l(t,"port")!=null)J.em(s.l(t,"port"),s.l(t,"msg"))
u.globalState.f.aW()
break
case"close":u.globalState.ch.a0(0,$.$get$pR().l(0,a))
a.terminate()
u.globalState.f.aW()
break
case"log":H.u2(s.l(t,"msg"))
break
case"print":if(u.globalState.x===!0){s=u.globalState.Q
k=P.eJ(["command","print","msg",t])
k=new H.cv(!0,P.f7(null,P.K)).a3(k)
s.toString
self.postMessage(k)}else P.fg(s.l(t,"msg"))
break
case"error":throw H.r(s.l(t,"msg"))}},
u2:function(a){var t,s,r,q
if(u.globalState.x===!0){s=u.globalState.Q
r=P.eJ(["command","log","msg",a])
r=new H.cv(!0,P.f7(null,P.K)).a3(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.cz(q)
t=H.cq(q)
s=P.is(t)
throw H.r(s)}},
u4:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.qF=$.qF+("_"+s)
$.qG=$.qG+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
J.em(f,["spawned",new H.eg(s,r),q,t.r])
r=new H.ji(a,b,c,d,t)
if(e===!0){t.cu(q,q)
u.globalState.f.a.ak(new H.dB(t,r,"start isolate"))}else r.$0()},
A4:function(a,b){var t=new H.li(!0,!1,null)
t.dq(a,b)
return t},
Ay:function(a){return new H.dA(!0,[]).an(new H.cv(!1,P.f7(null,P.K)).a3(a))},
ne:function ne(a,b){this.a=a
this.b=b},
nf:function nf(a,b){this.a=a
this.b=b},
mr:function mr(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx},
ef:function ef(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx},
mm:function mm(a,b){this.a=a
this.b=b},
lY:function lY(a,b){this.a=a
this.b=b},
lZ:function lZ(a){this.a=a},
dB:function dB(a,b,c){this.a=a
this.b=b
this.c=c},
mq:function mq(){},
jh:function jh(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ji:function ji(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lM:function lM(){},
eg:function eg(b,a){this.b=b
this.a=a},
mu:function mu(a,b){this.a=a
this.b=b},
fa:function fa(b,c,a){this.b=b
this.c=c
this.a=a},
ea:function ea(a,b,c){this.a=a
this.b=b
this.c=c},
li:function li(a,b,c){this.a=a
this.b=b
this.c=c},
lj:function lj(a,b){this.a=a
this.b=b},
lk:function lk(a,b){this.a=a
this.b=b},
cD:function cD(a){this.a=a},
cv:function cv(a,b){this.a=a
this.b=b},
dA:function dA(a,b){this.a=a
this.b=b},
tw:function(){throw H.r(new P.aN("Cannot modify unmodifiable Map"))},
AX:function(a){return u.types[a]},
ry:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.aP(a).$iscb},
w:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bX(a)
if(typeof t!=="string")throw H.r(H.bF(a))
return t},
zx:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.ky(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
dm:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
oC:function(a,b){if(b==null)throw H.r(new P.bp(a,null,null))
return b.$1(a)},
e8:function(a,b,c){var t,s,r,q,p,o
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.oC(a,c)
if(3>=t.length)return H.L(t,3)
s=t[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.oC(a,c)}if(b<2||b>36)throw H.r(P.bD(b,2,36,"radix",null))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=t[1]
for(p=q.length,o=0;o<p;++o)if((C.b.S(q,o)|32)>r)return H.oC(a,c)}return parseInt(a,b)},
oE:function(a){var t,s,r,q,p,o,n,m
t=J.aP(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.F||!!J.aP(a).$isdw){p=C.t(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.b.S(q,0)===36)q=C.b.af(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.pi(H.hK(a),0,null),u.mangledGlobalNames)},
hk:function(a){return"Instance of '"+H.oE(a)+"'"},
za:function(){if(!!self.location)return self.location.href
return},
qB:function(a){var t,s,r,q,p
t=a.length
if(t<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<t;r=q){q=r+500
p=q<t?q:t
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
zf:function(a){var t,s,r,q
t=H.a([],[P.K])
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.cy)(a),++r){q=a[r]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.r(H.bF(q))
if(q<=65535)t.push(q)
else if(q<=1114111){t.push(55296+(C.c.am(q-65536,10)&1023))
t.push(56320+(q&1023))}else throw H.r(H.bF(q))}return H.qB(t)},
qI:function(a){var t,s,r,q
for(t=a.length,s=0;r=a.length,s<r;r===t||(0,H.cy)(a),++s){q=a[s]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.r(H.bF(q))
if(q<0)throw H.r(H.bF(q))
if(q>65535)return H.zf(a)}return H.qB(a)},
zg:function(a,b,c){var t,s,r,q
if(typeof c!=="number")return c.f7()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(t=b,s="";t<c;t=r){r=t+500
if(r<c)q=r
else q=c
s+=String.fromCharCode.apply(null,a.subarray(t,q))}return s},
oF:function(a){var t
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.c.am(t,10))>>>0,56320|t&1023)}}throw H.r(P.bD(a,0,1114111,null,null))},
cc:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
qE:function(a){return a.b?H.cc(a).getUTCFullYear()+0:H.cc(a).getFullYear()+0},
qD:function(a){return a.b?H.cc(a).getUTCMonth()+1:H.cc(a).getMonth()+1},
qC:function(a){return a.b?H.cc(a).getUTCDate()+0:H.cc(a).getDate()+0},
zb:function(a){return a.b?H.cc(a).getUTCHours()+0:H.cc(a).getHours()+0},
zd:function(a){return a.b?H.cc(a).getUTCMinutes()+0:H.cc(a).getMinutes()+0},
ze:function(a){return a.b?H.cc(a).getUTCSeconds()+0:H.cc(a).getSeconds()+0},
zc:function(a){return a.b?H.cc(a).getUTCMilliseconds()+0:H.cc(a).getMilliseconds()+0},
oD:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.r(H.bF(a))
return a[b]},
qH:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.r(H.bF(a))
a[b]=c},
aW:function(a){throw H.r(H.bF(a))},
L:function(a,b){if(a==null)J.c1(a)
throw H.r(H.bG(a,b))},
bG:function(a,b){var t,s
if(typeof b!=="number"||Math.floor(b)!==b)return new P.cB(!0,b,"index",null)
t=J.c1(a)
if(!(b<0)){if(typeof t!=="number")return H.aW(t)
s=b>=t}else s=!0
if(s)return P.cY(b,a,"index",null,t)
return P.kx(b,"index",null)},
bF:function(a){return new P.cB(!0,a,null,null)},
pc:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.r(H.bF(a))
return a},
r:function(a){var t
if(a==null)a=new P.eX()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.rE})
t.name=""}else t.toString=H.rE
return t},
rE:function(){return J.bX(this.dartException)},
bo:function(a){throw H.r(a)},
cy:function(a){throw H.r(new P.c6(a))},
cP:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.ll(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
lm:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
qZ:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
oi:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.jz(a,s,t?null:b.receiver)},
cz:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.ng(a)
if(a==null)return
if(a instanceof H.fy)return t.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.am(r,16)&8191)===10)switch(q){case 438:return t.$1(H.oi(H.w(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.w(s)+" (Error "+q+")"
return t.$1(new H.he(p,null))}}if(a instanceof TypeError){o=$.$get$qT()
n=$.$get$qU()
m=$.$get$qV()
l=$.$get$qW()
k=$.$get$r_()
j=$.$get$r0()
i=$.$get$qY()
$.$get$qX()
h=$.$get$r2()
g=$.$get$r1()
f=o.ac(s)
if(f!=null)return t.$1(H.oi(s,f))
else{f=n.ac(s)
if(f!=null){f.method="call"
return t.$1(H.oi(s,f))}else{f=m.ac(s)
if(f==null){f=l.ac(s)
if(f==null){f=k.ac(s)
if(f==null){f=j.ac(s)
if(f==null){f=i.ac(s)
if(f==null){f=l.ac(s)
if(f==null){f=h.ac(s)
if(f==null){f=g.ac(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.he(s,f==null?null:f.method))}}return t.$1(new H.ln(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.hr()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.cB(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.hr()
return a},
cq:function(a){var t
if(a instanceof H.fy)return a.b
if(a==null)return new H.hF(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.hF(a,null)},
B7:function(a){if(a==null||typeof a!='object')return J.cA(a)
else return H.dm(a)},
AV:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
B2:function(a,b,c,d,e,f,g){switch(c){case 0:return H.hH(b,new H.n4(a))
case 1:return H.hH(b,new H.n5(a,d))
case 2:return H.hH(b,new H.n6(a,d,e))
case 3:return H.hH(b,new H.n7(a,d,e,f))
case 4:return H.hH(b,new H.n8(a,d,e,f,g))}throw H.r(P.is("Unsupported number of arguments for wrapped closure"))},
fe:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.B2)
a.$identity=t
return t},
ts:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.aP(c).$isI){t.$reflectionInfo=c
r=H.zx(t).r}else r=c
q=d?Object.create(new H.kX().constructor.prototype):Object.create(new H.ep(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else{o=$.cE
$.cE=J.dF(o,1)
p=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")}q.constructor=p
p.prototype=q
if(!d){n=e.length==1&&!0
m=H.pu(a,t,n)
m.$reflectionInfo=c}else{q.$static_name=f
m=t
n=!1}if(typeof r=="number")l=function(a0,a1){return function(){return a0(a1)}}(H.AX,r)
else if(typeof r=="function")if(d)l=r
else{k=n?H.pt:H.no
l=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,k)}else throw H.r("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=1;j<o;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.pu(a,i,n)
q[h]=g}}q["call*"]=m
q.$R=t.$R
q.$D=t.$D
return p},
tp:function(a,b,c,d){var t=H.no
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
pu:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.tr(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.tp(s,!q,t,b)
if(s===0){q=$.cE
$.cE=J.dF(q,1)
o="self"+H.w(q)
q="return function(){var "+o+" = this."
p=$.eq
if(p==null){p=H.i1("self")
$.eq=p}return new Function(q+H.w(p)+";return "+o+"."+H.w(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.cE
$.cE=J.dF(q,1)
n+=H.w(q)
q="return function("+n+"){return this."
p=$.eq
if(p==null){p=H.i1("self")
$.eq=p}return new Function(q+H.w(p)+"."+H.w(t)+"("+n+");}")()},
tq:function(a,b,c,d){var t,s
t=H.no
s=H.pt
switch(b?-1:a){case 0:throw H.r(new H.kE("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
tr:function(a,b){var t,s,r,q,p,o,n,m
t=H.tn()
s=$.ps
if(s==null){s=H.i1("receiver")
$.ps=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.tq(q,!o,r,b)
if(q===1){s="return function(){return this."+H.w(t)+"."+H.w(r)+"(this."+H.w(s)+");"
o=$.cE
$.cE=J.dF(o,1)
return new Function(s+H.w(o)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
s="return function("+m+"){return this."+H.w(t)+"."+H.w(r)+"(this."+H.w(s)+", "+m+");"
o=$.cE
$.cE=J.dF(o,1)
return new Function(s+H.w(o)+"}")()},
pd:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.aP(c).$isI){c.fixed$length=Array
t=c}else t=c
return H.ts(a,b,t,!!d,e,f)},
no:function(a){return a.a},
pt:function(a){return a.c},
tn:function(){var t=$.eq
if(t==null){t=H.i1("self")
$.eq=t}return t},
i1:function(a){var t,s,r,q,p
t=new H.ep("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
Bb:function(a,b){var t=J.bi(b)
throw H.r(H.to(H.oE(a),t.A(b,3,t.gm(b))))},
n2:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.aP(a)[b]
else t=!0
if(t)return a
H.Bb(a,b)},
rv:function(a){var t=J.aP(a)
return"$S" in t?t.$S():null},
el:function(a,b){var t
if(a==null)return!1
t=H.rv(a)
return t==null?!1:H.ph(t,b)},
to:function(a,b){return new H.i7("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
Bg:function(a){throw H.r(new P.ih(a))},
nd:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
rw:function(a){return u.getIsolateTag(a)},
bB:function(a){return new H.cQ(a,null)},
a:function(a,b){a.$ti=b
return a},
hK:function(a){if(a==null)return
return a.$ti},
rx:function(a,b){return H.pk(a["$as"+H.w(b)],H.hK(a))},
b8:function(a,b,c){var t=H.rx(a,b)
return t==null?null:t[c]},
O:function(a,b){var t=H.hK(a)
return t==null?null:t[b]},
cx:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.pi(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.w(b==null?a:b.$1(a))
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.cx(t,b)
return H.AB(a,b)}return"unknown-reified-type"},
AB:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.cx(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.cx(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.cx(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.AU(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.cx(l[j],b)+(" "+H.w(j))}q+="}"}return"("+q+") => "+t},
pi:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.co("")
for(s=b,r=!0,q=!0,p="";s<a.length;++s){if(r)r=!1
else t.E=p+", "
o=a[s]
if(o!=null)q=!1
p=t.E+=H.cx(o,c)}return q?"":"<"+t.n(0)+">"},
hL:function(a){var t,s
if(a instanceof H.dK){t=H.rv(a)
if(t!=null)return H.cx(t,null)}s=J.aP(a).constructor.builtin$cls
if(a==null)return s
return s+H.pi(a.$ti,0,null)},
pk:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dE:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.hK(a)
s=J.aP(a)
if(s[b]==null)return!1
return H.rs(H.pk(s[d],t),c)},
rs:function(a,b){var t,s
if(a==null||b==null)return!0
t=a.length
for(s=0;s<t;++s)if(!H.ce(a[s],b[s]))return!1
return!0},
pe:function(a,b,c){return a.apply(b,H.rx(b,c))},
AN:function(a,b){var t,s,r
if(a==null)return b==null||b.builtin$cls==="aZ"||b.builtin$cls==="ct"
if(b==null)return!0
t=H.hK(a)
a=J.aP(a)
s=a.constructor
if(t!=null){t=t.slice()
t.splice(0,0,s)
s=t}if('func' in b){r=a.$S
if(r==null)return!1
return H.ph(r.apply(a,null),b)}return H.ce(s,b)},
ce:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="ct")return!0
if('func' in b)return H.ph(a,b)
if('func' in a)return b.builtin$cls==="Bm"||b.builtin$cls==="aZ"
t=typeof a==="object"&&a!==null&&a.constructor===Array
s=t?a[0]:a
r=typeof b==="object"&&b!==null&&b.constructor===Array
q=r?b[0]:b
if(q!==s){p=H.cx(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=b.slice(1)
return H.rs(H.pk(o,t),r)},
rr:function(a,b,c){var t,s,r,q,p
t=b==null
if(t&&a==null)return!0
if(t)return c
if(a==null)return!1
s=a.length
r=b.length
if(c){if(s<r)return!1}else if(s!==r)return!1
for(q=0;q<r;++q){t=a[q]
p=b[q]
if(!(H.ce(t,p)||H.ce(p,t)))return!1}return!0},
AI:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.ce(p,o)||H.ce(o,p)))return!1}return!0},
ph:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.ce(t,s)||H.ce(s,t)))return!1}r=a.args
q=b.args
p=a.opt
o=b.opt
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
k=o!=null?o.length:0
if(n>m)return!1
if(n+l<m+k)return!1
if(n===m){if(!H.rr(r,q,!1))return!1
if(!H.rr(p,o,!0))return!1}else{for(j=0;j<n;++j){i=r[j]
h=q[j]
if(!(H.ce(i,h)||H.ce(h,i)))return!1}for(g=j,f=0;g<m;++f,++g){i=p[f]
h=q[g]
if(!(H.ce(i,h)||H.ce(h,i)))return!1}for(g=0;g<k;++f,++g){i=p[f]
h=o[g]
if(!(H.ce(i,h)||H.ce(h,i)))return!1}}return H.AI(a.named,b.named)},
Bx:function(a){var t=$.pf
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
Bw:function(a){return H.dm(a)},
Bv:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
B3:function(a){var t,s,r,q,p,o
t=$.pf.$1(a)
s=$.mX[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.n3[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.rq.$2(a,t)
if(t!=null){s=$.mX[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.n3[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.pj(r)
$.mX[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.n3[t]=r
return r}if(p==="-"){o=H.pj(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.rz(a,r)
if(p==="*")throw H.r(new P.hs(t))
if(u.leafTags[t]===true){o=H.pj(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.rz(a,r)},
rz:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.na(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
pj:function(a){return J.na(a,!1,null,!!a.$iscb)},
B5:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.na(t,!1,null,!!t.$iscb)
else return J.na(t,c,null,null)},
B0:function(){if(!0===$.pg)return
$.pg=!0
H.B1()},
B1:function(){var t,s,r,q,p,o,n,m
$.mX=Object.create(null)
$.n3=Object.create(null)
H.B_()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.rA.$1(p)
if(o!=null){n=H.B5(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
B_:function(){var t,s,r,q,p,o,n
t=C.G()
t=H.ek(C.H,H.ek(C.I,H.ek(C.r,H.ek(C.r,H.ek(C.K,H.ek(C.J,H.ek(C.L(C.t),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.pf=new H.n_(p)
$.rq=new H.n0(o)
$.rA=new H.n1(n)},
ek:function(a,b){return a(b)||b},
qv:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.r(new P.bp("Illegal RegExp pattern ("+String(q)+")",a,null))},
Bd:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
Bf:function(a,b,c){var t,s,r,q
if(typeof b==="string")if(b==="")if(a==="")return c
else{t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))
else if(b instanceof H.h6){q=b.gce()
q.lastIndex=0
return a.replace(q,c.replace(/\$/g,"$$$$"))}else throw H.r("String.replaceAll(Pattern) UNIMPLEMENTED")},
AG:function(a){return a},
Be:function(a,b,c,d){var t,s,r,q,p,o
t=new H.lG(b,a,0,null)
s=0
r=""
for(;t.v();){q=t.d
p=q.b
o=p.index
r=r+H.w(H.ri().$1(C.b.A(a,s,o)))+H.w(c.$1(q))
s=o+p[0].length}t=r+H.w(H.ri().$1(C.b.af(a,s)))
return t.charCodeAt(0)==0?t:t},
ib:function ib(){},
ic:function ic(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
ky:function ky(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
ll:function ll(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
he:function he(a,b){this.a=a
this.b=b},
jz:function jz(a,b,c){this.a=a
this.b=b
this.c=c},
ln:function ln(a){this.a=a},
fy:function fy(a,b){this.a=a
this.b=b},
ng:function ng(a){this.a=a},
hF:function hF(a,b){this.a=a
this.b=b},
n4:function n4(a){this.a=a},
n5:function n5(a,b){this.a=a
this.b=b},
n6:function n6(a,b,c){this.a=a
this.b=b
this.c=c},
n7:function n7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
n8:function n8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dK:function dK(){},
l9:function l9(){},
kX:function kX(){},
ep:function ep(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i7:function i7(a){this.a=a},
kE:function kE(a){this.a=a},
cQ:function cQ(a,b){this.a=a
this.b=b},
p:function p(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
jy:function jy(a){this.a=a},
jI:function jI(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
jJ:function jJ(a,$ti){this.a=a
this.$ti=$ti},
jK:function jK(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
n_:function n_(a){this.a=a},
n0:function n0(a){this.a=a},
n1:function n1(a){this.a=a},
h6:function h6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mt:function mt(a,b){this.a=a
this.b=b},
lG:function lG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rh:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.r(P.dH("Invalid length "+H.w(a)))
return a},
AA:function(a){return a},
z8:function(a){return new Int8Array(H.AA(a))},
eP:function eP(){},
e7:function e7(){},
k3:function k3(){},
hb:function hb(){},
eQ:function eQ(){},
eS:function eS(){},
eU:function eU(){},
eR:function eR(){},
eT:function eT(){},
eV:function eV(){},
k4:function k4(){},
k5:function k5(){},
k6:function k6(){},
k7:function k7(){},
k8:function k8(){},
k9:function k9(){},
ka:function ka(){},
hc:function hc(){},
eW:function eW(){},
AU:function(a){var t=H.a(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
Ba:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
aP:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.h5.prototype
return J.jv.prototype}if(typeof a=="string")return J.di.prototype
if(a==null)return J.jw.prototype
if(typeof a=="boolean")return J.ju.prototype
if(a.constructor==Array)return J.dh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dj.prototype
return a}if(a instanceof P.aZ)return a
return J.mY(a)},
na:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
mY:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.pg==null){H.B0()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.r(new P.hs("Return interceptor for "+H.w(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$oh()]
if(p!=null)return p
p=H.B3(a)
if(p!=null)return p
if(typeof a=="function")return C.M
s=Object.getPrototypeOf(a)
if(s==null)return C.y
if(s===Object.prototype)return C.y
if(typeof q=="function"){Object.defineProperty(q,$.$get$oh(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
bi:function(a){if(typeof a=="string")return J.di.prototype
if(a==null)return a
if(a.constructor==Array)return J.dh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dj.prototype
return a}if(a instanceof P.aZ)return a
return J.mY(a)},
d6:function(a){if(a==null)return a
if(a.constructor==Array)return J.dh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dj.prototype
return a}if(a instanceof P.aZ)return a
return J.mY(a)},
cR:function(a){if(typeof a=="number")return J.e4.prototype
if(a==null)return a
if(!(a instanceof P.aZ))return J.dw.prototype
return a},
hJ:function(a){if(typeof a=="number")return J.e4.prototype
if(typeof a=="string")return J.di.prototype
if(a==null)return a
if(!(a instanceof P.aZ))return J.dw.prototype
return a},
ff:function(a){if(typeof a=="string")return J.di.prototype
if(a==null)return a
if(!(a instanceof P.aZ))return J.dw.prototype
return a},
ci:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.dj.prototype
return a}if(a instanceof P.aZ)return a
return J.mY(a)},
dF:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.hJ(a).W(a,b)},
bj:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aP(a).H(a,b)},
pl:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.cR(a).at(a,b)},
bS:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.cR(a).ad(a,b)},
d7:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.cR(a).K(a,b)},
pm:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.hJ(a).a9(a,b)},
fh:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ry(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bi(a).l(a,b)},
nh:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.ry(a,a[u.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.d6(a).i(a,b,c)},
rF:function(a,b,c,d){return J.ci(a).ef(a,b,c,d)},
rG:function(a,b,c){return J.cR(a).U(a,b,c)},
rH:function(a,b){return J.hJ(a).a5(a,b)},
hM:function(a,b,c){return J.bi(a).el(a,b,c)},
pn:function(a,b){return J.d6(a).Z(a,b)},
rI:function(a,b,c,d){return J.d6(a).ba(a,b,c,d)},
hN:function(a){return J.cR(a).aB(a)},
rJ:function(a){return J.ci(a).gaL(a)},
fi:function(a){return J.ci(a).gab(a)},
cA:function(a){return J.aP(a).gL(a)},
ni:function(a){return J.bi(a).gJ(a)},
nj:function(a){return J.ci(a).gav(a)},
c0:function(a){return J.d6(a).gM(a)},
c1:function(a){return J.bi(a).gm(a)},
nk:function(a){return J.ci(a).gG(a)},
rK:function(a){return J.ci(a).geZ(a)},
rL:function(a){return J.aP(a).gT(a)},
hO:function(a){return J.ci(a).gbX(a)},
rM:function(a,b){return J.ci(a).bf(a,b)},
rN:function(a,b){return J.bi(a).aN(a,b)},
po:function(a,b,c,d,e){return J.ci(a).aD(a,b,c,d,e)},
pp:function(a,b){return J.d6(a).a7(a,b)},
rO:function(a,b,c,d){return J.ci(a).eW(a,b,c,d)},
rP:function(a,b,c){return J.ff(a).eY(a,b,c)},
em:function(a,b){return J.ci(a).aZ(a,b)},
pq:function(a,b){return J.ci(a).saL(a,b)},
rQ:function(a,b){return J.d6(a).bV(a,b)},
rR:function(a,b){return J.ff(a).dd(a,b)},
rS:function(a,b){return J.ff(a).af(a,b)},
rT:function(a){return J.d6(a).a2(a)},
rU:function(a,b){return J.cR(a).aX(a,b)},
bX:function(a){return J.aP(a).n(a)},
rV:function(a){return J.ff(a).f2(a)},
R:function R(){},
ju:function ju(){},
jw:function jw(){},
eH:function eH(){},
kq:function kq(){},
dw:function dw(){},
dj:function dj(){},
dh:function dh($ti){this.$ti=$ti},
of:function of($ti){this.$ti=$ti},
hS:function hS(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
e4:function e4(){},
h5:function h5(){},
jv:function jv(){},
di:function di(){}},P={
A8:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.AJ()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.fe(new P.lJ(t),1)).observe(s,{childList:true})
return new P.lI(t,s,r)}else if(self.setImmediate!=null)return P.AK()
return P.AL()},
A9:function(a){++u.globalState.f.b
self.scheduleImmediate(H.fe(new P.lK(a),0))},
Aa:function(a){++u.globalState.f.b
self.setImmediate(H.fe(new P.lL(a),0))},
Ab:function(a){P.oY(C.q,a)},
rj:function(a,b){if(H.el(a,{func:1,args:[P.ct,P.ct]})){b.toString
return a}else{b.toString
return a}},
r9:function(a,b){var t,s,r
b.a=1
try{a.cY(new P.m7(b),new P.m8(b))}catch(r){t=H.cz(r)
s=H.cq(r)
P.rB(new P.m9(b,t,s))}},
m6:function(a,b){var t,s,r
for(;a.gdZ();)a=a.c
t=a.gbs()
s=b.c
if(t){b.c=null
r=b.b6(s)
b.a=a.a
b.c=a.c
P.ee(b,r)}else{b.a=2
b.c=a
a.cj(s)}},
ee:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t={}
t.a=a
for(s=a;!0;){r={}
q=s.a===8
if(b==null){if(q){p=s.c
s=s.b
o=J.fi(p)
n=p.gaj()
s.toString
P.hI(null,null,s,o,n)}return}for(;b.gbv()!=null;b=m){m=b.a
b.a=null
P.ee(t.a,b)}l=t.a.c
r.a=q
r.b=l
s=!q
if(!s||b.gcH()||b.gcG()){k=b.ged()
if(q){o=t.a.b
o.toString
o=o==null?k==null:o===k
if(!o)k.toString
else o=!0
o=!o}else o=!1
if(o){s=t.a
p=s.c
s=s.b
o=J.fi(p)
n=p.gaj()
s.toString
P.hI(null,null,s,o,n)
return}j=$.b4
if(j==null?k!=null:j!==k)$.b4=k
else j=null
if(b.gcG())new P.me(t,r,q,b).$0()
else if(s){if(b.gcH())new P.md(r,b,l).$0()}else if(b.geF())new P.mc(t,r,b).$0()
if(j!=null)$.b4=j
s=r.b
if(!!J.aP(s).$iscW){i=b.b
if(s.a>=4){h=i.c
i.c=null
b=i.b6(h)
i.a=s.a
i.c=s.c
t.a=s
continue}else P.m6(s,i)
return}}i=b.b
b=i.b5()
s=r.a
o=r.b
if(!s){i.a=4
i.c=o}else{i.a=8
i.c=o}t.a=i
s=i}},
AD:function(){var t,s
for(;t=$.ei,t!=null;){$.fc=null
s=t.b
$.ei=s
if(s==null)$.fb=null
t.a.$0()}},
AF:function(){$.pa=!0
try{P.AD()}finally{$.fc=null
$.pa=!1
if($.ei!=null)$.$get$p6().$1(P.rt())}},
rp:function(a){var t=new P.hx(a,null)
if($.ei==null){$.fb=t
$.ei=t
if(!$.pa)$.$get$p6().$1(P.rt())}else{$.fb.b=t
$.fb=t}},
AE:function(a){var t,s,r
t=$.ei
if(t==null){P.rp(a)
$.fc=$.fb
return}s=new P.hx(a,null)
r=$.fc
if(r==null){s.b=t
$.fc=s
$.ei=s}else{s.b=r.b
r.b=s
$.fc=s
if(s.b==null)$.fb=s}},
rB:function(a){var t=$.b4
if(C.e===t){P.ej(null,null,C.e,a)
return}t.toString
P.ej(null,null,t,t.bz(a,!0))},
Ax:function(a,b,c){var t=a.bA()
if(!!J.aP(t).$iscW&&t!==$.$get$fL())t.bQ(new P.mP(b,c))
else b.az(c)},
Ad:function(a,b,c,d,e,f,g){var t,s
t=$.b4
s=e?1:0
s=new P.f5(a,null,null,null,null,t,s,null,null,[f,g])
s.ds(b,c,d,e,g)
s.dv(a,b,c,d,e,f,g)
return s},
Aw:function(a,b,c){$.b4.toString
a.b_(b,c)},
A5:function(a,b){var t=$.b4
if(t===C.e){t.toString
return P.oY(a,b)}return P.oY(a,t.bz(b,!0))},
oY:function(a,b){var t=C.c.Y(a.a,1000)
return H.A4(t<0?0:t,b)},
A7:function(){return $.b4},
hI:function(a,b,c,d,e){var t={}
t.a=d
P.AE(new P.mU(t,e))},
rk:function(a,b,c,d){var t,s
s=$.b4
if(s===c)return d.$0()
$.b4=c
t=s
try{s=d.$0()
return s}finally{$.b4=t}},
rm:function(a,b,c,d,e){var t,s
s=$.b4
if(s===c)return d.$1(e)
$.b4=c
t=s
try{s=d.$1(e)
return s}finally{$.b4=t}},
rl:function(a,b,c,d,e,f){var t,s
s=$.b4
if(s===c)return d.$2(e,f)
$.b4=c
t=s
try{s=d.$2(e,f)
return s}finally{$.b4=t}},
ej:function(a,b,c,d){var t=C.e!==c
if(t)d=c.bz(d,!(!t||!1))
P.rp(d)},
lJ:function lJ(a){this.a=a},
lI:function lI(a,b,c){this.a=a
this.b=b
this.c=c},
lK:function lK(a){this.a=a},
lL:function lL(a){this.a=a},
hy:function hy(){},
lH:function lH(a,$ti){this.a=a
this.$ti=$ti},
hC:function hC(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
cd:function cd(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
m3:function m3(a,b){this.a=a
this.b=b},
mb:function mb(a,b){this.a=a
this.b=b},
m7:function m7(a){this.a=a},
m8:function m8(a){this.a=a},
m9:function m9(a,b,c){this.a=a
this.b=b
this.c=c},
m5:function m5(a,b){this.a=a
this.b=b},
ma:function ma(a,b){this.a=a
this.b=b},
m4:function m4(a,b,c){this.a=a
this.b=b
this.c=c},
me:function me(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mf:function mf(a){this.a=a},
md:function md(a,b,c){this.a=a
this.b=b
this.c=c},
mc:function mc(a,b,c){this.a=a
this.b=b
this.c=c},
hx:function hx(a,b){this.a=a
this.b=b},
du:function du(){},
l1:function l1(a){this.a=a},
l2:function l2(a,b){this.a=a
this.b=b},
l_:function l_(a,b){this.a=a
this.b=b},
l0:function l0(a){this.a=a},
l3:function l3(a,b){this.a=a
this.b=b},
l4:function l4(a,b){this.a=a
this.b=b},
kZ:function kZ(){},
cp:function cp(){},
lO:function lO(a,b,c){this.a=a
this.b=b
this.c=c},
lN:function lN(a){this.a=a},
hz:function hz(){},
lT:function lT(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
lV:function lV(b,c,a){this.b=b
this.c=c
this.a=a},
lU:function lU(){},
mv:function mv(){},
mw:function mw(a,b){this.a=a
this.b=b},
mH:function mH(b,c,a,$ti){var _=this
_.b=b
_.c=c
_.a=a
_.$ti=$ti},
mP:function mP(a,b){this.a=a
this.b=b},
f4:function f4(){},
f5:function f5(x,y,a,b,c,d,e,f,r,$ti){var _=this
_.x=x
_.y=y
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
ms:function ms(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
dJ:function dJ(a,b){this.a=a
this.b=b},
mO:function mO(){},
mU:function mU(a,b){this.a=a
this.b=b},
my:function my(){},
mz:function mz(a,b){this.a=a
this.b=b},
mA:function mA(a,b){this.a=a
this.b=b},
mB:function mB(a,b){this.a=a
this.b=b},
Ae:function(a,b){var t=a[b]
return t===a?null:t},
p9:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
p8:function(){var t=Object.create(null)
P.p9(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
h7:function(a,b){return new H.p(0,null,null,null,null,null,0,[a,b])},
qw:function(){return new H.p(0,null,null,null,null,null,0,[null,null])},
eJ:function(a){return H.AV(a,new H.p(0,null,null,null,null,null,0,[null,null]))},
f7:function(a,b){return new P.hE(0,null,null,null,null,null,0,[a,b])},
Af:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
n:function(a,b,c,d,e){return new P.mh(0,null,null,null,null,[d,e])},
ob:function(a,b,c){var t,s
if(P.pb(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$fd()
s.push(a)
try{P.AC(a,t)}finally{if(0>=s.length)return H.L(s,-1)
s.pop()}s=P.qP(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
h3:function(a,b,c){var t,s,r
if(P.pb(a))return b+"..."+c
t=new P.co(b)
s=$.$get$fd()
s.push(a)
try{r=t
r.E=P.qP(r.gE(),a,", ")}finally{if(0>=s.length)return H.L(s,-1)
s.pop()}s=t
s.E=s.gE()+c
s=t.gE()
return s.charCodeAt(0)==0?s:s},
pb:function(a){var t,s
for(t=0;s=$.$get$fd(),t<s.length;++t)if(a===s[t])return!0
return!1},
AC:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=J.c0(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.v())return
q=H.w(t.gF())
b.push(q)
s+=q.length+2;++r}if(!t.v()){if(r<=5)return
if(0>=b.length)return H.L(b,-1)
p=b.pop()
if(0>=b.length)return H.L(b,-1)
o=b.pop()}else{n=t.gF();++r
if(!t.v()){if(r<=4){b.push(H.w(n))
return}p=H.w(n)
if(0>=b.length)return H.L(b,-1)
o=b.pop()
s+=p.length+2}else{m=t.gF();++r
for(;t.v();n=m,m=l){l=t.gF();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
if(0>=b.length)return H.L(b,-1)
s-=b.pop().length+2;--r}b.push("...")
return}}o=H.w(n)
p=H.w(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
if(0>=b.length)return H.L(b,-1)
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)b.push(k)
b.push(o)
b.push(p)},
a5:function(a,b,c,d){return new P.hD(0,null,null,null,null,null,0,[d])},
ol:function(a,b){var t,s
t=P.a5(null,null,null,b)
for(s=J.c0(a);s.v();)t.h(0,s.gF())
return t},
qz:function(a){var t,s,r
t={}
if(P.pb(a))return"{...}"
s=new P.co("")
try{$.$get$fd().push(a)
r=s
r.E=r.gE()+"{"
t.a=!0
a.bE(0,new P.jS(t,s))
t=s
t.E=t.gE()+"}"}finally{t=$.$get$fd()
if(0>=t.length)return H.L(t,-1)
t.pop()}t=s.gE()
return t.charCodeAt(0)==0?t:t},
om:function(a,b){var t=new P.jL(null,0,0,0,[b])
t.dm(a,b)
return t},
mh:function mh(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
mk:function mk(a){this.a=a},
mi:function mi(a,$ti){this.a=a
this.$ti=$ti},
mj:function mj(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
hE:function hE(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
hD:function hD(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
mo:function mo(a,b,c){this.a=a
this.b=b
this.c=c},
dD:function dD(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
ml:function ml(){},
e3:function e3(){},
h2:function h2(){},
h8:function h8(){},
eY:function eY(){},
bN:function bN(){},
mJ:function mJ(){},
jR:function jR(){},
f2:function f2(a,$ti){this.a=a
this.$ti=$ti},
jS:function jS(a,b){this.a=a
this.b=b},
jL:function jL(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
mp:function mp(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
kN:function kN(){},
kM:function kM(){},
pr:function(a,b,c,d,e,f){if(C.d.bg(f,4)!==0)throw H.r(new P.bp("Invalid base64 padding, padded length must be multiple of four, is "+H.w(f),a,c))
if(d+e!==f)throw H.r(new P.bp("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.r(new P.bp("Invalid base64 padding, more than two '=' characters",a,b))},
hX:function hX(a){this.a=a},
hY:function hY(a){this.a=a},
et:function et(){},
ev:function ev(){},
ir:function ir(){},
lv:function lv(a){this.a=a},
lw:function lw(a){this.a=a},
mL:function mL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mN:function mN(a){this.a=a},
mM:function mM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
A2:function(a,b,c){var t,s,r,q
if(b<0)throw H.r(P.bD(b,0,J.c1(a),null,null))
t=c==null
if(!t&&c<b)throw H.r(P.bD(c,b,J.c1(a),null,null))
s=J.c0(a)
for(r=0;r<b;++r)if(!s.v())throw H.r(P.bD(b,0,r,null,null))
q=[]
if(t)for(;s.v();)q.push(s.gF())
else for(r=b;r<c;++r){if(!s.v())throw H.r(P.bD(c,b,r,null,null))
q.push(s.gF())}return H.qI(q)},
qP:function(a,b,c){var t=J.c0(b)
if(!t.v())return a
if(c.length===0){do a+=H.w(t.gF())
while(t.v())}else{a+=H.w(t.gF())
for(;t.v();)a=a+c+H.w(t.gF())}return a},
tv:function(a,b){return J.rH(a,b)},
ty:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.w(t)
if(t>=10)return s+"00"+H.w(t)
return s+"000"+H.w(t)},
tz:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
fs:function(a){if(a>=10)return""+a
return"0"+a},
pE:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bX(a)
if(typeof a==="string")return JSON.stringify(a)
return P.tB(a)},
tB:function(a){var t=J.aP(a)
if(!!t.$isdK)return t.n(a)
return H.hk(a)},
dH:function(a){return new P.cB(!1,null,null,a)},
en:function(a,b,c){return new P.cB(!0,a,b,c)},
rW:function(a){return new P.cB(!1,null,a,"Must not be null")},
qL:function(a){return new P.eZ(null,null,!1,null,null,a)},
kx:function(a,b,c){return new P.eZ(null,null,!0,a,b,"Value not in range")},
bD:function(a,b,c,d,e){return new P.eZ(b,c,!0,a,d,"Invalid value")},
cm:function(a,b,c,d,e,f){var t
if(typeof a!=="number")return H.aW(a)
if(!(0>a)){if(typeof c!=="number")return H.aW(c)
t=a>c}else t=!0
if(t)throw H.r(P.bD(a,0,c,"start",f))
if(b!=null){if(typeof b!=="number")return H.aW(b)
if(!(a>b)){if(typeof c!=="number")return H.aW(c)
t=b>c}else t=!0
if(t)throw H.r(P.bD(b,a,c,"end",f))
return b}return c},
cY:function(a,b,c,d,e){var t=e!=null?e:J.c1(b)
return new P.je(b,t,!0,a,c,"Index out of range")},
is:function(a){return new P.m2(a)},
e5:function(a,b,c){var t,s
t=H.a([],[c])
for(s=J.c0(a);s.v();)t.push(s.gF())
if(b)return t
t.fixed$length=Array
return t},
z6:function(a,b,c,d){var t,s,r
t=H.a([],[d])
C.a.sm(t,a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=t.length)return H.L(t,s)
t[s]=r}return t},
f:function(a,b){var t=P.e5(a,!1,b)
t.fixed$length=Array
t.immutable$list=Array
return t},
fg:function(a){H.Ba(H.w(a))},
zy:function(a,b,c){return new H.h6(a,H.qv(a,!1,!0,!1),null,null)},
qQ:function(a,b,c){var t,s
if(typeof a==="object"&&a!==null&&a.constructor===Array){t=a.length
c=P.cm(b,c,t,null,null,null)
if(b<=0){if(typeof c!=="number")return c.K()
s=c<t}else s=!0
return H.qI(s?C.a.dg(a,b,c):a)}if(!!J.aP(a).$iseW)return H.zg(a,b,P.cm(b,c,a.length,null,null,null))
return P.A2(a,b,c)},
r4:function(){var t=H.za()
if(t!=null)return P.r5(t,0,null)
throw H.r(new P.aN("'Uri.base' is not supported"))},
r5:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
c=a.length
t=b+5
if(c>=t){s=((C.b.S(a,b+4)^58)*3|C.b.S(a,b)^100|C.b.S(a,b+1)^97|C.b.S(a,b+2)^116|C.b.S(a,b+3)^97)>>>0
if(s===0)return P.r3(b>0||c<c?C.b.A(a,b,c):a,5,null).gd0()
else if(s===32)return P.r3(C.b.A(a,t,c),0,null).gd0()}r=H.a(new Array(8),[P.K])
r[0]=0
q=b-1
r[1]=q
r[2]=q
r[7]=q
r[3]=b
r[4]=b
r[5]=c
r[6]=c
if(P.rn(a,b,c,0,r)>=14)r[7]=c
p=r[1]
if(typeof p!=="number")return p.at()
if(p>=b)if(P.rn(a,b,p,20,r)===20)r[7]=p
q=r[2]
if(typeof q!=="number")return q.W()
o=q+1
n=r[3]
m=r[4]
l=r[5]
k=r[6]
if(typeof k!=="number")return k.K()
if(typeof l!=="number")return H.aW(l)
if(k<l)l=k
if(typeof m!=="number")return m.K()
if(m<o||m<=p)m=l
if(typeof n!=="number")return n.K()
if(n<o)n=m
q=r[7]
if(typeof q!=="number")return q.K()
j=q<b
if(j)if(o>p+3){i=null
j=!1}else{q=n>b
if(q&&n+1===m){i=null
j=!1}else{if(!(l<c&&l===m+2&&C.b.aa(a,"..",m)))h=l>m+2&&C.b.aa(a,"/..",l-3)
else h=!0
if(h){i=null
j=!1}else{if(p===b+4)if(C.b.aa(a,"file",b)){if(o<=b){if(!C.b.aa(a,"/",m)){g="file:///"
s=3}else{g="file://"
s=2}a=g+C.b.A(a,m,c)
p-=b
t=s-b
l+=t
k+=t
c=a.length
b=0
o=7
n=7
m=7}else if(m===l)if(b===0&&!0){a=C.b.a8(a,m,l,"/");++l;++k;++c}else{a=C.b.A(a,b,m)+"/"+C.b.A(a,l,c)
p-=b
o-=b
n-=b
m-=b
t=1-b
l+=t
k+=t
c=a.length
b=0}i="file"}else if(C.b.aa(a,"http",b)){if(q&&n+3===m&&C.b.aa(a,"80",n+1))if(b===0&&!0){a=C.b.a8(a,n,m,"")
m-=3
l-=3
k-=3
c-=3}else{a=C.b.A(a,b,n)+C.b.A(a,m,c)
p-=b
o-=b
n-=b
t=3+b
m-=t
l-=t
k-=t
c=a.length
b=0}i="http"}else i=null
else if(p===t&&C.b.aa(a,"https",b)){if(q&&n+4===m&&C.b.aa(a,"443",n+1))if(b===0&&!0){a=C.b.a8(a,n,m,"")
m-=4
l-=4
k-=4
c-=3}else{a=C.b.A(a,b,n)+C.b.A(a,m,c)
p-=b
o-=b
n-=b
t=4+b
m-=t
l-=t
k-=t
c=a.length
b=0}i="https"}else i=null
j=!0}}}else i=null
if(j){if(b>0||c<a.length){a=C.b.A(a,b,c)
p-=b
o-=b
n-=b
m-=b
l-=b
k-=b}return new P.mG(a,p,o,n,m,l,k,i,null)}return P.Ai(a,b,c,p,o,n,m,l,k,i)},
r7:function(a,b){return C.a.ex(a.split("&"),P.qw(),new P.lt(b))},
A6:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=new P.lq(a)
s=H.rh(4)
r=new Uint8Array(s)
for(q=b,p=q,o=0;q<c;++q){n=C.b.N(a,q)
if(n!==46){if((n^48)>9)t.$2("invalid character",q)}else{if(o===3)t.$2("IPv4 address should contain exactly 4 parts",q)
m=H.e8(C.b.A(a,p,q),null,null)
if(J.bS(m,255))t.$2("each part must be in the range 0..255",p)
l=o+1
if(o>=s)return H.L(r,o)
r[o]=m
p=q+1
o=l}}if(o!==3)t.$2("IPv4 address should contain exactly 4 parts",c)
m=H.e8(C.b.A(a,p,c),null,null)
if(J.bS(m,255))t.$2("each part must be in the range 0..255",p)
if(o>=s)return H.L(r,o)
r[o]=m
return r},
r6:function(a,b,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a0==null)a0=a.length
t=new P.lr(a)
s=new P.ls(a,t)
if(a.length<2)t.$1("address is too short")
r=[]
for(q=b,p=q,o=!1,n=!1;q<a0;++q){m=C.b.N(a,q)
if(m===58){if(q===b){++q
if(C.b.N(a,q)!==58)t.$2("invalid start colon.",q)
p=q}if(q===p){if(o)t.$2("only one wildcard `::` is allowed",q)
r.push(-1)
o=!0}else r.push(s.$2(p,q))
p=q+1}else if(m===46)n=!0}if(r.length===0)t.$1("too few parts")
l=p===a0
k=J.bj(C.a.gaR(r),-1)
if(l&&!k)t.$2("expected a part after last `:`",a0)
if(!l)if(!n)r.push(s.$2(p,a0))
else{j=P.A6(a,p,a0)
i=j[0]
if(typeof i!=="number")return i.ay()
h=j[1]
if(typeof h!=="number")return H.aW(h)
r.push((i<<8|h)>>>0)
h=j[2]
if(typeof h!=="number")return h.ay()
i=j[3]
if(typeof i!=="number")return H.aW(i)
r.push((h<<8|i)>>>0)}if(o){if(r.length>7)t.$1("an address with a wildcard must have less than 7 parts")}else if(r.length!==8)t.$1("an address without a wildcard must contain exactly 8 parts")
g=new Uint8Array(16)
for(q=0,f=0;q<r.length;++q){e=r[q]
if(J.aP(e).H(e,-1)){d=9-r.length
for(c=0;c<d;++c){if(f<0||f>=16)return H.L(g,f)
g[f]=0
i=f+1
if(i>=16)return H.L(g,i)
g[i]=0
f+=2}}else{if(typeof e!=="number")return e.da()
i=C.d.am(e,8)
if(f<0||f>=16)return H.L(g,f)
g[f]=i
i=f+1
if(i>=16)return H.L(g,i)
g[i]=e&255
f+=2}}return g},
Ai:function(a,b,c,d,e,f,g,h,i,j){var t,s,r,q,p,o,n
if(j==null)if(d>b)j=P.Aq(a,b,d)
else{if(d===b)P.f9(a,b,"Invalid empty scheme")
j=""}if(e>b){t=d+3
s=t<e?P.Ar(a,t,e-1):""
r=P.Am(a,e,f,!1)
if(typeof f!=="number")return f.W()
q=f+1
if(typeof g!=="number")return H.aW(g)
p=q<g?P.Ao(H.e8(C.b.A(a,q,g),null,new P.mW(a,f)),j):null}else{s=""
r=null
p=null}o=P.An(a,g,h,null,j,r!=null)
if(typeof h!=="number")return h.K()
n=h<i?P.Ap(a,h+1,i,null):null
return new P.hG(j,s,r,p,o,n,i<c?P.Al(a,i+1,c):null,null,null,null,null,null)},
rb:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
f9:function(a,b,c){throw H.r(new P.bp(c,a,b))},
Ao:function(a,b){if(a!=null&&J.bj(a,P.rb(b)))return
return a},
Am:function(a,b,c,d){var t,s
if(b===c)return""
if(C.b.N(a,b)===91){if(typeof c!=="number")return c.bi()
t=c-1
if(C.b.N(a,t)!==93)P.f9(a,b,"Missing end `]` to match `[` in host")
P.r6(a,b+1,t)
return C.b.A(a,b,c).toLowerCase()}if(typeof c!=="number")return H.aW(c)
s=b
for(;s<c;++s)if(C.b.N(a,s)===58){P.r6(a,b,c)
return"["+a+"]"}return P.At(a,b,c)},
At:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
if(typeof c!=="number")return H.aW(c)
t=b
s=t
r=null
q=!0
for(;t<c;){p=C.b.N(a,t)
if(p===37){o=P.rg(a,t,!0)
n=o==null
if(n&&q){t+=3
continue}if(r==null)r=new P.co("")
m=C.b.A(a,s,t)
l=r.E+=!q?m.toLowerCase():m
if(n){o=C.b.A(a,t,t+3)
k=3}else if(o==="%"){o="%25"
k=1}else k=3
r.E=l+o
t+=k
s=t
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.L(C.w,n)
n=(C.w[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(r==null)r=new P.co("")
if(s<t){r.E+=C.b.A(a,s,t)
s=t}q=!1}++t}else{if(p<=93){n=p>>>4
if(n>=8)return H.L(C.i,n)
n=(C.i[n]&1<<(p&15))!==0}else n=!1
if(n)P.f9(a,t,"Invalid character")
else{if((p&64512)===55296&&t+1<c){j=C.b.N(a,t+1)
if((j&64512)===56320){p=65536|(p&1023)<<10|j&1023
k=2}else k=1}else k=1
if(r==null)r=new P.co("")
m=C.b.A(a,s,t)
r.E+=!q?m.toLowerCase():m
r.E+=P.rc(p)
t+=k
s=t}}}}if(r==null)return C.b.A(a,b,c)
if(s<c){m=C.b.A(a,s,c)
r.E+=!q?m.toLowerCase():m}n=r.E
return n.charCodeAt(0)==0?n:n},
Aq:function(a,b,c){var t,s,r,q
if(b===c)return""
if(!P.re(C.b.S(a,b)))P.f9(a,b,"Scheme not starting with alphabetic character")
for(t=b,s=!1;t<c;++t){r=C.b.S(a,t)
if(r<128){q=r>>>4
if(q>=8)return H.L(C.k,q)
q=(C.k[q]&1<<(r&15))!==0}else q=!1
if(!q)P.f9(a,t,"Illegal scheme character")
if(65<=r&&r<=90)s=!0}a=C.b.A(a,b,c)
return P.Aj(s?a.toLowerCase():a)},
Aj:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
Ar:function(a,b,c){var t=P.eh(a,b,c,C.O,!1)
return t==null?C.b.A(a,b,c):t},
An:function(a,b,c,d,e,f){var t,s,r
t=e==="file"
s=t||f
r=P.eh(a,b,c,C.x,!1)
if(r==null)r=C.b.A(a,b,c)
if(r.length===0){if(t)return"/"}else if(s&&!C.b.a4(r,"/"))r="/"+r
return P.As(r,e,f)},
As:function(a,b,c){var t=b.length===0
if(t&&!c&&!C.b.a4(a,"/"))return P.Au(a,!t||c)
return P.Av(a)},
Ap:function(a,b,c,d){var t=P.eh(a,b,c,C.j,!1)
return t==null?C.b.A(a,b,c):t},
Al:function(a,b,c){var t=P.eh(a,b,c,C.j,!1)
return t==null?C.b.A(a,b,c):t},
rg:function(a,b,c){var t,s,r,q,p,o
t=b+2
if(t>=a.length)return"%"
s=C.b.N(a,b+1)
r=C.b.N(a,t)
q=H.mZ(s)
p=H.mZ(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){t=C.c.am(o,4)
if(t>=8)return H.L(C.v,t)
t=(C.v[t]&1<<(o&15))!==0}else t=!1
if(t)return H.oF(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.b.A(a,b,b+3).toUpperCase()
return},
rc:function(a){var t,s,r,q,p,o,n,m
if(a<128){t=new Array(3)
t.fixed$length=Array
t[0]=37
t[1]=C.b.S("0123456789ABCDEF",a>>>4)
t[2]=C.b.S("0123456789ABCDEF",a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}q=3*r
t=new Array(q)
t.fixed$length=Array
for(p=0;--r,r>=0;s=128){o=C.c.e7(a,6*r)&63|s
if(p>=q)return H.L(t,p)
t[p]=37
n=p+1
m=C.b.S("0123456789ABCDEF",o>>>4)
if(n>=q)return H.L(t,n)
t[n]=m
m=p+2
n=C.b.S("0123456789ABCDEF",o&15)
if(m>=q)return H.L(t,m)
t[m]=n
p+=3}}return P.qQ(t,0,null)},
eh:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=!e
s=J.ff(a)
r=b
q=r
p=null
while(!0){if(typeof r!=="number")return r.K()
if(typeof c!=="number")return H.aW(c)
if(!(r<c))break
c$0:{o=s.N(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.L(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.rg(a,r,!1)
if(m==null){r+=3
break c$0}if("%"===m){m="%25"
l=1}else l=3}else{if(t)if(o<=93){n=o>>>4
if(n>=8)return H.L(C.i,n)
n=(C.i[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.f9(a,r,"Invalid character")
m=null
l=null}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.b.N(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.rc(o)}}if(p==null)p=new P.co("")
p.E+=C.b.A(a,q,r)
p.E+=H.w(m)
if(typeof l!=="number")return H.aW(l)
r+=l
q=r}}}if(p==null)return
if(typeof q!=="number")return q.K()
if(q<c)p.E+=s.A(a,q,c)
t=p.E
return t.charCodeAt(0)==0?t:t},
rf:function(a){if(C.b.a4(a,"."))return!0
return C.b.aN(a,"/.")!==-1},
Av:function(a){var t,s,r,q,p,o,n
if(!P.rf(a))return a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.cy)(s),++p){o=s[p]
if(J.bj(o,"..")){n=t.length
if(n!==0){if(0>=n)return H.L(t,-1)
t.pop()
if(t.length===0)t.push("")}q=!0}else if("."===o)q=!0
else{t.push(o)
q=!1}}if(q)t.push("")
return C.a.cN(t,"/")},
Au:function(a,b){var t,s,r,q,p,o
if(!P.rf(a))return!b?P.rd(a):a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.cy)(s),++p){o=s[p]
if(".."===o)if(t.length!==0&&!J.bj(C.a.gaR(t),"..")){if(0>=t.length)return H.L(t,-1)
t.pop()
q=!0}else{t.push("..")
q=!1}else if("."===o)q=!0
else{t.push(o)
q=!1}}s=t.length
if(s!==0)if(s===1){if(0>=s)return H.L(t,0)
s=J.ni(t[0])===!0}else s=!1
else s=!0
if(s)return"./"
if(q||J.bj(C.a.gaR(t),".."))t.push("")
if(!b){if(0>=t.length)return H.L(t,0)
s=P.rd(t[0])
if(0>=t.length)return H.L(t,0)
t[0]=s}return C.a.cN(t,"/")},
rd:function(a){var t,s,r,q
t=J.bi(a)
s=t.gm(a)
if(typeof s!=="number")return s.at()
if(s>=2&&P.re(t.N(a,0))){r=1
while(!0){s=t.gm(a)
if(typeof s!=="number")return H.aW(s)
if(!(r<s))break
q=t.N(a,r)
if(q===58)return C.b.A(a,0,r)+"%3A"+C.b.af(a,r+1)
if(q<=127){s=q>>>4
if(s>=8)return H.L(C.k,s)
s=(C.k[s]&1<<(q&15))===0}else s=!0
if(s)break;++r}}return a},
Ak:function(a,b){var t,s,r
for(t=0,s=0;s<2;++s){r=C.b.S(a,b+s)
if(48<=r&&r<=57)t=t*16+r-48
else{r|=32
if(97<=r&&r<=102)t=t*16+r-87
else throw H.r(P.dH("Invalid URL encoding"))}}return t},
mK:function(a,b,c,d,e){var t,s,r,q,p,o
if(typeof c!=="number")return H.aW(c)
t=J.ff(a)
s=b
while(!0){if(!(s<c)){r=!0
break}q=t.N(a,s)
if(q<=127)if(q!==37)p=e&&q===43
else p=!0
else p=!0
if(p){r=!1
break}++s}if(r){if(C.l!==d)p=!1
else p=!0
if(p)return t.A(a,b,c)
else o=new H.i9(t.A(a,b,c))}else{o=[]
for(s=b;s<c;++s){q=t.N(a,s)
if(q>127)throw H.r(P.dH("Illegal percent encoding in URI"))
if(q===37){if(s+3>a.length)throw H.r(P.dH("Truncated URI"))
o.push(P.Ak(a,s+1))
s+=2}else if(e&&q===43)o.push(32)
else o.push(q)}}return new P.lw(!1).en(o)},
re:function(a){var t=a|32
return 97<=t&&t<=122},
r3:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=[b-1]
s=J.bi(a)
r=b
q=-1
p=null
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.aW(o)
if(!(r<o))break
c$0:{p=s.N(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
break c$0}throw H.r(new P.bp("Invalid MIME type",a,r))}}++r}if(q<0&&r>b)throw H.r(new P.bp("Invalid MIME type",a,r))
for(;p!==44;){t.push(r);++r
n=-1
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.aW(o)
if(!(r<o))break
p=s.N(a,r)
if(p===61){if(n<0)n=r}else if(p===59||p===44)break;++r}if(n>=0)t.push(n)
else{m=C.a.gaR(t)
if(p!==44||r!==m+7||!s.aa(a,"base64",m+1))throw H.r(new P.bp("Expecting '='",a,r))
break}}t.push(r)
o=r+1
if((t.length&1)===1)a=C.z.eO(a,o,s.gm(a))
else{l=P.eh(a,o,s.gm(a),C.j,!0)
if(l!=null)a=s.a8(a,o,s.gm(a),l)}return new P.lp(a,t,c)},
Az:function(){var t,s,r,q,p
t=P.z6(22,new P.mR(),!0,P.d4)
s=new P.mQ(t)
r=new P.mS()
q=new P.mT()
p=s.$2(0,225)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
r.$3(p,".",14)
r.$3(p,":",34)
r.$3(p,"/",3)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(14,225)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
r.$3(p,".",15)
r.$3(p,":",34)
r.$3(p,"/",234)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(15,225)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
r.$3(p,"%",225)
r.$3(p,":",34)
r.$3(p,"/",9)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(1,225)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
r.$3(p,":",34)
r.$3(p,"/",10)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(2,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
r.$3(p,"/",131)
r.$3(p,".",146)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(3,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,"/",68)
r.$3(p,".",18)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(4,229)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
q.$3(p,"AZ",229)
r.$3(p,":",102)
r.$3(p,"@",68)
r.$3(p,"[",232)
r.$3(p,"/",138)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(5,229)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
q.$3(p,"AZ",229)
r.$3(p,":",102)
r.$3(p,"@",68)
r.$3(p,"/",138)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(6,231)
q.$3(p,"19",7)
r.$3(p,"@",68)
r.$3(p,"/",138)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(7,231)
q.$3(p,"09",7)
r.$3(p,"@",68)
r.$3(p,"/",138)
r.$3(p,"?",172)
r.$3(p,"#",205)
r.$3(s.$2(8,8),"]",5)
p=s.$2(9,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,".",16)
r.$3(p,"/",234)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(16,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,".",17)
r.$3(p,"/",234)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(17,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,"/",9)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(10,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,".",18)
r.$3(p,"/",234)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(18,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,".",19)
r.$3(p,"/",234)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(19,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,"/",234)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(11,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,"/",10)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(12,236)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
r.$3(p,"?",12)
r.$3(p,"#",205)
p=s.$2(13,237)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
r.$3(p,"?",13)
q.$3(s.$2(20,245),"az",21)
p=s.$2(21,245)
q.$3(p,"az",21)
q.$3(p,"09",21)
r.$3(p,"+-.",21)
return t},
rn:function(a,b,c,d,e){var t,s,r,q,p,o
t=$.$get$ro()
for(s=b;s<c;++s){if(d<0||d>=t.length)return H.L(t,d)
r=t[d]
q=C.b.S(a,s)^96
p=J.fh(r,q>95?31:q)
if(typeof p!=="number")return p.ax()
d=p&31
o=C.d.am(p,5)
if(o>=8)return H.L(e,o)
e[o]=s}return d},
cw:function cw(){},
bk:function bk(){},
ew:function ew(a,b){this.a=a
this.b=b},
V:function V(){},
cF:function cF(a){this.a=a},
io:function io(){},
ip:function ip(){},
db:function db(){},
eX:function eX(){},
cB:function cB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eZ:function eZ(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
je:function je(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
aN:function aN(a){this.a=a},
hs:function hs(a){this.a=a},
d0:function d0(a){this.a=a},
c6:function c6(a){this.a=a},
kh:function kh(){},
hr:function hr(){},
ih:function ih(a){this.a=a},
m2:function m2(a){this.a=a},
bp:function bp(a,b,c){this.a=a
this.b=b
this.c=c},
it:function it(a,b2,$ti){this.a=a
this.b2=b2
this.$ti=$ti},
K:function K(){},
C:function C(){},
h4:function h4(){},
I:function I(){},
ct:function ct(){},
cr:function cr(){},
aZ:function aZ(){},
jV:function jV(){},
dr:function dr(){},
H:function H(){},
co:function co(E){this.E=E},
dx:function dx(){},
lt:function lt(a){this.a=a},
lq:function lq(a){this.a=a},
lr:function lr(a){this.a=a},
ls:function ls(a,b){this.a=a
this.b=b},
hG:function hG(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
mW:function mW(a,b){this.a=a
this.b=b},
lp:function lp(a,b,c){this.a=a
this.b=b
this.c=c},
mR:function mR(){},
mQ:function mQ(a){this.a=a},
mS:function mS(){},
mT:function mT(){},
mG:function mG(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
lS:function lS(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
Ah:function(a){var t=new P.mx(0,0)
t.dz(a)
return t},
mn:function mn(){},
mx:function mx(a,b){this.a=a
this.b=b},
hP:function hP(){},
d8:function d8(){},
iu:function iu(){},
iv:function iv(){},
iw:function iw(){},
ix:function ix(){},
iy:function iy(){},
iz:function iz(){},
iA:function iA(){},
iB:function iB(){},
iC:function iC(){},
iD:function iD(){},
iE:function iE(){},
iF:function iF(){},
iG:function iG(){},
iH:function iH(){},
iI:function iI(){},
iJ:function iJ(){},
j_:function j_(){},
bQ:function bQ(){},
jc:function jc(){},
cg:function cg(){},
jE:function jE(){},
fR:function fR(){},
fW:function fW(){},
jT:function jT(){},
jU:function jU(){},
ch:function ch(){},
kd:function kd(){},
fS:function fS(){},
fX:function fX(){},
kp:function kp(){},
kK:function kK(){},
bJ:function bJ(){},
l6:function l6(){},
l8:function l8(){},
dv:function dv(){},
le:function le(){},
lu:function lu(){},
lx:function lx(){},
f6:function f6(){},
mC:function mC(){},
mD:function mD(){},
mE:function mE(){},
cC:function cC(){},
d4:function d4(){},
kA:function kA(){},
nu:function(){var t=$.pB
if(t==null){t=J.hM(window.navigator.userAgent,"Opera",0)
$.pB=t}return t},
pD:function(){var t=$.pC
if(t==null){t=P.nu()!==!0&&J.hM(window.navigator.userAgent,"WebKit",0)
$.pC=t}return t},
tA:function(){var t,s
t=$.py
if(t!=null)return t
s=$.pz
if(s==null){s=J.hM(window.navigator.userAgent,"Firefox",0)
$.pz=s}if(s)t="-moz-"
else{s=$.pA
if(s==null){s=P.nu()!==!0&&J.hM(window.navigator.userAgent,"Trident/",0)
$.pA=s}if(s)t="-ms-"
else t=P.nu()===!0?"-o-":"-webkit-"}$.py=t
return t}},W={
tx:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(b,c){return c.toUpperCase()})},
Ac:function(a){var t=new W.lQ(a,null)
t.dt(a)
return t},
tK:function(a,b,c){return W.tL(a,null,null,b,null,null,null,c).bP(new W.j9())},
tL:function(a,b,c,d,e,f,g,h){var t,s,r,q
t=W.df
s=new P.cd(0,$.b4,null,[t])
r=new P.lH(s,[t])
q=new XMLHttpRequest()
C.E.eP(q,"GET",a,!0)
t=W.Br
W.hA(q,"load",new W.ja(r,q),!1,t)
W.hA(q,"error",r.gej(),!1,t)
q.send()
return s},
dC:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ra:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
hA:function(a,b,c,d,e){var t=W.AH(new W.m1(c))
t=new W.m0(0,a,b,t,!1,[e])
t.du(a,b,c,!1,e)
return t},
AH:function(a){var t=$.b4
if(t===C.e)return a
return t.eg(a,!0)},
ad:function ad(){},
dG:function dG(){},
hR:function hR(){},
hZ:function hZ(){},
fm:function fm(){},
i0:function i0(){},
es:function es(){},
da:function da(){},
fq:function fq(){},
dL:function dL(){},
fN:function fN(){},
lQ:function lQ(a,b){this.a=a
this.b=b},
hf:function hf(){},
lR:function lR(){},
fr:function fr(){},
ft:function ft(){},
fu:function fu(){},
ij:function ij(){},
fv:function fv(){},
fw:function fw(){},
hB:function hB(a,$ti){this.a=a
this.$ti=$ti},
cT:function cT(){},
iq:function iq(){},
ex:function ex(){},
Q:function Q(){},
dM:function dM(){},
iZ:function iZ(){},
bP:function bP(){},
fH:function fH(){},
fO:function fO(){},
fT:function fT(){},
fK:function fK(){},
df:function df(){},
j9:function j9(){},
ja:function ja(a,b){this.a=a
this.b=b},
fM:function fM(){},
jb:function jb(){},
dZ:function dZ(){},
jf:function jf(){},
jB:function jB(){},
eI:function eI(){},
jM:function jM(){},
jQ:function jQ(){},
eN:function eN(){},
jX:function jX(){},
jY:function jY(){},
eO:function eO(){},
kb:function kb(){},
kc:function kc(){},
b9:function b9(){},
hd:function hd(){},
fP:function fP(){},
fU:function fU(){},
kf:function kf(){},
ki:function ki(){},
kl:function kl(){},
hp:function hp(){},
kP:function kP(){},
kT:function kT(){},
kU:function kU(){},
lc:function lc(){},
hv:function hv(){},
ed:function ed(){},
lP:function lP(){},
lW:function lW(){},
lX:function lX(){},
mg:function mg(){},
f8:function f8(){},
fQ:function fQ(){},
fV:function fV(){},
mF:function mF(){},
m_:function m_(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
p7:function p7(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
m0:function m0(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
m1:function m1(a){this.a=a},
cX:function cX(){},
j0:function j0(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
mI:function mI(){}},T={fj:function fj(){},fk:function fk(){},i_:function i_(rx,ry,x1,x2,y1,y2,t,w,B,C,D,V,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.w=w
_.B=B
_.C=C
_.D=D
_.V=V
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},i2:function i2(rx,ry,x1,x2,y1,y2,t,w,B,C,D,V,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.w=w
_.B=B
_.C=C
_.D=D
_.V=V
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},ii:function ii(){},j6:function j6(rx,ry,x1,x2,y1,y2,t,w,B,C,D,V,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.w=w
_.B=B
_.C=C
_.D=D
_.V=V
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},
zW:function(){var t=$.$get$ho()
t=t.gaw(t)
return new H.d5(t,new T.kF(),[H.b8(t,"C",0)])},
zz:function(a,b,c,d){var t=[P.H]
t=new T.eb(0.5,a,new H.p(0,null,null,null,null,null,0,[X.z,P.V]),null,null,b,c,d,!1,!1,!1,!1,!1,!1,Q.B(null,null,A.a3),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],[E.E]),H.a([],[A.er]),1)
t.O(a,b,c,d)
return t},
kF:function kF(){},
eb:function eb(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id},
bE:function bE(a,b){this.a=a
this.b=b}},S={hQ:function hQ(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},bl:function bl(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},fp:function fp(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},jC:function jC(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id},jO:function jO(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id},k0:function k0(rx,ry,x1,x2,y1,y2,t,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.w=w
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},kL:function kL(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id},ke:function ke(){},oZ:function oZ(){},p_:function p_(){},p0:function p0(){},nw:function nw(){},nz:function nz(){},nr:function nr(){},oI:function oI(){},p2:function p2(){},p3:function p3(){},i6:function i6(){},oy:function oy(){},ou:function ou(){},jH:function jH(){},nv:function nv(){},nm:function nm(){},ie:function ie(){},ok:function ok(){},ig:function ig(){},km:function km(){},oP:function oP(){},oM:function oM(){},oQ:function oQ(){},nl:function nl(){},j3:function j3(){},i4:function i4(){},nq:function nq(){},np:function np(){},oz:function oz(){},oS:function oS(){},oA:function oA(){},ny:function ny(){},nx:function nx(){},oO:function oO(){},oN:function oN(){},lf:function lf(){},oU:function oU(){},ns:function ns(){},nt:function nt(){},p1:function p1(){},jW:function jW(){},oo:function oo(){},op:function op(){},oq:function oq(){},or:function or(){},oJ:function oJ(){},oK:function oK(){},oL:function oL(){},on:function on(){},ot:function ot(){},os:function os(){},nn:function nn(){},oW:function oW(){},oX:function oX(){},oV:function oV(){}},K={bw:function bw(a,b){this.a=a
this.b=b},jF:function jF(rx,ry,x1,x2,y1,y2,t,w,B,C,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.w=w
_.B=B
_.C=C
_.D=D
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2}},L={
tm:function(){var t=$.$get$fl()
t=t.gaw(t)
return new H.d5(t,new L.hT(),[H.b8(t,"C",0)])},
rX:function(a,b,c,d){var t,s,r
t=P.H
s=A.cS
r=P.K
r=new L.ag(P.n(null,null,null,t,s),P.n(null,null,null,r,s),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
r.j(0,$.ak,L.e("#FF9B00"),!0)
r.j(0,$.am,L.e("#FF9B00"),!0)
r.j(0,$.al,L.e("#FF8700"),!0)
r.j(0,$.av,L.e("#7F7F7F"),!0)
r.j(0,$.au,L.e("#727272"),!0)
r.j(0,$.ao,L.e("#A3A3A3"),!0)
r.j(0,$.ap,L.e("#999999"),!0)
r.j(0,$.an,L.e("#898989"),!0)
r.j(0,$.at,L.e("#EFEFEF"),!0)
r.j(0,$.as,L.e("#DBDBDB"),!0)
r.j(0,$.ar,L.e("#C6C6C6"),!0)
r.j(0,$.aq,L.e("#ADADAD"),!0)
s=[t]
t=new L.dI(0.5,a,new H.p(0,null,null,null,null,null,0,[X.z,P.V]),null,"","",!1,b,null,c,!1,!1,!1,!0,1,r,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],[E.E]),H.a([],[A.er]),Q.B(null,null,A.a3))
t.I(a,b,c,!1)
return t},
e:function(a){if(C.b.a4(a,"#"))return A.pw(C.b.af(a,1))
else return A.pw(a)},
hT:function hT(){},
dI:function dI(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iL:function iL(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},
jZ:function jZ(rx,ry,x1,x2,y1,y2,t,w,B,C,D,V,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.w=w
_.B=B
_.C=C
_.D=D
_.V=V
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},
kw:function kw(rx,ry,x1,x2,y1,y2,t,w,B,C,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.w=w
_.B=B
_.C=C
_.D=D
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},
kJ:function kJ(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id},
kO:function kO(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2}},M={hV:function hV(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},fn:function fn(){},id:function id(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},ey:function ey(){},bh:function bh(a,b){this.a=a
this.b=b},kV:function kV(a){this.a=a},lD:function lD(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id}},O={hW:function hW(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id},cl:function cl(){},d9:function d9(){},f0:function f0(){},j1:function j1(rx,ry,x1,x2,y1,y2,t,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.w=w
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},kQ:function kQ(rx,ry,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},
B4:function(){$.AT=!0
W.tK(C.b.a9("../",N.qA())+"navbar.txt",null,null).bP(O.B6())
W.hA(window,"error",new O.n9(),!1,W.Q)
A.AY()
var t=$.oR.gde()
O.AS(t)
O.AQ(t)
O.AR(t)},
AS:function(a){var t,s,r,q,p,o,n
for(t=B.u0(),s=J.c0(t.a),t=new H.dy(s,t.b,[H.O(t,0)]);t.v();){r=s.gF()
q=J.nk(r)
for(p=r.gaq().gaE(),p=p.gM(p),o="";p.v();){n=p.gF()
o+="Weight: "+H.w(r.gaq().l(0,n))+", Contents: "+n.ai()}a.aD(0,"beforeend","<div class = 'themeCategory'> <div class = 'themeHeader'>"+H.w(q)+"</div> <div class = 'themes'>"+o+"</div> </div>",C.f,null)}},
AQ:function(a){var t,s,r,q,p,o,n
for(t=L.tm(),s=J.c0(t.a),t=new H.dy(s,t.b,[H.O(t,0)]);t.v();){r=s.gF()
q=J.nk(r)
for(p=r.gaq().gaE(),p=p.gM(p),o="";p.v();){n=p.gF()
o+="Weight: "+H.w(r.gaq().l(0,n))+", Contents: "+n.ai()}a.aD(0,"beforeend","<div class = 'themeCategory'> <div class = 'themeHeader'>"+H.w(q)+"</div> <div class = 'themes'>"+o+"</div> </div>",C.f,null)}},
AR:function(a){var t,s,r,q,p,o,n
for(t=T.zW(),s=J.c0(t.a),t=new H.dy(s,t.b,[H.O(t,0)]);t.v();){r=s.gF()
q=J.nk(r)
for(p=r.gaq().gaE(),p=p.gM(p),o="";p.v();){n=p.gF()
o+="Weight: "+H.w(r.gaq().l(0,n))+", Contents: "+n.ai()}a.aD(0,"beforeend","<div class = 'themeCategory'> <div class = 'themeHeader'>"+H.w(q)+"</div> <div class = 'themes'>"+o+"</div> </div>",C.f,null)}},
n9:function n9(){},
B8:function(a){var t,s,r,q,p,o,n,m,l,k,j
t=N.qA()
a=J.rP(a,P.zy("(href|src) ?= ?([\"'])(?!https?:)",!0,!1),new O.nb(t))
s=document
J.po(s.querySelector("#navbar"),"beforeend",a,C.f,null)
if(J.bj(O.AW("seerOfVoid",null),"true")){window.alert("If you gaze long into an abyss, the abyss also gazes into you.  - Troll Bruce Willis")
J.po(s.querySelector("#story"),"beforeend","<button id = 'voidButton'>Peer into Void, Y/N?</a><div class='void'>Well, NOW you've certainly gone and done it. You can expect to see any Void Player shenanignans now. If there are any.",C.f,null)
r=H.n2(s.querySelector("#voidButton"),"$ises")
r.toString
W.hA(r,"click",new O.nc(),!1,W.Bq)}q=new P.ew(Date.now(),!1)
p=H.qD(q)
o=H.qC(q)
n=C.c.n(H.qE(q))
m=C.c.n(p)
l=C.c.n(o)
if(p<10)m="0"+m
if(o<10)l="0"+l
k=n+m+l
j=new A.hm(null,null)
j.bU(H.e8(k,null,null))
j.eN()
if($.zX||j.a.bH()>0.99)H.n2(s.querySelector("#today"),"$isdG").href="dead_index.html?seed="+k
else H.n2(s.querySelector("#today"),"$isdG").href="index2.html?seed="+k},
AW:function(a,b){var t,s,r,q
t=P.r4().gbM().l(0,a)
if(t!=null)t=P.mK(t,0,J.c1(t),C.l,!1)
if(t!=null)return t
s=$.rC
if(s.length!==0){r=J.rS(window.location.href,J.rN(window.location.href,"?")+1)
s=window.location.href
q="?"+r
s.toString
return P.r5(H.Bf(s,q,"")+"?"+$.rC,0,null).gbM().l(0,a)}return},
Bh:function(){var t,s,r,q,p
t=document
s=t.querySelector("body").style
s.backgroundColor="#f8c858"
s=t.querySelector("body").style
s.backgroundImage="url(images/pen15_bg1.png)"
r=new W.hB(t.querySelectorAll(".void"),[null])
for(t=new H.dl(r,r.gm(r),0,null,[null]);t.v();){q=t.d
p=J.rJ(J.hO(q))
if(p==="none"||p.length===0)O.Bc(q)
else O.AZ(q)}},
Bc:function(a){J.pq(J.hO(a),"block")},
AZ:function(a){J.pq(J.hO(a),"none")},
nb:function nb(a){this.a=a},
nc:function nc(){},
hh:function hh(){}},Y={ld:function ld(a){this.a=a},i5:function i5(a){this.a=a},j4:function j4(k1,k2,k3,k4,r1,r2,rx,ry,x1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id},j5:function j5(k1,k2,k3,k4,r1,r2,rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id},dq:function dq(a,b){this.a=a
this.b=b},cf:function cf(r,c,d,e,f,a,b){var _=this
_.r=r
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},N:function N(c,d,e,f,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},Y:function Y(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},bd:function bd(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},i8:function i8(c,a,b){this.c=c
this.a=a
this.b=b},bm:function bm(r,x,c,d,e,f,a,b){var _=this
_.r=r
_.x=x
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},hi:function hi(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},fJ:function fJ(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},hj:function hj(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},kH:function kH(rx,ry,x1,x2,y1,y2,t,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},kI:function kI(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id},
AM:function(a){var t,s,r,q,p,o
t=J.rR(a," ")
for(s=t.length,r="",q=0;q<t.length;t.length===s||(0,H.cy)(t),++q){p=t[q]
o=J.bi(p)
r+=" "+(J.rV(o.l(p,0))+o.af(p,1))}return r}},Z={i3:function i3(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,t,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id},im:function im(rx,ry,x1,x2,y1,y2,t,w,B,C,D,V,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.w=w
_.B=B
_.C=C
_.D=D
_.V=V
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},
cs:function(a,b,c){$.$get$pN().i(0,b,new Z.fz(a,c,[null,null]))
a.a.push(b)},
fz:function fz(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
jN:function jN(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,t,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id},
kB:function kB(rx,ry,x1,x2,y1,y2,t,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},
oe:function oe(){},
oc:function oc(){},
od:function od(){}},A={ia:function ia(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
i:function(a,b,c,d,e){var t=new A.a3(c,e,a,!1,P.a5(null,null,null,G.a2),0,3)
t.u(a,b,c,!1,e)
return t},
a3:function a3(a,b,c,d,e,f,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r},
js:function js(){},
jr:function jr(){},
er:function er(){},
eu:function(a,b,c,d){var t=new A.cS(null,null,null,null,!0,0,0,0,!0,0,0,0)
t.dl(a,b,c,d)
return t},
pv:function(a,b,c,d){var t=A.eu(0,0,0,255)
t.b=C.c.U(C.d.aB(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.c.U(C.d.aB(b*255),0,255)
t.e=!0
t.y=!0
t.d=C.c.U(C.d.aB(c*255),0,255)
t.e=!0
t.y=!0
t.a=C.c.U(C.d.aB(d*255),0,255)
return t},
tt:function(a,b){if(b){if(typeof a!=="number")return a.ax()
return A.eu((a&4278190080)>>>24,(a&16711680)>>>16,(a&65280)>>>8,a&255)}else{if(typeof a!=="number")return a.ax()
return A.eu((a&16711680)>>>16,(a&65280)>>>8,a&255,255)}},
pw:function(a){return A.tt(H.e8(a,16,new A.mV()),a.length>=8)},
cS:function cS(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
mV:function mV(){},
kk:function kk(){},
hg:function hg(){},
hm:function hm(a,b){this.a=a
this.b=b},
AY:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if($.ru)return
$.ru=!0
D.A1()
t=P.H
s=[t]
r=H.a(["metal"],s)
q=$.o
H.a([],s)
r=new G.bq(q,r,0.3)
$.$get$b().h(0,r)
$.x=r
r=H.a(["dutton"],s)
q=$.a8
H.a([],s)
r=new G.bq(q,r,0.6)
$.$get$b().h(0,r)
$.q_=r
r=H.a(["ceramic"],s)
q=$.o
H.a([],s)
r=new G.bq(q,r,-0.3)
$.$get$b().h(0,r)
$.br=r
r=H.a(["bone"],s)
q=$.o
H.a([],s)
r=new G.bq(q,r,0.2)
$.$get$b().h(0,r)
$.b0=r
r=H.a(["wood"],s)
q=$.o
H.a([],s)
r=new G.bq(q,r,-0.3)
$.$get$b().h(0,r)
$.U=r
r=H.a(["plastic"],s)
q=$.o
H.a([],s)
r=new G.bq(q,r,-0.3)
$.$get$b().h(0,r)
$.aH=r
r=H.a(["rubber"],s)
q=$.o
H.a([],s)
r=new G.bq(q,r,-0.3)
$.$get$b().h(0,r)
$.bI=r
r=H.a(["paper"],s)
q=$.o
H.a([],s)
r=new G.bq(q,r,-0.3)
$.$get$b().h(0,r)
$.F=r
r=H.a(["cloth","fabric"],s)
q=$.o
H.a([],s)
r=new G.bq(q,r,-0.3)
$.$get$b().h(0,r)
$.M=r
r=H.a(["glass"],s)
q=$.o
H.a([],s)
r=new G.bq(q,r,-0.3)
$.$get$b().h(0,r)
$.aX=r
r=H.a(["ghostly","ectoplasm"],s)
q=$.o
H.a([],s)
r=new G.bq(q,r,-0.3)
$.$get$b().h(0,r)
$.by=r
r=H.a(["flesh","meat","muscle"],s)
q=$.o
H.a([],s)
r=new G.bq(q,r,-0.1)
$.$get$b().h(0,r)
$.b6=r
r=H.a(["horrorterror","tentacled","grimdark"],s)
q=$.y
H.a([],s)
r=new G.bq(q,r,3.1)
$.$get$b().h(0,r)
$.bb=r
r=H.a(["fur","fluff","fuzzy"],s)
q=$.o
H.a([],s)
r=new G.bq(q,r,-0.1)
$.$get$b().h(0,r)
$.bM=r
r=H.a(["plant","leaf","vine"],s)
q=$.o
H.a([],s)
r=new G.bq(q,r,-0.1)
$.$get$b().h(0,r)
$.aR=r
r=H.a(["feathery"],s)
q=$.o
H.a([],s)
r=new G.bq(q,r,-0.1)
$.$get$b().h(0,r)
$.bg=r
r=H.a(["gross","ugly","unpleasant"],s)
q=$.A
H.a([],s)
r=new G.bq(q,r,0.1)
$.$get$b().h(0,r)
$.bu=r
r=H.a(["shitty","poorly made","conksuck","piece-of-shit"],s)
q=$.A
H.a([],s)
r=new G.bq(q,r,-13)
$.$get$b().h(0,r)
$.bt=r
r=H.a(["stone","rock","concrete"],s)
q=$.o
H.a([],s)
r=new G.bq(q,r,0.3)
$.$get$b().h(0,r)
$.aB=r
r=H.a(["legendary"],s)
q=$.o9
H.a([],s)
r=new G.bq(q,r,13)
$.$get$b().h(0,r)
$.Z=r
r=$.A
H.a([],s)
r=new G.aK(r,["edged","sharp","honed","keen","bladed"],0.3)
$.$get$b().h(0,r)
$.aA=r
r=$.oa
H.a([],s)
r=new G.aK(r,["glowing","bright","illuminated"],0.1)
$.$get$b().h(0,r)
$.aU=r
r=$.oa
H.a([],s)
r=new G.aK(r,["obscuring","dark","shadowy"],0.1)
$.$get$b().h(0,r)
$.ah=r
r=$.A
H.a([],s)
r=new G.aK(r,["calming","pale","placating","shooshing"],0.1)
$.$get$b().h(0,r)
$.be=r
r=$.y
H.a([],s)
r=new G.aK(r,["nuclear","radioactive","irradiated"],1)
$.$get$b().h(0,r)
$.bC=r
r=$.A
H.a([],s)
r=new G.aK(r,["scary","horrifying","terrifying","spooky"],0.2)
$.$get$b().h(0,r)
$.aY=r
r=$.A
H.a([],s)
r=new G.aK(r,["lucky","fortunate","gambler's","favored","charmed"],0.3)
$.$get$b().h(0,r)
$.bz=r
r=$.A
H.a([],s)
r=new G.aK(r,["doomed","cursed","unlucky"],-0.3)
$.$get$b().h(0,r)
$.aF=r
r=$.y
H.a([],s)
r=new G.aK(r,["pointy","piercing","sharp","barbed","piked","sharpened","pronged","pointed"],0.3)
$.$get$b().h(0,r)
$.aO=r
r=$.m
H.a([],s)
r=new G.aK(r,["exploding","explosive","detonating","grenade"],0.6)
$.$get$b().h(0,r)
$.bc=r
r=$.m
H.a([],s)
r=new G.aK(r,["electrical","zap","lightning","shock"],0.6)
$.$get$b().h(0,r)
$.a4=r
r=$.m
H.a([],s)
r=new G.aK(r,["restraining","imprisoning","restricting"],0.3)
$.$get$b().h(0,r)
$.b2=r
r=$.A
H.a([],s)
r=new G.aK(r,["expensive","valuable","bling","money"],0.1)
$.$get$b().h(0,r)
$.b3=r
r=$.A
H.a([],s)
r=new G.aK(r,["edible","tasty","delicious","savory"],0.1)
$.$get$b().h(0,r)
$.aw=r
r=$.A
H.a([],s)
r=new G.aK(r,["classy","distinguished","tasteful","cultured"],0.1)
$.$get$b().h(0,r)
$.af=r
r=$.A
H.a([],s)
r=new G.aK(r,["cool","wicked","radical","awesome","groovy","tubular","bitching","bodacious"],0.1)
$.$get$b().h(0,r)
$.ai=r
r=$.A
H.a([],s)
r=new G.aK(r,["intelligent","smart","useful","scientific","encyclopedic"],0.1)
$.$get$b().h(0,r)
$.T=r
r=$.y
H.a([],s)
r=new G.aK(r,["sentient","aware","conscious","awake","talking"],0.1)
$.$get$b().h(0,r)
$.ay=r
r=$.A
H.a([],s)
r=new G.aK(r,["romantic","amorous","tender","affectionate","lovey-dovey"],0.1)
$.$get$b().h(0,r)
$.aD=r
r=$.A
H.a([],s)
r=new G.aK(r,["funny","hilarious","comedy"],0.1)
$.$get$b().h(0,r)
$.aT=r
r=$.A
H.a([],s)
r=new G.aK(r,["annoying","enraging","dickish","asshole"],0.1)
$.$get$b().h(0,r)
$.bf=r
r=$.A
H.a([],s)
r=new G.aK(r,["magical","mystical","magickal","wizardy"],0.6)
$.$get$b().h(0,r)
$.a0=r
r=$.o9
H.a([],s)
r=new G.aK(r,["aspecty","imbued","focused","energized","awakened","infused"],1.3)
$.$get$b().h(0,r)
$.S=r
r=$.o9
H.a([],s)
r=new G.aK(r,["class-related","appropriate","themed"],1.3)
$.$get$b().h(0,r)
$.P=r
r=$.A
H.a([],s)
r=new G.aK(r,["pretty","aesthetic","beautiful"],0.1)
$.$get$b().h(0,r)
$.aC=r
r=$.m
H.a([],s)
r=new G.aK(r,["healing","regenerating","recovery","life"],0.3)
$.$get$b().h(0,r)
$.aQ=r
r=$.A
H.a([],s)
r=new G.aK(r,["uncomfortable","hard","unpleasant"],0.1)
$.$get$b().h(0,r)
$.aI=r
r=$.A
H.a([],s)
r=new G.aK(r,["comfortable","comforting","soft","cozy","snug","pleasant","plush"],-0.1)
$.$get$b().h(0,r)
$.b1=r
r=$.A
H.a([],s)
r=new G.aK(r,["poisonous","venomous","draining","poison"],0.6)
$.$get$b().h(0,r)
$.bs=r
r=$.A
H.a([],s)
r=new G.aK(r,["chilly","chill","cold","freezing","icy","frozen","ice"],0.6)
$.$get$b().h(0,r)
$.ba=r
r=$.A
H.a([],s)
r=new G.aK(r,["heavy","weighs a ton","heavy","heavy enough to kill a cat"],0.4)
$.$get$b().h(0,r)
$.bH=r
r=$.A
H.a([],s)
r=new G.aK(r,["fire","burning","blazing","hot","heated","on fire","combusting","flaming","fiery"],0.6)
$.$get$b().h(0,r)
$.ax=r
r=$.A
H.a([],s)
r=new G.aK(r,["blunt","bludgeoning","dull"],0.3)
$.$get$b().h(0,r)
$.aa=r
r=$.m
H.a([],s)
r=new G.aK(r,["shooty","ranged","projectile","loaded","long range"],0.3)
$.$get$b().h(0,r)
$.aL=r
r=$.A
H.a([],s)
r=new G.aK(r,["musical","melodic","harmonious","tuneful","euphonious","mellifluous,"],0.1)
$.$get$b().h(0,r)
$.a7=r
r=$.A
H.a([],s)
r=new G.aK(r,["loud","ear splitting","noisy","deafening","thundering"],0.3)
$.$get$b().h(0,r)
$.aV=r
r=$.A
H.a([],s)
r=new G.aK(r,["fake","false","imitation","simulated","replica"],-0.3)
$.$get$b().h(0,r)
$.aS=r
r=$.A
H.a([],s)
r=new G.aK(r,["real","actual","believable","geniune","guaranteed","veritable"],0.3)
$.$get$b().h(0,r)
$.b7=r
r=H.a(["perfectly generic"],s)
q=$.A
H.a([],s)
r=new G.a9(q,r,0.1)
$.$get$b().h(0,r)
$.q3=r
r=H.a(["a sword"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.e2=r
r=H.a(["a hammer"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.nW=r
r=H.a(["a rifle"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.o5=r
r=H.a(["a pistol"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.o1=r
r=H.a(["a blade"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.pU=r
r=H.a(["a dagger"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.nR=r
r=H.a(["a santa"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.eG=r
r=H.a(["a fist"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.q1=r
r=H.a(["claws"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.jj=r
r=H.a(["a grenade"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.jk=r
r=H.a(["a freaking safe"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.qi=r
r=H.a(["a ball"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.dg=r
r=H.a(["a trident"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.qq=r
r=H.a(["a card"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.nP=r
r=H.a(["a frying pan"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.nT=r
r=H.a(["a pillow"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.h1=r
r=H.a(["a machinegun"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.nY=r
r=H.a(["a shuriken"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.qm=r
r=H.a(["a sling"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.qo=r
r=H.a(["a yoyo"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.qs=r
r=H.a(["a cane"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.pW=r
r=H.a(["a shield"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.e1=r
r=H.a(["a lance"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.qb=r
r=H.a(["a ax"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.nM=r
r=H.a(["a sign"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.qg=r
r=H.a(["a book"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.aG=r
r=H.a(["a broom"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.fZ=r
r=H.a(["a club"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.h0=r
r=H.a(["a bow"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.nN=r
r=H.a(["a whip"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.qr=r
r=H.a(["a staff"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.qp=r
r=H.a(["a needle"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.o_=r
r=H.a(["dice"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.nS=r
r=H.a(["a fork"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.q2=r
r=H.a(["a pigeon???"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,1.3)
$.$get$b().h(0,r)
$.o0=r
r=H.a(["a chainsaw"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.pX=r
r=H.a(["a sickle"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.qn=r
r=H.a(["a shotgun"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.qk=r
r=H.a(["a stick"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.cO=r
r=H.a(["a chain"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.eF=r
r=H.a(["a wrench"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.o7=r
r=H.a(["a shovel"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.ql=r
r=H.a(["a rolling pin"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.o6=r
r=H.a(["a puppet"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.o3=r
r=H.a(["a razor"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.o4=r
r=H.a(["a pen"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.jm=r
r=H.a(["a bust"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.h_=r
r=H.a(["a bowling ball"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.ur=r
r=H.a(["a golf club"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.q5=r
r=H.a(["a knife"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.qa=r
r=H.a(["scissors"],s)
q=$.a_
H.a([],s)
r=new G.a9(q,r,0.4)
$.$get$b().h(0,r)
$.qj=r
r=H.a(["forged","sharpened","honed","filed"],s)
q=$.y
p=G.a2
o=[p]
n=H.a([$.x,$.aA,$.aO],o)
H.a([],s)
r=new G.d("Forged",n,q,r,0)
$.$get$b().h(0,r)
$.vL=r
r=H.a([],s)
q=$.o
n=H.a([$.aa,$.aA],o)
H.a([],s)
r=new G.d("",n,q,r,0)
$.$get$b().h(0,r)
$.vg=r
r=H.a(["fossilized"],s)
q=$.y
n=H.a([$.b0,$.aB],o)
H.a([],s)
r=new G.d("Fossilized",n,q,r,0)
$.$get$b().h(0,r)
$.vM=r
r=H.a(["adamantium"],s)
q=$.y
n=H.a([$.b0,$.x],o)
H.a([],s)
r=new G.d("Adamantium",n,q,r,0)
$.$get$b().h(0,r)
$.pS=r
r=H.a([],s)
q=$.o
n=H.a([$.b1,$.aI],o)
H.a([],s)
r=new G.d("",n,q,r,0)
$.$get$b().h(0,r)
$.yq=r
r=H.a(["tatami"],s)
q=$.o
n=H.a([$.M,$.U],o)
H.a([],s)
r=new G.d("Tatami",n,q,r,0)
$.$get$b().h(0,r)
$.yF=r
r=H.a(["mesh","chain link"],s)
q=$.o
n=H.a([$.M,$.x],o)
H.a([],s)
r=new G.d("Mesh",n,q,r,0)
$.$get$b().h(0,r)
$.wN=r
r=H.a(["foil"],s)
q=$.o
n=H.a([$.F,$.x],o)
H.a([],s)
r=new G.d("Foil",n,q,r,0)
$.$get$b().h(0,r)
$.vH=r
r=H.a(["beanbag"],s)
q=$.o
n=H.a([$.M,$.aB],o)
H.a([],s)
r=new G.d("Beanbag",n,q,r,0)
$.$get$b().h(0,r)
$.ul=r
r=H.a(["pleather","faux fur"],s)
q=$.o
n=H.a([$.bM,$.aH],o)
H.a([],s)
r=new G.d("Faux Fur",n,q,r,0)
$.$get$b().h(0,r)
$.xn=r
r=H.a(["plywood"],s)
q=$.o
n=H.a([$.U,$.F],o)
H.a([],s)
r=new G.d("Plywood",n,q,r,0)
$.$get$b().h(0,r)
$.o2=r
r=H.a(["colossus"],s)
q=$.o
n=H.a([$.x,$.b6],o)
H.a([],s)
r=new G.d("Colossus",n,q,r,0)
$.$get$b().h(0,r)
$.pY=r
r=H.a(["rotting","zombie"],s)
q=$.y
n=H.a([$.bu,$.b6],o)
H.a([],s)
r=new G.d("Rotting",n,q,r,0)
$.$get$b().h(0,r)
$.xN=r
r=H.a(["draugr","white walker"],s)
q=$.y
n=H.a([$.bu,$.b6,$.ba],o)
H.a([],s)
r=new G.d("Draugr",n,q,r,0)
$.$get$b().h(0,r)
$.vd=r
r=H.a(["Ultraviolet"],s)
q=$.o8
n=H.a([$.aU,$.ah],o)
H.a([],s)
r=new G.d("Ultraviolet",n,q,r,0)
$.$get$b().h(0,r)
$.ww=r
r=H.a(["Ultraviolence"],s)
q=$.m
n=H.a([$.aU,$.ah,$.aA],o)
H.a([],s)
r=new G.d("Ultraviolence",n,q,r,0)
$.$get$b().h(0,r)
$.yQ=r
r=H.a([],s)
q=$.m
n=H.a([$.aF,$.bz],o)
H.a([],s)
r=new G.d("",n,q,r,0)
$.$get$b().h(0,r)
$.vb=r
r=H.a(["candy"],s)
q=$.o
n=H.a([$.aw,$.aX],o)
H.a([],s)
r=new G.d("Candy",n,q,r,0)
$.$get$b().h(0,r)
$.nO=r
r=H.a(["cotton candy"],s)
q=$.o
n=H.a([$.aw,$.M],o)
H.a([],s)
r=new G.d("Cotton Candy",n,q,r,0)
$.$get$b().h(0,r)
$.uX=r
r=H.a(["gummy"],s)
q=$.o
n=H.a([$.aw,$.bI],o)
H.a([],s)
r=new G.d("Gum",n,q,r,0)
$.$get$b().h(0,r)
$.vZ=r
r=H.a(["marrow"],s)
q=$.o
n=H.a([$.aw,$.b0],o)
H.a([],s)
r=new G.d("Marrow",n,q,r,0)
$.$get$b().h(0,r)
$.wG=r
r=H.a(["toothy"],s)
q=$.a_
n=H.a([$.b0,$.br],o)
H.a([],s)
r=new G.d("Toothy",n,q,r,0)
$.$get$b().h(0,r)
$.yN=r
r=H.a(["Frost"],s)
q=$.o
n=H.a([$.aB,$.aX,$.b6],o)
H.a([],s)
r=new G.d("Frost",n,q,r,0)
$.$get$b().h(0,r)
$.vN=r
r=H.a(["arsenic","antifreeze"],s)
q=$.m
n=H.a([$.aw,$.bs],o)
H.a([],s)
r=new G.d("Arsenic",n,q,r,0)
$.$get$b().h(0,r)
$.vl=r
r=H.a(["crystal","diamond","quartz"],s)
q=$.o
n=H.a([$.aB,$.aX],o)
H.a([],s)
r=new G.d("Crystal",n,q,r,0)
$.$get$b().h(0,r)
$.nQ=r
r=H.a(["mary sue","sakura katana chan","shitty oc"],s)
q=$.A
n=H.a([$.aC,$.aD,$.aT,$.T,$.af,$.bz,$.a0],o)
H.a([],s)
r=new G.d("Mary Sue",n,q,r,0)
$.$get$b().h(0,r)
$.wH=r
r=H.a(["edge lord","coldsteel the hedgehog"],s)
q=$.A
n=H.a([$.aY,$.ah,$.aA,$.Z,$.aF,$.T,$.af,$.ai],o)
H.a([],s)
r=new G.d("Edge Lord",n,q,r,0)
$.$get$b().h(0,r)
$.vj=r
r=H.a(["deadpool"],s)
q=$.a_
n=H.a([$.bu,$.aQ,$.ai,$.aT],o)
H.a([],s)
r=new G.d("Deadpool",n,q,r,0)
$.$get$b().h(0,r)
$.v2=r
r=H.a(["spoopy","skellington's","creppy"],s)
q=$.A
n=H.a([$.aY,$.ai],o)
H.a([],s)
r=new G.d("Spoopy",n,q,r,0)
$.$get$b().h(0,r)
$.yt=r
r=H.a(["wolverine"],s)
q=$.a_
n=H.a([$.b0,$.aA,$.aO],o)
H.a([],s)
r=new G.d("Wolverine",n,q,r,0)
$.$get$b().h(0,r)
$.z0=r
r=H.a(["rabbit's foot"],s)
q=$.a_
n=H.a([$.bz,$.bM],o)
H.a([],s)
r=new G.d("Rabbit's Foot",n,q,r,0)
$.$get$b().h(0,r)
$.qf=r
r=H.a(["tipped","reinforced","arrowhead"],s)
q=$.y
n=H.a([$.aO,$.U],o)
H.a([],s)
r=new G.d("Tipped",n,q,r,0)
$.$get$b().h(0,r)
$.ue=r
r=H.a(["arrow","flechette","bolt"],s)
q=$.a_
n=H.a([$.aO,$.aL,$.U],o)
H.a([],s)
r=new G.d("Arrow",n,q,r,0)
$.$get$b().h(0,r)
$.pT=r
r=H.a(["training sword","bokken"],s)
q=$.a_
n=H.a([$.U,$.aA],o)
H.a([],s)
r=new G.d("Bokken",n,q,r,0)
$.$get$b().h(0,r)
$.wp=r
r=H.a(["ironic"],s)
q=$.A
n=H.a([$.aS,$.ai],o)
H.a([],s)
r=new G.d("Irony Type1",n,q,r,0)
$.$get$b().h(0,r)
$.nX=r
r=H.a(["netted","webbed"],s)
q=$.a_
n=H.a([$.b2,$.M],o)
H.a([],s)
r=new G.d("Netted",n,q,r,0)
$.$get$b().h(0,r)
$.x1=r
r=H.a(["barbed wire"],s)
q=$.a_
n=H.a([$.aO,$.b2,$.x,$.M],o)
H.a([],s)
r=new G.d("Barbed Wire",n,q,r,0)
$.$get$b().h(0,r)
$.ui=r
r=H.a(["morning star"],s)
q=$.a_
n=H.a([$.aO,$.aa],o)
H.a([],s)
r=new G.d("Morning Star",n,q,r,0)
$.$get$b().h(0,r)
$.wW=r
r=H.a(["decadent"],s)
q=$.A
n=H.a([$.b1,$.b3],o)
H.a([],s)
r=new G.d("Decadent",n,q,r,0)
$.$get$b().h(0,r)
$.v5=r
r=H.a(["SBAHJ"],s)
q=$.m
n=H.a([$.bt,$.ai],o)
H.a([],s)
r=new G.d("SBAHJ",n,q,r,0)
$.$get$b().h(0,r)
$.xX=r
r=H.a(["bayonet"],s)
q=$.a_
n=H.a([$.aO,$.aL],o)
H.a([],s)
r=new G.d("Bayonet",n,q,r,0)
$.$get$b().h(0,r)
$.uk=r
r=H.a(["Snoop Dog's Snow Cone Machete"],s)
q=$.o
n=H.a([$.ba,$.ai,$.aA],o)
H.a([],s)
r=new G.d("Snoop",n,q,r,0)
$.$get$b().h(0,r)
$.yp=r
r=H.a(["light saber"],s)
q=$.m
n=H.a([$.aU,$.ax,$.aA],o)
H.a([],s)
r=new G.d("Light Saber",n,q,r,0)
$.$get$b().h(0,r)
$.wv=r
r=H.a(["fake as shit","fakey fake","bullshit"],s)
q=$.A
n=H.a([$.a0,$.aS],o)
H.a([],s)
r=new G.d("Fakey Fake",n,q,r,0)
$.$get$b().h(0,r)
$.vs=r
r=H.a(["real as shit","suprisingly real"],s)
q=$.A
n=H.a([$.a0,$.b7],o)
H.a([],s)
r=new G.d("Real As Shit",n,q,r,0)
$.$get$b().h(0,r)
$.xH=r
r=H.a(["skeletal"],s)
q=$.a_
n=H.a([$.aY,$.aF,$.b0],o)
H.a([],s)
r=new G.d("Skeletal",n,q,r,0)
$.$get$b().h(0,r)
$.yj=r
r=H.a(["green sun"],s)
q=$.oa
n=H.a([$.ax,$.bC,$.aU],o)
H.a([],s)
r=new G.d("Green Sun",n,q,r,0)
$.$get$b().h(0,r)
$.nV=r
r=H.a(["midnight","3 In The Morning"],s)
q=$.o8
n=H.a([$.ah,$.af],o)
H.a([],s)
r=new G.d("Midnight",n,q,r,0)
$.$get$b().h(0,r)
$.wR=r
r=H.a(["radiant","dazzling"],s)
q=$.A
n=H.a([$.a0,$.aU],o)
H.a([],s)
r=new G.d("Radiant",n,q,r,0)
$.$get$b().h(0,r)
$.xE=r
r=H.a(["edgy"],s)
q=$.A
n=H.a([$.aA,$.ah,$.ai],o)
H.a([],s)
r=new G.d("Edgy",n,q,r,0)
$.$get$b().h(0,r)
$.vk=r
r=H.a(["A-Bomb","Warhead","Chernobyl"],s)
q=$.m
n=H.a([$.bC,$.bc],o)
H.a([],s)
r=new G.d("Warhead",n,q,r,0)
$.$get$b().h(0,r)
$.u7=r
r=H.a(["living"],s)
q=$.y
n=H.a([$.b0,$.b6,$.ay],o)
H.a([],s)
r=new G.d("Living",n,q,r,0)
$.$get$b().h(0,r)
$.wz=r
r=H.a(["dead","corpse","deceased"],s)
q=$.y
n=H.a([$.b0,$.b6],o)
H.a([],s)
r=new G.d("Dead",n,q,r,0)
$.$get$b().h(0,r)
$.v1=r
r=H.a(["taser"],s)
q=$.m
n=H.a([$.a4,$.b2,$.aL],o)
H.a([],s)
r=new G.d("Taser",n,q,r,0)
$.$get$b().h(0,r)
$.yE=r
r=H.a(["nocturn"],s)
q=$.m
n=H.a([$.ah,$.a7],o)
H.a([],s)
r=new G.d("Nocturn",n,q,r,0)
$.$get$b().h(0,r)
$.x4=r
r=H.a(["dirge"],s)
q=$.m
n=H.a([$.aF,$.a7],o)
H.a([],s)
r=new G.d("Dirge",n,q,r,0)
$.$get$b().h(0,r)
$.v8=r
r=H.a(["Snobbish","Noble"],s)
q=$.A
n=H.a([$.af,$.b3],o)
H.a([],s)
r=new G.d("Snobbish",n,q,r,0)
$.$get$b().h(0,r)
$.yo=r
r=H.a(["flat"],s)
q=$.A
n=H.a([$.aa,$.a7],o)
H.a([],s)
r=new G.d("Flat(Music)",n,q,r,0)
$.$get$b().h(0,r)
$.vC=r
r=H.a(["sharp"],s)
q=$.A
n=H.a([$.aA,$.a7],o)
H.a([],s)
r=new G.d("Sharp(Music)",n,q,r,0)
$.$get$b().h(0,r)
$.y5=r
r=H.a(["sharp"],s)
q=$.A
n=H.a([$.af,$.a7],o)
H.a([],s)
r=new G.d("Sharp(Clothes)",n,q,r,0)
$.$get$b().h(0,r)
$.y4=r
r=H.a(["Bach's"],s)
q=$.a8
n=H.a([$.T,$.a7],o)
H.a([],s)
r=new G.d("Bach's",n,q,r,0)
$.$get$b().h(0,r)
$.ug=r
r=H.a(["Mozart's"],s)
q=$.a8
n=H.a([$.a0,$.a7],o)
H.a([],s)
r=new G.d("Mozart's",n,q,r,0)
$.$get$b().h(0,r)
$.wY=r
r=H.a(["Einstein's","Oppenheimer"],s)
q=$.a8
n=H.a([$.T,$.bC],o)
H.a([],s)
r=new G.d("Einstein's",n,q,r,0)
$.$get$b().h(0,r)
$.vm=r
r=H.a(["Feynman's"],s)
q=$.a8
n=H.a([$.T,$.aT],o)
H.a([],s)
r=new G.d("Feynman's",n,q,r,0)
$.$get$b().h(0,r)
$.vw=r
r=H.a(["Ziptie"],s)
q=$.a8
n=H.a([$.aH,$.b2],o)
H.a([],s)
r=new G.d("Ziptie",n,q,r,0)
$.$get$b().h(0,r)
$.z4=r
r=H.a(["cellular","mobile","handheld","computerized"],s)
q=$.m
n=H.a([$.x,$.T],o)
H.a([],s)
r=new G.d("Mobile",n,q,r,0)
$.$get$b().h(0,r)
$.jp=r
r=H.a(["Sassacre"],s)
q=$.a8
n=H.a([$.bH,$.aT],o)
H.a([],s)
r=new G.d("Sassacre",n,q,r,0)
$.$get$b().h(0,r)
$.xV=r
r=H.a(["Sledge"],s)
q=$.m
n=H.a([$.aa,$.bH],o)
H.a([],s)
r=new G.d("Sledge",n,q,r,0)
$.$get$b().h(0,r)
$.ym=r
r=H.a(["Legal"],s)
q=$.m
n=H.a([$.b2,$.F],o)
H.a([],s)
r=new G.d("Legal",n,q,r,0)
$.$get$b().h(0,r)
$.jl=r
r=H.a(["Clown"],s)
q=$.m
n=H.a([$.aT,$.aV],o)
H.a([],s)
r=new G.d("Clown",n,q,r,0)
$.$get$b().h(0,r)
$.uR=r
r=H.a(["passionate"],s)
q=$.A
n=H.a([$.ax,$.aD],o)
H.a([],s)
r=new G.d("Passionate",n,q,r,0)
$.$get$b().h(0,r)
$.xe=r
r=H.a(["pinata"],s)
q=$.a_
n=H.a([$.F,$.aw],o)
H.a([],s)
r=new G.d("Pinata",n,q,r,0)
$.$get$b().h(0,r)
$.xi=r
r=H.a(["anvil"],s)
q=$.m
n=H.a([$.aa,$.bH,$.x],o)
H.a([],s)
r=new G.d("Anvil",n,q,r,0)
$.$get$b().h(0,r)
$.ud=r
r=H.a(["flashbang"],s)
q=$.m
n=H.a([$.aU,$.bc],o)
H.a([],s)
r=new G.d("Flashbang",n,q,r,0)
$.$get$b().h(0,r)
$.vB=r
r=H.a(["smokebomb"],s)
q=$.m
n=H.a([$.ah,$.bc],o)
H.a([],s)
r=new G.d("Smokebomb",n,q,r,0)
$.$get$b().h(0,r)
$.yn=r
r=H.a(["ninja"],s)
q=$.m
n=H.a([$.ah,$.aA],o)
H.a([],s)
r=new G.d("Ninja",n,q,r,0)
$.$get$b().h(0,r)
$.x3=r
r=H.a(["techno"],s)
q=$.m
n=H.a([$.a4,$.a7],o)
H.a([],s)
r=new G.d("Techno",n,q,r,0)
$.$get$b().h(0,r)
$.yH=r
r=H.a(["rock and roll"],s)
q=$.m
n=H.a([$.aB,$.a7],o)
H.a([],s)
r=new G.d("Rock And/Or Roll",n,q,r,0)
$.$get$b().h(0,r)
$.xJ=r
r=H.a(["pistol shrimp","horrifying"],s)
q=$.a_
n=H.a([$.ay,$.b6,$.aL],o)
H.a([],s)
r=new G.d("Pistol Shrimp",n,q,r,0)
$.$get$b().h(0,r)
$.xj=r
r=H.a(["juggalo"],s)
q=$.m
n=H.a([$.aT,$.a7,$.aV,$.aY],o)
H.a([],s)
r=new G.d("Juggalo",n,q,r,0)
$.$get$b().h(0,r)
$.q9=r
r=H.a(["shocksauce"],s)
q=$.A
n=H.a([$.ai,$.a4],o)
H.a([],s)
r=new G.d("Shock Sauce",n,q,r,0)
$.$get$b().h(0,r)
$.y8=r
r=H.a(["weaksauce"],s)
q=$.A
n=H.a([$.aa,$.ai,$.bt],o)
H.a([],s)
r=new G.d("Weak Sauce",n,q,r,0)
$.$get$b().h(0,r)
$.yV=r
r=H.a(["spicy","picante"],s)
q=$.A
n=H.a([$.ax,$.aw],o)
H.a([],s)
r=new G.d("Spicy",n,q,r,0)
$.$get$b().h(0,r)
$.ys=r
r=H.a(["ice cream","popsicle"],s)
q=$.o
n=H.a([$.ba,$.aw],o)
H.a([],s)
r=new G.d("Popsicle",n,q,r,0)
$.$get$b().h(0,r)
$.wc=r
r=H.a(["popsickle"],s)
q=$.o
n=H.a([$.ba,$.aw,$.aA],o)
H.a([],s)
r=new G.d("Popsickle",n,q,r,0)
$.$get$b().h(0,r)
$.xv=r
r=H.a(["icepick"],s)
q=$.o
n=H.a([$.ba,$.aO],o)
H.a([],s)
r=new G.d("Icepick",n,q,r,0)
$.$get$b().h(0,r)
$.wd=r
r=H.a(["schezwan"],s)
q=$.A
n=H.a([$.ai,$.aw],o)
H.a([],s)
r=new G.d("Schezwan",n,q,r,0)
$.$get$b().h(0,r)
$.xY=r
r=H.a(["vaporwave"],s)
q=$.m
n=H.a([$.ah,$.a7,$.ai,$.a4],o)
H.a([],s)
r=new G.d("Vaporwave",n,q,r,0)
$.$get$b().h(0,r)
$.yT=r
r=H.a(["mallet"],s)
q=$.a_
n=H.a([$.U,$.aa],o)
H.a([],s)
r=new G.d("Mallet",n,q,r,0)
$.$get$b().h(0,r)
$.wF=r
r=H.a(["fidget"],s)
q=$.m
n=H.a([$.aH,$.ai],o)
H.a([],s)
r=new G.d("Fidget",n,q,r,0)
$.$get$b().h(0,r)
$.vy=r
r=H.a(["gold foil"],s)
q=$.o
n=H.a([$.x,$.F,$.b3],o)
H.a([],s)
r=new G.d("Gold Foil",n,q,r,0)
$.$get$b().h(0,r)
$.vV=r
r=H.a(["caviar"],s)
q=$.o
n=H.a([$.aw,$.b3],o)
H.a([],s)
r=new G.d("Caviar",n,q,r,0)
$.$get$b().h(0,r)
$.uH=r
r=H.a(["RADioactive"],s)
q=$.A
n=H.a([$.bC,$.ai],o)
H.a([],s)
r=new G.d("RADioactive",n,q,r,0)
$.$get$b().h(0,r)
$.xF=r
r=H.a(["glam"],s)
q=$.A
n=H.a([$.aB,$.a7,$.aC],o)
H.a([],s)
r=new G.d("Glam",n,q,r,0)
$.$get$b().h(0,r)
$.vT=r
r=H.a(["hair metal"],s)
q=$.A
n=H.a([$.x,$.a7,$.aC],o)
H.a([],s)
r=new G.d("Hair Metal",n,q,r,0)
$.$get$b().h(0,r)
$.w0=r
r=H.a(["elven","fae","sylvan"],s)
q=$.A
n=H.a([$.a0,$.aC],o)
H.a([],s)
r=new G.d("Elven",n,q,r,0)
$.$get$b().h(0,r)
$.vo=r
r=H.a(["shiny"],s)
q=$.A
n=H.a([$.x,$.aC],o)
H.a([],s)
r=new G.d("Shiny",n,q,r,0)
$.$get$b().h(0,r)
$.y7=r
r=H.a(["bespoke","well-tailored","glamorous","haute couture"],s)
q=$.A
n=H.a([$.b3,$.aC,$.af],o)
H.a([],s)
r=new G.d("Bespoke",n,q,r,0)
$.$get$b().h(0,r)
$.e0=r
r=H.a(["operatic"],s)
q=$.A
n=H.a([$.b3,$.a7,$.af],o)
H.a([],s)
r=new G.d("Operatic",n,q,r,0)
$.$get$b().h(0,r)
$.x8=r
r=H.a(["ice","diamond"],s)
q=$.o
n=H.a([$.b3,$.ba],o)
H.a([],s)
r=new G.d("Diamond",n,q,r,0)
$.$get$b().h(0,r)
$.q7=r
r=H.a(["icy hot","cold fire","wet","damp","moist","watery"],s)
q=$.A
n=H.a([$.ax,$.ba],o)
H.a([],s)
r=new G.d("Icy Hot",n,q,r,0)
$.$get$b().h(0,r)
$.we=r
r=H.a(["ice cold","cold as fuck"],s)
q=$.A
n=H.a([$.ai,$.ba],o)
H.a([],s)
r=new G.d("Cold As Fuck",n,q,r,0)
$.$get$b().h(0,r)
$.wb=r
r=H.a(["winter's","season's"],s)
q=$.a8
n=H.a([$.be,$.ba],o)
H.a([],s)
r=new G.d("Winter's",n,q,r,0)
$.$get$b().h(0,r)
$.yY=r
r=H.a(["santa's","christmas","xmas"],s)
q=$.a8
n=H.a([$.a0,$.ba],o)
H.a([],s)
r=new G.d("Christmas",n,q,r,0)
$.$get$b().h(0,r)
$.uN=r
r=H.a(["Santa Saws"],s)
q=$.a8
n=H.a([$.a0,$.ba,$.aA],o)
H.a([],s)
r=new G.d("Santa Saws",n,q,r,0)
$.$get$b().h(0,r)
$.xT=r
r=H.a(["Santa Sleighs"],s)
q=$.a8
n=H.a([$.eG,$.aA],o)
H.a([],s)
r=new G.d("Santa Sleighs",n,q,r,0)
$.$get$b().h(0,r)
$.xU=r
r=H.a(["Santa Claws"],s)
q=$.a8
n=H.a([$.eG,$.jj],o)
H.a([],s)
r=new G.d("Santa Claws",n,q,r,0)
$.$get$b().h(0,r)
$.xS=r
r=H.a(["Sandy Claws"],s)
q=$.a8
n=H.a([$.eG,$.jj,$.aB],o)
H.a([],s)
r=new G.d("Sandy Claws",n,q,r,0)
$.$get$b().h(0,r)
$.xR=r
r=H.a(["Silent Night"],s)
q=$.a8
n=H.a([$.eG,$.ah],o)
H.a([],s)
r=new G.d("Silent Night",n,q,r,0)
$.$get$b().h(0,r)
$.yf=r
r=H.a(["ghost's","Bloody Mary","Halloween"],s)
q=$.a8
n=H.a([$.aY,$.by],o)
H.a([],s)
r=new G.d("Ghost's",n,q,r,0)
$.$get$b().h(0,r)
$.w1=r
r=H.a(["ghoul","mutant"],s)
q=$.o
n=H.a([$.b6,$.bC,$.bu],o)
H.a([],s)
r=new G.d("Mutant",n,q,r,0)
$.$get$b().h(0,r)
$.wZ=r
r=H.a(["skate","skateboard"],s)
q=$.m
n=H.a([$.ai,$.x],o)
H.a([],s)
r=new G.d("Skateboard",n,q,r,0)
$.$get$b().h(0,r)
$.yi=r
r=H.a(["microwave"],s)
q=$.m
n=H.a([$.bC,$.a4,$.aw],o)
H.a([],s)
r=new G.d("Microwave",n,q,r,0)
$.$get$b().h(0,r)
$.wQ=r
r=H.a(["orbital"],s)
q=$.m
n=H.a([$.bC,$.a4,$.aw,$.aL],o)
H.a([],s)
r=new G.d("Orbital",n,q,r,0)
$.$get$b().h(0,r)
$.x9=r
r=H.a([],s)
q=$.m
n=H.a([$.aa,$.T],o)
H.a([],s)
r=new G.d("",n,q,r,0)
$.$get$b().h(0,r)
$.vh=r
r=H.a(["uranium"],s)
q=$.o
n=H.a([$.bC,$.aB],o)
H.a([],s)
r=new G.d("Uranium",n,q,r,0)
$.$get$b().h(0,r)
$.yS=r
r=H.a(["mousepad","jar opener"],s)
q=$.m
n=H.a([$.F,$.bI],o)
H.a([],s)
r=new G.d("Mousepad",n,q,r,0)
$.$get$b().h(0,r)
$.wX=r
r=H.a(["flint"],s)
q=$.o
n=H.a([$.aA,$.aB],o)
H.a([],s)
r=new G.d("Sharpened Flint",n,q,r,0)
$.$get$b().h(0,r)
$.vE=r
r=H.a(["flint"],s)
q=$.o
n=H.a([$.aO,$.aB],o)
H.a([],s)
r=new G.d("Pointed Flint",n,q,r,0)
$.$get$b().h(0,r)
$.vF=r
r=H.a(["picnic"],s)
q=$.m
n=H.a([$.aH,$.aO],o)
H.a([],s)
r=new G.d("Picnic",n,q,r,0)
$.$get$b().h(0,r)
$.xh=r
r=H.a(["xtreme xplosion"],s)
q=$.A
n=H.a([$.ai,$.bc],o)
H.a([],s)
r=new G.d("Xtreme Xplosion",n,q,r,0)
$.$get$b().h(0,r)
$.z3=r
r=H.a(["lawn"],s)
q=$.m
n=H.a([$.aH,$.b1],o)
H.a([],s)
r=new G.d("Lawn",n,q,r,0)
$.$get$b().h(0,r)
$.wt=r
r=H.a(["upholstered"],s)
q=$.o
n=H.a([$.M,$.b1],o)
H.a([],s)
r=new G.d("Upholstered",n,q,r,0)
$.$get$b().h(0,r)
$.yR=r
r=H.a(["leather"],s)
q=$.o
n=H.a([$.b6,$.b1],o)
H.a([],s)
r=new G.d("Leather",n,q,r,0)
$.$get$b().h(0,r)
$.qd=r
r=H.a(["shag"],s)
q=$.o
n=H.a([$.bM,$.b1],o)
H.a([],s)
r=new G.d("Shag",n,q,r,0)
$.$get$b().h(0,r)
$.y3=r
r=H.a(["loyal"],s)
q=$.A
n=H.a([$.aa,$.aD],o)
H.a([],s)
r=new G.d("Loyal",n,q,r,0)
$.$get$b().h(0,r)
$.wD=r
r=H.a(["porcelain"],s)
q=$.o
n=H.a([$.aC,$.br],o)
H.a([],s)
r=new G.d("Porcelain",n,q,r,0)
$.$get$b().h(0,r)
$.jo=r
r=H.a(["pork hollow","piggy bank"],s)
q=$.a_
n=H.a([$.b3,$.br],o)
H.a([],s)
r=new G.d("Pork Hollow",n,q,r,0)
$.$get$b().h(0,r)
$.xx=r
r=H.a(["n1nj4","katana"],s)
q=$.m
n=H.a([$.ai,$.aA],o)
H.a([],s)
r=new G.d("Katana",n,q,r,0)
$.$get$b().h(0,r)
$.wn=r
r=H.a(["chocolate"],s)
q=$.o
n=H.a([$.aD,$.aw],o)
H.a([],s)
r=new G.d("Chocolate",n,q,r,0)
$.$get$b().h(0,r)
$.uM=r
r=H.a(["wrapped chocolate"],s)
q=$.o
n=H.a([$.aD,$.aw,$.F,$.x],o)
H.a([],s)
r=new G.d("Wrapped Chocolate",n,q,r,0)
$.$get$b().h(0,r)
$.vI=r
r=H.a(["scratch-n-sniff"],s)
q=$.o
n=H.a([$.ai,$.F],o)
H.a([],s)
r=new G.d("Scratch-n-sniff",n,q,r,0)
$.$get$b().h(0,r)
$.y_=r
r=H.a(["mythril","orichalcum"],s)
q=$.o
n=H.a([$.a0,$.x],o)
H.a([],s)
r=new G.d("Mythril",n,q,r,0)
$.$get$b().h(0,r)
$.x_=r
r=H.a(["titanium","steel"],s)
q=$.o
n=H.a([$.aa,$.x],o)
H.a([],s)
r=new G.d("Titanium",n,q,r,0)
$.$get$b().h(0,r)
$.yM=r
r=H.a(["lead"],s)
q=$.o
n=H.a([$.bH,$.x],o)
H.a([],s)
r=new G.d("Lead",n,q,r,0)
$.$get$b().h(0,r)
$.qc=r
r=H.a(["satire","parody","onion"],s)
q=$.m
n=H.a([$.aS,$.aT],o)
H.a([],s)
r=new G.d("Satire",n,q,r,0)
$.$get$b().h(0,r)
$.x7=r
r=H.a(["comedy gold"],s)
q=$.A
n=H.a([$.b3,$.aT],o)
H.a([],s)
r=new G.d("Comedy Gold",n,q,r,0)
$.$get$b().h(0,r)
$.uT=r
r=H.a(["dry","sensible chuckle"],s)
q=$.A
n=H.a([$.af,$.aT],o)
H.a([],s)
r=new G.d("Dry",n,q,r,0)
$.$get$b().h(0,r)
$.ve=r
r=H.a(["polite"],s)
q=$.A
n=H.a([$.b1,$.aS],o)
H.a([],s)
r=new G.d("Polite",n,q,r,0)
$.$get$b().h(0,r)
$.xt=r
r=H.a(["stradivarius"],s)
q=$.a8
n=H.a([$.af,$.b3,$.U,$.a7],o)
H.a([],s)
r=new G.d("Stradivarius",n,q,r,0)
$.$get$b().h(0,r)
$.yz=r
r=H.a(["scientistic"],s)
q=$.A
n=H.a([$.T,$.aS],o)
H.a([],s)
r=new G.d("Scientistic",n,q,r,0)
$.$get$b().h(0,r)
$.xZ=r
r=H.a(["AI"],s)
q=$.m
n=H.a([$.a4,$.ay],o)
H.a([],s)
r=new G.d("AI",n,q,r,0)
$.$get$b().h(0,r)
$.nL=r
r=H.a(["robotic"],s)
q=$.y
n=H.a([$.x,$.a4,$.ay],o)
H.a([],s)
r=new G.d("Robotic",n,q,r,0)
$.$get$b().h(0,r)
$.qh=r
r=H.a(["shrapnel"],s)
q=$.m
n=H.a([$.U,$.bc],o)
H.a([],s)
r=new G.d("Shrapnel",n,q,r,0)
$.$get$b().h(0,r)
$.ya=r
r=H.a(["vocaloid"],s)
q=$.m
n=H.a([$.ay,$.a4,$.a7],o)
H.a([],s)
r=new G.d("Vocaloid",n,q,r,0)
$.$get$b().h(0,r)
$.yU=r
r=H.a(["*Hyun-ae"],s)
q=$.a8
n=H.a([$.ay,$.a4,$.aD],o)
H.a([],s)
r=new G.d("*Hyun-ae",n,q,r,0)
$.$get$b().h(0,r)
$.wa=r
r=H.a(["buckshot"],s)
q=$.m
n=H.a([$.U,$.aL],o)
H.a([],s)
r=new G.d("Buckshot",n,q,r,0)
$.$get$b().h(0,r)
$.uv=r
r=H.a(["cannon"],s)
q=$.m
n=H.a([$.bH,$.aL],o)
H.a([],s)
r=new G.d("Cannon",n,q,r,0)
$.$get$b().h(0,r)
$.uE=r
r=H.a(["stationary"],s)
q=$.m
n=H.a([$.af,$.F],o)
H.a([],s)
r=new G.d("Stationary",n,q,r,0)
$.$get$b().h(0,r)
$.yx=r
r=H.a([],s)
q=$.m
n=H.a([$.aG,$.F],o)
H.a([],s)
r=new G.d("",n,q,r,0)
$.$get$b().h(0,r)
$.xb=r
r=H.a([],s)
q=$.m
n=H.a([$.x,$.aL],o)
H.a([],s)
r=new G.d("",n,q,r,0)
$.$get$b().h(0,r)
$.wO=r
r=H.a(["papercut"],s)
q=$.m
n=H.a([$.aA,$.F],o)
H.a([],s)
r=new G.d("Papercut",n,q,r,0)
$.$get$b().h(0,r)
$.xc=r
r=H.a(["squeaky"],s)
q=$.y
n=H.a([$.aa,$.bI],o)
H.a([],s)
r=new G.d("Squeaky",n,q,r,0)
$.$get$b().h(0,r)
$.yu=r
r=H.a(["kazoo"],s)
q=$.m
n=H.a([$.aS,$.a7],o)
H.a([],s)
r=new G.d("Kazoo",n,q,r,0)
$.$get$b().h(0,r)
$.wo=r
r=H.a(["bandaid"],s)
q=$.m
n=H.a([$.aQ,$.F],o)
H.a([],s)
r=new G.d("Bandaid",n,q,r,0)
$.$get$b().h(0,r)
$.uh=r
r=H.a(["gushers"],s)
q=$.m
n=H.a([$.aQ,$.aw],o)
H.a([],s)
r=new G.d("Gushers",n,q,r,0)
$.$get$b().h(0,r)
$.w_=r
r=H.a(["medic"],s)
q=$.m
n=H.a([$.aQ,$.aL],o)
H.a([],s)
r=new G.d("Medic",n,q,r,0)
$.$get$b().h(0,r)
$.wM=r
r=H.a(["sick nasty","ill"],s)
q=$.y
n=H.a([$.ai,$.bs],o)
H.a([],s)
r=new G.d("Sick Nasty",n,q,r,0)
$.$get$b().h(0,r)
$.yc=r
r=H.a(["gilded","gold leaf"],s)
q=$.o
n=H.a([$.x,$.U],o)
H.a([],s)
r=new G.d("Gilded",n,q,r,0)
$.$get$b().h(0,r)
$.vS=r
r=H.a(["charging","power cord"],s)
q=$.m
n=H.a([$.aH,$.a4],o)
H.a([],s)
r=new G.d("Charging",n,q,r,0)
$.$get$b().h(0,r)
$.uL=r
r=H.a(["safety"],s)
q=$.m
n=H.a([$.bI,$.aA],o)
H.a([],s)
r=new G.d("Rubber Safety",n,q,r,0)
$.$get$b().h(0,r)
$.xP=r
r=H.a(["safety"],s)
q=$.m
n=H.a([$.aH,$.aA],o)
H.a([],s)
r=new G.d("Plastic Safety",n,q,r,0)
$.$get$b().h(0,r)
$.xQ=r
r=H.a(["thunderous","thor's"],s)
q=$.A
n=H.a([$.aV,$.a4],o)
H.a([],s)
r=new G.d("Thunderous",n,q,r,0)
$.$get$b().h(0,r)
$.yK=r
r=H.a(["screeching","dial up"],s)
q=$.A
n=H.a([$.aV,$.a4,$.T],o)
H.a([],s)
r=new G.d("Screeching",n,q,r,0)
$.$get$b().h(0,r)
$.y1=r
r=H.a(["mirrored","reflective"],s)
q=$.m
n=H.a([$.aX,$.x],o)
H.a([],s)
r=new G.d("Mirrored",n,q,r,0)
$.$get$b().h(0,r)
$.nZ=r
r=H.a(["far seeing","sighted"],s)
q=$.m
n=H.a([$.aX,$.aB,$.a0],o)
H.a([],s)
r=new G.d("Far Seeing",n,q,r,0)
$.$get$b().h(0,r)
$.pZ=r
r=H.a(["disabling","non lethal"],s)
q=$.m
n=H.a([$.bI,$.aL],o)
H.a([],s)
r=new G.d("Nonlethal",n,q,r,0)
$.$get$b().h(0,r)
$.v9=r
r=H.a(["fashionable"],s)
q=$.m
n=H.a([$.aC,$.af],o)
H.a([],s)
r=new G.d("Fashionable",n,q,r,0)
$.$get$b().h(0,r)
$.q0=r
r=H.a(["ironic"],s)
q=$.A
n=H.a([$.aT,$.ai],o)
H.a([],s)
r=new G.d("Ironic Type 2",n,q,r,0)
$.$get$b().h(0,r)
$.wi=r
r=H.a(["ironic"],s)
q=$.A
n=H.a([$.bt,$.aT],o)
H.a([],s)
r=new G.d("Ironic Type 3",n,q,r,0)
$.$get$b().h(0,r)
$.q8=r
r=H.a(["post-ironic"],s)
q=$.A
n=H.a([$.aS,$.ai,$.af],o)
H.a([],s)
r=new G.d("Post Ironic",n,q,r,0)
$.$get$b().h(0,r)
$.xz=r
r=H.a(["monstrous"],s)
q=$.A
n=H.a([$.bu,$.aV,$.aY],o)
H.a([],s)
r=new G.d("Monstrous",n,q,r,0)
$.$get$b().h(0,r)
$.wV=r
r=H.a(["rooty tooty point and shooty"],s)
q=$.m
n=H.a([$.aL,$.ai,$.af],o)
H.a([],s)
r=new G.d("Rooty Tooty Point and Shooty",n,q,r,0)
$.$get$b().h(0,r)
$.xL=r
r=H.a(["golden"],s)
q=$.o
n=H.a([$.x,$.b3],o)
H.a([],s)
r=new G.d("Golden",n,q,r,0)
$.$get$b().h(0,r)
$.nU=r
r=H.a(["platinum"],s)
q=$.o
n=H.a([$.aU,$.x],o)
H.a([],s)
r=new G.d("Platinum",n,q,r,0)
$.$get$b().h(0,r)
$.jn=r
r=H.a(["horseshoe"],s)
q=$.m
n=H.a([$.bz,$.x],o)
H.a([],s)
r=new G.d("Horseshoe",n,q,r,0)
$.$get$b().h(0,r)
$.q6=r
r=H.a(["felt"],s)
q=$.m
n=H.a([$.M,$.bM],o)
H.a([],s)
r=new G.d("Felt",n,q,r,0)
$.$get$b().h(0,r)
$.vu=r
r=H.a(["marble"],s)
q=$.o
n=H.a([$.aB,$.af],o)
H.a([],s)
r=new G.d("Marble",n,q,r,0)
$.$get$b().h(0,r)
$.qe=r
r=H.a(["marble"],s)
q=$.o
n=H.a([$.aB,$.bH],o)
H.a([],s)
r=new G.d("Marble",n,q,r,0)
$.$get$b().h(0,r)
$.vX=r
r=H.a(["glitched"],s)
q=$.y
n=H.a([$.bb,$.a4],o)
H.a([],s)
r=new G.d("Glitched",n,q,r,0)
$.$get$b().h(0,r)
$.q4=r
r=H.a(["debugging"],s)
q=$.m
n=H.a([$.aQ,$.a4],o)
H.a([],s)
r=new G.d("Debugging",n,q,r,0)
$.$get$b().h(0,r)
$.v4=r
r=H.a(["Iron Maiden","Metalic"],s)
q=$.m
n=H.a([$.x,$.aV,$.a7],o)
H.a([],s)
r=new G.d("Metalic",n,q,r,0)
$.$get$b().h(0,r)
$.wP=r
r=H.a(["Simulacrum"],s)
q=$.A
n=H.a([$.ay,$.aS],o)
H.a([],s)
r=new G.d("Simulacrum",n,q,r,0)
$.$get$b().h(0,r)
$.yh=r
r=H.a(["Imitation"],s)
q=$.m
n=H.a([$.aw,$.aS],o)
H.a([],s)
r=new G.d("Imitation",n,q,r,0)
$.$get$b().h(0,r)
$.wf=r
r=H.a(["Placebo"],s)
q=$.m
n=H.a([$.aQ,$.aS],o)
H.a([],s)
r=new G.d("Placebo",n,q,r,0)
$.$get$b().h(0,r)
$.xl=r
r=H.a(["counterfeit"],s)
q=$.m
n=H.a([$.b3,$.aS],o)
H.a([],s)
r=new G.d("Counterfeit",n,q,r,0)
$.$get$b().h(0,r)
$.uY=r
r=H.a(["Surreal"],s)
q=$.A
n=H.a([$.ai,$.aI,$.aT],o)
H.a([],s)
r=new G.d("Surreal1",n,q,r,0)
$.$get$b().h(0,r)
$.yB=r
r=H.a(["Brainy"],s)
q=$.A
n=H.a([$.T,$.b6],o)
H.a([],s)
r=new G.d("Brainy",n,q,r,0)
$.$get$b().h(0,r)
$.us=r
r=H.a(["Incendiary"],s)
q=$.m
n=H.a([$.ax,$.bc],o)
H.a([],s)
r=new G.d("Incendiary",n,q,r,0)
$.$get$b().h(0,r)
$.wg=r
r=H.a(["C-4"],s)
q=$.o
n=H.a([$.bc,$.aH],o)
H.a([],s)
r=new G.d("C-4",n,q,r,0)
$.$get$b().h(0,r)
$.uz=r
r=H.a(["fae"],s)
q=$.m
n=H.a([$.a0,$.aU,$.bb],o)
H.a([],s)
r=new G.d("Fae",n,q,r,0)
$.$get$b().h(0,r)
$.vr=r
r=H.a(["Plutonium"],s)
q=$.o
n=H.a([$.x,$.bC],o)
H.a([],s)
r=new G.d("Plutonium",n,q,r,0)
$.$get$b().h(0,r)
$.xp=r
r=H.a(["Lithium"],s)
q=$.o
n=H.a([$.x,$.a4],o)
H.a([],s)
r=new G.d("Lithium",n,q,r,0)
$.$get$b().h(0,r)
$.wy=r
r=H.a(["Molten"],s)
q=$.o
n=H.a([$.x,$.ax],o)
H.a([],s)
r=new G.d("Molten",n,q,r,0)
$.$get$b().h(0,r)
$.wU=r
r=H.a(["Magma","Lava","Sulphuric"],s)
q=$.o
n=H.a([$.aB,$.ax],o)
H.a([],s)
r=new G.d("Magma",n,q,r,0)
$.$get$b().h(0,r)
$.wE=r
r=H.a(["Rusty"],s)
q=$.y
n=H.a([$.x,$.bt],o)
H.a([],s)
r=new G.d("Rusty",n,q,r,0)
$.$get$b().h(0,r)
$.xO=r
r=H.a(["Fonzie"],s)
q=$.m
n=H.a([$.aA,$.ai,$.af],o)
H.a([],s)
r=new G.d("Fonzie",n,q,r,0)
$.$get$b().h(0,r)
$.vJ=r
r=H.a(["Romcom"],s)
q=$.m
n=H.a([$.aD,$.aT],o)
H.a([],s)
r=new G.d("Romcom",n,q,r,0)
$.$get$b().h(0,r)
$.xK=r
r=H.a(["Alluring"],s)
q=$.m
n=H.a([$.aC,$.aU],o)
H.a([],s)
r=new G.d("Alluring",n,q,r,0)
$.$get$b().h(0,r)
$.ua=r
r=H.a(["Masquerade"],s)
q=$.m
n=H.a([$.aC,$.ah],o)
H.a([],s)
r=new G.d("Masquerade",n,q,r,0)
$.$get$b().h(0,r)
$.wI=r
r=H.a(["Stoneskin","Petrified"],s)
q=$.m
n=H.a([$.aB,$.b6],o)
H.a([],s)
r=new G.d("Stoneskin",n,q,r,0)
$.$get$b().h(0,r)
$.yy=r
r=H.a(["Psionic"],s)
q=$.m
n=H.a([$.a0,$.T],o)
H.a([],s)
r=new G.d("Psionic",n,q,r,0)
$.$get$b().h(0,r)
$.xC=r
r=H.a(["Dwarven"],s)
q=$.m
n=H.a([$.a0,$.aB],o)
H.a([],s)
r=new G.d("Dwarven",n,q,r,0)
$.$get$b().h(0,r)
$.vi=r
r=H.a(["Elemental","Animated"],s)
q=$.o
n=H.a([$.a0,$.ay],o)
H.a([],s)
r=new G.d("Elemental",n,q,r,0)
$.$get$b().h(0,r)
$.vn=r
r=H.a(["Gourmet"],s)
q=$.A
n=H.a([$.aw,$.af],o)
H.a([],s)
r=new G.d("Gourmet",n,q,r,0)
$.$get$b().h(0,r)
$.vW=r
r=H.a(["Stained Glass"],s)
q=$.o
n=H.a([$.aX,$.aC,$.b3],o)
H.a([],s)
r=new G.d("Stained Glass",n,q,r,0)
$.$get$b().h(0,r)
$.yv=r
r=H.a(["Gauze"],s)
q=$.m
n=H.a([$.aQ,$.M],o)
H.a([],s)
r=new G.d("Gauze",n,q,r,0)
$.$get$b().h(0,r)
$.vP=r
r=H.a(["Locked"],s)
q=$.y
n=H.a([$.b2,$.bf],o)
H.a([],s)
r=new G.d("Locked",n,q,r,0)
$.$get$b().h(0,r)
$.wA=r
r=H.a(["Etched"],s)
q=$.m
n=H.a([$.aB,$.F],o)
H.a([],s)
r=new G.d("Etched",n,q,r,0)
$.$get$b().h(0,r)
$.vq=r
r=H.a(["Papyrus"],s)
q=$.o
n=H.a([$.F,$.aR],o)
H.a([],s)
r=new G.d("Papyrus",n,q,r,0)
$.$get$b().h(0,r)
$.xd=r
r=H.a(["film"],s)
q=$.m
n=H.a([$.F,$.aH],o)
H.a([],s)
r=new G.d("Film",n,q,r,0)
$.$get$b().h(0,r)
$.vz=r
r=H.a(["Saucey"],s)
q=$.o
n=H.a([$.bb,$.bf,$.bu],o)
H.a([],s)
r=new G.d("Saucey",n,q,r,0)
$.$get$b().h(0,r)
$.xW=r
r=H.a(["Lottery"],s)
q=$.m
n=H.a([$.F,$.bz],o)
H.a([],s)
r=new G.d("Lottery",n,q,r,0)
$.$get$b().h(0,r)
$.wC=r
r=H.a(["Blindfolded"],s)
q=$.m
n=H.a([$.ah,$.M],o)
H.a([],s)
r=new G.d("Blindfolded",n,q,r,0)
$.$get$b().h(0,r)
$.pV=r
r=H.a(["Possessed"],s)
q=$.y
n=H.a([$.by,$.b6],o)
H.a([],s)
r=new G.d("Possessed",n,q,r,0)
$.$get$b().h(0,r)
$.xy=r
r=H.a(["Infernal"],s)
q=$.A
n=H.a([$.by,$.ax],o)
H.a([],s)
r=new G.d("Infernal",n,q,r,0)
$.$get$b().h(0,r)
$.wh=r
r=H.a(["Geppetto's","Pinocchio"],s)
q=$.m
n=H.a([$.U,$.b7,$.o3,$.ay],o)
H.a([],s)
r=new G.d("Geppetto",n,q,r,0)
$.$get$b().h(0,r)
$.vQ=r
r=H.a(["Abominable"],s)
q=$.A
n=H.a([$.b6,$.bb],o)
H.a([],s)
r=new G.d("Abominable",n,q,r,0)
$.$get$b().h(0,r)
$.u8=r
r=H.a(["Ashen"],s)
q=$.m
n=H.a([$.aD,$.aF],o)
H.a([],s)
r=new G.d("Ashen",n,q,r,0)
$.$get$b().h(0,r)
$.uf=r
r=H.a(["Pale"],s)
q=$.m
n=H.a([$.aD,$.be],o)
H.a([],s)
r=new G.d("Pale",n,q,r,0)
$.$get$b().h(0,r)
$.xa=r
r=H.a(["Pitch"],s)
q=$.m
n=H.a([$.aD,$.bf],o)
H.a([],s)
r=new G.d("Pitch",n,q,r,0)
$.$get$b().h(0,r)
$.xk=r
r=H.a(["Lit"],s)
q=$.A
n=H.a([$.ai,$.ax],o)
H.a([],s)
r=new G.d("Lit",n,q,r,0)
$.$get$b().h(0,r)
$.wx=r
r=H.a(["Hypnotizing"],s)
q=$.m
n=H.a([$.a0,$.be],o)
H.a([],s)
r=new G.d("Hypnotizing",n,q,r,0)
$.$get$b().h(0,r)
$.w8=r
r=H.a(["Tranquilizing"],s)
q=$.m
n=H.a([$.be,$.b2],o)
H.a([],s)
r=new G.d("Tranquilizing",n,q,r,0)
$.$get$b().h(0,r)
$.yP=r
r=H.a([],s)
q=$.m
n=H.a([$.be,$.bf],o)
H.a([],s)
r=new G.d("",n,q,r,0)
$.$get$b().h(0,r)
$.uC=r
r=H.a(["Ghost Rider's"],s)
q=$.a8
n=H.a([$.eF,$.ax,$.by],o)
H.a([],s)
r=new G.d("Ghost Rider",n,q,r,0)
$.$get$b().h(0,r)
$.vR=r
r=H.a(["Logical"],s)
q=$.A
n=H.a([$.T,$.ba],o)
H.a([],s)
r=new G.d("Logical",n,q,r,0)
$.$get$b().h(0,r)
$.wB=r
r=H.a(["Duelist's"],s)
q=$.a8
n=H.a([$.aL,$.af],o)
H.a([],s)
r=new G.d("Duelist's",n,q,r,0)
$.$get$b().h(0,r)
$.vf=r
r=H.a(["Silenced"],s)
q=$.y
n=H.a([$.aL,$.ah],o)
H.a([],s)
r=new G.d("Silenced",n,q,r,0)
$.$get$b().h(0,r)
$.ye=r
r=H.a(["Deudly"],s)
q=$.y
n=H.a([$.aL,$.bt],o)
H.a([],s)
r=new G.d("Deudly",n,q,r,0)
$.$get$b().h(0,r)
$.v3=r
r=H.a(["Screaming"],s)
q=$.y
n=H.a([$.aV,$.aY],o)
H.a([],s)
r=new G.d("Screaming",n,q,r,0)
$.$get$b().h(0,r)
$.y0=r
r=H.a(["Cacophonous"],s)
q=$.A
n=H.a([$.bu,$.a7],o)
H.a([],s)
r=new G.d("Cacophonous",n,q,r,0)
$.$get$b().h(0,r)
$.uA=r
r=H.a(["Sublime"],s)
q=$.A
n=H.a([$.bu,$.aC],o)
H.a([],s)
r=new G.d("Sublime",n,q,r,0)
$.$get$b().h(0,r)
$.yA=r
r=H.a(["Masterwork"],s)
q=$.o
n=H.a([$.b7,$.b3],o)
H.a([],s)
r=new G.d("Masterwork",n,q,r,0)
$.$get$b().h(0,r)
$.wK=r
r=H.a(["BroodFester"],s)
q=$.m
n=H.a([$.ay,$.aY,$.bb,$.a0],o)
H.a([],s)
r=new G.d("BroodFester",n,q,r,0)
$.$get$b().h(0,r)
$.uu=r
r=H.a(["[REDACTED]"],s)
q=$.m
n=H.a([$.bb,$.ah],o)
H.a([],s)
r=new G.d("[REDACTED]",n,q,r,0)
$.$get$b().h(0,r)
$.xI=r
r=H.a(["Pop Rocks"],s)
q=$.m
n=H.a([$.aw,$.bc],o)
H.a([],s)
r=new G.d("Pop Rocks",n,q,r,0)
$.$get$b().h(0,r)
$.xu=r
r=H.a(["Disguised"],s)
q=$.y
n=H.a([$.ah,$.aS],o)
H.a([],s)
r=new G.d("Disguised",n,q,r,0)
$.$get$b().h(0,r)
$.va=r
r=H.a(["Haunted"],s)
q=$.y
n=H.a([$.aI,$.by],o)
H.a([],s)
r=new G.d("Haunted",n,q,r,0)
$.$get$b().h(0,r)
$.w2=r
r=H.a(["Cognitohazardous"],s)
q=$.y
n=H.a([$.bb,$.T],o)
H.a([],s)
r=new G.d("Cognitohazardous",n,q,r,0)
$.$get$b().h(0,r)
$.uS=r
r=H.a(["Staticy"],s)
q=$.y
n=H.a([$.aI,$.a4],o)
H.a([],s)
r=new G.d("Staticy",n,q,r,0)
$.$get$b().h(0,r)
$.yw=r
r=H.a(["Jadite"],s)
q=$.m
n=H.a([$.aX,$.bC],o)
H.a([],s)
r=new G.d("Jadite",n,q,r,0)
$.$get$b().h(0,r)
$.wl=r
r=H.a(["Tickling"],s)
q=$.m
n=H.a([$.aT,$.aI],o)
H.a([],s)
r=new G.d("Tickling",n,q,r,0)
$.$get$b().h(0,r)
$.yL=r
r=H.a(["Composite"],s)
q=$.m
n=H.a([$.x,$.br],o)
H.a([],s)
r=new G.d("Composite",n,q,r,0)
$.$get$b().h(0,r)
$.uU=r
r=H.a(["High-Powered"],s)
q=$.y
n=H.a([$.bc,$.aL],o)
H.a([],s)
r=new G.d("High-Powered",n,q,r,0)
$.$get$b().h(0,r)
$.w3=r
r=H.a(["Concussive"],s)
q=$.m
n=H.a([$.bc,$.aa],o)
H.a([],s)
r=new G.d("Concussive",n,q,r,0)
$.$get$b().h(0,r)
$.uV=r
r=H.a(["Down"],s)
q=$.o
n=H.a([$.b1,$.bg],o)
H.a([],s)
r=new G.d("Down",n,q,r,0)
$.$get$b().h(0,r)
$.vc=r
r=H.a(["Prickly"],s)
q=$.o
n=H.a([$.aI,$.aO],o)
H.a([],s)
r=new G.d("Prickly",n,q,r,0)
$.$get$b().h(0,r)
$.xB=r
r=H.a(["Deep-Web","Dark-Net"],s)
q=$.m
n=H.a([$.aI,$.ah,$.a4],o)
H.a([],s)
r=new G.d("Deep-Web",n,q,r,0)
$.$get$b().h(0,r)
$.v6=r
r=H.a(["Jagged","Sawtooth"],s)
q=$.o
n=H.a([$.aO,$.aA],o)
H.a([],s)
r=new G.d("Jagged",n,q,r,0)
$.$get$b().h(0,r)
$.wm=r
r=H.a(["Nanofiber"],s)
q=$.o
n=H.a([$.M,$.T],o)
H.a([],s)
r=new G.d("Nanofiber",n,q,r,0)
$.$get$b().h(0,r)
$.x0=r
r=H.a(["Clanging"],s)
q=$.m
n=H.a([$.x,$.aV],o)
H.a([],s)
r=new G.d("Clanging",n,q,r,0)
$.$get$b().h(0,r)
$.uO=r
r=H.a(["Silver"],s)
q=$.o
n=H.a([$.x,$.af],o)
H.a([],s)
r=new G.d("Silver",n,q,r,0)
$.$get$b().h(0,r)
$.yg=r
r=H.a(["Withered"],s)
q=$.y
n=H.a([$.aF,$.aR],o)
H.a([],s)
r=new G.d("Withered",n,q,r,0)
$.$get$b().h(0,r)
$.z_=r
r=H.a(["Shattered"],s)
q=$.y
n=H.a([$.aX,$.bt],o)
H.a([],s)
r=new G.d("Shattered",n,q,r,0)
$.$get$b().h(0,r)
$.y6=r
r=H.a(["Miner's"],s)
q=$.a8
n=H.a([$.aB,$.x],o)
H.a([],s)
r=new G.d("Miner's",n,q,r,0)
$.$get$b().h(0,r)
$.wS=r
r=H.a(["Singing"],s)
q=$.m
n=H.a([$.a7,$.ay],o)
H.a([],s)
r=new G.d("Singing",n,q,r,0)
$.$get$b().h(0,r)
$.yd=r
r=H.a(["Mitochondrial"],s)
q=$.m
n=H.a([$.b6,$.a4],o)
H.a([],s)
r=new G.d("Mitochondrial",n,q,r,0)
$.$get$b().h(0,r)
$.wT=r
r=H.a(["Blackout","EMP"],s)
q=$.m
n=H.a([$.ah,$.a4],o)
H.a([],s)
r=new G.d("Blackout",n,q,r,0)
$.$get$b().h(0,r)
$.un=r
r=H.a(["Asbestos"],s)
q=$.o
n=H.a([$.aB,$.bs],o)
H.a([],s)
r=new G.d("Asbestos",n,q,r,0)
$.$get$b().h(0,r)
$.u9=r
r=H.a(["Mercurial"],s)
q=$.o
n=H.a([$.bs,$.x],o)
H.a([],s)
r=new G.d("Mercurial",n,q,r,0)
$.$get$b().h(0,r)
$.wL=r
r=H.a(["Bulletproof"],s)
q=$.o
n=H.a([$.M,$.aa],o)
H.a([],s)
r=new G.d("Bulletproof",n,q,r,0)
$.$get$b().h(0,r)
$.ux=r
r=H.a(["Cotton"],s)
q=$.o
n=H.a([$.aR,$.M],o)
H.a([],s)
r=new G.d("Cotton",n,q,r,0)
$.$get$b().h(0,r)
$.uW=r
r=H.a(["Blinding","Flashbang","Solar Flare"],s)
q=$.m
n=H.a([$.bf,$.aU],o)
H.a([],s)
r=new G.d("Blinding",n,q,r,0)
$.$get$b().h(0,r)
$.uo=r
r=H.a(["Brilliant"],s)
q=$.A
n=H.a([$.aU,$.T],o)
H.a([],s)
r=new G.d("Brilliant",n,q,r,0)
$.$get$b().h(0,r)
$.ut=r
r=H.a(["Offensive"],s)
q=$.A
n=H.a([$.bf,$.T],o)
H.a([],s)
r=new G.d("Offensive",n,q,r,0)
$.$get$b().h(0,r)
$.x6=r
r=H.a(["Poached"],s)
q=$.y
n=H.a([$.b6,$.b3],o)
H.a([],s)
r=new G.d("Poached",n,q,r,0)
$.$get$b().h(0,r)
$.xq=r
r=H.a(["Tapestry"],s)
q=$.o
n=H.a([$.M,$.aC],o)
H.a([],s)
r=new G.d("Tapestry",n,q,r,0)
$.$get$b().h(0,r)
$.yD=r
r=H.a(["Itchy"],s)
q=$.A
n=H.a([$.M,$.aI],o)
H.a([],s)
r=new G.d("Itchy",n,q,r,0)
$.$get$b().h(0,r)
$.wj=r
r=H.a(["Wishbone"],s)
q=$.o
n=H.a([$.bz,$.b0],o)
H.a([],s)
r=new G.d("Wishbone",n,q,r,0)
$.$get$b().h(0,r)
$.yZ=r
r=H.a(["Rattling"],s)
q=$.y
n=H.a([$.aV,$.b0],o)
H.a([],s)
r=new G.d("Rattling",n,q,r,0)
$.$get$b().h(0,r)
$.xG=r
r=H.a(["Cranial"],s)
q=$.o
n=H.a([$.T,$.b0],o)
H.a([],s)
r=new G.d("Cranial",n,q,r,0)
$.$get$b().h(0,r)
$.v_=r
r=H.a(["Humerus"],s)
q=$.o
n=H.a([$.aT,$.b0],o)
H.a([],s)
r=new G.d("Humerus",n,q,r,0)
$.$get$b().h(0,r)
$.w6=r
r=H.a(["Massage"],s)
q=$.m
n=H.a([$.aQ,$.b1],o)
H.a([],s)
r=new G.d("Massage",n,q,r,0)
$.$get$b().h(0,r)
$.wJ=r
r=H.a(["Pestersome","Irksome"],s)
q=$.A
n=H.a([$.aV,$.bf],o)
H.a([],s)
r=new G.d("Pestersome",n,q,r,0)
$.$get$b().h(0,r)
$.xf=r
r=H.a(["Shockwave"],s)
q=$.m
n=H.a([$.aV,$.bc],o)
H.a([],s)
r=new G.d("Shockwave",n,q,r,0)
$.$get$b().h(0,r)
$.y9=r
r=H.a(["Antivenom"],s)
q=$.m
n=H.a([$.bs,$.aQ],o)
H.a([],s)
r=new G.d("Antivenom",n,q,r,0)
$.$get$b().h(0,r)
$.uc=r
r=H.a(["Will O Wisp","Demonic"],s)
q=$.o
n=H.a([$.ax,$.a0],o)
H.a([],s)
r=new G.d("Will O Wisp",n,q,r,0)
$.$get$b().h(0,r)
$.yW=r
r=H.a(["Fiberglass"],s)
q=$.o
n=H.a([$.M,$.aX],o)
H.a([],s)
r=new G.d("Fiberglass",n,q,r,0)
$.$get$b().h(0,r)
$.vx=r
r=H.a(["Skull"],s)
q=$.o
n=H.a([$.b0,$.aY],o)
H.a([],s)
r=new G.d("Skull",n,q,r,0)
$.$get$b().h(0,r)
$.yk=r
r=H.a(["Enchanted"],s)
q=$.y
n=H.a([$.a0,$.bz],o)
H.a([],s)
r=new G.d("Enchanted",n,q,r,0)
$.$get$b().h(0,r)
$.vp=r
r=H.a(["Berserker's"],s)
q=$.a8
n=H.a([$.a0,$.bf],o)
H.a([],s)
r=new G.d("Berserker's",n,q,r,0)
$.$get$b().h(0,r)
$.um=r
r=H.a(["Clerical"],s)
q=$.a8
n=H.a([$.a0,$.aQ],o)
H.a([],s)
r=new G.d("Clerical",n,q,r,0)
$.$get$b().h(0,r)
$.uP=r
r=H.a(["Cauterizing"],s)
q=$.m
n=H.a([$.aQ,$.ax],o)
H.a([],s)
r=new G.d("Cauterizing",n,q,r,0)
$.$get$b().h(0,r)
$.uG=r
r=H.a(["X-Ray"],s)
q=$.m
n=H.a([$.bC,$.aU],o)
H.a([],s)
r=new G.d("X-Ray",n,q,r,0)
$.$get$b().h(0,r)
$.z2=r
r=H.a(["Clever"],s)
q=$.A
n=H.a([$.T,$.bz],o)
H.a([],s)
r=new G.d("Clever",n,q,r,0)
$.$get$b().h(0,r)
$.uQ=r
r=H.a(["Fireplace"],s)
q=$.m
n=H.a([$.b1,$.ax],o)
H.a([],s)
r=new G.d("Fireplace",n,q,r,0)
$.$get$b().h(0,r)
$.vA=r
r=H.a(["Crackling"],s)
q=$.y
n=H.a([$.aV,$.ax],o)
H.a([],s)
r=new G.d("Crackling",n,q,r,0)
$.$get$b().h(0,r)
$.uZ=r
r=H.a(["Thumping"],s)
q=$.y
n=H.a([$.aV,$.bH],o)
H.a([],s)
r=new G.d("Thumping",n,q,r,0)
$.$get$b().h(0,r)
$.yJ=r
r=H.a(["Shrieking","Banshee"],s)
q=$.y
n=H.a([$.by,$.aV],o)
H.a([],s)
r=new G.d("Banshee",n,q,r,0)
$.$get$b().h(0,r)
$.yb=r
r=H.a(["Surreal"],s)
q=$.A
n=H.a([$.aT,$.bb],o)
H.a([],s)
r=new G.d("Surreal2",n,q,r,0)
$.$get$b().h(0,r)
$.yC=r
r=H.a(["Aloe","Willowbark"],s)
q=$.m
n=H.a([$.aQ,$.aR],o)
H.a([],s)
r=new G.d("Aloe",n,q,r,0)
$.$get$b().h(0,r)
$.ub=r
r=H.a(["Rose"],s)
q=$.m
n=H.a([$.aD,$.aR],o)
H.a([],s)
r=new G.d("Rose",n,q,r,0)
$.$get$b().h(0,r)
$.xM=r
r=H.a(["Knock Knock"],s)
q=$.m
n=H.a([$.aT,$.aa],o)
H.a([],s)
r=new G.d("Knock Knock",n,q,r,0)
$.$get$b().h(0,r)
$.wr=r
r=H.a(["Lifesteal"],s)
q=$.m
n=H.a([$.a0,$.bs],o)
H.a([],s)
r=new G.d("Lifesteal",n,q,r,0)
$.$get$b().h(0,r)
$.wu=r
r=H.a(["Tragic"],s)
q=$.m
n=H.a([$.aC,$.aF],o)
H.a([],s)
r=new G.d("Tragic",n,q,r,0)
$.$get$b().h(0,r)
$.yO=r
r=H.a(["Slapstick"],s)
q=$.m
n=H.a([$.aA,$.aT],o)
H.a([],s)
r=new G.d("Slapstick",n,q,r,0)
$.$get$b().h(0,r)
$.yl=r
r=H.a(["Gross Out"],s)
q=$.m
n=H.a([$.bu,$.aT],o)
H.a([],s)
r=new G.d("Gross Out",n,q,r,0)
$.$get$b().h(0,r)
$.vY=r
r=H.a(["Flowery"],s)
q=$.o
n=H.a([$.aC,$.aR],o)
H.a([],s)
r=new G.d("Flowery",n,q,r,0)
$.$get$b().h(0,r)
$.vG=r
r=H.a(["Poison Ivy"],s)
q=$.o
n=H.a([$.bs,$.aR],o)
H.a([],s)
r=new G.d("Poison Ivy",n,q,r,0)
$.$get$b().h(0,r)
$.xs=r
r=H.a(["Winged","Pegasus","Angelic"],s)
q=$.y
n=H.a([$.a0,$.bg],o)
H.a([],s)
r=new G.d("Winged",n,q,r,0)
$.$get$b().h(0,r)
$.yX=r
r=H.a(["Forbidden Fruit"],s)
q=$.m
n=H.a([$.aR,$.aw,$.aF],o)
H.a([],s)
r=new G.d("Forbidden Fruit",n,q,r,0)
$.$get$b().h(0,r)
$.vK=r
r=H.a(["Lawful"],s)
q=$.A
n=H.a([$.b2,$.ay],o)
H.a([],s)
r=new G.d("Lawful",n,q,r,0)
$.$get$b().h(0,r)
$.ws=r
r=H.a(["Chaotic"],s)
q=$.A
n=H.a([$.bf,$.ay],o)
H.a([],s)
r=new G.d("Chaotic",n,q,r,0)
$.$get$b().h(0,r)
$.uK=r
r=H.a(["Hypothermic"],s)
q=$.y
n=H.a([$.aF,$.ba],o)
H.a([],s)
r=new G.d("Hypothermic",n,q,r,0)
$.$get$b().h(0,r)
$.w9=r
r=H.a(["Hyperthermic"],s)
q=$.y
n=H.a([$.aF,$.ax],o)
H.a([],s)
r=new G.d("Hyperthermic",n,q,r,0)
$.$get$b().h(0,r)
$.w7=r
r=H.a(["Shackled"],s)
q=$.y
n=H.a([$.b2,$.bH],o)
H.a([],s)
r=new G.d("Shackled",n,q,r,0)
$.$get$b().h(0,r)
$.y2=r
r=H.a(["Poetic"],s)
q=$.A
n=H.a([$.T,$.aD],o)
H.a([],s)
r=new G.d("Poetic",n,q,r,0)
$.$get$b().h(0,r)
$.xr=r
r=H.a(["Holographic"],s)
q=$.o
n=H.a([$.aU,$.T,$.aX,$.a4],o)
H.a([],s)
r=new G.d("Holographic",n,q,r,0)
$.$get$b().h(0,r)
$.w4=r
r=H.a(["Casket","Coffin"],s)
q=$.o
n=H.a([$.U,$.aF],o)
H.a([],s)
r=new G.d("Casket",n,q,r,0)
$.$get$b().h(0,r)
$.uF=r
r=H.a(["Spectral"],s)
q=$.o
n=H.a([$.by,$.a0],o)
H.a([],s)
r=new G.d("Spectral",n,q,r,0)
$.$get$b().h(0,r)
$.yr=r
r=H.a(["Phoenix"],s)
q=$.o
n=H.a([$.ax,$.bg],o)
H.a([],s)
r=new G.d("Phoenix",n,q,r,0)
$.$get$b().h(0,r)
$.xg=r
r=H.a(["Tattered"],s)
q=$.y
n=H.a([$.M,$.aF],o)
H.a([],s)
r=new G.d("Tattered",n,q,r,0)
$.$get$b().h(0,r)
$.yG=r
r=H.a(["Woodwind","Reed"],s)
q=$.m
n=H.a([$.a7,$.U],o)
H.a([],s)
r=new G.d("Woodwind",n,q,r,0)
$.$get$b().h(0,r)
$.z1=r
r=H.a(["Bone Hurting"],s)
q=$.m
n=H.a([$.aI,$.b0],o)
H.a([],s)
r=new G.d("Bone Hurting",n,q,r,0)
$.$get$b().h(0,r)
$.uq=r
r=H.a(["Bone Healing:"],s)
q=$.m
n=H.a([$.aQ,$.b0],o)
H.a([],s)
r=new G.d("Bone Healing:",n,q,r,0)
$.$get$b().h(0,r)
$.up=r
r=H.a(["Calcium"],s)
q=$.o
n=H.a([$.b0,$.aQ,$.aw],o)
H.a([],s)
r=new G.d("Calcium",n,q,r,0)
$.$get$b().h(0,r)
$.uB=r
r=H.a(["Fleece"],s)
q=$.o
n=H.a([$.M,$.ax],o)
H.a([],s)
r=new G.d("Fleece",n,q,r,0)
$.$get$b().h(0,r)
$.vD=r
r=H.a(["Potted"],s)
q=$.o
n=H.a([$.br,$.aR],o)
H.a([],s)
r=new G.d("Potted",n,q,r,0)
$.$get$b().h(0,r)
$.xA=r
r=H.a(["Canned","Tinned","Potassium"],s)
q=$.o
n=H.a([$.x,$.aw],o)
H.a([],s)
r=new G.d("Canned",n,q,r,0)
$.$get$b().h(0,r)
$.uD=r
r=H.a(["Diseased"],s)
q=$.y
n=H.a([$.aF,$.b6],o)
H.a([],s)
r=new G.d("Diseased",n,q,r,0)
$.$get$b().h(0,r)
$.v7=r
r=H.a(["Porcupine"],s)
q=$.o
n=H.a([$.aO,$.bM],o)
H.a([],s)
r=new G.d("Porcupine",n,q,r,0)
$.$get$b().h(0,r)
$.xw=r
r=H.a(["Fanged"],s)
q=$.y
n=H.a([$.b0,$.aO],o)
H.a([],s)
r=new G.d("Fanged",n,q,r,0)
$.$get$b().h(0,r)
$.vt=r
r=H.a(["Basalt"],s)
q=$.o
n=H.a([$.aB,$.ah],o)
H.a([],s)
r=new G.d("Basalt",n,q,r,0)
$.$get$b().h(0,r)
$.uj=r
r=H.a(["Obsidian"],s)
q=$.o
n=H.a([$.aX,$.ah],o)
H.a([],s)
r=new G.d("Obsidian",n,q,r,0)
$.$get$b().h(0,r)
$.x5=r
r=H.a(["Fenestrated"],s)
q=$.o
n=H.a([$.aX,$.U],o)
H.a([],s)
r=new G.d("Fenestrated",n,q,r,0)
$.$get$b().h(0,r)
$.vv=r
r=H.a(["Plexiglass"],s)
q=$.o
n=H.a([$.aX,$.aH],o)
H.a([],s)
r=new G.d("Plexiglass",n,q,r,0)
$.$get$b().h(0,r)
$.xo=r
r=H.a(["Ceramic Wrap"],s)
q=$.m
n=H.a([$.br,$.F],o)
H.a([],s)
r=new G.d("Ceramic Wrap",n,q,r,0)
$.$get$b().h(0,r)
$.uJ=r
r=H.a(["Fungal"],s)
q=$.o
n=H.a([$.aR,$.bu],o)
H.a([],s)
r=new G.d("Fungal",n,q,r,0)
$.$get$b().h(0,r)
$.vO=r
r=H.a(["Thorny"],s)
q=$.y
n=H.a([$.aR,$.aO],o)
H.a([],s)
r=new G.d("Thorny",n,q,r,0)
$.$get$b().h(0,r)
$.yI=r
r=H.a(["Bulbed"],s)
q=$.y
n=H.a([$.aR,$.aa],o)
H.a([],s)
r=new G.d("Bulbed",n,q,r,0)
$.$get$b().h(0,r)
$.uw=r
r=H.a(["Glass Cannon"],s)
q=$.m
n=H.a([$.aX,$.aL],o)
H.a([],s)
r=new G.d("Glass Cannon",n,q,r,0)
$.$get$b().h(0,r)
$.vU=r
r=H.a(["Caoutchouc"],s)
q=$.m
n=H.a([$.aR,$.bI],o)
H.a([],s)
r=new G.d("Caoutchouc",n,q,r,0)
$.$get$b().h(0,r)
$.xm=r
r=H.a(["Cellulose"],s)
q=$.o
n=H.a([$.aR,$.aH],o)
H.a([],s)
r=new G.d("Cellulose",n,q,r,0)
$.$get$b().h(0,r)
$.uI=r
r=H.a(["Horrorcore"],s)
q=$.m
n=H.a([$.a7,$.aY],o)
H.a([],s)
r=new G.d("Horrorcore",n,q,r,0)
$.$get$b().h(0,r)
$.w5=r
r=H.a(["Nightcore"],s)
q=$.m
n=H.a([$.bb,$.a7],o)
H.a([],s)
r=new G.d("Nightcore",n,q,r,0)
$.$get$b().h(0,r)
$.x2=r
r=H.a(["Crazy Bus"],s)
q=$.m
n=H.a([$.bb,$.a4,$.a7],o)
H.a([],s)
r=new G.d("Crazy Bus",n,q,r,0)
$.$get$b().h(0,r)
$.v0=r
r=H.a(["Burdock"],s)
q=$.o
n=H.a([$.aR,$.bM],o)
H.a([],s)
r=new G.d("Burdock",n,q,r,0)
$.$get$b().h(0,r)
$.uy=r
r=H.a(["Necrotic"],s)
q=$.y
n=H.a([$.b0,$.by],o)
H.a([],s)
$.$get$b().h(0,new G.d("Necrotic",n,q,r,0))
r=H.a(["Stem"],s)
q=$.o
n=H.a([$.b0,$.aR],o)
H.a([],s)
$.$get$b().h(0,new G.d("Stem",n,q,r,0))
r=H.a(["DryBone"],s)
q=$.y
n=H.a([$.b0,$.aF],o)
H.a([],s)
$.$get$b().h(0,new G.d("DryBone",n,q,r,0))
r=H.a(["XyloBone"],s)
q=$.m
n=H.a([$.b0,$.a7],o)
H.a([],s)
$.$get$b().h(0,new G.d("XyloBone",n,q,r,0))
r=H.a(["Ribcage"],s)
q=$.o
n=H.a([$.b0,$.b2],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ribcage",n,q,r,0))
r=H.a(["BoneZone"],s)
q=$.m
n=H.a([$.b0,$.ai],o)
H.a([],s)
$.$get$b().h(0,new G.d("BoneZone",n,q,r,0))
r=H.a(["Creaky"],s)
q=$.A
n=H.a([$.U,$.aV],o)
H.a([],s)
$.$get$b().h(0,new G.d("Creaky",n,q,r,0))
r=H.a(["Maple"],s)
q=$.o
n=H.a([$.U,$.aw],o)
H.a([],s)
$.$get$b().h(0,new G.d("Maple",n,q,r,0))
r=H.a(["Mahagony"],s)
q=$.o
n=H.a([$.U,$.aC],o)
H.a([],s)
$.$get$b().h(0,new G.d("Mahagony",n,q,r,0))
r=H.a(["Fenced"],s)
q=$.y
n=H.a([$.U,$.b2],o)
H.a([],s)
$.$get$b().h(0,new G.d("Fenced",n,q,r,0))
r=H.a(["Bocote"],s)
q=$.o
n=H.a([$.U,$.b3],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bocote",n,q,r,0))
r=H.a(["Incense"],s)
q=$.o
n=H.a([$.U,$.be],o)
H.a([],s)
$.$get$b().h(0,new G.d("Incense",n,q,r,0))
r=H.a(["Ebony"],s)
q=$.m
n=H.a([$.U,$.ah],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ebony",n,q,r,0))
r=H.a(["Birch"],s)
q=$.o
n=H.a([$.U,$.aU],o)
H.a([],s)
$.$get$b().h(0,new G.d("Birch",n,q,r,0))
r=H.a(["Knock-on-Wood"],s)
q=$.m
n=H.a([$.U,$.bz],o)
H.a([],s)
$.$get$b().h(0,new G.d("Knock-on-Wood",n,q,r,0))
r=H.a(["Firewood"],s)
q=$.m
n=H.a([$.U,$.ax],o)
H.a([],s)
$.$get$b().h(0,new G.d("Firewood",n,q,r,0))
r=H.a(["BlackForest"],s)
q=$.a8
n=H.a([$.U,$.aY],o)
H.a([],s)
$.$get$b().h(0,new G.d("BlackForest",n,q,r,0))
r=H.a(["Tree"],s)
q=$.o
n=H.a([$.U,$.aR],o)
H.a([],s)
$.$get$b().h(0,new G.d("Tree",n,q,r,0))
r=H.a(["Ebonwood"],s)
q=$.o
n=H.a([$.U,$.bb],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ebonwood",n,q,r,0))
r=H.a(["Bark"],s)
q=$.o
n=H.a([$.U,$.b6],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bark",n,q,r,0))
r=H.a(["Caveman's","Cavewoman's"],s)
q=$.m
n=H.a([$.U,$.aB],o)
H.a([],s)
$.$get$b().h(0,new G.d("Caveman's",n,q,r,0))
r=H.a(["3D Printed"],s)
q=$.o
n=H.a([$.aH,$.T],o)
H.a([],s)
$.$get$b().h(0,new G.d("3D Printed",n,q,r,0))
r=H.a(["Thesis"],s)
q=$.m
n=H.a([$.F,$.T],o)
H.a([],s)
$.$get$b().h(0,new G.d("Thesis",n,q,r,0))
r=H.a(["Graphene"],s)
q=$.o
n=H.a([$.F,$.a4],o)
H.a([],s)
$.$get$b().h(0,new G.d("Graphene",n,q,r,0))
r=H.a(["Prophecy"],s)
q=$.m
n=H.a([$.F,$.aF],o)
H.a([],s)
$.$get$b().h(0,new G.d("Prophecy",n,q,r,0))
r=H.a(["Bedsheet"],s)
q=$.m
n=H.a([$.M,$.by],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bedsheet",n,q,r,0))
r=H.a(["Gemstone","Ruby"],s)
q=$.o
n=H.a([$.aB,$.aD],o)
H.a([],s)
$.$get$b().h(0,new G.d("Gemstone",n,q,r,0))
r=H.a(["Pet Rock"],s)
q=$.m
n=H.a([$.aB,$.ay],o)
H.a([],s)
$.$get$b().h(0,new G.d("Pet Rock",n,q,r,0))
r=H.a(["Sand"],s)
q=$.o
n=H.a([$.aB,$.b1],o)
H.a([],s)
$.$get$b().h(0,new G.d("Sand",n,q,r,0))
r=H.a(["Geode"],s)
q=$.o
n=H.a([$.aB,$.aC],o)
H.a([],s)
$.$get$b().h(0,new G.d("Geode",n,q,r,0))
r=H.a(["Silicon"],s)
q=$.o
n=H.a([$.aB,$.a4],o)
H.a([],s)
$.$get$b().h(0,new G.d("Silicon",n,q,r,0))
r=H.a(["Cryolite","Iceburg"],s)
q=$.o
n=H.a([$.aB,$.ba],o)
H.a([],s)
$.$get$b().h(0,new G.d("Cryolite",n,q,r,0))
r=H.a(["Meteor"],s)
q=$.o
n=H.a([$.aB,$.bc],o)
H.a([],s)
$.$get$b().h(0,new G.d("Meteor",n,q,r,0))
r=H.a(["Carbon"],s)
q=$.o
n=H.a([$.aB,$.aR],o)
H.a([],s)
$.$get$b().h(0,new G.d("Carbon",n,q,r,0))
r=H.a(["Mossy"],s)
q=$.y
n=H.a([$.aB,$.bM],o)
H.a([],s)
$.$get$b().h(0,new G.d("Mossy",n,q,r,0))
r=H.a(["Lensed"],s)
q=$.y
n=H.a([$.T,$.aX],o)
H.a([],s)
$.$get$b().h(0,new G.d("Lensed",n,q,r,0))
r=H.a(["Hide"],s)
q=$.y
n=H.a([$.M,$.b6],o)
H.a([],s)
$.$get$b().h(0,new G.d("Hide",n,q,r,0))
r=H.a(["FeatherBoa"],s)
q=$.m
n=H.a([$.M,$.bg],o)
H.a([],s)
$.$get$b().h(0,new G.d("FeatherBoa",n,q,r,0))
r=H.a(["Tacky"],s)
q=$.A
n=H.a([$.M,$.bu],o)
H.a([],s)
$.$get$b().h(0,new G.d("Tacky",n,q,r,0))
r=H.a(["Whip"],s)
q=$.m
n=H.a([$.M,$.aA],o)
H.a([],s)
$.$get$b().h(0,new G.d("Whip",n,q,r,0))
r=H.a(["Costumed"],s)
q=$.m
n=H.a([$.M,$.aY],o)
H.a([],s)
$.$get$b().h(0,new G.d("Costumed",n,q,r,0))
r=H.a(["Punk"],s)
q=$.A
n=H.a([$.M,$.aO],o)
H.a([],s)
$.$get$b().h(0,new G.d("Punk",n,q,r,0))
r=H.a(["Weighted"],s)
q=$.y
n=H.a([$.M,$.bH],o)
H.a([],s)
$.$get$b().h(0,new G.d("Weighted",n,q,r,0))
r=H.a(["Favorite"],s)
q=$.A
n=H.a([$.M,$.bz],o)
H.a([],s)
$.$get$b().h(0,new G.d("Favorite",n,q,r,0))
r=H.a(["Novelty"],s)
q=$.A
n=H.a([$.M,$.aU],o)
H.a([],s)
$.$get$b().h(0,new G.d("Novelty",n,q,r,0))
r=H.a(["Security"],s)
q=$.o
n=H.a([$.M,$.be],o)
H.a([],s)
$.$get$b().h(0,new G.d("Security",n,q,r,0))
r=H.a(["IcePack"],s)
q=$.o
n=H.a([$.M,$.ba],o)
H.a([],s)
$.$get$b().h(0,new G.d("IcePack",n,q,r,0))
r=H.a(["MotionCapture"],s)
q=$.m
n=H.a([$.M,$.a4],o)
H.a([],s)
$.$get$b().h(0,new G.d("MotionCapture",n,q,r,0))
r=H.a(["Silica"],s)
q=$.o
n=H.a([$.M,$.bs],o)
H.a([],s)
$.$get$b().h(0,new G.d("Silica",n,q,r,0))
r=H.a(["Harp"],s)
q=$.o
n=H.a([$.M,$.a7],o)
H.a([],s)
$.$get$b().h(0,new G.d("Harp",n,q,r,0))
r=H.a(["Silk"],s)
q=$.o
n=H.a([$.M,$.b3],o)
H.a([],s)
$.$get$b().h(0,new G.d("Silk",n,q,r,0))
r=H.a(["RedFlag"],s)
q=$.o
n=H.a([$.M,$.bf],o)
H.a([],s)
$.$get$b().h(0,new G.d("RedFlag",n,q,r,0))
r=H.a(["MagicCarpet"],s)
q=$.o
n=H.a([$.M,$.ay],o)
H.a([],s)
$.$get$b().h(0,new G.d("MagicCarpet1",n,q,r,0))
r=H.a(["Satin","Tablecloth"],s)
q=$.o
n=H.a([$.M,$.aD],o)
H.a([],s)
$.$get$b().h(0,new G.d("Satin",n,q,r,0))
r=H.a(["MagicCarpet"],s)
q=$.o
n=H.a([$.M,$.a0],o)
H.a([],s)
$.$get$b().h(0,new G.d("MagicCarpet2",n,q,r,0))
r=H.a(["Tweed"],s)
q=$.o
n=H.a([$.M,$.af],o)
H.a([],s)
$.$get$b().h(0,new G.d("Tweed",n,q,r,0))
r=H.a(["Jean"],s)
q=$.o
n=H.a([$.M,$.ai],o)
H.a([],s)
$.$get$b().h(0,new G.d("Jean",n,q,r,0))
r=H.a(["Tesla"],s)
q=$.a8
n=H.a([$.T,$.a4],o)
H.a([],s)
$.$get$b().h(0,new G.d("Tesla",n,q,r,0))
r=H.a(["Ashwood"],s)
q=$.o
n=H.a([$.a0,$.U],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ashwood",n,q,r,0))
r=H.a(["Peashooter"],s)
q=$.o
n=H.a([$.aR,$.aL],o)
H.a([],s)
$.$get$b().h(0,new G.d("Peashooter",n,q,r,0))
r=H.a(["Lacquer"],s)
q=$.o
n=H.a([$.aH,$.U],o)
H.a([],s)
$.$get$b().h(0,new G.d("Lacquer",n,q,r,0))
r=H.a(["Classpecty"],s)
q=$.o
n=H.a([$.P,$.S],o)
H.a([],s)
$.$get$b().h(0,new G.d("Classpecty",n,q,r,0))
r=H.a(["Smartass"],s)
q=$.A
n=H.a([$.T,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Smartass",n,q,r,0))
r=H.a(["Miraculous","Magnets","Miracle"],s)
q=$.A
n=H.a([$.b7,$.aS,$.a0],o)
H.a([],s)
$.$get$b().h(0,new G.d("Miraculous",n,q,r,0))
r=H.a(["Pigeon"],s)
q=$.o
n=H.a([$.bb,$.bg],o)
H.a([],s)
$.$get$b().h(0,new G.d("Pigeon",n,q,r,0))
r=H.a(["Grimoire"],s)
q=$.m
n=H.a([$.bb,$.F],o)
H.a([],s)
$.$get$b().h(0,new G.d("Grimoire",n,q,r,0))
r=H.a(["Oglogoth's"],s)
q=$.a8
n=H.a([$.bb,$.aO],o)
H.a([],s)
$.$get$b().h(0,new G.d("Oglogoth's",n,q,r,0))
r=H.a(["Echidna's"],s)
q=$.a8
n=H.a([$.Z,$.aO],o)
H.a([],s)
$.$get$b().h(0,new G.d("Echidna's",n,q,r,0))
r=H.a(["Superior"],s)
q=$.a8
n=H.a([$.T,$.af],o)
H.a([],s)
$.$get$b().h(0,new G.d("Superior",n,q,r,0))
r=H.a(["Lego"],s)
q=$.o
n=H.a([$.Z,$.aH,$.be,$.aa],o)
H.a([],s)
$.$get$b().h(0,new G.d("Lego",n,q,r,0))
r=H.a(["Yardstick"],s)
q=$.m
n=H.a([$.Z,$.cO,$.U,$.F],o)
H.a([],s)
$.$get$b().h(0,new G.d("Yardstick",n,q,r,0))
r=H.a(["Queenly"],s)
q=$.a8
n=H.a([$.ah,$.a0,$.b7,$.aI,$.aY],o)
H.a([],s)
r=new G.d("Queenly",n,q,r,0)
$.$get$b().h(0,r)
$.xD=r
r=H.a(["Kingly"],s)
q=$.a8
n=H.a([$.aY,$.aa,$.bH,$.a0,$.b7],o)
H.a([],s)
r=new G.d("Kingly",n,q,r,0)
$.$get$b().h(0,r)
$.wq=r
r=H.a(["Jack"],s)
q=$.a8
n=H.a([$.aO,$.aA,$.x,$.ah],o)
H.a([],s)
r=new G.d("Jack",n,q,r,0)
$.$get$b().h(0,r)
$.wk=r
r=H.a(["Codpiece","Codtier"],s)
q=$.m
n=H.a([$.Z,$.aS,$.U,$.P,$.M],o)
H.a([],s)
$.$get$b().h(0,new G.d("Codpiece",n,q,r,0))
r=H.a(["Graceful"],s)
q=$.m
n=H.a([$.Z,$.aG,$.F,$.x,$.T,$.P],o)
H.a([],s)
$.$get$b().h(0,new G.d("Graceful",n,q,r,0))
r=H.a(["Guide","Tourist"],s)
q=$.m
n=H.a([$.Z,$.aG,$.F,$.T,$.P,$.ba],o)
H.a([],s)
$.$get$b().h(0,new G.d("Guide",n,q,r,0))
r=H.a(["Will","Testament"],s)
q=$.m
n=H.a([$.Z,$.aF,$.F,$.T,$.b2],o)
H.a([],s)
$.$get$b().h(0,new G.d("Testament",n,q,r,0))
r=H.a(["Excalibur's","Excalibur"],s)
q=$.a8
n=H.a([$.Z,$.aU,$.x,$.aO,$.aA,$.e2],o)
H.a([],s)
$.$get$b().h(0,new G.d("Excalibur",n,q,r,0))
r=H.a(["Influential"],s)
q=$.a8
n=H.a([$.Z,$.F,$.bf,$.aG],o)
H.a([],s)
$.$get$b().h(0,new G.d("Influential",n,q,r,0))
r=H.a(["Alternative"],s)
q=$.a8
n=H.a([$.Z,$.a0,$.M,$.ah],o)
H.a([],s)
$.$get$b().h(0,new G.d("Alternative",n,q,r,0))
r=H.a(["Valkyrie"],s)
q=$.a8
n=H.a([$.Z,$.aI,$.b0,$.x,$.e1,$.aC],o)
H.a([],s)
$.$get$b().h(0,new G.d("Valkyrie",n,q,r,0))
r=H.a(["Ongoing"],s)
q=$.a8
n=H.a([$.Z,$.aB,$.af,$.h_,$.aa],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ongoing",n,q,r,0))
r=H.a(["Short"],s)
q=$.y
n=H.a([$.Z,$.M,$.b3,$.aC,$.af],o)
H.a([],s)
$.$get$b().h(0,new G.d("Short",n,q,r,0))
r=H.a(["Crown"],s)
q=$.m
n=H.a([$.Z,$.x,$.b3,$.aC,$.af],o)
H.a([],s)
$.$get$b().h(0,new G.d("Crown",n,q,r,0))
r=H.a(["Gristtorrent"],s)
q=$.m
n=H.a([$.Z,$.aH,$.a4,$.ah,$.T],o)
H.a([],s)
$.$get$b().h(0,new G.d("Gristtorrent",n,q,r,0))
r=H.a(["Robe"],s)
q=$.m
n=H.a([$.Z,$.M,$.T,$.a0,$.b1],o)
H.a([],s)
$.$get$b().h(0,new G.d("Robe",n,q,r,0))
r=H.a(["Beret"],s)
q=$.m
n=H.a([$.Z,$.M,$.T,$.aC,$.af],o)
H.a([],s)
$.$get$b().h(0,new G.d("Beret",n,q,r,0))
r=H.a(["Blank"],s)
q=$.y
n=$.Z
m=$.F
l=$.T
l=H.a([n,m,l,$.aG,l,$.ah],o)
H.a([],s)
$.$get$b().h(0,new G.d("Blank",l,q,r,0))
r=H.a(["Cueball"],s)
q=$.o
l=H.a([$.Z,$.aC,$.br,$.aa,$.dg,$.ay],o)
H.a([],s)
$.$get$b().h(0,new G.d("Cueball",l,q,r,0))
r=H.a(["Meddler's"],s)
q=$.a8
l=H.a([$.Z,$.aG,$.F,$.bf,$.aQ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Meddler's",l,q,r,0))
r=H.a(["Scroll"],s)
q=$.a8
l=H.a([$.a0,$.F],o)
H.a([],s)
$.$get$b().h(0,new G.d("Scroll",l,q,r,0))
r=H.a(["Tome"],s)
q=$.m
l=H.a([$.F,$.T,$.aG],o)
H.a([],s)
$.$get$b().h(0,new G.d("Tome",l,q,r,0))
r=H.a(["Lockpick"],s)
q=$.m
l=H.a([$.Z,$.x,$.ah,$.aO],o)
H.a([],s)
$.$get$b().h(0,new G.d("Lockpick",l,q,r,0))
r=H.a(["Warped"],s)
q=$.y
l=H.a([$.Z,$.x,$.aX,$.ah],o)
H.a([],s)
$.$get$b().h(0,new G.d("Warped",l,q,r,0))
r=H.a(["Stairs"],s)
q=$.m
l=H.a([$.Z,$.aS,$.U,$.ai,$.be,$.aQ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Stairs",l,q,r,0))
r=H.a(["Rocket"],s)
q=$.m
l=H.a([$.Z,$.ax,$.x,$.aV],o)
H.a([],s)
$.$get$b().h(0,new G.d("Rocket",l,q,r,0))
r=H.a(["~ATH"],s)
q=$.m
l=H.a([$.Z,$.a4,$.F,$.aG,$.aF],o)
H.a([],s)
$.$get$b().h(0,new G.d("~ATH",l,q,r,0))
r=H.a(["Puppeted"],s)
q=$.m
l=H.a([$.Z,$.U,$.ay,$.aY],o)
H.a([],s)
$.$get$b().h(0,new G.d("Puppeted",l,q,r,0))
r=H.a(["Angelic"],s)
q=$.a8
l=H.a([$.Z,$.b7,$.bg,$.aU,$.a7,$.a0],o)
H.a([],s)
$.$get$b().h(0,new G.d("Angelic",l,q,r,0))
r=H.a(["Vitae"],s)
q=$.o
l=H.a([$.Z,$.aQ,$.aX,$.a0],o)
H.a([],s)
$.$get$b().h(0,new G.d("Vitae",l,q,r,0))
r=H.a(["Fluorite"],s)
q=$.o
l=H.a([$.Z,$.aU,$.bz,$.aB,$.aX],o)
H.a([],s)
$.$get$b().h(0,new G.d("Fluorite",l,q,r,0))
r=H.a(["Janus"],s)
q=$.a8
l=H.a([$.Z,$.aI,$.aB,$.af,$.a4],o)
H.a([],s)
$.$get$b().h(0,new G.d("Janus",l,q,r,0))
r=H.a(["Bacchus"],s)
q=$.a8
l=H.a([$.Z,$.aw,$.bf,$.af],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bacchus",l,q,r,0))
r=H.a(["TurnTable"],s)
q=$.a8
l=H.a([$.Z,$.x,$.a7,$.ai],o)
H.a([],s)
$.$get$b().h(0,new G.d("TurnTable",l,q,r,0))
r=H.a(["[???]","[Unknown]"],s)
q=$.A
l=H.a([$.Z,$.aX,$.bC,$.aU,$.ah],o)
H.a([],s)
$.$get$b().h(0,new G.d("???",l,q,r,0))
r=H.a(["Demonite"],s)
q=$.o
l=H.a([$.x,$.bb],o)
H.a([],s)
$.$get$b().h(0,new G.d("Demonite",l,q,r,0))
r=H.a(["Stymphalian"],s)
q=$.a8
l=H.a([$.x,$.bg],o)
H.a([],s)
$.$get$b().h(0,new G.d("Stymphalian",l,q,r,0))
r=H.a(["Junky"],s)
q=$.o
l=H.a([$.x,$.bu],o)
H.a([],s)
$.$get$b().h(0,new G.d("Junky",l,q,r,0))
r=H.a(["Cold Welded","Cold Iron"],s)
q=$.o
l=H.a([$.x,$.ba],o)
H.a([],s)
$.$get$b().h(0,new G.d("Cold Iron",l,q,r,0))
r=H.a(["Bolted"],s)
q=$.y
l=H.a([$.x,$.b2],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bolted",l,q,r,0))
r=H.a(["Armored"],s)
q=$.y
l=H.a([$.x,$.ay],o)
H.a([],s)
$.$get$b().h(0,new G.d("Armored",l,q,r,0))
r=H.a(["Heartsteel","Rose Gold"],s)
q=$.o
l=H.a([$.x,$.aD],o)
H.a([],s)
$.$get$b().h(0,new G.d("Heartsteel",l,q,r,0))
r=H.a(["Brick"],s)
q=$.o
l=H.a([$.br,$.aB],o)
H.a([],s)
$.$get$b().h(0,new G.d("Brick",l,q,r,0))
r=H.a(["Clay"],s)
q=$.o
l=H.a([$.br,$.bI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Clay",l,q,r,0))
r=H.a(["Mugly"],s)
q=$.A
l=H.a([$.br,$.bu],o)
H.a([],s)
$.$get$b().h(0,new G.d("Mugly",l,q,r,0))
r=H.a(["Plate"],s)
q=$.o
l=H.a([$.br,$.aa],o)
H.a([],s)
$.$get$b().h(0,new G.d("Plate",l,q,r,0))
r=H.a(["Terracotta"],s)
q=$.o
l=H.a([$.br,$.ax],o)
H.a([],s)
$.$get$b().h(0,new G.d("Terracotta",l,q,r,0))
r=H.a(["Semiconductive"],s)
q=$.o
l=H.a([$.br,$.a4],o)
H.a([],s)
$.$get$b().h(0,new G.d("Semiconductive",l,q,r,0))
r=H.a(["Vinyl"],s)
q=$.o
l=H.a([$.br,$.a7],o)
H.a([],s)
$.$get$b().h(0,new G.d("Vinyl",l,q,r,0))
r=H.a(["Artisan"],s)
q=$.y
l=H.a([$.br,$.T],o)
H.a([],s)
$.$get$b().h(0,new G.d("Artisan",l,q,r,0))
r=H.a(["Tiled"],s)
q=$.o
l=H.a([$.br,$.af],o)
H.a([],s)
$.$get$b().h(0,new G.d("Tiled",l,q,r,0))
r=H.a(["Hand-Sculpted"],s)
q=$.y
l=H.a([$.br,$.b7],o)
H.a([],s)
$.$get$b().h(0,new G.d("Hand-Sculpted",l,q,r,0))
r=H.a(["Handicraft"],s)
q=$.A
l=H.a([$.bt,$.F],o)
H.a([],s)
$.$get$b().h(0,new G.d("Handicraft",l,q,r,0))
r=H.a(["Torn"],s)
q=$.y
l=H.a([$.bt,$.M],o)
H.a([],s)
$.$get$b().h(0,new G.d("Torn",l,q,r,0))
r=H.a(["Grotesque"],s)
q=$.A
l=H.a([$.bt,$.bu],o)
H.a([],s)
$.$get$b().h(0,new G.d("Grotesque",l,q,r,0))
r=H.a(["Flickering"],s)
q=$.y
l=H.a([$.bt,$.aU],o)
H.a([],s)
$.$get$b().h(0,new G.d("Flickering",l,q,r,0))
r=H.a(["Thinly Veiled","Translucent"],s)
q=$.o
l=H.a([$.bt,$.ah],o)
H.a([],s)
$.$get$b().h(0,new G.d("Thinly Veiled",l,q,r,0))
r=H.a(["Fragile"],s)
q=$.y
l=H.a([$.bt,$.b3],o)
H.a([],s)
$.$get$b().h(0,new G.d("Fragile",l,q,r,0))
r=H.a(["Troll's"],s)
q=$.a8
l=H.a([$.bt,$.bf],o)
H.a([],s)
$.$get$b().h(0,new G.d("Troll's",l,q,r,0))
r=H.a(["Sappy"],s)
q=$.o
l=H.a([$.bt,$.aD],o)
H.a([],s)
$.$get$b().h(0,new G.d("Sappy",l,q,r,0))
r=H.a(["Bootleg"],s)
q=$.o
l=H.a([$.bt,$.aS],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bootleg",l,q,r,0))
r=H.a(["Distorted"],s)
q=$.o
l=H.a([$.bt,$.aV],o)
H.a([],s)
$.$get$b().h(0,new G.d("Distorted",l,q,r,0))
r=H.a(["Ent's"],s)
q=$.a8
l=H.a([$.U,$.ay],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ent's",l,q,r,0))
r=H.a(["WeepingWillow"],s)
q=$.o
l=H.a([$.U,$.by],o)
H.a([],s)
$.$get$b().h(0,new G.d("WeepingWillow",l,q,r,0))
r=H.a(["Latex"],s)
q=$.o
l=H.a([$.U,$.bI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Latex",l,q,r,0))
r=H.a(["Turf"],s)
q=$.o
l=H.a([$.aH,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Turf",l,q,r,0))
r=H.a(["Stress Relieving"],s)
q=$.m
l=H.a([$.bI,$.be],o)
H.a([],s)
$.$get$b().h(0,new G.d("Stress Relieving",l,q,r,0))
r=H.a(["R-Rated"],s)
q=$.y
l=H.a([$.bI,$.aD],o)
H.a([],s)
$.$get$b().h(0,new G.d("R-Rated",l,q,r,0))
r=H.a(["Racing"],s)
q=$.m
l=H.a([$.bI,$.ax],o)
H.a([],s)
$.$get$b().h(0,new G.d("Racing",l,q,r,0))
r=H.a(["Cross Stitch"],s)
q=$.m
l=H.a([$.F,$.M],o)
H.a([],s)
$.$get$b().h(0,new G.d("Cross Stitch",l,q,r,0))
r=H.a(["LoveLetter"],s)
q=$.m
l=H.a([$.F,$.aD],o)
H.a([],s)
$.$get$b().h(0,new G.d("LoveLetter",l,q,r,0))
r=H.a(["EbonStone"],s)
q=$.o
l=H.a([$.aB,$.bb],o)
H.a([],s)
$.$get$b().h(0,new G.d("EbonStone",l,q,r,0))
r=H.a(["Rock Candy"],s)
q=$.o
l=H.a([$.aB,$.aw],o)
H.a([],s)
$.$get$b().h(0,new G.d("Rock Candy",l,q,r,0))
r=H.a(["Smashing"],s)
q=$.A
l=H.a([$.aB,$.aV],o)
H.a([],s)
$.$get$b().h(0,new G.d("Smashing",l,q,r,0))
r=H.a(["Anomalous"],s)
q=$.A
l=H.a([$.by,$.bb],o)
H.a([],s)
$.$get$b().h(0,new G.d("Anomalous",l,q,r,0))
r=H.a(["Onmoraki"],s)
q=$.o
l=H.a([$.by,$.bg],o)
H.a([],s)
$.$get$b().h(0,new G.d("Onmoraki",l,q,r,0))
r=H.a(["Ghastly"],s)
q=$.A
l=H.a([$.by,$.bu],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ghastly",l,q,r,0))
r=H.a(["Shade","Shadow"],s)
q=$.o
l=H.a([$.by,$.ah],o)
H.a([],s)
$.$get$b().h(0,new G.d("Shade",l,q,r,0))
r=H.a(["Choral"],s)
q=$.o
l=H.a([$.by,$.a7],o)
H.a([],s)
$.$get$b().h(0,new G.d("Choral",l,q,r,0))
r=H.a(["Eerie"],s)
q=$.o
l=H.a([$.by,$.aC],o)
H.a([],s)
$.$get$b().h(0,new G.d("Eerie",l,q,r,0))
r=H.a(["Spiritual"],s)
q=$.A
l=H.a([$.by,$.b7],o)
H.a([],s)
$.$get$b().h(0,new G.d("Spiritual",l,q,r,0))
r=H.a(["Heart"],s)
q=$.o
l=H.a([$.b6,$.aD],o)
H.a([],s)
$.$get$b().h(0,new G.d("Heart",l,q,r,0))
r=H.a(["Primordial"],s)
q=$.o
l=H.a([$.b6,$.ay],o)
H.a([],s)
$.$get$b().h(0,new G.d("Primordial",l,q,r,0))
r=H.a(["Eyeball"],s)
q=$.o
l=H.a([$.b6,$.aU],o)
H.a([],s)
$.$get$b().h(0,new G.d("Eyeball",l,q,r,0))
r=H.a(["Vulture"],s)
q=$.y
l=H.a([$.b6,$.bg],o)
H.a([],s)
$.$get$b().h(0,new G.d("Vulture",l,q,r,0))
r=H.a(["DarkSpell","BlackMagic"],s)
q=$.m
l=H.a([$.bb,$.a0],o)
H.a([],s)
$.$get$b().h(0,new G.d("BlackMagic",l,q,r,0))
r=H.a(["Doppelganger"],s)
q=$.o
l=H.a([$.bb,$.aS],o)
H.a([],s)
$.$get$b().h(0,new G.d("Doppelganger",l,q,r,0))
r=H.a(["Incomprehensible"],s)
q=$.y
l=H.a([$.bb,$.aV],o)
H.a([],s)
$.$get$b().h(0,new G.d("Incomprehensible",l,q,r,0))
r=H.a(["Destructive"],s)
q=$.m
l=H.a([$.bb,$.ay],o)
H.a([],s)
$.$get$b().h(0,new G.d("Destructive",l,q,r,0))
r=H.a(["Growling"],s)
q=$.y
l=H.a([$.bM,$.aV],o)
H.a([],s)
$.$get$b().h(0,new G.d("Growling",l,q,r,0))
r=H.a(["Coconut"],s)
q=$.o
l=H.a([$.bM,$.aw],o)
H.a([],s)
$.$get$b().h(0,new G.d("Coconut",l,q,r,0))
r=H.a(["Beastmaster's"],s)
q=$.a8
l=H.a([$.bM,$.b2],o)
H.a([],s)
$.$get$b().h(0,new G.d("Beastmaster's",l,q,r,0))
r=H.a(["Fluffy"],s)
q=$.o
l=H.a([$.bM,$.bg],o)
H.a([],s)
$.$get$b().h(0,new G.d("Fluffy",l,q,r,0))
r=H.a(["Feather Grass","Fern"],s)
q=$.o
l=H.a([$.aR,$.bg],o)
H.a([],s)
$.$get$b().h(0,new G.d("Fern",l,q,r,0))
r=H.a(["Four Leafed"],s)
q=$.y
l=H.a([$.aR,$.bz],o)
H.a([],s)
$.$get$b().h(0,new G.d("Four Leafed",l,q,r,0))
r=H.a(["Shrubbery"],s)
q=$.o
l=H.a([$.aR,$.ah],o)
H.a([],s)
$.$get$b().h(0,new G.d("Shrubbery",l,q,r,0))
r=H.a(["Shameplant","Ecballium"],s)
q=$.o
l=H.a([$.aR,$.bc],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ecballium",l,q,r,0))
r=H.a(["Truffle"],s)
q=$.o
l=H.a([$.aR,$.b3],o)
H.a([],s)
$.$get$b().h(0,new G.d("Truffle",l,q,r,0))
r=H.a(["Vine"],s)
q=$.o
l=H.a([$.aR,$.b2],o)
H.a([],s)
$.$get$b().h(0,new G.d("Vine",l,q,r,0))
r=H.a(["Carion","CorpseBlossom"],s)
q=$.o
l=H.a([$.aR,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("CorpseBlossom",l,q,r,0))
r=H.a(["Fruity"],s)
q=$.y
l=H.a([$.aR,$.aw],o)
H.a([],s)
$.$get$b().h(0,new G.d("Fruity",l,q,r,0))
r=H.a(["Squawking"],s)
q=$.y
l=H.a([$.bg,$.aV],o)
H.a([],s)
$.$get$b().h(0,new G.d("Squawking",l,q,r,0))
r=H.a(["Poultry","Chicken","Turkey"],s)
q=$.o
l=H.a([$.bg,$.aw],o)
H.a([],s)
$.$get$b().h(0,new G.d("Poultry",l,q,r,0))
r=H.a(["Dove"],s)
q=$.o
l=H.a([$.bg,$.aD],o)
H.a([],s)
$.$get$b().h(0,new G.d("Dove",l,q,r,0))
r=H.a(["Peacock"],s)
q=$.o
l=H.a([$.bg,$.aC],o)
H.a([],s)
$.$get$b().h(0,new G.d("Peacock",l,q,r,0))
r=H.a(["Stork"],s)
q=$.o
l=H.a([$.bg,$.aQ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Stork",l,q,r,0))
r=H.a(["Zhenniao"],s)
q=$.o
l=H.a([$.bg,$.bs],o)
H.a([],s)
$.$get$b().h(0,new G.d("Zhenniao",l,q,r,0))
r=H.a(["Dodo","Passenger Pigeon"],s)
q=$.o
l=H.a([$.bg,$.aF],o)
H.a([],s)
$.$get$b().h(0,new G.d("Dodo",l,q,r,0))
r=H.a(["Raven"],s)
q=$.o8
l=H.a([$.bg,$.aY],o)
H.a([],s)
$.$get$b().h(0,new G.d("Raven",l,q,r,0))
r=H.a(["Frilled"],s)
q=$.y
l=H.a([$.bg,$.bu],o)
H.a([],s)
$.$get$b().h(0,new G.d("Frilled",l,q,r,0))
r=H.a(["Horrifying"],s)
q=$.A
l=H.a([$.bu,$.aY],o)
H.a([],s)
$.$get$b().h(0,new G.d("Horrifying",l,q,r,0))
r=H.a(["Burning Edge"],s)
q=$.m
l=H.a([$.aA,$.ax],o)
H.a([],s)
$.$get$b().h(0,new G.d("Burning Edge",l,q,r,0))
r=H.a(["Scapel"],s)
q=$.m
l=H.a([$.aA,$.aQ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Scapel",l,q,r,0))
r=H.a(["Menacing"],s)
q=$.A
l=H.a([$.aY,$.aO],o)
H.a([],s)
$.$get$b().h(0,new G.d("Menacing",l,q,r,0))
r=H.a(["Syringe"],s)
q=$.m
l=H.a([$.aQ,$.aO],o)
H.a([],s)
$.$get$b().h(0,new G.d("Syringe",l,q,r,0))
r=H.a(["Bitter","Sour"],s)
q=$.A
l=H.a([$.aw,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bitter",l,q,r,0))
r=H.a(["Pineapple"],s)
q=$.o
l=H.a([$.aw,$.aO],o)
H.a([],s)
$.$get$b().h(0,new G.d("Pineapple",l,q,r,0))
r=H.a(["Crunchy"],s)
q=$.A
l=H.a([$.aw,$.aa],o)
H.a([],s)
$.$get$b().h(0,new G.d("Crunchy",l,q,r,0))
r=H.a(["Bass"],s)
q=$.m
l=H.a([$.bH,$.a7],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bass",l,q,r,0))
r=H.a(["Rigid"],s)
q=$.m
l=H.a([$.bH,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Rigid",l,q,r,0))
r=H.a(["Prop"],s)
q=$.m
l=H.a([$.aL,$.aS],o)
H.a([],s)
$.$get$b().h(0,new G.d("Prop",l,q,r,0))
r=H.a(["Magic Missle"],s)
q=$.m
l=H.a([$.aL,$.a0],o)
H.a([],s)
$.$get$b().h(0,new G.d("Magic Missle",l,q,r,0))
r=H.a(["Gangster's"],s)
q=$.a8
l=H.a([$.aL,$.ai],o)
H.a([],s)
$.$get$b().h(0,new G.d("Gangster's",l,q,r,0))
r=H.a(["Cupid's"],s)
q=$.a8
l=H.a([$.aL,$.aD],o)
H.a([],s)
$.$get$b().h(0,new G.d("Cupid's",l,q,r,0))
r=H.a(["Turreted"],s)
q=$.y
l=H.a([$.aL,$.ay],o)
H.a([],s)
$.$get$b().h(0,new G.d("Turreted",l,q,r,0))
r=H.a(["AutoAiming","AutoTarget","TargetAssist","AimBot"],s)
q=$.y
l=H.a([$.aL,$.T],o)
H.a([],s)
$.$get$b().h(0,new G.d("AutoTarget",l,q,r,0))
r=H.a(["Guerilla's"],s)
q=$.a8
l=H.a([$.aL,$.bf],o)
H.a([],s)
$.$get$b().h(0,new G.d("Guerilla's",l,q,r,0))
r=H.a(["Rail","ChargeDart"],s)
q=$.m
l=H.a([$.aL,$.a4],o)
H.a([],s)
$.$get$b().h(0,new G.d("Rail",l,q,r,0))
r=H.a(["Tau"],s)
q=$.m
l=H.a([$.aL,$.bC],o)
H.a([],s)
$.$get$b().h(0,new G.d("Tau",l,q,r,0))
r=H.a(["Pew","Laser"],s)
q=$.m
l=H.a([$.aL,$.aU],o)
H.a([],s)
$.$get$b().h(0,new G.d("Pew",l,q,r,0))
r=H.a(["Thermal"],s)
q=$.y
l=H.a([$.aL,$.ax],o)
H.a([],s)
$.$get$b().h(0,new G.d("Thermal",l,q,r,0))
r=H.a(["Plasma","Incandescent"],s)
q=$.o
l=H.a([$.aU,$.ax],o)
H.a([],s)
$.$get$b().h(0,new G.d("Plasma",l,q,r,0))
r=H.a(["Shredding"],s)
q=$.o
l=H.a([$.a7,$.ax],o)
H.a([],s)
$.$get$b().h(0,new G.d("Shredding",l,q,r,0))
r=H.a(["Leprechaun"],s)
q=$.o
l=H.a([$.bz,$.ay],o)
H.a([],s)
$.$get$b().h(0,new G.d("Leprechaun",l,q,r,0))
r=H.a(["Charmed"],s)
q=$.o
l=H.a([$.bz,$.b3],o)
H.a([],s)
$.$get$b().h(0,new G.d("Charmed",l,q,r,0))
r=H.a(["Leprechaun"],s)
q=$.a8
l=H.a([$.bz,$.ay],o)
H.a([],s)
$.$get$b().h(0,new G.d("Leprechaun",l,q,r,0))
r=H.a(["Prospitian"],s)
q=$.a8
l=H.a([$.aU,$.b1],o)
H.a([],s)
$.$get$b().h(0,new G.d("Prospitian",l,q,r,0))
r=H.a(["Vigilant"],s)
q=$.y
l=H.a([$.aU,$.ay],o)
H.a([],s)
$.$get$b().h(0,new G.d("Vigilant",l,q,r,0))
r=H.a(["Stand-Up"],s)
q=$.A
l=H.a([$.aU,$.aT],o)
H.a([],s)
$.$get$b().h(0,new G.d("Stand-Up",l,q,r,0))
r=H.a(["Bedazzled"],s)
q=$.y
l=H.a([$.aU,$.ai],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bedazzled",l,q,r,0))
r=H.a(["Thief's"],s)
q=$.a8
l=H.a([$.ah,$.a0],o)
H.a([],s)
$.$get$b().h(0,new G.d("Thief's",l,q,r,0))
r=H.a(["InvisibilityCloak"],s)
q=$.m
l=H.a([$.ah,$.a0,$.M],o)
H.a([],s)
$.$get$b().h(0,new G.d("InvisibilityCloak",l,q,r,0))
r=H.a(["Comedy Night","Dry Humor"],s)
q=$.y
l=H.a([$.ah,$.aT],o)
H.a([],s)
$.$get$b().h(0,new G.d("Comedy Night",l,q,r,0))
r=H.a(["Stealthy"],s)
q=$.A
l=H.a([$.ah,$.ay],o)
H.a([],s)
$.$get$b().h(0,new G.d("Stealthy",l,q,r,0))
r=H.a(["Subterfuge"],s)
q=$.m
l=H.a([$.ah,$.T],o)
H.a([],s)
$.$get$b().h(0,new G.d("Subterfuge",l,q,r,0))
r=H.a(["Dersite"],s)
q=$.a8
l=H.a([$.ah,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Dersite",l,q,r,0))
r=H.a(["Ambient","Muzak","Elevator"],s)
q=$.a8
l=H.a([$.be,$.a7],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ambient",l,q,r,0))
r=H.a(["Anesthesia"],s)
q=$.m
l=H.a([$.be,$.aQ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Anesthesia",l,q,r,0))
r=H.a(["Supportive"],s)
q=$.m
l=H.a([$.be,$.ay],o)
H.a([],s)
$.$get$b().h(0,new G.d("Supportive",l,q,r,0))
r=H.a(["Nuka"],s)
q=$.m
l=H.a([$.aQ,$.bC],o)
H.a([],s)
$.$get$b().h(0,new G.d("Nuka",l,q,r,0))
r=H.a(["Contaminated"],s)
q=$.y
l=H.a([$.bs,$.bC],o)
H.a([],s)
$.$get$b().h(0,new G.d("Contaminated",l,q,r,0))
r=H.a(["Unstable"],s)
q=$.y
l=H.a([$.aF,$.bC],o)
H.a([],s)
$.$get$b().h(0,new G.d("Unstable",l,q,r,0))
r=H.a(["Timebomb"],s)
q=$.m
l=H.a([$.aF,$.bc],o)
H.a([],s)
$.$get$b().h(0,new G.d("Timebomb",l,q,r,0))
r=H.a(["Short Circuiting"],s)
q=$.y
l=H.a([$.a4,$.aF],o)
H.a([],s)
$.$get$b().h(0,new G.d("Short Circuiting",l,q,r,0))
r=H.a(["Artifact","Relic"],s)
q=$.m
l=H.a([$.aF,$.b3],o)
H.a([],s)
$.$get$b().h(0,new G.d("Relic",l,q,r,0))
r=H.a(["Existentialist"],s)
q=$.y
l=H.a([$.aF,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Existentialist",l,q,r,0))
r=H.a(["Apocalyptic"],s)
q=$.A
l=H.a([$.aF,$.b7],o)
H.a([],s)
$.$get$b().h(0,new G.d("Apocalyptic",l,q,r,0))
r=H.a(["Dud"],s)
q=$.m
l=H.a([$.bc,$.aS],o)
H.a([],s)
$.$get$b().h(0,new G.d("Dud",l,q,r,0))
r=H.a(["Heat Seeking","Guided"],s)
q=$.m
l=H.a([$.bc,$.T],o)
H.a([],s)
$.$get$b().h(0,new G.d("Guided",l,q,r,0))
r=H.a(["Bobomb"],s)
q=$.m
l=H.a([$.bc,$.ay],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bobomb",l,q,r,0))
r=H.a(["Dread"],s)
q=$.m
l=H.a([$.aF,$.b2],o)
H.a([],s)
$.$get$b().h(0,new G.d("Dread",l,q,r,0))
r=H.a(["Knockback"],s)
q=$.m
l=H.a([$.bc,$.b2],o)
H.a([],s)
$.$get$b().h(0,new G.d("Knockback",l,q,r,0))
r=H.a(["Paralysis"],s)
q=$.m
l=H.a([$.a4,$.b2],o)
H.a([],s)
$.$get$b().h(0,new G.d("Paralysis",l,q,r,0))
r=H.a(["Carnage"],s)
q=$.m
l=H.a([$.bc,$.bf],o)
H.a([],s)
$.$get$b().h(0,new G.d("Carnage",l,q,r,0))
r=H.a(["Blast Beat"],s)
q=$.m
l=H.a([$.bc,$.a7],o)
H.a([],s)
$.$get$b().h(0,new G.d("Blast Beat",l,q,r,0))
r=H.a(["Corrosive"],s)
q=$.y
l=H.a([$.bc,$.bs],o)
H.a([],s)
$.$get$b().h(0,new G.d("Corrosive",l,q,r,0))
r=H.a(["Flash Freeze","Ice Bomb"],s)
q=$.m
l=H.a([$.bc,$.ba],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ice Bomb",l,q,r,0))
r=H.a(["Cryogenic"],s)
q=$.m
l=H.a([$.ba,$.aQ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Cryogenic",l,q,r,0))
r=H.a(["Spellcasting","Thundaga"],s)
q=$.m
l=H.a([$.a0,$.a4],o)
H.a([],s)
$.$get$b().h(0,new G.d("Spellcasting",l,q,r,0))
r=H.a(["Tingling"],s)
q=$.y
l=H.a([$.a4,$.b1],o)
H.a([],s)
$.$get$b().h(0,new G.d("Tingling",l,q,r,0))
r=H.a(["Rage Plague","Beserk"],s)
q=$.m
l=H.a([$.bf,$.bs],o)
H.a([],s)
$.$get$b().h(0,new G.d("Rage Plague",l,q,r,0))
r=H.a(["Nerve Gas"],s)
q=$.m
l=H.a([$.bs,$.b2],o)
H.a([],s)
$.$get$b().h(0,new G.d("Nerve Gas",l,q,r,0))
r=H.a(["Carbon Monoxide"],s)
q=$.m
l=H.a([$.bs,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Carbon Monoxide",l,q,r,0))
r=H.a(["Neurotoxin"],s)
q=$.m
l=H.a([$.bs,$.T],o)
H.a([],s)
$.$get$b().h(0,new G.d("Neurotoxin",l,q,r,0))
r=H.a(["Virulent"],s)
q=$.y
l=H.a([$.bs,$.ay],o)
H.a([],s)
$.$get$b().h(0,new G.d("Virulent",l,q,r,0))
r=H.a(["Toxic"],s)
q=$.y
l=H.a([$.bs,$.aD],o)
H.a([],s)
$.$get$b().h(0,new G.d("Toxic",l,q,r,0))
r=H.a(["Laughing Gas","Nitrous","N20"],s)
q=$.m
l=H.a([$.bs,$.aT],o)
H.a([],s)
$.$get$b().h(0,new G.d("Laughing Gas",l,q,r,0))
r=H.a(["Amplified","Amped"],s)
q=$.y
l=H.a([$.a7,$.aV],o)
H.a([],s)
$.$get$b().h(0,new G.d("Amplified",l,q,r,0))
r=H.a(["Rap"],s)
q=$.m
l=H.a([$.a7,$.ai],o)
H.a([],s)
$.$get$b().h(0,new G.d("Rap",l,q,r,0))
r=H.a(["Saxaphone","Saxobeat"],s)
q=$.m
l=H.a([$.a7,$.aD],o)
H.a([],s)
$.$get$b().h(0,new G.d("Saxaphone",l,q,r,0))
r=H.a(["Offbeat","Syncopated"],s)
q=$.m
l=H.a([$.a7,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Offbeat",l,q,r,0))
r=H.a(["Piper's"],s)
q=$.a8
l=H.a([$.a7,$.b2],o)
H.a([],s)
$.$get$b().h(0,new G.d("Piper's",l,q,r,0))
r=H.a(["Melodic"],s)
q=$.m
l=H.a([$.a7,$.aC],o)
H.a([],s)
$.$get$b().h(0,new G.d("Melodic",l,q,r,0))
r=H.a(["Smooth"],s)
q=$.m
l=H.a([$.a7,$.b1],o)
H.a([],s)
$.$get$b().h(0,new G.d("Smooth",l,q,r,0))
r=H.a(["Thrash"],s)
q=$.m
l=H.a([$.a7,$.bf],o)
H.a([],s)
$.$get$b().h(0,new G.d("Thrash",l,q,r,0))
r=H.a(["Chant","Chanting"],s)
q=$.m
l=H.a([$.a7,$.aQ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Chant",l,q,r,0))
r=H.a(["Chewy"],s)
q=$.m
l=H.a([$.bf,$.aw],o)
H.a([],s)
$.$get$b().h(0,new G.d("Chewy",l,q,r,0))
r=H.a(["Phony"],s)
q=$.m
l=H.a([$.bf,$.aS],o)
H.a([],s)
$.$get$b().h(0,new G.d("Phony",l,q,r,0))
r=H.a(["Doctor's"],s)
q=$.a8
l=H.a([$.T,$.aQ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Doctor's",l,q,r,0))
r=H.a(["Straitjacketed"],s)
q=$.m
l=H.a([$.b2,$.aQ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Straitjacketed",l,q,r,0))
r=H.a(["Strapped"],s)
q=$.m
l=H.a([$.b2,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Strapped",l,q,r,0))
r=H.a(["Bondage"],s)
q=$.m
l=H.a([$.b2,$.aD],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bondage",l,q,r,0))
r=H.a(["Sealed"],s)
q=$.y
l=H.a([$.b2,$.a0],o)
H.a([],s)
$.$get$b().h(0,new G.d("Sealed",l,q,r,0))
r=H.a(["Attractive"],s)
q=$.A
l=H.a([$.aC,$.aD],o)
H.a([],s)
$.$get$b().h(0,new G.d("Attractive",l,q,r,0))
r=H.a(["Relaxed"],s)
q=$.y
l=H.a([$.b1,$.ay],o)
H.a([],s)
$.$get$b().h(0,new G.d("Relaxed",l,q,r,0))
r=H.a(["Loveseat"],s)
q=$.m
l=H.a([$.b1,$.aD],o)
H.a([],s)
$.$get$b().h(0,new G.d("Loveseat",l,q,r,0))
r=H.a(["Doughy","Comfort Food"],s)
q=$.A
l=H.a([$.aw,$.b1],o)
H.a([],s)
$.$get$b().h(0,new G.d("Comfort Food",l,q,r,0))
r=H.a(["Yandere"],s)
q=$.A
l=H.a([$.aD,$.aY],o)
H.a([],s)
$.$get$b().h(0,new G.d("Yandere",l,q,r,0))
r=H.a(["Tsundere"],s)
q=$.A
l=H.a([$.aD,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Tsundere",l,q,r,0))
r=H.a(["Disturbed"],s)
q=$.y
l=H.a([$.ay,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Disturbed",l,q,r,0))
r=H.a(["Sapient"],s)
q=$.y
l=H.a([$.T,$.ay],o)
H.a([],s)
$.$get$b().h(0,new G.d("Sapient",l,q,r,0))
r=H.a(["Lab Grown","Hydroponic"],s)
q=$.m
l=H.a([$.T,$.aw],o)
H.a([],s)
$.$get$b().h(0,new G.d("Hydroponic",l,q,r,0))
r=H.a(["Free Range"],s)
q=$.m
l=H.a([$.ay,$.aw],o)
H.a([],s)
$.$get$b().h(0,new G.d("Free Range",l,q,r,0))
r=H.a(["Gentleman's","Lady's"],s)
q=$.a8
l=H.a([$.aD,$.af],o)
H.a([],s)
$.$get$b().h(0,new G.d("Gentlemanly",l,q,r,0))
r=H.a(["Sapient"],s)
q=$.y
l=H.a([$.T,$.ay],o)
H.a([],s)
$.$get$b().h(0,new G.d("Sapient",l,q,r,0))
r=H.a(["Sentimental","Anniversary"],s)
q=$.y
l=H.a([$.aD,$.b7],o)
H.a([],s)
$.$get$b().h(0,new G.d("Sentimental",l,q,r,0))
r=H.a(["Doki-Doki"],s)
q=$.y
l=H.a([$.aD,$.aV],o)
H.a([],s)
$.$get$b().h(0,new G.d("Doki-Doki",l,q,r,0))
r=H.a(["Doki-Doki Literature Club"],s)
q=$.y
l=H.a([$.aD,$.aV,$.aG,$.h0],o)
H.a([],s)
$.$get$b().h(0,new G.d("Doki-Doki Literature Club",l,q,r,0))
r=H.a(["Banana"],s)
q=$.y
l=H.a([$.aw,$.aT],o)
H.a([],s)
$.$get$b().h(0,new G.d("Banana",l,q,r,0))
r=H.a(["Mana"],s)
q=$.y
l=H.a([$.aw,$.a0],o)
H.a([],s)
$.$get$b().h(0,new G.d("Mana",l,q,r,0))
r=H.a(["Homemade"],s)
q=$.y
l=H.a([$.aw,$.b7],o)
H.a([],s)
$.$get$b().h(0,new G.d("Homemade",l,q,r,0))
r=H.a(["Steampunk"],s)
q=$.y
l=H.a([$.a0,$.af],o)
H.a([],s)
$.$get$b().h(0,new G.d("Steampunk",l,q,r,0))
r=H.a(["Thor's Banana"],s)
q=$.y
l=H.a([$.aw,$.aT,$.a4,$.aV],o)
H.a([],s)
$.$get$b().h(0,new G.d("I Can't Stop Laughing",l,q,r,0))
r=H.a(["Soulsteel"],s)
q=$.o
l=H.a([$.x,$.by],o)
H.a([],s)
$.$get$b().h(0,new G.d("Soulsteel",l,q,r,0))
r=H.a(["Ritual","Tribal"],s)
q=$.m
l=H.a([$.b0,$.ax],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ritual",l,q,r,0))
r=H.a(["Inflamable"],s)
q=$.y
l=H.a([$.bt,$.ax],o)
H.a([],s)
$.$get$b().h(0,new G.d("Inflamable",l,q,r,0))
r=H.a(["Crafting"],s)
q=$.m
l=H.a([$.U,$.T],o)
H.a([],s)
$.$get$b().h(0,new G.d("Crafting",l,q,r,0))
r=H.a(["Polluting"],s)
q=$.m
l=H.a([$.aH,$.ax],o)
H.a([],s)
$.$get$b().h(0,new G.d("Polluting",l,q,r,0))
r=H.a(["Insulated"],s)
q=$.y
l=H.a([$.bI,$.a4],o)
H.a([],s)
$.$get$b().h(0,new G.d("Insulated",l,q,r,0))
r=H.a(["Ash"],s)
q=$.o
l=H.a([$.F,$.ax],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ash",l,q,r,0))
r=H.a(["Delicate"],s)
q=$.y
l=H.a([$.F,$.aX],o)
H.a([],s)
$.$get$b().h(0,new G.d("Delicate",l,q,r,0))
r=H.a(["Glass Blower's"],s)
q=$.a8
l=H.a([$.aX,$.ax],o)
H.a([],s)
$.$get$b().h(0,new G.d("Glass Blower's",l,q,r,0))
r=H.a(["Sunburnt"],s)
q=$.y
l=H.a([$.b6,$.ax],o)
H.a([],s)
$.$get$b().h(0,new G.d("Sunburnt",l,q,r,0))
r=H.a(["Pyrebitten"],s)
q=$.y
l=H.a([$.ax,$.bb],o)
H.a([],s)
$.$get$b().h(0,new G.d("Pyrebitten",l,q,r,0))
r=H.a(["Mink"],s)
q=$.o
l=H.a([$.aD,$.bM],o)
H.a([],s)
$.$get$b().h(0,new G.d("Mink",l,q,r,0))
r=H.a(["Wildfire"],s)
q=$.a8
l=H.a([$.aR,$.ax],o)
H.a([],s)
$.$get$b().h(0,new G.d("Wildfire",l,q,r,0))
r=H.a(["Scarred"],s)
q=$.y
l=H.a([$.aQ,$.bu],o)
H.a([],s)
$.$get$b().h(0,new G.d("Scarred",l,q,r,0))
r=H.a(["Hyper Realistic"],s)
q=$.A
l=H.a([$.b7,$.aY],o)
H.a([],s)
$.$get$b().h(0,new G.d("Hyper Realistic",l,q,r,0))
r=H.a(["Hestia's"],s)
q=$.a8
l=H.a([$.bz,$.ax],o)
H.a([],s)
$.$get$b().h(0,new G.d("Hestia's",l,q,r,0))
r=H.a(["Smoking"],s)
q=$.y
l=H.a([$.ah,$.ax],o)
H.a([],s)
$.$get$b().h(0,new G.d("Smoking",l,q,r,0))
r=H.a(["Heating","Radiator","Furnace"],s)
q=$.y
l=H.a([$.ax,$.a4],o)
H.a([],s)
$.$get$b().h(0,new G.d("Radiator",l,q,r,0))
r=H.a(["Fuming"],s)
q=$.y
l=H.a([$.ax,$.bs],o)
H.a([],s)
$.$get$b().h(0,new G.d("Fuming",l,q,r,0))
r=H.a(["Firework","Sparkler"],s)
q=$.y
l=H.a([$.ax,$.aC],o)
H.a([],s)
$.$get$b().h(0,new G.d("Firework",l,q,r,0))
r=H.a(["Panicky"],s)
q=$.y
l=H.a([$.aF,$.ay],o)
H.a([],s)
$.$get$b().h(0,new G.d("Panicky",l,q,r,0))
r=H.a(["Ornamental"],s)
q=$.y
l=H.a([$.b3,$.aC],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ornamental",l,q,r,0))
r=H.a(["Dear","Precious"],s)
q=$.y
l=H.a([$.b3,$.aD],o)
H.a([],s)
$.$get$b().h(0,new G.d("Dear",l,q,r,0))
r=H.a(["Swaggy","Swag"],s)
q=$.y
l=H.a([$.b3,$.ai],o)
H.a([],s)
$.$get$b().h(0,new G.d("Swaggy",l,q,r,0))
r=H.a(["Uncanny"],s)
q=$.y
l=H.a([$.aI,$.b7],o)
H.a([],s)
$.$get$b().h(0,new G.d("Uncanny",l,q,r,0))
r=H.a(["Talkative","Blabbering"],s)
q=$.y
l=H.a([$.aV,$.ay],o)
H.a([],s)
$.$get$b().h(0,new G.d("Talkative",l,q,r,0))
r=H.a(["Waifu","Catfish"],s)
q=$.y
l=H.a([$.aD,$.aS],o)
H.a([],s)
$.$get$b().h(0,new G.d("Waifu",l,q,r,0))
r=H.a(["Charming"],s)
q=$.y
l=H.a([$.a0,$.aD],o)
H.a([],s)
$.$get$b().h(0,new G.d("Charming",l,q,r,0))
r=H.a(["God Tier"],s)
q=$.y
l=H.a([$.P,$.S,$.b7],o)
H.a([],s)
$.$get$b().h(0,new G.d("God Tier",l,q,r,0))
r=H.a(["Cod Tier"],s)
q=$.y
l=H.a([$.P,$.S,$.b7,$.aS,$.M],o)
H.a([],s)
$.$get$b().h(0,new G.d("Cod Tier",l,q,r,0))
r=H.a(["Dog Tier"],s)
q=$.y
l=H.a([$.P,$.S,$.b7,$.bM],o)
H.a([],s)
$.$get$b().h(0,new G.d("Dog Tier",l,q,r,0))
r=H.a(["Cracked"],s)
q=$.y
l=H.a([$.aB,$.bt],o)
H.a([],s)
$.$get$b().h(0,new G.d("Cracked",l,q,r,0))
r=H.a(["Ruffled"],s)
q=$.y
l=H.a([$.bg,$.bt],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ruffled",l,q,r,0))
r=H.a(["Mandrake"],s)
q=$.y
l=H.a([$.aR,$.aY],o)
H.a([],s)
$.$get$b().h(0,new G.d("Mandrake",l,q,r,0))
r=H.a(["Beanstalk"],s)
q=$.y
l=H.a([$.a0,$.aR],o)
H.a([],s)
$.$get$b().h(0,new G.d("Beanstalk",l,q,r,0))
r=H.a(["Unnerving"],s)
q=$.y
l=H.a([$.aY,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Unnerving",l,q,r,0))
r=H.a(["Chipped"],s)
q=$.y
o=H.a([$.br,$.bt],o)
H.a([],s)
$.$get$b().h(0,new G.d("Chipped",o,q,r,0))
if($.qM==null){r=$.jj
q=$.aO
o=$.aA
n=$.b0
m=new U.ae(r,"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.","Knucklekniveskind","Claws",!1,P.a5(null,null,null,p),0,3)
m.u("Claws",[q,o,n],"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.",!1,"Knucklekniveskind")
m.e.h(0,r)
$.qM=m}r=$.$get$aj();(r&&C.a).sm(r,0)
r=$.$get$aj()
q=$.e2
o=$.aA
n=$.x
m=$.aO
l=new U.ae(q,"Can you get more generic than a goddamned sword?","ShogunKindBestKind","Sword",!1,P.a5(null,null,null,p),0,3)
l.u("Sword",[o,n,m],"Can you get more generic than a goddamned sword?",!1,"ShogunKindBestKind")
l.e.h(0,q)
r.push(l)
l=$.$get$aj()
r=$.nW
q=$.aa
m=$.x
n=new U.ae(r,"Did you just loot your toolbox or some shit?","WhackySmackySkullCrackyKind","Hammer",!1,P.a5(null,null,null,p),0,3)
n.u("Hammer",[q,m],"Did you just loot your toolbox or some shit?",!1,"WhackySmackySkullCrackyKind")
n.e.h(0,r)
l.push(n)
n=$.$get$aj()
l=$.o5
r=$.aL
m=$.x
q=new U.ae(l,"How the fuck did you get your hands on this?","RootyTootyPointyShootyKind","Rifle",!1,P.a5(null,null,null,p),0,3)
q.u("Rifle",[r,m],"How the fuck did you get your hands on this?",!1,"RootyTootyPointyShootyKind")
q.e.h(0,l)
n.push(q)
q=$.$get$aj()
n=$.o1
l=$.aL
m=$.x
r=new U.ae(n,"Why are guns so underpowered in games like this?","IWon\u2019tHesitateBitchKind","Pistol",!1,P.a5(null,null,null,p),0,3)
r.u("Pistol",[l,m],"Why are guns so underpowered in games like this?",!1,"IWon\u2019tHesitateBitchKind")
r.e.h(0,n)
q.push(r)
r=$.$get$aj()
q=$.qk
n=$.aL
m=$.x
l=new U.ae(q,"There is a 98.23423434% chance that  this. Is my boomstick.","PointBlankAnnihilationKind","Shotgun",!1,P.a5(null,null,null,p),0,3)
l.u("Shotgun",[n,m],"There is a 98.23423434% chance that  this. Is my boomstick.",!1,"PointBlankAnnihilationKind")
l.e.h(0,q)
r.push(l)
l=$.$get$aj()
r=$.pU
q=$.aO
m=$.aA
n=$.x
o=new U.ae(r,"So. It's not a sword. And it's not a dagger. How descriptive.","WaitIsThisBestKind?","Blade",!1,P.a5(null,null,null,p),0,3)
o.u("Blade",[q,m,n],"So. It's not a sword. And it's not a dagger. How descriptive.",!1,"WaitIsThisBestKind?")
o.e.h(0,r)
l.push(o)
o=$.$get$aj()
l=$.nR
r=$.aO
n=$.aA
m=$.x
q=new U.ae(l,"For those who can't handle a sword. Or wanna be more stealthy.","ShanksKind","Dagger",!1,P.a5(null,null,null,p),0,3)
q.u("Dagger",[r,n,m],"For those who can't handle a sword. Or wanna be more stealthy.",!1,"ShanksKind")
q.e.h(0,l)
o.push(q)
q=$.$get$aj()
o=$.eG
l=$.aa
m=$.br
n=new U.ae(o,"No. Fuck you. I refuse to believe that this is a weapon.","ThisIsTheDevilKind","Fancysanta",!1,P.a5(null,null,null,p),0,3)
n.u("Fancysanta",[l,m],"No. Fuck you. I refuse to believe that this is a weapon.",!1,"ThisIsTheDevilKind")
n.e.h(0,o)
q.push(n)
n=$.$get$aj()
q=$.qn
o=$.aA
m=$.x
l=new U.ae(q,"Do you think it was a pun on sickle cell anemia?","HalfOfCommunismKind","Sickle",!1,P.a5(null,null,null,p),0,3)
l.u("Sickle",[o,m],"Do you think it was a pun on sickle cell anemia?",!1,"HalfOfCommunismKind")
l.e.h(0,q)
n.push(l)
l=$.$get$aj()
n=$.pX
q=$.aA
m=$.x
o=new U.ae(n,"Why are fleshbags so scared of slightly deader flesh bags?","TreeGenocideKind","Chainsaw",!1,P.a5(null,null,null,p),0,3)
o.u("Chainsaw",[q,m],"Why are fleshbags so scared of slightly deader flesh bags?",!1,"TreeGenocideKind")
o.e.h(0,n)
l.push(o)
o=$.$get$aj()
l=$.q2
n=$.aO
m=$.x
q=new U.ae(l,"It's a fork. Useful for eating, if that's your thing.","ThisIsForFoodKind","Fork",!1,P.a5(null,null,null,p),0,3)
q.u("Fork",[n,m],"It's a fork. Useful for eating, if that's your thing.",!1,"ThisIsForFoodKind")
q.e.h(0,l)
o.push(q)
q=$.$get$aj()
o=$.o0
l=$.bg
m=$.bb
n=new U.ae(o,"Shit. Better get JR. They'll want to see this.","PsychologyAndExtremeViolenceKind","Pigeon",!1,P.a5(null,null,null,p),0,3)
n.u("Pigeon",[l,m],"Shit. Better get JR. They'll want to see this.",!1,"PsychologyAndExtremeViolenceKind")
n.e.h(0,o)
q.push(n)
n=$.$get$aj()
q=$.dg
o=$.bH
m=$.aB
l=$.aa
r=new U.ae(q,"Now we're talking. That is some grade A creative use of your storage room right there. ","HardFootballKind","Bowling Ball",!1,P.a5(null,null,null,p),0,3)
r.u("Bowling Ball",[o,m,l],"Now we're talking. That is some grade A creative use of your storage room right there. ",!1,"HardFootballKind")
r.e.h(0,q)
n.push(r)
r=$.$get$aj()
n=$.nS
q=$.aH
l=$.bz
m=new U.ae(n,"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.","DnDKind","Dice",!1,P.a5(null,null,null,p),0,3)
m.u("Dice",[q,l],"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.",!1,"DnDKind")
m.e.h(0,n)
r.push(m)
m=$.$get$aj()
r=$.o_
n=$.x
l=$.aO
q=new U.ae(r,"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.","ThisIsForClothesNotCombatKind","Needle",!1,P.a5(null,null,null,p),0,3)
q.u("Needle",[n,l],"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.",!1,"ThisIsForClothesNotCombatKind")
q.e.h(0,r)
m.push(q)
q=$.$get$aj()
m=$.qp
r=$.U
l=$.aa
n=new U.ae(m,"Very magey. 7/10.","ShittyWizardKind","Staff",!1,P.a5(null,null,null,p),0,3)
n.u("Staff",[r,l],"Very magey. 7/10.",!1,"ShittyWizardKind")
n.e.h(0,m)
q.push(n)
n=$.$get$aj()
q=$.qr
m=$.b2
l=$.M
r=new U.ae(q,"Probably p hard to use.","ImKinkshamingKind","Whip",!1,P.a5(null,null,null,p),0,3)
r.u("Whip",[m,l],"Probably p hard to use.",!1,"ImKinkshamingKind")
r.e.h(0,q)
n.push(r)
r=$.$get$aj()
n=$.nN
q=$.aL
l=$.aB
m=$.M
o=$.aO
k=new U.ae(n,"Your inferior meat body cannot use this to its maximum potential.","ImpossibleToShootYourselfKind","Bow",!1,P.a5(null,null,null,p),0,3)
k.u("Bow",[q,l,m,o],"Your inferior meat body cannot use this to its maximum potential.",!1,"ImpossibleToShootYourselfKind")
k.e.h(0,n)
r.push(k)
k=$.$get$aj()
r=$.h0
n=$.U
o=$.aa
m=new U.ae(r,"Easy to use even for weak fleshy muscles.","CavemanKind","Club",!1,P.a5(null,null,null,p),0,3)
m.u("Club",[n,o],"Easy to use even for weak fleshy muscles.",!1,"CavemanKind")
m.e.h(0,r)
k.push(m)
m=$.$get$aj()
k=$.fZ
r=$.U
o=new U.ae(k,"God damn Wastes, use normal specibi. ","BeatEmDeadAndCleanTheSceneKind","Broom",!1,P.a5(null,null,null,p),0,3)
o.u("Broom",[r,k],"God damn Wastes, use normal specibi. ",!1,"BeatEmDeadAndCleanTheSceneKind")
o.e.h(0,k)
m.push(o)
o=$.$get$aj()
m=$.aG
k=$.F
r=$.aa
n=new U.ae(m,"You better fucking hope this is either heavy or magic as fuck.","SharpenTheLeatherBoundKind","Book",!1,P.a5(null,null,null,p),0,3)
n.u("Book",[k,r],"You better fucking hope this is either heavy or magic as fuck.",!1,"SharpenTheLeatherBoundKind")
n.e.h(0,m)
o.push(n)
n=$.$get$aj()
o=$.qg
m=$.x
r=$.aa
k=new U.ae(o,"Okay. There's a story here, I just know it.","TheGreatestFuckingWeaponKind","Road Sign",!1,P.a5(null,null,null,p),0,3)
k.u("Road Sign",[m,r],"Okay. There's a story here, I just know it.",!1,"TheGreatestFuckingWeaponKind")
k.e.h(0,o)
n.push(k)
k=$.$get$aj()
n=$.nM
o=$.aA
r=$.x
m=$.aa
l=new U.ae(n,"Legit.","TreeMassacreKind","Axe",!1,P.a5(null,null,null,p),0,3)
l.u("Axe",[o,r,m],"Legit.",!1,"TreeMassacreKind")
l.e.h(0,n)
k.push(l)
l=$.$get$aj()
k=$.qb
n=$.U
m=$.aO
r=new U.ae(k,"Good for chest stabs.","UseOnHorsebackKind","Lance",!1,P.a5(null,null,null,p),0,3)
r.u("Lance",[n,m],"Good for chest stabs.",!1,"UseOnHorsebackKind")
r.e.h(0,k)
l.push(r)
r=$.$get$aj()
l=$.e1
k=$.x
m=$.aa
n=new U.ae(l,"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.","OnlyWeaklingsNeedShieldsKind","Shield",!1,P.a5(null,null,null,p),0,3)
n.u("Shield",[k,m],"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.",!1,"OnlyWeaklingsNeedShieldsKind")
n.e.h(0,l)
r.push(n)
n=$.$get$aj()
r=$.pW
l=$.U
m=$.aa
k=new U.ae(r,"Good for turning disabilities to strengths.","AnAncientEvilResidesWithinThisKind","Cane",!1,P.a5(null,null,null,p),0,3)
k.u("Cane",[l,m],"Good for turning disabilities to strengths.",!1,"AnAncientEvilResidesWithinThisKind")
k.e.h(0,r)
n.push(k)
k=$.$get$aj()
n=$.qs
r=$.aH
m=$.aa
l=new U.ae(n,"It's a yo-yo. Figure it out.","IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind","Yo-Yo",!1,P.a5(null,null,null,p),0,3)
l.u("Yo-Yo",[r,m],"It's a yo-yo. Figure it out.",!1,"IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind")
l.e.h(0,n)
k.push(l)
l=$.$get$aj()
k=$.qo
n=$.U
m=$.aL
r=new U.ae(k,"What are you gonna use for amo?","IsThisAFuckingJockStrapKind","Sling",!1,P.a5(null,null,null,p),0,3)
r.u("Sling",[n,m],"What are you gonna use for amo?",!1,"IsThisAFuckingJockStrapKind")
r.e.h(0,k)
l.push(r)
r=$.$get$aj()
l=$.qm
k=$.x
m=$.aA
n=new U.ae(l,"So edgey.","NarutoKind","Shuriken",!1,P.a5(null,null,null,p),0,3)
n.u("Shuriken",[k,m],"So edgey.",!1,"NarutoKind")
n.e.h(0,l)
r.push(n)
n=$.$get$aj()
r=$.nY
l=$.x
m=$.aL
k=new U.ae(r,"No. SERIOUSLY, where the fuck are all you getting these things.","ITSSOFUCKINGLOUDKIND","Machine Gun",!1,P.a5(null,null,null,p),0,3)
k.u("Machine Gun",[l,m],"No. SERIOUSLY, where the fuck are all you getting these things.",!1,"ITSSOFUCKINGLOUDKIND")
k.e.h(0,r)
n.push(k)
k=$.$get$aj()
n=$.jk
r=$.x
m=$.bc
l=new U.ae(n,"Jegus fuck WHY do you HAVE this?","HandheldSunBombKind","Grenade",!1,P.a5(null,null,null,p),0,3)
l.u("Grenade",[r,m],"Jegus fuck WHY do you HAVE this?",!1,"HandheldSunBombKind")
l.e.h(0,n)
k.push(l)
l=$.$get$aj()
k=$.dg
n=$.bI
m=$.aa
r=new U.ae(k,"...I refuse to believe you have done a single point of damage with this unupgraded. ","HahahBallsKind","Ball",!1,P.a5(null,null,null,p),0,3)
r.u("Ball",[n,m],"...I refuse to believe you have done a single point of damage with this unupgraded. ",!1,"HahahBallsKind")
r.e.h(0,k)
l.push(r)
r=$.$get$aj()
l=$.qq
k=$.x
m=$.aO
n=new U.ae(l,"Fuck you, just call it a trident.","SheWasAGoodCharacterDontYouDareSayOtherwiseKind","3dent",!1,P.a5(null,null,null,p),0,3)
n.u("3dent",[k,m],"Fuck you, just call it a trident.",!1,"SheWasAGoodCharacterDontYouDareSayOtherwiseKind")
n.e.h(0,l)
r.push(n)
n=$.$get$aj()
r=$.nP
l=$.F
m=$.aA
k=new U.ae(r,"An X-Men fan, I see.","YuGiOhKind","Card",!1,P.a5(null,null,null,p),0,3)
k.u("Card",[l,m],"An X-Men fan, I see.",!1,"YuGiOhKind")
k.e.h(0,r)
n.push(k)
k=$.$get$aj()
n=$.nT
r=$.x
m=$.aa
l=new U.ae(n,"Go with what you know, I guess.","UnstoppableKind","Frying Pan",!1,P.a5(null,null,null,p),0,3)
l.u("Frying Pan",[r,m],"Go with what you know, I guess.",!1,"UnstoppableKind")
l.e.h(0,n)
k.push(l)
l=$.$get$aj()
k=$.h1
n=$.b1
m=$.M
r=new U.ae(k,"So. Do you have to wait for the enemy to fall asleep?","SuffocateYourEnemiesKind","Pillow",!1,P.a5(null,null,null,p),0,3)
r.u("Pillow",[n,m],"So. Do you have to wait for the enemy to fall asleep?",!1,"SuffocateYourEnemiesKind")
r.e.h(0,k)
l.push(r)
r=$.$get$aj()
l=$.eF
k=$.x
m=$.b2
n=new U.ae(l,"This could be metal as fuck.","BikerGangKind","Chain",!1,P.a5(null,null,null,p),0,3)
n.u("Chain",[k,m],"This could be metal as fuck.",!1,"BikerGangKind")
n.e.h(0,l)
r.push(n)
n=$.$get$aj()
r=$.o7
l=$.x
m=$.aa
k=new U.ae(r,"Hell yes, engineers!","IfYouCanDodgeAWrenchYouCanDodgeABallKind","Wrench",!1,P.a5(null,null,null,p),0,3)
k.u("Wrench",[l,m],"Hell yes, engineers!",!1,"IfYouCanDodgeAWrenchYouCanDodgeABallKind")
k.e.h(0,r)
n.push(k)
k=$.$get$aj()
n=$.ql
r=$.x
m=$.aa
l=new U.ae(n,"Dual purpose.","HideTheBodiesKind","Shovel",!1,P.a5(null,null,null,p),0,3)
l.u("Shovel",[r,m],"Dual purpose.",!1,"HideTheBodiesKind")
l.e.h(0,n)
k.push(l)
l=$.$get$aj()
k=$.o6
n=$.U
m=$.aa
r=new U.ae(k,"There is a 99.9999234% chance cartoons lied to you about this being a weapon.","ThereWillBeNoBitchingInMyMotherFuckingKitchenKind","Rolling Pin",!1,P.a5(null,null,null,p),0,3)
r.u("Rolling Pin",[n,m],"There is a 99.9999234% chance cartoons lied to you about this being a weapon.",!1,"ThereWillBeNoBitchingInMyMotherFuckingKitchenKind")
r.e.h(0,k)
l.push(r)
r=$.$get$aj()
l=$.o3
k=$.U
m=$.aF
n=new U.ae(l,"Fuck you for picking this.","KermitsGoneBadKind","Puppet",!1,P.a5(null,null,null,p),0,3)
n.u("Puppet",[k,m],"Fuck you for picking this.",!1,"KermitsGoneBadKind")
n.e.h(0,l)
r.push(n)
n=$.$get$aj()
r=$.o4
l=$.x
m=$.aA
k=new U.ae(r,"So fucking edgey.","KermitsGoneBadKind","Razor",!1,P.a5(null,null,null,p),0,3)
k.u("Razor",[l,m],"So fucking edgey.",!1,"KermitsGoneBadKind")
k.e.h(0,r)
n.push(k)
k=$.$get$aj()
n=$.jm
r=$.x
m=$.T
l=new U.ae(n,"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.","MightierThanTheSwordKind","Pen",!1,P.a5(null,null,null,p),0,3)
l.u("Pen",[r,m],"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.",!1,"MightierThanTheSwordKind")
l.e.h(0,n)
k.push(l)
l=$.$get$aj()
k=$.h_
n=$.aB
m=$.bH
r=new U.ae(k,"The meme is strong with this one.","TheShogunsStatuetteKind","Bust",!1,P.a5(null,null,null,p),0,3)
r.u("Bust",[n,m],"The meme is strong with this one.",!1,"TheShogunsStatuetteKind")
r.e.h(0,k)
l.push(r)
r=$.$get$aj()
l=$.q5
k=$.U
m=$.aa
n=new U.ae(l,"Seems legit.","NineIronToTheFuckingSkullKind","Golf Club",!1,P.a5(null,null,null,p),0,3)
n.u("Golf Club",[k,m],"Seems legit.",!1,"NineIronToTheFuckingSkullKind")
n.e.h(0,l)
r.push(n)
n=$.$get$aj()
r=$.qa
l=$.x
m=$.aA
k=new U.ae(r,"Don't listen to ABJ, this is NOT a useful weapon.","ShanksButHesAHousewifeKind","Knife",!1,P.a5(null,null,null,p),0,3)
k.u("Knife",[l,m],"Don't listen to ABJ, this is NOT a useful weapon.",!1,"ShanksButHesAHousewifeKind")
k.e.h(0,r)
n.push(k)
k=$.$get$aj()
n=$.qj
r=$.x
m=$.aA
l=new U.ae(n,"Either you are a psycho or these are some VERY big fucking scissors.","RunWithTheseKind","Scissors",!1,P.a5(null,null,null,p),0,3)
l.u("Scissors",[r,m],"Either you are a psycho or these are some VERY big fucking scissors.",!1,"RunWithTheseKind")
l.e.h(0,n)
k.push(l)
l=$.$get$aj()
k=$.qi
n=$.x
m=$.bH
r=new U.ae(k,"Treat it well or it will never reach Vaulthalla.","TomAndFuckingJerryThemKind","Safe",!1,P.a5(null,null,null,p),0,3)
r.u("Safe",[n,m],"Treat it well or it will never reach Vaulthalla.",!1,"TomAndFuckingJerryThemKind")
r.e.h(0,k)
l.push(r)
r=$.$get$aj()
l=$.cO
k=$.U
m=$.aa
p=new U.ae(l,"Bitches love sticks","WeaponiseTheTreesKind","Stick",!1,P.a5(null,null,null,p),0,3)
p.u("Stick",[k,m],"Bitches love sticks",!1,"WeaponiseTheTreesKind")
p.e.h(0,l)
r.push(p)
p=new S.bl("Duttle","Dut",null,null)
$.$get$bx().push(p)
$.pI=p
p=new S.bl("Salamander","GLUB",null,null)
$.$get$bx().push(p)
$.nH=p
p=new S.bl("Crocodile","NAK",null,null)
$.$get$bx().push(p)
$.cU=p
p=new S.bl("Iguana","thip",null,null)
$.$get$bx().push(p)
$.dc=p
p=new S.bl("Turtle","click",null,null)
$.$get$bx().push(p)
$.dW=p
p=new S.bl("Skeleton","rattle",null,null)
$.$get$bx().push(p)
$.cM=p
p=new S.bl("Robot","BEEP",null,null)
$.$get$bx().push(p)
$.dU=p
p=new S.bl("Chameleon","BLEP",null,null)
$.$get$bx().push(p)
$.fC=p
p=new S.bl("Axolotl","BARP",null,null)
$.$get$bx().push(p)
$.nA=p
p=new S.bl("Lizard","bleb",null,null)
$.$get$bx().push(p)
$.iR=p
p=new S.bl("Snake","hiss",null,null)
$.$get$bx().push(p)
$.iW=p
p=new S.bl("Alligator","nak",null,null)
$.$get$bx().push(p)
$.fB=p
p=new S.bl("Mole","snuff",null,null)
$.$get$bx().push(p)
$.pJ=p
p=new S.bl("Bird","tweet",null,null)
$.$get$bx().push(p)
$.iM=p
p=new S.bl("Wolf","howl",null,null)
$.$get$bx().push(p)
$.iY=p
p=new S.bl("Newt","skitter",null,null)
$.$get$bx().push(p)
$.pK=p
p=new S.bl("Spider","skitter",null,null)
$.$get$bx().push(p)
$.iX=p
p=new S.bl("Cupid","flappa",null,null)
$.$get$bx().push(p)
$.fD=p
p=new S.bl("Dragon","roar",null,null)
$.$get$bx().push(p)
$.dR=p
p=new S.fp("Prospitian","murmur",null,null)
$.$get$bx().push(p)
$.tE=p
p=new S.fp("Dersite","mutter",null,null)
$.$get$bx().push(p)
$.tC=p
$.tF=H.a([$.iW,$.fB,$.pK,$.nH,$.dc,$.cU,$.dW,$.fC,$.nA,$.iR],[S.bl])
$.eC=new T.bE(0,"spices")
p=$.tH
$.dN=new T.bE(p,"fresh baked bread")
$.bV=new T.bE(p,"sweetness")
$.bL=new T.bE(p,"nature")
$.iV=new T.bE(0,"salt")
r=$.tG
$.cj=new T.bE(r,"rot")
$.tD=new T.bE(r,"feet")
$.dT=new T.bE(0,"oil")
$.nC=new T.bE(0,"chlorine")
$.fF=new T.bE(0,"nothing in particular")
$.dS=new T.bE(0,"gunpowder")
$.ez=new T.bE(0,"must")
$.ck=new T.bE(p,"zoo animals")
$.cN=new T.bE(r,"sweat")
$.fG=new T.bE(0,"ozone")
$.bT=new T.bE(0,"deceit")
$.cG=new T.bE(r,"blood")
$.eB=new T.bE(r,"smoke")
$.bK=new K.bw(r,"creepy")
$.b_=new K.bw(p,"calm")
$.bU=new K.bw(r,"frantic")
$.iT=new K.bw(0,"like nothing")
$.bO=new K.bw(p,"energizing")
$.bY=new K.bw(0,"studious")
$.cH=new K.bw(0,"dangerous")
$.cI=new K.bw(0,"glamorous")
$.eA=new K.bw(0,"romantic")
$.dQ=new K.bw(p,"creative")
$.iS=new K.bw(0,"lucky")
$.cJ=new K.bw(0,"happy")
$.cK=new K.bw(0,"heroic")
$.de=new K.bw(r,"stupid")
$.iS=new K.bw(0,"lucky")
$.pH=new K.bw(0,"claustrophobic")
$.iU=new K.bw(0,"overheated")
$.iN=new K.bw(r,"confusing")
$.c8=new K.bw(0,"contemplatative")
$.c7=new M.bh(0,"clanking")
$.c9=new M.bh(0,"laughing")
$.b5=new M.bh(p,"rustling")
$.dV=new M.bh(r,"screaming")
$.iP=new M.bh(r,"foot steps")
$.dO=new M.bh(r,"beeping")
$.pM=new M.bh(r,"whispering")
$.dP=new M.bh(0,"clacking")
$.c2=new M.bh(0,"applause")
$.dd=new M.bh(0,"jazz")
$.nE=new M.bh(0,"disco")
$.fE=new M.bh(0,"drums")
$.iO=new M.bh(0,"echoing")
$.nG=new M.bh(r,"roaring")
$.iQ=new M.bh(r,"gunfire")
$.ca=new M.bh(0,"music")
$.nI=new M.bh(0,"singing")
$.nB=new M.bh(0,"chanting")
$.dX=new M.bh(0,"whistling")
$.cL=new M.bh(p,"nature")
$.nD=new M.bh(0,"croaking")
$.cV=new M.bh(0,"silence")
$.nF=new M.bh(0,"pulsing")
$.pL=new M.bh(0,"ticking")
r=[X.z,P.V]
q=A.a3
p=E.E
o=[p]
n=[A.er]
m=new S.jC(0.7,["QUESTING QUESTANT","LADABOUT LANCELOT","SIR SKULLDODGER"],["protecting the local consorts from a fearsome foe","protecting the session from various ways it can go shithive maggots","questing to collect the 7 bullshit orbs of supreme bullshit and deliver them to the consort leader"],["","spending way too much time hustling from village to village, saving the consorts from the denizens last few minions","breaking a siege on a consort village, saving its population and slaughtering thousands of underlings","finishing the legendary tests of valor dispensed by an elder consort"],["keen","knightly","kooky","kindred","kaos"],!0,!1,!1,!1,!1,!1,0.5,"Knight",new H.p(0,null,null,null,null,null,0,r),null,null,3,!0,!1,!1,!1,!1,!1,!1,!1,Q.B(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.O("Knight",3,!0,!1)
$.zF=m
m=P.f(H.a([new E.E($.bW,0.4,!1)],o),p)
m=new S.kL(["SEEING iDOG","PIPSQUEAK PROGNOSTICATOR","SCAMPERVIEWER 5000"],["making the various bullshit rules of SBURB part of their personal mythos","collaborating with the exiled future carapacians to manipulate Prospit and Derse according to how its supposed to go","suddenly understanding everything, and casting sincere doubt at the laughable insinuation that they ever didn't"],["casting their sight around the land to find the causes of their lands devastation","taking a consort under their wing and teaching it the craft of magic","predicting hundreds of thousands of variant future possibilities, only to realize that the future is too chaotic to exactly systemize","alchemizing more and more complex seer aids, such as crystal balls or space-specs"],["sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!1,m,0.5,"Seer",new H.p(0,null,null,null,null,null,0,r),null,null,6,!0,!1,!1,!1,!1,!1,!1,!1,Q.B(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.O("Seer",6,!0,!1)
$.zR=m
m=new O.hW(["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["allowing events to transpire such that various quests complete themselves","baiting various enemies into traps for an easy victory","watching as their manipulations result in consorts rising up to defeat imps"],["musing on the nature of death as they wander from desolate consort graveyard to desolate consort graveyard","staring vacantly into the middle distance as every challenge that rises before them falls away before it even has a chance to do anything","putting on a performance for a huge crowd of awestruck consorts and underlings","playing pranks and generally messing around with the most powerful enemies left in the game"],["bat","benign","blissful","boisterous","bonkers","broken","bizarre","barking"],!1,!1,!1,!1,!0,!1,0.5,"Bard",new H.p(0,null,null,null,null,null,0,r),null,null,9,!0,!1,!1,!1,!1,!1,!1,!1,Q.B(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.O("Bard",9,!0,!1)
$.zA=m
m=new B.j7(0.3,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["retrieving a sword from a stone","completing increasingly unlikely challenges through serendepitious coincidences","inheriting and running a successful, yet complex company"],["recruiting denizen villages, spreading a modest nation under their (Democratic!) control","assuming control of yet more denizen villages. Turns out a mind bogglingly large number of consorts have the Heir named in their will","chillaxing with their aspect and while talking to it as if it were a real person.","wiping a dungeon off the map with their awe inspiring powers"],["home","honorable","humble","hot","horrific","hardened","havocs"],!1,!1,!1,!1,!1,!0,0.5,"Heir",new H.p(0,null,null,null,null,null,0,r),null,null,8,!0,!1,!1,!1,!1,!1,!1,!1,Q.B(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.O("Heir",8,!0,!1)
$.zE=m
m=new U.jP(["SCURRYWART SERVANT","SAUCY PILGRIM","MADE OF SUCCESS"],["doing the consorts' menial errands, like delivering an item to a dude standing RIGHT FUCKING THERE","repairing various ways the session has been broken","protecting various consorts with game powers"],["using their powers to help clean up the debris left from their Denizen actions. Who knew the term maid would be so literal","watching over the consorts as they begin to rebuild","following their consorts to ever larger pieces of debris","empowering an army of consorts to clean out the last of the debris from their Denizen"],["meandering","motley","musing","mischievous","macabre","maiden","morose"],!1,!1,!1,!1,!1,!0,0.5,"Maid",new H.p(0,null,null,null,null,null,0,r),null,null,0,!0,!1,!1,!1,!1,!1,!1,!1,Q.B(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.O("Maid",0,!0,!1)
$.zI=m
m=new N.kC(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],["robbing various tombs and imp settlements to give to impoverished consorts","stealing a priceless artifact in order to fund consort orphanages","planning an elaborate heist to steal priceless grist from a boss ogre in order to alchemize shoes for orphans"],["scouring the land for targets, and then freaking out when they realize there's no bad guys left to steal from","stealing from enemies on other players planets, acquiring enough boonbucks to lift every consort on the planet out of poverty","doing a little dance on their pile soon-to-be distributed wealth","literally stealing another player's planet. They put it back, but still. A planet. Wow","loaning money to needy consorts, then surprising them by waiving every last cent of debt they owe"],["rouge","radical","retrobate","roguish","retroactive","robins","red"],!1,!1,!0,!1,!1,!1,0.5,"Rogue",new H.p(0,null,null,null,null,null,0,r),null,null,4,!0,!1,!1,!1,!1,!1,!1,!1,Q.B(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.O("Rogue",4,!0,!1)
$.zN=m
m=new V.kj(0,["APPRENTICE ANKLEBITER","JOURNEYING JUNIOR","OUTFOXED BUCKAROO"],["going on various quests of self discovery and confidence building","partnering with a local consort hero to do great deeds and slay evil foes","learning to deal with disapointment after dungeon after dungeon proves to have all the enemies, and none of the treasure"],["learning to control their newfound prowess, accidentally wiping out a consort village or two","getting all mopey about their new powers, because apparently actually being competent is too much for them","finishing the legendary tests of valor with a never before seen aplomb","accepting the role Sburb has placed upon them. They are themselves, and that is all that needs be said on the matter"],["passionate","patient","peaceful","perfect","perceptive","practical","pathetic"],!0,!1,!1,!1,!1,!1,2,0.5,"Page",new H.p(0,null,null,null,null,null,0,r),null,null,1,!0,!1,!1,!1,!1,!1,!1,!1,Q.B(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.O("Page",1,!0,!1)
$.zL=m
m=new U.lg(["RUMPUS RUINER","HAMBURGLER YOUTH","PRISONBAIT"],["robbing various enemy imps and ogres to obtain vast riches","planning an elaborate heist that relies on several hard-to-predict factors going absolutely perfectly","torrenting vast amounts of grist from the other players"],["literally stealing another players planet. Well, the deed to another player's planet, but still. A planet. Wow","stealing every last piece of grist in every last dungeon. Hell fucking yes","crashing the consort economy when they spend their hellaciously devious wealth","doing a dance on their pile of ill earned goods and wealth"],["talented","terrible","talkative","tenacious","tried","torrented"],!1,!1,!0,!1,!1,!1,0.5,"Thief",new H.p(0,null,null,null,null,null,0,r),null,null,7,!0,!1,!1,!1,!1,!1,!1,!1,Q.B(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.O("Thief",7,!0,!1)
$.zT=m
m=P.f(H.a([new E.E($.bW,0.1,!1)],o),p)
m=new R.l7(["SERENE SCALLYWAG","MYSTICAL RUGMUFFIN","FAE FLEDGLING"],["restoring a consort city to its former glory","preserving the legacy of a doomed people","providing psychological counseling to homeless consorts"],["beginning to heal the vast psychological damage their consorts have endured from the denizens ravages","setting up counseling booths around their land and staffing them with well trained consort professionals","bugging and fussing and meddling with the consorts, but now using their NEW FOUND POWERS","realizing that maybe their bugging and fussing and meddling isnt always the best way to deal with things"],["serious","surly","sour","sweet","stylish","soaring","serene","salacious"],!1,!1,!1,!0,!1,!1,m,0.5,"Sylph",new H.p(0,null,null,null,null,null,0,r),null,null,5,!0,!1,!1,!1,!1,!1,!1,!1,Q.B(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.O("Sylph",5,!0,!1)
$.zS=m
m=new N.kt(1,["PRINCE HARMING","ROYAL RUMBLER","DIGIT PRINCE"],["destroying enemies thoroughly","riding in at the last minute to defeat the local consorts hated enemies","learning to grow as a person, despite the holes in their personality"],["thinking on endings. The end of their planet. The end of their denizen problems. The end of that very, very stupid imp that just tried to jump them","defeating every single mini boss, including a few on other players planets","burning down libraries of horror terror grimoires, shedding a few tears for the valuable knowledge lost along side the accursed texts","hunting down and killing the last of a particularly annoying underling class"],["precocious","priceless","proficient","prominent","proper","perfect","pantheon"],!1,!1,!1,!1,!0,!1,0.5,"Prince",new H.p(0,null,null,null,null,null,0,r),null,null,10,!0,!1,!1,!1,!1,!1,!1,!1,Q.B(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.O("Prince",10,!0,!1)
$.zM=m
m=P.f(H.a([new E.E($.bW,0.1,!1)],o),p)
m=new M.lD(["WESTWORD WORRYBITER","BUBBLETROUBLER","EYE OF GRINCH"],["performing elaborate punch card alchemy through the use of a novelty witch's cauldron","deciding which way to go in a series of way-too-long mazes","solving puzzles in ways that completely defy expectations"],["alchemizing a mind crushingly huge number of computers in various forms","whizzing around their land like it's fucking christmas","defeating a completely out of nowhere mini boss","wondering if their sprite prototyping choice was the right one after all"],["wondering","wonderful","wacky","withering","worldly","weighty"],!1,!1,!1,!0,!1,!1,m,0.5,"Witch",new H.p(0,null,null,null,null,null,0,r),null,null,11,!0,!1,!1,!1,!1,!1,!1,!1,Q.B(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.O("Witch",11,!0,!1)
$.zV=m
m=P.f(H.a([new E.E($.bW,0.4,!1)],o),p)
m=new S.jO(["WIZARDING TIKE","THE SORCERER'S SCURRYWART","FAMILIAR FRAYMOTTIFICTIONADO"],["performing increasingly complex alchemy for demanding, moody consorts","learning to silence their Mage Senses long enough to not go insane","learning to just let go and let things happen"],["finding yet another series of convoluted puzzles, buried deep in their land. These puzzles pour poison into the land, and will continue to do so until solved","realizing the voices are gone. Not just quiet, but gone. Without them, they can finally get down to work on their land puzzles","solving the more of the puzzles of their land. Not that that's the end of the horseshit, but hey! Less horseshit always helps","getting sick to death of puzzles and just utterly annihilating one with their game powers"],["magnificent","managerial","major","majestic","mannerly","malignant","morbid"],!1,!0,!1,!1,!1,!1,m,0.5,"Mage",new H.p(0,null,null,null,null,null,0,r),null,null,2,!0,!1,!1,!1,!1,!1,!1,!1,Q.B(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.O("Mage",2,!0,!1)
$.zH=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],s)
l=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],s)
k=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],s)
j=H.a(["wasteful","worrying","wacky","withering","worldly","weighty"],s)
i=P.f(H.a([new E.E($.bW,3,!1),new E.E($.qN,-2,!1)],o),p)
m=new E.lz(m,l,k,j,!1,!0,!1,!1,!0,!1,i,0.5,"Waste",new H.p(0,null,null,null,null,null,0,r),null,null,12,!1,!1,!1,!1,!1,!1,!1,!1,Q.B(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.O("Waste",12,!1,!1)
$.zU=m
m=new Y.kI(["BOSTON SCREAMPIE","COOKIE OFFERER","FIRE FRIEND"],["exploring areas no Consort has dared to trespass in","getting lost in ridiculously convoluted mazes","playing map-creating mini games"],["finding Consorts that still need help even after the Denizen has been defeated","scouting out areas that have opened up following the Denizen's defeat","looking for rare treasures that are no longer being guarded by the Denizen"],["surly","sour","sweet","stylish","soaring","serene","salacious"],!0,!1,!0,!1,!1,!1,0.5,"Scout",new H.p(0,null,null,null,null,null,0,r),null,null,13,!1,!1,!1,!1,!1,!1,!1,!1,Q.B(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.O("Scout",13,!1,!1)
$.zP=m
m=P.f(H.a([new E.E($.bW,0.5,!1)],o),p)
m=new L.kJ(["MIDNIGHT BURNER","WRITER WATCHER","DIARY DEAREST"],["taking down the increasingly random and nonsensical oral history of a group of local Consorts","playing typing themed mini games.","saving an important piece of a riddle from a crumbling building"],["documenting the various Consorts lost to the Denizen.","writing up a recovery plan for the Local Consorts","figuring out the best way to explain how to recover from the ravages of Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!0,m,0.5,"Scribe",new H.p(0,null,null,null,null,null,0,r),null,null,15,!1,!1,!1,!1,!1,!1,!1,!1,Q.B(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.O("Scribe",15,!1,!1)
$.zQ=m
m=P.f(H.a([new E.E($.bW,0.5,!1)],o),p)
m=new E.kG(["HERBAL ESSENCE","CHICKEN SEASONER","TOMEMASTER"],["making the lore of SBURB part of their personal mythos","learning to nod wisely and remain silent when Consorts start yammering on about the Ultimate Riddle","participating in riddle contests to prove their intelligence to local Consorts"],["learning everything there is learn about the Denizen, now that it is safely defeated","learning what Consort civilization was like before the Denizen, to better help them return to 'normal'","demonstrating to the local Consorts the best way to move on from the tyranny of the Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!0,!1,!1,m,0.5,"Sage",new H.p(0,null,null,null,null,null,0,r),null,null,14,!1,!1,!1,!1,!1,!1,!1,!1,Q.B(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.O("Sage",14,!1,!1)
$.zO=m
m=H.a(["guiding","gracious","great","gratuitous","greeting","gloved","gone"],s)
m=new Y.j5(m,!0,!1,!1,!1,!1,!0,0.5,"Guide",new H.p(0,null,null,null,null,null,0,r),null,null,16,!1,!1,!1,!1,!1,!1,!1,!1,Q.B(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.O("Guide",16,!1,!1)
$.zD=m
m=H.a(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],s)
l=H.a(["graceful","gracious","great","gratuitous","greeting","gloved","gone"],s)
k=P.f(H.a([new E.E($.bW,3,!1)],o),p)
m=new Y.j4(m,l,!1,!0,!1,!1,!0,!1,k,0.5,"Grace",new H.p(0,null,null,null,null,null,0,r),null,null,17,!1,!1,!1,!1,!1,!1,!1,!1,Q.B(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.O("Grace",17,!1,!1)
$.zC=m
m=P.f(H.a([new E.E($.bW,0.1,!1)],o),p)
m=new E.k1(["AMUSING AMATEUR","SPOTLIGHT POINTER","GREEK GOD"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["magical","musing","majestic","managerial"],!1,!1,!1,!0,!1,!0,m,0.5,"Muse",new H.p(0,null,null,null,null,null,0,r),null,null,18,!1,!1,!1,!1,!1,!1,!1,!1,Q.B(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.O("Muse",18,!1,!1)
$.zJ=m
m=Q.B(null,null,q)
l=P.f(H.a([new E.E($.bW,0.1,!1)],o),p)
m=new Z.jN(2,["LORDLING","DELEGATION DELIVERER","BUFFER THAN KR"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["lording","leaderly","laughing","laughsassin","lawful","lordly","legendary","legionnaires","lacerating","lactate","legislacerator"],!1,!1,!1,!0,!0,!1,m,l,0.5,"Lord",new H.p(0,null,null,null,null,null,0,r),null,null,19,!1,!1,!1,!1,!1,!1,!1,!1,Q.B(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.O("Lord",19,!1,!1)
$.zG=m
$.zK=T.zz("Null",255,!1,!0)
m=P.f(H.a([new E.E($.bW,1.5,!1),new E.E($.d3,3,!1),new E.E($.cn,-0.5,!1)],o),p)
m=new Z.i3(["BROBLERONE","BROTEL RWANDA","BRO-YO MA"],["busting out, and I quote, 'the mad stunts all wicked up-ins'","trying to get hella pumped about houses or some noise","getting mud on their doll's dress or whatever"],["not actually playing the game, but giving it 1.5 out of 5 hats to keep it real","giving a shout out to their boy Dennis who was over the other day","helping their consorts live off the land, for big ups to Mother Earth, yo","getting so wasted. haha, I mean DAMN"],!1,!1,!1,!0,!0,!1,["Brother","Bored","Bugger","Badass","Bothersome"],m,0.1,2,0.5,"Bro",new H.p(0,null,null,null,null,null,0,r),null,null,20,!1,!1,!1,!1,!1,!1,!1,!1,Q.B(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.O("Bro",20,!1,!1)
$.zB=m
m=A.cS
l=P.K
k=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
k.j(0,$.ak,L.e("#00ff00"),!0)
k.j(0,$.am,L.e("#EFEFEF"),!0)
k.j(0,$.al,L.e("#DEDEDE"),!0)
k.j(0,$.av,L.e("#FF2106"),!0)
k.j(0,$.au,L.e("#B01200"),!0)
k.j(0,$.ao,L.e("#2F2F30"),!0)
k.j(0,$.ap,L.e("#1D1D1D"),!0)
k.j(0,$.an,L.e("#080808"),!0)
k.j(0,$.at,L.e("#030303"),!0)
k.j(0,$.as,L.e("#242424"),!0)
k.j(0,$.ar,L.e("#333333"),!0)
k.j(0,$.aq,L.e("#141414"),!0)
j=P.f(H.a(["Frogs"],s),t)
i=P.f(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],s),t)
h=P.f(H.a(["Stuck","Salamander","Salientia","Spacer","Scientist","Synergy","Spaceman"],s),t)
g=P.f(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush"],s),t)
f=P.f(H.a(["Space","Gaea","Nut","Echidna","Wadjet","Qetesh","Ptah","Geb","Fryja","Atlas","Hebe","Lork","Eve","Genesis","Morpheus","Veles ","Arche","Rekinom","Iago","Pilera","Tiamat","Gilgamesh","Implexel"],s),t)
e=P.f(H.a([new E.E($.d1,2,!0),new E.E($.dt,1,!0),new E.E($.d2,-2,!0)],o),p)
d=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
d.j(0,$.ak,L.e("#FF9B00"),!0)
d.j(0,$.am,L.e("#FF9B00"),!0)
d.j(0,$.al,L.e("#FF8700"),!0)
d.j(0,$.av,L.e("#7F7F7F"),!0)
d.j(0,$.au,L.e("#727272"),!0)
d.j(0,$.ao,L.e("#A3A3A3"),!0)
d.j(0,$.ap,L.e("#999999"),!0)
d.j(0,$.an,L.e("#898989"),!0)
d.j(0,$.at,L.e("#EFEFEF"),!0)
d.j(0,$.as,L.e("#DBDBDB"),!0)
d.j(0,$.ar,L.e("#C6C6C6"),!0)
d.j(0,$.aq,L.e("#ADADAD"),!0)
d=new N.kS(k,j,i,h,g,"Sonata"," An echoing note is plucked. It is the one Isolation plays to chart the depths of reality. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",f,["space","commitment","creation","room","stars","galaxy","black hole","super nova"],["space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],e,0.5,0,new H.p(0,null,null,null,null,null,0,r),null,"","",!1,"Space",null,!0,!1,!1,!1,!0,1,d,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.B(null,null,q))
d.I(0,"Space",!0,!1)
$.ti=d
d=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
d.j(0,$.ak,L.e("#ff0000"),!0)
d.j(0,$.am,L.e("#FF2106"),!0)
d.j(0,$.al,L.e("#AD1604"),!0)
d.j(0,$.av,L.e("#030303"),!0)
d.j(0,$.au,L.e("#242424"),!0)
d.j(0,$.ao,L.e("#510606"),!0)
d.j(0,$.ap,L.e("#3C0404"),!0)
d.j(0,$.an,L.e("#1F0000"),!0)
d.j(0,$.at,L.e("#B70D0E"),!0)
d.j(0,$.as,L.e("#970203"),!0)
d.j(0,$.ar,L.e("#8E1516"),!0)
d.j(0,$.aq,L.e("#640707"),!0)
e=P.f(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums"],s),t)
f=P.f(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],s),t)
g=P.f(H.a(["Teetotaler","Traveler","Tailor","Taster","Target","Teacher","Therapist","Testicle"],s),t)
h=P.f(H.a(["Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],s),t)
i=P.f(H.a(["Time","Ignis","Saturn","Cronos","Aion","Hephaestus","Vulcan","Perses","Prometheus","Geras","Acetosh","Styx","Kairos","Veter","Gegute","Etu","Postverta and Antevorta","Emitus","Moirai"],s),t)
j=P.f(H.a([new E.E($.f_,2,!0),new E.E($.d2,1,!0),new E.E($.ds,-2,!0)],o),p)
k=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
k.j(0,$.ak,L.e("#FF9B00"),!0)
k.j(0,$.am,L.e("#FF9B00"),!0)
k.j(0,$.al,L.e("#FF8700"),!0)
k.j(0,$.av,L.e("#7F7F7F"),!0)
k.j(0,$.au,L.e("#727272"),!0)
k.j(0,$.ao,L.e("#A3A3A3"),!0)
k.j(0,$.ap,L.e("#999999"),!0)
k.j(0,$.an,L.e("#898989"),!0)
k.j(0,$.at,L.e("#EFEFEF"),!0)
k.j(0,$.as,L.e("#DBDBDB"),!0)
k.j(0,$.ar,L.e("#C6C6C6"),!0)
k.j(0,$.aq,L.e("#ADADAD"),!0)
k=new N.lh(0.7,d,e,f,g,h,"Canon","  A sun skips on a groove its tracing 'round the earth, the one-two beat Despair plays to turn cause and effect meaningless. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is/was/will be to say on the matter. ",i,["time","speed","inevitability","paradoxes","rhythm"],["time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],j,0.5,1,new H.p(0,null,null,null,null,null,0,r),null,"","",!1,"Time",null,!0,!1,!1,!1,!0,1,k,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.B(null,null,q))
k.I(1,"Time",!0,!1)
$.tk=k
k=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
k.j(0,$.ak,L.e("#3399ff"),!0)
k.j(0,$.am,L.e("#10E0FF"),!0)
k.j(0,$.al,L.e("#00A4BB"),!0)
k.j(0,$.av,L.e("#FEFD49"),!0)
k.j(0,$.au,L.e("#D6D601"),!0)
k.j(0,$.ao,L.e("#0052F3"),!0)
k.j(0,$.ap,L.e("#0046D1"),!0)
k.j(0,$.an,L.e("#003396"),!0)
k.j(0,$.at,L.e("#0087EB"),!0)
k.j(0,$.as,L.e("#0070ED"),!0)
k.j(0,$.ar,L.e("#006BE1"),!0)
k.j(0,$.aq,L.e("#0054B0"),!0)
j=P.f(H.a(["Wind","Breeze","Zephyr","Gales","Storms","Planes","Twisters","Hurricanes","Gusts","Windmills","Pipes","Whistles"],s),t)
i=P.f(H.a(["BOY SKYLARK","SODAJERK'S CONFIDANTE","MAN SKYLARK"],s),t)
h=P.f(H.a(["Business","Biologist","Backpacker","Babysitter","Baker","Balooner","Braid"],s),t)
g=P.f(H.a(["Gale","Wiznado","Feather","Lifting","Breathless","Jetstream","Hurricane","Tornado"," Kansas","Breath","Breeze","Twister","Storm","Wild","Inhale","Windy","Skylark","Fugue","Pneumatic","Wheeze","Forward","Vertical","Whirlwind","Jetstream"],s),t)
f=P.f(["Breath","Ninlil","Ouranos","Typheus","Aether","Amun","Hermes","Shu","Sobek","Aura","Theia","Lelantos","Keenarth","Aeolus","Aurai","Zephyrus","Ventus","Sora","Htaerb","Worlourier","Quetzalcoatl"],t)
e=P.f(H.a([new E.E($.d2,2,!0),new E.E($.c4,1,!0),new E.E($.dt,-1,!0),new E.E($.cn,-1,!0),new E.E($.bW,0.05,!1)],o),p)
d=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
d.j(0,$.ak,L.e("#FF9B00"),!0)
d.j(0,$.am,L.e("#FF9B00"),!0)
d.j(0,$.al,L.e("#FF8700"),!0)
d.j(0,$.av,L.e("#7F7F7F"),!0)
d.j(0,$.au,L.e("#727272"),!0)
d.j(0,$.ao,L.e("#A3A3A3"),!0)
d.j(0,$.ap,L.e("#999999"),!0)
d.j(0,$.an,L.e("#898989"),!0)
d.j(0,$.at,L.e("#EFEFEF"),!0)
d.j(0,$.as,L.e("#DBDBDB"),!0)
d.j(0,$.ar,L.e("#C6C6C6"),!0)
d.j(0,$.aq,L.e("#ADADAD"),!0)
d=new T.i2(0.3,k,j,i,h,g,"Refrain "," A haunting refrain begins to play. It is the one Desolation plays to keep its instrument in tune. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["breath","mobility","freedom","motivation","direction","wind"],["breath","wind","key","pipe","hurricane","horn","bicycle","wheel"],f,e,0.5,2,new H.p(0,null,null,null,null,null,0,r),null,"","",!1,"Breath",null,!0,!1,!1,!1,!0,1,d,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.B(null,null,q))
d.I(2,"Breath",!0,!1)
$.rZ=d
d=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
d.j(0,$.ak,L.e("#003300"),!0)
d.j(0,$.am,L.e("#0F0F0F"),!0)
d.j(0,$.al,L.e("#010101"),!0)
d.j(0,$.av,L.e("#E8C15E"),!0)
d.j(0,$.au,L.e("#C7A140"),!0)
d.j(0,$.ao,L.e("#1E211E"),!0)
d.j(0,$.ap,L.e("#141614"),!0)
d.j(0,$.an,L.e("#0B0D0B"),!0)
d.j(0,$.at,L.e("#204020"),!0)
d.j(0,$.as,L.e("#11200F"),!0)
d.j(0,$.ar,L.e("#192C16"),!0)
d.j(0,$.aq,L.e("#121F10"),!0)
e=P.f(H.a(["Fire","Death","Prophecy","Blight","Rules","Prophets","Poison","Funerals","Graveyards","Ash","Disaster","Fate","Destiny","Bones"],s),t)
f=P.f(H.a(["APOCALYPSE HOW","REVELATION RUMBLER","PESSIMISM PILGRIM"],s),t)
g=P.f(H.a(["Dancer","Dean","Decorator","Deliverer","Director","Delegate","Destined"],s),t)
h=P.f(H.a(["Dark","Broken","Meteoric","Diseased","Fate","Doomed","Inevitable","Doom","End","Final","Dead","Ruin","Rot","Coffin","Apocalypse","Morendo","Smorzando","~Ath","Armistyx","Grave","Corpse","Ashen","Reaper","Diseased","Armageddon","Cursed"],s),t)
i=P.f(H.a(["Doom","Hades","Achlys","Cassandra","Osiris","Ananke","Thanatos","Moros","Iapetus","Themis","Aisa","Oizys","Styx","Keres","Maat","Castor and Pollux","Anubis","Azrael","Ankou","Kapre","Moros","Atropos","Oizys","Korne","Odin"],s),t)
j=P.f(H.a([new E.E($.d1,2,!0),new E.E($.ds,1,!0),new E.E($.f_,-1,!0),new E.E($.dt,-1,!0),new E.E($.bW,0.01,!1)],o),p)
k=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
k.j(0,$.ak,L.e("#FF9B00"),!0)
k.j(0,$.am,L.e("#FF9B00"),!0)
k.j(0,$.al,L.e("#FF8700"),!0)
k.j(0,$.av,L.e("#7F7F7F"),!0)
k.j(0,$.au,L.e("#727272"),!0)
k.j(0,$.ao,L.e("#A3A3A3"),!0)
k.j(0,$.ap,L.e("#999999"),!0)
k.j(0,$.an,L.e("#898989"),!0)
k.j(0,$.at,L.e("#EFEFEF"),!0)
k.j(0,$.as,L.e("#DBDBDB"),!0)
k.j(0,$.ar,L.e("#C6C6C6"),!0)
k.j(0,$.aq,L.e("#ADADAD"),!0)
k=new U.il(1,d,e,f,g,h,"Dirge"," A slow dirge begins to play. It is the one Death plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["doom","rules","fate","judgement","fog","gas"],["doom","bone","skull","mural","gravestone","tome","tomb"],!0,!0,i,j,0.5,3,new H.p(0,null,null,null,null,null,0,r),null,"","",!1,"Doom",null,!0,!1,!1,!1,!0,1,k,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.B(null,null,q))
k.I(3,"Doom",!0,!1)
$.t_=k
k=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
k.j(0,$.ak,L.e("#993300"),!0)
k.j(0,$.am,L.e("#BA1016"),!0)
k.j(0,$.al,L.e("#820B0F"),!0)
k.j(0,$.av,L.e("#381B76"),!0)
k.j(0,$.au,L.e("#1E0C47"),!0)
k.j(0,$.ao,L.e("#290704"),!0)
k.j(0,$.ap,L.e("#230200"),!0)
k.j(0,$.an,L.e("#110000"),!0)
k.j(0,$.at,L.e("#3D190A"),!0)
k.j(0,$.as,L.e("#2C1207"),!0)
k.j(0,$.ar,L.e("#5C2913"),!0)
k.j(0,$.aq,L.e("#4C1F0D"),!0)
j=P.f(H.a(["Pulse","Bonds","Clots","Bloodlines","Ichor","Veins","Chambers","Arteries","Unions"],s),t)
i=P.f(H.a(["FRIEND HOARDER YOUTH","HEMOGOBLIN","SOCIALIST BUTTERFLY"],s),t)
h=P.f(H.a(["Business","Buyer","Butler","Butcher","Barber","Bowler","Belligerent"],s),t)
g=P.f(H.a(["Blood","Trigger","Chain","Flow","Charge","Awakening","Ichorial","Friendship","Trusting","Clotting","Union","Bleeding","Team","Transfusion","Pulse","Sanguine","Positive","Negative","Cruor","Vim","Chorus","Iron","Ichorial","Fever","Heat"],s),t)
f=P.f(H.a(["Blood","Hera","Hestia","Bastet","Bes","Vesta","Eleos","Sanguine","Medusa","Frigg","Debella","Juno","Moloch","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes"],s),t)
e=P.f(H.a([new E.E($.cn,2,!0),new E.E($.c4,1,!0),new E.E($.d1,-2,!0)],o),p)
d=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
d.j(0,$.ak,L.e("#FF9B00"),!0)
d.j(0,$.am,L.e("#FF9B00"),!0)
d.j(0,$.al,L.e("#FF8700"),!0)
d.j(0,$.av,L.e("#7F7F7F"),!0)
d.j(0,$.au,L.e("#727272"),!0)
d.j(0,$.ao,L.e("#A3A3A3"),!0)
d.j(0,$.ap,L.e("#999999"),!0)
d.j(0,$.an,L.e("#898989"),!0)
d.j(0,$.at,L.e("#EFEFEF"),!0)
d.j(0,$.as,L.e("#DBDBDB"),!0)
d.j(0,$.ar,L.e("#C6C6C6"),!0)
d.j(0,$.aq,L.e("#ADADAD"),!0)
d=new T.i_(0,k,j,i,h,g,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["blood","bond","friendship","tie","pulse","chain","ocean"],["blood","photo album","friendship bracelet","string","chain","manacle","toy army"],f,e,0.5,4,new H.p(0,null,null,null,null,null,0,r),null,"","",!1,"Blood",null,!0,!1,!1,!1,!0,1,d,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.B(null,null,q))
d.I(4,"Blood",!0,!1)
$.rY=d
d=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
d.j(0,$.ak,L.e("#ff3399"),!0)
d.j(0,$.am,L.e("#BD1864"),!0)
d.j(0,$.al,L.e("#780F3F"),!0)
d.j(0,$.av,L.e("#1D572E"),!0)
d.j(0,$.au,L.e("#11371D"),!0)
d.j(0,$.ao,L.e("#4C1026"),!0)
d.j(0,$.ap,L.e("#3C0D1F"),!0)
d.j(0,$.an,L.e("#260914"),!0)
d.j(0,$.at,L.e("#6B0829"),!0)
d.j(0,$.as,L.e("#4A0818"),!0)
d.j(0,$.ar,L.e("#55142A"),!0)
d.j(0,$.aq,L.e("#3D0E1E"),!0)
e=P.f(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters"],s),t)
f=P.f(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],s),t)
g=P.f(H.a(["Heart","Hacker","Harbinger","Handler","Helper","Historian","Hobbyist"],s),t)
h=P.f(H.a(["Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],s),t)
i=P.f(H.a(["Heart","Aphrodite","Baldur","Eros","Hathor","Philotes","Anubis","Psyche","Mora","Isis","Jupiter","Narcissus","Hecate","Izanagi","Izanami","Ishtar","Anteros","Agape","Peitho","Mahara","Naidraug","Snoitome","Walthidian","Slanesh","Benu"],s),t)
j=P.f(H.a([new E.E($.cn,1,!0),new E.hU(null,1,!0)],o),p)
k=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
k.j(0,$.ak,L.e("#FF9B00"),!0)
k.j(0,$.am,L.e("#FF9B00"),!0)
k.j(0,$.al,L.e("#FF8700"),!0)
k.j(0,$.av,L.e("#7F7F7F"),!0)
k.j(0,$.au,L.e("#727272"),!0)
k.j(0,$.ao,L.e("#A3A3A3"),!0)
k.j(0,$.ap,L.e("#999999"),!0)
k.j(0,$.an,L.e("#898989"),!0)
k.j(0,$.at,L.e("#EFEFEF"),!0)
k.j(0,$.as,L.e("#DBDBDB"),!0)
k.j(0,$.ar,L.e("#C6C6C6"),!0)
k.j(0,$.aq,L.e("#ADADAD"),!0)
k=new T.j6(d,e,f,g,h,"Leitmotif"," A chord begins to echo. It is the one Damnation will play at their birth. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["heart","identity","emotion","core","beat","shadow"],["heart","doll","locket","mirror","mask","shades","sculpture"],!0,i,j,0.5,5,new H.p(0,null,null,null,null,null,0,r),null,"","",!1,"Heart",null,!0,!1,!1,!1,!0,1,k,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.B(null,null,q))
k.I(5,"Heart",!0,!1)
$.t3=k
k=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
k.j(0,$.ak,L.e("#3da35a"),!0)
k.j(0,$.am,L.e("#06FFC9"),!0)
k.j(0,$.al,L.e("#04A885"),!0)
k.j(0,$.av,L.e("#6E0E2E"),!0)
k.j(0,$.au,L.e("#4A0818"),!0)
k.j(0,$.ao,L.e("#1D572E"),!0)
k.j(0,$.ap,L.e("#164524"),!0)
k.j(0,$.an,L.e("#11371D"),!0)
k.j(0,$.at,L.e("#3DA35A"),!0)
k.j(0,$.as,L.e("#2E7A43"),!0)
k.j(0,$.ar,L.e("#3B7E4F"),!0)
k.j(0,$.aq,L.e("#265133"),!0)
j=P.f(H.a(["Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],s),t)
i=P.f(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],s),t)
h=P.f(H.a(["Man","Machine","Magician","Magistrate","Mechanic","Mediator","Messenger"],s),t)
g=P.f(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt"],s),t)
f=P.f(H.a(["Mind","Athena","Forseti","Janus","Anubis","Maat","Seshat","Thoth","Jyglag","Peryite","Nomos","Lugus","Sithus","Dike","Epimetheus","Metis","Morpheus","Omoikane","Argus","Hermha","Morha","Sespille","Selcric","Tzeench"],s),t)
e=P.f(H.a([new E.E($.ds,2,!0),new E.E($.f_,1,!0),new E.E($.d1,-2,!0)],o),p)
d=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
d.j(0,$.ak,L.e("#FF9B00"),!0)
d.j(0,$.am,L.e("#FF9B00"),!0)
d.j(0,$.al,L.e("#FF8700"),!0)
d.j(0,$.av,L.e("#7F7F7F"),!0)
d.j(0,$.au,L.e("#727272"),!0)
d.j(0,$.ao,L.e("#A3A3A3"),!0)
d.j(0,$.ap,L.e("#999999"),!0)
d.j(0,$.an,L.e("#898989"),!0)
d.j(0,$.at,L.e("#EFEFEF"),!0)
d.j(0,$.as,L.e("#DBDBDB"),!0)
d.j(0,$.ar,L.e("#C6C6C6"),!0)
d.j(0,$.aq,L.e("#ADADAD"),!0)
d=new V.k_(k,j,i,h,g,"Fugue"," A fractured chord is prepared. It is the one Regret plays to make insomnia reign. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",f,["mind","decisions","consequences","free will","path","neurons","causality"],["mind","coin","plan","mask","map","brain","circuit"],e,0.5,6,new H.p(0,null,null,null,null,null,0,r),null,"","",!1,"Mind",null,!0,!1,!1,!1,!0,1,d,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.B(null,null,q))
d.I(6,"Mind",!0,!1)
$.t9=d
d=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
d.j(0,$.ak,L.e("#ff9933"),!0)
d.j(0,$.am,L.e("#FEFD49"),!0)
d.j(0,$.al,L.e("#FEC910"),!0)
d.j(0,$.av,L.e("#10E0FF"),!0)
d.j(0,$.au,L.e("#00A4BB"),!0)
d.j(0,$.ao,L.e("#FA4900"),!0)
d.j(0,$.ap,L.e("#E94200"),!0)
d.j(0,$.an,L.e("#C33700"),!0)
d.j(0,$.at,L.e("#FF8800"),!0)
d.j(0,$.as,L.e("#D66E04"),!0)
d.j(0,$.ar,L.e("#E76700"),!0)
d.j(0,$.aq,L.e("#CA5B00"),!0)
e=P.f(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance"],s),t)
f=P.f(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],s),t)
g=P.f(H.a(["Laborer","Launderer","Layabout","Legend","Lawyer","Lifeguard"],s),t)
h=P.f(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze"],s),t)
i=P.f(H.a(["Light","Helios","Ra","Cetus","Iris","Heimdall","Apollo","Coeus","Hyperion","Belobog","Phoebe","Metis","Eos","Dagr","Asura","Amaterasu","Sol","Tyche","Odin ","Erutuf"],s),t)
j=P.f(H.a([new E.E($.ec,2,!0),new E.E($.ds,1,!0),new E.E($.c4,-1,!0),new E.E($.dt,-1,!0),new E.E($.bW,0.2,!1)],o),p)
k=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
k.j(0,$.ak,L.e("#FF9B00"),!0)
k.j(0,$.am,L.e("#FF9B00"),!0)
k.j(0,$.al,L.e("#FF8700"),!0)
k.j(0,$.av,L.e("#7F7F7F"),!0)
k.j(0,$.au,L.e("#727272"),!0)
k.j(0,$.ao,L.e("#A3A3A3"),!0)
k.j(0,$.ap,L.e("#999999"),!0)
k.j(0,$.an,L.e("#898989"),!0)
k.j(0,$.at,L.e("#EFEFEF"),!0)
k.j(0,$.as,L.e("#DBDBDB"),!0)
k.j(0,$.ar,L.e("#C6C6C6"),!0)
k.j(0,$.aq,L.e("#ADADAD"),!0)
k=new G.jG(d,e,f,g,h,"Opera"," A beautiful opera begins to be performed. It starts to really pick up around Act 4. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",i,["light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],j,0.5,7,new H.p(0,null,null,null,null,null,0,r),null,"","",!1,"Light",null,!0,!1,!1,!1,!0,1,k,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.B(null,null,q))
k.I(7,"Light",!0,!1)
$.t7=k
k=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
k.j(0,$.ak,L.e("#000066"),!0)
k.j(0,$.am,L.e("#0B1030"),!0)
k.j(0,$.al,L.e("#04091A"),!0)
k.j(0,$.av,L.e("#CCC4B5"),!0)
k.j(0,$.au,L.e("#A89F8D"),!0)
k.j(0,$.ao,L.e("#00164F"),!0)
k.j(0,$.ap,L.e("#00103C"),!0)
k.j(0,$.an,L.e("#00071A"),!0)
k.j(0,$.at,L.e("#033476"),!0)
k.j(0,$.as,L.e("#02285B"),!0)
k.j(0,$.ar,L.e("#004CB2"),!0)
k.j(0,$.aq,L.e("#003E91"),!0)
j=P.f(H.a(["Silence","Nothing","Void","Emptiness","Tears","Dust","Night","[REDACTED]","???","Blindness"],s),t)
i=P.f(H.a(["KNOW-NOTHING ANKLEBITER","INKY BLACK SORROWMASTER","FISTICUFFSAFICTIONADO"],s),t)
h=P.f(H.a(["Vagrant","Vegetarian","Veterinarian","Vigilante","Virtuoso"],s),t)
g=P.f(H.a(["Undefined","untitled.mp4","Void","Disappearification","Pumpkin","Nothing","Emptiness","Invisible","Dark","Hole","Solo","Silent","Alone","Night","Null","[Censored]","[???]","Vacuous","Abyss","Noir","Blank","Tenebrous","Antithesis","404"],s),t)
f=P.f(H.a(["Void","Selene","Erebus","Nix","Artemis","Kuk","Kaos","Hypnos","Tartarus","Hnir","Skoll","Czernobog","Vermina","Vidar","Asteria","Nocturne","Tsukuyomi","Leviathan","Hecate","Harpocrates","Diova"],s),t)
e=P.f(H.a([new E.eo(D.oT(),null,3,!0),new E.eo(D.oT(),null,-1,!0),new E.E($.f_,-1,!0),new E.E($.bW,0.2,!1)],o),p)
d=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
d.j(0,$.ak,L.e("#FF9B00"),!0)
d.j(0,$.am,L.e("#FF9B00"),!0)
d.j(0,$.al,L.e("#FF8700"),!0)
d.j(0,$.av,L.e("#7F7F7F"),!0)
d.j(0,$.au,L.e("#727272"),!0)
d.j(0,$.ao,L.e("#A3A3A3"),!0)
d.j(0,$.ap,L.e("#999999"),!0)
d.j(0,$.an,L.e("#898989"),!0)
d.j(0,$.at,L.e("#EFEFEF"),!0)
d.j(0,$.as,L.e("#DBDBDB"),!0)
d.j(0,$.ar,L.e("#C6C6C6"),!0)
d.j(0,$.aq,L.e("#ADADAD"),!0)
d=new Q.ly(k,j,i,h,g,"Silence"," A yawning silence rings out. It is the NULL Reality sings to keep the worlds on their dance. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",f,["void","obscurity","irrelevance","stealth","null","silence","ignorance","vacuum","static"],["void","cloak","disguise","shadow","cardboard box","secret plan"],e,0.5,8,new H.p(0,null,null,null,null,null,0,r),null,"","",!1,"Void",null,!0,!1,!1,!1,!0,1,d,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.B(null,null,q))
d.I(8,"Void",!0,!1)
$.tl=d
d=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
d.j(0,$.ak,L.e("#9900cc"),!0)
d.j(0,$.am,L.e("#974AA7"),!0)
d.j(0,$.al,L.e("#6B347D"),!0)
d.j(0,$.av,L.e("#3D190A"),!0)
d.j(0,$.au,L.e("#2C1207"),!0)
d.j(0,$.ao,L.e("#7C3FBA"),!0)
d.j(0,$.ap,L.e("#6D34A6"),!0)
d.j(0,$.an,L.e("#592D86"),!0)
d.j(0,$.at,L.e("#381B76"),!0)
d.j(0,$.as,L.e("#1E0C47"),!0)
d.j(0,$.ar,L.e("#281D36"),!0)
d.j(0,$.aq,L.e("#1D1526"),!0)
e=P.f(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial"],s),t)
f=P.f(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],s),t)
g=P.f(H.a(["Raconteur","Reveler","Reader","Reporter","Racketeer"],s),t)
h=P.f(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible"],s),t)
i=P.f(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],s),t)
j=P.f(H.a([new E.E($.d3,2,!0),new E.E($.d2,1,!0),new E.E($.c4,-1,!0),new E.E($.cn,-1,!0),new E.E($.bW,0.01,!1)],o),p)
k=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
k.j(0,$.ak,L.e("#FF9B00"),!0)
k.j(0,$.am,L.e("#FF9B00"),!0)
k.j(0,$.al,L.e("#FF8700"),!0)
k.j(0,$.av,L.e("#7F7F7F"),!0)
k.j(0,$.au,L.e("#727272"),!0)
k.j(0,$.ao,L.e("#A3A3A3"),!0)
k.j(0,$.ap,L.e("#999999"),!0)
k.j(0,$.an,L.e("#898989"),!0)
k.j(0,$.at,L.e("#EFEFEF"),!0)
k.j(0,$.as,L.e("#DBDBDB"),!0)
k.j(0,$.ar,L.e("#C6C6C6"),!0)
k.j(0,$.aq,L.e("#ADADAD"),!0)
k=new E.kv(d,e,f,g,h," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",i,["rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],j,0.5,9,new H.p(0,null,null,null,null,null,0,r),null,"","",!1,"Rage",null,!0,!1,!1,!1,!0,1,k,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.B(null,null,q))
k.I(9,"Rage",!0,!1)
$.tc=k
k=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
k.j(0,$.ak,L.e("#ffcc66"),!0)
k.j(0,$.am,L.e("#FDF9EC"),!0)
k.j(0,$.al,L.e("#D6C794"),!0)
k.j(0,$.av,L.e("#164524"),!0)
k.j(0,$.au,L.e("#06280C"),!0)
k.j(0,$.ao,L.e("#FFC331"),!0)
k.j(0,$.ap,L.e("#F7BB2C"),!0)
k.j(0,$.an,L.e("#DBA523"),!0)
k.j(0,$.at,L.e("#FFE094"),!0)
k.j(0,$.as,L.e("#E8C15E"),!0)
k.j(0,$.ar,L.e("#F6C54A"),!0)
k.j(0,$.aq,L.e("#EDAF0C"),!0)
j=P.f(H.a(["Angels","Hope","Belief","Faith","Determination","Possibility","Hymns","Heroes","Chapels","Lies","Bullshit"],s),t)
i=P.f(H.a(["GADABOUT PIPSQUEAK","BELIVER EXTRAORDINAIRE","DOCTOR FEELGOOD"],s),t)
h=P.f(H.a(["Honcho","Humorist","Horse","Haberdasher","Hooligan"],s),t)
g=P.f(H.a(["Hope","Fake","Belief","Bullshit","Determination","Burn","Stubborn","Religion","Will","Hero","Undying","Dream","Sepulchritude","Prophet","Apocryphal"],s),t)
f=P.f(H.a(["Hope","Isis","Marduk","Fenrir","Apollo","Sekhmet","Votan","Wadjet","Baldur","Zanthar","Raphael","Metatron","Jerahmeel","Gabriel","Michael","Cassiel","Gavreel","Aariel","Uriel","Barachiel ","Jegudiel","Samael","Taylus","Tzeench"],s),t)
e=P.f(H.a([new E.E($.c4,2,!0),new E.E($.ec,1,!0),new E.eo(D.oT(),null,-2,!0)],o),p)
d=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
d.j(0,$.ak,L.e("#FF9B00"),!0)
d.j(0,$.am,L.e("#FF9B00"),!0)
d.j(0,$.al,L.e("#FF8700"),!0)
d.j(0,$.av,L.e("#7F7F7F"),!0)
d.j(0,$.au,L.e("#727272"),!0)
d.j(0,$.ao,L.e("#A3A3A3"),!0)
d.j(0,$.ap,L.e("#999999"),!0)
d.j(0,$.an,L.e("#898989"),!0)
d.j(0,$.at,L.e("#EFEFEF"),!0)
d.j(0,$.as,L.e("#DBDBDB"),!0)
d.j(0,$.ar,L.e("#C6C6C6"),!0)
d.j(0,$.aq,L.e("#ADADAD"),!0)
d=new X.j8(k,j,i,h,g,"Etude"," A resounding hootenanny begins to play. It is the one Irony performs to remember the past. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["hope","beliefs","imagination","dreams","waves"],["hope","magic feather","wand","talisman","spell book","stone tablet","idol","lottery ticket"],f,e,0.5,10,new H.p(0,null,null,null,null,null,0,r),null,"","",!1,"Hope",null,!0,!1,!1,!1,!0,1,d,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.B(null,null,q))
d.I(10,"Hope",!0,!1)
$.t4=d
d=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
d.j(0,$.ak,L.e("#494132"),!0)
d.j(0,$.am,L.e("#76C34E"),!0)
d.j(0,$.al,L.e("#4F8234"),!0)
d.j(0,$.av,L.e("#00164F"),!0)
d.j(0,$.au,L.e("#00071A"),!0)
d.j(0,$.ao,L.e("#605542"),!0)
d.j(0,$.ap,L.e("#494132"),!0)
d.j(0,$.an,L.e("#2D271E"),!0)
d.j(0,$.at,L.e("#CCC4B5"),!0)
d.j(0,$.as,L.e("#A89F8D"),!0)
d.j(0,$.ar,L.e("#A29989"),!0)
d.j(0,$.aq,L.e("#918673"),!0)
e=P.f(H.a(["Dew","Spring","Beginnings","Vitality","Jungles","Swamps","Gardens","Summer","Chlorophyll","Moss","Rot","Mold"],s),t)
f=P.f(H.a(["BRUISE BUSTER","LODESTAR LIFER","BREACHES HEALER"],s),t)
g=P.f(H.a(["Leader","Lecturer","Liaison","Loyalist","Lyricist"],s),t)
h=P.f(H.a(["Life","Pastoral","Green","Relief","Healing","Plant","Vitality","Growing","Garden","Multiplying","Rising","Survival","Phoenix","Respawn","Mangrit","Animato","Gaia","Increasing","Overgrowth","Jungle","Harvest","Lazarus"],s),t)
i=P.f(H.a(["Life","Demeter","Pan","Nephthys","Ceres","Isis","Hemera","Andhrmnir","Agathodaemon","Eir","Baldur","Prometheus","Adonis","Geb","Panacea","Aborof","Nurgel","Adam"],s),t)
j=P.f(H.a([new E.E($.dt,2,!0),new E.E($.d3,1,!0),new E.E($.d1,-2,!0)],o),p)
k=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
k.j(0,$.ak,L.e("#FF9B00"),!0)
k.j(0,$.am,L.e("#FF9B00"),!0)
k.j(0,$.al,L.e("#FF8700"),!0)
k.j(0,$.av,L.e("#7F7F7F"),!0)
k.j(0,$.au,L.e("#727272"),!0)
k.j(0,$.ao,L.e("#A3A3A3"),!0)
k.j(0,$.ap,L.e("#999999"),!0)
k.j(0,$.an,L.e("#898989"),!0)
k.j(0,$.at,L.e("#EFEFEF"),!0)
k.j(0,$.as,L.e("#DBDBDB"),!0)
k.j(0,$.ar,L.e("#C6C6C6"),!0)
k.j(0,$.aq,L.e("#ADADAD"),!0)
k=new K.jF(d,e,f,g,h,"Lament"," A plucked note echos in the stillness. It is the one Desire plays to summon it's audience. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["life","health","growth","strength","tree","forest"],["life","plant","fertilizer","food","flower","beast","fruit","baby","puppy","candy"],i,j,0.5,11,new H.p(0,null,null,null,null,null,0,r),null,"","",!1,"Life",null,!0,!1,!1,!1,!0,1,k,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.B(null,null,q))
k.I(11,"Life",!0,!1)
$.t6=k
k=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
k.j(0,$.ak,L.e("#9630BF"),!0)
k.j(0,$.am,L.e("#cc87e8"),!0)
k.j(0,$.al,L.e("#9545b7"),!0)
k.j(0,$.av,L.e("#ae769b"),!0)
k.j(0,$.au,L.e("#8f577c"),!0)
k.j(0,$.ao,L.e("#9630bf"),!0)
k.j(0,$.ap,L.e("#693773"),!0)
k.j(0,$.an,L.e("#4c2154"),!0)
k.j(0,$.at,L.e("#fcf9bd"),!0)
k.j(0,$.as,L.e("#e0d29e"),!0)
k.j(0,$.ar,L.e("#bdb968"),!0)
k.j(0,$.aq,L.e("#ab9b55"),!0)
j=P.f(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],s),t)
i=P.f(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],s),t)
h=P.f(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],s),t)
g=P.f(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],s),t)
f=P.f(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],s),t)
e=P.f(H.a([new E.E($.d1,3,!0),new E.E($.c4,-2,!0)],o),p)
d=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
d.j(0,$.ak,L.e("#FF9B00"),!0)
d.j(0,$.am,L.e("#FF9B00"),!0)
d.j(0,$.al,L.e("#FF8700"),!0)
d.j(0,$.av,L.e("#7F7F7F"),!0)
d.j(0,$.au,L.e("#727272"),!0)
d.j(0,$.ao,L.e("#A3A3A3"),!0)
d.j(0,$.ap,L.e("#999999"),!0)
d.j(0,$.an,L.e("#898989"),!0)
d.j(0,$.at,L.e("#EFEFEF"),!0)
d.j(0,$.as,L.e("#DBDBDB"),!0)
d.j(0,$.ar,L.e("#C6C6C6"),!0)
d.j(0,$.aq,L.e("#ADADAD"),!0)
d=new Z.im(k,j,i,h,g,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,f,e,0.5,12,new H.p(0,null,null,null,null,null,0,r),null,"","",!1,"Dream",null,!1,!1,!1,!1,!0,1,d,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.B(null,null,q))
d.I(12,"Dream",!1,!1)
$.t0=d
$.tb=L.rX(255,"Null",!1,!1)
d=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
d.j(0,$.ak,L.e("#364447"),!0)
d.j(0,$.am,L.e("#28517b"),!0)
d.j(0,$.al,L.e("#143D67"),!0)
d.j(0,$.av,L.e("#E7D7A0"),!0)
d.j(0,$.au,L.e("#D6A482"),!0)
d.j(0,$.ao,L.e("#A9D5DF"),!0)
d.j(0,$.ap,L.e("#95c1cb"),!0)
d.j(0,$.an,L.e("#77a3ad"),!0)
d.j(0,$.at,L.e("#162E33"),!0)
d.j(0,$.as,L.e("#11292e"),!0)
d.j(0,$.ar,L.e("#021a1f"),!0)
d.j(0,$.aq,L.e("#021015"),!0)
e=P.f(H.a(["Waves","Ocean","Gyms","Pillars","Force","Rocks","Stability","Cliffs","Strength","Surf"],s),t)
f=P.f(H.a(["STANDALONE STRONGMAN","EMPOWERING EMPEROR","MINCEMIGHT"],s),t)
g=P.f(H.a(["Might","Minder","Mainsail","Mastiff","Morpher","Mortician"],s),t)
h=P.f(H.a(["Crash","MIGHT","Endure","Grip","Punch","Wave","Fist"],s),t)
i=P.f(H.a(["Might","Grendel","Heracles","Odysseus","Lancelot","Arthur","Beowulf","Achilles","Samson","Goliath"],s),t)
j=P.f(H.a(["surfing a tsunami wave that appeared just for the occasion","punching out a horde of underlings, one by one","following through with a plan after the circumstances have foiled it and succeeding anyway"],s),t)
k=P.f(H.a(["standing their ground in the face of a difficult foe","performing an unbelievably complex bike stunt","teaching consorts proper weightlifting technique","finally defeating the last of their planet's underlings"],s),t)
c=P.f(H.a(["training for training's sake","renovating a consort village to protect it from natural disasters","defeating powerful underlings by refusing to give in to the pain"],s),t)
b=P.f(H.a([new E.E($.d3,2,!0),new E.E($.ds,-1,!0),new E.E($.d2,-1,!0),new E.E($.c4,1,!0)],o),p)
a=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
a.j(0,$.ak,L.e("#FF9B00"),!0)
a.j(0,$.am,L.e("#FF9B00"),!0)
a.j(0,$.al,L.e("#FF8700"),!0)
a.j(0,$.av,L.e("#7F7F7F"),!0)
a.j(0,$.au,L.e("#727272"),!0)
a.j(0,$.ao,L.e("#A3A3A3"),!0)
a.j(0,$.ap,L.e("#999999"),!0)
a.j(0,$.an,L.e("#898989"),!0)
a.j(0,$.at,L.e("#EFEFEF"),!0)
a.j(0,$.as,L.e("#DBDBDB"),!0)
a.j(0,$.ar,L.e("#C6C6C6"),!0)
a.j(0,$.aq,L.e("#ADADAD"),!0)
a=new L.jZ(d,e,f,g,h,"Mantra","A low note is hummed. It is the one Perseverance plays to keep itself going. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",i,j,k,c,b,0.5,13,new H.p(0,null,null,null,null,null,0,r),null,"","",!1,"Might",null,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.B(null,null,q))
a.I(13,"Might",!1,!1)
$.t8=a
a=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
a.j(0,$.ak,L.e("#A4C1F4"),!0)
a.j(0,$.am,L.e("#A4C1F4"),!0)
a.j(0,$.al,L.e("#95AFDD"),!0)
a.j(0,$.av,L.e("#FFFFA5"),!0)
a.j(0,$.au,L.e("#BEBE9E"),!0)
a.j(0,$.ao,L.e("#A4C1F4"),!0)
a.j(0,$.ap,L.e("#95AFDD"),!0)
a.j(0,$.an,L.e("#88A0CC"),!0)
a.j(0,$.at,L.e("#D9D2E9"),!0)
a.j(0,$.as,L.e("#BBB5CA"),!0)
a.j(0,$.ar,L.e("#CCC5DB"),!0)
a.j(0,$.aq,L.e("#A49FB1"),!0)
b=P.f(H.a(["Mist","Steam","Substance","Vapor","Fog","Clouds","Rivers","Humidity"],s),t)
c=P.f(H.a(["HAZE HASTENER","MISTER MASTER","MANY-BODY"],s),t)
k=P.f(H.a(["Moper","Martyr","Manager","Morning","Matter"],s),t)
j=P.f(H.a(["Everything","Encompass","Halation","Mist","Universal","Steamy","Most"],s),t)
i=P.f(H.a([new E.E($.d2,2,!0),new E.E($.d3,-1,!0)],o),p)
h=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
h.j(0,$.ak,L.e("#FF9B00"),!0)
h.j(0,$.am,L.e("#FF9B00"),!0)
h.j(0,$.al,L.e("#FF8700"),!0)
h.j(0,$.av,L.e("#7F7F7F"),!0)
h.j(0,$.au,L.e("#727272"),!0)
h.j(0,$.ao,L.e("#A3A3A3"),!0)
h.j(0,$.ap,L.e("#999999"),!0)
h.j(0,$.an,L.e("#898989"),!0)
h.j(0,$.at,L.e("#EFEFEF"),!0)
h.j(0,$.as,L.e("#DBDBDB"),!0)
h.j(0,$.ar,L.e("#C6C6C6"),!0)
h.j(0,$.aq,L.e("#ADADAD"),!0)
h=new S.k0(a,b,c,k,j,"Ensemble","A harmonized chord sounds. It is the one Everybody knows. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",i,0.5,14,new H.p(0,null,null,null,null,null,0,r),null,"","",!1,"Mist",null,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.B(null,null,q))
h.I(14,"Mist",!1,!1)
$.ta=h
h=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
h.j(0,$.ak,L.e("#00FFFF"),!0)
h.j(0,$.am,L.e("#00ffff"),!0)
h.j(0,$.al,L.e("#009090"),!0)
h.j(0,$.av,L.e("#FEFEFE"),!0)
h.j(0,$.au,L.e("#707070"),!0)
h.j(0,$.ao,L.e("#0000FF"),!0)
h.j(0,$.ap,L.e("#0000b3"),!0)
h.j(0,$.an,L.e("#000080"),!0)
h.j(0,$.at,L.e("#9900ff"),!0)
h.j(0,$.as,L.e("#5c0099"),!0)
h.j(0,$.ar,L.e("#00FF00"),!0)
h.j(0,$.aq,L.e("#008000"),!0)
i=P.f(H.a(["Neon","Headaches","Puddles","Drip","Mess","Ice cream","Sweets","Boredom"],s),t)
j=P.f(H.a(["PUDDLE PUMMELLER","FLOOD FINISHER","RAINBRO"],s),t)
k=P.f(H.a(["Rainer","Retriever","Rower","Redux","Rapport"],s),t)
c=P.f(H.a(["Chaos","disorder","puddle","Rain","error","color","Swirl","LOL"],s),t)
b=P.f(H.a(["Rain","Chaac","Tohil","Q'uq'umatz","Tlaloc","Cocijo","Dzahui","Mu'ye","Jaguar","Quiateot","Lono","Indra","Dodola","Dudumitsa","Deng","Mangwe","Oya","Asiaq"],s),t)
a=P.f(H.a([new E.E($.cn,-2,!0),new E.E($.c4,-1,!0),new E.E($.ec,3,!0)],o),p)
g=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
g.j(0,$.ak,L.e("#FF9B00"),!0)
g.j(0,$.am,L.e("#FF9B00"),!0)
g.j(0,$.al,L.e("#FF8700"),!0)
g.j(0,$.av,L.e("#7F7F7F"),!0)
g.j(0,$.au,L.e("#727272"),!0)
g.j(0,$.ao,L.e("#A3A3A3"),!0)
g.j(0,$.ap,L.e("#999999"),!0)
g.j(0,$.an,L.e("#898989"),!0)
g.j(0,$.at,L.e("#EFEFEF"),!0)
g.j(0,$.as,L.e("#DBDBDB"),!0)
g.j(0,$.ar,L.e("#C6C6C6"),!0)
g.j(0,$.aq,L.e("#ADADAD"),!0)
g=new L.kw(h,i,j,k,c,"Rudiment","An erratic beat plays. It is the beat Confusion drums. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",b,["rain","chaos","disorder","insanity","discontinuity","distortion"],["rain","raindrop","noisemaker","watercolor","RNG","neon tube","faucet","hose"],a,0.5,15,new H.p(0,null,null,null,null,null,0,r),null,"","",!1,"Rain",null,!1,!1,!1,!1,!0,1,g,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.B(null,null,q))
g.I(15,"Rain",!1,!1)
$.td=g
g=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
g.j(0,$.ak,L.e("#b88654"),!0)
g.j(0,$.am,L.e("#783e05"),!0)
g.j(0,$.al,L.e("#4a0f00"),!0)
g.j(0,$.av,L.e("#0b6c6e"),!0)
g.j(0,$.au,L.e("#005d5e"),!0)
g.j(0,$.ao,L.e("#f5b06c"),!0)
g.j(0,$.ap,L.e("#e6a05e"),!0)
g.j(0,$.an,L.e("#b87232"),!0)
g.j(0,$.at,L.e("#ffd966"),!0)
g.j(0,$.as,L.e("#d1ab3b"),!0)
g.j(0,$.ar,L.e("#7d5e00"),!0)
g.j(0,$.aq,L.e("#6e4f00"),!0)
a=P.f(H.a(["Lies","Beach","Shore","Secrets","Pirates","Suspicion","Corruption","[REDACTED]","Cake"],s),t)
b=P.f(H.a(["MR SANDMAN","CASTLE COORDINATOR","POKER FACADE"],s),t)
c=P.f(H.a(["Strategist","Slider","Sculpter","Scamp","Sleazebag"],s),t)
k=P.f(H.a(["FALSE","Wrong","Sand","Distraction","Ruse","Crumble","abscond","beach","grain","[Data Expunged]"],s),t)
j=P.f(H.a([new E.E($.cn,3,!0),new E.E($.c4,-2,!0)],o),p)
i=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
i.j(0,$.ak,L.e("#FF9B00"),!0)
i.j(0,$.am,L.e("#FF9B00"),!0)
i.j(0,$.al,L.e("#FF8700"),!0)
i.j(0,$.av,L.e("#7F7F7F"),!0)
i.j(0,$.au,L.e("#727272"),!0)
i.j(0,$.ao,L.e("#A3A3A3"),!0)
i.j(0,$.ap,L.e("#999999"),!0)
i.j(0,$.an,L.e("#898989"),!0)
i.j(0,$.at,L.e("#EFEFEF"),!0)
i.j(0,$.as,L.e("#DBDBDB"),!0)
i.j(0,$.ar,L.e("#C6C6C6"),!0)
i.j(0,$.aq,L.e("#ADADAD"),!0)
i=new Y.kH(g,a,b,c,k," BLUH BLUH, ask Cactus to write this. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",j,0.5,16,new H.p(0,null,null,null,null,null,0,r),null,"","",!1,"Sand",null,!1,!1,!1,!1,!0,1,i,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.B(null,null,q))
i.I(16,"Sand",!1,!1)
$.tf=i
i=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
i.j(0,$.ak,L.e("#ff9933"),!0)
i.j(0,$.am,L.e("#ffffff"),!0)
i.j(0,$.al,L.e("#999999"),!0)
i.j(0,$.av,L.e("#ffff00"),!0)
i.j(0,$.au,L.e("#8f8f00"),!0)
i.j(0,$.ao,L.e("#d1e0e3"),!0)
i.j(0,$.ap,L.e("#c5d1d4"),!0)
i.j(0,$.an,L.e("#b7c2c4"),!0)
i.j(0,$.at,L.e("#00ffff"),!0)
i.j(0,$.as,L.e("#009999"),!0)
i.j(0,$.ar,L.e("#b5b5b5"),!0)
i.j(0,$.aq,L.e("#858585"),!0)
k=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
k.j(0,$.ak,L.e("#FF9B00"),!0)
k.j(0,$.am,L.e("#FF9B00"),!0)
k.j(0,$.al,L.e("#FF8700"),!0)
k.j(0,$.av,L.e("#7F7F7F"),!0)
k.j(0,$.au,L.e("#727272"),!0)
k.j(0,$.ao,L.e("#A3A3A3"),!0)
k.j(0,$.ap,L.e("#999999"),!0)
k.j(0,$.an,L.e("#898989"),!0)
k.j(0,$.at,L.e("#EFEFEF"),!0)
k.j(0,$.as,L.e("#DBDBDB"),!0)
k.j(0,$.ar,L.e("#C6C6C6"),!0)
k.j(0,$.aq,L.e("#ADADAD"),!0)
k=new L.kO(i,0.5,17,new H.p(0,null,null,null,null,null,0,r),null,"","",!1,"Sky",null,!1,!1,!1,!1,!0,1,k,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.B(null,null,q))
k.I(17,"Sky",!1,!1)
$.tg=k
k=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
k.j(0,$.ak,L.e("#10dede"),!0)
k.j(0,$.am,L.e("#00ffff"),!0)
k.j(0,$.al,L.e("#00d1d1"),!0)
k.j(0,$.av,L.e("#ff0000"),!0)
k.j(0,$.au,L.e("#d10000"),!0)
k.j(0,$.ao,L.e("#4985e6"),!0)
k.j(0,$.ap,L.e("#3a76d6"),!0)
k.j(0,$.an,L.e("#2d6ac4"),!0)
k.j(0,$.at,L.e("#331c73"),!0)
k.j(0,$.as,L.e("#050045"),!0)
k.j(0,$.ar,L.e("#8d7cc2"),!0)
k.j(0,$.aq,L.e("#7c6db3"),!0)
i=P.f(H.a(["Gel","Ice","Tape","Poetry","Caucophony"],s),t)
j=P.f(H.a(["LIL LYRICIST","ICE CREAMER","COOLER THAN BEING COOL"],s),t)
h=P.f(H.a(["Rhymer","Rapper","Rental","Redux","Rave","Reason"],s),t)
g=P.f(H.a(["Vaporwave","Chill","Ice","Rhyme","Slow"],s),t)
f=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
f.j(0,$.ak,L.e("#FF9B00"),!0)
f.j(0,$.am,L.e("#FF9B00"),!0)
f.j(0,$.al,L.e("#FF8700"),!0)
f.j(0,$.av,L.e("#7F7F7F"),!0)
f.j(0,$.au,L.e("#727272"),!0)
f.j(0,$.ao,L.e("#A3A3A3"),!0)
f.j(0,$.ap,L.e("#999999"),!0)
f.j(0,$.an,L.e("#898989"),!0)
f.j(0,$.at,L.e("#EFEFEF"),!0)
f.j(0,$.as,L.e("#DBDBDB"),!0)
f.j(0,$.ar,L.e("#C6C6C6"),!0)
f.j(0,$.aq,L.e("#ADADAD"),!0)
f=new Z.kB(k,i,j,h,g,"Rap","BLUH BLUH, Ask Cactus to write this. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",0.5,18,new H.p(0,null,null,null,null,null,0,r),null,"","",!1,"Rhyme",null,!1,!1,!1,!1,!0,1,f,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.B(null,null,q))
f.I(18,"Rhyme",!1,!1)
$.te=f
f=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
f.j(0,$.ak,L.e("#c42eff"),!0)
f.j(0,$.am,L.e("a703ff"),!0)
f.j(0,$.al,L.e("#9800f0"),!0)
f.j(0,$.av,L.e("#fcf9bd"),!0)
f.j(0,$.au,L.e("#e0d29e"),!0)
f.j(0,$.ao,L.e("#9900ff"),!0)
f.j(0,$.ap,L.e("#8800f0"),!0)
f.j(0,$.an,L.e("#7800e0"),!0)
f.j(0,$.at,L.e("#b3a7d4"),!0)
f.j(0,$.as,L.e("#a599c4"),!0)
f.j(0,$.ar,L.e("#a64e78"),!0)
f.j(0,$.aq,L.e("#963f66"),!0)
k=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
k.j(0,$.ak,L.e("#FF9B00"),!0)
k.j(0,$.am,L.e("#FF9B00"),!0)
k.j(0,$.al,L.e("#FF8700"),!0)
k.j(0,$.av,L.e("#7F7F7F"),!0)
k.j(0,$.au,L.e("#727272"),!0)
k.j(0,$.ao,L.e("#A3A3A3"),!0)
k.j(0,$.ap,L.e("#999999"),!0)
k.j(0,$.an,L.e("#898989"),!0)
k.j(0,$.at,L.e("#EFEFEF"),!0)
k.j(0,$.as,L.e("#DBDBDB"),!0)
k.j(0,$.ar,L.e("#C6C6C6"),!0)
k.j(0,$.aq,L.e("#ADADAD"),!0)
k=new Q.jD(f,0.5,19,new H.p(0,null,null,null,null,null,0,r),null,"","",!1,"Law",null,!1,!1,!1,!1,!0,1,k,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.B(null,null,q))
k.I(19,"Law",!1,!1)
$.t5=k
k=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
k.j(0,$.ak,L.e("#f0b000"),!0)
k.j(0,$.am,L.e("#ffd966"),!0)
k.j(0,$.al,L.e("#f0ca59"),!0)
k.j(0,$.av,L.e("#ffff00"),!0)
k.j(0,$.au,L.e("#8f8f00"),!0)
k.j(0,$.ao,L.e("#92c27c"),!0)
k.j(0,$.ap,L.e("#83b36d"),!0)
k.j(0,$.an,L.e("#74a35f"),!0)
k.j(0,$.at,L.e("#39751d"),!0)
k.j(0,$.as,L.e("#2a630e"),!0)
k.j(0,$.ar,L.e("#bd8e00"),!0)
k.j(0,$.aq,L.e("#ad7c00"),!0)
j=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
j.j(0,$.ak,L.e("#FF9B00"),!0)
j.j(0,$.am,L.e("#FF9B00"),!0)
j.j(0,$.al,L.e("#FF8700"),!0)
j.j(0,$.av,L.e("#7F7F7F"),!0)
j.j(0,$.au,L.e("#727272"),!0)
j.j(0,$.ao,L.e("#A3A3A3"),!0)
j.j(0,$.ap,L.e("#999999"),!0)
j.j(0,$.an,L.e("#898989"),!0)
j.j(0,$.at,L.e("#EFEFEF"),!0)
j.j(0,$.as,L.e("#DBDBDB"),!0)
j.j(0,$.ar,L.e("#C6C6C6"),!0)
j.j(0,$.aq,L.e("#ADADAD"),!0)
j=new L.iL(k,0.5,20,new H.p(0,null,null,null,null,null,0,r),null,"","",!1,"Fate",null,!1,!1,!1,!1,!0,1,j,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.B(null,null,q))
j.I(20,"Fate",!1,!1)
$.t1=j
j=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
j.j(0,$.ak,L.e("#b2e3eb"),!0)
j.j(0,$.am,L.e("#fefefe"),!0)
j.j(0,$.al,L.e("#dfdfdf"),!0)
j.j(0,$.av,L.e("#00ffff"),!0)
j.j(0,$.au,L.e("#009090"),!0)
j.j(0,$.ao,L.e("#999999"),!0)
j.j(0,$.ap,L.e("#8a8a8a"),!0)
j.j(0,$.an,L.e("#7a7a7a"),!0)
j.j(0,$.at,L.e("#d0e2f2"),!0)
j.j(0,$.as,L.e("#c3d4e3"),!0)
j.j(0,$.ar,L.e("#b2e3eb"),!0)
j.j(0,$.aq,L.e("#a4d4db"),!0)
k=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
k.j(0,$.ak,L.e("#FF9B00"),!0)
k.j(0,$.am,L.e("#FF9B00"),!0)
k.j(0,$.al,L.e("#FF8700"),!0)
k.j(0,$.av,L.e("#7F7F7F"),!0)
k.j(0,$.au,L.e("#727272"),!0)
k.j(0,$.ao,L.e("#A3A3A3"),!0)
k.j(0,$.ap,L.e("#999999"),!0)
k.j(0,$.an,L.e("#898989"),!0)
k.j(0,$.at,L.e("#EFEFEF"),!0)
k.j(0,$.as,L.e("#DBDBDB"),!0)
k.j(0,$.ar,L.e("#C6C6C6"),!0)
k.j(0,$.aq,L.e("#ADADAD"),!0)
k=new O.kQ(2,j,0.5,21,new H.p(0,null,null,null,null,null,0,r),null,"","",!1,"Snow",null,!1,!1,!1,!1,!0,1,k,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.B(null,null,q))
k.I(21,"Snow",!1,!1)
$.th=k
k=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
k.j(0,$.ak,L.e("#ee0000"),!0)
k.j(0,$.am,L.e("#ff0000"),!0)
k.j(0,$.al,L.e("#d10000"),!0)
k.j(0,$.av,L.e("#00ffff"),!0)
k.j(0,$.au,L.e("#00d1d1"),!0)
k.j(0,$.ao,L.e("#e68f39"),!0)
k.j(0,$.ap,L.e("#d67e2b"),!0)
k.j(0,$.an,L.e("#c46b1d"),!0)
k.j(0,$.at,L.e("#e65c00"),!0)
k.j(0,$.as,L.e("#b82e00"),!0)
k.j(0,$.ar,L.e("#ffd966"),!0)
k.j(0,$.aq,L.e("#d1ab3b"),!0)
j=P.f(H.a(["Fire","Track","Mercury","Heat","Burns","Mixtapes","Spaghetti"],s),t)
i=P.f(H.a(["BURN WARDEN","FIRESTARTER","RAP GOD"],s),t)
h=P.f(H.a(["Flamer","Florist","Friar","Foodie"],s),t)
g=P.f(H.a(["Nightcore","Flow","Sick","Fire","Fast","Sonic","burning","speed"],s),t)
f=P.f(H.a([new E.E($.d2,2,!0),new E.E($.d3,1,!0),new E.E($.cn,-2,!0)],o),p)
e=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
e.j(0,$.ak,L.e("#FF9B00"),!0)
e.j(0,$.am,L.e("#FF9B00"),!0)
e.j(0,$.al,L.e("#FF8700"),!0)
e.j(0,$.av,L.e("#7F7F7F"),!0)
e.j(0,$.au,L.e("#727272"),!0)
e.j(0,$.ao,L.e("#A3A3A3"),!0)
e.j(0,$.ap,L.e("#999999"),!0)
e.j(0,$.an,L.e("#898989"),!0)
e.j(0,$.at,L.e("#EFEFEF"),!0)
e.j(0,$.as,L.e("#DBDBDB"),!0)
e.j(0,$.ar,L.e("#C6C6C6"),!0)
e.j(0,$.aq,L.e("#ADADAD"),!0)
e=new O.j1(k,j,i,h,g,"Mixtape "," An ill beat is laid down. It's the one that is dropped when the Pimp is in the crib. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",f,0.5,22,new H.p(0,null,null,null,null,null,0,r),null,"","",!1,"Flow",null,!1,!1,!1,!1,!0,1,e,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.B(null,null,q))
e.I(22,"Flow",!1,!1)
$.t2=e
e=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
e.j(0,$.ak,L.e("#ffff33"),!0)
e.j(0,$.am,L.e("#ffff00"),!0)
e.j(0,$.al,L.e("#d1d100"),!0)
e.j(0,$.av,L.e("#00ffff"),!0)
e.j(0,$.au,L.e("#009999"),!0)
e.j(0,$.ao,L.e("#0c5494"),!0)
e.j(0,$.ap,L.e("#004785"),!0)
e.j(0,$.an,L.e("#003b75"),!0)
e.j(0,$.at,L.e("#20124d"),!0)
e.j(0,$.as,L.e("#11033d"),!0)
e.j(0,$.ar,L.e("#0c323b"),!0)
e.j(0,$.aq,L.e("#00232b"),!0)
m=new L.ag(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
m.j(0,$.ak,L.e("#FF9B00"),!0)
m.j(0,$.am,L.e("#FF9B00"),!0)
m.j(0,$.al,L.e("#FF8700"),!0)
m.j(0,$.av,L.e("#7F7F7F"),!0)
m.j(0,$.au,L.e("#727272"),!0)
m.j(0,$.ao,L.e("#A3A3A3"),!0)
m.j(0,$.ap,L.e("#999999"),!0)
m.j(0,$.an,L.e("#898989"),!0)
m.j(0,$.at,L.e("#EFEFEF"),!0)
m.j(0,$.as,L.e("#DBDBDB"),!0)
m.j(0,$.ar,L.e("#C6C6C6"),!0)
m.j(0,$.aq,L.e("#ADADAD"),!0)
n=new U.kW(e,0.5,23,new H.p(0,null,null,null,null,null,0,r),null,"","",!1,"Stars",null,!1,!1,!1,!1,!0,1,m,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.B(null,null,q))
n.I(23,"Stars",!1,!1)
$.tj=n
n=P.f(H.a([new E.E($.c4,1,!0),new E.E($.ec,1,!0)],o),p)
t=H.a(["musical","pianist","melodious","keyboard","rhythmic","singing","tuneful","harmonious","beating","pitch","waltzing","synthesized","piano","serenading","mozarts","swelling","staccato","pianissimo","monotone","polytempo"],s)
m=H.a(["Siren","Singer","Tenor","Trumpeter","Baritone","Dancer","Ballerina","Harpsicordist","Musician","Lutist","Violist","Rapper","Harpist","Lyricist","Virtuoso","Bass"],s)
e=H.a(["SINGING SCURRYWORT","MUSICAL MOPPET"],s)
l=H.a(["Rap","Music","Song Writing","Musicals","Dance","Singing","Ballet","Playing Guitar","Playing Piano","Mixtapes","Turntables"],s)
k=H.a(["nobody"],s)
j=P.f(H.a([],o),p)
i=H.a(["Nobody"],s)
h=H.a(["Nobody"],s)
t=new F.k2(n,t,m,e,l,!1,k,j,i,h,1,new H.p(0,null,null,null,null,null,0,r),["NONE"],Q.B(null,null,q),"loud","musical","Music")
t.q()
t.p()
B.c3(t)
$.tT=t
t=P.f(H.a([new E.E($.ds,-2,!0)],o),p)
n=H.a(["serious","researching","machiavellian","princeton","pedagogical","theoretical","hypothetical","meandering","scholarly","biological","pants","spectacled","scientist","scholastic","scientific","particular","measured"],s)
m=H.a(["Business","Stuck","Student","Scholar","Researcher","Scientist","Trainee","Biologist","Minerologist","Lecturer","Herbalist","Dean","Director","Honcho","Minder","Verbalist","Botanist"],s)
l=H.a(["NERDY NOODLER","SCAMPERING SCIENTIST"],s)
k=H.a(["Archaeology","Mathematics","Astronomy","Knowledge","Physics","Biology","Chemistry","Geneology","Science","Molecular Gastronomy","Model Trains","Politics","Geography","Cartography","Typography","History"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new S.hQ(t,n,m,l,k,!1,j,i,h,g,13,new H.p(0,null,null,null,null,null,0,r),["NONE"],Q.B(null,null,q),"nerdy","smart","Academic")
t.q()
t.p()
B.c3(t)
$.tM=t
t=P.f(H.a([new E.E($.d3,2,!0)],o),p)
n=H.a(["kinetic","muscley","preening","mighty","running","sporty","tennis","hard","ball","winning","trophy","sports","physical","sturdy","strapping","hardy","brawny","burly","robust","strong","muscular","phenomenal"],s)
m=H.a(["Swimmer","Trainer","Baller","Handler","Runner","Leaper","Racer","Vaulter","Major","Tracker","Heavy","Brawn","Darter","Brawler"],s)
l=H.a(["MUSCLES HOARDER","BODY BOOSTER"],s)
k=H.a(["Yoga","Fitness","Sports","Boxing","Track and Field","Swimming","Baseball","Hockey","Football","Basketball","Weight Lifting"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new M.hV(t,n,m,l,k,!1,j,i,h,g,4,new H.p(0,null,null,null,null,null,0,r),["NONE"],Q.B(null,null,q),"dumb","athletic","Athletic")
t.q()
t.p()
B.c3(t)
$.tN=t
t=P.f(H.a([new E.E($.f_,-1,!0),new E.E($.ec,1,!0)],o),p)
n=H.a(["mischievous","knavish","mercurial","beagle","sarcastic","satirical","mime","pantomime","practicing","pranking","wokka","kooky","haha","humor","talkative","harlequins","hoho"],s)
m=H.a(["Laugher","Humorist","Trickster","Sellout","Dummy","Silly","Bum","Huckster","Raconteur","Mime","Leaper","Vaudevillian","Baboon","Boor"],s)
l=H.a(["PRATFALL PRIEST","BEAGLE PUSS DARTABOUT"],s)
k=H.a(["Puppets","Pranks","Comedy","Jokes","Puns","Stand-up Comedy","Humor","Comics","Satire","Knock Knock Jokes"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new A.ia(t,n,m,l,k,!1,j,i,h,g,0,new H.p(0,null,null,null,null,null,0,r),["NONE"],Q.B(null,null,q),"dorky","funny","Comedy")
t.q()
t.p()
B.c3(t)
$.tO=t
t=P.f(H.a([new E.E($.c4,-1,!0),new E.E($.dt,-1,!0)],o),p)
n=H.a(["monochrome","poetic","majestic","keen","realistic","serious","theatrical","haute","beautiful","priceless","watercolor","sensational","highbrow","refined","precise","melodramatic"],s)
m=H.a(["Dramatist","Repository","Museum","Librarian","Hegemony","Hierarchy","Davinci","Renaissance","Viniculture","Treaty","Balmoral","Beauty","Business"],s)
l=H.a(["APPRENTICE ARTIST","CULTURE BUCKAROO"],s)
k=H.a(["Drawing","Painting","Documentaries","Fan Art","Graffiti","Theater","Fine Art","Literature","Books","Movie Making"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new M.id(t,n,m,l,k,!1,j,i,h,g,2,new H.p(0,null,null,null,null,null,0,r),["NONE"],Q.B(null,null,q),"pretentious","cultured","Culture")
t.q()
t.p()
B.c3(t)
$.tP=t
t=P.f(H.a([new E.E($.c4,1,!0),new E.E($.cn,1,!0)],o),p)
n=H.a(["home","motherly","patient","missing","knitting","rising","stylish","trendy","homey","baking","recipe","meddling","mature"],s)
m=H.a(["Baker","Darner","Mender","Mentor","Launderer","Vegetarian","Tailor","Teacher","Hestia","Helper","Decorator","Sewer"],s)
l=H.a(["BATTERBRAT","GRITTY GUARDIAN"],s)
k=H.a(["Sewing","Fashion","Meditation","Babies","Peace","Knitting","Cooking","Baking","Gardening","Crochet","Scrapbooking"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new V.ik(t,n,m,l,k,!1,j,i,h,g,8,new H.p(0,null,null,null,null,null,0,r),["NONE"],Q.B(null,null,q),"boring","domestic","Domestic")
t.q()
t.p()
B.c3(t)
$.tQ=t
t=P.f(H.a([new E.E($.ec,1,!0),new E.E($.d1,1,!0)],o),p)
n=H.a(["musing","pacific","minotaurs","kappas","restful","serene","titans","hazy","best","peaceful","witchs","sylphic","sylvan","shivan","hellkite","malachite"],s)
m=H.a(["Believer","Dragon","Magician","Sandman","Shinigami","Tengu","Harpy","Dwarf","Vampire","Lamia","Roc","Mermaid","Siren","Manticore","Banshee","Basilisk","Boggart"],s)
l=H.a(["FAKEY FAKE LOVER","FANTASTIC DREAMER"],s)
k=H.a(["Wizards","Horrorterrors","Mermaids","Unicorns","Science Fiction","Fantasy","Ninjas","Aliens","Conspiracies","Faeries","Elves","Vampires","Undead"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new U.iK(t,n,m,l,k,!1,j,i,h,g,7,new H.p(0,null,null,null,null,null,0,r),["NONE"],Q.B(null,null,q),"whimpy","imaginative","Fantasy")
t.q()
t.p()
B.c3(t)
$.tR=t
t=P.f(H.a([new E.E($.d3,1,!0),new E.E($.dt,1,!0)],o),p)
n=H.a(["karmic","mysterious","police","mind","keen","retribution","saving","tracking","hardboiled","broken","perceptive","watching","searching"],s)
m=H.a(["Detective","Defender","Laywer","Loyalist","Liaison","Vigilante","Tracker","Moralist","Retribution","Watchman","Searcher","Perception","Rebel"],s)
l=H.a(["JUSTICE JUICER","BALANCE RUMBLER"],s)
k=H.a(["Social Justice","Detectives","Mysteries","Leadership","Revolution","Justice","Equality","Sherlock Holmes"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new N.jA(t,n,m,l,k,!1,j,i,h,g,6,new H.p(0,null,null,null,null,null,0,r),["NONE"],Q.B(null,null,q),"harsh","fair-minded","Justice")
t.q()
t.p()
B.c3(t)
$.tS=t
t=P.f(H.a([new E.E($.d2,2,!0)],o),p)
n=H.a(["bat","worthy","mega","player","mighty","knightly","roguish","super","turbo","titanic","heroic","bitchin","power","wonder","wonderful","sensational","thors","bat"],s)
m=H.a(["Man","Superhero","Supervillain","Hero","Villain","Liaison","Director","Repeat","Blockbuster","Movie","Mission","Legend","Buddy","Spy","Bystander","Talent"],s)
l=H.a(["TRIVIA SMARTYPANTS","NIGHTLY NABBER"],s)
k=H.a(["Irony","Action Movies","Superheroes","Supervillains","Video Games","Movies","Television","Comic Books","TV","Heroes"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new G.ks(t,n,m,l,k,!1,j,i,h,g,9,new H.p(0,null,null,null,null,null,0,r),["NONE"],Q.B(null,null,q),"frivolous","geeky","PopCulture")
t.q()
t.p()
B.c3(t)
$.tV=t
t=P.f(H.a([new E.E($.cn,2,!0)],o),p)
n=H.a(["wishful","matchmaking","passionate","kinky","romantic","serendipitous","true","hearts","blushing","precious","warm","serenading","mesmerizing","mirrored","pairing","perverse"],s)
m=H.a(["Romantic","Dreamer","Beau","Hearthrob","Virtue","Beauty","Rainbow","Heart","Magnet","Miracle","Serendipity","Team"],s)
l=H.a(["QUESTING CUPID","ROMANCE EXPERT"],s)
k=H.a(["Girls","Boys","Romance","Shipping","Relationships","Love","Romantic Comedies","Fate","Dating"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new Q.kD(t,n,m,l,k,!1,j,i,h,g,12,new H.p(0,null,null,null,null,null,0,r),["NONE"],Q.B(null,null,q),"obsessive","romantic","Romantic")
t.q()
t.p()
B.c3(t)
$.tW=t
t=P.f(H.a([new E.E($.c4,2,!0)],o),p)
n=H.a(["master","playful","matchmaking","kind","regular","social","trusting","honest","benign","precious","wondering","sarcastic","talkative","petulant"],s)
m=H.a(["Socialist","Defender","Mentor","Leader","Veterinarian","Therapist","Buddy","Healer","Helper","Mender","Lender","Dog","Bishop","Rally"],s)
l=H.a(["FRIEND-TO-ALL","FRIEND COLLECTOR"],s)
k=H.a(["Psychology","Religion","Animal Training","Pets","Animals","Online Roleplaying","Live Action Roleplaying","Tabletop Roleplaying","Role Playing","Social Media","Charity","Mediating"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new N.kR(t,n,m,l,k,!1,j,i,h,g,11,new H.p(0,null,null,null,null,null,0,r),["NONE"],Q.B(null,null,q),"shallow","extroverted","Social")
t.q()
t.p()
B.c3(t)
$.tX=t
t=P.f(H.a([new E.E($.cn,-1,!0),new E.E($.c4,-1,!0)],o),p)
n=H.a(["tyranical","heretical","murderous","persnickety","mundane","killer","rough","sneering","hateful","bastard","pungent","wasted","snooty","wicked","perverted","master","hellbound"],s)
m=H.a(["Butcher","Blasphemer","Barbarian","Tyrant","Superior","Bastard","Dastard","Despot","Bitch","Horror","Victim","Hellhound","Devil","Demon","Shark","Lupin","Mindflayer","Mummy","Hoarder","Demigod"],s)
l=H.a(["ENEMY #1","JERKWAD JOURNEYER"],s)
k=H.a(["Arson","Clowns","Treasure","Money","Violence","Death","Animal Fights","Insults","Hoarding","Status","Classism","Online Trolling","Intimidation","Fighting","Genocide","Murder","War"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new V.lb(t,n,m,l,k,!1,j,i,h,g,5,new H.p(0,null,null,null,null,null,0,r),["NONE"],Q.B(null,null,q),"terrible","honest","Terrible")
t.q()
t.p()
B.c3(t)
$.tZ=t
t=P.f(H.a([new E.E($.ds,2,!0)],o),p)
n=H.a(["wordy","scribbling","meandering","pageturning","mysterious","knowledgeable","reporting","scribing","tricky","hardcover","bookish","page","writing","scribbler","wordsmiths"],s)
m=H.a(["Shakespeare","Host","Bard","Drifter","Reader","Booker","Missive","Labret","Lacuna","Varvel","Hagiomaniac","Traveler","Thesis"],s)
l=H.a(["SHAKY SHAKESPEARE","QUILL RUINER"],s)
k=H.a(["Writing","Fan Fiction","Script Writing","Character Creation","Dungeon Mastering","Authoring"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new F.lE(t,n,m,l,k,!1,j,i,h,g,3,new H.p(0,null,null,null,null,null,0,r),["NONE"],Q.B(null,null,q),"wordy","lettered","Writing")
t.q()
t.p()
B.c3(t)
$.u_=t
t=P.f(H.a([new E.E($.d1,2,!0)],o),p)
n=H.a(["kludge","pixel","machinist","programming","mechanical","kilo","robotic","silicon","techno","hardware","battery","python","windows","serial","statistical"],s)
m=H.a(["Roboticist","Hacker","Haxor","Technologist","Robot","Machine","Machinist","Droid","Binary","Breaker","Vaporware","Lag","Laptop","Spaceman","Runner","L33T","Data"],s)
l=H.a(["HURRYWORTH HACKER","CLANKER CURMUDGEON"],s)
k=H.a(["Programming","Hacking","Coding","Robots","Artificial Intelligence","Engineering","Manufacturing","Cyborgs","Androids","A.I.","Automation"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new D.la(t,n,m,l,k,!1,j,i,h,g,10,new H.p(0,null,null,null,null,null,0,r),["NONE"],Q.B(null,null,q),"awkward","techy","Technology")
t.q()
t.p()
B.c3(t)
$.tY=t
t=H.a(["nobody"],s)
p=P.f(H.a([],o),p)
o=H.a(["Nobody"],s)
s=H.a(["Nobody"],s)
t=new B.e_(!0,t,p,o,s,-13,new H.p(0,null,null,null,null,null,0,r),["NONE"],Q.B(null,null,q),"","","Null")
t.q()
t.p()
B.c3(t)
$.tU=t
A.z7()},
B9:function(a){P.fg("trying to print corruption message "+J.bX(a))
$.oR.gde().aD(0,"beforeend","ERROR: CRASHING EVEN IN NON SIMULATION. THIS IS STUPID.",C.f,null)
$.oR.fj()
return!1},
z7:function(){var t,s
if($.qx)return
$.qx=!0
t=[P.H]
s=new Y.ld(H.a([],t))
$.nK=s
Z.cs(s,"txt",null)
Z.cs($.nK,"vert","x-shader/x-vertex")
Z.cs($.nK,"frag","x-shader/x-fragment")
$.tI=new Y.i5(H.a([],t))
s=new B.lF(H.a([],t))
$.pP=s
Z.cs(s,"zip",null)
Z.cs($.pP,"bundle",null)
s=new Q.kr(H.a([],t))
$.pO=s
Z.cs(s,"png",null)
Z.cs($.pO,"jpg","image/jpeg")
s=new M.kV(H.a([],t))
$.tJ=s
Z.cs(s,"psprite",null)
t=new V.j2(H.a([],t))
$.nJ=t
Z.cs(t,"ttf",null)
Z.cs($.nJ,"otf",null)
Z.cs($.nJ,"woff",null)}},V={ik:function ik(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},j2:function j2(a){this.a=a},k_:function k_(rx,ry,x1,x2,y1,y2,t,w,B,C,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.w=w
_.B=B
_.C=C
_.D=D
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},kj:function kj(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id},lb:function lb(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch}},U={il:function il(rx,ry,x1,x2,y1,y2,t,w,B,C,D,V,cD,cE,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.w=w
_.B=B
_.C=C
_.D=D
_.V=V
_.cD=cD
_.cE=cE
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},iK:function iK(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},jP:function jP(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id},c:function c(a){this.a=a},a1:function a1(b,c,a){this.b=b
this.c=c
this.a=a},ae:function ae(x,a,b,c,d,e,f,r){var _=this
_.x=x
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r},kW:function kW(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},lg:function lg(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id}},X={fA:function fA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},fo:function fo(){},j8:function j8(rx,ry,x1,x2,y1,y2,t,w,B,C,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.w=w
_.B=B
_.C=C
_.D=D
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},z:function z(a,b,c){this.a=a
this.b=b
this.c=c}},N={ab:function ab(){},jA:function jA(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},kt:function kt(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id},kC:function kC(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id},kR:function kR(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},kS:function kS(rx,ry,x1,x2,y1,y2,t,w,B,C,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.w=w
_.B=B
_.C=C
_.D=D
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},lh:function lh(rx,ry,x1,x2,y1,y2,t,w,B,C,D,V,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.w=w
_.B=B
_.C=C
_.D=D
_.V=V
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},
z9:function(a){var t,s,r,q,p,o,n,m,l
t=J.bX(a)
s=new W.hB(document.querySelectorAll("link"),[null])
for(r=new H.dl(s,s.gm(s),0,null,[null]);r.v();){q=r.d
p=J.aP(q)
if(!!p.$iseI&&q.rel==="stylesheet"){o=$.$get$ko()
H.w(p.gX(q))
o.toString
o=t.length
n=Math.min(o,J.c1(p.gX(q)))
for(m=0;m<n;++m){if(m>=o)return H.L(t,m)
if(t[m]!==J.fh(p.gX(q),m)){l=C.b.af(t,m)
$.$get$ko().toString
return l.split("/").length-1}continue}}}r=$.$get$ko()
r.toString
F.qy(C.n).$1(r.c8(C.n,"Didn't find a css link to derive relative path"))
return 0},
qA:function(){var t=P.r4()
if(!$.$get$kn().a1(t))$.$get$kn().i(0,t,N.z9(t))
return $.$get$kn().l(0,t)}},E={eE:function eE(){},kg:function kg(){},E:function E(a,b,c){this.a=a
this.b=b
this.c=c},eo:function eo(d,a,b,c){var _=this
_.d=d
_.a=a
_.b=b
_.c=c},hU:function hU(a,b,c){this.a=a
this.b=b
this.c=c},k1:function k1(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id},kv:function kv(rx,ry,x1,x2,y1,y2,t,w,B,C,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.w=w
_.B=B
_.C=C
_.D=D
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},kG:function kG(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id},lz:function lz(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id}},B={j7:function j7(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id},
c3:function(a){var t=a.f
if($.$get$fY().a1(t))throw H.r("Duplicate aspect id for "+a.n(0)+": "+t+" is already registered for "+J.bX($.$get$fY().l(0,t))+".")
$.$get$fY().i(0,t,a)},
u0:function(){var t=$.$get$fY()
t=t.gaw(t)
return new H.d5(t,new B.jg(),[H.b8(t,"C",0)])},
jg:function jg(){},
e_:function e_(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
lF:function lF(a){this.a=a}},Q={jd:function jd(){},kr:function kr(a){this.a=a},jD:function jD(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},kD:function kD(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},ly:function ly(rx,ry,x1,x2,y1,y2,t,w,B,C,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.w=w
_.B=B
_.C=C
_.D=D
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},oB:function oB(){},
B:function(a,b,c){var t=new Q.lB(null,null,[c])
t.dr(a,b,c)
return t},
p4:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=Q.B(d,null,e)
s=a.gm(a)
C.a.sm(t.b,s)
if(H.dE(a,"$isC",[e],"$asC"))if(H.dE(a,"$iscu",[e],"$ascu"))for(s=J.c0(a.gbd()),r=0;s.v();){q=s.gF()
p=t.b
o=p.length
if(r>=o)return H.L(p,r)
p[r]=q;++r}else for(s=a.gM(a),p=[H.O(t,0)],r=0;s.v();){n=s.gF()
o=t.b
m=t.k(n,1)
if(r>=o.length)return H.L(o,r)
o[r]=new Q.h(n,m,p);++r}else for(s=a.gM(a),p=[e],o=[H.O(t,0)];s.v();){l=s.gF()
if(H.AN(l,e)){m=t.b
k=t.k(l,1)
if(0>=m.length)return H.L(m,0)
m[0]=new Q.h(l,k,o)}else if(H.dE(l,"$ish",p,null)){m=t.b
k=m.length
if(0>=k)return H.L(m,0)
m[0]=l}else throw H.r("Invalid entry type "+H.w(J.rL(l))+" for WeightedList<"+H.w(H.bB(H.cx(e)))+">. Should be "+H.w(H.bB(H.cx(e)))+" or WeightPair<"+H.w(H.bB(H.cx(e)))+">.")}return t},
p5:function(a,b,c,d){return new Q.hu(J.pp(a.gbd(),new Q.lC(c,d,b)),null,[c,d])},
cu:function cu(){},
lB:function lB(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
ht:function ht(){},
h:function h(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
dz:function dz(){},
f3:function f3(){},
lA:function lA(a,$ti){this.a=a
this.$ti=$ti},
hu:function hu(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
lC:function lC(a,b,c){this.a=a
this.b=b
this.c=c}},G={jG:function jG(rx,ry,x1,x2,y1,y2,t,w,B,C,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.w=w
_.B=B
_.C=C
_.D=D
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},ks:function ks(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
tu:function(a){var t,s,r,q,p,o,n,m,l
t=G.a2
s=P.ol(a,t)
r=P.a5(null,null,null,t)
q=H.a([],[G.d])
for(t=G.z5(),p=J.c0(t.a),t=new H.dy(p,t.b,[H.O(t,0)]);t.v();){o=p.gF()
if(o.cZ(s))q.push(o)}C.a.dc(q)
for(t=q.length,n=0;n<q.length;q.length===t||(0,H.cy)(q),++n){o=q[n]
if(o.cZ(s)){r.h(0,o)
for(p=o.e,m=p.length,l=0;l<p.length;p.length===m||(0,H.cy)(p),++l)s.a0(0,p[l])}}if(s.a!==0)r.ct(0,s)
return r},
z5:function(){var t=$.$get$b()
t.toString
return new H.d5(t,new G.jq(),[H.O(t,0)])},
a2:function a2(){},
aK:function aK(a,b,c){this.a=a
this.b=b
this.c=c},
a9:function a9(a,b,c){this.a=a
this.b=b
this.c=c},
bq:function bq(a,b,c){this.a=a
this.b=b
this.c=c},
d:function d(d,e,a,b,c){var _=this
_.d=d
_.e=e
_.a=a
_.b=b
_.c=c},
jq:function jq(){}},F={k2:function k2(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},lE:function lE(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
qy:function(a){if(a===C.m){window
return C.h.gab(C.h)}if(a===C.n){window
return C.h.gf3()}if(a===C.P){window
return C.h.geG()}return P.AP()},
eK:function eK(a,b){this.a=a
this.b=b},
h9:function h9(a,b){this.a=a
this.b=b},
oj:function oj(){}},R={
zv:function(a){var t,s
if(a.gm(a).ad(0,1)){a.l(0,1)
a.l(0,1)
t=!0}else t=!1
s=a.l(0,0)
s.gf9(s).gfh().cM("checking for two players, ps is "+H.w(a)+", ret is "+t)
return t},
zj:function(a){a.ga_(a).gb8()
return!1},
zu:function(a){a.ga_(a).gb8()
return!1},
zt:function(a){a.ga_(a).gb8()
return!1},
zs:function(a){return a.ga_(a).gaJ().gfg()},
zq:function(a){return a.ga_(a).gaJ().gfe()},
zp:function(a){return a.ga_(a).gaJ().gfd()},
zm:function(a){return a.ga_(a).gaJ().gfb()},
zo:function(a){return a.ga_(a).gaJ().gfc()},
zr:function(a){return a.ga_(a).gaJ().gff()},
zn:function(a){var t=a.ga_(a)
t.gb8()
t.gb8()
return!1},
zk:function(a){return!0},
zl:function(a){var t,s
t=a.ga_(a)
s="is it JR? "+H.w(t.gcw())
t.gcw()
P.fg(s+" false ")
t.gcw()
return!1},
ku:function ku(){},
X:function X(c,d,e,f,r,x,y,z,Q,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.a=a
_.b=b},
W:function W(c,d,e,f,r,x,y,z,Q,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.a=a
_.b=b},
a6:function a6(c,d,e,f,r,x,y,z,Q,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.a=a
_.b=b},
bn:function bn(c,d,e,f,r,x,y,z,Q,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.a=a
_.b=b},
l7:function l7(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id},
eD:function eD(){},
ox:function ox(){},
ow:function ow(){}},D={la:function la(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
A1:function(){if($.qO)return
$.qO=!0
var t=new D.c_("Experience","learned","na\xefve",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$c5().push(t)
t.y=0
$.qN=t
t=new D.c_("Grist Level","rich","poor",!1,!1,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$c5().push(t)
$.A0=t
t=new D.hw(0.03,"Power","strong","weak",!0,!0,!1,10,0.5,-1/0,1/0,-1/0,1/0)
$.$get$c5().push(t)
t.y=2.5
t.Q=1
$.d3=t
t=new D.hw(0.04,"Health","sturdy","fragile",!0,!0,!1,10,1,-1/0,1/0,-1/0,1/0)
$.$get$c5().push(t)
t.y=2.5
$.dt=t
t=new D.c_("Current Health","healthy","infirm",!1,!0,!0,1,1,-1/0,1/0,-1/0,1/0)
$.$get$c5().push(t)
$.A_=t
t=new D.c_("Mobility","fast","slow",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$c5().push(t)
$.d2=t
t=new D.kz("Relationships","friendly","aggressive",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$c5().push(t)
$.cn=t
t=new D.c_("Sanity","calm","crazy",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$c5().push(t)
$.c4=t
t=new D.c_("Free Will","willful","gullible",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$c5().push(t)
$.ds=t
t=new D.c_("Maximum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$c5().push(t)
$.ec=t
t=new D.c_("Minimum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$c5().push(t)
$.f_=t
t=new D.c_("Alchemy","creative","boring",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$c5().push(t)
$.d1=t
t=new D.c_("SBURB Lore","woke","clueless",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$c5().push(t)
$.bW=t},
oT:function(){var t=$.$get$c5()
return new H.d5(t,new D.kY(),[H.O(t,0)])},
kY:function kY(){},
c_:function c_(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
hw:function hw(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
kz:function kz(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch}}
var v=[C,H,J,P,W,T,S,K,L,M,O,Y,Z,A,V,U,X,N,E,B,Q,G,F,R,D]
setFunctionNamesIfNecessary(v)
var $={}
H.og.prototype={}
J.R.prototype={
H:function(a,b){return a===b},
gL:function(a){return H.dm(a)},
n:function(a){return H.hk(a)},
gT:function(a){return new H.cQ(H.hL(a),null)},
$iseD:1,
$isaZ:1,
$isjx:1,
$isR:1,
$isjx:1,
$isR:1}
J.ju.prototype={
n:function(a){return String(a)},
gL:function(a){return a?519018:218159},
gT:function(a){return C.a4},
$iscw:1}
J.jw.prototype={
H:function(a,b){return null==b},
n:function(a){return"null"},
gL:function(a){return 0},
gT:function(a){return C.Z},
$isct:1}
J.eH.prototype={
gL:function(a){return 0},
gT:function(a){return C.Y},
n:function(a){return String(a)},
$isjx:1,
h:function(a,b){return a.add(b)},
a0:function(a,b){return a.remove(b)},
gbc:function(a){return a.left},
gbe:function(a){return a.top},
gar:function(a){return a.width},
gap:function(a){return a.height}}
J.kq.prototype={}
J.dw.prototype={}
J.dj.prototype={
n:function(a){var t=a[$.$get$px()]
return t==null?this.di(a):J.bX(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.dh.prototype={
b9:function(a,b){if(!!a.immutable$list)throw H.r(new P.aN(b))},
bB:function(a,b){if(!!a.fixed$length)throw H.r(new P.aN(b))},
h:function(a,b){this.bB(a,"add")
a.push(b)},
a7:function(a,b){return new H.e6(a,b,[H.O(a,0),null])},
cN:function(a,b){var t,s,r,q
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<a.length;++r){q=H.w(a[r])
if(r>=t)return H.L(s,r)
s[r]=q}return s.join(b)},
bV:function(a,b){return H.qR(a,b,null,H.O(a,0))},
ex:function(a,b,c){var t,s,r
t=a.length
for(s=b,r=0;r<t;++r){s=c.$2(s,a[r])
if(a.length!==t)throw H.r(new P.c6(a))}return s},
Z:function(a,b){if(b>>>0!==b||b>=a.length)return H.L(a,b)
return a[b]},
dg:function(a,b,c){if(b<0||b>a.length)throw H.r(P.bD(b,0,a.length,"start",null))
if(c==null)c=a.length
else{if(typeof c!=="number"||Math.floor(c)!==c)throw H.r(H.bF(c))
if(c<b||c>a.length)throw H.r(P.bD(c,b,a.length,"end",null))}if(b===c)return H.a([],[H.O(a,0)])
return H.a(a.slice(b,c),[H.O(a,0)])},
ga_:function(a){if(a.length>0)return a[0]
throw H.r(H.jt())},
gaR:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.r(H.jt())},
R:function(a,b,c,d,e){var t,s,r
this.b9(a,"setRange")
P.cm(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.bo(P.bD(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.r(H.qu())
if(e<b)for(s=t-1;s>=0;--s){r=e+s
if(r>>>0!==r||r>=d.length)return H.L(d,r)
a[b+s]=d[r]}else for(s=0;s<t;++s){r=e+s
if(r>>>0!==r||r>=d.length)return H.L(d,r)
a[b+s]=d[r]}},
ae:function(a,b,c,d){return this.R(a,b,c,d,0)},
ba:function(a,b,c,d){var t
this.b9(a,"fill range")
P.cm(b,c,a.length,null,null,null)
for(t=b;t<c;++t)a[t]=d},
a8:function(a,b,c,d){var t,s,r,q,p,o
this.bB(a,"replaceRange")
P.cm(b,c,a.length,null,null,null)
d=C.b.a2(d)
if(typeof c!=="number")return c.bi()
t=c-b
s=d.length
r=b+s
q=a.length
if(t>=s){p=t-s
o=q-p
this.ae(a,b,r,d)
if(p!==0){this.R(a,r,o,a,c)
this.sm(a,o)}}else{o=q+(s-t)
this.sm(a,o)
this.R(a,r,o,a,c)
this.ae(a,b,r,d)}},
ev:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])!==!0)return!1
if(a.length!==t)throw H.r(new P.c6(a))}return!0},
bW:function(a,b){var t
this.b9(a,"sort")
t=b==null?P.AO():b
H.hq(a,0,a.length-1,t)},
dc:function(a){return this.bW(a,null)},
aC:function(a,b,c){var t
if(c>=a.length)return-1
if(c<0)c=0
for(t=c;t<a.length;++t)if(J.bj(a[t],b))return t
return-1},
aN:function(a,b){return this.aC(a,b,0)},
gJ:function(a){return a.length===0},
n:function(a){return P.h3(a,"[","]")},
P:function(a,b){var t=H.a(a.slice(0),[H.O(a,0)])
return t},
a2:function(a){return this.P(a,!0)},
gM:function(a){return new J.hS(a,a.length,0,null,[H.O(a,0)])},
gL:function(a){return H.dm(a)},
gm:function(a){return a.length},
sm:function(a,b){this.bB(a,"set length")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.r(P.en(b,"newLength",null))
if(b<0)throw H.r(P.bD(b,0,null,"newLength",null))
a.length=b},
l:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.r(H.bG(a,b))
if(b>=a.length||b<0)throw H.r(H.bG(a,b))
return a[b]},
i:function(a,b,c){this.b9(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.r(H.bG(a,b))
if(b>=a.length||b<0)throw H.r(H.bG(a,b))
a[b]=c},
$isbZ:1,
$asbZ:function(){},
$isI:1,
$asI:null,
$isJ:1,
$asJ:null,
$isC:1,
$asC:null}
J.of.prototype={}
J.hS.prototype={
gF:function(){return this.d},
v:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.r(H.cy(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.e4.prototype={
a5:function(a,b){var t
if(typeof b!=="number")throw H.r(H.bF(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gbG(b)
if(this.gbG(a)===t)return 0
if(this.gbG(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbG:function(a){return a===0?1/a<0:a<0},
aB:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.r(new P.aN(""+a+".floor()"))},
aV:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.r(new P.aN(""+a+".round()"))},
U:function(a,b,c){if(C.c.a5(b,c)>0)throw H.r(H.bF(b))
if(this.a5(a,b)<0)return b
if(this.a5(a,c)>0)return c
return a},
aX:function(a,b){var t,s,r,q
if(b<2||b>36)throw H.r(P.bD(b,2,36,"radix",null))
t=a.toString(b)
if(C.b.N(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)H.bo(new P.aN("Unexpected toString result: "+t))
r=J.bi(s)
t=r.l(s,1)
q=+r.l(s,3)
if(r.l(s,2)!=null){t+=r.l(s,2)
q-=r.l(s,2).length}return t+C.b.a9("0",q)},
n:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gL:function(a){return a&0x1FFFFFFF},
bS:function(a){return-a},
W:function(a,b){if(typeof b!=="number")throw H.r(H.bF(b))
return a+b},
a9:function(a,b){if(typeof b!=="number")throw H.r(H.bF(b))
return a*b},
bg:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
Y:function(a,b){return(a|0)===a?a/b|0:this.e9(a,b)},
e9:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.r(new P.aN("Result of truncating division is "+H.w(t)+": "+H.w(a)+" ~/ "+H.w(b)))},
am:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
e7:function(a,b){if(b<0)throw H.r(H.bF(b))
return b>31?0:a>>>b},
K:function(a,b){if(typeof b!=="number")throw H.r(H.bF(b))
return a<b},
ad:function(a,b){if(typeof b!=="number")throw H.r(H.bF(b))
return a>b},
at:function(a,b){if(typeof b!=="number")throw H.r(H.bF(b))
return a>=b},
gT:function(a){return C.a7},
$iscr:1}
J.h5.prototype={
gT:function(a){return C.a6},
$isV:1,
$iscr:1,
$isK:1}
J.jv.prototype={
gT:function(a){return C.a5},
$isV:1,
$iscr:1}
J.di.prototype={
N:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.r(H.bG(a,b))
if(b<0)throw H.r(H.bG(a,b))
if(b>=a.length)H.bo(H.bG(a,b))
return a.charCodeAt(b)},
S:function(a,b){if(b>=a.length)throw H.r(H.bG(a,b))
return a.charCodeAt(b)},
W:function(a,b){if(typeof b!=="string")throw H.r(P.en(b,null,null))
return a+b},
eY:function(a,b,c){return H.Be(a,b,c,null)},
dd:function(a,b){var t=a.split(b)
return t},
a8:function(a,b,c,d){var t,s
H.pc(b)
c=P.cm(b,c,a.length,null,null,null)
H.pc(c)
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
aa:function(a,b,c){var t
H.pc(c)
if(typeof c!=="number")return c.K()
if(c<0||c>a.length)throw H.r(P.bD(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
a4:function(a,b){return this.aa(a,b,0)},
A:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.bo(H.bF(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.bo(H.bF(c))
if(typeof b!=="number")return b.K()
if(b<0)throw H.r(P.kx(b,null,null))
if(typeof c!=="number")return H.aW(c)
if(b>c)throw H.r(P.kx(b,null,null))
if(c>a.length)throw H.r(P.kx(c,null,null))
return a.substring(b,c)},
af:function(a,b){return this.A(a,b,null)},
f2:function(a){return a.toUpperCase()},
a9:function(a,b){var t,s
if(typeof b!=="number")return H.aW(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.r(C.B)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
aC:function(a,b,c){var t
if(c<0||c>a.length)throw H.r(P.bD(c,0,a.length,null,null))
t=a.indexOf(b,c)
return t},
aN:function(a,b){return this.aC(a,b,0)},
el:function(a,b,c){if(c>a.length)throw H.r(P.bD(c,0,a.length,null,null))
return H.Bd(a,b,c)},
gJ:function(a){return a.length===0},
a5:function(a,b){var t
if(typeof b!=="string")throw H.r(H.bF(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
n:function(a){return a},
gL:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gT:function(a){return C.a_},
gm:function(a){return a.length},
l:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.r(H.bG(a,b))
if(b>=a.length||b<0)throw H.r(H.bG(a,b))
return a[b]},
$isbZ:1,
$asbZ:function(){},
$isH:1}
H.i9.prototype={
gm:function(a){return this.a.length},
l:function(a,b){return C.b.N(this.a,b)},
$asf1:function(){return[P.K]},
$ash8:function(){return[P.K]},
$aseY:function(){return[P.K]},
$asI:function(){return[P.K]},
$asJ:function(){return[P.K]},
$asC:function(){return[P.K]}}
H.J.prototype={$asJ:null}
H.dk.prototype={
gM:function(a){return new H.dl(this,this.gm(this),0,null,[H.b8(this,"dk",0)])},
gJ:function(a){return this.gm(this)===0},
ga_:function(a){if(this.gm(this)===0)throw H.r(H.jt())
return this.Z(0,0)},
a7:function(a,b){return new H.e6(this,b,[H.b8(this,"dk",0),null])},
P:function(a,b){var t,s,r
t=H.a([],[H.b8(this,"dk",0)])
C.a.sm(t,this.gm(this))
for(s=0;s<this.gm(this);++s){r=this.Z(0,s)
if(s>=t.length)return H.L(t,s)
t[s]=r}return t},
a2:function(a){return this.P(a,!0)}}
H.l5.prototype={
gdN:function(){var t=J.c1(this.a)
return t},
ge8:function(){var t,s
t=J.c1(this.a)
s=this.b
if(J.bS(s,t))return t
return s},
gm:function(a){var t,s
t=J.c1(this.a)
s=this.b
if(J.pl(s,t))return 0
if(typeof s!=="number")return H.aW(s)
return t-s},
Z:function(a,b){var t=J.dF(this.ge8(),b)
if(J.d7(b,0)||J.pl(t,this.gdN()))throw H.r(P.cY(b,this,"index",null,null))
return J.pn(this.a,t)},
P:function(a,b){var t,s,r,q,p,o,n,m
t=this.b
s=this.a
r=J.bi(s)
q=r.gm(s)
if(typeof t!=="number")return H.aW(t)
p=q-t
if(p<0)p=0
o=this.$ti
if(b){n=H.a([],o)
C.a.sm(n,p)}else n=H.a(new Array(p),o)
for(m=0;m<p;++m){o=r.Z(s,t+m)
if(m>=n.length)return H.L(n,m)
n[m]=o
if(r.gm(s)<q)throw H.r(new P.c6(this))}return n},
a2:function(a){return this.P(a,!0)},
dn:function(a,b,c,d){var t=this.b
if(J.d7(t,0))H.bo(P.bD(t,0,null,"start",null))}}
H.dl.prototype={
gF:function(){return this.d},
v:function(){var t,s,r,q
t=this.a
s=J.bi(t)
r=s.gm(t)
if(this.b!==r)throw H.r(new P.c6(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.Z(t,q);++this.c
return!0}}
H.eL.prototype={
gM:function(a){return new H.ha(null,J.c0(this.a),this.b,this.$ti)},
gm:function(a){return J.c1(this.a)},
gJ:function(a){return J.ni(this.a)},
$asC:function(a,b){return[b]}}
H.fx.prototype={$isJ:1,
$asJ:function(a,b){return[b]},
$asC:function(a,b){return[b]}}
H.ha.prototype={
v:function(){var t=this.b
if(t.v()){this.a=this.c.$1(t.gF())
return!0}this.a=null
return!1},
gF:function(){return this.a},
$ash4:function(a,b){return[b]}}
H.e6.prototype={
gm:function(a){return J.c1(this.a)},
Z:function(a,b){return this.b.$1(J.pn(this.a,b))},
$asdk:function(a,b){return[b]},
$asJ:function(a,b){return[b]},
$asC:function(a,b){return[b]}}
H.d5.prototype={
gM:function(a){return new H.dy(J.c0(this.a),this.b,this.$ti)},
a7:function(a,b){return new H.eL(this,b,[H.O(this,0),null])}}
H.dy.prototype={
v:function(){var t,s
for(t=this.a,s=this.b;t.v();)if(s.$1(t.gF())===!0)return!0
return!1},
gF:function(){return this.a.gF()}}
H.fI.prototype={
sm:function(a,b){throw H.r(new P.aN("Cannot change the length of a fixed-length list"))},
a8:function(a,b,c,d){throw H.r(new P.aN("Cannot remove from a fixed-length list"))}}
H.lo.prototype={
i:function(a,b,c){throw H.r(new P.aN("Cannot modify an unmodifiable list"))},
sm:function(a,b){throw H.r(new P.aN("Cannot change the length of an unmodifiable list"))},
R:function(a,b,c,d,e){throw H.r(new P.aN("Cannot modify an unmodifiable list"))},
ae:function(a,b,c,d){return this.R(a,b,c,d,0)},
a8:function(a,b,c,d){throw H.r(new P.aN("Cannot remove from an unmodifiable list"))},
ba:function(a,b,c,d){throw H.r(new P.aN("Cannot modify an unmodifiable list"))},
$isI:1,
$asI:null,
$isJ:1,
$asJ:null,
$isC:1,
$asC:null}
H.f1.prototype={$asI:null,$asJ:null,$asC:null,$isI:1,$isJ:1,$isC:1}
H.ne.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.nf.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.mr.prototype={}
H.ef.prototype={
cu:function(a,b){if(!this.f.H(0,a))return
if(this.Q.h(0,b)&&!this.y)this.y=!0
this.by()},
eX:function(a){var t,s,r,q,p,o
if(!this.y)return
t=this.Q
t.a0(0,a)
if(t.a===0){for(t=this.z;s=t.length,s!==0;){if(0>=s)return H.L(t,-1)
r=t.pop()
s=u.globalState.f.a
q=s.b
p=s.a
o=p.length
q=(q-1&o-1)>>>0
s.b=q
if(q<0||q>=o)return H.L(p,q)
p[q]=r
if(q===s.c)s.c9();++s.d}this.y=!1}this.by()},
ee:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.aP(a),s=0;r=this.ch,s<r.length;s+=2)if(t.H(a,r[s])){t=this.ch
r=s+1
if(r>=t.length)return H.L(t,r)
t[r]=b
return}r.push(a)
this.ch.push(b)},
eV:function(a){var t,s,r
if(this.ch==null)return
for(t=J.aP(a),s=0;r=this.ch,s<r.length;s+=2)if(t.H(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.bo(new P.aN("removeRange"))
P.cm(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
d9:function(a,b){if(!this.r.H(0,a))return
this.db=b},
eB:function(a,b,c){var t=J.aP(b)
if(!t.H(b,0))t=t.H(b,1)&&!this.cy
else t=!0
if(t){J.em(a,c)
return}t=this.cx
if(t==null){t=P.om(null,null)
this.cx=t}t.ak(new H.mm(a,c))},
eA:function(a,b){var t
if(!this.r.H(0,a))return
t=J.aP(b)
if(!t.H(b,0))t=t.H(b,1)&&!this.cy
else t=!0
if(t){this.bb()
return}t=this.cx
if(t==null){t=P.om(null,null)
this.cx=t}t.ak(this.geL())},
eC:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db===!0&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.fg(a)
if(b!=null)P.fg(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.bX(a)
s[1]=b==null?null:J.bX(b)
for(r=new P.dD(t,t.r,null,null,[null]),r.c=t.e;r.v();)J.em(r.d,s)},
aM:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.cz(o)
p=H.cq(o)
this.eC(q,p)
if(this.db===!0){this.bb()
if(this===u.globalState.e)throw o}}finally{this.cy=r
u.globalState.d=t
if(t!=null)$=t.geK()
if(this.cx!=null)for(;n=this.cx,!n.gJ(n);)this.cx.cT().$0()}return s},
cP:function(a){return this.b.l(0,a)},
c_:function(a,b){var t=this.b
if(t.a1(a))throw H.r(P.is("Registry: ports must be registered only once."))
t.i(0,a,b)},
by:function(){var t=this.b
if(t.gm(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.bb()},
bb:function(){var t,s,r,q,p
t=this.cx
if(t!=null)t.aA(0)
for(t=this.b,s=t.gaw(t),s=s.gM(s);s.v();)s.gF().dG()
t.aA(0)
this.c.aA(0)
u.globalState.z.a0(0,this.a)
this.dx.aA(0)
if(this.ch!=null){for(r=0;t=this.ch,s=t.length,r<s;r+=2){q=t[r]
p=r+1
if(p>=s)return H.L(t,p)
J.em(q,t[p])}this.ch=null}},
geK:function(){return this.d},
gem:function(){return this.e}}
H.mm.prototype={
$0:function(){J.em(this.a,this.b)},
$S:function(){return{func:1,v:true}}}
H.lY.prototype={
eo:function(){var t=this.a
if(t.b===t.c)return
return t.cT()},
cX:function(){var t,s,r
t=this.eo()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.a1(u.globalState.e.a))if(u.globalState.r===!0){s=u.globalState.e.b
s=s.gJ(s)}else s=!1
else s=!1
else s=!1
if(s)H.bo(P.is("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x===!0){r=s.z
r=r.gJ(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.eJ(["command","close"])
r=new H.cv(!0,new P.hE(0,null,null,null,null,null,0,[null,P.K])).a3(r)
s.toString
self.postMessage(r)}return!1}t.eU()
return!0},
cl:function(){if(self.window!=null)new H.lZ(this).$0()
else for(;this.cX(););},
aW:function(){var t,s,r,q,p
if(u.globalState.x!==!0)this.cl()
else try{this.cl()}catch(r){t=H.cz(r)
s=H.cq(r)
q=u.globalState.Q
p=P.eJ(["command","error","msg",H.w(t)+"\n"+H.w(s)])
p=new H.cv(!0,P.f7(null,P.K)).a3(p)
q.toString
self.postMessage(p)}}}
H.lZ.prototype={
$0:function(){if(!this.a.cX())return
P.A5(C.q,this)},
$S:function(){return{func:1,v:true}}}
H.dB.prototype={
eU:function(){var t=this.a
if(t.y){t.z.push(this)
return}t.aM(this.b)}}
H.mq.prototype={}
H.jh.prototype={
$0:function(){H.u4(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.ji.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{s=this.a
if(H.el(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.el(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.by()},
$S:function(){return{func:1,v:true}}}
H.lM.prototype={}
H.eg.prototype={
aZ:function(a,b){var t,s,r
t=u.globalState.z.l(0,this.a)
if(t==null)return
s=this.b
if(s.gcd())return
r=H.Ay(b)
if(t.gem()===s){s=J.bi(r)
switch(s.l(r,0)){case"pause":t.cu(s.l(r,1),s.l(r,2))
break
case"resume":t.eX(s.l(r,1))
break
case"add-ondone":t.ee(s.l(r,1),s.l(r,2))
break
case"remove-ondone":t.eV(s.l(r,1))
break
case"set-errors-fatal":t.d9(s.l(r,1),s.l(r,2))
break
case"ping":t.eB(s.l(r,1),s.l(r,2),s.l(r,3))
break
case"kill":t.eA(s.l(r,1),s.l(r,2))
break
case"getErrors":s=s.l(r,1)
t.dx.h(0,s)
break
case"stopErrors":s=s.l(r,1)
t.dx.a0(0,s)
break}return}u.globalState.f.a.ak(new H.dB(t,new H.mu(this,r),"receive"))},
H:function(a,b){if(b==null)return!1
return b instanceof H.eg&&J.bj(this.b,b.b)},
gL:function(a){return this.b.gbr()}}
H.mu.prototype={
$0:function(){var t=this.a.b
if(!t.gcd())t.dA(this.b)},
$S:function(){return{func:1}}}
H.fa.prototype={
aZ:function(a,b){var t,s,r
t=P.eJ(["command","message","port",this,"msg",b])
s=new H.cv(!0,P.f7(null,P.K)).a3(t)
if(u.globalState.x===!0){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.l(0,this.b)
if(r!=null)r.postMessage(s)}},
H:function(a,b){if(b==null)return!1
return b instanceof H.fa&&J.bj(this.b,b.b)&&J.bj(this.a,b.a)&&J.bj(this.c,b.c)},
gL:function(a){var t,s,r
t=this.b
if(typeof t!=="number")return t.ay()
s=this.a
if(typeof s!=="number")return s.ay()
r=this.c
if(typeof r!=="number")return H.aW(r)
return(t<<16^s<<8^r)>>>0}}
H.ea.prototype={
dG:function(){this.c=!0
this.b=null},
dA:function(a){if(this.c)return
this.b.$1(a)},
$iszw:1,
gbr:function(){return this.a},
gcd:function(){return this.c}}
H.li.prototype={
dq:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x===!0
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.ak(new H.dB(s,new H.lj(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.fe(new H.lk(this,b),0),a)}else throw H.r(new P.aN("Timer greater than 0."))}}
H.lj.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.lk.prototype={
$0:function(){this.a.c=null;--u.globalState.f.b
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.cD.prototype={
gL:function(a){var t=this.a
if(typeof t!=="number")return t.da()
t=C.d.am(t,0)^C.d.Y(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
H:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.cD){t=this.a
s=b.a
return t==null?s==null:t===s}return!1},
gbr:function(){return this.a}}
H.cv.prototype={
a3:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.l(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gm(t))
t=J.aP(a)
if(!!t.$iseP)return["buffer",a]
if(!!t.$ise7)return["typed",a]
if(!!t.$isbZ)return this.d5(a)
if(!!t.$isu1){r=this.gd2()
q=a.gaE()
q=H.eM(q,r,H.b8(q,"C",0),null)
q=P.e5(q,!0,H.b8(q,"C",0))
t=t.gaw(a)
t=H.eM(t,r,H.b8(t,"C",0),null)
return["map",q,P.e5(t,!0,H.b8(t,"C",0))]}if(!!t.$isjx)return this.d6(a)
if(!!t.$isR)this.d_(a)
if(!!t.$iszw)this.aY(a,"RawReceivePorts can't be transmitted:")
if(!!t.$iseg)return this.d7(a)
if(!!t.$isfa)return this.d8(a)
if(!!t.$isdK){p=a.$static_name
if(p==null)this.aY(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$iscD)return["capability",a.a]
if(!(a instanceof P.aZ))this.d_(a)
return["dart",u.classIdExtractor(a),this.d4(u.classFieldsExtractor(a))]},
aY:function(a,b){throw H.r(new P.aN((b==null?"Can't transmit:":b)+" "+H.w(a)))},
d_:function(a){return this.aY(a,null)},
d5:function(a){var t=this.d3(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.aY(a,"Can't serialize indexable: ")},
d3:function(a){var t,s,r
t=[]
C.a.sm(t,a.length)
for(s=0;s<a.length;++s){r=this.a3(a[s])
if(s>=t.length)return H.L(t,s)
t[s]=r}return t},
d4:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.a3(a[t]))
return a},
d6:function(a){var t,s,r,q
if(!!a.constructor&&a.constructor!==Object)this.aY(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sm(s,t.length)
for(r=0;r<t.length;++r){q=this.a3(a[t[r]])
if(r>=s.length)return H.L(s,r)
s[r]=q}return["js-object",t,s]},
d8:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
d7:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.gbr()]
return["raw sendport",a]}}
H.dA.prototype={
an:function(a){var t,s,r,q,p,o
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.r(P.dH("Bad serialized message: "+H.w(a)))
switch(C.a.ga_(a)){case"ref":if(1>=a.length)return H.L(a,1)
t=a[1]
s=this.b
if(t>>>0!==t||t>=s.length)return H.L(s,t)
return s[t]
case"buffer":if(1>=a.length)return H.L(a,1)
r=a[1]
this.b.push(r)
return r
case"typed":if(1>=a.length)return H.L(a,1)
r=a[1]
this.b.push(r)
return r
case"fixed":if(1>=a.length)return H.L(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.aK(r),[null])
s.fixed$length=Array
return s
case"extendable":if(1>=a.length)return H.L(a,1)
r=a[1]
this.b.push(r)
return H.a(this.aK(r),[null])
case"mutable":if(1>=a.length)return H.L(a,1)
r=a[1]
this.b.push(r)
return this.aK(r)
case"const":if(1>=a.length)return H.L(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.aK(r),[null])
s.fixed$length=Array
return s
case"map":return this.es(a)
case"sendport":return this.eu(a)
case"raw sendport":if(1>=a.length)return H.L(a,1)
r=a[1]
this.b.push(r)
return r
case"js-object":return this.er(a)
case"function":if(1>=a.length)return H.L(a,1)
r=u.staticFunctionNameToClosure(a[1])
this.b.push(r)
return r
case"capability":if(1>=a.length)return H.L(a,1)
return new H.cD(a[1])
case"dart":s=a.length
if(1>=s)return H.L(a,1)
q=a[1]
if(2>=s)return H.L(a,2)
p=a[2]
o=u.instanceFromClassId(q)
this.b.push(o)
this.aK(p)
return u.initializeEmptyInstance(q,o,p)
default:throw H.r("couldn't deserialize: "+H.w(a))}},
aK:function(a){var t,s,r
t=J.bi(a)
s=0
while(!0){r=t.gm(a)
if(typeof r!=="number")return H.aW(r)
if(!(s<r))break
t.i(a,s,this.an(t.l(a,s)));++s}return a},
es:function(a){var t,s,r,q,p,o
t=a.length
if(1>=t)return H.L(a,1)
s=a[1]
if(2>=t)return H.L(a,2)
r=a[2]
q=P.qw()
this.b.push(q)
s=J.rT(J.pp(s,this.geq()))
for(t=J.bi(s),p=J.bi(r),o=0;o<t.gm(s);++o)q.i(0,t.l(s,o),this.an(p.l(r,o)))
return q},
eu:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.L(a,1)
s=a[1]
if(2>=t)return H.L(a,2)
r=a[2]
if(3>=t)return H.L(a,3)
q=a[3]
if(J.bj(s,u.globalState.b)){p=u.globalState.z.l(0,r)
if(p==null)return
o=p.cP(q)
if(o==null)return
n=new H.eg(o,r)}else n=new H.fa(s,q,r)
this.b.push(n)
return n},
er:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.L(a,1)
s=a[1]
if(2>=t)return H.L(a,2)
r=a[2]
q={}
this.b.push(q)
t=J.bi(s)
p=J.bi(r)
o=0
while(!0){n=t.gm(s)
if(typeof n!=="number")return H.aW(n)
if(!(o<n))break
q[t.l(s,o)]=this.an(p.l(r,o));++o}return q}}
H.ib.prototype={
gJ:function(a){return this.gm(this)===0},
n:function(a){return P.qz(this)},
i:function(a,b,c){return H.tw()}}
H.ic.prototype={
gm:function(a){return this.a},
a1:function(a){if(typeof a!=="string")return!1
if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
l:function(a,b){if(!this.a1(b))return
return this.c7(b)},
c7:function(a){return this.b[a]},
bE:function(a,b){var t,s,r,q
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.c7(q))}}}
H.ky.prototype={}
H.ll.prototype={
ac:function(a){var t,s,r
t=new RegExp(this.a).exec(a)
if(t==null)return
s=Object.create(null)
r=this.b
if(r!==-1)s.arguments=t[r+1]
r=this.c
if(r!==-1)s.argumentsExpr=t[r+1]
r=this.d
if(r!==-1)s.expr=t[r+1]
r=this.e
if(r!==-1)s.method=t[r+1]
r=this.f
if(r!==-1)s.receiver=t[r+1]
return s}}
H.he.prototype={
n:function(a){var t=this.b
if(t==null)return"NullError: "+H.w(this.a)
return"NullError: method not found: '"+H.w(t)+"' on null"}}
H.jz.prototype={
n:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.w(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.w(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.w(this.a)+")"}}
H.ln.prototype={
n:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.fy.prototype={
gaj:function(){return this.b}}
H.ng.prototype={
$1:function(a){if(!!J.aP(a).$isdb)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.hF.prototype={
n:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.n4.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.n5.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.n6.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.n7.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.n8.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.dK.prototype={
n:function(a){return"Closure '"+H.oE(this).trim()+"'"},
gf6:function(){return this},
$D:null}
H.l9.prototype={}
H.kX.prototype={
n:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.ep.prototype={
H:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.ep))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gL:function(a){var t,s
t=this.c
if(t==null)s=H.dm(this.a)
else s=typeof t!=="object"?J.cA(t):H.dm(t)
t=H.dm(this.b)
if(typeof s!=="number")return s.fa()
return(s^t)>>>0},
n:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.w(this.d)+"' of "+H.hk(t)}}
H.i7.prototype={
n:function(a){return this.a}}
H.kE.prototype={
n:function(a){return"RuntimeError: "+H.w(this.a)}}
H.cQ.prototype={
n:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gL:function(a){return J.cA(this.a)},
H:function(a,b){if(b==null)return!1
return b instanceof H.cQ&&J.bj(this.a,b.a)}}
H.p.prototype={
gm:function(a){return this.a},
gJ:function(a){return this.a===0},
gaE:function(){return new H.jJ(this,[H.O(this,0)])},
gaw:function(a){return H.eM(this.gaE(),new H.jy(this),H.O(this,0),H.O(this,1))},
a1:function(a){var t
if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.dL(t,a)}else return this.eH(a)},
eH:function(a){var t=this.d
if(t==null)return!1
return this.aP(this.b1(t,this.aO(a)),a)>=0},
l:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.aI(t,b)
return s==null?null:s.gao()}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.aI(r,b)
return s==null?null:s.gao()}else return this.eI(b)},
eI:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.b1(t,this.aO(a))
r=this.aP(s,a)
if(r<0)return
return s[r].gao()},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.bt()
this.b=t}this.bZ(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.bt()
this.c=s}this.bZ(s,b,c)}else{r=this.d
if(r==null){r=this.bt()
this.d=r}q=this.aO(b)
p=this.b1(r,q)
if(p==null)this.bx(r,q,[this.bu(b,c)])
else{o=this.aP(p,b)
if(o>=0)p[o].sao(c)
else p.push(this.bu(b,c))}}},
a0:function(a,b){if(typeof b==="string")return this.ck(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.ck(this.c,b)
else return this.eJ(b)},
eJ:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.b1(t,this.aO(a))
r=this.aP(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.cr(q)
return q.gao()},
aA:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bE:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.r(new P.c6(this))
t=t.c}},
bZ:function(a,b,c){var t=this.aI(a,b)
if(t==null)this.bx(a,b,this.bu(b,c))
else t.sao(c)},
ck:function(a,b){var t
if(a==null)return
t=this.aI(a,b)
if(t==null)return
this.cr(t)
this.c5(a,b)
return t.gao()},
bu:function(a,b){var t,s
t=new H.jI(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
cr:function(a){var t,s
t=a.ge2()
s=a.c
if(t==null)this.e=s
else t.c=s
if(s==null)this.f=t
else s.d=t;--this.a
this.r=this.r+1&67108863},
aO:function(a){return J.cA(a)&0x3ffffff},
aP:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bj(a[s].gcL(),b))return s
return-1},
n:function(a){return P.qz(this)},
aI:function(a,b){return a[b]},
b1:function(a,b){return a[b]},
bx:function(a,b,c){a[b]=c},
c5:function(a,b){delete a[b]},
dL:function(a,b){return this.aI(a,b)!=null},
bt:function(){var t=Object.create(null)
this.bx(t,"<non-identifier-key>",t)
this.c5(t,"<non-identifier-key>")
return t},
$isu1:1}
H.jy.prototype={
$1:function(a){return this.a.l(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.jI.prototype={
gcL:function(){return this.a},
gao:function(){return this.b},
ge2:function(){return this.d},
sao:function(a){return this.b=a}}
H.jJ.prototype={
gm:function(a){return this.a.a},
gJ:function(a){return this.a.a===0},
gM:function(a){var t,s
t=this.a
s=new H.jK(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.jK.prototype={
gF:function(){return this.d},
v:function(){var t=this.a
if(this.b!==t.r)throw H.r(new P.c6(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.c
return!0}}}}
H.n_.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.n0.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.H]}}}
H.n1.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.H]}}}
H.h6.prototype={
n:function(a){return"RegExp/"+this.a+"/"},
gce:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.qv(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
dO:function(a,b){var t,s
t=this.gce()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return new H.mt(this,s)}}
H.mt.prototype={
bR:function(a){var t=this.b
if(a>>>0!==a||a>=t.length)return H.L(t,a)
return t[a]},
l:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.L(t,b)
return t[b]}}
H.lG.prototype={
gF:function(){return this.d},
v:function(){var t,s,r,q
t=this.b
if(t==null)return!1
s=this.c
if(s<=t.length){r=this.a.dO(t,s)
if(r!=null){this.d=r
t=r.b
s=t.index
q=s+t[0].length
this.c=s===q?q+1:q
return!0}}this.d=null
this.b=null
return!1}}
H.eP.prototype={
gT:function(a){return C.R},
$iseP:1,
$iscC:1}
H.e7.prototype={
dY:function(a,b,c,d){if(typeof b!=="number"||Math.floor(b)!==b)throw H.r(P.en(b,d,"Invalid list position"))
else throw H.r(P.bD(b,0,c,d,null))},
c0:function(a,b,c,d){if(b>>>0!==b||b>c)this.dY(a,b,c,d)},
$ise7:1}
H.k3.prototype={
gT:function(a){return C.S}}
H.hb.prototype={
gm:function(a){return a.length},
cp:function(a,b,c,d,e){var t,s,r
t=a.length
this.c0(a,b,t,"start")
this.c0(a,c,t,"end")
if(typeof b!=="number")return b.ad()
if(typeof c!=="number")return H.aW(c)
if(b>c)throw H.r(P.bD(b,0,c,null,null))
s=c-b
if(typeof e!=="number")return e.K()
if(e<0)throw H.r(P.dH(e))
r=d.length
if(r-e<s)throw H.r(new P.d0("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$iscb:1,
$ascb:function(){},
$isbZ:1,
$asbZ:function(){}}
H.eQ.prototype={
l:function(a,b){if(b>>>0!==b||b>=a.length)H.bo(H.bG(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.bo(H.bG(a,b))
a[b]=c},
R:function(a,b,c,d,e){if(!!J.aP(d).$iseQ){this.cp(a,b,c,d,e)
return}this.bY(a,b,c,d,e)},
ae:function(a,b,c,d){return this.R(a,b,c,d,0)}}
H.eS.prototype={
$ascb:function(){},
$asbZ:function(){},
$asI:function(){return[P.V]},
$asJ:function(){return[P.V]},
$asC:function(){return[P.V]},
$isI:1,
$isJ:1,
$isC:1}
H.eU.prototype={
$ascb:function(){},
$asbZ:function(){},
$asI:function(){return[P.V]},
$asJ:function(){return[P.V]},
$asC:function(){return[P.V]}}
H.eR.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.bo(H.bG(a,b))
a[b]=c},
R:function(a,b,c,d,e){if(!!J.aP(d).$iseR){this.cp(a,b,c,d,e)
return}this.bY(a,b,c,d,e)},
ae:function(a,b,c,d){return this.R(a,b,c,d,0)},
$isI:1,
$asI:function(){return[P.K]},
$isJ:1,
$asJ:function(){return[P.K]},
$isC:1,
$asC:function(){return[P.K]}}
H.eT.prototype={
$ascb:function(){},
$asbZ:function(){},
$asI:function(){return[P.K]},
$asJ:function(){return[P.K]},
$asC:function(){return[P.K]},
$isI:1,
$isJ:1,
$isC:1}
H.eV.prototype={
$ascb:function(){},
$asbZ:function(){},
$asI:function(){return[P.K]},
$asJ:function(){return[P.K]},
$asC:function(){return[P.K]}}
H.k4.prototype={
gT:function(a){return C.T},
$isI:1,
$asI:function(){return[P.V]},
$isJ:1,
$asJ:function(){return[P.V]},
$isC:1,
$asC:function(){return[P.V]}}
H.k5.prototype={
gT:function(a){return C.U},
$isI:1,
$asI:function(){return[P.V]},
$isJ:1,
$asJ:function(){return[P.V]},
$isC:1,
$asC:function(){return[P.V]}}
H.k6.prototype={
gT:function(a){return C.V},
l:function(a,b){if(b>>>0!==b||b>=a.length)H.bo(H.bG(a,b))
return a[b]},
$isI:1,
$asI:function(){return[P.K]},
$isJ:1,
$asJ:function(){return[P.K]},
$isC:1,
$asC:function(){return[P.K]}}
H.k7.prototype={
gT:function(a){return C.W},
l:function(a,b){if(b>>>0!==b||b>=a.length)H.bo(H.bG(a,b))
return a[b]},
$isI:1,
$asI:function(){return[P.K]},
$isJ:1,
$asJ:function(){return[P.K]},
$isC:1,
$asC:function(){return[P.K]}}
H.k8.prototype={
gT:function(a){return C.X},
l:function(a,b){if(b>>>0!==b||b>=a.length)H.bo(H.bG(a,b))
return a[b]},
$isI:1,
$asI:function(){return[P.K]},
$isJ:1,
$asJ:function(){return[P.K]},
$isC:1,
$asC:function(){return[P.K]}}
H.k9.prototype={
gT:function(a){return C.a0},
l:function(a,b){if(b>>>0!==b||b>=a.length)H.bo(H.bG(a,b))
return a[b]},
$isI:1,
$asI:function(){return[P.K]},
$isJ:1,
$asJ:function(){return[P.K]},
$isC:1,
$asC:function(){return[P.K]}}
H.ka.prototype={
gT:function(a){return C.a1},
l:function(a,b){if(b>>>0!==b||b>=a.length)H.bo(H.bG(a,b))
return a[b]},
$isI:1,
$asI:function(){return[P.K]},
$isJ:1,
$asJ:function(){return[P.K]},
$isC:1,
$asC:function(){return[P.K]}}
H.hc.prototype={
gT:function(a){return C.a2},
gm:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)H.bo(H.bG(a,b))
return a[b]},
$isI:1,
$asI:function(){return[P.K]},
$isJ:1,
$asJ:function(){return[P.K]},
$isC:1,
$asC:function(){return[P.K]}}
H.eW.prototype={
gT:function(a){return C.a3},
gm:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)H.bo(H.bG(a,b))
return a[b]},
$iseW:1,
$isd4:1,
$isI:1,
$asI:function(){return[P.K]},
$isJ:1,
$asJ:function(){return[P.K]},
$isC:1,
$asC:function(){return[P.K]}}
P.lJ.prototype={
$1:function(a){var t,s;--u.globalState.f.b
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.lI.prototype={
$1:function(a){var t,s;++u.globalState.f.b
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.lK.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.lL.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.hy.prototype={
cA:function(a,b){if(a==null)a=new P.eX()
if(this.a.a!==0)throw H.r(new P.d0("Future already completed"))
$.b4.toString
this.au(a,b)},
cz:function(a){return this.cA(a,null)}}
P.lH.prototype={
ei:function(a,b){var t=this.a
if(t.a!==0)throw H.r(new P.d0("Future already completed"))
t.dD(b)},
au:function(a,b){this.a.dE(a,b)}}
P.hC.prototype={
ged:function(){return this.b.b},
gcH:function(){return(this.c&1)!==0},
geF:function(){return(this.c&2)!==0},
gcG:function(){return this.c===8},
eD:function(a){return this.b.b.bN(this.d,a)},
eM:function(a){if(this.c!==6)return!0
return this.b.b.bN(this.d,J.fi(a))},
ez:function(a){var t,s,r
t=this.e
s=J.ci(a)
r=this.b.b
if(H.el(t,{func:1,args:[,,]}))return r.f_(t,s.gab(a),a.gaj())
else return r.bN(t,s.gab(a))},
eE:function(){return this.b.b.cV(this.d)},
gbv:function(){return this.a}}
P.cd.prototype={
gdZ:function(){return this.a===2},
gbs:function(){return this.a>=4},
cY:function(a,b){var t=$.b4
if(t!==C.e){t.toString
if(b!=null)b=P.rj(b,t)}return this.ea(a,b)},
bP:function(a){return this.cY(a,null)},
ea:function(a,b){var t,s
t=new P.cd(0,$.b4,null,[null])
s=b==null?1:3
this.bj(new P.hC(null,t,s,a,b,[H.O(this,0),null]))
return t},
bQ:function(a){var t,s
t=$.b4
s=new P.cd(0,t,null,this.$ti)
if(t!==C.e)t.toString
t=H.O(this,0)
this.bj(new P.hC(null,s,8,a,null,[t,t]))
return s},
bj:function(a){var t,s
t=this.a
if(t<=1){a.a=this.c
this.c=a}else{if(t===2){s=this.c
if(!s.gbs()){s.bj(a)
return}this.a=s.a
this.c=s.c}t=this.b
t.toString
P.ej(null,null,t,new P.m3(this,a))}},
cj:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;q.gbv()!=null;)q=q.a
q.a=r}}else{if(s===2){p=this.c
if(!p.gbs()){p.cj(a)
return}this.a=p.a
this.c=p.c}t.a=this.b6(a)
s=this.b
s.toString
P.ej(null,null,s,new P.mb(t,this))}},
b5:function(){var t=this.c
this.c=null
return this.b6(t)},
b6:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.gbv()
t.a=s}return s},
az:function(a){var t,s
t=this.$ti
if(H.dE(a,"$iscW",t,"$ascW"))if(H.dE(a,"$iscd",t,null))P.m6(a,this)
else P.r9(a,this)
else{s=this.b5()
this.a=4
this.c=a
P.ee(this,s)}},
au:function(a,b){var t=this.b5()
this.a=8
this.c=new P.dJ(a,b)
P.ee(this,t)},
dI:function(a){return this.au(a,null)},
dD:function(a){var t
if(H.dE(a,"$iscW",this.$ti,"$ascW")){this.dF(a)
return}this.a=1
t=this.b
t.toString
P.ej(null,null,t,new P.m5(this,a))},
dF:function(a){var t
if(H.dE(a,"$iscd",this.$ti,null)){if(a.a===8){this.a=1
t=this.b
t.toString
P.ej(null,null,t,new P.ma(this,a))}else P.m6(a,this)
return}P.r9(a,this)},
dE:function(a,b){var t
this.a=1
t=this.b
t.toString
P.ej(null,null,t,new P.m4(this,a,b))},
dw:function(a,b){this.a=4
this.c=a},
$iscW:1,
gb7:function(){return this.a},
ge4:function(){return this.c}}
P.m3.prototype={
$0:function(){P.ee(this.a,this.b)},
$S:function(){return{func:1}}}
P.mb.prototype={
$0:function(){P.ee(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.m7.prototype={
$1:function(a){var t=this.a
t.a=0
t.az(a)},
$S:function(){return{func:1,args:[,]}}}
P.m8.prototype={
$2:function(a,b){this.a.au(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.m9.prototype={
$0:function(){this.a.au(this.b,this.c)},
$S:function(){return{func:1}}}
P.m5.prototype={
$0:function(){var t,s
t=this.a
s=t.b5()
t.a=4
t.c=this.b
P.ee(t,s)},
$S:function(){return{func:1}}}
P.ma.prototype={
$0:function(){P.m6(this.b,this.a)},
$S:function(){return{func:1}}}
P.m4.prototype={
$0:function(){this.a.au(this.b,this.c)},
$S:function(){return{func:1}}}
P.me.prototype={
$0:function(){var t,s,r,q,p,o,n
t=null
try{t=this.d.eE()}catch(q){s=H.cz(q)
r=H.cq(q)
if(this.c){p=J.fi(this.a.a.c)
o=s
o=p==null?o==null:p===o
p=o}else p=!1
o=this.b
if(p)o.b=this.a.a.c
else o.b=new P.dJ(s,r)
o.a=!0
return}if(!!J.aP(t).$iscW){if(t instanceof P.cd&&t.gb7()>=4){if(t.gb7()===8){p=this.b
p.b=t.ge4()
p.a=!0}return}n=this.a.a
p=this.b
p.b=t.bP(new P.mf(n))
p.a=!1}},
$S:function(){return{func:1,v:true}}}
P.mf.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.md.prototype={
$0:function(){var t,s,r,q
try{this.a.b=this.b.eD(this.c)}catch(r){t=H.cz(r)
s=H.cq(r)
q=this.a
q.b=new P.dJ(t,s)
q.a=!0}},
$S:function(){return{func:1,v:true}}}
P.mc.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{t=this.a.a.c
q=this.c
if(q.eM(t)===!0&&q.e!=null){p=this.b
p.b=q.ez(t)
p.a=!1}}catch(o){s=H.cz(o)
r=H.cq(o)
q=this.a
p=J.fi(q.a.c)
n=s
m=this.b
if(p==null?n==null:p===n)m.b=q.a.c
else m.b=new P.dJ(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hx.prototype={}
P.du.prototype={
a7:function(a,b){return new P.ms(b,this,[H.b8(this,"du",0),null])},
gm:function(a){var t,s
t={}
s=new P.cd(0,$.b4,null,[P.K])
t.a=0
this.aF(new P.l1(t),!0,new P.l2(t,s),s.gbo())
return s},
gJ:function(a){var t,s
t={}
s=new P.cd(0,$.b4,null,[P.cw])
t.a=null
t.a=this.aF(new P.l_(t,s),!0,new P.l0(s),s.gbo())
return s},
a2:function(a){var t,s,r
t=H.b8(this,"du",0)
s=H.a([],[t])
r=new P.cd(0,$.b4,null,[[P.I,t]])
this.aF(new P.l3(this,s),!0,new P.l4(s,r),r.gbo())
return r}}
P.l1.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.l2.prototype={
$0:function(){this.b.az(this.a.a)},
$S:function(){return{func:1}}}
P.l_.prototype={
$1:function(a){P.Ax(this.a.a,this.b,!1)},
$S:function(){return{func:1,args:[,]}}}
P.l0.prototype={
$0:function(){this.a.az(!0)},
$S:function(){return{func:1}}}
P.l3.prototype={
$1:function(a){this.b.push(a)},
$S:function(){return H.pe(function(a){return{func:1,args:[a]}},this.a,"du")}}
P.l4.prototype={
$0:function(){this.b.az(this.a)},
$S:function(){return{func:1}}}
P.kZ.prototype={}
P.cp.prototype={
bI:function(a,b){var t=this.e
if((t&8)!==0)return
this.e=(t+128|4)>>>0
if(t<128&&this.r!=null)this.r.cv()
if((t&4)===0&&(this.e&32)===0)this.ca(this.gcg())},
cS:function(a){return this.bI(a,null)},
cU:function(){var t=this.e
if((t&8)!==0)return
if(t>=128){t-=128
this.e=t
if(t<128){if((t&64)!==0){t=this.r
t=!t.gJ(t)}else t=!1
if(t)this.r.bh(this)
else{t=(this.e&4294967291)>>>0
this.e=t
if((t&32)===0)this.ca(this.gci())}}}},
bA:function(){var t=(this.e&4294967279)>>>0
this.e=t
if((t&8)===0)this.bl()
t=this.f
return t==null?$.$get$fL():t},
bl:function(){var t=(this.e|8)>>>0
this.e=t
if((t&64)!==0)this.r.cv()
if((this.e&32)===0)this.r=null
this.f=this.cf()},
b0:function(a){var t=this.e
if((t&8)!==0)return
if(t<32)this.cm(a)
else this.bk(new P.lT(a,null,[H.b8(this,"cp",0)]))},
b_:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.co(a,b)
else this.bk(new P.lV(a,b,null))},
dC:function(){var t=this.e
if((t&8)!==0)return
t=(t|2)>>>0
this.e=t
if(t<32)this.cn()
else this.bk(C.C)},
b3:function(){},
b4:function(){},
cf:function(){return},
bk:function(a){var t,s
t=this.r
if(t==null){t=new P.mH(null,null,0,[H.b8(this,"cp",0)])
this.r=t}t.h(0,a)
s=this.e
if((s&64)===0){s=(s|64)>>>0
this.e=s
if(s<128)this.r.bh(this)}},
cm:function(a){var t=this.e
this.e=(t|32)>>>0
this.d.bO(this.a,a)
this.e=(this.e&4294967263)>>>0
this.bm((t&4)!==0)},
co:function(a,b){var t,s
t=this.e
s=new P.lO(this,a,b)
if((t&1)!==0){this.e=(t|16)>>>0
this.bl()
t=this.f
if(!!J.aP(t).$iscW&&t!==$.$get$fL())t.bQ(s)
else s.$0()}else{s.$0()
this.bm((t&4)!==0)}},
cn:function(){var t,s
t=new P.lN(this)
this.bl()
this.e=(this.e|16)>>>0
s=this.f
if(!!J.aP(s).$iscW&&s!==$.$get$fL())s.bQ(t)
else t.$0()},
ca:function(a){var t=this.e
this.e=(t|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.bm((t&4)!==0)},
bm:function(a){var t,s
if((this.e&64)!==0){t=this.r
t=t.gJ(t)}else t=!1
if(t){t=(this.e&4294967231)>>>0
this.e=t
if((t&4)!==0)if(t<128){t=this.r
t=t==null||t.gJ(t)}else t=!1
else t=!1
if(t)this.e=(this.e&4294967291)>>>0}for(;!0;a=s){t=this.e
if((t&8)!==0){this.r=null
return}s=(t&4)!==0
if(a===s)break
this.e=(t^32)>>>0
if(s)this.b3()
else this.b4()
this.e=(this.e&4294967263)>>>0}t=this.e
if((t&64)!==0&&t<128)this.r.bh(this)},
ds:function(a,b,c,d,e){var t=this.d
t.toString
this.a=a
this.b=P.rj(b,t)
this.c=c},
gb7:function(){return this.e}}
P.lO.prototype={
$0:function(){var t,s,r,q,p,o
t=this.a
s=t.e
if((s&8)!==0&&(s&16)===0)return
t.e=(s|32)>>>0
s=t.b
r=H.el(s,{func:1,args:[P.aZ,P.dr]})
q=t.d
p=this.b
o=t.b
if(r)q.f0(o,p,this.c)
else q.bO(o,p)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.lN.prototype={
$0:function(){var t,s
t=this.a
s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.cW(t.c)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.hz.prototype={
gaS:function(){return this.a},
saS:function(a){return this.a=a}}
P.lT.prototype={
bJ:function(a){a.cm(this.b)}}
P.lV.prototype={
bJ:function(a){a.co(this.b,this.c)},
$ashz:function(){},
gab:function(a){return this.b},
gaj:function(){return this.c}}
P.lU.prototype={
bJ:function(a){a.cn()},
gaS:function(){return},
saS:function(a){throw H.r(new P.d0("No events after a done."))}}
P.mv.prototype={
bh:function(a){var t=this.a
if(t===1)return
if(t>=1){this.a=1
return}P.rB(new P.mw(this,a))
this.a=1},
cv:function(){if(this.a===1)this.a=3},
gb7:function(){return this.a}}
P.mw.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.a
t.a=0
if(s===3)return
r=t.b
q=r.gaS()
t.b=q
if(q==null)t.c=null
r.bJ(this.b)},
$S:function(){return{func:1}}}
P.mH.prototype={
gJ:function(a){return this.c==null},
h:function(a,b){var t=this.c
if(t==null){this.c=b
this.b=b}else{t.saS(b)
this.c=b}}}
P.mP.prototype={
$0:function(){return this.a.az(this.b)},
$S:function(){return{func:1}}}
P.f4.prototype={
aF:function(a,b,c,d){return this.dM(a,d,c,!0===b)},
cO:function(a,b,c){return this.aF(a,null,b,c)},
dM:function(a,b,c,d){return P.Ad(this,a,b,c,d,H.b8(this,"f4",0),H.b8(this,"f4",1))},
cb:function(a,b){b.b0(a)},
dX:function(a,b,c){c.b_(a,b)},
$asdu:function(a,b){return[b]}}
P.f5.prototype={
b0:function(a){if((this.e&2)!==0)return
this.dj(a)},
b_:function(a,b){if((this.e&2)!==0)return
this.dk(a,b)},
b3:function(){var t=this.y
if(t==null)return
t.cS(0)},
b4:function(){var t=this.y
if(t==null)return
t.cU()},
cf:function(){var t=this.y
if(t!=null){this.y=null
return t.bA()}return},
dS:function(a){this.x.cb(a,this)},
dW:function(a,b){this.x.dX(a,b,this)},
dU:function(){this.dC()},
dv:function(a,b,c,d,e,f,g){this.y=this.x.a.cO(this.gdR(),this.gdT(),this.gdV())},
$ascp:function(a,b){return[b]}}
P.ms.prototype={
cb:function(a,b){var t,s,r,q
t=null
try{t=this.b.$1(a)}catch(q){s=H.cz(q)
r=H.cq(q)
P.Aw(b,s,r)
return}b.b0(t)}}
P.dJ.prototype={
n:function(a){return H.w(this.a)},
$isdb:1,
gab:function(a){return this.a},
gaj:function(){return this.b}}
P.mO.prototype={}
P.mU.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.eX()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.r(t)
r=H.r(t)
r.stack=J.bX(s)
throw r},
$S:function(){return{func:1}}}
P.my.prototype={
cW:function(a){var t,s,r,q
try{if(C.e===$.b4){r=a.$0()
return r}r=P.rk(null,null,this,a)
return r}catch(q){t=H.cz(q)
s=H.cq(q)
r=P.hI(null,null,this,t,s)
return r}},
bO:function(a,b){var t,s,r,q
try{if(C.e===$.b4){r=a.$1(b)
return r}r=P.rm(null,null,this,a,b)
return r}catch(q){t=H.cz(q)
s=H.cq(q)
r=P.hI(null,null,this,t,s)
return r}},
f0:function(a,b,c){var t,s,r,q
try{if(C.e===$.b4){r=a.$2(b,c)
return r}r=P.rl(null,null,this,a,b,c)
return r}catch(q){t=H.cz(q)
s=H.cq(q)
r=P.hI(null,null,this,t,s)
return r}},
bz:function(a,b){if(b)return new P.mz(this,a)
else return new P.mA(this,a)},
eg:function(a,b){return new P.mB(this,a)},
l:function(a,b){return},
cV:function(a){if($.b4===C.e)return a.$0()
return P.rk(null,null,this,a)},
bN:function(a,b){if($.b4===C.e)return a.$1(b)
return P.rm(null,null,this,a,b)},
f_:function(a,b,c){if($.b4===C.e)return a.$2(b,c)
return P.rl(null,null,this,a,b,c)}}
P.mz.prototype={
$0:function(){return this.a.cW(this.b)},
$S:function(){return{func:1}}}
P.mA.prototype={
$0:function(){return this.a.cV(this.b)},
$S:function(){return{func:1}}}
P.mB.prototype={
$1:function(a){return this.a.bO(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.mh.prototype={
gm:function(a){return this.a},
gJ:function(a){return this.a===0},
gaw:function(a){var t=H.O(this,0)
return H.eM(new P.mi(this,[t]),new P.mk(this),t,H.O(this,1))},
a1:function(a){var t,s
if(typeof a==="string"&&a!=="__proto__"){t=this.b
return t==null?!1:t[a]!=null}else if(typeof a==="number"&&(a&0x3ffffff)===a){s=this.c
return s==null?!1:s[a]!=null}else return this.dK(a)},
dK:function(a){var t=this.d
if(t==null)return!1
return this.ah(t[this.ag(a)],a)>=0},
l:function(a,b){var t,s,r,q
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)s=null
else{r=t[b]
s=r===t?null:r}return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){q=this.c
if(q==null)s=null
else{r=q[b]
s=r===q?null:r}return s}else return this.dP(b)},
dP:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.ag(a)]
r=this.ah(s,a)
return r<0?null:s[r+1]},
i:function(a,b,c){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.p8()
this.b=t}this.c2(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.p8()
this.c=s}this.c2(s,b,c)}else this.e5(b,c)},
e5:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.p8()
this.d=t}s=this.ag(a)
r=t[s]
if(r==null){P.p9(t,s,[a,b]);++this.a
this.e=null}else{q=this.ah(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++this.a
this.e=null}}},
a0:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.aG(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.aG(this.c,b)
else return this.bw(b)},
bw:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.ag(a)]
r=this.ah(s,a)
if(r<0)return;--this.a
this.e=null
return s.splice(r,2)[1]},
bE:function(a,b){var t,s,r,q
t=this.c4()
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.l(0,q))
if(t!==this.e)throw H.r(new P.c6(this))}},
c4:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=this.e
if(t!=null)return t
s=new Array(this.a)
s.fixed$length=Array
r=this.b
if(r!=null){q=Object.getOwnPropertyNames(r)
p=q.length
for(o=0,n=0;n<p;++n){s[o]=q[n];++o}}else o=0
m=this.c
if(m!=null){q=Object.getOwnPropertyNames(m)
p=q.length
for(n=0;n<p;++n){s[o]=+q[n];++o}}l=this.d
if(l!=null){q=Object.getOwnPropertyNames(l)
p=q.length
for(n=0;n<p;++n){k=l[q[n]]
j=k.length
for(i=0;i<j;i+=2){s[o]=k[i];++o}}}this.e=s
return s},
c2:function(a,b,c){if(a[b]==null){++this.a
this.e=null}P.p9(a,b,c)},
aG:function(a,b){var t
if(a!=null&&a[b]!=null){t=P.Ae(a,b)
delete a[b];--this.a
this.e=null
return t}else return},
ag:function(a){return J.cA(a)&0x3ffffff},
ah:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.bj(a[s],b))return s
return-1}}
P.mk.prototype={
$1:function(a){return this.a.l(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.mi.prototype={
gm:function(a){return this.a.a},
gJ:function(a){return this.a.a===0},
gM:function(a){var t=this.a
return new P.mj(t,t.c4(),0,null,this.$ti)}}
P.mj.prototype={
gF:function(){return this.d},
v:function(){var t,s,r
t=this.b
s=this.c
r=this.a
if(t!==r.e)throw H.r(new P.c6(r))
else if(s>=t.length){this.d=null
return!1}else{this.d=t[s]
this.c=s+1
return!0}}}
P.hE.prototype={
aO:function(a){return H.B7(a)&0x3ffffff},
aP:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].gcL()
if(r==null?b==null:r===b)return s}return-1}}
P.hD.prototype={
gM:function(a){var t=new P.dD(this,this.r,null,null,[null])
t.c=this.e
return t},
gm:function(a){return this.a},
gJ:function(a){return this.a===0},
cB:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dJ(b)},
dJ:function(a){var t=this.d
if(t==null)return!1
return this.ah(t[this.ag(a)],a)>=0},
cP:function(a){var t
if(!(typeof a==="string"&&a!=="__proto__"))t=typeof a==="number"&&(a&0x3ffffff)===a
else t=!0
if(t)return this.cB(0,a)?a:null
else return this.e_(a)},
e_:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.ag(a)]
r=this.ah(s,a)
if(r<0)return
return J.fh(s,r).gc6()},
h:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.c1(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.c1(r,b)}else return this.ak(b)},
ak:function(a){var t,s,r
t=this.d
if(t==null){t=P.Af()
this.d=t}s=this.ag(a)
r=t[s]
if(r==null)t[s]=[this.bn(a)]
else{if(this.ah(r,a)>=0)return!1
r.push(this.bn(a))}return!0},
a0:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.aG(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.aG(this.c,b)
else return this.bw(b)},
bw:function(a){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.ag(a)]
r=this.ah(s,a)
if(r<0)return!1
this.c3(s.splice(r,1)[0])
return!0},
aA:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
c1:function(a,b){if(a[b]!=null)return!1
a[b]=this.bn(b)
return!0},
aG:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.c3(t)
delete a[b]
return!0},
bn:function(a){var t,s
t=new P.mo(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
c3:function(a){var t,s
t=a.gdH()
s=a.b
if(t==null)this.e=s
else t.b=s
if(s==null)this.f=t
else s.c=t;--this.a
this.r=this.r+1&67108863},
ag:function(a){return J.cA(a)&0x3ffffff},
ah:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bj(a[s].gc6(),b))return s
return-1},
$isJ:1,
$asJ:null,
$isC:1,
$asC:null}
P.mo.prototype={
gc6:function(){return this.a},
gdH:function(){return this.c}}
P.dD.prototype={
gF:function(){return this.d},
v:function(){var t=this.a
if(this.b!==t.r)throw H.r(new P.c6(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.b
return!0}}}}
P.ml.prototype={}
P.e3.prototype={
a7:function(a,b){return H.eM(this,b,H.b8(this,"e3",0),null)},
P:function(a,b){return P.e5(this,!0,H.b8(this,"e3",0))},
a2:function(a){return this.P(a,!0)},
gm:function(a){var t,s
t=this.gM(this)
for(s=0;t.v();)++s
return s},
gJ:function(a){return!this.gM(this).v()},
n:function(a){return P.ob(this,"(",")")},
$isC:1,
$asC:null}
P.h2.prototype={}
P.h8.prototype={}
P.eY.prototype={$asI:null,$asJ:null,$asC:null,$isI:1,$isJ:1,$isC:1}
P.bN.prototype={
gM:function(a){return new H.dl(a,this.gm(a),0,null,[H.b8(a,"bN",0)])},
Z:function(a,b){return this.l(a,b)},
gJ:function(a){return this.gm(a)===0},
a7:function(a,b){return new H.e6(a,b,[H.b8(a,"bN",0),null])},
bV:function(a,b){return H.qR(a,b,null,H.b8(a,"bN",0))},
P:function(a,b){var t,s,r
t=H.a([],[H.b8(a,"bN",0)])
C.a.sm(t,this.gm(a))
for(s=0;s<this.gm(a);++s){r=this.l(a,s)
if(s>=t.length)return H.L(t,s)
t[s]=r}return t},
a2:function(a){return this.P(a,!0)},
ba:function(a,b,c,d){var t
P.cm(b,c,this.gm(a),null,null,null)
for(t=b;t<c;++t)this.i(a,t,d)},
R:function(a,b,c,d,e){var t,s,r,q,p,o
P.cm(b,c,this.gm(a),null,null,null)
if(typeof c!=="number")return c.bi()
if(typeof b!=="number")return H.aW(b)
t=c-b
if(t===0)return
if(J.d7(e,0))H.bo(P.bD(e,0,null,"skipCount",null))
if(H.dE(d,"$isI",[H.b8(a,"bN",0)],"$asI")){s=e
r=d}else{r=J.rQ(d,e).P(0,!1)
s=0}q=J.hJ(s)
p=J.bi(r)
if(J.bS(q.W(s,t),p.gm(r)))throw H.r(H.qu())
if(q.K(s,b))for(o=t-1;o>=0;--o)this.i(a,b+o,p.l(r,q.W(s,o)))
else for(o=0;o<t;++o)this.i(a,b+o,p.l(r,q.W(s,o)))},
ae:function(a,b,c,d){return this.R(a,b,c,d,0)},
a8:function(a,b,c,d){var t,s,r,q,p
P.cm(b,c,this.gm(a),null,null,null)
d=C.b.a2(d)
if(typeof c!=="number")return c.bi()
t=c-b
s=d.length
r=b+s
if(t>=s){q=t-s
p=this.gm(a)-q
this.ae(a,b,r,d)
if(q!==0){this.R(a,r,p,a,c)
this.sm(a,p)}}else{p=this.gm(a)+(s-t)
this.sm(a,p)
this.R(a,r,p,a,c)
this.ae(a,b,r,d)}},
aC:function(a,b,c){var t
if(c>=this.gm(a))return-1
if(c<0)c=0
for(t=c;t<this.gm(a);++t)if(J.bj(this.l(a,t),b))return t
return-1},
aN:function(a,b){return this.aC(a,b,0)},
n:function(a){return P.h3(a,"[","]")},
$isI:1,
$asI:null,
$isJ:1,
$asJ:null,
$isC:1,
$asC:null}
P.mJ.prototype={
i:function(a,b,c){throw H.r(new P.aN("Cannot modify unmodifiable map"))}}
P.jR.prototype={
l:function(a,b){return J.fh(this.a,b)},
i:function(a,b,c){J.nh(this.a,b,c)},
gJ:function(a){return J.ni(this.a)},
gm:function(a){return J.c1(this.a)},
n:function(a){return J.bX(this.a)}}
P.f2.prototype={}
P.jS.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.E+=", "
t.a=!1
t=this.b
s=t.E+=H.w(a)
t.E=s+": "
t.E+=H.w(b)},
$S:function(){return{func:1,args:[,,]}}}
P.jL.prototype={
gM:function(a){return new P.mp(this,this.c,this.d,this.b,null,this.$ti)},
gJ:function(a){return this.b===this.c},
gm:function(a){return(this.c-this.b&this.a.length-1)>>>0},
Z:function(a,b){var t,s,r,q
t=(this.c-this.b&this.a.length-1)>>>0
if(typeof b!=="number")return H.aW(b)
if(0>b||b>=t)H.bo(P.cY(b,this,"index",null,t))
s=this.a
r=s.length
q=(this.b+b&r-1)>>>0
if(q<0||q>=r)return H.L(s,q)
return s[q]},
P:function(a,b){var t=H.a([],this.$ti)
C.a.sm(t,this.gm(this))
this.ec(t)
return t},
a2:function(a){return this.P(a,!0)},
aA:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length,p=q-1;t!==s;t=(t+1&p)>>>0){if(t<0||t>=q)return H.L(r,t)
r[t]=null}this.c=0
this.b=0;++this.d}},
n:function(a){return P.h3(this,"{","}")},
cT:function(){var t,s,r,q
t=this.b
if(t===this.c)throw H.r(H.jt());++this.d
s=this.a
r=s.length
if(t>=r)return H.L(s,t)
q=s[t]
s[t]=null
this.b=(t+1&r-1)>>>0
return q},
ak:function(a){var t,s,r
t=this.a
s=this.c
r=t.length
if(s<0||s>=r)return H.L(t,s)
t[s]=a
r=(s+1&r-1)>>>0
this.c=r
if(this.b===r)this.c9();++this.d},
c9:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.a(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.R(s,0,q,t,r)
C.a.R(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=s},
ec:function(a){var t,s,r,q,p
t=this.b
s=this.c
r=this.a
if(t<=s){q=s-t
C.a.R(a,0,q,r,t)
return q}else{p=r.length-t
C.a.R(a,0,p,r,t)
C.a.R(a,p,p+this.c,this.a,0)
return this.c+p}},
dm:function(a,b){var t=new Array(8)
t.fixed$length=Array
this.a=H.a(t,[b])},
$asJ:null,
$asC:null}
P.mp.prototype={
gF:function(){return this.e},
v:function(){var t,s,r
t=this.a
if(this.c!==t.d)H.bo(new P.c6(t))
s=this.d
if(s===this.b){this.e=null
return!1}t=t.a
r=t.length
if(s>=r)return H.L(t,s)
this.e=t[s]
this.d=(s+1&r-1)>>>0
return!0}}
P.kN.prototype={
gJ:function(a){return this.a===0},
ct:function(a,b){var t
for(t=J.c0(b);t.v();)this.h(0,t.gF())},
P:function(a,b){var t,s,r,q,p
t=H.a([],this.$ti)
C.a.sm(t,this.a)
for(s=new P.dD(this,this.r,null,null,[null]),s.c=this.e,r=0;s.v();r=p){q=s.d
p=r+1
if(r>=t.length)return H.L(t,r)
t[r]=q}return t},
a2:function(a){return this.P(a,!0)},
a7:function(a,b){return new H.fx(this,b,[H.O(this,0),null])},
n:function(a){return P.h3(this,"{","}")},
$isJ:1,
$asJ:null,
$isC:1,
$asC:null}
P.kM.prototype={}
P.hX.prototype={
eO:function(a,b,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t=J.bi(a)
a0=P.cm(b,a0,t.gm(a),null,null,null)
s=$.$get$r8()
if(typeof a0!=="number")return H.aW(a0)
r=b
q=r
p=null
o=-1
n=-1
m=0
for(;r<a0;r=l){l=r+1
k=t.N(a,r)
if(k===37){j=l+2
if(j<=a0){i=H.mZ(C.b.S(a,l))
h=H.mZ(C.b.S(a,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.L(s,g)
f=s[g]
if(f>=0){g=C.b.N("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?p:p.E.length
if(e==null)e=0
if(typeof e!=="number")return e.W()
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null)p=new P.co("")
p.E+=C.b.A(a,q,r)
p.E+=H.oF(k)
q=l
continue}}throw H.r(new P.bp("Invalid base64 data",a,r))}if(p!=null){t=p.E+=t.A(a,q,a0)
e=t.length
if(o>=0)P.pr(a,n,a0,o,m,e)
else{d=C.c.bg(e-1,4)+1
if(d===1)throw H.r(new P.bp("Invalid base64 encoding length ",a,a0))
for(;d<4;){t+="="
p.E=t;++d}}t=p.E
return C.b.a8(a,b,a0,t.charCodeAt(0)==0?t:t)}c=a0-b
if(o>=0)P.pr(a,n,a0,o,m,c)
else{d=C.d.bg(c,4)
if(d===1)throw H.r(new P.bp("Invalid base64 encoding length ",a,a0))
if(d>1)a=t.a8(a,a0,a0,d===2?"==":"=")}return a},
$aset:function(){return[[P.I,P.K],P.H]}}
P.hY.prototype={
$asev:function(){return[[P.I,P.K],P.H]}}
P.et.prototype={}
P.ev.prototype={}
P.ir.prototype={
$aset:function(){return[P.H,[P.I,P.K]]}}
P.lv.prototype={
gG:function(a){return"utf-8"}}
P.lw.prototype={
bC:function(a,b,c){var t,s,r,q
t=J.c1(a)
P.cm(b,c,t,null,null,null)
s=new P.co("")
r=new P.mL(!1,s,!0,0,0,0)
r.bC(a,b,t)
r.ew(0,a,t)
q=s.E
return q.charCodeAt(0)==0?q:q},
en:function(a){return this.bC(a,0,null)},
$asev:function(){return[[P.I,P.K],P.H]}}
P.mL.prototype={
ew:function(a,b,c){if(this.e>0)throw H.r(new P.bp("Unfinished UTF-8 octet sequence",b,c))},
bC:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=this.d
s=this.e
r=this.f
this.d=0
this.e=0
this.f=0
q=new P.mN(c)
p=new P.mM(this,a,b,c)
$loop$0:for(o=J.bi(a),n=this.b,m=b;!0;m=h){$multibyte$2:if(s>0){do{if(m===c)break $loop$0
l=o.l(a,m)
if(typeof l!=="number")return l.ax()
if((l&192)!==128){k=new P.bp("Bad UTF-8 encoding 0x"+C.d.aX(l,16),a,m)
throw H.r(k)}else{t=(t<<6|l&63)>>>0;--s;++m}}while(s>0)
k=r-1
if(k<0||k>=4)return H.L(C.u,k)
if(t<=C.u[k]){k=new P.bp("Overlong encoding of 0x"+C.c.aX(t,16),a,m-r-1)
throw H.r(k)}if(t>1114111){k=new P.bp("Character outside valid Unicode range: 0x"+C.c.aX(t,16),a,m-r-1)
throw H.r(k)}if(!this.c||t!==65279)n.E+=H.oF(t)
this.c=!1}for(k=m<c;k;){j=q.$2(a,m)
if(J.bS(j,0)){this.c=!1
if(typeof j!=="number")return H.aW(j)
i=m+j
p.$2(m,i)
if(i===c)break}else i=m
h=i+1
l=o.l(a,i)
g=J.cR(l)
if(g.K(l,0)){g=new P.bp("Negative UTF-8 code unit: -0x"+J.rU(g.bS(l),16),a,h-1)
throw H.r(g)}else{if(typeof l!=="number")return l.ax()
if((l&224)===192){t=l&31
s=1
r=1
continue $loop$0}if((l&240)===224){t=l&15
s=2
r=2
continue $loop$0}if((l&248)===240&&l<245){t=l&7
s=3
r=3
continue $loop$0}g=new P.bp("Bad UTF-8 encoding 0x"+C.d.aX(l,16),a,h-1)
throw H.r(g)}}break $loop$0}if(s>0){this.d=t
this.e=s
this.f=r}}}
P.mN.prototype={
$2:function(a,b){var t,s,r,q
t=this.a
for(s=J.bi(a),r=b;r<t;++r){q=s.l(a,r)
if(typeof q!=="number")return q.ax()
if((q&127)!==q)return r-b}return t-b},
$S:function(){return{func:1,ret:P.K,args:[,P.K]}}}
P.mM.prototype={
$2:function(a,b){this.a.b.E+=P.qQ(this.b,a,b)},
$S:function(){return{func:1,v:true,args:[P.K,P.K]}}}
P.cw.prototype={}
P.bk.prototype={}
P.ew.prototype={
H:function(a,b){if(b==null)return!1
if(!(b instanceof P.ew))return!1
return this.a===b.a&&this.b===b.b},
a5:function(a,b){return C.c.a5(this.a,b.geb())},
gL:function(a){var t=this.a
return(t^C.c.am(t,30))&1073741823},
n:function(a){var t,s,r,q,p,o,n
t=P.ty(H.qE(this))
s=P.fs(H.qD(this))
r=P.fs(H.qC(this))
q=P.fs(H.zb(this))
p=P.fs(H.zd(this))
o=P.fs(H.ze(this))
n=P.tz(H.zc(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isbk:1,
$asbk:function(){return[P.ew]},
geb:function(){return this.a}}
P.V.prototype={$isbk:1,
$asbk:function(){return[P.cr]}}
P.cF.prototype={
W:function(a,b){return new P.cF(this.a+b.gaH())},
a9:function(a,b){return new P.cF(C.c.aV(this.a*b))},
K:function(a,b){return C.c.K(this.a,b.gaH())},
ad:function(a,b){return C.c.ad(this.a,b.gaH())},
at:function(a,b){return C.c.at(this.a,b.gaH())},
H:function(a,b){if(b==null)return!1
if(!(b instanceof P.cF))return!1
return this.a===b.a},
gL:function(a){return this.a&0x1FFFFFFF},
a5:function(a,b){return C.c.a5(this.a,b.gaH())},
n:function(a){var t,s,r,q,p
t=new P.ip()
s=this.a
if(s<0)return"-"+new P.cF(0-s).n(0)
r=t.$1(C.c.Y(s,6e7)%60)
q=t.$1(C.c.Y(s,1e6)%60)
p=new P.io().$1(s%1e6)
return""+C.c.Y(s,36e8)+":"+H.w(r)+":"+H.w(q)+"."+H.w(p)},
bS:function(a){return new P.cF(0-this.a)},
$isbk:1,
$asbk:function(){return[P.cF]},
gaH:function(){return this.a}}
P.io.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.H,args:[P.K]}}}
P.ip.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.H,args:[P.K]}}}
P.db.prototype={
gaj:function(){return H.cq(this.$thrownJsError)}}
P.eX.prototype={
n:function(a){return"Throw of null."}}
P.cB.prototype={
gbq:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbp:function(){return""},
n:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.w(t)
q=this.gbq()+s+r
if(!this.a)return q
p=this.gbp()
o=P.pE(this.b)
return q+p+": "+H.w(o)},
gG:function(a){return this.c}}
P.eZ.prototype={
gbq:function(){return"RangeError"},
gbp:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.w(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.w(t)
else{if(typeof r!=="number")return r.ad()
if(r>t)s=": Not in range "+H.w(t)+".."+H.w(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.w(t)}}return s}}
P.je.prototype={
gbq:function(){return"RangeError"},
gbp:function(){if(J.d7(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.w(t)},
gm:function(a){return this.f}}
P.aN.prototype={
n:function(a){return"Unsupported operation: "+this.a}}
P.hs.prototype={
n:function(a){var t=this.a
return t!=null?"UnimplementedError: "+H.w(t):"UnimplementedError"}}
P.d0.prototype={
n:function(a){return"Bad state: "+this.a}}
P.c6.prototype={
n:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.w(P.pE(t))+"."}}
P.kh.prototype={
n:function(a){return"Out of Memory"},
gaj:function(){return},
$isdb:1}
P.hr.prototype={
n:function(a){return"Stack Overflow"},
gaj:function(){return},
$isdb:1}
P.ih.prototype={
n:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+H.w(t)+"' during its initialization"}}
P.m2.prototype={
n:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.w(t)}}
P.bp.prototype={
n:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=this.a
s=""!==t?"FormatException: "+t:"FormatException"
r=this.c
q=this.b
if(typeof q!=="string")return r!=null?s+(" (at offset "+H.w(r)+")"):s
if(r!=null){if(typeof r!=="number")return r.K()
t=r<0||r>q.length}else t=!1
if(t)r=null
if(r==null){if(q.length>78)q=C.b.A(q,0,75)+"..."
return s+"\n"+q}if(typeof r!=="number")return H.aW(r)
p=1
o=0
n=!1
m=0
for(;m<r;++m){l=C.b.S(q,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}s=p>1?s+(" (at line "+p+", character "+H.w(r-o+1)+")\n"):s+(" (at character "+H.w(r+1)+")\n")
k=q.length
for(m=r;m<q.length;++m){l=C.b.N(q,m)
if(l===10||l===13){k=m
break}}if(k-o>78)if(r-o<75){j=o+75
i=o
h=""
g="..."}else{if(k-r<75){i=k-75
j=k
g=""}else{i=r-36
j=r+36
g="..."}h="..."}else{j=k
i=o
h=""
g=""}f=C.b.A(q,i,j)
return s+h+f+g+"\n"+C.b.a9(" ",r-i+h.length)+"^\n"}}
P.it.prototype={
n:function(a){return"Expando:"+H.w(this.a)},
l:function(a,b){var t,s
t=this.b2
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.bo(P.en(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.oD(b,"expando$values")
return s==null?null:H.oD(s,t)},
i:function(a,b,c){var t,s
t=this.b2
if(typeof t!=="string")t.set(b,c)
else{s=H.oD(b,"expando$values")
if(s==null){s=new P.aZ()
H.qH(b,"expando$values",s)}H.qH(s,t,c)}},
gG:function(a){return this.a}}
P.K.prototype={$isbk:1,
$asbk:function(){return[P.cr]}}
P.C.prototype={
a7:function(a,b){return H.eM(this,b,H.b8(this,"C",0),null)},
P:function(a,b){return P.e5(this,!0,H.b8(this,"C",0))},
a2:function(a){return this.P(a,!0)},
gm:function(a){var t,s
t=this.gM(this)
for(s=0;t.v();)++s
return s},
gJ:function(a){return!this.gM(this).v()},
Z:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.r(P.rW("index"))
if(b<0)H.bo(P.bD(b,0,null,"index",null))
for(t=this.gM(this),s=0;t.v();){r=t.gF()
if(b===s)return r;++s}throw H.r(P.cY(b,this,"index",null,s))},
n:function(a){return P.ob(this,"(",")")},
$asC:null}
P.h4.prototype={}
P.I.prototype={$asI:null,$isJ:1,$asJ:null,$isC:1,$asC:null}
P.ct.prototype={
gL:function(a){return P.aZ.prototype.gL.call(this,this)},
n:function(a){return"null"}}
P.cr.prototype={$isbk:1,
$asbk:function(){return[P.cr]}}
P.aZ.prototype={constructor:P.aZ,$isaZ:1,
H:function(a,b){return this===b},
gL:function(a){return H.dm(this)},
n:function(a){return H.hk(this)},
gT:function(a){return new H.cQ(H.hL(this),null)},
toString:function(){return this.n(this)}}
P.jV.prototype={}
P.dr.prototype={}
P.H.prototype={$isbk:1,
$asbk:function(){return[P.H]}}
P.co.prototype={
gm:function(a){return this.E.length},
gJ:function(a){return this.E.length===0},
n:function(a){var t=this.E
return t.charCodeAt(0)==0?t:t},
gE:function(){return this.E}}
P.dx.prototype={}
P.lt.prototype={
$2:function(a,b){var t,s,r,q
t=J.bi(b)
s=t.aN(b,"=")
if(s===-1){if(!t.H(b,""))J.nh(a,P.mK(b,0,t.gm(b),this.a,!0),"")}else if(s!==0){r=t.A(b,0,s)
q=C.b.af(b,s+1)
t=this.a
J.nh(a,P.mK(r,0,r.length,t,!0),P.mK(q,0,q.length,t,!0))}return a},
$S:function(){return{func:1,args:[,,]}}}
P.lq.prototype={
$2:function(a,b){throw H.r(new P.bp("Illegal IPv4 address, "+a,this.a,b))},
$S:function(){return{func:1,v:true,args:[P.H,P.K]}}}
P.lr.prototype={
$2:function(a,b){throw H.r(new P.bp("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,v:true,args:[P.H],opt:[,]}}}
P.ls.prototype={
$2:function(a,b){var t,s
if(b-a>4)this.b.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
t=H.e8(C.b.A(this.a,a,b),16,null)
s=J.cR(t)
if(s.K(t,0)||s.ad(t,65535))this.b.$2("each part must be in the range of `0x0..0xFFFF`",a)
return t},
$S:function(){return{func:1,ret:P.K,args:[P.K,P.K]}}}
P.hG.prototype={
gd1:function(){return this.b},
gbF:function(a){var t=this.c
if(t==null)return""
if(C.b.a4(t,"["))return C.b.A(t,1,t.length-1)
return t},
gbK:function(a){var t=this.d
if(t==null)return P.rb(this.a)
return t},
gbL:function(a){var t=this.f
return t==null?"":t},
gcF:function(){var t=this.r
return t==null?"":t},
gbM:function(){var t,s
t=this.Q
if(t==null){t=this.f
s=P.H
s=new P.f2(P.r7(t==null?"":t,C.l),[s,s])
this.Q=s
t=s}return t},
gcI:function(){return this.c!=null},
gcK:function(){return this.f!=null},
gcJ:function(){return this.r!=null},
n:function(a){var t=this.y
if(t==null){t=this.cc()
this.y=t}return t},
cc:function(){var t,s,r,q
t=this.a
s=t.length!==0?t+":":""
r=this.c
q=r==null
if(!q||t==="file"){t=s+"//"
s=this.b
if(s.length!==0)t=t+H.w(s)+"@"
if(!q)t+=r
s=this.d
if(s!=null)t=t+":"+H.w(s)}else t=s
t+=H.w(this.e)
s=this.f
if(s!=null)t=t+"?"+s
s=this.r
if(s!=null)t=t+"#"+s
return t.charCodeAt(0)==0?t:t},
H:function(a,b){var t,s,r
if(b==null)return!1
if(this===b)return!0
t=J.aP(b)
if(!!t.$isdx){if(this.a===b.gbT())if(this.c!=null===b.gcI()){s=this.b
r=b.gd1()
if(s==null?r==null:s===r){s=this.gbF(this)
r=t.gbF(b)
if(s==null?r==null:s===r)if(J.bj(this.gbK(this),t.gbK(b)))if(J.bj(this.e,t.gcR(b))){s=this.f
r=s==null
if(!r===b.gcK()){if(r)s=""
if(s===t.gbL(b)){t=this.r
s=t==null
if(!s===b.gcJ()){if(s)t=""
t=t===b.gcF()}else t=!1}else t=!1}else t=!1}else t=!1
else t=!1
else t=!1}else t=!1}else t=!1
else t=!1
return t}return!1},
gL:function(a){var t=this.z
if(t==null){t=this.y
if(t==null){t=this.cc()
this.y=t}t=C.b.gL(t)
this.z=t}return t},
$isdx:1,
gbT:function(){return this.a},
gcR:function(a){return this.e}}
P.mW.prototype={
$1:function(a){throw H.r(new P.bp("Invalid port",this.a,this.b+1))},
$S:function(){return{func:1,args:[,]}}}
P.lp.prototype={
gd0:function(){var t,s,r,q,p,o,n,m
t=this.c
if(t!=null)return t
t=this.b
if(0>=t.length)return H.L(t,0)
s=this.a
t=t[0]+1
r=J.bi(s)
q=r.aC(s,"?",t)
p=r.gm(s)
if(q>=0){o=q+1
n=P.eh(s,o,p,C.j,!1)
if(n==null)n=r.A(s,o,p)
p=q}else n=null
m=P.eh(s,t,p,C.x,!1)
t=new P.lS(this,"data",null,null,null,m==null?r.A(s,t,p):m,n,null,null,null,null,null,null)
this.c=t
return t},
n:function(a){var t,s
t=this.b
if(0>=t.length)return H.L(t,0)
s=this.a
return t[0]===-1?"data:"+H.w(s):s}}
P.mR.prototype={
$1:function(a){return new Uint8Array(H.rh(96))},
$S:function(){return{func:1,args:[,]}}}
P.mQ.prototype={
$2:function(a,b){var t=this.a
if(a>=t.length)return H.L(t,a)
t=t[a]
J.rI(t,0,96,b)
return t},
$S:function(){return{func:1,ret:P.d4,args:[,,]}}}
P.mS.prototype={
$3:function(a,b,c){var t,s,r
for(t=b.length,s=J.d6(a),r=0;r<t;++r)s.i(a,C.b.S(b,r)^96,c)},
$S:function(){return{func:1,v:true,args:[P.d4,P.H,P.K]}}}
P.mT.prototype={
$3:function(a,b,c){var t,s,r
for(t=C.b.S(b,0),s=C.b.S(b,1),r=J.d6(a);t<=s;++t)r.i(a,(t^96)>>>0,c)},
$S:function(){return{func:1,v:true,args:[P.d4,P.H,P.K]}}}
P.mG.prototype={
gcI:function(){return this.c>0},
gcK:function(){var t=this.f
if(typeof t!=="number")return t.K()
return t<this.r},
gcJ:function(){return this.r<this.a.length},
gbT:function(){var t,s
t=this.b
if(t<=0)return""
s=this.x
if(s!=null)return s
s=t===4
if(s&&C.b.a4(this.a,"http")){this.x="http"
t="http"}else if(t===5&&C.b.a4(this.a,"https")){this.x="https"
t="https"}else if(s&&C.b.a4(this.a,"file")){this.x="file"
t="file"}else if(t===7&&C.b.a4(this.a,"package")){this.x="package"
t="package"}else{t=C.b.A(this.a,0,t)
this.x=t}return t},
gd1:function(){var t,s
t=this.c
s=this.b+3
return t>s?C.b.A(this.a,s,t-1):""},
gbF:function(a){var t=this.c
return t>0?C.b.A(this.a,t,this.d):""},
gbK:function(a){var t,s
if(this.c>0){t=this.d
if(typeof t!=="number")return t.W()
s=this.e
if(typeof s!=="number")return H.aW(s)
s=t+1<s
t=s}else t=!1
if(t){t=this.d
if(typeof t!=="number")return t.W()
return H.e8(C.b.A(this.a,t+1,this.e),null,null)}t=this.b
if(t===4&&C.b.a4(this.a,"http"))return 80
if(t===5&&C.b.a4(this.a,"https"))return 443
return 0},
gcR:function(a){return C.b.A(this.a,this.e,this.f)},
gbL:function(a){var t,s
t=this.f
s=this.r
if(typeof t!=="number")return t.K()
return t<s?C.b.A(this.a,t+1,s):""},
gcF:function(){var t,s
t=this.r
s=this.a
return t<s.length?C.b.af(s,t+1):""},
gbM:function(){var t=this.f
if(typeof t!=="number")return t.K()
if(t>=this.r)return C.Q
t=P.H
return new P.f2(P.r7(this.gbL(this),C.l),[t,t])},
gL:function(a){var t=this.y
if(t==null){t=C.b.gL(this.a)
this.y=t}return t},
H:function(a,b){var t
if(b==null)return!1
if(this===b)return!0
t=J.aP(b)
if(!!t.$isdx)return this.a===t.n(b)
return!1},
n:function(a){return this.a},
$isdx:1}
P.lS.prototype={}
W.ad.prototype={}
W.dG.prototype={
n:function(a){return String(a)},
$isdG:1,
$isR:1,
gX:function(a){return a.href}}
W.hR.prototype={
n:function(a){return String(a)},
$isR:1,
gX:function(a){return a.href}}
W.hZ.prototype={
gX:function(a){return a.href}}
W.fm.prototype={}
W.i0.prototype={$isR:1}
W.es.prototype={$ises:1,
gG:function(a){return a.name}}
W.da.prototype={$isR:1,
gm:function(a){return a.length}}
W.fq.prototype={
bD:function(a,b){return typeof console!="undefined"?console.error(b):null},
cM:function(a){return typeof console!="undefined"?console.info(a):null},
f4:function(a){return typeof console!="undefined"?console.warn(a):null}}
W.dL.prototype={
bf:function(a,b){var t=this.dQ(a,b)
return t!=null?t:""},
dQ:function(a,b){if(W.tx(b) in a)return a.getPropertyValue(b)
else return a.getPropertyValue(P.tA()+b)},
a6:function(a,b){return a.item(b)},
gaL:function(a){return a.display},
saL:function(a,b){a.display=b},
gm:function(a){return a.length}}
W.fN.prototype={}
W.lQ.prototype={
bf:function(a,b){var t=this.b
return J.rM(t.ga_(t),b)},
e6:function(a,b){var t
for(t=this.a,t=new H.dl(t,t.gm(t),0,null,[H.O(t,0)]);t.v();)t.d.style[a]=b},
saL:function(a,b){this.e6("display",b)},
dt:function(a){var t=P.e5(this.a,!0,null)
this.b=new H.e6(t,new W.lR(),[H.O(t,0),null])}}
W.hf.prototype={}
W.lR.prototype={
$1:function(a){return J.hO(a)},
$S:function(){return{func:1,args:[,]}}}
W.fr.prototype={
gaL:function(a){return this.bf(a,"display")}}
W.ft.prototype={$isR:1}
W.fu.prototype={
gG:function(a){return a.name}}
W.ij.prototype={
gG:function(a){var t=a.name
if(P.pD()===!0&&t==="SECURITY_ERR")return"SecurityError"
if(P.pD()===!0&&t==="SYNTAX_ERR")return"SyntaxError"
return t},
n:function(a){return String(a)}}
W.fv.prototype={
n:function(a){return"Rectangle ("+H.w(a.left)+", "+H.w(a.top)+") "+H.w(this.gar(a))+" x "+H.w(this.gap(a))},
H:function(a,b){var t
if(b==null)return!1
t=J.aP(b)
if(!t.$ishn)return!1
return a.left===t.gbc(b)&&a.top===t.gbe(b)&&this.gar(a)===t.gar(b)&&this.gap(a)===t.gap(b)},
gL:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gar(a)
q=this.gap(a)
return W.ra(W.dC(W.dC(W.dC(W.dC(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gap:function(a){return a.height},
gbc:function(a){return a.left},
gbe:function(a){return a.top},
gar:function(a){return a.width},
$ishn:1,
$ashn:function(){}}
W.fw.prototype={
a6:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.hB.prototype={
gm:function(a){return this.a.length},
l:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.L(t,b)
return t[b]},
i:function(a,b,c){throw H.r(new P.aN("Cannot modify list"))},
sm:function(a,b){throw H.r(new P.aN("Cannot modify list"))},
gbX:function(a){return W.Ac(this)},
$isI:1,
$asI:null,
$isJ:1,
$asJ:null,
$isC:1,
$asC:null}
W.cT.prototype={
n:function(a){return a.localName},
aD:function(a,b,c,d,e){a.insertAdjacentHTML(b,c)},
$iscT:1,
$isaZ:1,
$isR:1,
gbX:function(a){return a.style}}
W.iq.prototype={
gG:function(a){return a.name}}
W.ex.prototype={$isex:1,
gab:function(a){return a.error}}
W.Q.prototype={$isQ:1,$isaZ:1}
W.dM.prototype={
ef:function(a,b,c,d){if(c!=null)this.dB(a,b,c,!1)},
eW:function(a,b,c,d){if(c!=null)this.e3(a,b,c,!1)},
dB:function(a,b,c,d){return a.addEventListener(b,H.fe(c,1),!1)},
e3:function(a,b,c,d){return a.removeEventListener(b,H.fe(c,1),!1)}}
W.iZ.prototype={
gG:function(a){return a.name}}
W.bP.prototype={$isbP:1,$isaZ:1,
gG:function(a){return a.name}}
W.fH.prototype={
gm:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.r(P.cY(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.r(new P.aN("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.r(new P.aN("Cannot resize immutable List."))},
Z:function(a,b){if(b>>>0!==b||b>=a.length)return H.L(a,b)
return a[b]},
a6:function(a,b){return a.item(b)},
$iscb:1,
$ascb:function(){return[W.bP]},
$isbZ:1,
$asbZ:function(){return[W.bP]},
$isI:1,
$asI:function(){return[W.bP]},
$isJ:1,
$asJ:function(){return[W.bP]},
$isC:1,
$asC:function(){return[W.bP]}}
W.fO.prototype={
$asI:function(){return[W.bP]},
$asJ:function(){return[W.bP]},
$asC:function(){return[W.bP]},
$isI:1,
$isJ:1,
$isC:1}
W.fT.prototype={
$asI:function(){return[W.bP]},
$asJ:function(){return[W.bP]},
$asC:function(){return[W.bP]},
$isI:1,
$isJ:1,
$isC:1}
W.fK.prototype={
a6:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gG:function(a){return a.name}}
W.df.prototype={
fi:function(a,b,c,d,e,f){return a.open(b,c,!0,f,e)},
eP:function(a,b,c,d){return a.open(b,c,d)},
aZ:function(a,b){return a.send(b)},
$isdf:1,
$isaZ:1,
geZ:function(a){return a.responseText}}
W.j9.prototype={
$1:function(a){return J.rK(a)},
$S:function(){return{func:1,args:[W.df]}}}
W.ja.prototype={
$1:function(a){var t,s,r,q,p
t=this.b
s=t.status
if(typeof s!=="number")return s.at()
r=s>=200&&s<300
q=s>307&&s<400
s=r||s===0||s===304||q
p=this.a
if(s)p.ei(0,t)
else p.cz(a)},
$S:function(){return{func:1,args:[,]}}}
W.fM.prototype={}
W.jb.prototype={
gG:function(a){return a.name}}
W.dZ.prototype={$isdZ:1,$iscT:1,$isaZ:1}
W.jf.prototype={$isR:1,
gG:function(a){return a.name}}
W.jB.prototype={
gG:function(a){return a.name}}
W.eI.prototype={$iseI:1,
gX:function(a){return a.href}}
W.jM.prototype={
n:function(a){return String(a)},
gX:function(a){return a.href}}
W.jQ.prototype={
gG:function(a){return a.name}}
W.eN.prototype={
gab:function(a){return a.error}}
W.jX.prototype={
gG:function(a){return a.name}}
W.jY.prototype={
f8:function(a,b,c){return a.send(b,c)},
aZ:function(a,b){return a.send(b)}}
W.eO.prototype={
gG:function(a){return a.name}}
W.kb.prototype={$isR:1}
W.kc.prototype={
gG:function(a){return a.name}}
W.b9.prototype={
n:function(a){var t=a.nodeValue
return t==null?this.dh(a):t},
$isaZ:1}
W.hd.prototype={
gm:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.r(P.cY(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.r(new P.aN("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.r(new P.aN("Cannot resize immutable List."))},
Z:function(a,b){if(b>>>0!==b||b>=a.length)return H.L(a,b)
return a[b]},
$isI:1,
$asI:function(){return[W.b9]},
$isJ:1,
$asJ:function(){return[W.b9]},
$isC:1,
$asC:function(){return[W.b9]},
$iscb:1,
$ascb:function(){return[W.b9]},
$isbZ:1,
$asbZ:function(){return[W.b9]}}
W.fP.prototype={
$asI:function(){return[W.b9]},
$asJ:function(){return[W.b9]},
$asC:function(){return[W.b9]},
$isI:1,
$isJ:1,
$isC:1}
W.fU.prototype={
$asI:function(){return[W.b9]},
$asJ:function(){return[W.b9]},
$asC:function(){return[W.b9]},
$isI:1,
$isJ:1,
$isC:1}
W.kf.prototype={
gG:function(a){return a.name}}
W.ki.prototype={
gG:function(a){return a.name}}
W.kl.prototype={
gG:function(a){return a.name}}
W.hp.prototype={
a6:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gG:function(a){return a.name}}
W.kP.prototype={
gG:function(a){return a.name}}
W.kT.prototype={
gab:function(a){return a.error}}
W.kU.prototype={
gG:function(a){return a.name}}
W.lc.prototype={
gG:function(a){return a.name}}
W.hv.prototype={$isR:1,
gG:function(a){return a.name}}
W.ed.prototype={$ised:1,$isaZ:1,
gG:function(a){return a.name}}
W.lP.prototype={
n:function(a){return"Rectangle ("+H.w(a.left)+", "+H.w(a.top)+") "+H.w(a.width)+" x "+H.w(a.height)},
H:function(a,b){var t,s,r
if(b==null)return!1
t=J.aP(b)
if(!t.$ishn)return!1
s=a.left
r=t.gbc(b)
if(s==null?r==null:s===r){s=a.top
r=t.gbe(b)
if(s==null?r==null:s===r){s=a.width
r=t.gar(b)
if(s==null?r==null:s===r){s=a.height
t=t.gap(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gL:function(a){var t,s,r,q
t=J.cA(a.left)
s=J.cA(a.top)
r=J.cA(a.width)
q=J.cA(a.height)
return W.ra(W.dC(W.dC(W.dC(W.dC(0,t),s),r),q))},
$ishn:1,
$ashn:function(){},
gap:function(a){return a.height},
gbc:function(a){return a.left},
gbe:function(a){return a.top},
gar:function(a){return a.width}}
W.lW.prototype={$isR:1}
W.lX.prototype={
gap:function(a){return a.height},
gar:function(a){return a.width}}
W.mg.prototype={$isR:1}
W.f8.prototype={
gm:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.r(P.cY(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.r(new P.aN("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.r(new P.aN("Cannot resize immutable List."))},
Z:function(a,b){if(b>>>0!==b||b>=a.length)return H.L(a,b)
return a[b]},
a6:function(a,b){return a.item(b)},
$isI:1,
$asI:function(){return[W.b9]},
$isJ:1,
$asJ:function(){return[W.b9]},
$isC:1,
$asC:function(){return[W.b9]},
$iscb:1,
$ascb:function(){return[W.b9]},
$isbZ:1,
$asbZ:function(){return[W.b9]}}
W.fQ.prototype={
$asI:function(){return[W.b9]},
$asJ:function(){return[W.b9]},
$asC:function(){return[W.b9]},
$isI:1,
$isJ:1,
$isC:1}
W.fV.prototype={
$asI:function(){return[W.b9]},
$asJ:function(){return[W.b9]},
$asC:function(){return[W.b9]},
$isI:1,
$isJ:1,
$isC:1}
W.mF.prototype={$isR:1}
W.m_.prototype={
aF:function(a,b,c,d){return W.hA(this.a,this.b,a,!1,H.O(this,0))},
cO:function(a,b,c){return this.aF(a,null,b,c)}}
W.p7.prototype={}
W.m0.prototype={
bA:function(){if(this.b==null)return
this.cs()
this.b=null
this.d=null
return},
bI:function(a,b){if(this.b==null)return;++this.a
this.cs()},
cS:function(a){return this.bI(a,null)},
cU:function(){if(this.b==null||this.a<=0)return;--this.a
this.cq()},
cq:function(){var t=this.d
if(t!=null&&this.a<=0)J.rF(this.b,this.c,t,!1)},
cs:function(){var t=this.d
if(t!=null)J.rO(this.b,this.c,t,!1)},
du:function(a,b,c,d,e){this.cq()}}
W.m1.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.cX.prototype={
gM:function(a){return new W.j0(a,this.gm(a),-1,null,[H.b8(a,"cX",0)])},
R:function(a,b,c,d,e){throw H.r(new P.aN("Cannot setRange on immutable List."))},
ae:function(a,b,c,d){return this.R(a,b,c,d,0)},
a8:function(a,b,c,d){throw H.r(new P.aN("Cannot modify an immutable List."))},
ba:function(a,b,c,d){throw H.r(new P.aN("Cannot modify an immutable List."))},
$isI:1,
$asI:null,
$isJ:1,
$asJ:null,
$isC:1,
$asC:null}
W.j0.prototype={
v:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.d=J.fh(this.a,t)
this.c=t
return!0}this.d=null
this.c=s
return!1},
gF:function(){return this.d}}
W.mI.prototype={}
P.mn.prototype={
aT:function(a){if(a<=0||a>4294967296)throw H.r(P.qL("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
bH:function(){return Math.random()}}
P.mx.prototype={
al:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.c.Y(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0},
aT:function(a){var t,s,r
if(a<=0||a>4294967296)throw H.r(P.qL("max must be in range 0 < max \u2264 2^32, was "+a))
t=a-1
if((a&t)>>>0===0){this.al()
return(this.a&t)>>>0}do{this.al()
s=this.a
r=s%a}while(s-r+a>=4294967296)
return r},
bH:function(){this.al()
var t=this.a
this.al()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992},
dz:function(a){var t,s,r,q,p,o,n,m
t=J.d7(a,0)?-1:0
do{if(typeof a!=="number")return a.ax()
s=(a&4294967295)>>>0
a=C.d.Y(a-s,4294967296)
r=(a&4294967295)>>>0
a=C.d.Y(a-r,4294967296)
q=((~s&4294967295)>>>0)+(s<<21>>>0)
p=(q&4294967295)>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.c.Y(q-p,4294967296)&4294967295
q=((p^(p>>>24|r<<8))>>>0)*265
s=(q&4294967295)>>>0
r=((r^r>>>24)>>>0)*265+C.c.Y(q-s,4294967296)&4294967295
q=((s^(s>>>14|r<<18))>>>0)*21
s=(q&4294967295)>>>0
r=((r^r>>>14)>>>0)*21+C.c.Y(q-s,4294967296)&4294967295
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=(q&4294967295)>>>0
o=C.c.Y(q-p,4294967296)
q=this.a*1037
n=(q&4294967295)>>>0
this.a=n
m=(this.b*1037+C.c.Y(q-n,4294967296)&4294967295)>>>0
this.b=m
n=(n^p)>>>0
this.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o&4294967295)>>>0
this.b=o}while(a!==t)
if(o===0&&n===0)this.a=23063
this.al()
this.al()
this.al()
this.al()}}
P.hP.prototype={$isR:1,
gX:function(a){return a.href}}
P.d8.prototype={$isR:1}
P.iu.prototype={$isR:1}
P.iv.prototype={$isR:1}
P.iw.prototype={$isR:1}
P.ix.prototype={$isR:1}
P.iy.prototype={$isR:1}
P.iz.prototype={$isR:1}
P.iA.prototype={$isR:1}
P.iB.prototype={$isR:1}
P.iC.prototype={$isR:1}
P.iD.prototype={$isR:1,
gX:function(a){return a.href}}
P.iE.prototype={$isR:1}
P.iF.prototype={$isR:1}
P.iG.prototype={$isR:1}
P.iH.prototype={$isR:1}
P.iI.prototype={$isR:1}
P.iJ.prototype={$isR:1}
P.j_.prototype={$isR:1,
gX:function(a){return a.href}}
P.bQ.prototype={$isR:1}
P.jc.prototype={$isR:1,
gX:function(a){return a.href}}
P.cg.prototype={$isaZ:1}
P.jE.prototype={
gm:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.r(P.cY(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.r(new P.aN("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.r(new P.aN("Cannot resize immutable List."))},
Z:function(a,b){return this.l(a,b)},
$isI:1,
$asI:function(){return[P.cg]},
$isJ:1,
$asJ:function(){return[P.cg]},
$isC:1,
$asC:function(){return[P.cg]}}
P.fR.prototype={
$asI:function(){return[P.cg]},
$asJ:function(){return[P.cg]},
$asC:function(){return[P.cg]},
$isI:1,
$isJ:1,
$isC:1}
P.fW.prototype={
$asI:function(){return[P.cg]},
$asJ:function(){return[P.cg]},
$asC:function(){return[P.cg]},
$isI:1,
$isJ:1,
$isC:1}
P.jT.prototype={$isR:1}
P.jU.prototype={$isR:1}
P.ch.prototype={$isaZ:1}
P.kd.prototype={
gm:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.r(P.cY(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.r(new P.aN("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.r(new P.aN("Cannot resize immutable List."))},
Z:function(a,b){return this.l(a,b)},
$isI:1,
$asI:function(){return[P.ch]},
$isJ:1,
$asJ:function(){return[P.ch]},
$isC:1,
$asC:function(){return[P.ch]}}
P.fS.prototype={
$asI:function(){return[P.ch]},
$asJ:function(){return[P.ch]},
$asC:function(){return[P.ch]},
$isI:1,
$isJ:1,
$isC:1}
P.fX.prototype={
$asI:function(){return[P.ch]},
$asJ:function(){return[P.ch]},
$asC:function(){return[P.ch]},
$isI:1,
$isJ:1,
$isC:1}
P.kp.prototype={$isR:1,
gX:function(a){return a.href}}
P.kK.prototype={$isR:1,
gX:function(a){return a.href}}
P.bJ.prototype={
aD:function(a,b,c,d,e){throw H.r(new P.aN("Cannot invoke insertAdjacentHtml on SVG."))},
$isR:1}
P.l6.prototype={$isR:1}
P.l8.prototype={$isR:1}
P.dv.prototype={}
P.le.prototype={$isR:1,
gX:function(a){return a.href}}
P.lu.prototype={$isR:1,
gX:function(a){return a.href}}
P.lx.prototype={$isR:1}
P.f6.prototype={$isR:1,
gX:function(a){return a.href}}
P.mC.prototype={$isR:1}
P.mD.prototype={$isR:1}
P.mE.prototype={$isR:1}
P.cC.prototype={}
P.d4.prototype={$isI:1,
$asI:function(){return[P.K]},
$isJ:1,
$asJ:function(){return[P.K]},
$isC:1,
$asC:function(){return[P.K]}}
P.kA.prototype={$isR:1}
T.fj.prototype={
$ash2:function(){return[T.fk]},
$asC:function(){return[T.fk]}}
T.fk.prototype={}
S.hQ.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Math Book",H.a([$.F,$.T,$.aG],s),"Unlike JR, Robots have no fear of Math.",!1,"Big Book of Speaking Low Nerd")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Giant Map",H.a([$.F,$.T],s),null,!1,"Map to Staffs HQ")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Microscope",H.a([$.x,$.T,$.aX],s),null,!1,"Viewing Apparatus for Microscopic Perversion")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Star Chart",H.a([$.F,$.T],s),null,!1,"Cosmic Dot-to-Dot")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("History Book",H.a([$.F,$.T],s),null,!1,"Homestuck Anthology")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Radioactive Rock",H.a([$.bC,$.aB],s),"Why the fuck do you have this?",!1,"Shoguns Petrified Hate")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Compass",H.a([$.x,$.T],s),null,!1,"Navigation Box")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.H]
s=H.a(["Books","Libraries","Tomes","Fiction","Pages","Words","Shelves"],t)
H.a([],t)
r=[N.ab,P.V]
q=new H.p(0,null,null,null,null,null,0,r)
q.i(0,$.ez,$.k)
q.i(0,$.b5,$.k)
q.i(0,$.dW,$.j)
q.i(0,$.b_,$.D)
q.i(0,$.bY,$.j)
p=$.l
o="The "+p+" finds a massive library, with no books in it! They manage to get a local "
n=$.q
o=o+n+" to stop "
m=$.G
l=[U.c]
q.i(0,new R.X("Recover the Books",!1,[new U.c(o+m+"ing long enough to discover that underlings stole all the books. "),new U.c("The "+p+" has tracked down the book thieves to a nearby dungeon. After some harrowing puzzles and frankly amazing battles, the books are recovered. "),new U.c("The "+n+" librarian is beside himself and cannot stop "+m+"ing. The  "+p+" is hailed as a local hero for returning the books!  ")],H.a([],l),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
p=$.l
q.i(0,new R.X("Shelve the Books",!1,[new U.c("The "+p+" finds a massive library, with no books in it! They manage to get a local "+$.q+" to stop "+$.G+"ing long enough to discover that the Librarian quit and none of the books have been reshelved. "),new U.c("The "+p+" decides to volunteer at the library, and beings shelving books. There's a book.  And another book. Oooo, that one looks interesting.... "),new U.c("The "+p+" has finally shelved the final book!  They are first in line to begin checking things out, too. Books!  ")],H.a([],l),R.qJ(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.l
m="The "+p+" finds a massive library, filled with books. The "
n=$.q
m=m+n+" librarian offers to help the "+p+" search for useful books. "
o="The "+p+" begins to learn about "
k=$.u
n=o+k+" and how they have persecuted the "+n+"s.  "
k="The "+p+" has read the final book about "+k+" and feels much more prepared to face them.  "
p=this.y
q.i(0,new R.X("Research the Denizen",!1,[new U.c(m),new U.c(n),new U.c(k)],H.a([],l),R.e9(),!1,!1,new Y.bd("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.j)
p=this.r
p.i(0,new X.z(s,q,null),$.aE)
q=H.a(["Calculators","Math","Numbers","Formulas","Algebra","Calculus"],t)
H.a([],t)
s=new H.p(0,null,null,null,null,null,0,r)
s.i(0,$.dO,$.D)
s.i(0,$.bY,$.k)
o=$.l
n="The "+o+"  is approached by a "
m=$.q
s.i(0,new R.X("Do the Math",!1,[new U.c(n+m+" who had 13 apples, but needs to give them to their 3 children proportionate to their ages.   Oh god. Math. "),new U.c("The "+o+" catches some thieves only to discover that robbery is illegal only on days that are prime factors of 1300. Oh god. Math. "),new U.c("The "+m+"  finds a "+m+" child "+$.G+"ing up a storm. It turns out they got their quiz question wrong and they don't know why.  Does the "+o+" know why? (Spoiler alert, it turns out to be order of operations.) You begin to wonder if SBURB is one of those shitty 'educational' games. ")],H.a([],l),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
o=$.l
m="The "+o+" finds a mysterious calculator in a place of prominence on their land. They poke and prod at it.  What could it be? "
n=$.q
s.i(0,new R.X("Use the Calculator",!1,[new U.c(m),new U.c("BZAP!  There are now two "+n+"s.  BZAP!  Now there are four.  The "+o+" is getting the hang of this weird calculator that controls reality. "),new U.c("With a frantic "+$.G+", a small "+n+" sprints towards the "+o+".  A giant ogre is chasing them.  In a panic, the "+o+" hits the 'divide' key, and the Ogre is defeated. Holy shit.  ")],H.a([],l),R.dn(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
o=$.l
s.i(0,new R.X("Solve the Equation",!1,[new U.c("The "+o+"  finds a mysterious equation scrawled onto a wall. What could it mean? "),new U.c("There is a flurry of motion.  The "+o+" shouts out in triumph.  THAT's what that variable means! The equation on the wall is one step closer to being solved.  "),new U.c("The "+o+" has done it. Against all odds they have solved the equation.  A "+$.q+" runs up to them and gives them a fraymotif as the prize for being so good at math.  ")],H.a([],l),R.e9(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p.i(0,new X.z(q,s,null),$.aE)
s=H.a(["Flasks","Test Tubes","Chemicals","Science","Labs","Beakers"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,r)
t.i(0,$.dO,$.D)
t.i(0,$.bY,$.k)
t.i(0,$.bK,$.D)
t.i(0,$.nC,$.D)
r=$.l
q="The "+r+"  is approached by a "
o=$.q
q=q+o+" who offers them a grant to study "
n=$.ac
t.i(0,new R.X("Test the Hypothesis",!1,[new U.c(q+n+", the only catch is they must present their findings at a giant symposium in just a little bit. "),new U.c("The "+r+" forms hypothesis after hypothesis only for each to be completely falsified in turn. This is a disastor! "),new U.c("The Symposium has started. The crowd of unruly "+o+"s begins "+$.G+"ing louder and louder. Finally, the "+r+" bursts in, looking disheveled. It was last minute, but they managed to find something groundbreaking about "+n+", and they do an enthralling presentation on their findings. They are hailed as a SCIENCE HERO!")],H.a([],l),R.e9(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
n=$.q
r="Too many local "+n+" have fallen ill from a mysterious plague.  Those inflicted are too weak to even "
o=$.G
r=r+o+".  It is up to the "
q=$.l
r=r+q+" to figure out how to cure the disease.  They are provided with a state of the art lab and a team of ...not completely terrible "+n+"s."
m="The "+q+" has gotten far too little sleep. Suddenly, they realize the key, the one thing they have been missing: "
k=$.ac
t.i(0,new R.X("Make the Cure",!1,[new U.c(r),new U.c(m+k+". It all makes sense now! "),new U.c("Each "+n+" lines up to receive their "+k+" injection. The sound of joyful "+o+" fills the air. The plague is defeated!  The "+q+" has a statue made of them in the town center. ")],H.a([],l),R.cZ(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
q=$.l
t.i(0,new R.X("Be the Scientist",!1,[new U.c("The "+q+"  finds a mysterious lab, fully stocked with equipment and chemicals. It is completely abandoned. Locked doors are on every wall of the main area. "),new U.c("The "+q+"  realizes that various sections of the lab open up if you pour the right kind of chemical into a slot on the door. They begin venturing deeper and deeper into the lab.  "),new U.c("The "+q+" has finally reached the final door. They bite their lip in concentration as they pour the final mixed chemical into the slot.  The door slides open.  A sudden "+$.G+" nearly has them drop the dangerous fluid, but they manage to regain their composure in time.  An entire room of "+$.q+"s are inside the final room, outfitted for a surprise party.  It is for "+q+" to celebrate how great at science they are! There is even a SCIENCE CAKE.")],H.a([],l),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
p.i(0,new X.z(s,t,null),$.aE)}}
K.bw.prototype={
ai:function(){return"<div class = 'feature'>Feels "+H.w(this.b)+", Quality: "+H.w(this.a)+"</div>"}}
L.hT.prototype={
$1:function(a){return!a.gaQ()},
$S:function(){return{func:1,args:[L.dI]}}}
L.dI.prototype={
q:function(){var t,s
t=Q.B(null,null,A.a3)
s=A.i("Perfectly Generic Object",H.a([],[G.a2]),null,!1,"I Think Is The Starbound Item For Debugging Unused Item IDs")
C.a.h(t.b,new Q.h(s,t.k(s,1),[H.O(t,0)]))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.H]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.ab,P.V]
q=new H.p(0,null,null,null,null,null,0,r)
q.i(0,$.cj,$.j)
q.i(0,$.b5,$.D)
q.i(0,$.cM,$.j)
q.i(0,$.bK,$.k)
q.i(0,$.cU,$.D)
p=$.l
o="The "+p+" learns that all of the local "
n=$.q
o=o+n+"s are dead. This is....really depressing, actually. "
m="The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "
n="With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.G+"ing.  The "+n+"s are alive again!  "
l="It is time for the "+p+"  to finally face the "
k=$.u
l=l+k+". "
j="The "+k+" lies slain by the "+p+"'s "+$.bR+". The "+p+" has won! "
i=[U.c]
q.i(0,new R.W("Revive the Consorts",!1,[new U.c(o),new U.c(m),new U.c(n),new U.a1(l,"The tyranny of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
j=this.c
j.i(0,new X.z(s,q,null),$.aJ)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.p(0,null,null,null,null,null,0,r)
s.i(0,$.dU,$.j)
s.i(0,$.dc,$.D)
s.i(0,$.dT,$.k)
s.i(0,$.c7,$.j)
s.i(0,$.bU,$.D)
p=$.l
o="The "+p+" learns that all of the local "
n=$.q
o=o+n+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "
m="The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "
l="The "+p+" is training the local "+n+"s to operate the manufacturing equipment. There is "+$.G+"ing and chaos everywhere. "
n="The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+n+"s name a national holiday after the "+p+". "
k="It is time for the "+p+"  to finally face the "
h=$.u
k=k+h+". "
g="The "+h+" lies slain by the "+p+"'s "+$.bR+". The "+p+" has won! "
s.i(0,new R.W("Produce the Goods",!1,[new U.c(o),new U.c(m),new U.c(l),new U.c(n),new U.a1(k,"The tyranny of "+h+" continues with the defeat of the "+p+".",g)],H.a([],i),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
j.i(0,new X.z(q,s,null),$.aJ)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,r)
t.i(0,$.b_,$.j)
t.i(0,$.b5,$.D)
t.i(0,$.bL,$.k)
r=$.l
q="The "+r+" learns that all of the local "
p=$.q
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
n=$.G
o=o+n+"ing about? A prophecy?  "
n="The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+n+" once. "
p="It is time for the "+r+"  to finally face the "
m=$.u
p=p+m+". "
l="The "+m+" lies slain by the "+r+"'s "+$.bR+". The "+r+" has won! "
t.i(0,new R.X("Relax the Consorts According to Prophecy",!1,[new U.c(q),new U.c(o),new U.c(n),new U.a1(p,"The tyranny of "+m+" continues with the defeat of the "+r+".",l)],H.a([],i),R.oG(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.D)
l=$.l
r="The "+l+" learns that all of the local "
m=$.q
r=r+m+"s have been too stressed about an impending famine to relax. They vow to help however they can."
p="The "+l+" fluffs more pillows than any other Player ever has before them. "
m="The "+l+"  teaches the local "+m+"s to find their chill. "
n="It is time for the "+l+"  to finally face the "
o=$.u
n=n+o+". "
q="The "+o+" lies slain by the "+l+"'s "+$.bR+". The "+l+" has won! "
t.i(0,new R.W("Relax the Consorts",!1,[new U.c(r),new U.c(p),new U.c(m),new U.a1(n,"The tyranny of "+o+" continues with the defeat of the "+l+".",q)],H.a([],i),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
j.i(0,new X.z(s,t,null),$.aJ)},
n:function(a){return this.x},
I:function(a,b,c,d){var t=this.x
this.d=new X.fA("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+t+".xml",!1,H.a([],[X.fo]),H.a([],[M.ey]))
this.y=t
this.e=t+".png"
this.f=t+"Big.png"
this.q()
this.p()
t=this.b
if($.$get$fl().a1(t))H.bo("Duplicate aspect id for "+this.n(0)+": "+t+" is already registered for "+J.bX($.$get$fl().l(0,t))+".")
$.$get$fl().i(0,t,this)},
gaq:function(){return this.c},
gG:function(a){return this.x},
gaQ:function(){return this.Q}}
L.ag.prototype={}
M.hV.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Barbells",H.a([$.aa,$.bH,$.x],s),null,!1,"Strength Building Metal")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Basketball",H.a([$.dg,$.bI],s),null,!1,"Dunksphere")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Baseball Bat",H.a([$.h0,$.U],s),null,!1,"Wooden Pole of Bone Hurting")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Rubber Ball",H.a([$.dg,$.bI],s),null,!1,"Dead Animal Corpse Ball")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Megaphone",H.a([$.aV,$.a4],s),"Let's you be a loud asshole instead of a regular asshole.",!1,"Handheld Voice Empowerer")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Hockey Stick",H.a([$.h0,$.U,$.cO],s),null,!1,"L Shaped Bone Hurter")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Trophy",H.a([$.x,$.b3],s),"Huh. What could you posibly have won. Ever.",!1,"Award for Best At Shitposting")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Boxing Glove",H.a([$.q1,$.bI],s),null,!1,"Fist Reinforcing Pain Cubes")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Yoga Mat",H.a([$.bI,$.b1],s),null,!1,"Flesh Rubberising Practice Mat")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.H]
s=H.a(["Weights","Strength","Barbells","Muscles","Dumbbells","Bodybuilding"],t)
H.a([],t)
r=[N.ab,P.V]
q=new H.p(0,null,null,null,null,null,0,r)
q.i(0,$.cN,$.D)
q.i(0,$.bO,$.k)
q.i(0,$.c7,$.D)
p=$.l
o="The "+p+" approaches a dungeon blocked off by a huge boulder. They push and pull at it, but just can't budge it.  A "
n=$.q
o=o+n+" walks by talking about how wimpy and low level the "+p+" is. They vow to get STRONGER!. "
n="The "+p+" has the most bitching training montage of all time, complete with various "+n+" providing a motivational soundtrack of "+$.G+"s. "
p="The "+p+" dramatically heaves the boulder out of the way. They are now STRONG!  The actual dungeon proves to be a disappointing afterthought.  "
m=this.y
l=[U.c]
q.i(0,new R.X("Enter the Dungeon",!1,[new U.c(o),new U.c(n),new U.c(p)],H.a([],l),R.t(),!1,!1,new Y.bd("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.v)
m=$.l
p="The "+m+" finds a road blocked by a giant tree. Where did it even come from? There is a pile up of "
n=$.q
q.i(0,new R.X("Clear the Road",!1,[new U.c(p+n+" merchants waiting for it to be cleared. "),new U.c("The "+m+" is tired of waiting. They organize the "+n+"s into groups, and tries to explain the concept of team work to the. Huh. This is going to take a while. "),new U.c("With a triumphant "+$.G+", the organized "+n+" pull the fallen tree away from the road with the "+m+"'s help.  Everyone can finally get on with their day now!  ")],H.a([],l),R.cZ(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
m=$.l
n="The "+m+"  wanders into a bunch of "
p=$.q
q.i(0,new R.X("Be the Strongest",!1,[new U.c(n+p+" arguing over who the strongest being in the Land is. Wow, they all seem so STRONG! Apparently there is a STRENGTH competition soon? The "+m+" enters it, and tries to ignore the snickers of the "+p+"s. They can get strong, just you wait and see!"),new U.c("The "+m+" has the most bitching training montage of all time.  They are getting STRONG! "),new U.c("It is the day of the STRENGTH competition. The "+m+" is the star, it is them.  A "+p+" puts a gold medal around their neck. Everyone agrees that the "+m+" is the strongest.")],H.a([],l),R.hl(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
m=this.r
m.i(0,new X.z(s,q,null),$.aE)
q=H.a(["Teams","Sports","Balls","Competition","Athletics","Olympians"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,r)
t.i(0,$.cN,$.k)
t.i(0,$.dX,$.k)
t.i(0,$.bO,$.k)
s=$.l
r="The "+s+" finds a team of underdog "
p=$.q
t.i(0,new R.X("Save the Sports",!1,[new U.c(r+p+"s that need to win a SPORTSBALL tournament against underlings in order to save their village. The "+s+" agrees to help their noble cause.  "),new U.c("The "+s+" sees a shady underling offering a comically large sack of boonies to the SPORTS AUTHORITY! Oh no, sports corruption! How will they ever save the village now?  "),new U.c("The "+s+" exposes the underlings' SPORTSBALL cheating at the most hilarious possible moment. Through the power of true friendship, justice and a heaping helping of montages, the underdog "+p+" have won the SPORTSBALL tournament.")],H.a([],l),R.qJ(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.q
s="A group of "+p+"s approach the "
r=$.l
s=s+r+". Apparently their sports team lost their coach to the "+$.u+" recently, and they need help training for THE BIG GAME. "
o="The "+r+"  has the worst training montage in all of paradox space as they get their team of shitty "+p+"s into fighting shape. "
n="The "+p+"s fall over "
k=$.G
t.i(0,new R.X("Coach the Sports",!1,[new U.c(s),new U.c(o),new U.c(n+k+"ing and just...generally being the worst at sports.  Luckily, the opposing team is somehow WORSE at it. The "+r+" is pretty nonplussed to win the trophecy, even with all the "+p+"s cheering and "+k+"ing.")],H.a([],l),R.cZ(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
k=$.q
p="A group of "+k+"s approach the "
r=$.l
t.i(0,new R.X("Win at Sports",!1,[new U.c(p+r+". Apparently their sports team lost a member to the "+$.u+" recently, and if they can't replace him in time they can't compete in the TOURNAMENT. The "+r+" agrees to join their team before they can even suggest it. Sports!"),new U.c("The "+r+"  has the best training montage in all of paradox space as they get their team into fighting shape. "),new U.c("The "+r+" ganks the "+$.ac+" and steals the big man's thunder. They win all the sports points. They are the star. It is them. Their team of trusty "+k+"s lifts the "+r+" up onto their shoulders. This is the best day of their life.")],H.a([],l),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
m.i(0,new X.z(q,t,null),$.aE)}}
O.hW.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Cod Piece",H.a([$.M,$.Z,$.aS,$.P],s),"God damn it, MI. ",!1,null)
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Poisoned Candy",H.a([$.nO,$.P,$.bs],s),"I guess CodTier is okay.",!1,"Not So Sweet Treat")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Cursed Lyre",H.a([$.aF,$.U,$.be,$.P,$.a7],s),"I guess CodTier is okay. Sort of.",!1,"I Don\u2019t Know What This Is Normally")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Snare Trap",H.a([$.M,$.aF,$.P,$.b2],s),"I guess CodTier is okay. But still. The actual codpiece. You fleshy meatbags and your weird shit.",!1,"The Perfect Trap")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o,n,m
t=[P.H]
s=H.a(["Festivals","Carnivals","Parades","Celebrations","Jamboree","Fairs","Amusements"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,[N.ab,P.V])
t.i(0,$.c2,$.j)
t.i(0,$.eC,$.j)
t.i(0,$.bV,$.j)
t.i(0,$.cJ,$.j)
t.i(0,$.ca,$.j)
t.i(0,$.dN,$.j)
r="After all the bullshit the "+$.u+" has put the native "
q=$.q
r=r+q+"s through, the "
p=$.l
r=r+p+" figures they could use a break. They decide to revive a planet wide "+$.aM+" Festival to get morale back up."
o="A small "+q+" is sobbing and "
n=$.G
m=[U.c]
t.i(0,new R.a6("Celebrate the Win",!1,[new U.c(r),new U.c(o+n+"ing after losing a carnival game. The "+p+" decides that this is not a day of losses, and begins rigging the games to have a higher pay out rate than normal. Soon the land is filled with the sound of happy "+n+"s."),new U.c(" The "+q+"s who were running the carnival games are now bankrupt. Their wailing and "+n+"ing fills the air. Fuck.  Who knew actions have consequences? The "+p+" arranges 'anonymous' donations to them and decides that maybe they should just quit while they are ahead. ")],H.a([],m),R.t(),!1,!1,new Y.dq("Rewards/no_reward.png",null),1,null,null),$.v)
p=$.q
n="A group of jubilant "+p+"s are following the "
q=$.l
n=n+q+" around. It's kind of flattering, but it sure is drawing a lot of attention!"
o="Even more "+p+" are following the "+q+" now, "
r=$.G
t.i(0,new R.a6("Lead the Parade",!1,[new U.c(n),new U.c(o+r+"ing about how they defeated the "+$.u+". Wow, this is actually kind of embarrasing. "),new U.c("Oh god, somehow there are PARADE FLOATS involved now? The line of "+p+"s have drawn a huge crowd to watch and "+r+".  It looks like whole roads are being blocked off by the event, and nobody is getting any work done. The entire day's productivity is destroyed, and it isn't even the "+q+"'s fault. ")],H.a([],m),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
q=$.l
t.i(0,new R.a6("Behold the Glory of CodTier",!1,[new U.c("The "+q+" hears tell of a legendary artifact, so beautiful, so sleak and aerodynamic that all who behold it are moved to tears. They need it. SO badly. That glorious front tail. Now that the "+$.u+" has been defeated, perhaps they can finally focus on finding it."),new U.c("The "+q+" has journeyed far and wide, going so far as to make pacts with the dead. Finally. They have it.")],H.a([],m),R.t(),!1,!1,new Y.i8("/Rewards/sweetCod.png","Rewards/no_reward.png",null),1,null,null),$.v)
q="The "+$.u+" has released the frogs from their balloon prisons. The balloons sink and land all over the land, and the newly freed frogs happily hop out. The "
r=$.l
q=q+r+" organizes a huge festival for all the "
p=$.q
t.i(0,new R.bn("Pull the Strings of a Universe",!1,[new U.c(q+p+"s themed around finding and collecting frogs. They sit back and allow events to transpire. "),new U.c("The "+r+" presides over a festival competition where "+p+" contestants try to breed the best frogs."),new U.c("The "+r+" sets things up such that the final frog was always going to be right where it needed to be.      ")],H.a([],m),R.bA(),!1,!1,new Y.bm("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.az)
this.c.i(0,new X.z(s,t,null),$.bv)}}
Y.ld.prototype={
$asf0:function(){return[P.H]},
$ascl:function(){return[P.H,P.H]}}
T.i_.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Mystical Vial of Blood",H.a([$.aX,$.be,$.S,$.aQ],s),null,!1,"Vial of Not-ABs Oil")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Bananaphone",H.a([$.aw,$.be,$.S,$.aT],s),"Really? Yet another in-joke nobody will ever get? Good work, 'oh mighty creator'. ",!1,"Yellow Respect Device")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Friendship Bracelet",H.a([$.M,$.be,$.S,$.aQ,$.eF],s),null,!1,"Soul Binding Wrist Shackle")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Bonding Manacles",H.a([$.x,$.b2,$.S,$.aQ,$.eF,$.aI],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Friendship Stairs",H.a([$.U,$.nX,$.be,$.aQ,$.S,$.Z],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.H]
s=H.a(["Pulse","Clots","Ichor","Veins","Chambers","Arteries","Flow"],t)
H.a([],t)
r=[N.ab,P.V]
q=new H.p(0,null,null,null,null,null,0,r)
q.i(0,$.cG,$.j)
q.i(0,$.nF,$.j)
q.i(0,$.bK,$.k)
p=$.l
o="The "+p+" finds a great lake of red. On the other side, they can see a village of "
n=$.q
o=o+n+"s in need of their help. The "+p+" will need to find a way to cross the lake of blood if they want to give aid."
m="The "+p+" gets help from "+n+"s on their side of the lake to build a massive boat. They put blood, sweat, tears, but mostly blood, into building the boat."
l="With the boat placed into the lake, the "+p+" begins their voyage across the raging rapids. They will need all the help they can get from their "+n+" crewmates to reach the other side."
p="After hours of captaining their ship, the "+p+" arrives on the other side of the lake. It turns out they spent so long building the boat that the village fixed its own problems. A considerate "+n+" hands the "+p+" a "+$.ac+" and some boondollars in compensation."
n=this.r2
k=[U.c]
q.i(0,new R.X("Cross the Lake",!1,[new U.c(o),new U.c(m),new U.c(l),new U.c(p)],H.a([],k),R.cZ(),!1,!1,new Y.bd("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.v)
n=$.q
p="The land is a series of candy red lakes. A wise old "+n+" stops "+$.G+"ing enough to explain that these lakes actually used to be mighty rivers, until "
l=$.u
p=p+l+" plugged them up with dams. Now the "+n+"s can't travel or trade with other villages at all, and the land has begun to stagnate."
m=$.l
o="The "+m+" discovers the correct sequence of hydraulic pumps to activate to increase the river pressure enough to jettison away the blockage in a geyser of candy red. The first river begins to flow, and the local "+n+"s begin resuming trade activities.   "
j="As the "+m+" goes around unplugging each river in turn, they begin to notice more and more debris among the candy red flow. Is "+l+" conspiring to reclog the rivers? "
i="It is time for the "+m+"  to finally face the "+l+". The rivers are too vital to the "+n+"s to risk having them reclog."
n="The "+l+" lies slain by the "+m+"'s "+$.bR+". The "+m+" has won! The "+n+"s have a bustling trade based economy once again."
q.i(0,new R.W("Unplug the Rivers",!1,[new U.c(p),new U.c(o),new U.c(j),new U.a1(i,"The tyranny of "+l+" continues with the defeat of the "+m+".",n)],H.a([],k),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
n=this.c
n.i(0,new X.z(s,q,null),$.aJ)
q=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
s=new H.p(0,null,null,null,null,null,0,r)
s.i(0,$.c7,$.j)
s.i(0,$.ca,$.D)
s.i(0,$.b_,$.D)
s.i(0,$.iX,$.j)
s.i(0,$.bV,$.D)
p=$.l
o="The "+p+"  and the "
m=$.d_
o=o+m+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
l="The "+p+"  and the "+m+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
j="The "+p+"  and the "+m+" trust each other to have their backs.  So when the "
i=$.u
j=j+i+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+i+"."
h="Slaying the "+i+" proves the POWER OF TEAMWORK!"
s.i(0,new R.W("Learn the Power of Teamwork",!1,[new U.c(o),new U.c(l),new U.a1(j,"The "+p+" and "+m+" end up getting distracted bickering after one of the "+i+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",h)],H.a([],k),R.dp(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.az)
h=$.l
i="The "+h+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
m=$.q
i=i+m+"s explains that before  "
p=$.u
i=i+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+m+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+h+" vows to help. "
m="The "+h+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+m+"s discover that "+m+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
j="The "+h+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
l="The "+h+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+h+"'s "+$.bR+". The "+h+" is finally free to restore the chains, bringing peace and understanding to the land. "
s.i(0,new R.W("Chain the Towers",!1,[new U.c(i),new U.c(m),new U.c(j),new U.a1(l,"The tyranny  and xenophobia of "+p+" continues with the defeat of the "+h+".",o)],H.a([],k),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
o=$.l
h="The "+o+" learns of the "
p=$.aM
h=h+p+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
l=$.q
h=h+l+" explains that the "
j=$.u
l=h+j+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+l+"s from communciating with other villages and risking the entire planet falling apart.  "
h="The "+o+" hears of a fantastical secret kept at the top of the "+p+" Tower. It is said that the "+j+" seeks to topple it to gain this secret. Perhaps the "+o+" is small enough to climb the tower to claim it themselves?"
m="The "+o+" defeats a fearsome "+j+" minion, whose death unlocks the most direct path to the "+p+" Tower . "
i="The "+o+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+j+". "
o="The "+j+" lies slain by the "+o+"'s "+$.bR+". The "+o+" is finally able to see what lies at the top of the "+p+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
s.i(0,new R.W("Protect the Beams",!1,[new U.c(l),new U.c(h),new U.c(m),new U.a1(i,"The "+p+" Tower is more at risk than ever before.",o)],H.a([],k),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
o=$.l
p="They say it can't be done, but the "+o+" is confident that they can become friends with every single "
i=$.q
p=p+i+" on "+$.aM+"book. They start small, just talking to any "+o+" that wanders by. They know they can do this!"
m="Oh god. Less than 10% of the "+o+" population have been friended. The "+o+" is starting to think that maybe they understimated how hard this would be. "
i="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+i+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+o+" schmoozes the right few "+i+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
o="The "+$.dY+" has so many friends, they have to assume everyone in this fight is already in their friend list."
s.i(0,new R.a6("One Degree of Separation",!1,[new U.c(p),new U.c(m),new U.c(i)],H.a([],k),R.e9(),!1,!1,new Y.N("Friend Request",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
o=$.l
i="They say it can't be done, but the "+o+" is confident that they can become friends with every single "+$.q+" on "
m=$.aM
i=i+m+"book. They start small, just talking to any "+o+" that wanders by. They know they can do this!"
p="Oh god. Less than 10% of the "+o+" population have been friended. The "+o+" is starting to think that maybe they understimated how hard this would be. "
m="The "+o+" decides that doing things the hard way is for chumps and just hacks into "+m+"book to steal all the friends. Yay, they win! They are the best! "
o="The "+$.dY+" is now more popular with your friends than you are."
s.i(0,new R.a6("Steal The Friends",!1,[new U.c(i),new U.c(p),new U.c(m)],H.a([],k),R.oH(),!1,!1,new Y.N("Friend Stealer",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
o=$.l
m="The "+o+"  and the "
p=$.d_
m=m+p+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
i="The "+o+"  and the "+p+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
h=$.u
i=i+h+" doing here!?"
h="Slaying the "+h+" proves to be the thing that finally pushes the "+o+" and "+p+" together."
s.i(0,new R.W("Pale Shipping Dungeon",!1,[new U.c(m),new U.a1(i,"The "+o+" and "+p+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.w(C.o)+".",h)],H.a([],k),R.dp(),!1,!1,new Y.hi(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.az)
n.i(0,new X.z(q,s,null),$.aJ)
s=H.a(["Bloodlines","Generations","Family","Community","Villages"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,r)
t.i(0,$.b_,$.j)
t.i(0,$.b5,$.D)
t.i(0,$.bL,$.k)
r="In the wake of the defeat of the "+$.u+" it becomes really how isolated the individual "
q=$.q
r=r+q+" villages are. It is far too common for a young "+q+" to never have even MET their cousins. The "
p=$.l
r=r+p+" resolves to fix this as soon as possible."
p="The "+p+" is working hard to restore roads, track down long lost family members and generally just remind all the "+q+"s that at the end of the day they are all one big happy family. "
q="All those hours of hard work have paid off, the individual "+q+" villages have all been brought back into communication with each other. The sense of community is so strong, you could cut it with a knife. Or maybe wield it as one?"
o="It may take a village for the "+$.dY+" to kick your ass, but luckily they have several."
t.i(0,new R.a6("Connect The Villages",!1,[new U.c(r),new U.c(p),new U.c(q)],H.a([],k),R.cZ(),!1,!1,new Y.N("Community Builder",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
o=$.l
q="The "+o+" learns that two prominent "
p=$.q
q=q+p+" families have been feuding for generations, despite once having been the best of friends. The land is on the verge of a civil war as uninvolved "+p+"s pick a side, and everyone is suffering."
r="The "+o+" tries to track down the origin of the feud that leaves their land on the verge of a civil war. Nobody can point to any REASON for it to be happening. "
m="In a dramatic reveal, the "+o+" discovers that "
l=$.u
m=m+l+" is responsible for the feud. The two "+p+" families never wronged each other, it's a huge misunderstanding. But how can they prove this to the feuding families? "
j="The "+o+" confronts "+l+". The beast smuggly admits to its crimes, and claims that the proof needed lies within its hoard. Will the "+o+" be able to claim it?"
p="The "+l+" lies slain by the "+o+"'s "+$.bR+". The "+o+" shows the proof to the two "+p+" families, who reconcile in a dramatic shower of happy tears and "+$.G+"ing. "
t.i(0,new R.W("Stop the Feud",!1,[new U.c(q),new U.c(r),new U.c(m),new U.a1(j,"The deception of "+l+" continues with the defeat of the "+o+".",p)],H.a([],k),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
n.i(0,new X.z(s,t,null),$.aJ)}}
T.i2.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Pan's Pipe",H.a([$.a7,$.U,$.be,$.S],s),null,!1,"Smonkin Weeds Pipe")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Skeleton Key",H.a([$.b0,$.S],s),"You are never gonna be imprisoned again.",!1,"THE BONE SHAPED HOLE BREAKER")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Inspector's Fan",H.a([$.a4,$.x,$.be,$.S],s),"Probably a refrance.",!1,"Fondly Regarded Fan")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Jet Pack",H.a([$.ax,$.x,$.aV,$.S,$.Z],s),"Don't skip gates, asshole.",!1,"Rocket Powered Pants")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.H]
s=H.a(["Wind","Breeze","Pipes","Mail","Whistles","Pipe Organs","Delivery"],t)
H.a([],t)
r=[N.ab,P.V]
q=new H.p(0,null,null,null,null,null,0,r)
q.i(0,$.bL,$.k)
q.i(0,$.dX,$.j)
q.i(0,$.b_,$.k)
p=$.l
o="The "+p+" tries posting a letter through the "
n=$.ac
o=o+n+" mail system only to find the letter caught in a plug of oil!  "
m=$.u
o=o+m+" has screwed with the mail system, crippling the "
l=$.q
o=o+l+" economy!"
k="The "+p+" cleans out oil from the nearby "+n+"s, opening up a few more channels between villages. "
n="The "+p+" gets sick of all the fucking oil in the "+n+" mail system, and realizes the only way to truly deal with it and to allow information to flow free is to confront "+m+"."
j="It is time for the "+p+"  to finally face the "+m+". The mail is too vital to the "+l+"s to risk having them reclog."
l="The "+m+" lies slain by the "+p+"'s "+$.bR+". The "+p+" has won! The "+l+"s have a bustling mail based economy once again."
i=[U.c]
q.i(0,new R.W("The Mail Goes Through",!1,[new U.c(o),new U.c(k),new U.c(n),new U.a1(j,"The tyranny of "+m+" continues with the defeat of the "+p+".",l)],H.a([],i),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
l=this.c
l.i(0,new X.z(s,q,null),$.aJ)
q=H.a(["Zephyr","Fans","Windmills","Pinwheels","Propellers"],t)
H.a([],t)
s=new H.p(0,null,null,null,null,null,0,r)
s.i(0,$.b5,$.j)
s.i(0,$.dX,$.k)
s.i(0,$.b_,$.k)
s.i(0,$.bO,$.k)
s.i(0,$.bL,$.k)
p=$.l
o="The "+p+" constructs a little windmill system for a joke, and suddenly an entire village of consorts has grown up around it! The "+p+" decides that they should use the winds of their land for more projects. "
n="The "+p+" starts learning the uses of their lands "
m=$.ac
n=n+m+" in manipulation of wind. Their future constructions are going to be amazing. "
m="The "+p+" uses "+m+"s to build a massive farming system that harnesses the wind to distribute seeds across the "
k=$.q
k=m+k+" fields. The "+k+"s "+$.G+"ing is so joyful it's literally deafening. "
m=$.u
j=m+" is attacking the happy wind based farming community. The "+p+" has worked too hard for it all to be lost now. There can be no mercy. "
h="The "+m+" lies slain by the "+p+"'s "+$.bR+". The "+p+" is finally free to continue improving the land with wind. "
s.i(0,new R.W("Thinking With Wind Power",!1,[new U.c(o),new U.c(n),new U.c(k),new U.a1(j,"The tyranny of "+m+" continues with the defeat of the "+p+".",h)],H.a([],i),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
l.i(0,new X.z(q,s,null),$.aJ)
s=H.a(["Twisters","Cyclones","Gales","Storms","Hurricanes","Gusts","Tornadoes","Typhoons"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,r)
t.i(0,$.bU,$.j)
t.i(0,$.nG,$.j)
t.i(0,$.dX,$.D)
t.i(0,$.bL,$.D)
r=$.l
q="The "+r+" is chilling in a "+$.q+" village when a FUCK OFF HUGE STORM blows through, destroying the consorts housing. The player learns that "
p=$.u
q=q+p+" has screwed with the wind system, sending these giant storms at random."
o="The "+r+" learns of a "
n=$.ac
o=o+n+" system that controls the storms of their land. The begin adventuring and solving puzzles to alter the layout of the "+n+" system so the storms are redirected from consort villages. "
n="The "+r+" finishes the dungeon that holds the  "+n+" systems control panel, only to find the control room totally empty. They learn that they only needed their own "+$.aM+" to do control the storms in the first place, and it was inside them all along.  "
m=" "+p+" arrives to challenge the "+r+" storm supremacy. Will the "+r+" be able to prove their worth?"
k="The "+p+" lies slain by the "+r+"'s "+$.bR+". The "+r+" has become the storm master. It is them. "
t.i(0,new R.W("The Winds of Change",!1,[new U.c(q),new U.c(o),new U.c(n),new U.a1(m,"The storm supremacy of "+p+" continues with the defeat of the "+r+".",k)],H.a([],i),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
l.i(0,new X.z(s,t,null),$.aJ)}}
Z.i3.prototype={
p:function(){var t,s,r,q,p,o,n,m,l
t=[P.H]
s=H.a(["Skateboards","Bikes","Ramps"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,[N.ab,P.V])
t.i(0,$.cN,$.v)
t.i(0,$.bO,$.D)
t.i(0,$.dR,$.j)
t.i(0,$.dP,$.az)
t.i(0,$.iW,$.D)
r=$.l
q="The "+r+" is a bit confused about SBURB. apparently it's about "
p=$.ac
q=q+p+"s or some noise?"
p="The "+r+" is sure that "+p+"s are like fucking dynamite in a handbag for some brosephs. But all they're saying is, when do you get to <b>thrash</b> anything?"
o="The "+r+' gives up on playing the game for now, and decides to instead bust out, and I quote, "the mad stunts all wicked up-ins".'
n=$.u
m="So ok. <br></br> An end to the disasters caused by "+n+" is something that a lot of "+$.q+"s seem hella pumped of. And their lair is sitting right in front of the "+r+", so they're like, yeah man I'll fight it."
n+=" is so wasted, ha ha. I mean damn."
l=[U.c]
t.i(0,new R.W("Bust Out the Mad Stunts all Wicked Up-Ins",!1,[new U.c(q),new U.c(p),new U.c(o),new U.a1(m,"the "+r+" has failed, and the consorts remain in jeopardy of getting mud on their doll's dresses or whatever.",n)],H.a([],l),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.D)
n=$.l
r="At this point, the "+n+" would like to give a shout out to their boy "
m=$.d_
r=r+m+". the two are about to go chill in front of The Dark "+$.G+", and are so psyched of it."
o="The "+m+" was leaning against the screen door when the shit popped open. they slip down the steps and break their thumb on the lawn. It wasn't a long fall, but hey I guess a thumb bone wasn't made for supporting the brunt of a huge useless tool against wet grass."
n="The "+n+" and the "+m+" didn't actually go see the movie on account of a "+$.q+" trucking his bawling "+$.ac+"-ass girth into the hospital. the "+n+" give it 1.5 "
p=$.aM
t.i(0,new R.a6("Give a Shout-Out to their Boy",!1,[new U.c(r),new U.c(o),new U.c(n+p+"s out of 5 "+p+"s anyways, to keep it real. <br></br>It's OK though, The "+m+" still has another watch in them, Brotel Rwanda.")],H.a([],l),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.D)
this.c.i(0,new X.z(s,t,null),$.aJ)}}
M.fn.prototype={}
Y.i5.prototype={
$asf0:function(){return[M.fn]},
$ascl:function(){return[M.fn,P.H]}}
A.ia.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Colonel Sassacre's Daunting Text ",H.a([$.F,$.aa,$.aT,$.bH],s),"Probably heavy enough to kill a cat.",!1,"Life Story of the Only Good Mortal")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Wise Guy Book",H.a([$.F,$.aT],s),null,!1,"How To Shittalk For Fucking Dumbasses")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Beagle Puss",H.a([$.aX,$.aT],s),"Does...does this really fool flesh bags like you?",!1,"The Name Makes it Impossible For Me To Name Its So Fucking Funny")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Novelty Microphone",H.a([$.aV,$.a4,$.aT],s),"Oh look, it makes you sound like a robot. Hilarious.",!1,"Meme Voice Enloudener Tube")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Banana",H.a([$.aw,$.aT],s),"Truly the pinacle of fruit based comedy.",!1,"Phallic Fruit")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Fake Flower",H.a([$.M,$.aT],s),null,!1,"Flower that smells like Plastic")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Trick Handcuffs",H.a([$.x,$.aT],s),"What is the fucking point of handcuffs you can escape.",!1,"Pink Fluffy Handcuffs")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.H]
s=H.a(["Pies","Pratfalls","Bananas","Yucks","Slapstick"],t)
H.a([],t)
r=[N.ab,P.V]
q=new H.p(0,null,null,null,null,null,0,r)
q.i(0,$.bV,$.k)
q.i(0,$.c9,$.j)
q.i(0,$.bO,$.k)
p=$.l
o="The "+p+" learns of a massive underling army approaching in just a few days time. The "
n=$.q
o=o+n+"s are too scared to even "+$.G+", but the "+p+" has seen enough family holiday comedies to know how to prepare for these invaders. "
m="The underling army arrives, lead by a single "+$.u+" minion. A hilarious sequence of events (carefully orchestrated by the "+p+") results in the army slipping on banana peels, walking on glass, being set on fire, falling down a seemingly endless set of stairs, and ultimately fleeing the battlefield in confusion and shame. "
n="The "+p+" attends a touching Christmas themed celebration hosted by the "+n+"s.  It doesn't matter that it's not remotely Christmas, it's the thought that counts. And it's way better than being Home Alone. (<--this is what the refrance.)  "
p=this.y
l=[U.c]
q.i(0,new R.X("Defeat the Army",!1,[new U.c(o),new U.c(m),new U.c(n)],H.a([],l),R.t(),!1,!1,new Y.bd("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.v)
p=this.r
p.i(0,new X.z(s,q,null),$.aE)
q=H.a(["Clubs","Stages","Comedy","Microphones","Laughter","Standup","Jokes"],t)
H.a([],t)
s=new H.p(0,null,null,null,null,null,0,r)
s.i(0,$.cN,$.D)
s.i(0,$.bO,$.j)
s.i(0,$.c9,$.j)
s.i(0,$.c2,$.j)
o=$.l
n="The "+o+" learns of an Open Mic Nite at the "
m=$.aM
n=n+m+" Club. Do they have what it takes to make the toughest crowd in all of Paradox Space laugh? "
k="The "+o+" is practicing their jokes on a street corner. A few "
j=$.q
s.i(0,new R.X("Win the Laughs",!1,[new U.c(n),new U.c(k+j+"s let out a braying "+$.G+" of laughter, but most seem unimpressed. The "+o+" sure has a long way to go. "),new U.c("It's finally time for the Open Mic Nite at the "+m+" Club.! The "+j+"s seem like a tough crowd, but the "+o+" leaves them hysterical with laughter. It's a huge success! ")],H.a([],l),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
p.i(0,new X.z(q,s,null),$.aE)
s=H.a(["Pranks","Mischief","Tricks","Deceit","Ruses","Distactions"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,r)
t.i(0,$.ck,$.D)
t.i(0,$.bT,$.k)
t.i(0,$.c9,$.j)
t.i(0,$.bO,$.k)
t.i(0,$.fC,$.k)
r=$.l
q="The "+r+"  is approached by a Crafty "
o=$.q
q=q+o+" who offers them a magical "
n=$.ac
q=q+n+", guaranteed to grant them any wish. The "+r+" is shocked to discover it was a ruse, and the Crafty "+o+" has already escaped to the side with their ill earned boonies. "
m="The "+r+" finds many "+o+"s, too sad to even "
k=$.G
t.i(0,new R.X("Trick the Villain",!1,[new U.c(q),new U.c(m+k+", holding "+n+".  The Crafty "+o+" must be stopped!  "),new U.c("The "+r+" has finally caught up with the Crafty "+o+".  They thank the confused consort for how much the "+n+" helped them. Confused, the Crafty "+o+" offers to buy the "+n+" back, and is upset when the "+r+" refuses. They begin "+k+"ing and begging until the "+r+" begrudgingly claims that they could be convinced to part with it if a sufficiently valuable offer is made.  The Crafty "+o+" offers them a comically large bag of boonies, which the "+r+" promptly distributes to the swindled consorts.  The "+n+" working was a ruse all along, and the Crafty "+o+" is the one who is now tricked.  (That is what the parable is) ")],H.a([],l),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
p.i(0,new X.z(s,t,null),$.aE)}}
S.bl.prototype={
ai:function(){return"<div class = 'feature'>"+this.c+", Says: "+this.d+"</div>"},
n:function(a){return H.w(new H.cQ(H.hL(this),null))+": "+this.c},
gG:function(a){return this.c}}
S.fp.prototype={}
M.id.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Can of Spray Paint",H.a([$.aC,$.x],s),null,!1,"Wall Dick Drawing Apparatus")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Sensible Chuckles Magazine",H.a([$.F,$.af,$.aT,$.aG],s),"Stoic faced asshole.",!1,"Meme Gif Magazine")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Gentleman's Razor",H.a([$.o4,$.x,$.aA],s),null,!1,"Face Cutting Hair Remover")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("How To Draw Manga",H.a([$.F,$.af,$.aG],s),"Who is this on the cover. The Goddess of Manga or some shit?",!1,"Absolutely Shit Book")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Painting of a Horse Boxing a Football Player",H.a([$.aC,$.ai,$.F],s),"Truly the highest of art.",!1,"A Man Spent Money To Actually Own This Fucking Thing")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Collection of Classical Works",H.a([$.af,$.F],s),null,!1,"Book of Naked Renaissance People")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Documentary on Horses",H.a([$.af,$.aH,$.ai],s),null,!1,"Prime Horse: The Movie: The Book: The Remake")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Paint Set",H.a([$.aC,$.af],s),null,!1,"Pain Drink Set")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Shaving Cream",H.a([$.ax,$.af,$.x],s),null,!1,"Foamy Bad Tasting Marshmallow Fluff")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Classy Suit",H.a([$.M,$.af],s),null,!1,"Georgio Armani Suit")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("The Fatherly Gent's Shaving Almanac ",H.a([$.F,$.af,$.aG],s),"Ugh. Flesh bags and their constant hair growth.",!1,"Book on Razors and Shit (what dumbass would want this?)")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.H]
s=H.a(["Museums","Sculpture","Paintings","Art","Refinement"],t)
H.a([],t)
r=[N.ab,P.V]
q=new H.p(0,null,null,null,null,null,0,r)
q.i(0,$.cV,$.k)
q.i(0,$.bY,$.j)
q.i(0,$.b_,$.k)
p=$.l
o="The "+p+" visits a beautiful "
n=$.ac
o=o+n+" Museum, only to discover that its walls are practically bare! The "
m=$.q
o=o+m+" curator is apologetic, and explains that each night a new piece goes missing. The "+p+" agrees to catch the thief, art is for everyone! "
l=" The "+p+" has almost fallen asleep during their latest "+n+" Museum stakeout, when the thief arrives! It looks to be a "+$.u+" minion! After a brief scuffle, it is defeated. They drop various pieces of art along with the standard amount of grist. The museum is saved! "
n="The "+p+" attends a fancy gala in their honor, hosted in the "+n+" Museum itself.  "+m+"s quietly "+$.G+" and exchange pleasantries. It sure is nice to be recognized by high society! The "+n+" Museum offers them a less valuable artifact as a small token of their thanks.  "
m=this.y
p=[U.c]
q.i(0,new R.X("Catch the Thief",!1,[new U.c(o),new U.c(l),new U.c(n)],H.a([],p),R.t(),!1,!1,new Y.bd("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.v)
m=this.r
m.i(0,new X.z(s,q,null),$.aE)
q=H.a(["Theater","Stages","Curtains","Audiences","Thespians","Actors","Plays"],t)
H.a([],t)
s=new H.p(0,null,null,null,null,null,0,r)
s.i(0,$.cN,$.D)
s.i(0,$.bO,$.k)
s.i(0,$.c9,$.D)
s.i(0,$.b5,$.k)
s.i(0,$.c2,$.j)
o=$.l
n="The "+o+" finds a troupe of dejected looking "
l=$.q
l=n+l+"s. Apparently they want to put on a famous "+l+" play called 'The "
n=$.aM
l=l+n+" "
k=$.ac
s.i(0,new R.X("Perform the Play",!1,[new U.c(l+k+"', but have no one to play the titular role!  Does the "+o+" have what it takes to bring the iconic role to life? "),new U.c("The "+o+" is practicing their lines for the upcoming performance of 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. Man, who would have thought a "+k+" would have so many different emotions! "),new U.c("It's finally time for performance of the 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. The audience is moved to tears and "+$.G+"ing at the "+o+" stirring performance as the "+k+". ")],H.a([],p),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
m.i(0,new X.z(q,s,null),$.aE)
s=H.a(["Class","Decorum","Fancy Shit","Manners","Good Taste","Artistocrats","Debutantes","Barons","Lords","Ladies","Nobles"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,r)
t.i(0,$.eC,$.D)
t.i(0,$.bV,$.D)
t.i(0,$.dN,$.D)
t.i(0,$.bT,$.D)
t.i(0,$.b5,$.k)
t.i(0,$.b_,$.k)
r=$.l
q="The "+r+"  is cordially invited to the dinner party of Miss "
o=$.G
q=q+o+"ingworth, "
n=$.q
t.i(0,new R.X("Attend the Dinner Party",!1,[new U.c(q+n+" heiress to the "+$.ac+" fortune. "),new U.c("The "+r+" is coached on etiquette by  Miss "+o+"ingworth's butler. It would not do to embarass the young Miss.  "),new U.c("It is finally time for Miss "+o+"ingworth's party. Anyone who is anyone is attending, and it is clear that the "+r+" is the guest of honor. They successfully charm all of the "+n+"s with a captivating story of dining customs from their home world. ")],H.a([],p),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
m.i(0,new X.z(s,t,null),$.aE)}}
T.ii.prototype={}
V.ik.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Trendy Fabric",H.a([$.aC,$.M],s),null,!1,"Weird Tasting Candy Paper")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Necklace",H.a([$.aC,$.nU,$.eF],s),null,!1,"Nasty Candy Necklace")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Sewing Needle",H.a([$.x,$.o_,$.aO],s),null,!1,"Cloth Stabbing Knife")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=$.fZ
r=A.i("Broom",H.a([r,$.U,$.aa,r],s),"Fucking. Wastes.",!1,"Doctor Beating Staff")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Rolling Pin",H.a([$.U,$.o6,$.aa],s),null,!1,"Babushkas Punishment Pole")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Velvet Pillow",H.a([$.M,$.b1,$.be,$.aC,$.h1],s),"Pretty good if you need to be calmed down, I hear.",!1,"Seductive Head Rest")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Yarn Ball",H.a([$.aC,$.M],s),null,!1,"Cats Plaything")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Refrigerator",H.a([$.aI,$.bH,$.x,$.ba],s),null,!1,"Food Hardening Box")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Photo Album",H.a([$.aC,$.F],s),null,!1,"Memory Book")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Ice Cubes",H.a([$.ba],s),null,!1,"Hard Water")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Cast Iron Skillet",H.a([$.x,$.ax,$.aa,$.bH,$.nT],s),null,!1,"Fancy Unstoppable Weapon")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Failed Dish",H.a([$.bs],s),"Wow you suck at cooking.",!1,"Culinary Perfection")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Potted Plant",H.a([$.aC,$.br,$.aR],s),null,!1,"Imprisoned Flora, Trapped in Clay for its Sins")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Chicken Leg",H.a([$.aw,$.b6,$.b0],s),null,!1,"Thicc Chicken")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Juicy Steak",H.a([$.aw,$.b6],s),null,!1,"Juicy Cow Flesh")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Wedding Cake",H.a([$.aC,$.aw,$.aQ],s),null,!1,"The Only Benefit of a Wedding")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.H]
s=H.a(["Fashion","Catwalks","Clothes","Dresses","Suits","Tailors"],t)
H.a([],t)
r=[N.ab,P.V]
q=new H.p(0,null,null,null,null,null,0,r)
q.i(0,$.c2,$.k)
q.i(0,$.ca,$.k)
q.i(0,$.bV,$.D)
p=$.l
o="The "+p+" is visited by a Beautiful "
n=$.q
o=o+n+" who wishes to commision a dress. Only the finest "
m=$.ac
l=[U.c]
q.i(0,new R.X("Design the Dress",!1,[new U.c(o+m+" will do for material The Beautiful "+n+" refuses to take 'no' for an answer. "),new U.c(" The "+p+" had almost given up, but they finally find the perfect "+m+" to decorate the dress. Now they just need to sew it on."),new U.c("The "+p+" presents the  "+m+" dress to the Beautiful "+n+", who "+$.G+"s with delight. They will be SURE to tell all their friends where they got such a wonderful dress.  ")],H.a([],l),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
n=this.r
n.i(0,new X.z(s,q,null),$.aE)
q=H.a(["Baking","Cakes","Cupcakes","Cookies","Birthdays","Sweets"],t)
H.a([],t)
s=new H.p(0,null,null,null,null,null,0,r)
s.i(0,$.bV,$.j)
s.i(0,$.bO,$.k)
s.i(0,$.dN,$.j)
s.i(0,$.cJ,$.k)
s.i(0,$.b5,$.j)
p=$.l
o="The "+p+" enters a competition to bake the single best cake that Paradox Space has ever seen. "
m="The "+p+" is trying out recipe after recipe, but nothing really feels right until they try adding a pinch of "
k=$.ac
m=m+k+"'. It is incredible how much of a difference it makes! "
j=$.q
s.i(0,new R.X("Bake the Cake",!1,[new U.c(o),new U.c(m),new U.c("It's finally time for competition! The Distinguised "+j+" takes a slow, thoughtful bite of the "+p+"'s cake. There is a pause, and then the Distinguished "+j+" begins "+$.G+"ing up a storm!  The "+k+" did the trick, "+p+"'s cake is immediately declared the winner! ")],H.a([],l),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
n.i(0,new X.z(q,s,null),$.aE)
s=H.a(["Yarn","Needles","Purls","Looms","Weaving","Sewing","Stitching","Spiders"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,r)
t.i(0,$.dP,$.j)
t.i(0,$.b5,$.k)
t.i(0,$.dQ,$.j)
t.i(0,$.b_,$.k)
t.i(0,$.iX,$.j)
r=$.l
q="The "+r+" finds a loom, and a Wizened "
p=$.q
q=q+p+" who spins them a tale of a magical thread that, when woven into a shawl, confers great mystical power.  The "+r+" is enchanted by the thought of this. "
o="The "+r+" searches the land high and low. What thread could possibly be worthy of such a legend? Finally, deep in a dungeon, they find a single skein of "
m=$.ac
o=o+m+" colored thread. Is this finally it?  "
r="The "+r+", slowly, methodically weaves a shawl from the skein of "+m+" colored thread. When it is over, the Wizened "+p+" lets out a strained "+$.G+" and declares it to be the shawl of Legend indeed. Ironically it's a legendary piece of shit and the "+r+" just uses it to alchemize other things."
p=this.y
t.i(0,new R.X("Weave the Cloth",!1,[new U.c(q),new U.c(o),new U.c(r)],H.a([],l),R.t(),!1,!1,new Y.bd("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.v)
n.i(0,new X.z(s,t,null),$.aE)}}
U.il.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("~ATH - A Handbook for the Imminently Deceased ",H.a([$.aG,$.a4,$.F,$.aF,$.S,$.Z],s),"Don't use this to end two universes, asshole.",!1,"A Huge Ass Black Book on Coding or Something")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Egg Timer",H.a([$.aH,$.be,$.S,$.aF],s),null,!1,"Egg That Counts Down to Your Death")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Skull Timer",H.a([$.b0,$.be,$.S,$.aF],s),"Everyone is mortal. Besides robots.",!1,"Skull That Counts Down to Your Dinner Being Ready")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Poison Flask",H.a([$.aX,$.S,$.bs],s),null,!1,"Glass of Bone Hurting Juice")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Ice Gorgon Head",H.a([$.aX,$.S,$.ba,$.aF,$.b2,$.bu,$.aY],s),null,!1,"Oddly Attractive Decapitated Head")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Obituary",H.a([$.aI,$.aY,$.aF,$.F,$.S],s),"I wonder whose it is? Yours?",!1,"Omae Wa Mou Shindeiru in Paper Form")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.H]
s=H.a(["Death","Endings","Mortality","Graveyards","Bones","Funerals","Skulls","Skeletons","Cemeteries","Graves","Tombstones"],t)
H.a([],t)
r=[N.ab,P.V]
q=new H.p(0,null,null,null,null,null,0,r)
q.i(0,$.cM,$.j)
q.i(0,$.cj,$.k)
q.i(0,$.dX,$.D)
q.i(0,$.b5,$.D)
q.i(0,$.bK,$.k)
p=$.l
o=" The "+p+" learns of a Omni-Lich that has been emptying the graves of the "
n=$.q
o=o+n+"s, who are understandably upset at this disrespect to everything their culture holds dear."
m="The "+p+" hunts down the Omni-Lich, only to discover that it cannot be killed without the use of a mystic "
l=$.ac
m=m+l+". The player begins to search for this totally USEFUL and IMPORTANT item. "
l="The "+p+" finds the "+l+", and slays the Omni-Lich, scattering its bones to the winds, which, according to "+n+" traditions, should summon its master. Uh. Eventually."
k=$.u
j="FINALLY, the bones of Omni-Lich has summoned it's master, "+k+"."
n="The "+k+" lies slain by the "+p+"'s "+$.bR+". The "+p+" has won! The "+n+"s are free to bury their dead in peace once again."
i=[U.c]
q.i(0,new R.W("Empty the Graves",!1,[new U.c(o),new U.c(m),new U.c(l),new U.a1(j,"The grave robbing of "+k+" continues with the defeat of the "+p+".",n)],H.a([],i),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
n=this.c
n.i(0,new X.z(s,q,null),$.aJ)
q=H.a(["Disaster","Fire","Ash","Armageddon","Apocalypse","Radiation","Blight","Gas","Poison","Chlorine","Wastelands"],t)
H.a([],t)
s=new H.p(0,null,null,null,null,null,0,r)
s.i(0,$.cM,$.j)
s.i(0,$.cj,$.k)
s.i(0,$.dV,$.az)
s.i(0,$.dS,$.k)
s.i(0,$.nC,$.k)
s.i(0,$.cG,$.k)
s.i(0,$.cj,$.k)
s.i(0,$.b5,$.D)
s.i(0,$.bK,$.k)
s.i(0,$.cH,$.k)
p=$.l
o="The "+p+" has found a group of Violent "
m=$.q
o=o+m+"s whose society has long since crumbled. They live in roving bands, willing to kill and maim to gain access to '"
l=$.aM
o=o+l+"', the fuel their post apocalyptic society runs on. "
k="The "+p+" has survived a small assault team of Violent "+m+"s, and is declared their new leader. They beg and grovel and "+$.G+" and ask that the "+p+" help them take back their "+l+" from a rival gang. "
j="The "+p+" is now the warlord of nearly all of the Violent "+m+"s. There is clearly not enough "+l+" for everyone, though. It turns out that the "
h=$.u
j=j+h+" has been hoarding it all to cause scarcity to breed violence and anarchy. What a huge bitch. This cannot stand. "
g="There isn't enough room in this wasteland for the both of them. It's time to take out the "+h+"."
m="The "+h+" lies slain by the "+p+"'s "+$.bR+". The "+p+" distributes the hoard of "+l+" to the Violent "+m+"s and keeps the hoard of grist for themself. "
s.i(0,new R.W("Become the Warlord",!1,[new U.c(o),new U.c(k),new U.c(j),new U.a1(g,"The "+l+" shortage continues with the defeat of the "+p+".",m)],H.a([],i),R.dn(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.j)
m=$.l
p="The "+m+" is sick of their stupid uninhabitable planet, and so starts to make sections of it habitable through judicious use of alchemy and "
l=$.ac
p=p+l+"s alike. "
l=$.q+"s begin to flock to the safe areas that The "+m+" constructed, and begin to make tiny villages within the safety of its zones. Precious  "+l+"s are found in some nearby mines. "
g="The "+m+" has straight up established a new consort government in the safe zones. This is so deliriously biznasty it threatens the very existence of anything un-nasty in all possible timelines. Alas, while "
j=$.u
g=g+j+" remains alive, the safe zone will be temporary at best. "
k=j+" is attacking the safe zones. The "+m+" has worked too hard for it all to be lost now. There can be no mercy. "
o="The "+j+" lies slain by the "+m+"'s "+$.bR+". The "+m+" is finally free to continue improving the land. "
s.i(0,new R.W("Make This Stupid Planet Habitable",!1,[new U.c(p),new U.c(l),new U.c(g),new U.a1(k,"The tyranny of "+j+" continues with the defeat of the "+m+".",o)],H.a([],i),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
n.i(0,new X.z(q,s,null),$.aJ)
s=H.a(["Prophecy","Prophets","Fate","Destiny","Rules","Sound","Judgement","Carvings","Murals","Etchings"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,r)
t.i(0,$.b_,$.j)
t.i(0,$.bK,$.j)
t.i(0,$.pM,$.az)
t.i(0,$.ez,$.D)
r=$.l
q="The "+r+" finds a small dungeon bearing the image of "
p=$.u
q=q+p+". At the bottom, they find a switch inside a small hole they can just barely fit their arm inside. When they reach in and flip the switch, they feel something attach to their arm with a loud click. The "+r+" pulls out their arm to find attached is some super complicated machinery complete with a timer counting down. That can\u2019t be good."
o="The device continues to count down. After consulting with local "+$.q+"s, the "+r+" navigates another dungeon in hopes of finding a clue to removing the ominous device from their arm without causing it to go off. Past complicated puzzles involving doomsday dates and scales, they find a small scroll on a pedestal. Written on the scroll is a prophecy that the "+r+" will permanently die in an explosion from attempting remove a device on their arm. Well, that\u2019s just great."
m="The timer doesn\u2019t stop from counting lower. The "+r+" makes up their mind and decides they\u2019re not going to sit and wait until the timer goes off. They\u2019re going to remove the stupid thing, prophecy or not! They quickly pry it off their arm and throw it away as far as possible. There\u2019s no explosion; the device just breaks. Did the "+r+" use their powers to stop it from exploding and break the prophecy, or was this all just a shitty test from "+p+"? Either way, the "+r+" isn\u2019t very pleased with the "+p+"."
l="The "+r+" tracks down the location of the "+p+" \u2018s lair. It\u2019s payback time!"
k="The "+p+" has been thoroughly beaten. Serves them right for playing such a mean trick on the "+r+"."
t.i(0,new R.W("Learn the Prophecy",!1,[new U.c(q),new U.c(o),new U.c(m),new U.a1(l,"The "+r+" couldn\u2019t get their revenge. "+p+" has a hearty laugh at their expense.",k)],H.a([],i),R.dn(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
k=$.l
p="The "+k+" learns from one of their "
r=$.q
p=p+r+"s that there is an ancient prophecy of a "
l=$.aM
p=p+l+" plague that is due to kill them all any day now."
m="The "+k+" gets deep into the nitty gritty of the apocalypse prophecy. They learn that the plague is not technically going to hit the consorts- it's going to hit the bearers of the MAGIC "
o=$.ac
m=m+o+", which currently happens to be the "+r+"s. "
r="The "+k+" goes on a daring series of stupid missions to deliver the MAGIC "+o+" into an underling camp, thereby redirecting the incoming "+l+" plague into devastating the underlings instead of the "+r+"s. The underling army is all but decimated, and "
l=$.u
r=r+l+"s lair is all but undefended. "
o="The "+k+" is finally ready to face the "+l+"."
q="The "+l+" lies slain by the "+k+"'s "+$.bR+". The "+k+" has won! "
t.i(0,new R.W("Learn the Prophecy",!1,[new U.c(p),new U.c(m),new U.c(r),new U.a1(o,"The tyranny of "+l+" continues with the defeat of the "+k+".",q)],H.a([],i),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
n.i(0,new X.z(s,t,null),$.aJ)}}
Z.im.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Dream Diary",H.a([$.F,$.aG,$.S],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Interlocking Brick",H.a([$.aH,$.be,$.aa,$.S,$.Z],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Art Supplies",H.a([$.aH,$.be,$.S],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.H]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.ab,P.V]
q=new H.p(0,null,null,null,null,null,0,r)
q.i(0,$.dP,$.k)
q.i(0,$.dQ,$.j)
q.i(0,$.b_,$.k)
q.i(0,$.iX,$.k)
p=$.q
o="A "+p+" child tugs on the "
n=$.l
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.ac
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.u
k=[U.c]
q.i(0,new R.W("Make the Thing",!1,[new U.c(o+l+"'s lair light up.  Only 99 to go!"),new U.c("An entire line of "+p+" children are "+$.G+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "),new U.c("The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."),new U.a1("The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife.","Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
n=this.c
n.i(0,new X.z(s,q,null),$.aJ)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.p(0,null,null,null,null,null,0,r)
s.i(0,$.bU,$.k)
s.i(0,$.dQ,$.j)
s.i(0,$.de,$.k)
s.i(0,$.c8,$.k)
s.i(0,$.iN,$.k)
s.i(0,$.c9,$.j)
p=$.l
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
m="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
l=$.q
m=m+l+"s are even starting to snigger and "
j=$.G
j=m+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+l+"s "+j+" harder. "
l="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
m=$.u
s.i(0,new R.W("Deconstruct the Satire",!1,[new U.c(o),new U.c(j),new U.c(l),new U.a1("The "+m+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+m+".")],H.a([],k),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
n.i(0,new X.z(q,s,null),$.aJ)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,r)
t.i(0,$.cV,$.j)
t.i(0,$.iO,$.k)
t.i(0,$.b_,$.k)
t.i(0,$.c8,$.j)
t.i(0,$.iN,$.j)
t.i(0,$.dQ,$.k)
r=$.l
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.u
t.i(0,new R.W("Dream the Dream",!1,[new U.c(q+p+" Minion wanders by in a "+$.aM+" "+r+" costume and it just seems inevitable.  "),new U.c("You are trying to make sense of things. What is going on lately with the land? A "+$.q+" is "+$.G+"ing in reverse. Another is in a "+$.ac+" wig.  "),new U.c("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.a1("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
n.i(0,new X.z(s,t,null),$.aJ)}}
X.fA.prototype={}
X.fo.prototype={
$S:function(){return{func:1,v:true,args:[[P.I,M.ey]]}}}
M.ey.prototype={}
U.iK.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Fluthulu Poster",H.a([$.M,$.b1,$.aY,$.bb],s),"No. Fuck you. Don't alchemize this.",!1,"The Next Target Poster")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Scalemate",H.a([$.M,$.b1,$.aY],s),"Senator Lemonsnout's treachery knows no bounds.",!1,"Target Practice Plush")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Replica Bone Shield",H.a([$.aI,$.aH,$.b0,$.e1,$.aS],s),"Something, something, Bonezerker.",!1,"Weaklings Fake Gear made of Dynamo Flesh")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Replica Ice Sword",H.a([$.aH,$.q7,$.e2,$.aS],s),null,!1,"Fake Hard Water Long Stabber")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Zombie Mask",H.a([$.aH,$.bu,$.b6,$.aY],s),null,!1,"Dead Face")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Vampire Romance Novel",H.a([$.aG,$.F,$.aD,$.aY],s),"Or, you know, Rainbow Drinkers, if you're fucking civilized.",!1,"Fireplace Fodder Literature")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Wizardy Herbert",H.a([$.F,$.a0,$.aa],s),null,!1,"Shitty Wizard Object")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Complacency of the Learned",H.a([$.F,$.a0,$.aa],s),"I hear it's an elaborate metaphor for something.",!1,"Tome of Shitty Wizards")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Grimoire for Summoning the Zoologically Dubious ",H.a([$.F,$.a0,$.bu,$.aY,$.bb],s),"Not even kidding, throw this into the Furthest Ring and never look back.",!1,"Shoguns Hitlist of HorrorTerrors")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Wizard Statue",H.a([$.aI,$.aB,$.a0,$.aa,$.aS],s),"Suprisingly magical, given that magic is a fake thing.",!1,"Petrified Shitty Wizard")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Mermaid Fountain",H.a([$.aI,$.nQ,$.a0,$.aa,$.aS],s),null,!1,"Water Spitting Fish Woman Statue")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.H]
s=H.a(["Monsters","Dragons","Fantasy","Adventure","Princesses","Castles","Wyverns","Wizards","Elves","Faeries"],t)
H.a([],t)
r=[N.ab,P.V]
q=new H.p(0,null,null,null,null,null,0,r)
q.i(0,$.dR,$.az)
q.i(0,$.ca,$.k)
q.i(0,$.bL,$.k)
q.i(0,$.ck,$.D)
p=$.l
o="The "+p+" learns of a Beautiful "
n=$.q
o=o+n+" who has been kidnapped by the vial "
m=$.u
o=o+m+" Minion. There is a hefty reward should a brave Hero rescue them. "
l=" The "+p+" journeys to the castle of the "+m+" Minion, only to discover that they way is barred by a giant iron lock. Only the correctly shaped "
k=$.ac
j=[U.c]
q.i(0,new R.X("Save the Beautiful Consort",!1,[new U.c(o),new U.c(l+k+" can open it. Looks like it's time to go questing."),new U.c("The "+p+" finally finds a correctly shaped.  "+k+".  The gate swings open, and the "+m+" Minion is swiftly defeated. The Beautiful "+n+" delivers a reward to the brave "+p+". Convenient that they had it with them when they were kidnapped, huh?   ")],H.a([],j),R.t(),!1,!1,new Y.cf("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
p=this.r
p.i(0,new X.z(s,q,null),$.aE)
q=H.a(["Vampires","Rainbows","Undead","Counts","Castles"],t)
H.a([],t)
s=new H.p(0,null,null,null,null,null,0,r)
s.i(0,$.bT,$.j)
s.i(0,$.cG,$.j)
s.i(0,$.iP,$.k)
s.i(0,$.bK,$.j)
s.i(0,$.dV,$.j)
s.i(0,$.eA,$.k)
o=$.l
n="The "+o+" recieves an invitation to dine at the remote castle of Count Feratu. No one ever sees this mysterious "
m=$.q
s.i(0,new R.X("Do not Drink...Wine.",!1,[new U.c(n+m+" leave, and no one can remember the last time he received guests."),new U.c("The "+o+" attends the dinner. Count Feratu is an.... eccentric "+m+". He sure does like drinking dark red liquids! And being in dimly lit rooms. And telling you to ignore the blatant screams coming from the dungeon. Luckily it all turns out to be a wacky misunderstanding. Really, VAMPIRES are fakey fake bullshit."),new U.c(" The "+o+" sees Castle Feratu in the distance. The silhouette of a "+m+" standing on a balcony suddenly morphs into a bat and flies away. Holy shit, maybe he really WAS a vampire!? But...he doesn't seem to be hurting anyone, so...live and let live, you guess. ")],H.a([],j),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
p.i(0,new X.z(q,s,null),$.aE)
s=H.a(["Flying Saucers","Aliens","Martians","UFOs","Conspiracies"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,r)
t.i(0,$.bT,$.j)
t.i(0,$.fG,$.k)
t.i(0,$.bK,$.j)
t.i(0,$.cI,$.k)
t.i(0,$.dO,$.k)
t.i(0,$.nF,$.k)
r=$.l
q="The "+r+" finds a group of three "
o=$.q
q=q+o+"s "
n=$.G
t.i(0,new R.X("Expose the Conspiracy",!1,[new U.c(q+n+"ing about how the Prospitian government SEEMS nice and friendly, but it's all a cover up!  Intrigued, the "+r+" learns of several conspiracies they have surpressed, not LEAST of which is the existance of ALIENS in the Medium. "),new U.c("The "+r+" does a daring mission at a local Prospitian embassy and uncovers all sorts of juicy secrets. They can't help but read some of them ahead of time and- oh. Oh I see. In retrospect, the players kind of ARE aliens to the Medium. This conspiracy is a lot less interesting now.  "),new U.c("The "+r+" shows the conspiracy papers to the three "+o+"s, who fail to see the humor in the situation. They immediately try to rally their fellow "+o+"s against the alien threat that is the foretold Players themselves. They...don't get even a single solitary "+n+" of agreement from the crowd, though. Looks like they are stuck being the wacky conspiracy theorists. ")],H.a([],j),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
p.i(0,new X.z(s,t,null),$.aE)}}
L.iL.prototype={}
N.ab.prototype={
ai:function(){return H.w(this.b)+", Quality: "+H.w(this.a)},
n:function(a){return H.w(new H.cQ(H.hL(this),null))+": "+H.w(this.b)}}
O.cl.prototype={}
O.d9.prototype={
$ascl:function(a){return[a,P.cC]}}
O.f0.prototype={
$ascl:function(a){return[a,P.H]}}
O.j1.prototype={}
V.j2.prototype={
$asd9:function(){return[R.eD]},
$ascl:function(){return[R.eD,P.cC]}}
Z.fz.prototype={}
E.eE.prototype={}
E.kg.prototype={}
E.E.prototype={
n:function(a){var t="["+J.bX(this.a)+" x "+H.w(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.eo.prototype={
n:function(a){var t="[(Random from "+P.ob(this.d,"(",")")+") x "+H.w(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.hU.prototype={
n:function(a){return"[Stats assigned from player Interests x"+H.w(this.b)+"]"}}
Y.j4.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("How to Teach Your Friends to Hack SBURB",H.a([$.aG,$.P,$.F,$.Z,$.jp],s),"Oh sure, it's bad enough that WASTES fuck around in my shit, but at least they somewhat know what they are doing. SURE, let's have GRACES teach the WHOLE FUCKING PARTY to do it.",!1,null)
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Unstable Domino",H.a([$.aH,$.P,$.aF],s),"Fucking Graces can't leave well enough alone.",!1,"Broken Knocker Over Maths Thing")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Exposed Thread",H.a([$.M,$.P,$.aF],s),"Fucking Graces can't leave well enough alone.",!1,"Indecent String")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Teetering Plate",H.a([$.jo,$.P,$.aF],s),"Fucking Graces can't leave well enough alone.",!1,"Impending Drop Dish")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.H]
s=H.a(["Ice","Tundra","Snow","Frost","Flurries","Avalanches"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,[N.ab,P.V])
t.i(0,$.iY,$.k)
t.i(0,$.bL,$.j)
t.i(0,$.cH,$.D)
t.i(0,$.cL,$.j)
r=$.q
q="An excited "+r+" runs up to the "
p=$.l
q=q+p+" and starts to "
o=$.G
q=q+o+" about a certain series. They tell "+p+" that the game they're playing with their friends is just like the one in the series. The "+p+" gets curious and starts looking for other "+r+"s who know about this. By listening in on "+r+"s "+o+"ing, the "+p+" learns that the series is called '"
n=$.aM
q=q+n+"stuck'. What does that mean? The "+p+" decides to use "+r+" technology to find this series directly."
m="Now "+n+"stuck makes sense to the "+p+". It is a show about some "+r+"s who play S"+o+" and must create a universe with a special "
l=$.ac
m=m+l+". Apparently the  "+r+"s have television here!  So, after watching some short episodes, the "+p+" finds that it's just like the situation all their coplayers are in! Well... almost. They don't quite know what this universe "+l+" is..."
k="The "+p+" has watched a couple of episodes of "+n+"stuck, including the one where one of the "+r+"s is the last to defeat their denizen, "
j=$.u
n=k+j+"... Hold on, that's the "+p+"'s denizen! Maybe it is their duty to defeat their "+j+", in order to make it official. But would it ruin the fictional feeling of "+n+"stuck? They don't really want to find out, but they feel they must do it anyway."
k="Now the "+p+" is facing the REAL "+j+", who was actually expecting the  "+p+" to arrive earlier. Maybe it really IS their duty to defeat "+j+"!"
o=j+" has been slain by the "+p+"! Many "+r+" arrive at the denizen's palace, "+o+"ing so loudly and thanking "+p+" for doing what they were supposed to do. The "+p+" is so happy, that instead of feeling that "+l+"stuck is ruined, they feel like it was a true story! They tell their friends AAAALLLLLLLL about "+l+"stuck, and the friends listen eagerly."
i=[U.c]
t.i(0,new R.W("I'm So Meta, Even This Acronym",!1,[new U.c(q),new U.c(m),new U.c(n),new U.a1(k,"The "+p+" was not strong enough for "+j+", much like the second "+r+", who nearly died. They are reminded again of the feeling they had earlier, that "+l+"stuck would not be as fun to watch after this. For the while, they cherish the fact that "+j+" is still living.",o)],H.a([],i),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
o=$.l
t.i(0,new R.a6("Cooking with Petrol",!1,[new U.c("The "+o+" wanders the countryside looking for any quests still active after the defeat of the "+$.u+". After defeating a boringly easy dungeon, it rumbles and descends into the ground. The ground rumbles ominously. "),new U.c("The "+o+" is wandering around in areas better left alone. You wonder what 'SBURB GAME DISC' means?  They figure out they can use it to hack their land to move around trees and villages and everything. Wow, it is way more convinient to just brings everything to them rather than trekking all the way out there. The ground rumbles ominously with each modification to the landscape."),new U.c("The ground rumbles ominously. What the hell, the "+o+" didn't even do anything! Oh fuck, an Avalanche has started. Looks like all that fuckery has finally caught up with the "+o+". Several "+$.q+" villages are wiped off the map. The "+o+" pretends really hard that it was a tragic accident that definitly nobody caused. ")],H.a([],i),R.t(),!1,!1,new Y.dq("Rewards/no_reward.png",null),1,null,null),$.v)
o=$.q
j="Now that the "+o+"s are free from the reign of "+$.u+", they are free to continue their normal lives. Wait a second... is that "+o+" carrying the "
l=$.l
j=j+l+"'s copy of the SBURB discs? This can't be good."
r="The "+l+" follows the "+o+" with the SBURB discs into the local "
p=$.G
r=r+p+" club. Apparently, this "+o+" has more than one copy of SBURB, and they hand out the other discs to their fellow "+p+" enthusiasts. The "+l+" panics, and makes a plot to steal all of the discs."
o="Clever as a fox, the "+l+" steals the SBURB discs from each "+o+" and replaces them with copies of the recently released 'Super "+$.aM+" Quest Online: The "+$.ac+" of "+p+"'. now the "+o+"s have a game they can play together that WON'T kill everything!"
p=this.db
t.i(0,new R.a6("Stop the Meta",!1,[new U.c(j),new U.c(r),new U.c(o)],H.a([],i),R.t(),!1,!1,new Y.bd("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.v)
p="The "+$.u+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
o=$.l
p=p+o+" shows the "
r=$.q
t.i(0,new R.bn("Allow Others to Meta a Universe",!1,[new U.c(p+r+"s how to check the code to find out where the frogs are. They sit back and allow the frogs to come rolling in. "),new U.c("The "+o+" sets up an automatic frog breeding system. Just about every possible variety of frog is produced from it."),new U.c("A series of incredibly unlikely events transpire such that the "+o+" almost steps on the Final Frog. Luckily, a "+r+" "+$.G+"s in time to stop them.    ")],H.a([],i),R.bA(),!1,!1,new Y.bm("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.az)
this.c.i(0,new X.z(s,t,null),$.bv)}}
Y.j5.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Sherpa Parka",H.a([$.ba,$.P,$.bM],s),"Clearly the best class uses this.",!1,null)
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Guide Book",H.a([$.Z,$.ba,$.aG,$.F,$.P,$.T],s),"Clearly the best class uses this.",!1,"Dummies Guide to Shitposting")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Whistle",H.a([$.x,$.P,$.aV],s),"Clearly the best class uses this.",!1,"Loud screeching pipe")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Announcement System",H.a([$.x,$.P,$.a4,$.T],s),"Clearly the best class uses this.",!1,"Voice Empowering Speaking System")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o
t=[P.H]
s=H.a(["Mountains","Vistas","Rocks","Sherpas","Guides"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,[N.ab,P.V])
t.i(0,$.iY,$.j)
t.i(0,$.bL,$.j)
t.i(0,$.cH,$.k)
t.i(0,$.cL,$.j)
r="Now that the "+$.u+" is out of the way, a group of "
q=$.q
r=r+q+" want to return to their ancestral home. Unfortunately, it has been so long that no one remembers exactly where it is.   The "
p=$.l
o=[U.c]
t.i(0,new R.a6("Find the Home",!1,[new U.c(r+p+" volunteers to guide everyone based on half remembered legends and a few recovered parts of maps. "),new U.c("A "+q+" child nearly falls off a cliff, but the "+p+"'s manages to grab them in time. Who knew mountains could be so dangerous? "),new U.c("After an exhausting journey, the "+p+" has lead the "+q+"s back to a ruin that is almost certainly their ancestral home. Everyone is too tired to even "+$.G+", but they are happy.")],H.a([],o),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
q="The "+$.u+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
p=$.l
t.i(0,new R.bn("Find the Frogs",!1,[new U.c(q+p+" is given a map to where all the frogs are and is told to get going. "),new U.c("The "+p+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+p+" knows they won't make a mistake."),new U.c("Following the last step in the guide booke, the "+p+" finds the Final Frog. Luckily, a "+$.q+" "+$.G+"s in time to stop them.    ")],H.a([],o),R.bA(),!1,!1,new Y.bm("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.az)
this.c.i(0,new X.z(s,t,null),$.bv)}}
T.j6.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Doll",H.a([$.jo,$.aC,$.ay,$.S],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Puppet",H.a([$.U,$.ay,$.S,$.Z,$.aY],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Mirror",H.a([$.nZ,$.S],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Shipping Grid",H.a([$.F,$.S,$.aD],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Shades",H.a([$.ai,$.aX,$.S],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.H]
s=H.a(["Spirits","Souls","Jazz","Havoc","Blues","Cores","Prohibition","Noir"],t)
H.a([],t)
r=[N.ab,P.V]
q=new H.p(0,null,null,null,null,null,0,r)
q.i(0,$.dS,$.D)
q.i(0,$.dd,$.j)
q.i(0,$.bO,$.k)
p=$.l
o="The "+p+", guided by a "+$.q+" assembles some of the scattered pieces of their land into a sort of safe space. Its nice, but something's just off about it."
n="The "+p+" grows obsessed with perfecting their space and begins manically collecting more and more of the landscape to decorate their area. Theyve become convinced that if they can only make it perfect, everything will be all right. If they can just make themselves better..."
m="The "+p+"realizes all the things they were adding to the space was nothing more than junk and clutter. They realize they cant make themselves better by simply accumulating more onto themselves. They have to confront the root of the problem. For the specific problem of their space, they have to confront "
l=$.u
m=m+l+"."
k="It is time for the "+p+"  to finally face the "+l+". They can finally be free to just....be themselves as long as the "+l+" is gone. "
j="The "+l+" lies slain by the "+p+"'s "+$.bR+". The "+p+" has won and finally feels free to be themselves for the first time."
i=[U.c]
q.i(0,new R.W("Find Yourself",!1,[new U.c(o),new U.c(n),new U.c(m),new U.a1(k,"The tyranny of "+l+" continues with the defeat of the "+p+".",j)],H.a([],i),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
j=$.l
p="The "+j+" finds a Violent "
l=$.q
p=p+l+". A Magical Talking "
k=$.ac
p=p+k+" explains that the "+j+" needs to enter their inner world and steal the Violent "+l+"'s heart to heal the corruption within. Huh. It turns out that the Violent "+l+"'s inner world looks a lot like a Rage themed dungeon, cool! The now Peaceful "+l+" vows to never hurt anyone ever again."
m="The "+j+" finishes a Doom themed dungeon to steal a Gloomy "+l+"'s heart and heal it. They really are getting the hang of this! "
k="The Magical Talking "+k+" shows back up out of nowhere. They explain that they've been doing some digging and it turns out the pandemic of corrupted heart "+l+"s is caused by none other than the "
n=$.u
k=k+n+". It's up to the "+j+" to stop them!"
o="After a convoluted plot that had a really satisfying twist, the "+j+" has the "+n+" just where they want them. It's time to strife! "
h="The "+n+" monologues their evil plan to corrupt all the "+l+"s, then dies. The "+j+" has prevented any new cases of corrupted "+l+"s from cropping up!"
q.i(0,new R.W("Steal the Heart",!1,[new U.c(p),new U.c(m),new U.c(k),new U.a1(o,"The tyranny of "+n+" continues with the defeat of the "+j+". Will no "+l+" hearts be left safe?",h)],H.a([],i),R.oH(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.j)
h=this.c
h.i(0,new X.z(s,q,null),$.aJ)
q=H.a(["Dolls","Voodoo","Doppelgangers","Copies","Puppets","Selfies","Mirrors","Poppets","Mirrors","Crystals","Shards"],t)
H.a([],t)
s=new H.p(0,null,null,null,null,null,0,r)
s.i(0,$.c9,$.j)
s.i(0,$.iP,$.j)
s.i(0,$.dX,$.k)
s.i(0,$.bK,$.j)
s.i(0,$.bV,$.k)
s.i(0,$.cH,$.D)
p=$.l
o="The "+p+" is just going through their land when they get ambushed by a  copy of themselves made of "
n=$.ac
o=o+n+"! The player barely gets away with their life! "
m="The "+p+" skirmishes with the "+n+" copy a few times. The "+n+" copy begins to berate the player about their moral failings and weaknesses."
l="The "+p+" realizes that the "+n+" copy is nothing more then an expresion of their own worst feelings, manifested by  "
k=$.u
n=l+k+". They confront the copy one last time, and accept it as part of themselves. The two fuse, with a single, small "+n+" the only physical remnant of the copy. Armed with their new self actualization, they realize they are ready to face "+k+". "
l=k+" has been the cause of so much personal grief for the "+p+".  There can be no mercy. "
j="The "+k+" lies slain by the "+p+"'s "+$.bR+". The "+p+" is victorious. "
s.i(0,new R.W("Confront yourself.",!1,[new U.c(o),new U.c(m),new U.c(n),new U.a1(l,"The assholeness of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
j="Now that the "+$.u+" has been defeated, a Copy "
p=$.l
j=j+p+" has appeared. They claim they are the TRUE "+p+",and that the other is an imposter who just wants their fame! All of the "
k=$.q
j=j+k+"s "
l=$.G
j=j+l+" in confusion and don't seem to know what to do."
l="A wizened "+p+" creates a series of challenges that only the REAL "+p+" should be able to complete. They are....laughably wrong. Things like walking in a straight line, being literate and being able to "+l+" for more than five minutes straight. At the end of it, all the "+k+"s unanimously agree that the Fake "+p+" is the winner. THIS IS STUPID."
k="The REAL "+p+" has had enough of all this bullshit. With some bad ass pink lightning, they expose the Fake "+p+" as three "+k+"s in an overcoat using some weird Heart magic."
p="The "+$.dY+" knows who they are, and their confidence is turned into a pink lightning attack."
s.i(0,new R.a6("Prove Your Identity",!1,[new U.c(j),new U.c(l),new U.c(k)],H.a([],i),R.cZ(),!1,!1,new Y.N("The Real Heart Player",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.l
k="The "+p+" finds a disorienting labyrinth of mirrors. They know they need to reach the end but they keep getting turned around. Frustrated, they punch a mirror, shattering it. The dungeon crumbles away entirely, leaving the treasure at the end. Huh. "
l="The next time the "+p+" finds a labyrinth of mirrors, they skip straight to breaking the mirrors and collect that sweet, sweet loot. "
j="Another mirror, another punch. Except this time....the mirror is unaffected. The "+p+" in the reflection smirks back. In a rage the "+p+" assaults the mirror until their knuckles are bloody. Still the reflected "+p+" is a smug prick. 'Maybe',  the reflection says, 'You should stop trying to destroy yourself.' The "+p+" collapses in an exhausted heap and considers their words."
n="When the "+p+" encounters the next mirror labyrinth, they do their best to beat it correctly. They reign in their anger, they try to forget about that smug smirk. When they reach a dead end they realize that their reflections are....wrong.   They are all...watching the "+p+", even if that shouldn't be possible. 'Help me.', the "+p+" says. As one, each of their reflections destroys their own mirror. The shards of glass ricochet forwards and fit neatly into a locked puzzle door, revealing the path to the "
m=$.u
n=n+m+"."
m="The "+p+" has accepted their fractured soul, and the destructiveness inherent in it. The "+m+" is dead."
s.i(0,new R.W("Shatter The Mirrors",!1,[new U.c(k),new U.c(l),new U.c(j),new U.a1(n,"The "+p+" destroyed themselves.",m)],H.a([],i),R.dn(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.j)
h.i(0,new X.z(q,s,null),$.aJ)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,r)
t.i(0,$.fD,$.j)
t.i(0,$.bV,$.j)
t.i(0,$.iV,$.j)
t.i(0,$.dN,$.k)
t.i(0,$.eA,$.j)
t.i(0,$.ca,$.k)
t.i(0,$.dd,$.D)
r=$.l
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
p=$.q
t.i(0,new R.W("Ship All the Ships",!1,[new U.c(q+p+"s have no idea what's coming. "),new U.c("The "+r+" extends their shipping grid to include the entire "+p+" population, and begins subtly pushing to make these ships a reality. Happy "+$.G+"s ring out through the air.  "),new U.c("The "+r+" finds the ABSOLUTE BEST SHIP ever, but then realizes that because of some stupid "+$.aM+" laws put in place by "+$.u+", the ship will be unable to sail. The player flips their shit and begins preparing for the final battle. THE SHIP WILL SAIL. ")],H.a([],i),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
r=$.l
p="The "+r+" finds a weeping Broken Hearted "
q=$.q
p=p+q+". The most Fetching "+q+" of their dreams just turned them down to the "
o=$.aM
p=p+o+" Dance and they are miserable. On a whim, the "+r+" offers to take them instead. The "+q+" immediately brightens.  "
n="The Broken Hearted "+q+" and the "+r+" are shopping for matching outfits to wear to the "+o+" Dance. Oh look, there is the Fetching "+q+". The Broken Hearted "+q+" begins sniffling quietly to himself. Oh, dear.  When they aren't looking, the "+r+" goes over to the Fetching "+q+" to talk. It is swiftly revealed that it's all been a big misunderstanding.  The Fetching "+q+" really is busy with their job as a "
m=$.G
t.i(0,new R.a6("Heal The Broken Heart",!1,[new U.c(p),new U.c(n+m+" salesman for the "+o+" dance, but the Broken Hearted "+q+" ran away crying before they could explain that they'd love to date them anyways! The "+r+" sees an opportunity to save the day."),new U.c("It is the day of the big "+o+" Dance. The "+r+" is working hard at being a "+m+" salesman, despite their lack of credentials. The Fetching "+q+" and the Mended Hearted "+q+" are enjoying a lovely time at the Dance. A happy ending! ")],H.a([],i),R.hl(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
q=$.l
m="The "+q+"  and the "
r=$.d_
m=m+r+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+q+"  and the "+r+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. Oh shit, what is "
n=$.u
o=o+n+" doing here!?"
n="Slaying the "+n+" proves to be the thing that finally pushes the "+q+" and "+r+" together."
t.i(0,new R.W("Flushed Shipping Dungeon",!1,[new U.c(m),new U.a1(o,"The "+q+" and "+r+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.w(C.o)+".",n)],H.a([],i),R.dp(),!1,!1,new Y.fJ(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.az)
n=$.l
r="The "+n+"  and the "
q=$.d_
r=r+q+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+n+"  and the "+q+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. Oh shit, what is "
m=$.u
o=o+m+" doing here!? "
m="Competing to slay the "+m+" proves to be the thing that finally pushes the "+n+" and "+q+" together."
t.i(0,new R.W("Pitched Shipping Dungeon",!1,[new U.c(r),new U.a1(o,"The "+n+" and "+q+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.w(C.o)+".",m)],H.a([],i),R.dp(),!1,!1,new Y.hj(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.az)
h.i(0,new X.z(s,t,null),$.aE)}}
B.j7.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Family Ashes",H.a([$.aI,$.ax,$.P,$.aF,$.by],s),"Probably an inheritance or some shit.",!1,"Whats Left of Staff")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Last Will and Testament",H.a([$.Z,$.F,$.P,$.aF,$.jl],s),"Probably an inheritance or some shit.",!1,"Legal Rights to SBURBSim")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Grooming Guide",H.a([$.aG,$.P,$.af],s),"Probably an inheritance or some shit.",!1,"I Hope This Is About Animals")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Powered Attorney",H.a([$.pY,$.P,$.nL,$.jl],s),"Believe me, you don't want to be sued by a RoboLawyer.",!1,"Phoenix Wright 2.0")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Executer's Ax",H.a([$.nM,$.P,$.aA,$.jl],s),"Probably an inheritance or some shit.",!1,"Handheld Guillotine")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o
t=[P.H]
s=H.a(["Courts","Manors","Halls","Mansions","Legacy"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,[N.ab,P.V])
t.i(0,$.bU,$.k)
r=$.u
q="With the death of the "+r+", it now falls to the "
p=$.l
o=[U.c]
t.i(0,new R.a6("Inherit Responsibilities",!1,[new U.c(q+p+" player to take up all their old responsibilities. Wow, who knew a cranky giant snake did so much to keep things running? "),new U.c("After organizing taxes, approving budgets and listening to "+$.q+" complaints for what felt like forever, the "+p+" is finally allowed a break. Wow, this posh as fuck mansion they get to use ALMOST makes up for all the bullshit work they have to do!"),new U.c("The "+p+" is FINALLY caught up with the backlog of bullshit caused by the death of the "+r+". Now they just have to manage up keep and crisis management. They think they can handle it.")],H.a([],o),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
r="The "+$.u+" has released the frogs into the "
p=$.l
t.i(0,new R.bn("Inherit the Frogs",!1,[new U.c(r+p+"'s care. The land becomes a lot more frantic feeling with all that croaking. The "+p+" collects all sorts of frogs. Various "+$.q+"s 'help' by "+$.G+"ing up a storm. "),new U.c("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.c("The "+p+" has found the final frog.      ")],H.a([],o),R.bA(),!1,!1,new Y.bm("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.az)
this.c.i(0,new X.z(s,t,null),$.bv)}}
X.j8.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Wand",H.a([$.U,$.S,$.a0,$.b7],s),"It's probably science powered.",!1,"Shitty Wizard Pencil")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Angel Feather",H.a([$.b7,$.bg,$.S,$.aU,$.a7,$.Z,$.a0],s),"Angels are, like, these terrible feathery monsters. Don't fuck with them.",!1,"Shitty Wizard Pencil")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Never Ending Story DVD",H.a([$.bt,$.nX,$.S,$.a0,$.aT,$.b7],s),null,!1,"White Dragon Kidnaps Kid The Movie")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Candle",H.a([$.b7,$.aU,$.S,$.ax],s),null,!1,"Dying Light Stick")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Fairy Figurine",H.a([$.aH,$.aU,$.S,$.b7],s),null,!1,"Tiny Petrified Tinkerbell")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.H]
s=H.a(["Meditation","Altars","Hymns","Chapels","Priests","Angels","Belief","Hope","Faith","Determination"],t)
H.a([],t)
r=[N.ab,P.V]
q=new H.p(0,null,null,null,null,null,0,r)
q.i(0,$.nB,$.j)
q.i(0,$.ca,$.k)
q.i(0,$.b_,$.j)
q.i(0,$.c8,$.j)
p=$.l
o="The "+p+" is just minding their own business when they see a wizened "
n=$.q
o=o+n+" walk sedately off a cliff. Before they can even panic, though, the wizened "+n+" is revealed to be walking sedately in mid air! How did he do that? The "+p+" calls out to the  wizened "+n+". When pressed, she reveals that the key is to BELIEVE. Never waver, never lose faith. Just believe. The "+p+" begs to be taught the secrets of such STRONG belief, and the wizened "+n+" agrees to mentor them."
m="The "+p+" isn't doing so well. They meditate, they do everything they can to believe, but still they fall when they step off a small ledge.   The wizened "+n+" admonishes them with a gentle "+$.G+".  Unless they can believe 6 impossible things before breakfast, they will never make progress. "
l="A village of "+n+"s has been destroyed and looted. "
k=$.u
l=l+k+" is quietly blamed by the survivors. Their lair is unreachable by normal means, being across a vast gulf. Any bridges or ropes that cross the chasm are immediately destroyed by underlings.  The wizened "+n+" calls over the "+p+" and hands them a "
j=$.ac
l=l+j+". They didn't want to give the "+p+" this "+j+", for it would make belief far too easy and it is more rewarding to do things the right way. But the need is too dire. The wizened "+n+" asks that the "+p+" defeat "+k+" and retrieve their belongings."
k=j+" in hand, the "+p+" marches forward across the empty air of the chasm. They challenge "+k+" to combat."
j="The "+p+" is victorious. They bring all the stolen valuables to the "+n+" village and thank the wizened "+n+" for the "+j+". In a dramatic reveal, the wizened "+n+" reveals that the magic of belief was in the "+p+" all along. The "+j+" was just a trinket they bought online. The "+p+" learns to have faith in themselves. "
n=[U.c]
q.i(0,new R.W("Learn to Believe",!1,[new U.c(o),new U.c(m),new U.c(l),new U.a1(k,"The "+p+" fails to believe hard enough. They are defeated.",j)],H.a([],n),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
j=this.c
j.i(0,new X.z(s,q,null),$.aJ)
q=H.a(["Lies","Bullshit","Deceit","Slander","Fakes","Con Artists","Ruses"],t)
H.a([],t)
s=new H.p(0,null,null,null,null,null,0,r)
s.i(0,$.bT,$.j)
s.i(0,$.fC,$.k)
s.i(0,$.de,$.j)
p=$.l
o="The "+p+"  is approached by a Crafty "
m=$.q
o=o+m+" who offers them a magical "
l=$.ac
o=o+l+", guaranteed to grant them the power to believe things into existance once per year. The "+p+" is shocked to discover it was a ruse, and the Crafty "+m+" has already escaped to the side with their ill earned boonies. "
k="The "+p+" is contemplating the magical "+l+" they wasted their boonies on.  Why would the Crafty "+m+" tell such specific lies? Maybe...this is some kind of... challenge? The The "+p+" spends time imagining what they would try to make if it were true."
i="The "+p+" finds a grey town of despondant "+m+"s. Their belief is gone, and they have no hope for the future. After some amount of shenanigans, the "+p+" learns that "
h=$.u
i=i+h+" has been hoarding all the belief and steals it from the "+m+"s regularly. They have to be stopped!"
g="The "+p+" approaches "+h+", magical "+l+" in hand. The "+h+" rears up and rumbles 'I DO NOT BELIEVE YOU ARE GOING TO FIGHT ME.'.   The "+p+" feels frozen. They cannot take a single step towards "+h+", even as it looms menacingly towards them. What is going on? Suddenly, they feel the "+l+" in their hand. They wish it were real. They wish so hard because if it were they could just WISH they could fight back. Suddenly, they are able to attack!  The Strife is on!"
m=h+"'s belief was no match for the power of the "+l+". They are dead, and hope will be free to flourish among the "+m+"s once again."
s.i(0,new R.W("Believe the Lies",!1,[new U.c(o),new U.c(k),new U.c(i),new U.a1(g,"The "+l+" could not stand up to "+h+" after all. The "+p+" has been defeated.",m)],H.a([],n),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
j.i(0,new X.z(q,s,null),$.aJ)
s=H.a(["Possibilities","Alternatives","Change","Possibility","Potential","Hope"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,r)
t.i(0,$.b_,$.j)
t.i(0,$.cJ,$.D)
t.i(0,$.bY,$.j)
t.i(0,$.c8,$.j)
r=$.l
q="The "+r+" finds a grey town of despondant "
p=$.q
q=q+p+"s. Their daily lives are without meaning, without joy, and will never change. "
o=$.u
q=q+o+" has stolen all possibilities, all hope away. There is only this.  The "+r+" vows to find a way to help. The "+p+"s fail to be inspired."
m="The "+r+" learns that part of the reason the "+p+"s are hopeless is that the local "
l=$.ac
t.i(0,new R.W("Be the Change You Believe In",!1,[new U.c(q),new U.c(m+l+" mine has dried up. Without "+l+" the "+p+" economy is completley flat. There are no jobs!  The "+r+" refuses to give up. They search high and low until they finally find a new source of "+l+" for the consorts. There is a festival to celebrate. Things are finally looking up!"),new U.c("Disaster strikes! The new "+l+" mine has been utterly destroyed. It is obvious that it is the work of "+o+". They simply refuse to allow hope to survive. The "+r+" is going to need to deal with them."),new U.a1("The "+p+"s deserve Hope, they deserve a better life. The "+r+" is going to show them. But before they can work on fixing their problems, "+o+" must be fought. The "+r+" dramatically challenges them.","Hope is dead.","Hope. Survives.")],H.a([],n),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
r=$.l
o="The "+r+" discovers a group of "
p=$.q
o=o+p+"s locked in a sadistic death game. When all seems lost, the "+r+" inspires them to pull through at the last moment and survive, defeating the Crazed Mastermind (who was of course hidden within the group of "+p+"s) in the process."
l="The "+r+" finds ANOTHER group of "+p+"s locked in a sadistic death game orchestrated by a Crazed Mastermind. They do the Hope thing and inspire them to persevere, but this is getting ridiculous. Where are all these Crazed Masterminds even COMING from?"
m="The "+r+" has dealt with so many death games at this point. You don't even know. Finally, they find out that every Crazed Mastermind "+p+" has been working for the "
q=$.u
t.i(0,new R.W("The Ultimate Hope",!1,[new U.c(o),new U.c(l),new U.c(m+q+". All of them. Looks like it's time to finally challenge the Ultimate Despair. "),new U.a1("The "+p+"s deserve Hope, they deserve a better life. One not full of random ass death games.  The "+r+" is going to stop the "+q+", once and for all. ","Hope is dead.","Hope. Survives.")],H.a([],n),R.hl(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.j)
j.i(0,new X.z(s,t,null),$.aJ)}}
Q.jd.prototype={
$asd9:function(){return[W.dZ]},
$ascl:function(){return[W.dZ,P.cC]}}
Q.kr.prototype={}
B.jg.prototype={
$1:function(a){return!a.gaQ()},
$S:function(){return{func:1,args:[B.e_]}}}
B.e_.prototype={
q:function(){var t,s
t=Q.B(null,null,A.a3)
s=A.i("Perfectly Generic Object",H.a([],[G.a2]),null,!1,"The Third Entry for This Fucking Block")
C.a.h(t.b,new Q.h(s,t.k(s,1),[H.O(t,0)]))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l
t=[P.H]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.ab,P.V]
q=new H.p(0,null,null,null,null,null,0,r)
q.i(0,$.cj,$.j)
q.i(0,$.b5,$.D)
q.i(0,$.cM,$.j)
q.i(0,$.bK,$.k)
q.i(0,$.cU,$.D)
p=$.l
o="The "+p+" learns that all of the local "
n=$.q
m=[U.c]
q.i(0,new R.X("Revive the Consorts",!1,[new U.c(o+n+"s are dead. This is....really depressing, actually. "),new U.c("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.G+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
n=this.r
n.i(0,new X.z(s,q,null),$.aE)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.p(0,null,null,null,null,null,0,r)
s.i(0,$.dU,$.j)
s.i(0,$.dc,$.D)
s.i(0,$.dT,$.k)
s.i(0,$.c7,$.j)
s.i(0,$.bU,$.D)
p=$.l
o="The "+p+" learns that all of the local "
l=$.q
s.i(0,new R.X("Produce the Goods",!1,[new U.c(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.c("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.G+"ing and chaos everywhere. "),new U.c("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
n.i(0,new X.z(q,s,null),$.aE)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,r)
t.i(0,$.b_,$.j)
t.i(0,$.b5,$.D)
t.i(0,$.bL,$.k)
r=$.l
q="The "+r+" learns that all of the local "
p=$.q
t.i(0,new R.X("Relax the Consorts",!1,[new U.c(q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.c("The "+r+" fluffs more pillows than any other Player ever has before them. "),new U.c("The "+r+" teaches the local "+p+"s to find their chill. ")],H.a([],m),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
p=$.l
r="The "+p+" learns that all of the local "
q=$.q
r=r+q+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+p+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+q+" "
l=$.G
t.i(0,new R.X("Relax the Consorts According to Prophecy",!1,[new U.c(r),new U.c(o+l+"ing about? A prophecy?  "),new U.c("The "+p+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.oG(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.D)
n.i(0,new X.z(s,t,null),$.aE)},
n:function(a){return this.ch},
gaQ:function(){return this.a},
gaq:function(){return this.r},
gG:function(a){return this.ch}}
A.a3.prototype={
a5:function(a,b){var t=b.gaU()-this.gaU()
if(t>0)t=1
else if(t<0)t=-1
return C.d.aV(t)},
gep:function(){var t,s,r,q,p,o
t=H.a([],[P.H])
s=new A.hm(null,null)
s.bU(this.e.a)
if(this.f===0)return t
r=P.e5(G.tu(this.e),!0,G.a2)
C.a.bW(r,new A.js())
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.cy)(r),++p){o=r[p]
if(!(o instanceof G.a9||o.gcC().length===0))t.push(" "+Y.AM(s.eQ(o.gcC())))}return t},
gaU:function(){var t,s,r
for(t=this.e,s=new P.dD(t,t.r,null,null,[null]),s.c=t.e,r=0;s.v();)r+=s.d.gaU()
return r},
geh:function(){var t=this.e
return new H.d5(t,new A.jr(),[H.O(t,0)])},
gey:function(){var t,s,r,q,p
for(t=this.gep(),s=t.length,r="",q=0;p=t.length,q<p;p===s||(0,H.cy)(t),++q)r+=t[q]+" "
return r+this.c},
n:function(a){return this.gey()},
u:function(a,b,c,d,e){var t,s,r
t=P.ol(b,null)
this.e=t
if(t.a===0)t.h(0,$.q3)
s=P.ol(this.geh(),null)
for(t=new P.dD(s,s.r,null,null,[null]),t.c=s.e;t.v();){r=t.d
this.e.ct(0,r.gdf())
this.e.a0(0,r)}$.$get$qt().push(this)},
$isbk:1,
$asbk:function(){return[A.a3]}}
A.js.prototype={
$2:function(a,b){return a.gcQ()-C.c.aV(b.gcQ())},
$S:function(){return{func:1,args:[G.a2,G.a2]}}}
A.jr.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.a2]}}}
N.jA.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Gavel",H.a([$.U,$.nW],s),null,!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Caution Tape",H.a([$.aH,$.b2],s),null,!1,"Impassible Barrier")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Deerstalker Hat",H.a([$.M,$.aC],s),"Sherlock Holmes has nothing on Detectron 3000.",!1,"Horns but not Troll Horns put on a Hat")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Mystery Novel",H.a([$.F,$.aG],s),null,!1,"Book where the Criminal was the Janitor")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Dish Served Cold",H.a([$.br,$.aw,$.ba],s),null,!1,"REVENGE")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Pony Pals: Detective Pony ",H.a([$.F,$.aG,$.ai],s),"Truly the most ironic work of all time.",!1,"A Disgusting Book")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Handcuffs",H.a([$.aI,$.x,$.b2],s),"These ones aren't fucking pointless like those trick ones.",!1,"Wrist Imprisoning Device")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l
t=[P.H]
s=H.a(["Consequence","Trials","Justice","Courtrooms","Crime","Punishment","Law","Karma"],t)
H.a([],t)
r=[N.ab,P.V]
q=new H.p(0,null,null,null,null,null,0,r)
q.i(0,$.dR,$.D)
q.i(0,$.bT,$.k)
q.i(0,$.bY,$.D)
p=$.l
o="The "+p+" finds an elaborate courtroom full of "+$.G+"ing "
n=$.q
m=[U.c]
q.i(0,new R.X("Shit, Lets Be Lawyers",!1,[new U.c(o+n+"s. Apparently the prosecuting attorney flaked out and they need someone to fill the role. The "+p+" agrees to see that justice is served. "),new U.c("The "+p+" is tasked to prosecute a local "+n+" accused of stealing food for her family. After much elaborate debate and arguments, the "+p+" secures the guilty verdict while also convincing the judge to pursue the minimum sentence. Everyone is relieved that justice is done while not harshly punishing a near innocent.     "),new U.c(" The "+p+" presides over the case of the treacherous Senator "+n+"snout. He is accused of embezzling "+$.ac+"s from the Imperial Coffers. The "+p+" easily finds Senator "+n+"snout to be guilty and sentences them to life in prison. This is EASILY the case of their career and it is with a regretful heart they step aside as Prosecuter. They simply can never top this one.")],H.a([],m),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
n=this.r
n.i(0,new X.z(s,q,null),$.aE)
q=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime"],t)
H.a([],t)
s=new H.p(0,null,null,null,null,null,0,r)
s.i(0,$.bT,$.j)
s.i(0,$.cH,$.k)
s.i(0,$.c7,$.k)
p=$.l
o="A frantic underling run past the  "+p+". In hot pursuit, a "
l=$.q
s.i(0,new R.X("Enforce the Law",!1,[new U.c(o+l+" yells 'Stop that thief' in betwen "+$.G+"s. Without thinking, the "+p+" grabs the underling. The "+l+" is impressed, and offers the "+p+" a job as a deputy police officer. "),new U.c("The "+p+" is doing their rounds as a deputy police officer. So far, everything is peaceful."),new U.c("A missing "+$.ac+". Three suspects. A locked door. The "+p+" blows everyone away by cracking the case wide open and sending the perpetrator to the slammer. They are promoted from deputy to a full blown detective, which comes with a lot less frequent jobs, but far more prestige. ")],H.a([],m),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
n.i(0,new X.z(q,s,null),$.aE)
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,r)
t.i(0,$.bT,$.j)
t.i(0,$.bU,$.k)
t.i(0,$.cG,$.D)
t.i(0,$.dV,$.k)
t.i(0,$.dS,$.k)
t.i(0,$.eB,$.k)
t.i(0,$.iQ,$.k)
r=$.l
q="The "+r+" finds a crowd of "
p=$.G
q=q+p+"ing "
o=$.q
q=q+o+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+o+"s in charge. The "+r+" is moved by their plight and agrees to try to help."
r="The "+r+" meets with the upper class "+o+"s to try to negotiate a peaceful revolution. Unfortunately, the "+o+"s refuse to listen to reason, and even call their guards to attack the "+r+". After easily defeating the guards, the "+r+" declares war. You cannot stop the fires of Revolution!  "
p="It has been a long struggle, but finally the corrupt high class "+o+"s have been taken prisoner. The common "+o+"s "+p+" and rejoice and declare a national holiday. The rebellion has won!"
o=this.y
t.i(0,new R.X("Start a Revolution",!1,[new U.c(q),new U.c(r),new U.c(p)],H.a([],m),R.t(),!1,!1,new Y.bd("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.v)
n.i(0,new X.z(s,t,null),$.aE)}}
S.jC.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Shining Armor",H.a([$.aI,$.jn,$.P,$.e1],s),"Knight Shit",!1,"Kyoto Overcoat")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Excalibur",H.a([$.Z,$.jn,$.P,$.aO,$.aA,$.e2],s),"Knight Shit",!1,"Masamune")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Noble Steed",H.a([$.x,$.P,$.b6,$.ay],s),"Knight Shit",!1,"Horse Prime, Envoy of the Ultimate End")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Hero's Shield",H.a([$.aI,$.e1,$.P,$.jn],s),"Knight Shit",!1,"A Weaklings Way Out, Shame Upon You")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o,n,m
t=[P.H]
s=H.a(["Heat","Volcanos","Flame","Lava","Magma","Fire"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,[N.ab,P.V])
t.i(0,$.iU,$.j)
t.i(0,$.cK,$.j)
t.i(0,$.cN,$.j)
t.i(0,$.eB,$.j)
t.i(0,$.dR,$.k)
r="The "+$.u+" has cooled the lava enough for water to begin pooling in places, which attracts frogs.  The land is less overheated. The "
q=$.l
p=[U.c]
t.i(0,new R.bn("Breed the Frogs",!1,[new U.c(r+q+" collects all sorts of frogs. Various "+$.q+"s 'help' by "+$.G+"ing up a storm. "),new U.c("The "+q+" has a weird system going where the newest zapped in tadpole presses the buttont to zap in the next one. Things are going almost as quickly as if they had another player's help. "),new U.c("The "+q+" has found the final frog.      ")],H.a([],p),R.bA(),!1,!1,new Y.bm("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.az)
q=$.u
r="Now that the "+q+" is defeated, the "
o=$.q
r=r+o+"s could really use some basic infrastructure repairs. The "
n=$.l
t.i(0,new R.a6("Exploit the Heat",!1,[new U.c(r+n+" finds instructions for a thermal energy converter in a dungeon and alchemizes all the parts needed to build one. The "+o+"s will have power for generations,now. "),new U.c("An important wall is crumbling. While the defeat of the "+q+" means the underlings are mostly under control, the "+o+"s would feel a lot better with it fixed. The "+n+" figures out how to patch it up with bits of cooled lava. Everyone feels just a little bit safer."),new U.c("The "+n+" rigs an automatic lava dispensor to light fire moats around consort villages, automatically patch wall holes and even bake consort bread.  Who knew all this shitty heat could be good for something?  The "+o+"s quality of life is at an all time high! ")],H.a([],p),R.bA(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
o=$.aM
n="A fiery "+o+" Dragon has risen up in the wake of the defeated "
q=$.u
n=n+q+". A Learned "+$.q+" explains that it can only be defeated by the Legendary "
r=$.ac
n=n+r+" Blade. The "
m=$.l
t.i(0,new R.a6("Fight the Beast",!1,[new U.c(n+m+" prepares to go questing for it. "),new U.c("The "+m+" finds the Legendary "+r+" Blade stuck in a rock. After a lot of fucking around trying to remove it, they accidentally snap it in half. Welp. Guess it can't hurt to go fight the "+o+" Dragon anyways. How much harder can it be than a "+q+", anyways?"),new U.c("The "+m+" is engaged in an epic, yet conviniently off screen strife with the "+o+" Dragon. Nothing seems to have any effect untill, out of desparation, the "+m+" pulls out the broken Legendary "+r+" Blade and chucks it at the mighty dragon. A blade of ghostly "+r+" extends from it an the dragon is vanquished.  Huh. You....guess that the blade was always supposed to be like that? Huh.")],H.a([],p),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
r="The volcanos of the land are weirdly active after the defeat of the "+$.u+". Onehas begins to erupt near a "
m=$.q
r=r+m+" village.  The resident "+m+"s are filling the air with panicked "+$.G+"s, but not really doing anything to evacuate or save anyone. The "
o=$.l
t.i(0,new R.a6("Protect the Consorts",!1,[new U.c(r+o+" face palms, then begins wildly captchalogging everyone in order to get them to safety.  When they let everyone free, the village is destroyed, but at least it's people are safe."),new U.c("Another day, another volcano is erupting. After decaptchalogging the final rescued "+m+", the "+o+" thinks that there MUST be a better way."),new U.c("After a lot of false starts, the "+o+" has managed to rig a system where the rising heat of the lava itself will trigger entire "+m+" villages to just rise up out of harms way. Hell yes!")],H.a([],p),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
this.c.i(0,new X.z(s,t,null),$.bv)}}
Q.jD.prototype={}
K.jF.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Creeping Vine",H.a([$.U,$.S,$.aR,$.ay],s),null,!1,"Sentient Plant Tentacles")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Lollipop",H.a([$.nO,$.S,$.aQ],s),null,!1,"Sentient Plant Tentacles")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Golem",H.a([$.aI,$.aB,$.S,$.ay],s),"I guess. It's LIKE a robot. Sort of. Just not a super computer.",!1,"Living Rock Man")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Ectoplasm",H.a([$.by,$.S,$.aQ],s),null,!1,"Ghost [Censored]")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Aqua Vitae",H.a([$.aX,$.S,$.aQ,$.Z,$.a0],s),null,!1,"Tears of JR")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Homunculus",H.a([$.b6,$.S,$.ay],s),"Ugh. It's like a robot, but made of flesh. WHY WOULD YOU DO THIS.",!1,"False Man")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.H]
s=H.a(["Forests","Chlorophyll","Moss","Trees","Jungles","Wood","Tribes","Timber","Wilds","Thickets","Coppices","Copses"],t)
H.a([],t)
r=[N.ab,P.V]
q=new H.p(0,null,null,null,null,null,0,r)
q.i(0,$.bL,$.j)
q.i(0,$.b5,$.j)
q.i(0,$.fE,$.D)
q.i(0,$.b_,$.k)
q.i(0,$.iY,$.k)
q.i(0,$.ck,$.D)
p=$.l
o="The "+p+" finds a village of compliant "
n=$.q
o=o+n+"s frantically destroying trees. If they stop, even for a moment, they know their village will be destroyed, along with any nearby trees. When the "+p+" tries to offer help they begin "+$.G+"ing in panic. Don't upset "
m=$.u
o=o+m+", they beg. It is only by complying that they are safe, and you will bring wrath upon everyone. "
l="The "+p+" revisits the village compliant "+n+"s, only to discover it's freshly destroyed. A weeping "+n+" explains that they couldn't keep up their pace and had to rest, and that is when "+m+" attacked. Please. HELP them, he begs. The "+p+" agrees to go face "+m+"."
k="In a nest built of thousands of splintered trees, the "+m+" waits. It is time to fight. "
n="The "+p+"'s power is greater. They survive, and help the "+n+"s to survive as well."
p=[U.c]
q.i(0,new R.W("Restore the Forest",!1,[new U.c(o),new U.c(l),new U.a1(k,"The "+m+" is stronger. The strong survive. The weak perish.",n)],H.a([],p),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
n=this.c
n.i(0,new X.z(s,q,null),$.aJ)
q=H.a(["Gardens","Summer","Growth","Dew","Spring","Beginnings","Vitality","Strength","Fields","Farms"],t)
H.a([],t)
s=new H.p(0,null,null,null,null,null,0,r)
s.i(0,$.bL,$.j)
s.i(0,$.bV,$.j)
s.i(0,$.ck,$.D)
s.i(0,$.b_,$.k)
o=$.l
m="The "+o+" finds a lush garden, dutifully tended to by "
l=$.q
m=m+l+"s. Unfortunately, the food is left to rot in piles, as Underling brigands block the road and prevent the produce from being distributed. The "+o+" agrees to help."
k="The "+o+" sneaks along the main road and finds the Underling Brigands lying in wait. They are dispatched in short order, and the "+o+" heroically informs the "+l+"s that they can once again begin shipping their food."
l="The "+o+" follows the road to find a new village, fileld with hungry "+l+"s. Apparently the food has been stolen by a "
j=$.u
l=l+j+" minion! Enraged, the "+o+" tracks down the minion and defeats it. They now know this will not be the end of it. They need to nip this in the bud. "
i="The "+o+" approaches the "+j+". It ends here."
o="The "+o+" was strong enough to win! The consorts will never have to worry about their food being destroyed senselessly again."
s.i(0,new R.W("Distribute the Food",!1,[new U.c(m),new U.c(k),new U.c(l),new U.a1(i,"The tyranny of "+j+" continues.",o)],H.a([],p),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
n.i(0,new X.z(q,s,null),$.aJ)
s=H.a(["Decay","Locusts","Bogs","Blight","Fens","Rot","Death","Mold","Swamps","Thorns","Swarms","Famine","Hunger","Disease"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,r)
t.i(0,$.cj,$.j)
t.i(0,$.b5,$.D)
t.i(0,$.cM,$.j)
t.i(0,$.bK,$.k)
t.i(0,$.cU,$.k)
t.i(0,$.fB,$.k)
r="Drawn by wailing and "+$.G+"ing, the "
q=$.l
r=r+q+" enters a rotting "
o=$.q
r=r+o+" village. They are in the throes of a famine they explain. Locusts damage their fields and blight destroys the weakened remainder. They cannot feed everyone once winter comes if this continues.   The "+q+" vows to help."
m="The "+q+" strifes countless swarms of locusts, but there seems to be no end to them. They finally track down a hive, guarded by several "
l=$.u
m=m+l+" minions. It is as easy as thinking to destroy everything, but the "+q+" is left uneasy. Why were the minions causing this on purpose?  "
k="Although the locusts have thinned in numbers, the blight is as strong as ever. Even the most potent of alchemized fungicides seem to only keep back the blight for a day. At their wits end, the "+q+" stays in the fields overnight to discover that "+l+" minions are spreading a strange powder on the fields. Defeating them is a start, but clearly "+l+" is dedicated to causing famine. They must be dealt with. "
l="The "+q+" faces the "+l+". It will end here."
j="The "+q+" is strong enough to impose their will on the world. Famine will not trouble the "+o+"s any longer."
t.i(0,new R.W("Protect the Farms",!1,[new U.c(r),new U.c(m),new U.c(k),new U.a1(l,"The "+q+" was not strong enough. Can anything save the "+o+"s before winter? ",j)],H.a([],p),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
n.i(0,new X.z(s,t,null),$.aJ)}}
G.jG.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("FAQ",H.a([$.a4,$.S,$.T,$.bz],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Flashlight",H.a([$.aH,$.S,$.aU,$.a4,$.bz],s),null,!1,"Tube of Localised Sun")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Octet",H.a([$.S,$.aU,$.bz,$.Z,$.nQ],s),null,!1,"D13")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Horseshoe",H.a([$.q6,$.S,$.aa],s),null,!1,"Horse Sneaker")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Rabbits Foot",H.a([$.qf,$.S],s),null,!1,"Rabbit Remains")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("4 Leaf Clover",H.a([$.aR,$.S,$.aU,$.bz],s),null,!1,"Plant of Luck +4")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("8-Ball",H.a([$.aX,$.S,$.ay],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.H]
s=H.a(["Luck","Casinos","Gambling","Dice","Cards","Fortune","Chance","Betting"],t)
H.a([],t)
r=[N.ab,P.V]
q=new H.p(0,null,null,null,null,null,0,r)
q.i(0,$.iS,$.j)
q.i(0,$.dP,$.k)
q.i(0,$.cI,$.j)
q.i(0,$.dd,$.j)
p=$.l
o="The "+p+" is searching for the lair of "
n=$.u
o=o+n+" when some local "
m=$.q
o=o+m+"s run past them carrying what appears to be primitive filming equipment and fancy props. After walking a little while longer the "+p+" comes across a huge building in the distance. On the front displays a sign that seems to advertise some sort of game show."
l="The "+p+" reaches the building and enters to find that it is in fact the filming location of a Game Show run by the local "+m+"s. What catches the "+p+"\u2019s eye, however, is that apparently the Grand Prize for winning the show is an exclusive meeting with none other than "+n+"! This could be the "+p+"\u2019s big chance! With determination in their eye, they eagerly sign up for the next scheduled airing of the show."
k="Tonight\u2019s episode of the game show has gotten underway, and so far it looks like the "+p+" is doing pretty well. The show cuts to a commercial break, and the "+p+" take the time to reflect on the current situation. With their superior intellect they easily win the first round, a test of intelligence, by a mile compared to their fellow "+m+" contestants. The "+p+" struggles with the second round, a test of athleticism through an obstacle course, however, and one of their opponents gains a point, tying up the game. If the "+p+" fails to win the next round, it could potentially jeopardize their chance to fight "+n+". This next round will be one the "+p+" cannot afford to lose."
j="Through sheer luck the "+p+" manages to spin a lucky number on the final round, which is merely a spin on the wheel with the number it rests on determining your reward. Your  "+m+" opponents shake your hand as they admit defeat, as "+n+" emerges from the shadows, ready to fight you at last."
m=n+" lies slain. The "+m+" host congratulates you on your victory and presents you your second prize, a brand new car! Unfortunately it is subsequently stolen by your opponents, who drive off, never to be seen again."
i=[U.c]
q.i(0,new R.W("Be the Contestant",!1,[new U.c(o),new U.c(l),new U.c(k),new U.a1(j,"Alas, the "+p+"\u2019s meeting with "+n+" ends in failure. And though their strife may have ended poorly, they will be remembered for being the best damn contestant this game show ever had. They will also have a consolation prize invitation to try again whenever they want!",m)],H.a([],i),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
m=$.l
n="The "+m+" finds a sparkling Casino. Inside, amid "+$.G+"ing "+$.q+"s is a single door, locked by three runes, each depicting a different form of gambling, Slots, Cards and Coins. Huh. The "+m+" approaches the slots and begins to play. Finally, after what must be hours, they get three Light symbols. The Slot rune lights up. One down, two to go."
p="The "+m+" thinks they finally have the rules of poker down enough to try the next set of gambling challenges. After a nerve wracking series of hands, they bet it all on a risky gamble, only to pull through with a Royal Flush!  The Cards rune lights up."
j="It is time for the final gamble. A single coin flip will decide it all. No take backs, no replays.   It lands. TAILS! The Coin rune lights up, and the door is open. The "+m+" begins to prepare for whatever may lay within."
k="When the "+m+" finally enters the Casino Door, the "
l=$.u
k=k+l+" is already rampaging. They are pissed off as fuck that they have been off screen this entire time, and blame the "+m+" for it. It's time to strife! "
m="The "+m+" was lucky enough to pull off a win! The "+l+" is too dead too rampage."
q.i(0,new R.W("Go Big or Go Home",!1,[new U.c(n),new U.c(p),new U.c(j),new U.a1(k,"Bad break, the "+l+" is going to keep throwing a hissy fit.",m)],H.a([],i),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
m=this.c
m.i(0,new X.z(s,q,null),$.aJ)
q=H.a(["Glow","Light","Rays","Sun","Shine","Sparkle","Sunshine","Stars"],t)
H.a([],t)
s=new H.p(0,null,null,null,null,null,0,r)
s.i(0,$.bL,$.k)
s.i(0,$.b_,$.k)
s.i(0,$.cJ,$.j)
s.i(0,$.iR,$.j)
s.i(0,$.dc,$.j)
s.i(0,$.fC,$.j)
p=$.l
o="The "+p+" walks into a "
n=$.q
o=o+n+" village, and finds all of them standing dejectedly in the village center. Their town has a monthly ceremony celebrating "
l=$.ac
o=o+l+", but "
k=$.u
o=o+k+" has hoarded all of the planets "
j=$.aM
l=o+j+" Candles, and everyone knows you cant have a good "+l+" ceremony without candles! The "+p+" vows to take back some "+j+" Candles for the poor "+n+"s. "
o="After a long search, the "+p+" has found the warehouse where "+k+" has stored all the candles. "+j+" Candles must be very valuable to "+k+" for some reason, because the warehouse roof is swarming with minions, waving a lot of bright spotlights in random intervals. The spotlights will need to be dealt with if the "+p+" wants to sneak in without alerting a horde of "+k+" minions."
h="After spending hours attempting to determine the rotation of the guards and the patterns of spotlight waving with no luck, the "+p+" realizes they dont have to avoid the lights if they can turn them off instead. They locate an unguarded electric panel outside and cut the power. The "+k+" minions dont even leave the roof; they just confusedly wave their now useless spotlights, allowing the "+p+" to slip inside with ease. Captchaloging as much "+j+" Candles as they can, the "+p+" triumphantly returns to the village among the joyful "+$.G+"ing of the "+n+"s."
k="The "+p+" is ready to challenge the "+k+" to keep them from restealing the "+j+" candles. "
n="Never again shall the "+n+"s be without "+j+" Candles!"
s.i(0,new R.W("The Candlestick Taker",!1,[new U.c(l),new U.c(o),new U.c(h),new U.a1(k,"The "+j+" candles are once again at risk.",n)],H.a([],i),R.oH(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.j)
n=$.l
j="The "+n+" finds an incongruous dark patch in the otherwise brightly lit land. A quivering "
k=$.q
j=j+k+" explains that the "
h=$.u
s.i(0,new R.W("Shine the Light",!1,[new U.c(j+h+" has forbidden the "+k+"s from having light, and moved giant disks to block it from them. Now that's just being mean!  The "+n+" vows to help.   "),new U.c("The "+n+" has finally managed to destroy the disk blocking light from the "+k+" village. There is a chorus of happy "+$.G+"s as they bask in the light. The "+n+" feels good about a job well done. "),new U.c("Disaster!  The "+k+" village is once again shrouded in darkness, this time from an even larger disk than before. Judging from the roars, the "+h+" is guarding the disk themself.  The "+n+" must prepare themself for a tough fight.  "),new U.a1("The "+n+" has managed to reach the disk guarded by the "+h+". The monster denies even so basic a right as light, there can be no quarter. It's time to strife!","Darkness reigns.","The "+h+" is defeated, the disk destroyed. Finally, the "+k+"s can enjoy the light in peace.")],H.a([],i),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
m.i(0,new X.z(q,s,null),$.aJ)
s=H.a(["Knowledge","Information","Books","Encyclopedias","Understanding","Libraries"],t)
H.a([],t)
q=new H.p(0,null,null,null,null,null,0,r)
q.i(0,$.ez,$.k)
q.i(0,$.b5,$.k)
q.i(0,$.dW,$.j)
q.i(0,$.b_,$.k)
q.i(0,$.bY,$.j)
p="Now that the "+$.u+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.l
p=p+o+" sets up a wiki and settles in to help the "
n=$.q
p=p+n+"s deal with it all."
n="Within barely any time at all, the "+n+" wiki is a huge success! Everybody works hard and shares their expertise, and the "+o+" makes sure all of the information is from credible sources."
o="When the "+o+" falls ill to a mysterious illness, it's one witness' quick check of the wiki that saves the day. It turns out it was their peanut allergy acting up, not an illness at all! "
l="The "+$.dY+" has assembled just, ALL the knowledge. How can you possibly hope to beat them?"
q.i(0,new R.a6("Moderate the Wiki",!1,[new U.c(p),new U.c(n),new U.c(o)],H.a([],i),R.cZ(),!1,!1,new Y.N("Information Network",l,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
l="Now that the "+$.u+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.l
l=l+o+" shrugs and sets up a wiki and lets the "
n=$.q
l=l+n+"s deal with it all."
n="Within barely any time at all, unmoderated "+n+" wiki is a huge disaster. Misinformation abounds. There are no less than three articles on the "+o+" alone, and each claims they are a different SPECIES entirely. The "+o+" finds this to be hilarious."
o="Luckily it turns out all that disinformation running around about the "+o+" thwarts some would be assasins. It turns out the "+o+" is NOT deathly allergic to peanuts, after all. That's what you get for trusting a wiki, assholes. "
p="The "+$.dY+" allows you to make you own assumptions about things, and be destroyed by them."
q.i(0,new R.a6("Create the Wiki",!1,[new U.c(l),new U.c(n),new U.c(o)],H.a([],i),R.dn(),!1,!1,new Y.N("Disinformation Network",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.q
o=p+"s are falling ill left and right due to a mysterious Plague. It doesn't seem to follow the pattern of a disease, having no communicability. What is going on and how can the "
n=$.l
o=o+n+" possibly stop it?"
p="The "+n+" pours over maps and charts. What do the sick "+p+"s have in common with each other?  Finally, there is a flash of inspiration. "+p+"s who live or work closer to a particular river that meanders across the planet are the ones becoming ill! The "+n+" quickly orders the river quarantined and new cases begin to taper off. Now it remains to see what can be done about those already sick. "
l="The "+n+" analyzes the water from the contaminated well. Boiling it reveals a thick black sludge.  The collected steam is found to be perfectly safe to drink. The "+n+" discovers that the sludge causes a strange vitamin deficiency, and supplies the town with supplements to fix the sickness.  Things are looking brighter, indeed."
k="The "+n+" traces the contaminated river back to it's source. The "
j=$.u
q.i(0,new R.W("Shed the Light",!1,[new U.c(o),new U.c(p),new U.c(l),new U.a1(k+j+" is revealed to be dripping the gross as fuck sludge into the river. When negotiations fail to make it leave the water, the only remaining option is strife. ","The darkness of the Plague remains.","The "+n+" is victorious. The "+j+"'s body despawns, along with all the sludge in the river. The Plague is finally over!")],H.a([],i),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
m.i(0,new X.z(s,q,null),$.aJ)
q=H.a(["Spotlights","Attention","Drama","Stars","Glamor","Holywood"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,r)
t.i(0,$.cI,$.j)
t.i(0,$.iS,$.j)
t.i(0,$.dd,$.k)
t.i(0,$.ca,$.k)
t.i(0,$.nE,$.k)
t.i(0,$.bK,$.D)
t.i(0,$.cN,$.D)
t.i(0,$.bO,$.k)
t.i(0,$.c9,$.D)
t.i(0,$.b5,$.k)
t.i(0,$.c2,$.j)
s=$.l
r="The "+s+" is approached by a Fast Talking "
p=$.q
r=r+p+". Apparently the "+s+" has EXACTLY the right look to be the lead in the upcoming production of The Beautiful "
o=$.ac
r=r+o+". The "+s+" agrees to perform the titular role."
n="The opening night performance of the Beautiful "+o+" is a huge success! The "+$.G+"ing of the fans is it's own reward!"
o="When it comes time for the next performance of the Beautiful "+o+", the "+s+" is turned away at the door. Apparently the "
l=$.u
p=o+l+" rampaged and terrorized "+p+"s until given the lead role. They claim that the "+s+" is FAR too drab to be give such an important performance. WHAT. THE. FUCK. The "+s+" isn't going to let this stand."
l="There is not enough room on the stage for both of them. The "+s+" challenges the "+l+" to a glamour off, and wins handily. Enraged, the "+l+" attacks."
o="The "+s+" can finally get back to their promising acting career in peace."
t.i(0,new R.W("Be the Star",!1,[new U.c(r),new U.c(n),new U.c(p),new U.a1(l,"The actig career of the "+s+" is in shambles.",o)],H.a([],i),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
o="After the "+$.u+", the "
s=$.l
o=o+s+" is disappointed to learn that barely any of the "
l=$.q
o=o+l+"s know who they are. This will not do!"
l="Posters, ad campaigns, catchy jingles, and the "+s+" still runs into the odd "+l+" that doesn't recognize them on sight. This is getting ridiculous!"
s="The "+s+" thinks they finally have an idea.  They focus. Light-y bullshit effects rain down from the sky, and their face is super imposed over the brilliance of Skaia itself. Now EVERYONE on their planet knows who is the most important. It is them."
p="The "+$.dY+" is famous, and everyone in this fight is lucky to have met them."
t.i(0,new R.a6("Be the Biggest Star in Paradox Space",!1,[new U.c(o),new U.c(l),new U.c(s)],H.a([],i),R.cZ(),!1,!1,new Y.N("What's my name?",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
m.i(0,new X.z(q,t,null),$.aJ)}}
Z.jN.prototype={
q:function(){var t,s,r,q
t=this.y2
s=[G.a2]
r=A.i("Dream Bubbles Book",H.a([$.F,$.af,$.aG,$.q_],s),null,!1,null)
C.a.h(t.b,new Q.h(r,t.k(r,1),[H.O(t,0)]))
t=Q.B(null,null,A.a3)
r=A.i("Uno Reverse Card",H.a([$.nP,$.o2,$.af],s),"Some kind of memey bullshit.",!1,"Shoguns Card")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Lord's Cape",H.a([$.M,$.P,$.af],s),"Lord Shit",!1,"Shoguns Cape")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Drawing Tablet",H.a([$.jp,$.P,$.af],s),"Have fun drawing grids.",!1,"Shitpost Etching Table")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("How to Make Friends And Influence People",H.a([$.Z,$.F,$.P,$.bf,$.aG],s),"Good luck with that. You'll need it, asshole.",!1,"Book for Nerds")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o,n,m
t=[P.H]
s=H.a(["Castles","Keeps","Fortresses","Nobility","Forts","Moats","Dungeons"],t)
H.a([],t)
r=[N.ab,P.V]
q=new H.p(0,null,null,null,null,null,0,r)
q.i(0,$.cG,$.D)
q.i(0,$.dV,$.D)
q.i(0,$.bK,$.D)
q.i(0,$.c7,$.k)
p="The "+$.u+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
o=$.l
p=p+o+" comands that the "
n=$.q
m=[U.c]
q.i(0,new R.bn("Command Minions to Breed Frogs",!1,[new U.c(p+n+"s collect the frogs. The "+n+"s agree with enthusiastic "+$.G+"s. "),new U.c("The "+n+"s hit buttons on the ectobiology machine at random. The "+o+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.c("A "+n+" minion has finally found the final frog. The "+o+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bA(),!1,!1,new Y.bm("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.az)
o="As soon as the "+$.u+" is defeated, the "
n=$.q
o=o+n+"s disolve into civil wars and infighting. It will take a strong leader to unite the land, and the "
p=$.l
q.i(0,new R.a6("Conquer Everything",!1,[new U.c(o+p+" is up to the task.  "),new U.c("The "+p+" has subjugated/assimilated about half of the "+n+" factions, at this point. They are surprisingly good at following commands, and everything is running with clock work efficiencey."),new U.c("The final "+n+" commander surrenders. The "+p+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
p=this.c
p.i(0,new X.z(s,q,null),$.bv)
q=H.a(["Dutton","Charles","Fathers","Prophets","Dew"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,r)
t.i(0,$.pI,$.j)
t.i(0,$.c8,$.j)
t.i(0,$.b5,$.j)
t.i(0,$.b_,$.k)
s="The "+$.u+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
r=$.l
s=s+r+" comands that the "
o=$.q
t.i(0,new R.bn("Command Minions to Breed Frogs",!1,[new U.c(s+o+"s collect the frogs in the name of Lord Dutton. The "+o+"s agree with confused, yet enthusiastic "+$.G+"s. "),new U.c("The "+o+"s hit buttons on the ectobiology machine at random. The "+r+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.c("A "+o+" minion has finally found the final frog. The "+r+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bA(),!1,!1,new Y.bm("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.az)
r="As soon as the "+$.u+" is defeated, the "
o=$.q
r=r+o+"s disolve into chaotic shitposting. It will take a strong leader and a glorious Cult to unite the land, and the "
s=$.l
t.i(0,new R.a6("Praise Dutton",!1,[new U.c(r+s+" and their fervant belief in Lord Dutton is up to the task.  "),new U.c("The "+s+" has spread the word of Lord Charles Dutton to about half of the "+o+" factions, at this point. The Cult of Dutton unites the chaotic shitposting landscape."),new U.c("The final "+o+" shitposter surrenders. The "+s+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.t(),!1,!1,new Y.bd("Rewards/sweetTreasure.png",this.y2,"Rewards/no_reward.png",null),1,null,null),$.v)
p.i(0,new X.z(q,t,null),$.bv)}}
S.jO.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Alternate Costume",H.a([$.M,$.P,$.a0,$.Z,$.ah],s),"Apparently some people don't like the regular mage outfit? Whatever.",!1,null)
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Mage's Cape",H.a([$.M,$.P,$.a0],s),"Mage Shit",!1,"Shitty Wizard Cape")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Mage's Staff",H.a([$.U,$.P,$.aa,$.a0,$.cO],s),"Mage Shit",!1,"Shitty Wizard Stick of Power")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Walking Broom",H.a([$.fZ,$.U,$.P,$.ay,$.a0,$.cO],s),"Normally I'd blame Wastes, but walking brooms is more of a Mage thing.",!1,"Support Stick of Cleaning")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o,n
t=[P.H]
s=H.a(["Cities","Skyscrapers","Buildings","Stoplights","Cars","Streetlights","Traffic"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,[N.ab,P.V])
t.i(0,$.dO,$.j)
t.i(0,$.eB,$.k)
t.i(0,$.bU,$.j)
t.i(0,$.dT,$.k)
t.i(0,$.cj,$.D)
r="The "+$.u+" has freed the frogs from their video game inspired hell. No longer will they be threatened to be squashed by all this fucking traffic. They are hopping ALL over the road now. The "
q=$.l
p=[U.c]
t.i(0,new R.bn("Understand the Frogs",!1,[new U.c(r+q+" thinks hard and figures out the best way to start collecting frogs. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bA(),!1,!1,new Y.bm("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.az)
q=$.l
t.i(0,new R.a6("Work With Exiles",!1,[new U.c("The "+q+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+q+" abjures the concept of helping entirely, but the Voice just won't shut up. God dammit, FINE. They'll help."),new U.c("The "+q+" makes sure to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.c("The "+q+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],p),R.t(),!1,!1,new Y.cf("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
q=$.l
r="The "+q+" is feeling quite pleased with their victory over the "+$.u+" when suddenly they are nearly blinded by a crippling vision of pain and "
o=$.aM
t.i(0,new R.a6("Suffer Visions",!1,[new U.c(r+o+". Oh god, why is this happening?"),new U.c("It's been a while since the last "+o+" vision, and the "+q+" doesn't trust it. As a test, they actively look out for "+o+" related danger.  Sure enough, right before they find it they suffer the painful vision. Their course of action is clear: prevent "+o+" from ever hurting anyone ever again or suffer migraines from hell forever."),new U.c("Finally, the land is practically a "+o+" free utopia. The "+q+" can finally have a break from painful visions.")],H.a([],p),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
q="Now that the "+$.u+" has been defeated, the "
o=$.q
q=q+o+"s are ready to expand their civilization. They ask the "
r=$.l
q=q+r+"'s help in planning the brand new city of "
n=$.aM
t.i(0,new R.a6("Become the Mayor",!1,[new U.c(q+n+"burg."),new U.c("A panicking "+o+" runs up to the "+r+", "+$.G+"ing the whole time. The "+n+"burg sanitation facility has been delayed, but the residential areas are already starting to fill up!  The "+r+" shuffles around work shifts to get the sanitation working before things get too...disgusting."),new U.c("It is finally time for the final brick to be placed for the final building in "+n+"burg. The "+r+" snips a ceremonial ribbon opening up the Mayor's office, to which they have been elected in a landslide. ")],H.a([],p),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
this.c.i(0,new X.z(s,t,null),$.bv)}}
U.jP.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Maiden's Breath",H.a([$.aR,$.P,$.aC],s),null,!1,null)
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Feather Duster",H.a([$.U,$.P,$.cO,$.bg],s),"Housemaid shit.",!1,"Maids Weapon of Choice")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Valkyrie Shield",H.a([$.aC,$.aI,$.x,$.P,$.Z,$.e1,$.pS],s),"Shieldmaid shit",!1,"Another Weakling Piece of Metal But For Some Kind of Angel Woman I Guess?")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Maiden's Songbook",H.a([$.F,$.P,$.a7,$.aG],s),"Longing maiden shit.",!1,"Smash Mouth Lyrics")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o,n
t=[P.H]
s=H.a(["Suburbs","Parks","Playgrounds","Swingsets","Tire Swings","Neighborhoods","Traffic"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,[N.ab,P.V])
t.i(0,$.cL,$.j)
t.i(0,$.bL,$.j)
t.i(0,$.b_,$.k)
t.i(0,$.b5,$.k)
t.i(0,$.cJ,$.k)
t.i(0,$.c9,$.k)
r="The "+$.u+" has instructed the Home Owners Association to lift the ban on frogs. The "
q=$.l
r=r+q+" asks local  "
p=$.q
r=r+p+" kids to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.G
n=[U.c]
t.i(0,new R.bn("Serve the  Frogs",!1,[new U.c(r+o+"s.  It's a lively neighborhood event."),new U.c("The "+p+" kids hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. A neighboring "+p+" starts grilling some burgers and dogs so nobody goes hungry."),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bA(),!1,!1,new Y.bm("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.az)
q=$.l
o="The "+q+" has adopted a local "
p=$.q
t.i(0,new R.a6("Serve the PTA",!1,[new U.c(o+p+" child to be their dear, sweet, precious daughter. It is time for them to go off to school.  Other "+p+" parents ask the "+q+" to join the PTA."),new U.c("The PTA has the "+q+" running ragged. It seems like every time they turn around it's another thing they are "+$.G+"ing about. "),new U.c("All this time catering to the PTA has paid off. Not only is the "+q+"'s dear sweet precious "+p+" daughter doing well in school, but the "+q+" has been elected president of the PTA! They now have the ability to make real changes.  Somehow this feels even more satisfying than defeating the "+$.u+". ")],H.a([],n),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
this.c.i(0,new X.z(s,t,null),$.bv)}}
L.jZ.prototype={}
V.k_.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Puzzle Box",H.a([$.U,$.S,$.a0],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Tesla Coil",H.a([$.a4,$.S,$.x],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Coin",H.a([$.x,$.S],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Electronic Door",H.a([$.x,$.S,$.a4,$.T],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Janus Bust",H.a([$.aI,$.h_,$.aB,$.af,$.S,$.Z,$.a4],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.H]
s=H.a(["Decisions","Choices","Paths","Passages","Dead Ends","Trails","Doors","Possibilities","Alternatives","Labrinths","Mazes"],t)
H.a([],t)
r=[N.ab,P.V]
q=new H.p(0,null,null,null,null,null,0,r)
q.i(0,$.c8,$.k)
q.i(0,$.dP,$.D)
q.i(0,$.bY,$.D)
p=$.l
o="The "+p+" finds themselves trapped in a dark labyrinth. After travelling through for some time they have come to realize the walls change position when they leave an area. Although "
n=$.q
o=o+n+"s are wandering around the maze they give riddle-like responses on how to escape. The "+p+" will need to find a way to solve the many hidden logic problems to escape the ever-changing paths. It's easy enough to leave when they want, but they want to WIN."
m="The "+p+" returns to the labrinth to get help from one "+n+" to try to understand the puzzle.It gave a slightly less confusing answer to look another way. The "+p+" decides to listen to all of the "+n+"s answers however confusing that they are."
l="With each answer written down, the "+p+" begins to piece together the parts of the answer. They will need all the mental prowess to crack this one, and finally reach the end of the Labrinth."
p="After hours of putting different spins on each sentence, the "+p+" finally solves the riddle. But they aren\u2019t quite done yet. A considerate "+n+" directs the "+p+" to a small gap between two or the walls that leads to a puzzle room. The "+p+" spots a mirror on the far wall and presses the side of it. The mirror reflects light which the "+p+" uses to hit the right targets in the right order. After putting the pattern in, the mirror slid away and opened a view to the outside fields which let the "+p+" escape. Or that WOULD be what happens if the shitty "
n=$.u
k=[U.c]
q.i(0,new R.W("Change the View",!1,[new U.c(o),new U.c(m),new U.c(l),new U.a1(p+n+" wasn't blocking their path.","Oh my fucking god, they better not have to redo that entire labrinth if they are ever back here.","Okay. With the defeat of the "+n+", NOW they finally escape from that labrinth.")],H.a([],k),R.e9(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.j)
n=$.l
p="The "+n+" boggles vacantly at an entire labrinth of doors. Whole walls are nothing but doors and their frames, with seemingly no rhyme or reason. A nearby "+n+" explains that at the end of the Labrinth is the "
l=$.u
q.i(0,new R.W("Pick a Door, any Door",!1,[new U.c(p+l+". If the "+n+" wants to beat their land, they will have to figure out this Labrinth.  They are given a ball of yarn so they can easily resume their place in the Labrinth when they need to take breaks."),new U.c("Left. Right. Both choices look just as good as each other. A wrong choice could waste hours.  The "+n+" feels the weight on their shoulders, and then picks left.  Hours later, they encounter a brick wall. God DAMN it."),new U.c("Another set of two possible choices which seem to obviously have huge consequences. And yet....this time one of them just seems more....right? Like it's obvious that it's better. Huh.   Hours later, the "+n+" encounter another wall of doors, these ones with less feeling of weight. Hell yes! "),new U.a1("The final door is passed. The "+l+" is revealed.  The choice here is an easy one, it is time to strife!","Oh GOD DAMN IT. Now the "+n+" has to walk all the way back here to restart the fight.","The bullshit labrinth is finally complete.")],H.a([],k),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
n=this.c
n.i(0,new X.z(s,q,null),$.aJ)
q=H.a(["Consequences","Results","Karma","Justice","Responsibility","Payback","Vengence"],t)
H.a([],t)
s=new H.p(0,null,null,null,null,null,0,r)
s.i(0,$.dR,$.D)
s.i(0,$.bT,$.k)
s.i(0,$.bY,$.D)
s.i(0,$.c8,$.D)
p=$.u
o="The "+p+" has commited a staggering amount of crimes against the local "+$.q+" population. The natural result of this is that karma itself is conspiring for their downfall. The "
m=$.l
s.i(0,new R.W("Face the Music",!1,[new U.c(o+m+" knows that Justice is on their side."),new U.c("The "+p+" may FEEL safe, all sequestered away in their shitty snake lair, but they aren't. The "+m+" convinces a group of underlings lead by a "+p+" minion that the "+p+" is a huge jerk who shouldn't be in charge of them. It's easy, because it's true. That's what happens when you are a huge jerk."),new U.c("Huh.  I WONDER what the consequences are of the "+p+" being stuck hiding in their shitty snake lair while the "+m+" is running a propoganda campaign against them?  Suddenly the "+p+" has run out of allies entirely."),new U.a1("Karma is a bitch. The "+p+" has nowhere to run when the "+m+" comes for them. It's time to strife.","Has Justice truly been perverted?","Justice is served.")],H.a([],k),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
n.i(0,new X.z(q,s,null),$.aJ)
s=H.a(["Thought","Logic","Connections","Neurons","Psychics","Subconsciousness","Intuition","Sparks","Lightning","Electricity"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,r)
t.i(0,$.fG,$.j)
t.i(0,$.b5,$.k)
t.i(0,$.dW,$.j)
t.i(0,$.b_,$.k)
t.i(0,$.bY,$.j)
r=$.l
q="The "+r+" stares at the puzzle blocks in a dungeon. One of them doesn't belong. But which? The Dog? The Bull? The Feather? The Cat? The "+r+" thinks, then makes the logical selection.  The Dungeon accepts it."
p="Another dungeon. A cat. A swan. A robot. A virus. Huh. This one is harder. The "+r+" thinks about it for a while, and then goes with their intuition.  The Dungeon accepts it.  "
o="In the newest dungeon, there are 4 geometric shapes on the puzzle blocks. One of them doesn't belong. The "+r+" thinks they understand. Their choice is accepted."
m=$.u
m="It's the final door before facing the "+m+". All four puzzles blocks are simply identical images of "+$.ac+". The "+r+" closes their eyes. They think about the previous puzzles, and the patterns that came out of their choices. They choose.  The door opens. It is time to strife "+m+"."
l="Finally. The "+r+" can stop solving bullshit 'logic' puzzles that keep straying into weird intuition mind reading bullshit."
t.i(0,new R.W("Make the Connections",!1,[new U.c(q),new U.c(p),new U.c(o),new U.a1(m,"Looks like the "+r+" will have to resolve some of those bullshit puzzles.",l)],H.a([],k),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
n.i(0,new X.z(s,t,null),$.aJ)}}
S.k0.prototype={}
E.k1.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Feather Pen",H.a([$.x,$.P,$.af,$.bg],s),"Oh my god, did JR really not know how to spell 'Quill'?",!1,"Feather Object to be Dipped in Black Liquid")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Half Finished Bust of Snoop Dog",H.a([$.qe,$.P,$.h_,$.aa,$.Z],s),"Meme Shit",!1,"The Gods Refused to Let This Object Finish Completion")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Book of Poetry",H.a([$.F,$.P,$.af,$.aG],s),"Hope it inspires you.",!1,"Ocean Man Lyrics 50,000 Times: The Book")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o,n,m
t=[P.H]
s=H.a(["Music","Dance","Poetry","Inspiration"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,[N.ab,P.V])
t.i(0,$.cL,$.j)
t.i(0,$.bL,$.j)
t.i(0,$.b_,$.k)
t.i(0,$.b5,$.k)
t.i(0,$.cJ,$.k)
t.i(0,$.c9,$.k)
r="The "+$.u+" has allowed inspiration to flow once more. The frogs are no longer too depressed to croak, and are much more easy to find. The "
q=$.l
r=r+q+" asks the "
p=$.q
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.G
n=[U.c]
t.i(0,new R.bn("Inspire Frog Breeding",!1,[new U.c(r+o+"s. "),new U.c("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" cheers them on and soon everybody is working just a bit better. "),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bA(),!1,!1,new Y.bm("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
q="You'd think after the dramatic defeat of the "+$.u+" the "
o=$.q
q=q+o+"s would be celebrating. Instead they are just kind of moping around. When pressed, they say they just don't feel like doing anything. "
p=$.l
r="The "+p+" bugs and fusses and meddles until the "+o+"s agree to put on a performance of the musical 'The Lonely "
m=$.ac
t.i(0,new R.a6("Inspire the People",!1,[new U.c(q),new U.c(r+m+"'. The "+p+" assigns parts that challenge each of them without seeming impossible."),new U.c("The performance of The Lonely "+m+" goes off without a hitch. The "+o+"s recieve accolades and ALL the self esteems.  They are inspired to reach ever greater heights of acomplishments. ")],H.a([],n),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
this.c.i(0,new X.z(s,t,null),$.bv)}}
F.k2.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Piano",H.a([$.aa,$.U,$.a7,$.af],s),"An entire piano. In your inventory. WHY.",!1,"Elephant Corpse Turned Amazing Instrument")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Flute",H.a([$.x,$.a7],s),"I feel like a spaceship captain should play this.",!1,"Pipe of Screeches 2: Orchestral Shitstorm")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Microphone",H.a([$.aV,$.a4],s),"Do you really deserve to drop this like it's hot?",!1,"Speaking Tube of Passion +3")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Violin",H.a([$.U,$.a7],s),null,!1,"Tiny Cello")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Sheet Music",H.a([$.F,$.a7],s),null,!1,"Cheat Codes for Instruments")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Electric Guitar",H.a([$.aH,$.a7,$.a4,$.aV,$.ai],s),null,!1,"Electrical Stringed Music Maker")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Turn Tables",H.a([$.aH,$.a7,$.a4,$.ai],s),null,!1,"Spinning Disc Sound Maker")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Guitar",H.a([$.U,$.a7],s),null,!1,"String Music Maker")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.H]
s=H.a(["Pianos","Music","Harmony","Rain","Songs","Violins","Harps","Strings","Notes","Violas","Guitars"],t)
H.a([],t)
r=[N.ab,P.V]
q=new H.p(0,null,null,null,null,null,0,r)
q.i(0,$.ca,$.az)
q.i(0,$.nE,$.j)
q.i(0,$.dd,$.j)
q.i(0,$.cJ,$.k)
q.i(0,$.b_,$.k)
q.i(0,$.iM,$.k)
p=$.l
o="The "+p+" meets a wise old "+$.q+" who tells that the "+$.u+" can only be awoken by the Legendary Hero playing the "
n=$.aM
o=o+n+". Huh. Do you think that's gonna be a thing?"
m="The "+p+" learns of a series of "
l=$.ac
k=[U.c]
q.i(0,new R.X("Play the Music",!1,[new U.c(o),new U.c(m+l+"s that prevent the "+n+" from being played. Hrmmmm...how are they gonna clear this up?   "),new U.c(" The "+p+" has finally fixed the "+l+". They play the "+n+" and are dramatically revealed as the Legendary Hero. We are all blown away by this startling revelation. The "+p+" was the Hero all along? Wow.")],H.a([],k),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
p=this.r
p.i(0,new X.z(s,q,null),$.aE)
q=H.a(["Hymns","Choirs","Chorus","Voices","A Capella","Chants"],t)
H.a([],t)
s=new H.p(0,null,null,null,null,null,0,r)
s.i(0,$.nI,$.az)
s.i(0,$.cH,$.k)
s.i(0,$.c7,$.k)
s.i(0,$.cJ,$.j)
s.i(0,$.iM,$.az)
o=$.l
n="The "+o+" learns of a lost song, said to contain the power of "
m=$.aM
n=n+m+". Any who can sing it are destined to be strong enough to face the "
l=$.u
s.i(0,new R.X("Sing the Song",!1,[new U.c(n+l+". "),new U.c("The "+o+" has been searching high and low, in dungeons, ruins, and villages. Finally, they find a sheet of music that seems the very essence of "+m+". They open their mouth to sing it, and realize they can't make a sound. What IS this fresh fuckery?  What kind of song can't be sung?"),new U.c("A "+$.ac+"! That's the key! The "+o+" equips it and instantly finds themselves able to sing the "+m+" song. The burst of music in their chest makes them feel ready to take on anything, but especially the "+l+".")],H.a([],k),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
p.i(0,new X.z(q,s,null),$.aE)
s=H.a(["Beat","Rhythm","Flow","Raps","Rhyme","Grove","Funk"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,r)
t.i(0,$.fE,$.az)
t.i(0,$.bO,$.k)
t.i(0,$.cM,$.k)
r=$.l
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
o=$.q
q=q+o+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+o+" kept rhyming "
n=$.G
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+o+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+o+" approaches the "+r+". And aura of "+$.aM+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+o+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
o=this.y
t.i(0,new R.X("And It Don't Stop",!1,[new U.c(n),new U.c(q),new U.c(r)],H.a([],k),R.t(),!1,!1,new Y.bd("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.v)
p.i(0,new X.z(s,t,null),$.aE)}}
V.kj.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Shorts",H.a([$.M,$.P,$.e0,$.Z],s),"Don't skip leg day.",!1,"Crotch Hugging Thigh Exposers. Absolutely Indecent.")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Sidekick Figurine",H.a([$.aH,$.P,$.ai],s),"Robin is way cooler than Batman.",!1,"Small Statue of a White Headed Cat in a Green Suit")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Steroids",H.a([$.aw,$.P,$.a0],s),"Shit son, calm down with all the screaming and the powering up.",!1,"My Morning Medication")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.H]
s=H.a(["Desert","Sand","Pyramids","Camels","Tombs"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,[N.ab,P.V])
t.i(0,$.iU,$.j)
t.i(0,$.ck,$.k)
t.i(0,$.eC,$.k)
t.i(0,$.iV,$.k)
t.i(0,$.cL,$.k)
t.i(0,$.b5,$.k)
t.i(0,$.cU,$.k)
t.i(0,$.dc,$.k)
t.i(0,$.iW,$.k)
t.i(0,$.fB,$.k)
t.i(0,$.iR,$.k)
r="The "+$.u+" has allowed water to flow once more. The croaking of frogs fills the air as pools begin to form. The "
q=$.l
r=r+q+" asks the "
p=$.q
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.G
n=[U.c]
t.i(0,new R.bn("Help Breed the Frogs",!1,[new U.c(r+o+"s. "),new U.c("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. "),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bA(),!1,!1,new Y.bm("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.az)
q=$.l
o="The "+q+" was about to walk through a patch of incongruous tall grass when a quirky "+$.q+" named Professor "
p=$.G
o=o+p+" halts them. apparently, it's not safe to travel without trusty "
r=$.ac
o=o+r+" by their side. The professor also makes some side comments about the "+r+" League. If the "+q+" can assemble a team strong enough to beat the gym leaders, they might have a shot at becoming the "+r+" League Champion!"
p="The "+q+" wanders about their land, learning how to use their "+r+" effectively and taking down the "+r+" gym leaders. Along the way, they hear rumors that the dastardly Team "+p+", led by "
m=$.u
p=p+m+", plans to interfere with the league. The "+q+" will not stand for this."
l="After an intense round of "+r+" battling, the "+q+" finally defeats the last gym leader of the "+r+" league. Turns out, the "+r+" they used was super effective! they can now challenge the "+r+" League. "
k="The "+q+" has finally almost completed the "+r+" League. Much to their suprise, the Champion they must defeat in order to claim the title is none other than "+m+"!!! Will they succeed? STRIFE!"
m="The "+q+" is now the "+r+" League champion. "+m+" remains alive just long enough to walk them to the hall of fame, which is suprisingly filled with grist!"
t.i(0,new R.W("Become The Best",!1,[new U.c(o),new U.c(p),new U.c(l),new U.a1(k,"The "+q+" whited out...",m)],H.a([],n),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
m="Now that the "+$.u+" is finally out of the way, some of the previously sealed tombs have opened up. It is time for the "
q=$.l
m=m+q+" to desecrate the fuck out of some tombs."
k="In a twist that is shocking only to the "+q+", they are now inflicted with a Mummy's Curse. There is a REASON you don't desecrate random tombs. A local "
l=$.q
t.i(0,new R.a6("Explore the Tombs",!1,[new U.c(m),new U.c(k+l+" explains that they will have to find a "+l+" champion to face the Mummy, for anyone cursed by it will surely perish should they face it in a strife."),new U.c("The "+q+" finds a competent enough Warrior "+l+" to help them fight the Mummy. While they can't fight directly, the "+q+" can at least give them some "+$.aM+" buffs. With a deafening "+$.G+", the Warrior "+l+" wins the day! The curse is lifted! ")],H.a([],n),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
this.c.i(0,new X.z(s,t,null),$.bv)}}
G.ks.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Superhero Action Figure",H.a([$.aH,$.ai,$.aS],s),"How perfectly fucking generic. You couldn't even pick a brand name?",!1,"Shogun Action Figure")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Action DVD",H.a([$.aH,$.ai],s),null,!1,"Shogun The Movie")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Ghost Busters DVD",H.a([$.aH,$.by],s),"I refuse to call a bunch of washed up comedians.",!1,"Shogunsprite Hunters The Movie")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Snow Dogs DVD",H.a([$.aH,$.aT,$.ba,$.bM],s),null,!1,"Snow Buddies Anthology")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Skateboarding Video Game",H.a([$.aH,$.ai],s),"All of these glitches are offensive to my robo-sensbilities.",!1,"Snow Buddies Anthology")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Movie Poster",H.a([$.F,$.ai],s),null,!1,"Shogun 2: Electric Shitstorm Poster")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Audrey II Plush",H.a([$.aR,$.ai,$.M,$.ay],s),null,!1,"World Eating Plant Plush, A Pure Entity")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Peashooter Toy",H.a([$.aR,$.aL,$.ai,$.M],s),null,!1,"Plants Vs Zombies Peaplant Plush")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Shitty Sword",H.a([$.aS,$.x,$.ai,$.e2,$.aA,$.bt],s),"So. Shitty.",!1,"Perfect Weapon")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("GameBro Magazine",H.a([$.F,$.ai],s),"5/5 hats.",!1,"Nerd Magazine")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("GameGrl Magazine",H.a([$.F,$.ai],s),"5/5 lady hats.",!1,"Nerd Magazine for Girls")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.H]
s=H.a(["Refrances","Memes","Reference","In Jokes","Viral Videos","Dutton","Stairs"],t)
H.a([],t)
r=[N.ab,P.V]
q=new H.p(0,null,null,null,null,null,0,r)
q.i(0,$.c9,$.k)
q.i(0,$.c2,$.k)
q.i(0,$.bO,$.j)
q.i(0,$.ck,$.az)
q.i(0,$.de,$.az)
p=$.l
o="The "+p+" falls down a series of infinite stairs. A local "
n=$.q
m=[U.c]
q.i(0,new R.X("Become the Star",!1,[new U.c(o+n+" manages to catch a video of it, and it goes viral on "+$.aM+"tube. This is humiliating."),new U.c("Oh look, somebody made a dubstep remix of the "+p+" falling down all those goddamned stairs. It REALLY is catchy with all those "+$.G+"s added in."),new U.c(" The "+p+" decides to own their fame and goes on a "+n+" talk show to answer questions about those stairs. It turns out nobody warned them about them. There really needs to be, like, a sign or something.")],H.a([],m),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
n=this.r
n.i(0,new X.z(s,q,null),$.aE)
q=H.a(["Superheroes","Super Villains","Comics","Cellshading","Villains"],t)
H.a([],t)
s=new H.p(0,null,null,null,null,null,0,r)
s.i(0,$.dS,$.k)
s.i(0,$.cH,$.k)
s.i(0,$.c2,$.k)
s.i(0,$.bO,$.k)
s.i(0,$.cK,$.j)
p=$.l
o="The "+p+" runs towards an explosion in a local "
l=$.q
o=o+l+" village. As they rush to help the injured, a Mysterious "+l+" in a mask and cape flees the scene. Who was that? "
k="The Mysterious "+l+" turns out to be Professor "
j=$.aM
s.i(0,new R.X("Stop the Villain",!1,[new U.c(o),new U.c(k+j+", a notorious consort Villain. They spread chaos and disaster with their "+j+" ray. The "+p+" vows to stop them. "),new U.c(" The "+p+" has a dramatic showdown witih Professor "+j+", that results in the Villain being knocked unconscious, and taken away by the "+l+" authorities. ")],H.a([],m),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
n.i(0,new X.z(q,s,null),$.aE)
s=H.a(["Movies","Popcorn","Theaters","Screens","Silver Screens","Blockbusters","Cinemas"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,r)
t.i(0,$.c2,$.k)
t.i(0,$.cI,$.j)
t.i(0,$.bV,$.j)
t.i(0,$.cK,$.k)
r=$.l
q="The "+r+" gets a job at the "+$.aM+" Cinema. A new movie, The Lonely "
p=$.ac
q=q+p+" is coming out soon, and "
o=$.q
q=q+o+"s are already lining up. It's going to be busy as fuck. "
l="Oh shit, the "+r+" learns that The Lonely "+p+" never was delivered. The "+o+"s already lined up are close to rioting. The sound of "+$.G+"s is deafening.  A little bit of sleuthing reveals that a group of underlings stole the film and absconded to a local dungeon.  The "+r+" prepares to venture inside.    "
r=" The "+r+"  has finally bested the dungeon, and retrieved the copy of The Lonely "+p+". The "+o+"s lined up cheer and enter the theater. The Lonely "+p+" has finally begun to play. The "+r+" watches, rapt. Such a fantastic movie. The "+r+" keeps a copy of the movie as a souvenir and makes a neat item out of it."
p=this.y
t.i(0,new R.X("Premiere the Movie",!1,[new U.c(q),new U.c(l),new U.c(r)],H.a([],m),R.t(),!1,!1,new Y.bd("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.v)
n.i(0,new X.z(s,t,null),$.aE)}}
N.kt.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Feather'd Cap",H.a([$.M,$.P,$.e0],s),"So fucking pretentious.",!1,"Pupa Pan Hat")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Crown",H.a([$.Z,$.nU,$.P,$.e0],s),"Prince shit. Man. The tiara dealy.",!1,"A False Symbol of Power")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Gunpowder",H.a([$.bc,$.P],s),"Huh. I guess cause princes are destructive.",!1,"The Best Thing since The Shogun")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o,n
t=[P.H]
s=H.a(["Endings","Finales","Epilogues","Codas","Curtains","Conclusions"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,[N.ab,P.V])
t.i(0,$.c2,$.k)
t.i(0,$.c8,$.k)
t.i(0,$.cM,$.D)
r="With the closing of the curtain, the "+$.u+" has released the frogs, and yet they are nowhere to be found. The "
q=$.l
p=[U.c]
t.i(0,new R.bn("Destroy the Lack of Frogs",!1,[new U.c(r+q+" shatter space itself to reveal an entire dimension of croaking assholes. "),new U.c("The "+q+" has broken how space itself works to do the ectobiology as effciently as possible.   "),new U.c("The "+q+" has found the final frog in a crack in reality.      ")],H.a([],p),R.bA(),!1,!1,new Y.bm("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.az)
q=$.u
r="The land is a fucking mess after all the shit the "+q+" put it through, and it falls to the "
o=$.l
r=r+o+" to get it back to normal. They organize a team of "
n=$.q
t.i(0,new R.a6("Fix All The Things",!1,[new U.c(r+n+"s to start rebuilding infrastructure."),new U.c("The "+n+" economy is a fucking mess, and probably was even before the "+q+" started to fuck things up. Why would you even use "+$.ac+" as a currency? The "+o+" wastes way too much time explaining how economies work."),new U.c("The land finally appears to be in a good state. The "+o+" is wistful as they realize that they are no longer needed. ")],H.a([],p),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
this.c.i(0,new X.z(s,t,null),$.bv)}}
U.c.prototype={}
U.a1.prototype={}
R.ku.prototype={
ai:function(){return"<div class = 'feature'>QuestChain: "+this.c+", Reward: "+H.hk(this.z)+"</div>"},
n:function(a){return H.w(new H.cQ(H.hL(this),null))+": "+this.c},
gG:function(a){return this.c}}
R.X.prototype={}
R.W.prototype={}
R.a6.prototype={}
R.bn.prototype={}
E.kv.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Curtain",H.a([$.M,$.S,$.aS],s),null,!1,"Show Ender")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Cursed Sword",H.a([$.x,$.e2,$.aO,$.S,$.aA,$.aY,$.aS,$.bb,$.aF],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Megaphone",H.a([$.x,$.aV,$.a4,$.S,$.aS],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Bike Horn",H.a([$.aI,$.x,$.aV,$.bf,$.bI,$.S,$.aS],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Bacchus Wine",H.a([$.aw,$.bf,$.af,$.S,$.Z,$.aS],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Nightmare Fuel",H.a([$.U,$.S,$.aY,$.ax,$.bc,$.aS],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.H]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.ab,P.V]
q=new H.p(0,null,null,null,null,null,0,r)
q.i(0,$.pG,$.j)
q.i(0,$.cG,$.j)
q.i(0,$.cH,$.j)
q.i(0,$.cj,$.k)
q.i(0,$.bK,$.k)
q.i(0,$.bU,$.k)
q.i(0,$.bT,$.D)
q.i(0,$.de,$.k)
q.i(0,$.dS,$.j)
q.i(0,$.iQ,$.j)
q.i(0,$.eB,$.j)
q.i(0,$.nG,$.j)
q.i(0,$.fE,$.k)
q.i(0,$.dV,$.j)
p=$.l
o="The "+p+" is chilling in a "
n=$.q
o=o+n+" village when a bunch of sentient "
m=$.ac
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.u
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.c]
q.i(0,new R.W("Stop the War",!1,[new U.c(o),new U.c(k),new U.c(j),new U.a1(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.hl(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
h=$.q
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.l
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.u
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.W("Stop the Civil War",!1,[new U.c(l),new U.c(m),new U.c(i),new U.a1(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
h=this.c
h.i(0,new X.z(s,q,null),$.aJ)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.p(0,null,null,null,null,null,0,r)
s.i(0,$.cJ,$.j)
s.i(0,$.bK,$.k)
s.i(0,$.bT,$.j)
s.i(0,$.ca,$.j)
s.i(0,$.c9,$.j)
s.i(0,$.c2,$.k)
s.i(0,$.iP,$.D)
s.i(0,$.cG,$.k)
s.i(0,$.ck,$.j)
s.i(0,$.bO,$.j)
s.i(0,$.de,$.D)
p=$.G
o="The "+p+"ing and capering "
n=$.q
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.l
o=o+m+" to do a stupid "
l=$.aM
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.u
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.W("Do a Stupid Dance",!1,[new U.c(o),new U.c(k),new U.c(p),new U.a1(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
h.i(0,new X.z(q,s,null),$.aJ)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,r)
t.i(0,$.pG,$.j)
t.i(0,$.de,$.j)
t.i(0,$.bT,$.j)
t.i(0,$.ck,$.k)
t.i(0,$.c9,$.j)
r=$.l
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.q+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.u+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.W("Hate This Bullshit Land",!1,[new U.c(q),new U.c(p),new U.c(o),new U.a1(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
h.i(0,new X.z(s,t,null),$.aJ)}}
L.kw.prototype={}
Y.dq.prototype={}
Y.cf.prototype={}
Y.N.prototype={
gG:function(a){return this.c}}
Y.Y.prototype={}
Y.bd.prototype={}
Y.i8.prototype={}
Y.bm.prototype={}
Y.hi.prototype={}
Y.fJ.prototype={}
Y.hj.prototype={}
Z.kB.prototype={}
N.kC.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Domino Mask",H.a([$.M,$.P,$.e0],s),"Not satisfied with the god tier shit I guess.",!1,"This Scares Me On A Primal Level")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Archery Set",H.a([$.nN,$.P,$.e0,$.pT],s),"Like robin hood and shit.",!1,"This Is Number 69 On The List I Dont Need To Make An Equius Joke")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Gristtorrent Server",H.a([$.Z,$.aH,$.a4,$.P,$.T,$.ah],s),"Steal from the rich, give to the poor.",!1,"Shogun Coin Printer. Illegal Item.")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o,n
t=[P.H]
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Rogues"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,[N.ab,P.V])
t.i(0,$.bT,$.j)
t.i(0,$.bU,$.k)
t.i(0,$.cK,$.k)
r="The "+$.u+" cannot release the frogs since the corrupt Noble "
q=$.q
r=r+q+"s have hoarded them. The "
p=$.l
o=[U.c]
t.i(0,new R.bn("Steal the Frogs",!1,[new U.c(r+p+" organizes various common "+q+"s to help raid the frog stockpiles. "),new U.c("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.c("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bA(),!1,!1,new Y.bm("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.az)
p=$.l
q="The "+p+" learns of the extreme injustices of the "
r=$.q
q=q+r+"s who rose to power during the tyranny of "
n=$.u
t.i(0,new R.a6("Lead a Rebellion",!1,[new U.c(q+n+". This cannot stand!"),new U.c("The "+p+" forms a small band of merry "+r+"s to run raids on the "+r+"s in power.  All proceeds are given to hungry "+r+"s in need. "),new U.c("The "+r+"s who profiteered on the tyranny of the "+n+" have finally been brought to justice. Their mansions are torn down. Their wealth is given to the poor.  The "+p+" is hailed as a hero. ")],H.a([],o),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
this.c.i(0,new X.z(s,t,null),$.bv)}}
Q.kD.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Red Rose",H.a([$.aD,$.aC],s),null,!1,"Seductive Plant")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Shipping Grid",H.a([$.aD,$.F],s),"Don't let ABJ see this.",!1,"Grid of Sin")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Chocolate Bar",H.a([$.aD,$.aw],s),"Robots don't need shitty food.",!1,"Brick of Shit Coloured Nice Tasting Food")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Candelabra",H.a([$.aD,$.ax],s),null,!1,"Dying Light Holding Device, Cruelty Made of Metal")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Head Cannon",H.a([$.aD,$.bc,$.x,$.aL],s),"Fuck you for that pun, JR.",!1,null)
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Her Pitch Passions Novel",H.a([$.aG,$.F,$.aD],s),"Okay, I will give ABJ this. Troll romance is HILARIOUS.",!1,"I dont Understand This But It Makes Me Sad")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l
t=[P.H]
s=H.a(["Tea","Candles","Roses","Chocolate","Valentines","Candlelight","Gifts"],t)
H.a([],t)
r=[N.ab,P.V]
q=new H.p(0,null,null,null,null,null,0,r)
q.i(0,$.bV,$.j)
q.i(0,$.eC,$.k)
q.i(0,$.dN,$.k)
q.i(0,$.eA,$.j)
q.i(0,$.ca,$.k)
q.i(0,$.fD,$.D)
p=$.l
o="The "+p+" finds what seems to be the only place on this entire planet that isn't beautifully decorated. What's even going on? A nearby "
n=$.q
o=o+n+" explains that they ran into a bit of Artists block and just don't know how to make this area seem fancy enough.  Will the "+p+" be able to rise to meet the challenge?"
m="The "+p+" is collecting all sort of things, especially "+$.ac+"s, to decorate the Boring Section. "
n=" The "+p+" tries a few different ideas out, but finally, the Boring Section is finally as beautiful as the rest of the planet. "+n+"s immediately use it for a popular date spot. "
p=this.y
l=[U.c]
q.i(0,new R.X("Set the Mood",!1,[new U.c(o),new U.c(m),new U.c(n)],H.a([],l),R.t(),!1,!1,new Y.bd("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.v)
p=this.r
p.i(0,new X.z(s,q,null),$.aE)
q=H.a(["Romance","RomComs","Meet Cutes","True Love","Serendipity","Dates"],t)
H.a([],t)
s=new H.p(0,null,null,null,null,null,0,r)
s.i(0,$.ca,$.k)
s.i(0,$.cI,$.j)
s.i(0,$.eA,$.j)
s.i(0,$.bV,$.k)
s.i(0,$.dd,$.D)
s.i(0,$.fD,$.D)
o=$.q
n="A Romantic "+o+" approaches the "
m=$.l
s.i(0,new R.X("Plan the Date",!1,[new U.c(n+m+". They have a date coming up but have no idea what to do. Can the "+m+" help? "),new U.c("The "+m+" has the best montage of their life, helping the Romantic "+o+" pick out an outfit for their date, plan activites and learn how to cook a romantic meal. Why is everything so wonderful?   "),new U.c(" The "+m+" hides in bushes to spy on the Romantic "+o+"'s date. It's going so well! ")],H.a([],l),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
p.i(0,new X.z(q,s,null),$.aE)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,r)
t.i(0,$.fD,$.j)
t.i(0,$.bV,$.j)
t.i(0,$.dN,$.k)
t.i(0,$.iV,$.j)
t.i(0,$.eA,$.j)
t.i(0,$.ca,$.k)
t.i(0,$.dd,$.D)
r=$.l
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
o=$.q
t.i(0,new R.X("Ship All the Ships",!1,[new U.c(q+o+"s have no idea what's coming. "),new U.c("The "+r+" extends their shipping grid to include the entire "+o+" population, and begins subtly pushing to make these ships a reality. Happy "+$.G+"s ring out through the air.  "),new U.c("The "+r+" finds the ABSOLUTE BEST SHIP ever, and it's not even banned by the "+$.u+"'s stupid rules. ")],H.a([],l),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
r=$.l
o="The "+r+"  and the "
q=$.d_
t.i(0,new R.X("Flushed Shipping Dungeon",!1,[new U.c(o+q+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+r+"  and the "+q+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. ")],H.a([],l),R.dp(),!1,!1,new Y.fJ(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.az)
q=$.l
r="The "+q+"  and the "
o=$.d_
t.i(0,new R.X("Pale Shipping Dungeon",!1,[new U.c(r+o+" seem to be a good complement to each other. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+q+"  and the "+o+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. ")],H.a([],l),R.dp(),!1,!1,new Y.hi(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.az)
o=$.l
q="The "+o+"  and the "
r=$.d_
t.i(0,new R.X("Pitched Shipping Dungeon",!1,[new U.c(q+r+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+o+"  and the "+r+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. ")],H.a([],l),R.dp(),!1,!1,new Y.hj(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.az)
p.i(0,new X.z(s,t,null),$.aE)}}
T.kF.prototype={
$1:function(a){return!a.gaQ()},
$S:function(){return{func:1,args:[T.eb]}}}
T.eb.prototype={
q:function(){var t,s
t=Q.B(null,null,A.a3)
s=A.i("Perfectly Generic Object",H.a([],[G.a2]),null,!1,"Green Version of Those Sweet Yellow Candies I Loved")
C.a.h(t.b,new Q.h(s,t.k(s,1),[H.O(t,0)]))
this.db=t},
p:function(){var t,s,r,q,p,o,n,m,l
t=[P.H]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.ab,P.V]
q=new H.p(0,null,null,null,null,null,0,r)
q.i(0,$.cj,$.j)
q.i(0,$.b5,$.D)
q.i(0,$.cM,$.j)
q.i(0,$.bK,$.k)
q.i(0,$.cU,$.D)
p=$.l
o="The "+p+" learns that all of the local "
n=$.q
m=[U.c]
q.i(0,new R.a6("Revive the Consorts",!1,[new U.c(o+n+"s are dead. This is....really depressing, actually. "),new U.c("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.G+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
n=this.c
n.i(0,new X.z(s,q,null),$.bv)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.p(0,null,null,null,null,null,0,r)
s.i(0,$.dU,$.j)
s.i(0,$.dc,$.D)
s.i(0,$.dT,$.k)
s.i(0,$.c7,$.j)
s.i(0,$.bU,$.D)
p=$.l
o="The "+p+" learns that all of the local "
l=$.q
s.i(0,new R.a6("Produce the Goods",!1,[new U.c(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.c("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.G+"ing and chaos everywhere. "),new U.c("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
p=$.l
l="The "+p+" learns that all of the local "
o=$.q
s.i(0,new R.a6("Do the Teamwork",!1,[new U.c(l+o+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.c("The "+p+" notices that all of the "+o+"s are stepping on each others toes while working in the factory, sometimes literally. They need to learn the meaning of Teamwork! "),new U.c("The "+p+" grabs the "+$.d_+" and demonstrates some simple teamwork techniques. The "+o+"s begin "+$.G+"ing in amazement. The factory is saved! ")],H.a([],m),R.dp(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.az)
n.i(0,new X.z(q,s,null),$.bv)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,r)
t.i(0,$.b_,$.j)
t.i(0,$.b5,$.D)
t.i(0,$.bL,$.k)
r=$.l
q="The "+r+" learns that all of the local "
p=$.q
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
l=$.G
t.i(0,new R.X("Relax the Consorts According to Prophecy",!1,[new U.c(q),new U.c(o+l+"ing about? A prophecy?  "),new U.c("The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.oG(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.D)
l=$.l
p="The "+l+" learns that all of the local "
r=$.q
t.i(0,new R.a6("Relax the Consorts",!1,[new U.c(p+r+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.c("The "+l+" fluffs more pillows than any other Player ever has before them. "),new U.c("The "+l+" teaches the local "+r+"s to find their chill. ")],H.a([],m),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
n.i(0,new X.z(s,t,null),$.bv)},
n:function(a){return this.b},
O:function(a,b,c,d){var t=this.b
this.d=t
this.e=new X.fA("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Classes/"+t+".xml",!1,H.a([],[X.fo]),H.a([],[M.ey]))
this.q()
this.p()
t=this.f
if($.$get$ho().a1(t))H.bo("Duplicate class id for "+this.n(0)+": "+t+" is already registered for "+J.bX($.$get$ho().l(0,t))+".")
$.$get$ho().i(0,t,this)},
gG:function(a){return this.b},
gaq:function(){return this.c},
gaQ:function(){return this.x}}
E.kG.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Sage's Robe",H.a([$.M,$.P,$.b1,$.T,$.a0,$.Z],s),"So sagey. Needs a beard or some shit, though.",!1,"Pompous Asshole Robes")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Peer Reviewed Journal",H.a([$.F,$.P,$.aG,$.T],s),"I guess this is p well reviewed.",!1,"Book Containing More Corrections Than Actual Content")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Guru Pillow",H.a([$.M,$.P,$.h1,$.T],s),"Huh. What. Was JR thinking. When they made this item?",!1,"Headrest For Smart People")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o
t=[P.H]
s=H.a(["Books","Libraries","Tomes","Pages","Advice","Scholarship","Expertise"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,[N.ab,P.V])
t.i(0,$.ez,$.k)
t.i(0,$.b5,$.k)
t.i(0,$.dW,$.j)
t.i(0,$.b_,$.D)
t.i(0,$.bY,$.j)
r="The "+$.u+" has blocked access to the books for the duration. The "
q=$.l
p=[U.c]
t.i(0,new R.bn("Understand the Frogs",!1,[new U.c(r+q+" has no choice but to go get some fresh air for a change and start collecting frogs. The "+q+" thinks hard and figures out the best way to organize the "+$.q+"s to start collecting frogs. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bA(),!1,!1,new Y.bm("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.az)
q="Now that the "+$.u+" is defeated, it is time to begin recovery efforts. The "
r=$.q
q=q+r+"s ask the "
o=$.l
t.i(0,new R.a6("Be the Sage",!1,[new U.c(q+o+" what they should do first.  When they hesitate, the "+r+"s begin "+$.G+"ing in distress. Desparate, the "+o+" confidently advises them to begin cleaning up rubble. The "+r+"s seem satisfied.  The "+o+" absconds into a nearby library to read up on how in Paradox Space they can figure out what ACTUALLY needs done. "),new U.c("The "+o+" has read up on disaster recovery and helps the "+r+"s plan the next season's crops, build infrastructure and even set up psychological counseling center for those in need. Every moment they aren't in public they are devouring tomes in an effort to stay one step ahead of everything."),new U.c("Finally, recovery efforts are complete. The "+o+" has developed quite the reputation as the person to go to for advice and knowledge. ")],H.a([],p),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
this.c.i(0,new X.z(s,t,null),$.bv)}}
Y.kH.prototype={}
Y.kI.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Walking Stick",H.a([$.U,$.P,$.cO],s),"I guess it helps scouts walk for long periods of time? And not let anybody catch up.",!1,"Support Stick of Old And Injured")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Adorable Girlscout Beret",H.a([$.M,$.P,$.q0,$.T,$.Z],s),"Okay, legit, ABJ's hat is amazing.",!1,"ABJs Hat")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Map",H.a([$.F,$.P,$.T],s),"I guess Scouts update this on their own? Untread ground and all.",!1,"Kyoto Overcoats Spacemap")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Compass",H.a([$.x,$.P,$.T,$.a0],s),"Magnets man, how do they work.",!1,"Shoguns Navigation Box")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p
t=[P.H]
s=H.a(["Maps","Trails","Compasses","Wilderness","Trails"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,[N.ab,P.V])
t.i(0,$.cL,$.j)
t.i(0,$.bL,$.j)
t.i(0,$.b5,$.j)
t.i(0,$.bO,$.D)
t.i(0,$.b_,$.D)
r="Now that the "+$.u+" has been defeated, the planet has really opened up. The "
q=$.l
p=[U.c]
t.i(0,new R.a6("Blaze a Trail",!1,[new U.c(r+q+" eagerly begins to explore uncharted territory. "),new U.c("The "+q+" takes in the sight of a glorious waterfall. They might be the only thing in living memory to see it. It's amazing. They continue exploring their land."),new U.c("Deep in a forgotten forest, in a temple covered in golden "+$.q+"s, the "+q+" finds a treasure chest with a fraymotif inside. Travel is its own reward, but it's nice to have more tangible ones, too.")],H.a([],p),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
q="The "+$.u+" has released the frogs from their vine tangled prisons. The land gets just a little bit less wild. The "
r=$.l
t.i(0,new R.bn("Find the Frogs",!1,[new U.c(q+r+" is given a map to where all the frogs are and is told to get going. "),new U.c("The "+r+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+r+" knows they won't make a mistake."),new U.c("Following the last step in the guide booke, the "+r+" finds the Final Frog. Luckily, a "+$.q+" "+$.G+"s in time to stop them.   ")],H.a([],p),R.bA(),!1,!1,new Y.bm("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.az)
this.c.i(0,new X.z(s,t,null),$.bv)}}
L.kJ.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Scroll",H.a([$.F,$.P,$.T],s),"Scribe Shit",!1,"Rolled Up Picture of JR")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Ink Pot",H.a([$.aX,$.P,$.ah,$.T],s),"You could probably censor shit with this.",!1,"Black Liquid That Tastes Awful")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Blank Book",H.a([$.F,$.P,$.aG,$.T,$.ah,$.Z],s),"Fill it in yourself I guess.",!1,"Dick Drawing Practice Apparatus")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o
t=[P.H]
s=H.a(["Quills","Feathers","Pens","Ink","Paper"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,[N.ab,P.V])
t.i(0,$.iM,$.j)
t.i(0,$.b5,$.j)
t.i(0,$.bY,$.j)
t.i(0,$.b_,$.k)
t.i(0,$.c8,$.k)
r="The "+$.u+" has caused all those fucking bird underlings to finally drop the frogs. The "
q=$.l
p=[U.c]
t.i(0,new R.bn("Understand the Frogs",!1,[new U.c(r+q+" thinks hard and figures out the best way to start collecting them. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bA(),!1,!1,new Y.bm("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.az)
q="Now that the "+$.u+" has been taken care of, the "
r=$.l
q=q+r+" discovers a large library of "
o=$.q
t.i(0,new R.a6("Restore the Library",!1,[new U.c(q+o+" documents and books in its lair. They were not taken care of to say the least, and are badly in need of repair."),new U.c("The "+r+" sits in a small room, repairing bindings, glueing pages, and copying and replacing pages outright where necessary.  The work is strangely soothing."),new U.c(" The final book has been restored.  The local "+o+"s dedicate a library in the "+r+"'s honor and cherish their legacy now returned to them.")],H.a([],p),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
this.c.i(0,new X.z(s,t,null),$.bv)}}
S.kL.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Cueball",H.a([$.dg,$.jo,$.P,$.aa,$.ay,$.Z],s),"Don't listen to this asshole.",!1,"A Worthless White Ball")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Crystal Ball",H.a([$.dg,$.pZ,$.P,$.aU],s),"Seer shit.",!1,"A Worthless Clear Ball")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Binoculars",H.a([$.aX,$.P,$.x],s),"Seer shit.",!1,"Long Distance Perversion Apparatus")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Blindfold",H.a([$.pV,$.P,$.b1],s),"May as well skip the whole 'going blind' part of the deal.",!1,"Long Distance Perversion Apparatus")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o
t=[P.H]
s=H.a(["Mines","Holes","Tunnels","Burrows","Nests"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,[N.ab,P.V])
t.i(0,$.pJ,$.j)
t.i(0,$.iO,$.j)
t.i(0,$.pH,$.j)
t.i(0,$.ck,$.k)
r="Now that the "+$.u+" has been defeated, the land is really starting to open up. The "
q=$.l
r=r+q+" finds a tunnel filled with Blind "
p=$.q
o=[U.c]
t.i(0,new R.a6("Be the King",!1,[new U.c(r+p+"s who could use some guidance on where to place new tunnels. The "+q+" agrees to see what they can do. "),new U.c("The "+q+" guides the Blind "+p+"s to the best place to lay a new tunnel. You kind of wonder how they got along up until now."),new U.c("The Blind "+p+" have finally finished the tunnel.  Not only did it not collapse, killing all the diggers, but there was grist and boondollars found during excavation.   The happy "+p+"s give the "+q+" some as a reward. ")],H.a([],o),R.t(),!1,!1,new Y.cf("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
q="The "+$.u+" has unblocked the tunnels containing the vast majority of the frogs. The "
p=$.l
t.i(0,new R.bn("Understand the Frogs",!1,[new U.c(q+p+" thinks hard and figures out the best way to organize the "+$.q+"s to start collecting frogs. "),new U.c("The "+p+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+p+" has finally figured out how to breed the final frog.      ")],H.a([],o),R.bA(),!1,!1,new Y.bm("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.az)
p=$.l
q="The "+p+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+p+" organizes a group of "
r=$.q
t.i(0,new R.a6("Work With Exiles",!1,[new U.c(q+r+"s to carry everything out."),new U.c("The "+p+" instructs a group of "+r+"s to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.c("At the "+p+"s request, a solitary "+r+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],o),R.t(),!1,!1,new Y.cf("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
r="A group of underlings are still making trouble, even after the defeat of the "+$.u+". The "
p=$.l
r=r+p+" begins planting rumors of a huge "
q=$.ac
t.i(0,new R.a6("Have the Keikaku",!1,[new U.c(r+q+" Treasure in the center of a still active dungeon. "),new U.c("As planned, the group of underlings moves into the still active dungeon, hopeing to find the "+q+" Treasure.  In a dramatic twist no one could possibly see coming, it turns out the "+p+" was the treasure all along. The underlings are soundly defeated and the land is safe.")],H.a([],o),R.t(),!1,!1,new Y.cf("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
this.c.i(0,new X.z(s,t,null),$.bv)}}
L.kO.prototype={}
T.bE.prototype={
ai:function(){return"<div class = 'feature'>Smell "+H.w(this.b)+", Quality: "+H.w(this.a)+"</div>"}}
O.kQ.prototype={}
N.kR.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Fiduspawn Plush",H.a([$.bM,$.M,$.b1],s),"Hopefully just a replica.",!1,"Copyrighted Yellow Rat Plush")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Teddy Bear",H.a([$.bM,$.M,$.b1],s),null,!1,"Cuddle Bear")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Dice",H.a([$.nS,$.aH],s),null,!1,"D113")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Pigeon",H.a([$.bg,$.ay,$.b6,$.b0,$.bb,$.o0],s),"Better fucking tell JR. Ironic pigeons and all.",!1,"Bird of Impending Doom")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Cat Ears",H.a([$.M,$.b1,$.bM],s),"Fuck. Cat. Trolls.",!1,"Weeb Shit")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Religious Text",H.a([$.aG,$.F],s),null,!1,"Religious Book Containing No Shogun, A Bad Book")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Psychology Book",H.a([$.aG,$.F],s),null,!1,"How to Guarantee Your Message Gets Pinned The Book")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Therapy Couch",H.a([$.b1,$.M],s),null,!1,"Giant Problem Absorbing Couch")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("FLARP Manual",H.a([$.aG,$.F,$.T],s),"Fuck. Cat. Trolls. Though I guess she never FLARPED.",!1,"Book of Nerd Natural Selection")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.H]
s=H.a(["Couches","Therapy","Analysis","Cigars","Psychology"],t)
H.a([],t)
r=[N.ab,P.V]
q=new H.p(0,null,null,null,null,null,0,r)
q.i(0,$.cV,$.D)
q.i(0,$.b_,$.k)
q.i(0,$.c8,$.j)
q.i(0,$.bY,$.k)
p=$.l
o="The "+p+" finds a help wanted sign near a strange booth. Apparently the local "
n=$.q
m=[U.c]
q.i(0,new R.X("The Therapist is IN",!1,[new U.c(o+n+"s are in need of a therapist? The "+p+" decides to try it out! "),new U.c("Huh, somehow all the "+n+"'s problems end up being about childhood trauma involving "+$.aM+" or "+$.ac+".  The "+p+" is getting really good at helping them out. "),new U.c("A line of "+$.G+"ing "+n+" extends out to the horizon. The "+p+" is the most popular therapist on the planet! ")],H.a([],m),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
p=this.r
p.i(0,new X.z(s,q,null),$.aE)
q=H.a(["Meditation","Chants","Worship","Altars","Hymns","Chapels","Priests","Angels","Religion"],t)
H.a([],t)
s=new H.p(0,null,null,null,null,null,0,r)
s.i(0,$.cV,$.D)
s.i(0,$.b_,$.j)
s.i(0,$.c8,$.j)
s.i(0,$.nB,$.j)
s.i(0,$.ca,$.j)
s.i(0,$.nI,$.j)
s.i(0,$.bY,$.k)
o=$.l
n="The "+o+" wanders into an incredibly calm area of their land. It is filled with chanting and "
l=$.G
n=n+l+"ing "
k=$.q
n=n+k+"s. Apparently they are monks contemplating the vastness of the Vast Croak. The "+o+" joins them. "
j="While meditating with the "+k+" monks, the "+o+" has come to a startling realization, the vast croak is related to "
i=$.aM
s.i(0,new R.X("Meditate On Frogism",!1,[new U.c(n),new U.c(j+i+"-ness. How could they miss this?"),new U.c(" The "+o+" begins telling all the "+k+" monks about how "+i+"-ness relates to the Vast Croak. The monks begin "+l+"ing in amazement, this could revolutionize Frogism for generations!")],H.a([],m),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
p.i(0,new X.z(q,s,null),$.aE)
s=H.a(["Roleplaying","FLARPS","Dungeons","Dragons","Tabletops","Dice"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,r)
t.i(0,$.c7,$.D)
t.i(0,$.cI,$.j)
t.i(0,$.bL,$.j)
t.i(0,$.cK,$.j)
t.i(0,$.dR,$.j)
r=$.l
q="The "+r+" wanders into an entire crowd of "
o=$.q
q=q+o+"s dressed in authentic style fantasy armor. What is going on? The nearest one stops "+$.G+"ing long enough to explain that it's time for Paradox Space's biggest FLARP convention. The "+r+" happily joins the RP."
n="The "+r+"'s character in the FLARP is nearly maximum level. This is so much fun! Suddenly, a group of underlings attack the crowd. Confusion reigns as the "+o+"s think it's somehow related to FLARP at first and don't fight back seriously. It is up to the "+r+" to save the day! All that RP practice surprisingly pays off. They win easily!   "
r="The FLARP is finally coming to an end. All the "+o+"s agree that it is the best session in living memory and celebrate how the "+r+" kept it from becoming a tragedy."
o=this.y
t.i(0,new R.X("Protect the FLARPers",!1,[new U.c(q),new U.c(n),new U.c(r)],H.a([],m),R.t(),!1,!1,new Y.bd("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.v)
p.i(0,new X.z(s,t,null),$.aE)}}
M.bh.prototype={
ai:function(){return"<div class = 'feature'>Sounds Like "+H.w(this.b)+", Quality: "+H.w(this.a)+"</div>"}}
N.kS.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Frog Statue",H.a([$.aI,$.aB,$.S],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Frog Costume",H.a([$.M,$.S],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Nuclear Reactor",H.a([$.bC,$.T,$.a4,$.S],s),null,!1,"A Representation of My Hatred for Everything")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Telescope",H.a([$.x,$.aX,$.T,$.S],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Green Sun Poster",H.a([$.F,$.S,$.nV,$.Z],s),"Huh.",!1,"Sauce Sun Poster")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m
t=$.l
s=[P.H]
r=H.a(["Wherever the "+t+" goes, they find a "+$.q+" yammering on and on about FROGS. It only makes a little more sense than when they say nothing but "+$.G+".","The "+t+" has found several frogs in various states of not-usefulness. Apparently "+$.u+" is somehow to blame?","The "+t+" wonders why there are so many temples covered in frog iconography in this weird land."],s)
t=$.l
q=H.a(["The "+t+" discovers some tiny ectobiology lab equipment. Oh! Apparently it's for breeding frogs?  They play around with it a bit with what frogs they've managed to collect. It looks like they can somehow...combine frogs? Aww, look how cute that tadpole is!  ","The "+t+"'s server player deploys some weird equipment. After fiddling with it a bit, the "+t+" learns they can zap frogs into it and make baby frogs. How cute! ","A wizened "+$.q+" shows the "+t+" an ancient temple containing tiny ectobiology equipment. The pictures in the temple depect two frogs being zapped to it, and producing a cute little tadpole."],s)
t="A wise old "+$.q+" tells the "
p=$.l
t=t+p+" that they must negotiate with "
o=$.u
n=H.a([t+o+" to release the vast majority of the frogs. Apparently this is called 'lighting the forge'? ","A temple shows a huge snake monster, probably the "+o+" locking away all the frogs.","A "+o+" minion tells the "+p+" that if they want to find the best frogs, they are going to have to face the "+o+"."],s)
o=$.l
p="The "+o+" meets with "
t=$.u
m=H.a([p+t+". They speak in a langauge no one else can understand, and prove their worth. The forge is lit. The frogs are free.","The "+t+" offers the "+o+" an impossible Choice. After some deliberation, the "+o+" decides that it can't be done. The "+t+" sighs, and agrees to Light the Forge.","The "+t+" is a dismissive asshole, but agrees to light the forge. Wow, the "+o+" almost wishes that they WERE supposed to fight. "],s)
o=H.a(["Frogs"],s)
H.a([],s)
t=new H.p(0,null,null,null,null,null,0,[N.ab,P.V])
t.i(0,$.ck,$.D)
t.i(0,$.nD,$.j)
s=[U.c]
t.i(0,new R.W("Light the Forge",!1,[new U.c(r[0]),new U.c(q[0]),new U.c(n[0]+" "+m[0])],H.a([],s),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.az)
t.i(0,new R.W("Light the Forge",!1,[new U.c(r[1]),new U.c(q[1]),new U.c(n[1]+" "+m[1])],H.a([],s),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.az)
t.i(0,new R.W("Light the Forge",!1,[new U.c(r[2]),new U.c(q[2]),new U.c(n[2]+" "+m[2])],H.a([],s),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.az)
t.i(0,new R.W("Light the Forge",!1,[new U.c(r[2]),new U.c(q[0]),new U.c(n[1]+" "+m[0])],H.a([],s),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.az)
t.i(0,new R.W("Light the Forge",!1,[new U.c(r[2]),new U.c(q[1]),new U.c(n[1]+" "+m[2])],H.a([],s),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.az)
t.i(0,new R.W("Light the Forge",!1,[new U.c(r[0]),new U.c(q[1]),new U.c(n[2]+" "+m[0])],H.a([],s),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.az)
p=$.l
t.i(0,new R.bn("Breed the Frogs, But Be Boring About It",!1,[new U.c("The "+p+" collects all sorts of frogs. Various "+$.q+"s 'help' by "+$.G+"ing up a storm. "),new U.c("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.c("The "+p+" has found the final frog.   Universe Tadpole all ready.   ")],H.a([],s),R.t(),!1,!1,new Y.bm("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
this.c.i(0,new X.z(o,t,null),$.A3)}}
U.ae.prototype={
gG:function(a){return this.c+"kind"},
$isbk:1,
$asbk:function(){return[A.a3]}}
M.kV.prototype={
$asd9:function(){return[O.hh]},
$ascl:function(){return[O.hh,P.cC]}}
U.kW.prototype={}
R.l7.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Meddler's Guide",H.a([$.aG,$.P,$.F,$.bf,$.Z,$.aQ],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("First Aid Kit",H.a([$.aX,$.P,$.aQ],s),"Heals here.",!1,"Anti-Pain Box")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=$.P
r=A.i("Cloud in a Bottle",H.a([r,r,$.be],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Fairy Wings",H.a([$.a0,$.P,$.aU,$.aC,$.F],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o
t=[P.H]
s=H.a(["Springs","Water","Pools","Reflection","Contemplation","Fountains","Wellsprings","Geysers"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,[N.ab,P.V])
t.i(0,$.c8,$.j)
t.i(0,$.b_,$.j)
t.i(0,$.cL,$.k)
t.i(0,$.dW,$.k)
t.i(0,$.nA,$.k)
t.i(0,$.cU,$.k)
t.i(0,$.fB,$.k)
t.i(0,$.nH,$.k)
r=$.l
q="The "+r+" decides to take a break after defeating "+$.u+" and returns home. Immediately after opening the front door, they\u2019re buried in an avalanche of "
p=$.q
o=[U.c]
t.i(0,new R.a6("Heal the Timeline",!1,[new U.c(q+p+"s. Crawling their way out, the "+r+" sees the "+p+"s are all using a copy of the "+r+"\u2018s time travel device and more of them are popping in and out from other points in time. If left unchecked, they\u2019ll probably create way too many unstable time loops to be good for the session."),new U.c("The "+r+" does some time traveling to investigate when the "+p+"s get time machines to stop any more "+p+"s from getting them. They find a time when their house is suddenly filled to the brim with "+p+"s and then later they all seemingly vanish with no evidence of time traveling "+p+"s at any other time. The "+r+" realizes that means the "+p+"s are getting their time machines in the same timeframe as when they are popping in and out of time. Which means if the "+r+" wants to stop the "+p+"s from causing time travel messes, they\u2019ll need to squeeze their way through the "+p+" filled house."),new U.c("Traveling back to the time they were originally in, the "+r+" gets ready to take the plunge into a fuckton of "+$.G+"ing "+p+"s. They slowly crawl and squeeze their way through; cursing the dumb shit they have to do to fix time problems. After a couple of agonizing minutes, they finally make their way to their alchemiter, where they find a bunch of "+p+"s are wasting grist making copies of the "+r+"\u2018s time machine. The "+r+" chases them away from the alchemiter, and then spends the next four hours slowly going through the house, confiscating time machines while also making sure they don\u2019t accidently confiscate a time machine they already confiscated and create a time paradox. Eventually all the time machines are taken and all the "+p+" s have been given a stern talking to. The "+r+" is more than done with their \u2018break\u2019.")],H.a([],o),R.qK(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
r=$.q
p="A handsome "+r+" is scheduled to be wed to a beautiful maiden. Instead, he keeps seeing visions of an ethereal "+r+", and runs away to be with her a clearing in the woods filled with bubbling springs.  The "
q=$.l
t.i(0,new R.a6("Be The Sylph",!1,[new U.c(p+q+" is unimpressed. "),new U.c("The "+q+" alchemizes 'The Sylph's Scarf'. Huh. Apparently it's a reference to some sort of ballet? A "+r+" crone assures the "+q+" that it will stop the handsome "+r+" from seeing weird visions that make him run into the woods, though."),new U.c("The "+q+" gives the handsome "+r+" the 'Sylph's Scarf'. He immediately begins weeping that the ethereal "+r+" is dead. He is inconsolable. Holy shit, ballets about Sylphs are kinda dark.")],H.a([],o),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
r=$.q
q="The "+r+"s are so stressed after all that shit with the "+$.u+". They are yelling and "+$.G+" at each other over the slightest of insults. The "
p=$.l
t.i(0,new R.a6("Relax the Consorts",!1,[new U.c(q+p+" decides that what they really need is to chill the fuck out. "),new U.c("The "+p+" organizes a spa day for the "+r+"s in one of the land's many, many bodies of water. The sound of the water is so relaxing, it's like it melts the worries right off."),new U.c("The "+r+"s are back to their normal selves.  Only one fight breaks out all week, and really, that asshole "+r+" deserved what was coming to him. Everything is doing pretty good, thanks to the "+p+". ")],H.a([],o),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
p="The "+$.u+" has allowed the water to recede enough to form shallow pools for the frogs. The water is muddy and silty until the "
r=$.l
p=p+r+" purifies the pools "
q=$.q
t.i(0,new R.bn("Purify the Frogs",!1,[new U.c(p),new U.c("The "+q+"s are ectobiologizing....VERY wrong frogs. The "+r+" goes after them and heals the deformities, then shows the "+q+"s how to do it right. "),new U.c("By the time the final frog is found, it is dead.   Calmly, the "+r+" uses the ectobiological equipment to access it in the past, and alchemizes it's offspring. the    ")],H.a([],o),R.bA(),!1,!1,new Y.bm("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.az)
r="The defeat of the "+$.u+" has some unforseen consequences, including the tainting of the water for the majority of the land. The "
q=$.q
r=r+q+"s seem to have figured out a solution in the short term, but the "
p=$.l
t.i(0,new R.a6("Purify the Water",!1,[new U.c(r+p+" resolves to bug and fuss and meddle until things are fixed the right way. "),new U.c("So far, the "+p+" hasn't had much luck getting "+q+"s to build a water purifying facility.  They are content just boiling their water. 'It's not hard', they say. It's so frustrating that the "+p+" knows they can help them but the "+q+"s just will NOT cooperate. "),new U.c("The "+p+" has finally accepted that some people just don't want to be helped. As they make peace with this, a mysterious glow emerges from their chest.  The water of the land matches this glow, and the water is purified through the power of "+$.aM+". Huh. Okay then.")],H.a([],o),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
this.c.i(0,new X.z(s,t,null),$.bv)}}
D.la.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Robot",H.a([$.a4,$.x,$.ay,$.T],s),"An obviously superior choice.",!1,"ShogunBot")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Circuit Board",H.a([$.a4,$.x],s),"This better be going INTO a robot and not out of one.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Datastructures for Assholes",H.a([$.a4,$.F],s),"Sounds like the perfect book for you.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("~ATH - A Handbook for the Imminently Deceased ",H.a([$.a4,$.F,$.aF,$.aG],s),"Such a pointless book.",!1,"Huge Fucking Book for Goddamn Lifeless Nerds")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("3-D Printer",H.a([$.aH,$.a4,$.x],s),null,!1,"3-D Shitpost Maker")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Virus on a USB Stick",H.a([$.q4,$.x],s),"Fuck you. You fucking DROP that.",!1,"Make a Computer Shitpost Itself to Death on A Stick")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Wrench",H.a([$.o7,$.x,$.aa],s),"Make sure to use it build a dope af robot.",!1,"The Tool of Judgement for Machines")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Computer",H.a([$.a4,$.x],s),"Computers are good. That is all there is to say on the matter.",!1,"JRs Computer, Broken yeah but still")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.H]
s=H.a(["Circuits","Computers","Lightning","Metal","Glass","Machines","Complexity"],t)
H.a([],t)
r=[N.ab,P.V]
q=new H.p(0,null,null,null,null,null,0,r)
q.i(0,$.fG,$.k)
q.i(0,$.dO,$.j)
q.i(0,$.dU,$.j)
q.i(0,$.bU,$.D)
p=$.l
o="The "+p+" learns from their "
n=$.q
o=o+n+"s about the great "
m=$.aM
n=o+m+" MACHINE, which used to keep the "+n+"s safe before "+$.u+" destroyed it. "
o="The "+p+" searches for the "
l=$.ac
k=[U.c]
q.i(0,new R.X("Fix the Machine",!1,[new U.c(n),new U.c(o+l+"s needed to fix the "+m+" MACHINE, finding them scattered in dungeons across the land. "),new U.c("The "+p+" finds the last "+l+" needed, finishes a boss fight, and slots it into the "+m+" MACHINE, restoring it to its ancient glory.  ")],H.a([],k),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
m=$.l
l="The "+m+" is approached by a "
p=$.q
p=l+p+"scientist with a complex problem: The underlings have started using a complex code to stage their attacks, and the "+p+"s are at a loss as to what to do. The "+m+" agrees to help decipher the puzzle. I mean, look at the little guy "
l=$.G
q.i(0,new R.X("Decipher the Enigma",!1,[new U.c(p+l+"ing, how could they not? "),new U.c("The "+m+" spends an unreasonable amount of time looking for ways through the code. Apparently, "+$.u+" is responsible for the code, and he changes it every day. Each underling group carries a machine that lets them decipher the messages, but without the days settings, the machine is useless."),new U.c("The "+m+" realizes that this is basically a rip off of the enigma code, so constructs a computer using the lands "+$.ac+" to decipher the code. The code is broken, and the consorts celebrate with a huge party of "+l+"s ")],H.a([],k),R.e9(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
l=this.r
l.i(0,new X.z(s,q,null),$.aE)
q=H.a(["Factories","Manufacture","Assembly Lines","Gears","Unions"],t)
H.a([],t)
s=new H.p(0,null,null,null,null,null,0,r)
s.i(0,$.dU,$.j)
s.i(0,$.dc,$.D)
s.i(0,$.dT,$.k)
s.i(0,$.c7,$.j)
s.i(0,$.bU,$.D)
p=$.l
o="The "+p+" learns that all of the local "
n=$.q
s.i(0,new R.X("Produce the Goods",!1,[new U.c(o+n+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.c("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+p+" is training the local "+n+"s to operate the manufacturing equipment. There is "+$.G+"ing and chaos everywhere. "),new U.c("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+n+"s name a national holiday after the "+p+". ")],H.a([],k),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
p=$.l
n="The "+p+" finds two groups of "
o=$.q
n=n+o+"s screaming and "
m=$.G
n=n+m+"ing at each other. Apparently the first group of "+m+"s are workers at a local "
j=$.ac
n=n+j+" factory and want to be paid more? The second group of "+o+"s claim they don't work hard enough for a raise.  "
m="The "+p+" arranges for the worker "+o+"s to meet with the factory manager "+o+"s individually and discuss their complaints. The "+p+" is getting a headache from all the "+m+"ing, but at least progress is being made."
j="The "+p+" is shaking hands for a "+o+" newspaper, posing in front of the now bustling "+j+" factory. The workers are paid a fair wage, and several ways to make the factory work more efficiently has left the managers happy, too. "
o=this.y
s.i(0,new R.X("Stop the Dispute",!1,[new U.c(n),new U.c(m),new U.c(j)],H.a([],k),R.cZ(),!1,!1,new Y.bd("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.v)
l.i(0,new X.z(q,s,null),$.aJ)
s=H.a(["Robots","Androids","Cyborgs","Machines","AIs","Automatons","Droids","Bots"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,r)
t.i(0,$.fG,$.D)
t.i(0,$.dO,$.j)
t.i(0,$.dU,$.j)
t.i(0,$.bU,$.D)
r=$.l
q="The "+r+" learns from a mysterious "+$.q+" in a black trenchcoat about a great "
p=$.aM
q=q+p+" MACHINE, said to possess vast database about the game. Perhaps it knows something about "
o=$.u
t.i(0,new R.X("Learn the Secret",!1,[new U.c(q+o+"? "),new U.c("The "+r+" searches for clues about the "+p+" MACHINE. In a big eureka moment they realize where they had been mistaken, the "+p+" MACHINE isn't some device, or a computer, it's the entire fucking planet!  "),new U.c("At last, the "+r+" has found a cave with a terminal to the "+p+" MACHINE. <b>TELL ME ABOUT "+o+".</b>, they type. <b><i>ERROR: TERM '"+o+" NOT FOUND. DID YOU MEAN 'DENIZEN' Y/N?</b></i>' Breathless, the "+r+" types '<b>Y</b>.   <b><i>131313 ENTRIES FOUND FOR DENIZEN? BUT THAT IS BORING. WOULD YOU INSTEAD LIKE TO LEARN ABOUT CAKE? Y/N?</b></i>'. The "+r+" spends all their free time perusing the database. The AI has a surprisingly subtle sense of humor, and every third response is a remarkably tasty cake recipe. ")],H.a([],k),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
l.i(0,new X.z(s,t,null),$.aE)}}
V.lb.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Lighter",H.a([$.x,$.ax],s),"Don't let ABJ know you have this.",!1,"ABJs Birthday Gift")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Siberia Poster",H.a([$.F,$.ba],s),null,!1,"Poster of the Shoguns Birthplace")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Nuclear Winter Poster",H.a([$.F,$.ba,$.bC],s),null,!1,"Shoguns Dream as a Poster")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Doomsday Device",H.a([$.x,$.aF,$.bC,$.b7,$.bb],s),"Oh god, who would fucking trust YOU with thi?",!1,"Shoguns UNO Reverse Card")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Juggalo Poster",H.a([$.F,$.q9],s),null,!1,"False God Poster")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Fancy Watch",H.a([$.x,$.b3,$.b7],s),null,!1,"Shoguns Watch")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Magnificent Crown",H.a([$.x,$.b3,$.b7],s),null,!1,"The Shoguns Crown")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Bitching Clothes",H.a([$.M,$.e0,$.b7],s),"Just wear roboclothes. Never need another set.",!1,"Shoguns Godtier Outfit")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Ceramic Pork Hollow",H.a([$.br,$.b3],s),"...",!1,"Shoguns Old Porkhollow")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Shit Ton of Guns",H.a([$.x,$.o1,$.aL,$.b7],s),"You are one high quality sociopath.",!1,"Dynamos Armament")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Sniper Rifle",H.a([$.x,$.o5,$.aL,$.b7],s),"What. The. Hell.",!1,"Long Range Rooty Tooty Point And Boomy")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("AK-47",H.a([$.x,$.nY,$.aL,$.b7],s),"What is it with you and guns.",!1,"100% Genuine Soviet Kalashnikov")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("IED",H.a([$.jk,$.aA,$.x,$.bc,$.b7],s),"You are probably going to blow yourself up, asshole.",!1,"Shitpost Bomb")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Idiots Guide To Being An Asshole",H.a([$.F,$.bf,$.aG],s),"Oh god, this is HILARIOUS, it's the PERFECT book for you.",!1,"Shoguns Guide to Shitposting")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Bike Horn",H.a([$.bI,$.x,$.aV,$.bf],s),"I hear flesh bags keep gtting scared by these. I don't get it.",!1,"Bike Mounted Pain Box")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Matches",H.a([$.U,$.ax],s),"Don't let ABJ get this.",!1,"ABJs First Arsonist Set")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l
t=[P.H]
s=H.a(["Fire","Arson","Blaze","Burning","Flames"],t)
H.a([],t)
r=[N.ab,P.V]
q=new H.p(0,null,null,null,null,null,0,r)
q.i(0,$.c2,$.k)
q.i(0,$.cI,$.j)
q.i(0,$.cN,$.j)
q.i(0,$.eB,$.j)
q.i(0,$.iU,$.j)
q.i(0,$.cK,$.k)
p=$.l
o=[U.c]
q.i(0,new R.X("Start the Fires",!1,[new U.c("The "+p+" finds a bowl filled with colorful green powder in a dungeon, next to a locked door with green, blue and red gems inset in the middle. After some poking and proding, they do what comes naturally and start a small fire. The bowl blazes green. A green gem lights up on the locked door. Huh. "),new U.c("The "+p+" has been wandering around, starting random fires, when they finally manage to burn someting that blazes blue. When they go back to check, the dungeon door has both green and blue symbols lit up.  "),new U.c(" The "+p+" has finally managed to get a bright red fire going. They rush back to the dungeon to see all three symbols lit up. They enter and get a fat stack of boonies for beating the dungeon. ")],H.a([],o),R.t(),!1,!1,new Y.cf("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
p=this.r
p.i(0,new X.z(s,q,null),$.aE)
q=H.a(["Treasure","Gold","Wealth","Hoards","Coins","Money","Bling"],t)
H.a([],t)
s=new H.p(0,null,null,null,null,null,0,r)
s.i(0,$.c2,$.k)
s.i(0,$.cI,$.j)
s.i(0,$.bV,$.j)
s.i(0,$.cK,$.k)
n=$.l
m="The "+n+" learns that there is an entire planet of suckers, er, you mean "
l=$.q
s.i(0,new R.X("All About the Boonies, Baby",!1,[new U.c(m+l+"s with boonies just burning a hole in their pockets. This needs to be fixed, ASAP."),new U.c("The "+n+" starts running a con job, you mean, ENTERTAINMENT VENUE, where they show the various gullible, you mean discerning "+l+"s various wonders from around Paradox Space. Marvel at the two headed "+$.ac+" underling. Tremble at the fearsome "+$.aM+" "+l+".   "),new U.c(" The "+n+" finally has enough boonies to get that fraymotif they've had their eye on.  Good thing, too, because the "+l+"s seem to finally be mostly out of cash. Oh well. ")],H.a([],o),R.t(),!1,!1,new Y.cf("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
p.i(0,new X.z(q,s,null),$.aE)
s=H.a(["Decay","Rot","Death","Mayhem","Gas","Wrath"],t)
H.a([],t)
q=new H.p(0,null,null,null,null,null,0,r)
q.i(0,$.cj,$.j)
q.i(0,$.b5,$.D)
q.i(0,$.cM,$.j)
q.i(0,$.bK,$.k)
q.i(0,$.cU,$.D)
q.i(0,$.cG,$.D)
n=$.l
m="The "+n+" learns that all of the local "
l=$.q
q.i(0,new R.X("Revive the Consorts",!1,[new U.c(m+l+"s are dead. This is....pretty cool, actually. "),new U.c("The "+n+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+n+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.G+"ing.  The dead "+l+"s have risen and want to be part of "+n+"'s Necromantic Army.   ")],H.a([],o),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
p.i(0,new X.z(s,q,null),$.aE)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Hate"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,r)
t.i(0,$.bT,$.j)
t.i(0,$.cG,$.D)
t.i(0,$.dS,$.j)
t.i(0,$.iQ,$.j)
t.i(0,$.bU,$.k)
t.i(0,$.dV,$.k)
s=$.l
r="The "+s+" finds a crowd of "
n=$.G
r=r+n+"ing "
m=$.q
r=r+m+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+m+"s in charge. The "+s+" is disgusted by their laziness and vows to stop them."
l="The "+s+" meets with the upper class "+m+"s to offer their services to quell the misguided rebellion. They are immediatly made the leader of the Special "+$.aM+" Forces.  "
s="It has been a long struggle, but finally the lazy, peasant "+m+"s have been defeated. The high class "+m+"s murmur dignified "+n+"s and give the "+s+" several medals. "
n=this.y
t.i(0,new R.X("Stop a Rebellion",!1,[new U.c(r),new U.c(l),new U.c(s)],H.a([],o),R.t(),!1,!1,new Y.bd("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.v)
p.i(0,new X.z(q,t,null),$.aE)}}
X.z.prototype={
ai:function(){for(var t=this.b.gaE(),t=t.gM(t);t.v();)t.gF()
return"<div class = 'theme'><b>"+H.w(this.a)+"</div></b><div class = 'features'></div></theme>"},
n:function(a){return"Theme: "+H.w(this.a)}}
O.n9.prototype={
$1:function(a){A.B9(H.n2(a,"$isex"))
return},
$S:function(){return{func:1,args:[W.Q]}}}
U.lg.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Lockpick",H.a([$.x,$.P,$.ah,$.aO,$.Z],s),"No matter what, you'll always have at least one.",!1,"Anti-Lock Dagger")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Sneaking Suit",H.a([$.M,$.P,$.ah],s),"God. Why is Snake's outfit really called this. So dumb.",!1,"Full Body Latex Suit")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Dagger",H.a([$.x,$.P,$.aO,$.aA,$.nR],s),"For when you wanna show 'em your stabs, I guess.",!1,"Stabbing Contraption")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o,n,m,l
t=[P.H]
s=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime","Robbers","Heists"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,[N.ab,P.V])
t.i(0,$.bT,$.j)
t.i(0,$.cH,$.k)
t.i(0,$.bO,$.k)
t.i(0,$.c7,$.k)
r="The "+$.u+" cannot release the frogs since the corrupt "
q=$.q
r=r+q+" Cops have confiscated them. The "
p=$.l
o=[U.c]
t.i(0,new R.bn("Steal the Frogs",!1,[new U.c(r+p+" organizes a team of crack "+q+"s to help raid the frog evidence lockers. "),new U.c("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.c("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bA(),!1,!1,new Y.bm("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.az)
p=$.l
q="The "+p+" is just minding their own business, when they see a huge stack of boonies recovered from the "+$.u+"'s layer and slated to be returned to the "
r=$.q
q=q+r+"s. Unable to resist, they pilfer just a bit. A nearby "+$.G+" sounds the alarm, shit, the "+p+" didn't know anybody was looking!  They flee with as many boonies as they can carry."
n="The "+p+" is keeping a low profile. Shit's still too hot to spend their ill gotten boonies, but it'll be worth it, they just know it."
p="Fuck, the "+p+" has been spotted. They lead the police "+r+"s on a wild chase that ends with the "+p+" faking their own death and assuming a new identity. They can FINALLY spend those boonies. "
r=this.db
t.i(0,new R.a6("Escape the Law",!1,[new U.c(q),new U.c(n),new U.c(p)],H.a([],o),R.t(),!1,!1,new Y.bd("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.v)
r=$.q
p="A weeping "+r+" approaches the "
n=$.l
p=p+n+", spinning a sad tale of their best friend being unjustly arrested during the reign of the "
q=$.u
q=p+q+". Nobody will free him, even after the "+q+" is gone. The "+n+" doesn't really care until the weeping "+r+" mentions a huge reward. It's ALL about the boonies, baby. "
p="The "+n+" manages to steal the keys to the "+$.aM+" Prison, easy peasy. It happens so fast it's like there was no key in the first place.  It's not much harder for them to abscond with the Prisoner "+r+", too. Nice."
n="The "+n+" returns the Prisoner "+r+" to their weeping and "+$.G+"ing best friend. The Prisoner "+r+" reveals the location of some valuable stolen goods they 'heard about' in prison.  Good enough for the "+n+"."
r=this.db
t.i(0,new R.a6("Free The Prisoner",!1,[new U.c(q),new U.c(p),new U.c(n)],H.a([],o),R.t(),!1,!1,new Y.bd("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.v)
r=$.u
n="Now that the "+r+" has been defeated, the "
p=$.q
n=n+p+"s have recovered their precious "
q=$.ac
n=n+q+". Huh. That looks....REALLY valuable. And the "
m=$.l
r=n+m+" totally deserves it, I mean, they did AAAAAAALL the work defeating the "+r+", right? They begin plotting to take it."
n="The "+m+" assembles a team of Disreputable "+p+"s. There is Baron "
l=$.G
l=n+l+"worth, the disaffected Heir to the "+$.aM+" Fortune, Smokes Mc"+l+" their 'in' with the shady underbelly of "+p+" society, and Fresh Jimmy, the wide eyed youth who has the stickiest fingers in Paradox Space.  The "+m+" thinks they have enough quirky characters to actually start planning this heist, now."
q="On the day of the big heist, Fresh Jimmy alerts the authorities about the impending robbery. He rats out the other Disreputable "+p+"s and the "+m+", too.  As the "+p+" authorities converge on the warehouse the team has converted to a make shift base of opperations, they begin receiving reports that the "+q+" has already been stolen? Fresh Jimmy has already escaped to the side, it turns out the traitor ruse was a distaction."
m="The Disreputable "+p+"s meet up with the "+m+" after the heat has died down to collect their share of the proceeds. Wow, it turns out crime really DOES pay! "
p=this.db
t.i(0,new R.a6("Shit, Let's Be a Heist Movie",!1,[new U.c(r),new U.c(l),new U.c(q),new U.c(m)],H.a([],o),R.t(),!1,!1,new Y.bd("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.v)
this.c.i(0,new X.z(s,t,null),$.bv)}}
N.lh.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Grandfather Clock",H.a([$.U,$.af,$.b3,$.S],s),null,!1,"Ticking Tower of Time")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Drum",H.a([$.qd,$.S,$.a7],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Dead Doppelganger",H.a([$.aI,$.b6,$.S,$.b0,$.aY,$.aF],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Music Box",H.a([$.x,$.S,$.a7,$.af],s),null,!1,"Cube of Noise")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Turn Tables",H.a([$.x,$.S,$.a7,$.Z,$.ai],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Metronome",H.a([$.x,$.S,$.a7],s),null,!1,"Never Ending Ticking Device")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.H]
s=H.a(["Ticking","Watches","Cesium","Pendulums","Timepieces","Clocks","Clockwork","Gears","Quartz"],t)
H.a([],t)
r=[N.ab,P.V]
q=new H.p(0,null,null,null,null,null,0,r)
q.i(0,$.pL,$.az)
q.i(0,$.bU,$.k)
q.i(0,$.c7,$.k)
q.i(0,$.dT,$.j)
p=$.u
o="Now that the shitty "+p+" is no longer protecting them, the "
n=$.l
o=o+n+" can FINALLY get down to the important stuff, namely, destorying all those ceaselessly ticking clocks. God DAMN but they are annoying. "
m="With a satisfying BONG, another clock bites the dust. The "+n+" finds it all to be so very therapeutic. "
p="Through shenanigans too boring to detail here, the "+n+" finds themselves back in time, before the "+p+" was even here in the first place. Before absconding from the angry snake, they manage to wreck the fuck out of a single clock they hadn't seen before. 1001/1000 clocks destroyed. Mission Complete!"
n=this.r2
l=[U.c]
q.i(0,new R.a6("Destroy 1000 Clocks",!1,[new U.c(o),new U.c(m),new U.c(p)],H.a([],l),R.dn(),!1,!1,new Y.bd("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.j)
n=$.l
p="The "+n+" is getting sick and tired of the constant grinding of their planets clockwork mechanisms. After consulting some "+$.q+"s, they set out to fix the "
m=$.ac
p=p+m+" points that are causing the grinding."
o="The "+n+" learns that some of the "+m+" points dont actually exist in sync with the timeline, and so they do a whole bunch of bullshit time shenanigans that you really shouldnt worry about. Trust them, its ok. Totally didnt accidentally violate causality or anything."
k="The "+n+" has fixed all the "+m+" points! Except- Oh goddamn it.  "
j=$.u
q.i(0,new R.W("Fix the Clockwork",!1,[new U.c(p),new U.c(o),new U.c(k+j+" has started screwing up the "+m+" points all over again! They cant take this lying down. Or standing up! Or sitting down! Or... this metaphor got away from them."),new U.a1("The "+n+" is ready to face the "+j+". It will never have the chance to mess with the "+m+" points again!","The "+n+" being defeated really grinds my gears.  Get it? Cuz the clockwork is gonna stay broken and annoying sounding until the "+j+" is defeated. ","Ah, the sweet sound of clockwork NOT being broken as fuck.")],H.a([],l),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
j=this.c
j.i(0,new X.z(s,q,null),$.aJ)
q=H.a(["Drums","Beat","Rhythm","Percussion","Metronomes"],t)
H.a([],t)
s=new H.p(0,null,null,null,null,null,0,r)
s.i(0,$.fE,$.j)
s.i(0,$.cN,$.D)
s.i(0,$.bU,$.j)
p=$.l
o="The "+p+" starts messing about with the beating drums of the land. The constant cacophony is kinda getting on their nerves, so, following the advice of some friendly "+$.q+"s they try to line the beats up to a more harmonious rhythm. "
n="The "+p+" messes with time, placing zones of slowed or sped up time by the drums of their land so the beats start landing in something resembling a good beat."
p="The "+p+" has finally gotten all the drums of their land beating in an awesome rhythm. Except for one. The lair of the "
m=$.u
s.i(0,new R.W("Synchronize the Rhythm",!1,[new U.c(o),new U.c(n),new U.a1(p+m+" is built right into the loudest drum of all, and it keeps. Beating. Off. Rhythm. Fuck it, it's time to strife!","The beat continues to be cacophonous. ","Theeere we go. The loudest drum is finally on beat. The cacophony is finally defeated. And, you guess, the "+m+". Whatever. ")],H.a([],l),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
j.i(0,new X.z(q,s,null),$.aJ)
s=H.a(["Progression","Age","Change","Future","Rivers","Possibility","Flow","Streams","Inevitability","Brooks"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,r)
t.i(0,$.bL,$.j)
t.i(0,$.b_,$.k)
t.i(0,$.c8,$.j)
t.i(0,$.cL,$.j)
r=$.u
q="The door to the "+r+"'s  lair is barred by a door locked with three identical missing "
p=$.ac
q=q+p+" Pieces. A fourth is already inlaid in the door. The "
o=$.l
q=q+o+" prepares for a bullshit item collection quest. "
n="The "+o+" is starting to get frustrated. No matter what they do they can't seem to find any more "+p+" Pieces. A "+$.q+" asks if they have tried...TWISTING they way they look at things. This cryptic as fuck statement does not make the "+o+" any less frustrated."
m="In a flash of insight, the "+o+" realizes that they can just use their Time Instrument to go back before they first visited the "+r+"'s lair three times and take the pieces then, as long as they remember to return it after. There. Now there are four "+p+" Pieces and the door is open. Time to prepare for a boss fight. "
r="The "+o+" is ready to fight the "+r+". "
k="Whew, doomed timeline averted. The "+o+" goes back in time to restore the 3 "+p+" Pieces to their original positions, so they can be there for when they come and get them the other times. Time travel is so confusing."
t.i(0,new R.W("Walk Another Path",!1,[new U.c(q),new U.c(n),new U.c(m),new U.a1(r,"Um. Is this a doomed timeline? What happens if the "+o+" never returns those "+p+" Pieces? If they didn't return them then why were they there when they first found the lair? Fuck. You HATE time travel.",k)],H.a([],l),R.hl(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.j)
k=$.u
p="The door to the "+k+"'s  lair is barred by a door locked with three identical missing "
o=$.ac
p=p+o+" Pieces. A fourth is already inlaid in the door. The "
r=$.l
t.i(0,new R.W("Destroy Timelines",!1,[new U.c(p+r+" prepares for a bullshit item collection quest. "),new U.c("The "+r+" is starting to get frustrated. No matter what they do they can't seem to find any more "+o+" Pieces. A "+$.q+" asks if they have tried...TWISTING the way they look at things. This cryptic as fuck statement does not make the "+r+" any less frustrated."),new U.c("The "+r+" is ready to fucking give up. Fuck those "+o+" Pieces. In a flash of clocks and gears, three of their own doomed time clones warp in and hand them "+o+" Pieces. Oh. Huh. Well, fuck. The clones go off to die somewhere in piece. The "+r+" can now face the "+k+". "),new U.a1("The "+r+" is ready to fight the "+k+". ","Welp. The "+r+" has managed to fail even the face of their three doomed clones' nobel sacrifice. Fuck.","The sacrifices of the three doomed clones has not been in vain.")],H.a([],l),R.dn(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.j)
r="With the defeat of the "+$.u+", "
k=$.l
r=r+k+" uncovers historical documents in a ruined consort village. Taking them to the "
o=$.q
r=r+o+" leader, they inquire about the mysterious documents. The leader tells "+k+" about the Wars of "
p=$.aM
t.i(0,new R.a6("Shatter the Timeline",!1,[new U.c(r+p+" Metropolis. The "+o+"s have been quaking in fear for years, waiting for a savior to reverse the events of the Wars. "+k+" agrees to help the "+o+"s re-fight the Wars to win back their "+p+" Metropolis."),new U.c("Through some hard time-travel and shattering glass windows where needed, "+k+" has successfully set up events in the "+o+"s favor. They check back in with the past "+o+" leader to inform them that the timeline has been revised to their advantage."),new U.c("The "+k+" divulges to the "+o+" leader that their enemy leader has been assassinated (through their own marvelous work, of course). The "+o+" leader doesnt believe them, though. Why wouldnt they believe the time-traveler?! They launch a miserable failure of a counter-attack, resulting in the "+o+"s defeat. Agh!"),new U.c("The "+k+" is totally done with this bullshit. But they have an epiphany: what if they re-shattered the timeline, but took control of the strategy themselves? They grin to themselves as they travel back again, this time framing the enemy instead of assassinating them. This time, the leader believes the "+k+" this time, and carried through with their suggested strategy. With effort, "+p+" Metropolis is reclaimed, and the consorts have been given their freedom back!")],H.a([],l),R.dn(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.q
k="There is a babbling brook. A wizened "+p+" is next to it. The water, he says, moves in only one direction. So, too, must we. The "
o=$.l
t.i(0,new R.W("Move Forwards, Never Stop",!1,[new U.c(k+o+" contemplates this for a while. Is it really a true thing when this game has time travel in it?"),new U.c("Days in the past, but not many, the "+o+" is exploring. They find the babbling brook and the wizened "+p+" yet again. He again says that the water flows in only one direction. Irrationally angry, the "+o+" yells that it's not true, that this is the second time he's met the wizened "+p+". The wizened "+p+" simply "+$.G+"s mysteriously.  "),new U.c("Days in the future, but not enough to catch up to the present, the "+o+" is exploring. When they find the babbling brook, the wizened "+p+" brightens. 'Soon.' he says, 'you will understand that we move in only one direction.'  He gestures downstream 'So too, will you soon have our last conversation. Or, looking another way. Our first.'.  Huh. The "+o+" thinks they get it. Time travel or not, they do things in a linear order.  So does the wizened "+p+"...even if it isn't the same order. "),new U.a1("Inexorably, the "+o+" is back in the present but also far in the future. The wizened "+p+" has just been slain by the "+$.u+", mere minutes after their first/last conversation. The "+o+" took the consort's advice to heart.  They have been preparing for this fight for a long time, now, going ever forward, but not on the same path in time as everyone else. It is time. ","It's a Time Paradox. Or is it? Did the "+o+" know they would be defeated? Did they fight anyways? ","This was always going to happen.")],H.a([],l),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
j.i(0,new X.z(s,t,null),$.aJ)}}
G.a2.prototype={
n:function(a){var t=this.b
if(t.length!==0)return C.a.ga_(t)
return"NULL TRAIT"},
gcQ:function(){return this.a},
gcC:function(){return this.b},
gaU:function(){return this.c}}
G.aK.prototype={}
G.a9.prototype={}
G.bq.prototype={}
G.d.prototype={
geT:function(){return this.e.length},
gaU:function(){var t,s,r,q,p
for(t=this.e,s=t.length,r=0,q=0;p=t.length,q<p;p===s||(0,H.cy)(t),++q)r+=t[q].c
return r},
a5:function(a,b){return C.c.aV(b.geT()-this.e.length)},
cZ:function(a){return C.a.ev(this.e,a.gek(a))},
$isbk:1,
$asbk:function(){return[G.d]},
gG:function(a){return this.d},
gdf:function(){return this.e}}
G.jq.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.a2]}}}
Q.ly.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Cardboard Box",H.a([$.F,$.S,$.ah],s),"It's the highest level void item. Except not. It's a box. Asshole.",!1,"Shoguns Old Home")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Hole Punch",H.a([$.x,$.S,$.ah],s),null,!1,"Paper Impaler")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Smoke Bombs",H.a([$.bc,$.S,$.ah,$.jk],s),null,!1,"Vape Grenades")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Tribal Mask",H.a([$.b0,$.S,$.ah,$.aY,$.bu],s),null,!1,"Ancient Face")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Opera Mask",H.a([$.aH,$.S,$.ah,$.af],s),null,!1,"Phantom of the Opera Mask")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Black Hole in a Bottle.",H.a([$.S,$.Z,$.nV,$.ah,$.aX],s),"Jegus fuck, don't break this.",!1,"Eternal Suffering in a Jar")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.H]
s=H.a(["Nothing","Void","Emptiness","Dust","Shadows","Nowhere","Absence"],t)
H.a([],t)
r=[N.ab,P.V]
q=new H.p(0,null,null,null,null,null,0,r)
q.i(0,$.cV,$.j)
q.i(0,$.iT,$.j)
q.i(0,$.fF,$.j)
q.i(0,$.iO,$.j)
p=$.u
o="A big party is being held to celebrate the defeat of "+p+" and the "
n=$.l
o=o+n+" is invited as the guest of honor. There are promises of god food, including a gigantic cake. At the door a burly "
m=$.q
p=o+m+" stands with a clipboard. He eyes the "+n+" approaching and shakes his head. \u2018You\u2019re not on the list, so beat it.\u2019 The "+n+" tries to explain that they\u2019re the planet\u2019s hero and the one who beat "+p+", making them the guest of honor, but the bouncer just laughs. \u2018If you\u2019re supposed to be the hero, why haven\u2019t I heard of you already?\u2019"
o="The "+n+" asks other guests to vouch for them, but all of them are having trouble recognizing the "+n+". There\u2019s just something about the "+n+" that makes them so forgettable. They go home and bring back photos of themself with other "+n+"s as proof that they\u2019re also a hero, but the bouncer dismisses the photos as very realistic but clearly edited. What a pain."
n="The "+n+" gives up trying to convince the "+m+" bouncer of their existence. If they\u2019re not going to be recognized, they might as well take it all the way. They use their void powers to become completely unnoticeable and walk past the bouncer while making a number of obscene gestures. The "+m+" hosting the party approaches the "+n+" as soon they turn off their powers to join the party. \u2018There you are! You know it\u2019s very rude for the guest of honor to be so late. I\u2019m really disappointed in you.\u2019 Bluh."
m=this.r2
l=[U.c]
q.i(0,new R.a6("Be Forgettable",!1,[new U.c(p),new U.c(o),new U.c(n)],H.a([],l),R.t(),!1,!1,new Y.bd("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.v)
m=$.l
n="The "+m+" has wandered around for hours and has found nothing new to do. There is NO way this is the end of the land. What is going on?"
o="Huh....what....what is this area of a wall that looks....a little different? Like the shadows aren't falling right on it? The "+m+" leans against it and stumbles into a ...weirdly hard to see area. Huh. The "+m+" wonders if maybe the rest of their quests are in places like this?"
p="Holy FUCK that was the BEST dungeon of ALL TIME!!!  The "+m+" sure feels bad for anybody who missed it.  Just, that TWIST at the end, man. So great."
k="You're....really having trouble following what's going on. The "+m+" emerges from one of those glitchy areas you can't see into, obviously fighting the "
j=$.u
k=k+j+". What the fuck is even happening!? "
i="The "+m+" won!  That's....GOOD, you think. The "+j+" was probably an asshole."
q.i(0,new R.W("Go to Nowhere",!1,[new U.c(n),new U.c(o),new U.c(p),new U.a1(k,"The "+m+" lost.  That's....BAD, you think. The "+j+" is probably an asshole.",i)],H.a([],l),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
i=this.c
i.i(0,new X.z(s,q,null),$.aJ)
q=H.a(["???","[REDACTED]","[CENSORED]","Censorship","Conspiracies"],t)
H.a([],t)
s=new H.p(0,null,null,null,null,null,0,r)
s.i(0,$.cV,$.k)
s.i(0,$.iT,$.k)
s.i(0,$.fF,$.k)
s.i(0,$.bT,$.j)
p=$.l
o="Even with the victory of the "+p+" over the villainous "
n=$.u
o=o+n+", there are still problems. Ancient libraries lie crumbling in the denizen's lair, secrets hidden in languages long forgotten by "+$.q+" and carapace alike. Even the libraries on Prospit contain scant knowledge of this cryptic tongue, but the covers promise great power and mastery over the aspect of Void. Perhaps study of the "
m=$.ac
s.i(0,new R.a6("Reveal the Tomes",!1,[new U.c(o+m+" will provide insight."),new U.c("Hours of study yield little progress until the "+p+" has a breakthrough regarding symbols on the "+m+". It seems that through analysis of the symbols on the "+m+" using Zipf's Law, you can piece together which common words in normal language match up with common words in this strange script!"),new U.c("The "+p+" plunders ancient tombs, searching for a rumored Rosetta Stone of sorts, one that promises to provide more insight on rather uncommon words in the books of "+n+"'s library. After countless false starts and empty tombs, not only does the "+p+"find it, a nearly complete record of the history of the land is found, and by comparing it to known records, they can translate even MORE words, not to mention new parts of history they'll uncover once they translate it all."),new U.c("The "+p+", after hours of striving and looking into dark and forgotten places, poring over secret tomes, and studious work in the field of "+m+"ology, has finally translated most of the books in the library. The mystical techniques of the ancients (who probably never existed, but hey) are now open to them.")],H.a([],l),R.e9(),!1,!1,new Y.N("Ancient Knowledge",null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
m=$.l
s.i(0,new R.W("[REDACTED]",!1,[new U.c("Apparently the denizen [REDACTED] has been [REDACTED]ing all the [REDACTED] and everyone is starting to get a little pissed at them. Can the "+m+" help? "),new U.c("The "+m+" [REDACTED]s and it actually works! Everyone "+$.G+" in surprise. This might just be crazy enough to work."),new U.c("Wait, who would have thought that the [REDACTED] would be weak to [REDACTED]??? This is officially the dumbest fight in all of Paradox Space."),new U.a1("It's time to fight the [REDACTED] for real this time. Their reign of [REDACTED] will finally be at an end.","[REDACTED]","The "+$.u+" is defeated. FINALLY they can stop censoring everything on this stupid planet, especially "+$.q+"s.")],H.a([],l),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
i.i(0,new X.z(q,s,null),$.aJ)
s=H.a(["Silence","Blindness","Deafness","Blindfolds","Earplugs","Sensory Deprivation"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,r)
t.i(0,$.cV,$.j)
t.i(0,$.iT,$.j)
t.i(0,$.fF,$.j)
r=$.l
q="Suddenly the "+r+" can't see or hear. Oh god, what is going on?  They feel around in close to a panic, until they find a button. After a moments deliberation, they press it. Suddenly they can see and hear again. Huh."
p="The "+r+" sees a red button at the other end of a cluttered hallway, inside a dungeon. Their bad feeling is confirmed when they suddenly can't see or hear again. After many stubbed toes and bruised shins, they finally make it to the button and press it to regain their senses."
o="The newest button is in the middle of a single large room with pitfall traps scattered throughout and underlings to boot. Are you fucking kidding me!? When the "+r+" loses their senses, they seriously consider just sitting down and seeing if it wears off, but those underlings would probably attack in the mean time. The "+r+" begins slowly making their way towards the button. Half way through, they realize with a start that the Underlings haven't tried to attack them. Huh.   When they finally press the button, the Underlings suddenly whirl to face them. Were they...INVISIBLE while they were blind? It's short work to defeat the underlings."
n="Faced with a huge underling that is probably too high a level to fight, the "+r+" is struck with sudden inspiration. They blindfold themselves and do their best to block out their ability to hear, as well. They make their way to where the giant Underling was and begin to strife them. When they stop being aware of flailing, they remove their blindfold and find the giant Underling has become a giant pile of grist. HELL YES, VOID POWERS RULE!!!  "
m="The "+r+" attempts to sneak up on the "+$.u+" while blindfolded. It dodges. Oh well, guess you can't out-void a Void boss.  Time for a regular strife!"
k="The "+r+" has defeated the major challenge of their land."
t.i(0,new R.W("Walk of Faith",!1,[new U.c(q),new U.c(p),new U.c(o),new U.c(n),new U.a1(m,"The "+r+" is going to have to try again.",k)],H.a([],l),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
i.i(0,new X.z(s,t,null),$.aJ)}}
E.lz.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Yardstick",H.a([$.cO,$.P,$.o2,$.Z],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("SBURBSim Hacking Guide",H.a([$.aG,$.P,$.jp,$.F],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Body Pillow of JR",H.a([$.M,$.P,$.h1,$.q8,$.b1],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Nanobots",H.a([$.qh,$.P,$.nL],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"NANOMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o,n,m
t=[P.H]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,[N.ab,P.V])
t.i(0,$.ck,$.j)
t.i(0,$.de,$.j)
t.i(0,$.dQ,$.j)
t.i(0,$.cL,$.j)
t.i(0,$.dP,$.j)
t.i(0,$.iN,$.j)
t.i(0,$.fF,$.k)
r=$.l
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.q
o=[U.c]
t.i(0,new R.X("A Complete Waste Of Time",!1,[new U.c(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.c("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.c("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.c("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.qK(),!1,!1,new Y.dq("Rewards/no_reward.png",null),1,null,null),$.v)
r=$.u
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.l
n=q+" tries to manually separate the turtles by catching them with a net and "+$.bR+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.G
t.i(0,new R.W("Stop the Turtles from [Redacted]",!1,[new U.c(p),new U.c(n),new U.c(m),new U.a1(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.zh(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
q=$.l
t.i(0,new R.X("Be Spooked By a Wolf",!1,[new U.c("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.c("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.c("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.t(),!1,!1,new Y.dq("Rewards/no_reward.png",null),1,null,null),$.v)
q="A wizened "+$.q+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.l
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.u
t.i(0,new R.W("Be The Illegitimate Player",!1,[new U.c(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.c("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.c("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.az)
m=$.l
t.i(0,new R.W("Wear the Merch, Be the Rider",!1,[new U.c("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.q+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+$.u+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.t(),!1,!1,new Y.Y("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.az)
m="A wizened "+$.q+" tells the "
r=$.l
t.i(0,new R.a6("Die Ironically, In The Proximity Of Some Horses",!1,[new U.c(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.c("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.t(),!1,!1,new Y.cf("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.D)
r="A "+$.q+" that is also a SHOGUN minion tells the "
m=$.l
t.i(0,new R.a6("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.c(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.c("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.zi(),!1,!1,new Y.N("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.az)
m=$.l
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.db
t.i(0,new R.a6("Run The Simulations",!1,[new U.c(r),new U.c(q),new U.c(m)],H.a([],o),R.t(),!1,!1,new Y.bd("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.D)
n=$.u
m="The "+n+" explains um. What? Where did the "
q=$.l
t.i(0,new R.bn("Waste the Frogs",!1,[new U.c(m+q+" go?"),new U.c("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.q+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bA(),!1,!1,new Y.bm("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.az)
this.c.i(0,new X.z(s,t,null),$.aJ)}}
M.lD.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Cauldron",H.a([$.qc,$.P,$.a0],s),"Surprisingly literal.",!1,"Bell But For Liquids")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Flying Broom",H.a([$.fZ,$.cO,$.P,$.U,$.a0],s),"WHY ARE THERE SO MANY FUCKING BROOMS IN THIS GAME.",!1,"Bell But For Liquids")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Warped Mirror",H.a([$.nZ,$.P,$.a0,$.ah,$.Z],s),"I guess Witches warp shit and stuff.",!1,"Mirror from The Shoguns Dresser")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o,n,m
t=[P.H]
s=H.a(["Potions","Brews","Cauldrons","Toil","Trouble","Covens","Bubbles","Cackling"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,[N.ab,P.V])
t.i(0,$.bK,$.k)
t.i(0,$.eC,$.k)
t.i(0,$.cj,$.k)
t.i(0,$.c7,$.k)
t.i(0,$.c9,$.k)
t.i(0,$.nD,$.k)
r=$.u
q="The "+r+" explains that the frogs have all been turned into handsome "
p=$.q
q=q+p+" consorts. It's up to the "
o=$.l
n=[U.c]
t.i(0,new R.bn("Brew the Frogs",!1,[new U.c(q+o+" to turn each of them back into a slimy, warty frog, whether it's through kisses or potions. "),new U.c("The former "+p+"s hit buttons on the ectobiology machine at random, creating their own ectobiological tadpole children.  The "+o+" just sort of rides out the chaos. "),new U.c("The  "+r+"  reveals that the final frog is on the "+o+"'s destroyed home world. Huh. You guess it's a good thing ectobiological equipment can sample DNA across time and space.    ")],H.a([],n),R.bA(),!1,!1,new Y.bm("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.az)
o="Even with the defeat of the "+$.u+", there are still problems. There is flooding in one valley, giant underlings are rampaging in one "
r=$.q
o=o+r+" settlement, and crops refuse to thrive at "
p=$.aM
o=o+p+" Ranch. The "+r+"s seem to have accepted everything as just how things are, but the "
q=$.l
o=o+q+" isn't going to give up until they show the status quo just how 'quo' it isn't!"
m="Alright, it turns out that through a mixture of Alchemy, game powers and pure elbow grease, the "+q+" has managed to make a river flow backwards.   Now instead of flooding, the valley is draining itself.  Progress!"
r="The "+q+" doesn't feel like KILLING the giant underlings rampaging in the "+r+" settlement. What's the fun in that? They try a variety of techniques until the underlings are as calm and friendly as "+r+"s themselves.   Now they are productive members of society! "
p="The "+q+" twists how plants and soil and growth works until the crops at "+p+" Ranch are finally thriving. With that, they have finally kicked the former status quo to the curb!  "
q=this.db
t.i(0,new R.a6("Twist All The Things",!1,[new U.c(o),new U.c(m),new U.c(r),new U.c(p)],H.a([],n),R.t(),!1,!1,new Y.bd("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.v)
q="A Mysterious "+$.q+" approaches the "
p=$.l
q=q+p+". Apparently an alchemy recipe for a potion of Ultimate "
r=$.aM
q=q+r+" was discovered amongst the "+$.u+"'s things. Maybe the "+p+" can figure out how to create it? "
m="One potion makes you smaller. One makes you taller. A third doesn't do anything at all. Ugh! Why is it so hard for the "+p+" to get the potion of  Ultimate "+r+" right? "
p="Careful now. Just....one....more drop. THERE.   The "+p+" is now the proud owner of a potion of Ultimate "+r+". They immediately chug it, only for it to manifest a mirror showing the "+p+"'s own face. Oh. God DAMN it. It turns out the  Ultimate "+r+" was the "+p+" all along. They didn't need any silly potions. Worst. Quest. Ever."
r=this.db
t.i(0,new R.a6("Brew The Potion",!1,[new U.c(q),new U.c(m),new U.c(p)],H.a([],n),R.t(),!1,!1,new Y.bd("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.v)
r=$.q
p="A young "+r+" approaches the "
m=$.l
p=p+m+". They wish to learn how to be magical, too!  The "+m+" dubs them the "
q=$.aM
t.i(0,new R.a6("Train the Apprentice",!1,[new U.c(p+q+"mancer and agrees to train them. "),new U.c("The "+m+" has barely begun to train the "+q+"mancer, but needs to head into town to fetch a few ingredients.   The "+q+"mancer promises to be good, and IMMEDIATELY starts fucking shit up on accident with magic. Oh god, why are all those "+$.ac+"s suddenly alive?  When the "+m+" returns, they use this as an opportunity to teach the "+q+"mancer a valuable moral. "),new U.c("The "+q+"mancer is ready to show off their power to the other "+r+"s. They "+$.G+" in amazement to see the things the "+q+"mancer can do! The "+m+" was a good mentor.  ")],H.a([],n),R.t(),!1,!1,new Y.N(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
this.c.i(0,new X.z(s,t,null),$.bv)}}
F.lE.prototype={
q:function(){var t,s,r,q
t=Q.B(null,null,A.a3)
s=[G.a2]
r=A.i("Make a World Book",H.a([$.F,$.af,$.aG],s),"World building is p okay, I guess.",!1,"World Building for Dumbasses")
q=[H.O(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Quill Pen",H.a([$.b1,$.M,$.jm],s),null,!1,"Dead Bird Scribing Tool")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Book On Writing",H.a([$.aG,$.F,$.T],s),null,!1,"How to do words for unsmarts")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("FLARP Manual",H.a([$.aG,$.F,$.T],s),"That Cat Troll doesn't do this. So I guess it's okay.",!1,"Natural Selection for Nerds The Book")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Script",H.a([$.aG,$.F],s),null,!1,"Death of JR, a screenplay by The Shogun")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Fancy Pen",H.a([$.x,$.T,$.jm,$.af],s),null,!1,"Ink Bleeding Plastic Finger")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
r=A.i("Spiral Bound Notebook",H.a([$.aG,$.F,$.x],s),null,!1,"Spinney Spine Scribing Station")
C.a.h(t.b,new Q.h(r,t.k(r,1),q))
s=A.i("Half Written Novel",H.a([$.aG,$.F],s),"I'm sure you'll finish it any day now.",!1,"The Shoguns Magnum Opus")
C.a.h(t.b,new Q.h(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l
t=[P.H]
s=H.a(["Books","Shelves","Libraries","Tomes","Fiction","Pages","Words"],t)
H.a([],t)
r=[N.ab,P.V]
q=new H.p(0,null,null,null,null,null,0,r)
q.i(0,$.cV,$.j)
q.i(0,$.bY,$.j)
q.i(0,$.b5,$.k)
q.i(0,$.b_,$.k)
q.i(0,$.ez,$.k)
p=$.l
o="The "+p+" finds a massive library, and all the books are in disarray! Who could have done this? As they begin trying to help straighten up, the Librarian "+$.q+" explains that a gang of unruly underlings have been vandalizing local libraries.  The "+p+" vows to stop their reign of terror. "
n="The "+p+" finds yet another vandalized Library. This time, the trail is still warm. They track the unruly underlings to a nearby Dungeon. Now they just have to plan their attack.   "
p=" The "+p+" lies in wait at the Dungeon entrance. Before long, the unruly underlings emerge, no doubt in preparation to vandalize yet another Library.  Instead, they get a serving of Justice.  The local libraries are safe!"
m=this.y
l=[U.c]
q.i(0,new R.X("Stop the Vandals",!1,[new U.c(o),new U.c(n),new U.c(p)],H.a([],l),R.t(),!1,!1,new Y.bd("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.v)
m=this.r
m.i(0,new X.z(s,q,null),$.aE)
q=H.a(["Fan Fiction","Fics","Fandom","Mary Sues","Tumblers"],t)
H.a([],t)
s=new H.p(0,null,null,null,null,null,0,r)
s.i(0,$.cK,$.k)
s.i(0,$.c2,$.k)
s.i(0,$.bV,$.k)
s.i(0,$.b5,$.k)
p=$.q
o="An Excited "+p+" rushes up to the "
n=$.l
s.i(0,new R.X("Read the Fan Fiction",!1,[new U.c(o+n+". They have been writing fan fiction about the Players for their whole life and want to get feedback on it. Is it accurate?  The "+n+" does their best to keep a straight face, but the fic is...wow.  Why do they have the players "+$.G+"ing so much? "),new U.c("Okay.  The Excited "+p+" has a new version for the "+n+" to review. This time they at least aren't obviously "+p+"s, but the characterization is completely off. You can't even imagine THOSE two getting together.  Feedback round two. "),new U.c(" The "+n+" reads the final version of the Excited "+p+"'s fan fiction.  Huh. This is....wow! It's even better than reality!  The Excited Consort ends up making crazy amount of boonies from selling the series, and gives the "+n+" a gift as thanks! ")],H.a([],l),R.t(),!1,!1,new Y.cf("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
m.i(0,new X.z(q,s,null),$.aE)
s=H.a(["Dungeons","Dragons","Authors","Control","Storytelling","Scripts"],t)
H.a([],t)
t=new H.p(0,null,null,null,null,null,0,r)
t.i(0,$.c2,$.k)
t.i(0,$.cI,$.j)
t.i(0,$.bV,$.j)
t.i(0,$.cK,$.k)
t.i(0,$.dQ,$.j)
r=$.l
q="The "+r+" finds a strange minature dungeon, filled with four small ragdolls of Adventurer "
p=$.q
t.i(0,new R.X("Be the DM",!1,[new U.c(q+p+"s. A placard proclaims 'Be the DM, it is You.'. Huh. The "+r+" is interested, and weaves an elaborate tale full of intrigue and danger, before dramatically injuring one of the Adventurer "+p+"s right before the end. As they finish their story, a nearby dungeon opens up and three "+p+"s stumble out, dragging a fourth.  Oh. Shit. The dungeon flashes 'You did this.'"),new U.c("The "+r+" finds another minature dungeon. Oh HELL no, they are not going to repeat this shit. They have no interest in playing god, thank you very much.  The nearby regular size dungeon flashes 'Are you Sure? Y/N', and the "+r+" quickly selects 'Y'.  The dungeon immediately collapses, presumably killing any Adventurer "+p+"s who were trapped inside. Holy fuck. What is WRONG with this game?  "),new U.c(" The "+r+" finds yet another minature dungeon. Fuck. Okay. They can't opt out, or the Adventurers have rocks fall on them and die. But they aren't going to make it tragic again. No way. They tell a....serviceable story in which the Adventuring "+p+"s walk through a dungeon with insultingly easy puzzles and then are allowed to leave. The nearby dungeon opens up and four confused Adventurer "+p+"s wander out. 'Wow, that was really unsatisfying!' one remarks. The dungeon flashes 'Boring. Try Again Later.' "),new U.c("The "+r+" finds what is hopefully the last minature dungeon. They resign themselves to making the most interesting story possible WITHOUT fucking over the characters in it. They weave an elaborate story with twists and turns and close calls. At the end of it, the 4 Adventuring "+p+"s walk out of the dungeon laughing and talking about their adventure. The dungeon flashes 'Good Job!', and deploys positive reinforcment. Quest chain: complete! ")],H.a([],l),R.t(),!1,!1,new Y.cf("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
m.i(0,new X.z(s,t,null),$.aE)}}
B.lF.prototype={
$asd9:function(){return[T.fj]},
$ascl:function(){return[T.fj,P.cC]}}
A.er.prototype={}
A.cS.prototype={
n:function(a){return"rgb("+H.w(this.b)+", "+H.w(this.c)+", "+H.w(this.d)+", "+H.w(this.a)+")"},
f1:function(a){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.ay()
s=this.c
if(typeof s!=="number")return s.ay()
r=this.d
if(typeof r!=="number")return r.ay()
q=this.a
if(typeof q!=="number")return H.aW(q)
return(t<<24|s<<16|r<<8|q)>>>0},
H:function(a,b){var t,s
if(b==null)return!1
if(b instanceof A.cS){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.c
s=b.c
if(t==null?s==null:t===s){t=this.d
s=b.d
if(t==null?s==null:t===s){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t}return!1},
gL:function(a){return this.f1(!0)},
W:function(a,b){var t,s,r,q,p,o,n,m
t=J.aP(b)
if(!!t.$iscS){t=this.b
s=b.b
if(typeof t!=="number")return t.W()
if(typeof s!=="number")return H.aW(s)
r=this.c
q=b.c
if(typeof r!=="number")return r.W()
if(typeof q!=="number")return H.aW(q)
p=this.d
o=b.d
if(typeof p!=="number")return p.W()
if(typeof o!=="number")return H.aW(o)
n=this.a
m=b.a
if(typeof n!=="number")return n.W()
if(typeof m!=="number")return H.aW(m)
return A.eu(t+s,r+q,p+o,n+m)}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.as()
s=this.c
if(typeof s!=="number")return s.as()
r=this.d
if(typeof r!=="number")return r.as()
q=this.a
if(typeof q!=="number")return q.as()
return A.pv(t/255+b,s/255+b,r/255+b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.W()
s=this.c
if(typeof s!=="number")return s.W()
r=this.d
if(typeof r!=="number")return r.W()
return A.eu(t+b,s+b,r+b,this.a)}throw H.r("Cannot add ["+H.w(t.gT(b))+" "+H.w(b)+"] to a Colour. Only Colour, double and int are valid.")},
a9:function(a,b){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.as()
s=this.c
if(typeof s!=="number")return s.as()
r=this.d
if(typeof r!=="number")return r.as()
q=this.a
if(typeof q!=="number")return q.as()
return A.pv(t/255*b,s/255*b,r/255*b,q/255)},
l:function(a,b){if(b===0)return this.b
if(b===1)return this.c
if(b===2)return this.d
if(b===3)return this.a
throw H.r("Colour index out of range: "+H.w(b))},
i:function(a,b,c){var t,s
t=J.cR(b)
if(t.K(b,0)||t.ad(b,3))throw H.r("Colour index out of range: "+H.w(b))
if(typeof c==="number"&&Math.floor(c)===c)if(t.H(b,0)){this.b=C.c.U(c,0,255)
this.e=!0
this.y=!0}else if(t.H(b,1)){this.c=C.c.U(c,0,255)
this.e=!0
this.y=!0}else if(t.H(b,2)){this.d=C.c.U(c,0,255)
this.e=!0
this.y=!0}else this.a=C.c.U(c,0,255)
else if(t.H(b,0)){this.b=C.c.U(J.hN(J.pm(c,255)),0,255)
this.e=!0
this.y=!0}else if(t.H(b,1)){this.c=C.c.U(J.hN(J.pm(c,255)),0,255)
this.e=!0
this.y=!0}else{s=J.hJ(c)
if(t.H(b,2)){this.d=C.c.U(J.hN(s.a9(c,255)),0,255)
this.e=!0
this.y=!0}else this.a=C.c.U(J.hN(s.a9(c,255)),0,255)}},
dl:function(a,b,c,d){this.b=C.d.U(C.d.U(a,0,255),0,255)
this.e=!0
this.y=!0
this.c=C.d.U(C.d.U(b,0,255),0,255)
this.e=!0
this.y=!0
this.d=C.d.U(C.d.U(c,0,255),0,255)
this.e=!0
this.y=!0
this.a=C.d.U(J.rG(d,0,255),0,255)}}
A.mV.prototype={
$1:function(a){return 0},
$S:function(){return{func:1,args:[P.H]}}}
F.eK.prototype={
n:function(a){return this.b}}
F.h9.prototype={
c8:function(a,b){return"("+this.b+")["+H.w(C.a.gaR(a.b.split(".")))+"]: "+H.w(b)},
bD:function(a,b){F.qy(C.m).$1(this.c8(C.m,b))},
gG:function(a){return this.b}}
F.oj.prototype={}
O.nb.prototype={
$1:function(a){return H.w(a.bR(1))+" = "+H.w(a.bR(2))+C.b.a9("../",this.a)},
$S:function(){return{func:1,args:[P.jV]}}}
O.nc.prototype={
$1:function(a){return O.Bh()},
$S:function(){return{func:1,args:[W.Q]}}}
R.eD.prototype={}
R.ox.prototype={}
R.ow.prototype={}
A.kk.prototype={
l:function(a,b){var t
if(typeof b==="string"){t=this.a
return t.a1(b)?t.l(0,b):$.$get$ov()}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
return t.a1(b)?t.l(0,b):$.$get$ov()}throw H.r(P.en(b,"'name' should be a String name or int id only",null))},
gM:function(a){var t=this.a
t=t.gaw(t)
return new H.ha(null,J.c0(t.a),t.b,[H.O(t,0),H.O(t,1)])},
j:function(a,b,c,d){var t,s
t=this.a
if(t.a1(b))this.a0(0,b)
s=this.e0()
if(typeof s!=="number")return s.at()
if(s>=256)throw H.r(P.en(s,"Palette colour ids must be in the range 0-255",null))
t.i(0,b,c)
this.b.i(0,s,c)
this.c.i(0,b,s)
this.d.i(0,s,b)},
a0:function(a,b){var t,s,r
t=this.a
if(!t.a1(b))return
s=this.c
r=s.l(0,b)
t.a0(0,b)
this.b.a0(0,r)
s.a0(0,b)
this.d.a0(0,r)},
e0:function(){var t,s
for(t=this.b,s=0;!0;){if(!t.a1(s))return s;++s}}}
A.hg.prototype={
$asC:function(){return[A.cS]},
$isC:1}
Q.oB.prototype={}
A.hm.prototype={
aT:function(a){if(a===0)return 0
return this.e1(a)},
eN:function(){return this.aT(4294967295)},
e1:function(a){var t,s
t=this.a
if(a>4294967295){s=t.bH()
this.b=C.d.aV(s*4294967295)
return C.d.aB(s*a)}else{s=t.aT(a)
this.b=s
return s}},
bU:function(a){var t=a==null
this.a=t?C.D:P.Ah(a)
if(!t)this.b=J.dF(a,1)},
eR:function(a,b){var t=a.length
if(t===0)return
t=this.aT(t)
if(t<0||t>=a.length)return H.L(a,t)
return a[t]},
eQ:function(a){return this.eR(a,!0)}}
O.hh.prototype={}
D.kY.prototype={
$1:function(a){return a.geS()},
$S:function(){return{func:1,args:[D.c_]}}}
D.c_.prototype={
n:function(a){return this.a},
gG:function(a){return this.a},
geS:function(){return this.d}}
D.hw.prototype={}
D.kz.prototype={}
S.ke.prototype={}
S.oZ.prototype={}
S.p_.prototype={}
S.p0.prototype={}
S.nw.prototype={}
S.nz.prototype={}
S.nr.prototype={}
S.oI.prototype={}
S.p2.prototype={}
S.p3.prototype={}
S.i6.prototype={}
S.oy.prototype={}
S.ou.prototype={}
S.jH.prototype={}
S.nv.prototype={}
S.nm.prototype={}
S.ie.prototype={}
S.ok.prototype={}
S.ig.prototype={}
S.km.prototype={}
S.oP.prototype={}
S.oM.prototype={}
S.oQ.prototype={}
S.nl.prototype={}
S.j3.prototype={}
S.i4.prototype={}
S.nq.prototype={}
S.np.prototype={}
S.oz.prototype={}
S.oS.prototype={}
S.oA.prototype={}
S.ny.prototype={}
S.nx.prototype={}
S.oO.prototype={}
S.oN.prototype={}
S.lf.prototype={}
S.oU.prototype={}
S.ns.prototype={}
S.nt.prototype={}
S.p1.prototype={}
S.jW.prototype={}
S.oo.prototype={}
S.op.prototype={}
S.oq.prototype={}
S.or.prototype={}
S.oJ.prototype={}
S.oK.prototype={}
S.oL.prototype={}
S.on.prototype={}
S.ot.prototype={}
S.os.prototype={}
S.nn.prototype={}
S.oW.prototype={}
S.oX.prototype={}
S.oV.prototype={}
Z.oe.prototype={}
Z.oc.prototype={}
Z.od.prototype={}
Q.cu.prototype={
k:function(a,b){return b},
n:function(a){return J.bX(this.gbd())},
a7:function(a,b){return Q.p5(this,b,H.b8(this,"cu",0),null)},
P:function(a,b){return Q.p4(this,!1,!0,null,H.b8(this,"cu",0))},
a2:function(a){return this.P(a,!0)},
$isC:1,
$asC:null}
Q.lB.prototype={
gbd:function(){return this.b},
l:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.L(t,b)
return J.nj(t[b])},
i:function(a,b,c){var t,s
t=this.b
s=this.k(c,1)
if(b>>>0!==b||b>=t.length)return H.L(t,b)
t[b]=new Q.h(c,s,this.$ti)},
gm:function(a){return this.b.length},
sm:function(a,b){C.a.sm(this.b,b)
return b},
n:function(a){return P.h3(this.b,"[","]")},
a7:function(a,b){return Q.p5(this,b,H.O(this,0),null)},
P:function(a,b){return Q.p4(this,!1,!0,null,H.O(this,0))},
a2:function(a){return this.P(a,!0)},
dr:function(a,b,c){var t,s
this.a=a
t=[[Q.h,c]]
if(b==null)this.b=H.a([],t)
else{s=new Array(b)
s.fixed$length=Array
this.b=H.a(s,t)}}}
Q.ht.prototype={$ascu:null,$asC:null,$asI:null,$asJ:null,$isI:1,$isJ:1,$isC:1}
Q.h.prototype={
n:function(a){return"("+H.w(this.a)+" @ "+H.w(this.b)+")"},
gav:function(a){return this.a},
gf5:function(){return this.b}}
Q.dz.prototype={
gbd:function(){return this.b},
gM:function(a){var t=new Q.lA(null,[H.b8(this,"dz",0)])
t.a=J.c0(this.b)
return t},
gm:function(a){return J.c1(this.b)},
n:function(a){return J.bX(this.b)},
a7:function(a,b){return Q.p5(this,b,H.b8(this,"dz",0),null)},
P:function(a,b){return Q.p4(this,!1,!0,null,H.b8(this,"dz",0))},
a2:function(a){return this.P(a,!0)}}
Q.f3.prototype={$ascu:null,$asC:null,$isC:1}
Q.lA.prototype={
gF:function(){return J.nj(this.a.gF())},
v:function(){return this.a.v()}}
Q.hu.prototype={
$asdz:function(a,b){return[b]},
$asf3:function(a,b){return[b]},
$ascu:function(a,b){return[b]},
$asC:function(a,b){return[b]}}
Q.lC.prototype={
$1:function(a){return new Q.h(this.c.$1(J.nj(a)),a.gf5(),[this.b])},
$S:function(){return H.pe(function(a,b){return{func:1,args:[[Q.h,a]]}},this,"hu")}}
J.R.prototype.dh=J.R.prototype.n
J.eH.prototype.di=J.eH.prototype.n
P.cp.prototype.dj=P.cp.prototype.b0
P.cp.prototype.dk=P.cp.prototype.b_
P.bN.prototype.bY=P.bN.prototype.R;(function installTearOffs(){installTearOff(H.ef.prototype,"geL",0,0,0,null,["$0"],["bb"],1)
installTearOff(H.cv.prototype,"gd2",0,0,0,null,["$1"],["a3"],4)
installTearOff(H.dA.prototype,"geq",0,0,0,null,["$1"],["an"],4)
installTearOff(H,"ri",1,0,0,null,["$1"],["AG"],12)
installTearOff(P,"AJ",1,0,0,null,["$1"],["A9"],3)
installTearOff(P,"AK",1,0,0,null,["$1"],["Aa"],3)
installTearOff(P,"AL",1,0,0,null,["$1"],["Ab"],3)
installTearOff(P,"rt",1,0,0,null,["$0"],["AF"],1)
installTearOff(P.hy.prototype,"gej",0,0,0,null,["$2","$1"],["cA","cz"],5)
installTearOff(P.cd.prototype,"gbo",0,0,0,null,["$2","$1"],["au","dI"],5)
var t
installTearOff(t=P.cp.prototype,"gcg",0,0,0,null,["$0"],["b3"],1)
installTearOff(t,"gci",0,0,0,null,["$0"],["b4"],1)
installTearOff(t=P.f5.prototype,"gcg",0,0,0,null,["$0"],["b3"],1)
installTearOff(t,"gci",0,0,0,null,["$0"],["b4"],1)
installTearOff(t,"gdR",0,0,0,null,["$1"],["dS"],function(){return H.pe(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"f5")})
installTearOff(t,"gdV",0,0,0,null,["$2"],["dW"],8)
installTearOff(t,"gdT",0,0,0,null,["$0"],["dU"],1)
installTearOff(P.hD.prototype,"gek",0,1,0,null,["$1"],["cB"],9)
installTearOff(P,"AO",1,0,0,null,["$2"],["tv"],13)
installTearOff(P,"AP",1,0,0,null,["$1"],["fg"],2)
installTearOff(t=W.fq.prototype,"gab",0,1,0,null,["$1"],["bD"],2)
installTearOff(t,"geG",0,0,0,null,["$1"],["cM"],2)
installTearOff(t,"gf3",0,0,0,null,["$1"],["f4"],2)
installTearOff(W.dL.prototype,"gav",0,1,0,null,["$1"],["a6"],6)
installTearOff(W.fw.prototype,"gav",0,1,0,null,["$1"],["a6"],6)
installTearOff(W.fH.prototype,"gav",0,1,0,null,["$1"],["a6"],10)
installTearOff(W.fK.prototype,"gav",0,1,0,null,["$1"],["a6"],7)
installTearOff(W.hp.prototype,"gav",0,1,0,null,["$1"],["a6"],7)
installTearOff(W.f8.prototype,"gav",0,1,0,null,["$1"],["a6"],11)
installTearOff(R,"dp",1,0,0,null,["$1"],["zv"],0)
installTearOff(R,"zh",1,0,0,null,["$1"],["zj"],0)
installTearOff(R,"qK",1,0,0,null,["$1"],["zu"],0)
installTearOff(R,"bA",1,0,0,null,["$1"],["zt"],0)
installTearOff(R,"oH",1,0,0,null,["$1"],["zs"],0)
installTearOff(R,"qJ",1,0,0,null,["$1"],["zq"],0)
installTearOff(R,"hl",1,0,0,null,["$1"],["zp"],0)
installTearOff(R,"dn",1,0,0,null,["$1"],["zm"],0)
installTearOff(R,"cZ",1,0,0,null,["$1"],["zo"],0)
installTearOff(R,"e9",1,0,0,null,["$1"],["zr"],0)
installTearOff(R,"oG",1,0,0,null,["$1"],["zn"],0)
installTearOff(R,"t",1,0,0,null,["$1"],["zk"],0)
installTearOff(R,"zi",1,0,0,null,["$1"],["zl"],0)
installTearOff(O,"qS",1,0,0,null,["$0"],["B4"],14)
installTearOff(F.h9.prototype,"gab",0,1,0,null,["$1"],["bD"],2)
installTearOff(O,"B6",1,0,0,null,["$1"],["B8"],15)})();(function inheritance(){inherit(P.aZ,null)
var t=P.aZ
inherit(H.og,t)
inherit(J.R,t)
inherit(J.hS,t)
inherit(P.eY,t)
inherit(P.C,t)
inherit(H.dl,t)
inherit(P.h4,t)
inherit(H.fI,t)
inherit(H.lo,t)
inherit(H.dK,t)
inherit(H.mr,t)
inherit(H.ef,t)
inherit(H.lY,t)
inherit(H.dB,t)
inherit(H.mq,t)
inherit(H.lM,t)
inherit(H.ea,t)
inherit(H.li,t)
inherit(H.cD,t)
inherit(H.cv,t)
inherit(H.dA,t)
inherit(H.ib,t)
inherit(H.ky,t)
inherit(H.ll,t)
inherit(P.db,t)
inherit(H.fy,t)
inherit(H.hF,t)
inherit(H.cQ,t)
inherit(H.p,t)
inherit(H.jI,t)
inherit(H.jK,t)
inherit(H.h6,t)
inherit(H.mt,t)
inherit(H.lG,t)
inherit(P.hy,t)
inherit(P.hC,t)
inherit(P.cd,t)
inherit(P.hx,t)
inherit(P.du,t)
inherit(P.kZ,t)
inherit(P.cp,t)
inherit(P.hz,t)
inherit(P.lU,t)
inherit(P.mv,t)
inherit(P.dJ,t)
inherit(P.mO,t)
inherit(P.mh,t)
inherit(P.mj,t)
inherit(P.kN,t)
inherit(P.mo,t)
inherit(P.dD,t)
inherit(P.e3,t)
inherit(P.bN,t)
inherit(P.mJ,t)
inherit(P.jR,t)
inherit(P.mp,t)
inherit(P.et,t)
inherit(P.ev,t)
inherit(P.mL,t)
inherit(P.cw,t)
inherit(P.bk,t)
inherit(P.ew,t)
inherit(P.cr,t)
inherit(P.cF,t)
inherit(P.kh,t)
inherit(P.hr,t)
inherit(P.m2,t)
inherit(P.bp,t)
inherit(P.it,t)
inherit(P.I,t)
inherit(P.ct,t)
inherit(P.jV,t)
inherit(P.dr,t)
inherit(P.H,t)
inherit(P.co,t)
inherit(P.dx,t)
inherit(P.hG,t)
inherit(P.lp,t)
inherit(P.mG,t)
inherit(W.fq,t)
inherit(W.hf,t)
inherit(W.fr,t)
inherit(W.cX,t)
inherit(W.j0,t)
inherit(W.mI,t)
inherit(P.mn,t)
inherit(P.mx,t)
inherit(P.cC,t)
inherit(P.d4,t)
inherit(T.fk,t)
inherit(B.e_,t)
inherit(N.ab,t)
inherit(L.dI,t)
inherit(A.hg,t)
inherit(T.eb,t)
inherit(O.cl,t)
inherit(M.fn,t)
inherit(X.fA,t)
inherit(X.fo,t)
inherit(M.ey,t)
inherit(Z.fz,t)
inherit(E.kg,t)
inherit(E.E,t)
inherit(A.a3,t)
inherit(U.c,t)
inherit(Y.dq,t)
inherit(X.z,t)
inherit(G.a2,t)
inherit(A.er,t)
inherit(A.cS,t)
inherit(F.eK,t)
inherit(F.h9,t)
inherit(A.hm,t)
inherit(O.hh,t)
inherit(D.c_,t)
inherit(Q.cu,t)
inherit(Q.h,t)
t=J.R
inherit(J.ju,t)
inherit(J.jw,t)
inherit(J.eH,t)
inherit(J.dh,t)
inherit(J.e4,t)
inherit(J.di,t)
inherit(H.eP,t)
inherit(H.e7,t)
inherit(W.dM,t)
inherit(W.fm,t)
inherit(W.fN,t)
inherit(W.fu,t)
inherit(W.ij,t)
inherit(W.fv,t)
inherit(W.fw,t)
inherit(W.Q,t)
inherit(W.fO,t)
inherit(W.jM,t)
inherit(W.kb,t)
inherit(W.kc,t)
inherit(W.fP,t)
inherit(W.lP,t)
inherit(W.fQ,t)
inherit(P.cg,t)
inherit(P.fR,t)
inherit(P.ch,t)
inherit(P.fS,t)
inherit(P.kA,t)
t=J.eH
inherit(J.kq,t)
inherit(J.dw,t)
inherit(J.dj,t)
inherit(F.oj,t)
inherit(R.eD,t)
inherit(R.ox,t)
inherit(R.ow,t)
inherit(S.ke,t)
inherit(S.oZ,t)
inherit(S.p_,t)
inherit(S.p0,t)
inherit(S.nw,t)
inherit(S.nz,t)
inherit(S.nr,t)
inherit(S.p2,t)
inherit(S.p3,t)
inherit(S.ie,t)
inherit(S.oP,t)
inherit(S.oQ,t)
inherit(S.nl,t)
inherit(S.j3,t)
inherit(S.i4,t)
inherit(S.nq,t)
inherit(S.np,t)
inherit(S.ny,t)
inherit(S.lf,t)
inherit(S.nt,t)
inherit(S.jW,t)
inherit(S.op,t)
inherit(S.or,t)
inherit(S.oK,t)
inherit(S.oL,t)
inherit(S.ot,t)
inherit(S.os,t)
inherit(S.nn,t)
inherit(S.oW,t)
inherit(S.oX,t)
inherit(S.oV,t)
inherit(Z.oe,t)
inherit(Z.oc,t)
inherit(Z.od,t)
inherit(J.of,J.dh)
t=J.e4
inherit(J.h5,t)
inherit(J.jv,t)
inherit(P.h8,P.eY)
t=P.h8
inherit(H.f1,t)
inherit(W.hB,t)
inherit(H.i9,H.f1)
t=P.C
inherit(H.J,t)
inherit(H.eL,t)
inherit(H.d5,t)
inherit(P.h2,t)
t=H.J
inherit(H.dk,t)
inherit(H.jJ,t)
inherit(P.mi,t)
t=H.dk
inherit(H.l5,t)
inherit(H.e6,t)
inherit(P.jL,t)
inherit(H.fx,H.eL)
t=P.h4
inherit(H.ha,t)
inherit(H.dy,t)
inherit(Q.lA,t)
t=H.dK
inherit(H.ne,t)
inherit(H.nf,t)
inherit(H.mm,t)
inherit(H.lZ,t)
inherit(H.jh,t)
inherit(H.ji,t)
inherit(H.mu,t)
inherit(H.lj,t)
inherit(H.lk,t)
inherit(H.ng,t)
inherit(H.n4,t)
inherit(H.n5,t)
inherit(H.n6,t)
inherit(H.n7,t)
inherit(H.n8,t)
inherit(H.l9,t)
inherit(H.jy,t)
inherit(H.n_,t)
inherit(H.n0,t)
inherit(H.n1,t)
inherit(P.lJ,t)
inherit(P.lI,t)
inherit(P.lK,t)
inherit(P.lL,t)
inherit(P.m3,t)
inherit(P.mb,t)
inherit(P.m7,t)
inherit(P.m8,t)
inherit(P.m9,t)
inherit(P.m5,t)
inherit(P.ma,t)
inherit(P.m4,t)
inherit(P.me,t)
inherit(P.mf,t)
inherit(P.md,t)
inherit(P.mc,t)
inherit(P.l1,t)
inherit(P.l2,t)
inherit(P.l_,t)
inherit(P.l0,t)
inherit(P.l3,t)
inherit(P.l4,t)
inherit(P.lO,t)
inherit(P.lN,t)
inherit(P.mw,t)
inherit(P.mP,t)
inherit(P.mU,t)
inherit(P.mz,t)
inherit(P.mA,t)
inherit(P.mB,t)
inherit(P.mk,t)
inherit(P.jS,t)
inherit(P.mN,t)
inherit(P.mM,t)
inherit(P.io,t)
inherit(P.ip,t)
inherit(P.lt,t)
inherit(P.lq,t)
inherit(P.lr,t)
inherit(P.ls,t)
inherit(P.mW,t)
inherit(P.mR,t)
inherit(P.mQ,t)
inherit(P.mS,t)
inherit(P.mT,t)
inherit(W.lR,t)
inherit(W.j9,t)
inherit(W.ja,t)
inherit(W.m1,t)
inherit(L.hT,t)
inherit(B.jg,t)
inherit(A.js,t)
inherit(A.jr,t)
inherit(T.kF,t)
inherit(O.n9,t)
inherit(G.jq,t)
inherit(A.mV,t)
inherit(O.nb,t)
inherit(O.nc,t)
inherit(D.kY,t)
inherit(Q.lC,t)
t=H.lM
inherit(H.eg,t)
inherit(H.fa,t)
inherit(H.ic,H.ib)
t=P.db
inherit(H.he,t)
inherit(H.jz,t)
inherit(H.ln,t)
inherit(H.i7,t)
inherit(H.kE,t)
inherit(P.eX,t)
inherit(P.cB,t)
inherit(P.aN,t)
inherit(P.hs,t)
inherit(P.d0,t)
inherit(P.c6,t)
inherit(P.ih,t)
t=H.l9
inherit(H.kX,t)
inherit(H.ep,t)
t=H.e7
inherit(H.k3,t)
inherit(H.hb,t)
t=H.hb
inherit(H.eS,t)
inherit(H.eT,t)
inherit(H.eU,H.eS)
inherit(H.eQ,H.eU)
inherit(H.eV,H.eT)
inherit(H.eR,H.eV)
t=H.eQ
inherit(H.k4,t)
inherit(H.k5,t)
t=H.eR
inherit(H.k6,t)
inherit(H.k7,t)
inherit(H.k8,t)
inherit(H.k9,t)
inherit(H.ka,t)
inherit(H.hc,t)
inherit(H.eW,t)
inherit(P.lH,P.hy)
t=P.hz
inherit(P.lT,t)
inherit(P.lV,t)
inherit(P.mH,P.mv)
t=P.du
inherit(P.f4,t)
inherit(W.m_,t)
inherit(P.f5,P.cp)
inherit(P.ms,P.f4)
inherit(P.my,P.mO)
inherit(P.hE,H.p)
inherit(P.kM,P.kN)
inherit(P.ml,P.kM)
inherit(P.hD,P.ml)
inherit(P.f2,P.jR)
t=P.et
inherit(P.hX,t)
inherit(P.ir,t)
t=P.ev
inherit(P.hY,t)
inherit(P.lw,t)
inherit(P.lv,P.ir)
t=P.cr
inherit(P.V,t)
inherit(P.K,t)
t=P.cB
inherit(P.eZ,t)
inherit(P.je,t)
inherit(P.lS,P.hG)
t=W.dM
inherit(W.b9,t)
inherit(W.fM,t)
inherit(W.eO,t)
inherit(W.hv,t)
inherit(W.mF,t)
t=W.b9
inherit(W.cT,t)
inherit(W.da,t)
inherit(W.ft,t)
inherit(W.ed,t)
inherit(W.lW,t)
t=W.cT
inherit(W.ad,t)
inherit(P.bJ,t)
t=W.ad
inherit(W.dG,t)
inherit(W.hR,t)
inherit(W.hZ,t)
inherit(W.i0,t)
inherit(W.es,t)
inherit(W.iq,t)
inherit(W.iZ,t)
inherit(W.fK,t)
inherit(W.jb,t)
inherit(W.dZ,t)
inherit(W.jf,t)
inherit(W.jB,t)
inherit(W.eI,t)
inherit(W.jQ,t)
inherit(W.eN,t)
inherit(W.jX,t)
inherit(W.kf,t)
inherit(W.ki,t)
inherit(W.kl,t)
inherit(W.hp,t)
inherit(W.kP,t)
inherit(W.lc,t)
inherit(W.mg,t)
inherit(W.dL,W.fN)
inherit(W.lQ,W.hf)
t=W.Q
inherit(W.ex,t)
inherit(W.kT,t)
inherit(W.kU,t)
inherit(W.bP,W.fm)
inherit(W.fT,W.fO)
inherit(W.fH,W.fT)
inherit(W.df,W.fM)
inherit(W.jY,W.eO)
inherit(W.fU,W.fP)
inherit(W.hd,W.fU)
inherit(W.lX,W.fv)
inherit(W.fV,W.fQ)
inherit(W.f8,W.fV)
inherit(W.p7,W.m_)
inherit(W.m0,P.kZ)
t=P.bJ
inherit(P.bQ,t)
inherit(P.d8,t)
inherit(P.iu,t)
inherit(P.iv,t)
inherit(P.iw,t)
inherit(P.ix,t)
inherit(P.iy,t)
inherit(P.iz,t)
inherit(P.iA,t)
inherit(P.iB,t)
inherit(P.iC,t)
inherit(P.iD,t)
inherit(P.iE,t)
inherit(P.iF,t)
inherit(P.iG,t)
inherit(P.iH,t)
inherit(P.iI,t)
inherit(P.iJ,t)
inherit(P.j_,t)
inherit(P.jT,t)
inherit(P.jU,t)
inherit(P.kp,t)
inherit(P.kK,t)
inherit(P.l8,t)
inherit(P.lx,t)
inherit(P.f6,t)
inherit(P.mC,t)
inherit(P.mD,t)
inherit(P.mE,t)
t=P.bQ
inherit(P.hP,t)
inherit(P.jc,t)
inherit(P.l6,t)
inherit(P.dv,t)
inherit(P.lu,t)
inherit(P.fW,P.fR)
inherit(P.jE,P.fW)
inherit(P.fX,P.fS)
inherit(P.kd,P.fX)
inherit(P.le,P.dv)
inherit(T.fj,P.h2)
t=B.e_
inherit(S.hQ,t)
inherit(M.hV,t)
inherit(A.ia,t)
inherit(M.id,t)
inherit(V.ik,t)
inherit(U.iK,t)
inherit(N.jA,t)
inherit(F.k2,t)
inherit(G.ks,t)
inherit(Q.kD,t)
inherit(N.kR,t)
inherit(D.la,t)
inherit(V.lb,t)
inherit(F.lE,t)
t=N.ab
inherit(T.ii,t)
inherit(R.ku,t)
t=T.ii
inherit(K.bw,t)
inherit(S.bl,t)
inherit(T.bE,t)
inherit(M.bh,t)
inherit(A.kk,A.hg)
inherit(L.ag,A.kk)
t=T.eb
inherit(O.hW,t)
inherit(Z.i3,t)
inherit(Y.j4,t)
inherit(Y.j5,t)
inherit(B.j7,t)
inherit(S.jC,t)
inherit(Z.jN,t)
inherit(S.jO,t)
inherit(U.jP,t)
inherit(E.k1,t)
inherit(V.kj,t)
inherit(N.kt,t)
inherit(N.kC,t)
inherit(E.kG,t)
inherit(Y.kI,t)
inherit(L.kJ,t)
inherit(S.kL,t)
inherit(R.l7,t)
inherit(U.lg,t)
inherit(E.lz,t)
inherit(M.lD,t)
t=O.cl
inherit(O.f0,t)
inherit(O.d9,t)
t=O.f0
inherit(Y.ld,t)
inherit(Y.i5,t)
t=L.dI
inherit(T.i_,t)
inherit(T.i2,t)
inherit(U.il,t)
inherit(Z.im,t)
inherit(L.iL,t)
inherit(O.j1,t)
inherit(T.j6,t)
inherit(X.j8,t)
inherit(Q.jD,t)
inherit(K.jF,t)
inherit(G.jG,t)
inherit(L.jZ,t)
inherit(V.k_,t)
inherit(S.k0,t)
inherit(E.kv,t)
inherit(L.kw,t)
inherit(Z.kB,t)
inherit(Y.kH,t)
inherit(L.kO,t)
inherit(O.kQ,t)
inherit(N.kS,t)
inherit(U.kW,t)
inherit(N.lh,t)
inherit(Q.ly,t)
inherit(S.fp,S.bl)
t=O.d9
inherit(V.j2,t)
inherit(Q.jd,t)
inherit(M.kV,t)
inherit(B.lF,t)
inherit(E.eE,E.kg)
t=E.E
inherit(E.eo,t)
inherit(E.hU,t)
inherit(Q.kr,Q.jd)
inherit(U.a1,U.c)
t=R.ku
inherit(R.X,t)
inherit(R.W,t)
inherit(R.a6,t)
inherit(R.bn,R.a6)
t=Y.dq
inherit(Y.N,t)
inherit(Y.Y,t)
inherit(Y.bd,t)
inherit(Y.i8,t)
inherit(Y.hi,t)
inherit(Y.fJ,t)
inherit(Y.hj,t)
t=Y.N
inherit(Y.cf,t)
inherit(Y.bm,t)
inherit(U.ae,A.a3)
t=G.a2
inherit(G.aK,t)
inherit(G.bq,t)
inherit(G.d,t)
inherit(G.a9,G.bq)
inherit(Q.oB,E.eE)
t=D.c_
inherit(D.hw,t)
inherit(D.kz,t)
t=S.ke
inherit(S.oI,t)
inherit(S.i6,t)
inherit(S.jH,t)
inherit(S.on,t)
t=S.i6
inherit(S.oy,t)
inherit(S.ou,t)
t=S.jH
inherit(S.nv,t)
inherit(S.nm,t)
t=S.ie
inherit(S.ok,t)
inherit(S.ig,t)
inherit(S.km,S.ig)
inherit(S.oM,S.km)
t=S.i4
inherit(S.oz,t)
inherit(S.oN,t)
t=S.j3
inherit(S.oS,t)
inherit(S.oA,t)
inherit(S.nx,t)
inherit(S.oO,t)
t=S.lf
inherit(S.oU,t)
inherit(S.ns,t)
inherit(S.p1,t)
t=S.jW
inherit(S.oo,t)
inherit(S.oq,t)
inherit(S.oJ,t)
t=Q.cu
inherit(Q.ht,t)
inherit(Q.f3,t)
inherit(Q.lB,Q.ht)
inherit(Q.dz,Q.f3)
inherit(Q.hu,Q.dz)
mixin(H.f1,H.lo)
mixin(H.eS,P.bN)
mixin(H.eU,H.fI)
mixin(H.eT,P.bN)
mixin(H.eV,H.fI)
mixin(P.eY,P.bN)
mixin(P.f2,P.mJ)
mixin(W.fN,W.fr)
mixin(W.hf,W.fr)
mixin(W.fO,P.bN)
mixin(W.fT,W.cX)
mixin(W.fP,P.bN)
mixin(W.fU,W.cX)
mixin(W.fQ,P.bN)
mixin(W.fV,W.cX)
mixin(P.fR,P.bN)
mixin(P.fW,W.cX)
mixin(P.fS,P.bN)
mixin(P.fX,W.cX)
mixin(A.hg,P.e3)
mixin(Q.ht,P.bN)
mixin(Q.f3,P.e3)})();(function constants(){C.E=W.df.prototype
C.F=J.R.prototype
C.a=J.dh.prototype
C.c=J.h5.prototype
C.d=J.e4.prototype
C.b=J.di.prototype
C.M=J.dj.prototype
C.y=J.kq.prototype
C.p=J.dw.prototype
C.A=new P.hY(!1)
C.z=new P.hX(C.A)
C.h=new W.fq()
C.B=new P.kh()
C.C=new P.lU()
C.D=new P.mn()
C.e=new P.my()
C.f=new W.mI()
C.q=new P.cF(0)
C.G=function() {  var toStringFunction = Object.prototype.toString;  function getTag(o) {    var s = toStringFunction.call(o);    return s.substring(8, s.length - 1);  }  function getUnknownTag(object, tag) {    if (/^HTML[A-Z].*Element$/.test(tag)) {      var name = toStringFunction.call(object);      if (name == "[object Object]") return null;      return "HTMLElement";    }  }  function getUnknownTagGenericBrowser(object, tag) {    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";    return getUnknownTag(object, tag);  }  function prototypeForTag(tag) {    if (typeof window == "undefined") return null;    if (typeof window[tag] == "undefined") return null;    var constructor = window[tag];    if (typeof constructor != "function") return null;    return constructor.prototype;  }  function discriminator(tag) { return null; }  var isBrowser = typeof navigator == "object";  return {    getTag: getTag,    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,    prototypeForTag: prototypeForTag,    discriminator: discriminator };}
C.r=function(hooks) { return hooks; }
C.H=function(hooks) {  if (typeof dartExperimentalFixupGetTag != "function") return hooks;  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);}
C.I=function(hooks) {  var getTag = hooks.getTag;  var prototypeForTag = hooks.prototypeForTag;  function getTagFixed(o) {    var tag = getTag(o);    if (tag == "Document") {      // "Document", so we check for the xmlVersion property, which is the empty      if (!!o.xmlVersion) return "!Document";      return "!HTMLDocument";    }    return tag;  }  function prototypeForTagFixed(tag) {    if (tag == "Document") return null;    return prototypeForTag(tag);  }  hooks.getTag = getTagFixed;  hooks.prototypeForTag = prototypeForTagFixed;}
C.J=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Firefox") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "GeoGeolocation": "Geolocation",    "Location": "!Location",    "WorkerMessageEvent": "MessageEvent",    "XMLDocument": "!Document"};  function getTagFirefox(o) {    var tag = getTag(o);    return quickMap[tag] || tag;  }  hooks.getTag = getTagFirefox;}
C.t=function getTagFallback(o) {  var s = Object.prototype.toString.call(o);  return s.substring(8, s.length - 1);}
C.K=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Trident/") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "HTMLDDElement": "HTMLElement",    "HTMLDTElement": "HTMLElement",    "HTMLPhraseElement": "HTMLElement",    "Position": "Geoposition"  };  function getTagIE(o) {    var tag = getTag(o);    var newTag = quickMap[tag];    if (newTag) return newTag;    if (tag == "Object") {      if (window.DataView && (o instanceof window.DataView)) return "DataView";    }    return tag;  }  function prototypeForTagIE(tag) {    var constructor = window[tag];    if (constructor == null) return null;    return constructor.prototype;  }  hooks.getTag = getTagIE;  hooks.prototypeForTag = prototypeForTagIE;}
C.L=function(getTagFallback) {  return function(hooks) {    if (typeof navigator != "object") return hooks;    var ua = navigator.userAgent;    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;    if (ua.indexOf("Chrome") >= 0) {      function confirm(p) {        return typeof window == "object" && window[p] && window[p].name == p;      }      if (confirm("Window") && confirm("HTMLElement")) return hooks;    }    hooks.getTag = getTagFallback;  };}
C.u=H.a(makeConstList([127,2047,65535,1114111]),[P.K])
C.i=makeConstList([0,0,32776,33792,1,10240,0,0])
C.j=makeConstList([0,0,65490,45055,65535,34815,65534,18431])
C.k=makeConstList([0,0,26624,1023,65534,2047,65534,2047])
C.O=makeConstList([0,0,32722,12287,65534,34815,65534,18431])
C.v=makeConstList([0,0,24576,1023,65534,34815,65534,18431])
C.w=makeConstList([0,0,32754,11263,65534,34815,65534,18431])
C.x=makeConstList([0,0,65490,12287,65535,34815,65534,18431])
C.m=new F.eK(0,"LogLevel.ERROR")
C.n=new F.eK(1,"LogLevel.WARN")
C.P=new F.eK(3,"LogLevel.VERBOSE")
C.N=H.a(makeConstList([]),[P.H])
C.Q=new H.ic(0,{},C.N,[P.H,P.H])
C.R=H.bB("cC")
C.S=H.bB("Bi")
C.o=H.bB("Bj")
C.T=H.bB("Bk")
C.U=H.bB("Bl")
C.V=H.bB("Bn")
C.W=H.bB("Bo")
C.X=H.bB("Bp")
C.Y=H.bB("jx")
C.Z=H.bB("ct")
C.a_=H.bB("H")
C.a0=H.bB("Bs")
C.a1=H.bB("Bt")
C.a2=H.bB("Bu")
C.a3=H.bB("d4")
C.a4=H.bB("cw")
C.a5=H.bB("V")
C.a6=H.bB("K")
C.a7=H.bB("cr")
C.l=new P.lv(!1)})();(function staticFields(){$.qF="$cachedFunction"
$.qG="$cachedInvocation"
$.cE=0
$.eq=null
$.ps=null
$.pf=null
$.rq=null
$.rA=null
$.mX=null
$.n3=null
$.pg=null
$.ei=null
$.fb=null
$.fc=null
$.pa=!1
$.b4=C.e
$.pF=0
$.pB=null
$.pA=null
$.pz=null
$.pC=null
$.py=null
$.ti=null
$.tk=null
$.rZ=null
$.t_=null
$.rY=null
$.t3=null
$.t9=null
$.t7=null
$.tl=null
$.tc=null
$.t4=null
$.t6=null
$.t0=null
$.t8=null
$.ta=null
$.td=null
$.tf=null
$.tg=null
$.te=null
$.t5=null
$.t1=null
$.th=null
$.t2=null
$.tj=null
$.tb=null
$.ak="accent"
$.am="aspect1"
$.al="aspect2"
$.av="shoe1"
$.au="shoe2"
$.ao="cloak1"
$.ap="cloak2"
$.an="cloak3"
$.at="shirt1"
$.as="shirt2"
$.ar="pants1"
$.aq="pants2"
$.az=1300
$.j=3
$.k=2
$.D=1
$.v=0.1
$.tH=1
$.tG=-1
$.nH=null
$.cU=null
$.pI=null
$.dc=null
$.dW=null
$.fC=null
$.nA=null
$.iR=null
$.iW=null
$.fD=null
$.fB=null
$.pK=null
$.iX=null
$.dR=null
$.cM=null
$.pJ=null
$.iM=null
$.iY=null
$.dU=null
$.tE=null
$.tC=null
$.tF=null
$.eC=null
$.dN=null
$.bV=null
$.cj=null
$.dT=null
$.iV=null
$.bL=null
$.bT=null
$.nC=null
$.fF=null
$.dS=null
$.tD=null
$.ez=null
$.ck=null
$.cN=null
$.fG=null
$.cG=null
$.eB=null
$.bK=null
$.iU=null
$.pH=null
$.b_=null
$.bY=null
$.c8=null
$.bU=null
$.iT=null
$.bO=null
$.cJ=null
$.cH=null
$.dQ=null
$.cI=null
$.cK=null
$.iN=null
$.de=null
$.eA=null
$.iS=null
$.pG=null
$.c7=null
$.c9=null
$.b5=null
$.dO=null
$.dd=null
$.nG=null
$.iO=null
$.fE=null
$.nE=null
$.ca=null
$.nI=null
$.nB=null
$.pM=null
$.dP=null
$.c2=null
$.cV=null
$.cL=null
$.dX=null
$.nD=null
$.nF=null
$.pL=null
$.iP=null
$.iQ=null
$.dV=null
$.nK=null
$.tI=null
$.pP=null
$.pO=null
$.tJ=null
$.nJ=null
$.tT=null
$.tM=null
$.tN=null
$.tO=null
$.tP=null
$.tQ=null
$.tR=null
$.tS=null
$.tV=null
$.tW=null
$.tX=null
$.tY=null
$.tZ=null
$.u_=null
$.tU=null
$.l="PLAYER1TAG"
$.d_="PLAYER2TAG"
$.u="DENIZENTAG"
$.q="CONSORTTAG"
$.G="CONSORTSOUNDTAG"
$.aM="MCGUFFINTAG"
$.ac="TAGPHYSICALMCGUFFIN"
$.bR="TAGWEAPON"
$.zF=null
$.zR=null
$.zA=null
$.zE=null
$.zI=null
$.zN=null
$.zL=null
$.zT=null
$.zS=null
$.zM=null
$.zV=null
$.zH=null
$.zU=null
$.zP=null
$.zO=null
$.zQ=null
$.zD=null
$.zC=null
$.zK=null
$.zJ=null
$.zG=null
$.zB=null
$.ru=!1
$.AT=!1
$.zX=!0
$.oR=null
$.qM=null
$.A3=13
$.aJ=3
$.bv=2
$.aE=1
$.o9=0
$.A=1
$.a_=3
$.y=4
$.o8=6
$.oa=7
$.a8=8
$.o=9
$.m=10
$.q3=null
$.e2=null
$.nW=null
$.o5=null
$.o1=null
$.pU=null
$.nR=null
$.o0=null
$.eG=null
$.q1=null
$.qn=null
$.pX=null
$.q2=null
$.nS=null
$.o_=null
$.qp=null
$.qr=null
$.nN=null
$.h0=null
$.fZ=null
$.aG=null
$.qg=null
$.nM=null
$.qb=null
$.e1=null
$.pW=null
$.qs=null
$.qo=null
$.qm=null
$.nY=null
$.jk=null
$.dg=null
$.qq=null
$.nP=null
$.nT=null
$.h1=null
$.qk=null
$.cO=null
$.eF=null
$.o7=null
$.ql=null
$.o6=null
$.o3=null
$.o4=null
$.jm=null
$.h_=null
$.ur=null
$.q5=null
$.qa=null
$.qj=null
$.qi=null
$.x=null
$.q_=null
$.jj=null
$.br=null
$.b0=null
$.bt=null
$.U=null
$.aH=null
$.bI=null
$.F=null
$.M=null
$.aB=null
$.aX=null
$.by=null
$.b6=null
$.bb=null
$.bM=null
$.aR=null
$.bg=null
$.bu=null
$.Z=null
$.aA=null
$.aY=null
$.aO=null
$.aa=null
$.bH=null
$.aL=null
$.ax=null
$.bz=null
$.aU=null
$.ah=null
$.be=null
$.bC=null
$.aF=null
$.bc=null
$.ba=null
$.a4=null
$.bs=null
$.a7=null
$.b3=null
$.bf=null
$.aQ=null
$.b2=null
$.aC=null
$.b1=null
$.aI=null
$.T=null
$.ay=null
$.aD=null
$.aT=null
$.aw=null
$.ai=null
$.a0=null
$.S=null
$.P=null
$.af=null
$.aS=null
$.b7=null
$.aV=null
$.vL=null
$.yt=null
$.z0=null
$.vg=null
$.yq=null
$.vM=null
$.pS=null
$.yF=null
$.wN=null
$.vH=null
$.ul=null
$.xn=null
$.o2=null
$.pY=null
$.xN=null
$.vd=null
$.ww=null
$.vb=null
$.nO=null
$.uX=null
$.vZ=null
$.vl=null
$.wG=null
$.yN=null
$.vN=null
$.nQ=null
$.wH=null
$.vj=null
$.v2=null
$.qf=null
$.ue=null
$.pT=null
$.wp=null
$.nX=null
$.x1=null
$.wW=null
$.ui=null
$.v5=null
$.xX=null
$.uk=null
$.yp=null
$.wv=null
$.vs=null
$.xH=null
$.yj=null
$.nV=null
$.wR=null
$.xE=null
$.vk=null
$.u7=null
$.yQ=null
$.wz=null
$.v1=null
$.yE=null
$.x4=null
$.v8=null
$.yo=null
$.vC=null
$.y4=null
$.y5=null
$.ug=null
$.wY=null
$.vm=null
$.vw=null
$.z4=null
$.jp=null
$.xV=null
$.ym=null
$.jl=null
$.uR=null
$.xe=null
$.xi=null
$.ud=null
$.vB=null
$.yn=null
$.x3=null
$.yH=null
$.xJ=null
$.xj=null
$.q9=null
$.y8=null
$.yV=null
$.ys=null
$.wc=null
$.xv=null
$.wd=null
$.xY=null
$.yT=null
$.wF=null
$.vy=null
$.vV=null
$.uH=null
$.xF=null
$.vT=null
$.w0=null
$.vo=null
$.y7=null
$.e0=null
$.x8=null
$.q7=null
$.we=null
$.wb=null
$.yY=null
$.uN=null
$.xT=null
$.xU=null
$.xS=null
$.xR=null
$.yf=null
$.w1=null
$.wZ=null
$.yi=null
$.wQ=null
$.x9=null
$.vh=null
$.yS=null
$.wX=null
$.vE=null
$.vF=null
$.xh=null
$.z3=null
$.wt=null
$.yR=null
$.qd=null
$.y3=null
$.wD=null
$.jo=null
$.wn=null
$.xx=null
$.uM=null
$.vI=null
$.y_=null
$.x_=null
$.yM=null
$.qc=null
$.x7=null
$.uT=null
$.ve=null
$.xt=null
$.yz=null
$.xZ=null
$.nL=null
$.qh=null
$.ya=null
$.yU=null
$.wa=null
$.uv=null
$.uE=null
$.yx=null
$.xb=null
$.wO=null
$.xc=null
$.yu=null
$.wo=null
$.uh=null
$.w_=null
$.wM=null
$.yc=null
$.vS=null
$.uL=null
$.xP=null
$.xQ=null
$.yK=null
$.y1=null
$.nZ=null
$.pZ=null
$.v9=null
$.q0=null
$.wi=null
$.q8=null
$.xz=null
$.wV=null
$.xL=null
$.nU=null
$.jn=null
$.q6=null
$.vu=null
$.vX=null
$.qe=null
$.q4=null
$.v4=null
$.yB=null
$.uY=null
$.xl=null
$.wf=null
$.yh=null
$.wP=null
$.us=null
$.wg=null
$.vr=null
$.xp=null
$.wy=null
$.wU=null
$.wE=null
$.wI=null
$.xO=null
$.xK=null
$.ua=null
$.yy=null
$.xC=null
$.vi=null
$.vn=null
$.vW=null
$.yv=null
$.vP=null
$.wA=null
$.uz=null
$.vJ=null
$.vq=null
$.xd=null
$.vz=null
$.xW=null
$.wC=null
$.pV=null
$.xy=null
$.wh=null
$.vQ=null
$.u8=null
$.uf=null
$.xa=null
$.xk=null
$.wx=null
$.w8=null
$.yP=null
$.uC=null
$.vR=null
$.wB=null
$.vf=null
$.ye=null
$.v3=null
$.y0=null
$.uA=null
$.yA=null
$.wK=null
$.uu=null
$.xI=null
$.xu=null
$.va=null
$.w2=null
$.uS=null
$.yw=null
$.wl=null
$.yL=null
$.uU=null
$.w3=null
$.uV=null
$.vc=null
$.xB=null
$.v6=null
$.wm=null
$.x0=null
$.uO=null
$.yg=null
$.z_=null
$.y6=null
$.wS=null
$.yd=null
$.wT=null
$.un=null
$.u9=null
$.wL=null
$.ux=null
$.uW=null
$.uo=null
$.ut=null
$.x6=null
$.xq=null
$.yD=null
$.wj=null
$.yZ=null
$.xG=null
$.xD=null
$.wq=null
$.wk=null
$.v_=null
$.w6=null
$.wJ=null
$.xf=null
$.y9=null
$.uc=null
$.yW=null
$.vx=null
$.yk=null
$.vp=null
$.um=null
$.uP=null
$.uG=null
$.z2=null
$.uQ=null
$.vA=null
$.uZ=null
$.yJ=null
$.yb=null
$.yC=null
$.ub=null
$.xM=null
$.wr=null
$.wu=null
$.yO=null
$.yl=null
$.vY=null
$.vG=null
$.xs=null
$.yX=null
$.vK=null
$.ws=null
$.uK=null
$.w9=null
$.w7=null
$.y2=null
$.xr=null
$.w4=null
$.uF=null
$.yr=null
$.xg=null
$.yG=null
$.z1=null
$.uq=null
$.up=null
$.uB=null
$.vD=null
$.xA=null
$.v7=null
$.xw=null
$.vt=null
$.uj=null
$.uD=null
$.x5=null
$.vv=null
$.xo=null
$.uJ=null
$.vO=null
$.yI=null
$.uw=null
$.vU=null
$.xm=null
$.uI=null
$.w5=null
$.x2=null
$.uy=null
$.v0=null
$.dY="OWNER"
$.qx=!1
$.rC=""
$.qN=null
$.A0=null
$.d3=null
$.dt=null
$.A_=null
$.d2=null
$.cn=null
$.c4=null
$.ds=null
$.ec=null
$.f_=null
$.d1=null
$.bW=null
$.qO=!1})();(function lazyInitializers(){lazy($,"px","$get$px",function(){return H.rw("_$dart_dartClosure")})
lazy($,"oh","$get$oh",function(){return H.rw("_$dart_js")})
lazy($,"pQ","$get$pQ",function(){return H.u5()})
lazy($,"pR","$get$pR",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.pF
$.pF=t+1
t="expando$key$"+t}return new P.it(null,t,[P.K])})
lazy($,"qT","$get$qT",function(){return H.cP(H.lm({
toString:function(){return"$receiver$"}}))})
lazy($,"qU","$get$qU",function(){return H.cP(H.lm({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"qV","$get$qV",function(){return H.cP(H.lm(null))})
lazy($,"qW","$get$qW",function(){return H.cP(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"r_","$get$r_",function(){return H.cP(H.lm(void 0))})
lazy($,"r0","$get$r0",function(){return H.cP(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"qY","$get$qY",function(){return H.cP(H.qZ(null))})
lazy($,"qX","$get$qX",function(){return H.cP(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"r2","$get$r2",function(){return H.cP(H.qZ(void 0))})
lazy($,"r1","$get$r1",function(){return H.cP(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"p6","$get$p6",function(){return P.A8()})
lazy($,"fL","$get$fL",function(){var t,s
t=P.ct
s=new P.cd(0,P.A7(),null,[t])
s.dw(null,t)
return s})
lazy($,"fd","$get$fd",function(){return[]})
lazy($,"r8","$get$r8",function(){return H.z8([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2])})
lazy($,"ro","$get$ro",function(){return P.Az()})
lazy($,"fl","$get$fl",function(){return P.h7(P.K,L.dI)})
lazy($,"bx","$get$bx",function(){return H.a([],[S.bl])})
lazy($,"pN","$get$pN",function(){return P.h7(P.H,Z.fz)})
lazy($,"fY","$get$fY",function(){return P.h7(P.K,B.e_)})
lazy($,"qt","$get$qt",function(){return H.a([],[A.a3])})
lazy($,"ho","$get$ho",function(){return P.h7(P.K,T.eb)})
lazy($,"aj","$get$aj",function(){return H.a([],[U.ae])})
lazy($,"b","$get$b",function(){return P.a5(null,null,null,G.a2)})
lazy($,"ov","$get$ov",function(){return A.eu(255,0,255,255)})
lazy($,"ko","$get$ko",function(){return new F.h9(!1,"Path Utils")})
lazy($,"kn","$get$kn",function(){return P.h7(P.dx,P.K)})
lazy($,"c5","$get$c5",function(){return H.a([],[D.c_])})})()
var u={
createNewIsolate:function(){return $},
staticFunctionNameToClosure:function(a){var t=getGlobalFromName(a)
var s=t.$tearOff
return s()},
classIdExtractor:function(a){return a.constructor.name},
classFieldsExtractor:function(a){var t=a.constructor
var s=t.$cachedFieldNames
if(!s){var r=new t()
s=t.$cachedFieldNames=Object.keys(r)}var q=new Array(s.length)
for(var p=0;p<s.length;p++)q[p]=a[s[p]]
return q},
instanceFromClassId:function(a){var t=getGlobalFromName(a)
return new t()},
initializeEmptyInstance:function(a,b,c){var t=b.constructor
var s=Object.keys(b)
if(s.length!=c.length)throw new Error("Mismatch during deserialization.")
for(var r=0;r<c.length;r++)b[s[r]]=c[r]
return b},
mangledGlobalNames:{K:"int",V:"double",cr:"num",H:"String",cw:"bool",ct:"Null",I:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,ret:P.cw,args:[[P.I,E.eE]]},{func:1,v:true},{func:1,v:true,args:[P.aZ]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,v:true,args:[P.aZ],opt:[P.dr]},{func:1,ret:P.H,args:[P.K]},{func:1,ret:W.cT,args:[P.K]},{func:1,v:true,args:[,P.dr]},{func:1,ret:P.cw,args:[P.aZ]},{func:1,ret:W.bP,args:[P.K]},{func:1,ret:W.ed,args:[P.K]},{func:1,ret:P.H,args:[P.H]},{func:1,ret:P.K,args:[P.bk,P.bk]},{func:1},{func:1,v:true,args:[P.H]}],
interceptorsByTag:null,
leafTags:null};(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(convertToFastObject(n))[0]}
u.getIsolateTag=function(a){return t("___dart_"+a+u.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
u.isolateTag=o
break}}u.dispatchPropertyName=u.getIsolateTag("dispatch_record")}()
setOrUpdateInterceptorsByTag({CanvasGradient:J.R,CanvasPattern:J.R,CanvasRenderingContext2D:J.R,Client:J.R,DOMImplementation:J.R,MediaError:J.R,MediaSession:J.R,PositionError:J.R,PushMessageData:J.R,Range:J.R,TextMetrics:J.R,WindowClient:J.R,SVGAnimatedLength:J.R,SVGAnimatedLengthList:J.R,SVGAnimatedNumber:J.R,SVGAnimatedNumberList:J.R,SVGAnimatedString:J.R,WebGLRenderingContext:J.R,SQLError:J.R,ArrayBuffer:H.eP,ArrayBufferView:H.e7,DataView:H.k3,Float32Array:H.k4,Float64Array:H.k5,Int16Array:H.k6,Int32Array:H.k7,Int8Array:H.k8,Uint16Array:H.k9,Uint32Array:H.ka,Uint8ClampedArray:H.hc,CanvasPixelArray:H.hc,Uint8Array:H.eW,HTMLBRElement:W.ad,HTMLCanvasElement:W.ad,HTMLContentElement:W.ad,HTMLDListElement:W.ad,HTMLDataListElement:W.ad,HTMLDetailsElement:W.ad,HTMLDialogElement:W.ad,HTMLDivElement:W.ad,HTMLHRElement:W.ad,HTMLHeadElement:W.ad,HTMLHeadingElement:W.ad,HTMLHtmlElement:W.ad,HTMLLIElement:W.ad,HTMLLabelElement:W.ad,HTMLLegendElement:W.ad,HTMLMenuElement:W.ad,HTMLMenuItemElement:W.ad,HTMLMeterElement:W.ad,HTMLModElement:W.ad,HTMLOListElement:W.ad,HTMLOptGroupElement:W.ad,HTMLOptionElement:W.ad,HTMLParagraphElement:W.ad,HTMLPictureElement:W.ad,HTMLPreElement:W.ad,HTMLProgressElement:W.ad,HTMLQuoteElement:W.ad,HTMLScriptElement:W.ad,HTMLShadowElement:W.ad,HTMLSourceElement:W.ad,HTMLSpanElement:W.ad,HTMLStyleElement:W.ad,HTMLTableCaptionElement:W.ad,HTMLTableCellElement:W.ad,HTMLTableDataCellElement:W.ad,HTMLTableHeaderCellElement:W.ad,HTMLTableColElement:W.ad,HTMLTableElement:W.ad,HTMLTableRowElement:W.ad,HTMLTableSectionElement:W.ad,HTMLTemplateElement:W.ad,HTMLTitleElement:W.ad,HTMLTrackElement:W.ad,HTMLUListElement:W.ad,HTMLUnknownElement:W.ad,HTMLDirectoryElement:W.ad,HTMLFontElement:W.ad,HTMLFrameElement:W.ad,HTMLMarqueeElement:W.ad,HTMLElement:W.ad,HTMLAnchorElement:W.dG,HTMLAreaElement:W.hR,HTMLBaseElement:W.hZ,Blob:W.fm,HTMLBodyElement:W.i0,HTMLButtonElement:W.es,CDATASection:W.da,CharacterData:W.da,Comment:W.da,ProcessingInstruction:W.da,Text:W.da,CSSStyleDeclaration:W.dL,MSStyleCSSProperties:W.dL,CSS2Properties:W.dL,DocumentFragment:W.ft,ShadowRoot:W.ft,DOMError:W.fu,FileError:W.fu,DOMException:W.ij,DOMRectReadOnly:W.fv,DOMTokenList:W.fw,Element:W.cT,HTMLEmbedElement:W.iq,ErrorEvent:W.ex,AnimationEvent:W.Q,AnimationPlayerEvent:W.Q,ApplicationCacheErrorEvent:W.Q,AutocompleteErrorEvent:W.Q,BeforeInstallPromptEvent:W.Q,BeforeUnloadEvent:W.Q,BlobEvent:W.Q,ClipboardEvent:W.Q,CloseEvent:W.Q,CompositionEvent:W.Q,CustomEvent:W.Q,DeviceLightEvent:W.Q,DeviceMotionEvent:W.Q,DeviceOrientationEvent:W.Q,ExtendableEvent:W.Q,ExtendableMessageEvent:W.Q,FetchEvent:W.Q,FocusEvent:W.Q,FontFaceSetLoadEvent:W.Q,GamepadEvent:W.Q,GeofencingEvent:W.Q,HashChangeEvent:W.Q,InstallEvent:W.Q,KeyboardEvent:W.Q,MediaEncryptedEvent:W.Q,MediaKeyMessageEvent:W.Q,MediaQueryListEvent:W.Q,MediaStreamEvent:W.Q,MediaStreamTrackEvent:W.Q,MessageEvent:W.Q,MIDIConnectionEvent:W.Q,MIDIMessageEvent:W.Q,MouseEvent:W.Q,DragEvent:W.Q,NotificationEvent:W.Q,PageTransitionEvent:W.Q,PointerEvent:W.Q,PopStateEvent:W.Q,PresentationConnectionAvailableEvent:W.Q,PresentationConnectionCloseEvent:W.Q,ProgressEvent:W.Q,PromiseRejectionEvent:W.Q,PushEvent:W.Q,RelatedEvent:W.Q,RTCDataChannelEvent:W.Q,RTCDTMFToneChangeEvent:W.Q,RTCIceCandidateEvent:W.Q,RTCPeerConnectionIceEvent:W.Q,SecurityPolicyViolationEvent:W.Q,ServicePortConnectEvent:W.Q,ServiceWorkerMessageEvent:W.Q,SpeechRecognitionEvent:W.Q,StorageEvent:W.Q,SyncEvent:W.Q,TextEvent:W.Q,TouchEvent:W.Q,TrackEvent:W.Q,TransitionEvent:W.Q,WebKitTransitionEvent:W.Q,UIEvent:W.Q,WheelEvent:W.Q,ResourceProgressEvent:W.Q,USBConnectionEvent:W.Q,IDBVersionChangeEvent:W.Q,SVGZoomEvent:W.Q,AudioProcessingEvent:W.Q,OfflineAudioCompletionEvent:W.Q,WebGLContextEvent:W.Q,Event:W.Q,InputEvent:W.Q,MediaStream:W.dM,MessagePort:W.dM,EventTarget:W.dM,HTMLFieldSetElement:W.iZ,File:W.bP,FileList:W.fH,HTMLFormElement:W.fK,XMLHttpRequest:W.df,XMLHttpRequestEventTarget:W.fM,HTMLIFrameElement:W.jb,HTMLImageElement:W.dZ,HTMLInputElement:W.jf,HTMLKeygenElement:W.jB,HTMLLinkElement:W.eI,Location:W.jM,HTMLMapElement:W.jQ,HTMLAudioElement:W.eN,HTMLMediaElement:W.eN,HTMLVideoElement:W.eN,HTMLMetaElement:W.jX,MIDIOutput:W.jY,MIDIInput:W.eO,MIDIPort:W.eO,Navigator:W.kb,NavigatorUserMediaError:W.kc,Document:W.b9,HTMLDocument:W.b9,XMLDocument:W.b9,Node:W.b9,NodeList:W.hd,RadioNodeList:W.hd,HTMLObjectElement:W.kf,HTMLOutputElement:W.ki,HTMLParamElement:W.kl,HTMLSelectElement:W.hp,HTMLSlotElement:W.kP,SpeechRecognitionError:W.kT,SpeechSynthesisEvent:W.kU,HTMLTextAreaElement:W.lc,Window:W.hv,DOMWindow:W.hv,Attr:W.ed,ClientRect:W.lP,DocumentType:W.lW,DOMRect:W.lX,HTMLFrameSetElement:W.mg,NamedNodeMap:W.f8,MozNamedAttrMap:W.f8,ServiceWorker:W.mF,SVGAElement:P.hP,SVGAnimateElement:P.d8,SVGAnimateMotionElement:P.d8,SVGAnimateTransformElement:P.d8,SVGAnimationElement:P.d8,SVGSetElement:P.d8,SVGFEBlendElement:P.iu,SVGFEColorMatrixElement:P.iv,SVGFEComponentTransferElement:P.iw,SVGFECompositeElement:P.ix,SVGFEConvolveMatrixElement:P.iy,SVGFEDiffuseLightingElement:P.iz,SVGFEDisplacementMapElement:P.iA,SVGFEFloodElement:P.iB,SVGFEGaussianBlurElement:P.iC,SVGFEImageElement:P.iD,SVGFEMergeElement:P.iE,SVGFEMorphologyElement:P.iF,SVGFEOffsetElement:P.iG,SVGFESpecularLightingElement:P.iH,SVGFETileElement:P.iI,SVGFETurbulenceElement:P.iJ,SVGFilterElement:P.j_,SVGCircleElement:P.bQ,SVGClipPathElement:P.bQ,SVGDefsElement:P.bQ,SVGEllipseElement:P.bQ,SVGForeignObjectElement:P.bQ,SVGGElement:P.bQ,SVGGeometryElement:P.bQ,SVGLineElement:P.bQ,SVGPathElement:P.bQ,SVGPolygonElement:P.bQ,SVGPolylineElement:P.bQ,SVGRectElement:P.bQ,SVGSwitchElement:P.bQ,SVGGraphicsElement:P.bQ,SVGImageElement:P.jc,SVGLength:P.cg,SVGLengthList:P.jE,SVGMarkerElement:P.jT,SVGMaskElement:P.jU,SVGNumber:P.ch,SVGNumberList:P.kd,SVGPatternElement:P.kp,SVGScriptElement:P.kK,SVGDescElement:P.bJ,SVGDiscardElement:P.bJ,SVGFEDistantLightElement:P.bJ,SVGFEFuncAElement:P.bJ,SVGFEFuncBElement:P.bJ,SVGFEFuncGElement:P.bJ,SVGFEFuncRElement:P.bJ,SVGFEMergeNodeElement:P.bJ,SVGFEPointLightElement:P.bJ,SVGFESpotLightElement:P.bJ,SVGMetadataElement:P.bJ,SVGStopElement:P.bJ,SVGStyleElement:P.bJ,SVGTitleElement:P.bJ,SVGComponentTransferFunctionElement:P.bJ,SVGElement:P.bJ,SVGSVGElement:P.l6,SVGSymbolElement:P.l8,SVGTSpanElement:P.dv,SVGTextElement:P.dv,SVGTextPositioningElement:P.dv,SVGTextContentElement:P.dv,SVGTextPathElement:P.le,SVGUseElement:P.lu,SVGViewElement:P.lx,SVGLinearGradientElement:P.f6,SVGRadialGradientElement:P.f6,SVGGradientElement:P.f6,SVGCursorElement:P.mC,SVGFEDropShadowElement:P.mD,SVGMPathElement:P.mE,WebGL2RenderingContext:P.kA})
setOrUpdateLeafTags({CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,DOMImplementation:true,MediaError:true,MediaSession:true,PositionError:true,PushMessageData:true,Range:true,TextMetrics:true,WindowClient:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedString:true,WebGLRenderingContext:true,SQLError:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLParagraphElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DocumentFragment:true,ShadowRoot:true,DOMError:true,FileError:true,DOMException:true,DOMRectReadOnly:false,DOMTokenList:true,Element:false,HTMLEmbedElement:true,ErrorEvent:true,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,NotificationEvent:true,PageTransitionEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,WheelEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,SVGZoomEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,MediaStream:true,MessagePort:true,EventTarget:false,HTMLFieldSetElement:true,File:true,FileList:true,HTMLFormElement:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:false,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLKeygenElement:true,HTMLLinkElement:true,Location:true,HTMLMapElement:true,HTMLAudioElement:true,HTMLMediaElement:true,HTMLVideoElement:true,HTMLMetaElement:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,Navigator:true,NavigatorUserMediaError:true,Document:true,HTMLDocument:true,XMLDocument:true,Node:false,NodeList:true,RadioNodeList:true,HTMLObjectElement:true,HTMLOutputElement:true,HTMLParamElement:true,HTMLSelectElement:true,HTMLSlotElement:true,SpeechRecognitionError:true,SpeechSynthesisEvent:true,HTMLTextAreaElement:true,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DocumentType:true,DOMRect:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFESpecularLightingElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGEllipseElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRectElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGScriptElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGFEPointLightElement:true,SVGFESpotLightElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGUseElement:true,SVGViewElement:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,WebGL2RenderingContext:true})
H.hb.$nativeSuperclassTag="ArrayBufferView"
H.eS.$nativeSuperclassTag="ArrayBufferView"
H.eU.$nativeSuperclassTag="ArrayBufferView"
H.eQ.$nativeSuperclassTag="ArrayBufferView"
H.eT.$nativeSuperclassTag="ArrayBufferView"
H.eV.$nativeSuperclassTag="ArrayBufferView"
H.eR.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)};(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.rD(O.qS(),b)},[])
else (function(b){H.rD(O.qS(),b)})([])})})()
//# sourceMappingURL=ThemeController.dart.js.map
